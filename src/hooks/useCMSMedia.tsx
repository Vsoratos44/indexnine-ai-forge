import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { supabase } from '@/integrations/supabase/client'
import { useToast } from '@/hooks/use-toast'

export interface CMSMedia {
  id: string
  user_id: string
  filename: string
  original_name: string
  file_type: string
  file_size: number
  url: string
  alt_text?: string
  caption?: string
  folder: string
  tags?: string[]
  created_at: string
  updated_at: string
}

interface UseMediaOptions {
  fileType?: string
  folder?: string
  search?: string
  tags?: string[]
  limit?: number
  offset?: number
}

export function useCMSMedia(options: UseMediaOptions = {}) {
  const { toast } = useToast()
  
  return useQuery({
    queryKey: ['cms-media', options],
    queryFn: async () => {
      let query = supabase
        .from('cms_media')
        .select('*')
        .order('created_at', { ascending: false })

      if (options.fileType) {
        query = query.eq('file_type', options.fileType)
      }
      
      if (options.folder) {
        query = query.eq('folder', options.folder)
      }
      
      if (options.search) {
        query = query.or(`filename.ilike.%${options.search}%,original_name.ilike.%${options.search}%,alt_text.ilike.%${options.search}%`)
      }

      if (options.limit) {
        query = query.limit(options.limit)
      }

      if (options.offset) {
        query = query.range(options.offset, options.offset + (options.limit || 20) - 1)
      }

      const { data, error } = await query

      if (error) {
        toast({
          title: "Error fetching media",
          description: error.message,
          variant: "destructive"
        })
        throw error
      }

      return data as CMSMedia[]
    },
    staleTime: 1000 * 60 * 5, // 5 minutes
  })
}

export function useUploadCMSMedia() {
  const queryClient = useQueryClient()
  const { toast } = useToast()

  return useMutation({
    mutationFn: async ({ file, folder = '/', altText, caption, tags }: {
      file: File
      folder?: string
      altText?: string
      caption?: string
      tags?: string[]
    }) => {
      // Upload file to Supabase storage
      const fileExt = file.name.split('.').pop()
      const fileName = `${Date.now()}-${Math.random().toString(36).substring(2)}.${fileExt}`
      const filePath = `${folder}/${fileName}`

      const { data: uploadData, error: uploadError } = await supabase.storage
        .from('media')
        .upload(filePath, file)

      if (uploadError) throw uploadError

      // Get public URL
      const { data: { publicUrl } } = supabase.storage
        .from('media')
        .getPublicUrl(filePath)

      // Insert media record
      const { data, error } = await supabase
        .from('cms_media')
        .insert([{
          user_id: (await supabase.auth.getUser()).data.user?.id,
          filename: fileName,
          original_name: file.name,
          file_type: file.type,
          file_size: file.size,
          url: publicUrl,
          alt_text: altText,
          caption,
          folder,
          tags
        }])
        .select()
        .single()

      if (error) throw error
      return data
    },
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ['cms-media'] })
      toast({
        title: "Media uploaded",
        description: `"${data.original_name}" has been uploaded successfully.`
      })
    },
    onError: (error: Error) => {
      toast({
        title: "Error uploading media",
        description: error.message,
        variant: "destructive"
      })
    }
  })
}

export function useDeleteCMSMedia() {
  const queryClient = useQueryClient()
  const { toast } = useToast()

  return useMutation({
    mutationFn: async (media: CMSMedia) => {
      // Delete from storage first
      const { error: storageError } = await supabase.storage
        .from('media')
        .remove([`${media.folder}/${media.filename}`])

      if (storageError) throw storageError

      // Delete from database
      const { error } = await supabase
        .from('cms_media')
        .delete()
        .eq('id', media.id)

      if (error) throw error
      return media.id
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['cms-media'] })
      toast({
        title: "Media deleted",
        description: "The media file has been deleted successfully."
      })
    },
    onError: (error: Error) => {
      toast({
        title: "Error deleting media",
        description: error.message,
        variant: "destructive"
      })
    }
  })
}