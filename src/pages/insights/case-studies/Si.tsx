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
import CaseInrImg from "@/assets/images/img-si.webp";

const leftNavLinks = [
  { href: "#intro1", label: "Introduction" },
  { href: "#challenge1", label: "Real-Time Content Challenge" },
  { href: "#challange2", label: "Cricket LLM Solution" },
  { href: "#results", label: "Results & Impact" },
  { href: "#whyWorked", label: "Why It Worked" },
];
const outcomeTitle = [
  "Comprehensive Success",
  "Exceeded Expectations",
  "Solved Quickly",
  "Proven Scalability",
];

const GrowCaseStudy = () => {
  const [selected, setSelected] = useState("#intro1");

  // SEO Configuration
  useSEO({
    title:
      "Sports Interactive AI Growth Case Study - Real-Time Fan Engagement Automation | Indexnine",
    description:
      "Discover how Indexnine's Cricket LLM transformed Sports Interactive's operations, automating content generation in 15 seconds and reducing operational costs by 90% through AI-powered fan engagement.",
    keywords:
      "AI automation, sports media technology, real-time content generation, fan engagement, Cricket LLM, operational cost reduction, scalable AI solutions, sports technology",
    canonicalUrl: "https://www.indexnine.com/insights/case-studies/si",
    ogImage: "https://www.indexnine.com/images/case-studies/grow-og.jpg",
    ogType: "article",
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
        image="https://www.indexnine.com/images/case-studies/grow-hero.jpg"
        url="https://www.indexnine.com/insights/case-studies/si"
      />

      <WebPageSchema
        title="Growth Case Study: Sports Interactive AI Automation"
        description="AI-powered growth case study showcasing real-time content automation and operational transformation in sports media"
        url="https://indexnine.ai/insights/case-studies/si"
      />

      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://indexnine.ai" },
          { name: "Insights", url: "https://indexnine.ai/insights" },
          {
            name: "Case Studies",
            url: "https://indexnine.ai/insights/case-studies",
          },
          {
            name: "Growth Phase",
            url: "https://indexnine.ai/insights/case-studies/si",
          },
        ]}
      />
      <Header />

      {/* Hero Section */}
      <a id="intro1"></a>
      <div className={`bg-transparent pt-28 lg:pt-32 ${styles.sectionBgCase}`}>
        <div className="container grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-12">
          <div className="text-foreground-dark hidden lg:block">
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
          <div className="col-span-1 lg:col-span-2">
            <section
              className={`min-h-[100px] rounded-2xl shadow-2xl flex mb-8 lg:mb-12 border backdrop-blur-xl relative overflow-hidden ${styles.caseTitle}`}
            >
              <div className="mt-auto p-4 sm:p-6 lg:p-8">
                <div className="max-w-8xl mx-auto">
                  <div className="mb-6">
                    <span className="inline-block px-6 py-2 bg-black/20 shadow-md text-white rounded-lg text-sm font-medium border border-white/30 backdrop-blur-sm mr-3">
                      <span className="text-white/50  text-xs mr-2">
                        Client
                      </span>{" "}
                      Sports Interactive
                    </span>
                    <span className="inline-block px-6 py-2 bg-black/20 shadow-md text-white rounded-lg text-sm font-medium border border-white/30 backdrop-blur-sm mr-3">
                      <span className="text-white/50  text-xs mr-2">
                        Industry
                      </span>{" "}
                      Sports Media, Technology
                    </span>
                  </div>

                  <div className="inline-block p-4 md:p-8  bg-black/20 shadow-md text-white rounded-xl text-sm font-medium border border-white/30 backdrop-blur-sm">
                    <h1 className="text-3xl lg:text-[2.75rem] font-bold text-foreground mb-8 animate-fade-in font-montserrat flex flex-wrap md:flex-nowrap   gap-4 items-start">
                      <span className="leading-[1.05]">
                        Sports Interactive:
                      </span>
                      <span className="text-[#505dfd] leading-[1.05]">
                        AI-Powered Fan Engagement in Real Time
                      </span>
                    </h1>
                    <p className="text-xl sm:text-lg text-foreground/100 mb-0 max-w-4xl leading-relaxed font-regular animate-slide-up font-montserrat">
                      Unlocking a new level of scalability and solving a
                      technical Gordian knot through automated content creation.
                    </p>
                    <a id="challenge1"></a>
                  </div>
                </div>
              </div>
            </section>

            {/* Overview Section */}
            <section
              className={`p-8 bg-background relative overflow-hidden rounded-2xl mb-4 ${styles.middleCardBg2}`}
            >
              <div className="relative z-10">
                <div className="max-w-6xl mx-auto">
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-4 font-montserrat">
                      Challenge
                    </h3>
                    <p className="text-white mb-6">
                      The inaccessibility of real-time scaling for high-quality
                      social media content generation during live sporting
                      events was resulting in high operational costs and missed
                      opportunities for fan engagement. The client wanted a
                      reliable and long-term solution.
                    </p>
                  </div>
                </div>
              </div>
            </section>
            <section
              className={`p-8 mb-12 bg-background relative overflow-hidden rounded-2xl ${styles.middleCardBg2}`}
            >
              <div className="relative z-10">
                <div className="max-w-6xl mx-auto">
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-4 font-montserrat">
                      Solution
                    </h3>
                    <p className="text-white mb-6">
                      One of our Agentic AI pods developed a bespoke,
                      low-latency, AI-powered content generation engine (called
                      "Cricket LLM") that enables interactive fan engagement in
                      real time without compromising performance under increased
                      workloads during game time.
                    </p>

                    <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                      <div className="relative overflow-hidden bg-[#ffffff09] border border-[#ffffff15] rounded-2xl py-6 px-2 hover:shadow-glass-sm transition-all duration-500 transform hover:scale-102 hover:-translate-y-2 animate-fade-in group h-full">
                        <div className="flex items-center gap-4 flex-col">
                          <span className="flex w-14 h-14 rounded-full bg-[#2E348233]">
                            <Brain className="w-6 h-6 text-white m-auto" />
                          </span>
                          <span className="text-white">Custom LLM</span>
                        </div>
                      </div>
                      <div className="relative overflow-hidden bg-[#ffffff09] border border-[#ffffff15] rounded-2xl py-6 px-2 hover:shadow-glass-sm transition-all duration-500 transform hover:scale-102 hover:-translate-y-2 animate-fade-in group h-full">
                        <div className="flex items-center gap-4 flex-col">
                          <span className="flex w-14 h-14 rounded-full bg-[#2E348233]">
                            <Zap className="w-6 h-6 text-white m-auto" />
                          </span>
                          <span className="text-white text-center">
                            Real-Time Processing
                          </span>
                        </div>
                      </div>
                      <div className="relative overflow-hidden bg-[#ffffff09] border border-[#ffffff15] rounded-2xl px-2 py-6 hover:shadow-glass-sm transition-all duration-500 transform hover:scale-102 hover:-translate-y-2 animate-fade-in group h-full">
                        <div className="flex items-center gap-4 flex-col">
                          <span className="flex w-14 h-14 rounded-full bg-[#2E348233]">
                            <Users className="w-6 h-6 text-white m-auto" />
                          </span>
                          <span className="text-white text-center">
                            Personalization Engine
                          </span>
                        </div>
                      </div>
                      <div className="relative overflow-hidden bg-[#ffffff09] border border-[#ffffff15] rounded-2xl py-6 px-2 hover:shadow-glass-sm transition-all duration-500 transform hover:scale-102 hover:-translate-y-2 animate-fade-in group h-full">
                        <div className="flex items-center gap-4 flex-col">
                          <span className="flex w-14 h-14 rounded-full bg-[#2E348233]">
                            <CheckCircle className="w-6 h-6 text-white m-auto" />
                          </span>
                          <span className="text-white text-center">
                            Quality Assurance
                          </span>
                        </div>
                      </div>
                    </div>

                    <h3 className="text-lg font-semibold text-white mb-4 mt-8 font-montserrat">
                      Key Outcomes
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                      {[
                        "Total automation of in-match tweet generation, eliminating the need for a six-person content 'war room' during games.",
                        "The finished product can generate content ready for publishing in under fifteen seconds, beating the critical twenty-second window for content engagement.",
                        "A complex challenge that had harried the client for three years, Indexnine was able to provide a solution in two months.",
                        "We’ve built a foundational platform that enables the client to continue expanding operations in real-time content automation across multiple sports, leagues, and social media channels.",
                      ].map((outcome, index) => (
                        <div
                          key={index}
                          className="relative overflow-hidden bg-[#ffffff09] border border-[#ffffff25] rounded-2xl p-6 hover:shadow-glass-sm transition-all duration-500 transform hover:scale-102 hover:-translate-y-2 animate-fade-in group h-full"
                        >
                          <div className="flex items-center space-x-3 mb-3">
                            <div className="mr-2">
                              <span className="flex w-14 h-14 rounded-full bg-[#2E348233]">
                                <ArrowRightLeft className="w-6 h-6 text-white m-auto" />
                              </span>
                            </div>
                            {outcomeTitle[index]}
                          </div>
                          <div className="text-foreground text-sm">
                            {outcome}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <a id="challange2" className="absolute mt-[-40px]"></a>
              </div>
            </section>

            {/* Detailed Challenge Section */}
            <section className="p-8 backdrop-blur-xl bg-[#00000010] border border-[#00000005] relative mb-4 rounded-2xl shadow-inner shadow-white shadow-4xl">
              <div className="mx-auto relative z-10">
                <div className="max-w-8xl mx-auto">
                  <h3 className="text-lg font-semibold text-brand-primary-dark mb-4 font-montserrat">
                    Challenge
                  </h3>
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground-dark mb-8 font-montserrat">
                    High Stakes, High Pressure, High Speed
                  </h2>

                  <div className="bg-[#4A2424] mt-12 mb-8 flex">
                    <img
                      src={CaseInrImg}
                      className="w-full h-120 object-cover"
                    />
                  </div>

                  <p className="text-md text-foreground-dark leading-relaxed mb-8">
                    In sports media, an industry estimated to reach $1.19
                    billion by 2030, the game on the field isn’t the battle. The
                    real clash happens in the digital arena, on the timelines of
                    millions of fans demanding instant analysis, reactions, and
                    opportunities for engagement. For Sports Interactive, a
                    premier digital agency managing content for top-tier sports
                    leagues and teams, victory in this arena is its core
                    business.
                  </p>

                  <p className="text-md text-foreground-dark leading-relaxed mb-8">
                    Their most critical and time-sensitive operation revolved
                    around live-tweeting during matches. The formula for success
                    was brutal: when a pivotal moment happened—an interception,
                    a game-changing play, a buzzer beater—a creative, on-brand,
                    and factually accurate tweet had to hit the timeline within
                    twenty seconds. Any longer and the moment’s lost, drowned
                    out by the next play, rival outlets, or the oncoming tidal
                    wave of reactions from individual fans. As a sports media
                    firm, twenty seconds is all you’ve got.
                  </p>

                  <p className="text-md text-foreground-dark leading-relaxed mb-8">
                    To meet this demand, Sports Interactive relied on a costly
                    "war room,” a team of six expert content specialists and
                    sports experts working in frantic unison during every single
                    match. The method posed significant problems in terms of
                    burnout, human error, consistency, and resource intensity.
                    For scalability, the only way to cover more matches or
                    expand to new sports was to hire more specialists, creating
                    an untenable rate of growth to operational cost.
                  </p>
                  <p className="text-md text-foreground-dark leading-relaxed">
                    The client knew this method was unsustainable, but without a
                    reliable alternative, they couldn’t cut out the unwieldy
                    process. For three years, the company’s internal teams tried
                    to automate this process. They understood the problem, but
                    lacked the depth of expertise necessary to architect a
                    solution capable of handling the novel challenge of
                    simultaneous speed, creativity, and contextual
                    understanding. They were stuck in a cycle of manual
                    overload, unable to scale the most critical part of their
                    business.
                  </p>
                </div>
              </div>
            </section>

            {/* Technical Implementation Section - Replace with detailed phases */}
            <section className="p-8 backdrop-blur-xl bg-[#00000010] border border-[#00000005] relative rounded-2xl mb-12 shadow-inner shadow-white shadow-4xl">
              <div className="mx-auto relative z-10">
                <div className="max-w-8xl mx-auto">
                  <h3 className="text-lg font-semibold text-brand-primary-dark mb-4 font-montserrat">
                    Our Solution
                  </h3>
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground-dark mb-8 font-montserrat">
                    Content Automation Powered By AI
                  </h2>

                  <p className="text-lg text-foreground-dark leading-relaxed mb-12">
                    When Sports Interactive engaged us, they came with a
                    specific problem. Our approach, rooted in our AI Potential,
                    Readiness, and Risk (P2R) Assessment framework, began with
                    strategy. We knew this wasn't just about generating tweets;
                    it was about decoupling their growth from their headcount
                    and automating quality content creation.
                  </p>

                  <div className="space-y-12">
                    {/* Phase 1 */}
                    <div className="grid md:grid-cols-12 gap-8 items-start">
                      <div className="md:col-span-1">
                        <span className="flex w-12 h-12 rounded-full bg-[#505DFD] ">
                          <span className="font-light text-xl text-foreground m-auto">
                            1
                          </span>
                        </span>
                      </div>
                      <div className="md:col-span-11 backdrop-blur-xl bg-[#ffffff] border border-glass-border rounded-2xl p-6">
                        <h3 className="text-2xl font-semibold text-foreground-dark mb-4 font-montserrat">
                          Phase 1: The AI Assessment - Defining the Opportunity
                        </h3>
                        <p className="text-foreground-dark-muted leading-relaxed">
                          Our Applied AI and Discovery studios initiated the
                          engagement with a rapid, targeted assessment. Instead
                          of jumping straight into development, we first mapped
                          their content workflow to identify bottlenecks and
                          quantify the business impact. From this data, we could
                          extract actionable insights and engineer for maximum
                          impact. Framing the project not just as a technical
                          task, but as a transformative initiative with a clear
                          ROI, we had our objective: build a platform capable of
                          continually scaling their real-time engagement to meet
                          demand reliably and effectively.
                        </p>
                      </div>
                    </div>

                    {/* Phase 2 */}
                    <div className="grid md:grid-cols-12 gap-8 items-start">
                      <div className="md:col-span-1">
                        <span className="flex w-12 h-12 rounded-full bg-[#505DFD] ">
                          <span className="font-light text-xl text-foreground m-auto">
                            2
                          </span>
                        </span>
                      </div>
                      <div className="md:col-span-11 backdrop-blur-xl bg-glass-bg/10 border border-glass-border rounded-2xl p-6">
                        <h3 className="text-2xl font-semibold text-foreground-dark mb-4 font-montserrat">
                          Phase 2: The Architecture - Engineering Cricket LLM
                        </h3>
                        <p className="text-foreground-dark leading-relaxed mb-6">
                          Architecting a solution for this this would require
                          technical sophistication far beyond picking
                          off-the-shelf AI tools. Our Agentic AI pod, a
                          specialized team of full-stack AI engineers,
                          architected a bespoke, low-latency AI engine. The
                          solution had to master three complex domains
                          simultaneously:
                        </p>

                        <div className="grid md:grid-cols-2 gap-6">
                          <div className="backdrop-blur-xl bg-[#fff] border border-glass-border rounded-2xl p-6 col-span-2">
                            <h4 className="font-semibold text-foreground-dark mb-2">
                              Real-Time Data Ingestion
                            </h4>
                            <p className="text-sm text-foreground-dark-muted">
                              We built a high-throughput, event-driven pipeline
                              capable of consuming live sports data feeds with
                              sub-second latency. This pipeline acts as the
                              central nervous system, triggering the AI brain at
                              the precise moment of action.
                            </p>
                          </div>
                          <div className="backdrop-blur-xl bg-[#fff] border border-glass-border rounded-2xl p-6 col-span-2">
                            <h4 className="font-semibold text-foreground-dark mb-2">
                              Context-Aware Generative AI
                            </h4>
                            <p className="text-sm text-foreground-dark-muted">
                              The core of the solution is a proprietary model we
                              dubbed "Cricket LLM.” Far beyond a regular
                              chatbot, its architecture included dynamic prompt
                              engineering to optimize the quality of content
                              output, a multi-layered validation system to
                              ensure only brand-aligned content is greenlit, and
                              a language model fine-tuned on a massive pool of
                              sports commentary, player statistics, and,
                              crucially, the client's historical content.
                            </p>
                          </div>
                          <div className="backdrop-blur-xl bg-[#fff] border border-glass-border rounded-2xl p-6 col-span-2">
                            <h4 className="font-semibold text-foreground-dark mb-2">
                              Scalable MLOps Pipeline
                            </h4>
                            <p className="text-sm text-foreground-dark-muted">
                              Knowing an AI model is only as good as the
                              infrastructure running it, we built a robust MLOps
                              pipeline to manage the entire lifecycle of Cricket
                              LLM. This included automated model retraining,
                              performance monitoring, and a CI/CD process to
                              ensure the engine continuously improves and adapts
                              without manual intervention.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Phase 3 */}
                    <div className="grid md:grid-cols-12 gap-8 items-start">
                      <div className="md:col-span-1">
                        <span className="flex w-12 h-12 rounded-full bg-[#505DFD] ">
                          <span className="font-light text-xl text-foreground m-auto">
                            3
                          </span>
                        </span>
                      </div>
                      <div className="md:col-span-11 backdrop-blur-xl bg-glass-bg/10 border border-glass-border rounded-2xl p-6">
                        <h3 className="text-2xl font-semibold text-foreground-dark mb-4 font-montserrat">
                          Phase 3: Outcome-Oriented Delivery
                        </h3>
                        <p className="text-foreground-dark-muted leading-relaxed mb-6 col-span-2">
                          Throughout the two-month engagement, our Agentic AI
                          pod worked in tight, agile sprints. We operated on a
                          model of sprint commitments, where we guaranteed the
                          delivery of specific outcomes at each stage. This
                          de-risked the project for Sports Interactive, ensuring
                          they saw tangible progress and value every step of the
                          way. We didn't just promise a solution; we
                          demonstrated it, culminating in a successful live
                          deployment during the Indian Premier League (IPL)
                          season for the Lucknow Super Giants.
                        </p>

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
                    Transforming a Cost Center Into a Growth Engine
                  </h2>
                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                    <div
                      className={`rounded-xl py-4 px-1 text-center border border-[#505DFD] ${styles.middleCardBg2}`}
                    >
                      <h3 className="text-3xl font-bold text-white mb-2 font-montserrat">
                        90%
                      </h3>
                      <p className="text-foreground text-xs mb-0">
                        Cost Reduction
                      </p>
                      <span className="inline-block w-12 h-1 rounded-sm bg-[#ffffff75]"></span>
                    </div>
                    <div
                      className={`rounded-xl py-4 px-1 text-center border border-[#505DFD] ${styles.middleCardBg2}`}
                    >
                      <h3 className="text-3xl font-bold text-white mb-2 font-montserrat">
                        15sec
                      </h3>
                      <p className="text-foreground text-xs mb-0">
                        Generation Time
                      </p>
                      <span className="inline-block w-12 h-1 rounded-sm bg-[#ffffff75]"></span>
                    </div>
                    <div
                      className={`rounded-xl py-4 px-1 text-center border border-[#505DFD] ${styles.middleCardBg2}`}
                    >
                      <h3 className="text-3xl font-bold text-white mb-2 font-montserrat">
                        10x
                      </h3>
                      <p className="text-foreground text-xs mb-0">
                        Content Volume
                      </p>
                      <span className="inline-block w-12 h-1 rounded-sm bg-[#ffffff75]"></span>
                    </div>
                    <div
                      className={`rounded-xl py-4 px-1 text-center border border-[#505DFD] ${styles.middleCardBg2}`}
                    >
                      <h3 className="text-3xl font-bold text-white mb-2 font-montserrat">
                        24/7
                      </h3>
                      <p className="text-foreground text-xs mb-0">
                        Real-Time Operations
                      </p>
                      <span className="inline-block w-12 h-1 rounded-sm bg-[#ffffff75]"></span>
                    </div>
                  </div>

                  <div className="text-center mb-8">
                    <p className="text-foreground-dark leading-relaxed mb-6">
                      After the success of the pilot, the client chose to engage
                      Indexnine once again to handle the complexities of MLOps,
                      model maintenance, and multi-platform integration involved
                      in further scaling operations. This re-engagement of
                      Indexnine to lead the next phase of the product's growth
                      is a commitment we take very seriously, as both a
                      testament to the deep, specialized expertise we bring and
                      an opportunity to continue facilitating our client’s
                      success.
                    </p>
                    <a id="whyWorked"></a>
                  </div>
                </div>
              </div>
            </section>

            <section className="relative overflow-hidden bg-gradient-to-br from-brand-primary/5 via-transparent to-brand-purple/5 rounded-3xl p-8 shadow-glass border border-glass-border backdrop-blur-xl mb-12">
              <div className="relative z-10">
                <h2 className="text-2xl font-bold text-foreground-dark mb-6 text-center font-montserrat">
                  Why It Worked
                </h2>
                <p className="text-center text-black mb-8">
                  This success story is a direct result of the core principles
                  that differentiate Indexnine:
                </p>
                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div className="mb-4 col-span-2">
                    <span className="inline-block w-full h-1 rounded-sm bg-gradient-to-r from-brand-purple/50 via-[#505CFD] to-brand-purple/50 mb-2"></span>
                    <div className="flex flex-col text-center">
                      <span className="mx-auto flex w-14 h-14 rounded-full bg-gradient-to-r from-[#505CFD19] to-brand-purple/20 mb-2">
                        <CheckCircle className="w-6 h-6 text-[#8389DC] m-auto" />
                      </span>
                      <span className="text-foreground-dark">
                        <span className="font-medium">The Studio Model:</span>{" "}
                        This wasn’t a run-of-the-mill AI project. On top of
                        extensive expertise across AI technologies, it required
                        the seamless collaboration. Our Discovery, Applied AI,
                        and Engineering studios each contributed to extract
                        strategic insights through data analysis and frame the
                        business problem, to design the model, and to build the
                        data pipelines and infrastructure, respectively. This
                        integrated approach is a unique cornerstone of our
                        operation.
                      </span>
                    </div>
                  </div>
                  <div className="mb-4">
                    <span className="inline-block w-full h-1 rounded-sm bg-gradient-to-r from-brand-purple/50 via-[#505CFD] to-brand-purple/50 mb-2"></span>
                    <div className="flex flex-col text-center">
                      <span className="mx-auto flex w-14 h-14 rounded-full bg-gradient-to-r from-[#505CFD19] to-brand-purple/20 mb-2">
                        <CheckCircle className="w-6 h-6 text-[#8389DC] m-auto" />
                      </span>
                      <span className="text-foreground-dark">
                        <span className="font-medium">3X Engineers:</span> This
                        project demanded more than just coders. It required
                        engineers with a deep understanding of MLOps, data
                        architecture, and LLMs, combined with a product mindset
                        to grasp the business context of fan engagement and
                        brand voice.
                      </span>
                    </div>
                  </div>

                  <div className="mb-4">
                    <span className="inline-block w-full h-1 rounded-sm bg-gradient-to-r from-brand-purple/50 via-[#505CFD] to-brand-purple/50 mb-2"></span>
                    <div className="flex flex-col text-center">
                      <span className="mx-auto flex w-14 h-14 rounded-full bg-gradient-to-r from-[#505CFD19] to-brand-purple/20 mb-2">
                        <CheckCircle className="w-6 h-6 text-[#8389DC] m-auto" />
                      </span>
                      <span className="text-foreground-dark">
                        <span className="font-medium">
                          A Founder's Mindset:
                        </span>{" "}
                        We took ownership of a problem that had stymied a
                        capable tech organization for years. We didn't just
                        deliver a service; we delivered a strategic business
                        transformation, demonstrating our core belief that our
                        success is intrinsically linked to our clients'.
                      </span>
                    </div>
                  </div>
                </div>
                <div
                  className={`p-8 bg-background relative rounded-xl mt-6 ${styles.middleCardBg2}`}
                >
                  <p className="text-lg text-foreground text-center font-medium">
                    For companies looking at what’s beyond the AI hype and
                    wanting to drive real, measurable results, the Sports
                    Interactive story serves as a powerful blueprint. It
                    demonstrates that with the right strategic partner, the most
                    complex AI challenges can be transformed into major growth
                    opportunities.
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>

      <section className={`py-24 lg:py-32 ${styles.ctaBg}`}>
        <div className="container mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold mb-6 text-foreground-white">
            <span className="leading-[1.4]">Ready to Automate?</span>
          </h2>
          <p className="text-xl text-foreground/80 mb-8 max-w-3xl mx-auto font-montserrat">
            Is your business looking at ways to automate, scale, and lead with
            AI? We’re ready to help.
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

export default GrowCaseStudy;
