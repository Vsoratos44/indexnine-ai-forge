/**
 * Guest Management Feature Page
 * 
 * This page showcases the comprehensive guest management and communication tools
 * of the RSVPify Event Management Platform. It demonstrates how enterprises can
 * efficiently manage attendee relationships and automate communication workflows.
 * 
 * Key Features Highlighted:
 * - CRM integration and contact import capabilities
 * - Advanced guest segmentation and tagging
 * - Automated email campaigns and branded communications
 * - Smart confirmation and reminder systems
 * 
 * CMS Integration: All content is structured for easy backend management
 */

import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, Users, Mail, Tag, Calendar, Download, CheckCircle, Star, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import LivingVoidBackground from '@/components/LivingVoidBackground';

const GuestManagement = () => {
  const managementFeatures = [
    {
      title: 'CRM Integration & Import',
      description: 'Seamlessly import contacts from your existing CRM systems and maintain synchronized guest data.',
      icon: <Download className="w-6 h-6" />,
      benefits: [
        'One-click CRM import',
        'Real-time data synchronization',
        'Duplicate contact management',
        'Custom field mapping'
      ]
    },
    {
      title: 'Advanced Guest Segmentation',
      description: 'Organize and categorize attendees using intelligent tagging and segmentation tools.',
      icon: <Tag className="w-6 h-6" />,
      benefits: [
        'Custom tag creation',
        'Behavioral segmentation',
        'VIP and prospect identification',
        'Dynamic list management'
      ]
    },
    {
      title: 'Branded Email Engine',
      description: 'Send professional, branded communications that maintain your visual identity throughout the event journey.',
      icon: <Mail className="w-6 h-6" />,
      benefits: [
        'Custom email templates',
        'Brand consistency',
        'Automated delivery',
        'Performance tracking'
      ]
    }
  ];

  const communicationWorkflow = [
    {
      phase: 'Pre-Event',
      title: 'Invitation & Registration',
      description: 'Send branded invitations with personalized messaging based on guest segments.',
      features: [
        'Personalized invitations',
        'Registration links',
        'Save-the-date campaigns',
        'Early access notifications'
      ]
    },
    {
      phase: 'Confirmation',
      title: 'Automated Confirmations',
      description: 'Instantly confirm registrations with QR codes and calendar attachments.',
      features: [
        'Instant confirmation emails',
        'Unique QR code generation',
        'Calendar integration',
        'Event details package'
      ]
    },
    {
      phase: 'Reminders',
      title: 'Smart Reminder System',
      description: 'Automated reminder sequences to maximize attendance and engagement.',
      features: [
        'Multi-touch reminder campaigns',
        'Custom timing schedules',
        'Attendance optimization',
        'Last-minute updates'
      ]
    },
    {
      phase: 'Follow-up',
      title: 'Post-Event Engagement',
      description: 'Continue the relationship with thank you messages and engagement tracking.',
      features: [
        'Thank you campaigns',
        'Event recordings delivery',
        'Feedback collection',
        'Future event promotion'
      ]
    }
  ];

  const automationFeatures = [
    {
      title: 'Smart Email Triggers',
      description: 'Automated email sequences triggered by specific attendee actions and behaviors.',
      capabilities: [
        'Registration confirmations',
        'Payment confirmations',
        'Check-in notifications',
        'No-show follow-ups'
      ]
    },
    {
      title: 'Personalization Engine',
      description: 'Dynamic content personalization based on attendee data and preferences.',
      capabilities: [
        'Name and company personalization',
        'Industry-specific content',
        'Preference-based messaging',
        'Behavioral targeting'
      ]
    },
    {
      title: 'Multi-Channel Communication',
      description: 'Reach attendees through their preferred communication channels for maximum engagement.',
      capabilities: [
        'Email campaigns',
        'SMS notifications',
        'Push notifications',
        'Calendar integrations'
      ]
    }
  ];

  const guestDataPoints = [
    'Contact Information',
    'Company & Job Title',
    'Industry & Department',
    'Event Preferences',
    'Dietary Restrictions',
    'Accessibility Needs',
    'Communication Preferences',
    'Registration History'
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
              Powerful Guest List & Communication Tools
            </h1>
            <p className="text-xl text-foreground-secondary mb-8 leading-relaxed max-w-3xl mx-auto">
              Transform your attendee management with sophisticated CRM integration, intelligent segmentation, 
              and automated communication workflows that nurture relationships throughout the entire event lifecycle.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/events">
                <Button variant="outline" size="lg">
                  ← Back to Platform Overview
                </Button>
              </Link>
              <Button variant="hero" size="lg">
                Explore Guest Features
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Core Management Features */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Comprehensive Guest Relationship Management
            </h2>
            <p className="text-lg text-foreground-secondary max-w-3xl mx-auto">
              From initial contact import to post-event follow-up, manage every aspect of your 
              attendee relationships with enterprise-grade tools designed for scale and efficiency.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {managementFeatures.map((feature, index) => (
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

      {/* Communication Workflow */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              End-to-End Communication Workflow
            </h2>
            <p className="text-lg text-foreground-secondary max-w-2xl mx-auto">
              Guide attendees through a seamless communication journey from invitation to post-event follow-up.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {communicationWorkflow.map((phase, index) => (
              <Card key={index} className="bg-glass-light border-glass backdrop-blur-lg">
                <CardContent className="p-6">
                  <div className="text-center mb-4">
                    <span className="inline-block px-3 py-1 bg-brand-primary/20 text-brand-primary text-sm font-medium rounded-full mb-3">
                      {phase.phase}
                    </span>
                    <h3 className="text-lg font-semibold mb-2">{phase.title}</h3>
                    <p className="text-sm text-foreground-secondary leading-relaxed">
                      {phase.description}
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-medium text-brand-primary text-sm">Features:</h4>
                    <ul className="space-y-1">
                      {phase.features.map((feature, idx) => (
                        <li key={idx} className="text-xs text-foreground-tertiary flex items-center">
                          <CheckCircle className="w-3 h-3 mr-2 text-brand-primary" />
                          {feature}
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

      {/* Automation Features */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Intelligent Communication Automation
            </h2>
            <p className="text-lg text-foreground-secondary max-w-2xl mx-auto">
              Reduce manual work while improving attendee experience through smart automation and personalization.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {automationFeatures.map((feature, index) => (
              <Card key={index} className="bg-glass-light border-glass backdrop-blur-lg">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-brand-primary/20 rounded-lg flex items-center justify-center mb-4">
                    <Zap className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                  <p className="text-foreground-secondary mb-6 leading-relaxed">
                    {feature.description}
                  </p>
                  <div className="space-y-2">
                    <h4 className="font-medium text-brand-primary">Capabilities:</h4>
                    <ul className="space-y-1">
                      {feature.capabilities.map((capability, idx) => (
                        <li key={idx} className="text-sm text-foreground-tertiary flex items-center">
                          <CheckCircle className="w-3 h-3 mr-2 text-brand-primary" />
                          {capability}
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

      {/* Data Management & Privacy */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Comprehensive Data Management & Privacy
              </h2>
              <p className="text-lg text-foreground-secondary">
                Collect, organize, and protect attendee data with enterprise-grade security and compliance features.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* Guest Data Points */}
              <Card className="bg-glass-light border-glass backdrop-blur-lg">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-semibold mb-6">Captured Guest Data Points</h3>
                  <div className="grid grid-cols-2 gap-3">
                    {guestDataPoints.map((dataPoint, index) => (
                      <div key={index} className="flex items-center p-3 bg-glass-medium rounded-lg">
                        <Users className="w-4 h-4 text-brand-primary mr-3" />
                        <span className="text-sm text-foreground-white">{dataPoint}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Privacy & Compliance */}
              <Card className="bg-glass-light border-glass backdrop-blur-lg">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-semibold mb-6">Privacy & Compliance</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-brand-primary mr-3 mt-0.5" />
                      <div>
                        <strong>GDPR Compliance:</strong> Built-in privacy controls and consent management
                      </div>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-brand-primary mr-3 mt-0.5" />
                      <div>
                        <strong>Data Encryption:</strong> End-to-end encryption for all sensitive information
                      </div>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-brand-primary mr-3 mt-0.5" />
                      <div>
                        <strong>Access Controls:</strong> Role-based permissions for team collaboration
                      </div>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-brand-primary mr-3 mt-0.5" />
                      <div>
                        <strong>Data Portability:</strong> Easy export and integration with external systems
                      </div>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Communication Performance Metrics */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6">
          <Card className="bg-glass-light border-glass backdrop-blur-lg max-w-4xl mx-auto">
            <CardContent className="p-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold mb-4">Communication Performance</h2>
                <p className="text-foreground-secondary">
                  Track the effectiveness of your guest communication strategies with detailed analytics and insights.
                </p>
              </div>
              
              <div className="grid md:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-brand-primary mb-2">95%</div>
                  <p className="text-foreground-secondary">Email delivery rate</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-brand-primary mb-2">68%</div>
                  <p className="text-foreground-secondary">Average open rate</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-brand-primary mb-2">45%</div>
                  <p className="text-foreground-secondary">Click-through rate</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-brand-primary mb-2">85%</div>
                  <p className="text-foreground-secondary">Attendance improvement</p>
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
            <Link to="/events/features/on-site-experience">
              <Card className="bg-glass-light border-glass backdrop-blur-lg hover:bg-glass-medium transition-all duration-300 cursor-pointer">
                <CardContent className="p-6 text-center">
                  <h3 className="font-semibold mb-2">On-Site Experience</h3>
                  <ArrowRight className="w-5 h-5 mx-auto text-brand-primary" />
                </CardContent>
              </Card>
            </Link>
            <Link to="/events/features/analytics-and-integrations">
              <Card className="bg-glass-light border-glass backdrop-blur-lg hover:bg-glass-medium transition-all duration-300 cursor-pointer">
                <CardContent className="p-6 text-center">
                  <h3 className="font-semibold mb-2">Analytics & Integrations</h3>
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

export default GuestManagement;