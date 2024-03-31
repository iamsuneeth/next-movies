import { css } from '@styled-system/css';

export const movieItemLink = css({
  padding: 0,
  margin: 0,
  _hover: {
    textDecoration: 'none',
    '& img': {
      transform: 'scale(1.05)',
    },
  },
});

export const movieItemCard = css({ width: '100%' });

export const movieItemCardContent = css({
  paddingInline: 0,
});

export const movieItemCardHeader = css({
  paddingInline: 0,
});

export const movieItemImage = css({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  transition: 'transform 0.3s',
});
