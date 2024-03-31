import { Image } from '@components/elements/image';
import {
  BorderlessCard,
  CardContent,
  CardHeader,
  CardTitle,
} from '@components/elements/card';
import { Rating } from '@components/elements/rating';
import { Link } from '@/components/elements/link';
import { AspectRatio } from '@/components/elements/aspect-ratio';
import {
  movieItemCard,
  movieItemCardContent,
  movieItemCardHeader,
  movieItemImage,
  movieItemLink,
} from './styles';

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
  const movieLink = (
    <Link href={`/movie/${id}`} className={movieItemLink}>
      <BorderlessCard className={movieItemCard}>
        <CardHeader className={movieItemCardHeader}>
          <AspectRatio width={image.width} height={image.height}>
            <Image
              src={image.url}
              alt={title}
              width={image.width}
              height={image.height}
              className={movieItemImage}
            />
          </AspectRatio>
        </CardHeader>
        <CardContent className={movieItemCardContent}>
          <CardTitle>{title}</CardTitle>
          <Rating value={rating} />
        </CardContent>
      </BorderlessCard>
    </Link>
  );

  return movieLink;
};
