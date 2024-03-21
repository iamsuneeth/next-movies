import { Image } from '@components/elements/image';
import {
  BorderlessCard,
  CardContent,
  CardHeader,
  CardTitle,
} from '@components/elements/card';
import { Rating } from '@components/elements/rating';
import { TMDB_IMAGE_BASE_URL } from '@/constants/tmdb';

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
}

export const MovieItem = ({ image, title, rating }: MovieItemProps) => {
  return (
    <BorderlessCard>
      <CardHeader>
        <Image
          src={getImageURL(image)}
          alt={title}
          width={image.width}
          height={image.height}
        />
      </CardHeader>
      <CardContent>
        <CardTitle>{title}</CardTitle>
        <Rating value={rating} />
      </CardContent>
    </BorderlessCard>
  );
};
