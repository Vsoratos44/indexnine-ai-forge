import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import LivingVoidBackground from '@/components/LivingVoidBackground';
import { ArrowLeft, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const EdTechPivotCaseStudy = () => {
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
                Case Study: Pivot Phase
              </span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground-white mb-8 leading-tight tracking-tight animate-fade-in font-montserrat">
              EdTech Platform: <br />
              <span className="bg-gradient-primary bg-clip-text text-transparent">Strategic Pivot to Success</span>
            </h1>
            
            <p className="text-lg sm:text-xl lg:text-2xl text-foreground-white/85 mb-12 max-w-4xl leading-relaxed font-light animate-slide-up font-montserrat">
              How we helped an EdTech platform quickly adapt to market feedback and evolve their product strategy with data-driven insights.
            </p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-24 lg:py-32 bg-background relative overflow-hidden">
        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 mb-12">
              <div>
                <h3 className="text-xl font-semibold text-brand-primary-dark mb-4 font-montserrat">Client</h3>
                <p className="text-foreground-muted mb-6">EdTech Platform (K-12 Education)</p>
                <h3 className="text-xl font-semibold text-brand-primary-dark mb-4 font-montserrat">Industry</h3>
                <p className="text-foreground-muted">Education Technology, K-12 Learning</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-brand-primary-dark mb-4 font-montserrat">Challenge</h3>
                <p className="text-foreground-muted mb-6">An EdTech platform struggling with low user engagement and changing market demands following the shift to remote learning.</p>
                <h3 className="text-xl font-semibold text-brand-primary-dark mb-4 font-montserrat">Solution</h3>
                <p className="text-foreground-muted">Data-driven pivot strategy including user behavior analysis, product repositioning, and rapid feature development to meet new market needs.</p>
              </div>
            </div>
            
            <h3 className="text-2xl font-bold text-brand-primary-dark mb-6 font-montserrat">Key Outcomes:</h3>
            <div className="space-y-4">
              {[
                "300% Increase in User Engagement: Dramatically improved platform adoption and daily active users",
                "Market Leadership Position: Became the go-to solution for hybrid learning environments",
                "Secured $15M Funding: Successful Series A round based on improved metrics and market fit",
                "6-Month Time to Market: Rapid development and deployment of new core features"
              ].map((outcome, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-brand-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground-muted">{outcome}</span>
                </div>
              ))}
            </div>
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
            <h2 className="text-4xl sm:text-5xl font-bold text-brand-primary-dark mb-8 font-montserrat">
              The Pivot Point
            </h2>
            <p className="text-lg text-foreground-dark leading-relaxed mb-8">
              The EdTech platform had been successful in traditional classroom settings, but the sudden shift to remote and hybrid learning exposed critical gaps in their product offering. User engagement was declining, and competitors were rapidly capturing market share.
            </p>
            <p className="text-lg text-foreground-dark leading-relaxed mb-8">
              The client needed to quickly understand changing user needs and pivot their product strategy to remain competitive in the evolving education landscape.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="relative overflow-hidden backdrop-blur-xl bg-glass-bg border border-glass-border rounded-3xl p-6 shadow-glass transition-all duration-500 transform group hover:scale-105 hover:shadow-glass-lg hover:border-brand-primary/30">
                <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/5 via-transparent to-brand-purple/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <h4 className="relative text-lg font-semibold text-brand-primary-dark mb-2 font-montserrat">Low Engagement</h4>
                <p className="relative text-foreground-dark text-sm">Declining user activity and session duration across the platform</p>
              </div>
              <div className="relative overflow-hidden backdrop-blur-xl bg-glass-bg border border-glass-border rounded-3xl p-6 shadow-glass transition-all duration-500 transform group hover:scale-105 hover:shadow-glass-lg hover:border-brand-primary/30">
                <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/5 via-transparent to-brand-purple/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <h4 className="relative text-lg font-semibold text-brand-primary-dark mb-2 font-montserrat">Market Shift</h4>
                <p className="relative text-foreground-dark text-sm">Rapid transition to remote learning changing user expectations</p>
              </div>
              <div className="relative overflow-hidden backdrop-blur-xl bg-glass-bg border border-glass-border rounded-3xl p-6 shadow-glass transition-all duration-500 transform group hover:scale-105 hover:shadow-glass-lg hover:border-brand-primary/30">
                <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/5 via-transparent to-brand-purple/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <h4 className="relative text-lg font-semibold text-brand-primary-dark mb-2 font-montserrat">Competition</h4>
                <p className="relative text-foreground-dark text-sm">New competitors gaining traction with more modern solutions</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-24 lg:py-32 bg-background">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-8 font-montserrat">
              Our Solution: Data-Driven Pivot Strategy
            </h2>
            <p className="text-lg text-foreground-muted leading-relaxed mb-12">
              We implemented a comprehensive pivot strategy based on deep user research, competitive analysis, and rapid prototyping to transform the platform for the new market reality.
            </p>
            
            <div className="space-y-12">
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-6 font-montserrat">Phase 1: User Behavior Analysis</h3>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="relative overflow-hidden backdrop-blur-xl bg-glass-bg border border-glass-border rounded-3xl p-8 shadow-glass">
                    <h4 className="text-xl font-bold text-foreground mb-4 font-montserrat">Analytics Deep Dive</h4>
                    <p className="text-foreground-muted leading-relaxed">
                      Comprehensive analysis of user behavior patterns, feature usage, and drop-off points to identify improvement opportunities.
                    </p>
                  </div>
                  
                  <div className="relative overflow-hidden backdrop-blur-xl bg-glass-bg border border-glass-border rounded-3xl p-8 shadow-glass">
                    <h4 className="text-xl font-bold text-foreground mb-4 font-montserrat">User Interviews</h4>
                    <p className="text-foreground-muted leading-relaxed">
                      Direct feedback from teachers, students, and administrators to understand changing needs and pain points.
                    </p>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-6 font-montserrat">Phase 2: Market Repositioning</h3>
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="relative overflow-hidden backdrop-blur-xl bg-glass-bg border border-glass-border rounded-3xl p-8 shadow-glass">
                    <h4 className="text-xl font-bold text-foreground mb-4 font-montserrat">Feature Prioritization</h4>
                    <p className="text-foreground-muted leading-relaxed">
                      Data-driven roadmap focusing on high-impact features for hybrid learning environments.
                    </p>
                  </div>
                  
                  <div className="relative overflow-hidden backdrop-blur-xl bg-glass-bg border border-glass-border rounded-3xl p-8 shadow-glass">
                    <h4 className="text-xl font-bold text-foreground mb-4 font-montserrat">UX Redesign</h4>
                    <p className="text-foreground-muted leading-relaxed">
                      Complete interface overhaul optimized for both in-person and remote learning scenarios.
                    </p>
                  </div>
                  
                  <div className="relative overflow-hidden backdrop-blur-xl bg-glass-bg border border-glass-border rounded-3xl p-8 shadow-glass">
                    <h4 className="text-xl font-bold text-foreground mb-4 font-montserrat">Rapid Prototyping</h4>
                    <p className="text-foreground-muted leading-relaxed">
                      Quick validation of new concepts through iterative testing and user feedback loops.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-24 lg:py-32 bg-gradient-section relative overflow-hidden">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-4xl sm:text-5xl font-bold text-brand-primary-dark mb-12 font-montserrat">
              The Results
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="relative overflow-hidden backdrop-blur-xl bg-glass-bg border border-glass-border rounded-3xl p-8 shadow-glass text-center">
                <h3 className="text-4xl font-bold text-brand-primary mb-2 font-montserrat">300%</h3>
                <p className="text-foreground-dark">Increase in User Engagement</p>
              </div>
              
              <div className="relative overflow-hidden backdrop-blur-xl bg-glass-bg border border-glass-border rounded-3xl p-8 shadow-glass text-center">
                <h3 className="text-4xl font-bold text-brand-primary mb-2 font-montserrat">$15M</h3>
                <p className="text-foreground-dark">Funding Secured</p>
              </div>
              
              <div className="relative overflow-hidden backdrop-blur-xl bg-glass-bg border border-glass-border rounded-3xl p-8 shadow-glass text-center">
                <h3 className="text-4xl font-bold text-brand-primary mb-2 font-montserrat">6 Months</h3>
                <p className="text-foreground-dark">Time to Market</p>
              </div>
            </div>
            
            <div className="text-left">
              <h3 className="text-2xl font-bold text-brand-primary-dark mb-6 font-montserrat">Success Metrics:</h3>
              <div className="space-y-4">
                {[
                  "Dramatic User Growth: Achieved 300% increase in daily active users within 6 months of pivot launch",
                  "Market Leadership: Became the preferred platform for hybrid learning in K-12 education sector",
                  "Funding Success: Secured $15M Series A funding based on proven product-market fit and growth metrics",
                  "Rapid Execution: Delivered complete platform transformation in just 6 months with zero downtime"
                ].map((outcome, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-brand-primary mt-0.5 flex-shrink-0" />
                    <span className="text-foreground-dark">{outcome}</span>
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
            Need to Pivot Your Strategy?
          </h2>
          <p className="text-xl text-foreground-white/80 mb-12 max-w-2xl mx-auto font-montserrat">
            Transform your product strategy with data-driven insights and rapid execution to capture new market opportunities.
          </p>
          <Button variant="hero" size="xl">Explore Our Solutions</Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default EdTechPivotCaseStudy;