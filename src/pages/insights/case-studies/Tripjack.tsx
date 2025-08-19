import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import LivingVoidBackground from '@/components/LivingVoidBackground';
import { ArrowLeft, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const TripjackCaseStudy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[65vh] min-h-[600px] overflow-hidden bg-gradient-hero">
        <LivingVoidBackground />
        
        <div className="relative z-10 container mx-auto px-6 lg:px-8 pt-32 pb-24">
          <div className="max-w-5xl mx-auto">
            <Link to="/insights/case-studies" className="inline-flex items-center text-brand-primary hover:text-brand-primary-dark transition-colors mb-8">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Case Studies
            </Link>
            
            <div className="mb-6">
              <span className="inline-block px-6 py-3 bg-brand-primary/10 text-brand-primary rounded-full text-sm font-medium border border-brand-primary/20 backdrop-blur-sm">
                Case Study: Grow Phase
              </span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-8 leading-tight tracking-tight animate-fade-in font-montserrat">
              TripJack: <br />
              <span className="bg-gradient-primary bg-clip-text text-transparent">Engineering the Platform for Next-Generation Travel</span>
            </h1>
            
            <p className="text-lg sm:text-xl lg:text-2xl text-foreground/85 mb-12 max-w-4xl leading-relaxed font-light animate-slide-up font-montserrat">
              How Indexnine's Expertise in Microservices and API Integration Reduced Time-to-Market by 75%, Powering TripJack's Expansion into New B2B2C Revenue Streams.
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
                <p className="text-foreground-muted mb-6">TripJack, one of India's largest and most influential B2B2C travel technology platforms.</p>
                <h3 className="text-xl font-semibold text-brand-primary-dark mb-4 font-montserrat">Industry</h3>
                <p className="text-foreground-muted">Travel & Tourism, E-commerce, SaaS</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-brand-primary-dark mb-4 font-montserrat">Challenge</h3>
                <p className="text-foreground-muted mb-6">As a high-growth platform, TripJack's monolithic architecture and manual integration processes were creating significant operational drag. The lengthy, multi-month timeline required to onboard new airline suppliers was a major bottleneck, hindering their ability to expand their product offerings and react to market changes.</p>
                <h3 className="text-xl font-semibold text-brand-primary-dark mb-4 font-montserrat">Solution</h3>
                <p className="text-foreground-muted">A strategic "Grow" and "Product Modernization" engagement. Indexnine architected and built a modern, event-driven, microservices-based integration hub to streamline supplier onboarding. In parallel, we developed their new flagship B2B2C platform, enabling them to enter the direct-to-consumer market for the first time.</p>
              </div>
            </div>
            
            <h3 className="text-2xl font-bold text-brand-primary-dark mb-6 font-montserrat">Key Outcomes:</h3>
            <div className="space-y-4">
              {[
                "75% Faster Time-to-Market: The new integration hub reduced the time to onboard new airline suppliers using the modern NDC protocol from over 3 months to just 3 weeks.",
                "New B2B2C Revenue Channel Launched: Successfully architected and delivered a scalable, user-centric B2C platform, opening up a significant new revenue stream for the business.",
                "Massively Improved Operational Efficiency: Replaced a brittle, manual integration process with a streamlined, automated, and scalable architecture, freeing up valuable engineering resources to focus on innovation.",
                "Future-Proofed for Industry Evolution: The modern, API-first architecture positions TripJack to rapidly adapt to future changes in travel technology standards and onboard new partners with unprecedented speed."
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
              The Challenge: The Growing Pains of a Market Leader
            </h2>
            <p className="text-lg text-foreground-dark leading-relaxed mb-8">
              TripJack had firmly established itself as a dominant force in India's B2B travel market. Their platform served as the critical technology backbone for thousands of travel agents, providing them with real-time access to a vast inventory of flights, hotels, and other travel products. They had successfully navigated the "Launch" and "Pivot" phases and were in a period of rapid growth.
            </p>
            <p className="text-lg text-foreground-dark leading-relaxed mb-8">
              However, this very success was exposing critical weaknesses in their underlying technology. Their platform, built on a traditional monolithic architecture, was struggling to keep pace with their business ambitions. They faced two primary challenges that were hindering their ability to execute on the "Grow" phase of their lifecycle:
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="relative overflow-hidden backdrop-blur-xl bg-glass-bg border border-glass-border rounded-3xl p-8 shadow-glass">
                <h4 className="text-xl font-bold text-foreground mb-4 font-montserrat">The Integration Bottleneck</h4>
                <p className="text-foreground-muted leading-relaxed">
                  The travel industry is a complex web of integrations with Global Distribution Systems (GDS) and, increasingly, direct connections to airlines via the New Distribution Capability (NDC) protocol. For TripJack, onboarding a new NDC airline was a painful, manual, and time-consuming process, often taking three to four months of dedicated engineering effort. This slow pace meant they were slow to add new products to their platform and were at risk of falling behind more agile competitors.
                </p>
              </div>
              
              <div className="relative overflow-hidden backdrop-blur-xl bg-glass-bg border border-glass-border rounded-3xl p-8 shadow-glass">
                <h4 className="text-xl font-bold text-foreground mb-4 font-montserrat">The B2C Ambition</h4>
                <p className="text-foreground-muted leading-relaxed">
                  TripJack's leadership had a clear strategic vision for growth: to expand beyond their B2B roots and launch a direct-to-consumer (B2C) platform. This would allow them to capture higher margins and build a direct relationship with travelers. However, their existing B2B-focused platform was not architected to handle the user experience demands, scalability requirements, or payment processing complexities of a consumer-facing product.
                </p>
              </div>
            </div>
            
            <p className="text-lg text-foreground-dark leading-relaxed">
              They needed a technology partner who could solve their immediate integration problem while simultaneously building the foundation for their future B2C business. This required a deep understanding of both complex, enterprise-grade integration and modern, user-centric product development.
            </p>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-24 lg:py-32 bg-background">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-8 font-montserrat">
              Our Solution: A Dual-Pronged Strategy for Growth and Efficiency
            </h2>
            <p className="text-lg text-foreground-muted leading-relaxed mb-12">
              This engagement was a perfect showcase for Indexnine's ability to execute on multiple strategic fronts simultaneously. We deployed our engineering pods to tackle both challenges in parallel, architecting solutions that were not only effective but also interconnected.
            </p>
            
            <div className="space-y-12">
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-6 font-montserrat">Pillar 1: Modernizing the Core with an Event-Driven Integration Hub</h3>
                <p className="text-foreground-muted leading-relaxed mb-6">
                  To solve the integration bottleneck, our Engineering Studio recognized that a series of one-off fixes would not suffice. The problem was architectural. We designed and built a new, modern integration hub based on a microservices and event-driven architecture.
                </p>
                
                <div className="bg-gradient-section rounded-3xl p-8 mb-8">
                  <h4 className="text-xl font-bold text-foreground mb-4 font-montserrat">Technical Architecture Transformation</h4>
                  <p className="text-foreground-dark mb-4">From a technical perspective, this new hub fundamentally changed how TripJack interacts with its airline partners:</p>
                </div>
                
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="relative overflow-hidden backdrop-blur-xl bg-glass-bg border border-glass-border rounded-3xl p-8 shadow-glass">
                    <h4 className="text-xl font-bold text-foreground mb-4 font-montserrat">Decoupled Microservices</h4>
                    <p className="text-foreground-muted leading-relaxed">
                      Instead of a single, monolithic block of code trying to handle dozens of different airline APIs, we built a collection of small, independent microservices. Each microservice was responsible for communicating with a single airline's NDC API.
                    </p>
                  </div>
                  
                  <div className="relative overflow-hidden backdrop-blur-xl bg-glass-bg border border-glass-border rounded-3xl p-8 shadow-glass">
                    <h4 className="text-xl font-bold text-foreground mb-4 font-montserrat">Canonical Data Model</h4>
                    <p className="text-foreground-muted leading-relaxed">
                      We worked with TripJack to define a single, standardized "canonical" data model for all core travel concepts (e.g., a "flight segment," a "passenger record," a "fare"). The job of each microservice was to translate the airline's unique API response into this standard format.
                    </p>
                  </div>
                  
                  <div className="relative overflow-hidden backdrop-blur-xl bg-glass-bg border border-glass-border rounded-3xl p-8 shadow-glass">
                    <h4 className="text-xl font-bold text-foreground mb-4 font-montserrat">Asynchronous Processing</h4>
                    <p className="text-foreground-muted leading-relaxed">
                      The hub was built on an asynchronous message queue. When a travel agent searches for a flight, the request is published as an event. Multiple airline microservices can then pick up this event, process the request in parallel, and publish their results back to the queue.
                    </p>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-6 font-montserrat">Pillar 2: Building the B2B2C Platform for a New Revenue Stream</h3>
                <p className="text-foreground-muted leading-relaxed mb-6">
                  While one team was modernizing the core, another was focused on building the future. Our product engineering pod worked to develop TripJack's new B2C travel booking platform. This was a classic "Grow" initiative, designed to create an entirely new revenue channel.
                </p>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="relative overflow-hidden backdrop-blur-xl bg-glass-bg border border-glass-border rounded-3xl p-8 shadow-glass">
                    <h4 className="text-xl font-bold text-foreground mb-4 font-montserrat">Modern User Experience</h4>
                    <p className="text-foreground-muted leading-relaxed">
                      Our Design Studio created an intuitive, responsive, and engaging user interface designed to make the complex process of booking travel simple and seamless for consumers.
                    </p>
                  </div>
                  
                  <div className="relative overflow-hidden backdrop-blur-xl bg-glass-bg border border-glass-border rounded-3xl p-8 shadow-glass">
                    <h4 className="text-xl font-bold text-foreground mb-4 font-montserrat">Scalable Cloud Architecture</h4>
                    <p className="text-foreground-muted leading-relaxed">
                      The platform was built on a scalable, cloud-native architecture designed to handle the unpredictable traffic patterns of a consumer-facing website.
                    </p>
                  </div>
                  
                  <div className="relative overflow-hidden backdrop-blur-xl bg-glass-bg border border-glass-border rounded-3xl p-8 shadow-glass">
                    <h4 className="text-xl font-bold text-foreground mb-4 font-montserrat">Secure Payment Integration</h4>
                    <p className="text-foreground-muted leading-relaxed">
                      We integrated multiple secure payment gateways, ensuring a smooth and trustworthy checkout experience for customers.
                    </p>
                  </div>
                  
                  <div className="relative overflow-hidden backdrop-blur-xl bg-glass-bg border border-glass-border rounded-3xl p-8 shadow-glass">
                    <h4 className="text-xl font-bold text-foreground mb-4 font-montserrat">Data Synergy</h4>
                    <p className="text-foreground-muted leading-relaxed">
                      Crucially, the new B2C platform was designed to consume data from the new, modern integration hub. This created a powerful synergy: the modernization work being done to improve the B2B business was simultaneously providing the clean, standardized data needed to power the new B2C growth engine.
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
              The Results: Accelerating Growth and Unlocking New Markets
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="relative overflow-hidden backdrop-blur-xl bg-glass-bg border border-glass-border rounded-3xl p-8 shadow-glass text-center">
                <h3 className="text-4xl font-bold text-brand-primary mb-2 font-montserrat">75%</h3>
                <p className="text-foreground-dark">Faster Time-to-Market</p>
              </div>
              
              <div className="relative overflow-hidden backdrop-blur-xl bg-glass-bg border border-glass-border rounded-3xl p-8 shadow-glass text-center">
                <h3 className="text-4xl font-bold text-brand-primary mb-2 font-montserrat">3 Weeks</h3>
                <p className="text-foreground-dark">vs 3+ Months Integration Time</p>
              </div>
              
              <div className="relative overflow-hidden backdrop-blur-xl bg-glass-bg border border-glass-border rounded-3xl p-8 shadow-glass text-center">
                <h3 className="text-4xl font-bold text-brand-primary mb-2 font-montserrat">B2C</h3>
                <p className="text-foreground-dark">New Revenue Channel</p>
              </div>
            </div>
            
            <div className="text-left">
              <h3 className="text-2xl font-bold text-brand-primary-dark mb-6 font-montserrat">Our multi-faceted partnership with TripJack delivered significant, measurable results:</h3>
              <div className="space-y-4">
                {[
                  "Dramatically Accelerated Product Expansion: By slashing the supplier integration timeline by 75%, we gave TripJack the ability to rapidly expand its product offerings and respond to market opportunities with unprecedented agility.",
                  "Successful Launch of a New Revenue Engine: We successfully delivered a robust and scalable B2C platform, enabling TripJack to enter the high-margin direct-to-consumer market and diversify its revenue streams.",
                  "Foundation for Future Innovation: The modern, microservices-based architecture we implemented has not only solved their immediate problems but has also provided them with a flexible and future-proof platform. They are now positioned to easily add new types of travel products, integrate with new partners, and continue to innovate at speed."
                ].map((result, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-brand-primary mt-0.5 flex-shrink-0" />
                    <span className="text-foreground-dark">{result}</span>
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
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-8 font-montserrat">
              Why It Worked: The Indexnine Difference
            </h2>
            <p className="text-lg text-foreground-muted leading-relaxed mb-12">
              The TripJack engagement is a powerful example of how Indexnine helps successful companies navigate the complex "Grow" phase of their lifecycle.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="relative overflow-hidden backdrop-blur-xl bg-glass-bg border border-glass-border rounded-3xl p-8 shadow-glass">
                <h3 className="text-xl font-bold text-foreground mb-4 font-montserrat">Deep Domain and Technical Expertise</h3>
                <p className="text-foreground-muted leading-relaxed">
                  This project required a deep understanding of the travel technology domain (NDC, GDS) combined with elite expertise in modern software architecture (microservices, event-driven systems). Our ability to bring both to the table was a key differentiator.
                </p>
              </div>
              
              <div className="relative overflow-hidden backdrop-blur-xl bg-glass-bg border border-glass-border rounded-3xl p-8 shadow-glass">
                <h3 className="text-xl font-bold text-foreground mb-4 font-montserrat">Strategic, Outcome-Centric Approach</h3>
                <p className="text-foreground-muted leading-relaxed">
                  We didn't just focus on the tactical request ("build a B2C app"). We understood the client's broader strategic goals and recognized that solving their core integration bottleneck was a prerequisite for successful growth.
                </p>
              </div>
              
              <div className="relative overflow-hidden backdrop-blur-xl bg-glass-bg border border-glass-border rounded-3xl p-8 shadow-glass">
                <h3 className="text-xl font-bold text-foreground mb-4 font-montserrat">Parallel Execution for Maximum Velocity</h3>
                <p className="text-foreground-muted leading-relaxed">
                  Our ability to deploy multiple, coordinated engineering pods allowed us to tackle both the core modernization and the new product development in parallel, delivering value on multiple fronts simultaneously and maximizing the client's speed to market.
                </p>
              </div>
              
              <div className="relative overflow-hidden backdrop-blur-xl bg-glass-bg border border-glass-border rounded-3xl p-8 shadow-glass">
                <h3 className="text-xl font-bold text-foreground mb-4 font-montserrat">Future-Proof Architecture</h3>
                <p className="text-foreground-muted leading-relaxed">
                  The modern, API-first architecture positions TripJack to rapidly adapt to future changes in travel technology standards and onboard new partners with unprecedented speed.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 lg:py-32 bg-gradient-hero relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/6 w-96 h-96 bg-brand-primary/8 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-1/4 right-1/6 w-80 h-80 bg-brand-purple/6 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
        </div>
        
        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg text-foreground-muted mb-8 font-montserrat">
              For any established e-commerce or travel technology company looking to break through growth plateaus, the TripJack story provides a clear roadmap. It demonstrates that by partnering with Indexnine to modernize core technology and streamline operations, companies can unlock new efficiencies and create powerful new engines for revenue growth.
            </p>
            
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-8 font-montserrat">
              Ready to turn your successful product into a scalable platform?
            </h2>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="xl" asChild>
                <Link to="/contact">
                  Start Your Growth Strategy
                </Link>
              </Button>
              <Button variant="hero-secondary" size="xl" asChild>
                <Link to="/insights/case-studies">
                  View More Case Studies
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TripjackCaseStudy;