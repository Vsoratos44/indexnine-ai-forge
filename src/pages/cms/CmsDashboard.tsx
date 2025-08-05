import React, { Suspense } from 'react'
import { useQuery } from '@tanstack/react-query'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Skeleton } from '@/components/ui/skeleton'
import { 
  FileText, 
  Image, 
  Users, 
  BarChart2, 
  Plus,
  TrendingUp,
  Eye,
  MessageSquare,
  Globe,
  Settings,
  Database,
  Shield,
  Sparkles
} from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { useCMSArticles } from '@/hooks/useCMSArticles'
import { useCMSMedia } from '@/hooks/useCMSMedia'
import { useCMSUsers } from '@/hooks/useCMSUsers'

const StatsCard = ({ title, value, icon: Icon, trend, onClick }: {
  title: string
  value: string | number
  icon: React.ElementType
  trend?: { value: number; label: string }
  onClick?: () => void
}) => (
  <Card 
    className={`relative overflow-hidden transition-all duration-300 hover:scale-105 ${
      onClick ? 'cursor-pointer hover:shadow-lg' : ''
    }`}
    onClick={onClick}
  >
    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
      <CardTitle className="text-sm font-medium">{title}</CardTitle>
      <Icon className="h-4 w-4 text-muted-foreground" />
    </CardHeader>
    <CardContent>
      <div className="text-2xl font-bold">{value}</div>
      {trend && (
        <p className="text-xs text-muted-foreground flex items-center gap-1">
          <TrendingUp className="h-3 w-3" />
          +{trend.value}% {trend.label}
        </p>
      )}
    </CardContent>
  </Card>
)

