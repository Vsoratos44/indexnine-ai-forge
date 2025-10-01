import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useSEO } from "@/hooks/useSEO";
import {
  ServiceSchema,
  WebPageSchema,
  BreadcrumbSchema,
  FAQSchema,
} from "@/components/SEOStructuredData";
import ServiceAreaSchema from "@/components/seo/ServiceAreaSchema";
import PerformanceOptimizer from "@/components/seo/PerformanceOptimizer";
import SEOAnalytics from "@/components/seo/SEOAnalytics";

// Section Components - New Narrative Flow
import { HeroSection } from "../../components/AIStudio/sections/HeroSection";
import { DilemmaSection } from "../../components/AIStudio/sections/DilemmaSection";
import { GrowthEngineIntroSection } from "../../components/AIStudio/sections/GrowthEngineIntroSection";
import { AssessmentSection } from "../../components/AIStudio/sections/AssessmentSection";
import { P2RFrameworkSection } from "../../components/AIStudio/sections/P2RFrameworkSection";
import { AuditProcessSection } from "../../components/AIStudio/sections/AuditProcessSection";
import { ValidatePhaseSection } from "../../components/AIStudio/sections/ValidatePhaseSection";
import { LaunchPhaseSection } from "../../components/AIStudio/sections/LaunchPhaseSection";
import { ScalePhaseSection } from "../../components/AIStudio/sections/ScalePhaseSection";
import { EngineeringPlatformsSection } from "../../components/AIStudio/sections/EngineeringPlatformsSection";
import { CaseStudiesSection } from "../../components/AIStudio/sections/CaseStudiesSection";
import { FAQSection } from "../../components/AIStudio/sections/FAQSection";
import { FinalCTASection } from "../../components/AIStudio/sections/FinalCTASection";

