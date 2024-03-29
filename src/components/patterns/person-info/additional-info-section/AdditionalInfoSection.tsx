import { Link } from '@/components/elements/link';
import { css, cx } from '@styled-system/css';
import { hstack } from '@styled-system/patterns';
import { button } from '@styled-system/recipes';
import { Link2Icon } from 'lucide-react';
import React from 'react';
import { IMDBIcon } from '@/components/elements/icons/IMDB';
import { IMDB_PERSON_URL } from '@/constants/imdb';

interface AdditionalInfoSectionProps {
  website?: string;
  imdbId?: string;
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
}: AdditionalInfoSectionProps) => {
  return (
    <section>
      <div className={hstack()}>
        {website && (
          <ButtonLink href={website}>
            <Link2Icon /> Website
          </ButtonLink>
        )}
        {imdbId && (
          <ButtonLink href={`${IMDB_PERSON_URL}/${imdbId}`}>
            <IMDBIcon width={24} height={24} fill={'currentColor'} />
            IMDB
          </ButtonLink>
        )}
      </div>
    </section>
  );
};
