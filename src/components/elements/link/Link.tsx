'use client';

import { cva, cx } from '@styled-system/css';
import NextLink from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';

function getHref({
  params,
  linkHref,
}: {
  params: URLSearchParams;
  linkHref: LinkProps['href'];
}) {
  let href = {};
  if (typeof linkHref === 'string') {
    const parts = linkHref.split('?');
    if (parts.length > 1) {
      const searchParams = new URLSearchParams(parts[1]);
      const query = {
        ...Object.fromEntries(params.entries()),
        ...Object.fromEntries(searchParams.entries()),
      };
      href = {
        pathname: parts[0],
        query,
      };
    } else {
      href = {
        pathname: parts[0],
        query: Object.fromEntries(params.entries()),
      };
    }
  } else if (typeof linkHref === 'object') {
    href = {
      ...linkHref,
      query: {
        ...Object.fromEntries(params.entries()),
        ...(linkHref.query as object),
      },
    };
  }
  return href;
}

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
  keepSearch?: boolean;
}

export const Link = ({
  className,
  keepSearch,
  isActive,
  ...props
}: LinkProps) => {
  const pathName = usePathname();
  const params = useSearchParams();
  const href = keepSearch
    ? getHref({
        params,
        linkHref: props.href,
      })
    : props.href;

  const currentURL =
    typeof props.href === 'string' ? props.href : props.href.pathname;
  let isActiveLink = false;
  if (typeof isActive === 'boolean') {
    isActiveLink = isActive;
  } else {
    isActiveLink = pathName === currentURL;
  }

  return (
    <NextLink
      {...props}
      href={href}
      className={cx(
        linkRecipe({
          type: isActiveLink ? 'active' : 'nonActive',
        }),
        className,
      )}
    ></NextLink>
  );
};
