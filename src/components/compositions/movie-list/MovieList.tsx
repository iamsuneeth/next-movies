import { popularResponse } from './fixture';
import { MovieListGridContainer } from './styles';
import { GridItem } from '@styled-system/jsx';
import { MovieItem } from '@/components/patterns/movie-item/MovieItem';
import { MoviePagination } from '@components/patterns/movie-pagination';
import { movieListTransformerResponse } from '@/data/movie/transformers/movieList';

export interface MovieListProps {
  data: {
    movieList: movieListTransformerResponse;
  };
  page?: number;
}

export const MovieList = async ({ data, page }: MovieListProps) => {
  return (
    <>
      <MovieListGridContainer>
        {data.movieList.results?.map(
          ({ id, title, vote_average, poster_path }) => (
            <GridItem key={id}>
              <MovieItem
                id={id}
                image={{
                  url: poster_path,
                  alt: title,
                  width: 342,
                  height: 513,
                }}
                title={title}
                rating={vote_average}
              />
            </GridItem>
          ),
        )}
      </MovieListGridContainer>
      <MoviePagination page={page} maxPage={data.movieList.total_pages} />
    </>
  );
};
