'use client';

import { css, cva, cx } from '@styled-system/css';
import NextLink from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';
import { linkRecipe } from './styles';
import { button } from '@styled-system/recipes';

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
    />
  );
};

export function ButtonLink(props: LinkProps) {
  return (
    <Link
      className={cx(
        button({
          variant: 'outline',
        }),
        css({
          _hover: {
            textDecoration: 'none',
          },
        }),
      )}
      {...props}
    />
  );
}

export default Link;
