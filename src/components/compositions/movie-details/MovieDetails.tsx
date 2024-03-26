import { css } from '@styled-system/css';

import { movieDetails } from './fixture';
import { MovieInfo } from '@/components/patterns/movie-info';
import { ImageSection } from './image-section';

async function fetchDetails() {
  return movieDetails;
}

interface MovieDetailsProps {}

export const MovieDetails = async (props: MovieDetailsProps) => {
  const movieDetails = await fetchDetails();
  return (
    <div
      className={css({
        maxWidth: '1600px',
        marginInline: 'auto',
      })}
    >
      <div
        className={css({
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
          lg: {
            display: 'grid',
            gridTemplateColumns: '40% 60%',
            gap: 4,
          },
        })}
      >
        <ImageSection url={movieDetails.backdrop_path} />
        <MovieInfo movieDetails={movieDetails} />
      </div>
    </div>
  );
};
