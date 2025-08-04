import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { 
  Handshake, 
  Zap, 
  Eye, 
  Rocket, 
  BarChart3, 
  Sprout, 
  Settings,
  Trophy,
  Users,
  Target,
  TrendingUp,
  Shield
} from 'lucide-react';

const ProjectBased = () => {
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
          <div className="max-w-5xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground-white mb-8 leading-tight font-montserrat">
              Your Vision, Delivered. Your Success, <span className="bg-gradient-primary bg-clip-text text-transparent">Guaranteed.</span>
            </h1>
            <p className="text-xl text-foreground-white/80 mb-12 leading-relaxed font-montserrat max-w-4xl mx-auto">
              We are the high-value, strategic partner for the AI-First era. Our project-based engagements are built on a single promise: we tie our success directly to yours.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="xl">Scope a Project</Button>
              <Button variant="hero-secondary" size="xl">Schedule a Strategy Session</Button>
            </div>
          </div>
        </div>
      </section>

      {/* How We Win Together Section */}
      <section className="py-24 bg-gradient-section">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6 font-montserrat">
              It's Not Just What We Do. It's How We <span className="bg-gradient-primary bg-clip-text text-transparent">Win Together.</span>
            </h2>
            <p className="text-xl text-foreground-muted max-w-4xl mx-auto font-montserrat leading-relaxed">
              We challenge the traditional consulting model. Instead of just taking orders, we put 'skin in the game' with our outcome-based and success-fee models. This ensures we are a partner in your venture, not just another vendor. Our goals are perfectly aligned with your business outcomes.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                icon: Handshake, 
                title: "A Founder's Mindset", 
                description: "We succeed when you succeed. Our outcome-based models ensure we are fully invested in achieving your business goals." 
              },
              { 
                icon: Zap, 
                title: "Acceleration & Velocity", 
                description: "Our snap.mvp reusable code libraries and AI-powered workflows turn complex ideas into tangible progress in days, not months." 
              },
              { 
                icon: Eye, 
                title: "Radical Transparency", 
                description: "Our proprietary Customer Experience App provides an unparalleled, real-time view into project health, team performance, and delivery metrics—eliminating the 'black box' of outsourcing." 
              }
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

      {/* Engagements for Every Stage Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6 font-montserrat">
              From Bold Idea to Market Leader, We <span className="bg-gradient-primary bg-clip-text text-transparent">Engineer Your Success</span>
            </h2>
            <p className="text-xl text-foreground-muted max-w-3xl mx-auto font-montserrat">
              We provide tailored project teams and strategic consulting to support you at every critical stage of your product journey.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { 
                icon: Rocket, 
                title: "Launch", 
                description: "Rapidly validate ideas and bring MVPs to market with our lean approach to product development.",
                link: "/case-studies/launch"
              },
              { 
                icon: BarChart3, 
                title: "Pivot", 
                description: "Quickly adapt to market feedback and evolve your product strategy with data-driven insights.",
                link: "/case-studies/pivot"
              },
              { 
                icon: Sprout, 
                title: "Grow", 
                description: "Scale your product infrastructure and features to support expanding user bases and new use cases.",
                link: "/case-studies/grow"
              },
              { 
                icon: Settings, 
                title: "Mature", 
                description: "Optimize performance, security, and reliability as your product becomes business-critical.",
                link: "/case-studies/mature"
              }
            ].map((stage, index) => (
              <div key={index} className="relative bg-gradient-card backdrop-blur-xl rounded-3xl p-8 shadow-glass-lg border border-glass-border hover:shadow-glow transition-all duration-500 transform hover:scale-105 group">
                <div className="bg-gradient-to-br from-brand-primary to-brand-accent rounded-2xl w-16 h-16 flex items-center justify-center mb-6">
                  <stage.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4 font-montserrat">{stage.title}</h3>
                <p className="text-foreground-muted leading-relaxed font-montserrat mb-6">{stage.description}</p>
                <a 
                  href={stage.link} 
                  className="text-brand-primary hover:text-brand-accent transition-colors font-medium group-hover:translate-x-1 transform transition-transform duration-300 inline-block"
                >
                  View Case Study →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Measurement Section */}
      <section className="py-24 bg-gradient-section">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6 font-montserrat">
              Our Success is Measured by the <span className="bg-gradient-primary bg-clip-text text-transparent">Value We Create</span>
            </h2>
            <p className="text-xl text-foreground-muted max-w-3xl mx-auto font-montserrat">
              Discover insights, strategies, and success stories that drive innovation and growth.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                icon: Trophy,
                title: "AI-Powered Automation",
                description: "How we engineered a bespoke AI engine to automate real-time fan engagement, eliminating a six-person team and delivering content in under 15 seconds.",
                link: "/case-studies/sports-interactive"
              },
              {
                icon: Users,
                title: "Rapid Team Deployment",
                description: "How we deployed a 5-person team immediately to meet an urgent client need, accelerating their project timeline and launch.",
                link: "/case-studies/genesis"
              }
            ].map((caseStudy, index) => (
              <div key={index} className="relative bg-gradient-card backdrop-blur-xl rounded-3xl p-8 shadow-glass-lg border border-glass-border hover:shadow-glow transition-all duration-500 transform hover:scale-105 group">
                <div className="bg-gradient-to-br from-brand-primary to-brand-accent rounded-2xl w-16 h-16 flex items-center justify-center mb-6">
                  <caseStudy.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4 font-montserrat">{caseStudy.title}</h3>
                <p className="text-foreground-muted leading-relaxed font-montserrat mb-6">{caseStudy.description}</p>
                <a 
                  href={caseStudy.link} 
                  className="text-brand-primary hover:text-brand-accent transition-colors font-medium group-hover:translate-x-1 transform transition-transform duration-300 inline-block"
                >
                  Read More →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-hero">
        <div className="container mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground-white mb-8 font-montserrat">
            Ready to transform your idea into an <span className="bg-gradient-primary bg-clip-text text-transparent">enduring reality?</span>
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="xl">Scope a Project</Button>
            <Button variant="hero-secondary" size="xl">Schedule a Strategy Session</Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProjectBased;