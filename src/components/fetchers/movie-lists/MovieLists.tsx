import React, { ReactNode } from 'react';
import getMovieList from '@/data/movie/fetchers/movieList';

interface MovieListsProps {
  category: string;
  children: ReactNode;
  page: number;
}

export const MovieLists = async ({
  children,
  category,
  page,
}: MovieListsProps) => {
  const data = await getMovieList(category, page);
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
