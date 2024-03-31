import { aspectRatioRoot } from './styles';

interface AspectRatioProps {
  width: number;
  height: number;
  children: React.ReactNode;
}

export const AspectRatio = ({ width, height, children }: AspectRatioProps) => {
  return (
    <div
      className={aspectRatioRoot}
      style={{
        '--aspect-ratio': `${width}/${height}`,
      }}
    >
      {children}
    </div>
  );
};
