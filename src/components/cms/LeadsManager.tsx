import React, { useState, useEffect } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { 
  Users, 
  Mail, 
  Phone, 
  Building, 
  Calendar,
  TrendingUp,
  Filter,
  Search,
  Download,
  Eye
} from 'lucide-react'
import { supabase } from '@/integrations/supabase/client'
import { toast } from 'sonner'

interface Lead {
  id: string
  first_name: string
  last_name: string
  email: string
  phone?: string
  company_name?: string
  job_title?: string
  industry?: string
  lead_source?: string
  status: string
  lead_score: number
  created_at: string
  updated_at: string
  notes?: string
}

const LeadsManager = () => {
  const [leads, setLeads] = useState<Lead[]>([])
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState('')
  const [statusFilter, setStatusFilter] = useState('all')
  const [sourceFilter, setSourceFilter] = useState('all')

  const fetchLeads = async () => {
    try {
      setLoading(true)
      const { data, error } = await supabase
        .from('leads')
        .select('*')
        .order('created_at', { ascending: false })

      if (error) throw error
      setLeads(data || [])
    } catch (error) {
      toast.error('Failed to fetch leads')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchLeads()
  }, [])

  const filteredLeads = leads.filter(lead => {
    const matchesSearch = 
      lead.first_name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      lead.last_name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      lead.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      lead.company_name?.toLowerCase().includes(searchTerm.toLowerCase())
    
    const matchesStatus = statusFilter === 'all' || lead.status === statusFilter
    const matchesSource = sourceFilter === 'all' || lead.lead_source === sourceFilter

    return matchesSearch && matchesStatus && matchesSource
  })

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'new': return 'bg-blue-500/20 text-blue-400'
      case 'contacted': return 'bg-yellow-500/20 text-yellow-400'
      case 'qualified': return 'bg-green-500/20 text-green-400'
      case 'opportunity': return 'bg-purple-500/20 text-purple-400'
      case 'customer': return 'bg-emerald-500/20 text-emerald-400'
      case 'lost': return 'bg-red-500/20 text-red-400'
      default: return 'bg-gray-500/20 text-gray-400'
    }
  }

  const getScoreColor = (score: number) => {
    if (score >= 80) return 'text-green-400'
    if (score >= 60) return 'text-yellow-400'
    if (score >= 40) return 'text-orange-400'
    return 'text-red-400'
  }

  if (loading) {
    return (
      <div className="space-y-6">
        {[...Array(5)].map((_, i) => (
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
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-foreground-white">Leads Management</h2>
          <p className="text-foreground-white/60">Track and manage your sales leads</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="border-white/20 text-foreground-white">
            <Download className="w-4 h-4 mr-2" />
            Export
          </Button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="bg-background-dark/80 backdrop-blur-md border border-white/10">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-foreground-white/60">Total Leads</p>
                <p className="text-2xl font-bold text-foreground-white">{leads.length}</p>
              </div>
              <Users className="w-8 h-8 text-blue-400" />
            </div>
          </CardContent>
        </Card>
        <Card className="bg-background-dark/80 backdrop-blur-md border border-white/10">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-foreground-white/60">New Leads</p>
                <p className="text-2xl font-bold text-foreground-white">
                  {leads.filter(l => l.status === 'new').length}
                </p>
              </div>
              <TrendingUp className="w-8 h-8 text-green-400" />
            </div>
          </CardContent>
        </Card>
        <Card className="bg-background-dark/80 backdrop-blur-md border border-white/10">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-foreground-white/60">Qualified</p>
                <p className="text-2xl font-bold text-foreground-white">
                  {leads.filter(l => l.status === 'qualified').length}
                </p>
              </div>
              <Building className="w-8 h-8 text-purple-400" />
            </div>
          </CardContent>
        </Card>
        <Card className="bg-background-dark/80 backdrop-blur-md border border-white/10">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-foreground-white/60">Avg. Score</p>
                <p className="text-2xl font-bold text-foreground-white">
                  {Math.round(leads.reduce((acc, l) => acc + l.lead_score, 0) / leads.length || 0)}
                </p>
              </div>
              <Calendar className="w-8 h-8 text-yellow-400" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Filters */}
      <Card className="bg-background-dark/80 backdrop-blur-md border border-white/10">
        <CardContent className="p-6">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-foreground-white/40 w-4 h-4" />
                <Input
                  placeholder="Search leads..."
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
                <SelectItem value="new" className="text-foreground-white">New</SelectItem>
                <SelectItem value="contacted" className="text-foreground-white">Contacted</SelectItem>
                <SelectItem value="qualified" className="text-foreground-white">Qualified</SelectItem>
                <SelectItem value="opportunity" className="text-foreground-white">Opportunity</SelectItem>
                <SelectItem value="customer" className="text-foreground-white">Customer</SelectItem>
                <SelectItem value="lost" className="text-foreground-white">Lost</SelectItem>
              </SelectContent>
            </Select>
            <Select value={sourceFilter} onValueChange={setSourceFilter}>
              <SelectTrigger className="w-40 bg-background-dark/40 border-white/20 text-foreground-white">
                <SelectValue placeholder="Source" />
              </SelectTrigger>
              <SelectContent className="bg-background-dark border-white/20">
                <SelectItem value="all" className="text-foreground-white">All Sources</SelectItem>
                <SelectItem value="website" className="text-foreground-white">Website</SelectItem>
                <SelectItem value="referral" className="text-foreground-white">Referral</SelectItem>
                <SelectItem value="email" className="text-foreground-white">Email</SelectItem>
                <SelectItem value="social" className="text-foreground-white">Social</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Leads List */}
      <div className="grid gap-4">
        {filteredLeads.length === 0 ? (
          <Card className="bg-background-dark/80 backdrop-blur-md border border-white/10">
            <CardContent className="p-12 text-center">
              <Users className="w-12 h-12 text-foreground-white/40 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-foreground-white mb-2">No leads found</h3>
              <p className="text-foreground-white/60">
                {searchTerm || statusFilter !== 'all' || sourceFilter !== 'all'
                  ? 'No leads match your current filters.'
                  : 'Leads will appear here as visitors convert on your website.'
                }
              </p>
            </CardContent>
          </Card>
        ) : (
          filteredLeads.map((lead) => (
            <Card key={lead.id} className="bg-background-dark/80 backdrop-blur-md border border-white/10 shadow-glow">
              <CardContent className="p-6">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <h3 className="text-lg font-semibold text-foreground-white">
                        {lead.first_name} {lead.last_name}
                      </h3>
                      <Badge className={getStatusColor(lead.status)}>
                        {lead.status}
                      </Badge>
                      <div className="flex items-center space-x-1">
                        <span className="text-sm text-foreground-white/60">Score:</span>
                        <span className={`text-sm font-bold ${getScoreColor(lead.lead_score)}`}>
                          {lead.lead_score}
                        </span>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-3">
                      <div className="flex items-center space-x-2 text-sm text-foreground-white/70">
                        <Mail className="w-4 h-4" />
                        <span>{lead.email}</span>
                      </div>
                      {lead.phone && (
                        <div className="flex items-center space-x-2 text-sm text-foreground-white/70">
                          <Phone className="w-4 h-4" />
                          <span>{lead.phone}</span>
                        </div>
                      )}
                      {lead.company_name && (
                        <div className="flex items-center space-x-2 text-sm text-foreground-white/70">
                          <Building className="w-4 h-4" />
                          <span>{lead.company_name}</span>
                        </div>
                      )}
                      {lead.job_title && (
                        <div className="flex items-center space-x-2 text-sm text-foreground-white/70">
                          <Users className="w-4 h-4" />
                          <span>{lead.job_title}</span>
                        </div>
                      )}
                    </div>
                    <div className="flex items-center space-x-4 text-sm text-foreground-white/60">
                      <span>Created: {new Date(lead.created_at).toLocaleDateString()}</span>
                      {lead.lead_source && <span>Source: {lead.lead_source}</span>}
                      {lead.industry && <span>Industry: {lead.industry}</span>}
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm" className="border-white/20 text-foreground-white hover:bg-brand-primary/20">
                      <Eye className="w-4 h-4 mr-2" />
                      View
                    </Button>
                    <Button variant="outline" size="sm" className="border-white/20 text-foreground-white hover:bg-brand-primary/20">
                      <Mail className="w-4 h-4 mr-2" />
                      Contact
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

export default LeadsManager