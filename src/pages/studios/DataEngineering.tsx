import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Database, Cloud, Shield, BarChart3, CheckCircle } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import LivingVoidBackground from '@/components/LivingVoidBackground';

const DataEngineering = () => {
  return (
    <div className="min-h-screen bg-background-dark">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[65vh] min-h-[600px] overflow-hidden bg-background-dark">
        {/* Three.js Living Void Background */}
        <LivingVoidBackground />

        {/* Content - Precisely positioned */}
        <div className="relative z-10 container mx-auto px-6 lg:px-8 pt-32 pb-24">
          <div className="max-w-5xl mx-auto text-center lg:text-left">
            <div className="mb-6">
              <span className="inline-block px-6 py-3 bg-brand-primary/10 text-brand-primary rounded-full text-sm font-medium border border-brand-primary/20 backdrop-blur-sm">
                IndexNine Data
              </span>
            </div>
            <h1 className="text-[3.5rem] sm:text-[4.5rem] lg:text-[5.5rem] font-bold text-foreground mb-8 leading-[0.9] tracking-tight animate-fade-in">
              Unlock Modern <br />
              <span className="bg-gradient-primary bg-clip-text text-transparent">Analytics</span>
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl text-foreground/85 mb-12 max-w-4xl leading-relaxed font-light animate-slide-up">
              We design and build intelligent data platforms that drive clarity, efficiency, and growth. Turn your data into your most valuable asset.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-scale-in">
              <Button variant="hero" size="xl" className="min-w-[280px]">
                Build Your Data Roadmap
              </Button>
              <Button variant="hero-secondary" size="xl" className="min-w-[240px]">
                See Our Solutions
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Data Blueprint Section */}
      <section id="data-blueprint" className="py-20 bg-background-dark text-foreground">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Our Blueprint for an AI-Ready Data Foundation
              </h2>
              <p className="text-lg text-foreground/80 max-w-3xl mx-auto">
                We transform your data from a fragmented resource into a strategic asset with a proven, three-step methodology that delivers results.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="p-8 bg-background-card-dark border-border-dark text-center">
                <CardContent className="p-0">
                  <div className="w-16 h-16 bg-brand-primary rounded-lg flex items-center justify-center mx-auto mb-6">
                    <span className="text-white font-bold text-2xl">1</span>
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-foreground">Build a Unified Data Foundation</h3>
                  <p className="text-foreground/80">
                    We centralize your disparate data sources into a scalable, cloud-native data platform, creating a single source of truth to break down silos.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="p-8 bg-background-card-dark border-border-dark text-center">
                <CardContent className="p-0">
                  <div className="w-16 h-16 bg-brand-purple rounded-lg flex items-center justify-center mx-auto mb-6">
                    <span className="text-white font-bold text-2xl">2</span>
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-foreground">Enhance Data Quality & Context</h3>
                  <p className="text-foreground/80">
                    Our intelligent data integration pipelines clean, validate, and enrich your data with business context, making it ready for reliable AI consumption.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="p-8 bg-background-card-dark border-border-dark text-center">
                <CardContent className="p-0">
                  <div className="w-16 h-16 bg-brand-accent rounded-lg flex items-center justify-center mx-auto mb-6">
                    <span className="text-white font-bold text-2xl">3</span>
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-foreground">Establish Robust Governance</h3>
                  <p className="text-foreground/80">
                    We implement comprehensive data governance, quality checks, and security frameworks to ensure your data is accurate, compliant, and secure.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* The Data Problem Section */}
      <section className="py-20 bg-background-section">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground-dark">
              Is Your Data Working For You, or Against You?
            </h2>
            <p className="text-lg text-foreground-dark-muted mb-12 max-w-3xl mx-auto">
              Many businesses have mountains of data but struggle to turn it into an actionable intelligence platform. Legacy systems, data silos, and poor data quality create a significant gap between data investment and business value, with 85% of AI projects failing to deliver results due to inadequately prepared data.
            </p>
          </div>
        </div>
      </section>

      {/* Solutions in Action Section */}
      <section id="data-solutions" className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground-dark">
                Solutions in Action
              </h2>
              <p className="text-lg text-foreground-dark-muted max-w-3xl mx-auto">
                From legacy platform modernization to building AI-ready data lakes, we deliver measurable results.
              </p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12 mb-16">
              {/* Legacy Modernization */}
              <div className="space-y-8">
                <div className="bg-brand-primary rounded-2xl p-8 lg:p-12 flex items-center justify-center text-white">
                  <div className="text-center">
                    <h3 className="text-3xl font-bold mb-2">Legacy Modernization</h3>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="mb-6">
                  <span className="inline-block px-6 py-3 bg-brand-primary/10 text-brand-primary rounded-full text-sm font-medium border border-brand-primary/20">
                    LEGACY SYSTEM MODERNIZATION
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-foreground-dark">From Legacy Chaos to Cloud-Native Clarity</h3>
                <p className="text-foreground-dark-muted mb-6">
                  A North American parking operations leader was struggling with legacy systems unable to process 15B+ annual records in real-time. We engineered a seamless migration to a modern data platform on AWS and Snowflake.
                </p>
                
                <div className="grid grid-cols-2 gap-6">
                  <Card className="p-6 text-center bg-gradient-card border-card-border shadow-lg">
                    <CardContent className="p-0">
                      <div className="text-3xl font-bold text-brand-primary mb-2">72%</div>
                      <p className="text-sm text-foreground-dark-muted">Increase in Booking Efficiency</p>
                    </CardContent>
                  </Card>
                  <Card className="p-6 text-center bg-gradient-card border-card-border shadow-lg">
                    <CardContent className="p-0">
                      <div className="text-3xl font-bold text-brand-primary mb-2">35%</div>
                      <p className="text-sm text-foreground-dark-muted">Annual Infrastructure Savings</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12">
              <div className="space-y-6 lg:order-2">
                <div className="mb-6">
                  <span className="inline-block px-6 py-3 bg-brand-purple/10 text-brand-purple rounded-full text-sm font-medium border border-brand-purple/20">
                    AI-READY DATA LAKES
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-foreground-dark">From Scattered Silos to a Single Source of Truth</h3>
                <p className="text-foreground-dark-muted mb-6">
                  A global workplace culture leader needed to unify 15+ years of fragmented data to power AI-driven decision-making. We built a unified Snowflake data lake and integrated Cortex AI for NLP-based analytics.
                </p>
                
                <div className="grid grid-cols-2 gap-6">
                  <Card className="p-6 text-center bg-gradient-card border-card-border shadow-lg">
                    <CardContent className="p-0">
                      <div className="text-3xl font-bold text-brand-purple mb-2">96x</div>
                      <p className="text-sm text-foreground-dark-muted">Faster Data Preparation</p>
                    </CardContent>
                  </Card>
                  <Card className="p-6 text-center bg-gradient-card border-card-border shadow-lg">
                    <CardContent className="p-0">
                      <div className="text-3xl font-bold text-brand-purple mb-2">48</div>
                      <p className="text-sm text-foreground-dark-muted">Report Latency (Hours)</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
              
              <div className="space-y-8 lg:order-1">
                <div className="bg-brand-purple rounded-2xl p-8 lg:p-12 flex items-center justify-center text-white">
                  <div className="text-center">
                    <h3 className="text-3xl font-bold mb-2">AI-Ready Data Lake</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Data Services Section */}
      <section id="data-services" className="py-20 bg-background-section">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-foreground-dark">
                Our Data Engineering Services
              </h2>
              <p className="text-lg text-foreground-dark-muted max-w-3xl mx-auto mb-12">
                We offer end-to-end services to build, modernize, and optimize your entire data ecosystem, ensuring it is scalable, efficient, and AI-ready.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className="p-8 bg-gradient-card border-card-border shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-0">
                  <h3 className="text-lg font-bold mb-4 text-foreground-dark">Data Integration & Transformation</h3>
                  <p className="text-foreground-dark-muted text-sm">
                    Building intelligent data pipelines and real-time processing to break down silos and create a single source of truth.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="p-8 bg-gradient-card border-card-border shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-0">
                  <h3 className="text-lg font-bold mb-4 text-foreground-dark">Data Platform Architecture</h3>
                  <p className="text-foreground-dark-muted text-sm">
                    Designing scalable and robust data lake and data warehouse architectures on platforms like Snowflake, AWS, and Azure.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="p-8 bg-gradient-card border-card-border shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-0">
                  <h3 className="text-lg font-bold mb-4 text-foreground-dark">Data Platform Modernization</h3>
                  <p className="text-foreground-dark-muted text-sm">
                    Strategic migration from on-premise or cloud-to-cloud with end-to-end architectural assessment and execution.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="p-8 bg-gradient-card border-card-border shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-0">
                  <h3 className="text-lg font-bold mb-4 text-foreground-dark">Performance Optimization</h3>
                  <p className="text-foreground-dark-muted text-sm">
                    Assessing your data workflows to identify bottlenecks and executing projects to improve speed and reduce cost.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Section */}
      <section id="data-partnership" className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="mb-6">
                  <span className="inline-block px-6 py-3 bg-brand-primary/10 text-brand-primary rounded-full text-sm font-medium border border-brand-primary/20">
                    SNOWFLAKE AI DATA CLOUD PARTNER
                  </span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground-dark">
                  Certified Expertise, Platform-Agnostic Strategy
                </h2>
                <p className="text-lg text-foreground-dark-muted mb-8">
                  As a Snowflake Growth Partner, we have deep, certified expertise in building and optimizing solutions on the AI Data Cloud. But our approach is always platform-agnostic. We help you leverage the full power of modern data platforms—including AWS and Azure—to find the right-fit solution that meets your unique business needs without vendor lock-in.
                </p>
              </div>
              
                <div className="bg-background-dark rounded-2xl p-12 flex items-center justify-center">
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-foreground mb-2">SNOWFLAKE PARTNER</h3>
                  <div className="w-16 h-16 bg-brand-primary rounded-lg mx-auto"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="relative py-20 overflow-hidden bg-background-dark">
        <div className="absolute inset-0 bg-gradient-to-r from-brand-primary/10 to-brand-purple/10"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
              Ready to Unlock the Power of Your Data?
            </h2>
            <p className="text-xl mb-8 text-foreground/85">
              Let's build your data roadmap. Schedule a complimentary consultation to discuss how our data engineering services can transform your business.
            </p>
            <Button variant="hero" size="xl" className="min-w-[280px]">
              Build Your Data Roadmap
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default DataEngineering;