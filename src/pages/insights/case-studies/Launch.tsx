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
  { href: "#challenge2", label: "A Market Ripe for Disruption" },
  { href: "#results", label: "Results & Impact" },
  { href: "#whyWorked", label: "Why It Worked" },
];

const outcomeTitle = [
  "Market-Ready MVP Launched",
  "99% Cost Reduction for End-Users",
  "Complex Data Problem Solved",
  "Created a Reliable Tech Moat",
];

const LaunchCaseStudy = () => {
  const [selected, setSelected] = useState("#intro1");

  // SEO Configuration
  useSEO({
    title:
      "Annotate FinTech Launch Case Study - AI-Powered Philanthropic Finance Disruption | Indexnine",
    description:
      "Discover how Indexnine launched Annotate's AI-powered platform that disrupted philanthropic finance research, reducing costs by 99% from $50K to $500 per report through strategic MVP development.",
    keywords:
      "fintech launch, AI platform development, philanthropic finance, MVP development, cost reduction, startup launch strategy, RAG architecture, AI research agent",
    canonicalUrl: "https://indexnine.ai/insights/case-studies/launch",
    ogImage: "https://indexnine.ai/images/case-studies/launch-og.jpg",
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
          {
            name: "Case Studies",
            url: "https://indexnine.ai/insights/case-studies",
          },
          {
            name: "Launch Phase",
            url: "https://indexnine.ai/insights/case-studies/launch",
          },
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
                      FinTech, Philanthropy
                    </span>
                  </div>

                  <div className="inline-block p-8 bg-black/20 shadow-md text-white rounded-xl text-sm font-medium border border-white/30 backdrop-blur-sm">
                    <h1 className="text-4xl sm:text-3xl lg:text-[2.75rem] font-bold text-foreground mb-8 animate-fade-in font-montserrat md:flex gap-4 items-start">
                      <span className="leading-[1.05]">Annotate:</span>
                      <span className="bg-gradient-primary bg-clip-text text-[#505cfd] leading-[1.05]">
                        Launching AI-Powered Disruption in Philanthropic Finance
                      </span>
                    </h1>
                    <p className="text-xl sm:text-lg text-foreground/100 mb-0 max-w-4xl leading-relaxed font-regular animate-slide-up font-montserrat">
                      Taking a bold idea of democratized financial research from
                      launch to market-ready MVP.
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
                      The process for prospective donors to access reliable
                      research on charitable organizations was controlled by
                      expensive consultants, creating a bottleneck in the
                      market. Annotate wanted to build a platform that could
                      disrupt this model by delivering the same, or better,
                      insights at a fraction of the cost.
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
                      A strategic engagement with Indexnine's Launch services,
                      starting with our proprietary Sprint Zero framework to
                      define the MVP, followed by the rapid development of a
                      sophisticated AI research agent built on
                      retrieval-augmented generation (RAG) architecture.
                    </p>
                    <div className="grid grid-cols md:grid-cols-4 gap-6">
                      <div className="relative overflow-hidden bg-[#ffffff09] border border-[#ffffff15] rounded-2xl py-6 px-2 hover:shadow-glass-sm transition-all duration-500 transform hover:scale-102 hover:-translate-y-2 animate-fade-in group h-full">
                        <div className="flex items-center gap-4 flex-col">
                          <span className="flex w-14 h-14 rounded-full bg-[#2E348233]">
                            <Target className="w-6 h-6 text-white m-auto" />
                          </span>
                          <span className="text-white">Sprint Zero</span>
                        </div>
                      </div>
                      <div className="relative overflow-hidden bg-[#ffffff09] border border-[#ffffff15] rounded-2xl py-6 px-2 hover:shadow-glass-sm transition-all duration-500 transform hover:scale-102 hover:-translate-y-2 animate-fade-in group h-full">
                        <div className="flex items-center gap-4 flex-col">
                          <span className="flex w-14 h-14 rounded-full bg-[#2E348233]">
                            <Settings className="w-6 h-6 text-white m-auto" />
                          </span>
                          <span className="text-white">RAG Architecture</span>
                        </div>
                      </div>
                      <div className="relative overflow-hidden bg-[#ffffff09] border border-[#ffffff15] rounded-2xl px-2 py-6 hover:shadow-glass-sm transition-all duration-500 transform hover:scale-102 hover:-translate-y-2 animate-fade-in group h-full">
                        <div className="flex items-center gap-4 flex-col">
                          <span className="flex w-14 h-14 rounded-full bg-[#2E348233]">
                            <Workflow className="w-6 h-6 text-white m-auto" />
                          </span>
                          <span className="text-white">AI Research Agent</span>
                        </div>
                      </div>
                      <div className="relative overflow-hidden bg-[#ffffff09] border border-[#ffffff15] rounded-2xl py-6 px-2 hover:shadow-glass-sm transition-all duration-500 transform hover:scale-102 hover:-translate-y-2 animate-fade-in group h-full">
                        <div className="flex items-center gap-4 flex-col">
                          <span className="flex w-14 h-14 rounded-full bg-[#2E348233]">
                            <Scale className="w-6 h-6 text-white m-auto" />
                          </span>
                          <span className="text-white">Scalable Platform</span>
                        </div>
                      </div>
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-4 mt-8 font-montserrat">
                      Key Outcomes
                    </h3>
                    <div className="grid grid-cols md:grid-cols-2 gap-6">
                      {[
                        "Successfully delivering a functional, AI-powered platform validated the core business model and enabled the client to execute on an aggressive GTM strategy.",
                        "The platform was designed to deliver research reports for approximately $500, a dramatic reduction from industry-standard consultant fees ranging from $20,000 to $50,000.",
                        "By engineering a robust data pipeline capable of ingesting and synthesizing highly diverse data types into reliable, trustworthy insights.",
                        "We built a proprietary AI engine that now serves as the client's core intellectual property and a major competitive advantage.",
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
                          <div className="text-foreground-muted text-sm">
                            {outcome}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <a id="challenge2" className="absolute mt-[-40px]"></a>
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
                    <img src={CaseInrImg} className="w-full h-full" />
                  </div>

                  <p className="text-md text-foreground-dark leading-relaxed mb-8">
                    In the upper echelons of philanthropic contributions, making
                    informed decisions is a surprisingly expensive and archaic
                    process. An individual or family looking to donate major
                    funding to a charitable cause would typically hire a
                    specialized consultant. The consultant would then spend
                    weeks or months manually conducting research, analyzing
                    financial statements, and compiling a detailed report. This
                    service alone would cost tens of thousands of dollars.
                  </p>

                  <p className="text-md text-foreground-dark leading-relaxed mb-8">
                    The founder of Annotate, a veteran in the field of
                    philanthropic wealth management, saw fundamental flaws to
                    address in this model:
                    <ol className="my-2 list-decimal">
                      <li className="mx-6 my-2">
                        Inaccessible: The high cost limited the availability of
                        important due diligence to the ultra-wealthy, creating a
                        price barrier between prospective donors and access to
                        the data analysis that would allow their money to go
                        where it could do the most good.
                      </li>
                      <li className="mx-6 my-2">
                        Inefficient: The existing methodology had stagnated. The
                        data analysis was slow, neglecting to leverage modern
                        technology to analyze the vast amounts of publicly
                        available data on non-profit organizations.
                      </li>
                      <li className="mx-6 my-2">
                        Unscalable: The entire model was dependent on the
                        limited bandwidth of human consultants, utilizing
                        outdated methods for a narrow client base, and as a
                        result was unable to adapt to the growing demand for
                        data-backed insights in philanthropic giving.
                      </li>
                    </ol>{" "}
                  </p>

                  <p className="text-md text-foreground-dark leading-relaxed ">
                    Annotate's vision was to disrupt this entire ecosystem. They
                    wanted to build a platform that could do what a team of
                    consultants did, but faster, more efficiently, and at a
                    price point—around $500 per report—that would democratize
                    access to this vital information. The challenge was big: How
                    could a startup with a bold idea but limited resources build
                    a technology platform sophisticated enough to exceed the
                    processes of experienced human analysts?
                  </p>
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
                    Annotate came to Indexnine with the vision. Our job was to
                    translate that vision into a viable, scalable, and
                    market-ready product. To meet the high bar the client needed
                    to reach their goal, our solution had to start, well before
                    a single line of code was written, with strategy.
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
                          Phase 1: Sprint Zero Framework
                        </h3>
                        <p className="text-foreground-dark-muted leading-relaxed">
                          Our Discovery Studio team would start by initiating a
                          Sprint Zero. This is a core part of our methodology
                          designed to de-risk product development while adhering
                          to the product vision. In a series of intensive
                          workshops with the client, we would:
                          <ol className="my-2 list-decimal">
                            <li className="mx-6 my-2">
                              <span className="font-medium">
                                Identify and Validate Core Problems:{" "}
                              </span>
                              We rigorously confirmed the pain points of the
                              target users (high-net-worth individuals and their
                              financial advisors).
                            </li>
                            <li className="mx-6 my-2">
                              <span className="font-medium">
                                Map the User Journey:
                              </span>{" "}
                              Detailing the ideal workflow from a user defining
                              their philanthropic goals to receiving a final,
                              data-backed report, we created a map of the
                              optimal user journey end-to-end.
                            </li>
                            <li className="mx-6 my-2">
                              <span className="font-medium">
                                Define the MVP Scope:
                              </span>{" "}
                              We collaboratively identified the absolutely
                              essential features required to prove the concept
                              and deliver immediate value. This included the
                              conversational AI interface, the core data
                              processing engine, and the report generation
                              module.
                            </li>
                            <li className="mx-6 my-2">
                              <span className="font-medium">
                                Architected the Technical Solution:
                              </span>{" "}
                              Our senior architects designed the high-level
                              technical blueprint for the platform, choosing a
                              Retrieval-Augmented Generation (RAG) architecture
                              as the most effective way to achieve the desired
                              outcome.
                            </li>
                          </ol>
                          The output: By the end of a Sprint Zero, our client
                          had a clear, actionable roadmap and a shared
                          confidence that the product we were about to build was
                          not only technically feasible but also fully aligned
                          with a real market need.
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
                          Phase 2: RAG Architecture & AI Research Engine
                        </h3>
                        <p className="text-foreground-dark leading-relaxed mb-6">
                          With the blueprint in hand, our Agentic AI Pod began
                          the complex task of building the product engine. The
                          platform's intelligence is derived from its ability to
                          analyze and synthesize information from incredibly
                          diverse sources. This presented a significant
                          engineering challenge.
                        </p>
                        <p className="text-foreground-dark leading-relaxed mb-6">
                          The Heterogeneous Data Problem: The AI needed to
                          understand both:
                        </p>
                        <div className="grid md:grid-cols-2 gap-6">
                          <div className="backdrop-blur-xl bg-[#fff] border border-glass-border rounded-2xl p-6">
                            <h4 className="font-semibold text-foreground-dark mb-2">
                              Structured Data
                            </h4>
                            <p className="text-sm text-foreground-dark-muted">
                              Clean, numerical data like the kind submitted in
                              IRS Form 990 tax filings, which detail an NGO's
                              financials, expenses, and executive compensation.
                            </p>
                          </div>
                          <div className="backdrop-blur-xl bg-[#fff] border border-glass-border rounded-2xl p-6">
                            <h4 className="font-semibold text-foreground-dark mb-2">
                              Unstructured Data
                            </h4>
                            <p className="text-sm text-foreground-dark-muted">
                              Dense, narrative-heavy text from NGO annual
                              reports, press releases, and websites, all of
                              which contain relevant data on the mission,
                              activities, and impact of charitable
                              organizations.
                            </p>
                          </div>
                        </div>
                        <p className="text-foreground-dark leading-relaxed my-6">
                          A simple database query or a generic large language
                          model (LLM) prompt would fail outright when faced with
                          such differing sets of data.
                        </p>
                        <p className="text-foreground-dark leading-relaxed mb-6">
                          Our solution? A sophisticated, multi-stage data
                          pipeline feeding into a custom RAG system:
                        </p>

                        <div className="grid md:grid-cols-2 gap-6">
                          <div className="backdrop-blur-xl bg-[#fff] border border-glass-border rounded-2xl p-6">
                            <h4 className="font-semibold text-foreground-dark mb-2">
                              Intelligent Data Ingestion and Curation
                            </h4>
                            <p className="text-sm text-foreground-dark-muted">
                              The first critical step was facilitating clean
                              data for accuracy with simultaneous data curation.
                              To achieve this, we built a robust pipeline to
                              automatically ingest documents from multiple
                              sources.
                            </p>
                          </div>
                          <div className="backdrop-blur-xl bg-[#fff] border border-glass-border rounded-2xl p-6">
                            <h4 className="font-semibold text-foreground-dark mb-2">
                              Advanced Entity Extraction
                            </h4>
                            <p className="text-sm text-foreground-dark-muted">
                              For the unstructured documents, we implemented
                              advanced natural language processing (NLP) models
                              to perform named entity recognition (NER). These
                              models were trained to identify and extract key
                              concepts like "programmatic expenses,"
                              "fundraising efficiency ratios," and "impact
                              metrics," effectively turning unstructured prose
                              into structured, analyzable data.
                            </p>
                          </div>
                          <div className="backdrop-blur-xl bg-[#fff] border border-glass-border rounded-2xl p-6">
                            <h4 className="font-semibold text-foreground-dark mb-2">
                              Unified Vectorization
                            </h4>
                            <p className="text-sm text-foreground-dark-muted">
                              Both the structured financial data and the
                              extracted textual concepts were then converted
                              into numerical representations (vectors) and
                              stored in a specialized vector database. This
                              created a unified, machine-readable knowledge base
                              that the AI could query.
                            </p>
                          </div>
                          <div className="backdrop-blur-xl bg-[#fff] border border-glass-border rounded-2xl p-6">
                            <h4 className="font-semibold text-foreground-dark mb-2">
                              The RAG-Powered Conversational Agent
                            </h4>
                            <p className="text-sm text-foreground-dark-muted">
                              When a user interacts with the platform (e.g.,
                              "Find me NGOs focused on literacy in New York City
                              with an expense ratio below 15%"), the system
                              translates this query and retrieves the most
                              relevant data chunks from the vector database. The
                              retrieved context is then injected into a
                              carefully crafted prompt for a powerful LLM to
                              configure.
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
                          Phase 3: Product Outcomes
                        </h3>
                        <p className="text-foreground-dark-muted leading-relaxed mb-6">
                          This RAG architecture is what makes the product
                          trustworthy. By grounding the LLM's response in
                          factual, retrieved data, we dramatically reduce the
                          risk of "hallucinations" or inaccurate information.
                          This technical execution is the key to building
                          reliability, user confidence, and ensuring a final
                          report that goes beyond a simple summary and stands as
                          a trustworthy financial research document.
                        </p>
                        <p className="text-foreground-dark-muted leading-relaxed mb-6">
                          The Results: Our partnership with Annotate resulted in
                          a successful launch, taking the client’s vision from a
                          disruptive new idea all the way to a tangible product.
                        </p>

                        <div className="grid md:grid-cols-2 gap-6">
                          <div className="backdrop-blur-xl bg-[#fff] border border-glass-border rounded-2xl p-6">
                            <h4 className="font-semibold text-foreground-dark mb-2">
                              Successfully Launched MVP
                            </h4>
                            <p className="text-sm text-foreground-dark-muted">
                              Successfully Launched MVP: We delivered a fully
                              functional platform that proved the core business
                              model was not just visionary, but achievable. The
                              founder was equipped with a powerful product to
                              take to market, engage with early adopters, and
                              begin the crucial process of finding
                              product-market fit.
                            </p>
                          </div>
                          <div className="backdrop-blur-xl bg-[#fff] border border-glass-border rounded-2xl p-6">
                            <h4 className="font-semibold text-foreground-dark mb-2">
                              Created a Platform for Disruption
                            </h4>
                            <p className="text-sm text-foreground-dark-muted">
                              The AI-powered solution is poised to completely
                              disrupt the traditional philanthropic consulting
                              market. By offering enterprise-grade research at a
                              99% cost reduction, Annotate has democratized
                              access to information and created a new category
                              of service.
                            </p>
                          </div>
                          <div className="backdrop-blur-xl bg-[#fff] border border-glass-border rounded-2xl p-6 col-span-2">
                            <h4 className="font-semibold text-foreground-dark mb-2">
                              Built a Defensible and Scalable Business Core
                            </h4>
                            <p className="text-sm text-foreground-dark-muted">
                              The proprietary AI Research Agent and the data
                              pipeline we engineered are now Annotate's crown
                              jewels. This is not a simple application that can
                              be easily replicated; it is a deep, defensible
                              technology asset that provides a significant and
                              lasting competitive advantage.
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
                    <div
                      className={`rounded-xl py-4 px-1 text-center border border-[#505DFD] ${styles.middleCardBg2}`}
                    >
                      <h3 className="text-3xl font-bold text-white mb-2 font-montserrat">
                        99%
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
                        $500
                      </h3>
                      <p className="text-foreground text-xs mb-0">
                        Per Report Cost
                      </p>
                      <span className="inline-block w-12 h-1 rounded-sm bg-[#ffffff75]"></span>
                    </div>
                    <div
                      className={`rounded-xl py-4 px-1 text-center border border-[#505DFD] ${styles.middleCardBg2}`}
                    >
                      <h3 className="text-3xl font-bold text-white mb-2 font-montserrat">
                        6
                      </h3>
                      <p className="text-foreground text-xs mb-0">
                        Week Delivery
                      </p>
                      <span className="inline-block w-12 h-1 rounded-sm bg-[#ffffff75]"></span>
                    </div>
                    <div
                      className={`rounded-xl py-4 px-1 text-center border border-[#505DFD] ${styles.middleCardBg2}`}
                    >
                      <h3 className="text-3xl font-bold text-white mb-2 font-montserrat">
                        100+
                      </h3>
                      <p className="text-foreground text-xs mb-0">
                        Data Sources
                      </p>
                      <span className="inline-block w-12 h-1 rounded-sm bg-[#ffffff75]"></span>
                    </div>
                  </div>

                  <div className="text-center mb-8">
                    <p className="text-foreground-dark leading-relaxed mb-6">
                      The platform successfully delivered a 99% cost reduction
                      in philanthropic research, reducing report costs from
                      $50,000 to $500 while maintaining consultant-level
                      quality. The AI-powered system democratized access to
                      critical philanthropic intelligence for donors of all
                      sizes.
                    </p>
                    <a id="whyWorked"></a>
                  </div>
                </div>
              </div>
            </section>

            {/* Why It Worked Section - Enhanced */}
            <section className="relative overflow-hidden bg-gradient-to-br from-brand-primary/5 via-transparent to-brand-purple/5 rounded-3xl p-8 shadow-glass border border-glass-border backdrop-blur-xl mb-12">
              <div className="relative z-10">
                <h2 className="text-2xl font-bold text-foreground-dark mb-2 text-center font-montserrat">
                  Why It Worked
                </h2>
                <p className="text-foreground-dark text-center mb-8">
                  Annotate's successful launch is a direct reflection of our
                  approach to building new products.
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    "A Disciplined Launch Process: Our Sprint Zero framework was critical. By investing in strategy and discovery upfront, we de-risked the project, ensuring that the process, and then the product, was carefully planned for client success.",
                    "Deep AI and Data Expertise: This project was made possible through the carefully curated, specialized skills of our Applied AI and Data teams. Our ability to handle complex data engineering challenges and architect sophisticated RAG systems was the key to delivering the vision the way it needed to be.",
                    "The Agentic AI Pod: We deployed a small, elite team of 3X Engineers who possessed the full range of skills—from data engineering to MLOps to product thinking—needed to execute quickly and effectively.",
                    "A True Founder's Mindset: We approached this engagement as partners, not vendors. We understood the founder's vision and treated their mission-critical launch with the care and dedication it deserved, providing the strategic guidance and technical firepower needed to engineer excellence in the product.",
                  ].map((result, index) => (
                    <div key={index} className="mb-4">
                      <span className="inline-block w-full h-1 rounded-sm bg-gradient-to-r from-brand-purple/50 via-[#505CFD] to-brand-purple/50 mb-2"></span>
                      <div className="flex flex-col text-center">
                        <span className="mx-auto flex w-14 h-14 rounded-full bg-gradient-to-r from-[#505CFD19] to-brand-purple/20 mb-2">
                          <CheckCircle className="w-6 h-6 text-[#8389DC] m-auto" />
                        </span>
                        <span className="text-foreground-dark">{result}</span>
                      </div>
                    </div>
                  ))}
                </div>
                <div
                  className={`p-8 bg-background relative rounded-xl mt-6 ${styles.middleCardBg2}`}
                >
                  <p className="text-lg text-foreground text-center font-medium">
                    The Annotate story is a powerful example of how Indexnine
                    helps visionary founders launch transformative products. We
                    provide the strategic discipline, deep technical expertise,
                    and agile execution needed to navigate the complexities of
                    the "Launch" phase and build the enduring products of
                    tomorrow.
                  </p>
                  <a id="whyWorked"></a>
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
            So are we. Set up a free consultation with Indexnine today.
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

export default LaunchCaseStudy;
