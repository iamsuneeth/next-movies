import { MovieList2 } from '@/components/compositions/movie-list/MovieList2';
import { componentRegistry } from '@/components/core/component-renderer';
import { withWorkflow } from '@/components/core/workflow';
import { MovieListFetcherProps, movieListFetcher } from '@/data/movie/fetchers';
import movieListTransformer from '@/data/movie/transformers/movieList';
import { MovieList, MovieListProps } from '@components/compositions/movie-list';
import { MovieListSkeleton } from '@components/compositions/movie-list/skeleton';
import { SectionHeader } from '@components/patterns/section-header';
import { flex } from '@styled-system/patterns';
import { Suspense } from 'react';

async function fetchLayoutConfig(props) {
  return layout;
}

const STATIC_CATEGORIES = {
  popular: {
    title: 'Popular',
    subTitle: 'movies',
  },
  top_rated: {
    title: 'Top Rated',
    subTitle: 'movies',
  },
  upcoming: {
    title: 'Upcoming',
    subTitle: 'movies',
  },
};

type CategoryPageProps = {
  params: {
    name: keyof typeof STATIC_CATEGORIES;
  };
  searchParams: {
    page?: number;
  };
};

export default async function CategoryPage({
  params,
  searchParams,
}: CategoryPageProps) {
  const { name } = params;
  const { page = 1 } = searchParams;
  const staticCategory = STATIC_CATEGORIES[name];
  if (!staticCategory) {
    return null;
  }

  const layout = await fetchLayoutConfig({ name, page });

  return componentRegistry.render(layout);
}

const layout = {
  layout: {
    componentCategory: 'layout',
    componentId: 'BasePage',
    children: [
      {
        componentCategory: 'pattern',
        componentId: 'SectionHeader',
        props: {
          title: 'Popular',
          subTitle: 'movies',
        },
      },
      {
        componentCategory: 'workflow',
        componentId: 'MovieListWorkflow',
        async: true, //enables suspense
        fallback: 'MovieListSkeleton',
      },
    ],
  },
};
