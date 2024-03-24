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

interface HeaderProps {}

export const Header = (props: HeaderProps) => {
  return (
    <div className={header}>
      <div className={controlContainer}>
        <SiteSearch />
        <DarkModeSwitch />
        <ProfileButton />
      </div>
    </div>
  );
};
