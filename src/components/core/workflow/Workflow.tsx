interface WorkflowProps<T> {
  fetchers: Array<{
    path: string;
    fetcher: Function;
  }>;
  transformers: Array<{
    path: string;
    transformer: Function;
  }>;
  fetcherProps: T;
}

export type WorkFlowContext<
  T = any,
  Fetched = Record<string, any>,
  Transformed = Record<string, any>,
> = {
  props: Readonly<T>;
  fetched: Fetched;
  transformed: Transformed;
};

export function withWorkflow<T, R extends { data: Record<string, any> }>(
  Component: React.FunctionComponent<R>,
  { fetchers, transformers, fetcherProps }: WorkflowProps<T>,
) {
  async function WorkflowComponent(props: Omit<R, 'data'>) {
    const context: WorkFlowContext<T> = {
      props: Object.freeze(fetcherProps),
      fetched: {},
      transformed: {},
    };

    await Promise.all(
      fetchers.map(async ({ fetcher, path }) => {
        context.fetched[path] = await fetcher(context);
      }),
    );

    await Promise.all(
      transformers.map(async ({ transformer, path }) => {
        context.transformed[path] = await transformer(context);
      }),
    );
    const componentProps = { ...props, data: context.transformed } as R;
    return <Component {...componentProps} />;
  }

  WorkflowComponent.displayName = `Workflow(${Component.displayName || Component.name})`;
  return WorkflowComponent;
}
