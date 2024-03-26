import { Rating } from '@/components/elements/rating';
import { css } from '@styled-system/css';
import { hstack } from '@styled-system/patterns';

interface BasicsSectionProps {}

export const BasicsSection = (props: BasicsSectionProps) => {
  return (
    <section
      className={hstack({
        justifyContent: 'space-between',
        alignItems: 'center',
      })}
    >
      <Rating
        value={7.5}
        className={css({
          fontSize: '2rem',
        })}
      />
      <span>90 min/english/2024</span>
    </section>
  );
};
