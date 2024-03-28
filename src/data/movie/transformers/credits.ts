import { WorkFlowContext } from '@/components/core/workflow';
import { Credits } from '@/types/tmdb';
import { TMDB_IMAGE_BASE_URL } from '@/constants/tmdb';

function getImageURL(url: string) {
  return `${TMDB_IMAGE_BASE_URL}/w185${url}`;
}

function transformCredits(props: WorkFlowContext<any, { credits: Credits }>) {
  return {
    ...props.fetched.credits,
    cast: props.fetched.credits.cast.map((cast) => ({
      ...cast,
      profile_path: cast.profile_path
        ? getImageURL(cast.profile_path)
        : '/images/nothing.svg',
    })),
    crew: props.fetched.credits.crew.map((crew) => ({
      ...crew,
      profile_path: crew.profile_path
        ? getImageURL(crew.profile_path)
        : '/images/nothing.svg',
    })),
  };
}

export type creditTransformerResponse = ReturnType<typeof transformCredits>;

export const creditsTransformer = {
  path: 'credits',
  transformer: transformCredits,
};
