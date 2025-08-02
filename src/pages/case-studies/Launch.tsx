import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import LivingVoidBackground from '@/components/LivingVoidBackground';
import { ArrowLeft, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const LaunchCaseStudy = () => {
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
                Case Study: Launch Phase
              </span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground-white mb-8 leading-tight tracking-tight animate-fade-in font-montserrat">
              HealthTech Startup: <br />
              <span className="bg-gradient-primary bg-clip-text text-transparent">From MVP to Market Leader</span>
            </h1>
            
            <p className="text-lg sm:text-xl lg:text-2xl text-foreground-white/85 mb-12 max-w-4xl leading-relaxed font-light animate-slide-up font-montserrat">
              How we helped a HealthTech startup rapidly validate their idea and bring their MVP to market using our lean approach to product development.
            </p>
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
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-8 font-montserrat">
              The Challenge
            </h2>
            <p className="text-lg text-foreground-muted leading-relaxed mb-8">
              A healthcare startup approached us with a revolutionary idea for patient care management but faced significant challenges:
            </p>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-brand-primary rounded-full mt-3 flex-shrink-0"></div>
                <span className="text-foreground-muted">Limited funding and tight timeline to prove market viability</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-brand-primary rounded-full mt-3 flex-shrink-0"></div>
                <span className="text-foreground-muted">Complex regulatory requirements in healthcare industry</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-brand-primary rounded-full mt-3 flex-shrink-0"></div>
                <span className="text-foreground-muted">Need for rapid prototyping and user feedback integration</span>
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
              Our Launch Strategy
            </h2>
            <p className="text-lg text-foreground-muted leading-relaxed mb-12">
              We implemented our proven Launch methodology to rapidly validate ideas and bring the MVP to market:
            </p>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="relative overflow-hidden backdrop-blur-xl bg-glass-bg border border-glass-border rounded-3xl p-8 shadow-glass">
                <h3 className="text-2xl font-bold text-foreground mb-4 font-montserrat">Sprint Zero Framework</h3>
                <p className="text-foreground-muted leading-relaxed">
                  Conducted comprehensive discovery and validation workshops to define core features and technical architecture before development.
                </p>
              </div>
              
              <div className="relative overflow-hidden backdrop-blur-xl bg-glass-bg border border-glass-border rounded-3xl p-8 shadow-glass">
                <h3 className="text-2xl font-bold text-foreground mb-4 font-montserrat">Lean Development</h3>
                <p className="text-foreground-muted leading-relaxed">
                  Built the MVP using our snap.mvp framework, focusing on core user journeys while maintaining compliance requirements.
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
              Results That Matter
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="relative overflow-hidden backdrop-blur-xl bg-glass-bg border border-glass-border rounded-3xl p-8 shadow-glass text-center">
                <h3 className="text-4xl font-bold text-brand-primary mb-2 font-montserrat">12 Weeks</h3>
                <p className="text-foreground-muted">From Concept to Market</p>
              </div>
              
              <div className="relative overflow-hidden backdrop-blur-xl bg-glass-bg border border-glass-border rounded-3xl p-8 shadow-glass text-center">
                <h3 className="text-4xl font-bold text-brand-primary mb-2 font-montserrat">$2.5M</h3>
                <p className="text-foreground-muted">Series A Funding Raised</p>
              </div>
              
              <div className="relative overflow-hidden backdrop-blur-xl bg-glass-bg border border-glass-border rounded-3xl p-8 shadow-glass text-center">
                <h3 className="text-4xl font-bold text-brand-primary mb-2 font-montserrat">10,000+</h3>
                <p className="text-foreground-muted">Active Users in 6 Months</p>
              </div>
            </div>
            
            <div className="text-left">
              <h3 className="text-2xl font-bold text-foreground mb-6 font-montserrat">Key Achievements:</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  "Successfully validated product-market fit with healthcare providers",
                  "Achieved HIPAA compliance certification within development timeline",
                  "Secured strategic partnerships with major healthcare networks",
                  "Built scalable architecture supporting 50,000+ concurrent users"
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
            Ready to Launch Your Idea?
          </h2>
          <p className="text-xl text-foreground-white/80 mb-12 max-w-2xl mx-auto font-montserrat">
            Let's help you rapidly validate and bring your MVP to market with our proven Launch methodology.
          </p>
          <Button variant="hero" size="xl">Start Your Launch Journey</Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default LaunchCaseStudy;