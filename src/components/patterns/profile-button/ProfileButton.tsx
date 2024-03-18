import { Avatar } from '@/components/elements/avatar';
import { Button } from '@/components/elements/button/Button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/elements/dropdown-menu';
import { css } from '@styled-system/css';
import { CircleUserRound, LogIn, UserCircle } from 'lucide-react';
import { useState } from 'react';

interface ProfileButtonProps {}

export const ProfileButton = (props: ProfileButtonProps) => {
  //do auth check here
  const [loggedIn, setLoggedIn] = useState(false);
  const IconToRender = loggedIn ? CircleUserRound : LogIn;
  let ComponentToRender = (
    <Button
      className={css({
        backgroundColor: 'transparent',
        width: 10,
      })}
      onClick={() => setLoggedIn(true)}
    >
      <Avatar
        className={css({
          alignItems: 'center',
          justifyContent: 'center',
          _hover: { backgroundColor: 'pink.800/20' },
        })}
      >
        <IconToRender size={24} />
      </Avatar>
    </Button>
  );
  if (loggedIn) {
    ComponentToRender = (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>{ComponentToRender}</DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>Create New List</DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>My Lists</DropdownMenuItem>
          <DropdownMenuItem onSelect={() => setLoggedIn(false)}>
            Logout
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    );
  }
  return <div>{ComponentToRender}</div>;
};
