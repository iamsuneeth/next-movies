import { WorkFlowContext } from '@/components/core/workflow';
import { tmdbService } from '@/services/tmdb';
import type { MovieListResponse } from '@/types/tmdb';

export type personKnownForFetcherProps = {
  page: number;
  id: string;
  sort?: string;
};

async function fetchPersonKnownFor({
  props: { id, sort = 'populartiy.desc', page },
}: WorkFlowContext<personKnownForFetcherProps>): Promise<MovieListResponse> {
  return tmdbService.fetch(`discover/movie`, {
    query: {
      with_cast: id,
      page: page.toString(),
      sort_by: sort,
    },
    messageOnError: `Failed to fetch movie list for person ${id}`,
  });
}

export const personKnownForFetcher = {
  path: 'personKnownFor',
  fetcher: fetchPersonKnownFor,
};
