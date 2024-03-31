import { css } from '@styled-system/css';
import { hstack } from '@styled-system/patterns';

export const basicSection = hstack({
  justifyContent: 'space-between',
  alignItems: 'center',
});

export const ratingStyle = css({
  textTransform: 'uppercase',
});

export const infoStyle = css({
  textTransform: 'uppercase',
});
