'use client';

import { Sheet, SheetContent, SheetTrigger } from '@/components/elements/sheet';
import { MenuIcon } from 'lucide-react';
import React, { type MouseEventHandler } from 'react';
import { useClickAway } from 'react-use';
import { Link } from '@/components/elements/link';
import { sheet } from './styles';

interface HamburgerMenuProps {
  children: React.ReactNode;
}

type SheetContext = {
  toggleSheet: () => void;
};

const sheetContext = React.createContext<SheetContext>({} as SheetContext);

export const HamburgerMenu = ({ children }: HamburgerMenuProps) => {
  const [sheetOpen, setSheetOpen] = React.useState(false);
  const sheetRef = React.useRef(null);
  const toggleSheet = React.useCallback(
    () => setSheetOpen((sheetOpen) => !sheetOpen),
    [],
  );

  useClickAway(sheetRef, () => {
    setSheetOpen(false);
  });

  return (
    <sheetContext.Provider value={{ toggleSheet }}>
      <Sheet side='left' open={sheetOpen}>
        <SheetTrigger onClick={toggleSheet}>
          <MenuIcon />
        </SheetTrigger>
        <SheetContent ref={sheetRef} className={sheet}>
          {children}
        </SheetContent>
      </Sheet>
    </sheetContext.Provider>
  );
};

export function MenuLink({
  children,
  ...props
}: React.ComponentProps<typeof Link>) {
  const { toggleSheet } = React.useContext(sheetContext);
  return (
    <Link {...props} onClick={toggleSheet}>
      {children}
    </Link>
  );
}
