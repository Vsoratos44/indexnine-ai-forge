import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { supabase } from '@/integrations/supabase/client'
import { useToast } from '@/hooks/use-toast'

export interface CMSUser {
  id: string
  user_id: string
  name: string
  email: string
  role: 'super_user' | 'manager' | 'editor' | 'publisher' | 'author' | 'contributor'
  status: 'active' | 'inactive' | 'suspended'
  avatar_url?: string
  last_login?: string
  created_at: string
  updated_at: string
}

export function useCMSUsers() {
  const { toast } = useToast()
  
  return useQuery({
    queryKey: ['cms-users'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('cms_users')
        .select('*')
        .order('created_at', { ascending: false })

      if (error) {
        toast({
          title: "Error fetching users",
          description: error.message,
          variant: "destructive"
        })
        throw error
      }

      return data as CMSUser[]
    },
    staleTime: 1000 * 60 * 5, // 5 minutes
  })
}

export function useCurrentCMSUser() {
  return useQuery({
    queryKey: ['current-cms-user'],
    queryFn: async () => {
      const { data: authUser } = await supabase.auth.getUser()
      
      if (!authUser.user) return null

      const { data, error } = await supabase
        .from('cms_users')
        .select('*')
        .eq('user_id', authUser.user.id)
        .single()

      if (error && error.code !== 'PGRST116') throw error
      return data as CMSUser | null
    },
    staleTime: 1000 * 60 * 10, // 10 minutes
  })
}

export function useCreateCMSUser() {
  const queryClient = useQueryClient()
  const { toast } = useToast()

  return useMutation({
    mutationFn: async (userData: Omit<CMSUser, 'id' | 'created_at' | 'updated_at'>) => {
      const { data, error } = await supabase
        .from('cms_users')
        .insert([userData])
        .select()
        .single()

      if (error) throw error
      return data
    },
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ['cms-users'] })
      toast({
        title: "User created",
        description: `"${data.name}" has been added to the CMS.`
      })
    },
    onError: (error: Error) => {
      toast({
        title: "Error creating user",
        description: error.message,
        variant: "destructive"
      })
    }
  })
}

export function useUpdateCMSUser() {
  const queryClient = useQueryClient()
  const { toast } = useToast()

  return useMutation({
    mutationFn: async ({ id, updates }: { id: string; updates: Partial<CMSUser> }) => {
      const { data, error } = await supabase
        .from('cms_users')
        .update(updates)
        .eq('id', id)
        .select()
        .single()

      if (error) throw error
      return data
    },
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ['cms-users'] })
      queryClient.invalidateQueries({ queryKey: ['current-cms-user'] })
      toast({
        title: "User updated",
        description: `"${data.name}" has been updated successfully.`
      })
    },
    onError: (error: Error) => {
      toast({
        title: "Error updating user",
        description: error.message,
        variant: "destructive"
      })
    }
  })
}

export function useUpdateLastLogin() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async () => {
      const { data: authUser } = await supabase.auth.getUser()
      
      if (!authUser.user) throw new Error('No authenticated user')

      const { data, error } = await supabase
        .from('cms_users')
        .update({ last_login: new Date().toISOString() })
        .eq('user_id', authUser.user.id)
        .select()
        .single()

      if (error) throw error
      return data
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['current-cms-user'] })
      queryClient.invalidateQueries({ queryKey: ['cms-users'] })
    }
  })
}