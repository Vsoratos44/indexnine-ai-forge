import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { 
  Plus, 
  Edit, 
  Eye, 
  Search, 
  Filter,
  Clock,
  Globe,
  FileText,
  Trash2
} from 'lucide-react'
import { useContent } from '@/hooks/useContent'
import { toast } from 'sonner'

const ContentManager = () => {
  const { content, loading, deleteContent, publishContent, unpublishContent } = useContent()
  const [searchTerm, setSearchTerm] = useState('')
  const [statusFilter, setStatusFilter] = useState('all')
  const [typeFilter, setTypeFilter] = useState('all')

  const filteredContent = content.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.component_type.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus = statusFilter === 'all' || 
                         (statusFilter === 'published' && item.published) ||
                         (statusFilter === 'draft' && !item.published)
    const matchesType = typeFilter === 'all' || item.component_type === typeFilter

    return matchesSearch && matchesStatus && matchesType
  })

  const handleDelete = async (id: string, title: string) => {
    if (window.confirm(`Are you sure you want to delete "${title}"?`)) {
      const { error } = await deleteContent(id)
      if (error) {
        toast.error(`Failed to delete content: ${error}`)
      } else {
        toast.success('Content deleted successfully')
      }
    }
  }

  const handleTogglePublish = async (id: string, title: string, currentStatus: boolean) => {
    const action = currentStatus ? unpublishContent : publishContent
    const { error } = await action(id)
    
    if (error) {
      toast.error(`Failed to ${currentStatus ? 'unpublish' : 'publish'} content: ${error}`)
    } else {
      toast.success(`Content ${currentStatus ? 'unpublished' : 'published'} successfully`)
    }
  }

  const componentTypes = ['Hero', 'ValueProposition', 'SocialProof', 'ClientExperience', 'ProductLifecycle', 'PracticesStudios', 'Differentiators', 'InsightsCarousel', 'Footer']

  if (loading) {
    return (
      <div className="space-y-6">
        {[...Array(3)].map((_, i) => (
          <Card key={i} className="bg-background-dark/80 backdrop-blur-md border border-white/10">
            <CardContent className="p-6">
              <div className="animate-pulse">
                <div className="h-4 bg-white/10 rounded w-1/4 mb-2"></div>
                <div className="h-3 bg-white/10 rounded w-3/4 mb-4"></div>
                <div className="h-3 bg-white/10 rounded w-1/2"></div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    )
  }

  return (
    <div className="space-y-6">
      {/* Header with Actions */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-foreground-white">Content Management</h2>
          <p className="text-foreground-white/60">Manage all website content components</p>
        </div>
        <Link to="/cms/content/new">
          <Button className="bg-brand-primary hover:bg-brand-primary-dark">
            <Plus className="w-4 h-4 mr-2" />
            Create Content
          </Button>
        </Link>
      </div>

      {/* Filters */}
      <Card className="bg-background-dark/80 backdrop-blur-md border border-white/10">
        <CardContent className="p-6">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-foreground-white/40 w-4 h-4" />
                <Input
                  placeholder="Search content..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 bg-background-dark/40 border-white/20 text-foreground-white placeholder:text-white/40"
                />
              </div>
            </div>
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="w-40 bg-background-dark/40 border-white/20 text-foreground-white">
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent className="bg-background-dark border-white/20">
                <SelectItem value="all" className="text-foreground-white">All Status</SelectItem>
                <SelectItem value="published" className="text-foreground-white">Published</SelectItem>
                <SelectItem value="draft" className="text-foreground-white">Draft</SelectItem>
              </SelectContent>
            </Select>
            <Select value={typeFilter} onValueChange={setTypeFilter}>
              <SelectTrigger className="w-48 bg-background-dark/40 border-white/20 text-foreground-white">
                <SelectValue placeholder="Type" />
              </SelectTrigger>
              <SelectContent className="bg-background-dark border-white/20">
                <SelectItem value="all" className="text-foreground-white">All Types</SelectItem>
                {componentTypes.map(type => (
                  <SelectItem key={type} value={type} className="text-foreground-white">{type}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Content List */}
      <div className="grid gap-6">
        {filteredContent.length === 0 ? (
          <Card className="bg-background-dark/80 backdrop-blur-md border border-white/10">
            <CardContent className="p-12 text-center">
              <FileText className="w-12 h-12 text-foreground-white/40 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-foreground-white mb-2">No content found</h3>
              <p className="text-foreground-white/60 mb-4">
                {searchTerm || statusFilter !== 'all' || typeFilter !== 'all'
                  ? 'No content matches your current filters.'
                  : 'Get started by creating your first content item.'
                }
              </p>
              <Link to="/cms/content/new">
                <Button className="bg-brand-primary hover:bg-brand-primary-dark">
                  <Plus className="w-4 h-4 mr-2" />
                  Create Content
                </Button>
              </Link>
            </CardContent>
          </Card>
        ) : (
          filteredContent.map((item) => (
            <Card key={item.id} className="bg-background-dark/80 backdrop-blur-md border border-white/10 shadow-glow">
              <CardContent className="p-6">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <h3 className="text-lg font-semibold text-foreground-white">{item.title}</h3>
                      <Badge 
                        variant={item.published ? 'default' : 'secondary'} 
                        className={item.published ? 'bg-green-500/20 text-green-400' : 'bg-gray-500/20 text-gray-400'}
                      >
                        {item.published ? 'Published' : 'Draft'}
                      </Badge>
                    </div>
                    <p className="text-foreground-white/70 mb-3">
                      Component: <code className="bg-background-dark/60 px-2 py-1 rounded text-brand-primary">{item.component_type}</code>
                    </p>
                    <div className="flex items-center space-x-4 text-sm text-foreground-white/60">
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        Updated {new Date(item.updated_at).toLocaleDateString()}
                      </div>
                      {item.published && (
                        <div className="flex items-center">
                          <Globe className="w-4 h-4 mr-1" />
                          Live
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <Link to={`/cms/content/edit/${item.id}`}>
                      <Button variant="outline" size="sm" className="border-white/20 text-foreground-white hover:bg-brand-primary/20">
                        <Edit className="w-4 h-4 mr-2" />
                        Edit
                      </Button>
                    </Link>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="border-white/20 text-foreground-white hover:bg-brand-primary/20"
                      onClick={() => handleTogglePublish(item.id, item.title, item.published)}
                    >
                      {item.published ? (
                        <>
                          <Eye className="w-4 h-4 mr-2" />
                          Unpublish
                        </>
                      ) : (
                        <>
                          <Globe className="w-4 h-4 mr-2" />
                          Publish
                        </>
                      )}
                    </Button>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="border-red-400/20 text-red-400 hover:bg-red-500/20"
                      onClick={() => handleDelete(item.id, item.title)}
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))
        )}
      </div>
    </div>
  )
}

export default ContentManager