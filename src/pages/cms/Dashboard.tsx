import React, { useState } from 'react'
import { Link } from 'react-router-dom'
// import { useAuth } from '@/hooks/useAuth' // Disabled for now
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
import AnalyticsDashboard from '@/components/cms/AnalyticsDashboard'
import ContentManager from '@/components/cms/ContentManager'
import MediaLibrary from '@/components/cms/MediaLibrary'

const Dashboard = () => {
  // const { user, signOut } = useAuth() // Disabled for now
  const [activeSection, setActiveSection] = useState('overview')

  const handleSignOut = async () => {
    // await signOut() // Disabled for now
    // toast.success('Signed out successfully')
    window.location.href = '/' // Temporary redirect to home
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
    <div className="min-h-screen bg-gradient-hero">
      {/* Header */}
      <div className="bg-background-dark/95 backdrop-blur-md border-b border-white/10">
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
                Welcome, Admin User
              </span>
              <Button variant="outline" size="sm" onClick={handleSignOut} className="border-white/20 text-foreground-white hover:bg-brand-primary/20">
                <LogOut className="w-4 h-4 mr-2" />
                Sign Out
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-8">
        <Tabs defaultValue="overview" className="space-y-8">
          <TabsList className="grid w-full grid-cols-4 bg-background-dark/50 backdrop-blur-md border border-white/10">
            <TabsTrigger value="overview" className="text-foreground-white data-[state=active]:bg-brand-primary data-[state=active]:text-white">Overview</TabsTrigger>
            <TabsTrigger value="content" className="text-foreground-white data-[state=active]:bg-brand-primary data-[state=active]:text-white">Content</TabsTrigger>
            <TabsTrigger value="media" className="text-foreground-white data-[state=active]:bg-brand-primary data-[state=active]:text-white">Media</TabsTrigger>
            <TabsTrigger value="settings" className="text-foreground-white data-[state=active]:bg-brand-primary data-[state=active]:text-white">Settings</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-8">
            <AnalyticsDashboard />
          </TabsContent>

          <TabsContent value="content" className="space-y-8">
            <ContentManager />
          </TabsContent>

          <TabsContent value="media" className="space-y-8">
            <MediaLibrary />
          </TabsContent>

          <TabsContent value="settings" className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-foreground-white">Settings</h2>
              <p className="text-foreground-white/60">Configure your CMS preferences</p>
            </div>

            <div className="grid gap-6">
              <Card className="bg-background-dark/80 backdrop-blur-md border border-white/10 shadow-glow">
                <CardHeader>
                  <CardTitle className="text-foreground-white">General Settings</CardTitle>
                  <CardDescription className="text-foreground-white/60">Basic configuration options</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground-white/60">Settings panel coming soon...</p>
                </CardContent>
              </Card>

              <Card className="bg-background-dark/80 backdrop-blur-md border border-white/10 shadow-glow">
                <CardHeader>
                  <CardTitle className="text-foreground-white">User Management</CardTitle>
                  <CardDescription className="text-foreground-white/60">Manage team access and permissions</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground-white/60">User management coming soon...</p>
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