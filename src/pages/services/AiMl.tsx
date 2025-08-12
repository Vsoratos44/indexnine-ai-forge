import React from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Breadcrumbs } from '@/components/ui/breadcrumbs';
import { ServiceSchema, WebPageSchema, BreadcrumbSchema } from '@/components/SEOStructuredData';
import { Brain, Bot, ChartBar, Eye, Lightbulb, Target } from 'lucide-react';
import ServiceVideoBackground from '@/components/ServiceVideoBackground';
import { CardGlass } from '@/components/ui/CardGlass';

const AiMl = () => {
  return (
    <div className="min-h-screen bg-background">
      <ServiceSchema 
        name="AI & ML Development"
        description="Custom AI and machine learning solutions for business automation and intelligence"
        serviceType="Software Development"
      />
      <WebPageSchema 
        title="AI & ML Development Services"
        description="Harness artificial intelligence and machine learning to revolutionize your business processes"
        url="https://yoursite.lovable.app/services/ai-ml"
      />
      <BreadcrumbSchema items={[
        { name: 'Home', url: 'https://yoursite.lovable.app/' },
        { name: 'Services', url: 'https://yoursite.lovable.app/services' },
        { name: 'AI & ML Development', url: 'https://yoursite.lovable.app/services/ai-ml' }
      ]} />
      <Header />
      
      <div className="container mx-auto px-6 lg:px-8 pt-32">
        <Breadcrumbs />
      </div>
      
      {/* Hero Section */}
      <section className="relative min-h-[90vh] overflow-hidden bg-black">
        <ServiceVideoBackground />
        
        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground-white mb-8 leading-tight font-montserrat">
              AI & ML <span className="bg-gradient-primary bg-clip-text text-transparent">Development</span>
            </h1>
            <p className="text-xl text-foreground-white/80 mb-12 leading-relaxed font-montserrat">
              Harness the power of artificial intelligence and machine learning to revolutionize your business processes and unlock new opportunities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="xl">Explore AI Solutions</Button>
              <Button variant="hero-secondary" size="xl">View AI Case Studies</Button>
            </div>
          </div>
        </div>
      </section>

      {/* AI Services */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="heading-h2 text-foreground mb-6">AI & ML Solutions</h2>
            <p className="text-xl text-foreground-muted max-w-3xl mx-auto font-montserrat">
              From machine learning models to intelligent automation, we deliver AI solutions that drive real business value.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Brain, title: "Machine Learning Models", description: "Custom ML models for prediction, classification, and recommendation systems." },
              { icon: Bot, title: "Intelligent Automation", description: "AI-powered automation to streamline workflows and reduce manual tasks." },
              { icon: ChartBar, title: "Predictive Analytics", description: "Advanced analytics to forecast trends and optimize business decisions." },
              { icon: Eye, title: "Computer Vision", description: "Image and video analysis for quality control, object detection, and more." },
              { icon: Lightbulb, title: "Natural Language Processing", description: "Text analysis, sentiment analysis, and conversational AI solutions." },
              { icon: Target, title: "AI Strategy Consulting", description: "Strategic guidance on AI adoption and implementation roadmaps." }
            ].map((service, index) => (
              <CardGlass key={index} className="relative transform hover:scale-105">
                <div className="bg-gradient-to-br from-brand-primary to-brand-accent rounded-2xl w-16 h-16 flex items-center justify-center mb-6">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="heading-h3 text-foreground mb-4">{service.title}</h3>
                <p className="text-foreground-muted leading-relaxed">{service.description}</p>
              </CardGlass>
            ))}
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6 lg:px-8">
          <h3 className="text-2xl font-bold text-foreground mb-8 font-montserrat">Related Services</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <Link to="/services/custom-software" className="p-6 bg-gradient-card backdrop-blur-xl border border-glass-border rounded-3xl hover:shadow-glass-lg transition-all">
              <h4 className="font-semibold text-foreground mb-2">Custom Software Development</h4>
              <p className="text-foreground-muted text-sm">End-to-end software solutions with AI integration</p>
            </Link>
            <Link to="/services/data-engineering" className="p-6 bg-gradient-card backdrop-blur-xl border border-glass-border rounded-3xl hover:shadow-glass-lg transition-all">
              <h4 className="font-semibold text-foreground mb-2">Data Engineering</h4>
              <p className="text-foreground-muted text-sm">Data pipelines and analytics for AI models</p>
            </Link>
            <Link to="/studios/ai-studio" className="p-6 bg-gradient-card backdrop-blur-xl border border-glass-border rounded-3xl hover:shadow-glass-lg transition-all">
              <h4 className="font-semibold text-foreground mb-2">AI Studio</h4>
              <p className="text-foreground-muted text-sm">Specialized AI development studio</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-hero">
        <div className="container mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-foreground-white mb-8 font-montserrat">
            Transform Your Business with AI
          </h2>
          <p className="text-xl text-foreground-white/80 mb-12 max-w-2xl mx-auto font-montserrat">
            Discover how AI and machine learning can solve your unique challenges and create competitive advantages.
          </p>
          <Button variant="hero" size="xl">Start Your AI Journey</Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AiMl;