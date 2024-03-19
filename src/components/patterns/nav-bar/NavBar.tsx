'use client';
import { STATIC_MOVIE_CATEGORIES } from '@constants/categories';
import { css, cva } from '@styled-system/css';
import { h2 } from '@styled-system/recipes';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

type Category = {
  id: string;
  name: string;
};

interface NavBarProps {
  staticCategories: Array<Category>;
  genres: Array<Category>;
}

const linkRecipe = cva({
  base: {},
  variants: {
    type: {
      active: {
        color: 'pink.700',
      },
      nonActive: {},
    },
  },
  defaultVariants: {
    type: 'nonActive',
  },
});

export const NavBar = ({ staticCategories }: NavBarProps) => {
  const pathName = usePathname();
  return (
    <nav
      className={css({
        display: 'flex',
        flexDirection: 'column',
      })}
    >
      <h2 className={h2()}>Discover</h2>
      {staticCategories.map((category) => (
        <Link
          href={{
            pathname: `/category/${category.id}`,
          }}
          key={category.id}
          className={linkRecipe({
            type:
              pathName === `/category/${category.id}` ? 'active' : 'nonActive',
          })}
        >
          {category.name}
        </Link>
      ))}
    </nav>
  );
};
