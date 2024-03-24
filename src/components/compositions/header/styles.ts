import { css } from '@styled-system/css';

export const header = css({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'end',
  alignItems: 'center',
  gap: 4,
  width: '100%',
  height: '5rem',
  padding: 2,
  lgDown: {
    gap: 2,
  },
});

export const controlContainer = css({
  display: 'flex',
  gap: 2,
  alignItems: 'center',
  padding: 2,
  borderStartRadius: '250px',
  backgroundColor: {
    base: 'white/90',
    _dark: 'black/90',
  },
});
