import { createClient } from '@supabase/supabase-js'
import { Database } from 'types/database.types'

export const supabase = async (jwt_token: string) =>
  createClient<Database>(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.SUPABASE_SERVICE_ROLE!, {
    global: {
      headers: {
        Authorization: `Bearer ${jwt_token}`,
      },
    },
  })
