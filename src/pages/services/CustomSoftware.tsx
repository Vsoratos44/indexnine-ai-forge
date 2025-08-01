import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Code, Cpu, Database, Shield, Zap, Users } from 'lucide-react';

const CustomSoftware = () => {
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
              End-to-End <span className="bg-gradient-primary bg-clip-text text-transparent">Custom Software Development</span>
            </h1>
            <p className="text-xl text-foreground-white/80 mb-12 leading-relaxed font-montserrat">
              We build scalable, secure, and high-performance web and mobile applications engineered for growth. Our full-stack development capabilities deliver custom solutions that perfectly align with your unique requirements and business goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="xl">Scope Your Project</Button>
              <Button variant="hero-secondary" size="xl">View Case Studies</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-foreground mb-6 font-montserrat">Our Full-Stack Development Capabilities</h2>
            <p className="text-xl text-foreground-muted max-w-3xl mx-auto font-montserrat">
              We build scalable, secure, and innovative software solutions using cutting-edge technologies and industry best practices.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Code, title: "Web Development", description: "Modern, responsive web applications using React, Vue, and Angular frameworks with performance optimization." },
              { icon: Cpu, title: "Mobile Development", description: "Native and cross-platform mobile apps for iOS and Android using React Native and Flutter." },
              { icon: Database, title: "Backend Engineering", description: "Robust APIs and microservices architecture with Node.js, Python, and Java for scalable performance." },
              { icon: Shield, title: "DevOps & Cloud", description: "Cloud-native deployment, CI/CD pipelines, and infrastructure automation on AWS, Azure, and GCP." },
              { icon: Zap, title: "AI/ML Integration", description: "Embedding artificial intelligence and machine learning capabilities into your applications." },
              { icon: Users, title: "Quality Assurance", description: "Comprehensive testing strategies including automated testing, performance testing, and security audits." }
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
            Ready to Build Your Custom Solution?
          </h2>
          <p className="text-xl text-foreground-white/80 mb-12 max-w-2xl mx-auto font-montserrat">
            Let's discuss your project requirements and create a solution that drives your business forward.
          </p>
          <Button variant="hero" size="xl">Get Started Today</Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CustomSoftware;