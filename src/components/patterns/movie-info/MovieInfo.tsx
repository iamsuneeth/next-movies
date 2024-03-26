import { stack } from '@styled-system/patterns';
import { AdditionalInfoSection } from './additional-info-section';
import { BasicsSection } from './basics-section';
import { CastsSection } from './casts-section';
import { GenreSection } from './genre-section';
import { ImageSection } from './image-section';
import { OverviewSection } from './overview-section';
import { TitleSection } from './title-section';
import { Suspense } from 'react';
import { CastSkeleton } from './casts-section/skeleton';

interface MovieInfoProps {
  movieDetails: any;
}

export const MovieInfo = ({ movieDetails }: MovieInfoProps) => {
  return (
    <div className={stack()}>
      <ImageSection url={movieDetails.backdrop_path} />
      <TitleSection />
      <BasicsSection />
      <GenreSection genres={movieDetails.genres} />
      <OverviewSection overview={movieDetails.overview} />
      <Suspense fallback={<CastSkeleton />}>
        <CastsSection />
      </Suspense>
      <AdditionalInfoSection
        website={movieDetails.homepage}
        imdbId={movieDetails.imdb_id}
        videos={movieDetails.videos.results}
      />
    </div>
  );
};
