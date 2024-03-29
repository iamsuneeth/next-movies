import { MovieDetails } from '@/components/compositions/movie-details';
import { MovieRecommendation } from '@/components/compositions/movie-recommendation';
import {
  PersonDetails,
  PersonDetailsProps,
} from '@/components/compositions/person-details';
import { PersonKnownFor } from '@/components/compositions/person-knownfor';
import { withWorkflow } from '@/components/core/workflow';
import {
  personDetailsFetcher,
  personDetailsFetcherProps,
} from '@/data/person/fetchers/personDetails';
import { personDetailsTransformer } from '@/data/person/transformers/personDetails';
import { css } from '@styled-system/css';
import { flex } from '@styled-system/patterns';

interface CastPageProps {
  params: {
    id: string;
  };
  searchParams: {
    page: number;
    sort: string;
  };
}

export default function CastPage({ params, searchParams }: CastPageProps) {
  const PersonDetailsComponent = withWorkflow<
    personDetailsFetcherProps,
    PersonDetailsProps
  >(PersonDetails, {
    fetchers: [personDetailsFetcher],
    transformers: [personDetailsTransformer],
    fetcherProps: { id: params.id },
  });
  return (
    <div
      className={flex({
        direction: 'column',
        gap: 4,
        paddingBottom: 8,
        lg: {
          marginTop: '5rem',
        },
      })}
    >
      <PersonDetailsComponent />
      <div
        className={css({
          height: 8,
        })}
      ></div>
      <PersonKnownFor
        id={params.id}
        page={searchParams.page && Number(searchParams.page)}
        sort={searchParams.sort}
      />
    </div>
  );
}
