import Menu from '@/components/menu'
import { Metadata } from 'next'
import { createClient } from '../supabase/server'
import '../global.css'

export const metadata: Metadata = {
  title: '🍃 Nextwind',
  description:
    'Introducing a powerful and efficient full- stack web development starter project built with TypeScript, Next.JS, Supabase, PostgreSQL, TailwindCSS, and Zustand!',
}

export interface DashboardLayoutProps {
  children: React.ReactNode
}

export default async function Layout({ children }: { children: React.ReactNode }) {
  const supabase = createClient()

  const { data: user, error } = await supabase.from('users').select('*')

  console.log('data', user)
  console.log('error', error)

  if (error) {
    console.error(error)

    return null
  }

  return (
    <html>
      <head />
      <body className='bg-[#081113] text-gray-300' cz-shortcut-listen='true'>
        <Menu user={user} />
        <div className='container grid mx-auto max-w-5xl h-screen p-4'>{children}</div>
      </body>
    </html>
  )
}
