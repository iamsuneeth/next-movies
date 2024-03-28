import { WorkFlowContext } from '@/components/core/workflow';
import { tmdbService } from '@/services/tmdb';
import type { MovieListResponse } from '@/types/tmdb';

export type CreditsFetcherProps = {
  movieId: string;
};

async function getMovieList({
  props: { movieId },
}: WorkFlowContext<CreditsFetcherProps>): Promise<MovieListResponse> {
  return tmdbService.fetch(`movie/${movieId}/credits`, {
    messageOnError: `Failed to credits for ${movieId}`,
  });
}

export const CreditsFetcher = {
  path: 'credits',
  fetcher: getMovieList,
};
