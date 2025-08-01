/**
 * Analytics & Integrations Feature Page
 * 
 * This page showcases the comprehensive analytics dashboard and powerful integration
 * capabilities of the RSVPify Event Management Platform. It demonstrates how enterprises
 * can leverage data insights and connect with their existing business tools.
 * 
 * Key Features Highlighted:
 * - Central event dashboard with real-time analytics
 * - Zapier integration connecting to 4000+ apps
 * - Advanced tracking with Google Analytics and Facebook Pixel
 * - Custom reporting and data export capabilities
 * 
 * CMS Integration: All content is structured for easy backend management
 */

import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, BarChart3, Zap, Target, Download, TrendingUp, CheckCircle, Star, Database } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import LivingVoidBackground from '@/components/LivingVoidBackground';

const AnalyticsAndIntegrations = () => {
  const analyticsFeatures = [
    {
      title: 'Real-Time Event Dashboard',
      description: 'Comprehensive analytics dashboard that consolidates all event data with real-time updates and interactive visualizations.',
      icon: <BarChart3 className="w-6 h-6" />,
      benefits: [
        'Live registration tracking',
        'Revenue analytics',
        'Attendance monitoring',
        'Custom date filtering'
      ]
    },
    {
      title: 'Advanced Segmentation',
      description: 'Powerful filtering and segmentation tools to analyze attendee behavior and event performance by various criteria.',
      icon: <Target className="w-6 h-6" />,
      benefits: [
        'Industry-based analysis',
        'Geographic segmentation',
        'Registration source tracking',
        'Behavioral insights'
      ]
    },
    {
      title: 'Custom Report Generation',
      description: 'Create detailed reports with customizable metrics and export capabilities for stakeholder presentations.',
      icon: <Download className="w-6 h-6" />,
      benefits: [
        'PDF and Excel exports',
        'Automated report scheduling',
        'White-label reporting',
        'Custom metrics selection'
      ]
    }
  ];

  const integrationPlatforms = [
    {
      category: 'CRM Systems',
      platforms: ['Salesforce', 'HubSpot', 'Pipedrive', 'Zoho CRM'],
      icon: <Database className="w-6 h-6" />,
      description: 'Sync attendee data directly to your CRM for seamless lead management and follow-up.'
    },
    {
      category: 'Marketing Automation',
      platforms: ['Mailchimp', 'Marketo', 'Pardot', 'ActiveCampaign'],
      icon: <Target className="w-6 h-6" />,
      description: 'Automate post-event marketing campaigns and nurture sequences.'
    },
    {
      category: 'Analytics & Tracking',
      platforms: ['Google Analytics', 'Facebook Pixel', 'LinkedIn Insight', 'Adobe Analytics'],
      icon: <TrendingUp className="w-6 h-6" />,
      description: 'Track campaign effectiveness and ROI across all marketing channels.'
    },
    {
      category: 'Communication Tools',
      platforms: ['Slack', 'Microsoft Teams', 'Discord', 'Twilio'],
      icon: <Zap className="w-6 h-6" />,
      description: 'Automate team notifications and attendee communications.'
    }
  ];

  const dashboardMetrics = [
    {
      metric: 'Registration Conversion',
      description: 'Track conversion rates from page views to completed registrations',
      insights: [
        'Source attribution',
        'Drop-off analysis',
        'Optimization recommendations',
        'A/B testing results'
      ]
    },
    {
      metric: 'Revenue Analytics',
      description: 'Comprehensive financial tracking and revenue optimization insights',
      insights: [
        'Ticket sales performance',
        'Promo code effectiveness',
        'Revenue forecasting',
        'Payment method analysis'
      ]
    },
    {
      metric: 'Attendee Engagement',
      description: 'Measure attendee interaction and satisfaction throughout the event lifecycle',
      insights: [
        'Email engagement rates',
        'Check-in performance',
        'Session attendance',
        'Post-event feedback'
      ]
    }
  ];

  const automationWorkflows = [
    {
      trigger: 'New Registration',
      actions: [
        'Add contact to CRM',
        'Update marketing automation',
        'Send to Slack channel',
        'Log to analytics platform'
      ]
    },
    {
      trigger: 'Event Check-In',
      actions: [
        'Update attendance status',
        'Trigger welcome email',
        'Add to networking platform',
        'Log interaction data'
      ]
    },
    {
      trigger: 'Payment Completion',
      actions: [
        'Update financial records',
        'Send receipt via email',
        'Create accounting entry',
        'Update revenue dashboard'
      ]
    },
    {
      trigger: 'Post-Event',
      actions: [
        'Send thank you email',
        'Distribute event materials',
        'Collect feedback survey',
        'Schedule follow-up tasks'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background-dark text-foreground-white relative overflow-hidden">
      <LivingVoidBackground />
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-accent bg-clip-text text-transparent">
              Actionable Analytics & Powerful Integrations
            </h1>
            <p className="text-xl text-foreground-secondary mb-8 leading-relaxed max-w-3xl mx-auto">
              Transform event data into business intelligence with comprehensive analytics dashboards and seamless 
              integrations. Connect to 4000+ apps through Zapier and leverage advanced tracking to measure ROI 
              and optimize future events.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/events">
                <Button variant="outline" size="lg">
                  ← Back to Platform Overview
                </Button>
              </Link>
              <Button variant="hero" size="lg">
                Explore Analytics Features
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Analytics Features */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Comprehensive Event Analytics Platform
            </h2>
            <p className="text-lg text-foreground-secondary max-w-3xl mx-auto">
              Make data-driven decisions with real-time insights, advanced filtering, and customizable reporting 
              that transforms raw event data into actionable business intelligence.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {analyticsFeatures.map((feature, index) => (
              <Card 
                key={index} 
                className="bg-glass-light border-glass backdrop-blur-lg hover:bg-glass-medium transition-all duration-300"
              >
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-brand-primary/20 rounded-lg flex items-center justify-center mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                  <p className="text-foreground-secondary mb-6 leading-relaxed">
                    {feature.description}
                  </p>
                  <div className="space-y-2">
                    <h4 className="font-medium text-brand-primary">Key Benefits:</h4>
                    <ul className="space-y-1">
                      {feature.benefits.map((benefit, idx) => (
                        <li key={idx} className="text-sm text-foreground-tertiary flex items-center">
                          <Star className="w-3 h-3 mr-2 text-brand-primary" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Platforms */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              4000+ App Integrations via Zapier
            </h2>
            <p className="text-lg text-foreground-secondary max-w-2xl mx-auto">
              Connect your event platform to your existing business tools and automate workflows across your entire tech stack.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {integrationPlatforms.map((platform, index) => (
              <Card key={index} className="bg-glass-light border-glass backdrop-blur-lg">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-brand-primary/20 rounded-lg flex items-center justify-center mb-4">
                    {platform.icon}
                  </div>
                  <h3 className="text-lg font-semibold mb-3">{platform.category}</h3>
                  <p className="text-sm text-foreground-secondary mb-4 leading-relaxed">
                    {platform.description}
                  </p>
                  <div className="space-y-1">
                    {platform.platforms.map((app, idx) => (
                      <div key={idx} className="text-xs text-foreground-tertiary flex items-center">
                        <CheckCircle className="w-3 h-3 mr-2 text-brand-primary" />
                        {app}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Dashboard Metrics */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Advanced Metrics & Performance Insights
            </h2>
            <p className="text-lg text-foreground-secondary max-w-2xl mx-auto">
              Monitor every aspect of your event performance with detailed metrics and actionable insights.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {dashboardMetrics.map((metric, index) => (
              <Card key={index} className="bg-glass-light border-glass backdrop-blur-lg">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-brand-primary/20 rounded-lg flex items-center justify-center mb-4">
                    <TrendingUp className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{metric.metric}</h3>
                  <p className="text-foreground-secondary mb-6 leading-relaxed">
                    {metric.description}
                  </p>
                  <div className="space-y-2">
                    <h4 className="font-medium text-brand-primary">Available Insights:</h4>
                    <ul className="space-y-1">
                      {metric.insights.map((insight, idx) => (
                        <li key={idx} className="text-sm text-foreground-tertiary flex items-center">
                          <BarChart3 className="w-3 h-3 mr-2 text-brand-primary" />
                          {insight}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Automation Workflows */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Automated Workflow Examples
            </h2>
            <p className="text-lg text-foreground-secondary max-w-2xl mx-auto">
              See how the platform automatically triggers actions across your connected systems based on event activities.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {automationWorkflows.map((workflow, index) => (
              <Card key={index} className="bg-glass-light border-glass backdrop-blur-lg">
                <CardContent className="p-6">
                  <div className="text-center mb-4">
                    <div className="w-12 h-12 bg-brand-primary/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                      <Zap className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{workflow.trigger}</h3>
                  </div>
                  <div className="space-y-3">
                    <h4 className="font-medium text-brand-primary text-sm">Automated Actions:</h4>
                    <ul className="space-y-2">
                      {workflow.actions.map((action, idx) => (
                        <li key={idx} className="text-xs text-foreground-tertiary flex items-center">
                          <ArrowRight className="w-3 h-3 mr-2 text-brand-primary" />
                          {action}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Tracking & ROI Measurement */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Advanced Tracking & ROI Measurement
              </h2>
              <p className="text-lg text-foreground-secondary">
                Measure campaign effectiveness and event ROI with sophisticated tracking capabilities and attribution models.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* Tracking Capabilities */}
              <Card className="bg-glass-light border-glass backdrop-blur-lg">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-semibold mb-6">Tracking Capabilities</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <Target className="w-5 h-5 text-brand-primary mr-3 mt-0.5" />
                      <div>
                        <strong>Multi-Touch Attribution:</strong> Track the complete customer journey across touchpoints
                      </div>
                    </li>
                    <li className="flex items-start">
                      <BarChart3 className="w-5 h-5 text-brand-primary mr-3 mt-0.5" />
                      <div>
                        <strong>Conversion Tracking:</strong> Measure registration, payment, and attendance conversions
                      </div>
                    </li>
                    <li className="flex items-start">
                      <TrendingUp className="w-5 h-5 text-brand-primary mr-3 mt-0.5" />
                      <div>
                        <strong>Custom Event Tracking:</strong> Define and track custom conversion events and goals
                      </div>
                    </li>
                    <li className="flex items-start">
                      <Database className="w-5 h-5 text-brand-primary mr-3 mt-0.5" />
                      <div>
                        <strong>Cross-Platform Analytics:</strong> Unified analytics across web, mobile, and email
                      </div>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* ROI Metrics */}
              <Card className="bg-glass-light border-glass backdrop-blur-lg">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-semibold mb-6">ROI Measurement</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-brand-primary mr-3 mt-0.5" />
                      <div>
                        <strong>Cost Per Acquisition:</strong> Track acquisition costs across all marketing channels
                      </div>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-brand-primary mr-3 mt-0.5" />
                      <div>
                        <strong>Lifetime Value Analysis:</strong> Measure long-term attendee value and engagement
                      </div>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-brand-primary mr-3 mt-0.5" />
                      <div>
                        <strong>Revenue Attribution:</strong> Connect registrations to specific marketing efforts
                      </div>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-brand-primary mr-3 mt-0.5" />
                      <div>
                        <strong>Campaign Performance:</strong> Measure ROI of individual marketing campaigns
                      </div>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Performance Metrics Dashboard */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6">
          <Card className="bg-glass-light border-glass backdrop-blur-lg max-w-4xl mx-auto">
            <CardContent className="p-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold mb-4">Platform Performance Metrics</h2>
                <p className="text-foreground-secondary">
                  Real performance data from events managed through the platform.
                </p>
              </div>
              
              <div className="grid md:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-brand-primary mb-2">95%</div>
                  <p className="text-foreground-secondary">Data Accuracy Rate</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-brand-primary mb-2">2.3x</div>
                  <p className="text-foreground-secondary">Average ROI Improvement</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-brand-primary mb-2">4000+</div>
                  <p className="text-foreground-secondary">Available Integrations</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-brand-primary mb-2">60%</div>
                  <p className="text-foreground-secondary">Time Savings on Reporting</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Feature Navigation */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">
              Explore More Platform Features
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link to="/events/features/website-and-branding">
              <Card className="bg-glass-light border-glass backdrop-blur-lg hover:bg-glass-medium transition-all duration-300 cursor-pointer">
                <CardContent className="p-6 text-center">
                  <h3 className="font-semibold mb-2">Website & Branding</h3>
                  <ArrowRight className="w-5 h-5 mx-auto text-brand-primary" />
                </CardContent>
              </Card>
            </Link>
            <Link to="/events/features/registration-and-ticketing">
              <Card className="bg-glass-light border-glass backdrop-blur-lg hover:bg-glass-medium transition-all duration-300 cursor-pointer">
                <CardContent className="p-6 text-center">
                  <h3 className="font-semibold mb-2">Registration & Ticketing</h3>
                  <ArrowRight className="w-5 h-5 mx-auto text-brand-primary" />
                </CardContent>
              </Card>
            </Link>
            <Link to="/events/features/guest-management">
              <Card className="bg-glass-light border-glass backdrop-blur-lg hover:bg-glass-medium transition-all duration-300 cursor-pointer">
                <CardContent className="p-6 text-center">
                  <h3 className="font-semibold mb-2">Guest Management</h3>
                  <ArrowRight className="w-5 h-5 mx-auto text-brand-primary" />
                </CardContent>
              </Card>
            </Link>
            <Link to="/events/features/on-site-experience">
              <Card className="bg-glass-light border-glass backdrop-blur-lg hover:bg-glass-medium transition-all duration-300 cursor-pointer">
                <CardContent className="p-6 text-center">
                  <h3 className="font-semibold mb-2">On-Site Experience</h3>
                  <ArrowRight className="w-5 h-5 mx-auto text-brand-primary" />
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AnalyticsAndIntegrations;