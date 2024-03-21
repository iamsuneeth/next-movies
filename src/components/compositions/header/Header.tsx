import { DarkModeSwitch } from '@/components/patterns/dark-mode-switch';
import { controlContainer, header } from './styles';
import { SiteSearch } from '@/components/patterns/site-search/SiteSearch';
import { ProfileButton } from '@/components/patterns/profile-button/ProfileButton';

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
