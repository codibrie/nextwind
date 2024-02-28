'use client'

import Image from 'next/image'
import { DiscordLogin, handleLogout } from 'supabase/actions'

const Login = (props) => {
  const { user: data } = props
  const user = data?.user


  return (
    <div className='flex items-center gap-2'>
      {Boolean(!user) && (
        <div className='flex gap-3'>
          <button onClick={() => DiscordLogin()}>
            Sign In with Discord
          </button>
        </div>
      )}

      {Boolean(user) && (
        <>
          <p className='text-sm font-medium'>Welcome, {user?.user_metadata?.name}</p>
          {user?.user_metadata?.avatar_url ? (
            <Image width={32} height={32} onClick={() => handleLogout()} className='rounded-full border-2 cursor-pointer' src={user?.user_metadata?.avatar_url} alt='avatar' />
          ) : (
            <div className='w-8 h-8 rounded-full border-2' />
          )}
        </>
      )}
    </div>
  )
}

export default Login