const ModuleCard = ({ title, description, icon: Icon, href, color }: {
  title: string
  description: string
  icon: React.ElementType
  href: string
  color: string
}) => {
  const navigate = useNavigate()
  
  return (
    <Card 
      className="relative overflow-hidden cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-lg group"
      onClick={() => navigate(href)}
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${color} opacity-5 group-hover:opacity-10 transition-opacity`} />
      <CardHeader>
        <div className="flex items-center gap-3">
          <div className={`p-2 rounded-lg bg-gradient-to-br ${color} text-white`}>
            <Icon className="h-5 w-5" />
          </div>
          <div>
            <CardTitle className="text-lg">{title}</CardTitle>
            <CardDescription>{description}</CardDescription>
          </div>
        </div>
      </CardHeader>
    </Card>
  )
}

const RecentActivity = () => {
  const { data: articles } = useCMSArticles({ limit: 5 })
  
  const activities = React.useMemo(() => {
    if (!articles) return []
    
    return articles.map(article => ({
      id: article.id,
      type: 'article',
      description: `Article "${article.title}" was ${article.status}`,
      timestamp: article.updated_at,
      status: article.status
    }))
  }, [articles])

  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Activity</CardTitle>
        <CardDescription>Latest updates and changes</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {activities.map((activity) => (
            <div key={activity.id} className="flex items-center gap-3">
              <div className="h-2 w-2 rounded-full bg-primary" />
              <div className="flex-1">
                <p className="text-sm">{activity.description}</p>
                <p className="text-xs text-muted-foreground">
                  {new Date(activity.timestamp).toLocaleDateString()}
                </p>
              </div>
              <Badge variant={activity.status === 'published' ? 'default' : 'secondary'}>
                {activity.status}
              </Badge>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

const QuickActions = () => {
  const navigate = useNavigate()
  
  const actions = [
    { label: 'New Article', icon: FileText, onClick: () => navigate('/cms/articles'), color: 'bg-blue-500' },
    { label: 'Upload Media', icon: Image, onClick: () => navigate('/cms/media'), color: 'bg-green-500' },
    { label: 'Manage Users', icon: Users, onClick: () => navigate('/cms/users'), color: 'bg-purple-500' },
    { label: 'View Analytics', icon: BarChart2, onClick: () => navigate('/cms/analytics'), color: 'bg-orange-500' }
  ]
  
  return (
    <Card>
      <CardHeader>
        <CardTitle>Quick Actions</CardTitle>
        <CardDescription>Frequently used actions</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-3">
          {actions.map((action) => (
            <Button
              key={action.label}
              variant="outline"
              className="h-auto p-4 flex flex-col items-center gap-2"
              onClick={action.onClick}
            >
              <div className={`p-2 rounded-lg ${action.color} text-white`}>
                <action.icon className="h-4 w-4" />
              </div>
              <span className="text-xs">{action.label}</span>
            </Button>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

const DashboardSkeleton = () => (
  <div className="space-y-6">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {Array.from({ length: 4 }).map((_, i) => (
        <Card key={i}>
          <CardHeader>
            <Skeleton className="h-4 w-24" />
          </CardHeader>
          <CardContent>
            <Skeleton className="h-8 w-16" />
          </CardContent>
        </Card>
      ))}
    </div>
    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
      {Array.from({ length: 6 }).map((_, i) => (
        <Skeleton key={i} className="h-32" />
      ))}
    </div>
  </div>
)

export default function CmsDashboard() {
  const navigate = useNavigate()
  
  // Fetch dashboard data with React Query for optimal performance
  const { data: articles, isLoading: articlesLoading } = useCMSArticles({ limit: 100 })
  const { data: media, isLoading: mediaLoading } = useCMSMedia({ limit: 100 })
  const { data: users, isLoading: usersLoading } = useCMSUsers()

  const isLoading = articlesLoading || mediaLoading || usersLoading

  // Memoized statistics for performance
  const stats = React.useMemo(() => {
    if (!articles || !media || !users) return null
    
    const publishedArticles = articles.filter(a => a.status === 'published').length
    const totalViews = articles.reduce((sum, article) => sum + article.views, 0)
    const activeUsers = users.filter(u => u.status === 'active').length
    
    return {
      totalArticles: articles.length,
      publishedArticles,
      totalMedia: media.length,
      totalViews,
      activeUsers
    }
  }, [articles, media, users])

  const modules = [
    {
      title: 'Content Management',
      description: 'Create and manage articles, pages',
      icon: FileText,
      href: '/cms/articles',
      color: 'from-blue-500 to-blue-600'
    },
    {
      title: 'Media Library',
      description: 'Upload and organize media files',
      icon: Image,
      href: '/cms/media',
      color: 'from-green-500 to-green-600'
    },
    {
      title: 'User Management',
      description: 'Manage CMS users and permissions',
      icon: Users,
      href: '/cms/users',
      color: 'from-purple-500 to-purple-600'
    },
    {
      title: 'Analytics',
      description: 'View content performance metrics',
      icon: BarChart2,
      href: '/cms/analytics',
      color: 'from-orange-500 to-orange-600'
    },
    {
      title: 'Personalization',
      description: 'Configure content targeting',
      icon: Sparkles,
      href: '/cms/personalization',
      color: 'from-pink-500 to-pink-600'
    },
    {
      title: 'Global Configuration',
      description: 'System-wide settings',
      icon: Database,
      href: '/cms/config',
      color: 'from-cyan-500 to-cyan-600'
    },
    {
      title: 'Security',
      description: 'Security and access controls',
      icon: Shield,
      href: '/cms/security',
      color: 'from-red-500 to-red-600'
    },
    {
      title: 'Settings',
      description: 'CMS configuration',
      icon: Settings,
      href: '/cms/settings',
      color: 'from-gray-500 to-gray-600'
    }
  ]

  if (isLoading) {
    return (
      <div className="container mx-auto p-6">
        <DashboardSkeleton />
      </div>
    )
  }

  return (
    <div className="container mx-auto p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">CMS Dashboard</h1>
          <p className="text-muted-foreground">
            Welcome back! Here's your content overview.
          </p>
        </div>
        <Button onClick={() => navigate('/cms/articles')}>
          <Plus className="mr-2 h-4 w-4" />
          New Article
        </Button>
      </div>

      {/* Stats Grid */}
      {stats && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          <StatsCard
            title="Total Articles"
            value={stats.totalArticles}
            icon={FileText}
            onClick={() => navigate('/cms/articles')}
          />
          <StatsCard
            title="Published"
            value={stats.publishedArticles}
            icon={Globe}
            trend={{ value: 12, label: 'from last month' }}
          />
          <StatsCard
            title="Media Files"
            value={stats.totalMedia}
            icon={Image}
            onClick={() => navigate('/cms/media')}
          />
          <StatsCard
            title="Total Views"
            value={stats.totalViews.toLocaleString()}
            icon={Eye}
            trend={{ value: 18, label: 'from last month' }}
          />
          <StatsCard
            title="Active Users"
            value={stats.activeUsers}
            icon={Users}
            onClick={() => navigate('/cms/users')}
          />
        </div>
      )}

      {/* Modules Grid */}
      <div>
        <h2 className="text-xl font-semibold mb-4">System Modules</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {modules.map((module) => (
            <ModuleCard key={module.title} {...module} />
          ))}
        </div>
      </div>

      {/* Bottom Section - Recent Activity & Quick Actions */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <Suspense fallback={<Skeleton className="h-64" />}>
            <RecentActivity />
          </Suspense>
        </div>
        <QuickActions />
      </div>
    </div>
  )
}