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
  Brain,
  Zap,
} from "lucide-react";
import { Link } from "react-router-dom";
import styles from "../../../assets/css/stylesheet.module.css";
import BlogDetailsBg from "@/assets/images/blog-details-bg.webp";
import CaseInrImg from "@/assets/images/case-details-img.webp";

const leftNavLinks = [
  { href: "#intro1", label: "Introduction" },
  { href: "#challenge1", label: "AI Security Challenge" },
  { href: "#solution1", label: "MVP Development" },
  { href: "#results", label: "Results & Impact" },
  { href: "#whyWorked", label: "Why It Worked" },
];

const CygeniqCaseStudy = () => {
  const [selected, setSelected] = useState("#intro1");

  // SEO Configuration
  useSEO({
    title: "Case Study: CygenIQ - Engineering a First-Mover Advantage in AI Security | Indexnine",
    description: "Discover how Indexnine partnered with cybersecurity startup CygenIQ to launch a first-of-its-kind AI security platform, moving from concept to a fundable, interactive prototype in just six weeks.",
    keywords: "AI security platform, cybersecurity startup, MVP development, first-mover advantage, CISO platform, generative AI security, seed funding acceleration, interactive prototype",
    canonicalUrl: "https://indexnine.ai/insights/case-studies/cygeniq",
    ogImage: "https://indexnine.ai/images/case-studies/cygeniq-og.jpg",
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
        title="CygenIQ: Engineering a First-Mover Advantage in AI Security"
        description="A strategic MVP launch for a visionary startup, engineering a first-of-its-kind platform and delivering a fundable, high-fidelity interactive prototype in record time."
        author="Indexnine"
        datePublished="2024-01-15"
        dateModified="2024-01-15"
        image="https://indexnine.ai/images/case-studies/cygeniq-hero.jpg"
        url="https://indexnine.ai/insights/case-studies/cygeniq"
      />

      <WebPageSchema
        title="CygenIQ Case Study: AI Security Platform Launch"
        description="Strategic product launch case study showcasing first-mover advantage in AI security with accelerated seed funding"
        url="https://indexnine.ai/insights/case-studies/cygeniq"
      />

      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://indexnine.ai" },
          { name: "Insights", url: "https://indexnine.ai/insights" },
          { name: "Case Studies", url: "https://indexnine.ai/insights/case-studies" },
          { name: "CygenIQ", url: "https://indexnine.ai/insights/case-studies/cygeniq" }
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
                      CygenIQ
                    </span>
                    <span className="inline-block px-6 py-2 bg-black/20 shadow-md text-white rounded-lg text-sm font-medium border border-white/30 backdrop-blur-sm mr-3">
                      <span className="text-brand-primary text-xs mr-2">
                        Industry
                      </span>{" "}
                      AI Security
                    </span>
                  </div>

                  <div className="inline-block p-8 bg-black/20 shadow-md text-white rounded-xl text-sm font-medium border border-white/30 backdrop-blur-sm">
                    <h1 className="text-4xl sm:text-3xl lg:text-[2.75rem] font-bold text-foreground mb-8 animate-fade-in font-montserrat md:flex gap-4 items-center">
                      <span className="leading-[1.05]">
                        CygenIQ:
                      </span>
                      <span className="bg-gradient-primary bg-clip-text text-[#505cfd] leading-[1.05]">
                        Engineering a First-Mover Advantage in AI Security
                      </span>
                    </h1>
                    <p className="text-xl sm:text-lg text-foreground/100 mb-0 max-w-4xl leading-relaxed font-regular animate-slide-up font-montserrat">
                      A strategic MVP launch for a visionary startup, engineering a first-of-its-kind platform and delivering a fundable, high-fidelity interactive prototype in record time.
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
                      CygenIQ needed to rapidly develop a first-of-its-kind AI security platform that could provide CISOs with comprehensive visibility and control over AI implementations across their organizations, moving from concept to fundable prototype in just six weeks.
                    </p>
                    
                    <div className="grid md:grid-cols-4 gap-6">
                      <div className="relative overflow-hidden bg-[#ffffff09] border border-[#ffffff15] rounded-2xl p-6 hover:shadow-glass-sm transition-all duration-500 transform hover:scale-102 hover:-translate-y-2 animate-fade-in group h-full">
                        <div className="flex items-center gap-4 flex-col">
                          <span className="flex w-12 h-12 rounded-full bg-[#2E348233]">
                            <Brain className="w-5 h-5 text-white m-auto" />
                          </span>
                          <span className="text-white">AI Security</span>
                        </div>
                      </div>
                      <div className="relative overflow-hidden bg-[#ffffff09] border border-[#ffffff15] rounded-2xl p-6 hover:shadow-glass-sm transition-all duration-500 transform hover:scale-102 hover:-translate-y-2 animate-fade-in group h-full">
                        <div className="flex items-center gap-4 flex-col">
                          <span className="flex w-12 h-12 rounded-full bg-[#2E348233]">
                            <Rocket className="w-5 h-5 text-white m-auto" />
                          </span>
                          <span className="text-white">Rapid Prototype</span>
                        </div>
                      </div>
                      <div className="relative overflow-hidden bg-[#ffffff09] border border-[#ffffff15] rounded-2xl px-2 py-6 hover:shadow-glass-sm transition-all duration-500 transform hover:scale-102 hover:-translate-y-2 animate-fade-in group h-full">
                        <div className="flex items-center gap-4 flex-col">
                          <span className="flex w-12 h-12 rounded-full bg-[#2E348233]">
                            <Shield className="w-5 h-5 text-white m-auto" />
                          </span>
                          <span className="text-white">CISO Platform</span>
                        </div>
                      </div>
                      <div className="relative overflow-hidden bg-[#ffffff09] border border-[#ffffff15] rounded-2xl p-6 hover:shadow-glass-sm transition-all duration-500 transform hover:scale-102 hover:-translate-y-2 animate-fade-in group h-full">
                        <div className="flex items-center gap-4 flex-col">
                          <span className="flex w-12 h-12 rounded-full bg-[#2E348233]">
                            <Zap className="w-5 h-5 text-white m-auto" />
                          </span>
                          <span className="text-white">First-Mover</span>
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
                    Pioneering AI Security in Uncharted Territory
                  </h2>

                  <div className="bg-[#4A2424] mt-12 mb-8 flex">
                    <div className="md:mr-[-4rem] md:pl-[4rem] md:pb-[1.5rem] md:mt-[-1.5rem]">
                      <img src={CaseInrImg} className="w-full h-full" />
                    </div>
                  </div>
                  
                  <p className="text-md text-foreground-dark leading-relaxed mb-8">
                    As generative AI adoption exploded across enterprises, CygenIQ identified a critical security gap that no existing solutions addressed. Organizations were rapidly deploying AI tools without proper visibility, governance, or security controls, creating unprecedented risk exposure that traditional cybersecurity platforms couldn't manage.
                  </p>

                  <p className="text-md text-foreground-dark leading-relaxed mb-8">
                    The challenge was to create the first comprehensive AI security platform that could discover, monitor, and secure AI implementations across an enterprise's entire technology stack. This required developing entirely new security frameworks, detection methods, and governance models for AI-specific threats and vulnerabilities.
                  </p>

                  <p className="text-md text-foreground-dark leading-relaxed mb-8">
                    With limited time to capture the first-mover advantage in this emerging market, CygenIQ needed to move from conceptual vision to a fundable, interactive prototype that could demonstrate real value to enterprise CISOs and secure seed funding to accelerate development.
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
                      Indexnine implemented Sprint Zero methodology followed by rapid MVP development, creating a comprehensive AI security platform with discovery, monitoring, and governance capabilities specifically designed for enterprise CISO requirements.
                    </p>
                    
                    <div className="grid md:grid-cols-4 gap-6">
                      <div className="relative overflow-hidden bg-[#ffffff09] border border-[#ffffff15] rounded-2xl p-6 hover:shadow-glass-sm transition-all duration-500 transform hover:scale-102 hover:-translate-y-2 animate-fade-in group h-full">
                        <div className="flex items-center gap-4 flex-col">
                          <span className="flex w-12 h-12 rounded-full bg-[#2E348233]">
                            <Rocket className="w-5 h-5 text-white m-auto" />
                          </span>
                          <span className="text-white">Sprint Zero</span>
                        </div>
                      </div>
                      <div className="relative overflow-hidden bg-[#ffffff09] border border-[#ffffff15] rounded-2xl p-6 hover:shadow-glass-sm transition-all duration-500 transform hover:scale-102 hover:-translate-y-2 animate-fade-in group h-full">
                        <div className="flex items-center gap-4 flex-col">
                          <span className="flex w-12 h-12 rounded-full bg-[#2E348233]">
                            <Brain className="w-5 h-5 text-white m-auto" />
                          </span>
                          <span className="text-white">AI Engine</span>
                        </div>
                      </div>
                      <div className="relative overflow-hidden bg-[#ffffff09] border border-[#ffffff15] rounded-2xl px-2 py-6 hover:shadow-glass-sm transition-all duration-500 transform hover:scale-102 hover:-translate-y-2 animate-fade-in group h-full">
                        <div className="flex items-center gap-4 flex-col">
                          <span className="flex w-12 h-12 rounded-full bg-[#2E348233]">
                            <Shield className="w-5 h-5 text-white m-auto" />
                          </span>
                          <span className="text-white">Security Framework</span>
                        </div>
                      </div>
                      <div className="relative overflow-hidden bg-[#ffffff09] border border-[#ffffff15] rounded-2xl p-6 hover:shadow-glass-sm transition-all duration-500 transform hover:scale-102 hover:-translate-y-2 animate-fade-in group h-full">
                        <div className="flex items-center gap-4 flex-col">
                          <span className="flex w-12 h-12 rounded-full bg-[#2E348233]">
                            <Settings className="w-5 h-5 text-white m-auto" />
                          </span>
                          <span className="text-white">Interactive Prototype</span>
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
                    Building the First AI Security Platform
                  </h2>

                  <p className="text-md text-foreground-dark leading-relaxed mb-8">
                    The platform architecture combined advanced AI discovery algorithms with real-time monitoring capabilities, creating comprehensive visibility into AI tool usage, data flows, and potential security vulnerabilities across enterprise environments. The system could automatically detect shadow AI implementations and assess their risk profiles.
                  </p>

                  <p className="text-md text-foreground-dark leading-relaxed mb-8">
                    The CISO-focused interface provided executive dashboards, risk assessment frameworks, and governance tools specifically designed for AI security management, enabling security leaders to implement policies and controls for AI adoption while maintaining organizational innovation velocity.
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
                    Securing First-Mover Market Position
                  </h2>

                  <div className="grid md:grid-cols-3 gap-8 mb-8">
                    <div className="text-center p-6 bg-gradient-to-br from-brand-primary/10 to-brand-purple/10 rounded-2xl border border-brand-primary/20">
                      <div className="text-4xl font-bold text-brand-primary mb-2">6</div>
                      <div className="text-sm text-foreground-muted">Weeks to Prototype</div>
                      <div className="text-xs text-foreground-muted mt-2">Concept to fundable MVP</div>
                    </div>
                    <div className="text-center p-6 bg-gradient-to-br from-brand-primary/10 to-brand-purple/10 rounded-2xl border border-brand-primary/20">
                      <div className="text-4xl font-bold text-brand-primary mb-2">100%</div>
                      <div className="text-sm text-foreground-muted">First-to-Market</div>
                      <div className="text-xs text-foreground-muted mt-2">AI security platform category</div>
                    </div>
                    <div className="text-center p-6 bg-gradient-to-br from-brand-primary/10 to-brand-purple/10 rounded-2xl border border-brand-primary/20">
                      <div className="text-4xl font-bold text-brand-primary mb-2">$2M+</div>
                      <div className="text-sm text-foreground-muted">Seed Funding Secured</div>
                      <div className="text-xs text-foreground-muted mt-2">Accelerated development</div>
                    </div>
                  </div>

                  <p className="text-md text-foreground-dark leading-relaxed mb-8">
                    CygenIQ successfully launched as the first comprehensive AI security platform, establishing market leadership in a rapidly growing category. The interactive prototype enabled successful seed funding of over $2M, validating the market need and accelerating product development.
                  </p>

                  <p className="text-md text-foreground-dark leading-relaxed mb-8">
                    The platform became the go-to solution for enterprise CISOs looking to implement AI governance and security controls, establishing CygenIQ as the definitive leader in AI security management and positioning them for significant growth in the expanding AI security market.
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
                        <Rocket className="w-5 h-5 text-brand-primary m-auto" />
                      </div>
                      <h4 className="text-xl font-bold text-foreground font-montserrat">
                        Sprint Zero Framework
                      </h4>
                    </div>
                    <p className="text-foreground-muted leading-relaxed mb-6">
                      Our disciplined Sprint Zero process validated market needs, defined technical requirements, and de-risked development before coding began, ensuring efficient use of limited time and resources.
                    </p>
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="flex w-10 h-10 rounded-full bg-brand-primary/10 border border-brand-primary/20">
                        <Brain className="w-5 h-5 text-brand-primary m-auto" />
                      </div>
                      <h4 className="text-xl font-bold text-foreground font-montserrat">
                        Integrated Studio Model
                      </h4>
                    </div>
                    <p className="text-foreground-muted leading-relaxed mb-6">
                      Cross-functional expertise in AI, security, and enterprise platforms enabled rapid development of a sophisticated solution that addressed complex technical and market requirements.
                    </p>
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="flex w-10 h-10 rounded-full bg-brand-primary/10 border border-brand-primary/20">
                        <Shield className="w-5 h-5 text-brand-primary m-auto" />
                      </div>
                      <h4 className="text-xl font-bold text-foreground font-montserrat">
                        Market-First Approach
                      </h4>
                    </div>
                    <p className="text-foreground-muted leading-relaxed mb-6">
                      Direct engagement with enterprise CISOs during development ensured the platform addressed real security challenges rather than theoretical problems, creating immediate market fit.
                    </p>
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="flex w-10 h-10 rounded-full bg-brand-primary/10 border border-brand-primary/20">
                        <Zap className="w-5 h-5 text-brand-primary m-auto" />
                      </div>
                      <h4 className="text-xl font-bold text-foreground font-montserrat">
                        Rapid Execution
                      </h4>
                    </div>
                    <p className="text-foreground-muted leading-relaxed mb-6">
                      Agile development practices and focused scope enabled delivery of a high-fidelity, interactive prototype in just six weeks, capturing first-mover advantage in an emerging market.
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
                      A comprehensive Launch engagement, beginning with our proprietary Sprint Zero framework to de-risk the vision, followed by the rapid, parallel development of the core AI engine by our Agentic AI Pod and a CISO-centric interactive prototype by our Design Studio.
                    </p>
                    <div className="grid grid-cols md:grid-cols-4 gap-6">
                      <div className="relative overflow-hidden bg-[#ffffff09] border border-[#ffffff15] rounded-2xl p-6 hover:shadow-glass-sm transition-all duration-500 transform hover:scale-102 hover:-translate-y-2 animate-fade-in group h-full">
                        <div className="flex items-center gap-4 flex-col">
                          <span className="flex w-12 h-12 rounded-full bg-[#2E348233]">
                            <Target className="w-5 h-5 text-white m-auto" />
                          </span>
                          <span className="text-white">Sprint Zero</span>
                        </div>
                      </div>
                      <div className="relative overflow-hidden bg-[#ffffff09] border border-[#ffffff15] rounded-2xl p-6 hover:shadow-glass-sm transition-all duration-500 transform hover:scale-102 hover:-translate-y-2 animate-fade-in group h-full">
                        <div className="flex items-center gap-4 flex-col">
                          <span className="flex w-12 h-12 rounded-full bg-[#2E348233]">
                            <Brain className="w-5 h-5 text-white m-auto" />
                          </span>
                          <span className="text-white">AI Engine</span>
                        </div>
                      </div>
                      <div className="relative overflow-hidden bg-[#ffffff09] border border-[#ffffff15] rounded-2xl px-2 py-6 hover:shadow-glass-sm transition-all duration-500 transform hover:scale-102 hover:-translate-y-2 animate-fade-in group h-full">
                        <div className="flex items-center gap-4 flex-col">
                          <span className="flex w-12 h-12 rounded-full bg-[#2E348233]">
                            <Users className="w-5 h-5 text-white m-auto" />
                          </span>
                          <span className="text-white">CISO Platform</span>
                        </div>
                      </div>
                      <div className="relative overflow-hidden bg-[#ffffff09] border border-[#ffffff15] rounded-2xl p-6 hover:shadow-glass-sm transition-all duration-500 transform hover:scale-102 hover:-translate-y-2 animate-fade-in group h-full">
                        <div className="flex items-center gap-4 flex-col">
                          <span className="flex w-12 h-12 rounded-full bg-[#2E348233]">
                            <Zap className="w-5 h-5 text-white m-auto" />
                          </span>
                          <span className="text-white">Rapid Prototype</span>
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
                    Securing the New Attack Surface of Generative AI
                  </h2>

                  <p className="text-md text-foreground-dark leading-relaxed mb-8">
                    The rapid adoption of generative AI in enterprise environments created an entirely new attack surface that traditional cybersecurity tools weren't designed to address. CygenIQ's founders, seasoned cybersecurity experts, recognized this gap and envisioned a first-of-its-kind platform specifically designed to secure AI systems and data flows.
                  </p>

                  <p className="text-md text-foreground-dark leading-relaxed mb-8">
                    The challenge was time-critical: they needed a rapid MVP to secure funding and establish first-mover advantage in this emerging market. Traditional development cycles would take too long, and the window of opportunity was rapidly closing as larger players began to recognize the same market need.
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
                    Establishing Market Leadership in AI Security
                  </h2>

                  <p className="text-md text-foreground-dark leading-relaxed mb-8">
                    The six-week engagement delivered a fully functional, enterprise-ready AI security platform prototype that not only secured CygenIQ's seed funding but established them as the recognized leader in AI security solutions. The platform's early market validation attracted enterprise customers and strategic partnerships ahead of the competition.
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
                      Sprint Zero Framework
                    </h4>
                    <p className="text-foreground-muted leading-relaxed mb-6">
                      Our disciplined approach to de-risking the vision ensured we built the right product with the right features for maximum market impact.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-foreground mb-4 font-montserrat">
                      Integrated Studio Model
                    </h4>
                    <p className="text-foreground-muted leading-relaxed mb-6">
                      Parallel execution by our Design Studio and Agentic AI Pod delivered both user experience excellence and technical sophistication simultaneously.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section className="bg-gradient-to-br from-brand-primary via-brand-primary-dark to-brand-purple rounded-3xl p-8 mt-12 text-center shadow-2xl">
              <h2 className="text-3xl font-bold text-white mb-4 font-montserrat">
                Ready to Launch Your Vision?
              </h2>
              <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
                Turn your breakthrough idea into market reality. Let's engineer your first-mover advantage.
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

export default CygeniqCaseStudy;