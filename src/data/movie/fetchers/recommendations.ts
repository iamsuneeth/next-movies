import { WorkFlowContext } from '@/components/core/workflow';
import { tmdbService } from '@/services/tmdbv3';
import type { MovieListResponse } from '@/types/tmdb';

export type movieRecommendationsFetcherProps = {
  movieId: string;
  page: number;
};

async function fetchMovieRecommendations({
  props: { movieId, page },
}: WorkFlowContext<movieRecommendationsFetcherProps>): Promise<MovieListResponse> {
  return tmdbService.fetch(`movie/${movieId}/recommendations`, {
    query: { page: page?.toString() },
    messageOnError: `Failed to fetch recommendations for movie id ${movieId}`,
  });
}

export const recommendationsFetcher = {
  path: 'recommendations',
  fetcher: fetchMovieRecommendations,
};
