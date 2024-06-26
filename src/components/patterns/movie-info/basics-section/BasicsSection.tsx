import { Rating } from '@/components/elements/rating';
import { css } from '@styled-system/css';
import { hstack } from '@styled-system/patterns';
import { basicSection, infoStyle, ratingStyle } from './styles';

type SpokenLanguages = Array<{
  english_name: string;
  name: string;
}>;
interface BasicsSectionProps {
  rating: number;
  runtime: number;
  spoken_languages: SpokenLanguages;
  releaseDate: string;
}

function getInfo(
  runtime: number,
  spoken_languages: SpokenLanguages,
  releaseDate: string,
) {
  let to_render = [];
  if (spoken_languages.length > 0) {
    to_render.push(spoken_languages[0].name);
  }
  if (runtime) {
    to_render.push(`${runtime} min.`);
  }

  if (releaseDate) {
    const [year] = releaseDate.split('-');
    to_render.push(year);
  }

  return to_render.join('/');
}

export const BasicsSection = ({
  rating,
  runtime,
  spoken_languages = [],
  releaseDate,
}: BasicsSectionProps) => {
  return (
    <section className={basicSection}>
      <Rating value={rating} className={ratingStyle} />
      <span className={infoStyle}>
        {getInfo(runtime, spoken_languages, releaseDate)}
      </span>
    </section>
  );
};
