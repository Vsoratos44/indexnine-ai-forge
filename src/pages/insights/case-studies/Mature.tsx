import React, { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useSEO } from "@/hooks/useSEO";
import {
  SEOStructuredData,
  ArticleSchema,
  WebPageSchema,
  BreadcrumbSchema,
} from "@/components/SEOStructuredData";
import {
  ArrowLeft,
  CheckCircle,
  Shield,
  Users,
  Target,
  TrendingUp,
  ArrowRightLeft,
  Lock,
  Scale,
  Settings,
  RefreshCcw,
  QuoteIcon,
  Boxes,
  Rocket,
  Workflow,
  Handshake,
} from "lucide-react";
import { Link } from "react-router-dom";
import styles from "../../../assets/css/stylesheet.module.css";
import BlogDetailsBg from "@/assets/images/blog-details-bg.webp";
import CaseInrImg from "@/assets/images/case-details-img.webp";

const leftNavLinks = [
  { href: "#intro1", label: "Introduction" },
  { href: "#challenge1", label: "Legacy System Challenge" },
  { href: "#solution1", label: "Event-Driven Architecture" },
  { href: "#results", label: "Results & Impact" },
  { href: "#whyWorked", label: "Why It Worked" },
];

const MatureCaseStudy = () => {
  const [selected, setSelected] = useState("#intro1");

  // SEO Configuration
  useSEO({
    title: "Genesys E-commerce Platform Modernization Case Study - Mission-Critical System Transformation | Indexnine",
    description: "Learn how Indexnine modernized Genesys's 16-year-old legacy e-commerce platform, achieving 100% uptime and zero-downtime migration of 178 integrations through event-driven architecture.",
    keywords: "platform modernization, legacy system migration, event-driven architecture, e-commerce platform, zero-downtime migration, system reliability, enterprise modernization, PHP modernization",
    canonicalUrl: "https://indexnine.ai/insights/case-studies/mature",
    ogImage: "https://indexnine.ai/images/case-studies/mature-og.jpg",
    ogType: "article"
  });

  useEffect(() => {
    const sections = leftNavLinks.map((link) =>
      document.querySelector(link.href)
    );
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setSelected(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: "0px 0px -60% 0px", threshold: 0 }
    );
    sections.forEach((section) => {
      if (section) observer.observe(section);
    });
    return () => {
      sections.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  return (
    <div className="min-h-screen bg-white relative bg-[#fff] bg-no-repeat">
      {/* SEO Structured Data */}
      <ArticleSchema
        title="Mission-Critical Modernization: Genesys E-commerce Platform"
        description="Product modernization and event-driven architecture transformation for a mature e-commerce platform serving thousands of merchants."
        author="Indexnine"
        datePublished="2024-01-30"
        dateModified="2024-01-30"
        image="https://indexnine.ai/images/case-studies/mature-hero.jpg"
        url="https://indexnine.ai/insights/case-studies/mature"
      />

      <WebPageSchema
        title="Mature Case Study: Genesys Platform Modernization"
        description="Legacy platform modernization case study showcasing event-driven architecture and zero-downtime migration success"
        url="https://indexnine.ai/insights/case-studies/mature"
      />

      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://indexnine.ai" },
          { name: "Insights", url: "https://indexnine.ai/insights" },
          { name: "Case Studies", url: "https://indexnine.ai/insights/case-studies" },
          { name: "Mature Phase", url: "https://indexnine.ai/insights/case-studies/mature" }
        ]}
      />
      <Header />
      
      {/* Hero Section */}
      <a id="intro1"></a>
      <div className={`bg-transparent pt-32 ${styles.sectionBgCase}`}>
        <div className="container grid md:grid-cols-3 gap-12">
          <div className="text-foreground-dark">
            <div className="sticky top-[128px] pb-8">
              <ul className="space-y-2">
                {leftNavLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={() => setSelected(link.href)}
                      className={`inline-blockpy-2 rounded transition 
                              ${
                                selected === link.href
                                  ? "text-brand-purple font-semibold"
                                  : "text-gray-700"
                              }
                              hover:text-brand-purple
                            `}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
              <div
                className={`px-8 mt-8 mb-4 py-12 text-center rounded-2xl text-white ${styles.sideCardBg}`}
              >
                <h3 className="text-3xl font-bold">
                  Want to Share Your Insights?
                </h3>
                <p className="text-xl py-8">
                  Join our community of thought leaders and share your expertise
                  with fellow technology professionals.
                </p>
                <Button type="submit" size="lg" variant="btnSecondary">
                  Continue
                </Button>
              </div>
            </div>
          </div>
          <div className="col-span-2">
            <section className="min-h-[400px] bg-gradient-to-br from-background via-background-alternate to-background rounded-2xl shadow-2xl flex mb-12 border backdrop-blur-xl relative overflow-hidden">
              <div className="mt-auto p-8">
                <div className="max-w-8xl mx-auto">
                  <div className="mb-6">
                    <span className="inline-block px-6 py-2 bg-black/20 shadow-md text-white rounded-lg text-sm font-medium border border-white/30 backdrop-blur-sm mr-3">
                      <span className="text-brand-primary text-xs mr-2">
                        Client
                      </span>{" "}
                      Genesys
                    </span>
                    <span className="inline-block px-6 py-2 bg-black/20 shadow-md text-white rounded-lg text-sm font-medium border border-white/30 backdrop-blur-sm mr-3">
                      <span className="text-brand-primary text-xs mr-2">
                        Industry
                      </span>{" "}
                      E-commerce
                    </span>
                  </div>

                  <div className="inline-block p-8 bg-black/20 shadow-md text-white rounded-xl text-sm font-medium border border-white/30 backdrop-blur-sm">
                    <h1 className="text-4xl sm:text-3xl lg:text-[2.75rem] font-bold text-foreground mb-8 animate-fade-in font-montserrat md:flex gap-4 items-center">
                      <span className="leading-[1.05]">
                        Mission-Critical Modernization:
                      </span>
                      <span className="bg-gradient-primary bg-clip-text text-[#505cfd] leading-[1.05]">
                        Genesys E-commerce Platform
                      </span>
                    </h1>
                    <p className="text-xl sm:text-lg text-foreground/100 mb-0 max-w-4xl leading-relaxed font-regular animate-slide-up font-montserrat">
                      Product modernization and event-driven architecture transformation for a mature e-commerce platform serving thousands of merchants.
                    </p>
                    <a id="challenge1"></a>
                  </div>
                </div>
              </div>
            </section>

            {/* Overview Section */}
            <section
              className={`p-8 bg-background relative overflow-hidden rounded-tl-2xl rounded-tr-2xl ${styles.middleCardBg2}`}
            >
              <div className="relative z-10">
                <div className="max-w-6xl mx-auto">
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-4 font-montserrat">
                      Challenge
                    </h3>
                    <p className="text-white mb-6">
                      Genesys faced the critical challenge of modernizing a 16-year-old legacy e-commerce platform that processed millions in transactions while maintaining 100% uptime and supporting 178 existing integrations during the transformation.
                    </p>
                    
                    <div className="grid md:grid-cols-4 gap-6">
                      <div className="relative overflow-hidden bg-[#ffffff09] border border-[#ffffff15] rounded-2xl p-6 hover:shadow-glass-sm transition-all duration-500 transform hover:scale-102 hover:-translate-y-2 animate-fade-in group h-full">
                        <div className="flex items-center gap-4 flex-col">
                          <span className="flex w-12 h-12 rounded-full bg-[#2E348233]">
                            <RefreshCcw className="w-5 h-5 text-white m-auto" />
                          </span>
                          <span className="text-white">Legacy Migration</span>
                        </div>
                      </div>
                      <div className="relative overflow-hidden bg-[#ffffff09] border border-[#ffffff15] rounded-2xl p-6 hover:shadow-glass-sm transition-all duration-500 transform hover:scale-102 hover:-translate-y-2 animate-fade-in group h-full">
                        <div className="flex items-center gap-4 flex-col">
                          <span className="flex w-12 h-12 rounded-full bg-[#2E348233]">
                            <Workflow className="w-5 h-5 text-white m-auto" />
                          </span>
                          <span className="text-white">Event-Driven Architecture</span>
                        </div>
                      </div>
                      <div className="relative overflow-hidden bg-[#ffffff09] border border-[#ffffff15] rounded-2xl px-2 py-6 hover:shadow-glass-sm transition-all duration-500 transform hover:scale-102 hover:-translate-y-2 animate-fade-in group h-full">
                        <div className="flex items-center gap-4 flex-col">
                          <span className="flex w-12 h-12 rounded-full bg-[#2E348233]">
                            <Shield className="w-5 h-5 text-white m-auto" />
                          </span>
                          <span className="text-white">Zero-Downtime</span>
                        </div>
                      </div>
                      <div className="relative overflow-hidden bg-[#ffffff09] border border-[#ffffff15] rounded-2xl p-6 hover:shadow-glass-sm transition-all duration-500 transform hover:scale-102 hover:-translate-y-2 animate-fade-in group h-full">
                        <div className="flex items-center gap-4 flex-col">
                          <span className="flex w-12 h-12 rounded-full bg-[#2E348233]">
                            <Scale className="w-5 h-5 text-white m-auto" />
                          </span>
                          <span className="text-white">Scalable Platform</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Detailed Challenge Section */}
            <section className="p-8 backdrop-blur-xl bg-[#00000010] border border-[#00000005] relative rounded-tl-2xl rounded-tr-2xl shadow-inner shadow-white shadow-4xl">
              <div className="mx-auto relative z-10">
                <div className="max-w-8xl mx-auto">
                  <h3 className="text-lg font-semibold text-brand-primary-dark mb-4 font-montserrat">
                    Challenge
                  </h3>
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground-dark mb-8 font-montserrat">
                    Mission-Critical Legacy System Modernization
                  </h2>

                  <div className="bg-[#4A2424] mt-12 mb-8 flex">
                    <div className="md:mr-[-4rem] md:pl-[4rem] md:pb-[1.5rem] md:mt-[-1.5rem]">
                      <img src={CaseInrImg} className="w-full h-full" />
                    </div>
                  </div>
                  
                  <p className="text-md text-foreground-dark leading-relaxed mb-8">
                    Genesys operated a 16-year-old e-commerce platform built on legacy PHP architecture that had grown organically over time, accumulating technical debt and performance limitations. The platform processed millions of dollars in transactions monthly and supported a complex ecosystem of 178 third-party integrations, making any modernization effort extremely high-risk.
                  </p>

                  <p className="text-md text-foreground-dark leading-relaxed mb-8">
                    The legacy system's monolithic architecture created scalability bottlenecks, made feature development increasingly difficult, and posed significant security risks. However, the platform was mission-critical to thousands of merchants who depended on it for their daily operations, requiring zero-downtime migration and seamless user experience throughout the transformation.
                  </p>

                  <p className="text-md text-foreground-dark leading-relaxed mb-8">
                    The challenge was compounded by the need to maintain full backward compatibility with existing integrations while implementing modern event-driven architecture, microservices patterns, and cloud-native infrastructure to support future growth and innovation.
                  </p>
                  <a id="solution1" className="absolute mt-[100px]"></a>
                </div>
              </div>
            </section>

            <section className="p-8 mb-12 bg-background relative overflow-hidden rounded-bl-2xl rounded-br-2xl" style={{backgroundImage: `url(${BlogDetailsBg})`}}>
              <div className="relative z-10">
                <div className="max-w-6xl mx-auto">
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-4 font-montserrat">
                      Solution
                    </h3>
                    <p className="text-white mb-6">
                      Indexnine implemented a phased modernization strategy using event-driven architecture and microservices patterns, enabling zero-downtime migration while maintaining full functionality and improving system performance by 300%.
                    </p>
                    
                    <div className="grid md:grid-cols-4 gap-6">
                      <div className="relative overflow-hidden bg-[#ffffff09] border border-[#ffffff15] rounded-2xl p-6 hover:shadow-glass-sm transition-all duration-500 transform hover:scale-102 hover:-translate-y-2 animate-fade-in group h-full">
                        <div className="flex items-center gap-4 flex-col">
                          <span className="flex w-12 h-12 rounded-full bg-[#2E348233]">
                            <Workflow className="w-5 h-5 text-white m-auto" />
                          </span>
                          <span className="text-white">Microservices</span>
                        </div>
                      </div>
                      <div className="relative overflow-hidden bg-[#ffffff09] border border-[#ffffff15] rounded-2xl p-6 hover:shadow-glass-sm transition-all duration-500 transform hover:scale-102 hover:-translate-y-2 animate-fade-in group h-full">
                        <div className="flex items-center gap-4 flex-col">
                          <span className="flex w-12 h-12 rounded-full bg-[#2E348233]">
                            <ArrowRightLeft className="w-5 h-5 text-white m-auto" />
                          </span>
                          <span className="text-white">Event Streaming</span>
                        </div>
                      </div>
                      <div className="relative overflow-hidden bg-[#ffffff09] border border-[#ffffff15] rounded-2xl px-2 py-6 hover:shadow-glass-sm transition-all duration-500 transform hover:scale-102 hover:-translate-y-2 animate-fade-in group h-full">
                        <div className="flex items-center gap-4 flex-col">
                          <span className="flex w-12 h-12 rounded-full bg-[#2E348233]">
                            <Shield className="w-5 h-5 text-white m-auto" />
                          </span>
                          <span className="text-white">Zero Downtime</span>
                        </div>
                      </div>
                      <div className="relative overflow-hidden bg-[#ffffff09] border border-[#ffffff15] rounded-2xl p-6 hover:shadow-glass-sm transition-all duration-500 transform hover:scale-102 hover:-translate-y-2 animate-fade-in group h-full">
                        <div className="flex items-center gap-4 flex-col">
                          <span className="flex w-12 h-12 rounded-full bg-[#2E348233]">
                            <CheckCircle className="w-5 h-5 text-white m-auto" />
                          </span>
                          <span className="text-white">Integration Preservation</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Technical Implementation Section */}
            <section className="p-8 backdrop-blur-xl bg-[#00000010] border border-[#00000005] relative rounded-tl-2xl rounded-tr-2xl shadow-inner shadow-white shadow-4xl">
              <div className="mx-auto relative z-10">
                <div className="max-w-8xl mx-auto">
                  <h3 className="text-lg font-semibold text-brand-primary-dark mb-4 font-montserrat">
                    Technical Implementation
                  </h3>
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground-dark mb-8 font-montserrat">
                    Event-Driven Architecture for Enterprise Scale
                  </h2>

                  <p className="text-md text-foreground-dark leading-relaxed mb-8">
                    The modernization strategy centered on implementing event-driven architecture with Apache Kafka as the backbone for real-time data streaming. This approach enabled gradual migration of services while maintaining system integrity and allowing new microservices to coexist with legacy components during the transition.
                  </p>

                  <p className="text-md text-foreground-dark leading-relaxed mb-8">
                    Each legacy component was carefully extracted into microservices using domain-driven design principles, with comprehensive API gateways and service mesh architecture ensuring secure, scalable communication between services while maintaining backwards compatibility with existing integrations.
                  </p>
                  <a id="results" className="absolute mt-[100px]"></a>
                </div>
              </div>
            </section>

            <section className="p-8 backdrop-blur-xl bg-[#00000010] border border-[#00000005] relative rounded-bl-2xl rounded-br-2xl shadow-inner shadow-white shadow-4xl mb-12">
              <div className="mx-auto relative z-10">
                <div className="max-w-8xl mx-auto">
                  <h3 className="text-lg font-semibold text-brand-primary-dark mb-4 font-montserrat">
                    Results & Impact
                  </h3>
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground-dark mb-8 font-montserrat">
                    Zero-Downtime Transformation Success
                  </h2>

                  <div className="grid md:grid-cols-3 gap-8 mb-8">
                    <div className="text-center p-6 bg-gradient-to-br from-brand-primary/10 to-brand-purple/10 rounded-2xl border border-brand-primary/20">
                      <div className="text-4xl font-bold text-brand-primary mb-2">100%</div>
                      <div className="text-sm text-foreground-muted">Uptime Maintained</div>
                      <div className="text-xs text-foreground-muted mt-2">Throughout migration</div>
                    </div>
                    <div className="text-center p-6 bg-gradient-to-br from-brand-primary/10 to-brand-purple/10 rounded-2xl border border-brand-primary/20">
                      <div className="text-4xl font-bold text-brand-primary mb-2">178</div>
                      <div className="text-sm text-foreground-muted">Integrations Preserved</div>
                      <div className="text-xs text-foreground-muted mt-2">Zero integration failures</div>
                    </div>
                    <div className="text-center p-6 bg-gradient-to-br from-brand-primary/10 to-brand-purple/10 rounded-2xl border border-brand-primary/20">
                      <div className="text-4xl font-bold text-brand-primary mb-2">300%</div>
                      <div className="text-sm text-foreground-muted">Performance Improvement</div>
                      <div className="text-xs text-foreground-muted mt-2">Faster response times</div>
                    </div>
                  </div>

                  <p className="text-md text-foreground-dark leading-relaxed mb-8">
                    The modernization was completed with 100% uptime maintained throughout the entire migration process. All 178 existing integrations were preserved and enhanced, with no service disruptions experienced by merchants or end users. The new architecture delivered 300% improvement in system performance and response times.
                  </p>

                  <p className="text-md text-foreground-dark leading-relaxed mb-8">
                    The event-driven architecture positioned Genesys for future innovation, enabling rapid feature deployment, improved scalability, and enhanced security. The modernized platform now supports 10x the transaction volume with improved reliability and maintainability.
                  </p>
                  <a id="whyWorked" className="absolute mt-[100px]"></a>
                </div>
              </div>
            </section>

            <section className="relative overflow-hidden bg-gradient-to-br from-brand-primary/5 via-transparent to-brand-purple/5 rounded-3xl p-8 shadow-glass border border-glass-border backdrop-blur-xl mb-12">
              <div className="relative z-10">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground-dark mb-8 font-montserrat">
                  Why It Worked
                </h2>
                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="flex w-10 h-10 rounded-full bg-brand-primary/10 border border-brand-primary/20">
                        <Workflow className="w-5 h-5 text-brand-primary m-auto" />
                      </div>
                      <h4 className="text-xl font-bold text-foreground font-montserrat">
                        Phased Migration Strategy
                      </h4>
                    </div>
                    <p className="text-foreground-muted leading-relaxed mb-6">
                      The gradual, service-by-service migration approach minimized risk while enabling continuous improvement and validation at each phase of the transformation.
                    </p>
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="flex w-10 h-10 rounded-full bg-brand-primary/10 border border-brand-primary/20">
                        <ArrowRightLeft className="w-5 h-5 text-brand-primary m-auto" />
                      </div>
                      <h4 className="text-xl font-bold text-foreground font-montserrat">
                        Event-Driven Architecture
                      </h4>
                    </div>
                    <p className="text-foreground-muted leading-relaxed mb-6">
                      Apache Kafka-based event streaming enabled seamless communication between legacy and modern components during the transition while providing scalability for future growth.
                    </p>
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="flex w-10 h-10 rounded-full bg-brand-primary/10 border border-brand-primary/20">
                        <Shield className="w-5 h-5 text-brand-primary m-auto" />
                      </div>
                      <h4 className="text-xl font-bold text-foreground font-montserrat">
                        Risk Mitigation Framework
                      </h4>
                    </div>
                    <p className="text-foreground-muted leading-relaxed mb-6">
                      Comprehensive testing, monitoring, and rollback procedures ensured zero-downtime migration with full confidence in system stability throughout the process.
                    </p>
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="flex w-10 h-10 rounded-full bg-brand-primary/10 border border-brand-primary/20">
                        <CheckCircle className="w-5 h-5 text-brand-primary m-auto" />
                      </div>
                      <h4 className="text-xl font-bold text-foreground font-montserrat">
                        Integration Preservation
                      </h4>
                    </div>
                    <p className="text-foreground-muted leading-relaxed mb-6">
                      Advanced API gateway and service mesh architecture maintained full backward compatibility while enabling modern microservices patterns and improved performance.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section
              className={`p-8 mb-12 bg-background relative overflow-hidden rounded-bl-2xl rounded-br-2xl ${styles.middleCardBg2}`}
            >
              <div className="relative z-10">
                <div className="max-w-6xl mx-auto">
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-4 font-montserrat">
                      Solution
                    </h3>
                    <p className="text-white mb-6">
                      A comprehensive platform modernization using event-driven architecture, asynchronous message queues, and a canonical data model to create a resilient, scalable system with zero-downtime migration.
                    </p>
                    <div className="grid grid-cols md:grid-cols-4 gap-6">
                      <div className="relative overflow-hidden bg-[#ffffff09] border border-[#ffffff15] rounded-2xl p-6 hover:shadow-glass-sm transition-all duration-500 transform hover:scale-102 hover:-translate-y-2 animate-fade-in group h-full">
                        <div className="flex items-center gap-4 flex-col">
                          <span className="flex w-12 h-12 rounded-full bg-[#2E348233]">
                            <Workflow className="w-5 h-5 text-white m-auto" />
                          </span>
                          <span className="text-white">Event-Driven</span>
                        </div>
                      </div>
                      <div className="relative overflow-hidden bg-[#ffffff09] border border-[#ffffff15] rounded-2xl p-6 hover:shadow-glass-sm transition-all duration-500 transform hover:scale-102 hover:-translate-y-2 animate-fade-in group h-full">
                        <div className="flex items-center gap-4 flex-col">
                          <span className="flex w-12 h-12 rounded-full bg-[#2E348233]">
                            <Settings className="w-5 h-5 text-white m-auto" />
                          </span>
                          <span className="text-white">Microservices</span>
                        </div>
                      </div>
                      <div className="relative overflow-hidden bg-[#ffffff09] border border-[#ffffff15] rounded-2xl px-2 py-6 hover:shadow-glass-sm transition-all duration-500 transform hover:scale-102 hover:-translate-y-2 animate-fade-in group h-full">
                        <div className="flex items-center gap-4 flex-col">
                          <span className="flex w-12 h-12 rounded-full bg-[#2E348233]">
                            <Shield className="w-5 h-5 text-white m-auto" />
                          </span>
                          <span className="text-white">Zero-Downtime</span>
                        </div>
                      </div>
                      <div className="relative overflow-hidden bg-[#ffffff09] border border-[#ffffff15] rounded-2xl p-6 hover:shadow-glass-sm transition-all duration-500 transform hover:scale-102 hover:-translate-y-2 animate-fade-in group h-full">
                        <div className="flex items-center gap-4 flex-col">
                          <span className="flex w-12 h-12 rounded-full bg-[#2E348233]">
                            <Scale className="w-5 h-5 text-white m-auto" />
                          </span>
                          <span className="text-white">Scalable</span>
                        </div>
                      </div>
                      <a id="solution1" className="absolute mt-[100px]"></a>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Challenge Section */}
            <section className="p-8 backdrop-blur-xl bg-[#00000010] border border-[#00000005] relative rounded-tl-2xl rounded-tr-2xl shadow-inner shadow-white shadow-4xl">
              <div className="mx-auto relative z-10">
                <div className="max-w-8xl mx-auto">
                  <h3 className="text-lg font-semibold text-brand-primary-dark mb-4 font-montserrat">
                    Challenge
                  </h3>
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground-dark mb-8 font-montserrat">
                    A Platform on the Brink of Collapse
                  </h2>

                  <p className="text-md text-foreground-dark leading-relaxed mb-8">
                    For thousands of merchants across India, Genesys's platform was their lifeline to the world of e-commerce. The platform was an integration engine, connecting sellers on platforms like Amazon, Myntra, and Flipkart, and managing a constant flow of inventory updates, orders, and transactions. The problem? The engine was over 16 years old, built on legacy PHP, and was bursting at the seams.
                  </p>

                  <p className="text-md text-foreground-dark leading-relaxed mb-8">
                    The platform's core architectural flaw was a tightly-coupled, monolithic design. With 178 different e-commerce integrations, the system was incredibly fragile. Every time one of those partners made a change to their API—an almost daily occurrence—it sent a shockwave through the entire system, causing it to crash.
                  </p>
                  <a id="results" className="absolute mt-[100px]"></a>
                </div>
              </div>
            </section>

            <section className="p-8 backdrop-blur-xl bg-[#00000010] border border-[#00000005] relative rounded-bl-2xl rounded-br-2xl shadow-inner shadow-white shadow-4xl mb-12">
              <div className="mx-auto relative z-10">
                <div className="max-w-8xl mx-auto">
                  <h3 className="text-lg font-semibold text-brand-primary-dark mb-4 font-montserrat">
                    Results & Impact
                  </h3>
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground-dark mb-8 font-montserrat">
                    Transforming a Mission-Critical Platform
                  </h2>

                  <p className="text-md text-foreground-dark leading-relaxed mb-8">
                    The modernized platform achieved 100% uptime and successfully migrated all 178 integrations without service interruption. The event-driven architecture eliminated system fragility and positioned Genesys for sustainable growth and continued market leadership.
                  </p>
                  <a id="whyWorked" className="absolute mt-[100px]"></a>
                </div>
              </div>
            </section>

            <section className="relative overflow-hidden bg-gradient-to-br from-brand-primary/5 via-transparent to-brand-purple/5 rounded-3xl p-8 shadow-glass border border-glass-border backdrop-blur-xl">
              <div className="relative z-10">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground-dark mb-8 font-montserrat">
                  Why It Worked
                </h2>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-xl font-bold text-foreground mb-4 font-montserrat">
                      Architectural Expertise
                    </h4>
                    <p className="text-foreground-muted leading-relaxed mb-6">
                      Our deep understanding of event-driven architecture and microservices enabled us to design a resilient system that could handle the complexity of 178 integrations.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-foreground mb-4 font-montserrat">
                      Disciplined De-risking
                    </h4>
                    <p className="text-foreground-muted leading-relaxed mb-6">
                      Our methodical approach to zero-downtime migration ensured business continuity while completely transforming the underlying architecture.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section className="bg-gradient-to-br from-brand-primary via-brand-primary-dark to-brand-purple rounded-3xl p-8 mt-12 text-center shadow-2xl">
              <h2 className="text-3xl font-bold text-white mb-4 font-montserrat">
                Ready to Modernize Your Platform?
              </h2>
              <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
                Transform your legacy systems with confidence. Let's build the foundation for your next decade of growth.
              </p>
              <Button size="lg" variant="secondary" className="text-brand-primary">
                Get Started
              </Button>
            </section>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default MatureCaseStudy;