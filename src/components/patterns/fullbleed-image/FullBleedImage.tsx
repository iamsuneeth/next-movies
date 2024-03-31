import { Image } from '@/components/elements/image';
import { css } from '@styled-system/css';
import { coverImage, imageContainer } from './styles';

interface FullBleedImageProps {
  url: string;
}

export const FullBleedImage = ({ url }: FullBleedImageProps) => {
  return (
    <section className={imageContainer}>
      <Image
        src={`https://image.tmdb.org/t/p/w1280/${url}`}
        alt={'alt text'}
        width={1170}
        height={780}
        className={coverImage}
      />
    </section>
  );
};
