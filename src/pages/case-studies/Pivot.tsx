import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import LivingVoidBackground from '@/components/LivingVoidBackground';
import { ArrowLeft, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const PivotCaseStudy = () => {
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
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-8 leading-tight tracking-tight animate-fade-in font-montserrat">
              EdTech Platform: <br />
              <span className="bg-gradient-primary bg-clip-text text-transparent">Strategic Pivot to Success</span>
            </h1>
            
            <p className="text-lg sm:text-xl lg:text-2xl text-foreground/85 mb-12 max-w-4xl leading-relaxed font-light animate-slide-up font-montserrat">
              How we helped an EdTech platform quickly adapt to market feedback and evolve their product strategy with data-driven insights.
            </p>
          </div>
        </div>
      </section>

      {/* Challenge Section */}
      <section className="py-24 lg:py-32 bg-gradient-section relative overflow-hidden">
        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-8 font-montserrat">
              The Pivot Point
            </h2>
            <p className="text-lg text-foreground-muted leading-relaxed mb-8">
              After 18 months in market, the EdTech platform faced critical challenges requiring strategic pivot:
            </p>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-brand-primary rounded-full mt-3 flex-shrink-0"></div>
                <span className="text-foreground-muted">Low user engagement despite strong initial adoption</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-brand-primary rounded-full mt-3 flex-shrink-0"></div>
                <span className="text-foreground-muted">Changing market demands post-pandemic</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-brand-primary rounded-full mt-3 flex-shrink-0"></div>
                <span className="text-foreground-muted">Need to maintain existing user base while attracting new segments</span>
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
              Data-Driven Pivot Strategy
            </h2>
            <p className="text-lg text-foreground-muted leading-relaxed mb-12">
              We implemented comprehensive analytics and user research to guide strategic product evolution:
            </p>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="relative overflow-hidden backdrop-blur-xl bg-glass-bg border border-glass-border rounded-3xl p-8 shadow-glass">
                <h3 className="text-2xl font-bold text-foreground mb-4 font-montserrat">User Behavior Analysis</h3>
                <p className="text-foreground-muted leading-relaxed">
                  Deep-dive analytics revealed key usage patterns and drop-off points, informing feature prioritization and UX improvements.
                </p>
              </div>
              
              <div className="relative overflow-hidden backdrop-blur-xl bg-glass-bg border border-glass-border rounded-3xl p-8 shadow-glass">
                <h3 className="text-2xl font-bold text-foreground mb-4 font-montserrat">Market Repositioning</h3>
                <p className="text-foreground-muted leading-relaxed">
                  Shifted from B2C to B2B2C model, targeting educational institutions while maintaining direct user experience.
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
              Pivot Success Metrics
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="relative overflow-hidden backdrop-blur-xl bg-glass-bg border border-glass-border rounded-3xl p-8 shadow-glass text-center">
                <h3 className="text-4xl font-bold text-brand-primary mb-2 font-montserrat">300%</h3>
                <p className="text-foreground-muted">Increase in User Engagement</p>
              </div>
              
              <div className="relative overflow-hidden backdrop-blur-xl bg-glass-bg border border-glass-border rounded-3xl p-8 shadow-glass text-center">
                <h3 className="text-4xl font-bold text-brand-primary mb-2 font-montserrat">8 Months</h3>
                <p className="text-foreground-muted">Time to Market Leadership</p>
              </div>
              
              <div className="relative overflow-hidden backdrop-blur-xl bg-glass-bg border border-glass-border rounded-3xl p-8 shadow-glass text-center">
                <h3 className="text-4xl font-bold text-brand-primary mb-2 font-montserrat">$15M</h3>
                <p className="text-foreground-muted">Series B Funding Secured</p>
              </div>
            </div>
            
            <div className="text-left">
              <h3 className="text-2xl font-bold text-foreground mb-6 font-montserrat">Transformation Outcomes:</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  "Successfully transitioned to B2B2C model with 95% user retention",
                  "Expanded to 500+ educational institutions across 15 countries",
                  "Achieved 40% month-over-month growth in new user acquisition",
                  "Built strategic partnerships with major education technology providers"
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
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-8 font-montserrat">
            Need to Pivot Your Strategy?
          </h2>
          <p className="text-xl text-foreground/80 mb-12 max-w-2xl mx-auto font-montserrat">
            Let's help you navigate market changes with data-driven insights and strategic product evolution.
          </p>
          <Button variant="hero" size="xl">Explore Pivot Solutions</Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PivotCaseStudy;