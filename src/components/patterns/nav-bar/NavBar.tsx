import { Link } from '@/components/elements/link';
import { css } from '@styled-system/css';
import { h3 } from '@styled-system/recipes';
import {
  BarChart4,
  CircleDotIcon,
  HeartIcon,
  LucideIcon,
  ScrollTextIcon,
} from 'lucide-react';
import { ReactNode } from 'react';

type Category = {
  id: string | number;
  name: string;
};

interface NavBarProps {
  staticCategories: Array<Category>;
  genres: Array<Category>;
}

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

const staticCategoryIcon: Record<string, ReactNode> = {
  popular: <NavBarIcon fill Icon={HeartIcon} />,
  top_rated: <NavBarIcon Icon={BarChart4} />,
  upcoming: <NavBarIcon Icon={ScrollTextIcon} />,
};

export const NavBar = ({ staticCategories, genres }: NavBarProps) => {
  return (
    <nav
      className={css({
        display: 'flex',
        flexDirection: 'column',
      })}
    >
      <h2 className={h3()}>Discover</h2>
      {staticCategories.map((category) => (
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
      <h2 className={h3()}>Genres</h2>
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
