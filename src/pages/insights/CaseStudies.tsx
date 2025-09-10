import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useSEO } from "@/hooks/useSEO";
import {
  WebPageSchema,
  BreadcrumbSchema,
} from "@/components/SEOStructuredData";
import {
  Target,
  TrendingUp,
  Clock,
  Users,
  Download,
  ExternalLink,
  ChevronDown,
  ChevronUp,
  ArrowRight,
} from "lucide-react";
import styles from "../../assets/css/stylesheet.module.css";

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
      title:
        "Annotate - Launching AI-Powered Disruption in Philanthropic Finance",
      subtitle:
        "Taking a bold idea of democratized financial research from launch to market-ready MVP.",
      client: "Annotate (Anonymized)",
      industry: "Wealth Management, Philanthropy",
      challenge:
        "The process for prospective donors to access reliable research on charitable organizations was controlled by expensive consultants, creating a bottleneck in the market. Annotate wanted to build a platform that could disrupt this model by delivering the same, or better, insights at a fraction of the cost.",
      solution:
        "A strategic engagement with Indexnine's Launch services, starting with our proprietary Sprint Zero framework to define the MVP, followed by the rapid development of a sophisticated AI research agent built on retrieval-augmented generation (RAG) architecture.",
      results: [
        "Market-Ready MVP Launched: Successfully delivering a functional, AI-powered platform validated the core business model",
        "99% Cost Reduction for End-Users: The platform delivers research reports for ~$500 vs industry-standard $20,000-$50,000",
        "Complex Data Problem Solved: Engineered robust data pipeline for diverse data types into reliable insights",
        "Created a Reliable Tech Moat: Built proprietary AI engine serving as core intellectual property",
      ],
      duration: "6 months",
      teamSize: "5 engineers",
      category: "launch",
      serviceType: "Custom Software",
      homePageLink: "/#launch", // Links to launch section on homepage
      serviceLink: "/services/custom-software",
      detailedContent: {
        challenge:
          "In the upper echelons of philanthropic contributions, making informed decisions is a surprisingly expensive and archaic process. An individual or family looking to donate major funding to a charitable cause would typically hire a specialized consultant. The consultant would then spend weeks or months manually conducting research, analyzing financial statements, and compiling a detailed report. This service alone would cost tens of thousands of dollars.",
        approach: [
          "Sprint Zero - De-Risking the Vision and Defining the MVP",
          "Technical Architecture - Engineering an AI Research Agent",
          "RAG-Powered Conversational Agent Implementation",
        ],
        technicalDetails:
          "Built a sophisticated, multi-stage data pipeline feeding into a custom RAG system with intelligent data ingestion, advanced entity extraction, unified vectorization, and a RAG-powered conversational agent.",
        whyItWorked: [
          "A Disciplined Launch Process with Sprint Zero framework",
          "Deep AI and Data Expertise with specialized Applied AI teams",
          "The Agentic AI Pod deployment",
          "A True Founder's Mindset as strategic partners",
        ],
      },
    },
    {
      id: "zilla",
      title: "Zilla Security - Engineering the Perfect Pivot",
      subtitle:
        "Indexnine's strategic product engineering transformed a niche auditing tool into a mission-critical identity platform.",
      client: "Zilla Security",
      industry: "Cybersecurity (Identity & Access Management)",
      challenge:
        "The client had built an auditing product capable of identifying critical security gaps, but not solving them. With strong demand from existing users and potential new customers, Zilla wanted a solution that could capitalize on this major opportunity.",
      solution:
        "A multi-year strategic engagement with Indexnine to architect and execute a complex product pivot. This involved engineering a secure, scalable provisioning engine from the ground up and continuous product modernization.",
      results: [
        "Mission-Critical Integration: Evolved from supplemental visibility tool to indispensable core operational system",
        "Upgraded Scope, Expanded Value: Transformed into comprehensive Identity Governance platform",
        "Enterprise Architecture: Delivered robust, secure, scalable platform meeting rigorous standards",
        "Successful $165M+ Acquisition: Enabled acquisition by global identity security leader",
      ],
      duration: "24 months",
      teamSize: "8 engineers",
      category: "pivot",
      serviceType: "Custom Software",
      homePageLink: "/#pivot", // Links to pivot section on homepage
      serviceLink: "/services/custom-software",
      detailedContent: {
        challenge:
          "Zilla found itself with a product that could show customers their security problems. Now, they needed the product to offer security solutions. This customer friction could prove a roadblock to continued growth and a potential threat to the company's long-term viability.",
        approach: [
          "Strategic Workshops and Product Vision Mapping",
          "Enterprise-Grade Provisioning Engine Development",
          "Continuous Product Modernization",
        ],
        technicalDetails:
          "Architected API integration at enterprise scale, transactional state management, security-first zero-trust design, and scalable microservices architecture.",
        whyItWorked: [
          "Product-centric Development with customer feedback integration",
          "Deep Engineering Expertise in enterprise security",
          "Partnership Across the Product Lifecycle",
          "A Founder's Mindset with strategic ownership",
        ],
      },
    },
    {
      id: "si",
      title: "Sports Interactive - AI-Powered Fan Engagement in Real Time",
      subtitle:
        "Unlocking a new level of scalability and solving a technical Gordian knot through automated content creation with Cricket LLM.",
      client: "Sports Interactive",
      industry: "Sports Media",
      challenge:
        "The inaccessibility of real-time scaling for high-quality social media content generation during live sporting events was resulting in high operational costs and missed opportunities for fan engagement. The client wanted a reliable and long-term solution.",
      solution:
        "One of our Agentic AI pods developed a bespoke, low-latency, AI-powered content generation engine (called 'Cricket LLM') that enables interactive fan engagement in real time without compromising performance under increased workloads during game time.",
      results: [
        "90% Operational Cost Reduction: By automating content generation, reduced manual workforce required for real-time social media management",
        "15-Second Content Generation: Cricket LLM generates engaging social media posts in under 15 seconds vs several minutes manually",
        "100x Scale Improvement: Platform handles content for multiple simultaneous sporting events without quality degradation",
        "5-Day Development to Deployment: Rapid prototyping and implementation from concept to live production environment",
      ],
      duration: "5 days",
      teamSize: "5 engineers",
      category: "grow",
      serviceType: "Custom Software",
      homePageLink: "/#grow", // Links to grow section on homepage
      serviceLink: "/services/ai-ml",
      detailedContent: {
        challenge:
          "Sports Interactive had built a successful B2B platform providing content solutions to sports media companies. However, they faced a critical scaling challenge: generating high-quality, contextually relevant social media content during live sporting events required significant manual effort and couldn't scale to handle multiple simultaneous events.",
        approach: [
          "Cricket LLM Development",
          "Real-Time Content Generation Engine",
          "Scalable Platform Architecture",
        ],
        technicalDetails:
          "Built a bespoke, low-latency AI-powered content generation engine with real-time processing capabilities, automated content creation workflows, and scalable infrastructure to handle multiple simultaneous sporting events.",
        whyItWorked: [
          "Agentic AI Pod Model with specialized expertise",
          "Focus on Real-Time Performance and scalability",
          "Deep Sports Media Domain Knowledge",
          "Rapid Development and Deployment capabilities",
        ],
      },
    },
    {
      id: "genesys",
      title: "Mission-Critical Modernization: Genesys E-commerce Platform",
      subtitle:
        "Product modernization and event-driven architecture transformation for a mature e-commerce platform serving thousands of merchants.",
      client: "Genesys",
      industry: "E-commerce",
      challenge:
        "For thousands of merchants across India, Genesys's platform was their lifeline to e-commerce. The 16-year-old legacy PHP system with 178 integrations was incredibly fragile, causing daily crashes and threatening business continuity.",
      solution:
        "A comprehensive platform modernization using event-driven architecture, asynchronous message queues, and a canonical data model to create a resilient, scalable system with zero-downtime migration.",
      results: [
        "100% Uptime Achievement: After modernization, the platform achieved perfect uptime, eliminating the daily crashes that plagued the legacy system.",
        "Zero-Downtime Migration: Successfully migrated all 178 integrations without service interruption, maintaining business continuity throughout the transformation.",
        "Improved System Reliability: Event-driven architecture eliminated the fragility of the monolithic system, making it resilient to partner API changes.",
        "Enhanced Scalability: Modern architecture positioned the platform to handle future growth and feature expansion with confidence.",
      ],
      duration: "18 months",
      teamSize: "12 engineers",
      category: "mature",
      serviceType: "Custom Software",
      homePageLink: "/#mature",
      serviceLink: "/services/custom-software",
      detailedContent: {
        challenge:
          "For thousands of merchants across India, Genesys's platform was their lifeline to the world of e-commerce. The platform was an integration engine, connecting sellers on platforms like Amazon, Myntra, and Flipkart, and managing a constant flow of inventory updates, orders, and transactions. The problem? The engine was over 16 years old, built on legacy PHP, and was bursting at the seams.",
        approach: [
          "Architectural Strategy - The Event-Driven Approach",
          "Technical Execution - Building a Resilient, Scalable Hub",
          "Phased, Zero-Downtime Rollout Strategy",
        ],
        technicalDetails:
          "Built an event-driven integration hub with asynchronous message queues, standardized canonical data model, and microservices for transformation. Each integration was migrated channel-by-channel to ensure zero business disruption.",
        whyItWorked: [
          "Architectural Expertise in event-driven systems and microservices",
          "Disciplined, Risk-Averse Process with phased migration approach",
          "True Partnership Approach with embedded team collaboration",
        ],
      },
    },
    {
      id: "cygeniq",
      title: "CygenIQ: Engineering a First-Mover Advantage in AI Security",
      subtitle:
        "A strategic MVP launch for a visionary startup, engineering a first-of-its-kind platform and delivering a fundable, high-fidelity interactive prototype in record time.",
      client: "CygenIQ",
      industry: "AI Security",
      challenge:
        "Visionary founders needed to move from a validated idea to a functional, high-fidelity prototype to secure their next round of funding and begin development. This required a strategic partner who could deliver enterprise-grade design and engineering with extreme velocity.",
      solution:
        "A comprehensive Launch engagement, beginning with our proprietary Sprint Zero framework to de-risk the vision, followed by the rapid, parallel development of the core AI engine by our Agentic AI Pod and a CISO-centric interactive prototype by our Design Studio.",
      results: [
        "Accelerated Seed Funding: The high-fidelity prototype and technical validation enabled CygenIQ to close their seed round months ahead of schedule.",
        "6-Week MVP Delivery: From concept to interactive prototype in just six weeks, demonstrating the power of our integrated studio approach.",
        "First-Mover Market Position: CygenIQ established themselves as the pioneer in AI security platforms, securing a significant competitive advantage.",
        "Enterprise-Ready Foundation: The platform was architected from day one to meet enterprise security and compliance requirements.",
      ],
      duration: "6 weeks",
      teamSize: "5 engineers",
      category: "launch",
      serviceType: "Custom Software",
      homePageLink: "/#launch",
      serviceLink: "/services/custom-software",
      detailedContent: {
        challenge:
          "The rapid adoption of generative AI in enterprise environments created an entirely new attack surface that traditional cybersecurity tools weren't designed to address. CygenIQ's founders, seasoned cybersecurity experts, recognized this gap and envisioned a first-of-its-kind platform specifically designed to secure AI systems and data flows.",
        approach: [
          "Sprint Zero - De-Risking the Vision and Charting the Course",
          "Design Studio - Engineering Clarity for the CISO",
          "Agentic AI Pod - Engineering the Core Security Engine",
        ],
        technicalDetails:
          "Architected sophisticated proto-agentic system with high-throughput log ingestion pipeline, ML-based anomaly detection models, and automated incident reporting with comprehensive risk scoring and remediation recommendations.",
        whyItWorked: [
          "Sprint Zero Framework for strategic de-risking and fundable planning",
          "Integrated Specialized Studios with seamless Design and AI Pod collaboration",
          "Agentic AI Pod Model with elite 3X Engineers",
          "True Founder's Mindset with strategic partnership approach",
        ],
      },
    },
    {
      id: "tripjack",
      title: "TripJack: Engineering the Platform for Next-Generation Travel",
      subtitle:
        "How Indexnine's Expertise in Microservices and API Integration Reduced Time-to-Market by 75%, Powering TripJack's Expansion into New B2B2C Revenue Streams.",
      client: "TripJack",
      industry: "Travel Technology",
      challenge:
        "TripJack's monolithic architecture and manual integration processes were creating significant operational drag. The lengthy, multi-month timeline required to onboard new airline suppliers was a major bottleneck, hindering their ability to expand offerings and react to market changes.",
      solution:
        'A strategic "Grow" and "Product Modernization" engagement. Indexnine architected and built a modern, event-driven, microservices-based integration hub to streamline supplier onboarding. In parallel, we developed their new flagship B2B2C platform, enabling them to enter the direct-to-consumer market for the first time.',
      results: [
        "75% Faster Time-to-Market: The new integration hub reduced the time to onboard new airline suppliers using the modern NDC protocol from over 3 months to just 3 weeks.",
        "New B2B2C Revenue Channel Launched: Successfully architected and delivered a scalable, user-centric B2C platform, opening up a significant new revenue stream for the business.",
        "Massively Improved Operational Efficiency: Replaced a brittle, manual integration process with a streamlined, automated, and scalable architecture.",
        "Future-Proofed for Industry Evolution: The modern, API-first architecture positions TripJack to rapidly adapt to future changes in travel technology standards.",
      ],
      duration: "18 months",
      teamSize: "12 engineers",
      category: "grow",
      serviceType: "Custom Software",
      homePageLink: "/#grow",
      serviceLink: "/services/custom-software",
      detailedContent: {
        challenge:
          "TripJack had firmly established itself as a dominant force in India's B2B travel market. Their platform served as the critical technology backbone for thousands of travel agents, providing them with real-time access to a vast inventory of flights, hotels, and other travel products. However, their monolithic architecture was struggling to keep pace with their business ambitions.",
        approach: [
          "Modern Integration Hub Architecture",
          "Microservices-Based Platform Development",
          "B2B2C Platform Launch Strategy",
        ],
        technicalDetails:
          "Built a modern, event-driven, microservices-based integration hub with NDC protocol support and automated supplier onboarding processes. Simultaneously developed a scalable B2B2C platform for direct consumer access.",
        whyItWorked: [
          "Domain Expertise in travel technology and NDC protocol",
          "Modern Architecture Patterns with microservices and event-driven design",
          "Parallel Development Strategy for multiple platform initiatives",
          "Strategic Partnership Approach with long-term platform vision",
        ],
      },
    },
  ];

  /**
   * Utility function to handle PDF downloads
   * Generates downloadable PDF for each case study
   */
  const handleDownloadPDF = (studyId: string, studyTitle: string) => {
    // Create a simple PDF download link - in production this would generate actual PDFs
    const element = document.createElement("a");
    element.href = `/insights/case-studies/${studyId}.pdf`;
    element.download = `${studyTitle.replace(
      /[^a-zA-Z0-9]/g,
      "_"
    )}_Case_Study.pdf`;
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
        link: "/services/custom-software",
      },
      "Data Engineering": {
        text: "Transform Your Data Strategy",
        variant: "hero-secondary" as const,
        link: "/services/data-engineering",
      },
    };
    return (
      ctaConfig[serviceType as keyof typeof ctaConfig] || {
        text: "Start Your Project",
        variant: "hero" as const,
        link: "/services/custom-software",
      }
    );
  };

  // Implement comprehensive SEO for Case Studies page
  useSEO({
    title:
      "Enterprise Software Development Case Studies | Product Engineering Success Stories | IndexNine",
    description:
      "Real-world case studies showcasing enterprise software development, product engineering, AI implementation, and digital transformation success stories. Proven results in custom software development, quality engineering, and data modernization projects.",
    canonicalUrl: "https://www.indexnine.com/insights/case-studies",
    keywords:
      "enterprise software development case studies, product engineering success stories, AI implementation case studies, digital transformation projects, custom software development examples, quality engineering case studies, data modernization success stories, legacy system modernization cases, enterprise AI consulting results, B2B software development case studies, product lifecycle engineering examples, test automation success stories",
    ogImage: "https://www.indexnine.com/images/case-studies-og.jpg",
  });

  return (
    <div className="min-h-screen bg-background">
      <WebPageSchema
        title="Client Success Stories & Case Studies | IndexNine"
        description="Explore real-world examples of how IndexNine transforms businesses through innovative product engineering and AI solutions"
        url="https://yoursite.lovable.app/insights/case-studies"
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://yoursite.lovable.app/" },
          { name: "Insights", url: "https://yoursite.lovable.app/insights" },
          {
            name: "Case Studies",
            url: "https://yoursite.lovable.app/insights/case-studies",
          },
        ]}
      />
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-[480px] overflow-hidden bg-black">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/6 w-96 h-96 bg-brand-primary/8 rounded-full blur-3xl animate-float"></div>
          <div
            className="absolute bottom-1/4 right-1/6 w-80 h-80 bg-brand-purple/6 rounded-full blur-3xl animate-float"
            style={{ animationDelay: "2s" }}
          ></div>
        </div>

        <div className="relative z-10 container mx-auto pt-48 pb-24">
          <div className="max-w-4xl mx-auto text-center lg:text-left ml-0">
            <h1 className="text-[2.5rem] sm:text-[3rem] lg:text-[4rem] xl:text-[4rem] font-semibold text-foreground mb-6 leading-[1.25] animate-fade-in font-montserrat">
              Case{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Studies
              </span>
            </h1>
            <p className="text-xl text-foreground-white/80 mb-12 leading-relaxed font-montserrat">
              Real success stories showcasing how we've helped clients overcome
              challenges and achieve exceptional results through strategic
              product engineering.
            </p>
            <div className="flex flex-wrap justify-start gap-4">
              {/* <Link to="/#launch">
                <Button variant="btnSecondary">View Launch Projects</Button>
              </Link>
              <Link to="/#pivot">
                <Button variant="btnSecondary">See Pivot Stories</Button>
              </Link>
              <Link to="/services/data-engineering">
                <Button variant="btnSecondary">Data Engineering</Button>
              </Link> */}
            </div>
          </div>
        </div>
      </section>

      <div className={` relative bg-[#fff] overflow-hidden ${styles.casesBg} `}>
        {/* Case Studies Grid */}
        <section className="max-w-6xl mx-auto lg:pt-32 bg-transparent">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-foreground-dark mb-6 font-montserrat leading-[1.4]">
                Featured Case Studies
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
              {caseStudies.map((study, index) => (
                <div
                  key={study.id}
                  className="relative bg-gradient-card-light backdrop-blur-xl rounded-3xl p-6 shadow-glass-lg border border-glass-border hover:shadow-glow transition-all duration-500 transform hover:scale-105"
                >
                  <div className="mb-4">
                    <span className="text-sm bg-brand-purple/10 text-brand-purple px-3 py-1 rounded-full font-montserrat">
                      {study.category.charAt(0).toUpperCase() +
                        study.category.slice(1)}
                    </span>
                  </div>

                  <h3 className="text-2xl font-semibold text-foreground-dark mb-4 font-montserrat leading-tight">
                    {study.title}
                  </h3>
                  <p className="text-foreground-dark-muted mb-6 leading-relaxed font-montserrat">
                    {study.subtitle}
                  </p>

                  <div className="mb-6">
                    <div className="grid grid-cols-2 gap-4 text-sm text-foreground-dark-muted">
                      <div>
                        <span className="font-semibold">Industry:</span>{" "}
                        {study.industry}
                      </div>
                      <div>
                        <span className="font-semibold">Duration:</span>{" "}
                        {study.duration}
                      </div>
                    </div>
                  </div>

                  <Link to={`/insights/case-studies/${study.id}`}>
                    <Button variant="btnPrimary">
                      Read Case Study <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Service-Specific CTAs Section */}
        <section className="py-24 lg:py-32 bg-gradient-subtle">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-foreground-dark mb-6 font-montserrat leading-[1.4]">
                Ready to Start Your Success Story?
              </h2>
              <p className="text-xl text-foreground-dark-muted max-w-3xl mx-auto font-montserrat">
                Choose the service that matches your project needs and let's
                create exceptional results together.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <div className="bg-gradient-card-light backdrop-blur-xl rounded-2xl p-8 border border-glass-border text-center shadow-glass">
                <h3 className="text-2xl font-semibold text-foreground-dark mb-4 font-montserrat">
                  Launch Your MVP
                </h3>
                <p className="text-foreground-dark-muted mb-6 font-montserrat">
                  Turn your vision into a market-ready product with our proven
                  Launch methodology.
                </p>
                <Link to="/services/custom-software">
                  <Button variant="btnPrimary" className="w-full">
                    Start Your Launch
                  </Button>
                </Link>
              </div>

              <div className="bg-gradient-card-light backdrop-blur-xl rounded-2xl p-8 border border-glass-border text-center shadow-glass">
                <h3 className="text-2xl font-semibold text-foreground-dark mb-4 font-montserrat">
                  Perfect Your Pivot
                </h3>
                <p className="text-foreground-dark-muted mb-6 font-montserrat">
                  Transform your existing product with strategic engineering and
                  modernization.
                </p>
                <Link to="/services/custom-software">
                  <Button variant="btnPrimary" className="w-full">
                    Plan Your Pivot
                  </Button>
                </Link>
              </div>

              <div className="bg-gradient-card-light backdrop-blur-xl rounded-2xl p-8 border border-glass-border text-center shadow-glass">
                <h3 className="text-2xl font-semibold text-foreground-dark mb-4 font-montserrat">
                  Modernize Your Data
                </h3>
                <p className="text-foreground-dark-muted mb-6 font-montserrat">
                  Unlock the value of your data with cloud modernization and
                  advanced analytics.
                </p>
                <Link to="/services/data-engineering">
                  <Button variant="btnPrimary" className="w-full">
                    Transform Your Data
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
      {/* Final CTA Section */}
      <section className={`py-24 lg:py-32 ${styles.ctaBg}`}>
        <div className="container mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold mb-6 text-foreground-white">
            <span className="leading-[1.4]">Let's Write Your Next Chapter</span>
          </h2>
          <p className="text-xl text-foreground-white/80 mb-12 max-w-2xl mx-auto font-montserrat">
            Join the ranks of successful companies that have transformed their
            business with Indexnine's strategic product engineering.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="btnSecondary" size="lg">
              Schedule Free Consultation
            </Button>
            <Link to="/about/who-we-are">
              <Button variant="btnSecondary" size="lg">
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
