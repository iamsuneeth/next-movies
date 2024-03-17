'use client';
import { DarkModeSwitch } from '@/components/patterns/dark-mode-switch';

interface HeaderProps {}

export const Header = (props: HeaderProps) => {
  return (
    <div>
      <DarkModeSwitch />
    </div>
  );
};
