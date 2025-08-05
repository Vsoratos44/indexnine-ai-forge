import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Lightbulb, Palette, Brain, Zap, Rocket, Users } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import LivingVoidBackground from '@/components/LivingVoidBackground';

const InnovationLab = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <LivingVoidBackground />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 sm:mb-8 font-montserrat leading-tight">
              Where Visionaries{' '}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Build the Future
              </span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-foreground-muted mb-8 sm:mb-12 leading-relaxed max-w-3xl mx-auto px-4">
              The Indexnine Innovation Lab is an accelerated product development engine designed for one purpose: to turn your groundbreaking idea into a market-ready MVP with unprecedented speed and precision. Stop dreaming, start building.
            </p>
            <div className="flex flex-col gap-4 sm:gap-6 justify-center px-4">
              <Button variant="hero" size="lg" className="w-full sm:w-auto">
                Bring Your Vision to Life
              </Button>
              <Button variant="outline" size="lg" className="border-white/20 text-white hover:bg-white/10 w-full sm:w-auto text-sm sm:text-base">
                See how we launched an MVP in 8 weeks <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gradient-section">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground-dark mb-6 sm:mb-8 font-montserrat leading-tight">
              You Have the Vision. We Have the{' '}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Blueprint for Reality
              </span>
            </h2>
            <div className="text-base sm:text-lg text-foreground-dark-muted leading-relaxed space-y-4 sm:space-y-6 px-4">
              <p>
                Every disruptive product starts with a "what if?" But the journey from concept to code is fraught with risk, delays, and budget overruns. The traditional development process is too slow for today's market. The Innovation Lab was created to solve this.
              </p>
              <p>
                It's not a service; it's an ecosystem of specialized studios, proprietary accelerators, and expert talent, all integrated to de-risk your investment and maximize your velocity. We build alongside you as a true engineering partner, making the right architectural decisions from day one so you can launch with confidence and scale without limits.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Studios Section */}
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 sm:mb-6 font-montserrat leading-tight">
              An Integrated Ecosystem for{' '}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Rapid Innovation
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-foreground-muted max-w-4xl mx-auto px-4">
              Our three specialized studios work in concert, providing a seamless path from initial strategy to a fully functional product.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
            {/* Discovery Studio */}
            <div className="group p-6 sm:p-8 rounded-2xl bg-card border border-border hover:border-brand-primary/50 transition-all duration-300">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-primary rounded-xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform">
                <Lightbulb className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-foreground mb-3 sm:mb-4 leading-tight">The Discovery Studio: De-Risking Your Vision</h3>
              <p className="text-sm sm:text-base text-foreground-muted mb-4 sm:mb-6 leading-relaxed">
                Great products aren't just built; they're validated. Our Discovery Studio is a structured, intensive process—our Sprint 0—where we map your business goals to a technical strategy.
              </p>
              <div className="space-y-2">
                <h4 className="font-semibold text-foreground text-sm sm:text-base">Offerings:</h4>
                <ul className="text-xs sm:text-sm text-foreground-muted space-y-1">
                  <li>• Product Roadmapping</li>
                  <li>• Feature Prioritization</li>
                  <li>• Market & Technical Feasibility</li>
                  <li>• MVP Scoping</li>
                </ul>
              </div>
            </div>

            {/* Design Studio */}
            <div className="group p-8 rounded-2xl bg-card border border-border hover:border-brand-primary/50 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Palette className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">The Design Studio: Crafting Intuitive Experiences</h3>
              <p className="text-foreground-muted mb-6 leading-relaxed">
                A brilliant idea deserves a brilliant user experience. Our Design Studio translates your vision into intuitive, engaging, and beautiful interfaces. We move from low-fidelity wireframes to high-fidelity, interactive prototypes, ensuring every click is purposeful and every screen is a delight.
              </p>
              <div className="space-y-2">
                <h4 className="font-semibold text-foreground">Offerings:</h4>
                <ul className="text-sm text-foreground-muted space-y-1">
                  <li>• UI/UX Design</li>
                  <li>• Interactive Prototyping</li>
                  <li>• User Journey Mapping</li>
                  <li>• Design System Creation</li>
                </ul>
              </div>
            </div>

            {/* AI Studio */}
            <div className="group p-8 rounded-2xl bg-card border border-border hover:border-brand-primary/50 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Brain className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">The AI Studio: Building Your Competitive Edge</h3>
              <p className="text-foreground-muted mb-6 leading-relaxed">
                In today's market, AI is not an afterthought—it's the core differentiator. Our AI Studio specializes in building custom AI solutions that give your product an unfair advantage. From Generative AI applications and Large Language Model development to leveraging tools like Cursor AI to accelerate feature creation.
              </p>
              <div className="space-y-2">
                <h4 className="font-semibold text-foreground">Offerings:</h4>
                <ul className="text-sm text-foreground-muted space-y-1">
                  <li>• Custom AI Development</li>
                  <li>• Generative AI & RAG Solutions</li>
                  <li>• AI-Assisted Engineering</li>
                  <li>• Machine Learning Model Development</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Accelerator Spotlight Section */}
      <section className="py-24 bg-gradient-section">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground-dark mb-6 font-montserrat">
              Our Secret Weapon:{' '}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Snap.MVP.Deploy.Cloud
              </span>
            </h2>
          </div>
          
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8">
              <Zap className="w-16 h-16 text-brand-primary mx-auto mb-6" />
              <p className="text-lg text-foreground-dark-muted leading-relaxed mb-8">
                How do we launch so fast? We've automated the foundation. Snap.MVP.Deploy.Cloud is our proprietary accelerator that deploys a secure, scalable, and production-ready cloud environment on AWS, GCP, or Azure in about 10 minutes. While others spend weeks on manual setup, we spend the first week of our engagement building your actual product. This single accelerator dramatically reduces time-to-market and eliminates foundational risk.
              </p>
              <Button variant="outline" className="border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white">
                Learn More About Snap.MVP
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Supporting Content Section */}
      <section className="py-24">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6 font-montserrat">
              Proof, Not{' '}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Promises
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="group p-8 rounded-2xl bg-card border border-border hover:border-brand-primary/50 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-6">
                <Rocket className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">FinTech Startup Launches Secure MVP in 8 Weeks</h3>
              <p className="text-foreground-muted mb-6">
                See how we partnered with a visionary founder to go from a napkin sketch to a fully functional, secure FinTech platform, ready for its seed round.
              </p>
              <Button variant="outline" size="sm">
                Read the Case Study
              </Button>
            </div>

            <div className="group p-8 rounded-2xl bg-card border border-border hover:border-brand-primary/50 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-6">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">Weeks to Minutes: How We Deploy Production-Ready Cloud Infrastructure</h3>
              <p className="text-foreground-muted mb-6">
                A deep dive into the technology and philosophy behind our game-changing deployment accelerator.
              </p>
              <Button variant="outline" size="sm">
                Read the Blog Post
              </Button>
            </div>

            <div className="group p-8 rounded-2xl bg-card border border-border hover:border-brand-primary/50 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-6">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">AI-Assisted React Development: From Design to Dashboard</h3>
              <p className="text-foreground-muted mb-6">
                Explore how our UI architects leverage AI tools to build complex interfaces with incredible speed and quality.
              </p>
              <Button variant="outline" size="sm">
                Read the Blog Post
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 bg-gradient-to-r from-brand-primary to-purple-600">
        <div className="container mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6 font-montserrat">
            Let's Build What's Next. Together.
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Your vision deserves more than just a team of coders. It deserves a dedicated engineering partner obsessed with turning your idea into a market-defining success.
          </p>
          <Button variant="ghost" size="lg" className="bg-white text-brand-primary hover:bg-white/90">
            Book Your Free Discovery Session
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default InnovationLab;