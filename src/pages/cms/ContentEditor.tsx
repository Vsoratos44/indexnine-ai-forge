import React, { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Switch } from '@/components/ui/switch'
import { ArrowLeft, Save, Eye, Globe } from 'lucide-react'
import { toast } from 'sonner'

const ContentEditor = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  
  const [formData, setFormData] = useState({
    title: '',
    slug: '',
    component_type: '',
    content_data: {},
    published: false
  })
  
  const [isLoading, setIsLoading] = useState(false)

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
    setIsLoading(true)
    
    // Simulate save
    setTimeout(() => {
      toast.success(id ? 'Content updated successfully!' : 'Content created successfully!')
      setIsLoading(false)
      if (!id) {
        navigate('/cms/dashboard')
      }
    }, 1000)
  }

  const renderContentFields = () => {
    switch (formData.component_type) {
      case 'Hero':
        return (
          <div className="space-y-4">
            <div>
              <Label htmlFor="hero-title" className="text-foreground-white">Hero Title</Label>
              <Input
                id="hero-title"
                value={(formData.content_data as any)?.title || ''}
                onChange={(e) => handleContentDataChange('title', e.target.value)}
                placeholder="Enter hero title"
                className="bg-background-dark/40 border-white/20 text-foreground-white placeholder:text-white/40"
              />
            </div>
            <div>
              <Label htmlFor="hero-subtitle" className="text-foreground-white">Hero Subtitle</Label>
              <Textarea
                id="hero-subtitle"
                value={(formData.content_data as any)?.subtitle || ''}
                onChange={(e) => handleContentDataChange('subtitle', e.target.value)}
                placeholder="Enter hero subtitle"
                rows={3}
                className="bg-background-dark/40 border-white/20 text-foreground-white placeholder:text-white/40"
              />
            </div>
            <div>
              <Label htmlFor="hero-cta" className="text-foreground-white">Call to Action Text</Label>
              <Input
                id="hero-cta"
                value={(formData.content_data as any)?.ctaText || ''}
                onChange={(e) => handleContentDataChange('ctaText', e.target.value)}
                placeholder="Enter CTA text"
                className="bg-background-dark/40 border-white/20 text-foreground-white placeholder:text-white/40"
              />
            </div>
          </div>
        )
      
      case 'ValueProposition':
        return (
          <div className="space-y-4">
            <div>
              <Label htmlFor="vp-heading" className="text-foreground-white">Main Heading</Label>
              <Input
                id="vp-heading"
                value={(formData.content_data as any)?.heading || ''}
                onChange={(e) => handleContentDataChange('heading', e.target.value)}
                placeholder="Enter main heading"
                className="bg-background-dark/40 border-white/20 text-foreground-white placeholder:text-white/40"
              />
            </div>
            <div>
              <Label htmlFor="vp-description" className="text-foreground-white">Description</Label>
              <Textarea
                id="vp-description"
                value={(formData.content_data as any)?.description || ''}
                onChange={(e) => handleContentDataChange('description', e.target.value)}
                placeholder="Enter description"
                rows={4}
                className="bg-background-dark/40 border-white/20 text-foreground-white placeholder:text-white/40"
              />
            </div>
          </div>
        )
      
      default:
        return (
          <div className="space-y-4">
            <div>
              <Label htmlFor="content-json" className="text-foreground-white">Content Data (JSON)</Label>
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
                className="font-mono text-sm bg-background-dark/40 border-white/20 text-foreground-white placeholder:text-white/40"
              />
            </div>
          </div>
        )
    }
  }

  return (
    <div className="min-h-screen bg-gradient-hero">
      {/* Header */}
      <div className="bg-background-dark/95 backdrop-blur-md border-b border-white/10">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm" onClick={() => navigate('/cms/dashboard')} className="text-foreground-white hover:bg-brand-primary/20">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Dashboard
              </Button>
              <div>
                <h1 className="text-2xl font-bold text-foreground-white">
                  {id ? 'Edit Content' : 'Create Content'}
                </h1>
                <p className="text-sm text-foreground-white/60">
                  {id ? `Editing content item` : 'Create new content item'}
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <div className="flex items-center space-x-2">
                <Label htmlFor="published" className="text-foreground-white">Published</Label>
                <Switch
                  id="published"
                  checked={formData.published}
                  onCheckedChange={(checked) => handleInputChange('published', checked)}
                  disabled={isLoading}
                />
              </div>
              <Button onClick={handleSave} disabled={isLoading} className="bg-brand-primary hover:bg-brand-primary-dark">
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
            <Card className="bg-background-dark/80 backdrop-blur-md border border-white/10 shadow-glow">
              <CardHeader>
                <CardTitle className="text-foreground-white">Basic Information</CardTitle>
                <CardDescription className="text-foreground-white/60">Configure the basic properties of your content</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="title" className="text-foreground-white">Title</Label>
                  <Input
                    id="title"
                    value={formData.title}
                    onChange={(e) => handleInputChange('title', e.target.value)}
                    placeholder="Enter content title"
                    className="bg-background-dark/40 border-white/20 text-foreground-white placeholder:text-white/40"
                  />
                </div>
                <div>
                  <Label htmlFor="slug" className="text-foreground-white">Slug</Label>
                  <Input
                    id="slug"
                    value={formData.slug}
                    onChange={(e) => handleInputChange('slug', e.target.value)}
                    placeholder="Enter URL slug"
                    className="bg-background-dark/40 border-white/20 text-foreground-white placeholder:text-white/40"
                  />
                </div>
                <div>
                  <Label htmlFor="component-type" className="text-foreground-white">Component Type</Label>
                  <Select
                    value={formData.component_type}
                    onValueChange={(value) => handleInputChange('component_type', value)}
                  >
                    <SelectTrigger className="bg-background-dark/40 border-white/20 text-foreground-white">
                      <SelectValue placeholder="Select component type" />
                    </SelectTrigger>
                    <SelectContent className="bg-background-dark border-white/20">
                      {componentTypes.map((type) => (
                        <SelectItem key={type.value} value={type.value} className="text-foreground-white focus:bg-brand-primary/20">
                          {type.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-background-dark/80 backdrop-blur-md border border-white/10 shadow-glow">
              <CardHeader>
                <CardTitle className="text-foreground-white">Content Configuration</CardTitle>
                <CardDescription className="text-foreground-white/60">Configure the specific content for this component</CardDescription>
              </CardHeader>
              <CardContent>
                {renderContentFields()}
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <Card className="bg-background-dark/80 backdrop-blur-md border border-white/10 shadow-glow">
              <CardHeader>
                <CardTitle className="text-foreground-white">Publishing</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-foreground-white">Status</span>
                  <span className={`text-sm px-2 py-1 rounded ${
                    formData.published ? 'bg-green-500/20 text-green-400' : 'bg-gray-500/20 text-gray-400'
                  }`}>
                    {formData.published ? 'Published' : 'Draft'}
                  </span>
                </div>
                {id && (
                  <>
                    <div className="text-sm text-foreground-white/60">
                      Created: {new Date().toLocaleDateString()}
                    </div>
                    <div className="text-sm text-foreground-white/60">
                      Updated: {new Date().toLocaleDateString()}
                    </div>
                  </>
                )}
              </CardContent>
            </Card>

            <Card className="bg-background-dark/80 backdrop-blur-md border border-white/10 shadow-glow">
              <CardHeader>
                <CardTitle className="text-foreground-white">Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="outline" className="w-full border-white/20 text-foreground-white hover:bg-brand-primary/20">
                  <Eye className="w-4 h-4 mr-2" />
                  Preview
                </Button>
                {formData.published && (
                  <Button variant="outline" className="w-full border-white/20 text-foreground-white hover:bg-brand-primary/20">
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