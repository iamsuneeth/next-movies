import { stack } from '@styled-system/patterns';
import { AdditionalInfoSection } from './additional-info-section';
import { BasicsSection } from './basics-section';
import { CastsSection, CastsSectionProps } from './casts-section';
import { GenreSection } from './genre-section';
import { ImageSection } from './image-section';
import { OverviewSection } from './overview-section';
import { TitleSection } from './title-section';
import { Suspense } from 'react';
import { CastSkeleton } from './casts-section/skeleton';
import { withWorkflow } from '@/components/core/workflow';
import { CreditsFetcher, CreditsFetcherProps } from '@/data/movie/fetchers';
import { creditsTransformer } from '@/data/movie/transformers';

interface MovieInfoProps {
  movieDetails: any;
}

export const MovieInfo = ({ movieDetails }: MovieInfoProps) => {
  const CastsSectionComponent = withWorkflow<
    CreditsFetcherProps,
    CastsSectionProps
  >(CastsSection, {
    fetchers: [CreditsFetcher],
    transformers: [creditsTransformer],
    fetcherProps: {
      movieId: movieDetails.id,
    },
  });

  return (
    <div className={stack()}>
      <ImageSection url={movieDetails.backdrop_path} />
      <TitleSection />
      <BasicsSection />
      <GenreSection genres={movieDetails.genres} />
      <OverviewSection overview={movieDetails.overview} />
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
