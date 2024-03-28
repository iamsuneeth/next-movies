import { css } from '@styled-system/css';

import { movieDetails } from './fixture';
import { MovieInfo } from '@/components/patterns/movie-info';
import { ImageSection } from './image-section';
import { movieDetailsTransformerResponse } from '@/data/movie/transformers';

interface MovieDetailsProps {
  data: {
    movieDetails: movieDetailsTransformerResponse;
  };
}

export const MovieDetails = (props: MovieDetailsProps) => {
  const movieDetails = props.data.movieDetails;
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
