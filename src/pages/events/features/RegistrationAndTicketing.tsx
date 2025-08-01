/**
 * Registration & Ticketing Feature Page
 * 
 * This page details the flexible registration forms and integrated ticketing system
 * of the RSVPify Event Management Platform. It showcases how enterprises can collect
 * valuable lead data while managing complex event logistics and payments.
 * 
 * Key Features Highlighted:
 * - Customizable registration forms with conditional logic
 * - Multi-tier ticketing with Stripe integration
 * - Waitlist management and capacity controls
 * - Promo codes and advanced pricing options
 * 
 * CMS Integration: All content is structured for easy management via backend CMS
 */

import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, CreditCard, Users, Calendar, Settings, CheckCircle, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import LivingVoidBackground from '@/components/LivingVoidBackground';

const RegistrationAndTicketing = () => {
  const formFeatures = [
    {
      title: 'Conditional Form Logic',
      description: 'Create dynamic forms that adapt based on user responses for personalized data collection.',
      icon: <Settings className="w-6 h-6" />,
      benefits: [
        'Smart field visibility',
        'Dynamic pricing based on selections',
        'Personalized user journeys',
        'Reduced form abandonment'
      ]
    },
    {
      title: 'Lead Generation Fields',
      description: 'Capture valuable business information for sales and marketing follow-up.',
      icon: <Users className="w-6 h-6" />,
      benefits: [
        'Company and job title capture',
        'Industry segmentation',
        'Custom data fields',
        'CRM integration ready'
      ]
    },
    {
      title: 'Multi-Part Events',
      description: 'Manage complex events with multiple sessions, workshops, or dining experiences.',
      icon: <Calendar className="w-6 h-6" />,
      benefits: [
        'Session selection',
        'Capacity management per session',
        'Separate pricing tiers',
        'Automated scheduling'
      ]
    }
  ];

  const ticketingFeatures = [
    {
      title: 'Integrated Payment Processing',
      description: 'Seamless Stripe integration for secure, reliable payment processing with real-time tracking.',
      capabilities: [
        'Multiple payment methods',
        'International currency support',
        'PCI compliance',
        'Real-time sales analytics'
      ]
    },
    {
      title: 'Advanced Pricing Options',
      description: 'Flexible pricing structures to accommodate various event types and business models.',
      capabilities: [
        'Early bird pricing',
        'Group discounts',
        'Promo code system',
        'Dynamic pricing rules'
      ]
    },
    {
      title: 'Capacity & Waitlist Management',
      description: 'Sophisticated tools to manage event capacity and optimize attendance.',
      capabilities: [
        'Automatic waitlist activation',
        'Priority queue management',
        'Overflow event creation',
        'Smart notification system'
      ]
    }
  ];

  const registrationWorkflow = [
    {
      step: 1,
      title: 'Custom Form Creation',
      description: 'Design registration forms tailored to your event and data needs using our drag-and-drop builder.'
    },
    {
      step: 2,
      title: 'Ticket Configuration',
      description: 'Set up pricing tiers, promotional codes, and capacity limits for optimal revenue management.'
    },
    {
      step: 3,
      title: 'Payment Processing',
      description: 'Secure payment collection with instant confirmation and automated receipt generation.'
    },
    {
      step: 4,
      title: 'Data Collection',
      description: 'Automatically sync attendee data to your CRM and marketing automation platforms.'
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
              Flexible Registration Forms & Integrated Ticketing
            </h1>
            <p className="text-xl text-foreground-secondary mb-8 leading-relaxed max-w-3xl mx-auto">
              Capture valuable lead data while streamlining the registration experience. Our sophisticated 
              form builder and integrated payment processing create seamless attendee journeys that drive 
              both engagement and revenue.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/events">
                <Button variant="outline" size="lg">
                  ← Back to Platform Overview
                </Button>
              </Link>
              <Button variant="hero" size="lg">
                Explore Registration Features
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Registration Form Features */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Intelligent Registration Forms That Convert
            </h2>
            <p className="text-lg text-foreground-secondary max-w-3xl mx-auto">
              Create sophisticated registration experiences that collect the right data while 
              maintaining high conversion rates through smart design and conditional logic.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {formFeatures.map((feature, index) => (
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

      {/* Ticketing System Features */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Enterprise-Grade Ticketing & Payment Processing
            </h2>
            <p className="text-lg text-foreground-secondary max-w-2xl mx-auto">
              Powered by Stripe, our ticketing system provides secure, scalable payment processing 
              with advanced features for complex event monetization strategies.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {ticketingFeatures.map((feature, index) => (
              <Card key={index} className="bg-glass-light border-glass backdrop-blur-lg">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-brand-primary/20 rounded-lg flex items-center justify-center mb-4">
                    <CreditCard className="w-6 h-6" />
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

      {/* Registration Workflow */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Streamlined Registration Workflow
            </h2>
            <p className="text-lg text-foreground-secondary max-w-2xl mx-auto">
              From form creation to payment processing, every step is optimized for efficiency and user experience.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {registrationWorkflow.map((item, index) => (
              <Card key={index} className="bg-glass-light border-glass backdrop-blur-lg text-center">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-brand-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-brand-primary">{item.step}</span>
                  </div>
                  <h3 className="text-lg font-semibold mb-3">{item.title}</h3>
                  <p className="text-sm text-foreground-secondary leading-relaxed">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Advanced Features Showcase */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Advanced Features for Complex Events
              </h2>
              <p className="text-lg text-foreground-secondary">
                Handle sophisticated event requirements with enterprise-grade features designed for scalability and flexibility.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* Waitlist Management */}
              <Card className="bg-glass-light border-glass backdrop-blur-lg">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-semibold mb-4">Intelligent Waitlist Management</h3>
                  <p className="text-foreground-secondary mb-6">
                    Automatically manage capacity overflows and optimize attendance with smart waitlist features.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-brand-primary mr-3 mt-0.5" />
                      <div>
                        <strong>Automatic Activation:</strong> Waitlists engage when capacity is reached
                      </div>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-brand-primary mr-3 mt-0.5" />
                      <div>
                        <strong>Priority Management:</strong> VIP and sponsor waitlist prioritization
                      </div>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-brand-primary mr-3 mt-0.5" />
                      <div>
                        <strong>Smart Notifications:</strong> Automated alerts when spots become available
                      </div>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Promotional Codes */}
              <Card className="bg-glass-light border-glass backdrop-blur-lg">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-semibold mb-4">Sophisticated Promo Code System</h3>
                  <p className="text-foreground-secondary mb-6">
                    Drive registration and reward specific audiences with flexible promotional pricing strategies.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-brand-primary mr-3 mt-0.5" />
                      <div>
                        <strong>Usage Limits:</strong> Control redemption quantities and date ranges
                      </div>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-brand-primary mr-3 mt-0.5" />
                      <div>
                        <strong>Targeted Discounts:</strong> Specific codes for different audience segments
                      </div>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-brand-primary mr-3 mt-0.5" />
                      <div>
                        <strong>Performance Tracking:</strong> Real-time analytics on code effectiveness
                      </div>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Data & Analytics Integration */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6">
          <Card className="bg-glass-light border-glass backdrop-blur-lg max-w-4xl mx-auto">
            <CardContent className="p-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold mb-4">Registration Data & Analytics</h2>
                <p className="text-foreground-secondary">
                  Transform registration data into actionable business insights with real-time analytics and CRM integration.
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-brand-primary mb-2">Real-time</div>
                  <p className="text-foreground-secondary">Registration tracking and capacity monitoring</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-brand-primary mb-2">100%</div>
                  <p className="text-foreground-secondary">Data accuracy with automated validation</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-brand-primary mb-2">4000+</div>
                  <p className="text-foreground-secondary">Integration options via Zapier connectivity</p>
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

      <Footer />
    </div>
  );
};

export default RegistrationAndTicketing;