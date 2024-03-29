import { WorkFlowContext } from '@/components/core/workflow';
import { TMDB_IMAGE_BASE_URL } from '@/constants/tmdb';
import { Person } from '@/types/tmdb';

function getImageURL(url: string) {
  return `${TMDB_IMAGE_BASE_URL}/w780${url}`;
}

function transformMPersonDetails(
  props: WorkFlowContext<any, { personDetails: Person }>,
) {
  const person = props.fetched.personDetails;
  return {
    ...person,
    profile_path: person.profile_path
      ? getImageURL(person.profile_path)
      : '/images/nothing.svg',
  };
}

export type personDetailsTransformerResponse = ReturnType<
  typeof transformMPersonDetails
>;

export const personDetailsTransformer = {
  path: 'personDetails',
  transformer: transformMPersonDetails,
};
