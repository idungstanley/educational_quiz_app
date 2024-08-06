'use server';

import { signOut } from '@/auth';
import { DEFAULT_LOGIN_REDIRECT } from '../constants/routes';

export async function SignOut(redirectLink = DEFAULT_LOGIN_REDIRECT as string) {
  await signOut({ redirectTo: redirectLink });
}