import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ContentSidebar } from '@/components/ContentSidebar';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Clock, Users, Target, TrendingUp, Download } from 'lucide-react';

const GenesysModernization = () => {
  const [activeSection, setActiveSection] = useState<string>('');

  const sections = [
    { id: 'overview', title: 'Case Study Overview' },
    { 
      id: 'challenge', 
      title: 'The Challenge',
      subsections: [
        { id: 'business-failure', title: 'Imminent Business Failure' },
        { id: 'paralyzing-complexity', title: 'Paralyzing Complexity' },
        { id: 'constraints', title: 'The "No Big Bang" Constraint' }
      ]
    },
    { 
      id: 'solution', 
      title: 'Our Solution',
      subsections: [
        { id: 'phase-1', title: 'Phase 1: Architectural Strategy' },
        { id: 'phase-2', title: 'Phase 2: Technical Execution' }
      ]
    },
    { id: 'results', title: 'The Results' },
    { id: 'why-it-worked', title: 'Why It Worked' },
    { id: 'next-steps', title: 'Next Steps' }
  ];

  // Update active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sectionElements = sections.flatMap(section => [
        section,
        ...(section.subsections || [])
      ]);
      
      for (const section of sectionElements) {
        const element = document.getElementById(section.id);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Enhanced SEO: Article, Review, and Breadcrumb schema for case study credibility and AI visibility */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: 'Genesys - A Mission-Critical Modernization of a Legacy E-commerce Platform',
            description: 'How IndexNine\'s expertise in product modernization and event-driven architecture rescued a mission-critical integration hub from collapse, ensuring business continuity for thousands of merchants.',
            url: 'https://yoursite.lovable.app/insights/case-study/genesys-modernization',
            datePublished: '2024-12-01T00:00:00Z',
            dateModified: '2024-12-01T00:00:00Z',
            author: {
              '@type': 'Organization',
              name: 'IndexNine Technologies'
            },
            publisher: {
              '@type': 'Organization',
              name: 'IndexNine Technologies',
              logo: {
                '@type': 'ImageObject',
                url: 'https://yoursite.lovable.app/logo.png'
              }
            },
            mainEntityOfPage: {
              '@type': 'WebPage',
              '@id': 'https://yoursite.lovable.app/insights/case-study/genesys-modernization'
            },
            about: {
              '@type': 'Service',
              name: 'Product Modernization Services',
              description: 'Enterprise-grade product modernization and legacy system transformation'
            }
          })
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Review',
            itemReviewed: {
              '@type': 'Service',
              name: 'Product Modernization Services by IndexNine Technologies'
            },
            reviewRating: {
              '@type': 'Rating',
              ratingValue: 5,
              bestRating: 5
            },
            reviewBody: 'IndexNine\'s product modernization expertise transformed our legacy platform, achieving near-100% uptime and future-proofing our infrastructure with zero downtime migration.',
            author: {
              '@type': 'Organization',
              name: 'Genesys E-commerce Platform'
            },
            datePublished: '2024-12-01T00:00:00Z'
          })
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              {
                '@type': 'ListItem',
                position: 1,
                name: 'Home',
                item: 'https://yoursite.lovable.app/'
              },
              {
                '@type': 'ListItem',
                position: 2,
                name: 'Insights',
                item: 'https://yoursite.lovable.app/insights'
              },
              {
                '@type': 'ListItem',
                position: 3,
                name: 'Case Studies',
                item: 'https://yoursite.lovable.app/insights/case-studies'
              },
              {
                '@type': 'ListItem',
                position: 4,
                name: 'Genesys Modernization',
                item: 'https://yoursite.lovable.app/insights/case-study/genesys-modernization'
              }
            ]
          })
        }}
      />

      <div className="flex">
        {/* Sidebar */}
        <ContentSidebar
          sections={sections}
          activeSection={activeSection}
          onSectionClick={setActiveSection}
        />

        {/* Main Content */}
        <div className="flex-1 lg:ml-80">
          {/* Back Navigation */}
          <div className="pt-24 pb-8 bg-background border-b border-glass-border">
            <div className="container mx-auto px-6 lg:px-8">
              <Link 
                to="/insights/case-studies" 
                className="inline-flex items-center text-brand-primary hover:text-brand-primary/80 transition-colors"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                <span className="font-montserrat">Back to Case Studies</span>
              </Link>
            </div>
          </div>

          {/* Article Header */}
          <article className="py-12">
            <div className="container mx-auto px-6 lg:px-8 max-w-4xl">
              <header className="mb-12">
                <div className="mb-6 flex flex-wrap gap-2">
                  <span className="text-sm bg-brand-primary/10 text-brand-primary px-3 py-1 rounded-full font-montserrat">
                    E-commerce Technology
                  </span>
                  <span className="text-sm bg-brand-purple/10 text-brand-purple px-3 py-1 rounded-full font-montserrat">
                    Product Modernization
                  </span>
                </div>
                
                <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-4 font-montserrat leading-tight">
                  Genesys - A Mission-Critical Modernization of a Legacy E-commerce Platform
                </h1>
                
                <p className="text-xl text-foreground-muted mb-8 leading-relaxed font-montserrat">
                  How Indexnine's Expertise in Product Modernization and Event-Driven Architecture Rescued a 
                  Mission-Critical Integration Hub from Collapse, Ensuring Business Continuity for Thousands of Merchants.
                </p>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                  <div className="bg-gradient-card backdrop-blur-xl rounded-xl p-4 border border-glass-border text-center">
                    <Clock className="w-6 h-6 text-brand-primary mx-auto mb-2" />
                    <div className="text-sm font-medium text-foreground">Duration</div>
                    <div className="text-lg font-bold text-brand-primary">18 months</div>
                  </div>
                  <div className="bg-gradient-card backdrop-blur-xl rounded-xl p-4 border border-glass-border text-center">
                    <Users className="w-6 h-6 text-brand-primary mx-auto mb-2" />
                    <div className="text-sm font-medium text-foreground">Team Size</div>
                    <div className="text-lg font-bold text-brand-primary">12 engineers</div>
                  </div>
                  <div className="bg-gradient-card backdrop-blur-xl rounded-xl p-4 border border-glass-border text-center">
                    <Target className="w-6 h-6 text-brand-primary mx-auto mb-2" />
                    <div className="text-sm font-medium text-foreground">Industry</div>
                    <div className="text-lg font-bold text-brand-primary">E-commerce SaaS</div>
                  </div>
                  <div className="bg-gradient-card backdrop-blur-xl rounded-xl p-4 border border-glass-border text-center">
                    <TrendingUp className="w-6 h-6 text-brand-primary mx-auto mb-2" />
                    <div className="text-sm font-medium text-foreground">Integrations</div>
                    <div className="text-lg font-bold text-brand-primary">178 APIs</div>
                  </div>
                </div>
              </header>

              {/* Article Content */}
              <div className="prose prose-lg max-w-none">
                
                <section id="overview" className="mb-16">
                  <h2 className="text-3xl font-bold text-foreground mb-6 font-montserrat">Case Study Overview</h2>
                  <div className="bg-gradient-card backdrop-blur-xl rounded-2xl p-8 border border-glass-border">
                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <h3 className="text-lg font-semibold text-foreground mb-4 font-montserrat">Client</h3>
                        <p className="text-foreground-muted mb-6">Genesys - A leading e-commerce integration platform serving thousands of merchants across India</p>
                        
                        <h3 className="text-lg font-semibold text-foreground mb-4 font-montserrat">Challenge</h3>
                        <p className="text-foreground-muted">
                          A 16-year-old, mission-critical e-commerce integration platform, written in legacy PHP, was 
                          experiencing daily failures. Its monolithic architecture could not handle the complexity of 
                          its 178 real-time integrations, threatening catastrophic business disruption.
                        </p>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-foreground mb-4 font-montserrat">Solution</h3>
                        <p className="text-foreground-muted mb-6">
                          A strategic Product Modernization/Refresh engagement. Indexnine architected and implemented 
                          a modern, event-driven integration hub to decouple the legacy core from its volatile external 
                          dependencies, followed by a phased and meticulous migration of all 178 integrations.
                        </p>
                        
                        <h3 className="text-lg font-semibold text-foreground mb-4 font-montserrat">Key Outcomes</h3>
                        <ul className="text-foreground-muted space-y-2">
                          <li>• Averted Business Collapse</li>
                          <li>• Achieved Near-100% Uptime</li>
                          <li>• Future-Proofed the Platform</li>
                          <li>• Zero-Downtime Migration</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </section>

                <section id="challenge" className="mb-16">
                  <h2 className="text-3xl font-bold text-foreground mb-6 font-montserrat">The Challenge: A Platform on the Brink of Collapse</h2>
                  <div className="space-y-6 text-foreground-muted leading-relaxed">
                    <p>
                      For thousands of merchants across India, Genesys's platform was their lifeline to the world of 
                      e-commerce. The platform was an integration engine, connecting sellers on platforms like Amazon, 
                      Myntra, and Flipkart, and managing a constant flow of inventory updates, orders, and transactions. 
                      The problem? This mission-critical engine was 16 years old, built on legacy PHP, and was, in the 
                      words of our CEO, "creaking at the seams."
                    </p>
                    <p>
                      The platform's core architectural flaw was its tightly-coupled, monolithic design. With 178 different 
                      e-commerce integrations, the system was incredibly fragile. Every time one of the 178 partners made 
                      a change to their API—an almost daily occurrence—it sent a shockwave through the entire system, 
                      causing it to crash. These failures were happening most often at night, during the peak period for 
                      inventory updates, causing maximum disruption.
                    </p>
                  </div>

                  <div className="grid md:grid-cols-3 gap-6 mt-8">
                    <div id="business-failure" className="bg-gradient-card backdrop-blur-xl rounded-xl p-6 border border-glass-border">
                      <h3 className="text-lg font-semibold text-foreground mb-3 font-montserrat">Imminent Business Failure</h3>
                      <p className="text-foreground-muted text-sm">
                        The daily crashes were eroding merchant trust and causing direct revenue loss. The platform was 
                        on a trajectory toward total collapse.
                      </p>
                    </div>
                    <div id="paralyzing-complexity" className="bg-gradient-card backdrop-blur-xl rounded-xl p-6 border border-glass-border">
                      <h3 className="text-lg font-semibold text-foreground mb-3 font-montserrat">Paralyzing Complexity</h3>
                      <p className="text-foreground-muted text-sm">
                        The system was so interconnected and fragile that making any changes was fraught with risk, 
                        stifling innovation and preventing them from adding new, valuable integrations.
                      </p>
                    </div>
                    <div id="constraints" className="bg-gradient-card backdrop-blur-xl rounded-xl p-6 border border-glass-border">
                      <h3 className="text-lg font-semibold text-foreground mb-3 font-montserrat">The "No Big Bang" Constraint</h3>
                      <p className="text-foreground-muted text-sm">
                        Given its mission-critical nature, taking the system offline for a complete rewrite was not an 
                        option. They needed a partner who could perform open-heart surgery on a live, complex system 
                        without missing a beat.
                      </p>
                    </div>
                  </div>
                </section>

                <section id="solution" className="mb-16">
                  <h2 className="text-3xl font-bold text-foreground mb-6 font-montserrat">Our Solution: Architecting Stability with an Event-Driven Integration Hub</h2>
                  <div className="space-y-6 text-foreground-muted leading-relaxed">
                    <p>
                      This was a classic Product Modernization challenge, requiring a solution that was as much about 
                      strategic de-risking as it was about technical execution. A simple "lift and shift" or a rewrite 
                      was impossible. We needed to architect a new system that could be introduced piece by piece, 
                      isolating the fragile core from the chaos of its external environment.
                    </p>
                  </div>

                  <div id="phase-1" className="mt-12">
                    <h3 className="text-2xl font-bold text-foreground mb-6 font-montserrat">Phase 1: Architectural Strategy - The Event-Driven Approach</h3>
                    <div className="bg-gradient-card backdrop-blur-xl rounded-xl p-8 border border-glass-border">
                      <p className="text-foreground-muted mb-6">
                        Our Engineering and Applied AI studios determined that the only viable path forward was to introduce 
                        a new architectural pattern: an event-driven integration hub. The concept is simple in theory but 
                        complex in execution.
                      </p>
                      <p className="text-foreground-muted mb-6">
                        Instead of having 178 integrations all communicating directly and chaotically with the legacy core, 
                        we would build a modern, robust "clearing house" that would sit in the middle. This hub would be 
                        responsible for consuming all incoming messages and events from the external e-commerce platforms. 
                        It would then validate, transform, and standardize these messages before passing them along to the 
                        core application in a format it could safely handle.
                      </p>
                      <p className="text-foreground-muted">
                        This decoupled architecture would act as a protective buffer, absorbing the shock of any external 
                        API changes and ensuring the legacy core remained stable.
                      </p>
                    </div>
                  </div>

                  <div id="phase-2" className="mt-12">
                    <h3 className="text-2xl font-bold text-foreground mb-6 font-montserrat">Phase 2: The Technical Execution - Building a Resilient, Scalable Hub</h3>
                    <div className="space-y-6">
                      <div className="bg-gradient-card backdrop-blur-xl rounded-xl p-6 border border-glass-border">
                        <h4 className="text-lg font-semibold text-foreground mb-3 font-montserrat">Asynchronous Message Queues</h4>
                        <p className="text-foreground-muted text-sm">
                          At the heart of the hub, we implemented a high-throughput message queueing system (akin to 
                          technologies like Apache Kafka or RabbitMQ). This allows the hub to ingest millions of events 
                          per minute from the external partners without being overwhelmed.
                        </p>
                      </div>
                      <div className="bg-gradient-card backdrop-blur-xl rounded-xl p-6 border border-glass-border">
                        <h4 className="text-lg font-semibold text-foreground mb-3 font-montserrat">A Standardized "Canonical" Data Model</h4>
                        <p className="text-foreground-muted text-sm">
                          We designed a single, standardized data model—a "canonical model"—for every type of event 
                          (e.g., "inventory update," "new order"). Each message entering the hub would be transformed 
                          into this standard format.
                        </p>
                      </div>
                      <div className="bg-gradient-card backdrop-blur-xl rounded-xl p-6 border border-glass-border">
                        <h4 className="text-lg font-semibold text-foreground mb-3 font-montserrat">Microservices for Transformation</h4>
                        <p className="text-foreground-muted text-sm">
                          We built a series of small, independent microservices, each responsible for transforming messages 
                          from a specific e-commerce platform into the canonical model. This design meant that if Amazon 
                          changed its API, we only had to update one small, isolated microservice.
                        </p>
                      </div>
                      <div className="bg-gradient-card backdrop-blur-xl rounded-xl p-6 border border-glass-border">
                        <h4 className="text-lg font-semibold text-foreground mb-3 font-montserrat">A Phased, Zero-Downtime Rollout</h4>
                        <p className="text-foreground-muted text-sm">
                          We worked with Genesys to execute a meticulous, channel-by-channel rollout. We would redirect 
                          one integration at a time to the new hub, rigorously test its performance, and only then move 
                          to the next.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                <section id="results" className="mb-16">
                  <h2 className="text-3xl font-bold text-foreground mb-6 font-montserrat">The Results: From Constant Crisis to a Foundation for Growth</h2>
                  <div className="space-y-6 text-foreground-muted leading-relaxed">
                    <p>
                      Our engagement with Genesys pulled their most critical platform back from the brink and 
                      repositioned it for a stable, scalable future.
                    </p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6 mt-8">
                    <div className="bg-gradient-card backdrop-blur-xl rounded-xl p-6 border border-glass-border">
                      <h3 className="text-lg font-semibold text-foreground mb-3 font-montserrat">Eliminated Critical Downtime</h3>
                      <p className="text-foreground-muted text-sm mb-4">
                        The new event-driven architecture immediately stabilized the system. The daily crashes ceased, 
                        restoring trust with their merchants and preventing catastrophic revenue loss.
                      </p>
                      <div className="text-2xl font-bold text-brand-primary">~100% Uptime</div>
                    </div>
                    <div className="bg-gradient-card backdrop-blur-xl rounded-xl p-6 border border-glass-border">
                      <h3 className="text-lg font-semibold text-foreground mb-3 font-montserrat">Created a Scalable, Future-Proof Platform</h3>
                      <p className="text-foreground-muted text-sm mb-4">
                        The brittle, monolithic architecture was replaced by a modern, decoupled system. Adding new 
                        integrations, once a high-risk, multi-month endeavor, is now a safe, streamlined process.
                      </p>
                      <div className="text-2xl font-bold text-brand-primary">75% Faster</div>
                    </div>
                    <div className="bg-gradient-card backdrop-blur-xl rounded-xl p-6 border border-glass-border">
                      <h3 className="text-lg font-semibold text-foreground mb-3 font-montserrat">Provided Business-Critical Stability</h3>
                      <p className="text-foreground-muted text-sm mb-4">
                        We solved the client's most pressing technical and business challenge, ensuring the continuity 
                        of the platform that their entire operation depends on.
                      </p>
                      <div className="text-2xl font-bold text-brand-primary">Zero Downtime</div>
                    </div>
                    <div className="bg-gradient-card backdrop-blur-xl rounded-xl p-6 border border-glass-border">
                      <h3 className="text-lg font-semibold text-foreground mb-3 font-montserrat">Demonstrated Complex Modernization Expertise</h3>
                      <p className="text-foreground-muted text-sm mb-4">
                        We proved our ability to handle one of the most difficult challenges in software engineering: 
                        modernizing a complex, mission-critical legacy system while it is still running.
                      </p>
                      <div className="text-2xl font-bold text-brand-primary">178 Integrations</div>
                    </div>
                  </div>
                </section>

                <section id="why-it-worked" className="mb-16">
                  <h2 className="text-3xl font-bold text-foreground mb-6 font-montserrat">Why It Worked: The Indexnine Difference</h2>
                  <div className="space-y-6 text-foreground-muted leading-relaxed">
                    <p>
                      The success of the Genesys engagement was a direct result of our mature engineering practices 
                      and strategic mindset.
                    </p>
                  </div>

                  <div className="space-y-6 mt-8">
                    <div className="bg-gradient-card backdrop-blur-xl rounded-xl p-6 border border-glass-border">
                      <h3 className="text-lg font-semibold text-foreground mb-3 font-montserrat">Deep Architectural Expertise</h3>
                      <p className="text-foreground-muted">
                        This problem could not be solved by simply adding more developers. It required a deep, 
                        architectural understanding of event-driven systems, microservices, and complex data transformations.
                      </p>
                    </div>
                    <div className="bg-gradient-card backdrop-blur-xl rounded-xl p-6 border border-glass-border">
                      <h3 className="text-lg font-semibold text-foreground mb-3 font-montserrat">A Disciplined, Risk-Averse Process</h3>
                      <p className="text-foreground-muted">
                        Our phased, channel-by-channel migration strategy was essential for a project of this risk profile. 
                        We prioritized stability and business continuity above all else.
                      </p>
                    </div>
                    <div className="bg-gradient-card backdrop-blur-xl rounded-xl p-6 border border-glass-border">
                      <h3 className="text-lg font-semibold text-foreground mb-3 font-montserrat">A True Partnership Approach</h3>
                      <p className="text-foreground-muted">
                        We embedded ourselves within the client's team, working as a single, unified unit to tackle this 
                        immense challenge. Our transparent communication and shared sense of ownership were key to 
                        navigating the project's complexities.
                      </p>
                    </div>
                  </div>
                </section>

                <section id="next-steps" className="mb-16">
                  <div className="bg-gradient-hero rounded-3xl p-12 text-center">
                    <h2 className="text-3xl font-bold text-foreground-white mb-6 font-montserrat">
                      Is your legacy platform creating risk instead of value?
                    </h2>
                    <p className="text-xl text-foreground-white/80 mb-8 max-w-2xl mx-auto">
                      The Genesys story is a powerful testament to our capabilities in the "Product Modernization" phase 
                      of the product lifecycle. We don't just build new things; we have the deep expertise to rescue, 
                      rebuild, and future-proof the complex, mission-critical systems that established businesses rely on.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <Button variant="hero" size="xl">
                        Contact Indexnine to Discuss Modernization
                      </Button>
                      <Button variant="outline" size="xl" className="border-white/20 text-white hover:bg-white/10">
                        <Download className="w-4 h-4 mr-2" />
                        Download Case Study PDF
                      </Button>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </article>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default GenesysModernization;