const AiMl = () => {
  // SEO Configuration
  useSEO({
    title:
      "AI Consulting Services & Machine Learning Solutions | Enterprise AI Implementation | IndexNine",
    description:
      "Leading AI consulting and machine learning services for enterprises. Strategic AI implementation, custom ML solutions, and AI transformation consulting. Partner with our AI Growth Engine to launch, validate, and scale intelligent systems that drive measurable business outcomes.",
    canonicalUrl: "https://www.indexnine.com/services/ai",
    keywords:
      "AI consulting services, machine learning solutions, enterprise AI implementation, AI transformation consulting, AI strategy consulting, custom AI development, ML engineering services, AI center of excellence, agentic AI development, LangGraph development, AI platform development, AI POC development, AI audit services, AI readiness assessment, enterprise AI adoption",
    ogImage: "https://www.indexnine.com/images/og-ai-studio.png",
    schemaType: "WebPage",
  });

  // FAQ data for structured data
  const faqItems = [
    {
      question: "What if our data isn't clean or ready for AI?",
      answer:
        "This is one of the most common challenges we help solve. Our AI Audit includes a comprehensive data readiness assessment. We'll identify gaps, recommend modernization strategies, and—if needed—can help you build the data infrastructure required for AI success. Many of our most successful engagements started with messy data.",
    },
    {
      question: "How do you ensure ROI on AI investments?",
      answer:
        "Our approach is fundamentally outcome-driven. We start every engagement by defining clear, measurable success metrics tied to your business goals. Our 'eval-first' engineering methodology ensures we validate accuracy and impact before launch. Post-deployment, we provide ongoing monitoring and optimization to maximize your return.",
    },
    {
      question:
        "Do you work with specific AI technologies or are you platform-agnostic?",
      answer:
        "We're platform-agnostic and framework-agnostic. We work with leading LLM providers (OpenAI, Anthropic, Google, AWS Bedrock), orchestration frameworks (LangGraph, LangChain), and cloud platforms (AWS, GCP, Azure). Our focus is on choosing the right technology for your specific needs, not pushing a particular vendor.",
    },
    {
      question: "How long does it take to see results from an AI project?",
      answer:
        "Timeline depends on scope. Our AI Audits deliver strategic clarity in 4-8 weeks. For implementation, our dedicated engineering pods can deliver a production-ready MVP in 8-12 weeks. We prioritize rapid validation and iterative delivery—you'll see tangible progress within the first month of any engagement.",
    },
    {
      question:
        "What does an 'AI Growth Engine' engagement look like long-term?",
      answer:
        "It evolves with you. It might start with a 4-8 week AI Audit to build a roadmap. This could lead to a 3-6 month LAUNCH phase to build your MVP. Post-launch, we often transition to a retainer-based SCALE phase, where we help you optimize the platform and build out your internal Center of Excellence over 12+ months.",
    },
    {
      question:
        "Can you help us if we've already started an AI project that's struggling?",
      answer:
        "Absolutely. We specialize in 'AI rescue' engagements. Our AI Audit can quickly diagnose what's not working—whether it's technical architecture, unclear success criteria, or organizational alignment issues. We then provide a clear path forward, often salvaging existing work while course-correcting for success.",
    },
  ];

  return (
    <PerformanceOptimizer enableOptimizations={true} reportToAnalytics={true}>
      <div className="min-h-screen bg-background-dark">
        {/* Structured Data for SEO */}
        <ServiceSchema
          name="AI & Machine Learning Engineering Services"
          description="IndexNine's AI Growth Engine provides comprehensive AI consulting, implementation, and scaling services including strategic AI audits, dedicated engineering pods, agentic workflow development, and AI Center of Excellence buildout for startups and enterprises."
          serviceType="AI Consulting"
        />

        <ServiceAreaSchema
          serviceName="Enterprise AI Consulting & Machine Learning Solutions"
          serviceType="AI Development"
        />

        <WebPageSchema
          title="AI Consulting Services | IndexNine"
          description="Transform your business with our AI Growth Engine - a comprehensive framework for launching, validating, and scaling AI initiatives."
          url="https://www.indexnine.com/services/ai"
        />

        <BreadcrumbSchema
          items={[
            { name: "Services", url: "https://www.indexnine.com/services" },
            {
              name: "AI & ML Engineering",
              url: "https://www.indexnine.com/services/ai",
            },
          ]}
        />

        <FAQSchema faqItems={faqItems} />

        <SEOAnalytics
          pageTitle="AI Consulting Services & Machine Learning Solutions | Enterprise AI Implementation | IndexNine"
          pageUrl="https://www.indexnine.com/services/ai"
          category="AI Services"
          enableSearchConsole={true}
          enableGTM={true}
        />

        <Header />

        {/* Page Sections - New Narrative Flow */}
        
        {/* 1. Hero Section */}
        <HeroSection />

        {/* 2. Problem Statement: "The AI Dilemma" */}
        <DilemmaSection />

        {/* 3. NEW: The Solution - AI Growth Engine Introduction */}
        <GrowthEngineIntroSection />

        {/* 4. NEW: Your On-Ramp - Assessment Section (includes Philosophy & Audit Offerings) */}
        <AssessmentSection />

        {/* 5. P2R Framework Section */}
        <P2RFrameworkSection />

        {/* 6. Audit Process Section */}
        <AuditProcessSection />

        {/* 7. NEW: Phase 2 - VALIDATE (Eval-First Engineering) */}
        <ValidatePhaseSection />

        {/* 8. NEW: Phase 1 - LAUNCH (Engineering Pods & Agentic Workflows) */}
        <LaunchPhaseSection />

        {/* 9. NEW: Phase 3 - SCALE (AI Center of Excellence & PRIME Framework) */}
        <ScalePhaseSection />

        {/* 10. NEW: Engineering Platforms & Capabilities */}
        <EngineeringPlatformsSection />

        {/* 11. NEW: Case Studies & Insights */}
        <CaseStudiesSection />

        {/* 12. FAQ Section */}
        <FAQSection />

        {/* 13. Final CTA */}
        <FinalCTASection />

        <Footer />
      </div>
    </PerformanceOptimizer>
  );
};

export default AiMl;
