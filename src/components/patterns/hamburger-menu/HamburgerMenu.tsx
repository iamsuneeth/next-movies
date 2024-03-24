'use client';

import { Sheet, SheetContent, SheetTrigger } from '@/components/elements/sheet';
import { css } from '@styled-system/css';
import { MenuIcon } from 'lucide-react';
import React from 'react';
import { useClickAway } from 'react-use';

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
        <SheetTrigger
          onClick={toggleSheet}
          className={css({
            cursor: 'pointer',
          })}
        >
          <MenuIcon />
        </SheetTrigger>
        <SheetContent
          ref={sheetRef}
          className={css({
            height: '100vh',
            overflowY: 'auto',
          })}
        >
          {children}
        </SheetContent>
      </Sheet>
    </sheetContext.Provider>
  );
};

export const withHamburgerMenuContext = (
  Component: React.FC<{ onClick: () => void }> & Record<string, any>,
) => {
  const WrapperComponent = (props: React.ComponentProps<typeof Component>) => {
    const { toggleSheet } = React.useContext(sheetContext);
    return <Component {...props} onClick={toggleSheet} />;
  };
  WrapperComponent.displayName = `withHamburgerMenuContext(${Component.displayName})`;
};
