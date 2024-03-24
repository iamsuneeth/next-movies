import { css, cx } from '@styled-system/css';

interface SectionHeaderProps {
  title: string;
  subTitle: string;
}

export const SectionHeader = ({ title, subTitle }: SectionHeaderProps) => {
  return (
    <div>
      <h1 className={cx(css({ textTransform: 'uppercase', textStyle: 'h2' }))}>
        {title}
      </h1>
      <h2
        className={css({
          textTransform: 'uppercase',
          textStyle: 'sm',
          fontWeight: 'bold',
          marginLeft: '1px',
          color: 'gray.400',
        })}
      >
        {subTitle}
      </h2>
    </div>
  );
};
