import Menu from '@/components/menu'
import { Metadata } from 'next'
import { Session } from 'next-auth'
import { headers } from 'next/dist/client/components/headers'
import ClientSessionProvider from '../components/auth/session-provider'
import '../global.css'

export const metadata: Metadata = {
  title: '🍃 Nextwind',
  description:
    'Introducing a powerful and efficient full- stack web development starter project built with TypeScript, Next.JS, Supabase, PostgreSQL, TailwindCSS, and Zustand!',
}

export interface DashboardLayoutProps {
  children: React.ReactNode
}

export async function getSession(cookie: string): Promise<Session | null> {
  const response = await fetch(`${process.env.NEXT_PUBLIC_NEXTAUTH_URL}/api/auth/session`, {
    headers: { cookie },
  })

  if (!response?.ok) {
    return null
  }

  const session = await response.json()

  return Object.keys(session).length > 0 ? session : null
}

export default async function Layout({ children }: { children: React.ReactNode; props?: any }) {
  const session = await getSession(headers().get('cookie') ?? '')

  return (
    <html>
      <head />
      <body className='bg-[#081113] text-gray-300'>
        <ClientSessionProvider session={session}>
          <Menu />
          <div className='container grid mx-auto max-w-5xl h-screen p-4'>{children}</div>
        </ClientSessionProvider>
      </body>
    </html>
  )
}
