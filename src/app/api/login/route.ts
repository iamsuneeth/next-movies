import { tmdbv4Service } from '@/services/tmdbv4';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const base64Url = searchParams.get('url');
  const requestToken = cookies().get('request_token');
  const tokenResponse = await tmdbv4Service.fetch('auth/access_token', {
    method: 'POST',
    body: JSON.stringify({
      request_token: requestToken?.value,
    }),
  });

  cookies().delete('request_token');

  cookies().set({
    name: 'access_token',
    value: tokenResponse.access_token,
    httpOnly: true,
  });

  redirect(
    base64Url ? Buffer.from(base64Url, 'base64').toString('utf-8') : '/',
  );
}
