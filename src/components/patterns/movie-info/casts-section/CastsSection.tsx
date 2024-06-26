import { Carousel } from '@/components/elements/carousel';
import {
  BorderlessCard,
  CardContent,
  CardHeader,
} from '@/components/elements/card';
import { Image } from '@/components/elements/image';
import { css } from '@styled-system/css';
import { stack } from '@styled-system/patterns';
import { creditTransformerResponse } from '@/data/movie/transformers';
import { Link } from '@/components/elements/link';
export interface CastsSectionProps {
  data: {
    credits: creditTransformerResponse;
  };
}

export const CastsSection = ({ data }: CastsSectionProps) => {
  const casts = data.credits.cast;
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
            <Link
              key={cast.id}
              href={`/cast/${cast.id}`}
              className={css({
                justifyContent: 'center',
                _hover: {
                  textDecoration: 'none',
                  '& img': {
                    transform: 'scale(1.05)',
                  },
                },
              })}
            >
              <BorderlessCard
                className={css({
                  marginInline: '1rem',
                })}
              >
                <CardHeader
                  className={css({
                    padding: 0,
                    alignItems: 'center',
                    height: '180px',
                    width: '120px',
                    margin: '0 auto',
                  })}
                >
                  <Image
                    alt='actor image'
                    src={cast.profile_path}
                    width={185}
                    height={278}
                    className={css({
                      objectFit: 'cover',
                      width: '100%',
                      height: '100%',
                      transition: 'transform 0.3s',
                    })}
                  />
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
            </Link>
          ))}
        </Carousel>
      </div>
    </div>
  );
};
