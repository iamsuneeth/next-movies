import * as React from 'react';
import { ChevronLeft, ChevronRight, MoreHorizontal } from 'lucide-react';
import { css, cx } from '@styled-system/css';

import { ButtonProps } from '@components/elements/button';
import { Link } from '@components/elements/link';
import { button } from '@styled-system/recipes';

const Pagination = ({ className, ...props }: React.ComponentProps<'nav'>) => (
  <nav
    role='navigation'
    aria-label='pagination'
    className={cx(
      css({
        marginInline: 'auto',
        display: 'flex',
        width: 'full',
        justifyContent: 'center',
      }),
      className,
    )}
    {...props}
  />
);
Pagination.displayName = 'Pagination';

const PaginationContent = React.forwardRef<
  HTMLUListElement,
  React.ComponentProps<'ul'>
>(({ className, ...props }, ref) => (
  <ul
    ref={ref}
    className={cx(
      css({
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 1,
      }),
      className,
    )}
    {...props}
  />
));
PaginationContent.displayName = 'PaginationContent';

const PaginationItem = React.forwardRef<
  HTMLLIElement,
  React.ComponentProps<'li'>
>(({ className, ...props }, ref) => (
  <li ref={ref} className={className} {...props} />
));
PaginationItem.displayName = 'PaginationItem';

type PaginationLinkProps = {
  isActive?: boolean;
} & Pick<ButtonProps, 'size'> &
  React.ComponentProps<typeof Link>;

const PaginationLink = ({ className, size, ...props }: PaginationLinkProps) => (
  <Link
    aria-current={props.isActive ? 'page' : undefined}
    className={cx(
      button({
        variant: props.isActive ? 'outline' : 'ghost',
        size,
      }),
      css({
        _hover: {
          textDecoration: 'none',
        },
      }),
      className,
    )}
    {...props}
  />
);
PaginationLink.displayName = 'PaginationLink';

const PaginationPrevious = ({
  className,
  ...props
}: React.ComponentProps<typeof PaginationLink>) => (
  <PaginationLink
    aria-label='Go to previous page'
    size='default'
    className={cx(
      css({
        gap: '1',
        paddingLeft: '2.5px',
      }),
      className,
    )}
    {...props}
  >
    <ChevronLeft
      className={css({
        height: 4,
        width: 4,
      })}
    />
    <span>Previous</span>
  </PaginationLink>
);
PaginationPrevious.displayName = 'PaginationPrevious';

const PaginationNext = ({
  className,
  ...props
}: React.ComponentProps<typeof PaginationLink>) => (
  <PaginationLink
    aria-label='Go to next page'
    size='default'
    className={cx(
      css({
        gap: '1',
        paddingRight: '2.5px',
      }),
      className,
    )}
    {...props}
  >
    <span>Next</span>
    <ChevronRight
      className={css({
        height: 4,
        width: 4,
      })}
    />
  </PaginationLink>
);
PaginationNext.displayName = 'PaginationNext';

const PaginationEllipsis = ({
  className,
  ...props
}: React.ComponentProps<'span'>) => (
  <span
    aria-hidden
    className={cx(
      css({
        display: 'flex',
        height: 9,
        width: 9,
        alignItems: 'center',
        justifyContent: 'center',
      }),
      className,
    )}
    {...props}
  >
    <MoreHorizontal
      className={css({
        height: 4,
        width: 4,
      })}
    />
    <span
      className={css({
        srOnly: true,
      })}
    >
      More pages
    </span>
  </span>
);
PaginationEllipsis.displayName = 'PaginationEllipsis';

export {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
};
