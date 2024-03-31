'use server';

import { TMDB_BASE_URL } from '@/constants/tmdb';
import { isAuthenticated } from '@/data/utils/auth';
import { tmdbv4Service } from '@/services/tmdbv4';
import { revalidatePath } from 'next/cache';
import { cookies, headers } from 'next/headers';
import { RedirectType, redirect } from 'next/navigation';

interface LoginProps {
  url: string;
}

export async function login({ url }: LoginProps) {
  const base64Url = Buffer.from(url, 'utf8').toString('base64');
  const data = await tmdbv4Service.fetch('auth/request_token', {
    method: 'POST',
    body: JSON.stringify({
      redirect_to: `http://localhost:3000/api/login?url=${base64Url}`,
    }),
  });

  cookies().set({
    name: 'request_token',
    value: data.request_token,
    httpOnly: true,
    expires: new Date(Date.now() + 1000 * 60 * 5),
  });

  const redirectUrl = `${TMDB_BASE_URL}/auth/access?request_token=${data.request_token}`;

  redirect(redirectUrl, RedirectType.replace);
}

export async function logout() {
  if (isAuthenticated()) {
    await tmdbv4Service.fetch('auth/access_token', {
      method: 'DELETE',
      body: JSON.stringify({
        access_token: cookies().get('access_token')?.value,
      }),
    });
    cookies().delete('access_token');
  }
  const pathName = headers().get('x-pathname');
  if (pathName) {
    revalidatePath(pathName);
  }
}
