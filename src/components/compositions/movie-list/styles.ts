import { styled } from '@styled-system/jsx';
import { grid } from '@styled-system/patterns';

export const MovieListGridContainer = styled('div', {
  base: {
    ...grid.raw(),
    '--grid-item-min-width': '10rem',
    gridTemplateColumns:
      'repeat(auto-fit, minmax(var(--grid-item-min-width), 1fr))',
    gap: '1rem',
    xl: {
      '--grid-item-min-width': '15rem',
    },
  },
});

export default MovieListGridContainer;
