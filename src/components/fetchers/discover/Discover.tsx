import React, { ReactNode } from 'react';
import { discoverResponse } from './fixture';
import { setTimeout } from 'timers/promises';

interface DiscoverProps {
  genres: Array<string>;
  children: ReactNode;
  page: number;
  sort: string;
}

async function discoverMovies(
  genres: Array<string>,
): Promise<typeof discoverResponse> {
  await setTimeout(2000);
  return discoverResponse;
}

export const Discover = async ({
  children,
  genres,
  sort,
  page,
}: DiscoverProps) => {
  const dataPromise = discoverMovies(genres);
  const data = await dataPromise;
  return (
    <div>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement<{
            data: any;
            page: number;
            dataPromise: any;
          }>(child as any, {
            data,
            page,
            dataPromise,
          });
        }
        return child;
      })}
    </div>
  );
};
