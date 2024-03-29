import { SectionHeader } from '@/components/patterns/section-header';
import { Suspense } from 'react';
import { MovieListSkeleton } from '../movie-list/skeleton';
import { MovieList, MovieListProps } from '../movie-list';
import { withWorkflow } from '@/components/core/workflow';
import {
  movieRecommendationsFetcherProps,
  recommendationsFetcher,
} from '@/data/movie/fetchers/recommendations';
import { recommendationsTransformer } from '@/data/movie/transformers/recommendations';
import {
  personKnownForFetcher,
  personKnownForFetcherProps,
} from '@/data/movie/fetchers';
import { personKnownForTransformer } from '@/data/movie/transformers';
import { MovieSort } from '@/components/patterns/movie-sort';
import { css } from '@styled-system/css';

interface PersonKnownForProps {
  id: string;
  page?: number;
  sort?: string;
}

export const PersonKnownFor = ({ id, page = 1, sort }: PersonKnownForProps) => {
  const MovieListComponent = withWorkflow<
    personKnownForFetcherProps,
    MovieListProps
  >(MovieList, {
    fetchers: [personKnownForFetcher],
    transformers: [personKnownForTransformer],
    fetcherProps: { id, page, sort },
  });
  return (
    <div>
      <SectionHeader title='Known for' subTitle='movies' />
      <div
        className={css({
          height: 2,
        })}
      ></div>
      <MovieSort />
      <Suspense fallback={<MovieListSkeleton />}>
        <MovieListComponent page={page} />
      </Suspense>
    </div>
  );
};
