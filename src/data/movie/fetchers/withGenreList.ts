import { WorkFlowContext } from '@/components/core/workflow';
import { tmdbService } from '@/services/tmdb';
import type { MovieListResponse } from '@/types/tmdb';

export type withGenreListFetcherProps = {
  page: number;
  genre: string;
  sort: string;
};

async function fetchMoviesWithGenre({
  props: { genre, sort = 'populartiy.desc', page },
}: WorkFlowContext<withGenreListFetcherProps>): Promise<MovieListResponse> {
  return tmdbService.fetch(`discover/movie`, {
    query: {
      page: page?.toString(),
      with_genres: genre,
      sort_by: sort,
    },
    messageOnError: `Failed to fetch movie list for genre id ${genre}`,
  });
}

export const withGenreList = {
  path: 'genreMovieList',
  fetcher: fetchMoviesWithGenre,
};
