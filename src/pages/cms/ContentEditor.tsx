import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Switch } from '@/components/ui/switch'
import { ArrowLeft, Save, Eye, Globe } from 'lucide-react'
import { useContent, ContentItem } from '@/hooks/useContent'
import { useAuth } from '@/hooks/useAuth'
import { toast } from 'sonner'

const ContentEditor = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const { user } = useAuth()
  const { content, updateContent, createContent, publishContent, unpublishContent } = useContent()
  
  const [formData, setFormData] = useState({
    title: '',
    slug: '',
    component_type: '',
    content_data: {},
    published: false
  })
  
  const [isLoading, setIsLoading] = useState(false)
  const [currentContent, setCurrentContent] = useState<ContentItem | null>(null)

  const componentTypes = [
    { value: 'Hero', label: 'Hero Section' },
    { value: 'ValueProposition', label: 'Value Proposition' },
    { value: 'SocialProof', label: 'Social Proof' },
    { value: 'ClientExperience', label: 'Client Experience' },
    { value: 'ProductLifecycle', label: 'Product Lifecycle' },
    { value: 'PracticesStudios', label: 'Practices & Studios' },
    { value: 'Differentiators', label: 'Differentiators' },
    { value: 'InsightsCarousel', label: 'Insights Carousel' },
    { value: 'Footer', label: 'Footer' }
  ]

  useEffect(() => {
    if (id && content.length > 0) {
      const item = content.find(c => c.id === id)
      if (item) {
        setCurrentContent(item)
        setFormData({
          title: item.title,
          slug: item.slug,
          component_type: item.component_type,
          content_data: item.content_data || {},
          published: item.published
        })
      }
    }
  }, [id, content])

  const handleInputChange = (field: string, value: any) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const handleContentDataChange = (field: string, value: any) => {
    setFormData(prev => ({
      ...prev,
      content_data: {
        ...prev.content_data,
        [field]: value
      }
    }))
  }

  const handleSave = async () => {
    if (!user) return
    
    setIsLoading(true)
    
    try {
      if (id && currentContent) {
        // Update existing content
        const { error } = await updateContent(id, {
          ...formData,
          updated_at: new Date().toISOString()
        })
        
        if (error) {
          toast.error(`Failed to update: ${error}`)
        } else {
          toast.success('Content updated successfully!')
        }
      } else {
        // Create new content
        const { error } = await createContent({
          ...formData,
          created_by: user.id
        })
        
        if (error) {
          toast.error(`Failed to create: ${error}`)
        } else {
          toast.success('Content created successfully!')
          navigate('/cms/dashboard')
        }
      }
    } catch (error) {
      toast.error('An unexpected error occurred')
    } finally {
      setIsLoading(false)
    }
  }

  const handlePublishToggle = async () => {
    if (!id || !currentContent) return
    
    setIsLoading(true)
    
    try {
      if (currentContent.published) {
        await unpublishContent(id)
        toast.success('Content unpublished')
      } else {
        await publishContent(id)
        toast.success('Content published!')
      }
    } catch (error) {
      toast.error('Failed to toggle publish status')
    } finally {
      setIsLoading(false)
    }
  }

  const renderContentFields = () => {
    switch (formData.component_type) {
      case 'Hero':
        return (
          <div className="space-y-4">
            <div>
              <Label htmlFor="hero-title">Hero Title</Label>
              <Input
                id="hero-title"
                value={(formData.content_data as any)?.title || ''}
                onChange={(e) => handleContentDataChange('title', e.target.value)}
                placeholder="Enter hero title"
              />
            </div>
            <div>
              <Label htmlFor="hero-subtitle">Hero Subtitle</Label>
              <Textarea
                id="hero-subtitle"
                value={(formData.content_data as any)?.subtitle || ''}
                onChange={(e) => handleContentDataChange('subtitle', e.target.value)}
                placeholder="Enter hero subtitle"
                rows={3}
              />
            </div>
            <div>
              <Label htmlFor="hero-cta">Call to Action Text</Label>
              <Input
                id="hero-cta"
                value={(formData.content_data as any)?.ctaText || ''}
                onChange={(e) => handleContentDataChange('ctaText', e.target.value)}
                placeholder="Enter CTA text"
              />
            </div>
          </div>
        )
      
      case 'ValueProposition':
        return (
          <div className="space-y-4">
            <div>
              <Label htmlFor="vp-heading">Main Heading</Label>
              <Input
                id="vp-heading"
                value={(formData.content_data as any)?.heading || ''}
                onChange={(e) => handleContentDataChange('heading', e.target.value)}
                placeholder="Enter main heading"
              />
            </div>
            <div>
              <Label htmlFor="vp-description">Description</Label>
              <Textarea
                id="vp-description"
                value={(formData.content_data as any)?.description || ''}
                onChange={(e) => handleContentDataChange('description', e.target.value)}
                placeholder="Enter description"
                rows={4}
              />
            </div>
          </div>
        )
      
      default:
        return (
          <div className="space-y-4">
            <div>
              <Label htmlFor="content-json">Content Data (JSON)</Label>
              <Textarea
                id="content-json"
                value={JSON.stringify(formData.content_data, null, 2)}
                onChange={(e) => {
                  try {
                    const parsed = JSON.parse(e.target.value)
                    handleInputChange('content_data', parsed)
                  } catch (error) {
                    // Invalid JSON, don't update
                  }
                }}
                placeholder="Enter content data as JSON"
                rows={10}
                className="font-mono text-sm"
              />
            </div>
          </div>
        )
    }
  }

  return (
    <div className="min-h-screen bg-background-section">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm" onClick={() => navigate('/cms/dashboard')}>
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Dashboard
              </Button>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">
                  {id ? 'Edit Content' : 'Create Content'}
                </h1>
                <p className="text-sm text-gray-600">
                  {currentContent ? `Editing: ${currentContent.title}` : 'Create new content item'}
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              {currentContent && (
                <div className="flex items-center space-x-2">
                  <Label htmlFor="published">Published</Label>
                  <Switch
                    id="published"
                    checked={currentContent.published}
                    onCheckedChange={handlePublishToggle}
                    disabled={isLoading}
                  />
                </div>
              )}
              <Button onClick={handleSave} disabled={isLoading}>
                <Save className="w-4 h-4 mr-2" />
                {isLoading ? 'Saving...' : 'Save'}
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content Editor */}
          <div className="lg:col-span-2 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Basic Information</CardTitle>
                <CardDescription>Configure the basic properties of your content</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="title">Title</Label>
                  <Input
                    id="title"
                    value={formData.title}
                    onChange={(e) => handleInputChange('title', e.target.value)}
                    placeholder="Enter content title"
                  />
                </div>
                <div>
                  <Label htmlFor="slug">Slug</Label>
                  <Input
                    id="slug"
                    value={formData.slug}
                    onChange={(e) => handleInputChange('slug', e.target.value)}
                    placeholder="Enter URL slug"
                  />
                </div>
                <div>
                  <Label htmlFor="component-type">Component Type</Label>
                  <Select
                    value={formData.component_type}
                    onValueChange={(value) => handleInputChange('component_type', value)}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select component type" />
                    </SelectTrigger>
                    <SelectContent>
                      {componentTypes.map((type) => (
                        <SelectItem key={type.value} value={type.value}>
                          {type.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Content Configuration</CardTitle>
                <CardDescription>Configure the specific content for this component</CardDescription>
              </CardHeader>
              <CardContent>
                {renderContentFields()}
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Publishing</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Status</span>
                  <span className={`text-sm px-2 py-1 rounded ${
                    formData.published ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                  }`}>
                    {formData.published ? 'Published' : 'Draft'}
                  </span>
                </div>
                {currentContent && (
                  <>
                    <div className="text-sm text-gray-600">
                      Created: {new Date(currentContent.created_at).toLocaleDateString()}
                    </div>
                    <div className="text-sm text-gray-600">
                      Updated: {new Date(currentContent.updated_at).toLocaleDateString()}
                    </div>
                  </>
                )}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="outline" className="w-full">
                  <Eye className="w-4 h-4 mr-2" />
                  Preview
                </Button>
                {currentContent?.published && (
                  <Button variant="outline" className="w-full">
                    <Globe className="w-4 h-4 mr-2" />
                    View Live
                  </Button>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContentEditor