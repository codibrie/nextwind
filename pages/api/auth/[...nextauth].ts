import { SupabaseAdapter } from '@next-auth/supabase-adapter'
import { createClient } from '@supabase/supabase-js'
import jwt from 'jsonwebtoken'
import NextAuth from 'next-auth'
import GitHubProvider from 'next-auth/providers/github'

const supabaseServer = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.SUPABASE_SERVICE_ROLE!, {
  db: { schema: 'next_auth' },
})

// For more information on each option (and a full list of options) go to
// https://next-auth.js.org/configuration/options
export default NextAuth({
  // https://next-auth.js.org/configuration/providers
  secret: process.env.NEXT_AUTH_SECRET,
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_CLIENT_ID!,
      clientSecret: process.env.GITHUB_CLIENT_SECRET!,
    }),
  ],
  adapter: SupabaseAdapter({
    url: process.env.NEXT_PUBLIC_SUPABASE_URL!,
    secret: process.env.SUPABASE_SERVICE_ROLE!,
  }),
  callbacks: {
    async session({ session, user }) {
      const signingSecret = process.env.SUPABASE_JWT
      if (signingSecret) {
        const payload = {
          aud: 'authenticated',
          exp: Math.floor(new Date(session.expires).getTime() / 1000),
          sub: user.id,
          email: user.email,
          role: 'authenticated',
        }

        // Get the user's gh access token from Supabase
        const { data, error } = await supabaseServer.from('accounts').select('*').eq('userId', user.id).single()

        if (error) {
          console.error(error)
        }

        session.supabaseAccessToken = jwt.sign(payload, signingSecret)
        session.ghAccessToken = data?.access_token
      }

      return session
    },
  },
})
