/**
 * Website & Branding Feature Page
 * 
 * This page showcases the drag-and-drop website builder and branding controls
 * of the RSVPify Event Management Platform. It demonstrates how enterprises
 * can create branded, professional event websites with advanced privacy controls.
 * 
 * Key Features Highlighted:
 * - Drag-and-drop website builder with templates
 * - White-labeling capabilities for brand consistency
 * - Privacy and access controls for exclusive events
 * - Content management for agendas, speakers, and sponsors
 * 
 * CMS Integration: All content sections are designed to be easily manageable
 * through the backend CMS for dynamic updates without code changes.
 */

import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, Globe, Palette, Shield, Layout, Users, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import LivingVoidBackground from '@/components/LivingVoidBackground';

/**
 * CMS Data Structures for Feature Details
 * These interfaces define the data structure for content management
 */
interface FeatureHighlight {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  benefits: string[];
}

interface TemplateOption {
  id: string;
  name: string;
  description: string;
  features: string[];
  useCase: string;
}

const WebsiteAndBranding = () => {
  // CMS-Ready Data - Would be fetched from Strapi in production
  const featureHighlights: FeatureHighlight[] = [
    {
      id: 'drag-drop-builder',
      title: 'Intuitive Drag-and-Drop Builder',
      description: 'Create professional event websites without technical expertise using our visual builder.',
      icon: <Layout className="w-6 h-6" />,
      benefits: [
        'No coding required',
        'Real-time preview',
        'Mobile-responsive design',
        'Pre-built content blocks'
      ]
    },
    {
      id: 'white-labeling',
      title: 'Complete White-Label Branding',
      description: 'Maintain your brand identity throughout the entire event experience.',
      icon: <Palette className="w-6 h-6" />,
      benefits: [
        'Custom color schemes',
        'Logo integration',
        'Brand-consistent emails',
        'Removal of platform branding'
      ]
    },
    {
      id: 'privacy-controls',
      title: 'Advanced Privacy & Access Controls',
      description: 'Secure your exclusive corporate events with sophisticated access management.',
      icon: <Shield className="w-6 h-6" />,
      benefits: [
        'Password protection',
        'Invitation-only access',
        'IP restrictions',
        'Registration approval workflows'
      ]
    }
  ];

  const templateOptions: TemplateOption[] = [
    {
      id: 'corporate-conference',
      name: 'Corporate Conference',
      description: 'Professional template designed for large-scale business events and conferences.',
      features: ['Multi-track agenda', 'Speaker showcase', 'Sponsor sections', 'Networking areas'],
      useCase: 'Perfect for industry conferences, annual meetings, and professional gatherings.'
    },
    {
      id: 'executive-dinner',
      name: 'Executive Dinner',
      description: 'Elegant template for intimate, high-end corporate dining experiences.',
      features: ['Exclusive invitation design', 'Venue highlights', 'Menu previews', 'RSVP tracking'],
      useCase: 'Ideal for VIP client dinners, board meetings, and exclusive networking events.'
    },
    {
      id: 'product-launch',
      name: 'Product Launch',
      description: 'Dynamic template focused on showcasing new products and innovations.',
      features: ['Product galleries', 'Demo scheduling', 'Media kits', 'Press registration'],
      useCase: 'Designed for product unveilings, tech demos, and innovation showcases.'
    }
  ];

  const brandingCapabilities = [
    {
      title: 'Custom Domain Integration',
      description: 'Host your event website on your own domain for complete brand ownership.',
      icon: <Globe className="w-5 h-5" />
    },
    {
      title: 'Email Template Customization',
      description: 'Branded email communications that maintain your visual identity.',
      icon: <Palette className="w-5 h-5" />
    },
    {
      title: 'Multi-Language Support',
      description: 'Reach global audiences with localized content and interfaces.',
      icon: <Users className="w-5 h-5" />
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
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-accent bg-clip-text text-transparent">
              Custom Event Websites & Branding Controls
            </h1>
            <p className="text-xl text-foreground-secondary mb-8 leading-relaxed max-w-3xl mx-auto">
              Create stunning, branded event websites with our drag-and-drop builder. Maintain complete 
              control over your brand identity while leveraging powerful privacy and access controls 
              for exclusive corporate events.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/events">
                <Button variant="outline" size="lg">
                  ← Back to Platform Overview
                </Button>
              </Link>
              <Button variant="hero" size="lg">
                Explore All Features
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Core Features Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Professional Websites, Zero Technical Expertise Required
            </h2>
            <p className="text-lg text-foreground-secondary max-w-3xl mx-auto">
              Our website builder combines ease of use with enterprise-grade capabilities, 
              allowing you to create sophisticated event experiences that reflect your brand.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {featureHighlights.map((feature, index) => (
              <Card 
                key={feature.id} 
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

      {/* Template Showcase */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Professional Templates for Every Event Type
            </h2>
            <p className="text-lg text-foreground-secondary max-w-2xl mx-auto">
              Choose from carefully designed templates optimized for different event formats and business objectives.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {templateOptions.map((template, index) => (
              <Card key={template.id} className="bg-glass-light border-glass backdrop-blur-lg">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">{template.name}</h3>
                  <p className="text-foreground-secondary mb-4 leading-relaxed">
                    {template.description}
                  </p>
                  <div className="mb-6">
                    <h4 className="font-medium text-brand-primary mb-2">Template Features:</h4>
                    <ul className="space-y-1">
                      {template.features.map((feature, idx) => (
                        <li key={idx} className="text-sm text-foreground-tertiary flex items-center">
                          <ArrowRight className="w-3 h-3 mr-2 text-brand-primary" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="p-4 bg-glass-medium rounded-lg">
                    <p className="text-sm text-foreground-secondary italic">
                      {template.useCase}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Advanced Branding Capabilities */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Complete Brand Control & Customization
            </h2>
            <p className="text-lg text-foreground-secondary max-w-3xl mx-auto">
              Every aspect of your event experience can be customized to reflect your brand identity, 
              from the website design to email communications and attendee interactions.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {brandingCapabilities.map((capability, index) => (
              <Card key={index} className="bg-glass-light border-glass backdrop-blur-lg text-center">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-brand-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    {capability.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{capability.title}</h3>
                  <p className="text-foreground-secondary leading-relaxed">
                    {capability.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Privacy & Security Features */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Enterprise-Grade Privacy & Access Controls
              </h2>
              <p className="text-lg text-foreground-secondary">
                Protect your exclusive events with sophisticated security measures designed for corporate environments.
              </p>
            </div>
            
            <Card className="bg-glass-light border-glass backdrop-blur-lg">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Access Control Features</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <Shield className="w-5 h-5 text-brand-primary mr-3 mt-0.5" />
                        <div>
                          <strong>Password Protection:</strong> Secure your event pages with custom passwords
                        </div>
                      </li>
                      <li className="flex items-start">
                        <Shield className="w-5 h-5 text-brand-primary mr-3 mt-0.5" />
                        <div>
                          <strong>Invitation-Only Access:</strong> Restrict registration to invited guests only
                        </div>
                      </li>
                      <li className="flex items-start">
                        <Shield className="w-5 h-5 text-brand-primary mr-3 mt-0.5" />
                        <div>
                          <strong>IP Restrictions:</strong> Limit access based on geographic or network locations
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Privacy Compliance</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <Shield className="w-5 h-5 text-brand-primary mr-3 mt-0.5" />
                        <div>
                          <strong>GDPR Compliance:</strong> Built-in privacy controls and data management
                        </div>
                      </li>
                      <li className="flex items-start">
                        <Shield className="w-5 h-5 text-brand-primary mr-3 mt-0.5" />
                        <div>
                          <strong>Data Encryption:</strong> End-to-end encryption for all sensitive information
                        </div>
                      </li>
                      <li className="flex items-start">
                        <Shield className="w-5 h-5 text-brand-primary mr-3 mt-0.5" />
                        <div>
                          <strong>Audit Trails:</strong> Complete logging of access and data modifications
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Navigation to Other Features */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">
              Explore More Platform Features
            </h2>
            <p className="text-foreground-secondary max-w-2xl mx-auto">
              Discover how other components of the platform work together to create a comprehensive event management solution.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
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

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default WebsiteAndBranding;