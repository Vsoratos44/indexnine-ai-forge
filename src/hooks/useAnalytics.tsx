import { useState, useEffect } from 'react'
import { supabase } from '@/integrations/supabase/client'

export interface AnalyticsData {
  totalVisitors: number
  uniqueVisitors: number
  pageViews: number
  avgTimeOnSite: number
  leadConversion: number
  topPages: Array<{ url: string; views: number; title: string }>
  recentActivity: Array<{ type: string; description: string; timestamp: string }>
  visitorsToday: number
  leadsToday: number
}

export function useAnalytics() {
  const [analytics, setAnalytics] = useState<AnalyticsData>({
    totalVisitors: 0,
    uniqueVisitors: 0,
    pageViews: 0,
    avgTimeOnSite: 0,
    leadConversion: 0,
    topPages: [],
    recentActivity: [],
    visitorsToday: 0,
    leadsToday: 0
  })
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const fetchAnalytics = async () => {
    try {
      setLoading(true)

      // Fetch website visitors data
      const { data: visitors, error: visitorsError } = await supabase
        .from('website_visitors')
        .select('*')
        .order('first_visit', { ascending: false })
        .limit(100)

      if (visitorsError) throw visitorsError

      // Fetch page views data
      const { data: pageViews, error: pageViewsError } = await supabase
        .from('page_views')
        .select('*')
        .order('created_at', { ascending: false })
        .limit(100)

      if (pageViewsError) throw pageViewsError

      // Fetch leads data
      const { data: leads, error: leadsError } = await supabase
        .from('leads')
        .select('*')
        .order('created_at', { ascending: false })
        .limit(50)

      if (leadsError) throw leadsError

      // Fetch content analytics
      const { data: contentAnalytics, error: contentError } = await supabase
        .from('content_analytics')
        .select('*')
        .order('date', { ascending: false })
        .limit(30)

      if (contentError) throw contentError

      // Process analytics data
      const today = new Date().toISOString().split('T')[0]
      const visitorsToday = visitors?.filter(v => 
        v.first_visit?.startsWith(today)
      ).length || 0
      
      const leadsToday = leads?.filter(l => 
        l.created_at?.startsWith(today)
      ).length || 0

      // Calculate top pages
      const pageViewCounts = pageViews?.reduce((acc, pv) => {
        acc[pv.page_url] = (acc[pv.page_url] || 0) + 1
        return acc
      }, {} as Record<string, number>) || {}

      const topPages = Object.entries(pageViewCounts)
        .sort(([,a], [,b]) => b - a)
        .slice(0, 5)
        .map(([url, views]) => ({
          url,
          views,
          title: url === '/' ? 'Homepage' : url.replace('/', '').replace('-', ' ')
        }))

      // Generate recent activity
      const recentActivity = [
        ...(leads?.slice(0, 3).map(lead => ({
          type: 'lead',
          description: `New lead: ${lead.first_name} ${lead.last_name} from ${lead.company_name}`,
          timestamp: lead.created_at
        })) || []),
        ...(pageViews?.slice(0, 2).map(pv => ({
          type: 'pageview',
          description: `Page view: ${pv.page_url}`,
          timestamp: pv.created_at
        })) || [])
      ].sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime())

      setAnalytics({
        totalVisitors: visitors?.length || 0,
        uniqueVisitors: new Set(visitors?.map(v => v.visitor_id)).size || 0,
        pageViews: pageViews?.length || 0,
        avgTimeOnSite: Math.round((pageViews?.reduce((acc, pv) => acc + (pv.time_on_page || 0), 0) || 0) / (pageViews?.length || 1)),
        leadConversion: visitors?.length ? ((leads?.length || 0) / visitors.length * 100) : 0,
        topPages,
        recentActivity: recentActivity.slice(0, 5),
        visitorsToday,
        leadsToday
      })
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch analytics')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchAnalytics()

    // Set up real-time subscription for analytics updates
    const subscription = supabase
      .channel('analytics_updates')
      .on('postgres_changes', 
        { event: '*', schema: 'public', table: 'website_visitors' }, 
        () => fetchAnalytics()
      )
      .on('postgres_changes', 
        { event: '*', schema: 'public', table: 'leads' }, 
        () => fetchAnalytics()
      )
      .on('postgres_changes', 
        { event: '*', schema: 'public', table: 'page_views' }, 
        () => fetchAnalytics()
      )
      .subscribe()

    return () => {
      subscription.unsubscribe()
    }
  }, [])

  return {
    analytics,
    loading,
    error,
    refreshAnalytics: fetchAnalytics
  }
}