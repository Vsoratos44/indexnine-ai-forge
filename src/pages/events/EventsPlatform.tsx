/**
 * Events Platform Main Landing Page
 * 
 * This is the hub page for IndexNine's RSVPify Event Management Platform showcase.
 * It serves as a comprehensive overview designed to demonstrate our end-to-end
 * product engineering capabilities through a real-world SaaS platform example.
 * 
 * Architecture:
 * - Built using the established glassmorphism design system
 * - CMS-ready with modular data structures for easy content management
 * - Responsive design optimized for all screen sizes
 * - Interactive elements to engage potential enterprise clients
 * 
 * Target Audience: CTOs, VPs of Product, enterprise business leaders
 * Core Message: We engineer complete, market-ready products, not just services
 */

import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, Calendar, Users, BarChart3, Settings, Globe, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import LivingVoidBackground from '@/components/LivingVoidBackground';

/**
 * CMS Data Structure for Platform Features
 * This structure enables easy content management via backend CMS
 */
interface PlatformFeature {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  link: string;
  highlights: string[];
}

interface TechnicalPillar {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

interface UseCase {
  id: string;
  title: string;
  description: string;
  features: string[];
}

const EventsPlatform = () => {
  // CMS-Ready Data Structures - These would be pulled from Strapi in production
  const platformFeatures: PlatformFeature[] = [
    {
      id: 'website-branding',
      title: 'Event Website Builder & Branding',
      description: 'Drag-and-drop website builder with custom templates, white-labeling, and privacy controls for exclusive corporate events.',
      icon: <Globe className="w-6 h-6" />,
      link: '/events/features/website-and-branding',
      highlights: ['Custom Templates', 'White-Label Branding', 'Privacy Controls']
    },
    {
      id: 'registration-ticketing',
      title: 'Registration & Ticketing',
      description: 'Flexible forms, multi-tier ticketing, integrated payments, and advanced features like conditional logic and waitlisting.',
      icon: <Calendar className="w-6 h-6" />,
      link: '/events/features/registration-and-ticketing',
      highlights: ['Custom Forms', 'Stripe Integration', 'Waitlist Management']
    },
    {
      id: 'guest-management',
      title: 'Guest Management & Communications',
      description: 'CRM integration, automated email campaigns, guest segmentation, and branded communication workflows.',
      icon: <Users className="w-6 h-6" />,
      link: '/events/features/guest-management',
      highlights: ['CRM Integration', 'Email Automation', 'Guest Segmentation']
    },
    {
      id: 'onsite-experience',
      title: 'On-Site Experience & Check-in',
      description: 'QR code check-in, mobile apps, seating chart management, and real-time attendance tracking.',
      icon: <Settings className="w-6 h-6" />,
      link: '/events/features/on-site-experience',
      highlights: ['QR Code Check-in', 'Seating Charts', 'Real-time Tracking']
    },
    {
      id: 'analytics-integrations',
      title: 'Analytics & Integrations',
      description: 'Comprehensive dashboards, Zapier connectivity to 4000+ apps, and advanced tracking capabilities.',
      icon: <BarChart3 className="w-6 h-6" />,
      link: '/events/features/analytics-and-integrations',
      highlights: ['Dashboard Analytics', 'Zapier Integration', 'Multi-platform Tracking']
    }
  ];

  const technicalPillars: TechnicalPillar[] = [
    {
      id: 'modular-architecture',
      title: 'Modular Architecture',
      description: 'Clean separation of concerns between event creation, payment processing, and notification systems for maximum maintainability.',
      icon: <Settings className="w-5 h-5" />
    },
    {
      id: 'security-compliance',
      title: 'Security & Compliance',
      description: 'Multi-tenant data model with enterprise-grade security protecting sensitive guest information and ensuring regulatory compliance.',
      icon: <Shield className="w-5 h-5" />
    },
    {
      id: 'scalable-infrastructure',
      title: 'Scalable Infrastructure',
      description: 'Load balancers, asynchronous workers, and CDN integration to handle thousands of simultaneous registrations without performance degradation.',
      icon: <BarChart3 className="w-5 h-5" />
    }
  ];

  const useCases: UseCase[] = [
    {
      id: 'corporate-conferences',
      title: 'Corporate Conferences & SaaS Mixers',
      description: 'Large-scale professional events with complex registration flows, sponsor management, and networking features.',
      features: ['Multi-session management', 'Sponsor showcases', 'Networking tools', 'Lead capture']
    },
    {
      id: 'vip-dinners',
      title: 'Exclusive VIP & Client Prospecting Dinners',
      description: 'Intimate, invitation-only events with sophisticated guest management and personalized experiences.',
      features: ['Invitation-only access', 'Seating arrangements', 'Dietary preferences', 'Follow-up automation']
    },
    {
      id: 'virtual-hybrid',
      title: 'Virtual & Hybrid Webinars',
      description: 'Seamless integration between in-person and virtual attendees with unified registration and engagement tracking.',
      features: ['Unified registration', 'Virtual platform integration', 'Engagement analytics', 'Recording management']
    }
  ];

  return (
    <div className="min-h-screen bg-background-dark text-foreground-white relative overflow-hidden">
      {/* Interactive Background */}
      <LivingVoidBackground />
      
      {/* Navigation */}
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-accent bg-clip-text text-transparent">
              Engineering the Future of Events
            </h1>
            <h2 className="text-xl md:text-2xl text-foreground-secondary mb-8 leading-relaxed">
              Inside a World-Class B2B Platform
            </h2>
            <p className="text-lg text-foreground-tertiary mb-12 max-w-3xl mx-auto leading-relaxed">
              Explore how IndexNine engineered a comprehensive event management solution that streamlines 
              everything from registration and ticketing to on-site check-in and analytics.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="hero" 
                size="lg"
                onClick={() => document.getElementById('platform-features')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Explore Platform Features
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button variant="outline" size="lg">
                Scope Your Custom Platform
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Overview & Business Value Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              More Than an App, It's a Business Solution
            </h2>
            <p className="text-lg text-foreground-secondary leading-relaxed mb-12">
              This platform drives measurable business value by saving time, increasing engagement, and capturing 
              actionable data for sales and marketing efforts—all while keeping the host's brand front-and-center. 
              It's a testament to our ability to build products that solve real business problems at scale.
            </p>
            
            {/* Business Value Metrics */}
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="bg-glass-light border-glass backdrop-blur-lg">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-brand-primary mb-2">75%</div>
                  <p className="text-foreground-secondary">Time Savings on Event Management</p>
                </CardContent>
              </Card>
              <Card className="bg-glass-light border-glass backdrop-blur-lg">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-brand-primary mb-2">3x</div>
                  <p className="text-foreground-secondary">Increase in Lead Quality</p>
                </CardContent>
              </Card>
              <Card className="bg-glass-light border-glass backdrop-blur-lg">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-brand-primary mb-2">99.9%</div>
                  <p className="text-foreground-secondary">Platform Uptime</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Core Platform Pillars */}
      <section id="platform-features" className="py-20 relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              An End-to-End Solution for Any Event
            </h2>
            <p className="text-lg text-foreground-secondary max-w-2xl mx-auto">
              Discover the comprehensive feature set that makes this platform a complete 
              event management solution for enterprises and organizations of all sizes.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {platformFeatures.map((feature, index) => (
              <Card 
                key={feature.id} 
                className="group bg-glass-light border-glass backdrop-blur-lg hover:bg-glass-medium transition-all duration-300 transform hover:scale-105"
              >
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-brand-primary/20 rounded-lg flex items-center justify-center mr-4 group-hover:bg-brand-primary/30 transition-colors">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-semibold">{feature.title}</h3>
                  </div>
                  <p className="text-foreground-secondary mb-4 leading-relaxed">
                    {feature.description}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {feature.highlights.map((highlight, idx) => (
                      <li key={idx} className="text-sm text-foreground-tertiary flex items-center">
                        <ArrowRight className="w-3 h-3 mr-2 text-brand-primary" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                  <Link to={feature.link}>
                    <Button variant="outline" size="sm" className="w-full group-hover:border-brand-primary group-hover:text-brand-primary">
                      Learn More
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Excellence Showcase */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Architected for Scalability, Security, and Performance
            </h2>
            <p className="text-lg text-foreground-secondary max-w-3xl mx-auto">
              This platform showcases IndexNine's engineering excellence through thoughtful architecture 
              decisions and enterprise-grade technical implementation.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {technicalPillars.map((pillar, index) => (
              <Card key={pillar.id} className="bg-glass-light border-glass backdrop-blur-lg">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-brand-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    {pillar.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{pillar.title}</h3>
                  <p className="text-foreground-secondary leading-relaxed">
                    {pillar.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases in Action */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Built for B2B, Powerful for Everyone
            </h2>
            <p className="text-lg text-foreground-secondary max-w-2xl mx-auto">
              See how this versatile platform adapts to different event types and business requirements.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <Card key={useCase.id} className="bg-glass-light border-glass backdrop-blur-lg">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">{useCase.title}</h3>
                  <p className="text-foreground-secondary mb-6 leading-relaxed">
                    {useCase.description}
                  </p>
                  <div className="space-y-2">
                    <h4 className="font-medium text-brand-primary">Key Features:</h4>
                    <ul className="space-y-1">
                      {useCase.features.map((feature, idx) => (
                        <li key={idx} className="text-sm text-foreground-tertiary flex items-center">
                          <ArrowRight className="w-3 h-3 mr-2 text-brand-primary" />
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

      {/* Final CTA Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Have an idea for your own digital platform?
            </h2>
            <p className="text-lg text-foreground-secondary mb-8 leading-relaxed">
              Let's transform your vision into a world-class product. Our team specializes in building 
              scalable, secure, and user-friendly platforms that drive real business results.
            </p>
            <Button variant="hero" size="lg">
              Let's Build It Together
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default EventsPlatform;