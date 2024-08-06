/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable no-param-reassign */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { CredentialsSignin, NextAuthConfig } from 'next-auth';
import Credentials from 'next-auth/providers/credentials';

class InvalidLoginError extends CredentialsSignin {
    code = 'Invalid identifier or password';
}

export const options = {
    session: {
        maxAge: 7 * 24 * 60 * 60
    },
    jwt: {
        maxAge: 7 * 24 * 60 * 60
    },
    pages: {
        signIn: '/auth/login',
        error: '/auth/login'
    },
    providers: [
        Credentials({
            name: 'Credentials',
            credentials: {},
            async authorize(credentials, req) {
                const { email, password } = credentials as {
                    email: string;
                    password: string;
                };
                const body = {
                    email,
                    password
                };
                // Add logic here to look up the user from the credentials supplied
                try {
                    const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/v1/auth/login`, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                            'Access-Control-Allow-Origin': '*'
                        },
                        body: JSON.stringify(body)
                    });
                    const user = await res.json();
                    if (res.ok && user) {
                        return user;
                    } else {
                        return null;
                    }
                } catch (error) {
                    const data = (error as any).response.data;
                    throw new InvalidLoginError();
                }
            }
        })
    ],
    callbacks: {
        jwt: async ({ token, user }: any) => {
            console.log('token: ', user, token);
            if (user) token = user as unknown as { [key: string]: any; };
            return token;
        },
        session: async ({ session, token }: any) => {
            session.user = { ...token };
            return session;
        }
    }
} satisfies NextAuthConfig;
