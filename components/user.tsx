/* eslint-disable @next/next/no-img-element */
import { signIn, signOut, useSession } from 'next-auth/react'

const User = () => {
  const { data, status } = useSession()

  return (
    <div className='flex items-center gap-2'>
      {status === 'loading' && <div className='w-8 h-8 rounded-full bg-purple-50 border-2' />}

      {status === 'unauthenticated' && (
        <>
          <button onClick={() => signIn()}>Sign In</button>
          <div className='w-8 h-8 rounded-full border-2' />
        </>
      )}

      {status === 'authenticated' && (
        <>
          <p className='text-sm font-medium'>Welcome, {data?.user.name}</p>
          <img onClick={() => signOut()} className='w-8 h-8 rounded-full border-2' src={data?.user.image} alt='' />
        </>
      )}
    </div>
  )
}

export default User
