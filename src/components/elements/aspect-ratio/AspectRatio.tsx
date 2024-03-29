import { css } from '@styled-system/css';
import { CSSProperties } from 'react';

interface AspectRatioProps {
  width: number;
  height: number;
  children: React.ReactNode;
}

export const AspectRatio = ({ width, height, children }: AspectRatioProps) => {
  return (
    <div
      className={css({
        aspectRatio: 'var(--aspect-ratio)',
        overflow: 'hidden',
      })}
      style={
        {
          '--aspect-ratio': `${width}/${height}`,
        } as CSSProperties
      }
    >
      {children}
    </div>
  );
};
