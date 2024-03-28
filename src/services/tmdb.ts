import { TMDB_API_BASE_URL } from '@/constants/tmdb';

class TMDBService {
  #base_fetch_options: RequestInit;
  constructor() {
    this.#base_fetch_options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${process.env.TMDB_API_KEY}`,
      },
    };
  }

  #constructURL(url: string, query?: Record<string, string>) {
    let finalURL = `${TMDB_API_BASE_URL}/${url}`;
    if (!query || Object.keys(query).length === 0) {
      return finalURL;
    }
    const searchParams = new URLSearchParams(query).toString();
    return `${finalURL}?${searchParams}`;
  }
  async fetch(
    url: string,
    options?: RequestInit & {
      query?: Record<string, string>;
      messageOnError?: string;
    },
  ) {
    const { query, signal, messageOnError = 'Failed to fetch' } = options || {};
    const signals = [AbortSignal.timeout(5000)].concat(signal ? [signal] : []);

    const finalURL = this.#constructURL(url, query);
    const response = await fetch(finalURL, {
      ...this.#base_fetch_options,
      ...options,
      headers: {
        ...this.#base_fetch_options.headers,
        ...options?.headers,
      },
      //@ts-ignore
      signal: AbortSignal.any(signals),
    });
    if (!response.ok) {
      const reason = await response.text();
      throw new Error(messageOnError, {
        cause: reason,
      });
    }
    const data = await response.json();
    return data;
  }
}

export const tmdbService = new TMDBService();
