import { css } from '@styled-system/css';

export const container = css({
  display: 'flex',
  alignItems: 'center',
  gap: 1,
});

export const button = css({
  cursor: 'pointer',
  fontSize: '1rem',
});

export const switchStyle = css({
  // lgDown: {
  //   height: '1rem',
  //   width: '1.75rem',
  //   '& .switchRecipe__thumb': {
  //     height: '0.75rem',
  //     width: '0.75rem',
  //     '&[data-state=checked]': {
  //       '--shadow-panda-translate-x': '0.75rem',
  //     },
  //   },
  // },
});
