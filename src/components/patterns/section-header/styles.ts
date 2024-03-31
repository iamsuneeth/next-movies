import { css, cva } from '@styled-system/css';

export const titleRecipe = cva({
  base: {
    textStyle: 'h2',
  },
  variants: {
    type: {
      'section-header': {
        textTransform: 'uppercase',
      },
      'title-section': {
        textTransform: 'none',
      },
      'sub-section': {
        textStyle: 'h5',
        textTransform: 'uppercase',
      },
    },
  },
  defaultVariants: {
    type: 'section-header',
  },
});

export const subTitleRecipe = cva({
  base: {
    textStyle: 'h4',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    color: {
      base: 'gray.500',
      _dark: 'gray.400',
    },
  },
  variants: {
    type: {
      'section-header': {
        marginLeft: '1px',
        textStyle: 'sm',
      },
      'title-section': {
        fontSize: '1em',
      },
      'sub-section': {
        textStyle: 'h5',
        fontSize: '0.75em',
      },
    },
  },
  defaultVariants: {
    type: 'section-header',
  },
});
