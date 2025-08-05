import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { QrCode, Users, BarChart3, MapPin, Settings, ArrowRight, Star, CheckCircle, Globe, Monitor, Smartphone, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import LivingVoidBackground from '@/components/LivingVoidBackground';
import { QRCodeCheckIn } from '@/components/events/QRCodeCheckIn';
import { SeatingChartManager } from '@/components/events/SeatingChartManager';
import { EventAnalytics } from '@/components/events/EventAnalytics';

const OnSiteExperience = () => {
  const [selectedEventId, setSelectedEventId] = useState('550e8400-e29b-41d4-a716-446655440000'); // Default event ID
  const coreFeatures = [
    {
      title: 'QR Code Check-In System',
      description: 'Lightning-fast, contactless check-in using unique QR codes generated for each attendee.',
      icon: <QrCode className="w-6 h-6" />,
      benefits: [
        'Instant check-in scanning',
        'Contactless experience',
        'Real-time validation',
        'Fraud prevention'
      ]
    },
    {
      title: 'Seating Chart Management',
      description: 'Visual drag-and-drop seating arrangement for galas, dinners, and assigned seating events.',
      icon: <MapPin className="w-6 h-6" />,
      benefits: [
        'Visual seating designer',
        'Table assignment tools',
        'VIP placement management',
        'Dietary preference tracking'
      ]
    },
    {
      title: 'Mobile Check-In App',
      description: 'Dedicated mobile application for event staff to manage check-ins and attendee flow.',
      icon: <Smartphone className="w-6 h-6" />,
      benefits: [
        'Offline functionality',
        'Multiple staff accounts',
        'Real-time synchronization',
        'Attendee search capabilities'
      ]
    }
  ];

  const checkInProcess = [
    {
      step: 1,
      title: 'QR Code Generation',
      description: 'Unique QR codes are automatically generated and included in confirmation emails.',
      icon: <QrCode className="w-8 h-8" />
    },
    {
      step: 2,
      title: 'Mobile Scanning',
      description: 'Staff use mobile devices to instantly scan and validate attendee QR codes.',
      icon: <Smartphone className="w-8 h-8" />
    },
    {
      step: 3,
      title: 'Real-Time Updates',
      description: 'Check-in status is immediately updated across all systems and dashboards.',
      icon: <Clock className="w-8 h-8" />
    },
    {
      step: 4,
      title: 'Access Control',
      description: 'Automated access management for different event areas and sessions.',
      icon: <CheckCircle className="w-8 h-8" />
    }
  ];

  const seatingFeatures = [
    {
      title: 'Visual Table Designer',
      description: 'Intuitive drag-and-drop interface for creating and managing table layouts.',
      capabilities: [
        'Custom table shapes and sizes',
        'Floor plan import',
        'Capacity management',
        'Accessibility considerations'
      ]
    },
    {
      title: 'Smart Guest Assignment',
      description: 'Intelligent algorithms to optimize seating based on guest preferences and networking goals.',
      capabilities: [
        'Industry-based grouping',
        'VIP placement rules',
        'Dietary restriction matching',
        'Conflict avoidance'
      ]
    },
    {
      title: 'Real-Time Management',
      description: 'Live updates and modifications to seating arrangements as guest lists change.',
      capabilities: [
        'Last-minute adjustments',
        'No-show management',
        'Table optimization',
        'Staff notifications'
      ]
    }
  ];

  const trackingMetrics = [
    {
      metric: 'Attendance Rate',
      description: 'Real-time tracking of checked-in vs. registered attendees',
      value: '92%',
      icon: <Users className="w-5 h-5" />
    },
    {
      metric: 'Check-In Speed',
      description: 'Average time per attendee check-in process',
      value: '15 sec',
      icon: <Clock className="w-5 h-5" />
    },
    {
      metric: 'Staff Efficiency',
      description: 'Attendees processed per staff member per hour',
      value: '120/hr',
      icon: <CheckCircle className="w-5 h-5" />
    },
    {
      metric: 'System Uptime',
      description: 'Check-in system reliability during events',
      value: '99.9%',
      icon: <Monitor className="w-5 h-5" />
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
              Seamless On-Site Experience & Check-In
            </h1>
            <p className="text-xl text-foreground-secondary mb-8 leading-relaxed max-w-3xl mx-auto">
              Transform event check-in from a bottleneck into a smooth, professional experience. Our QR code 
              system, seating management tools, and real-time tracking ensure flawless event execution from 
              arrival to departure.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/events">
                <Button variant="outline" size="lg">
                  ← Back to Platform Overview
                </Button>
              </Link>
              <Button variant="hero" size="lg">
                Explore On-Site Features
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Core Features */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Professional Check-In & Event Management
            </h2>
            <p className="text-lg text-foreground-secondary max-w-3xl mx-auto">
              Every aspect of the on-site experience is optimized for efficiency, security, and attendee satisfaction.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {coreFeatures.map((feature, index) => (
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

      {/* Check-In Process */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Streamlined Check-In Process
            </h2>
            <p className="text-lg text-foreground-secondary max-w-2xl mx-auto">
              From QR code generation to real-time updates, every step is designed for maximum efficiency and security.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {checkInProcess.map((item, index) => (
              <Card key={index} className="bg-glass-light border-glass backdrop-blur-lg text-center">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-brand-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    {item.icon}
                  </div>
                  <div className="text-lg font-bold text-brand-primary mb-2">Step {item.step}</div>
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

      {/* Seating Management Features */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Advanced Seating Chart Management
            </h2>
            <p className="text-lg text-foreground-secondary max-w-2xl mx-auto">
              Create perfect seating arrangements for any event format with intelligent tools and real-time management.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {seatingFeatures.map((feature, index) => (
              <Card key={index} className="bg-glass-light border-glass backdrop-blur-lg">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-brand-primary/20 rounded-lg flex items-center justify-center mb-4">
                    <MapPin className="w-6 h-6" />
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

      {/* Real-Time Tracking Metrics */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Real-Time Event Analytics
            </h2>
            <p className="text-lg text-foreground-secondary max-w-2xl mx-auto">
              Monitor event performance with live data and actionable insights for immediate optimization.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {trackingMetrics.map((metric, index) => (
              <Card key={index} className="bg-glass-light border-glass backdrop-blur-lg text-center">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-brand-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    {metric.icon}
                  </div>
                  <div className="text-3xl font-bold text-brand-primary mb-2">{metric.value}</div>
                  <h3 className="text-lg font-semibold mb-2">{metric.metric}</h3>
                  <p className="text-sm text-foreground-secondary leading-relaxed">
                    {metric.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Self-Service Options */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Self-Service Check-In Kiosks
              </h2>
              <p className="text-lg text-foreground-secondary">
                Scale your check-in process for large events with automated self-service stations.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* Kiosk Features */}
              <Card className="bg-glass-light border-glass backdrop-blur-lg">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-semibold mb-6">Kiosk Capabilities</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <Monitor className="w-5 h-5 text-brand-primary mr-3 mt-0.5" />
                      <div>
                        <strong>Touch Screen Interface:</strong> Intuitive self-service check-in experience
                      </div>
                    </li>
                    <li className="flex items-start">
                      <QrCode className="w-5 h-5 text-brand-primary mr-3 mt-0.5" />
                      <div>
                        <strong>QR Code Scanning:</strong> Built-in scanner for quick attendee validation
                      </div>
                    </li>
                    <li className="flex items-start">
                      <Users className="w-5 h-5 text-brand-primary mr-3 mt-0.5" />
                      <div>
                        <strong>Badge Printing:</strong> Automatic name badge generation and printing
                      </div>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-brand-primary mr-3 mt-0.5" />
                      <div>
                        <strong>Staff Override:</strong> Remote assistance and manual check-in options
                      </div>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Benefits */}
              <Card className="bg-glass-light border-glass backdrop-blur-lg">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-semibold mb-6">Business Benefits</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <Star className="w-5 h-5 text-brand-primary mr-3 mt-0.5" />
                      <div>
                        <strong>Reduced Wait Times:</strong> Process 3x more attendees with same staff
                      </div>
                    </li>
                    <li className="flex items-start">
                      <Star className="w-5 h-5 text-brand-primary mr-3 mt-0.5" />
                      <div>
                        <strong>Cost Efficiency:</strong> Lower staffing requirements for large events
                      </div>
                    </li>
                    <li className="flex items-start">
                      <Star className="w-5 h-5 text-brand-primary mr-3 mt-0.5" />
                      <div>
                        <strong>Data Accuracy:</strong> Eliminate manual entry errors and inconsistencies
                      </div>
                    </li>
                    <li className="flex items-start">
                      <Star className="w-5 h-5 text-brand-primary mr-3 mt-0.5" />
                      <div>
                        <strong>Attendee Satisfaction:</strong> Faster, more convenient check-in experience
                      </div>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Integration with Other Systems */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6">
          <Card className="bg-glass-light border-glass backdrop-blur-lg max-w-4xl mx-auto">
            <CardContent className="p-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold mb-4">System Integration & Accessibility</h2>
                <p className="text-foreground-secondary">
                  Seamlessly integrate with existing event infrastructure and ensure accessibility for all attendees.
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-brand-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Smartphone className="w-8 h-8" />
                  </div>
                  <h3 className="font-semibold mb-2">Mobile Integration</h3>
                  <p className="text-sm text-foreground-secondary">iOS and Android apps for staff and attendees</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-brand-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8" />
                  </div>
                  <h3 className="font-semibold mb-2">Accessibility</h3>
                  <p className="text-sm text-foreground-secondary">ADA compliant interfaces and assisted check-in</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-brand-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Monitor className="w-8 h-8" />
                  </div>
                  <h3 className="font-semibold mb-2">Hardware Support</h3>
                  <p className="text-sm text-foreground-secondary">Compatible with tablets, scanners, and kiosks</p>
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

export default OnSiteExperience;