import { NavBar } from '@/components/patterns/nav-bar';
import { STATIC_MOVIE_CATEGORIES } from '@constants/categories';
import { css } from '@styled-system/css';
interface SideBarProps {}

export const SideBar = (props: SideBarProps) => {
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
        <NavBar staticCategories={STATIC_MOVIE_CATEGORIES} genres={[]} />
      </div>
    </div>
  );
};
