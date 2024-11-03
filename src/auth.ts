import NextAuth, { DefaultSession } from "next-auth"
import Spotify from "next-auth/providers/spotify"

declare module "next-auth" {
  /**
   * Returned by `auth`, `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    user: {
      /** The user's postal address. */
      address: string
      /**
       * By default, TypeScript merges new interface properties and overwrites existing ones.
       * In this case, the default session user properties will be overwritten,
       * with the new ones defined above. To keep the default session user properties,
       * you need to add them back into the newly declared interface.
       */
    } & DefaultSession["user"]
    accessToken?: string | unknown
  }
}
export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [Spotify],

  callbacks: {
    async jwt({ token, account }) {
      if (account) {
        token.accessToken = account.access_token
      }
      return token;
    },
    async session({ session, token }) {
      session.accessToken = token.accessToken;
      return session
    }
  }
})
