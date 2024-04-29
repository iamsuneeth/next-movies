import {
  movieItemCard,
  movieItemCardContent,
  movieItemCardHeader,
} from '@/components/patterns/movie-item/styles';
import { TMDB_IMAGE_BASE_URL } from '@/constants/tmdb';
import { MovieListResponse } from '@/types/tmdb';

function getImageURL(url: string) {
  return `${TMDB_IMAGE_BASE_URL}/w342${url}`;
}

export function transformMovieList(movieList: MovieListResponse) {
  const { page, results, total_pages, total_results } = movieList;

  return {
    layout: {
      componentCategory: 'layout',
      componentId: 'Fragment',
      children: [
        {
          componentCategory: 'container',
          componentId: 'MovieList',
          children: results.map((movie) => ({
            componentCategory: 'link',
            componentId: 'MovieItemLink',
            props: {
              href: `/movie/${movie.id}`,
            },
            children: [
              {
                componentCategory: 'container',
                componentId: 'MovieItemCard',
                children: [
                  {
                    componentCategory: 'container',
                    componentId: 'MovieItemHeader',
                    children: [
                      {
                        componentCategory: 'container',
                        componentId: 'AspectRatio',
                        props: {
                          width: '342',
                          height: '513',
                        },
                        children: [
                          {
                            componentCategory: 'media',
                            componentId: 'MovieItemImage',
                            props: {
                              src: movie.poster_path
                                ? getImageURL(movie.poster_path)
                                : '/images/nothing.svg',
                              alt: movie.title,
                              width: '342',
                              height: '513',
                            },
                          },
                        ],
                      },
                    ],
                  },
                  {
                    componentCategory: 'container',
                    componentId: 'MovieItemContent',
                    props: {
                      className: movieItemCardContent,
                    },
                    children: [
                      {
                        componentCategory: 'text',
                        componentId: 'MovieItemTitle',
                        props: {
                          children: movie.title,
                        },
                      },
                      {
                        componentCategory: 'element',
                        componentId: 'Rating',
                        props: {
                          value: movie.vote_average,
                        },
                      },
                    ],
                  },
                ],
              },
            ],
          })),
        },
        {
          componentCategory: 'element',
          componentId: 'MoviePagination',
          props: {
            maxPage: total_pages > 500 ? 500 : total_pages,
            page,
          },
        },
      ],
    },
  };
}
