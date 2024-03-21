import { Card } from '@/components/elements/card';
import { styled } from '@styled-system/jsx';
import { grid } from '@styled-system/patterns';

export const MovieListGridContainer = styled('div', {
  base: {
    ...grid.raw(),
    gridTemplateColumns: 'repeat(auto-fit, minmax(15rem, 20rem))',
    gap: '1rem',
  },
});
