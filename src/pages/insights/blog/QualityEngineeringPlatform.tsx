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
  Target,
  Brain,
  Zap,
  Shield,
} from "lucide-react";
import { Link } from "react-router-dom";
import BlogDetailsBg from "@/assets/images/blog-details-bg.webp";
import BlogContBg from "@/assets/images/blog-content-bg.webp";
import blogRobot from "@/assets/images/blog-robot.webp";
import styles from "../../../assets/css/stylesheet.module.css";
import EnhancedScrollReveal from "@/components/test/effects/EnhancedScrollReveal";

const leftNavLinks = [
  { href: "#intro", label: "Introduction" },
  { href: "#dilemma", label: "The Product Owner's Dilemma" },
  { href: "#shift", label: "Intelligent Quality" },
  { href: "#process", label: "Four Step Process" },
  { href: "#future", label: "The Future" },
  { href: "#faqs", label: "Frequently Asked Questions" },
];

const QualityEngineeringPlatform = () => {
  const [selected, setSelected] = useState("#intro");
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);

  // Implement comprehensive SEO optimization
  useSEO({
    title: "Snap.TestAuthor: Stop Guessing, Start Engineering Quality",
    description:
      "Empower your non-technical teams with Snap.TestAuthor. Our platform uses the TMap® methodology to generate risk-driven test cases from your existing documents, ensuring you build the right product, right from the start.",
    canonicalUrl:
      "https://www.indexnine.com/insights/blogs/quality-engineering-platform",
    keywords:
      "test case generation, product owner testing, quality engineering, TMap methodology, agile QA, risk-based testing, Jira test automation, QA consulting, test automation, shift-left testing",
    ogImage:
      "https://www.indexnine.com/images/quality-engineering-platform-og.jpg",
  });

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

  const faqData = [
    {
      question:
        "How is Snap.TestAuthor different from using a generic AI like ChatGPT?",
      answer:
        'The critical distinction is context and discipline. Generic AI is stateless and lacks deep product context, producing mechanical test cases with no link to business risk. Snap.TestAuthor builds a "Product Brain" by ingesting your specific PRDs, user stories, and diagrams. It then applies a proven, structured methodology (TMap®) to generate a risk-adjusted testing strategy, providing full traceability and aligning every test case with your business objectives.',
    },
    {
      question:
        "Is this tool only for non-technical users like Product Owners?",
      answer:
        "While Snap.TestAuthor is designed to empower Product Owners and Functional Consultants who now bear the responsibility for testing, it provides immense value to the entire development team. Developers receive clearer, more structured acceptance criteria, and dedicated QA engineers can use the platform to accelerate their own test design processes, freeing them up to focus on more complex exploratory and performance testing.",
    },
    {
      question: "What is the TMap® methodology and why is it important?",
      answer:
        "TMap® is a globally recognized, industry-standard methodology for structured, risk-based testing. Its importance is that it provides a scientific framework for making testing decisions. Instead of relying on guesswork, it forces a deliberate process of identifying business risk and allocating testing effort accordingly. This makes your entire QA process defensible, transparent, and highly effective.",
    },
    {
      question: "How does Snap.TestAuthor integrate with our existing tools?",
      answer:
        "Seamless integration is a core pillar of the platform. Snap.TestAuthor is designed to export complete test suites directly into the tools your team already uses, eliminating manual, error-prone handoffs. It currently integrates with leading test management platforms including Zephyr, qTest, and ADO Test Plans.",
    },
  ];

  return (
    <div
      className="min-h-screen md:bg-contain bg-top bg-no-repeat bg-white"
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
              "Snap.TestAuthor: Stop Guessing, Start Engineering Quality",
            description:
              "Empower your non-technical teams with Snap.TestAuthor. Our platform uses the TMap® methodology to generate risk-driven test cases from your existing documents, ensuring you build the right product, right from the start.",
            url: "https://www.indexnine.com/insights/blogs/quality-engineering-platform",
            datePublished: "2025-02-15T00:00:00Z",
            dateModified: "2025-02-15T00:00:00Z",
            author: {
              "@type": "Organization",
              name: "IndexNine QA Engineering Team",
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
                "https://www.indexnine.com/insights/blogs/quality-engineering-platform",
            },
            image: {
              "@type": "ImageObject",
              url: "https://www.indexnine.com/images/quality-engineering-platform.jpg",
              width: 1200,
              height: 630,
            },
            wordCount: 2800,
            articleSection: "Quality Engineering",
            keywords: [
              "test case generation",
              "product owner testing",
              "quality engineering",
              "TMap methodology",
              "agile QA",
              "risk-based testing",
            ],
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqData.map((faq) => ({
              "@type": "Question",
              name: faq.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: faq.answer,
              },
            })),
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
                name: "Quality Engineering Platform",
                item: "https://www.indexnine.com/insights/blogs/quality-engineering-platform",
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
            "@type": "SoftwareApplication",
            name: "Snap.TestAuthor",
            description:
              "Quality engineering platform that uses TMap® methodology to generate risk-driven test cases from existing documents",
            applicationCategory: "QualityAssuranceApplication",
            operatingSystem: "Web-based",
            offers: {
              "@type": "Offer",
              description:
                "Professional quality engineering and test case generation services",
            },
            featureList: [
              "Test case generation",
              "TMap® methodology integration",
              "Risk-based testing",
              "Jira integration",
              "Document analysis",
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
              Stop Guessing. Start Engineering Quality.
            </h1>

            <div className="flex items-center gap-6 text-sm text-foreground/80 mb-8">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span className="font-montserrat">QA Engineering Team</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span className="font-montserrat">12 min read</span>
              </div>
              <span className="font-montserrat">February 15, 2025</span>
            </div>
          </div>
        </div>
      </section>

      <div className="bg-[#ffffff00] pt-8">
        <a id="intro"></a>
        <div
          className="container grid md:grid-cols-3 gap-12 bg-transparent pt-12 rounded-tl-3xl rounded-tr-3xl bg-white bg-contain bg-no-repeat"
          style={{ backgroundImage: `url(${BlogContBg})` }}
        >
          <div className="text-foreground-dark">
            <div className="sticky top-[120px] pb-8">
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
            </div>
          </div>

          <div className="col-span-2 w-full">
            {/* Introduction Section */}
            <section className="relative overflow-hidden">
              <div className=" relative z-10">
                <div className="max-w-5xl mx-auto pb-8">
                  <div className="space-y-6 text-lg text-foreground-dark-muted leading-relaxed mb-8">
                    <h4 className="font-semibold text-xl">
                      Snap.TestAuthor empowers your non-technical teams to
                      generate comprehensive and data-driven test cases,
                      allowing you to build the right product from the start.
                    </h4>
                    <div className="">
                      <h5 className="font-semibold mb-4 text-foreground-dark">
                        Trusted by Innovative Product Teams
                      </h5>
                      <div className="flex flex-wrap gap-4 items-center opacity-70">
                        <span className="text-sm bg-brand-primary/10 px-3 py-1 rounded-full">
                          Leading Enterprises
                        </span>
                        <span className="text-sm bg-brand-primary/10 px-3 py-1 rounded-full">
                          Scale-ups
                        </span>
                        <span className="text-sm bg-brand-primary/10 px-3 py-1 rounded-full">
                          Product Teams
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button type="submit" size="lg" variant="btnPrimary">
                      <Download className="w-4 h-4 mr-2" />
                      Schedule Your Live Demo
                    </Button>
                    <Button type="submit" size="lg" variant="btnSecondary">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Talk to a QA Strategist
                    </Button>
                  </div>
                </div>
              </div>
            </section>

            {/* Product Owner's Dilemma Section */}
            <a id="dilemma"></a>
            <section className="pt-12 pb-0 px-0 relative ">
              <div className=" text-lg text-foreground-dark-muted leading-relaxed">
                <div className="">
                  <div className="space-y-6">
                    <h2 className="font-semibold text-2xl text-foreground-dark">
                      The Product Owner's Testing Dilemma
                    </h2>
                    <p>
                      The pressure is on. Your organization has embraced agile,
                      and dedicated QA teams are a thing of the past; the
                      responsibility for testing is now on your shoulders as a
                      Product Owner or Functional Consultant. You want to keep
                      up, but the process is fragmented and inefficient. Often,
                      this leads to:
                    </p>

                    <div className="grid gap-6 my-8">
                      {[
                        {
                          icon: Target,
                          title: "Relying on Instinct",
                          description:
                            "Manually writing test cases based on your own knowledge, leading to inconsistencies, bottlenecks, and critical blind spots.",
                        },
                        {
                          icon: Brain,
                          title: "Wrestling with Generic AI",
                          description:
                            "Using tools like ChatGPT or basic Jira plugins that spit out mechanical, contextless test cases with no connection to business risk or your product's unique logic.",
                        },
                        {
                          icon: Shield,
                          title: "Being Buried in Documentation",
                          description:
                            "Spending days sifting through PRDs, user stories, and architectural diagrams to piece together a testing plan, burning valuable time for a compromised solution.",
                        },
                      ].map((item, index) => (
                        <div
                          key={index}
                          className="bg-white rounded-xl p-8 shadow-glass border-glass h-full"
                        >
                          {" "}
                          <EnhancedScrollReveal direction="up" delay={200}>
                            <div className="flex items-start gap-4">
                              <div className="flex-shrink-0 w-12 h-12 bg-blue-500/10 rounded-full flex items-center justify-center">
                                <item.icon className="w-6 h-6 text-brand-primary" />
                              </div>
                              <div>
                                <h4 className="font-semibold text-foreground-dark mb-2">
                                  {item.title}
                                </h4>
                                <p className="text-foreground-dark-muted">
                                  {item.description}
                                </p>
                              </div>
                            </div>
                          </EnhancedScrollReveal>
                        </div>
                      ))}
                    </div>

                    <p className="font-semibold">
                      The result? A constant state of uncertainty. You have zero
                      visibility into test coverage gaps, no real way to
                      quantify business risk exposure, and no confidence that
                      your team is testing what truly matters.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Shift to Intelligent Quality Section */}
            <a id="shift"></a>
            <section className="pt-12 pb-0 relative overflow-hidden">
              <div className=" text-lg text-foreground-dark-muted leading-relaxed">
                <div className="max-w-6xl mx-auto">
                  <div className="space-y-6">
                    <h2 className="font-semibold text-2xl text-foreground-dark">
                      The Shift to Intelligent, Outcome-Driven Quality
                    </h2>
                    <p>
                      Snap.TestAuthor isn't just another testing tool. It's a
                      reliable accelerator built to solve the core challenges of
                      modern software development. We transform testing from a
                      manual, time-consuming, makeshift approach into a
                      strategic, intelligent, and transparently results-driven
                      process.
                    </p>
                    <p>
                      Our platform provides a centralized Knowledge Hub,
                      incorporating your user stories from Jira and ADO, PRDs,
                      and even architectural diagrams to build a living,
                      evolving knowledge base tailored to your product. This
                      unprecedented level of context allows us to generate not
                      just test cases, but a complete, data-driven testing
                      strategy fully aligned with your specific business
                      objectives.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Four Step Process Section */}
            <a id="process"></a>
            <section className="pt-12 pb-0 relative ">
              <div className=" text-lg text-foreground-dark-muted leading-relaxed">
                <div className="max-w-6xl mx-auto">
                  <div className="space-y-6">
                    <h2 className="font-semibold text-2xl text-foreground-dark">
                      From Raw Requirements to Actionable Insights in Four Steps
                    </h2>
                    <p className="mb-8">
                      Snap.TestAuthor provides a structured, scientific approach
                      to quality, powered by the industry-proven{" "}
                      <strong>TMap® methodology</strong>.
                    </p>

                    <div className="grid gap-6">
                      {[
                        {
                          step: "1",
                          title:
                            "Centralize Knowledge: Build Your Product Brain",
                          description:
                            "Connect directly to Jira, ADO, and your document repositories. Our platform ingests user stories, epics, and diagrams to create a contextualized knowledge hub that truly understands your product.",
                        },
                        {
                          step: "2",
                          title:
                            "Define Business Risk: Align Testing with Value",
                          description:
                            "Empower your POs and FCs to assign business risk and impact values at the user story level. This allows you to fine-tune the depth and breadth of testing, focusing your resources on what matters most to your customers.",
                        },
                        {
                          step: "3",
                          title:
                            "Generate Intelligently: Automate Test Case Authoring",
                          description:
                            "With one click, generate a comprehensive suite of structured, purpose-built test cases. By linking every test to a user story, goal, and technique, our platform provides unmatched visibility.",
                        },
                        {
                          step: "4",
                          title:
                            "Integrate & Accelerate: Seamlessly Fit Your Workflow",
                          description:
                            "Export your test suites directly into the tools your team already uses. Snap.TestAuthor integrates with Zephyr, qTest, and ADO Test Plans, eliminating manual handoffs and bridging fragmented systems.",
                        },
                      ].map((item, index) => (
                        <div
                          key={index}
                          className="bg-white rounded-xl p-8 shadow-glass border-glass h-full"
                        >
                          <EnhancedScrollReveal direction="up" delay={200}>
                            <div className="flex items-start gap-4">
                              <div className="flex-shrink-0 w-12 h-12 bg-blue-500/10 rounded-full flex items-center justify-center text-blue-500 font-medium text-lg">
                                {item.step}
                              </div>
                              <div>
                                <h4 className="font-semibold text-foreground-dark mb-2">
                                  {item.title}
                                </h4>
                                <p className="text-foreground-dark-muted">
                                  {item.description}
                                </p>
                              </div>
                            </div>
                          </EnhancedScrollReveal>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Future Section */}
            <a id="future"></a>
            <section className="pt-12 pb-0 relative ">
              <div className=" text-lg text-foreground-dark-muted leading-relaxed">
                <div className="max-w-6xl mx-auto">
                  <div className="space-y-6">
                    <h2 className="font-semibold text-2xl text-foreground-dark">
                      The Future is Automated, Self-Healing, and Intelligent
                    </h2>
                    <p>
                      Snap.TestAuthor is an evolving platform at the heart of
                      our Quality Engineering services. Our vision extends far
                      beyond test case generation.
                    </p>

                    <div className="grid gap-6 my-8">
                      {[
                        {
                          icon: Zap,
                          title: "One-Click Automation",
                          description:
                            "We're developing executable test script generation in frameworks like Playwright and JavaScript to enable true, one-click test automation and continuous validation.",
                        },
                        {
                          icon: Shield,
                          title: "Self-Healing Test Suites",
                          description:
                            "By leveraging AI to create automation suites that adapt to UI changes, we can dramatically reduce the time and effort spent on maintenance.",
                        },
                        {
                          icon: Brain,
                          title: "Intelligent Learning System",
                          description:
                            "The platform learns from every human interaction. Over time, it will proactively recommend missing coverage, optimize testing strategies, and evolve with your product.",
                        },
                        {
                          icon: Target,
                          title: "Product Insights & Analytics",
                          description:
                            "Transform your testing data into a strategic asset. Gain actionable insights on which features are being tested most, correlate test outcomes with business risk, and make data-driven decisions for your product roadmap.",
                        },
                      ].map((item, index) => (
                        <div
                          key={index}
                          className="bg-white rounded-xl p-8 shadow-glass border-glass h-full"
                        >
                          {" "}
                          <EnhancedScrollReveal direction="up" delay={200}>
                            <div className="flex items-start gap-4">
                              <div className="flex-shrink-0 w-12 h-12 bg-blue-500/10 rounded-full flex items-center justify-center">
                                <item.icon className="w-6 h-6 text-blue-500" />
                              </div>
                              <div>
                                <h4 className="font-semibold text-foreground-dark mb-2">
                                  {item.title}
                                </h4>
                                <p className="text-foreground-dark-muted">
                                  {item.description}
                                </p>
                              </div>
                            </div>
                          </EnhancedScrollReveal>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* FAQ Section */}
            <a id="faqs"></a>
            <section className="pt-12 pb-0 relative overflow-hidden">
              <div className=" text-foreground-dark-muted leading-relaxed">
                <div className="max-w-6xl mx-auto">
                  <div className="space-y-6">
                    <EnhancedScrollReveal direction="up">
                      <h2 className="text-3xl font-semibold text-foreground-dark mb-8 font-montserrat flex items-center gap-3">
                        {/* <FileText className="w-8 h-8 text-primary" /> */}
                        Frequently Asked Questions
                      </h2>
                    </EnhancedScrollReveal>

                    <div className="space-y-0 bg-white rounded-xl border border-glass px-6">
                      {faqData.map((faq, index) => (
                        <EnhancedScrollReveal
                          key={index}
                          direction="up"
                          delay={index * 100}
                        >
                          <div
                            key={index}
                            className=" overflow-hidden py-6 border-b last:border-b -mb-[1px]"
                          >
                            <button
                              className="w-full text-left flex items-center justify-between hover:bg-muted/50 transition-colors"
                              onClick={() => toggleFAQ(index)}
                            >
                              <span className="font-medium text-foreground-dark pr-4">
                                {faq.question}
                              </span>
                              {expandedFAQ === index ? (
                                <ChevronUp className="w-5 h-5 text-brand-primary flex-shrink-0" />
                              ) : (
                                <ChevronDown className="w-5 h-5 text-brand-primary flex-shrink-0" />
                              )}
                            </button>
                            {expandedFAQ === index && (
                              <div className=" py-4">
                                <p className="text-foreground-dark-muted leading-relaxed">
                                  {faq.answer}
                                </p>
                              </div>
                            )}
                          </div>
                        </EnhancedScrollReveal>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Final CTA Section */}
            <section className="pt-12 pb-12 relative overflow-hidden">
              <div className="">
                <div className="max-w-6xl mx-auto">
                  <div className="bg-gradient-primary rounded-2xl p-8 text-center text-white">
                    <h2 className="text-3xl font-semibold mb-4">
                      Quality Isn't Made, It's Engineered.
                    </h2>
                    <p className="text-xl mb-8 opacity-90">
                      See how Snap.TestAuthor can revolutionize your testing
                      process, empower product owners, and deliver quality
                      insights to build better, faster.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <Button variant="btnSecondary">
                        Schedule Your Live Demo
                      </Button>
                      <Button variant="btnSecondary">
                        Talk to a QA Strategist
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default QualityEngineeringPlatform;
