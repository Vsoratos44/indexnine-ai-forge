import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { WebPageSchema, BreadcrumbSchema } from '@/components/SEOStructuredData';
import { Target, TrendingUp, Clock, Users, Download, ExternalLink, ChevronDown, ChevronUp } from 'lucide-react';

const CaseStudies = () => {
  const [expandedStudy, setExpandedStudy] = useState<string | null>(null);

  /**
   * Case Studies Data Structure
   * Each case study is mapped to specific service categories and homepage sections
   * for optimal internal linking and SEO performance
   */
  const caseStudies = [
    {
      id: "annotate",
      title: "Annotate - Launching AI-Powered Disruption in Philanthropic Finance",
      subtitle: "Taking a bold idea of democratized financial research from launch to market-ready MVP.",
      client: "Annotate (Anonymized)",
      industry: "Wealth Management, Philanthropy",
      challenge: "The process for prospective donors to access reliable research on charitable organizations was controlled by expensive consultants, creating a bottleneck in the market. Annotate wanted to build a platform that could disrupt this model by delivering the same, or better, insights at a fraction of the cost.",
      solution: "A strategic engagement with Indexnine's Launch services, starting with our proprietary Sprint Zero framework to define the MVP, followed by the rapid development of a sophisticated AI research agent built on retrieval-augmented generation (RAG) architecture.",
      results: [
        "Market-Ready MVP Launched: Successfully delivering a functional, AI-powered platform validated the core business model",
        "99% Cost Reduction for End-Users: The platform delivers research reports for ~$500 vs industry-standard $20,000-$50,000",
        "Complex Data Problem Solved: Engineered robust data pipeline for diverse data types into reliable insights",
        "Created a Reliable Tech Moat: Built proprietary AI engine serving as core intellectual property"
      ],
      duration: "6 months",
      teamSize: "5 engineers",
      category: "launch",
      serviceType: "Custom Software",
      homePageLink: "/#launch", // Links to launch section on homepage
      serviceLink: "/services/custom-software",
      detailedContent: {
        challenge: "In the upper echelons of philanthropic contributions, making informed decisions is a surprisingly expensive and archaic process. An individual or family looking to donate major funding to a charitable cause would typically hire a specialized consultant. The consultant would then spend weeks or months manually conducting research, analyzing financial statements, and compiling a detailed report. This service alone would cost tens of thousands of dollars.",
        approach: [
          "Sprint Zero - De-Risking the Vision and Defining the MVP",
          "Technical Architecture - Engineering an AI Research Agent", 
          "RAG-Powered Conversational Agent Implementation"
        ],
        technicalDetails: "Built a sophisticated, multi-stage data pipeline feeding into a custom RAG system with intelligent data ingestion, advanced entity extraction, unified vectorization, and a RAG-powered conversational agent.",
        whyItWorked: [
          "A Disciplined Launch Process with Sprint Zero framework",
          "Deep AI and Data Expertise with specialized Applied AI teams",
          "The Agentic AI Pod deployment",
          "A True Founder's Mindset as strategic partners"
        ]
      }
    },
    {
      id: "zilla",
      title: "Zilla Security - Engineering the Perfect Pivot",
      subtitle: "Indexnine's strategic product engineering transformed a niche auditing tool into a mission-critical identity platform.",
      client: "Zilla Security",
      industry: "Cybersecurity (Identity & Access Management)",
      challenge: "The client had built an auditing product capable of identifying critical security gaps, but not solving them. With strong demand from existing users and potential new customers, Zilla wanted a solution that could capitalize on this major opportunity.",
      solution: "A multi-year strategic engagement with Indexnine to architect and execute a complex product pivot. This involved engineering a secure, scalable provisioning engine from the ground up and continuous product modernization.",
      results: [
        "Mission-Critical Integration: Evolved from supplemental visibility tool to indispensable core operational system",
        "Upgraded Scope, Expanded Value: Transformed into comprehensive Identity Governance platform",
        "Enterprise Architecture: Delivered robust, secure, scalable platform meeting rigorous standards",
        "Successful $165M+ Acquisition: Enabled acquisition by global identity security leader"
      ],
      duration: "24 months",
      teamSize: "8 engineers",
      category: "pivot",
      serviceType: "Custom Software",
      homePageLink: "/#pivot", // Links to pivot section on homepage
      serviceLink: "/services/custom-software",
      detailedContent: {
        challenge: "Zilla found itself with a product that could show customers their security problems. Now, they needed the product to offer security solutions. This customer friction could prove a roadblock to continued growth and a potential threat to the company's long-term viability.",
        approach: [
          "Strategic Workshops and Product Vision Mapping",
          "Enterprise-Grade Provisioning Engine Development",
          "Continuous Product Modernization"
        ],
        technicalDetails: "Architected API integration at enterprise scale, transactional state management, security-first zero-trust design, and scalable microservices architecture.",
        whyItWorked: [
          "Product-centric Development with customer feedback integration",
          "Deep Engineering Expertise in enterprise security",
          "Partnership Across the Product Lifecycle",
          "A Founder's Mindset with strategic ownership"
        ]
      }
    },
    {
      id: "spplus",
      title: "SP+ - Driving a $2M+ ROI Through Cloud Modernization",
      subtitle: "How Indexnine's Cloud and Data Engineering Expertise Transformed a Legacy System into a Revenue-Generating Platform.",
      client: "SP+ (SPPLUS)",
      industry: "Logistics & Transportation, Technology",
      challenge: "The client's custom operations platform was running on a costly and inflexible on-premise IBM system. Their valuable data was locked in legacy silos, preventing modern analytics and creating a significant drag on their P&L.",
      solution: "A comprehensive Application Modernization/Refresh engagement. Indexnine executed a seamless, six-month migration from IBM to AWS and architected a modern, Snowflake-based central data mart.",
      results: [
        "$2M+ in Annual Infrastructure Savings: Massive ROI by migrating to efficient AWS cloud",
        "New Revenue Stream Unlocked: Enabled development and sale of data product to Amazon",
        "Rapid, Seamless Migration: Completed complex migration in 6 months with zero disruption",
        "Unified Data for Modern Analytics: Created single source of truth in Snowflake"
      ],
      duration: "6 months",
      teamSize: "10 engineers",
      category: "data",
      serviceType: "Data Engineering",
      homePageLink: "/#data-engineering", // Links to data section on homepage
      serviceLink: "/services/data-engineering",
      detailedContent: {
        challenge: "SP+ was trapped by legacy infrastructure with exorbitant costs, data silos, and inability to innovate. The inflexible nature of the legacy system made it difficult to develop new features or leverage their unique data.",
        approach: [
          "Seamless Cloud Migration to AWS",
          "Application and Data Ingestion Layer Modernization",
          "Snowflake-Powered Central Data Mart Implementation"
        ],
        technicalDetails: "Re-platforming to EC2 instances, migrating to managed AWS RDS, leveraging S3 storage, and implementing Snowflake's unique architecture separating storage from compute.",
        whyItWorked: [
          "Multi-Disciplinary Expertise across Engineering, Cloud, and Data",
          "Focus on Business Outcomes beyond just technology",
          "Deep Data Engineering Capabilities with modern platforms"
        ]
      }
    },
    {
      id: "genesys",
      title: "Genesys - A Mission-Critical Modernization of a Legacy E-commerce Platform",
      subtitle: "How Indexnine's Expertise in Product Modernization and Event-Driven Architecture Rescued a Mission-Critical Integration Hub from Collapse.",
      client: "Genesys",
      industry: "E-commerce Technology, SaaS",
      challenge: "A 16-year-old, mission-critical e-commerce integration platform, written in legacy PHP, was experiencing daily failures. Its monolithic architecture could not handle the complexity of its 178 real-time integrations, threatening catastrophic business disruption.",
      solution: "A strategic Product Modernization/Refresh engagement. Indexnine architected and implemented a modern, event-driven integration hub to decouple the legacy core from its volatile external dependencies, followed by a phased and meticulous migration of all 178 integrations.",
      results: [
        "Averted Business Collapse: Rescued a failing, mission-critical system, ensuring operational stability",
        "Achieved Near-100% Uptime: The new event-driven architecture eliminated daily crashes",
        "Future-Proofed the Platform: Replaced brittle monolithic structure with scalable, modern architecture",
        "Executed Zero-Downtime Migration: Successfully modernized core infrastructure without business disruption"
      ],
      duration: "18 months",
      teamSize: "12 engineers",
      category: "modernization",
      serviceType: "Custom Software",
      homePageLink: "/#modernization",
      serviceLink: "/services/custom-software",
      detailedContent: {
        challenge: "For thousands of merchants across India, Genesys's platform was their lifeline to the world of e-commerce. The platform was an integration engine, connecting sellers on platforms like Amazon, Myntra, and Flipkart. The problem? This mission-critical engine was 16 years old, built on legacy PHP, and experiencing daily crashes during peak inventory update periods.",
        approach: [
          "Architectural Strategy - The Event-Driven Approach",
          "Technical Execution - Building a Resilient, Scalable Hub",
          "Phased, Zero-Downtime Rollout Strategy"
        ],
        technicalDetails: "Built an event-driven integration hub with asynchronous message queues, standardized canonical data model, and microservices for transformation. Each integration was migrated channel-by-channel to ensure zero business disruption.",
        whyItWorked: [
          "Deep Architectural Expertise in event-driven systems",
          "Disciplined, Risk-Averse Process with phased migration",
          "True Partnership Approach with embedded team collaboration"
        ]
      }
    },
    {
      id: "tripjack",
      title: "TripJack - Engineering the Platform for Next-Generation Travel",
      subtitle: "How Indexnine's Expertise in Microservices and API Integration Reduced Time-to-Market by 75%, Powering TripJack's Expansion into New B2B2C Revenue Streams.",
      client: "TripJack",
      industry: "Travel & Tourism, E-commerce, SaaS",
      challenge: "As a high-growth platform, TripJack's monolithic architecture and manual integration processes were creating significant operational drag. The lengthy, multi-month timeline required to onboard new airline suppliers was a major bottleneck, hindering their ability to expand their product offerings and react to market changes.",
      solution: "A strategic Grow and Product Modernization engagement. Indexnine architected and built a modern, event-driven, microservices-based integration hub to streamline supplier onboarding. In parallel, we developed their new flagship B2B2C platform, enabling them to enter the direct-to-consumer market for the first time.",
      results: [
        "75% Faster Time-to-Market: Reduced airline supplier onboarding from 3+ months to 3 weeks",
        "New B2B2C Revenue Channel Launched: Successfully delivered scalable, user-centric B2C platform",
        "Massively Improved Operational Efficiency: Replaced manual integration with automated, scalable architecture",
        "Future-Proofed for Industry Evolution: Modern API-first architecture for rapid partner onboarding"
      ],
      duration: "14 months",
      teamSize: "10 engineers",
      category: "growth",
      serviceType: "Custom Software",
      homePageLink: "/#growth",
      serviceLink: "/services/custom-software",
      detailedContent: {
        challenge: "TripJack had established itself as a dominant force in India's B2B travel market, but their monolithic architecture was struggling to keep pace with business ambitions. The integration bottleneck was taking 3-4 months per new NDC airline, and they needed a B2C platform to capture higher margins.",
        approach: [
          "Modernizing the Core with an Event-Driven Integration Hub",
          "Building the B2B2C Platform for New Revenue Stream",
          "Parallel Execution for Maximum Velocity"
        ],
        technicalDetails: "Built decoupled supplier-specific microservices, canonical data model for travel, and asynchronous processing with message queues. Created modern, user-centric UI/UX with scalable cloud-native architecture and secure payment gateway integration.",
        whyItWorked: [
          "Deep Domain and Technical Expertise in travel technology",
          "Strategic, Outcome-Centric Approach beyond tactical requests",
          "Parallel Execution with coordinated engineering pods"
        ]
      }
    }
  ];

  /**
   * Utility function to handle PDF downloads
   * Generates downloadable PDF for each case study
   */
  const handleDownloadPDF = (studyId: string, studyTitle: string) => {
    // Create a simple PDF download link - in production this would generate actual PDFs
    const element = document.createElement('a');
    element.href = `/case-studies/${studyId}.pdf`;
    element.download = `${studyTitle.replace(/[^a-zA-Z0-9]/g, '_')}_Case_Study.pdf`;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  /**
   * Generate service-specific CTAs for optimal conversion
   */
  const getServiceCTA = (serviceType: string) => {
    const ctaConfig = {
      "Custom Software": {
        text: "Launch Your AI Platform",
        variant: "hero" as const,
        link: "/services/custom-software"
      },
      "Data Engineering": {
        text: "Transform Your Data Strategy",
        variant: "hero-secondary" as const,
        link: "/services/data-engineering"
      }
    };
    return ctaConfig[serviceType as keyof typeof ctaConfig] || {
      text: "Start Your Project",
      variant: "hero" as const,
      link: "/services/custom-software"
    };
  };

  return (
    <div className="min-h-screen bg-background">
      <WebPageSchema 
        title="Client Success Stories & Case Studies | IndexNine"
        description="Explore real-world examples of how IndexNine transforms businesses through innovative product engineering and AI solutions"
        url="https://yoursite.lovable.app/insights/case-studies"
      />
      <BreadcrumbSchema items={[
        { name: 'Home', url: 'https://yoursite.lovable.app/' },
        { name: 'Insights', url: 'https://yoursite.lovable.app/insights' },
        { name: 'Case Studies', url: 'https://yoursite.lovable.app/insights/case-studies' }
      ]} />
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
              Real success stories showcasing how we've helped clients overcome challenges and achieve exceptional results through strategic product engineering.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/#launch">
                <Button variant="outline" className="border-white/20 text-white hover:bg-white/10">
                  View Launch Projects
                </Button>
              </Link>
              <Link to="/#pivot">
                <Button variant="outline" className="border-white/20 text-white hover:bg-white/10">
                  See Pivot Stories
                </Button>
              </Link>
              <Link to="/services/data-engineering">
                <Button variant="outline" className="border-white/20 text-white hover:bg-white/10">
                  Data Engineering
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Detailed Grid */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-1 gap-16 max-w-7xl mx-auto">
            {caseStudies.map((study, index) => (
              <article key={study.id} className="relative bg-gradient-card backdrop-blur-xl rounded-3xl p-10 shadow-glass-lg border border-glass-border hover:shadow-glow transition-all duration-500" id={study.id}>
                {/* Header Section */}
                <div className="mb-8">
                  <div className="flex flex-wrap items-center gap-4 mb-6">
                    <span className="text-sm bg-brand-primary/10 text-brand-primary px-3 py-1 rounded-full font-montserrat">
                      {study.industry}
                    </span>
                    <span className="text-sm bg-brand-purple/10 text-brand-purple px-3 py-1 rounded-full font-montserrat">
                      {study.serviceType}
                    </span>
                    <Link to={study.homePageLink} className="text-sm text-brand-primary hover:text-brand-primary/80 flex items-center gap-1 font-montserrat">
                      <ExternalLink className="w-3 h-3" />
                      View on Homepage
                    </Link>
                  </div>
                  
                  <h2 className="text-4xl font-bold text-foreground mb-4 font-montserrat">{study.title}</h2>
                  <p className="text-xl text-foreground-muted mb-6 font-montserrat italic">{study.subtitle}</p>
                  
                  <div className="flex flex-wrap gap-4">
                    <button
                      onClick={() => handleDownloadPDF(study.id, study.title)}
                      className="flex items-center gap-2 text-brand-primary hover:text-brand-primary/80 font-montserrat"
                    >
                      <Download className="w-4 h-4" />
                      Download PDF
                    </button>
                    <Link to={study.serviceLink} className="flex items-center gap-2 text-brand-purple hover:text-brand-purple/80 font-montserrat">
                      <ExternalLink className="w-4 h-4" />
                      Learn About {study.serviceType}
                    </Link>
                  </div>
                </div>

                {/* Main Content Grid */}
                <div className="grid lg:grid-cols-3 gap-8">
                  {/* Challenge & Solution */}
                  <div className="lg:col-span-2 space-y-8">
                    <div>
                      <h3 className="text-2xl font-semibold text-foreground mb-4 font-montserrat">The Challenge</h3>
                      <p className="text-foreground-muted font-montserrat leading-relaxed">{study.challenge}</p>
                    </div>
                    
                    <div>
                      <h3 className="text-2xl font-semibold text-foreground mb-4 font-montserrat">Our Solution</h3>
                      <p className="text-foreground-muted font-montserrat leading-relaxed">{study.solution}</p>
                    </div>

                    {/* Results Section */}
                    <div>
                      <h3 className="text-2xl font-semibold text-foreground mb-6 font-montserrat">Key Outcomes</h3>
                      <div className="grid sm:grid-cols-2 gap-4">
                        {study.results.map((result, idx) => (
                          <div key={idx} className="flex items-start gap-3 p-4 bg-glass-light rounded-2xl border border-glass-border">
                            <Target className="w-5 h-5 text-brand-primary mt-1 flex-shrink-0" />
                            <span className="text-foreground-muted font-montserrat text-sm leading-relaxed">{result}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Metrics Sidebar */}
                  <div className="space-y-6">
                    <div className="bg-glass-light rounded-2xl p-6 border border-glass-border">
                      <h4 className="text-lg font-semibold text-foreground mb-4 font-montserrat">Project Metrics</h4>
                      <div className="space-y-4">
                        <div className="text-center">
                          <Clock className="w-8 h-8 text-brand-primary mx-auto mb-2" />
                          <div className="text-2xl font-bold text-foreground font-montserrat">{study.duration}</div>
                          <div className="text-sm text-foreground-muted font-montserrat">Timeline</div>
                        </div>
                        <div className="text-center">
                          <Users className="w-8 h-8 text-brand-primary mx-auto mb-2" />
                          <div className="text-2xl font-bold text-foreground font-montserrat">{study.teamSize}</div>
                          <div className="text-sm text-foreground-muted font-montserrat">Team Size</div>
                        </div>
                      </div>
                    </div>

                    {/* Service CTA */}
                    <div className="bg-gradient-card rounded-2xl p-6 border border-glass-border text-center">
                      <h4 className="text-lg font-semibold text-foreground mb-3 font-montserrat">Need Similar Results?</h4>
                      <p className="text-sm text-foreground-muted mb-4 font-montserrat">Let's discuss your {study.serviceType.toLowerCase()} needs</p>
                      <Link to={study.serviceLink}>
                        <Button variant={getServiceCTA(study.serviceType).variant} size="sm" className="w-full">
                          {getServiceCTA(study.serviceType).text}
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Expandable Detailed Content */}
                <div className="mt-8 pt-8 border-t border-glass-border">
                  <button
                    onClick={() => setExpandedStudy(expandedStudy === study.id ? null : study.id)}
                    className="flex items-center gap-2 text-brand-primary hover:text-brand-primary/80 font-montserrat font-semibold"
                  >
                    {expandedStudy === study.id ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    {expandedStudy === study.id ? 'Hide' : 'Show'} Detailed Implementation
                  </button>
                  
                  {expandedStudy === study.id && (
                    <div className="mt-6 space-y-6 animate-in slide-in-from-top duration-300">
                      <div>
                        <h4 className="text-lg font-semibold text-foreground mb-3 font-montserrat">Deep Dive: The Challenge</h4>
                        <p className="text-foreground-muted font-montserrat leading-relaxed">{study.detailedContent.challenge}</p>
                      </div>
                      
                      <div>
                        <h4 className="text-lg font-semibold text-foreground mb-3 font-montserrat">Our Approach</h4>
                        <ul className="space-y-2">
                          {study.detailedContent.approach.map((step, idx) => (
                            <li key={idx} className="flex items-start gap-3">
                              <TrendingUp className="w-4 h-4 text-brand-primary mt-1 flex-shrink-0" />
                              <span className="text-foreground-muted font-montserrat">{step}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="text-lg font-semibold text-foreground mb-3 font-montserrat">Technical Implementation</h4>
                        <p className="text-foreground-muted font-montserrat leading-relaxed">{study.detailedContent.technicalDetails}</p>
                      </div>
                      
                      <div>
                        <h4 className="text-lg font-semibold text-foreground mb-3 font-montserrat">Why It Worked</h4>
                        <ul className="space-y-2">
                          {study.detailedContent.whyItWorked.map((reason, idx) => (
                            <li key={idx} className="flex items-start gap-3">
                              <Target className="w-4 h-4 text-brand-primary mt-1 flex-shrink-0" />
                              <span className="text-foreground-muted font-montserrat">{reason}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Service-Specific CTAs Section */}
      <section className="py-24 bg-gradient-subtle">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6 font-montserrat">
              Ready to Start Your Success Story?
            </h2>
            <p className="text-xl text-foreground-muted max-w-3xl mx-auto font-montserrat">
              Choose the service that matches your project needs and let's create exceptional results together.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-gradient-card backdrop-blur-xl rounded-2xl p-8 border border-glass-border text-center">
              <h3 className="text-2xl font-bold text-foreground mb-4 font-montserrat">Launch Your MVP</h3>
              <p className="text-foreground-muted mb-6 font-montserrat">Turn your vision into a market-ready product with our proven Launch methodology.</p>
              <Link to="/services/custom-software">
                <Button variant="hero" className="w-full">Start Your Launch</Button>
              </Link>
            </div>
            
            <div className="bg-gradient-card backdrop-blur-xl rounded-2xl p-8 border border-glass-border text-center">
              <h3 className="text-2xl font-bold text-foreground mb-4 font-montserrat">Perfect Your Pivot</h3>
              <p className="text-foreground-muted mb-6 font-montserrat">Transform your existing product with strategic engineering and modernization.</p>
              <Link to="/services/custom-software">
                <Button variant="hero-secondary" className="w-full">Plan Your Pivot</Button>
              </Link>
            </div>
            
            <div className="bg-gradient-card backdrop-blur-xl rounded-2xl p-8 border border-glass-border text-center">
              <h3 className="text-2xl font-bold text-foreground mb-4 font-montserrat">Modernize Your Data</h3>
              <p className="text-foreground-muted mb-6 font-montserrat">Unlock the value of your data with cloud modernization and advanced analytics.</p>
              <Link to="/services/data-engineering">
                <Button variant="hero" className="w-full">Transform Your Data</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 bg-gradient-hero">
        <div className="container mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-foreground-white mb-8 font-montserrat">
            Let's Write Your Next Chapter
          </h2>
          <p className="text-xl text-foreground-white/80 mb-12 max-w-2xl mx-auto font-montserrat">
            Join the ranks of successful companies that have transformed their business with Indexnine's strategic product engineering.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="hero" size="xl">Schedule Free Consultation</Button>
            <Link to="/about/who-we-are">
              <Button variant="outline" size="xl" className="border-white/20 text-white hover:bg-white/10">
                Learn About Our Team
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CaseStudies;