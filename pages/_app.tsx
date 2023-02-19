import { SessionProvider } from 'next-auth/react'

import Layout from '@/components/layout'
import type { Session } from 'next-auth'
import type { AppProps } from 'next/app'

import Head from 'next/head'
import '../global.css'

// Use of the <SessionProvider> is mandatory to allow components that call
// `useSession()` anywhere in your application to access the `session` object.
export default function App({ Component, pageProps: { session, ...pageProps } }: AppProps<{ session: Session }>) {
  return (
    <SessionProvider session={session}>
      <Head>
        <title>Nextwind!</title>
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SessionProvider>
  )
}
