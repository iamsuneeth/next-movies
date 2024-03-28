import { MovieDetails } from '@/components/compositions/movie-details';
import { MovieList } from '@/components/compositions/movie-list';
import { MovieListSkeleton } from '@/components/compositions/movie-list/skeleton';
import { MovieRecommendation } from '@/components/compositions/movie-recommendation';
import { withWorkflow } from '@/components/core/workflow';
import { Recommendation } from '@/components/fetchers/recommendation';
import { SectionHeader } from '@/components/patterns/section-header';
import { movieDetailsFetcher } from '@/data/movie/fetchers';
import { movieDetailsTransformer } from '@/data/movie/transformers';
import { css } from '@styled-system/css';
import { Spacer } from '@styled-system/jsx';
import { flex } from '@styled-system/patterns';
import { Suspense } from 'react';

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
