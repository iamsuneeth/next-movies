import {
  MovieList,
  MovieListProps,
} from '@/components/compositions/movie-list';
import { withWorkflow } from '@/components/core/workflow';
import { SectionHeader } from '@/components/patterns/section-header';
import {
  MovieSearchFetcherProps,
  movieSearchFetcher,
} from '@/data/movie/fetchers/search';
import movieListTransformer from '@/data/movie/transformers/movieList';
import { flex } from '@styled-system/patterns';

interface SearchPageProps {
  searchParams: {
    q: string;
    page: number;
  };
}

export default function SearchPage({ searchParams }: SearchPageProps) {
  const { q, page = 1 } = searchParams;
  const MovieListComponent = withWorkflow<
    MovieSearchFetcherProps,
    MovieListProps
  >(MovieList, {
    fetchers: [movieSearchFetcher],
    transformers: [movieListTransformer],
    fetcherProps: { q: q, page: page },
  });
  return (
    <div
      className={flex({
        direction: 'column',
        gap: 4,
        paddingBottom: 8,
        lg: {
          marginTop: '5rem',
        },
      })}
    >
      <SectionHeader title={q} subTitle='movies' />
      <MovieListComponent page={Number(page)} />
    </div>
  );
}
