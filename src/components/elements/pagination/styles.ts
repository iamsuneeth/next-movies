import { css } from '@styled-system/css';
import { PaginationEllipsis } from '.';

export const pagination = css({
  marginInline: 'auto',
  display: 'flex',
  width: 'full',
  justifyContent: 'center',
});
export const paginationContent = css({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  gap: 1,
});

export const paginationEllipsis = css({
  display: 'flex',
  height: 9,
  width: 9,
  alignItems: 'center',
  justifyContent: 'center',
});
