import { componentRegistry } from '@/components/core/component-renderer';

export const MovieList2 = ({ data }) => {
  return componentRegistry.render(data.movieList);
};
