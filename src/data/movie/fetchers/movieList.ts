import { WorkFlowContext } from '@/components/core/workflow';
import { tmdbService } from '@/services/tmdb';
import type { MovieListResponse } from '@/types/tmdb';

export type MovieListFetcherProps = {
  listName: string;
  page: number;
};

async function getMovieList({
  props: { listName, page },
}: WorkFlowContext<MovieListFetcherProps>): Promise<MovieListResponse> {
  return tmdbService.fetch(`movie/${listName}`, {
    query: {
      page: page?.toString(),
    },
    messageOnError: `Failed to fetch ${listName} movie list`,
  });
}

export const movieListFetcher = {
  path: 'movieList',
  fetcher: getMovieList,
};
