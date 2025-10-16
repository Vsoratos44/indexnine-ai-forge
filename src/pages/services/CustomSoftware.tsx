import React, { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useSEO } from "@/hooks/useSEO";
import {
  ServiceSchema,
  WebPageSchema,
  BreadcrumbSchema,
  FAQSchema,
} from "@/components/SEOStructuredData";
import { ServiceAreaSchema } from "@/components/seo/ServiceAreaSchema";
import { PerformanceOptimizer } from "@/components/seo/PerformanceOptimizer";
import { SEOAnalytics } from "@/components/seo/SEOAnalytics";
import styles from "../../assets/css/stylesheet.module.css";

// Section Components
import { HeroSection } from "../../components/CustomSoftware/sections/HeroSection";
import { TechStackSection } from "../../components/CustomSoftware/sections/TechStackSection";
import { PhilosophySection } from "../../components/CustomSoftware/sections/PhilosophySection";
import { EvolutionStorySection } from "../../components/CustomSoftware/sections/EvolutionStorySection";
import { CoreOfferingsOverviewSection } from "../../components/CustomSoftware/sections/CoreOfferingsOverviewSection";
import { ServicesOverviewSection } from "../../components/CustomSoftware/sections/ServicesOverviewSection";
import { ProductLaunchSection } from "../../components/CustomSoftware/sections/ProductLaunchSection";
import { ProductModernizationSection } from "../../components/CustomSoftware/sections/ProductModernizationSection";
import { CaseStudiesSection } from "../../components/CustomSoftware/sections/CaseStudiesSection";
import { FAQSection } from "../../components/CustomSoftware/sections/FAQSection";
import { FinalCTASection } from "../../components/CustomSoftware/sections/FinalCTASection";

