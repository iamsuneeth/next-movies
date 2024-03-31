import { WorkFlowContext } from '@/components/core/workflow';
import { tmdbService } from '@/services/tmdbv3';
import type { MovieListResponse } from '@/types/tmdb';

export type MovieSearchFetcherProps = {
  q: string;
  page: number;
};

async function getMovieList({
  props: { q, page },
}: WorkFlowContext<MovieSearchFetcherProps>): Promise<MovieListResponse> {
  return tmdbService.fetch(`search/movie`, {
    query: {
      page: page.toString(),
      query: q,
    },
    messageOnError: `Failed to fetch movie list for query ${q}`,
  });
}

export const movieSearchFetcher = {
  path: 'movieList',
  fetcher: getMovieList,
};
