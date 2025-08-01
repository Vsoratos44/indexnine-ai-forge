import { useState, useEffect } from 'react'
import { supabase } from '@/lib/supabase'

export interface ContentItem {
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

export function useContent() {
  const [content, setContent] = useState<ContentItem[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const fetchContent = async () => {
    try {
      setLoading(true)
      const { data, error } = await supabase
        .from('content_pages')
        .select('*')
        .order('updated_at', { ascending: false })

      if (error) throw error
      setContent(data || [])
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred')
    } finally {
      setLoading(false)
    }
  }

  const createContent = async (contentData: Omit<ContentItem, 'id' | 'created_at' | 'updated_at'>) => {
    try {
      const { data, error } = await supabase
        .from('content_pages')
        .insert([contentData])
        .select()

      if (error) throw error
      if (data) {
        setContent(prev => [data[0], ...prev])
      }
      return { data: data?.[0], error: null }
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to create content'
      setError(errorMessage)
      return { data: null, error: errorMessage }
    }
  }

  const updateContent = async (id: string, updates: Partial<ContentItem>) => {
    try {
      const { data, error } = await supabase
        .from('content_pages')
        .update(updates)
        .eq('id', id)
        .select()

      if (error) throw error
      if (data) {
        setContent(prev => prev.map(item => 
          item.id === id ? { ...item, ...data[0] } : item
        ))
      }
      return { data: data?.[0], error: null }
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to update content'
      setError(errorMessage)
      return { data: null, error: errorMessage }
    }
  }

  const deleteContent = async (id: string) => {
    try {
      const { error } = await supabase
        .from('content_pages')
        .delete()
        .eq('id', id)

      if (error) throw error
      setContent(prev => prev.filter(item => item.id !== id))
      return { error: null }
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to delete content'
      setError(errorMessage)
      return { error: errorMessage }
    }
  }

  const publishContent = async (id: string) => {
    return updateContent(id, { published: true })
  }

  const unpublishContent = async (id: string) => {
    return updateContent(id, { published: false })
  }

  useEffect(() => {
    fetchContent()

    // Subscribe to real-time changes
    const subscription = supabase
      .channel('content_changes')
      .on('postgres_changes', 
        { 
          event: '*', 
          schema: 'public', 
          table: 'content_pages' 
        }, 
        (payload) => {
          if (payload.eventType === 'INSERT') {
            setContent(prev => [payload.new as ContentItem, ...prev])
          } else if (payload.eventType === 'UPDATE') {
            setContent(prev => prev.map(item => 
              item.id === payload.new.id ? payload.new as ContentItem : item
            ))
          } else if (payload.eventType === 'DELETE') {
            setContent(prev => prev.filter(item => item.id !== payload.old.id))
          }
        }
      )
      .subscribe()

    return () => {
      subscription.unsubscribe()
    }
  }, [])

  return {
    content,
    loading,
    error,
    createContent,
    updateContent,
    deleteContent,
    publishContent,
    unpublishContent,
    refreshContent: fetchContent
  }
}