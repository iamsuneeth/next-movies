import { MovieDetails } from '@/components/compositions/movie-details';
import { MovieRecommendation } from '@/components/compositions/movie-recommendation';
import { withWorkflow } from '@/components/core/workflow';
import { movieDetailsFetcher } from '@/data/movie/fetchers';
import { movieDetailsTransformer } from '@/data/movie/transformers';
import { css } from '@styled-system/css';
import { flex } from '@styled-system/patterns';

interface MoviePageProps {
  params: {
    id: string;
  };
  searchParams: {
    page: number;
  };
}

export default function MoviePage({ params, searchParams }: MoviePageProps) {
  const MovieDetailsComponent = withWorkflow(MovieDetails, {
    fetchers: [movieDetailsFetcher],
    transformers: [movieDetailsTransformer],
    fetcherProps: { id: params.id },
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
      <MovieDetailsComponent />
      <div
        className={css({
          height: 8,
        })}
      ></div>
      <MovieRecommendation
        id={params.id}
        page={searchParams.page && Number(searchParams.page)}
      />
    </div>
  );
}
