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
      setError(null)

      // Return mock data when tables don't exist yet
      setAnalytics({
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
    } catch (err) {
      setError('Database tables not yet created. Please run the migrations first.')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchAnalytics()
  }, [])

  return {
    analytics,
    loading,
    error,
    refreshAnalytics: fetchAnalytics
  }
}