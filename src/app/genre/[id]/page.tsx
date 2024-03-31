import { MovieList, MovieListProps } from '@components/compositions/movie-list';
import { MovieListSkeleton } from '@components/compositions/movie-list/skeleton';
import { SectionHeader } from '@components/patterns/section-header';
import { flex } from '@styled-system/patterns';
import { Suspense } from 'react';
import { MovieSort } from '@/components/patterns/movie-sort';
import { withWorkflow } from '@/components/core/workflow';
import {
  withGenreList,
  withGenreListFetcherProps,
} from '@/data/movie/fetchers';
import { tmdbService } from '@/services/tmdbv3';
import { genreMovieListTransformer } from '@/data/movie/transformers';

type GenrePageProps = {
  params: {
    id: string;
  };
  searchParams: {
    page?: number;
    sort?: string;
  };
};

export default async function GenrePage({
  params,
  searchParams,
}: GenrePageProps) {
  const { id } = params;
  const { page = 1, sort = 'popularity.desc' } = searchParams;
  const { genres } = await tmdbService.getGenres();
  const currentGenre = genres.find((genre) => genre.id === +id);
  if (!currentGenre) {
    return null;
  }

  const MovieListComponent = withWorkflow<
    withGenreListFetcherProps,
    MovieListProps
  >(MovieList, {
    fetchers: [withGenreList],
    transformers: [genreMovieListTransformer],
    fetcherProps: { genre: id, page: Number(page), sort },
  });

  return (
    <div
      className={flex({
        direction: 'column',
        gap: 4,
        paddingBottom: 8,
        marginTop: '5rem',
      })}
    >
      <SectionHeader title={currentGenre.name} subTitle='Movie' />
      <MovieSort />
      <Suspense fallback={<MovieListSkeleton />} key={`${id}-${page}-${sort}`}>
        <MovieListComponent page={Number(page)} />
      </Suspense>
    </div>
  );
}
