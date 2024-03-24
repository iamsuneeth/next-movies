import { Link } from '@/components/elements/link';
import { css } from '@styled-system/css';
import { h4 } from '@styled-system/recipes';
import {
  BarChart4,
  CircleDotIcon,
  HeartIcon,
  LucideIcon,
  ScrollTextIcon,
} from 'lucide-react';
import { ReactNode } from 'react';
import { genres } from './fixture';
import { STATIC_MOVIE_CATEGORIES } from '@/constants/categories';

type Category = {
  id: string | number;
  name: string;
};

interface NavBarProps {}

interface NavBarIconProps {
  Icon: LucideIcon;
  fill?: boolean;
}
const NavBarIcon = ({ Icon, fill }: NavBarIconProps) => (
  <Icon
    className={css({
      ...(fill && { fill: 'currentColor' }),
      stroke: 'currentColor',
      marginRight: 2,
    })}
    size={20}
  />
);

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

const staticCategoryIcon: Record<string, ReactNode> = {
  popular: <NavBarIcon fill Icon={HeartIcon} />,
  top_rated: <NavBarIcon Icon={BarChart4} />,
  upcoming: <NavBarIcon Icon={ScrollTextIcon} />,
};

export const NavBar = async ({}: NavBarProps) => {
  const { genres } = await fetchGenres();
  return (
    <nav
      className={css({
        display: 'flex',
        flexDirection: 'column',
      })}
    >
      <h2 className={h4()}>Discover</h2>
      {STATIC_MOVIE_CATEGORIES.map((category) => (
        <Link
          href={{
            pathname: `/category/${category.id}`,
          }}
          key={category.id}
        >
          {staticCategoryIcon[category.id]}
          {category.name}
        </Link>
      ))}
      <h2 className={h4()}>Genres</h2>
      {genres.map((genre) => (
        <Link
          href={{
            pathname: `/genre/${genre.id}`,
          }}
          key={genre.id}
        >
          <NavBarIcon Icon={CircleDotIcon} />
          {genre.name}
        </Link>
      ))}
    </nav>
  );
};
