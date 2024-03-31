'use client';

import { Avatar } from '@/components/elements/avatar';
import { Button } from '@/components/elements/button/Button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/elements/dropdown-menu';
import { CircleUserRound, LogIn } from 'lucide-react';
import { login, logout } from './actions';
import { avatar, button } from './styles';

interface ProfileButtonProps {
  isAuthenticated: boolean;
}

export const ProfileButton = ({ isAuthenticated }: ProfileButtonProps) => {
  //do auth check here
  const IconToRender = isAuthenticated ? CircleUserRound : LogIn;
  let ComponentToRender = (
    <Button
      className={button}
      onClick={() => {
        const currentUrl = window.location;
        login({ url: `${currentUrl.pathname}${currentUrl.search}` });
      }}
    >
      <Avatar className={avatar}>
        <IconToRender />
      </Avatar>
    </Button>
  );
  if (isAuthenticated) {
    ComponentToRender = (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>{ComponentToRender}</DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>Create New List</DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>My Lists</DropdownMenuItem>
          <DropdownMenuItem onSelect={() => logout()}>Logout</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    );
  }
  return <div>{ComponentToRender}</div>;
};
