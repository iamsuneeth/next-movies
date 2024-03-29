import { Image } from '@/components/elements/image';
import { NavBar } from '@/components/patterns/nav-bar';
import { css } from '@styled-system/css';

interface SideBarProps {}

export const SideBar = async (props: SideBarProps) => {
  return (
    <div
      className={css({
        height: '100%',
        xlDown: {
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
        })}
      >
        <div
          className={css({
            display: 'flex',
            justifyContent: 'center',
          })}
        >
          <Image src='/images/logo.svg' width={128} height={128} alt='logo' />
        </div>
        <NavBar />
      </div>
    </div>
  );
};
