/**
 * Events Admin Console - Backend Interface
 * 
 * This is the comprehensive backend interface for event organizers to create,
 * configure, and manage events. This interface is separate from user-facing
 * features and demonstrates our microservices architecture with CMS/CRM integration.
 * 
 * Architecture:
 * - Microservices-based with independent service endpoints
 * - CMS integration for content management (Strapi, Contentful, etc.)
 * - CRM integration for lead tracking and customer management
 * - Real-time dashboard with analytics and monitoring
 * 
 * Note: This is an internal tool for event organizers, not visible to end users.
 */

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { 
  Settings, 
  Users, 
  Mail, 
  BarChart3, 
  Globe, 
  Palette, 
  Calendar,
  Database,
  Zap,
  Shield,
  Activity,
  CheckCircle
} from 'lucide-react';

/**
 * Microservice Endpoint Configuration
 * Each service handles a specific domain of event management
 */
interface MicroserviceEndpoint {
  name: string;
  endpoint: string;
  status: 'healthy' | 'warning' | 'error';
  cmsIntegration: boolean;
  crmIntegration: boolean;
  description: string;
}

/**
 * CMS/CRM Integration Configuration
 * Defines available integrations and their capabilities
 */
interface Integration {
  name: string;
  type: 'CMS' | 'CRM';
  status: 'connected' | 'disconnected';
  capabilities: string[];
  apiEndpoint: string;
}

