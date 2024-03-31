import { TMDB_API_V4_BASE_URL } from '@/constants/tmdb';
import { TMDBbaseService } from './tmdb_base';

class TMDBV4Service extends TMDBbaseService {
  protected getBaseURL(): string {
    return TMDB_API_V4_BASE_URL;
  }
}

export const tmdbv4Service = new TMDBV4Service();
