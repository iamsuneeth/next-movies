import { WorkFlowContext } from '@/components/core/workflow';
import { tmdbService } from '@/services/tmdb';
import type { MovieDetails } from '@/types/tmdb';

export type MovieDetailsProps = {
  id: string;
};

async function getMovieDetails({
  props: { id },
}: WorkFlowContext<MovieDetailsProps>): Promise<MovieDetails> {
  return tmdbService.fetch(`movie/${id}`, {
    query: {
      append_to_response: 'videos',
    },
    messageOnError: `Failed to fetch ${id} movie details`,
  });
}

export const movieDetailsFetcher = {
  path: 'movieDetails',
  fetcher: getMovieDetails,
};
