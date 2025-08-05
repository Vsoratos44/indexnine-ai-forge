import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Shield, RefreshCw, Eye, Users, Settings, Clock } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import LivingVoidBackground from '@/components/LivingVoidBackground';

const Enterprise = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <LivingVoidBackground />
        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-8 font-montserrat">
              Engineer Resilience.{' '}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Modernize for Tomorrow
              </span>
            </h1>
            <p className="text-xl sm:text-2xl text-foreground-muted mb-12 leading-relaxed max-w-3xl mx-auto">
              The Indexnine Enterprise Studio is your strategic partner for transforming mission-critical systems. We help you eliminate technical debt, scale with confidence, and embed a culture of engineering excellence to secure your long-term success.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button variant="hero" size="lg">
                Schedule a Modernization Assessment
              </Button>
              <Button variant="outline" size="lg" className="border-white/20 text-white hover:bg-white/10">
                Explore our AI Risk Audit Framework <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-24 bg-gradient-section">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground-dark mb-8 font-montserrat">
              Your Technology is Your Business.{' '}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Is It Ready for the Future?
              </span>
            </h2>
            <div className="text-lg text-foreground-dark-muted leading-relaxed space-y-6">
              <p>
                In the enterprise world, the systems that brought you success can become the anchors that hold you back. Technical debt slows innovation, legacy platforms create security risks, and inefficient processes burn resources.
              </p>
              <p>
                The Enterprise Studio is designed to address these challenges head-on. We provide the strategic consulting, deep technical expertise, and proven frameworks necessary to modernize your technology, optimize your processes, and ensure your engineering organization is a powerful engine for growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Enterprise Offerings Section */}
      <section className="py-24">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6 font-montserrat">
              A Full-Spectrum Partner for{' '}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Enterprise Transformation
              </span>
            </h2>
            <p className="text-xl text-foreground-muted max-w-4xl mx-auto">
              We offer a suite of services designed to address the most critical challenges facing modern enterprises.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Product Modernization */}
            <div className="group p-8 rounded-2xl bg-card border border-border hover:border-brand-primary/50 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <RefreshCw className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Product Modernization</h3>
              <p className="text-foreground-muted mb-6 leading-relaxed">
                Is your core application a monolith that's difficult to update and scale? Our Legacy System Modernization services are the answer. We meticulously analyze your existing architecture, devise a phased migration strategy to modern, cloud-native technologies, and execute it with minimal disruption.
              </p>
              <div className="space-y-2">
                <h4 className="font-semibold text-foreground">Offerings:</h4>
                <ul className="text-sm text-foreground-muted space-y-1">
                  <li>• Monolith to Microservices Migration</li>
                  <li>• Cloud-Native Development</li>
                  <li>• Technology Stack Upgrades</li>
                </ul>
              </div>
            </div>

            {/* QAE & Automation */}
            <div className="group p-8 rounded-2xl bg-card border border-border hover:border-brand-primary/50 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">QAE & Automation</h3>
              <p className="text-foreground-muted mb-6 leading-relaxed">
                In the enterprise, quality is non-negotiable. Our Quality Assurance Engineering (QAE) services go beyond simple testing. We embed quality into every stage of the development lifecycle, implementing robust Test Automation frameworks and performance testing protocols.
              </p>
              <div className="space-y-2">
                <h4 className="font-semibold text-foreground">Offerings:</h4>
                <ul className="text-sm text-foreground-muted space-y-1">
                  <li>• Test Automation Services</li>
                  <li>• Performance Testing</li>
                  <li>• QA Process Improvement</li>
                  <li>• Security Testing</li>
                </ul>
              </div>
            </div>

            {/* AI Audit & Risk Management */}
            <div className="group p-8 rounded-2xl bg-card border border-border hover:border-brand-primary/50 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Eye className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">AI Audit & Risk Management</h3>
              <p className="text-foreground-muted mb-6 leading-relaxed">
                Adopting AI without proper governance is a significant risk. With up to 70% of AI projects failing to show ROI, a strategic approach is essential. Our AI Consulting Services include a comprehensive AI Audit that assesses the viability, security, and ethical implications of your AI initiatives.
              </p>
              <div className="space-y-2">
                <h4 className="font-semibold text-foreground">Offerings:</h4>
                <ul className="text-sm text-foreground-muted space-y-1">
                  <li>• AI Strategy Consulting</li>
                  <li>• AI Readiness Assessment</li>
                  <li>• AI Governance & Risk Audit</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Maturity & AMS Section */}
      <section className="py-24 bg-gradient-section">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground-dark mb-6 font-montserrat">
              The Indexnine Difference:{' '}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                A Culture of Process Maturity
              </span>
            </h2>
          </div>
          
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8">
              <Settings className="w-16 h-16 text-brand-primary mx-auto mb-6" />
              <p className="text-lg text-foreground-dark-muted leading-relaxed">
                Technology is only half the battle. The true differentiator for long-term success is a mature, repeatable process. For all our enterprise engagements, especially long-term partnerships like Application Management Services (AMS), we focus on instilling a culture of process maturity. We establish clear communication cadences, robust project management frameworks, and risk mitigation strategies to ensure predictable outcomes, transparent collaboration, and continuous improvement across your organization.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Supporting Content Section */}
      <section className="py-24">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6 font-montserrat">
              Engineering Transformation{' '}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                in Action
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="group p-8 rounded-2xl bg-card border border-border hover:border-brand-primary/50 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-6">
                <RefreshCw className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">From Monolith to Market Leader: Modernizing an Enterprise Insurance Platform</h3>
              <p className="text-foreground-muted mb-6">
                Learn how we re-architected a critical legacy system, reducing latency by 60% and enabling the rapid launch of new product lines.
              </p>
              <Button variant="outline" size="sm">
                Read the Case Study
              </Button>
            </div>

            <div className="group p-8 rounded-2xl bg-card border border-border hover:border-brand-primary/50 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-6">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">Achieving 95% Test Automation for a Global Logistics Provider</h3>
              <p className="text-foreground-muted mb-6">
                Discover our process for building a comprehensive QA automation suite that cut regression testing time from two weeks to four hours.
              </p>
              <Button variant="outline" size="sm">
                Read the Case Study
              </Button>
            </div>

            <div className="group p-8 rounded-2xl bg-card border border-border hover:border-brand-primary/50 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-6">
                <Eye className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">The CTO's Guide to AI Risk Management</h3>
              <p className="text-foreground-muted mb-6">
                A framework for assessing and mitigating the technical, operational, and ethical risks of implementing AI solutions in the enterprise.
              </p>
              <Button variant="outline" size="sm">
                Download the Whitepaper
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 bg-gradient-to-r from-brand-primary to-purple-600">
        <div className="container mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6 font-montserrat">
            Build a More Resilient, Scalable, and Innovative Future.
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Let's transform your technology from a cost center into your greatest competitive advantage. Schedule a complimentary, no-obligation assessment with our enterprise architects today.
          </p>
          <Button variant="ghost" size="lg" className="bg-white text-brand-primary hover:bg-white/90">
            Schedule Your Modernization Assessment
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Enterprise;