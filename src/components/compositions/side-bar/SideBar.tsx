import { NavBar } from '@/components/patterns/nav-bar';
import { STATIC_MOVIE_CATEGORIES } from '@constants/categories';
import { css } from '@styled-system/css';
import { genres } from './fixture';
import { setTimeout } from 'timers/promises';
import { Sheet, SheetTrigger } from '@/components/elements/sheet';
import { HamburgerMenu } from '@/components/patterns/hamburger-menu';
import { vstack } from '@styled-system/patterns';

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
  const Child = (
    <NavBar staticCategories={STATIC_MOVIE_CATEGORIES} genres={genres} />
  );
  return (
    <div
      className={css({
        height: '100%',
        lgDown: {
          height: '5rem',
          display: 'flex',
          alignItems: 'center',
          paddingInline: '2rem',
        },
      })}
    >
      <div
        className={css({
          marginTop: '4rem',
          padding: '2rem',
          borderRight: 'base',
          height: '100%',
          display: 'none',
          lg: {
            display: 'block',
          },
        })}
      >
        <NavBar staticCategories={STATIC_MOVIE_CATEGORIES} genres={genres} />
      </div>
      <div
        className={vstack({
          borderRadius: '250px',
          padding: 2,
          zIndex: 1,
          backgroundColor: {
            base: 'white/90',
            _dark: 'black/90',
          },
          lg: {
            display: 'none',
          },
        })}
      >
        <HamburgerMenu>
          <NavBar staticCategories={STATIC_MOVIE_CATEGORIES} genres={genres} />
        </HamburgerMenu>
      </div>
    </div>
  );
};
