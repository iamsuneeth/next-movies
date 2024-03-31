import { css, cva } from '@styled-system/css';

export const genreListRecipe = cva({
  base: {
    display: 'flex',
    rowGap: 0,
  },
  variants: {
    direction: {
      row: {
        flexDirection: 'row',
        rowGap: 0,
        gap: 2,
        flexWrap: 'wrap',
      },
      column: {
        flexDirection: 'column',
      },
    },
  },
  defaultVariants: {
    direction: 'column',
  },
});

export const icon = css({
  marginRight: 2,
});
