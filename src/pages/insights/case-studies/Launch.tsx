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

            {/* More content sections would follow the same pattern */}
            <section className="p-8 backdrop-blur-xl bg-[#00000010] border border-[#00000005] relative rounded-tl-2xl rounded-tr-2xl shadow-inner shadow-white shadow-4xl">
              <div className="mx-auto relative z-10">
                <div className="max-w-8xl mx-auto">
                  <h3 className="text-lg font-semibold text-brand-primary-dark mb-4 font-montserrat">
                    Challenge
                  </h3>
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground-dark mb-8 font-montserrat">
                    A Market Ripe for Disruption
                  </h2>

                  <p className="text-md text-foreground-dark leading-relaxed mb-8">
                    In the upper echelons of philanthropic contributions, making informed decisions is a surprisingly expensive and archaic process. An individual or family looking to donate major funding to a charitable cause would typically hire a specialized consultant. The consultant would then spend weeks or months manually conducting research, analyzing financial statements, and compiling a detailed report. This service alone would cost tens of thousands of dollars.
                  </p>

                  <p className="text-md text-foreground-dark leading-relaxed mb-8">
                    The founder of Annotate, a veteran in the field of philanthropic wealth management, saw fundamental flaws to address in this model: it was inaccessible, inefficient, and unscalable. Annotate's vision was to disrupt this entire ecosystem by building a platform that could do what a team of consultants did, but faster, more efficiently, and at a price point—around $500 per report—that would democratize access to this vital information.
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
                    Delivering a Market-Ready AI Platform
                  </h2>

                  <p className="text-md text-foreground-dark leading-relaxed mb-8">
                    The result was a fully functional AI-powered platform that could analyze charitable organizations with unprecedented speed and accuracy. The platform successfully reduced research costs by 99%, democratizing access to critical philanthropic intelligence while maintaining the quality and depth of analysis that high-net-worth individuals and their advisors required.
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
                      Disciplined Launch Process
                    </h4>
                    <p className="text-foreground-muted leading-relaxed mb-6">
                      Our Sprint Zero framework de-risked the vision and ensured alignment between technical feasibility and market need before development began.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-foreground mb-4 font-montserrat">
                      Deep AI & Data Expertise
                    </h4>
                    <p className="text-foreground-muted leading-relaxed mb-6">
                      Our Agentic AI Pod brought specialized knowledge in RAG architecture and complex data processing to solve the heterogeneous data challenge.
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
                Partner with Indexnine to transform your innovative idea into a market-ready platform that creates real impact.
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

export default LaunchCaseStudy;