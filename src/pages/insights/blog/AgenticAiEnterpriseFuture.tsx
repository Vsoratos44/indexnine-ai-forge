import React, { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import {
  ArrowLeft,
  CheckCircle,
  Download,
  ExternalLink,
  Clock,
  User,
  Brain,
  Target,
  Zap,
  Shield,
  AlertTriangle,
  ChevronUp,
  ChevronDown,
} from "lucide-react";
import { Link } from "react-router-dom";
import BlogDetailsBg from "@/assets/images/blog-details-bg.webp";
import BlogContBg from "@/assets/images/blog-content-bg.webp";
import blogImg2 from "@/assets/images/blog-img2.webp";
import styles from "../../../assets/css/stylesheet.module.css";

const leftNavLinks = [
  { href: "#intro", label: "Introduction" },
  { href: "#enterprise-ai", label: "Enterprise-Grade Agentic AI" },
  { href: "#aws-agentcore", label: "AWS AgentCore" },
  { href: "#indexnine-framework", label: "The Indexnine Framework" },
  { href: "#implementation", label: "Implementation Steps" },
  { href: "#faqs", label: "Frequently Asked Questions" },
];

const AgenticAiEnterpriseFuture = () => {
  const [selected, setSelected] = useState("#intro");
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setExpandedFAQ(expandedFAQ === index ? null : index);
  };

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
    <div
      className="min-h-screen bg-contain bg-top bg-no-repeat bg-white"
      style={{ backgroundImage: `url(${BlogDetailsBg})` }}
    >
      {" "}
      <Header />
      {/* Enhanced SEO Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline:
              "The Enterprise Guide to Agentic AI: Beyond the Hype of AWS AgentCore",
            description:
              "Agentic AI is the next enterprise frontier, but success requires more than a toolkit. Explore a pragmatic framework for AI strategy, data readiness, and risk management to turn autonomous agents into a true competitive advantage.",
            url: "https://www.indexnine.com/insights/blogs/agentic-ai-enterprise-future",
            datePublished: "2025-01-15T00:00:00Z",
            dateModified: "2025-01-15T00:00:00Z",
            author: {
              "@type": "Organization",
              name: "IndexNine AI Strategy Team",
            },
            publisher: {
              "@type": "Organization",
              name: "IndexNine Technologies",
              logo: {
                "@type": "ImageObject",
                url: "https://www.indexnine.com/logo.png",
              },
            },
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id":
                "https://www.indexnine.com/insights/blogs/agentic-ai-enterprise-future",
            },
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",

            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "What makes enterprise-grade agentic AI different from standard chatbots?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Enterprise-grade agentic AI systems go beyond conversation. They can autonomously perceive environments, reason about complex data, plan multi-step actions, and execute tasks using various digital tools and APIs. They're workflow automation engines with decision-making capabilities, not just interactive interfaces.",
                },
              },
              {
                "@type": "Question",
                name: "How does AWS AgentCore change the agentic AI landscape?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "AWS AgentCore provides essential infrastructure like memory management, observability, and service integration. It's model-agnostic and reduces development complexity, allowing teams to focus on building domain-specific intelligence rather than foundational plumbing.",
                },
              },
            ],
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: "https://www.indexnine.com/",
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "Insights",
                item: "https://www.indexnine.com/insights",
              },
              {
                "@type": "ListItem",
                position: 3,
                name: "Blogs",
                item: "https://www.indexnine.com/insights/blogs",
              },
              {
                "@type": "ListItem",
                position: 4,
                name: "Agentic AI Enterprise Guide",
                item: "https://www.indexnine.com/insights/blogs/agentic-ai-enterprise-future",
              },
            ],
          }),
        }}
      />
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[#ffffff00]">
        <div className="relative z-10 container mx-auto pt-36">
          <div className="max-w-7xl mx-auto text-center lg:text-left ml-0">
            <div className="flex items-center">
              <Link
                to="/insights/blogs"
                className="inline-flex items-center text-foreground-muted hover:text-brand-primary-dark transition-colors mb-6 mr-6"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Blogs
              </Link>
            </div>

            <h1 className="text-[1.5rem] sm:text-[2rem] lg:text-[2.5rem] font-semibold text-foreground mb-6 leading-[1.25] animate-fade-in font-montserrat">
              The Future Is Agentic. <br />
              Is Your Enterprise Ready for What Comes Next?
            </h1>

            <div className="flex items-center gap-6 text-sm text-foreground/80 mb-8">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span className="font-montserrat">AI Strategy Team</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span className="font-montserrat">12 min read</span>
              </div>
              <span className="font-montserrat">January 15, 2025</span>
            </div>
            {/* <div className="pt-8">
              <img
                src={blogImg2}
                className="w-full"
                alt="Agentic AI Enterprise Strategy"
              />
            </div> */}
          </div>
        </div>
      </section>
      <div className="bg-[#ffffff00]">
        <a id="intro"></a>
        <div
          className="container grid md:grid-cols-3 gap-12 bg-transparent pt-12 rounded-tl-3xl rounded-tr-3xl bg-gradient-to-b from-white via-white to-[#F0F4FF] bg-contain bg-no-repeat"
          style={{ backgroundImage: `url(${BlogContBg})` }}
        >
          {" "}
          <div className="text-foreground-dark">
            <div className="sticky top-[120px] pb-8">
              <ul className="space-y-2">
                {leftNavLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={() => setSelected(link.href)}
                      className={`inline-block py-2 rounded transition 
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
              {/* <div
                className={`px-8 py-12 rounded-2xl my-8 text-center text-white ${styles.sideCardBg}`}
              >
                <h3 className="text-3xl font-semibold">
                  Ready for AI Strategy?
                </h3>
                <p className="text-xl py-8">
                  Get your comprehensive AI readiness assessment and strategic
                  roadmap for successful agentic AI implementation.
                </p>
                <Button type="submit" size="lg" variant="btnSecondary">
                  Get Assessment
                </Button>
              </div> */}
            </div>
          </div>
          <div className="col-span-2 w-full">
            {/* Introduction Section */}
            <section className="relative overflow-hidden">
              <div className="container relative z-10">
                <div className="max-w-5xl mx-auto pb-8">
                  <div className="space-y-6 text-lg text-foreground-dark-muted leading-relaxed mb-8">
                    <h4 className="font-semibold text-xl">
                      The enterprise technology landscape is buzzing with AI
                      agents. Amazon's AgentCore toolkit signals a seismic shift
                      toward autonomous systems. Learn strategic adoption with
                      extreme caution.
                    </h4>
                    <p>
                      The enterprise technology landscape is once again buzzing
                      with a transformative term: AI agents. This week, Amazon
                      threw its considerable weight behind the movement at the
                      AWS Summit, unveiling its AgentCore toolkit and signaling
                      a seismic shift. The message from the titans of tech is
                      clear: the era of static applications is ending. The
                      future of enterprise productivity lies with autonomous,
                      intelligent systems that can reason, plan, and execute
                      complex tasks.
                    </p>
                    <p>
                      For many business leaders, this feels like both an
                      exhilarating promise and a daunting challenge. The hype is
                      palpable, but so is the uncertainty. While vendors
                      showcase slick demos of AI agents seamlessly booking
                      travel or generating financial reports, the path from a
                      compelling proof-of-concept to a secure, scalable, and
                      value-generating enterprise reality is fraught with
                      complexity.
                    </p>
                    <p>
                      At Indexnine, we've been at the forefront of this
                      evolution, moving beyond the hype to architect the
                      pragmatic, high-impact AI solutions our clients depend on.
                      The rise of enterprise agents isn't a surprise; it's the
                      logical next step in the journey we've been navigating for
                      years. And our take is simple:{" "}
                      <strong>
                        Yes, this is the future every enterprise must adopt. But
                        you must adopt it with extreme caution, guided by a deep
                        understanding of both the technology and the risks.
                      </strong>
                    </p>
                  </div>

                  <Button type="submit" size="lg" variant="btnPrimary">
                    <Download className="w-4 h-4 mr-2" />
                    Download Our AI Strategy Framework Guide (PDF)
                  </Button>
                </div>
              </div>
            </section>

            {/* Enterprise AI Section */}
            <a id="enterprise-ai"></a>
            <section className="pt-12 pb-0 relative overflow-hidden">
              <div className="container text-lg text-foreground-dark-muted leading-relaxed">
                <div className="max-w-5xl mx-auto">
                  <div className="space-y-6">
                    <h4 className="font-semibold text-2xl text-foreground-dark">
                      What is an Enterprise-Grade Agentic AI? (Beyond the
                      Chatbot)
                    </h4>
                    <p>
                      First, let's cut through the noise. When the market hears
                      "AI agent," the immediate thought is often of a
                      supercharged ChatGPT. But an enterprise-grade AI agent is
                      a far more sophisticated entity. It's not just a
                      conversational interface; it's a workflow automation
                      engine, a data analysis powerhouse, and a decision-making
                      system rolled into one.
                    </p>

                    <div className="bg-gradient-to-r from-brand-primary/5 to-brand-purple/5 border-l-4 border-brand-primary p-6 rounded-r-lg my-8">
                      <h3 className="text-xl font-semibold text-foreground-dark mb-4">
                        A true Agentic AI system can be defined as an autonomous
                        system that can:
                      </h3>
                      <ul className="space-y-3 text-foreground-dark-muted">
                        <li className="flex items-start gap-3">
                          <Brain className="h-5 w-5 text-brand-primary mt-1 flex-shrink-0" />
                          <span>
                            <strong>Perceive</strong> its environment and ingest
                            data from multiple sources.
                          </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <Target className="h-5 w-5 text-brand-primary mt-1 flex-shrink-0" />
                          <span>
                            <strong>Reason</strong> about that data and a given
                            objective.
                          </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <Zap className="h-5 w-5 text-brand-primary mt-1 flex-shrink-0" />
                          <span>
                            <strong>Plan</strong> a multi-step sequence of
                            actions to achieve that objective.
                          </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-brand-primary mt-1 flex-shrink-0" />
                          <span>
                            <strong>Execute</strong> those actions by
                            autonomously using a variety of digital tools (APIs,
                            databases, other software).
                          </span>
                        </li>
                      </ul>
                    </div>

                    <p>
                      Think about the real-world applications we've already
                      engineered, which showcase the building blocks of this
                      agentic future:
                    </p>

                    <ul className="space-y-4 text-foreground-dark-muted ml-6">
                      <li className="list-disc">
                        <strong>For CygenIQ,</strong> a visionary cybersecurity
                        startup, we built the core of a platform that uses AI to
                        police other AIs. This system autonomously ingests
                        security logs, reasons about potential threats using ML
                        models, and plans a response by generating a complete
                        incident report with actionable recommendations.
                      </li>
                      <li className="list-disc">
                        <strong>For Sports Interactive,</strong> we built an AI
                        agent that automates the creation of real-time social
                        media content during live cricket matches—a complex task
                        they had failed to automate for three years. It ingests
                        live data feeds, understands the nuances of the game,
                        and executes the task of generating brand-safe content
                        in seconds.
                      </li>
                    </ul>

                    <div className="bg-foreground-dark/5 p-8 text-md">
                      These are not simple chatbot implementations. They are
                      complex systems that require a deep understanding of data
                      engineering, cloud architecture, and the specific business
                      domain.
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* AWS AgentCore Section */}
            <a id="aws-agentcore"></a>
            <section className="pt-12 pb-0 relative overflow-hidden">
              <div className="container text-lg text-foreground-dark-muted leading-relaxed">
                <div className="max-w-5xl mx-auto">
                  <div className="space-y-6">
                    <h4 className="font-semibold text-2xl text-foreground-dark">
                      AWS AgentCore: The Accelerator, Not the Answer
                    </h4>
                    <p>
                      Amazon's entry with a flexible, model-agnostic toolkit is
                      a massive accelerator for the industry. By providing the
                      foundational "plumbing" - the memory management,
                      observability, and service integration capabilities - AWS
                      is empowering companies like ours to focus less on the
                      undifferentiated heavy lifting and more on building the
                      high-value, domain-specific intelligence that makes an
                      agent truly effective.
                    </p>
                    <p>
                      This is a game-changer. It validates the AI-first approach
                      we have championed, where we use AI not only as a solution
                      for our clients but as a core component of our own
                      delivery process. The ability to combine the power of the
                      AgentCore toolkit with our snap.mvp and snap.automate
                      reusable code libraries creates an unparalleled
                      acceleration engine for building sophisticated, custom AI
                      agents.
                    </p>

                    <div className="bg-yellow-50 border border-yellow-200 p-6 rounded-lg my-8">
                      <div className="flex items-start gap-3">
                        <AlertTriangle className="h-6 w-6 text-yellow-600 mt-1 flex-shrink-0" />
                        <div>
                          <h3 className="text-lg font-semibold text-yellow-800 mb-3">
                            However, a powerful toolkit is only as good as the
                            architect wielding it.
                          </h3>
                          <p className="text-yellow-700 mb-4">
                            AgentCore alone doesn't solve the most critical
                            enterprise challenges:
                          </p>
                          <ul className="space-y-2 text-yellow-700">
                            <li>
                              <strong>The Data Foundation:</strong> An AI agent
                              is only as intelligent as the data it can access.
                              Most enterprises are sitting on a tangled web of
                              legacy systems and siloed databases.
                            </li>
                            <li>
                              <strong>The Strategic Roadmap:</strong> What
                              problem are you actually trying to solve? Simply
                              "deploying an AI agent" is not a strategy; it's a
                              plan for sunk costs with no ROI.
                            </li>
                            <li>
                              <strong>The Inherent Risks:</strong> What happens
                              when an autonomous agent makes a mistake? How do
                              you ensure data privacy and prevent bias from
                              creeping into its decision-making?
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Indexnine Framework Section */}
            <a id="indexnine-framework"></a>
            <section className="pt-12 pb-0 relative overflow-hidden">
              <div className="container text-lg text-foreground-dark-muted leading-relaxed">
                <div className="max-w-5xl mx-auto">
                  <div className="space-y-6">
                    <h4 className="font-semibold text-2xl text-foreground-dark">
                      The Indexnine Agentic AI Framework: From Hype to
                      High-Impact Reality
                    </h4>
                    <p>
                      Our philosophy, as reinforced throughout our Illuminate
                      sessions, is to guide our clients through the entire
                      product lifecycle: Launch, Pivot, Grow, and Mature. The
                      journey into agentic AI is no different, and we approach
                      it with a disciplined, three-step framework that
                      prioritizes <strong>Clarity, Then Code.</strong>
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Implementation Steps Section */}
            <a id="implementation"></a>
            <section className="pt-12 pb-0 relative overflow-hidden">
              <div className="container text-lg text-foreground-dark-muted leading-relaxed">
                <div className="max-w-5xl mx-auto">
                  <div className="space-y-12">
                    <h4 className="font-semibold text-2xl text-foreground-dark">
                      Implementation Framework: Strategic Steps to Agentic AI
                      Success
                    </h4>

                    {/* Step 1 */}
                    <div className="bg-gradient-to-r from-brand-primary/5 to-transparent border border-brand-primary/20 rounded-xl p-8">
                      <h3 className="text-xl font-semibold text-foreground-dark mb-4 flex items-center gap-3">
                        <span className="bg-brand-primary text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-semibold">
                          1
                        </span>
                        Clarity Before Complexity - The AI & Data Audit
                      </h3>
                      <p className="text-foreground-dark-muted mb-6">
                        Before a single line of agentic code is written, our AI
                        and Data Studios lead a comprehensive audit. This is the
                        most critical and most often skipped step. We leverage
                        our proprietary AI P2R (Potential-to-Reality) Assessment
                        Framework to provide a data-driven, strategic roadmap.
                      </p>

                      <div className="grid md:grid-cols-3 gap-6">
                        <div className="bg-white p-6 rounded-lg border border-border">
                          <h4 className="font-semibold text-foreground-dark mb-3">
                            Process Mapping & Potential Score
                          </h4>
                          <p className="text-sm text-foreground-dark-muted">
                            We systematically map your existing workflows to
                            identify the inefficiencies and bottlenecks where an
                            AI agent could deliver the highest ROI.
                          </p>
                        </div>
                        <div className="bg-white p-6 rounded-lg border border-border">
                          <h4 className="font-semibold text-foreground-dark mb-3">
                            Data Landscape Review & Readiness Score
                          </h4>
                          <p className="text-sm text-foreground-dark-muted">
                            We conduct a deep dive into your data infrastructure
                            to assess your true readiness to execute.
                          </p>
                        </div>
                        <div className="bg-white p-6 rounded-lg border border-border">
                          <h4 className="font-semibold text-foreground-dark mb-3">
                            Systems Review & Risk Score
                          </h4>
                          <p className="text-sm text-foreground-dark-muted">
                            We analyze your existing applications to ensure an
                            agent can be securely integrated with proper risk
                            management.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Step 2 */}
                    <div className="bg-gradient-to-r from-brand-purple/5 to-transparent border border-brand-purple/20 rounded-xl p-8">
                      <h3 className="text-xl font-semibold text-foreground-dark mb-4 flex items-center gap-3">
                        <span className="bg-brand-purple text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-semibold">
                          2
                        </span>
                        Engineering Autonomy - Our "Built Differently" Execution
                      </h3>
                      <p className="text-foreground-dark-muted mb-6">
                        With a clear roadmap, our Agentic AI Pods leverage our
                        deep expertise to build the solution. This is where our
                        "Built Differently" ethos comes to life. Our "3X
                        Engineers" are trained not just in technology but in a
                        product mindset, working to solve core business
                        problems, not just deliver features.
                      </p>

                      <ul className="space-y-3 text-foreground-dark-muted">
                        <li className="flex items-start gap-3">
                          <Zap className="h-5 w-5 text-brand-purple mt-1 flex-shrink-0" />
                          <span>
                            <strong>Launch:</strong> For a FinTech startup like
                            Annotate, we architected a complex RAG-based AI
                            agent to disrupt an entire consulting industry.
                          </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <Target className="h-5 w-5 text-brand-purple mt-1 flex-shrink-0" />
                          <span>
                            <strong>Pivot:</strong> For Zilla Security, we
                            helped transform a simple auditing tool into a
                            full-fledged security provisioning platform.
                          </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-brand-purple mt-1 flex-shrink-0" />
                          <span>
                            <strong>Grow:</strong> For a client like TripJack,
                            we modernize their core integration architecture to
                            dramatically accelerate their growth.
                          </span>
                        </li>
                      </ul>
                    </div>

                    {/* Step 3 */}
                    <div className="bg-gradient-to-r from-red-500/5 to-transparent border border-red-500/20 rounded-xl p-8">
                      <h3 className="text-xl font-semibold text-foreground-dark mb-4 flex items-center gap-3">
                        <span className="bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-semibold">
                          3
                        </span>
                        The Cautionary Layer - Our AI Risk & Governance Practice
                      </h3>
                      <p className="text-foreground-dark-muted mb-6">
                        This brings us to the most important point: caution. The
                        power of autonomous agents comes with significant risk.
                        A poorly designed agent can leak data, make biased
                        decisions, or cause catastrophic operational failures.
                      </p>

                      <div className="grid md:grid-cols-3 gap-6">
                        <div className="bg-white p-6 rounded-lg border border-red-200">
                          <div className="flex items-center gap-3 mb-3">
                            <Shield className="h-5 w-5 text-red-500" />
                            <h4 className="font-semibold text-foreground-dark">
                              Robust Guardrails
                            </h4>
                          </div>
                          <p className="text-sm text-foreground-dark-muted">
                            We build technical and process-based controls to
                            limit an agent's actions and ensure it operates
                            within predefined ethical and safety boundaries.
                          </p>
                        </div>
                        <div className="bg-white p-6 rounded-lg border border-red-200">
                          <div className="flex items-center gap-3 mb-3">
                            <Target className="h-5 w-5 text-red-500" />
                            <h4 className="font-semibold text-foreground-dark">
                              Human-in-the-Loop (HITL)
                            </h4>
                          </div>
                          <p className="text-sm text-foreground-dark-muted">
                            For critical decisions, we design workflows that
                            require human oversight and approval, blending AI
                            speed with human judgment.
                          </p>
                        </div>
                        <div className="bg-white p-6 rounded-lg border border-red-200">
                          <div className="flex items-center gap-3 mb-3">
                            <CheckCircle className="h-5 w-5 text-red-500" />
                            <h4 className="font-semibold text-foreground-dark">
                              Comprehensive Monitoring
                            </h4>
                          </div>
                          <p className="text-sm text-foreground-dark-muted">
                            We implement systems to continuously monitor an
                            agent's behavior and provide clear audit trails for
                            transparency.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div
                      className={`text-white rounded-2xl p-8  ${styles.middleCardBg2}`}
                    >
                      <h2 className="text-2xl font-semibold mb-4">
                        The Future is Agentic - But Approach With Strategic
                        Caution
                      </h2>
                      <p className="text-lg leading-relaxed mb-6">
                        The future of the enterprise is undoubtedly agentic. The
                        tools provided by AWS and others will make the
                        technology more accessible than ever. But accessibility
                        does not equal success. Success will be found by the
                        enterprises that approach this transformation
                        strategically, pairing the immense potential of AI
                        agents with a sober, clear-eyed assessment of the risks.
                      </p>
                      <p className="text-lg font-medium">
                        This is not a journey you should take alone.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* FAQ Section */}
            <a id="faqs"></a>
            <section className="pt-12 pb-0 relative overflow-hidden mb-16">
              <div className="container text-lg text-foreground-dark-muted leading-relaxed">
                <div className="max-w-5xl mx-auto">
                  <h4 className="font-semibold text-2xl text-foreground-dark mb-8">
                    Frequently Asked Questions About Agentic AI
                  </h4>

                  <div className="space-y-2">
                    {[
                      {
                        question:
                          "What makes enterprise-grade agentic AI different from standard chatbots?",
                        answer:
                          "Enterprise-grade agentic AI systems go beyond conversation. They can autonomously perceive environments, reason about complex data, plan multi-step actions, and execute tasks using various digital tools and APIs. They're workflow automation engines with decision-making capabilities, not just interactive interfaces.",
                      },
                      {
                        question:
                          "How does AWS AgentCore change the agentic AI landscape?",
                        answer:
                          "AWS AgentCore provides essential infrastructure like memory management, observability, and service integration. It's model-agnostic and reduces development complexity, allowing teams to focus on building domain-specific intelligence rather than foundational plumbing.",
                      },
                      {
                        question:
                          "What are the key risks of implementing autonomous AI agents?",
                        answer:
                          "Primary risks include data leakage, biased decision-making, operational failures, compliance violations, and lack of audit trails. These systems require robust guardrails, human-in-the-loop workflows, and comprehensive monitoring to operate safely.",
                      },
                      {
                        question:
                          "How should enterprises assess their readiness for agentic AI?",
                        answer:
                          "Start with an AI & Data Audit that evaluates three key areas: process mapping to identify high-ROI opportunities, data infrastructure readiness, and systems security/compliance posture. This provides a pragmatic roadmap for implementation.",
                      },
                    ].map((faq, index) => (
                      <div
                        key={index}
                        className="border border-border rounded-[.5rem] overflow-hidden"
                      >
                        <button
                          onClick={() => toggleFAQ(index)}
                          className="w-full px-6 py-4 text-left bg-background-light hover:bg-background/5 transition-colors flex items-center justify-between"
                        >
                          <span className="font-medium text-foreground-dark pr-4">
                            {faq.question}
                          </span>
                          {expandedFAQ === index ? (
                            <ChevronUp className="h-5 w-5 text-brand-primary flex-shrink-0" />
                          ) : (
                            <ChevronDown className="h-5 w-5 text-brand-primary flex-shrink-0" />
                          )}
                        </button>
                        {expandedFAQ === index && (
                          <div className="px-6 py-4 bg-white border-t border-border">
                            <p className="text-foreground-dark-muted leading-relaxed">
                              {faq.answer}
                            </p>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
      {/* CTA Section */}
      <section className={`py-24 lg:py-32 ${styles.ctaBg}`}>
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <div className=" p-8 text-center">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold mb-6 text-foreground-white">
                <span className="leading-[1.4]">
                  Ready to Navigate the Agentic AI Future?
                </span>
              </h2>
              <p className="text-xl text-foreground-white/80 mb-12 font-montserrat max-w-3xl mx-auto">
                Don't let the complexity of agentic AI overwhelm your enterprise
                transformation. Get a strategic assessment of your AI readiness
                and a roadmap for safe, successful implementation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="btnSecondary" size="lg" asChild>
                  <Link to="/services/ai">
                    Schedule Your AI Strategy Session
                    {/* <ExternalLink className="h-4 w-4 ml-2" /> */}
                  </Link>
                </Button>
                <Button variant="btnSecondary" size="lg" asChild>
                  <Link to="/insights/case-studies">
                    Explore Our AI Success Stories
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="bg-background">
        <Footer />
      </div>
    </div>
  );
};

export default AgenticAiEnterpriseFuture;
