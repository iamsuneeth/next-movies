import { personDetailsTransformerResponse } from '@/data/person/transformers/personDetails';
import { stack } from '@styled-system/patterns';
import { ImageSection } from './image-section';
import { TitleSection } from './title-section';
import { OverviewSection } from './overview-section';
import { AdditionalInfoSection } from './additional-info-section';

interface PersonInfoProps {
  personDetails: personDetailsTransformerResponse;
}

export const PersonInfo = ({ personDetails }: PersonInfoProps) => {
  return (
    <div className={stack()}>
      <ImageSection url={personDetails.profile_path} />
      <TitleSection
        title={personDetails.name}
        subTitle={personDetails.birthday}
      />
      <OverviewSection overview={personDetails.biography} />
      <AdditionalInfoSection
        website={personDetails.homepage}
        imdbId={personDetails.imdb_id}
      />
    </div>
  );
};