const EventsAdminConsole = () => {
  const [activeTab, setActiveTab] = useState('dashboard');

  /**
   * Microservices Architecture Overview
   * Each service is independently deployable and scalable
   */
  const microservices: MicroserviceEndpoint[] = [
    {
      name: 'Event Creation Service',
      endpoint: '/api/v1/events/create',
      status: 'healthy',
      cmsIntegration: true,
      crmIntegration: false,
      description: 'Handles event creation, configuration, and lifecycle management'
    },
    {
      name: 'Brand Management Service',
      endpoint: '/api/v1/branding/customize',
      status: 'healthy',
      cmsIntegration: true,
      crmIntegration: false,
      description: 'Manages white-labeling, custom themes, and brand assets'
    },
    {
      name: 'Guest List Service',
      endpoint: '/api/v1/guests/manage',
      status: 'healthy',
      cmsIntegration: false,
      crmIntegration: true,
      description: 'Handles attendee management, segmentation, and import/export'
    },
    {
      name: 'Communications Service',
      endpoint: '/api/v1/communications/send',
      status: 'healthy',
      cmsIntegration: true,
      crmIntegration: true,
      description: 'Manages email campaigns, notifications, and automated workflows'
    },
    {
      name: 'Analytics Service',
      endpoint: '/api/v1/analytics/generate',
      status: 'healthy',
      cmsIntegration: false,
      crmIntegration: true,
      description: 'Generates reports, tracks metrics, and provides business insights'
    },
    {
      name: 'Payment Processing Service',
      endpoint: '/api/v1/payments/process',
      status: 'healthy',
      cmsIntegration: false,
      crmIntegration: true,
      description: 'Handles ticketing, payments, and financial reporting'
    }
  ];

  /**
   * Available CMS/CRM Integrations
   * Demonstrates enterprise-grade connectivity options
   */
  const integrations: Integration[] = [
    {
      name: 'Strapi CMS',
      type: 'CMS',
      status: 'connected',
      capabilities: ['Content Management', 'Template Editing', 'Asset Management', 'Workflow Approval'],
      apiEndpoint: 'https://cms.indexnine.com/api'
    },
    {
      name: 'Contentful',
      type: 'CMS',
      status: 'disconnected',
      capabilities: ['Headless CMS', 'Multi-language Support', 'CDN Distribution'],
      apiEndpoint: 'https://api.contentful.com'
    },
    {
      name: 'Salesforce',
      type: 'CRM',
      status: 'connected',
      capabilities: ['Lead Management', 'Contact Sync', 'Pipeline Tracking', 'Opportunity Management'],
      apiEndpoint: 'https://api.salesforce.com/v1'
    },
    {
      name: 'HubSpot',
      type: 'CRM',
      status: 'connected',
      capabilities: ['Marketing Automation', 'Lead Scoring', 'Email Sequences', 'Analytics'],
      apiEndpoint: 'https://api.hubapi.com/v3'
    },
    {
      name: 'Marketo',
      type: 'CRM',
      status: 'disconnected',
      capabilities: ['Campaign Management', 'Lead Nurturing', 'ROI Tracking'],
      apiEndpoint: 'https://api.marketo.com/rest'
    },
    {
      name: 'Pipedrive',
      type: 'CRM',
      status: 'connected',
      capabilities: ['Deal Management', 'Contact Organization', 'Sales Pipeline'],
      apiEndpoint: 'https://api.pipedrive.com/v1'
    }
  ];

  /**
   * Real-time System Health Monitoring
   */
  const systemHealth = {
    uptime: '99.94%',
    activeEvents: 247,
    totalRegistrations: 15432,
    apiCalls: 2847291,
    avgResponseTime: '145ms'
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'healthy':
      case 'connected':
        return 'bg-green-500';
      case 'warning':
        return 'bg-yellow-500';
      case 'error':
      case 'disconnected':
        return 'bg-red-500';
      default:
        return 'bg-gray-500';
    }
  };

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-2 font-montserrat">
            Events Admin Console
          </h1>
          <p className="text-foreground-muted font-montserrat">
            Comprehensive backend interface for event management with microservices architecture
          </p>
        </div>

        {/* System Health Overview */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-8">
          <Card className="bg-gradient-card border-glass-border">
            <CardContent className="p-4 text-center">
              <Activity className="w-8 h-8 text-brand-primary mx-auto mb-2" />
              <div className="text-2xl font-bold text-foreground font-montserrat">{systemHealth.uptime}</div>
              <div className="text-sm text-foreground-muted font-montserrat">System Uptime</div>
            </CardContent>
          </Card>
          <Card className="bg-gradient-card border-glass-border">
            <CardContent className="p-4 text-center">
              <Calendar className="w-8 h-8 text-brand-primary mx-auto mb-2" />
              <div className="text-2xl font-bold text-foreground font-montserrat">{systemHealth.activeEvents}</div>
              <div className="text-sm text-foreground-muted font-montserrat">Active Events</div>
            </CardContent>
          </Card>
          <Card className="bg-gradient-card border-glass-border">
            <CardContent className="p-4 text-center">
              <Users className="w-8 h-8 text-brand-primary mx-auto mb-2" />
              <div className="text-2xl font-bold text-foreground font-montserrat">{systemHealth.totalRegistrations.toLocaleString()}</div>
              <div className="text-sm text-foreground-muted font-montserrat">Total Registrations</div>
            </CardContent>
          </Card>
          <Card className="bg-gradient-card border-glass-border">
            <CardContent className="p-4 text-center">
              <Zap className="w-8 h-8 text-brand-primary mx-auto mb-2" />
              <div className="text-2xl font-bold text-foreground font-montserrat">{systemHealth.apiCalls.toLocaleString()}</div>
              <div className="text-sm text-foreground-muted font-montserrat">API Calls Today</div>
            </CardContent>
          </Card>
          <Card className="bg-gradient-card border-glass-border">
            <CardContent className="p-4 text-center">
              <BarChart3 className="w-8 h-8 text-brand-primary mx-auto mb-2" />
              <div className="text-2xl font-bold text-foreground font-montserrat">{systemHealth.avgResponseTime}</div>
              <div className="text-sm text-foreground-muted font-montserrat">Avg Response Time</div>
            </CardContent>
          </Card>
        </div>

        {/* Main Console Interface */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
            <TabsTrigger value="microservices">Microservices</TabsTrigger>
            <TabsTrigger value="integrations">Integrations</TabsTrigger>
            <TabsTrigger value="event-management">Event Management</TabsTrigger>
          </TabsList>

          {/* Dashboard Tab */}
          <TabsContent value="dashboard" className="space-y-6">
            <div className="grid lg:grid-cols-2 gap-6">
              <Card className="bg-gradient-card border-glass-border">
                <CardHeader>
                  <CardTitle className="font-montserrat">Recent Activity</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-foreground-muted font-montserrat">Tech Conference 2024 - New Registration</span>
                      <Badge variant="outline">2 min ago</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-foreground-muted font-montserrat">VIP Dinner - Email Campaign Sent</span>
                      <Badge variant="outline">15 min ago</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-foreground-muted font-montserrat">Webinar Series - CRM Sync Completed</span>
                      <Badge variant="outline">1 hour ago</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-card border-glass-border">
                <CardHeader>
                  <CardTitle className="font-montserrat">Quick Actions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button className="w-full justify-start">
                    <Calendar className="w-4 h-4 mr-2" />
                    Create New Event
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <Users className="w-4 h-4 mr-2" />
                    Import Guest List
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <Mail className="w-4 h-4 mr-2" />
                    Send Email Campaign
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <BarChart3 className="w-4 h-4 mr-2" />
                    Generate Report
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Microservices Tab */}
          <TabsContent value="microservices" className="space-y-6">
            <Card className="bg-gradient-card border-glass-border">
              <CardHeader>
                <CardTitle className="font-montserrat">Microservices Architecture</CardTitle>
                <p className="text-foreground-muted font-montserrat">
                  Independent, scalable services powering the events platform
                </p>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4">
                  {microservices.map((service, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-glass-light rounded-lg border border-glass-border">
                      <div className="flex items-center space-x-4">
                        <div className={`w-3 h-3 rounded-full ${getStatusColor(service.status)}`}></div>
                        <div>
                          <h4 className="font-semibold text-foreground font-montserrat">{service.name}</h4>
                          <p className="text-sm text-foreground-muted font-montserrat">{service.description}</p>
                          <p className="text-xs text-foreground-muted font-mono">{service.endpoint}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        {service.cmsIntegration && (
                          <Badge variant="outline" className="text-xs">
                            <Database className="w-3 h-3 mr-1" />
                            CMS
                          </Badge>
                        )}
                        {service.crmIntegration && (
                          <Badge variant="outline" className="text-xs">
                            <Users className="w-3 h-3 mr-1" />
                            CRM
                          </Badge>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Integrations Tab */}
          <TabsContent value="integrations" className="space-y-6">
            <div className="grid lg:grid-cols-2 gap-6">
              {/* CMS Integrations */}
              <Card className="bg-gradient-card border-glass-border">
                <CardHeader>
                  <CardTitle className="flex items-center font-montserrat">
                    <Database className="w-5 h-5 mr-2" />
                    CMS Integrations
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {integrations.filter(i => i.type === 'CMS').map((integration, index) => (
                    <div key={index} className="p-4 bg-glass-light rounded-lg border border-glass-border">
                      <div className="flex items-center justify-between mb-3">
                        <h4 className="font-semibold text-foreground font-montserrat">{integration.name}</h4>
                        <div className="flex items-center space-x-2">
                          <div className={`w-2 h-2 rounded-full ${getStatusColor(integration.status)}`}></div>
                          <span className="text-xs text-foreground-muted font-montserrat capitalize">{integration.status}</span>
                        </div>
                      </div>
                      <div className="space-y-2">
                        {integration.capabilities.map((capability, idx) => (
                          <Badge key={idx} variant="outline" className="text-xs mr-2">
                            {capability}
                          </Badge>
                        ))}
                      </div>
                      <p className="text-xs text-foreground-muted font-mono mt-2">{integration.apiEndpoint}</p>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* CRM Integrations */}
              <Card className="bg-gradient-card border-glass-border">
                <CardHeader>
                  <CardTitle className="flex items-center font-montserrat">
                    <Users className="w-5 h-5 mr-2" />
                    CRM Integrations
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {integrations.filter(i => i.type === 'CRM').map((integration, index) => (
                    <div key={index} className="p-4 bg-glass-light rounded-lg border border-glass-border">
                      <div className="flex items-center justify-between mb-3">
                        <h4 className="font-semibold text-foreground font-montserrat">{integration.name}</h4>
                        <div className="flex items-center space-x-2">
                          <div className={`w-2 h-2 rounded-full ${getStatusColor(integration.status)}`}></div>
                          <span className="text-xs text-foreground-muted font-montserrat capitalize">{integration.status}</span>
                        </div>
                      </div>
                      <div className="space-y-2">
                        {integration.capabilities.map((capability, idx) => (
                          <Badge key={idx} variant="outline" className="text-xs mr-2">
                            {capability}
                          </Badge>
                        ))}
                      </div>
                      <p className="text-xs text-foreground-muted font-mono mt-2">{integration.apiEndpoint}</p>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Event Management Tab */}
          <TabsContent value="event-management" className="space-y-6">
            <Card className="bg-gradient-card border-glass-border">
              <CardHeader>
                <CardTitle className="font-montserrat">Event Management Capabilities</CardTitle>
                <p className="text-foreground-muted font-montserrat">
                  Backend tools for creating and managing events (not visible to end users)
                </p>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <Globe className="w-5 h-5 text-brand-primary" />
                      <h4 className="font-semibold text-foreground font-montserrat">Website Builder</h4>
                    </div>
                    <ul className="space-y-1 text-sm text-foreground-muted font-montserrat">
                      <li>• Drag-and-drop editor</li>
                      <li>• Custom templates</li>
                      <li>• White-label branding</li>
                      <li>• Privacy controls</li>
                    </ul>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <Palette className="w-5 h-5 text-brand-primary" />
                      <h4 className="font-semibold text-foreground font-montserrat">Brand Management</h4>
                    </div>
                    <ul className="space-y-1 text-sm text-foreground-muted font-montserrat">
                      <li>• Logo upload & positioning</li>
                      <li>• Color scheme customization</li>
                      <li>• Font selection</li>
                      <li>• Asset library</li>
                    </ul>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <Users className="w-5 h-5 text-brand-primary" />
                      <h4 className="font-semibold text-foreground font-montserrat">Guest Management</h4>
                    </div>
                    <ul className="space-y-1 text-sm text-foreground-muted font-montserrat">
                      <li>• CRM contact import</li>
                      <li>• Guest segmentation</li>
                      <li>• Custom tags & fields</li>
                      <li>• Bulk operations</li>
                    </ul>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <Mail className="w-5 h-5 text-brand-primary" />
                      <h4 className="font-semibold text-foreground font-montserrat">Communications</h4>
                    </div>
                    <ul className="space-y-1 text-sm text-foreground-muted font-montserrat">
                      <li>• Email campaign builder</li>
                      <li>• Automated sequences</li>
                      <li>• Template library</li>
                      <li>• A/B testing</li>
                    </ul>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <BarChart3 className="w-5 h-5 text-brand-primary" />
                      <h4 className="font-semibold text-foreground font-montserrat">Analytics Dashboard</h4>
                    </div>
                    <ul className="space-y-1 text-sm text-foreground-muted font-montserrat">
                      <li>• Real-time metrics</li>
                      <li>• Registration tracking</li>
                      <li>• Revenue reports</li>
                      <li>• ROI analysis</li>
                    </ul>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <Shield className="w-5 h-5 text-brand-primary" />
                      <h4 className="font-semibold text-foreground font-montserrat">Security & Compliance</h4>
                    </div>
                    <ul className="space-y-1 text-sm text-foreground-muted font-montserrat">
                      <li>• Data encryption</li>
                      <li>• GDPR compliance</li>
                      <li>• Access controls</li>
                      <li>• Audit logs</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default EventsAdminConsole;