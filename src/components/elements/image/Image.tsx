'use client';

import { css, cx } from '@styled-system/css';
import NextImage from 'next/image';
import { useRef } from 'react';
import { baseClass, opacityClass } from './styles';

export const Image = (props: React.ComponentProps<typeof NextImage>) => {
  const imgRef = useRef<HTMLImageElement>(null);
  return (
    <NextImage
      loading='lazy'
      {...props}
      ref={imgRef}
      className={cx(baseClass, opacityClass, props.className)}
      onLoad={(_) => imgRef.current?.classList.remove(opacityClass)}
    />
  );
};
