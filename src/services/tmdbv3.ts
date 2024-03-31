import { TMDB_API_BASE_URL } from '@/constants/tmdb';
import { GenreList } from '@/types/tmdb';
import { unstable_cache } from 'next/cache';
import { TMDBbaseService } from './tmdb_base';

class TMDBV3Service extends TMDBbaseService {
  getGenres: () => Promise<GenreList>;
  constructor() {
    super();
    this.getGenres = unstable_cache(
      () =>
        this.fetch('genre/movie/list', {
          messageOnError: 'Failed to fetch genres',
        }),
      ['genres'],
    );
  }

  protected getBaseURL(): string {
    return TMDB_API_BASE_URL;
  }
}

export const tmdbService = new TMDBV3Service();
