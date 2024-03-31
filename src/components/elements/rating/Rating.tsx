import { css, cx } from '@styled-system/css';
import { starRecipe } from './styles';

interface RatingProps {
  value: number;
  maxValue?: number;
  className?: string;
}

const starArray = Array.from({ length: 5 }, (_, i) => i);

export const Rating = ({ value, className, maxValue = 10 }: RatingProps) => {
  const [wholeRating, decimalRating] = (value / 2).toFixed(2).split('.');

  return (
    <div
      className={cx(
        css({
          display: 'flex',
        }),
        className,
      )}
    >
      {starArray.map((_, i) => {
        return (
          <span
            key={i}
            className={starRecipe({
              type:
                i < +wholeRating || (decimalRating && i == +wholeRating)
                  ? 'filled'
                  : 'default',
            })}
            style={{
              '--star-width': `${i === +wholeRating ? `${+decimalRating}%` : '100%'}`,
            }}
          >
            ⭑
          </span>
        );
      })}
    </div>
  );
};
