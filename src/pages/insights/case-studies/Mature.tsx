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

                  <div className="bg-[#4A2424] mt-12 mb-8 flex">
                    <div className="md:mr-[-4rem] md:pl-[4rem] md:pb-[1.5rem] md:mt-[-1.5rem]">
                      <img src={CaseInrImg} className="w-full h-full" />
                    </div>
                  </div>

                  <p className="text-md text-foreground-dark leading-relaxed mb-8">
                    For thousands of merchants across India, Genesys's platform was their lifeline to the world of e-commerce. The platform was an integration engine, connecting sellers on platforms like Amazon, Myntra, and Flipkart, and managing a constant flow of inventory updates, orders, and transactions. The problem? The engine was over 16 years old, built on legacy PHP, and was bursting at the seams.
                  </p>

                  <p className="text-md text-foreground-dark leading-relaxed mb-8">
                    The platform's core architectural flaw was a tightly-coupled, monolithic design. With 178 different e-commerce integrations, the system was incredibly fragile. Every time one of those partners made a change to their API—an almost daily occurrence—it sent a shockwave through the entire system, causing it to crash.
                  </p>

                  <p className="text-md text-foreground-dark leading-relaxed mb-8">
                    The challenge was compounded by the need to maintain 100% uptime while completely rebuilding the architecture. Any downtime would directly impact thousands of merchants' livelihoods and damage trust built over 16 years of operation.
                  </p>
                  <a id="results" className="absolute mt-[100px]"></a>
                </div>
              </div>
            </section>

            {/* Results Section */}
            <section className="bg-gradient-to-r from-[#fff] to-[#899CFF10] shadow-xl rounded-2xl border border-[#00000025] p-8 mb-12">
              <div className="container mx-auto px-6 lg:px-8">
                <div className="max-w-5xl mx-auto">
                  <h2 className="text-2xl font-bold text-foreground-dark mb-12 text-center font-montserrat">
                    Zero-Downtime Transformation Success
                  </h2>
                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                    <div className={`rounded-xl py-4 px-1 text-center border border-[#505DFD] ${styles.middleCardBg2}`}>
                      <h3 className="text-3xl font-bold text-white mb-2 font-montserrat">100%</h3>
                      <p className="text-foreground text-xs mb-0">Uptime Maintained</p>
                      <span className="inline-block w-12 h-1 rounded-sm bg-[#ffffff75]"></span>
                    </div>
                    <div className={`rounded-xl py-4 px-1 text-center border border-[#505DFD] ${styles.middleCardBg2}`}>
                      <h3 className="text-3xl font-bold text-white mb-2 font-montserrat">178</h3>
                      <p className="text-foreground text-xs mb-0">Integrations Preserved</p>
                      <span className="inline-block w-12 h-1 rounded-sm bg-[#ffffff75]"></span>
                    </div>
                    <div className={`rounded-xl py-4 px-1 text-center border border-[#505DFD] ${styles.middleCardBg2}`}>
                      <h3 className="text-3xl font-bold text-white mb-2 font-montserrat">300%</h3>
                      <p className="text-foreground text-xs mb-0">Performance Boost</p>
                      <span className="inline-block w-12 h-1 rounded-sm bg-[#ffffff75]"></span>
                    </div>
                    <div className={`rounded-xl py-4 px-1 text-center border border-[#505DFD] ${styles.middleCardBg2}`}>
                      <h3 className="text-3xl font-bold text-white mb-2 font-montserrat">Zero</h3>
                      <p className="text-foreground text-xs mb-0">Downtime Events</p>
                      <span className="inline-block w-12 h-1 rounded-sm bg-[#ffffff75]"></span>
                    </div>
                  </div>
                  <div className={`p-8 bg-background relative md:mr-[-6rem] rounded-xl mb-6 ${styles.middleCardBg2}`}>
                    <p className="text-lg text-foreground text-center font-medium">
                      The modernization was completed with 100% uptime maintained throughout the entire migration process. The event-driven architecture positioned Genesys for future innovation, enabling rapid feature deployment and 10x transaction volume capacity.
                    </p>
                    <a id="whyWorked"></a>
                  </div>
                </div>
              </div>
            </section>

            {/* Why It Worked Section */}
            <section className="bg-gradient-to-r from-[#fff] to-[#899CFF10] shadow-xl rounded-2xl border border-[#00000025] p-8 mb-12">
              <div className="container mx-auto px-6 lg:px-8">
                <div className="max-w-5xl mx-auto">
                  <div className="mb-0">
                    <h3 className="text-xl font-bold text-foreground-dark mb-6 font-montserrat text-center">
                      Why It Worked
                      <br />
                      <span className="inline-block w-24 h-1 rounded-sm bg-gradient-to-r from-brand-purple/50 via-[#505CFD] to-brand-purple/50"></span>
                    </h3>
                    <p className="text-md text-foreground-dark-muted text-center mb-8">
                      The Genesys platform modernization showcases our expertise in mission-critical system transformation.
                    </p>

                    <div className="grid md:grid-cols-2 gap-6">
                      {[
                        "Phased Migration Strategy: The gradual, service-by-service migration approach minimized risk while enabling continuous improvement and validation at each phase of the transformation.",
                        "Event-Driven Architecture: Apache Kafka-based event streaming enabled seamless communication between legacy and modern components during the transition while providing scalability for future growth.",
                        "Risk Mitigation Framework: Comprehensive testing, monitoring, and rollback procedures ensured zero-downtime migration with full confidence in system stability throughout the process.",
                        "Integration Preservation: Advanced API gateway and service mesh architecture maintained full backward compatibility while enabling modern microservices patterns and improved performance."
                      ].map((result, index) => (
                        <div key={index} className="mb-4">
                          <span className="inline-block w-full h-1 rounded-sm bg-gradient-to-r from-brand-purple/50 via-[#505CFD] to-brand-purple/50 mb-2"></span>
                          <div className="flex flex-col text-center">
                            <span className="mx-auto flex w-12 h-12 rounded-full bg-gradient-to-r from-[#505CFD19] to-brand-purple/20 mb-2">
                              <CheckCircle className="w-5 h-5 text-[#8389DC] m-auto" />
                            </span>
                            <span className="text-foreground-dark">{result}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <section className={`py-24 lg:py-32 ${styles.ctaBg}`}>
        <div className="container mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold mb-6 text-foreground-white">
            <span className="leading-[1.4]">
              Ready to Modernize Your Platform?
            </span>
          </h2>
          <p className="text-xl text-foreground/80 mb-8 max-w-3xl mx-auto font-montserrat">
            Transform your legacy systems with confidence. Let's build the foundation for your next decade of growth with zero-downtime migration and enterprise-grade architecture.
          </p>
          <p className="text-lg text-foreground/70 mb-12 max-w-xl mx-auto font-montserrat">
            Ready to modernize your mission-critical platform? Let's discuss your transformation strategy.
          </p>
          <Button variant="btnSecondary" size="lg">
            Get Started
          </Button>
        </div>
      </section>
      <div className="bg-background">
        <Footer />
      </div>
    </div>
  );
};

export default MatureCaseStudy;