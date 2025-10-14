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
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Link } from "react-router-dom";

const Enterprise = () => {
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setExpandedFAQ(expandedFAQ === index ? null : index);
  };

  const faqData = [
    {
      question:
        "What is 'technical debt' and why is it a problem for my enterprise?",
      answer:
        "Technical debt is the implied cost of rework caused by choosing an easy (limited) solution now instead of using a better approach that would take longer. It slows down future development, increases bugs, creates security vulnerabilities, and makes it difficult to scale or add new features, ultimately hindering innovation and growth.",
    },
    {
      question:
        "Our legacy system is business-critical. How do you modernize it without disrupting our operations?",
      answer:
        "We specialize in minimizing disruption. Our approach involves a phased migration strategy, often using patterns like the 'strangler fig' to incrementally replace parts of the old system with new microservices. We build in parallel, run extensive tests, and ensure a seamless transition for your users and data.",
    },
    {
      question:
        "How is IndexNine's approach different from a large, traditional consulting firm?",
      answer:
        "Our key difference is our 'practitioner-led' philosophy. Our strategists and architects are active builders, not just theorists. We combine high-level strategic planning with deep, hands-on engineering expertise. This ensures our recommendations are not only visionary but also practical, actionable, and ready for implementation by our integrated teams.",
    },
    {
      question: "How do you measure the ROI of a modernization project?",
      answer:
        "ROI is measured against the specific business goals we establish in the initial assessment. Metrics often include: reduction in operational/maintenance costs, increased developer velocity (faster time-to-market for new features), improved system uptime and performance, and the enablement of new revenue streams that were previously impossible.",
    },
  ];

  // Comprehensive SEO implementation
  useSEO({
    title:
      "Enterprise Transformation Services | Product Modernization & AI Strategy | IndexNine",
    description:
      "IndexNine's Enterprise Studio helps businesses modernize legacy systems, eliminate technical debt, and implement robust AI and QA strategies. Engineer resilience and scale with confidence.",
    keywords:
      "enterprise transformation services, product modernization, legacy system modernization, technical debt, enterprise AI strategy, quality assurance engineering, test automation services, AI risk management",
    canonicalUrl: "https://www.indexnine.com/engagement/enterprise",
    ogImage: "https://www.indexnine.com/images/og-enterprise-studio.png",
    ogType: "website",
    schemaType: "WebPage",
  });

  const caseStudies = [
    {
      title:
        "From Monolith to Market Leader: Modernizing an Enterprise Insurance Platform",
      outcome:
        "Learn how we re-architected a critical legacy system, reducing latency by 60% and enabling the rapid launch of new product lines.",
      link: "/insights/case-studies",
      tag: "Modernization",
    },
    {
      title: "Achieving 95% Test Automation for a Global Logistics Provider",
      outcome:
        "Discover our process for building a comprehensive QA automation suite that cut regression testing time from two weeks to four hours.",
      link: "/insights/case-studies",
      tag: "Automation",
    },
    {
      title: "The CTO's Guide to AI Risk Management",
      outcome:
        "A comprehensive framework for assessing and mitigating the technical, operational, and ethical risks of implementing AI solutions in the enterprise.",
      link: "/insights/blogs/ai-assisted-software-engineering",
      tag: "Whitepaper",
    },
  ];

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
          {
            name: "Engagement Models",
            url: "https://www.indexnine.com/engagement",
          },
          {
            name: "Enterprise Studio",
            url: "https://www.indexnine.com/engagement/enterprise",
          },
        ]}
      />
      <FAQSchema faqItems={faqData} />

      <Header />

      {/* Hero Section */}
      <section className="relative min-h-[680px] overflow-hidden bg-black">
        <LivingVoidBackground />
        <div className="relative z-10 container mx-auto px-6 pt-48 pb-24">
          <div className="max-w-4xl mx-auto text-center lg:text-left ml-0">
            <h1 className="text-[2.5rem] sm:text-[3rem] lg:text-[4rem] xl:text-[4rem] font-semibold text-foreground mb-6 leading-[1.25] animate-fade-in font-montserrat">
              Engineer Resilience.{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Modernize for Tomorrow
              </span>
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-foreground/85 mb-8 leading-relaxed font-light animate-slide-up font-montserrat max-w-4xl">
              The IndexNine Enterprise Studio is your strategic partner for
              transforming mission-critical systems. We help you eliminate
              technical debt, scale with confidence, and embed a culture of
              engineering excellence to future-proof your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center animate-scale-in">
              <Button
                variant="btnPrimary"
                size="xl"
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
                className="min-w-[280px]"
                onClick={() =>
                  document
                    .getElementById("ai-audit")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Explore AI Risk Audits
              </Button>
            </div>
          </div>
        </div>
      </section>
      <div className={` ${styles.sectionBgData} bg-white bg-fixed`}>
        <Section
          variant="light"
          containerSize="6xl"
          className={`pb-24 lg:pb-32 bg-transparent relative overflow-hidden `}
        >
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold mb-6 text-foreground-dark ">
              Your Technology is Your Business.{" "}
              <br className="hidden sm:block" />
              <span className="text-brand-primary leading-[1.35]">
                Is It Ready for the Future?
              </span>
            </h2>
            <div className="text-base sm:text-lg text-foreground-dark-muted leading-relaxed space-y-4 sm:space-y-6 mb-8">
              <p>
                In the enterprise world, the very systems that brought you
                success can become the anchors that hold you back. Technical
                debt slows innovation, legacy platforms create security risks,
                and inefficient processes burn resources, preventing you from
                competing effectively.
              </p>
              <p>
                The Enterprise Studio was designed to solve these challenges
                head-on. We provide the strategic consulting, deep technical
                expertise, and battle-tested frameworks to modernize your
                technology, optimize your processes, and transform your
                engineering organization into a powerful engine for growth.
              </p>
            </div>
            <div className="flex justify-center">
              <Button
                variant="btnPrimary"
                onClick={() => {
                  window.open(
                    "https://calendly.com/vaughn-soratos-indexnine",
                    "_blank"
                  );
                }}
              >
                Schedule an Enterprise Assessment
              </Button>
            </div>
          </div>
        </Section>

        {/* Our Enterprise Offerings Section */}
        <section
          className={`pb-24 lg:pb-32 bg-transparent relative overflow-hidden `}
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16 lg:mb-20">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold mb-6 text-foreground-dark ">
                A Full-Spectrum Partner for{" "}
                <span className="text-brand-primary leading-[1.35]">
                  Enterprise Transformation
                </span>
              </h2>
              <p className="text-lg sm:text-xl text-foreground-dark-muted max-w-4xl mx-auto px-4">
                We offer a suite of services designed to address the most
                critical challenges facing modern enterprises.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <CardGlass className="group p-6 sm:p-8">
                <div
                  className={`relative w-20 h-20 flex mb-6 items-center justify-center transition-all ${styles.icnBg}`}
                >
                  <RefreshCw className="w-8 h-8 text-brand-primary" />
                </div>
                <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-foreground-dark mb-3 sm:mb-4 leading-tight">
                  Product Modernization
                </h3>
                <p className="text-sm sm:text-base text-foreground-dark-muted mb-4 sm:mb-6 leading-relaxed">
                  Transform your monolithic applications into scalable,
                  cloud-native architectures. We meticulously analyze your
                  existing systems, devise phased migration strategies, and
                  execute with minimal business disruption.
                </p>
                <div className="space-y-2 mb-6">
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
                <div className="flex justify-center">
                  <Button variant="btnPrimary">
                    Explore Product Modernization
                  </Button>
                </div>
              </CardGlass>

              <CardGlass className="group p-6 sm:p-8">
                <div
                  className={`relative w-20 h-20 flex mb-6 items-center justify-center transition-all ${styles.icnBg}`}
                >
                  <Shield className="w-8 h-8 text-brand-primary" />
                </div>
                <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-foreground-dark mb-3 sm:mb-4 leading-tight">
                  QAE & Test Automation
                </h3>
                <p className="text-sm sm:text-base text-foreground-dark-muted mb-4 sm:mb-6 leading-relaxed">
                  Enterprise-grade quality assurance that goes beyond testing.
                  We embed quality into every development stage, implementing
                  comprehensive automation frameworks and performance testing
                  protocols.
                </p>
                <div className="space-y-2 mb-6">
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
                <div className="flex justify-center">
                  <Button variant="btnPrimary">Explore QA Engineering</Button>
                </div>
              </CardGlass>

              <CardGlass className="group p-6 sm:p-8" id="ai-audit">
                <div
                  className={`relative w-20 h-20 flex mb-6 items-center justify-center transition-all ${styles.icnBg}`}
                >
                  <Eye className="w-8 h-8 text-brand-primary" />
                </div>
                <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-foreground-dark mb-3 sm:mb-4 leading-tight">
                  AI Audit & Risk Management
                </h3>
                <p className="text-sm sm:text-base text-foreground-dark-muted mb-4 sm:mb-6 leading-relaxed">
                  Strategic AI implementation with proper governance. Our
                  comprehensive AI audits assess viability, security, and
                  ethical implications, ensuring your AI initiatives deliver
                  measurable ROI.
                </p>
                <div className="space-y-2 mb-6">
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
                <div className="flex justify-center">
                  <Button variant="btnPrimary">Start Your AI Audit</Button>
                </div>
              </CardGlass>
            </div>
          </div>
        </section>

        <div className="bg-transparent text-foreground">
          <div>
            <Section
              containerSize="6xl"
              className="bg-transparent  lg:pt-0 pt-0"
            >
              <div className="text-center mb-16">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold mb-6 text-foreground-dark ">
                  The IndexNine Difference:{" "}
                  <span className="text-brand-primary leading-[1.35]">
                    Practitioner-Led Transformation
                  </span>
                </h2>
              </div>

              <div className="max-w-4xl mx-auto text-center">
                <CardGlass variant="light" className="mb-8">
                  <Settings className="w-16 h-16 text-brand-primary mx-auto mb-6" />
                  <p className="text-lg text-foreground-dark-muted leading-relaxed mb-8">
                    Our key differentiator is our 'practitioner-led' philosophy.
                    Our strategists and architects are active builders, not just
                    theorists. We establish clear communication cadences, robust
                    project management frameworks, and risk mitigation
                    strategies to ensure predictable outcomes, transparent
                    collaboration, and continuous improvement across your
                    organization.
                  </p>
                  <div className="flex justify-center">
                    <Button variant="btnPrimary">
                      Learn About Our Process
                    </Button>
                  </div>
                </CardGlass>
              </div>
            </Section>

            <Section
              variant="alternate"
              containerSize="full"
              className="bg-transparent container lg:pt-0 pt-0 px-0"
            >
              <div className="text-center mb-4">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-foreground-dark ">
                  Engineering Transformation{" "}
                  <span className="bg-gradient-primary bg-clip-text text-transparent">
                    in Action
                  </span>
                </h2>
              </div>
              <Carousel
                className="w-full"
                opts={{
                  align: "start",
                  loop: true,
                }}
              >
                <CarouselContent className="ml-4 mr-4">
                  {caseStudies.map((item, index) => {
                    return (
                      <CarouselItem
                        key={index}
                        className="px-3 py-8 sm:basis-1/1 md:basis-1/2 lg:basis-1/3"
                      >
                        <div className="relative group h-full bg-gradient-to-b from-brand-primary/40 via-brand-primary/5 to-brand-primary/5 border-glass-border rounded-[1.25rem] p-1 hover:shadow-glow  transition-all duration-500 transform group-hover:-translate-y-1 backdrop-blur-lg">
                          {/* Enhanced Glassmorphism Card */}

                          <div className="relative overflow-hidden bg-white rounded-2xl p-6 h-full flex flex-col">
                            <div>
                              <span className="inline-block px-4 mb-4 py-2 bg-brand-primary/10 text-brand-primary rounded-full text-xs font-semibold">
                                {item.tag}
                              </span>
                            </div>
                            {/* Content Header */}

                            {/* Image with Glassmorphism */}

                            {/* Content Body */}
                            <div className="relative flex-1 flex flex-col">
                              <h3 className="text-xl lg:text-2xl font-semibold text-foreground-dark mb-4 leading-tight font-montserrat group-hover:text-brand-primary transition-colors duration-300">
                                {item.title}
                              </h3>

                              <div className="relative flex items-start justify-between mb-6 text-foreground-dark">
                                {item.outcome}
                              </div>
                            </div>
                            <div className="text-left">
                              <Button variant="btnLink" size="link">
                                <Link
                                  className="flex items-center pr-2"
                                  to={item.link}
                                >
                                  {index === 2 ? (
                                    <>
                                      Download{" "}
                                      <Download className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                                    </>
                                  ) : (
                                    <>
                                      Read More{" "}
                                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                                    </>
                                  )}
                                </Link>
                              </Button>
                            </div>
                          </div>
                        </div>
                      </CarouselItem>
                    );
                  })}
                </CarouselContent>

                {/* Enhanced Glassmorphism Navigation */}
                <CarouselPrevious className="left-4 backdrop-blur-md bg-brand-primary/10 border-brand-primary/20 text-foreground-dark hover:bg-brand-primary/20 hover:text-brand-primary transition-all duration-300" />
                <CarouselNext className="right-4 backdrop-blur-md bg-brand-primary/10 border-brand-primary/20 text-foreground-dark hover:bg-brand-primary/20 hover:text-brand-primary transition-all duration-300" />
              </Carousel>
            </Section>
          </div>
        </div>

        {/* FAQ Section */}
        <section className="pb-24 lg:pb-32 bg-transparent">
          <div className="container mx-auto px-6 max-w-4xl">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold mb-12 text-foreground-dark text-center">
              Your Enterprise Questions, Answered
            </h2>
            <div className="space-y-0 bg-white rounded-lg shadow-lg border-t border-[#00000010] px-6">
              {faqData.map((faq, index) => (
                <div
                  key={index}
                  className="overflow-hidden border-b last:border-b-0"
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full py-6 text-left flex items-center justify-between"
                  >
                    <h3 className=" font-semibold text-foreground-dark">
                      {faq.question}
                    </h3>
                    {expandedFAQ === index ? (
                      <ChevronUp className="w-6 h-6 text-brand-primary" />
                    ) : (
                      <ChevronDown className="w-6 h-6 text-gray-500" />
                    )}
                  </button>
                  {expandedFAQ === index && (
                    <div className=" pb-6 ">
                      <p className="text-foreground-dark/80 leading-relaxed pt-0">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* Final CTA Section */}
      <section className={`py-24 lg:py-32 text-white ${styles.ctaBg}`}>
        <div className="container mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold mb-6 text-foreground-white">
            <span className="leading-[1.2]">
              Build a More Resilient, Scalable, and Innovative Future.
            </span>
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Let's transform your technology from a cost center into your
            greatest competitive advantage. Schedule a complimentary assessment
            with our enterprise architects today.
          </p>
          <Button
            variant="btnSecondary"
            size="lg"
            onClick={() => {
              window.open(
                "https://calendly.com/vaughn-soratos-indexnine",
                "_blank"
              );
            }}
          >
            Schedule Your Modernization Assessment
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Enterprise;
