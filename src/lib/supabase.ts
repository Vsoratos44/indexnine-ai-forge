import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://your-project.supabase.co'
const supabaseAnonKey = 'your-anon-key'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

export type Database = {
  public: {
    Tables: {
      content_pages: {
        Row: {
          id: string
          title: string
          slug: string
          component_type: string
          content_data: any
          published: boolean
          created_at: string
          updated_at: string
          created_by: string
        }
        Insert: {
          id?: string
          title: string
          slug: string
          component_type: string
          content_data: any
          published?: boolean
          created_by: string
        }
        Update: {
          id?: string
          title?: string
          slug?: string
          component_type?: string
          content_data?: any
          published?: boolean
          updated_at?: string
        }
      }
      content_blocks: {
        Row: {
          id: string
          page_id: string
          block_type: string
          block_data: any
          order_index: number
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          page_id: string
          block_type: string
          block_data: any
          order_index: number
        }
        Update: {
          id?: string
          page_id?: string
          block_type?: string
          block_data?: any
          order_index?: number
          updated_at?: string
        }
      }
      users: {
        Row: {
          id: string
          email: string
          role: 'admin' | 'editor' | 'viewer'
          created_at: string
          updated_at: string
        }
        Insert: {
          id: string
          email: string
          role?: 'admin' | 'editor' | 'viewer'
        }
        Update: {
          email?: string
          role?: 'admin' | 'editor' | 'viewer'
          updated_at?: string
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
  }
}