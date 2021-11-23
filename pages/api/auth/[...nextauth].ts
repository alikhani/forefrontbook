import { NextApiHandler } from 'next';
import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';
import Adapters from 'next-auth/adapters';
import prisma from '../../../lib/prisma';

const authHandler: NextApiHandler = (req, res) => NextAuth(req, res, options);
export default authHandler;

const options = {
  providers: [
    Providers.GitHub({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],
  adapter: Adapters.Prisma.Adapter({ prisma }),
  secret: process.env.SECRET,
  callbacks: {
    signIn: async (profile, account) => {
        if (account.provider === 'github') {
          const res = await fetch('https://api.github.com/user/emails', {
            headers: { Authorization: `token ${account.accessToken}` },
          })
          const emails = await res.json()
          if (emails?.length > 0) {
            profile.email = emails.sort((a, b) => b.primary - a.primary)[0].email
          }
          return true
        }
      },
  }
};