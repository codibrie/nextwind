'use server'

import { redirect } from 'next/navigation'

import { createClient } from './server'

export async function GoogleLogin() {
  const supabase = createClient()

  const { error } = await supabase.auth.signInWithOAuth({
    provider: 'google',
    options: { redirectTo: process.env.NEXT_PUBLIC_SUPABASE_REDIRECT_URL },
  })

  if (error) {
    console.log(error)
    redirect('/error')
  }
}

export async function DiscordLogin() {
  const supabase = createClient()

  const { error, data } = await supabase.auth.signInWithOAuth({
    provider: 'discord',
    options: { redirectTo: process.env.NEXT_PUBLIC_SUPABASE_REDIRECT_URL },
  })

  console.log('discord', data)

  if (error) {
    console.log(error)
    redirect('/error')
  }
}

export async function EmailLogin(formData: FormData) {
  const supabase = createClient()

  const { error } = await supabase.auth.signInWithOtp({
    email: formData.get('email') as string,
  })

  if (error) {
    console.log(error)
    redirect('/error')
  }
}
