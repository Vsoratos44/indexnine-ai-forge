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
                      Visionary founders needed to move from a validated idea to a functional, high-fidelity prototype to secure their next round of funding and begin development. This required a strategic partner who could deliver enterprise-grade design and engineering with extreme velocity.
                    </p>
                    <div className="grid grid-cols md:grid-cols-2 gap-6">
                      {[
                        "Accelerated Seed Funding: The high-fidelity prototype and technical validation enabled CygenIQ to close their seed round months ahead of schedule.",
                        "6-Week MVP Delivery: From concept to interactive prototype in just six weeks, demonstrating the power of our integrated studio approach.",
                        "First-Mover Market Position: CygenIQ established themselves as the pioneer in AI security platforms, securing a significant competitive advantage.",
                        "Enterprise-Ready Foundation: The platform was architected from day one to meet enterprise security and compliance requirements."
                      ].map((outcome, index) => (
                        <div
                          key={index}
                          className="relative overflow-hidden bg-[#ffffff09] border border-[#ffffff25] rounded-2xl p-6 hover:shadow-glass-sm transition-all duration-500 transform hover:scale-102 hover:-translate-y-2 animate-fade-in group h-full"
                        >
                          <div className="flex items-center space-x-3 mb-3">
                            <div className="mr-2">
                              <span className="flex w-12 h-12 rounded-full bg-[#2E348233]">
                                <Shield className="w-5 h-5 text-white m-auto" />
                              </span>
                            </div>
                            Security Innovation
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