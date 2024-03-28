import { Image } from '@/components/elements/image';
import { css } from '@styled-system/css';

interface ImageSectionProps {
  url: string;
}

export const ImageSection = ({ url }: ImageSectionProps) => {
  return (
    <section
      className={css({
        lg: {
          display: 'none',
        },
        marginInline: '-1rem',
        height: '45vh',
      })}
    >
      <Image
        src={`https://image.tmdb.org/t/p/w1280/${url}`}
        alt={'sdsd'}
        width={1170}
        height={780}
        className={css({
          width: '100%',
          height: '100%',
          objectFit: 'cover',
        })}
      />
    </section>
  );
};
