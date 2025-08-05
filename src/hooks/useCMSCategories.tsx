import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { supabase } from '@/integrations/supabase/client'
import { useToast } from '@/hooks/use-toast'

export interface CMSCategory {
  id: string
  user_id: string
  name: string
  slug: string
  description?: string
  parent_id?: string
  color: string
  article_count: number
  created_at: string
  updated_at: string
}

export function useCMSCategories() {
  const { toast } = useToast()
  
  return useQuery({
    queryKey: ['cms-categories'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('cms_categories')
        .select('*')
        .order('name')

      if (error) {
        toast({
          title: "Error fetching categories",
          description: error.message,
          variant: "destructive"
        })
        throw error
      }

      return data as CMSCategory[]
    },
    staleTime: 1000 * 60 * 10, // 10 minutes
  })
}

export function useCreateCMSCategory() {
  const queryClient = useQueryClient()
  const { toast } = useToast()

  return useMutation({
    mutationFn: async (categoryData: Omit<CMSCategory, 'id' | 'created_at' | 'updated_at' | 'article_count'>) => {
      const { data, error } = await supabase
        .from('cms_categories')
        .insert([{
          ...categoryData,
          user_id: (await supabase.auth.getUser()).data.user?.id
        }])
        .select()
        .single()

      if (error) throw error
      return data
    },
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ['cms-categories'] })
      toast({
        title: "Category created",
        description: `"${data.name}" has been created successfully.`
      })
    },
    onError: (error: Error) => {
      toast({
        title: "Error creating category",
        description: error.message,
        variant: "destructive"
      })
    }
  })
}

export function useUpdateCMSCategory() {
  const queryClient = useQueryClient()
  const { toast } = useToast()

  return useMutation({
    mutationFn: async ({ id, updates }: { id: string; updates: Partial<CMSCategory> }) => {
      const { data, error } = await supabase
        .from('cms_categories')
        .update(updates)
        .eq('id', id)
        .select()
        .single()

      if (error) throw error
      return data
    },
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ['cms-categories'] })
      toast({
        title: "Category updated",
        description: `"${data.name}" has been updated successfully.`
      })
    },
    onError: (error: Error) => {
      toast({
        title: "Error updating category",
        description: error.message,
        variant: "destructive"
      })
    }
  })
}