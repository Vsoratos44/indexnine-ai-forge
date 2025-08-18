import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import LivingVoidBackground from '@/components/LivingVoidBackground';
import { ArrowLeft, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const MatureCaseStudy = () => {
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
                Case Study: Mature Phase
              </span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground-white mb-8 leading-tight tracking-tight animate-fade-in font-montserrat">
              Mission-Critical Modernization: <br />
              <span className="bg-gradient-primary bg-clip-text text-transparent">Genesys E-commerce Platform</span>
            </h1>
            
            <p className="text-lg sm:text-xl lg:text-2xl text-foreground-white/85 mb-12 max-w-4xl leading-relaxed font-light animate-slide-up font-montserrat">
              Product modernization and event-driven architecture for a new era of an E-commerce giant.
            </p>
          </div>
        </div>
      </section>

      {/* Challenge Section */}
      <section className="py-24 lg:py-32 bg-gradient-section relative overflow-hidden">
        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl sm:text-5xl font-bold text-brand-primary-dark mb-8 font-montserrat">
              The Challenge: A Platform on the Brink of Collapse
            </h2>
            <p className="text-lg text-foreground-dark leading-relaxed mb-8">
              For thousands of merchants across India, Genesys's platform was their lifeline to the world of e-commerce. The platform was an integration engine, connecting sellers on platforms like Amazon, Myntra, and Flipkart, and managing a constant flow of inventory updates, orders, and transactions. The problem? The engine was over 16 years old, built on legacy PHP, and was, in the words of our CEO, "bursting at the seams."
            </p>
            <p className="text-lg text-foreground-dark leading-relaxed mb-8">
              The platform's core architectural flaw was a tightly-coupled, monolithic design. With 178 different e-commerce integrations, the system was incredibly fragile. Every time one of those partners made a change to their API—an almost daily occurrence—it sent a shockwave through the entire system, causing it to crash. These failures happened most often at night, the peak period for inventory updates, causing further disruption. Suffice it to say, the infrastructure needed an update.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="relative overflow-hidden backdrop-blur-xl bg-glass-bg border border-glass-border rounded-3xl p-6 shadow-glass transition-all duration-500 transform group hover:scale-105 hover:shadow-glass-lg hover:border-brand-primary/30">
                <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/5 via-transparent to-brand-purple/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <h4 className="relative text-lg font-semibold text-brand-primary-dark mb-2 font-montserrat">Legacy System</h4>
                <p className="relative text-foreground-dark text-sm">16-year-old PHP monolith struggling with daily failures</p>
              </div>
              <div className="relative overflow-hidden backdrop-blur-xl bg-glass-bg border border-glass-border rounded-3xl p-6 shadow-glass transition-all duration-500 transform group hover:scale-105 hover:shadow-glass-lg hover:border-brand-primary/30">
                <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/5 via-transparent to-brand-purple/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <h4 className="relative text-lg font-semibold text-brand-primary-dark mb-2 font-montserrat">178 Integrations</h4>
                <p className="relative text-foreground-dark text-sm">Fragile connections to e-commerce platforms causing system-wide crashes</p>
              </div>
              <div className="relative overflow-hidden backdrop-blur-xl bg-glass-bg border border-glass-border rounded-3xl p-6 shadow-glass transition-all duration-500 transform group hover:scale-105 hover:shadow-glass-lg hover:border-brand-primary/30">
                <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/5 via-transparent to-brand-purple/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <h4 className="relative text-lg font-semibold text-brand-primary-dark mb-2 font-montserrat">Daily Crashes</h4>
                <p className="relative text-foreground-dark text-sm">Peak-time failures during critical inventory update periods</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-24 lg:py-32 bg-background">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl sm:text-5xl font-bold text-brand-primary-dark mb-8 font-montserrat">
              Our Solution: Architecting Stability with an Event-Driven Integration Hub
            </h2>
            <p className="text-lg text-foreground-muted leading-relaxed mb-12">
              As a product modernization challenge, it required a solution as much about risk reduction as technical execution. A simple "lift and shift" or rewrite was untenable. We needed new system architecture that could be introduced piece by piece, protecting the core from the chaos of its surrounding external environment.
            </p>
            
            <div className="space-y-12">
              <div>
                <h3 className="text-2xl font-bold text-foreground-dark mb-6 font-montserrat">Phase 1: Event-Driven Architecture</h3>
                <p className="text-foreground-muted leading-relaxed mb-6">
                  Our Engineering and Applied AI studios determined that the optimal path forward would be to introduce a new architectural pattern: an event-driven integration hub. Instead of having all 178 integrations communicating directly with the legacy core, we would build a modern, robust hub – essentially a clearing house – that would sit in the operational center.
                </p>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold text-foreground-dark mb-6 font-montserrat">Phase 2: Building a Resilient, Scalable Hub</h3>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="relative overflow-hidden backdrop-blur-xl bg-glass-bg border border-glass-border rounded-3xl p-8 shadow-glass">
                    <h4 className="text-xl font-bold text-brand-primary-dark mb-4 font-montserrat">Asynchronous Message Queues</h4>
                    <p className="text-foreground-muted leading-relaxed">
                      High-throughput message queueing system to ingest millions of events per minute without system overload.
                    </p>
                  </div>
                  
                  <div className="relative overflow-hidden backdrop-blur-xl bg-glass-bg border border-glass-border rounded-3xl p-8 shadow-glass">
                    <h4 className="text-xl font-bold text-brand-primary-dark mb-4 font-montserrat">Canonical Data Model</h4>
                    <p className="text-foreground-muted leading-relaxed">
                      Standardized data format eliminating the need for the core to understand 178 different message types.
                    </p>
                  </div>
                  
                  <div className="relative overflow-hidden backdrop-blur-xl bg-glass-bg border border-glass-border rounded-3xl p-8 shadow-glass">
                    <h4 className="text-xl font-bold text-brand-primary-dark mb-4 font-montserrat">Microservices for Transformation</h4>
                    <p className="text-foreground-muted leading-relaxed">
                      Independent services for each platform transformation, isolating changes and eliminating system-wide risk.
                    </p>
                  </div>
                  
                  <div className="relative overflow-hidden backdrop-blur-xl bg-glass-bg border border-glass-border rounded-3xl p-8 shadow-glass">
                    <h4 className="text-xl font-bold text-brand-primary-dark mb-4 font-montserrat">Zero-Downtime Rollout</h4>
                    <p className="text-foreground-muted leading-relaxed">
                      Channel-by-channel migration strategy ensuring uninterrupted business continuity throughout the project.
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
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl sm:text-5xl font-bold text-brand-primary-dark mb-12 font-montserrat text-center">
              The Results: A Foundation for Future Growth
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="relative overflow-hidden backdrop-blur-xl bg-glass-bg border border-glass-border rounded-3xl p-8 shadow-glass text-center transition-all duration-500 transform group hover:scale-105 hover:shadow-glass-lg hover:border-brand-primary/30">
                <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/5 via-transparent to-brand-purple/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <h3 className="relative text-4xl font-bold text-brand-primary mb-2 font-montserrat">100%</h3>
                <p className="relative text-foreground-dark font-semibold">Uptime Achieved</p>
                <p className="relative text-sm text-foreground-dark mt-2">Eliminated daily crashes and system failures</p>
              </div>
              
              <div className="relative overflow-hidden backdrop-blur-xl bg-glass-bg border border-glass-border rounded-3xl p-8 shadow-glass text-center transition-all duration-500 transform group hover:scale-105 hover:shadow-glass-lg hover:border-brand-primary/30">
                <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/5 via-transparent to-brand-purple/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <h3 className="relative text-4xl font-bold text-brand-primary mb-2 font-montserrat">178</h3>
                <p className="relative text-foreground-dark font-semibold">Integrations Migrated</p>
                <p className="relative text-sm text-foreground-dark mt-2">Zero-downtime migration of all e-commerce connections</p>
              </div>
            </div>
            
            <div className="text-left">
              <h3 className="text-2xl font-bold text-brand-primary-dark mb-6 font-montserrat">Key Outcomes:</h3>
              <div className="space-y-4">
                {[
                  "Seamless continuity of operations: Our solution transformed a failing system into a fully operational one (with no downtime!), ensuring operational stability and preventing significant revenue loss for the client and their thousands of merchants.",
                  "Achieved Near-100% Uptime: The new event-driven architecture eliminated the daily crashes, dramatically increasing the platform's reliability and performance.",
                  "Future-Proofed: Replacing a brittle, monolithic structure with modern architecture made the system faster, smoother, and safer to add new e-commerce integrations in the future while opening up a new frontier of scalability.",
                  "Zero-Downtime Migration: Our team modernized a core piece of live infrastructure without disrupting ongoing business operations."
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

      {/* Why It Worked Section */}
      <section className="py-24 lg:py-32 bg-background">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl sm:text-5xl font-bold text-brand-primary-dark mb-8 font-montserrat">
              Why It Worked
            </h2>
            <p className="text-lg text-foreground-muted leading-relaxed mb-8">
              The success of the Genesys engagement was a direct result of our engineering practices and strategic mindset.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="relative overflow-hidden backdrop-blur-xl bg-glass-bg border border-glass-border rounded-3xl p-8 shadow-glass">
                <h3 className="text-xl font-bold text-brand-primary-dark mb-4 font-montserrat">In-Depth Architectural Expertise</h3>
                <p className="text-foreground-muted leading-relaxed">
                  This problem required the kind of deep understanding of event-driven systems, microservices, and complex data transformations that Indexnine cultivates in our talent pool.
                </p>
              </div>
              
              <div className="relative overflow-hidden backdrop-blur-xl bg-glass-bg border border-glass-border rounded-3xl p-8 shadow-glass">
                <h3 className="text-xl font-bold text-brand-primary-dark mb-4 font-montserrat">Disciplined and De-risked</h3>
                <p className="text-foreground-muted leading-relaxed">
                  Our phased, channel-by-channel migration strategy was essential for a project of this risk profile. Understanding the needs of our client, we prioritized stability and business continuity without compromising on engineering excellence.
                </p>
              </div>
              
              <div className="relative overflow-hidden backdrop-blur-xl bg-glass-bg border border-glass-border rounded-3xl p-8 shadow-glass">
                <h3 className="text-xl font-bold text-brand-primary-dark mb-4 font-montserrat">A True Partnership Approach</h3>
                <p className="text-foreground-muted leading-relaxed">
                  We embedded ourselves within the client's team, working as a single, unified unit to tackle this immense challenge. Our transparent communication and shared sense of ownership were key to navigating the project's complexities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 lg:py-32 bg-gradient-hero">
        <div className="container mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-8 font-montserrat">
            Ready to Modernize Your Platform?
          </h2>
          <p className="text-xl text-foreground/80 mb-12 max-w-2xl mx-auto font-montserrat">
            Transform your legacy systems with our proven architectural expertise and de-risked migration strategies.
          </p>
          <Button variant="hero" size="xl">Get started today</Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default MatureCaseStudy;