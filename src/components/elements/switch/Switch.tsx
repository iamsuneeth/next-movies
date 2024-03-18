'use client';

import * as React from 'react';
import * as SwitchPrimitive from '@radix-ui/react-switch';
import { styled } from '@styled-system/jsx';
import { css, cx } from '@styled-system/css';
import { switchRecipe } from '@styled-system/recipes';

const switchRootOverrides = css({
  backgroundColor: 'pink.800',
});

const switchThumbOverrides = css({
  backgroundColor: 'pink.600',
});

const BaseSwitch = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SwitchPrimitive.Root>
>(({ className, ...props }, ref) => {
  const styles = switchRecipe();

  return (
    <SwitchPrimitive.Root
      className={cx('peer', styles.root, switchRootOverrides, className)}
      {...props}
      ref={ref}
    >
      <SwitchPrimitive.Thumb
        className={cx(styles.thumb, switchThumbOverrides)}
      />
    </SwitchPrimitive.Root>
  );
});
BaseSwitch.displayName = SwitchPrimitive.Root.displayName;

export const Switch = styled(BaseSwitch);
