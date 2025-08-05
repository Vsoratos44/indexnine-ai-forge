import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import LivingVoidBackground from '@/components/LivingVoidBackground';
import { ArrowLeft, CheckCircle, Shield, Users, Target, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';

const PivotCaseStudy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[75vh] min-h-[700px] overflow-hidden bg-gradient-hero">
        <LivingVoidBackground />
        
        <div className="relative z-10 container mx-auto px-6 lg:px-8 pt-32 pb-24">
          <div className="max-w-5xl mx-auto">
            <Link to="/" className="inline-flex items-center text-brand-primary hover:text-brand-primary-dark transition-colors mb-8">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Homepage
            </Link>
            
            <div className="mb-6">
              <span className="inline-block px-6 py-3 bg-brand-primary/10 text-brand-primary rounded-full text-sm font-medium border border-brand-primary/20 backdrop-blur-sm">
                Case Study: Pivot Phase
              </span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-8 leading-tight tracking-tight animate-fade-in font-montserrat">
              Zilla Security: <br />
              <span className="bg-gradient-primary bg-clip-text text-transparent">Engineering the Perfect Pivot</span>
            </h1>
            
            <p className="text-lg sm:text-xl lg:text-2xl text-foreground/85 mb-12 max-w-4xl leading-relaxed font-light animate-slide-up font-montserrat">
              Indexnine's strategic product engineering transformed a niche auditing tool into a mission-critical identity platform, creating exponential enterprise value.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <div className="backdrop-blur-xl bg-glass-bg border border-glass-border rounded-2xl p-4 text-center">
                <p className="text-sm text-foreground/60 mb-1">Industry</p>
                <p className="text-foreground font-semibold">Cybersecurity</p>
              </div>
              <div className="backdrop-blur-xl bg-glass-bg border border-glass-border rounded-2xl p-4 text-center">
                <p className="text-sm text-foreground/60 mb-1">Vertical</p>
                <p className="text-foreground font-semibold">Identity & Access</p>
              </div>
              <div className="backdrop-blur-xl bg-glass-bg border border-glass-border rounded-2xl p-4 text-center">
                <p className="text-sm text-foreground/60 mb-1">Outcome</p>
                <p className="text-foreground font-semibold">$165M+ Exit</p>
              </div>
              <div className="backdrop-blur-xl bg-glass-bg border border-glass-border rounded-2xl p-4 text-center">
                <p className="text-sm text-foreground/60 mb-1">Timeline</p>
                <p className="text-foreground font-semibold">Multi-year</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Challenge Section */}
      <section className="py-24 lg:py-32 bg-gradient-section relative overflow-hidden">
        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-8 font-montserrat">
              The Paradox of Visibility in a Sprawling Digital Estate
            </h2>
            
            <p className="text-lg text-foreground-muted leading-relaxed mb-8">
              The IT landscape is chaotic; applications and data are distributed across hundreds of SaaS platforms, multiple cloud providers, and countless homegrown systems. For a Chief Information Security Officer (CISO), this creates a nightmare scenario for managing who has access to what.
            </p>
            
            <p className="text-lg text-foreground-muted leading-relaxed mb-8">
              Zilla Security was founded to solve this problem with an auditing tool that could connect to this fragmented digital estate and give CISOs a unified view of all user permissions. The product was a success, quickly acquiring 100+ customers, including major enterprises like United Airlines.
            </p>

            <div className="backdrop-blur-xl bg-glass-bg border border-glass-border rounded-3xl p-8 mb-8">
              <h3 className="text-2xl font-bold text-brand-primary mb-4 font-montserrat">The Critical Feedback</h3>
              <p className="text-lg text-foreground-muted leading-relaxed italic">
                "This is great, you've shown me that I have security issues. Now, how do I fix them?"
              </p>
              <p className="text-sm text-foreground/60 mt-2">— Consistent customer feedback across 100+ enterprise clients</p>
            </div>

            <p className="text-lg text-foreground-muted leading-relaxed">
              Zilla found itself at a strategic inflection point. They had a product that could show customers their security problems, but now needed to offer security solutions. This customer friction could prove a roadblock to continued growth and a potential threat to the company's long-term viability.
            </p>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-24 lg:py-32 bg-background">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-8 font-montserrat">
              The Pivot: From Audit to Action
            </h2>
            
            <p className="text-lg text-foreground-muted leading-relaxed mb-12">
              This wasn't a simple feature request; it was a mission-critical product pivot that required a decisive intersection of experienced strategic consulting and best-in-class engineering execution.
            </p>
            
            <div className="space-y-12">
              {/* Phase 1 */}
              <div className="grid md:grid-cols-12 gap-8 items-center">
                <div className="md:col-span-2">
                  <div className="bg-gradient-to-br from-brand-primary/10 via-brand-primary/5 to-brand-purple/10 backdrop-blur-md rounded-2xl w-16 h-16 flex items-center justify-center border border-brand-primary/20 shadow-md">
                    <Target className="w-8 h-8 text-brand-primary" />
                  </div>
                </div>
                <div className="md:col-span-10">
                  <h3 className="text-2xl font-bold text-foreground mb-4 font-montserrat">Phase 1: Charting the Course</h3>
                  <p className="text-foreground-muted leading-relaxed">
                    Our engagement began with in-depth strategy workshops led by our Discovery and Engineering studios. We worked closely with client leadership to internalize customer feedback and map out a new product vision - evolving from a passive, read-only auditing tool into an active, read-write provisioning platform.
                  </p>
                </div>
              </div>

              {/* Phase 2 */}
              <div className="grid md:grid-cols-12 gap-8 items-start">
                <div className="md:col-span-2">
                  <div className="bg-gradient-to-br from-brand-primary/10 via-brand-primary/5 to-brand-purple/10 backdrop-blur-md rounded-2xl w-16 h-16 flex items-center justify-center border border-brand-primary/20 shadow-md">
                    <Shield className="w-8 h-8 text-brand-primary" />
                  </div>
                </div>
                <div className="md:col-span-10">
                  <h3 className="text-2xl font-bold text-foreground mb-4 font-montserrat">Phase 2: Engineering an Enterprise-Grade Provisioning Engine</h3>
                  <p className="text-foreground-muted leading-relaxed mb-6">
                    Moving from a system that reports on permissions to one that changes them is an order-of-magnitude increase in technical complexity. We architected and built a secure, scalable, and resilient provisioning engine from the ground up.
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="backdrop-blur-xl bg-glass-bg border border-glass-border rounded-2xl p-6">
                      <h4 className="font-semibold text-foreground mb-2">API Integration at Scale</h4>
                      <p className="text-sm text-foreground-muted">Highly extensible framework handling hundreds of disparate third-party systems with robust error handling and monitoring.</p>
                    </div>
                    <div className="backdrop-blur-xl bg-glass-bg border border-glass-border rounded-2xl p-6">
                      <h4 className="font-semibold text-foreground mb-2">Transactional State Management</h4>
                      <p className="text-sm text-foreground-muted">Sophisticated architecture ensuring guaranteed execution across multiple APIs with rollback capabilities.</p>
                    </div>
                    <div className="backdrop-blur-xl bg-glass-bg border border-glass-border rounded-2xl p-6">
                      <h4 className="font-semibold text-foreground mb-2">Security-First Design</h4>
                      <p className="text-sm text-foreground-muted">Zero-trust architecture with least-privilege access, end-to-end encryption, and immutable audit logs.</p>
                    </div>
                    <div className="backdrop-blur-xl bg-glass-bg border border-glass-border rounded-2xl p-6">
                      <h4 className="font-semibold text-foreground mb-2">Scalable Microservices</h4>
                      <p className="text-sm text-foreground-muted">Independent scaling for different system integrations, ensuring high performance and resource efficiency.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Phase 3 */}
              <div className="grid md:grid-cols-12 gap-8 items-center">
                <div className="md:col-span-2">
                  <div className="bg-gradient-to-br from-brand-primary/10 via-brand-primary/5 to-brand-purple/10 backdrop-blur-md rounded-2xl w-16 h-16 flex items-center justify-center border border-brand-primary/20 shadow-md">
                    <TrendingUp className="w-8 h-8 text-brand-primary" />
                  </div>
                </div>
                <div className="md:col-span-10">
                  <h3 className="text-2xl font-bold text-foreground mb-4 font-montserrat">Phase 3: Continuous Product Modernization</h3>
                  <p className="text-foreground-muted leading-relaxed">
                    Our partnership continued as Zilla grew and entered acquisition conversations. We expanded our engagement to focus on product modernization, refactoring for enterprise-grade security and optimizing performance for larger enterprise clients, ensuring the platform stayed ahead of the curve.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-24 lg:py-32 bg-gradient-section relative overflow-hidden">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-12 text-center font-montserrat">
              The Value of Excellence
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              <div className="backdrop-blur-xl bg-glass-bg border border-glass-border rounded-3xl p-6 text-center">
                <h3 className="text-3xl font-bold text-brand-primary mb-2 font-montserrat">$165M+</h3>
                <p className="text-foreground-muted text-sm">Acquisition Value</p>
              </div>
              
              <div className="backdrop-blur-xl bg-glass-bg border border-glass-border rounded-3xl p-6 text-center">
                <h3 className="text-3xl font-bold text-brand-primary mb-2 font-montserrat">100+</h3>
                <p className="text-foreground-muted text-sm">Enterprise Customers</p>
              </div>
              
              <div className="backdrop-blur-xl bg-glass-bg border border-glass-border rounded-3xl p-6 text-center">
                <h3 className="text-3xl font-bold text-brand-primary mb-2 font-montserrat">Mission-Critical</h3>
                <p className="text-foreground-muted text-sm">Platform Status</p>
              </div>
              
              <div className="backdrop-blur-xl bg-glass-bg border border-glass-border rounded-3xl p-6 text-center">
                <h3 className="text-3xl font-bold text-brand-primary mb-2 font-montserrat">IGA</h3>
                <p className="text-foreground-muted text-sm">Full Platform Evolution</p>
              </div>
            </div>
            
            <div className="text-left">
              <h3 className="text-2xl font-bold text-foreground mb-6 font-montserrat">Transformation Outcomes:</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  "Transformed from supplemental visibility tool into indispensable core operational system",
                  "Evolved into comprehensive Identity Governance and Administration (IGA) platform",
                  "Delivered robust, secure, and scalable platform meeting enterprise compliance standards",
                  "Successfully enabled $165M+ acquisition by a global leader in identity security"
                ].map((achievement, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-brand-primary mt-0.5 flex-shrink-0" />
                    <span className="text-foreground-muted">{achievement}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-12 backdrop-blur-xl bg-glass-bg border border-glass-border rounded-3xl p-8">
              <h3 className="text-2xl font-bold text-foreground mb-4 font-montserrat">Why It Worked</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-brand-primary mb-2">Product-centric Development</h4>
                  <p className="text-sm text-foreground-muted">Strategic importance of customer feedback informed our vision for the client's pivot.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-brand-primary mb-2">Deep Engineering Expertise</h4>
                  <p className="text-sm text-foreground-muted">Industry veterans with expertise in API integration, microservices, and enterprise security.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-brand-primary mb-2">Lifecycle Partnership</h4>
                  <p className="text-sm text-foreground-muted">Engagement spanned from critical Pivot phase into ongoing Mature phase success.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-brand-primary mb-2">Founder's Mindset</h4>
                  <p className="text-sm text-foreground-muted">Approached with urgency and ownership, understanding this pivot was a defining moment.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 lg:py-32 bg-gradient-hero">
        <div className="container mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-8 font-montserrat">
            Ready to Engineer Your Perfect Pivot?
          </h2>
          <p className="text-xl text-foreground/80 mb-12 max-w-3xl mx-auto font-montserrat">
            For any company at a strategic crossroads, we provide the transformative power of strategic product engineering. With the right partner, a major challenge can be engineered into a market-defining opportunity.
          </p>
          <Button variant="hero" size="xl">Get Started</Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PivotCaseStudy;