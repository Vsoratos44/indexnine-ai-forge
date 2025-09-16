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
import CaseInrImg from "@/assets/images/img-cygenIQ.webp";

const leftNavLinks = [
  { href: "#intro1", label: "Introduction" },
  { href: "#challenge1", label: "AI Security Challenge" },
  { href: "#challenge2", label: "MVP Development" },
  { href: "#results", label: "Results & Impact" },
  { href: "#whyWorked", label: "Why It Worked" },
];
const outcomeTitle = [
  "First-Mover Advantage",
  "Rapid Path to Product-Market Fit",
  "Mission-Critical Problem Solved",
  "Complex Technical Vision Realized",
];

const CygeniqCaseStudy = () => {
  const [selected, setSelected] = useState("#intro1");

  // SEO Configuration
  useSEO({
    title:
      "Case Study: CygenIQ - Engineering a First-Mover Advantage in AI Security | Indexnine",
    description:
      "Discover how Indexnine partnered with cybersecurity startup CygenIQ to launch a first-of-its-kind AI security platform, moving from concept to a fundable, interactive prototype in just six weeks.",
    keywords:
      "AI security platform, cybersecurity startup, MVP development, first-mover advantage, CISO platform, generative AI security, seed funding acceleration, interactive prototype",
    canonicalUrl: "https://www.indexnine.com/insights/case-studies/cygeniq",
    ogImage: "https://www.indexnine.com/images/case-studies/cygeniq-og.jpg",
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
        title="CygenIQ: Engineering a First-Mover Advantage in AI Security"
        description="A strategic MVP launch for a visionary startup, engineering a first-of-its-kind platform and delivering a fundable, high-fidelity interactive prototype in record time."
        author="Indexnine"
        datePublished="2024-01-15"
        dateModified="2024-01-15"
        image="https://www.indexnine.com/images/case-studies/cygeniq-hero.jpg"
        url="https://www.indexnine.com/insights/case-studies/cygeniq"
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
          {
            name: "Case Studies",
            url: "https://indexnine.ai/insights/case-studies",
          },
          {
            name: "CygenIQ",
            url: "https://indexnine.ai/insights/case-studies/cygeniq",
          },
        ]}
      />
      <Header />

      {/* Hero Section */}
      <a id="intro1"></a>
      <div className={`bg-transparent pt-32 ${styles.sectionBgCase}`}>
        <div className="container grid grid-cols-1 md:grid-cols-3 gap-0 md:gap-12">
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
            <section
              className={`min-h-[100px] rounded-2xl shadow-2xl flex mb-12 border backdrop-blur-xl relative overflow-hidden ${styles.caseTitle}`}
            >
              <div className="mt-auto p-8">
                <div className="max-w-8xl mx-auto">
                  <div className="mb-6">
                    <span className="inline-block px-6 py-2 bg-black/20 shadow-md text-white rounded-lg text-sm font-medium border border-white/30 backdrop-blur-sm mr-3">
                      <span className="text-white/50  text-xs mr-2">
                        Client
                      </span>{" "}
                      CygenIQ
                    </span>
                    <span className="inline-block px-6 py-2 bg-black/20 shadow-md text-white rounded-lg text-sm font-medium border border-white/30 backdrop-blur-sm mr-3">
                      <span className="text-white/50  text-xs mr-2">
                        Industry
                      </span>{" "}
                      AI Security
                    </span>
                  </div>

                  <div className="inline-block p-4 md:p-8  bg-black/20 shadow-md text-white rounded-xl text-sm font-medium border border-white/30 backdrop-blur-sm">
                    <h1 className="text-3xl lg:text-[2.75rem] font-bold text-foreground mb-8 animate-fade-in font-montserrat flex flex-wrap md:flex-nowrap   gap-4 items-start">
                      <span className="leading-[1.05]">CygenIQ:</span>
                      <span className="bg-gradient-primary bg-clip-text text-transparent leading-[1.05]">
                        Engineering a First-Mover Advantage in AI Security
                      </span>
                    </h1>
                    <p className="text-xl sm:text-lg text-foreground/100 mb-0 max-w-4xl leading-relaxed font-regular animate-slide-up font-montserrat">
                      How Indexnine’s Disciplined MVP Process and Deep-Tech
                      Expertise Enabled a Visionary Startup to Build a
                      First-of-its-Kind AI Security Platform, Defining a New
                      Category in Cybersecurity.
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
                      The rapid, widespread adoption of Generative AI created a
                      new, uncharted attack surface that traditional security
                      tools were blind to. CygenIQ needed to launch a product to
                      secure this new frontier, requiring a partner with deep
                      expertise in both enterprise-grade security and
                      cutting-edge AI.
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
                      Indexnine implemented Sprint Zero methodology followed by
                      rapid MVP development, creating a comprehensive AI
                      security platform with discovery, monitoring, and
                      governance capabilities specifically designed for
                      enterprise CISO requirements.
                    </p>

                    <div className="grid md:grid-cols-4 gap-6">
                      <div className="relative overflow-hidden bg-[#ffffff09] border border-[#ffffff15] rounded-2xl py-6 px-2 hover:shadow-glass-sm transition-all duration-500 transform hover:scale-102 hover:-translate-y-2 animate-fade-in group h-full">
                        <div className="flex items-center gap-4 flex-col">
                          <span className="flex w-14 h-14 rounded-full bg-[#2E348233]">
                            <Brain className="w-6 h-6 text-white m-auto" />
                          </span>
                          <span className="text-white">AI Security</span>
                        </div>
                      </div>
                      <div className="relative overflow-hidden bg-[#ffffff09] border border-[#ffffff15] rounded-2xl py-6 px-2 hover:shadow-glass-sm transition-all duration-500 transform hover:scale-102 hover:-translate-y-2 animate-fade-in group h-full">
                        <div className="flex items-center gap-4 flex-col">
                          <span className="flex w-14 h-14 rounded-full bg-[#2E348233]">
                            <Rocket className="w-6 h-6 text-white m-auto" />
                          </span>
                          <span className="text-white">Rapid Prototype</span>
                        </div>
                      </div>
                      <div className="relative overflow-hidden bg-[#ffffff09] border border-[#ffffff15] rounded-2xl px-2 py-6 hover:shadow-glass-sm transition-all duration-500 transform hover:scale-102 hover:-translate-y-2 animate-fade-in group h-full">
                        <div className="flex items-center gap-4 flex-col">
                          <span className="flex w-14 h-14 rounded-full bg-[#2E348233]">
                            <Shield className="w-6 h-6 text-white m-auto" />
                          </span>
                          <span className="text-white">CISO Platform</span>
                        </div>
                      </div>
                      <div className="relative overflow-hidden bg-[#ffffff09] border border-[#ffffff15] rounded-2xl py-6 px-2 hover:shadow-glass-sm transition-all duration-500 transform hover:scale-102 hover:-translate-y-2 animate-fade-in group h-full">
                        <div className="flex items-center gap-4 flex-col">
                          <span className="flex w-14 h-14 rounded-full bg-[#2E348233]">
                            <Zap className="w-6 h-6 text-white m-auto" />
                          </span>
                          <span className="text-white">First-Mover</span>
                        </div>
                      </div>
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-4 mt-8 font-montserrat">
                      Key Outcomes
                    </h3>
                    <div className="grid grid-cols md:grid-cols-2 gap-6">
                      {[
                        "Successfully launched a deep-tech MVP in a nascent, high-growth market, establishing CygenIQ as an early leader in the AI security space.",
                        "The MVP provided a robust platform to engage with early enterprise design partners, gather critical feedback, and accelerate the journey to Product-Market Fit (PMF).",
                        "Delivered a solution that addresses a top-of-mind concern for CISOs and security leaders: mitigating the novel risks introduced by generative AI.",
                        "Successfully architected and built a platform on a complex, polyglot stack (Java for multi-threading, Python for ML), meeting the high standards of a technically adept founding team.",
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
              </div>
              <a id="challenge2" className="absolute mt-[-40px]"></a>
            </section>

            {/* Detailed Challenge Section */}
            <section className="p-8 backdrop-blur-xl bg-[#00000010] border border-[#00000005] relative rounded-2xl mb-4 shadow-inner shadow-white shadow-4xl">
              <div className="mx-auto relative z-10">
                <div className="max-w-8xl mx-auto">
                  <h3 className="text-lg font-semibold text-brand-primary-dark mb-4 font-montserrat">
                    Challenge
                  </h3>
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground-dark mb-8 font-montserrat">
                    Securing the New AI-Powered Attack Surface
                  </h2>

                  <div className="bg-[#4A2424] my-8 flex">
                    <img
                      src={CaseInrImg}
                      className="w-full h-96 object-cover"
                    />
                  </div>

                  <p className="text-md text-foreground-dark leading-relaxed mb-8">
                    The generative AI revolution, led by technologies like
                    ChatGPT, has been a double-edged sword for the enterprise.
                    While it has unlocked unprecedented productivity, it has
                    also created a new, invisible, and highly dangerous attack
                    surface. Malicious actors are no longer just targeting
                    networks and applications; they are targeting the AI models
                    themselves through techniques like prompt injection, model
                    poisoning, and the deployment of malicious agentic
                    workflows.
                  </p>
                  <p className="text-md text-foreground-dark leading-relaxed mb-8">
                    The founders of CygenIQ, veterans of the cybersecurity
                    industry, recognized this paradigm shift. They saw that
                    existing security tools—firewalls, endpoint protection, even
                    traditional application security scanners—were completely
                    blind to these new AI-native threats. A CISO could have a
                    perfectly secure network, yet their organization could be
                    critically vulnerable to data exfiltration through a
                    cleverly crafted prompt sent to an internal LLM-powered
                    application.
                  </p>
                  <p className="text-md text-foreground-dark leading-relaxed mb-8">
                    CygenIQ's vision was to build the security platform for this
                    new era. They needed to create a product that could detect
                    and mitigate the risks created by AI itself. This was a "do
                    or die" venture for the founders, with their own retirement
                    savings on the line.
                  </p>
                  <p className="text-md text-foreground-dark leading-relaxed ">
                    Their challenge was twofold:
                  </p>
                  <ol className="my-2 list-decimal">
                    <li className="mx-6 my-2 text-foreground-dark leading-relaxed">
                      <span className="font-medium">
                        Extreme Technical Complexity:{" "}
                      </span>
                      They needed to build a product that was, in essence, an AI
                      to police other AIs. This required a partner with a rare
                      combination of skills: deep expertise in enterprise
                      security architecture, a mastery of modern AI and machine
                      learning, and the ability to execute on a complex,
                      high-performance tech stack.
                    </li>
                    <li className="mx-6 my-2 text-foreground-dark leading-relaxed">
                      <span className="font-medium">The Need for Speed: </span>
                      The market for AI security was nascent but moving at
                      lightning speed. They needed to launch a robust MVP
                      quickly to establish a first-mover advantage, attract
                      early customers, and secure their next round of funding.
                      They couldn't afford a long, drawn-out development cycle.
                    </li>
                  </ol>
                </div>
              </div>
            </section>

            <section className="p-8 backdrop-blur-xl bg-[#00000010] border border-[#00000005] relative rounded-2xl mb-12 shadow-inner shadow-white shadow-4xl">
              <div className="mx-auto relative z-10">
                <div className="max-w-8xl mx-auto">
                  <h3 className="text-lg font-semibold text-brand-primary-dark mb-4 font-montserrat">
                    Our Solution
                  </h3>
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground-dark mb-8 font-montserrat">
                    A Disciplined Launch for a Deep-Tech MVP
                  </h2>

                  <p className="text-lg text-foreground-dark leading-relaxed mb-12">
                    CygenIQ’s founder was technically savvy and had a clear
                    vision for the required technology stack: Java for its
                    robust multi-threading capabilities to handle parallel
                    analysis, and Python for its rich ecosystem of machine
                    learning libraries. They needed a partner who could not just
                    execute on this vision, but collaborate at a high level to
                    refine it and bring it to market with the speed and quality
                    the cybersecurity industry demands.
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
                          Phase 1: Sprint Zero - Rapid Scoping for a Complex
                          Domain
                        </h3>
                        <p className="text-foreground-dark-muted leading-relaxed mb-4">
                          Our engagement began with a focused Sprint Zero. For a
                          deep-tech product like CygenIQ, this discovery phase
                          was not about defining features from scratch; it was
                          about rapidly scoping the MVP and de-risking the
                          technical approach. Our Discovery and Applied AI
                          studios worked in tight collaboration with the CygenIQ
                          founder to:
                        </p>
                        <ol className="mb-6 list-decimal text-foreground-dark-muted">
                          <li className="mx-6 my-2">
                            <span className="font-medium">
                              Define the Core Threat Models:
                            </span>
                            We prioritized the specific AI-native threats the
                            MVP would address, focusing on the most pressing
                            risks for enterprise customers.
                          </li>
                          <li className="mx-6 my-2">
                            <span className="font-medium">
                              Architect the Detection Engine:
                            </span>{" "}
                            Our senior architects designed the high-level
                            blueprint for the core analysis engine, validating
                            the proposed Java/Python stack and mapping out the
                            data flow for multi-layered threat detection.
                          </li>
                          <li className="mx-6 my-2">
                            <span className="font-medium">
                              Prototype the CISO Experience:
                            </span>{" "}
                            Our Design Studio created high-fidelity, interactive
                            prototypes of the user-facing dashboard, ensuring
                            the complex data generated by the engine would be
                            translated into clear, actionable insights for a
                            security leader.
                          </li>
                        </ol>

                        <p className="text-foreground-dark-muted leading-relaxed">
                          The Sprint Zero process provided a clear, validated,
                          and mutually agreed-upon roadmap for the MVP build,
                          enabling us to move into development with exceptional
                          velocity and confidence.
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
                          Phase 2: Agile Development - Engineering the AI
                          Security Platform
                        </h3>
                        <p className="text-foreground-dark leading-relaxed mb-6">
                          Our Agentic AI Pod, comprising engineers with deep
                          expertise in both Java and Python, began the agile
                          build process. The architecture of the MVP was
                          sophisticated, consisting of a powerful back-end
                          detection engine and an intuitive front-end reporting
                          platform.
                        </p>

                        <p className="text-foreground-dark leading-relaxed mb-6">
                          <span className="font-semibold">
                            The Technical Architecture: An AI to Police AI
                          </span>
                          <br />
                          <br />
                          <span className="font-medium">
                            1. The Multi-Layered Detection Engine:
                          </span>{" "}
                          The core of the platform is its ability to analyze
                          AI-generated artifacts and workflows.
                        </p>

                        <div className="grid md:grid-cols-2 gap-6 mb-8">
                          <div className="backdrop-blur-xl bg-[#fff] border border-glass-border rounded-2xl p-6 col-span-2">
                            <h4 className="font-semibold text-foreground-dark mb-2">
                              High-Performance Analysis with Java:
                            </h4>
                            <p className="text-sm text-foreground-dark-muted">
                              We leveraged Java's powerful multi-threading
                              capabilities to build the core orchestration
                              layer. This allows the engine to run multiple
                              analysis tasks in parallel—ingesting code from a
                              developer's AI copilot, analyzing a prompt sent to
                              an internal chatbot, and monitoring the behavior
                              of an AI agent simultaneously—ensuring high
                              throughput and real-time detection.
                            </p>
                          </div>
                          <div className="backdrop-blur-xl bg-[#fff] border border-glass-border rounded-2xl p-6 col-span-2">
                            <h4 className="font-semibold text-foreground-dark mb-2">
                              Specialized ML Models with Python:
                            </h4>
                            <p className="text-sm text-foreground-dark-muted">
                              For each threat vector, we used Python to build
                              and train specialized machine learning models.
                              This included NLP models trained to detect prompt
                              injection signatures and anomaly detection models
                              to flag unusual behavior in AI agent workflows.
                            </p>
                          </div>
                          <div className="backdrop-blur-xl bg-[#fff] border border-glass-border rounded-2xl p-6 col-span-2">
                            <h4 className="font-semibold text-foreground-dark mb-2">
                              Sandboxed Execution Environment:
                            </h4>
                            <p className="text-sm text-foreground-dark-muted">
                              To safely analyze potentially malicious AI agents,
                              we engineered a secure, sandboxed environment.
                              This allows the platform to execute an agent's
                              workflow and observe its behavior (e.g., does it
                              attempt to access unauthorized files or APIs?)
                              without posing any risk to the client's production
                              systems.
                            </p>
                          </div>
                          <div className="backdrop-blur-xl bg-[#fff] border border-glass-border rounded-2xl p-6 col-span-2">
                            <h4 className="font-semibold text-foreground-dark mb-2">
                              Zero-Downtime Rollout:
                            </h4>
                            <p className="text-sm text-foreground-dark-muted">
                              Critical to the execution was our migration
                              strategy. We couldn't switch all 178 integrations
                              at once. We worked with the client to determine an
                              optimized rollout list, then executed a swift,
                              meticulous, channel-by-channel rollout.
                              Redirecting one integration at a time to the new
                              hub, we’d rigorously test its performance, confirm
                              that the transfer was successful, then move to the
                              next. This way, we could ensure the uninterrupted
                              continuity of business for the client throughout
                              the entire project.
                            </p>
                          </div>
                        </div>

                        <p className="text-foreground-dark leading-relaxed ">
                          <span className="font-medium">
                            2. The CISO's Command Cente:
                          </span>{" "}
                          The data from the detection engine is fed into a
                          user-facing SaaS platform that provides a
                          comprehensive view of the organization's "AI risk
                          posture." The platform provides detailed reports on
                          detected threats, identifies vulnerable applications
                          or users, and offers clear recommendations for
                          remediation.
                        </p>
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
                          Phase 3: Outcome-Based Partnership
                        </h3>
                        <p className="text-foreground-dark-muted leading-relaxed mb-6 col-span-2">
                          This was a mission-critical launch for a new venture.
                          To align our success directly with theirs, the
                          engagement was structured with an outcome-based
                          success fee. Our commercial success was tied to the
                          timely and successful delivery of the product,
                          demonstrating our commitment and our "Founder's
                          Mindset."
                        </p>

                        <h3 className="text-xl font-semibold text-foreground-dark mb-4 font-montserrat">
                          Launching a New Category of Cybersecurity
                        </h3>
                        <p className="text-foreground-dark-muted leading-relaxed mb-6">
                          Our partnership with CygenIQ successfully navigated
                          the immense challenges of launching a
                          first-of-its-kind, deep-tech product, delivering a
                          platform that is both technologically advanced and
                          strategically vital.
                        </p>

                        <div className="grid md:grid-cols-2 gap-6">
                          <div className="backdrop-blur-xl bg-[#fff] border border-glass-border rounded-2xl p-6 ">
                            <h4 className="font-semibold text-foreground-dark mb-2">
                              Achieved First-Mover Advantage:
                            </h4>
                            <p className="text-sm text-foreground-dark-muted">
                              Our rapid and disciplined MVP process allowed
                              CygenIQ to launch their product into a new and
                              rapidly emerging market category. They were able
                              to establish themselves as a thought leader and
                              begin capturing market share while competitors
                              were still on the drawing board.
                            </p>
                          </div>
                          <div className="backdrop-blur-xl bg-[#fff] border border-glass-border rounded-2xl p-6 ">
                            <h4 className="font-semibold text-foreground-dark mb-2">
                              Accelerated Path to Product-Market Fit:
                            </h4>
                            <p className="text-sm text-foreground-dark-muted">
                              The robust MVP served as a powerful platform for
                              engaging with early design partners and enterprise
                              customers. It allowed CygenIQ to gather invaluable
                              real-world feedback, validate their core thesis,
                              and rapidly iterate on the product to achieve
                              strong product-market fit.
                            </p>
                          </div>
                          <div className="backdrop-blur-xl bg-[#fff] border border-glass-border rounded-2xl p-6 ">
                            <h4 className="font-semibold text-foreground-dark mb-2">
                              Secured a Defensible Technical Moat:
                            </h4>
                            <p className="text-sm text-foreground-dark-muted">
                              The sophisticated, multi-layered AI detection
                              engine we built is the core of CygenIQ's
                              intellectual property. It is a deep, complex
                              system that cannot be easily replicated, providing
                              them with a strong and lasting competitive
                              advantage.
                            </p>
                          </div>
                          <div className="backdrop-blur-xl bg-[#fff] border border-glass-border rounded-2xl p-6">
                            <h4 className="font-semibold text-foreground-dark mb-2">
                              Validated a Visionary Founder's Trust:
                            </h4>
                            <p className="text-sm text-foreground-dark-muted">
                              By successfully executing on a complex technical
                              vision and aligning our commercial interests, we
                              proved to be the ideal partner for a demanding,
                              technically-savvy founder, turning their bold idea
                              into a market reality.
                            </p>
                          </div>
                        </div>

                        <a id="results" className="absolute mt-[-40px]"></a>
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
                  <h3 className="text-xl font-bold text-foreground-dark mb-6 font-montserrat text-center">
                    Securing First-Mover Market Position
                  </h3>
                  <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
                    <div
                      className={`rounded-xl py-4 px-1 text-center border border-[#505DFD] ${styles.middleCardBg2}`}
                    >
                      <h3 className="text-3xl font-bold text-white mb-2 font-montserrat">
                        6
                      </h3>
                      <p className="text-foreground text-xs mb-0">
                        Weeks to Prototype Concept to fundable MVP
                      </p>
                      <span className="inline-block w-12 h-1 rounded-sm bg-[#ffffff75]"></span>
                    </div>
                    <div
                      className={`rounded-xl py-4 px-1 text-center border border-[#505DFD] ${styles.middleCardBg2}`}
                    >
                      <h3 className="text-3xl font-bold text-white mb-2 font-montserrat">
                        100%
                      </h3>
                      <p className="text-foreground text-xs mb-0">
                        First-to-Market AI security platform category
                      </p>
                      <span className="inline-block w-12 h-1 rounded-sm bg-[#ffffff75]"></span>
                    </div>
                    <div
                      className={`rounded-xl py-4 px-1 text-center border border-[#505DFD] ${styles.middleCardBg2}`}
                    >
                      <h3 className="text-3xl font-bold text-white mb-2 font-montserrat">
                        $2M+
                      </h3>
                      <p className="text-foreground text-xs mb-0">
                        Seed Funding Secured Accelerated development
                      </p>
                      <span className="inline-block w-12 h-1 rounded-sm bg-[#ffffff75]"></span>
                    </div>
                  </div>
                  <div
                    className={`p-8 bg-background relative rounded-xl mb-6 ${styles.middleCardBg2}`}
                  >
                    <p className="text-lg text-foreground text-center font-medium">
                      For any visionary founder, especially in the cybersecurity
                      space, looking to launch a product that defines a new
                      market, the CygenIQ story is a clear signal: Indexnine has
                      the strategic discipline, the deep technical expertise,
                      and the agile execution model to turn your most ambitious
                      ideas into market-leading realities.
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
                    </h3>
                    <p className="text-md text-foreground-dark-muted text-center mb-8">
                      The CygenIQ success story is a powerful showcase of our
                      unique capabilities in launching cutting-edge products,
                      especially in the demanding cybersecurity space.
                    </p>

                    <div className="grid auto-fit md:grid-cols-2 gap-6">
                      {[
                        "Deep Cybersecurity DNA: Our experience with clients like Zilla Security/CyberArk and our own internal commitment to security (evidenced by our ISO 27001 certification) means we understand the high stakes of the security domain. We build products that are secure by design.",
                        "Sprint Zero for Deep Tech: We demonstrated that our Sprint Zero process is not just for simple applications. It is a robust framework capable of de-risking and defining a clear path forward for even the most complex, deep-tech, and novel product ideas.",
                        "Elite, Polyglot Engineering Pods: Our ability to deploy a single, cohesive pod with deep expertise across multiple complex technologies (Java, Python, AI/ML, enterprise security) was critical to executing with the required speed and quality.",
                        "A True 'Skin-in-the-Game' Partnership: Our outcome-based commercial model demonstrated our confidence and commitment. We didn't just work for CygenIQ; we invested in their success with them, embodying our core value of a 'Founder's Mindset'.",
                      ].map((result, index) => (
                        <div key={index} className="mb-4">
                          <span className="inline-block w-full h-1 rounded-sm bg-gradient-to-r from-brand-purple/50 via-[#505CFD] to-brand-purple/50 mb-2"></span>
                          <div className="flex flex-col text-center">
                            <span className="mx-auto flex w-14 h-14 rounded-full bg-gradient-to-r from-[#505CFD19] to-brand-purple/20 mb-2">
                              <CheckCircle className="w-6 h-6 text-[#8389DC] m-auto" />
                            </span>
                            <span className="text-foreground-dark">
                              {result}
                            </span>
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
          <h2 className="text-3xl sm:text-4xl max-w-4xl m-auto lg:text-5xl font-semibold mb-6 text-foreground-white">
            <span className="leading-[1.4]">
              Ready to launch the next big thing in security?
            </span>
          </h2>
          <p className="text-lg text-foreground/70 mb-12 max-w-xl mx-auto font-montserrat">
            Contact Indexnine to scope your MVP with a Sprint Zero engagement.
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

export default CygeniqCaseStudy;
