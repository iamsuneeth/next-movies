'use client';

import { css } from '@styled-system/css';
import NextImage from 'next/image';
import { useRef } from 'react';

const baseClass = css({
  transition: 'opacity 0.5s ease-in-out',
});
const opacityClass = css({
  opacity: 0,
});

export const Image = (props: React.ComponentProps<typeof NextImage>) => {
  const imgRef = useRef<HTMLImageElement>(null);
  return (
    <NextImage
      loading='lazy'
      {...props}
      ref={imgRef}
      className={`${baseClass} ${opacityClass}`}
      onLoad={(_) => imgRef.current?.classList.remove(opacityClass)}
    />
  );
};