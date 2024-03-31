import { cva } from '@styled-system/css';

export const navBarIconRecipe = cva({
  base: {
    stroke: 'currentColor',
    marginRight: 2,
  },
  variants: {
    type: {
      filled: {
        fill: 'currentColor',
      },
    },
  },
});
