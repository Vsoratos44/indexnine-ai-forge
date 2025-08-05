import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { QrCode, Smartphone, Download, CheckCircle, Star, Monitor, Users, Clock } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import LivingVoidBackground from '@/components/LivingVoidBackground';

const EventsMobileApp = () => {
  const appFeatures = [
    {
      title: 'QR Code Check-In',
      description: 'Instant attendee check-in using QR code scanning technology.',
      icon: <QrCode className="w-6 h-6" />,
      benefits: ['Lightning-fast scanning', 'Offline capability', 'Real-time sync', 'Fraud prevention']
    },
    {
      title: 'Attendee Management',
      description: 'Complete attendee database and search functionality.',
      icon: <Users className="w-6 h-6" />,
      benefits: ['Search by name/email', 'Guest list access', 'Registration status', 'Special requirements']
    },
    {
      title: 'Real-Time Analytics',
      description: 'Live event metrics and attendance tracking.',
      icon: <Monitor className="w-6 h-6" />,
      benefits: ['Live attendance rates', 'Check-in speed metrics', 'Staff performance', 'Event capacity']
    },
    {
      title: 'Staff Coordination',
      description: 'Multi-staff access with role-based permissions.',
      icon: <CheckCircle className="w-6 h-6" />,
      benefits: ['Role-based access', 'Staff notifications', 'Task assignment', 'Communication tools']
    }
  ];

  const appStats = [
    { metric: '< 5 sec', description: 'Average check-in time', icon: <Clock className="w-5 h-5" /> },
    { metric: '99.9%', description: 'Uptime reliability', icon: <CheckCircle className="w-5 h-5" /> },
    { metric: '3x', description: 'Faster than manual', icon: <Star className="w-5 h-5" /> },
    { metric: 'Offline', description: 'Works without internet', icon: <Smartphone className="w-5 h-5" /> }
  ];

  return (
    <div className="min-h-screen bg-background-dark text-foreground-white relative overflow-hidden">
      <LivingVoidBackground />
      
      <div className="relative z-10">
        <Header />
        
        {/* Hero Section */}
        <section className="pt-24 pb-16 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Events Mobile App
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-accent">
                Professional Event Management
              </span>
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto mb-8">
              Streamline your event operations with our powerful mobile application. 
              Handle check-ins, manage attendees, and track analytics in real-time.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button variant="hero" size="lg" className="flex items-center gap-2">
                <Download className="h-5 w-5" />
                Download for iOS
              </Button>
              <Button variant="outline" size="lg" className="flex items-center gap-2">
                <Download className="h-5 w-5" />
                Download for Android
              </Button>
            </div>

            {/* App Demo Preview */}
            <div className="max-w-4xl mx-auto">
              <Card className="bg-glass-light border-glass backdrop-blur-lg">
                <CardContent className="p-8">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {appStats.map((stat, index) => (
                      <div key={index} className="text-center">
                        <div className="w-12 h-12 bg-brand-primary/20 rounded-full flex items-center justify-center mx-auto mb-3">
                          {stat.icon}
                        </div>
                        <div className="text-2xl font-bold text-brand-primary mb-1">{stat.metric}</div>
                        <p className="text-sm text-foreground-secondary">{stat.description}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Everything You Need for Event Management
              </h2>
              <p className="text-lg text-foreground-secondary max-w-3xl mx-auto">
                Our mobile app puts the power of professional event management in your pocket.
              </p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-8">
              {appFeatures.map((feature, index) => (
                <Card key={index} className="bg-glass-light border-glass backdrop-blur-lg">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-brand-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                        {feature.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                        <p className="text-foreground-secondary mb-4 leading-relaxed">
                          {feature.description}
                        </p>
                        <div className="space-y-2">
                          <h4 className="font-medium text-brand-primary text-sm">Key Features:</h4>
                          <ul className="grid grid-cols-2 gap-1">
                            {feature.benefits.map((benefit, idx) => (
                              <li key={idx} className="text-sm text-foreground-tertiary flex items-center">
                                <CheckCircle className="w-3 h-3 mr-2 text-brand-primary flex-shrink-0" />
                                {benefit}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Simple Setup, Powerful Results
              </h2>
              <p className="text-lg text-foreground-secondary max-w-2xl mx-auto">
                Get your event up and running in minutes with our streamlined setup process.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="bg-glass-light border-glass backdrop-blur-lg text-center">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-brand-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Download className="w-8 h-8" />
                  </div>
                  <div className="text-lg font-bold text-brand-primary mb-2">Step 1</div>
                  <h3 className="text-lg font-semibold mb-3">Download & Install</h3>
                  <p className="text-sm text-foreground-secondary leading-relaxed">
                    Download the app from your device's app store and install it on your staff devices.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-glass-light border-glass backdrop-blur-lg text-center">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-brand-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8" />
                  </div>
                  <div className="text-lg font-bold text-brand-primary mb-2">Step 2</div>
                  <h3 className="text-lg font-semibold mb-3">Connect Your Event</h3>
                  <p className="text-sm text-foreground-secondary leading-relaxed">
                    Log in with your event credentials and sync your attendee list automatically.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-glass-light border-glass backdrop-blur-lg text-center">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-brand-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <QrCode className="w-8 h-8" />
                  </div>
                  <div className="text-lg font-bold text-brand-primary mb-2">Step 3</div>
                  <h3 className="text-lg font-semibold mb-3">Start Checking In</h3>
                  <p className="text-sm text-foreground-secondary leading-relaxed">
                    Begin scanning QR codes to check in attendees and track your event in real-time.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Download CTA */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="bg-glass-light border-glass backdrop-blur-lg">
              <CardContent className="p-8 text-center">
                <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Events?</h2>
                <p className="text-foreground-secondary mb-8 max-w-2xl mx-auto">
                  Join thousands of event professionals who trust our mobile app for seamless event management.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                  <Button variant="hero" size="lg" className="flex items-center gap-2">
                    <Download className="h-5 w-5" />
                    Download for iOS
                  </Button>
                  <Button variant="outline" size="lg" className="flex items-center gap-2">
                    <Download className="h-5 w-5" />
                    Download for Android
                  </Button>
                </div>

                <div className="flex flex-wrap justify-center gap-4 text-sm text-foreground-secondary">
                  <div className="flex items-center gap-1">
                    <CheckCircle className="w-4 h-4 text-brand-primary" />
                    Free to download
                  </div>
                  <div className="flex items-center gap-1">
                    <CheckCircle className="w-4 h-4 text-brand-primary" />
                    No setup fees
                  </div>
                  <div className="flex items-center gap-1">
                    <CheckCircle className="w-4 h-4 text-brand-primary" />
                    24/7 support
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

      </div>
      <Footer />
    </div>
  );
};

export default EventsMobileApp;