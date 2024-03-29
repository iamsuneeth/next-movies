import { css, cx } from '@styled-system/css';
import { h2, h4 } from '@styled-system/recipes';

interface TitleSectionProps {
  title: string;
  subTitle?: string;
}

export const TitleSection = ({ title, subTitle }: TitleSectionProps) => {
  return (
    <section>
      <h1
        className={cx(
          h2(),
          css({
            borderBottom: 'none',
          }),
        )}
      >
        {title}
      </h1>
      <h2
        className={cx(
          h4(),
          css({
            color: {
              base: 'gray.500',
              _dark: 'gray.400',
            },
            fontWeight: 'bold',
            fontSize: '1em',
            textTransform: 'uppercase',
          }),
        )}
      >
        {subTitle}
      </h2>
    </section>
  );
};
