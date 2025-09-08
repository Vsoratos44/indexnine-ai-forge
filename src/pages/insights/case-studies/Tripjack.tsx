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
  Plane,
  Building,
} from "lucide-react";
import { Link } from "react-router-dom";
import styles from "../../../assets/css/stylesheet.module.css";
import BlogDetailsBg from "@/assets/images/blog-details-bg.webp";
import CaseInrImg from "@/assets/images/case-details-img.webp";

const leftNavLinks = [
  { href: "#intro1", label: "Introduction" },
  { href: "#challenge1", label: "Integration Bottleneck" },
  { href: "#solution1", label: "Modern Architecture" },
  { href: "#results", label: "Results & Impact" },
  { href: "#whyWorked", label: "Why It Worked" },
];

const TripjackCaseStudy = () => {
  const [selected, setSelected] = useState("#intro1");

  // SEO Configuration
  useSEO({
    title: "TripJack Travel Technology Case Study - B2B2C Platform Expansion | Indexnine",
    description: "Discover how Indexnine reduced TripJack's time-to-market by 75% through modern microservices architecture and launched their new B2B2C revenue channel.",
    keywords: "travel technology, B2B2C platform, microservices architecture, NDC protocol, airline integrations, platform modernization, time-to-market reduction",
    canonicalUrl: "https://indexnine.ai/insights/case-studies/tripjack",
    ogImage: "https://indexnine.ai/images/case-studies/tripjack-og.jpg",
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
        title="TripJack: Engineering the Platform for Next-Generation Travel"
        description="How Indexnine's Expertise in Microservices and API Integration Reduced Time-to-Market by 75%, Powering TripJack's Expansion into New B2B2C Revenue Streams."
        author="Indexnine"
        datePublished="2024-01-20"
        dateModified="2024-01-20"
        image="https://indexnine.ai/images/case-studies/tripjack-hero.jpg"
        url="https://indexnine.ai/insights/case-studies/tripjack"
      />

      <WebPageSchema
        title="TripJack Case Study: Travel Technology Platform Transformation"
        description="Strategic platform transformation case study showcasing B2B2C expansion and operational efficiency gains"
        url="https://indexnine.ai/insights/case-studies/tripjack"
      />

      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://indexnine.ai" },
          { name: "Insights", url: "https://indexnine.ai/insights" },
          { name: "Case Studies", url: "https://indexnine.ai/insights/case-studies" },
          { name: "TripJack", url: "https://indexnine.ai/insights/case-studies/tripjack" }
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
                      TripJack
                    </span>
                    <span className="inline-block px-6 py-2 bg-black/20 shadow-md text-white rounded-lg text-sm font-medium border border-white/30 backdrop-blur-sm mr-3">
                      <span className="text-brand-primary text-xs mr-2">
                        Industry
                      </span>{" "}
                      Travel Technology
                    </span>
                  </div>

                  <div className="inline-block p-8 bg-black/20 shadow-md text-white rounded-xl text-sm font-medium border border-white/30 backdrop-blur-sm">
                    <h1 className="text-4xl sm:text-3xl lg:text-[2.75rem] font-bold text-foreground mb-8 animate-fade-in font-montserrat md:flex gap-4 items-center">
                      <span className="leading-[1.05]">
                        TripJack:
                      </span>
                      <span className="bg-gradient-primary bg-clip-text text-[#505cfd] leading-[1.05]">
                        Engineering the Platform for Next-Generation Travel
                      </span>
                    </h1>
                    <p className="text-xl sm:text-lg text-foreground/100 mb-0 max-w-4xl leading-relaxed font-regular animate-slide-up font-montserrat">
                      How Indexnine's Expertise in Microservices and API Integration Reduced Time-to-Market by 75%, Powering TripJack's Expansion into New B2B2C Revenue Streams.
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
                      TripJack needed to modernize their legacy travel technology platform and expand into B2B2C markets while reducing integration time-to-market by 75% and maintaining system reliability for existing customers.
                    </p>
                    
                    <div className="grid md:grid-cols-4 gap-6">
                      <div className="relative overflow-hidden bg-[#ffffff09] border border-[#ffffff15] rounded-2xl p-6 hover:shadow-glass-sm transition-all duration-500 transform hover:scale-102 hover:-translate-y-2 animate-fade-in group h-full">
                        <div className="flex items-center gap-4 flex-col">
                          <span className="flex w-12 h-12 rounded-full bg-[#2E348233]">
                            <Plane className="w-5 h-5 text-white m-auto" />
                          </span>
                          <span className="text-white">Travel Tech</span>
                        </div>
                      </div>
                      <div className="relative overflow-hidden bg-[#ffffff09] border border-[#ffffff15] rounded-2xl p-6 hover:shadow-glass-sm transition-all duration-500 transform hover:scale-102 hover:-translate-y-2 animate-fade-in group h-full">
                        <div className="flex items-center gap-4 flex-col">
                          <span className="flex w-12 h-12 rounded-full bg-[#2E348233]">
                            <Building className="w-5 h-5 text-white m-auto" />
                          </span>
                          <span className="text-white">B2B2C Platform</span>
                        </div>
                      </div>
                      <div className="relative overflow-hidden bg-[#ffffff09] border border-[#ffffff15] rounded-2xl px-2 py-6 hover:shadow-glass-sm transition-all duration-500 transform hover:scale-102 hover:-translate-y-2 animate-fade-in group h-full">
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
                            <TrendingUp className="w-5 h-5 text-white m-auto" />
                          </span>
                          <span className="text-white">75% Faster</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Extended content sections would continue here... */}
            <section className="p-8 backdrop-blur-xl bg-[#00000010] border border-[#00000005] relative rounded-bl-2xl rounded-br-2xl shadow-inner shadow-white shadow-4xl mb-12">
              <div className="mx-auto relative z-10">
                <div className="max-w-8xl mx-auto">
                  <h3 className="text-lg font-semibold text-brand-primary-dark mb-4 font-montserrat">
                    Results & Impact
                  </h3>
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground-dark mb-8 font-montserrat">
                    Accelerated B2B2C Market Expansion
                  </h2>

                  <div className="grid md:grid-cols-3 gap-8 mb-8">
                    <div className="text-center p-6 bg-gradient-to-br from-brand-primary/10 to-brand-purple/10 rounded-2xl border border-brand-primary/20">
                      <div className="text-4xl font-bold text-brand-primary mb-2">75%</div>
                      <div className="text-sm text-foreground-muted">Time-to-Market Reduction</div>
                      <div className="text-xs text-foreground-muted mt-2">Faster integrations</div>
                    </div>
                    <div className="text-center p-6 bg-gradient-to-br from-brand-primary/10 to-brand-purple/10 rounded-2xl border border-brand-primary/20">
                      <div className="text-4xl font-bold text-brand-primary mb-2">50+</div>
                      <div className="text-sm text-foreground-muted">New B2B2C Partners</div>
                      <div className="text-xs text-foreground-muted mt-2">Revenue channel expansion</div>
                    </div>
                    <div className="text-center p-6 bg-gradient-to-br from-brand-primary/10 to-brand-purple/10 rounded-2xl border border-brand-primary/20">
                      <div className="text-4xl font-bold text-brand-primary mb-2">300%</div>
                      <div className="text-sm text-foreground-muted">Platform Scalability</div>
                      <div className="text-xs text-foreground-muted mt-2">Performance improvement</div>
                    </div>
                  </div>

                  <p className="text-md text-foreground-dark leading-relaxed mb-8">
                    TripJack successfully modernized their platform and launched new B2B2C revenue streams, reducing integration time-to-market by 75% while improving system performance by 300%. The modern architecture enabled rapid partner onboarding and scalable growth.
                  </p>
                  <a id="whyWorked" className="absolute mt-[100px]"></a>
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
                      A strategic "Grow" and "Product Modernization" engagement. Indexnine architected and built a modern, event-driven, microservices-based integration hub to streamline supplier onboarding. In parallel, we developed their new flagship B2B2C platform, enabling them to enter the direct-to-consumer market for the first time.
                    </p>
                    <div className="grid grid-cols md:grid-cols-4 gap-6">
                      <div className="relative overflow-hidden bg-[#ffffff09] border border-[#ffffff15] rounded-2xl p-6 hover:shadow-glass-sm transition-all duration-500 transform hover:scale-102 hover:-translate-y-2 animate-fade-in group h-full">
                        <div className="flex items-center gap-4 flex-col">
                          <span className="flex w-12 h-12 rounded-full bg-[#2E348233]">
                            <Workflow className="w-5 h-5 text-white m-auto" />
                          </span>
                          <span className="text-white">Integration Hub</span>
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
                            <Building className="w-5 h-5 text-white m-auto" />
                          </span>
                          <span className="text-white">B2B2C Platform</span>
                        </div>
                      </div>
                      <div className="relative overflow-hidden bg-[#ffffff09] border border-[#ffffff15] rounded-2xl p-6 hover:shadow-glass-sm transition-all duration-500 transform hover:scale-102 hover:-translate-y-2 animate-fade-in group h-full">
                        <div className="flex items-center gap-4 flex-col">
                          <span className="flex w-12 h-12 rounded-full bg-[#2E348233]">
                            <TrendingUp className="w-5 h-5 text-white m-auto" />
                          </span>
                          <span className="text-white">NDC Protocol</span>
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
                    The Growing Pains of a Market Leader
                  </h2>

                  <p className="text-md text-foreground-dark leading-relaxed mb-8">
                    TripJack had firmly established itself as a dominant force in India's B2B travel market. Their platform served as the critical technology backbone for thousands of travel agents, providing them with real-time access to a vast inventory of flights, hotels, and other travel products. They had successfully navigated the "Launch" and "Pivot" phases and were in a period of rapid growth.
                  </p>

                  <p className="text-md text-foreground-dark leading-relaxed mb-8">
                    However, this very success was exposing critical weaknesses in their underlying technology. Their platform, built on a traditional monolithic architecture, was struggling to keep pace with their business ambitions. They faced two primary challenges that were hindering their ability to execute on the "Grow" phase of their lifecycle.
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
                    Accelerating Growth Through Modern Architecture
                  </h2>

                  <p className="text-md text-foreground-dark leading-relaxed mb-8">
                    The transformation delivered remarkable results: 75% faster time-to-market for new airline integrations and the successful launch of a new B2B2C revenue channel. TripJack's modern architecture positioned them to rapidly adapt to industry changes and scale their operations efficiently.
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
                      Domain Expertise
                    </h4>
                    <p className="text-foreground-muted leading-relaxed mb-6">
                      Our deep understanding of travel technology standards like NDC protocol and airline integration patterns enabled rapid, effective solutions.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-foreground mb-4 font-montserrat">
                      Parallel Execution
                    </h4>
                    <p className="text-foreground-muted leading-relaxed mb-6">
                      Our ability to simultaneously modernize the core platform while building new B2B2C capabilities maximized time efficiency and business impact.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section className="bg-gradient-to-br from-brand-primary via-brand-primary-dark to-brand-purple rounded-3xl p-8 mt-12 text-center shadow-2xl">
              <h2 className="text-3xl font-bold text-white mb-4 font-montserrat">
                Ready to Scale Your Travel Platform?
              </h2>
              <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
                Transform your architecture for rapid growth. Let's build the foundation for your next expansion.
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

export default TripjackCaseStudy;