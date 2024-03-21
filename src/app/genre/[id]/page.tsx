import { MovieList } from '@components/compositions/movie-list';
import { MovieListSkeleton } from '@components/compositions/movie-list/skeleton';
import { SectionHeader } from '@components/patterns/section-header';
import { flex } from '@styled-system/patterns';
import { Suspense } from 'react';
import { genres } from './fixture';
import { Discover } from '@/components/fetchers/discover';

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
};

export default async function GenrePage({ params }: GenrePageProps) {
  const { id } = params;
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
      })}
    >
      <SectionHeader title={currentGenre.name} subTitle='Movie' />
      <Suspense fallback={<MovieListSkeleton />}>
        <Discover genres={[`${currentGenre.id}`]}>
          <MovieList />
        </Discover>
      </Suspense>
    </div>
  );
}
