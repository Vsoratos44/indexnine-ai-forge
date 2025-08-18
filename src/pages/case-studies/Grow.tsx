import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import LivingVoidBackground from '@/components/LivingVoidBackground';
import { ArrowLeft, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const GrowCaseStudy = () => {
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
                Case Study: Growth Phase
              </span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-8 leading-tight tracking-tight animate-fade-in font-montserrat">
              Sports Interactive: <br />
              <span className="bg-gradient-primary bg-clip-text text-transparent">AI-Powered Fan Engagement in Real Time</span>
            </h1>
            
            <p className="text-lg sm:text-xl lg:text-2xl text-foreground/85 mb-12 max-w-4xl leading-relaxed font-light animate-slide-up font-montserrat">
              Unlocking a new level of scalability and solving a technical Gordian knot through automated content creation.
            </p>
          </div>
        </div>
      </section>

      {/* Challenge Section */}
      <section className="py-24 lg:py-32 bg-gradient-section relative overflow-hidden">
        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl sm:text-5xl font-bold text-brand-primary-dark mb-8 font-montserrat">
              High Stakes, High Pressure, High Speed
            </h2>
            <p className="text-lg text-foreground-dark leading-relaxed mb-8">
              In sports media, an industry estimated to reach $1.19 billion by 2030, the game on the field isn't the battle. The real clash happens in the digital arena, on the timelines of millions of fans demanding instant analysis, reactions, and opportunities for engagement. For Sports Interactive, a premier digital agency managing content for top-tier sports leagues and teams, victory in this arena is its core business.
            </p>
            <p className="text-lg text-foreground-dark leading-relaxed mb-8">
              Their most critical and time-sensitive operation revolved around live-tweeting during matches. The formula for success was brutal: when a pivotal moment happened—an interception, a game-changing play, a buzzer beater—a creative, on-brand, and factually accurate tweet had to hit the timeline within twenty seconds. Any longer and the moment's lost.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-brand-primary rounded-full mt-3 flex-shrink-0"></div>
                <span className="text-foreground-dark">High operational costs with six-person "war room" during every match</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-brand-primary rounded-full mt-3 flex-shrink-0"></div>
                <span className="text-foreground-dark">Unsustainable scaling model tied to headcount growth</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-brand-primary rounded-full mt-3 flex-shrink-0"></div>
                <span className="text-foreground-dark">Three years of failed internal automation attempts</span>
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
              Content Automation Powered By AI
            </h2>
            <p className="text-lg text-foreground-muted leading-relaxed mb-12">
              Our Applied AI and Discovery studios initiated the engagement with a rapid, targeted assessment. We mapped their content workflow to identify bottlenecks and quantify the business impact. Our Agentic AI pod architected a bespoke, low-latency AI engine.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="relative overflow-hidden backdrop-blur-xl bg-glass-bg border border-glass-border rounded-3xl p-8 shadow-glass">
                <h3 className="text-2xl font-bold text-foreground mb-4 font-montserrat">Real-Time Data Ingestion</h3>
                <p className="text-foreground-muted leading-relaxed">
                  Built a high-throughput, event-driven pipeline capable of consuming live sports data feeds with sub-second latency.
                </p>
              </div>
              
              <div className="relative overflow-hidden backdrop-blur-xl bg-glass-bg border border-glass-border rounded-3xl p-8 shadow-glass">
                <h3 className="text-2xl font-bold text-foreground mb-4 font-montserrat">Cricket LLM Engine</h3>
                <p className="text-foreground-muted leading-relaxed">
                  Engineered a proprietary model with dynamic prompt engineering, multi-layered validation, and fine-tuning on sports commentary and client's historical content.
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
            <h2 className="text-4xl sm:text-5xl font-bold text-brand-primary-dark mb-12 font-montserrat">
              Transforming a Cost Center Into a Growth Engine
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="relative overflow-hidden backdrop-blur-xl bg-glass-bg border border-glass-border rounded-3xl p-8 shadow-glass text-center">
                <h3 className="text-4xl font-bold text-brand-primary mb-2 font-montserrat">90%</h3>
                <p className="text-foreground-dark">Reduction in Operational Costs</p>
              </div>
              
              <div className="relative overflow-hidden backdrop-blur-xl bg-glass-bg border border-glass-border rounded-3xl p-8 shadow-glass text-center">
                <h3 className="text-4xl font-bold text-brand-primary mb-2 font-montserrat">15s</h3>
                <p className="text-foreground-dark">Tweet Generation Time</p>
              </div>
              
              <div className="relative overflow-hidden backdrop-blur-xl bg-glass-bg border border-glass-border rounded-3xl p-8 shadow-glass text-center">
                <h3 className="text-4xl font-bold text-brand-primary mb-2 font-montserrat">2 Months</h3>
                <p className="text-foreground-dark">Solution Delivery Time</p>
              </div>
            </div>
            
            <div className="text-left">
              <h3 className="text-2xl font-bold text-brand-primary-dark mb-6 font-montserrat">Key Outcomes:</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  "Comprehensive Success: Total automation of in-match tweet generation",
                  "Exceeded Expectations: Generated content in under 15 seconds",
                  "Solved Quickly: Complex 3-year challenge resolved in 2 months",
                  "Proven Scalability: Foundational platform for multi-sport expansion"
                ].map((achievement, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-brand-primary mt-0.5 flex-shrink-0" />
                    <span className="text-foreground-dark">{achievement}</span>
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
            Ready to Automate, Scale, and Lead with AI?
          </h2>
          <p className="text-xl text-foreground/80 mb-12 max-w-2xl mx-auto font-montserrat">
            We're ready to help transform your most complex AI challenges into major growth opportunities.
          </p>
          <Button variant="hero" size="xl">Get Started</Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default GrowCaseStudy;