import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { CardGlass } from "@/components/ui/CardGlass";
import { Section } from "@/components/ui/section";
import {
  ArrowRight,
  Shield,
  RefreshCw,
  Eye,
  Users,
  Settings,
  Clock,
  Download,
  CheckCircle,
  ChevronDown,
  ChevronUp,
  Brain,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LivingVoidBackground from "@/components/LivingVoidBackground";
import {
  ServiceSchema,
  WebPageSchema,
  BreadcrumbSchema,
  FAQSchema,
} from "@/components/SEOStructuredData";
import { useSEO } from "@/hooks/useSEO";
import styles from "../../assets/css/stylesheet.module.css";

const Enterprise = () => {
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setExpandedFAQ(expandedFAQ === index ? null : index);
  };

  const faqData = [
    {
      question: "What is 'technical debt' and why is it a problem for my enterprise?",
      answer: "Technical debt is the implied cost of rework caused by choosing an easy (limited) solution now instead of using a better approach that would take longer. It slows down future development, increases bugs, creates security vulnerabilities, and makes it difficult to scale or add new features, ultimately hindering innovation and growth.",
    },
    {
      question: "Our legacy system is business-critical. How do you modernize it without disrupting our operations?",
      answer: "We specialize in minimizing disruption. Our approach involves a phased migration strategy, often using patterns like the 'strangler fig' to incrementally replace parts of the old system with new microservices. We build in parallel, run extensive tests, and ensure a seamless transition for your users and data.",
    },
    {
      question: "How is Indexnine's approach different from a large, traditional consulting firm?",
      answer: "Our key difference is our 'practitioner-led' philosophy. Our strategists and architects are active builders, not just theorists. We combine high-level strategic planning with deep, hands-on engineering expertise. This ensures our recommendations are not only visionary but also practical, actionable, and ready for implementation by our integrated teams.",
    },
    {
      question: "How do you measure the ROI of a modernization project?",
      answer: "ROI is measured against the specific business goals we establish in the initial assessment. Metrics often include: reduction in operational/maintenance costs, increased developer velocity (faster time-to-market for new features), improved system uptime and performance, and the enablement of new revenue streams that were previously impossible.",
    },
  ];

  // Comprehensive SEO implementation
  useSEO({
    title: "Enterprise Transformation Services | Product Modernization & AI Strategy | IndexNine",
    description: "IndexNine's Enterprise Studio helps businesses modernize legacy systems, eliminate technical debt, and implement robust AI and QA strategies. Engineer resilience and scale with confidence.",
    keywords: "enterprise transformation services, product modernization, legacy system modernization, technical debt, enterprise AI strategy, quality assurance engineering, test automation services, AI risk management",
    canonicalUrl: "https://www.indexnine.com/engagement/enterprise",
    ogImage: "https://www.indexnine.com/images/og-enterprise-studio.png",
    ogType: "website",
    schemaType: "WebPage",
  });

  return (
    <div className="min-h-screen bg-background">
      <ServiceSchema
        name="Enterprise Transformation Services"
        description="Strategic partnership for modernizing mission-critical systems, eliminating technical debt, and implementing scalable AI and Quality Assurance frameworks to drive enterprise growth and resilience."
        serviceType="Technology Consulting"
      />
      <WebPageSchema
        title="Enterprise Transformation Services | Product Modernization & AI Strategy | IndexNine"
        description="IndexNine's Enterprise Studio helps businesses modernize legacy systems, eliminate technical debt, and implement robust AI and QA strategies. Engineer resilience and scale with confidence."
        url="https://www.indexnine.com/engagement/enterprise"
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://www.indexnine.com" },
          { name: "Engagement Models", url: "https://www.indexnine.com/engagement" },
          { name: "Enterprise Studio", url: "https://www.indexnine.com/engagement/enterprise" },
        ]}
      />
      <FAQSchema faqItems={faqData} />

      <Header />

      {/* Hero Section */}
      <section className="relative min-h-[780px] overflow-hidden bg-black">
        <LivingVoidBackground />
        <div className="relative z-10 container mx-auto px-4 sm:px-6 pt-32 sm:pt-48 pb-16 sm:pb-24">
          <div className="max-w-5xl mx-auto text-center lg:text-left">
            <div className="mb-6">
              <span className="inline-block px-4 sm:px-6 py-2 sm:py-3 bg-brand-primary/10 text-brand-primary rounded-full text-xs sm:text-sm font-medium border border-brand-primary/20 backdrop-blur-sm">
                The IndexNine Enterprise Studio
              </span>
            </div>
            <h1 className="text-[2rem] sm:text-[2.5rem] lg:text-[3.5rem] xl:text-[4rem] font-semibold text-foreground mb-6 leading-tight animate-fade-in font-montserrat">
              Engineer Resilience.{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Modernize for Tomorrow
              </span>
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-foreground/85 mb-8 leading-relaxed font-light animate-slide-up font-montserrat max-w-4xl">
              The IndexNine Enterprise Studio is your strategic partner for transforming mission-critical systems. We help you eliminate technical debt, scale with confidence, and embed a culture of engineering excellence to future-proof your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-scale-in">
              <Button
                variant="btnPrimary"
                size="xl"
                className="min-w-[280px] text-sm sm:text-base"
                onClick={() => {
                  window.open(
                    "https://calendly.com/vaughn-soratos-indexnine",
                    "_blank"
                  );
                }}
              >
                Schedule a Modernization Assessment
              </Button>
              <Button
                variant="btnSecondary"
                size="xl"
                className="min-w-[280px] text-sm sm:text-base"
                onClick={() => document.getElementById("ai-audit")?.scrollIntoView({ behavior: "smooth" })}
              >
                Explore AI Risk Audits
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Statement Section */}
      <Section
        variant="light"
        containerSize="6xl"
        className="py-16 sm:py-24 lg:py-32 bg-background-light"
      >
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-semibold mb-6 text-foreground-dark">
            Your Technology is Your Business.{" "}
            <span className="text-brand-primary leading-tight block sm:inline">
              Is It Ready for the Future?
            </span>
          </h2>
          <div className="text-base sm:text-lg text-foreground-dark-muted leading-relaxed space-y-4 sm:space-y-6 px-4">
            <p>
              In the enterprise world, the very systems that brought you success can become the anchors that hold you back. Technical debt slows innovation, legacy platforms create security risks, and inefficient processes burn resources, preventing you from competing effectively.
            </p>
            <p>
              The Enterprise Studio was designed to solve these challenges head-on. We provide the strategic consulting, deep technical expertise, and battle-tested frameworks to modernize your technology, optimize your processes, and transform your engineering organization into a powerful engine for growth.
            </p>
          </div>
        </div>
      </Section>

      {/* Our Enterprise Offerings Section */}
      <section className={`py-16 sm:py-24 lg:py-32 bg-background relative overflow-hidden ${styles.sectionBgData2}`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-semibold mb-6 text-foreground-dark">
              A Full-Spectrum Partner for{" "}
              <span className="text-brand-primary leading-tight block sm:inline">
                Enterprise Transformation
              </span>
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-foreground-dark-muted max-w-4xl mx-auto px-4">
              We offer a suite of services designed to address the most critical challenges facing modern enterprises.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
            <CardGlass className="group p-6 sm:p-8 hover:shadow-xl transition-all duration-300">
              <div
                className={`relative w-16 sm:w-20 h-16 sm:h-20 flex mb-6 items-center justify-center transition-all ${styles.icnBg}`}
              >
                <RefreshCw className="w-6 sm:w-8 h-6 sm:h-8 text-brand-primary" />
              </div>
              <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-foreground-dark mb-3 sm:mb-4 leading-tight">
                Product Modernization
              </h3>
              <p className="text-sm sm:text-base text-foreground-dark-muted mb-4 sm:mb-6 leading-relaxed">
                Transform your monolithic applications into scalable, cloud-native architectures. We meticulously analyze your existing systems, devise phased migration strategies, and execute with minimal business disruption.
              </p>
              <div className="space-y-2">
                <h4 className="font-semibold text-foreground-dark text-sm sm:text-base">
                  Offerings:
                </h4>
                <ul className="text-xs sm:text-sm text-foreground-dark-muted space-y-1">
                  <li>• Monolith to Microservices Migration</li>
                  <li>• Cloud-Native Development</li>
                  <li>• Technology Stack Upgrades</li>
                  <li>• API-First Architecture Design</li>
                </ul>
              </div>
            </CardGlass>

            <CardGlass className="group p-6 sm:p-8 hover:shadow-xl transition-all duration-300">
              <div
                className={`relative w-16 sm:w-20 h-16 sm:h-20 flex mb-6 items-center justify-center transition-all ${styles.icnBg}`}
              >
                <Shield className="w-6 sm:w-8 h-6 sm:h-8 text-brand-primary" />
              </div>
              <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-foreground-dark mb-3 sm:mb-4 leading-tight">
                QAE & Test Automation
              </h3>
              <p className="text-sm sm:text-base text-foreground-dark-muted mb-4 sm:mb-6 leading-relaxed">
                Enterprise-grade quality assurance that goes beyond testing. We embed quality into every development stage, implementing comprehensive automation frameworks and performance testing protocols.
              </p>
              <div className="space-y-2">
                <h4 className="font-semibold text-foreground-dark text-sm sm:text-base">
                  Offerings:
                </h4>
                <ul className="text-xs sm:text-sm text-foreground-dark-muted space-y-1">
                  <li>• End-to-End Test Automation</li>
                  <li>• Performance & Load Testing</li>
                  <li>• Security Testing & Compliance</li>
                  <li>• QA Process Optimization</li>
                </ul>
              </div>
            </CardGlass>

            <CardGlass className="group p-6 sm:p-8 hover:shadow-xl transition-all duration-300" id="ai-audit">
              <div
                className={`relative w-16 sm:w-20 h-16 sm:h-20 flex mb-6 items-center justify-center transition-all ${styles.icnBg}`}
              >
                <Eye className="w-6 sm:w-8 h-6 sm:h-8 text-brand-primary" />
              </div>
              <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-foreground-dark mb-3 sm:mb-4 leading-tight">
                AI Audit & Risk Management
              </h3>
              <p className="text-sm sm:text-base text-foreground-dark-muted mb-4 sm:mb-6 leading-relaxed">
                Strategic AI implementation with proper governance. Our comprehensive AI audits assess viability, security, and ethical implications, ensuring your AI initiatives deliver measurable ROI.
              </p>
              <div className="space-y-2">
                <h4 className="font-semibold text-foreground-dark text-sm sm:text-base">
                  Offerings:
                </h4>
                <ul className="text-xs sm:text-sm text-foreground-dark-muted space-y-1">
                  <li>• AI Strategy & Roadmap Development</li>
                  <li>• AI Readiness Assessment</li>
                  <li>• AI Governance & Risk Audit</li>
                  <li>• Ethical AI Implementation</li>
                </ul>
              </div>
            </CardGlass>
          </div>
        </div>
      </section>

      {/* Process Maturity Section */}
      <div className="bg-gradient-to-t from-background-light via-background to-background-light text-foreground">
        <div className={`${styles.sectionBgData}`}>
          <Section
            variant="light"
            containerSize="6xl"
            className="bg-transparent py-16 sm:py-24 lg:py-32"
          >
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-semibold mb-6 text-foreground-dark font-montserrat">
                The IndexNine Difference:{" "}
                <span className="text-brand-primary leading-tight block sm:inline">
                  Practitioner-Led Transformation
                </span>
              </h2>
              <p className="text-lg sm:text-xl text-foreground-dark-muted max-w-3xl mx-auto px-4">
                Technology is only half the battle. Our approach is rooted in a culture of process maturity and hands-on expertise.
              </p>
            </div>

            <div className="max-w-4xl mx-auto text-center">
              <CardGlass variant="light" className="p-6 sm:p-8 mb-8">
                <Settings className="w-12 sm:w-16 h-12 sm:h-16 text-brand-primary mx-auto mb-6" />
                <p className="text-base sm:text-lg text-foreground-dark-muted leading-relaxed">
                  Our key differentiator is our 'practitioner-led' philosophy. Our strategists and architects are active builders, not just theorists. We establish clear communication cadences, robust project management frameworks, and risk mitigation strategies to ensure predictable outcomes, transparent collaboration, and continuous improvement across your organization.
                </p>
              </CardGlass>
            </div>
          </Section>

          {/* Case Studies Section */}
          <Section
            variant="alternate"
            containerSize="6xl"
            className="bg-transparent py-16 sm:py-24 lg:py-32"
          >
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-semibold mb-6 text-foreground-dark font-montserrat">
                Engineering Transformation{" "}
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  in Action
                </span>
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
              <CardGlass className="group p-6 sm:p-8 hover:shadow-xl transition-all duration-300">
                <div
                  className={`relative w-16 sm:w-20 h-16 sm:h-20 flex mb-6 items-center justify-center transition-all ${styles.icnBg}`}
                >
                  <RefreshCw className="w-6 sm:w-8 h-6 sm:h-8 text-brand-primary" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-foreground-dark mb-4 leading-tight">
                  From Monolith to Market Leader: Modernizing an Enterprise Insurance Platform
                </h3>
                <p className="text-sm sm:text-base text-foreground-dark-muted mb-6 leading-relaxed">
                  Learn how we re-architected a critical legacy system, reducing latency by 60% and enabling the rapid launch of new product lines.
                </p>
                <Button variant="btnLink" size="link" className="text-sm sm:text-base">
                  Read the Case Study{" "}
                  <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                </Button>
              </CardGlass>

              <CardGlass className="group p-6 sm:p-8 hover:shadow-xl transition-all duration-300">
                <div
                  className={`relative w-16 sm:w-20 h-16 sm:h-20 flex mb-6 items-center justify-center transition-all ${styles.icnBg}`}
                >
                  <Shield className="w-6 sm:w-8 h-6 sm:h-8 text-brand-primary" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-foreground-dark mb-4 leading-tight">
                  Achieving 95% Test Automation for a Global Logistics Provider
                </h3>
                <p className="text-sm sm:text-base text-foreground-dark-muted mb-6 leading-relaxed">
                  Discover our process for building a comprehensive QA automation suite that cut regression testing time from two weeks to four hours.
                </p>
                <Button variant="btnLink" size="link" className="text-sm sm:text-base">
                  Read the Case Study{" "}
                  <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                </Button>
              </CardGlass>

              <CardGlass className="group p-6 sm:p-8 hover:shadow-xl transition-all duration-300">
                <div
                  className={`relative w-16 sm:w-20 h-16 sm:h-20 flex mb-6 items-center justify-center transition-all ${styles.icnBg}`}
                >
                  <Brain className="w-6 sm:w-8 h-6 sm:h-8 text-brand-primary" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-foreground-dark mb-4 leading-tight">
                  The CTO's Guide to AI Risk Management
                </h3>
                <p className="text-sm sm:text-base text-foreground-dark-muted mb-6 leading-relaxed">
                  A comprehensive framework for assessing and mitigating the technical, operational, and ethical risks of implementing AI solutions in the enterprise.
                </p>
                <Button variant="btnLink" size="link" className="text-sm sm:text-base">
                  Download the Whitepaper <Download className="w-4 sm:w-5 h-4 sm:h-5 ml-1" />
                </Button>
              </CardGlass>
            </div>
          </Section>
        </div>
      </div>

      {/* FAQ Section */}
      <section className="py-16 sm:py-24 lg:py-32 bg-background-light">
        <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-semibold mb-8 sm:mb-12 text-foreground-dark text-center">
            Your Enterprise Questions, Answered
          </h2>
          <div className="space-y-4 sm:space-y-6">
            {faqData.map((faq, index) => (
              <div key={index} className="bg-background border border-border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full p-4 sm:p-6 text-left flex items-center justify-between hover:bg-muted/50 transition-colors"
                  aria-expanded={expandedFAQ === index}
                  aria-controls={`faq-answer-${index}`}
                >
                  <h3 className="text-base sm:text-lg font-semibold text-foreground-dark pr-4 leading-tight">{faq.question}</h3>
                  {expandedFAQ === index ? (
                    <ChevronUp className="w-5 sm:w-6 h-5 sm:h-6 text-brand-primary flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 sm:w-6 h-5 sm:h-6 text-muted-foreground flex-shrink-0" />
                  )}
                </button>
                {expandedFAQ === index && (
                  <div 
                    id={`faq-answer-${index}`}
                    className="px-4 sm:px-6 pb-4 sm:pb-6 border-t border-border"
                  >
                    <p className="text-sm sm:text-base text-foreground-dark/80 leading-relaxed pt-4">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className={`py-16 sm:py-24 lg:py-32 text-white ${styles.ctaBg}`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-4xl">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-semibold mb-6 text-foreground-white leading-tight">
            Build a More Resilient, Scalable, and Innovative Future.
          </h2>
          <p className="text-lg sm:text-xl text-white/90 mb-8 max-w-3xl mx-auto px-4">
            Let's transform your technology from a cost center into your greatest competitive advantage. Schedule a complimentary assessment with our enterprise architects today.
          </p>
          <Button
            variant="btnSecondary"
            size="xl"
            className="min-w-[300px] text-sm sm:text-base"
            onClick={() => {
              window.open(
                "https://calendly.com/vaughn-soratos-indexnine",
                "_blank"
              );
            }}
          >
            Schedule Your Modernization Assessment <ArrowRight className="w-4 sm:w-5 h-4 sm:h-5 ml-2" />
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Enterprise;
