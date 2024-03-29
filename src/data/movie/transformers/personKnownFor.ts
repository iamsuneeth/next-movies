import { WorkFlowContext } from '@/components/core/workflow';
import { transformMovieList } from '@/data/utils/transform-movie-lists';
import { MovieListResponse } from '@/types/tmdb';

function transformPersonKnownForList(
  props: WorkFlowContext<any, { personKnownFor: MovieListResponse }>,
) {
  return transformMovieList(props.fetched.personKnownFor);
}

export const personKnownForTransformer = {
  path: 'movieList',
  transformer: transformPersonKnownForList,
};
