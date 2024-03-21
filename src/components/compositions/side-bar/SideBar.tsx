import { NavBar } from '@/components/patterns/nav-bar';
import { STATIC_MOVIE_CATEGORIES } from '@constants/categories';
import { css } from '@styled-system/css';
import { genres } from './fixture';
import { setTimeout } from 'timers/promises';

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

interface SideBarProps {}

export const SideBar = async (props: SideBarProps) => {
  const { genres } = await fetchGenres();
  return (
    <div
      className={css({
        height: '100%',
      })}
    >
      <div
        className={css({
          marginTop: '4rem',
          padding: '2rem',
          borderRight: 'base',
          height: '100%',
        })}
      >
        <NavBar staticCategories={STATIC_MOVIE_CATEGORIES} genres={genres} />
      </div>
    </div>
  );
};
