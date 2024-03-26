import { Carousel } from '@/components/elements/carousel';
import { credits } from './fixture';
import {
  BorderlessCard,
  Card,
  CardContent,
  CardHeader,
} from '@/components/elements/card';
import { Image } from '@/components/elements/image';
import { css } from '@styled-system/css';
import { stack } from '@styled-system/patterns';
import { setTimeout } from 'timers/promises';
import Skeleton from 'react-loading-skeleton';
import { token } from '@styled-system/tokens';
import 'react-loading-skeleton/dist/skeleton.css';

export const CastSkeleton = () => {
  return (
    <div className={stack()}>
      <h4
        className={css({
          fontSize: '1rem',
          fontWeight: 'bold',
        })}
      >
        CAST
      </h4>
      <div
        className={css({
          marginInline: '25px',
        })}
      >
        <Carousel
          dots={false}
          initialSlide={0}
          slidesToShow={4}
          slidesToScroll={4}
          className={css({
            maxWidth: 'calc(100vw - 2rem - 50px)',
            width: '100%',
            lg: {
              maxWidth: '60vw',
            },
          })}
          responsive={[
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 4,
                slidesToScroll: 4,
              },
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
              },
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
              },
            },
            {
              breakpoint: 320,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
              },
            },
          ]}
        >
          {Array(10)
            .fill(0)
            .map((_, index) => (
              <BorderlessCard
                key={index}
                className={css({
                  marginInline: '1rem',
                })}
              >
                <CardHeader
                  className={css({
                    padding: 0,
                    alignItems: 'center',
                  })}
                >
                  <div>
                    <Skeleton
                      width={'10vw'}
                      height={'14vw'}
                      baseColor={token('colors.skeleton.base')}
                      highlightColor={token('colors.skeleton.highlight')}
                    />
                  </div>
                </CardHeader>
                <CardContent
                  className={css({
                    padding: 0,
                    textAlign: 'center',
                  })}
                >
                  <Skeleton
                    count={1}
                    baseColor={token('colors.skeleton.base')}
                    highlightColor={token('colors.skeleton.highlight')}
                  />
                  <Skeleton
                    count={2}
                    baseColor={token('colors.skeleton.base')}
                    highlightColor={token('colors.skeleton.highlight')}
                  />
                </CardContent>
              </BorderlessCard>
            ))}
        </Carousel>
      </div>
    </div>
  );
};
