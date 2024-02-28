export type Json = string | number | boolean | null | { [key: string]: Json | undefined } | Json[]

export type Database = {
  public: {
    Tables: {
      users: {
        Row: {
          created_at: string | null
          email: string | null
          energy: number
          id: string
          is_active: boolean
          is_admin: boolean | null
          level: number | null
          name: string | null
          username: string | null
          version: number | null
        }
        Insert: {
          created_at?: string | null
          email?: string | null
          energy?: number
          id?: string
          is_active?: boolean
          is_admin?: boolean | null
          level?: number | null
          name?: string | null
          username?: string | null
          version?: number | null
        }
        Update: {
          created_at?: string | null
          email?: string | null
          energy?: number
          id?: string
          is_active?: boolean
          is_admin?: boolean | null
          level?: number | null
          name?: string | null
          username?: string | null
          version?: number | null
        }
        Relationships: []
      }
    }
  }
}
