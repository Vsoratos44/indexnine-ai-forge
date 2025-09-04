import React from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { useSEO } from '@/hooks/useSEO';
import {
  WebPageSchema,
  BreadcrumbSchema,
  ArticleSchema,
} from '@/components/SEOStructuredData';
import { CheckCircle, ArrowLeft } from 'lucide-react';
import LivingVoidBackground from '@/components/LivingVoidBackground';

const EnterpriseSaasOptimization = () => {
  // Implement comprehensive SEO
  useSEO({
    title: "Enterprise SaaS Platform Optimization Case Study | Performance & Security | IndexNine",
    description: "Discover how IndexNine optimized an enterprise SaaS platform achieving 99.9% uptime, 40% performance improvement, and SOC 2 Type II compliance through systematic optimization strategies.",
    canonicalUrl: "https://www.indexnine.com/insights/case-studies/enterprise-saas-optimization",
    keywords: "enterprise SaaS, performance optimization, security hardening, SOC 2 compliance, uptime improvement, platform optimization",
    ogImage: "https://www.indexnine.com/images/case-studies/enterprise-saas.jpg",
  });

  return (
    <div className="min-h-screen bg-background">
      {/* SEO Structured Data */}
      <WebPageSchema
        title="Enterprise SaaS Platform Optimization Case Study | IndexNine"
        description="Comprehensive case study showcasing how systematic optimization strategies helped an enterprise SaaS platform achieve 99.99% uptime and 400% performance improvement."
        url="https://www.indexnine.com/insights/case-studies/enterprise-saas-optimization"
      />
      
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://www.indexnine.com" },
          { name: "Insights", url: "https://www.indexnine.com/insights" },
          { name: "Case Studies", url: "https://www.indexnine.com/insights/case-studies" },
          { name: "Enterprise SaaS Optimization", url: "https://www.indexnine.com/insights/case-studies/enterprise-saas-optimization" },
        ]}
      />

      <ArticleSchema
        title="Enterprise SaaS Platform Optimization: Mission-Critical Success"
        description="Detailed case study of how IndexNine optimized an enterprise SaaS platform through comprehensive performance tuning, security hardening, and compliance achievement, resulting in 99.99% uptime and SOC 2 certification."
        author="IndexNine Case Study Team"
        datePublished="2024-03-20"
        dateModified="2024-09-04"
        url="https://www.indexnine.com/insights/case-studies/enterprise-saas-optimization"
        image="https://www.indexnine.com/images/case-studies/enterprise-saas-hero.jpg"
        wordCount={1150}
        readingTime="6 min read"
      />

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
                Case Study: Enterprise Optimization
              </span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground-white mb-8 leading-tight tracking-tight animate-fade-in font-montserrat">
              Enterprise SaaS: <br />
              <span className="bg-gradient-primary bg-clip-text text-transparent">Mission-Critical Optimization</span>
            </h1>
            
            <p className="text-lg sm:text-xl lg:text-2xl text-foreground-white/85 mb-12 max-w-4xl leading-relaxed font-light animate-slide-up font-montserrat">
              How we optimized performance, security, and reliability for an enterprise SaaS platform serving Fortune 500 companies.
            </p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-24 lg:py-32 bg-background relative overflow-hidden">
        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 mb-12">
              <div>
                <h3 className="text-xl font-semibold text-brand-primary-dark mb-4 font-montserrat">Client</h3>
                <p className="text-foreground-muted mb-6">Enterprise SaaS Platform Provider (Fortune 500)</p>
                <h3 className="text-xl font-semibold text-brand-primary-dark mb-4 font-montserrat">Industry</h3>
                <p className="text-foreground-muted">Enterprise Software, Cloud Services</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-brand-primary-dark mb-4 font-montserrat">Challenge</h3>
                <p className="text-foreground-muted mb-6">An enterprise SaaS platform experiencing performance bottlenecks, security vulnerabilities, and scalability issues that threatened their Fortune 500 client relationships.</p>
                <h3 className="text-xl font-semibold text-brand-primary-dark mb-4 font-montserrat">Solution</h3>
                <p className="text-foreground-muted">Comprehensive platform optimization including performance tuning, security hardening, and architectural improvements to meet enterprise-grade requirements.</p>
              </div>
            </div>
            
            <h3 className="text-2xl font-bold text-brand-primary-dark mb-6 font-montserrat">Key Outcomes:</h3>
            <div className="space-y-4">
              {[
                "99.99% Uptime Achieved: Eliminated service interruptions and delivered enterprise-grade reliability",
                "400% Performance Improvement: Dramatically reduced response times and increased throughput",
                "Zero Security Incidents: Implemented comprehensive security measures with continuous monitoring",
                "SOC 2 Certification: Successfully achieved compliance with enterprise security standards"
              ].map((outcome, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-brand-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground-muted">{outcome}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Challenge Section */}
      <section className="py-24 lg:py-32 bg-gradient-section relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-1/6 w-80 h-80 bg-brand-primary/8 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-1/6 w-96 h-96 bg-brand-purple/6 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl sm:text-5xl font-bold text-brand-primary-dark mb-8 font-montserrat">
              Enterprise-Grade Requirements
            </h2>
            <p className="text-lg text-foreground-dark leading-relaxed mb-8">
              The client's SaaS platform had grown rapidly but was struggling to meet the stringent requirements of enterprise customers. Performance issues, security concerns, and compliance gaps were threatening their most valuable client relationships.
            </p>
            <p className="text-lg text-foreground-dark leading-relaxed mb-8">
              The platform needed to handle massive scale while maintaining zero-downtime operations, comprehensive security, and full compliance with enterprise standards.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="relative overflow-hidden backdrop-blur-xl bg-glass-bg border border-glass-border rounded-3xl p-6 shadow-glass transition-all duration-500 transform group hover:scale-105 hover:shadow-glass-lg hover:border-brand-primary/30">
                <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/5 via-transparent to-brand-purple/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <h4 className="relative text-lg font-semibold text-brand-primary-dark mb-2 font-montserrat">Performance Issues</h4>
                <p className="relative text-foreground-dark text-sm">Slow response times and frequent timeouts affecting user experience</p>
              </div>
              <div className="relative overflow-hidden backdrop-blur-xl bg-glass-bg border border-glass-border rounded-3xl p-6 shadow-glass transition-all duration-500 transform group hover:scale-105 hover:shadow-glass-lg hover:border-brand-primary/30">
                <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/5 via-transparent to-brand-purple/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <h4 className="relative text-lg font-semibold text-brand-primary-dark mb-2 font-montserrat">Security Vulnerabilities</h4>
                <p className="relative text-foreground-dark text-sm">Legacy code with potential security flaws requiring immediate attention</p>
              </div>
              <div className="relative overflow-hidden backdrop-blur-xl bg-glass-bg border border-glass-border rounded-3xl p-6 shadow-glass transition-all duration-500 transform group hover:scale-105 hover:shadow-glass-lg hover:border-brand-primary/30">
                <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/5 via-transparent to-brand-purple/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <h4 className="relative text-lg font-semibold text-brand-primary-dark mb-2 font-montserrat">Compliance Gaps</h4>
                <p className="relative text-foreground-dark text-sm">Missing certifications required for enterprise customer contracts</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-24 lg:py-32 bg-background">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-8 font-montserrat">
              Our Solution: Comprehensive Optimization Strategy
            </h2>
            <p className="text-lg text-foreground-muted leading-relaxed mb-12">
              We implemented a multi-phase optimization approach focused on performance, security, and compliance to transform the platform into an enterprise-grade solution.
            </p>
            
            <div className="space-y-12">
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-6 font-montserrat">Phase 1: Performance Optimization</h3>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="relative overflow-hidden backdrop-blur-xl bg-glass-bg border border-glass-border rounded-3xl p-8 shadow-glass">
                    <h4 className="text-xl font-bold text-foreground mb-4 font-montserrat">Database Optimization</h4>
                    <p className="text-foreground-muted leading-relaxed">
                      Implemented query optimization, indexing strategies, and connection pooling to improve database performance.
                    </p>
                  </div>
                  
                  <div className="relative overflow-hidden backdrop-blur-xl bg-glass-bg border border-glass-border rounded-3xl p-8 shadow-glass">
                    <h4 className="text-xl font-bold text-foreground mb-4 font-montserrat">Caching Strategy</h4>
                    <p className="text-foreground-muted leading-relaxed">
                      Deployed Redis caching layers and CDN integration to reduce response times and server load.
                    </p>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-6 font-montserrat">Phase 2: Security Hardening</h3>
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="relative overflow-hidden backdrop-blur-xl bg-glass-bg border border-glass-border rounded-3xl p-8 shadow-glass">
                    <h4 className="text-xl font-bold text-foreground mb-4 font-montserrat">Code Security Audit</h4>
                    <p className="text-foreground-muted leading-relaxed">
                      Comprehensive security review and remediation of vulnerabilities in legacy codebase.
                    </p>
                  </div>
                  
                  <div className="relative overflow-hidden backdrop-blur-xl bg-glass-bg border border-glass-border rounded-3xl p-8 shadow-glass">
                    <h4 className="text-xl font-bold text-foreground mb-4 font-montserrat">Access Controls</h4>
                    <p className="text-foreground-muted leading-relaxed">
                      Implemented role-based access control and multi-factor authentication systems.
                    </p>
                  </div>
                  
                  <div className="relative overflow-hidden backdrop-blur-xl bg-glass-bg border border-glass-border rounded-3xl p-8 shadow-glass">
                    <h4 className="text-xl font-bold text-foreground mb-4 font-montserrat">Monitoring & Alerting</h4>
                    <p className="text-foreground-muted leading-relaxed">
                      24/7 security monitoring with automated threat detection and response capabilities.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-24 lg:py-32 bg-gradient-section relative overflow-hidden">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-4xl sm:text-5xl font-bold text-brand-primary-dark mb-12 font-montserrat">
              The Results
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="relative overflow-hidden backdrop-blur-xl bg-glass-bg border border-glass-border rounded-3xl p-8 shadow-glass text-center">
                <h3 className="text-4xl font-bold text-brand-primary mb-2 font-montserrat">99.99%</h3>
                <p className="text-foreground-dark">Uptime Achieved</p>
              </div>
              
              <div className="relative overflow-hidden backdrop-blur-xl bg-glass-bg border border-glass-border rounded-3xl p-8 shadow-glass text-center">
                <h3 className="text-4xl font-bold text-brand-primary mb-2 font-montserrat">400%</h3>
                <p className="text-foreground-dark">Performance Improvement</p>
              </div>
              
              <div className="relative overflow-hidden backdrop-blur-xl bg-glass-bg border border-glass-border rounded-3xl p-8 shadow-glass text-center">
                <h3 className="text-4xl font-bold text-brand-primary mb-2 font-montserrat">SOC 2</h3>
                <p className="text-foreground-dark">Certification Achieved</p>
              </div>
            </div>
            
            <div className="text-left">
              <h3 className="text-2xl font-bold text-brand-primary-dark mb-6 font-montserrat">Transformation Outcomes:</h3>
              <div className="space-y-4">
                {[
                  "Enterprise-Grade Reliability: Achieved 99.99% uptime with comprehensive monitoring and automated failover systems",
                  "Massive Performance Gains: 400% improvement in response times with optimized database queries and caching strategies",
                  "Zero Security Incidents: Implemented comprehensive security framework with continuous threat monitoring",
                  "Compliance Achievement: Successfully obtained SOC 2 certification and met all enterprise security requirements"
                ].map((outcome, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-brand-primary mt-0.5 flex-shrink-0" />
                    <span className="text-foreground-dark">{outcome}</span>
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
            Transform your SaaS platform with our proven optimization strategies and enterprise-grade solutions.
          </p>
          <Button variant="hero" size="xl">Optimize Your Platform</Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default EnterpriseSaasOptimization;