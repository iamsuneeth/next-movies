import { NavBar } from '@/components/patterns/nav-bar';
import { css } from '@styled-system/css';
import { HamburgerMenu } from '@/components/patterns/hamburger-menu';
import { vstack } from '@styled-system/patterns';

interface SideBarProps {}

export const SideBar = async (props: SideBarProps) => {
  return (
    <div
      className={css({
        height: '100%',
        lgDown: {
          height: '5rem',
          display: 'flex',
          alignItems: 'center',
          paddingInline: '1rem',
          lg: {
            paddingInline: '2rem',
          },
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
        <NavBar />
      </div>
    </div>
  );
};
