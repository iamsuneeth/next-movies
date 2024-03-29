import { css } from '@styled-system/css';

interface OverviewSectionProps {
  overview: string;
}

export const OverviewSection = ({ overview }: OverviewSectionProps) => {
  return (
    <section>
      <h4
        className={css({
          fontSize: '1rem',
          fontWeight: 'bold',
        })}
      >
        BIOGRAPHY
      </h4>
      <p>{overview}</p>
    </section>
  );
};
