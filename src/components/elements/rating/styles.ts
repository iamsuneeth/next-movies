import { cva } from '@styled-system/css';

export const starRecipe = cva({
  base: {
    color: 'gray.400',
    position: 'relative',
    overflow: 'hidden',
    display: 'block',
    top: '-0.05em',
  },
  variants: {
    type: {
      filled: {
        _before: {
          position: 'absolute',
          overflow: 'hidden',
          display: 'block',
          height: '100%',
          left: 0,
          top: 0,
          width: 'var(--star-width, 100%)',
          content: '"⭑"',
          color: 'yellow.600',
          zIndex: 1,
        },
      },
      default: {},
    },
  },
  defaultVariants: {
    type: 'default',
  },
});
