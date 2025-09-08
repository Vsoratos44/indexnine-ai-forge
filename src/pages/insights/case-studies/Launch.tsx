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
} from "lucide-react";
import { Link } from "react-router-dom";
import styles from "../../../assets/css/stylesheet.module.css";
import BlogDetailsBg from "@/assets/images/blog-details-bg.webp";
import CaseInrImg from "@/assets/images/case-details-img.webp";

const leftNavLinks = [
  { href: "#intro1", label: "Introduction" },
  { href: "#challenge1", label: "The Philanthropic Finance Challenge" },
  { href: "#solution1", label: "Sprint Zero Framework" },
  { href: "#results", label: "Results & Impact" },
  { href: "#whyWorked", label: "Why It Worked" },
];

const LaunchCaseStudy = () => {
  const [selected, setSelected] = useState("#intro1");

  // SEO Configuration
  useSEO({
    title: "Annotate FinTech Launch Case Study - AI-Powered Philanthropic Finance Disruption | Indexnine",
    description: "Discover how Indexnine launched Annotate's AI-powered platform that disrupted philanthropic finance research, reducing costs by 99% from $50K to $500 per report through strategic MVP development.",
    keywords: "fintech launch, AI platform development, philanthropic finance, MVP development, cost reduction, startup launch strategy, RAG architecture, AI research agent",
    canonicalUrl: "https://indexnine.ai/insights/case-studies/launch",
    ogImage: "https://indexnine.ai/images/case-studies/launch-og.jpg",
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
        title="Annotate: Launching AI-Powered Disruption in Philanthropic Finance"
        description="Taking a bold idea of democratized financial research from launch to market-ready MVP through strategic product development and AI implementation."
        author="Indexnine"
        datePublished="2024-01-15"
        dateModified="2024-01-15"
        image="https://indexnine.ai/images/case-studies/launch-hero.jpg"
        url="https://indexnine.ai/insights/case-studies/launch"
      />

      <WebPageSchema
        title="Launch Case Study: Annotate FinTech Platform"
        description="Strategic product launch case study showcasing AI-powered disruption in philanthropic finance research"
        url="https://indexnine.ai/insights/case-studies/launch"
      />

      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://indexnine.ai" },
          { name: "Insights", url: "https://indexnine.ai/insights" },
          { name: "Case Studies", url: "https://indexnine.ai/insights/case-studies" },
          { name: "Launch Phase", url: "https://indexnine.ai/insights/case-studies/launch" }
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
                      Annotate
                    </span>
                    <span className="inline-block px-6 py-2 bg-black/20 shadow-md text-white rounded-lg text-sm font-medium border border-white/30 backdrop-blur-sm mr-3">
                      <span className="text-brand-primary text-xs mr-2">
                        Industry
                      </span>{" "}
                      FinTech
                    </span>
                  </div>

                  <div className="inline-block p-8 bg-black/20 shadow-md text-white rounded-xl text-sm font-medium border border-white/30 backdrop-blur-sm">
                    <h1 className="text-4xl sm:text-3xl lg:text-[2.75rem] font-bold text-foreground mb-8 animate-fade-in font-montserrat md:flex gap-4 items-center">
                      <span className="leading-[1.05]">
                        Annotate:
                      </span>
                      <span className="bg-gradient-primary bg-clip-text text-[#505cfd] leading-[1.05]">
                        Launching AI-Powered Disruption in Philanthropic Finance
                      </span>
                    </h1>
                    <p className="text-xl sm:text-lg text-foreground/100 mb-0 max-w-4xl leading-relaxed font-regular animate-slide-up font-montserrat">
                      Taking a bold idea of democratized financial research from launch to market-ready MVP through strategic product development and AI implementation.
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
                      The process for prospective donors to access reliable research on charitable organizations was controlled by expensive consultants, creating a bottleneck in the market. Annotate wanted to build a platform that could disrupt this model by delivering the same, or better, insights at a fraction of the cost.
                    </p>
                    <div className="grid grid-cols md:grid-cols-2 gap-6">
                      {[
                        "Market-Ready MVP Launched: Successfully delivering a functional, AI-powered platform validated the core business model and enabled the client to execute on an aggressive GTM strategy.",
                        "99% Cost Reduction for End-Users: The platform was designed to deliver research reports for approximately $500, a dramatic reduction from industry-standard consultant fees ranging from $20,000 to $50,000.",
                        "Complex Data Problem Solved: By engineering a robust data pipeline capable of ingesting and synthesizing highly diverse data types into reliable, trustworthy insights.",
                        "Created a Reliable Tech Moat: We built a proprietary AI engine that now serves as the client's core intellectual property and a major competitive advantage."
                      ].map((outcome, index) => (
                        <div
                          key={index}
                          className="relative overflow-hidden bg-[#ffffff09] border border-[#ffffff25] rounded-2xl p-6 hover:shadow-glass-sm transition-all duration-500 transform hover:scale-102 hover:-translate-y-2 animate-fade-in group h-full"
                        >
                          <div className="flex items-center space-x-3 mb-3">
                            <div className="mr-2">
                              <span className="flex w-12 h-12 rounded-full bg-[#2E348233]">
                                <Rocket className="w-5 h-5 text-white m-auto" />
                              </span>
                            </div>
                            Launch Success
                          </div>
                          <div className="text-foreground-muted text-sm">
                            {outcome}
                          </div>
                        </div>
                      ))}
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
                      A strategic engagement with Indexnine's Launch services, starting with our proprietary Sprint Zero framework to define the MVP, followed by the rapid development of a sophisticated AI research agent built on retrieval-augmented generation (RAG) architecture.
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
                            <Settings className="w-5 h-5 text-white m-auto" />
                          </span>
                          <span className="text-white">RAG Architecture</span>
                        </div>
                      </div>
                      <div className="relative overflow-hidden bg-[#ffffff09] border border-[#ffffff15] rounded-2xl px-2 py-6 hover:shadow-glass-sm transition-all duration-500 transform hover:scale-102 hover:-translate-y-2 animate-fade-in group h-full">
                        <div className="flex items-center gap-4 flex-col">
                          <span className="flex w-12 h-12 rounded-full bg-[#2E348233]">
                            <Workflow className="w-5 h-5 text-white m-auto" />
                          </span>
                          <span className="text-white">AI Research Agent</span>
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
                      <a id="solution1" className="absolute mt-[100px]"></a>
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
                    A Market Ripe for Disruption
                  </h2>

                  <div className="bg-[#4A2424] mt-12 mb-8 flex">
                    <div className="md:mr-[-4rem] md:pl-[4rem] md:pb-[1.5rem] md:mt-[-1.5rem]">
                      <img src={CaseInrImg} className="w-full h-full" />
                    </div>
                  </div>
                  
                  <p className="text-md text-foreground-dark leading-relaxed mb-8">
                    In the upper echelons of philanthropic contributions, making informed decisions is a surprisingly expensive and archaic process. An individual or family looking to donate major funding to a charitable cause would typically hire a specialized consultant. The consultant would then spend weeks or months manually conducting research, analyzing financial statements, and compiling a detailed report. This service alone would cost tens of thousands of dollars.
                  </p>

                  <p className="text-md text-foreground-dark leading-relaxed mb-8">
                    The founder of Annotate, a veteran in the field of philanthropic wealth management, saw fundamental flaws to address in this model: it was inaccessible, inefficient, and unscalable. Annotate's vision was to disrupt this entire ecosystem by building a platform that could do what a team of consultants did, but faster, more efficiently, and at a price point—around $500 per report—that would democratize access to critical philanthropic intelligence.
                  </p>

                  <p className="text-md text-foreground-dark leading-relaxed mb-8">
                    The challenge wasn't just about cost reduction—it was about creating a scalable solution that could process massive amounts of heterogeneous data from various sources, including IRS filings, financial statements, news articles, and social media, then synthesize this information into actionable insights that matched or exceeded the quality of human-generated reports.
                  </p>
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
                      Indexnine implemented a comprehensive Sprint Zero framework followed by rapid MVP development, leveraging advanced RAG architecture and AI research agents to create a scalable, market-ready platform that democratized philanthropic research.
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
                            <Settings className="w-5 h-5 text-white m-auto" />
                          </span>
                          <span className="text-white">RAG Architecture</span>
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

            {/* Solution Section with Detailed Phases */}
            <section className="p-8 backdrop-blur-xl bg-[#00000010] border border-[#00000005] relative rounded-bl-2xl rounded-br-2xl mb-12 shadow-inner shadow-white shadow-4xl">
              <div className="mx-auto relative z-10">
                <div className="max-w-8xl mx-auto">
                  <h3 className="text-lg font-semibold text-brand-primary-dark mb-4 font-montserrat">
                    Our Solution
                  </h3>
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground-dark mb-8 font-montserrat">
                    From Vision to Market-Ready Platform
                  </h2>

                  <p className="text-lg text-foreground-dark leading-relaxed mb-12">
                    The client's challenge was a perfect match for Indexnine's core capabilities. This wasn't just about building software; it was about engineering a market disruptor that could democratize access to critical philanthropic intelligence through advanced AI and data processing.
                  </p>

                  <div className="space-y-12">
                    {/* Phase 1 */}
                    <div className="grid md:grid-cols-12 gap-8 items-start">
                      <div className="md:col-span-1">
                        <span className="flex w-10 h-10 rounded-full bg-[#505DFD]">
                          <span className="font-bold text-foreground m-auto">1</span>
                        </span>
                      </div>
                      <div className="md:col-span-11 backdrop-blur-xl bg-[#ffffff] border border-glass-border rounded-2xl p-6">
                        <h3 className="text-2xl font-semibold text-foreground-dark mb-4 font-montserrat">
                          Phase 1: Sprint Zero Framework
                        </h3>
                        <p className="text-foreground-dark-muted leading-relaxed">
                          Our engagement began with comprehensive Sprint Zero workshops to validate the market opportunity and technical feasibility. We worked closely with Annotate's leadership to understand the philanthropic research landscape, identify key data sources, and define the MVP scope that would deliver maximum market impact with optimal resource efficiency.
                        </p>
                      </div>
                    </div>

                    {/* Phase 2 */}
                    <div className="grid md:grid-cols-12 gap-8 items-start">
                      <div className="md:col-span-1">
                        <span className="flex w-10 h-10 rounded-full bg-[#505DFD]">
                          <span className="font-bold text-foreground m-auto">2</span>
                        </span>
                      </div>
                      <div className="md:col-span-11 backdrop-blur-xl bg-glass-bg/10 border border-glass-border rounded-2xl p-6">
                        <h3 className="text-2xl font-semibold text-foreground-dark mb-4 font-montserrat">
                          Phase 2: RAG Architecture & AI Research Engine
                        </h3>
                        <p className="text-foreground-dark leading-relaxed mb-6">
                          Building a system that could analyze charitable organizations required sophisticated AI capabilities that could process heterogeneous data from multiple sources and synthesize actionable insights. We architected and implemented:
                        </p>

                        <div className="grid md:grid-cols-2 gap-6">
                          <div className="backdrop-blur-xl bg-[#fff] border border-glass-border rounded-2xl p-6">
                            <h4 className="font-semibold text-foreground-dark mb-2">
                              Advanced RAG Architecture
                            </h4>
                            <p className="text-sm text-foreground-dark-muted">
                              Implemented retrieval-augmented generation system that could ingest and process IRS filings, financial statements, news articles, and social media data to create comprehensive organizational profiles.
                            </p>
                          </div>
                          <div className="backdrop-blur-xl bg-[#fff] border border-glass-border rounded-2xl p-6">
                            <h4 className="font-semibold text-foreground-dark mb-2">
                              AI Research Agents
                            </h4>
                            <p className="text-sm text-foreground-dark-muted">
                              Developed specialized AI agents trained on philanthropic analysis patterns that could evaluate organizational effectiveness, financial health, and impact measurement with consultant-level accuracy.
                            </p>
                          </div>
                          <div className="backdrop-blur-xl bg-[#fff] border border-glass-border rounded-2xl p-6">
                            <h4 className="font-semibold text-foreground-dark mb-2">
                              Data Pipeline Engineering
                            </h4>
                            <p className="text-sm text-foreground-dark-muted">
                              Built scalable data processing infrastructure that could handle real-time analysis of hundreds of data sources while maintaining data quality and consistency across all organizational assessments.
                            </p>
                          </div>
                          <div className="backdrop-blur-xl bg-[#fff] border border-glass-border rounded-2xl p-6">
                            <h4 className="font-semibold text-foreground-dark mb-2">
                              Quality Assurance Framework
                            </h4>
                            <p className="text-sm text-foreground-dark-muted">
                              Implemented comprehensive validation systems that ensured AI-generated reports met the quality standards expected by high-net-worth donors and their advisors.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Phase 3 */}
                    <div className="grid md:grid-cols-12 gap-8 items-start">
                      <div className="md:col-span-1">
                        <span className="flex w-10 h-10 rounded-full bg-[#505DFD]">
                          <span className="font-bold text-foreground m-auto">3</span>
                        </span>
                      </div>
                      <div className="md:col-span-11 backdrop-blur-xl bg-glass-bg/10 border border-glass-border rounded-2xl p-6">
                        <h3 className="text-2xl font-semibold text-foreground-dark mb-4 font-montserrat">
                          Phase 3: Platform Launch & Market Validation
                        </h3>
                        <p className="text-foreground-dark-muted leading-relaxed mb-6">
                          With the core platform developed, we focused on market launch strategy and continuous refinement based on real user feedback. This phase included comprehensive testing, user onboarding optimization, and performance tuning to ensure market readiness.
                        </p>

                        <div className="grid md:grid-cols-2 gap-6">
                          <div className="backdrop-blur-xl bg-[#fff] border border-glass-border rounded-2xl p-6">
                            <h4 className="font-semibold text-foreground-dark mb-2">
                              User Experience Optimization
                            </h4>
                            <p className="text-sm text-foreground-dark-muted">
                              Refined the platform interface based on beta user feedback to ensure intuitive navigation and clear presentation of complex analytical insights for non-technical users.
                            </p>
                          </div>
                          <div className="backdrop-blur-xl bg-[#fff] border border-glass-border rounded-2xl p-6">
                            <h4 className="font-semibold text-foreground-dark mb-2">
                              Performance & Scalability
                            </h4>
                            <p className="text-sm text-foreground-dark-muted">
                              Optimized system architecture to handle increasing user demand while maintaining sub-minute report generation times, ensuring consistent user experience as the platform scales.
                            </p>
                          </div>
                        </div>
                        <a id="results"></a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Results Section */}
            <section className="bg-gradient-to-r from-[#fff] to-[#899CFF10] shadow-xl rounded-2xl border border-[#00000025] p-8 mb-12">
              <div className="container mx-auto px-6 lg:px-8">
                <div className="max-w-5xl mx-auto">
                  <h2 className="text-2xl font-bold text-foreground-dark mb-12 text-center font-montserrat">
                    Delivering Exponential Value Through AI Innovation
                  </h2>
                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                    <div className={`rounded-xl py-4 px-1 text-center border border-[#505DFD] ${styles.middleCardBg2}`}>
                      <h3 className="text-3xl font-bold text-white mb-2 font-montserrat">99%</h3>
                      <p className="text-foreground text-xs mb-0">Cost Reduction</p>
                    </div>
                    <div className={`rounded-xl py-4 px-1 text-center border border-[#505DFD] ${styles.middleCardBg2}`}>
                      <h3 className="text-3xl font-bold text-white mb-2 font-montserrat">$500</h3>
                      <p className="text-foreground text-xs mb-0">Per Report Cost</p>
                    </div>
                    <div className={`rounded-xl py-4 px-1 text-center border border-[#505DFD] ${styles.middleCardBg2}`}>
                      <h3 className="text-3xl font-bold text-white mb-2 font-montserrat">6</h3>
                      <p className="text-foreground text-xs mb-0">Week Delivery</p>
                    </div>
                    <div className={`rounded-xl py-4 px-1 text-center border border-[#505DFD] ${styles.middleCardBg2}`}>
                      <h3 className="text-3xl font-bold text-white mb-2 font-montserrat">100+</h3>
                      <p className="text-foreground text-xs mb-0">Data Sources</p>
                    </div>
                  </div>

                  <div className="text-center mb-8">
                    <p className="text-foreground-dark leading-relaxed mb-6">
                      The platform successfully delivered a 99% cost reduction in philanthropic research, reducing report costs from $50,000 to $500 while maintaining consultant-level quality. The AI-powered system democratized access to critical philanthropic intelligence for donors of all sizes.
                    </p>
                    <a id="whyWorked"></a>
                  </div>
                </div>
              </div>
            </section>

            {/* Why It Worked Section - Enhanced */}
            <section className="relative overflow-hidden bg-gradient-to-br from-brand-primary/5 via-transparent to-brand-purple/5 rounded-3xl p-8 shadow-glass border border-glass-border backdrop-blur-xl mb-12">
              <div className="relative z-10">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground-dark mb-8 font-montserrat">
                  Why It Worked
                </h2>
                <p className="text-foreground-dark leading-relaxed mb-8">
                  The success of this project was a reflection of our core values and differentiators in action.
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    "Disciplined Launch Process: Our Sprint Zero framework de-risked the vision and ensured alignment between technical feasibility and market need before development began, preventing costly pivots and scope creep.",
                    "Deep AI & Data Expertise: Our Agentic AI Pod brought specialized knowledge in RAG architecture and complex data processing to solve challenges that traditional approaches couldn't handle.",
                    "Market-Focused Development: Every feature was developed with direct input from philanthropic wealth management experts, ensuring the platform met real market needs rather than theoretical requirements.",
                    "Scalable Architecture Foundation: The platform was built with growth in mind, featuring modular architecture that could scale to handle increasing data volumes and user demands as the business expanded.",
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
            </section>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <section className={`py-24 lg:py-32 ${styles.ctaBg}`}>
        <div className="container mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold mb-6 text-foreground-white">
            <span className="leading-[1.4]">Ready to Launch Your Vision?</span>
          </h2>
          <p className="text-xl text-foreground/80 mb-8 max-w-3xl mx-auto font-montserrat">
            Partner with Indexnine to transform your innovative idea into a market-ready platform that creates real impact. Our proven Sprint Zero framework and AI expertise ensure your launch delivers maximum value.
          </p>
          <p className="text-lg text-foreground/70 mb-12 max-w-xl mx-auto font-montserrat">
            Want to disrupt your industry with AI? So do we. Set up a free consultation with Indexnine today.
          </p>
          <Button variant="btnSecondary" size="lg">Get Started</Button>
        </div>
      </section>
      <div className="bg-background">
        <Footer />
      </div>
    </div>
  );
};

export default LaunchCaseStudy;