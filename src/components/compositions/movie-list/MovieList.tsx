import { popularResponse } from './fixture';
import { MovieListGridContainer } from './styles';
import { GridItem } from '@styled-system/jsx';
import { MovieItem } from '@/components/patterns/movie-item/MovieItem';
import { MoviePagination } from '@components/patterns/movie-pagination';
import { headers } from 'next/headers';

interface MovieListProps {
  data?: typeof popularResponse;
  page?: number;
}

export const MovieList = async ({ data, page }: MovieListProps) => {
  const headerList = headers();
  const pathName = headerList.get('x-pathname');
  return (
    <>
      <MovieListGridContainer>
        {data?.results.map(({ id, title, vote_average, poster_path }) => (
          <GridItem key={id}>
            <MovieItem
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
        ))}
      </MovieListGridContainer>
      <MoviePagination page={page} maxPage={data?.total_pages} url={pathName} />
    </>
  );
};
