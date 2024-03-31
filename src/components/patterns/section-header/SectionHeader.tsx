import { subTitleRecipe, titleRecipe } from './styles';

interface SectionHeaderProps {
  title: string;
  subTitle?: string;
  as?: React.ElementType;
  titleType?: 'section-header' | 'title-section' | 'sub-section';
}

export const SectionHeader = ({
  title,
  subTitle,
  as: Component = 'div',
  titleType,
}: SectionHeaderProps) => {
  return (
    <Component>
      <h1 className={titleRecipe({ type: titleType })}>{title}</h1>
      <h2
        className={subTitleRecipe({
          type: titleType,
        })}
      >
        {subTitle}
      </h2>
    </Component>
  );
};
