import { stack } from '@styled-system/patterns';
import { AdditionalInfoSection } from './additional-info-section';
import { BasicsSection } from './basics-section';
import { CastsSection, CastsSectionProps } from './casts-section';
import { FullBleedImage } from '@components/patterns/fullbleed-image';
import { Overview } from '@components/patterns/overview';
import { Suspense } from 'react';
import { CastSkeleton } from './casts-section/skeleton';
import { withWorkflow } from '@components/core/workflow';
import { CreditsFetcher, CreditsFetcherProps } from '@/data/movie/fetchers';
import {
  creditsTransformer,
  movieDetailsTransformerResponse,
} from '@/data/movie/transformers';
import { SectionHeader } from '@components/patterns/section-header';
import { GenreList } from '../genre-list';

interface MovieInfoProps {
  movieDetails: movieDetailsTransformerResponse;
}

export const MovieInfo = ({ movieDetails }: MovieInfoProps) => {
  const CastsSectionComponent = withWorkflow<
    CreditsFetcherProps,
    CastsSectionProps
  >(CastsSection, {
    fetchers: [CreditsFetcher],
    transformers: [creditsTransformer],
    fetcherProps: {
      movieId: movieDetails.id.toString(),
    },
  });

  return (
    <div className={stack()}>
      <FullBleedImage url={movieDetails.backdrop_path} />
      <SectionHeader
        title={movieDetails.title}
        subTitle={movieDetails.tagline}
        as='section'
        titleType='title-section'
      />
      <BasicsSection
        rating={movieDetails.vote_average}
        runtime={movieDetails.runtime}
        spoken_languages={movieDetails.spoken_languages}
        releaseDate={movieDetails.release_date}
      />
      <GenreList genres={movieDetails.genres} direction='row' as='section' />
      <Overview overview={movieDetails.overview} />
      <Suspense fallback={<CastSkeleton />}>
        <CastsSectionComponent />
      </Suspense>
      <AdditionalInfoSection
        website={movieDetails.homepage}
        imdbId={movieDetails.imdb_id}
        videos={movieDetails.videos.results}
      />
    </div>
  );
};
