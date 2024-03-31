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
import { STATIC_MOVIE_CATEGORIES } from '@/constants/categories';
import { MenuLink } from '../hamburger-menu';
import { tmdbService } from '@/services/tmdbv3';
import { stack } from '@styled-system/patterns';
import { navBarIconRecipe } from './styles';
import { GenreList } from '../genre-list';

interface NavBarProps {}

interface NavBarIconProps {
  Icon: LucideIcon;
  fill?: boolean;
}
const NavBarIcon = ({ Icon, fill }: NavBarIconProps) => (
  <Icon
    className={navBarIconRecipe({
      type: fill ? 'filled' : undefined,
    })}
    size={20}
  />
);

const staticCategoryIcon: Record<string, ReactNode> = {
  popular: <NavBarIcon fill Icon={HeartIcon} />,
  top_rated: <NavBarIcon Icon={BarChart4} />,
  upcoming: <NavBarIcon Icon={ScrollTextIcon} />,
};

export const NavBar = async ({}: NavBarProps) => {
  const { genres } = await tmdbService.getGenres();
  return (
    <nav className={stack({ gap: 0 })}>
      <h2 className={h4()}>Discover</h2>
      {STATIC_MOVIE_CATEGORIES.map((category) => (
        <MenuLink
          href={{
            pathname: `/category/${category.id}`,
          }}
          key={category.id}
        >
          {staticCategoryIcon[category.id]}
          {category.name}
        </MenuLink>
      ))}
      <h2 className={h4()}>Genres</h2>
      <GenreList genres={genres} direction='column' />
    </nav>
  );
};
