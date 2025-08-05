import { useState, useEffect, useMemo } from 'react'
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { supabase } from '@/integrations/supabase/client'
import { useToast } from '@/hooks/use-toast'

export interface CMSArticle {
  id: string
  user_id: string
  title: string
  content?: string
  excerpt?: string
  category?: string
  status: 'draft' | 'review' | 'published' | 'archived'
  author?: string
  publish_date?: string
  views: number
  tags?: string[]
  seo_title?: string
  seo_description?: string
  featured_image_url?: string
  featured: boolean
  created_at: string
  updated_at: string
}

interface UseArticlesOptions {
  status?: string
  category?: string
  search?: string
  featured?: boolean
  limit?: number
  offset?: number
}

export function useCMSArticles(options: UseArticlesOptions = {}) {
  const { toast } = useToast()
  
  return useQuery({
    queryKey: ['cms-articles', options],
    queryFn: async () => {
      let query = supabase
        .from('cms_articles')
        .select('*')
        .order('created_at', { ascending: false })

      // Apply filters based on options
      if (options.status) {
        query = query.eq('status', options.status)
      }
      
      if (options.category) {
        query = query.eq('category', options.category)
      }
      
      if (options.search) {
        query = query.or(`title.ilike.%${options.search}%,content.ilike.%${options.search}%,author.ilike.%${options.search}%`)
      }
      
      if (options.featured !== undefined) {
        query = query.eq('featured', options.featured)
      }

      if (options.limit) {
        query = query.limit(options.limit)
      }

      if (options.offset) {
        query = query.range(options.offset, options.offset + (options.limit || 10) - 1)
      }

      const { data, error } = await query

      if (error) {
        toast({
          title: "Error fetching articles",
          description: error.message,
          variant: "destructive"
        })
        throw error
      }

      return data as CMSArticle[]
    },
    staleTime: 1000 * 60 * 5, // 5 minutes
    gcTime: 1000 * 60 * 10, // 10 minutes
  })
}

export function useCreateCMSArticle() {
  const queryClient = useQueryClient()
  const { toast } = useToast()

  return useMutation({
    mutationFn: async (articleData: Omit<CMSArticle, 'id' | 'created_at' | 'updated_at' | 'views'>) => {
      const { data, error } = await supabase
        .from('cms_articles')
        .insert([{
          ...articleData,
          user_id: (await supabase.auth.getUser()).data.user?.id
        }])
        .select()
        .single()

      if (error) throw error
      return data
    },
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ['cms-articles'] })
      toast({
        title: "Article created",
        description: `"${data.title}" has been created successfully.`
      })
    },
    onError: (error: Error) => {
      toast({
        title: "Error creating article",
        description: error.message,
        variant: "destructive"
      })
    }
  })
}

export function useUpdateCMSArticle() {
  const queryClient = useQueryClient()
  const { toast } = useToast()

  return useMutation({
    mutationFn: async ({ id, updates }: { id: string; updates: Partial<CMSArticle> }) => {
      const { data, error } = await supabase
        .from('cms_articles')
        .update(updates)
        .eq('id', id)
        .select()
        .single()

      if (error) throw error
      return data
    },
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ['cms-articles'] })
      toast({
        title: "Article updated",
        description: `"${data.title}" has been updated successfully.`
      })
    },
    onError: (error: Error) => {
      toast({
        title: "Error updating article",
        description: error.message,
        variant: "destructive"
      })
    }
  })
}

export function useDeleteCMSArticle() {
  const queryClient = useQueryClient()
  const { toast } = useToast()

  return useMutation({
    mutationFn: async (id: string) => {
      const { error } = await supabase
        .from('cms_articles')
        .delete()
        .eq('id', id)

      if (error) throw error
      return id
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['cms-articles'] })
      toast({
        title: "Article deleted",
        description: "The article has been deleted successfully."
      })
    },
    onError: (error: Error) => {
      toast({
        title: "Error deleting article",
        description: error.message,
        variant: "destructive"
      })
    }
  })
}

export function usePersonalizedCMSContent(userTags?: string[], limit = 10) {
  return useQuery({
    queryKey: ['personalized-content', userTags, limit],
    queryFn: async () => {
      const { data, error } = await supabase.rpc('get_personalized_articles', {
        user_tags: userTags || null,
        limit_count: limit
      })

      if (error) throw error
      return data as CMSArticle[]
    },
    staleTime: 1000 * 60 * 15, // 15 minutes for personalized content
    enabled: !!userTags
  })
}