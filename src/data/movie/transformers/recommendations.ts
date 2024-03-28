import { WorkFlowContext } from '@/components/core/workflow';
import { transformMovieList } from '@/data/utils/transform-movie-lists';
import { MovieListResponse } from '@/types/tmdb';

function transformRecommendations(
  props: WorkFlowContext<any, { recommendations: MovieListResponse }>,
) {
  return transformMovieList(props.fetched.recommendations);
}

export const recommendationsTransformer = {
  path: 'movieList',
  transformer: transformRecommendations,
};
