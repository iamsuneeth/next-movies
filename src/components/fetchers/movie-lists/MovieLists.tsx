import React, { ReactNode } from 'react';
import { popularResponse } from './fixture';
import { setTimeout } from 'timers/promises';

interface MovieListsProps {
  category: string;
  children: ReactNode;
  page: number;
}

async function getCategoryResults(
  category: string,
): Promise<typeof popularResponse> {
  await setTimeout(2000);
  return popularResponse;
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${category}?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}`,
  );
  if (!response.ok) {
    throw new Error('Failed to fetch category');
  }
  const data = await response.json();
  return data;
}

export const MovieLists = async ({
  children,
  category,
  page,
}: MovieListsProps) => {
  const data = await getCategoryResults(category);
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
