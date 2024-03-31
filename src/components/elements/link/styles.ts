import { cva } from '@styled-system/css';

export const linkRecipe = cva({
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
        color: 'primary',
      },
      nonActive: {},
    },
  },
  defaultVariants: {
    type: 'nonActive',
  },
});
