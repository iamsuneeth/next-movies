import { css } from '@styled-system/css';
import { ImageSection } from './image-section';
import { PersonInfo } from '@/components/patterns/person-info';
import { personDetailsTransformerResponse } from '@/data/person/transformers/personDetails';

export interface PersonDetailsProps {
  data: {
    personDetails: personDetailsTransformerResponse;
  };
}

export const PersonDetails = (props: PersonDetailsProps) => {
  const personDetails = props.data.personDetails;
  return (
    <div
      className={css({
        maxWidth: '1080px',
        marginInline: 'auto',
      })}
    >
      <div
        className={css({
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
          lg: {
            display: 'grid',
            gridTemplateColumns: '40% 60%',
            gap: 4,
          },
        })}
      >
        <ImageSection url={personDetails.profile_path} />
        <PersonInfo personDetails={personDetails} />
      </div>
    </div>
  );
};
