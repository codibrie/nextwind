import { type NextRequest, NextResponse } from 'next/server'

import { createClient } from '../../../supabase/server'

export async function GET(request: NextRequest) {
  const reqUrl = new URL(request.url)
  const { searchParams } = reqUrl
  const code = searchParams.get('code')
  const next = reqUrl.origin

  const redirectTo = request.nextUrl.clone()
  redirectTo.pathname = next
  redirectTo.searchParams.delete('code')

  if (code) {
    const supabase = createClient()

    const { error } = await supabase.auth.exchangeCodeForSession(code)
    if (!error) {
      redirectTo.searchParams.delete('code')

      return NextResponse.redirect(reqUrl.origin)
    }
  }

  // return the user to an error page with some instructions
  redirectTo.pathname = '/error'

  return NextResponse.redirect(reqUrl.origin)
}
