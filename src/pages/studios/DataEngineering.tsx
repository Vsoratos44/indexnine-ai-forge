import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Database, Cloud, Shield, CheckCircle, Award } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const DataEngineering = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-28 pb-16 bg-gradient-to-b from-background to-secondary/20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-6">
              <span className="inline-block px-4 py-2 bg-brand-purple/10 text-brand-purple rounded-full text-sm font-medium">
                IndexNine Data Studio
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
              Unlock <span className="text-brand-purple">Modern Analytics</span>
            </h1>
            <p className="text-xl text-foreground-secondary mb-8 max-w-3xl mx-auto">
              We design and build intelligent data platforms that drive clarity, efficiency, and growth. Turn your data into your most valuable asset.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="min-w-[220px]">
                Build Your Data Roadmap
              </Button>
              <Button variant="outline" size="lg" className="min-w-[180px]">
                See Our Blueprint
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Data Blueprint Section */}
      <section id="data-blueprint" className="py-16 bg-background-dark text-foreground-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Our Blueprint for an AI-Ready Data Foundation
              </h2>
              <p className="text-lg text-foreground-white/80 max-w-3xl mx-auto">
                Our proven 3-step methodology transforms your data into a strategic competitive advantage.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  step: "01",
                  title: "Build a Unified Data Foundation",
                  description: "Integrate disparate data sources into a single, coherent platform that eliminates silos and ensures data consistency across your organization."
                },
                {
                  step: "02", 
                  title: "Enhance Data Quality & Context",
                  description: "Implement automated data quality checks, enrichment processes, and contextual metadata to ensure your data is trustworthy and actionable."
                },
                {
                  step: "03",
                  title: "Establish Robust Governance", 
                  description: "Create frameworks for data security, compliance, and lifecycle management that scale with your business growth."
                }
              ].map((item) => (
                <div key={item.step} className="text-center">
                  <div className="w-16 h-16 bg-brand-purple rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-white font-bold text-lg">{item.step}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-foreground-white">{item.title}</h3>
                  <p className="text-foreground-white/80">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* The Data Problem Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
              Is Your Data Working For You, or Against You?
            </h2>
            <p className="text-lg text-foreground-secondary mb-12 max-w-3xl mx-auto">
              Many businesses have mountains of data but struggle to extract meaningful insights. Disconnected systems, poor data quality, and lack of governance turn your data into a liability instead of an asset. We fix that.
            </p>
          </div>
        </div>
      </section>

      {/* Solutions in Action Section */}
      <section id="data-solutions" className="py-16 bg-secondary/30">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
                Solutions in Action
              </h2>
              <p className="text-lg text-foreground-secondary max-w-3xl mx-auto">
                See how we've transformed data challenges into competitive advantages for our clients.
              </p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-8">
              <Card className="p-8">
                <CardContent className="p-0">
                  <h3 className="text-2xl font-bold mb-4 text-foreground">
                    From Legacy Chaos to Cloud-Native Clarity
                  </h3>
                  <p className="text-foreground-secondary mb-6">
                    SP+ (a Fortune 500 parking solutions company) was struggling with fragmented data across multiple legacy systems. We built a unified cloud-native data platform that consolidated 15+ data sources, enabling real-time analytics and AI-powered optimization across their 4,000+ locations.
                  </p>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-brand-purple" />
                    <span className="text-sm text-foreground-secondary">15+ legacy systems unified</span>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="p-8">
                <CardContent className="p-0">
                  <h3 className="text-2xl font-bold mb-4 text-foreground">
                    From Scattered Silos to a Single Source of Truth
                  </h3>
                  <p className="text-foreground-secondary mb-6">
                    Great Place to Work needed to consolidate employee survey data from multiple regions and platforms. We created an intelligent data lake that processes millions of survey responses in real-time, powering their global workplace analytics and certification platform.
                  </p>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-brand-purple" />
                    <span className="text-sm text-foreground-secondary">Real-time processing of millions of data points</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Data Services Section */}
      <section id="data-services" className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
                Our Data Engineering Services
              </h2>
              <p className="text-lg text-foreground-secondary max-w-3xl mx-auto">
                End-to-end data platform development that scales with your business.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  icon: <Database className="h-8 w-8" />,
                  title: "Data Integration & Transformation",
                  description: "ETL/ELT pipelines that seamlessly connect and transform data from any source into actionable insights."
                },
                {
                  icon: <Cloud className="h-8 w-8" />,
                  title: "Data Platform Architecture", 
                  description: "Cloud-native platforms built for scale, performance, and reliability using modern data stack technologies."
                },
                {
                  icon: <Shield className="h-8 w-8" />,
                  title: "Data Platform Modernization",
                  description: "Migrate from legacy systems to modern, AI-ready platforms without disrupting business operations."
                },
                {
                  icon: <CheckCircle className="h-8 w-8" />,
                  title: "Performance Optimization",
                  description: "Optimize existing data platforms for speed, cost-efficiency, and scalability."
                }
              ].map((service) => (
                <Card key={service.title} className="p-6">
                  <CardContent className="p-0">
                    <div className="w-16 h-16 bg-brand-purple/10 rounded-full flex items-center justify-center mb-4 text-brand-purple">
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-foreground">{service.title}</h3>
                    <p className="text-foreground-secondary">{service.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Section */}
      <section id="data-partnership" className="py-16 bg-secondary/30">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="mb-6">
                  <span className="inline-block px-4 py-2 bg-brand-purple/10 text-brand-purple rounded-full text-sm font-medium">
                    Snowflake AI Data Cloud Partner
                  </span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
                  Certified Expertise, Platform-Agnostic Strategy
                </h2>
                <p className="text-lg text-foreground-secondary mb-8">
                  As a Snowflake Growth Partner, we have deep, certified expertise in building and optimizing solutions on the AI Data Cloud. But our approach is always platform-agnostic. We help you leverage the full power of modern data platforms—including AWS and Azure—to find the right-fit solution that meets your unique business needs without vendor lock-in.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-32 h-32 bg-white rounded-lg shadow-lg flex items-center justify-center mx-auto mb-6">
                  <Award className="h-16 w-16 text-brand-purple" />
                </div>
                <p className="text-sm text-foreground-secondary">Snowflake Growth Partner</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-16 bg-brand-purple text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Unlock the Power of Your Data?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Let's discuss how our data engineering expertise can transform your data into a strategic competitive advantage.
            </p>
            <Button variant="secondary" size="lg" className="min-w-[220px]">
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