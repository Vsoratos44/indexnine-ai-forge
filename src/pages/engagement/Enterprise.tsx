import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Building, Shield, Users, Zap, Target, CheckCircle } from 'lucide-react';

const Enterprise = () => {
  return (
    <div className="min-h-screen bg-background">
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
              Enterprise <span className="bg-gradient-primary bg-clip-text text-transparent">Solutions</span>
            </h1>
            <p className="text-xl text-foreground-white/80 mb-12 leading-relaxed font-montserrat">
              Comprehensive technology solutions designed for large-scale enterprise operations and complex business requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="xl">Discuss Your Needs</Button>
              <Button variant="hero-secondary" size="xl">View Enterprise Cases</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-foreground mb-6 font-montserrat">Enterprise-Grade Solutions</h2>
            <p className="text-xl text-foreground-muted max-w-3xl mx-auto font-montserrat">
              Tailored for enterprise scale, security, and compliance requirements.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Building, title: "Enterprise Architecture", description: "Scalable architecture designed for enterprise-level performance and growth." },
              { icon: Shield, title: "Security & Compliance", description: "Enterprise-grade security with full compliance to industry standards." },
              { icon: Users, title: "Dedicated Teams", description: "Dedicated development teams aligned with your enterprise processes." },
              { icon: Zap, title: "Performance at Scale", description: "Solutions optimized for high-volume, mission-critical operations." },
              { icon: Target, title: "Strategic Alignment", description: "Technology solutions aligned with your enterprise business strategy." },
              { icon: CheckCircle, title: "24/7 Support", description: "Round-the-clock support and maintenance for critical systems." }
            ].map((feature, index) => (
              <div key={index} className="relative bg-gradient-card backdrop-blur-xl rounded-3xl p-8 shadow-glass-lg border border-glass-border hover:shadow-glow transition-all duration-500 transform hover:scale-105">
                <div className="bg-gradient-to-br from-brand-primary to-brand-accent rounded-2xl w-16 h-16 flex items-center justify-center mb-6">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4 font-montserrat">{feature.title}</h3>
                <p className="text-foreground-muted leading-relaxed font-montserrat">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-hero">
        <div className="container mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-foreground-white mb-8 font-montserrat">
            Ready for Enterprise-Scale Innovation?
          </h2>
          <p className="text-xl text-foreground-white/80 mb-12 max-w-2xl mx-auto font-montserrat">
            Let's discuss how we can support your enterprise digital transformation and growth objectives.
          </p>
          <Button variant="hero" size="xl">Schedule Consultation</Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Enterprise;