'use client';

import * as React from 'react';
import * as SheetPrimitive from '@radix-ui/react-dialog';
import { createStyleContext } from '@shadow-panda/style-context';
import { styled } from '@styled-system/jsx';
import { sheet, icon } from '@styled-system/recipes';
import { usePathname } from 'next/navigation';

const { withProvider, withContext } = createStyleContext(sheet);

const Content = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof SheetPrimitive.Content>
>(({ className, children, ...props }, ref) => {
  return (
    <SheetPortal>
      <SheetOverlay />
      <SheetPrimitive.Content ref={ref} className={className} {...props}>
        {children}
      </SheetPrimitive.Content>
    </SheetPortal>
  );
});
Content.displayName = SheetPrimitive.Content.displayName;

export const Sheet = withProvider(styled(SheetPrimitive.Root), 'root');
export const SheetTrigger = withContext(
  styled(SheetPrimitive.Trigger),
  'trigger',
);
export const SheetClose = withContext(styled(SheetPrimitive.Close), 'close');
export const SheetPortal = withContext(styled(SheetPrimitive.Portal), 'portal');
export const SheetOverlay = withContext(
  styled(SheetPrimitive.Overlay),
  'overlay',
);
export const SheetContent = withContext(styled(Content), 'content');
export const SheetHeader = withContext(styled('div'), 'header');
export const SheetFooter = withContext(styled('div'), 'footer');
export const SheetTitle = withContext(styled(SheetPrimitive.Title), 'title');
export const SheetDescription = withContext(
  styled(SheetPrimitive.Description),
  'description',
);
