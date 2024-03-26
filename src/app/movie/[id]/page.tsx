import { MovieDetails } from '@/components/compositions/movie-details';
import { flex } from '@styled-system/patterns';

interface MoviePageProps {
  params: {
    id: string;
  };
}

export default function MoviePage({ id }: MoviePageProps) {
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
      <MovieDetails />
    </div>
  );
}
