import { css, cx } from '@styled-system/css';
import { h1, h2 } from '@styled-system/recipes';

interface SectionHeaderProps {
  title: string;
  subTitle: string;
}

export const SectionHeader = ({ title, subTitle }: SectionHeaderProps) => {
  return (
    <div>
      <h1 className={cx(h1(), css({ textTransform: 'uppercase' }))}>{title}</h1>
      <h2 className={h2()}>{subTitle}</h2>
    </div>
  );
};
