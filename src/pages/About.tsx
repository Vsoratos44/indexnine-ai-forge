import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import LivingVoidBackground from '@/components/LivingVoidBackground';

const About = () => {
  return (
    <div className="min-h-screen bg-background-dark">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[65vh] min-h-[600px] overflow-hidden bg-background-dark">
        <LivingVoidBackground />
        
        <div className="relative z-10 container mx-auto px-6 lg:px-8 pt-32 pb-24">
          <div className="max-w-5xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground-white mb-8 leading-tight tracking-tight animate-fade-in font-montserrat">
              About <span className="bg-gradient-primary bg-clip-text text-transparent">IndexNine</span>
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl text-foreground-white/85 mb-12 max-w-4xl mx-auto leading-relaxed font-light animate-slide-up font-montserrat">
              We are a private-equity backed software product engineering solutions company that partners with businesses to transform bold ideas into market-leading products.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 lg:py-32 bg-gradient-section relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-1/6 w-80 h-80 bg-brand-primary/8 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-1/6 w-96 h-96 bg-brand-purple/6 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-8 leading-tight tracking-tight font-montserrat">
              Our Mission
            </h2>
            <p className="text-lg sm:text-xl lg:text-2xl text-foreground-muted leading-relaxed font-light">
              In a market often defined by reactive order-takers, we were founded on a refusal to be just another vendor. Our mission is to permanently challenge that stigma. We prove every day that a globally-recognized, product-first engineering powerhouse can be built in India. We don't just take orders; we challenge assumptions, contribute to your product strategy, and build enduring value. We are the high-value, strategic partner you thought you couldn't find.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 lg:py-32 bg-background">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6 font-montserrat">
              Our Values
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 lg:gap-12 max-w-7xl mx-auto">
            <div className="relative overflow-hidden backdrop-blur-xl bg-glass-bg border border-glass-border rounded-3xl p-8 lg:p-10 shadow-glass hover:shadow-glass-lg transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 animate-fade-in">
              <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-6 leading-tight font-montserrat">
                Product-First Mindset
              </h3>
              <p className="text-foreground-muted leading-relaxed text-lg font-light font-montserrat">
                We think like product owners, not service providers. Every decision is evaluated through the lens of business impact and user value.
              </p>
            </div>

            <div className="relative overflow-hidden backdrop-blur-xl bg-glass-bg border border-glass-border rounded-3xl p-8 lg:p-10 shadow-glass hover:shadow-glass-lg transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 animate-fade-in" style={{animationDelay: '0.15s'}}>
              <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-6 leading-tight font-montserrat">
                AI-Forward Innovation
              </h3>
              <p className="text-foreground-muted leading-relaxed text-lg font-light font-montserrat">
                We leverage artificial intelligence not as a buzzword, but as a core tool to solve complex problems and create competitive advantages.
              </p>
            </div>

            <div className="relative overflow-hidden backdrop-blur-xl bg-glass-bg border border-glass-border rounded-3xl p-8 lg:p-10 shadow-glass hover:shadow-glass-lg transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 animate-fade-in" style={{animationDelay: '0.3s'}}>
              <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-6 leading-tight font-montserrat">
                Outcome Alignment
              </h3>
              <p className="text-foreground-muted leading-relaxed text-lg font-light font-montserrat">
                Our success is measured by your success. We put skin in the game with outcome-based models that align our incentives with your goals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 lg:py-32 bg-gradient-hero">
        <div className="container mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground-white mb-8 font-montserrat">
            Ready to Partner with Us?
          </h2>
          <p className="text-xl text-foreground-white/80 mb-12 max-w-2xl mx-auto font-montserrat">
            Let's discuss how our product mindset and AI-forward engineering excellence can accelerate your growth.
          </p>
          <Button variant="hero" size="xl">Contact Us</Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;