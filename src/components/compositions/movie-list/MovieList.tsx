import { popularResponse } from './fixture';
import { MovieListGridContainer } from './styles';
import { GridItem } from '@styled-system/jsx';
import { MovieItem } from '@/components/patterns/movie-item/MovieItem';
import { MoviePagination } from '@components/patterns/movie-pagination';
import { movieListTransformerResponse } from '@/data/movie/transformers/movieList';
import { Image } from '@/components/elements/image';
import { vstack } from '@styled-system/patterns';
import { h1, h2, h3 } from '@styled-system/recipes';
import { css } from '@styled-system/css';
import { componentRegistry } from '@/components/core/component-renderer';

export interface MovieListProps {
  data: {
    movieList: movieListTransformerResponse;
  };
  page?: number;
}

export const MovieList = async ({ children }) => {
  if (children.length === 0) {
    return (
      <div
        className={vstack({
          color: 'gray.400',
        })}
      >
        <h3 className={h2()}>Sorry!!</h3>
        <h4 className={h3()}>Nothing to show here</h4>
        <div
          className={css({
            height: 8,
          })}
        ></div>
        <Image
          src={'/images/waiting_for_you.svg'}
          height={400}
          width={600}
          alt='nothing here'
        />
      </div>
    );
  }
  return <MovieListGridContainer>{children}</MovieListGridContainer>;
};