const CustomSoftware = () => {
  // SEO Configuration for Custom Software Development page
  useSEO({
    title:
      "Custom Software Development Services | AI-Augmented Engineering | Pragmatic Engineering for Ventures & Enterprises | IndexNine",
    description:
      "IndexNine engineers mission-critical software through AI-augmented product engineering. Our integrated Engineering Studio delivers full-stack web, mobile, and enterprise applications with dedicated pods, Sprint Zero methodology, and proprietary accelerators (snap.mvp, snap.bluprint) to ensure scalability, security, and measurable business outcomes.",
    canonicalUrl: "https://www.indexnine.com/services/custom-software",
    keywords:
      "custom software development services, AI-augmented engineering, enterprise application development, saas development services, full-stack development company, pragmatic engineering, product modernization, cloud-native development, dedicated engineering pods, legacy system modernization, MVP development services, Sprint Zero methodology, snap.mvp accelerator, mobile application development, web application services, outcome-based engineering, flexible engineering partner",
    ogImage: "https://www.indexnine.com/images/og-custom-software.png",
    schemaType: "WebPage",
  });

  // FAQ data for structured data
  const faqItems = [
    {
      question:
        "How is IndexNine different from a traditional staff augmentation firm?",
      answer:
        "Traditional staff augmentation provides developers without strategic context or accountability for outcomes. We deploy integrated engineering pods that bring proprietary accelerators (snap.mvp, snap.bluprint, snap.agents, snap.automate), a product mindset, and proven methodologies. Every engagement starts with Sprint Zero to ensure technical decisions serve your business goals—not just fill seats. We're a flexible engineering partner, not a body shop.",
    },
    {
      question: "What is 'AI-Augmented Product Engineering'?",
      answer:
        "AI-Augmented Product Engineering means embedding AI and generative models across the entire product lifecycle—from design and prototyping to development, QA, and documentation. This approach accelerates ideation, automates repetitive engineering tasks, and reduces iteration cycles by 30-40%. Our teams leverage AI-assisted coding tools that boost throughput by 20-30% on average tasks, resetting expectations around velocity and quality.",
    },
    {
      question: "What is the 'Sprint Zero Blueprint'?",
      answer:
        "Sprint Zero is our proprietary 2-4 week framework for de-risking your product launch. It includes: (1) Strategic Validation workshops to pressure-test business and user problems, (2) Architectural Blueprint designed by senior architects for scalability and security, (3) High-fidelity Interactive Prototype that validates the user journey, and (4) De-Risked Roadmap with fixed-bid pricing and guaranteed timeline. It's the foundation that ensures your investment delivers ROI.",
    },
    {
      question: "What are your proprietary 'snap' platforms?",
      answer:
        "Our snap platforms are internal accelerators we've built to dramatically reduce time-to-market: snap.mvp (multi-tenant SaaS starter kit saving 3+ months), snap.bluprint (AI-powered design automation achieving 50% faster outcomes), snap.agents (rapid AI workflow prototyping tool), and snap.automate (QA automation framework). These platforms are included in our engagements at no additional cost and give our pods a significant velocity advantage.",
    },
    {
      question: "Do you work with existing development teams?",
      answer:
        "Yes. Our pods are designed to integrate seamlessly with your existing teams. We work within your tools (GitHub, Jira, Slack), processes, and culture. Many clients use us to augment internal teams during critical launches or to provide specialized expertise (AI, cloud architecture, legacy modernization) their team may lack. We augment and empower—we don't replace.",
    },
    {
      question: "Can you help modernize our legacy system?",
      answer:
        "Absolutely. Product Modernization is one of our two core offerings. We specialize in migrating legacy stacks (Java to Java 21, PHP exit strategies, Python 2.x to 3.x), transforming monoliths into cloud-native microservices, and using AI-accelerated refactoring to cut modernization timelines by 50%. We start with an Architectural Review ($15K+, 2-3 weeks) to provide a clear modernization roadmap with cost/performance improvements.",
    },
    {
      question: "How do you price your services?",
      answer:
        "We offer three engagement models: (1) Fixed-Price Projects for well-defined scope (Sprint Zero at $25K+, MVP Development at $75K+, Architectural Reviews at $15K+), (2) Dedicated Pods for ongoing development (monthly retainer based on pod size and composition), and (3) Outcome-Based Partnerships for strategic engagements (pricing tied to specific business metrics). Transparency is core to our approach—we always provide fixed-bid pricing after Sprint Zero.",
    },
    {
      question:
        "What's the typical timeline for a product launch or modernization project?",
      answer:
        "Timelines vary by project type: Sprint Zero (2-4 weeks), MVP Development (8-12 weeks with snap.mvp), Full Product Launch (12-20 weeks), Modernization Projects (12-24 weeks depending on scope). We prioritize rapid validation and iterative delivery—you'll see tangible progress within the first 2 weeks. Our AI-augmented approach and proprietary accelerators significantly compress timelines compared to traditional development.",
    },
    {
      question: "Do you provide ongoing support after launch?",
      answer:
        "Yes. Most clients transition from fixed-price MVP development to a dedicated Scale Pod for ongoing feature development, optimization, and support. We also offer maintenance-only engagements for clients who want to own development internally but need expert support for critical issues. Our goal is to be your long-term flexible engineering partner, adapting to your evolving needs.",
    },
    {
      question: "How does your Engineering Studio connect with your AI Studio?",
      answer:
        "Our studios work together seamlessly. The AI Studio focuses on strategic AI consulting, agentic workflow development, and AI Center of Excellence buildout. The Engineering Studio handles full-stack product development, modernization, and dedicated engineering pods. Many clients engage both—using AI Studio for AI strategy (AI Audits, P2R scoring) and Engineering Studio for implementation (building the AI-powered platform). It's a comprehensive approach to modern software delivery.",
    },
  ];

  const [activeTab, setActiveTab] = useState("tab1");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <PerformanceOptimizer>
      <div className="min-h-screen bg-background-dark">
        {/* Structured Data for SEO */}
        <ServiceSchema
          name="Custom Software Development & AI-Augmented Engineering Services"
          description="IndexNine's Engineering Studio provides comprehensive software development services including product launch, MVP development, legacy modernization, and dedicated engineering pods with proprietary AI-augmented accelerators for startups and enterprises."
          serviceType="Software Development"
        />

        <ServiceAreaSchema
          serviceName="Custom Software Development & AI-Augmented Engineering Services"
          serviceType="Software Development"
        />

        <WebPageSchema
          title="Custom Software Development Services | IndexNine"
          description="AI-augmented engineering services for product launch and modernization with dedicated pods and proprietary accelerators."
          url="https://www.indexnine.com/services/custom-software"
        />

        <BreadcrumbSchema
          items={[
            { name: "Services", url: "https://www.indexnine.com/services" },
            {
              name: "Custom Software Development",
              url: "https://www.indexnine.com/services/custom-software",
            },
          ]}
        />

        <FAQSchema faqItems={faqItems} />

        <SEOAnalytics />

        <Header />

        {/* 1. Hero Section */}
        <HeroSection />
        <div
          className={`${styles.sectionBgCustSoft} bg-white bg-fixed bg-cover`}
        >
          {/* 2. Tech Stack Section */}
          <TechStackSection />

          {/* 3. Philosophy Section */}
          <PhilosophySection />

          {/* 4. Evolution Story Section */}
          <EvolutionStorySection />

          {/* 5. Core Offerings Overview (2 Pillars) */}
          <CoreOfferingsOverviewSection />

          <div className="">
            <div className="tab-buttons text-left md:text-center px-8 mb-12">
              <button
                onClick={() => handleTabClick("tab1")}
                className={`px-6 py-1.5 mb-4 text-lg sm:text-xl font-semibold transition-all duration-300 font-montserrat border-l-4 text-left ${
                  activeTab === "tab1"
                    ? "border-brand-primary text-brand-primary"
                    : "border-foreground-dark/20 text-foreground-dark/40 hover:text-brand-primary"
                }`}
              >
                Product Launch
              </button>
              <button
                onClick={() => handleTabClick("tab2")}
                className={`px-6 py-1.5 mb-4 text-lg sm:text-xl font-semibold transition-all duration-300 font-montserrat border-l-4 text-left ${
                  activeTab === "tab2"
                    ? "border-primary text-brand-primary"
                    : "border-foreground-dark/20 text-foreground-dark/40 hover:text-brand-primary"
                }`}
              >
                Product Modernisation
              </button>
            </div>
            <div className="tab-content">
              {activeTab === "tab1" && (
                <div className="max-w-8xl mx-auto">
                  <div className="text-center">
                    <h2 className="text-2xl lg:text-3xl font-semibold mb-3 text-foreground-dark font-montserrat">
                      From Visionary Idea to Market-Defining Product
                    </h2>
                    <p className="text-sm sm:text-base text-foreground-dark/70 max-w-3xl mx-auto font-montserrat mb-6">
                      Launch your product with confidence through our proven
                      Sprint Zero methodology and proprietary acceleration
                      platforms.
                    </p>
                  </div>
                  <ProductLaunchSection />
                </div>
              )}
              {activeTab === "tab2" && (
                <div className="max-w-8xl mx-auto">
                  <div className="text-center">
                    <h2 className="text-2xl lg:text-3xl font-semibold mb-3 text-foreground-dark font-montserrat">
                      From Technical Debt to Competitive Advantage
                    </h2>
                    <p className="text-sm sm:text-base text-foreground-dark/70 max-w-3xl mx-auto font-montserrat mb-6">
                      Transform legacy systems into modern, cloud-native
                      platforms that unlock innovation and reduce operational
                      costs.
                    </p>
                  </div>
                  <ProductModernizationSection />
                </div>
              )}
            </div>
          </div>

          {/* 11. Case Studies Section */}
          <CaseStudiesSection />

          {/* 12. Services Overview Section (Carousel) */}
          <ServicesOverviewSection />

          {/* 13. FAQ Section */}
          <FAQSection />

          {/* 14. Final CTA */}
          <FinalCTASection />
        </div>
        <Footer />
      </div>
    </PerformanceOptimizer>
  );
};

export default CustomSoftware;
