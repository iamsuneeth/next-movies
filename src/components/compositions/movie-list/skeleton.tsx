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
import { css } from '@styled-system/css';

const skeletonArray = Array(8).fill(0);

export const MovieListSkeleton = () => {
  return (
    <MovieListGridContainer>
      {skeletonArray.map((index) => (
        <GridItem key={index}>
          <BorderlessCard>
            <CardHeader
              className={css({
                paddingInline: 0,
              })}
            >
              <Skeleton
                height={'calc(var(--grid-item-min-width) * 1.8)'}
                baseColor={token('colors.skeleton.base')}
                highlightColor={token('colors.skeleton.highlight')}
              />
            </CardHeader>
            <CardContent
              className={css({
                paddingInline: 0,
              })}
            >
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
