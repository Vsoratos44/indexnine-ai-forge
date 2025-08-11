import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Database, Cloud, Shield, BarChart3, CheckCircle } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LivingVoidBackground from "@/components/LivingVoidBackground";
import { ServiceSchema, WebPageSchema, BreadcrumbSchema } from "@/components/SEOStructuredData";

const DataEngineering = () => {
  return (
    <div className="min-h-screen bg-background-dark">
      <ServiceSchema 
        name="Data Engineering & Platform Modernization"
        description="Build an AI-ready data foundation. We design and implement modern data platforms using Snowflake and more to unlock analytics, drive efficiency, and prepare your data for what's next."
        serviceType="Data Engineering"
      />
      <WebPageSchema 
        title="Data Engineering & Platform Modernization | IndexNine Data Studio"
        description="Build an AI-ready data foundation. We design and implement modern data platforms using Snowflake and more to unlock analytics, drive efficiency, and prepare your data for what's next."
        url="https://yoursite.lovable.app/studios/data-engineering"
      />
      <BreadcrumbSchema items={[
        { name: 'Home', url: 'https://yoursite.lovable.app/' },
        { name: 'Studios', url: 'https://yoursite.lovable.app/studios' },
        { name: 'Data Engineering', url: 'https://yoursite.lovable.app/studios/data-engineering' }
      ]} />
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
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Analytics.
              </span>
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl text-foreground/85 mb-12 max-w-4xl leading-relaxed font-light animate-slide-up">
              We architect and build intelligent data platforms that drive clarity,
              efficiency, and growth. Turn your data into your most valuable
              asset.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-scale-in">
              <Button variant="hero" size="xl" className="min-w-[280px]">
                Build Your Data Roadmap
              </Button>
              <Button
                variant="hero-secondary"
                size="xl"
                className="min-w-[240px]"
              >
                See Our Solutions
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Client Logo Bar */}
      <section className="py-12 bg-background-section">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg text-foreground-dark-muted mb-8">
              Architecting the data platforms for forward-thinking companies
            </p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              <div className="h-12 w-32 bg-foreground-dark-muted/20 rounded flex items-center justify-center">
                <span className="text-sm font-medium">Client Logo</span>
              </div>
              <div className="h-12 w-32 bg-foreground-dark-muted/20 rounded flex items-center justify-center">
                <span className="text-sm font-medium">Client Logo</span>
              </div>
              <div className="h-12 w-32 bg-foreground-dark-muted/20 rounded flex items-center justify-center">
                <span className="text-sm font-medium">Client Logo</span>
              </div>
              <div className="h-12 w-32 bg-foreground-dark-muted/20 rounded flex items-center justify-center">
                <span className="text-sm font-medium">Client Logo</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Data Problem Section */}
      <section className="py-20 bg-background-section">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground-dark">
                Is Your Data Working For You, or Against You?
              </h2>
              <p className="text-lg text-foreground-dark-muted">
                Siloed systems, unreliable reports, and slow queries don't just frustrate teams—they cripple innovation. A weak data foundation is the silent killer of transformation initiatives and the primary reason digital projects fail to deliver ROI.
              </p>
            </div>
            <div className="text-center lg:text-left">
              <div className="inline-block">
                <div className="text-6xl md:text-7xl font-bold text-brand-primary mb-4">85%</div>
                <h3 className="text-2xl font-bold text-foreground-dark mb-3">Of AI Projects Fail</h3>
                <p className="text-foreground-dark-muted">
                  ...primarily due to inadequate data quality and infrastructure. Your AI strategy is only as strong as the data it's built on.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Data Blueprint Section */}
      <section
        id="data-blueprint"
        className="py-20 bg-background-dark text-foreground"
      >
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
                Our Blueprint for an AI-Ready Data Foundation
              </h2>
              <p className="text-lg text-foreground/80 max-w-3xl mx-auto">
                We transform your data from a fragmented resource into a
                strategic asset with a proven, three-step methodology that
                delivers results.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="relative overflow-hidden bg-gradient-card-light border border-[#ffffff39] rounded-2xl p-8 hover:shadow-glass-sm transition-all duration-500 transform hover:scale-102 hover:-translate-y-2 animate-fade-in group text-center">
                <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/8 via-transparent to-brand-purple/8 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-white/10 rounded-2xl opacity-50"></div>
                <div className="relative w-16 h-16 bg-brand-primary rounded-lg flex items-center justify-center mx-auto mb-6">
                  <span className="text-white font-bold text-2xl">1</span>
                </div>
                <h3 className="relative text-xl font-bold mb-4 text-foreground">
                  Build a Unified Data Foundation
                </h3>
                <p className="relative text-foreground/80">
                  We centralize your disparate data sources into a scalable,
                  cloud-native data platform, creating a single source of
                  truth to break down silos.
                </p>
              </div>

              <div className="relative overflow-hidden bg-gradient-card-light border border-[#ffffff39] rounded-2xl p-8 hover:shadow-glass-sm transition-all duration-500 transform hover:scale-102 hover:-translate-y-2 animate-fade-in group text-center">
                <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/8 via-transparent to-brand-purple/8 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-white/10 rounded-2xl opacity-50"></div>
                <div className="relative w-16 h-16 bg-brand-purple rounded-lg flex items-center justify-center mx-auto mb-6">
                  <span className="text-white font-bold text-2xl">2</span>
                </div>
                <h3 className="relative text-xl font-bold mb-4 text-foreground">
                  Enhance Data Quality & Context
                </h3>
                <p className="relative text-foreground/80">
                  Our intelligent data integration pipelines clean, validate,
                  and enrich your data with business context, making it ready
                  for reliable AI consumption.
                </p>
              </div>

              <div className="relative overflow-hidden bg-gradient-card-light border border-[#ffffff39] rounded-2xl p-8 hover:shadow-glass-sm transition-all duration-500 transform hover:scale-102 hover:-translate-y-2 animate-fade-in group text-center">
                <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/8 via-transparent to-brand-purple/8 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-white/10 rounded-2xl opacity-50"></div>
                <div className="relative w-16 h-16 bg-brand-accent rounded-lg flex items-center justify-center mx-auto mb-6">
                  <span className="text-white font-bold text-2xl">3</span>
                </div>
                <h3 className="relative text-xl font-bold mb-4 text-foreground">
                  Establish Robust Governance
                </h3>
                <p className="relative text-foreground/80">
                  We implement comprehensive data governance, quality checks,
                  and security frameworks to ensure your data is accurate,
                  compliant, and secure.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Data Foundation Roadmap Section */}
      <section id="data-roadmap" className="py-20 bg-gradient-to-br from-brand-primary/5 to-brand-purple/5 border-y border-border">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground-white">
              Your Blueprint for Data-Driven Success
            </h2>
            <p className="text-lg text-foreground-white/80 mb-8">
              Our <strong>Data Foundation Roadmap</strong> is a fixed-scope, 4 to 6-week strategic engagement designed to give you a comprehensive, actionable plan for modernizing your data infrastructure.
            </p>
            
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 mb-8 text-left border border-white/10">
              <h4 className="text-xl font-bold text-foreground-white mb-6">Key Deliverables Include:</h4>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  "Current State Analysis & Architecture Audit",
                  "Future State Cloud-Native Blueprint", 
                  "Vendor-Agnostic Tooling Recommendation",
                  "Phased Implementation Plan & Timelines",
                  "Detailed Business Case & ROI Model"
                ].map((deliverable, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-primary flex-shrink-0" />
                    <span className="text-foreground-white/80">{deliverable}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="text-xl font-semibold text-foreground-white mb-8">
              Investment: Starting at $30,000
            </div>
            
            <Button variant="hero" size="xl" className="min-w-[280px]">
              Scope Your Roadmap
            </Button>
          </div>
        </div>
      </section>

      {/* Data Solutions in Action Section */}
      <section id="data-solutions" className="py-20 bg-background-section">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground-dark">
                Data Solutions in Action
              </h2>
              <p className="text-lg text-foreground-dark-muted max-w-3xl mx-auto">
                Real-world applications delivering measurable results across
                diverse industries.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 mb-16">
              {/* Legacy Modernization */}
              <div className="space-y-8">
                <div className="bg-brand-primary rounded-2xl p-8 lg:p-12 flex items-center justify-center text-white">
                  <div className="text-center">
                    <h3 className="text-3xl font-bold mb-2">
                      Legacy Modernization
                    </h3>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="mb-6">
                  <span className="inline-block px-6 py-3 bg-brand-primary/10 text-brand-primary rounded-full text-sm font-medium border border-brand-primary/20">
                    LEGACY SYSTEM MODERNIZATION
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-foreground-dark">
                  From Legacy Chaos to Cloud-Native Clarity
                </h3>
                <p className="text-foreground-dark-muted mb-6">
                  A North American parking operations leader was struggling with
                  legacy systems unable to process 15B+ annual records in
                  real-time. We engineered a seamless migration to a modern data
                  platform on AWS and Snowflake.
                </p>

                <div className="grid grid-cols-2 gap-6">
                  <Card className="p-6 text-center bg-gradient-card border-card-border shadow-lg">
                    <CardContent className="p-0">
                      <div className="text-3xl font-bold text-brand-primary mb-2">
                        72%
                      </div>
                      <p className="text-sm text-foreground/80">
                        Increase in Booking Efficiency
                      </p>
                    </CardContent>
                  </Card>
                  <Card className="p-6 text-center bg-gradient-card border-card-border shadow-lg">
                    <CardContent className="p-0">
                      <div className="text-3xl font-bold text-brand-primary mb-2">
                        35%
                      </div>
                      <p className="text-sm text-foreground/80">
                        Annual Infrastructure Savings
                      </p>
                    </CardContent>
                  </Card>
                </div>
                
                <blockquote className="mt-8 p-6 bg-background-card-light rounded-xl border-l-4 border-brand-primary">
                  <p className="text-foreground-dark italic mb-3">
                    "IndexNine transformed our data capabilities from a cost center to a strategic advantage. Our teams are now making decisions based on data that's hours, not weeks, old."
                  </p>
                  <footer className="text-sm text-foreground-dark-muted font-medium">
                    — Director of Analytics, [Client Name]
                  </footer>
                </blockquote>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              <div className="space-y-6 lg:order-2">
                <div className="mb-6">
                  <span className="inline-block px-6 py-3 bg-brand-purple/10 text-brand-purple rounded-full text-sm font-medium border border-brand-purple/20">
                    AI-READY DATA LAKES
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-foreground-dark">
                  From Scattered Silos to a Single Source of Truth
                </h3>
                <p className="text-foreground-dark-muted mb-6">
                  A global workplace culture leader needed to unify 15+ years of
                  fragmented data to power AI-driven decision-making. We built a
                  unified Snowflake data lake and integrated Cortex AI for
                  NLP-based analytics.
                </p>

                <div className="grid grid-cols-2 gap-6">
                  <Card className="p-6 text-center bg-gradient-card border-card-border shadow-lg">
                    <CardContent className="p-0">
                      <div className="text-3xl font-bold text-brand-purple mb-2">
                        96x
                      </div>
                      <p className="text-sm text-foreground/80">
                        Faster Data Preparation
                      </p>
                    </CardContent>
                  </Card>
                  <Card className="p-6 text-center bg-gradient-card border-card-border shadow-lg">
                    <CardContent className="p-0">
                      <div className="text-3xl font-bold text-brand-purple mb-2">
                        48
                      </div>
                      <p className="text-sm text-foreground/80">
                        Report Latency (Hours)
                      </p>
                    </CardContent>
                  </Card>
                </div>
                
                <blockquote className="mt-8 p-6 bg-background-card-light rounded-xl border-l-4 border-brand-purple">
                  <p className="text-foreground-dark italic mb-3">
                    "The data foundation IndexNine built is the backbone of our new AI features. We're now able to develop and deploy models in a fraction of the time."
                  </p>
                  <footer className="text-sm text-foreground-dark-muted font-medium">
                    — Head of Data Science, [Client Name]
                  </footer>
                </blockquote>
              </div>

              <div className="space-y-8 lg:order-1">
                <div className="bg-brand-purple rounded-2xl p-8 lg:p-12 flex items-center justify-center text-white">
                  <div className="text-center">
                    <h3 className="text-3xl font-bold mb-2">
                      AI-Ready Data Lake
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Data Services Section */}
      <section id="data-services" className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-foreground-light">
                Our Data Engineering Services
              </h2>
              <p className="text-lg text-foreground-light-muted max-w-3xl mx-auto mb-12">
                We offer end-to-end services to build, modernize, and optimize
                your entire data ecosystem, ensuring it is scalable, efficient,
                and AI-ready.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="relative overflow-hidden bg-gradient-card-light border border-[#ffffff39] rounded-2xl p-8 hover:shadow-glass-sm transition-all duration-500 transform hover:scale-102 hover:-translate-y-2 animate-fade-in group">
                <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/8 via-transparent to-brand-purple/8 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-white/10 rounded-2xl opacity-50"></div>
                <h3 className="relative text-lg font-bold mb-4 text-foreground-light">
                  Data Integration & Transformation
                </h3>
                <p className="relative text-foreground-light-muted text-sm">
                  Building intelligent data pipelines and real-time processing
                  to break down silos and create a single source of truth.
                </p>
              </div>

              <div className="relative overflow-hidden bg-gradient-card-light border border-[#ffffff39] rounded-2xl p-8 hover:shadow-glass-sm transition-all duration-500 transform hover:scale-102 hover:-translate-y-2 animate-fade-in group">
                <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/8 via-transparent to-brand-purple/8 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-white/10 rounded-2xl opacity-50"></div>
                <h3 className="relative text-lg font-bold mb-4 text-foreground-light">
                  Data Platform Architecture
                </h3>
                <p className="relative text-foreground-light-muted text-sm">
                  Designing scalable and robust data lake and data warehouse
                  architectures on platforms like Snowflake, AWS, and Azure.
                </p>
              </div>

              <div className="relative overflow-hidden bg-gradient-card-light border border-[#ffffff39] rounded-2xl p-8 hover:shadow-glass-sm transition-all duration-500 transform hover:scale-102 hover:-translate-y-2 animate-fade-in group">
                <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/8 via-transparent to-brand-purple/8 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-white/10 rounded-2xl opacity-50"></div>
                <h3 className="relative text-lg font-bold mb-4 text-foreground-light">
                  Data Platform Modernization
                </h3>
                <p className="relative text-foreground-light-muted text-sm">
                  Strategic migration from on-premise or cloud-to-cloud with
                  end-to-end architectural assessment and execution.
                </p>
              </div>

              <div className="relative overflow-hidden bg-gradient-card-light border border-[#ffffff39] rounded-2xl p-8 hover:shadow-glass-sm transition-all duration-500 transform hover:scale-102 hover:-translate-y-2 animate-fade-in group">
                <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/8 via-transparent to-brand-purple/8 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-white/10 rounded-2xl opacity-50"></div>
                <h3 className="relative text-lg font-bold mb-4 text-foreground-light">
                  Performance Optimization
                </h3>
                <p className="relative text-foreground-light-muted text-sm">
                  Assessing your data workflows to identify bottlenecks and
                  executing projects to improve speed and reduce cost.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Section */}
      <section id="data-partnership" className="py-20 bg-background-section">
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
                  As a Snowflake Growth Partner, we have deep, certified
                  expertise in building and optimizing solutions on the AI Data
                  Cloud. But our approach is always platform-agnostic. We help
                  you leverage the full power of modern data platforms—including
                  AWS and Azure—to find the right-fit solution that meets your
                  unique business needs without vendor lock-in.
                </p>
              </div>

              <div className="bg-background-dark rounded-2xl p-12 flex items-center justify-center">
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-foreground-dark mb-2">
                    SNOWFLAKE PARTNER
                  </h3>
                  <div className="w-16 h-16 bg-brand-primary rounded-lg mx-auto"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-background-section">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-foreground-dark">
              Your Data Questions, Answered
            </h2>
            
            <div className="space-y-6">
              {[
                {
                  question: "How do you ensure data security and compliance during a migration?",
                  answer: "Security is paramount. We follow a rigorous process that includes data encryption in transit and at rest, role-based access control, PII masking, and designing for regulations like GDPR and CCPA from the start."
                },
                {
                  question: "What is the difference between a data lake, a data warehouse, and a data lakehouse?",
                  answer: "A warehouse stores structured data for BI (e.g., Snowflake). A lake stores raw data of all types for ML (e.g., S3). A lakehouse (e.g., Databricks) combines the benefits of both. We help you choose the right architecture for your specific needs."
                },
                {
                  question: "Our team is small. Can you provide ongoing management?",
                  answer: "Yes. We offer managed services and co-development models. Our goal is to empower your team, and we can provide support for as long as you need, from full management to periodic architectural reviews."
                },
                {
                  question: "How long does a data platform modernization project take?",
                  answer: "Our Data Foundation Roadmap takes 4-6 weeks. A Phase 1 implementation to deliver initial value can be completed in 3-4 months. Full-scale, enterprise-wide migrations are typically phased over 9-18 months."
                }
              ].map((faq, index) => (
                <details key={index} className="group bg-background-card-light rounded-xl p-6 border border-border">
                  <summary className="cursor-pointer text-lg font-semibold text-foreground-dark list-none flex justify-between items-center">
                    {faq.question}
                    <span className="ml-4 transform group-open:rotate-180 transition-transform duration-200">
                      ▼
                    </span>
                  </summary>
                  <p className="mt-4 text-foreground-dark-muted leading-relaxed">
                    {faq.answer}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner with Contact Form */}
      <section id="contact" className="py-20 bg-background-dark">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
                Ready to Unlock the Power of Your Data?
              </h2>
              <p className="text-xl mb-8 text-foreground/85">
                Stop fighting your data and start leveraging it as your most powerful asset. Schedule a complimentary, no-obligation call with a senior data architect to build your roadmap.
              </p>
            </div>
            
            <div className="bg-background-card-dark rounded-2xl p-8 border border-border-dark">
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 bg-background-dark border border-border-dark rounded-lg text-foreground placeholder-foreground/50 focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent"
                    placeholder="Your full name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Work Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 bg-background-dark border border-border-dark rounded-lg text-foreground placeholder-foreground/50 focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent"
                    placeholder="your.email@company.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    className="w-full px-4 py-3 bg-background-dark border border-border-dark rounded-lg text-foreground placeholder-foreground/50 focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent"
                    placeholder="Your company name"
                  />
                </div>
                
                <div>
                  <label htmlFor="challenge" className="block text-sm font-medium text-foreground mb-2">
                    What is your primary data challenge?
                  </label>
                  <textarea
                    id="challenge"
                    name="challenge"
                    rows={4}
                    className="w-full px-4 py-3 bg-background-dark border border-border-dark rounded-lg text-foreground placeholder-foreground/50 focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent resize-none"
                    placeholder="Describe your main data challenges or goals..."
                  ></textarea>
                </div>
                
                <Button variant="hero" size="xl" className="w-full">
                  Book My Free Architecture Call
                </Button>
                
                <p className="text-sm text-foreground/60 text-center">
                  We'll be in touch within one business day. We respect your privacy.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Banner */}
      <section className="relative py-20 overflow-hidden bg-background-dark">
        <div className="absolute inset-0 bg-gradient-to-r from-brand-primary/10 to-brand-purple/10"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
              Ready to Unlock the Power of Your Data?
            </h2>
            <p className="text-xl mb-8 text-foreground/85">
              Let's build your data roadmap. Schedule a complimentary
              consultation to discuss how our data engineering services can
              transform your business.
            </p>
            <Button variant="hero" size="xl" className="min-w-[280px] ">
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
