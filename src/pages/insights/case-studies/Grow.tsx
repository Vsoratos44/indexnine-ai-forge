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
  Zap,
  Brain,
} from "lucide-react";
import { Link } from "react-router-dom";
import styles from "../../../assets/css/stylesheet.module.css";
import BlogDetailsBg from "@/assets/images/blog-details-bg.webp";
import CaseInrImg from "@/assets/images/case-details-img.webp";

const leftNavLinks = [
  { href: "#intro1", label: "Introduction" },
  { href: "#challenge1", label: "Real-Time Content Challenge" },
  { href: "#solution1", label: "Cricket LLM Solution" },
  { href: "#results", label: "Results & Impact" },
  { href: "#whyWorked", label: "Why It Worked" },
];

const GrowCaseStudy = () => {
  const [selected, setSelected] = useState("#intro1");

  // SEO Configuration
  useSEO({
    title: "Sports Interactive AI Growth Case Study - Real-Time Fan Engagement Automation | Indexnine",
    description: "Discover how Indexnine's Cricket LLM transformed Sports Interactive's operations, automating content generation in 15 seconds and reducing operational costs by 90% through AI-powered fan engagement.",
    keywords: "AI automation, sports media technology, real-time content generation, fan engagement, Cricket LLM, operational cost reduction, scalable AI solutions, sports technology",
    canonicalUrl: "https://indexnine.ai/insights/case-studies/grow",
    ogImage: "https://indexnine.ai/images/case-studies/grow-og.jpg",
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
        title="Sports Interactive: AI-Powered Fan Engagement in Real Time"
        description="Unlocking a new level of scalability and solving a technical Gordian knot through automated content creation with Cricket LLM."
        author="Indexnine"
        datePublished="2024-01-25"
        dateModified="2024-01-25"
        image="https://indexnine.ai/images/case-studies/grow-hero.jpg"
        url="https://indexnine.ai/insights/case-studies/grow"
      />

      <WebPageSchema
        title="Growth Case Study: Sports Interactive AI Automation"
        description="AI-powered growth case study showcasing real-time content automation and operational transformation in sports media"
        url="https://indexnine.ai/insights/case-studies/grow"
      />

      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://indexnine.ai" },
          { name: "Insights", url: "https://indexnine.ai/insights" },
          { name: "Case Studies", url: "https://indexnine.ai/insights/case-studies" },
          { name: "Growth Phase", url: "https://indexnine.ai/insights/case-studies/grow" }
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
                      Sports Interactive
                    </span>
                    <span className="inline-block px-6 py-2 bg-black/20 shadow-md text-white rounded-lg text-sm font-medium border border-white/30 backdrop-blur-sm mr-3">
                      <span className="text-brand-primary text-xs mr-2">
                        Industry
                      </span>{" "}
                      Sports Media
                    </span>
                  </div>

                  <div className="inline-block p-8 bg-black/20 shadow-md text-white rounded-xl text-sm font-medium border border-white/30 backdrop-blur-sm">
                    <h1 className="text-4xl sm:text-3xl lg:text-[2.75rem] font-bold text-foreground mb-8 animate-fade-in font-montserrat md:flex gap-4 items-center">
                      <span className="leading-[1.05]">
                        Sports Interactive:
                      </span>
                      <span className="bg-gradient-primary bg-clip-text text-[#505cfd] leading-[1.05]">
                        AI-Powered Fan Engagement in Real Time
                      </span>
                    </h1>
                    <p className="text-xl sm:text-lg text-foreground/100 mb-0 max-w-4xl leading-relaxed font-regular animate-slide-up font-montserrat">
                      Unlocking a new level of scalability and solving a technical Gordian knot through automated content creation with Cricket LLM.
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
                      Sports Interactive needed to transform their content creation process from a manual, time-intensive operation to an automated, real-time system that could generate personalized fan engagement content in seconds rather than hours, while maintaining editorial quality and brand voice.
                    </p>
                    
                    <div className="grid md:grid-cols-4 gap-6">
                      <div className="relative overflow-hidden bg-[#ffffff09] border border-[#ffffff15] rounded-2xl p-6 hover:shadow-glass-sm transition-all duration-500 transform hover:scale-102 hover:-translate-y-2 animate-fade-in group h-full">
                        <div className="flex items-center gap-4 flex-col">
                          <span className="flex w-12 h-12 rounded-full bg-[#2E348233]">
                            <Brain className="w-5 h-5 text-white m-auto" />
                          </span>
                          <span className="text-white">Cricket LLM</span>
                        </div>
                      </div>
                      <div className="relative overflow-hidden bg-[#ffffff09] border border-[#ffffff15] rounded-2xl p-6 hover:shadow-glass-sm transition-all duration-500 transform hover:scale-102 hover:-translate-y-2 animate-fade-in group h-full">
                        <div className="flex items-center gap-4 flex-col">
                          <span className="flex w-12 h-12 rounded-full bg-[#2E348233]">
                            <Zap className="w-5 h-5 text-white m-auto" />
                          </span>
                          <span className="text-white">Real-Time AI</span>
                        </div>
                      </div>
                      <div className="relative overflow-hidden bg-[#ffffff09] border border-[#ffffff15] rounded-2xl px-2 py-6 hover:shadow-glass-sm transition-all duration-500 transform hover:scale-102 hover:-translate-y-2 animate-fade-in group h-full">
                        <div className="flex items-center gap-4 flex-col">
                          <span className="flex w-12 h-12 rounded-full bg-[#2E348233]">
                            <Settings className="w-5 h-5 text-white m-auto" />
                          </span>
                          <span className="text-white">Content Automation</span>
                        </div>
                      </div>
                      <div className="relative overflow-hidden bg-[#ffffff09] border border-[#ffffff15] rounded-2xl p-6 hover:shadow-glass-sm transition-all duration-500 transform hover:scale-102 hover:-translate-y-2 animate-fade-in group h-full">
                        <div className="flex items-center gap-4 flex-col">
                          <span className="flex w-12 h-12 rounded-full bg-[#2E348233]">
                            <Scale className="w-5 h-5 text-white m-auto" />
                          </span>
                          <span className="text-white">Scalable System</span>
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
                    The Real-Time Content Generation Bottleneck
                  </h2>

                  <div className="bg-[#4A2424] mt-12 mb-8 flex">
                    <div className="md:mr-[-4rem] md:pl-[4rem] md:pb-[1.5rem] md:mt-[-1.5rem]">
                      <img src={CaseInrImg} className="w-full h-full" />
                    </div>
                  </div>
                  
                  <p className="text-md text-foreground-dark leading-relaxed mb-8">
                    Sports Interactive faced a critical scalability challenge in their content operations. As a leading sports media company, they needed to generate thousands of pieces of personalized content daily to engage their growing fan base across multiple sports and regions. Their existing manual process required content creators to spend hours crafting individual pieces, creating a significant bottleneck that limited their ability to scale.
                  </p>

                  <p className="text-md text-foreground-dark leading-relaxed mb-8">
                    The challenge was particularly acute during peak sporting events when fan engagement was highest, but content demands were most intensive. Traditional content management systems couldn't handle the real-time nature of sports content, where information becomes stale within minutes, and personalization requirements varied dramatically across different audience segments.
                  </p>

                  <p className="text-md text-foreground-dark leading-relaxed mb-8">
                    Beyond speed, Sports Interactive needed to maintain editorial quality and brand consistency while scaling content production by 10x. The solution required understanding complex sports data, player statistics, historical context, and fan preferences to create content that felt authentically human-written while being generated automatically.
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
                      Indexnine developed Cricket LLM, a specialized AI model trained on sports data and content patterns that could generate contextually relevant, personalized fan engagement content in real-time, reducing production time from hours to seconds.
                    </p>
                    
                    <div className="grid md:grid-cols-4 gap-6">
                      <div className="relative overflow-hidden bg-[#ffffff09] border border-[#ffffff15] rounded-2xl p-6 hover:shadow-glass-sm transition-all duration-500 transform hover:scale-102 hover:-translate-y-2 animate-fade-in group h-full">
                        <div className="flex items-center gap-4 flex-col">
                          <span className="flex w-12 h-12 rounded-full bg-[#2E348233]">
                            <Brain className="w-5 h-5 text-white m-auto" />
                          </span>
                          <span className="text-white">Custom LLM</span>
                        </div>
                      </div>
                      <div className="relative overflow-hidden bg-[#ffffff09] border border-[#ffffff15] rounded-2xl p-6 hover:shadow-glass-sm transition-all duration-500 transform hover:scale-102 hover:-translate-y-2 animate-fade-in group h-full">
                        <div className="flex items-center gap-4 flex-col">
                          <span className="flex w-12 h-12 rounded-full bg-[#2E348233]">
                            <Zap className="w-5 h-5 text-white m-auto" />
                          </span>
                          <span className="text-white">Real-Time Processing</span>
                        </div>
                      </div>
                      <div className="relative overflow-hidden bg-[#ffffff09] border border-[#ffffff15] rounded-2xl px-2 py-6 hover:shadow-glass-sm transition-all duration-500 transform hover:scale-102 hover:-translate-y-2 animate-fade-in group h-full">
                        <div className="flex items-center gap-4 flex-col">
                          <span className="flex w-12 h-12 rounded-full bg-[#2E348233]">
                            <Users className="w-5 h-5 text-white m-auto" />
                          </span>
                          <span className="text-white">Personalization Engine</span>
                        </div>
                      </div>
                      <div className="relative overflow-hidden bg-[#ffffff09] border border-[#ffffff15] rounded-2xl p-6 hover:shadow-glass-sm transition-all duration-500 transform hover:scale-102 hover:-translate-y-2 animate-fade-in group h-full">
                        <div className="flex items-center gap-4 flex-col">
                          <span className="flex w-12 h-12 rounded-full bg-[#2E348233]">
                            <CheckCircle className="w-5 h-5 text-white m-auto" />
                          </span>
                          <span className="text-white">Quality Assurance</span>
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
                    Building Cricket LLM for Sports Media Excellence
                  </h2>

                  <p className="text-md text-foreground-dark leading-relaxed mb-8">
                    Cricket LLM was trained on millions of sports articles, player statistics, historical match data, and fan interaction patterns to understand the nuances of sports content creation. The model learned to generate content that captured the excitement, technical accuracy, and emotional resonance that sports fans expect from premium content.
                  </p>

                  <p className="text-md text-foreground-dark leading-relaxed mb-8">
                    The system integrated real-time data feeds from multiple sports databases, social media platforms, and live match data to ensure content was always current and contextually relevant. Advanced natural language processing techniques enabled the AI to maintain consistent brand voice while adapting tone and style for different audience segments and content types.
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
                    Transforming Sports Media Operations
                  </h2>

                  <div className="grid md:grid-cols-3 gap-8 mb-8">
                    <div className="text-center p-6 bg-gradient-to-br from-brand-primary/10 to-brand-purple/10 rounded-2xl border border-brand-primary/20">
                      <div className="text-4xl font-bold text-brand-primary mb-2">90%</div>
                      <div className="text-sm text-foreground-muted">Cost Reduction</div>
                      <div className="text-xs text-foreground-muted mt-2">In content operations</div>
                    </div>
                    <div className="text-center p-6 bg-gradient-to-br from-brand-primary/10 to-brand-purple/10 rounded-2xl border border-brand-primary/20">
                      <div className="text-4xl font-bold text-brand-primary mb-2">15sec</div>
                      <div className="text-sm text-foreground-muted">Generation Time</div>
                      <div className="text-xs text-foreground-muted mt-2">From hours to seconds</div>
                    </div>
                    <div className="text-center p-6 bg-gradient-to-br from-brand-primary/10 to-brand-purple/10 rounded-2xl border border-brand-primary/20">
                      <div className="text-4xl font-bold text-brand-primary mb-2">10x</div>
                      <div className="text-sm text-foreground-muted">Content Volume</div>
                      <div className="text-xs text-foreground-muted mt-2">Increased production capacity</div>
                    </div>
                  </div>

                  <p className="text-md text-foreground-dark leading-relaxed mb-8">
                    Cricket LLM successfully automated content generation across multiple sports categories, reducing operational costs by 90% while increasing content volume by 10x. The system generated personalized fan engagement content in 15 seconds compared to the previous 2-4 hours required for manual creation.
                  </p>

                  <p className="text-md text-foreground-dark leading-relaxed mb-8">
                    The automated system maintained editorial quality standards while enabling Sports Interactive to scale their content operations to serve millions of fans simultaneously during peak sporting events. The solution provided a sustainable competitive advantage in the fast-paced sports media landscape.
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
                        <Brain className="w-5 h-5 text-brand-primary m-auto" />
                      </div>
                      <h4 className="text-xl font-bold text-foreground font-montserrat">
                        Domain-Specific AI Model
                      </h4>
                    </div>
                    <p className="text-foreground-muted leading-relaxed mb-6">
                      Cricket LLM was specifically trained on sports content and data patterns, giving it deep understanding of sports terminology, context, and fan expectations that generic AI models lack.
                    </p>
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="flex w-10 h-10 rounded-full bg-brand-primary/10 border border-brand-primary/20">
                        <Zap className="w-5 h-5 text-brand-primary m-auto" />
                      </div>
                      <h4 className="text-xl font-bold text-foreground font-montserrat">
                        Real-Time Integration
                      </h4>
                    </div>
                    <p className="text-foreground-muted leading-relaxed mb-6">
                      The system's ability to process live sports data and generate content in real-time gave Sports Interactive a significant advantage in the time-sensitive sports media environment.
                    </p>
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="flex w-10 h-10 rounded-full bg-brand-primary/10 border border-brand-primary/20">
                        <Users className="w-5 h-5 text-brand-primary m-auto" />
                      </div>
                      <h4 className="text-xl font-bold text-foreground font-montserrat">
                        Personalization at Scale
                      </h4>
                    </div>
                    <p className="text-foreground-muted leading-relaxed mb-6">
                      Advanced personalization algorithms enabled content tailored to individual fan preferences while maintaining operational efficiency at massive scale.
                    </p>
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="flex w-10 h-10 rounded-full bg-brand-primary/10 border border-brand-primary/20">
                        <CheckCircle className="w-5 h-5 text-brand-primary m-auto" />
                      </div>
                      <h4 className="text-xl font-bold text-foreground font-montserrat">
                        Quality Assurance Framework
                      </h4>
                    </div>
                    <p className="text-foreground-muted leading-relaxed mb-6">
                      Automated quality checks and editorial oversight ensured that increased content volume didn't compromise the brand's editorial standards and reputation.
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
                      One of our Agentic AI pods developed a bespoke, low-latency, AI-powered content generation engine (called "Cricket LLM") that enables interactive fan engagement in real time without compromising performance under increased workloads during game time.
                    </p>
                    <div className="grid grid-cols md:grid-cols-4 gap-6">
                      <div className="relative overflow-hidden bg-[#ffffff09] border border-[#ffffff15] rounded-2xl p-6 hover:shadow-glass-sm transition-all duration-500 transform hover:scale-102 hover:-translate-y-2 animate-fade-in group h-full">
                        <div className="flex items-center gap-4 flex-col">
                          <span className="flex w-12 h-12 rounded-full bg-[#2E348233]">
                            <Brain className="w-5 h-5 text-white m-auto" />
                          </span>
                          <span className="text-white">Cricket LLM</span>
                        </div>
                      </div>
                      <div className="relative overflow-hidden bg-[#ffffff09] border border-[#ffffff15] rounded-2xl p-6 hover:shadow-glass-sm transition-all duration-500 transform hover:scale-102 hover:-translate-y-2 animate-fade-in group h-full">
                        <div className="flex items-center gap-4 flex-col">
                          <span className="flex w-12 h-12 rounded-full bg-[#2E348233]">
                            <Zap className="w-5 h-5 text-white m-auto" />
                          </span>
                          <span className="text-white">Real-Time</span>
                        </div>
                      </div>
                      <div className="relative overflow-hidden bg-[#ffffff09] border border-[#ffffff15] rounded-2xl px-2 py-6 hover:shadow-glass-sm transition-all duration-500 transform hover:scale-102 hover:-translate-y-2 animate-fade-in group h-full">
                        <div className="flex items-center gap-4 flex-col">
                          <span className="flex w-12 h-12 rounded-full bg-[#2E348233]">
                            <Scale className="w-5 h-5 text-white m-auto" />
                          </span>
                          <span className="text-white">Scalable Platform</span>
                        </div>
                      </div>
                      <div className="relative overflow-hidden bg-[#ffffff09] border border-[#ffffff15] rounded-2xl p-6 hover:shadow-glass-sm transition-all duration-500 transform hover:scale-102 hover:-translate-y-2 animate-fade-in group h-full">
                        <div className="flex items-center gap-4 flex-col">
                          <span className="flex w-12 h-12 rounded-full bg-[#2E348233]">
                            <Users className="w-5 h-5 text-white m-auto" />
                          </span>
                          <span className="text-white">Fan Engagement</span>
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
                    The Real-Time Content Generation Bottleneck
                  </h2>

                  <p className="text-md text-foreground-dark leading-relaxed mb-8">
                    Sports Interactive had built a successful B2B platform providing content solutions to sports media companies. However, they faced a critical scaling challenge: generating high-quality, contextually relevant social media content during live sporting events required significant manual effort and couldn't scale to handle multiple simultaneous events.
                  </p>

                  <p className="text-md text-foreground-dark leading-relaxed mb-8">
                    The existing process required content creators to watch games live, understand context, and manually craft engaging posts. This approach was expensive, slow, and couldn't meet the real-time demands of modern sports media engagement where timing is everything for fan interaction.
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
                    Transforming Sports Media with AI Automation
                  </h2>

                  <p className="text-md text-foreground-dark leading-relaxed mb-8">
                    The Cricket LLM solution delivered unprecedented efficiency gains, reducing content generation time from minutes to seconds while maintaining quality and context awareness. This breakthrough enabled Sports Interactive to scale their services exponentially and offer real-time engagement solutions to multiple clients simultaneously.
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
                      Studio Model Excellence
                    </h4>
                    <p className="text-foreground-muted leading-relaxed mb-6">
                      Our specialized Agentic AI Pod brought deep expertise in real-time AI systems and sports domain knowledge to create a truly optimized solution.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-foreground mb-4 font-montserrat">
                      Founder's Mindset
                    </h4>
                    <p className="text-foreground-muted leading-relaxed mb-6">
                      We approached the challenge with the urgency and innovation of founders, rapidly iterating and deploying solutions to meet critical business needs.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section className="bg-gradient-to-br from-brand-primary via-brand-primary-dark to-brand-purple rounded-3xl p-8 mt-12 text-center shadow-2xl">
              <h2 className="text-3xl font-bold text-white mb-4 font-montserrat">
                Ready to Scale with AI?
              </h2>
              <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
                Unlock exponential growth through intelligent automation. Let's build your competitive advantage.
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

export default GrowCaseStudy;