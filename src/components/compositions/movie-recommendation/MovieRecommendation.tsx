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

interface MovieRecommendationProps {
  id: string;
  page?: number;
}

export const MovieRecommendation = ({
  id,
  page = 1,
}: MovieRecommendationProps) => {
  const MovieListComponent = withWorkflow<
    movieRecommendationsFetcherProps,
    MovieListProps
  >(MovieList, {
    fetchers: [recommendationsFetcher],
    transformers: [recommendationsTransformer],
    fetcherProps: { movieId: id, page },
  });
  return (
    <div>
      <SectionHeader title='recommended' subTitle='movies' />
      <Suspense fallback={<MovieListSkeleton />}>
        <MovieListComponent page={page} />
      </Suspense>
    </div>
  );
};
