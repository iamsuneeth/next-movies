import { Button } from '@/components/elements/button';
import { Link } from '@/components/elements/link';
import { css, cx } from '@styled-system/css';
import { hstack } from '@styled-system/patterns';
import { button } from '@styled-system/recipes';
import { Link2Icon, PlayIcon } from 'lucide-react';
import React from 'react';
import ImdbIcon from '@public/imdb.svg';
import { Image } from '@/components/elements/image';
import { IMDBIcon } from '@/components/elements/icons/IMDB';
import { IMDB_TITLE_URL } from '@/constants/imdb';

interface AdditionalInfoSectionProps {
  website?: string;
  imdbId?: string;
  videos: Array<any>;
}

function ButtonLink(props: React.ComponentProps<typeof Link>) {
  return (
    <Link
      className={cx(
        button({
          variant: 'outline',
        }),
        css({
          _hover: {
            textDecoration: 'none',
          },
        }),
      )}
      {...props}
    />
  );
}

export const AdditionalInfoSection = ({
  website,
  imdbId,
  videos,
}: AdditionalInfoSectionProps) => {
  const trailer = videos.find(
    (video) => video.type === 'Trailer' && video.site === 'YouTube',
  );
  return (
    <section>
      <div className={hstack()}>
        {website && (
          <ButtonLink href={website}>
            <Link2Icon /> Website
          </ButtonLink>
        )}
        {imdbId && (
          <ButtonLink href={`${IMDB_TITLE_URL}/${imdbId}`}>
            <IMDBIcon width={24} height={24} fill={'currentColor'} />
            IMDB
          </ButtonLink>
        )}
        {trailer && (
          <ButtonLink href={`https://youtube.com/watch?v=${trailer.key}`}>
            <PlayIcon fill={'currentColor'} />
            Trailer
          </ButtonLink>
        )}
      </div>
    </section>
  );
};
