import { SectionHeader } from '../section-header';

interface OverviewProps {
  overview: string;
  as?: React.ElementType;
}

export const Overview = ({
  overview,
  as: Component = 'section',
}: OverviewProps) => {
  return (
    <Component>
      <SectionHeader title='overview' titleType='sub-section' />
      <p>{overview}</p>
    </Component>
  );
};
