import { Image } from '@components/elements/image';
import {
  BorderlessCard,
  CardContent,
  CardHeader,
  CardTitle,
} from '@components/elements/card';
import { Rating } from '@components/elements/rating';
import { TMDB_IMAGE_BASE_URL } from '@/constants/tmdb';
import { css } from '@styled-system/css';
import { Link } from '@/components/elements/link';
import { CSSProperties } from 'react';
import { AspectRatio } from '@/components/elements/aspect-ratio';

function getImageURL({ width, url }: Image) {
  return `${TMDB_IMAGE_BASE_URL}/w${width}${url}`;
}

interface Image {
  url: string;
  alt: string;
  width: number;
  height: number;
}

interface MovieItemProps {
  image: Image;
  title: string;
  rating: number;
  id: number;
}

export const MovieItem = ({ id, image, title, rating }: MovieItemProps) => {
  return (
    <Link
      href={`/movie/${id}`}
      className={css({
        padding: 0,
        margin: 0,
        _hover: {
          textDecoration: 'none',
          '& img': {
            transform: 'scale(1.05)',
          },
        },
      })}
    >
      <BorderlessCard className={css({ width: '100%' })}>
        <CardHeader
          className={css({
            paddingInline: 0,
          })}
        >
          <AspectRatio width={image.width} height={image.height}>
            <Image
              src={image.url}
              alt={title}
              width={image.width}
              height={image.height}
              className={css({
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                transition: 'transform 0.3s',
              })}
            />
          </AspectRatio>
        </CardHeader>
        <CardContent
          className={css({
            paddingInline: 0,
          })}
        >
          <CardTitle>{title}</CardTitle>
          <Rating value={rating} />
        </CardContent>
      </BorderlessCard>
    </Link>
  );
};
