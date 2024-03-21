import React, { ReactNode } from 'react';
import { discoverResponse } from './fixture';
import { setTimeout } from 'timers/promises';

interface DiscoverProps {
  genres: Array<string>;
  children: ReactNode;
}

async function discoverMovies(
  genres: Array<string>,
): Promise<typeof discoverResponse> {
  await setTimeout(2000);
  return discoverResponse;
}

export const Discover = async ({ children, genres }: DiscoverProps) => {
  const data = await discoverMovies(genres);
  return (
    <div>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement<{ data: any }>(child as any, { data });
        }
        return child;
      })}
    </div>
  );
};
