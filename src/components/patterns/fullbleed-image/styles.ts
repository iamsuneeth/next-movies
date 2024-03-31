import { css } from '@styled-system/css';

export const imageContainer = css({
  lg: {
    display: 'none',
  },
  marginInline: '-1rem',
  height: '45vh',
});

export const coverImage = css({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
});
