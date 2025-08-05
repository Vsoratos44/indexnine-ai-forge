import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ServiceSchema, WebPageSchema, BreadcrumbSchema } from '@/components/SEOStructuredData';
import { Database, Cloud, Workflow, BarChart, Shield, Zap } from 'lucide-react';

const DataEngineering = () => {
  return (
    <div className="min-h-screen bg-background">
      <ServiceSchema 
        name="Data Engineering Services"
        description="Build robust data pipelines, warehouses, and analytics solutions for data-driven decision making"
        serviceType="Data Engineering"
      />
      <WebPageSchema 
        title="Data Engineering Services - Build Scalable Data Infrastructure"
        description="Transform your data into actionable insights with our comprehensive data engineering solutions including pipelines, warehouses, and analytics"
        url="https://yoursite.lovable.app/services/data-engineering"
      />
      <BreadcrumbSchema items={[
        { name: 'Home', url: 'https://yoursite.lovable.app/' },
        { name: 'Services', url: 'https://yoursite.lovable.app/services' },
        { name: 'Data Engineering', url: 'https://yoursite.lovable.app/services/data-engineering' }
      ]} />
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-24 bg-gradient-hero relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/6 w-96 h-96 bg-brand-primary/8 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-1/4 right-1/6 w-80 h-80 bg-brand-purple/6 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
        </div>
        
        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground-white mb-8 leading-tight font-montserrat">
              Data <span className="bg-gradient-primary bg-clip-text text-transparent">Engineering</span>
            </h1>
            <p className="text-xl text-foreground-white/80 mb-12 leading-relaxed font-montserrat">
              Build robust data infrastructure and pipelines that transform raw data into actionable business insights.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="xl">Build Data Pipeline</Button>
              <Button variant="hero-secondary" size="xl">View Data Solutions</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Data Services */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-foreground mb-6 font-montserrat">Data Engineering Services</h2>
            <p className="text-xl text-foreground-muted max-w-3xl mx-auto font-montserrat">
              End-to-end data solutions from collection and processing to analysis and visualization.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Database, title: "Data Architecture", description: "Design scalable data warehouses and lakes for efficient storage and retrieval." },
              { icon: Cloud, title: "Cloud Data Solutions", description: "Migrate and optimize data infrastructure on AWS, Azure, and Google Cloud." },
              { icon: Workflow, title: "ETL/ELT Pipelines", description: "Automated data pipelines for real-time and batch data processing." },
              { icon: BarChart, title: "Data Analytics", description: "Advanced analytics platforms for business intelligence and reporting." },
              { icon: Shield, title: "Data Governance", description: "Implement data quality, security, and compliance frameworks." },
              { icon: Zap, title: "Real-time Processing", description: "Stream processing solutions for real-time data insights and actions." }
            ].map((service, index) => (
              <div key={index} className="relative bg-gradient-card backdrop-blur-xl rounded-3xl p-8 shadow-glass-lg border border-glass-border hover:shadow-glow transition-all duration-500 transform hover:scale-105">
                <div className="bg-gradient-to-br from-brand-primary to-brand-accent rounded-2xl w-16 h-16 flex items-center justify-center mb-6">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4 font-montserrat">{service.title}</h3>
                <p className="text-foreground-muted leading-relaxed font-montserrat">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-hero">
        <div className="container mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-foreground-white mb-8 font-montserrat">
            Unlock the Power of Your Data
          </h2>
          <p className="text-xl text-foreground-white/80 mb-12 max-w-2xl mx-auto font-montserrat">
            Transform your data into a strategic asset with our comprehensive data engineering solutions.
          </p>
          <Button variant="hero" size="xl">Get Started</Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default DataEngineering;