import { WorkFlowContext } from '@/components/core/workflow';
import { tmdbService } from '@/services/tmdb';
import type { MovieDetails } from '@/types/tmdb';

export type personDetailsFetcherProps = {
  id: string;
};

async function getPersonDetails({
  props: { id },
}: WorkFlowContext<personDetailsFetcherProps>): Promise<MovieDetails> {
  return tmdbService.fetch(`person/${id}`, {
    messageOnError: `Failed to fetch ${id} person details`,
  });
}

export const personDetailsFetcher = {
  path: 'personDetails',
  fetcher: getPersonDetails,
};
