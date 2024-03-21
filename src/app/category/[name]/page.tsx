import { MovieLists } from '@/components/fetchers/movie-lists';
import { MovieList } from '@components/compositions/movie-list';
import { MovieListSkeleton } from '@components/compositions/movie-list/skeleton';
import { SectionHeader } from '@components/patterns/section-header';
import { flex } from '@styled-system/patterns';
import { Suspense } from 'react';

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

export default function CategoryPage({
  params,
  searchParams,
}: CategoryPageProps) {
  const { name } = params;
  const { page = 1 } = searchParams;
  const staticCategory = STATIC_CATEGORIES[name];
  if (!staticCategory) {
    return null;
  }

  return (
    <div
      className={flex({
        direction: 'column',
        gap: 4,
        paddingBottom: 8,
      })}
    >
      <SectionHeader {...staticCategory} />
      <Suspense fallback={<MovieListSkeleton />}>
        <MovieLists category={name} page={Number(page)}>
          <MovieList />
        </MovieLists>
      </Suspense>
    </div>
  );
}
