import { MovieList } from '@components/compositions/movie-list';
import { MovieListSkeleton } from '@components/compositions/movie-list/skeleton';
import { SectionHeader } from '@components/patterns/section-header';
import { flex } from '@styled-system/patterns';
import { Suspense } from 'react';
import { genres } from './fixture';
import { Discover } from '@/components/fetchers/discover';
import { MovieSort } from '@/components/patterns/movie-sort';

async function fetchGenres() {
  // await setTimeout(2000);
  return genres;
  //fetch genres for movies using the movie api
  const response = await fetch(
    `https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}&language=en-US`,
  );
  if (!response.ok) {
    throw new Error('Failed to fetch category');
  }
  const data = await response.json();
}

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
  const { genres } = await fetchGenres();
  const currentGenre = genres.find((genre) => genre.id === +id);
  if (!currentGenre) {
    return null;
  }

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
      <Suspense fallback={<MovieListSkeleton />}>
        <Discover
          genres={[`${currentGenre.id}`]}
          page={Number(page)}
          sort={sort}
        >
          <MovieList />
        </Discover>
      </Suspense>
    </div>
  );
}
