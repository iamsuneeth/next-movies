import { WorkFlowContext } from '@/components/core/workflow';
import { TMDB_IMAGE_BASE_URL } from '@/constants/tmdb';
import { MovieDetails } from '@/types/tmdb';

function getImageURL(url: string) {
  return `${TMDB_IMAGE_BASE_URL}/w780${url}`;
}

function transformMovieDetails(
  props: WorkFlowContext<any, { movieDetails: MovieDetails }>,
) {
  const movie = props.fetched.movieDetails;
  return {
    ...movie,
    poster_path: movie.poster_path
      ? getImageURL(movie.poster_path)
      : '/images/nothing.svg',
    backdrop_path: movie.backdrop_path
      ? getImageURL(movie.backdrop_path)
      : '/images/nothing.svg',
  };
}

export type movieDetailsTransformerResponse = ReturnType<
  typeof transformMovieDetails
>;

export const movieDetailsTransformer = {
  path: 'movieDetails',
  transformer: transformMovieDetails,
};
