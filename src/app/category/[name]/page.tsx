import { SectionHeader } from '@/components/patterns/section-header';
import { popularResponse } from './fixture';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/elements/card';
import { flex, grid, gridItem } from '@styled-system/patterns';

import { css } from '@styled-system/css';
import { Image } from '@/components/elements/image';
import { Rating } from '@/components/elements/rating';

const STATIC_CATEGORIES = {
  popular: {
    title: 'Popular',
    subTitle: 'movies',
  },
  top_rated: {
    title: 'Top Rated',
    subTitle: 'movies',
  },
  upcoming: {
    title: 'Upcoming',
    subTitle: 'movies',
  },
};

type CategoryPageProps = {
  params: {
    name: keyof typeof STATIC_CATEGORIES;
  };
};

async function getCategoryResults(
  name: string,
): Promise<typeof popularResponse> {
  return popularResponse;
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${name}?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}`,
  );
  if (!response.ok) {
    throw new Error('Failed to fetch category');
  }
  const data = await response.json();
  return data.results;
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { name } = params;
  const staticCategory = STATIC_CATEGORIES[name];
  if (!staticCategory) {
    return null;
  }
  const { results } = await getCategoryResults(name);
  return (
    <div
      className={flex({
        direction: 'column',
        gap: 4,
      })}
    >
      <SectionHeader {...staticCategory} />
      <div
        className={grid({
          gridTemplateColumns: 'repeat(auto-fit, minmax(15rem, 20rem))',
          gap: '1rem',
        })}
      >
        {results.map((result) => (
          <div key={result.id} className={gridItem()}>
            <Card className={css({ border: 'none' })}>
              <CardHeader>
                <Image
                  src={`https://image.tmdb.org/t/p/w342${result.poster_path}`}
                  alt={result.title}
                  width={342}
                  height={513}
                />
              </CardHeader>
              <CardContent>
                <CardTitle>{result.title}</CardTitle>
                <Rating value={result.vote_average} />
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}
