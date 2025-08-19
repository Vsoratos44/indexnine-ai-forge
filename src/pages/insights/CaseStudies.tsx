import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { WebPageSchema, BreadcrumbSchema } from '@/components/SEOStructuredData';
import { Target, TrendingUp, Clock, Users, Download, ExternalLink, ChevronDown, ChevronUp, ArrowRight } from 'lucide-react';

const CaseStudies = () => {
  const [expandedStudy, setExpandedStudy] = useState<string | null>(null);

  /**
   * Case Studies Data Structure
   * Each case study is mapped to specific service categories and homepage sections
   * for optimal internal linking and SEO performance
   */
  const caseStudies = [
    {
      id: "launch",
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
      id: "pivot",
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
      id: "grow",
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
      category: "grow",
      serviceType: "Data Engineering",
      homePageLink: "/#grow", // Links to grow section on homepage
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
      id: "mature",
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
      category: "mature",
      serviceType: "Custom Software",
      homePageLink: "/#mature",
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
      id: "edtech-pivot",
      title: "EdTech Platform - Strategic Pivot to Success",
      subtitle: "How we helped an EdTech platform quickly adapt to market feedback and evolve their product strategy with data-driven insights.",
      client: "EdTech Platform (K-12 Education)",
      industry: "Education Technology, K-12 Learning",
      challenge: "An EdTech platform struggling with low user engagement and changing market demands following the shift to remote learning.",
      solution: "Data-driven pivot strategy including user behavior analysis, product repositioning, and rapid feature development to meet new market needs.",
      results: [
        "300% Increase in User Engagement: Dramatically improved platform adoption and daily active users",
        "Market Leadership Position: Became the go-to solution for hybrid learning environments",
        "Secured $15M Funding: Successful Series A round based on improved metrics and market fit",
        "6-Month Time to Market: Rapid development and deployment of new core features"
      ],
      duration: "6 months",
      teamSize: "8 engineers",
      category: "pivot",
      serviceType: "Custom Software",
      homePageLink: "/#pivot",
      serviceLink: "/services/custom-software",
      detailedContent: {
        challenge: "The EdTech platform had been successful in traditional classroom settings, but the sudden shift to remote and hybrid learning exposed critical gaps in their product offering. User engagement was declining, and competitors were rapidly capturing market share.",
        approach: [
          "User Behavior Analysis and Market Research",
          "Data-Driven Product Repositioning",
          "Rapid Feature Development and Testing"
        ],
        technicalDetails: "Implemented comprehensive analytics tracking, A/B testing framework, and rapid development cycles to quickly adapt to changing market needs and user feedback.",
        whyItWorked: [
          "Data-Driven Decision Making with comprehensive user research",
          "Agile Development Process with rapid iteration cycles",
          "Strategic Product Expertise in education technology"
        ]
      }
    },
    {
      id: "enterprise-saas-optimization",
      title: "Enterprise SaaS - Mission-Critical Optimization",
      subtitle: "How we optimized performance, security, and reliability for an enterprise SaaS platform serving Fortune 500 companies.",
      client: "Enterprise SaaS Platform Provider (Fortune 500)",
      industry: "Enterprise Software, Cloud Services",
      challenge: "An enterprise SaaS platform experiencing performance bottlenecks, security vulnerabilities, and scalability issues that threatened their Fortune 500 client relationships.",
      solution: "Comprehensive platform optimization including performance tuning, security hardening, and architectural improvements to meet enterprise-grade requirements.",
      results: [
        "99.99% Uptime Achieved: Eliminated service interruptions and delivered enterprise-grade reliability",
        "400% Performance Improvement: Dramatically reduced response times and increased throughput",
        "Zero Security Incidents: Implemented comprehensive security measures with continuous monitoring",
        "SOC 2 Certification: Successfully achieved compliance with enterprise security standards"
      ],
      duration: "12 months",
      teamSize: "15 engineers",
      category: "optimization",
      serviceType: "Custom Software",
      homePageLink: "/#optimization",
      serviceLink: "/services/custom-software",
      detailedContent: {
        challenge: "The client's SaaS platform had grown rapidly but was struggling to meet the stringent requirements of enterprise customers. Performance issues, security concerns, and compliance gaps were threatening their most valuable client relationships.",
        approach: [
          "Performance Optimization and Database Tuning",
          "Security Hardening and Compliance Implementation",
          "Infrastructure Scaling and Monitoring"
        ],
        technicalDetails: "Implemented comprehensive optimization strategy including database query optimization, Redis caching, security audits, and enterprise-grade monitoring systems.",
        whyItWorked: [
          "Deep Enterprise Expertise in scalable architectures",
          "Comprehensive Security Knowledge with compliance experience",
          "Performance Engineering Specialization"
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
    element.href = `/insights/case-studies/${studyId}.pdf`;
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

      {/* Case Studies Grid */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4 font-montserrat">Featured Case Studies</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {caseStudies.map((study, index) => (
              <div key={study.id} className="relative bg-gradient-card backdrop-blur-xl rounded-3xl p-8 shadow-glass-lg border border-glass-border hover:shadow-glow transition-all duration-500 transform hover:scale-105">
                <div className="mb-4">
                  <span className="text-sm bg-brand-purple/10 text-brand-purple px-3 py-1 rounded-full font-montserrat">
                    {study.category.charAt(0).toUpperCase() + study.category.slice(1)}
                  </span>
                </div>
                
                <h3 className="text-2xl font-bold text-foreground mb-4 font-montserrat leading-tight">{study.title}</h3>
                <p className="text-foreground-muted mb-6 leading-relaxed font-montserrat">{study.subtitle}</p>
                
                <div className="mb-6">
                  <div className="grid grid-cols-2 gap-4 text-sm text-foreground-muted">
                    <div>
                      <span className="font-semibold">Industry:</span> {study.industry}
                    </div>
                    <div>
                      <span className="font-semibold">Duration:</span> {study.duration}
                    </div>
                  </div>
                </div>
                
                <Link to={`/insights/case-studies/${study.id}`}>
                  <Button variant="ghost" className="w-full text-brand-primary hover:text-white hover:bg-brand-primary/20 border border-brand-primary/30 rounded-xl">
                    Read Case Study <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </div>
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