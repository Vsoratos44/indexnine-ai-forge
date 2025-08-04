import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { 
  Users, 
  Eye, 
  Clock, 
  TrendingUp, 
  Activity,
  MousePointer,
  UserCheck,
  BarChart3
} from 'lucide-react'
import { useAnalytics } from '@/hooks/useAnalytics'
import { Skeleton } from '@/components/ui/skeleton'

const AnalyticsDashboard = () => {
  const { analytics, loading, error } = useAnalytics()

  if (loading) {
    return (
      <div className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[...Array(4)].map((_, i) => (
            <Card key={i} className="bg-background-dark/80 backdrop-blur-md border border-white/10">
              <CardContent className="p-6">
                <Skeleton className="h-20 w-full bg-white/10" />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <Card className="bg-background-dark/80 backdrop-blur-md border border-white/10">
        <CardContent className="p-6">
          <p className="text-red-400">Error loading analytics: {error}</p>
        </CardContent>
      </Card>
    )
  }

  const stats = [
    { 
      label: 'Visitors Today', 
      value: analytics.visitorsToday.toString(), 
      icon: Users,
      trend: '+12%',
      color: 'text-blue-400'
    },
    { 
      label: 'Total Page Views', 
      value: analytics.pageViews.toLocaleString(), 
      icon: Eye,
      trend: '+8%',
      color: 'text-green-400'
    },
    { 
      label: 'Avg. Time on Site', 
      value: `${Math.floor(analytics.avgTimeOnSite / 60)}m ${analytics.avgTimeOnSite % 60}s`, 
      icon: Clock,
      trend: '+5%',
      color: 'text-purple-400'
    },
    { 
      label: 'Leads Today', 
      value: analytics.leadsToday.toString(), 
      icon: UserCheck,
      trend: '+15%',
      color: 'text-yellow-400'
    }
  ]

  return (
    <div className="space-y-8">
      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <Card key={index} className="bg-background-dark/80 backdrop-blur-md border border-white/10 shadow-glow">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-foreground-white/60">{stat.label}</p>
                  <p className="text-3xl font-bold text-foreground-white">{stat.value}</p>
                  <p className={`text-sm ${stat.color} flex items-center mt-1`}>
                    <TrendingUp className="w-3 h-3 mr-1" />
                    {stat.trend}
                  </p>
                </div>
                <div className={`p-3 rounded-lg bg-brand-primary/20`}>
                  <stat.icon className={`w-6 h-6 ${stat.color}`} />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Top Pages */}
        <Card className="bg-background-dark/80 backdrop-blur-md border border-white/10 shadow-glow">
          <CardHeader>
            <CardTitle className="text-foreground-white flex items-center">
              <BarChart3 className="w-5 h-5 mr-2" />
              Top Pages
            </CardTitle>
            <CardDescription className="text-foreground-white/60">
              Most visited pages in the last 30 days
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {analytics.topPages.map((page, index) => (
                <div key={index} className="flex items-center justify-between p-3 border border-white/10 rounded-lg bg-background-dark/40">
                  <div className="flex-1">
                    <p className="font-medium text-foreground-white capitalize">{page.title}</p>
                    <p className="text-sm text-foreground-white/60">{page.url}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-foreground-white">{page.views}</p>
                    <p className="text-sm text-foreground-white/60">views</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Recent Activity */}
        <Card className="bg-background-dark/80 backdrop-blur-md border border-white/10 shadow-glow">
          <CardHeader>
            <CardTitle className="text-foreground-white flex items-center">
              <Activity className="w-5 h-5 mr-2" />
              Recent Activity
            </CardTitle>
            <CardDescription className="text-foreground-white/60">
              Latest visitor interactions and lead activities
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {analytics.recentActivity.map((activity, index) => (
                <div key={index} className="flex items-start space-x-3 p-3 border border-white/10 rounded-lg bg-background-dark/40">
                  <div className="p-2 rounded-full bg-brand-primary/20">
                    {activity.type === 'lead' ? (
                      <UserCheck className="w-3 h-3 text-green-400" />
                    ) : (
                      <MousePointer className="w-3 h-3 text-blue-400" />
                    )}
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-foreground-white">{activity.description}</p>
                    <p className="text-xs text-foreground-white/60">
                      {new Date(activity.timestamp).toLocaleString()}
                    </p>
                  </div>
                  <Badge variant={activity.type === 'lead' ? 'default' : 'secondary'} className="text-xs">
                    {activity.type}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Conversion Metrics */}
      <Card className="bg-background-dark/80 backdrop-blur-md border border-white/10 shadow-glow">
        <CardHeader>
          <CardTitle className="text-foreground-white">Conversion Overview</CardTitle>
          <CardDescription className="text-foreground-white/60">
            Visitor to lead conversion metrics
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-4 border border-white/10 rounded-lg bg-background-dark/40">
              <p className="text-2xl font-bold text-foreground-white">{analytics.totalVisitors}</p>
              <p className="text-sm text-foreground-white/60">Total Visitors</p>
            </div>
            <div className="text-center p-4 border border-white/10 rounded-lg bg-background-dark/40">
              <p className="text-2xl font-bold text-foreground-white">{analytics.uniqueVisitors}</p>
              <p className="text-sm text-foreground-white/60">Unique Visitors</p>
            </div>
            <div className="text-center p-4 border border-white/10 rounded-lg bg-background-dark/40">
              <p className="text-2xl font-bold text-green-400">{analytics.leadConversion.toFixed(1)}%</p>
              <p className="text-sm text-foreground-white/60">Conversion Rate</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default AnalyticsDashboard