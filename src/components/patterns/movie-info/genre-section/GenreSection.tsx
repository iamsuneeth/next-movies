import { Link } from '@/components/elements/link';
import { css } from '@styled-system/css';
import { hstack } from '@styled-system/patterns';
import { CircleDotIcon } from 'lucide-react';

const GenreIcon = () => (
  <CircleDotIcon
    className={css({
      marginRight: 1,
    })}
    size={16}
  />
);

interface GenreSectionProps {
  genres: any[];
}

export const GenreSection = ({ genres }: GenreSectionProps) => {
  return (
    <section>
      <h4
        className={css({
          fontSize: '1rem',
          fontWeight: 'bold',
        })}
      >
        THE GENRES
      </h4>
      <div
        className={hstack({
          flexWrap: 'wrap',
          rowGap: 0,
        })}
      >
        {genres.map((genre) => (
          <Link key={genre.id} href={`/genre/${genre.id}`}>
            <GenreIcon />
            {genre.name}
          </Link>
        ))}
      </div>
    </section>
  );
};
