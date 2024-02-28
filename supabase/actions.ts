'use server'

import { redirect } from 'next/navigation'

import { createClient } from './server'

const getURL = () => {
  let url = process?.env?.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000/'

  url = url.includes('http') ? url : `https://${url}`

  url = url.charAt(url.length - 1) === '/' ? url : `${url}/`

  return url
}

export async function DiscordLogin() {
  const supabase = createClient()

  const { error, data } = await supabase.auth.signInWithOAuth({
    provider: 'discord',
    options: {
      redirectTo: `${getURL()}auth/callback`,
    },
  })

  if (error) {
    console.log(error)
    redirect('/error')
  } else {
    redirect(data.url)
  }
}

export const handleLogout = async () => {
  const supabase = createClient()
  const { error } = await supabase.auth.signOut()

  if (!error) {
    redirect('/')
  }
}
