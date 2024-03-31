import { ButtonLink } from '@/components/elements/link';
import { hstack } from '@styled-system/patterns';
import { Link2Icon, PlayIcon } from 'lucide-react';
import { IMDBIcon } from '@/components/elements/icons/IMDB';
import { IMDB_TITLE_URL } from '@/constants/imdb';
import { YOUTUBE_WATCH_BASE_URL } from '@/constants/youtube';

interface AdditionalInfoSectionProps {
  website?: string;
  imdbId?: string;
  videos: Array<any>;
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
          <ButtonLink href={`${YOUTUBE_WATCH_BASE_URL}${trailer.key}`}>
            <PlayIcon fill={'currentColor'} />
            Trailer
          </ButtonLink>
        )}
      </div>
    </section>
  );
};
