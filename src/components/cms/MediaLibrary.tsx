import React, { useState, useRef } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { 
  Upload, 
  Image as ImageIcon, 
  File, 
  Search, 
  Filter,
  Download,
  Trash2,
  Plus,
  Grid,
  List
} from 'lucide-react'
import { supabase } from '@/integrations/supabase/client'
import { toast } from 'sonner'

interface DigitalAsset {
  id: string
  filename: string
  original_filename: string
  file_type: string
  file_size: number
  storage_path: string
  alt_text?: string
  metadata: any
  created_at: string
}

const MediaLibrary = () => {
  const [assets, setAssets] = useState<DigitalAsset[]>([])
  const [loading, setLoading] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
  const fileInputRef = useRef<HTMLInputElement>(null)

  const fetchAssets = async () => {
    try {
      setLoading(true)
      // Return empty array when database tables don't exist yet
      setAssets([])
      toast.error('Database tables not created yet. Please run migrations first.')
    } catch (error) {
      toast.error('Failed to fetch media assets')
    } finally {
      setLoading(false)
    }
  }

  React.useEffect(() => {
    fetchAssets()
  }, [])

  const handleFileUpload = async (files: FileList) => {
    for (const file of Array.from(files)) {
      try {
        setLoading(true)
        
        // Upload to Supabase storage (will need bucket setup)
        const fileName = `${Date.now()}-${file.name}`
        const { data: uploadData, error: uploadError } = await supabase.storage
          .from('media')
          .upload(fileName, file)

        if (uploadError) {
          // If storage fails, we'll still record the asset with local path
          console.warn('Storage upload failed, recording asset metadata only:', uploadError)
        }

        // Database not available yet - show error
        toast.error('Database not available. Please run migrations first.')
        return
      } catch (error) {
        toast.error(`Failed to upload ${file.name}`)
      } finally {
        setLoading(false)
      }
    }
    
    // Refresh assets list
    fetchAssets()
  }

  const getImageDimensions = (file: File): Promise<{ width: number; height: number } | null> => {
    return new Promise((resolve) => {
      if (!file.type.startsWith('image/')) {
        resolve(null)
        return
      }
      
      const img = new Image()
      img.onload = () => {
        resolve({ width: img.width, height: img.height })
      }
      img.onerror = () => resolve(null)
      img.src = URL.createObjectURL(file)
    })
  }

  const handleDelete = async (id: string, filename: string) => {
    toast.error('Database not available. Please run migrations first.')
  }

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return '0 Bytes'
    const k = 1024
    const sizes = ['Bytes', 'KB', 'MB', 'GB']
    const i = Math.floor(Math.log(bytes) / Math.log(k))
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i]
  }

  const filteredAssets = assets.filter(asset =>
    asset.original_filename.toLowerCase().includes(searchTerm.toLowerCase()) ||
    asset.file_type.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-foreground-white">Media Library</h2>
          <p className="text-foreground-white/60">Manage images, videos, and documents</p>
        </div>
        <Button 
          onClick={() => fileInputRef.current?.click()}
          className="bg-brand-primary hover:bg-brand-primary-dark"
        >
          <Plus className="w-4 h-4 mr-2" />
          Upload Media
        </Button>
      </div>

      {/* Upload Input */}
      <input
        ref={fileInputRef}
        type="file"
        multiple
        accept="image/*,video/*,.pdf,.doc,.docx"
        className="hidden"
        onChange={(e) => e.target.files && handleFileUpload(e.target.files)}
      />

      {/* Search and Controls */}
      <Card className="bg-background-dark/80 backdrop-blur-md border border-white/10">
        <CardContent className="p-6">
          <div className="flex flex-col sm:flex-row gap-4 items-center">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-foreground-white/40 w-4 h-4" />
                <Input
                  placeholder="Search media..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 bg-background-dark/40 border-white/20 text-foreground-white placeholder:text-white/40"
                />
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Button
                variant={viewMode === 'grid' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setViewMode('grid')}
                className="border-white/20"
              >
                <Grid className="w-4 h-4" />
              </Button>
              <Button
                variant={viewMode === 'list' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setViewMode('list')}
                className="border-white/20"
              >
                <List className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Upload Zone */}
      <Card 
        className="bg-background-dark/80 backdrop-blur-md border border-dashed border-white/20 hover:border-brand-primary/50 cursor-pointer transition-colors"
        onClick={() => fileInputRef.current?.click()}
      >
        <CardContent className="p-12 text-center">
          <Upload className="w-12 h-12 text-foreground-white/40 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-foreground-white mb-2">Drop files here or click to upload</h3>
          <p className="text-foreground-white/60">Supports images, videos, PDFs, and documents</p>
        </CardContent>
      </Card>

      {/* Assets Grid/List */}
      {loading ? (
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {[...Array(8)].map((_, i) => (
            <Card key={i} className="bg-background-dark/80 backdrop-blur-md border border-white/10">
              <CardContent className="p-4">
                <div className="animate-pulse">
                  <div className="h-32 bg-white/10 rounded mb-4"></div>
                  <div className="h-4 bg-white/10 rounded w-3/4 mb-2"></div>
                  <div className="h-3 bg-white/10 rounded w-1/2"></div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      ) : filteredAssets.length === 0 ? (
        <Card className="bg-background-dark/80 backdrop-blur-md border border-white/10">
          <CardContent className="p-12 text-center">
            <ImageIcon className="w-12 h-12 text-foreground-white/40 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-foreground-white mb-2">No media found</h3>
            <p className="text-foreground-white/60">Upload your first media asset to get started</p>
          </CardContent>
        </Card>
      ) : (
        <div className={viewMode === 'grid' 
          ? "grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6" 
          : "space-y-4"
        }>
          {filteredAssets.map((asset) => (
            <Card key={asset.id} className="bg-background-dark/80 backdrop-blur-md border border-white/10 shadow-glow">
              <CardContent className={viewMode === 'grid' ? "p-4" : "p-6"}>
                {viewMode === 'grid' ? (
                  <div>
                    <div className="h-32 bg-background-dark/40 rounded-lg flex items-center justify-center mb-4">
                      {asset.file_type.startsWith('image/') ? (
                        <ImageIcon className="w-8 h-8 text-foreground-white/40" />
                      ) : (
                        <File className="w-8 h-8 text-foreground-white/40" />
                      )}
                    </div>
                    <h4 className="font-medium text-foreground-white mb-1 truncate" title={asset.original_filename}>
                      {asset.original_filename}
                    </h4>
                    <p className="text-sm text-foreground-white/60 mb-2">{formatFileSize(asset.file_size)}</p>
                    <div className="flex space-x-1">
                      <Button variant="outline" size="sm" className="flex-1 border-white/20 text-foreground-white">
                        <Download className="w-3 h-3" />
                      </Button>
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="border-red-400/20 text-red-400 hover:bg-red-500/20"
                        onClick={() => handleDelete(asset.id, asset.original_filename)}
                      >
                        <Trash2 className="w-3 h-3" />
                      </Button>
                    </div>
                  </div>
                ) : (
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="p-3 bg-background-dark/40 rounded-lg">
                        {asset.file_type.startsWith('image/') ? (
                          <ImageIcon className="w-6 h-6 text-foreground-white/40" />
                        ) : (
                          <File className="w-6 h-6 text-foreground-white/40" />
                        )}
                      </div>
                      <div>
                        <h4 className="font-medium text-foreground-white">{asset.original_filename}</h4>
                        <div className="flex items-center space-x-4 text-sm text-foreground-white/60">
                          <span>{formatFileSize(asset.file_size)}</span>
                          <Badge variant="secondary" className="text-xs">
                            {asset.file_type.split('/')[1]?.toUpperCase() || 'FILE'}
                          </Badge>
                          <span>{new Date(asset.created_at).toLocaleDateString()}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <Button variant="outline" size="sm" className="border-white/20 text-foreground-white">
                        <Download className="w-4 h-4 mr-2" />
                        Download
                      </Button>
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="border-red-400/20 text-red-400 hover:bg-red-500/20"
                        onClick={() => handleDelete(asset.id, asset.original_filename)}
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  )
}

export default MediaLibrary