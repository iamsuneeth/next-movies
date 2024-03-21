import {
  BorderlessCard,
  CardContent,
  CardHeader,
} from '@/components/elements/card';
import { MovieListGridContainer } from './styles';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { GridItem } from '@styled-system/jsx';
import { token } from '@styled-system/tokens';

const skeletonArray = Array(8).fill(0);

export const MovieListSkeleton = () => {
  return (
    <MovieListGridContainer>
      {skeletonArray.map((index) => (
        <GridItem key={index}>
          <BorderlessCard>
            <CardHeader>
              <Skeleton
                width={272}
                height={408}
                baseColor={token('colors.skeleton.base')}
                highlightColor={token('colors.skeleton.highlight')}
              />
            </CardHeader>
            <CardContent>
              <Skeleton
                count={1.5}
                baseColor={token('colors.skeleton.base')}
                highlightColor={token('colors.skeleton.highlight')}
              />
            </CardContent>
          </BorderlessCard>
        </GridItem>
      ))}
    </MovieListGridContainer>
  );
};
