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
interface CastsSectionProps {}

async function fetchCasts() {
  await setTimeout(1000);
  return credits.cast;
}

export const CastsSection = async (props: CastsSectionProps) => {
  const casts = await fetchCasts();
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
          {casts.map((cast) => (
            <BorderlessCard
              key={cast.id}
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
                <div
                  className={css({
                    maxWidth: '185px',
                    maxHeight: '278px',
                  })}
                >
                  <Image
                    alt='actor image'
                    src={`https://image.tmdb.org/t/p/w185/${cast.profile_path}`}
                    width={185}
                    height={278}
                  />
                </div>
              </CardHeader>
              <CardContent
                className={css({
                  padding: 0,
                  textAlign: 'center',
                })}
              >
                <h4
                  className={css({
                    fontWeight: 'bold',
                  })}
                >
                  {cast.name}
                </h4>
                <h5
                  className={css({
                    lineClamp: 2,
                  })}
                >
                  {cast.character}
                </h5>
              </CardContent>
            </BorderlessCard>
          ))}
        </Carousel>
      </div>
    </div>
  );
};
