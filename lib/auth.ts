import { NextAuthOptions } from 'next-auth';
import Discord from 'next-auth/providers/discord';

export const authOptions: NextAuthOptions = {
  secret: process.env.NEXTAUTH_SECRET,

  providers: [
    Discord({
      clientId: process.env.DISCORD_ID as string,
      clientSecret: process.env.DISCORD_SECRET as string,
    }),
  ],
  callbacks: {
    async session({ session, token }) {
      if (token) {
        if (token?.picture?.includes('discord')) {
          if (session.user) {
            (session.user as { id?: string }).id = token.sub;
          }
        }
      }
      return session;
    },
  },
};
