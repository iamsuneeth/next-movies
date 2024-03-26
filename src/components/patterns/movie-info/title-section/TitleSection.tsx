import { css, cx } from '@styled-system/css';
import { h2 } from '@styled-system/recipes';

interface TitleSectionProps {}

export const TitleSection = (props: TitleSectionProps) => {
  return (
    <section>
      <h1
        className={cx(
          h2(),
          css({
            borderBottom: 'none',
          }),
        )}
      >
        Kungfu panda 4
      </h1>
    </section>
  );
};
