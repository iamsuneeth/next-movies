import { MovieListFetcherProps, movieListFetcher } from '@/data/movie/fetchers';
import { withWorkflow } from '../Workflow';
import { MovieListProps } from '@/components/compositions/movie-list';
import { MovieList2 } from '@/components/compositions/movie-list/MovieList2';
import movieListTransformer from '@/data/movie/transformers/movieList';
import { headers } from 'next/headers';

interface MovieListWorkflowProps {}

const PATTERN = new URLPattern({ pathname: '/category/:name' });

export const MovieListWorkflow = (props: MovieListWorkflowProps) => {
  const headersList = headers();
  const pathname = headersList.get('x-pathname') ?? '';
  const searchParams = headersList.get('x-search-params') ?? '';

  const patternResult = PATTERN.exec(pathname);
  let name = '';
  if (patternResult !== null && 'pathname' in patternResult) {
    name = patternResult.pathname.groups['name'] ?? '';
  }
  const page = new URLSearchParams(searchParams).get('page') ?? 1;

  const MovieListComponent = withWorkflow<
    MovieListFetcherProps,
    MovieListProps
  >(MovieList2, {
    fetchers: [movieListFetcher],
    transformers: [movieListTransformer],
    fetcherProps: { listName: name, page: Number(page) },
  });
  return <MovieListComponent />;
};
