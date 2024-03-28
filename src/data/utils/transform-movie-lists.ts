import { TMDB_IMAGE_BASE_URL } from '@/constants/tmdb';
import { MovieListResponse } from '@/types/tmdb';

function getImageURL(url: string) {
  return `${TMDB_IMAGE_BASE_URL}/w342${url}`;
}

export function transformMovieList(movieList: MovieListResponse) {
  return {
    ...movieList,
    total_pages: movieList.total_pages > 500 ? 500 : movieList.total_pages,
    results: movieList.results.map((movie) => ({
      ...movie,
      poster_path: movie.poster_path
        ? getImageURL(movie.poster_path)
        : '/images/nothing.svg',
    })),
  };
}
