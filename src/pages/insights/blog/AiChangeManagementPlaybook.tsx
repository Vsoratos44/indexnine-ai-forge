import React, { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useSEO } from "@/hooks/useSEO";
import {
  ArrowLeft,
  CheckCircle,
  Download,
  ExternalLink,
  Clock,
  User,
  ChevronDown,
  ChevronUp,
  Brain,
  Target,
  Zap,
  Shield,
  QuoteIcon,
} from "lucide-react";
import { Link } from "react-router-dom";
import BlogDetailsBg from "@/assets/images/blog-details-bg.webp";
import BlogContBg from "@/assets/images/blog-content-bg.webp";
import blogImg2 from "@/assets/images/blog-img2.webp";
import styles from "../../../assets/css/stylesheet.module.css";

const leftNavLinks = [
  { href: "#intro", label: "Introduction" },
  { href: "#why-fail", label: "Why AI Projects Fail" },
  { href: "#ai-enablement", label: "AI Enablement Framework" },
  { href: "#case-study", label: "Case Study" },
  { href: "#business-outcomes", label: "Business Outcomes" },
  { href: "#faqs", label: "Frequently Asked Questions" },
];

const AiChangeManagementPlaybook = () => {
  const [selected, setSelected] = useState("#intro");
  const [expandedFAQ, setExpandedFAQ] = useState(null);

  useSEO({
    title:
      "The AI Change Management Playbook: Modernizing Legacy Systems with Purpose | IndexNine",
    description:
      "AI adoption is more than a technical challenge; it's a human one. Discover a strategic framework for change management, data modernization, and identifying high-impact AI initiatives in legacy organizations.",
    canonicalUrl:
      "https://www.indexnine.com/insights/blogs/ai-change-management-playbook",
    keywords:
      "AI change management, legacy system modernization, AI adoption strategy, data modernization, AI enablement framework",
    ogImage: "https://www.indexnine.com/images/ai-change-management-og.jpg",
  });

  const toggleFAQ = (index) => {
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
      <Header />

      {/* Enhanced SEO Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline:
              "The AI Change Management Playbook: Modernizing Legacy Systems with Purpose",
            description:
              "AI adoption is more than a technical challenge; it's a human one. Discover a strategic framework for change management, data modernization, and identifying high-impact AI initiatives in legacy organizations.",
            url: "https://www.indexnine.com/insights/blogs/ai-change-management-playbook",
            datePublished: "2025-01-25T00:00:00Z",
            dateModified: "2025-01-25T00:00:00Z",
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
                "https://www.indexnine.com/insights/blogs/ai-change-management-playbook",
            },
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
              Modernizing with Purpose: <br />
              The AI Change Management Playbook for Legacy Organizations
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
              <span className="font-montserrat">January 25, 2025</span>
            </div>
          </div>
        </div>
      </section>

      <div className="bg-[#ffffff00]">
        <a id="intro"></a>
        <div
          className="container grid md:grid-cols-3 gap-12 bg-transparent pt-12 rounded-tl-3xl rounded-tr-3xl bg-gradient-to-b from-white via-white to-[#F0F4FF] bg-contain bg-no-repeat"
          style={{ backgroundImage: `url(${BlogContBg})` }}
        >
          {/* Left Navigation Sidebar */}
          <div className="text-foreground-dark">
            <div className="sticky top-[120px] pb-8">
              <ul className="">
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

              {/* <div className={`px-8 py-12 rounded-2xl my-8 text-center text-white ${styles.sideCardBg}`}>
                <h3 className="text-3xl font-semibold">Ready for AI Strategy?</h3>
                <p className="text-xl py-8">
                  Get your comprehensive AI readiness assessment and strategic roadmap for successful agentic AI implementation.
                </p>
                <Button type="submit" size="lg" variant="btnSecondary">
                  Get Assessment
                </Button>
              </div> */}
            </div>
          </div>

          {/* Main Content Area */}
          <div className="col-span-2 w-full">
            {/* Introduction Section */}
            <section className="relative overflow-hidden">
              <div className="container relative z-10">
                <div className="max-w-5xl mx-auto pb-8">
                  <div className="space-y-6 text-lg text-foreground-dark-muted leading-relaxed mb-8">
                    <h4 className="font-semibold text-xl">
                      The promise of Artificial Intelligence is electrifying
                      every level of the enterprise. But for established
                      organizations built on legacy systems, the path from AI
                      ambition to tangible ROI is rough.
                    </h4>
                    <p>
                      The enterprise technology landscape is buzzing with AI
                      transformation promises. Leaders are inundated with
                      reports, vendor demos, and requests for meetings
                      showcasing unprecedented efficiency. Yet, for established
                      organizations built on years of legacy systems and
                      deep-seated workflows, the path from AI ambition to
                      tangible ROI is fraught with complexity.
                    </p>
                    <p>
                      The reality is that for every AI success story, countless
                      initiatives quietly stall, failing to move beyond
                      promising proof-of-concepts. This chaos is amplified by
                      constant reports of 85%+ AI implementations failing.
                    </p>

                    <div
                      className={`p-8 bg-background relative  rounded-xl mb-6 ${styles.middleCardBg2}`}
                    >
                      <div className=" absolute transform rotate-180 -left-[1rem] -top-[1rem]">
                        <QuoteIcon
                          className="w-12 h-12 text-brand-purple/50"
                          strokeWidth={1}
                        />
                      </div>
                      <p className="text-lg text-foreground leading-relaxed italic">
                        "Adopting AI isn't just about rolling out a new model.
                        It's about helping people adapt, rethinking how work
                        gets done, and making sure your data tells the right
                        story. At its core, AI adoption is really about your
                        people, your processes, and your data—technology is only
                        the enabler."
                      </p>
                      <p className="text-sm text-right text-foreground/60 mt-2">
                        - Aashish Singla, CTO IndexNine Technologies
                      </p>
                    </div>
                  </div>

                  <Button type="submit" size="lg" variant="btnPrimary">
                    <Download className="w-4 h-4 mr-2" />
                    Download AI Enablement Framework Guide (PDF)
                  </Button>
                </div>
              </div>
            </section>

            {/* Why AI Projects Fail Section */}
            <a id="why-fail"></a>
            <section className="pt-12 pb-0 relative overflow-hidden">
              <div className="container text-lg text-foreground-dark-muted leading-relaxed">
                <div className="max-w-5xl mx-auto">
                  <div className="space-y-6">
                    <h4 className="font-semibold text-2xl text-foreground-dark">
                      Why AI Projects Fail: The Human and Data Disconnect
                    </h4>
                    <p>
                      Before you can build the future, you must understand the
                      present. AI projects in legacy environments often fail for
                      three fundamental reasons that technology alone cannot
                      solve.
                    </p>

                    <div className="space-y-8">
                      <div className="bg-black/5 rounded-2xl p-8">
                        <h3 className="text-xl font-semibold text-foreground-dark mb-4 flex items-center gap-3">
                          <Brain className="h-6 w-6 text-brand-primary" />
                          1. The Human Element: Resistance to Change and Loss of
                          Context
                        </h3>
                        <p className="text-foreground-dark-muted mb-4">
                          At its core, AI adoption is a massive exercise in
                          context transfer. It seeks to codify and automate
                          knowledge that is deeply tribal and has been built up
                          over years. Without thoughtful change management, this
                          is perceived as a threat rather than enhancement.
                        </p>
                        <p className="text-foreground-dark-muted">
                          The most sophisticated algorithm is useless if it
                          doesn't understand the eccentricities and unwritten
                          rules of your specific business.
                        </p>
                      </div>

                      <div className="bg-black/5 rounded-2xl p-8">
                        <h3 className="text-xl font-semibold text-foreground-dark mb-4 flex items-center gap-3">
                          <Target className="h-6 w-6 text-brand-primary" />
                          2. The Data Foundation: A Cracked and Fragmented
                          Ecosystem
                        </h3>
                        <p className="text-foreground-dark-muted mb-4">
                          An AI system is only as intelligent as the data it can
                          access. Most established organizations are sitting on
                          a tangled web of legacy systems, siloed data
                          pipelines, and inconsistent data structures.
                        </p>
                        <p className="text-foreground-dark-muted">
                          Before any high-impact POC can be scaled, there must
                          be a concerted effort to modernize the underlying data
                          sources, build robust data engineering mechanisms, and
                          ensure metrics are properly tracked.
                        </p>
                      </div>

                      <div className="bg-black/5 rounded-2xl p-8">
                        <h3 className="text-xl font-semibold text-foreground-dark mb-4 flex items-center gap-3">
                          <Shield className="h-6 w-6 text-brand-primary" />
                          3. AI as a Black Box: Lack of Observability
                        </h3>
                        <p className="text-foreground-dark-muted mb-4">
                          AI models suffer from lack of observability and
                          interpretability. Without proper observability,
                          business leaders can't answer critical questions: Why
                          did the model make this decision? Can it be trusted
                          again? How do we know it hasn't drifted?
                        </p>
                        <p className="text-foreground-dark-muted">
                          Effective AI requires observability into model
                          behavior, systematic evaluation frameworks, and
                          interpretability mechanisms that help teams understand
                          model decisions.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* AI Enablement Framework Section */}
            <a id="ai-enablement"></a>
            <section className="pt-12 pb-0 relative overflow-hidden">
              <div className="container text-lg text-foreground-dark-muted leading-relaxed">
                <div className="max-w-5xl mx-auto">
                  <div className="space-y-6">
                    <h4 className="font-semibold text-2xl text-foreground-dark">
                      The AI Enablement Framework: Our Strategic Approach to
                      Change
                    </h4>
                    <p>
                      Our AI Enablement offering is a comprehensive consulting
                      and execution service designed to address human and data
                      challenges head-on. It's a structured approach to bringing
                      AI into your organization with sustainable success.
                    </p>

                    <div className="space-y-8">
                      {/* Step 1 */}
                      <div className="bg-black/5 rounded-2xl p-8">
                        <h3 className="text-xl font-semibold text-foreground-dark mb-4 flex items-center gap-3">
                          <span className="bg-brand-primary text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-semibold">
                            1
                          </span>
                          Charting the Terrain (AI & Data Assessment)
                        </h3>
                        <p className="text-foreground-dark-muted mb-6">
                          Before we write a single line of code, we begin with a
                          deep, strategic assessment. This business-first
                          analysis identifies the path of least resistance and
                          highest impact.
                        </p>

                        <div className="grid md:grid-cols-3 gap-6">
                          <div className="bg-white p-6 rounded-lg ">
                            <h4 className="font-semibold text-foreground-dark mb-3">
                              Process & Workflow Mapping
                            </h4>
                            <p className="text-sm text-foreground-dark-muted">
                              We map existing workflows, identifying specific
                              bottlenecks where AI can deliver measurable ROI.
                            </p>
                          </div>
                          <div className="bg-white p-6 rounded-lg ">
                            <h4 className="font-semibold text-foreground-dark mb-3">
                              Data Ecosystem Analysis
                            </h4>
                            <p className="text-sm text-foreground-dark-muted">
                              We assess quality, accessibility, and readiness of
                              your data to power advanced AI models.
                            </p>
                          </div>
                          <div className="bg-white p-6 rounded-lg ">
                            <h4 className="font-semibold text-foreground-dark mb-3">
                              Prioritizing High-Impact Initiatives
                            </h4>
                            <p className="text-sm text-foreground-dark-muted">
                              We collaboratively prioritize AI initiatives that
                              will deliver the most value for sustainable
                              success.
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Step 2 */}
                      <div className="bg-black/5 rounded-2xl p-8">
                        <h3 className="text-xl font-semibold text-foreground-dark mb-4 flex items-center gap-3">
                          <span className="bg-brand-primary text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-semibold">
                            2
                          </span>
                          Building Enthusiasm and Trust (Strategic Change
                          Management)
                        </h3>
                        <p className="text-foreground-dark-muted mb-6">
                          We focus on the human element with strategic change
                          management designed to make everyone enthusiastic
                          about using AI.
                        </p>

                        <ul className="space-y-3 text-foreground-dark-muted">
                          <li className="flex items-start gap-3">
                            <CheckCircle className="h-5 w-5 text-brand-purple mt-1 flex-shrink-0" />
                            <span>
                              <strong>Stakeholder Workshops:</strong> Engaging
                              key team members to understand concerns and
                              incorporate legacy knowledge into AI design.
                            </span>
                          </li>
                          <li className="flex items-start gap-3">
                            <CheckCircle className="h-5 w-5 text-brand-purple mt-1 flex-shrink-0" />
                            <span>
                              <strong>Demonstrating Value:</strong> Clearly
                              defining metrics like time saved to transform AI
                              from abstract threat into tangible partner.
                            </span>
                          </li>
                          <li className="flex items-start gap-3">
                            <CheckCircle className="h-5 w-5 text-brand-purple mt-1 flex-shrink-0" />
                            <span>
                              <strong>Internal AI Studio:</strong> Building
                              self-sustaining AI capability with frameworks and
                              training for long-term success.
                            </span>
                          </li>
                        </ul>
                      </div>

                      {/* Step 3 */}
                      <div className="bg-black/5 rounded-2xl p-8">
                        <h3 className="text-xl font-semibold text-foreground-dark mb-4 flex items-center gap-3">
                          <span className="bg-brand-primary text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-semibold">
                            3
                          </span>
                          Purposeful Modernization and Execution
                        </h3>
                        <p className="text-foreground-dark-muted mb-6">
                          Once foundations are in place, we begin technical
                          execution through purposeful modernization of data
                          sources and workflows directly connected to
                          prioritized AI initiatives.
                        </p>
                        <p className="text-foreground-dark-muted">
                          Our teams build and implement custom AI solutions,
                          ensuring seamless integration into the newly
                          modernized environment.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Case Study Section */}
            <a id="case-study"></a>
            <section className="pt-12 pb-0 relative overflow-hidden">
              <div className="container text-lg text-foreground-dark-muted leading-relaxed">
                <div className="max-w-5xl mx-auto">
                  <div className="space-y-6">
                    <h4 className="font-semibold text-2xl text-foreground-dark">
                      A Case Study in Purposeful Modernization
                    </h4>
                    <p>
                      We recently applied this exact playbook for a leading
                      sports analytics company. They possessed deep historical
                      sports data but struggled with legacy challenges:
                      unconventional workflows, team silos, and resistance to
                      new technologies.
                    </p>

                    <div className="bg-black/5 rounded-2xl p-8">
                      <h3 className="text-xl font-semibold text-foreground-dark mb-4">
                        The Transformation Process
                      </h3>
                      <div className="space-y-4">
                        <p className="text-foreground-dark-muted">
                          Through our AI Enablement engagement, we performed a
                          deep strategic assessment to identify promising use
                          cases while building executive consensus. We worked
                          closely with teams to design internal adoption
                          processes that demonstrated immediate value.
                        </p>
                        <p className="text-foreground-dark-muted">
                          With teams aligned, we modernized relevant data
                          pipelines and built high-impact solutions, including a
                          sales copilot and sports content LLM for social media
                          that understood domain-specific concepts like
                          "pressure" and "momentum."
                        </p>
                      </div>
                    </div>

                    <div className="text-center">
                      <Button variant="btnPrimary" size="lg" asChild>
                        <Link to="/insights/case-studies">
                          Read the Full Case Study
                          <ExternalLink className="h-4 w-4 ml-2" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Business Outcomes Section */}
            <a id="business-outcomes"></a>
            <section className="pt-12 pb-12 relative overflow-hidden">
              <div className="container text-lg text-foreground-dark-muted leading-relaxed">
                <div className="max-w-5xl mx-auto">
                  <div className="space-y-6">
                    <h4 className="font-semibold text-2xl text-foreground-dark">
                      The Tangible Business Outcomes of Strategic AI Enablement
                    </h4>
                    <p>
                      By approaching AI adoption as a strategic change
                      initiative rather than a simple technology project,
                      organizations unlock profound and sustainable benefits:
                    </p>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="bg-black/5 rounded-2xl p-6">
                        <h3 className="text-lg font-semibold text-foreground-dark mb-3 flex items-center gap-3">
                          <Shield className="h-5 w-5 text-brand-primary" />
                          De-Risked AI Investment
                        </h3>
                        <p className="text-foreground-dark-muted text-sm">
                          Strategic audits ensure capital is deployed on
                          high-impact, feasible projects, avoiding costly
                          failures and maximizing ROI.
                        </p>
                      </div>
                      <div className="bg-black/5 rounded-2xl p-6">
                        <h3 className="text-lg font-semibold text-foreground-dark mb-3 flex items-center gap-3">
                          <Zap className="h-5 w-5 text-brand-primary" />
                          Increased Adoption
                        </h3>
                        <p className="text-foreground-dark-muted text-sm">
                          Thoughtful change management transforms employee
                          skepticism into advocacy, ensuring tools are actually
                          used and embraced.
                        </p>
                      </div>
                      <div className="bg-black/5 rounded-2xl p-6">
                        <h3 className="text-lg font-semibold text-foreground-dark mb-3 flex items-center gap-3">
                          <Target className="h-5 w-5 text-brand-primary" />
                          Innovation Foundation
                        </h3>
                        <p className="text-foreground-dark-muted text-sm">
                          Purposeful data modernization creates robust, scalable
                          ecosystems supporting future AI initiatives.
                        </p>
                      </div>
                      <div className="bg-black/5 rounded-2xl p-6">
                        <h3 className="text-lg font-semibold text-foreground-dark mb-3 flex items-center gap-3">
                          <Brain className="h-5 w-5 text-brand-primary" />
                          Sustainable Capability
                        </h3>
                        <p className="text-foreground-dark-muted text-sm">
                          Framework and knowledge transfer empower organizations
                          to build and manage their AI-powered future.
                        </p>
                      </div>
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
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <div className="p-8 text-center">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold mb-6 text-foreground-white">
                <span className="leading-[1.4]">
                  Ready to Modernize Your Organization with Purpose?
                </span>
              </h2>
              <p className="text-xl text-foreground-white/80 mb-12 font-montserrat max-w-3xl mx-auto">
                Don't let AI complexity overwhelm your transformation. Get a
                strategic assessment of your readiness and a roadmap for
                successful implementation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  variant="btnPrimary"
                  size="lg"
                  onClick={() => {
                    window.open(
                      "https://calendly.com/vaughn-soratos-indexnine",
                      "_blank"
                    );
                  }}
                >
                  Schedule an AI Enablement Strategy Session
                  <ExternalLink className="h-4 w-4 ml-2" />
                </Button>
                <Button variant="btnSecondary" size="lg" asChild>
                  <Link to="/insights/case-studies">
                    Explore Our Success Stories
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* FAQ Section */}
      <a id="faqs"></a>
      <section className="pt-8 pb-16 bg-[#fff] text-foreground-dark relative overflow-hidden">
        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <div className="max-w-5xl mx-auto">
            <h4 className="font-semibold text-2xl text-foreground-dark mb-8">
              Frequently Asked Questions
            </h4>

            <div className="space-y-2">
              {[
                {
                  question:
                    "Our data is a mess and stored in old systems. Can we still pursue an AI strategy?",
                  answer:
                    "Absolutely. This is the most common starting point for legacy organizations. Our AI Enablement process is specifically designed to address this. We don't require you to boil the ocean; instead, we identify a high-value use case first and then focus on modernizing only the data sources required for that specific initiative, delivering value incrementally.",
                },
                {
                  question:
                    "How do you handle resistance from employees who are comfortable with the current way of doing things?",
                  answer:
                    "Our change management strategy is centered on demonstrating value and building trust. We actively involve key employees in the process, ensuring their domain expertise is respected and integrated. By focusing on metrics that matter to them, we reframe AI as a tool that augments their capabilities, rather than replaces them.",
                },
                {
                  question:
                    "Is this purely a consulting service, or do you also build the solutions?",
                  answer:
                    "It's a complete, end-to-end service. The initial phase is strategic consulting - the audit and change management planning. Following that, our engineering teams execute on the plan, performing the data modernization and building the custom AI applications that drive the desired business outcomes.",
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
      <div className="bg-background">
        <Footer />
      </div>
    </div>
  );
};

export default AiChangeManagementPlaybook;
