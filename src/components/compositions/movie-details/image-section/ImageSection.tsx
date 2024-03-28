import { Image } from '@/components/elements/image';
import { css } from '@styled-system/css';

interface ImageSectionProps {
  url: string;
}

export const ImageSection = ({ url }: ImageSectionProps) => {
  return (
    <div
      className={css({
        display: 'none',
        lg: {
          display: 'block',
        },
      })}
    >
      <Image
        src={`https://image.tmdb.org/t/p/w1280/${url}`}
        alt={'movie poster'}
        width={780}
        height={1170}
        className={css({
          objectFit: 'cover',
          height: '100%',
          width: 'auto',
        })}
      />
    </div>
  );
};
