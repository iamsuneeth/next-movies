import { WorkFlowContext } from '@/components/core/workflow';
import { MovieListResponse } from '@/types/tmdb';
import { transformMovieList as transformList } from '@/data/utils/transform-movie-lists';

function transformMovieList(
  props: WorkFlowContext<any, { movieList: MovieListResponse }>,
) {
  return transformList(props.fetched.movieList);
}

export type movieListTransformerResponse = ReturnType<
  typeof transformMovieList
>;

const movieListTransformer = {
  path: 'movieList',
  transformer: transformMovieList,
};

export default movieListTransformer;
