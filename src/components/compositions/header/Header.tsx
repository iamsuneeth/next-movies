import { DarkModeSwitch } from '@/components/patterns/dark-mode-switch';
import { controlContainer, header } from './styles';
import { SiteSearch } from '@/components/patterns/site-search/SiteSearch';
import { ProfileButton } from '@/components/patterns/profile-button/ProfileButton';
import { vstack } from '@styled-system/patterns';
import { HamburgerMenu } from '@/components/patterns/hamburger-menu';
import { NavBar } from '@/components/patterns/nav-bar';
import { Image } from '@/components/elements/image';
import { css } from '@styled-system/css';

interface HeaderProps {}

export const Header = (props: HeaderProps) => {
  return (
    <div className={header}>
      <div
        className={vstack({
          borderRadius: '250px',
          zIndex: 1,
          padding: 2,
          position: 'absolute',
          left: '0.5rem',
          backgroundColor: {
            base: 'white/90',
            _dark: 'black/90',
          },
          xl: {
            display: 'none',
          },
        })}
      >
        <HamburgerMenu>
          <NavBar />
        </HamburgerMenu>
      </div>
      <div
        className={css({
          xl: {
            display: 'none',
          },
        })}
      >
        <Image src='/images/logo.svg' width={64} height={64} alt='logo' />
      </div>
      <div className={controlContainer}>
        <SiteSearch />
        <DarkModeSwitch />
        <ProfileButton />
      </div>
    </div>
  );
};
