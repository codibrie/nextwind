'use client'

import { Database } from '@/types/database.types'
import { DiscordLogin, GoogleLogin } from 'supabase/actions'

export type User = Database['public']['Tables']['users']['Row']

interface UserProps {
  user: User[] | null
}

const Login = (props: UserProps) => {
  const { user: data } = props

  const user = data?.[0]

  return (
    <div className='flex items-center gap-2'>
      {data?.length === 0 && (
        <div className='flex gap-3'>
          <button onClick={() => DiscordLogin()} className='border-r border-white pr-3'>
            Sign In with Discord
          </button>
          <button onClick={() => GoogleLogin()}>Sign In with Google</button>
          <div className='w-8 h-8 rounde-full border-2' />
        </div>
      )}

      {!!data && data?.length > 0 && (
        <>
          <p className='text-sm font-medium'>Welcome, {user?.username || user?.name}</p>
          {/* {data?.user.image ? (
            <img onClick={() => {}} className='w-8 h-8 rounded-full border-2' src={data.user?.image} alt='' />
          ) : ( */}
          <div className='w-8 h-8 rounded-full border-2' />
          {/* )} */}
        </>
      )}
    </div>
  )
}

export default Login
