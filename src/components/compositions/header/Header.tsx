import { DarkModeSwitch } from '@/components/patterns/dark-mode-switch';
import { controlContainer, header } from './styles';
import { SiteSearch } from '@/components/patterns/site-search/SiteSearch';
import { ProfileButton } from '@/components/patterns/profile-button/ProfileButton';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@components/elements/sheet';
import { MenuIcon } from 'lucide-react';
import { SideBar } from '../side-bar';
import { vstack } from '@styled-system/patterns';
import { HamburgerMenu } from '@/components/patterns/hamburger-menu';
import { NavBar } from '@/components/patterns/nav-bar';

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
          lg: {
            display: 'none',
          },
        })}
      >
        <HamburgerMenu>
          <NavBar />
        </HamburgerMenu>
      </div>
      <div className={controlContainer}>
        <SiteSearch />
        <DarkModeSwitch />
        <ProfileButton />
      </div>
    </div>
  );
};
