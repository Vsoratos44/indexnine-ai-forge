import { useState, useEffect, useCallback } from 'react'
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

export function useOptimizedContent() {
  const [content, setContent] = useState<ContentItem[]>([])
  const [loading, setLoading] = useState(false) // Start as false
  const [error, setError] = useState<string | null>(null)

  const fetchContent = useCallback(async () => {
    try {
      setLoading(true)
      
      // Use a more efficient query with select only needed fields
      const { data, error } = await supabase
        .from('content_pages')
        .select('*') // Get all fields to match ContentItem interface
        .eq('published', true) // Only fetch published content
        .order('updated_at', { ascending: false })
        .limit(10) // Limit results for better performance

      if (error) {
        // Don't throw on database errors, just return empty array
        console.warn('Content fetch error:', error)
        setContent([])
        return
      }
      
      setContent(data || [])
    } catch (err) {
      console.warn('Content fetch error:', err)
      setContent([]) // Gracefully degrade to empty content
    } finally {
      setLoading(false)
    }
  }, [])

  // Debounced content fetching - only fetch when actually needed
  const debouncedFetch = useCallback(() => {
    const timeoutId = setTimeout(fetchContent, 100)
    return () => clearTimeout(timeoutId)
  }, [fetchContent])

  useEffect(() => {
    // Don't auto-fetch on mount - only when explicitly requested
    // This prevents blocking the initial page load
  }, [])

  return {
    content,
    loading,
    error,
    fetchContent: debouncedFetch,
    hasContent: content.length > 0
  }
}