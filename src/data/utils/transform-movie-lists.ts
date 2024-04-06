import { TMDB_IMAGE_BASE_URL } from '@/constants/tmdb';
import { MovieListResponse } from '@/types/tmdb';

function getImageURL(url: string) {
  return `${TMDB_IMAGE_BASE_URL}/w342${url}`;
}

export function transformMovieList(movieList: MovieListResponse) {
  return {
    ...movieList,
    total_pages: movieList.total_pages > 500 ? 500 : movieList.total_pages,
    results: movieList.results.map((movie) => ({
      ...movie,
      poster_path: movie.poster_path
        ? getImageURL(movie.poster_path)
        : '/images/nothing.svg',
    })),
  };
}

//
const layoutdata = {
  componentCategory: 'layout',
  componentId: 'Fragment',
  children: [
    {
      componentCategory: 'container',
      componentId: 'MovieListGridContainer',
      children: [
        {
          componentCategory: 'link',
          componentId: 'Link',
          props: {
            href: '/movie/${data.results.[].id}',
          },
          children: [
            {
              componentCategory: 'container',
              componentId: 'BorderlessCard',
              children: [
                {
                  componentCategory: 'container',
                  componentId: 'CardHeader',
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
                          componentId: 'Image',
                          props: {
                            src: '${data.results.[].poster_path}',
                            alt: '${data.results.[].title}',
                            width: '342',
                            height: '513',
                          },
                        },
                      ],
                    },
                    {
                      componentCategory: 'container',
                      componentId: 'CardContent',
                      children: [
                        {
                          componentCategory: 'text',
                          componentId: 'CardTitle',
                          props: {
                            children: '${data.results.[].title}',
                          },
                        },
                        {
                          componentCategory: 'element',
                          componentId: 'Rating',
                          props: {
                            value: '${data.results.[].vote_average}',
                          },
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      componentCategory: 'element',
      componentId: 'MoviePagination',
      props: {
        maxPage: '${data.total_pages}',
        page: '${paginationData.page}',
      },
    },
  ],
};


class LayoutConfigVisitor {
  data;
  constructor(layoutData:any, paginationData: any) {
    this.data = {
      layoutData,
      paginationData
    }
  }
  populateProps(props:Record<string, string|number|boolean>, index?: number) {
    Object.entries(props).forEach(([key, value]) => {
      if(typeof value !== 'string') return;
      props[key] = value.replace(/\${(.*?)}/g, (_, firstMatch) => {
        const tokens = firstMatch.split('.');

      })
    })
  }
  visit(layoutTree) {

    const props = 

    return {
      ...layoutTree,
      props
      
    }

  }
}