import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import LivingVoidBackground from '@/components/LivingVoidBackground';
import { ArrowLeft, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const MatureCaseStudy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[65vh] min-h-[600px] overflow-hidden bg-gradient-hero">
        <LivingVoidBackground />
        
        <div className="relative z-10 container mx-auto px-6 lg:px-8 pt-32 pb-24">
          <div className="max-w-5xl mx-auto">
            <Link to="/" className="inline-flex items-center text-brand-primary hover:text-brand-primary-dark transition-colors mb-8">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Homepage
            </Link>
            
            <div className="mb-6">
              <span className="inline-block px-6 py-3 bg-brand-primary/10 text-brand-primary rounded-full text-sm font-medium border border-brand-primary/20 backdrop-blur-sm">
                Case Study: Maturity Phase
              </span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground-white mb-8 leading-tight tracking-tight animate-fade-in font-montserrat">
              Enterprise SaaS: <br />
              <span className="bg-gradient-primary bg-clip-text text-transparent">Mission-Critical Optimization</span>
            </h1>
            
            <p className="text-lg sm:text-xl lg:text-2xl text-foreground-white/85 mb-12 max-w-4xl leading-relaxed font-light animate-slide-up font-montserrat">
              How we optimized performance, security, and reliability for an enterprise SaaS platform that became business-critical for Fortune 500 companies.
            </p>
          </div>
        </div>
      </section>

      {/* Challenge Section */}
      <section className="py-24 lg:py-32 bg-gradient-section relative overflow-hidden">
        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-8 font-montserrat">
              Enterprise-Grade Requirements
            </h2>
            <p className="text-lg text-foreground-muted leading-relaxed mb-8">
              A mature SaaS platform serving Fortune 500 clients needed enterprise-grade optimization:
            </p>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-brand-primary rounded-full mt-3 flex-shrink-0"></div>
                <span className="text-foreground-muted">Zero-downtime requirements for business-critical operations</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-brand-primary rounded-full mt-3 flex-shrink-0"></div>
                <span className="text-foreground-muted">Advanced security and compliance frameworks needed</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-brand-primary rounded-full mt-3 flex-shrink-0"></div>
                <span className="text-foreground-muted">Legacy technical debt impacting performance and scalability</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-24 lg:py-32 bg-background">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-8 font-montserrat">
              Enterprise Optimization Strategy
            </h2>
            <p className="text-lg text-foreground-muted leading-relaxed mb-12">
              We implemented comprehensive optimization across performance, security, and reliability:
            </p>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="relative overflow-hidden backdrop-blur-xl bg-glass-bg border border-glass-border rounded-3xl p-8 shadow-glass">
                <h3 className="text-2xl font-bold text-foreground mb-4 font-montserrat">Technical Debt Resolution</h3>
                <p className="text-foreground-muted leading-relaxed">
                  Systematic refactoring of legacy code while maintaining 100% uptime through advanced deployment strategies.
                </p>
              </div>
              
              <div className="relative overflow-hidden backdrop-blur-xl bg-glass-bg border border-glass-border rounded-3xl p-8 shadow-glass">
                <h3 className="text-2xl font-bold text-foreground mb-4 font-montserrat">Security Hardening</h3>
                <p className="text-foreground-muted leading-relaxed">
                  Implemented enterprise security frameworks including zero-trust architecture and advanced threat detection.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-24 lg:py-32 bg-gradient-section relative overflow-hidden">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-12 font-montserrat">
              Enterprise Excellence Delivered
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="relative overflow-hidden backdrop-blur-xl bg-glass-bg border border-glass-border rounded-3xl p-8 shadow-glass text-center">
                <h3 className="text-4xl font-bold text-brand-primary mb-2 font-montserrat">99.99%</h3>
                <p className="text-foreground-muted">Uptime SLA Achieved</p>
              </div>
              
              <div className="relative overflow-hidden backdrop-blur-xl bg-glass-bg border border-glass-border rounded-3xl p-8 shadow-glass text-center">
                <h3 className="text-4xl font-bold text-brand-primary mb-2 font-montserrat">75%</h3>
                <p className="text-foreground-muted">Performance Improvement</p>
              </div>
              
              <div className="relative overflow-hidden backdrop-blur-xl bg-glass-bg border border-glass-border rounded-3xl p-8 shadow-glass text-center">
                <h3 className="text-4xl font-bold text-brand-primary mb-2 font-montserrat">Zero</h3>
                <p className="text-foreground-muted">Security Incidents</p>
              </div>
            </div>
            
            <div className="text-left">
              <h3 className="text-2xl font-bold text-foreground mb-6 font-montserrat">Maturity Achievements:</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  "Achieved SOC 2 Type II, ISO 27001, and FedRAMP certifications",
                  "Reduced response times by 75% through intelligent caching",
                  "Implemented comprehensive disaster recovery with 15-minute RTO",
                  "Built advanced monitoring and alerting system with predictive analytics"
                ].map((achievement, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-brand-primary mt-0.5 flex-shrink-0" />
                    <span className="text-foreground-muted">{achievement}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 lg:py-32 bg-gradient-hero">
        <div className="container mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground-white mb-8 font-montserrat">
            Ready to Optimize Your Platform?
          </h2>
          <p className="text-xl text-foreground-white/80 mb-12 max-w-2xl mx-auto font-montserrat">
            Let's help you achieve enterprise-grade performance, security, and reliability.
          </p>
          <Button variant="hero" size="xl">Optimize Your System</Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default MatureCaseStudy;