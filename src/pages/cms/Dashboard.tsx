import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '@/hooks/useAuth'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Badge } from '@/components/ui/badge'
import { 
  LayoutDashboard, 
  FileText, 
  Image, 
  Settings, 
  Users, 
  BarChart3,
  LogOut,
  Plus,
  Edit,
  Eye,
  Globe
} from 'lucide-react'
import { toast } from 'sonner'

const Dashboard = () => {
  const { user, signOut } = useAuth()
  const [activeSection, setActiveSection] = useState('overview')

  const handleSignOut = async () => {
    await signOut()
    toast.success('Signed out successfully')
  }

  const contentItems = [
    {
      id: 1,
      title: 'Hero Section',
      component: 'Hero',
      status: 'published',
      lastModified: '2 hours ago',
      description: 'Main landing page hero section with call-to-action'
    },
    {
      id: 2,
      title: 'Value Proposition',
      component: 'ValueProposition',
      status: 'published',
      lastModified: '1 day ago',
      description: 'Core value proposition messaging and features'
    },
    {
      id: 3,
      title: 'Social Proof',
      component: 'SocialProof',
      status: 'draft',
      lastModified: '3 days ago',
      description: 'Customer statistics and growth metrics'
    },
    {
      id: 4,
      title: 'Client Experience',
      component: 'ClientExperience',
      status: 'published',
      lastModified: '1 week ago',
      description: 'Client journey and experience highlights'
    },
    {
      id: 5,
      title: 'Product Lifecycle',
      component: 'ProductLifecycle',
      status: 'published',
      lastModified: '2 days ago',
      description: 'Product development methodology overview'
    },
    {
      id: 6,
      title: 'Practices & Studios',
      component: 'PracticesStudios',
      status: 'published',
      lastModified: '5 days ago',
      description: 'Service offerings and practice areas'
    }
  ]

  const stats = [
    { label: 'Total Components', value: '12', icon: LayoutDashboard },
    { label: 'Published', value: '8', icon: Globe },
    { label: 'Draft', value: '4', icon: Edit },
    { label: 'Views Today', value: '1,247', icon: Eye }
  ]

  return (
    <div className="min-h-screen bg-background-section">
      {/* Header */}
      <div className="bg-background-dark border-b border-white/10">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-gradient-primary rounded-xl flex items-center justify-center shadow-glow">
                <div className="w-5 h-5 bg-white rounded-sm"></div>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-foreground-white">IndexNine CMS</h1>
                <p className="text-sm text-foreground-white/60">Content Management System</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-foreground-white/80">
                Welcome, {user?.email}
              </span>
              <Button variant="outline" size="sm" onClick={handleSignOut}>
                <LogOut className="w-4 h-4 mr-2" />
                Sign Out
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-8">
        <Tabs defaultValue="overview" className="space-y-8">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="content">Content</TabsTrigger>
            <TabsTrigger value="media">Media</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-8">
            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <Card key={index} className="bg-white border border-gray-200">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-gray-600">{stat.label}</p>
                        <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
                      </div>
                      <stat.icon className="w-8 h-8 text-brand-primary" />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Recent Activity */}
            <Card className="bg-white border border-gray-200">
              <CardHeader>
                <CardTitle className="text-gray-900">Recent Activity</CardTitle>
                <CardDescription>Latest content updates and changes</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {contentItems.slice(0, 3).map((item) => (
                    <div key={item.id} className="flex items-center justify-between p-4 border border-gray-100 rounded-lg">
                      <div>
                        <h4 className="font-medium text-gray-900">{item.title}</h4>
                        <p className="text-sm text-gray-500">Modified {item.lastModified}</p>
                      </div>
                      <Badge variant={item.status === 'published' ? 'default' : 'secondary'}>
                        {item.status}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="content" className="space-y-8">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold text-gray-900">Content Management</h2>
                <p className="text-gray-600">Manage all website content components</p>
              </div>
              <Link to="/cms/content/new">
                <Button className="bg-brand-primary hover:bg-brand-primary-dark">
                  <Plus className="w-4 h-4 mr-2" />
                  Add Content
                </Button>
              </Link>
            </div>

            <div className="grid gap-6">
              {contentItems.map((item) => (
                <Card key={item.id} className="bg-white border border-gray-200">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
                          <Badge variant={item.status === 'published' ? 'default' : 'secondary'}>
                            {item.status}
                          </Badge>
                        </div>
                        <p className="text-gray-600 mb-2">{item.description}</p>
                        <p className="text-sm text-gray-500">
                          Component: <code className="bg-gray-100 px-2 py-1 rounded">{item.component}</code>
                        </p>
                        <p className="text-sm text-gray-500">Last modified: {item.lastModified}</p>
                      </div>
                      <div className="flex space-x-2">
                        <Link to={`/cms/content/edit/${item.id}`}>
                          <Button variant="outline" size="sm">
                            <Edit className="w-4 h-4 mr-2" />
                            Edit
                          </Button>
                        </Link>
                        <Button variant="outline" size="sm">
                          <Eye className="w-4 h-4 mr-2" />
                          Preview
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="media" className="space-y-8">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold text-gray-900">Media Library</h2>
                <p className="text-gray-600">Manage images, videos, and documents</p>
              </div>
              <Button className="bg-brand-primary hover:bg-brand-primary-dark">
                <Plus className="w-4 h-4 mr-2" />
                Upload Media
              </Button>
            </div>

            <Card className="bg-white border border-gray-200">
              <CardContent className="p-6">
                <div className="text-center py-12">
                  <Image className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Media Library</h3>
                  <p className="text-gray-600 mb-4">Upload and manage your digital assets</p>
                  <Button variant="outline">Browse Files</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="settings" className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Settings</h2>
              <p className="text-gray-600">Configure your CMS preferences</p>
            </div>

            <div className="grid gap-6">
              <Card className="bg-white border border-gray-200">
                <CardHeader>
                  <CardTitle>General Settings</CardTitle>
                  <CardDescription>Basic configuration options</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Settings panel coming soon...</p>
                </CardContent>
              </Card>

              <Card className="bg-white border border-gray-200">
                <CardHeader>
                  <CardTitle>User Management</CardTitle>
                  <CardDescription>Manage team access and permissions</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">User management coming soon...</p>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

export default Dashboard