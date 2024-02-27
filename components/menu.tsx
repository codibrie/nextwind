import Link from 'next/link'
import Login from './user'
import { Database } from '@/types/database.types'

export type User = Database['public']['Tables']['users']['Row']
interface UserProps {
  user: User[] | null
}

export const Menu = (props: UserProps) => {

  const { user } = props

  return (
    <div className='text-white p-4 border-b border-white border-opacity-10 border-dotted'>
      <div className='container flex flex-row justify-between mx-auto max-w-5xl'>
        <Link href='/'>
          <span>🍃 Nextwind</span>
        </Link>
        <Login user={user} />
      </div>
    </div>
  )
}

export default Menu
