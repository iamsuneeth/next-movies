import { Genre } from '@/types/tmdb';
import { genreListRecipe, icon } from './styles';
import { RecipeVariantProps } from '@styled-system/types';
import { CircleDotIcon } from 'lucide-react';
import { MenuLink } from '../hamburger-menu';

type GenreListProps = RecipeVariantProps<typeof genreListRecipe> & {
  genres: Array<Genre>;
  as?: React.ElementType;
};

export const GenreList = (props: GenreListProps) => {
  const [variantProps, { genres, as: Component = 'div' }] =
    genreListRecipe.splitVariantProps(props);
  return (
    <div className={genreListRecipe(variantProps)}>
      {genres.map((genre) => (
        <MenuLink key={genre.id} href={`/genre/${genre.id}`}>
          <CircleDotIcon className={icon} size={16} />
          {genre.name}
        </MenuLink>
      ))}
    </div>
  );
};
