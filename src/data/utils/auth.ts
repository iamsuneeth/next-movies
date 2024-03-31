'server-only';

import * as jose from 'jose';
import { cookies } from 'next/headers';
import { cache } from 'react';

export const isAuthenticated = cache(function () {
  const token = cookies().get('access_token');
  if (!token) {
    return false;
  }
  try {
    /**
     * Decoding token to see if token is valid. Verification can only be done by the issuer. ie. TMDB
     */
    jose.decodeJwt(token.value);
  } catch (error) {
    console.error('Failed to decode token', error);
    return false;
  }
  return true;
});
