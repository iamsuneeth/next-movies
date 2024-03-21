'use client';

import { cva, cx } from '@styled-system/css';
import NextLink from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';

const linkRecipe = cva({
  base: {
    display: 'flex',
    alignItems: 'center',
    paddingBlock: 2,
    marginBlock: 1,
    _hover: {
      textDecoration: 'underline',
      textUnderlineOffset: '3px',
    },
  },
  variants: {
    type: {
      active: {
        color: 'pink.700',
      },
      nonActive: {},
    },
  },
  defaultVariants: {
    type: 'nonActive',
  },
});

interface LinkProps extends React.ComponentProps<typeof NextLink> {
  isActive?: boolean;
}

export const Link = ({ className, ...props }: LinkProps) => {
  const pathName = usePathname();
  const currentURL =
    typeof props.href === 'string' ? props.href : props.href.pathname;
  let isActive = false;
  if (typeof props.isActive === 'boolean') {
    isActive = props.isActive;
  } else {
    isActive = pathName === currentURL;
  }

  return (
    <NextLink
      {...props}
      className={cx(
        linkRecipe({
          type: isActive ? 'active' : 'nonActive',
        }),
        className,
      )}
    ></NextLink>
  );
};
