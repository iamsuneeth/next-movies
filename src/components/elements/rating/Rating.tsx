import { css, cva } from '@styled-system/css';

interface RatingProps {
  value: number;
  maxValue?: number;
}

const starRecipe = cva({
  base: {
    color: 'gray.400',
    position: 'relative',
    overflow: 'hidden',
    display: 'block',
  },
  variants: {
    type: {
      filled: {
        _before: {
          position: 'absolute',
          overflow: 'hidden',
          display: 'block',
          height: '100%',
          left: 0,
          top: 0,
          width: 'var(--star-width, 100%)',
          content: '"⭑"',
          color: 'yellow.600',
          zIndex: 1,
        },
      },
      default: {},
    },
  },
  defaultVariants: {
    type: 'default',
  },
});

const starArray = Array.from({ length: 5 }, (_, i) => i);

export const Rating = ({ value, maxValue = 10 }: RatingProps) => {
  const [wholeRating, decimalRating] = (value / 2).toFixed(2).split('.');

  return (
    <div
      className={css({
        display: 'flex',
      })}
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
            style={
              {
                '--star-width': `${i === +wholeRating ? `${+decimalRating}%` : '100%'}`,
              } as React.CSSProperties
            }
          >
            ⭑
          </span>
        );
      })}
    </div>
  );
};
