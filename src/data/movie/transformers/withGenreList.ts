import { WorkFlowContext } from '@/components/core/workflow';
import { transformMovieList } from '@/data/utils/transform-movie-lists';
import { MovieListResponse } from '@/types/tmdb';

function transformGenreMovieList(
  props: WorkFlowContext<any, { genreMovieList: MovieListResponse }>,
) {
  return transformMovieList(props.fetched.genreMovieList);
}

export const genreMovieListTransformer = {
  path: 'movieList',
  transformer: transformGenreMovieList,
};
