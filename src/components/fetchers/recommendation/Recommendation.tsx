import React, { ReactNode } from 'react';
import { recommendation } from './fixture';
import { setTimeout } from 'timers/promises';

interface RecommendationProps {
  movieId: string;
  children: ReactNode;
  page?: number;
}

async function getRecommendation(
  movieId: string,
  page: number,
): Promise<typeof recommendation> {
  await setTimeout(2000);
  return recommendation;
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}`,
  );
  if (!response.ok) {
    throw new Error('Failed to fetch category');
  }
  const data = await response.json();
  return data;
}

export const Recommendation = async ({
  children,
  movieId,
  page = 1,
}: RecommendationProps) => {
  const data = await getRecommendation(movieId, page);
  return (
    <div>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement<{ data: any; page: number }>(child as any, {
            data,
            page,
          });
        }
        return child;
      })}
    </div>
  );
};
