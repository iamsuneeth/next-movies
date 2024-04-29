import 'server-only';
import React, { Suspense } from 'react';
import dynamic from 'next/dynamic';
import {
  BorderlessCard,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/elements/card';
import { AspectRatio } from '@/components/elements/aspect-ratio';
import { Image } from '@/components/elements/image';
import { Rating } from '@/components/elements/rating';
import { MovieItem } from '@/components/patterns/movie-item';
import { MovieList } from '@/components/compositions/movie-list';
import { BasePage } from '@/components/layout/base-page';
import { SectionHeader } from '@/components/patterns/section-header';
import { MovieListWorkflow } from '@components/core/workflow/movie-list-workflow';
interface ComponentRendererProps {}
const MoviePagination = dynamic(
  () => import('@components/patterns/movie-pagination/MoviePagination'),
);

const Link = dynamic(() => import('@components/elements/link/Link'));

export const ComponentRenderer = (props: ComponentRendererProps) => {
  return <div></div>;
};

const getNoop = (name: string) => {
  function Noop() {
    return <div>{`No component exists with name ${name}`}</div>;
  }
  return Noop;
};

class ComponentRegistry {
  private static instance: ComponentRegistry;
  private components: Map<string, React.ComponentType<any>>;
  private constructor() {
    this.components = new Map(
      Object.entries({
        Fragment: React.Fragment,
        MoviePagination,
        Link,
        BorderlessCard,
        CardHeader,
        CardContent,
        AspectRatio,
        Image,
        CardTitle,
        Rating,
        MovieItemLink: MovieItem.Link,
        MovieItemHeader: MovieItem.Header,
        MovieItemContent: MovieItem.Content,
        MovieItemImage: MovieItem.Image,
        MovieItemCard: MovieItem.Card,
        MovieList,
        MovieItemTitle: MovieItem.Title,
        BasePage,
        SectionHeader,
        MovieListWorkflow: MovieListWorkflow,
      }),
    );
  }
  registerComponent(
    component: React.ComponentType<any>,
    { name }: { name: string },
  ) {
    if (this.components.get(name)) {
      console.info(`${name} already exists in the registry`);
    } else {
      this.components.set(name, component);
    }
  }
  getComponent(name: string, category?: string) {
    return this.components.get(name) || getNoop(name);
  }
  static getInstance(): ComponentRegistry {
    if (this.instance) {
      return this.instance;
    }
    this.instance = new ComponentRegistry();
    return this.instance;
  }
  render = ({ layout }) => {
    const Component = this.getComponent(
      layout.componentId,
      layout.componentCategory,
    );
    if (!Component) {
      return <div>{`No component exists with name ${name}`}</div>;
    }
    if (layout.children) {
      return (
        <Component {...layout.props}>
          {layout.children.map((child) => this.render({ layout: child }))}
        </Component>
      );
    }
    if (layout.async) {
      const Fallback = this.getComponent(layout.fallback);
      return (
        <Suspense fallback={<Fallback />}>
          <Component {...layout.props} />
        </Suspense>
      );
    }
    return <Component {...layout.props} />;
  };
}

export const componentRegistry = ComponentRegistry.getInstance();
