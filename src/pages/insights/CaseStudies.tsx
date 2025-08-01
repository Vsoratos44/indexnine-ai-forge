import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Target, TrendingUp, Clock, Users } from 'lucide-react';

const CaseStudies = () => {
  const caseStudies = [
    {
      title: "FinTech Platform Scaling",
      industry: "Financial Technology",
      challenge: "Scale platform to handle 10x user growth",
      solution: "Microservices architecture with cloud optimization",
      results: ["99.9% uptime achieved", "300% performance improvement", "50% cost reduction"],
      duration: "8 months",
      teamSize: "12 engineers"
    },
    {
      title: "Healthcare Data Platform",
      industry: "Healthcare",
      challenge: "Secure patient data management and analytics",
      solution: "HIPAA-compliant data platform with ML insights",
      results: ["100% compliance achieved", "80% faster data processing", "Enhanced patient outcomes"],
      duration: "12 months",
      teamSize: "15 engineers"
    },
    {
      title: "E-commerce AI Recommendation",
      industry: "E-commerce",
      challenge: "Improve customer experience and conversion",
      solution: "AI-powered recommendation engine and personalization",
      results: ["35% increase in conversion", "50% higher engagement", "25% revenue growth"],
      duration: "6 months",
      teamSize: "8 engineers"
    }
  ];

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
              Case <span className="bg-gradient-primary bg-clip-text text-transparent">Studies</span>
            </h1>
            <p className="text-xl text-foreground-white/80 mb-12 leading-relaxed font-montserrat">
              Real success stories showcasing how we've helped clients overcome challenges and achieve exceptional results.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-1 gap-12 max-w-6xl mx-auto">
            {caseStudies.map((study, index) => (
              <div key={index} className="relative bg-gradient-card backdrop-blur-xl rounded-3xl p-10 shadow-glass-lg border border-glass-border hover:shadow-glow transition-all duration-500">
                <div className="grid lg:grid-cols-2 gap-8">
                  {/* Study Info */}
                  <div>
                    <div className="mb-6">
                      <span className="text-sm bg-brand-primary/10 text-brand-primary px-3 py-1 rounded-full font-montserrat">
                        {study.industry}
                      </span>
                    </div>
                    <h3 className="text-3xl font-bold text-foreground mb-4 font-montserrat">{study.title}</h3>
                    
                    <div className="space-y-6">
                      <div>
                        <h4 className="text-lg font-semibold text-foreground mb-2 font-montserrat">Challenge</h4>
                        <p className="text-foreground-muted font-montserrat">{study.challenge}</p>
                      </div>
                      
                      <div>
                        <h4 className="text-lg font-semibold text-foreground mb-2 font-montserrat">Solution</h4>
                        <p className="text-foreground-muted font-montserrat">{study.solution}</p>
                      </div>
                    </div>
                  </div>

                  {/* Results & Metrics */}
                  <div>
                    <h4 className="text-lg font-semibold text-foreground mb-4 font-montserrat">Results</h4>
                    <div className="space-y-3 mb-8">
                      {study.results.map((result, idx) => (
                        <div key={idx} className="flex items-center gap-3">
                          <Target className="w-5 h-5 text-brand-primary" />
                          <span className="text-foreground-muted font-montserrat">{result}</span>
                        </div>
                      ))}
                    </div>

                    <div className="grid grid-cols-2 gap-6">
                      <div className="text-center">
                        <Clock className="w-8 h-8 text-brand-primary mx-auto mb-2" />
                        <div className="text-2xl font-bold text-foreground font-montserrat">{study.duration}</div>
                        <div className="text-sm text-foreground-muted font-montserrat">Duration</div>
                      </div>
                      <div className="text-center">
                        <Users className="w-8 h-8 text-brand-primary mx-auto mb-2" />
                        <div className="text-2xl font-bold text-foreground font-montserrat">{study.teamSize}</div>
                        <div className="text-sm text-foreground-muted font-montserrat">Team Size</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-hero">
        <div className="container mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-foreground-white mb-8 font-montserrat">
            Ready to Create Your Success Story?
          </h2>
          <p className="text-xl text-foreground-white/80 mb-12 max-w-2xl mx-auto font-montserrat">
            Let's discuss how we can help you achieve similar breakthrough results for your business.
          </p>
          <Button variant="hero" size="xl">Start Your Project</Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CaseStudies;