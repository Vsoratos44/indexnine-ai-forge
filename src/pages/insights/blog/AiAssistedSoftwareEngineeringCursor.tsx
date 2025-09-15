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
  Code,
  Zap,
  Target,
  Wrench,
  AlertTriangle,
} from "lucide-react";
import { Link } from "react-router-dom";
import BlogDetailsBg from "@/assets/images/blog-details-bg.webp";
import BlogContBg from "@/assets/images/blog-content-bg.webp";
import blogImg2 from "@/assets/images/blog-img2.webp";
import styles from "../../../assets/css/stylesheet.module.css";

const leftNavLinks = [
  { href: "#intro", label: "Introduction" },
  { href: "#can-ai-help", label: "Can AI Really Help Build UI?" },
  { href: "#experiment", label: "The Experiment" },
  { href: "#beyond-hype", label: "Beyond the Hype" },
  { href: "#business-velocity", label: "Business Velocity" },
  { href: "#dual-approach", label: "Dual Approach" },
  { href: "#faqs", label: "Frequently Asked Questions" },
];

const AiAssistedSoftwareEngineeringCursor = () => {
  const [selected, setSelected] = useState("#intro");
  const [expandedFAQ, setExpandedFAQ] = useState(null);

  useSEO({
    title: "AI-Assisted Software Engineering: Boosting Developer Productivity with Cursor AI | IndexNine",
    description: "Explore how to leverage AI code generation tools like Cursor AI to accelerate React development. Learn how AI-assisted software engineering can boost startup velocity and code quality.",
    canonicalUrl: "https://www.indexnine.com/insights/blogs/ai-assisted-software-engineering",
    keywords: "AI-assisted software engineering, Cursor AI, React development, developer productivity, AI code generation, software development tools",
    ogImage: "https://www.indexnine.com/images/cursor-ai-og.jpg",
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
            headline: "Beyond Autocomplete: When AI Meets UI to Supercharge Software Engineering with Cursor AI",
            description: "Explore how to leverage AI code generation tools like Cursor AI to accelerate React development. Learn how AI-assisted software engineering can boost startup velocity and code quality.",
            url: "https://www.indexnine.com/insights/blogs/ai-assisted-software-engineering",
            datePublished: "2025-01-12T00:00:00Z",
            dateModified: "2025-01-12T00:00:00Z",
            author: {
              "@type": "Organization",
              name: "IndexNine Senior UI Architect",
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
              "@id": "https://www.indexnine.com/insights/blogs/ai-assisted-software-engineering",
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
              Beyond Autocomplete: <br />
              When AI Meets UI to Supercharge Software Engineering
            </h1>

            <div className="flex items-center gap-6 text-sm text-foreground/80 mb-8">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span className="font-montserrat">Senior UI Architect</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span className="font-montserrat">12 min read</span>
              </div>
              <span className="font-montserrat">January 12, 2025</span>
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
              
              <div className={`px-8 py-12 rounded-2xl my-8 text-center text-white ${styles.sideCardBg}`}>
                <h3 className="text-3xl font-bold">AI Enablement</h3>
                <p className="text-xl py-8">
                  Ready to unlock your team's potential with AI-assisted development? Get expert guidance on implementation.
                </p>
                <Button type="submit" size="lg" variant="btnSecondary">
                  Get Started
                </Button>
              </div>
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
                      Developer productivity isn't just a metric; it's the engine of your company's growth. Every hour saved on boilerplate code is an hour invested in your product's competitive edge.
                    </h4>
                    <p>
                      The rise of AI code generation tools promises a revolution in efficiency, but the landscape can be noisy. We've all seen demos suggesting AI is a magic button for creating perfect code overnight. Yet, for many tech leaders, the reality is a frustrating cycle of failed experiments.
                    </p>
                    <p>
                      The truth is, scaling an engineering team requires more than just giving developers a new tool. It requires a strategic framework where context-aware AI becomes a true partner in the development lifecycle.
                    </p>
                    <div className="bg-gradient-to-r from-brand-primary/5 to-brand-purple/5 border-l-4 border-brand-primary p-6 rounded-r-lg my-8">
                      <h3 className="text-xl font-semibold text-foreground-dark mb-4">
                        TL;DR - Is Cursor perfect? Not quite. Is it valuable in our day to day? Without a doubt, the lessons we gained were worth every stumble.
                      </h3>
                    </div>
                  </div>

                  <Button type="submit" size="lg" variant="btnPrimary">
                    <Download className="w-4 h-4 mr-2" />
                    Download Our Free Developer's AI Tool Cheatsheet (PDF)
                  </Button>
                </div>
              </div>
            </section>

            {/* Can AI Help Section */}
            <a id="can-ai-help"></a>
            <section className="pt-12 pb-0 relative overflow-hidden">
              <div className="container text-lg text-foreground-dark-muted leading-relaxed">
                <div className="max-w-5xl mx-auto">
                  <div className="space-y-6">
                    <h4 className="font-semibold text-2xl text-foreground-dark">
                      Can AI Really Help Build UI?
                    </h4>
                    <p>
                      We started with a question every modern frontend team is asking: Can AI help turn Figma or existing designs into production-ready React components? Cursor AI promised just that—and we were curious (and skeptical).
                    </p>

                    <div className="bg-gradient-card backdrop-blur-xl rounded-2xl p-8 border border-glass-border">
                      <h3 className="text-xl font-bold text-foreground mb-4">
                        For teams working with complex frameworks like React, Cursor is a game-changer
                      </h3>
                      <p className="text-foreground-muted mb-6">
                        Instead of generic advice, developers get intelligent, codebase-aware support for tasks like:
                      </p>
                      <div className="space-y-4">
                        <div className="flex items-start gap-3">
                          <Code className="h-5 w-5 text-brand-primary mt-1 flex-shrink-0" />
                          <div>
                            <h4 className="font-semibold text-foreground mb-2">
                              Rapid Component Generation
                            </h4>
                            <p className="text-foreground-muted text-sm">
                              Creating new React components with associated CSS modules and test files from a single, natural language prompt.
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <Wrench className="h-5 w-5 text-brand-primary mt-1 flex-shrink-0" />
                          <div>
                            <h4 className="font-semibold text-foreground mb-2">
                              Automated Refactoring
                            </h4>
                            <p className="text-foreground-muted text-sm">
                              Highlighting a block of code and asking the AI to refactor it for better performance or readability based on established best practices.
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-brand-primary mt-1 flex-shrink-0" />
                          <div>
                            <h4 className="font-semibold text-foreground mb-2">
                              In-line Documentation
                            </h4>
                            <p className="text-foreground-muted text-sm">
                              Generating comments and documentation that are aware of the code's logic and purpose.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <p>
                      The core advantage is the reduction in context switching. Developers can ask questions, generate code, and fix errors within the editor, creating a seamless and highly productive workflow.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Experiment Section */}
            <a id="experiment"></a>
            <section className="pt-12 pb-0 relative overflow-hidden">
              <div className="container text-lg text-foreground-dark-muted leading-relaxed">
                <div className="max-w-5xl mx-auto">
                  <div className="space-y-6">
                    <h4 className="font-semibold text-2xl text-foreground-dark">
                      The Good, the Glitchy, and the Fixable
                    </h4>
                    <p>
                      To put it to the test, we picked a moderately complex dashboard design. It contains charts, tables, cards, icons, and a lot of visual nuance. Then, we asked Cursor to generate components straight from that design.
                    </p>

                    <div className="bg-gradient-card backdrop-blur-xl rounded-2xl p-8 border border-glass-border">
                      <h3 className="text-xl font-bold text-foreground mb-4">
                        The outcomes? Exciting and full of potential — with just a bit of room to grow!
                      </h3>
                    </div>

                    <div className="space-y-6">
                      <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                        <h4 className="font-semibold text-foreground-dark mb-3 flex items-center gap-2">
                          <AlertTriangle className="h-5 w-5 text-red-500" />
                          The Challenges
                        </h4>
                        <ul className="space-y-3 text-foreground-dark-muted">
                          <li>
                            <strong>Quickly generate a lot of code:</strong> For the UI screen, Cursor generated 8 components & around 1000 lines of code. This would be great if everything was perfect—but it invariably misses small things (like redundant icons or unnecessary props), making large generations buggy.
                          </li>
                          <li>
                            <strong>It doesn't reuse components:</strong> Unless you explicitly tell it to, Cursor might create yet another version of a button or badge—even if you already have a perfect one in your codebase.
                          </li>
                          <li>
                            <strong>Repetitive HTML Patterns:</strong> Cursor can occasionally generate repetitive HTML across different components without identifying shared patterns.
                          </li>
                          <li>
                            <strong>Styling often needs finesse:</strong> Cursor gets about 80–85% of the way there. It sometimes missed exact spacing or color matching from Figma, but a second pass usually nailed it.
                          </li>
                        </ul>
                      </div>

                      <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                        <h4 className="font-semibold text-foreground-dark mb-3 flex items-center gap-2">
                          <CheckCircle className="h-5 w-5 text-green-500" />
                          What Worked Well
                        </h4>
                        <ul className="space-y-3 text-foreground-dark-muted">
                          <li>
                            <strong>Rapid prototyping:</strong> Getting from design to working component in minutes rather than hours
                          </li>
                          <li>
                            <strong>Context awareness:</strong> Understanding existing codebase patterns and conventions
                          </li>
                          <li>
                            <strong>Framework expertise:</strong> Deep knowledge of React best practices and modern patterns
                          </li>
                          <li>
                            <strong>Iteration speed:</strong> Quick refinements and adjustments based on feedback
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Beyond the Hype Section */}
            <a id="beyond-hype"></a>
            <section className="pt-12 pb-0 relative overflow-hidden">
              <div className="container text-lg text-foreground-dark-muted leading-relaxed">
                <div className="max-w-5xl mx-auto">
                  <div className="space-y-6">
                    <h4 className="font-semibold text-2xl text-foreground-dark">
                      Beyond the Hype: It's Not the Tool, It's the Technique
                    </h4>
                    <p>
                      Anyone can download Cursor AI. The real advantage comes from good prompt engineering. After weeks of rigorous experimentation, our UI architects have developed proprietary libraries of instructions—our "secret sauce"—that guide Cursor to generate sophisticated, high-quality code that aligns with our production standards.
                    </p>

                    <div className="bg-gradient-card backdrop-blur-xl rounded-2xl p-8 border border-glass-border">
                      <h3 className="text-xl font-bold text-foreground mb-4">
                        These aren't simple prompts. They are curated instruction sets that teach the AI to understand our specific architectural patterns, coding styles, and testing methodologies.
                      </h3>
                      <p className="text-foreground-muted mb-6">
                        For React development, this means we can:
                      </p>
                      <div className="space-y-4">
                        <div className="flex items-start gap-3">
                          <Target className="h-5 w-5 text-brand-primary mt-1 flex-shrink-0" />
                          <div>
                            <h4 className="font-semibold text-foreground mb-2">
                              Generate Entire Component Structures
                            </h4>
                            <p className="text-foreground-muted text-sm">
                              Create new, complex React components complete with CSS modules, Storybook files, and unit tests from a single, expertly crafted command.
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <Zap className="h-5 w-5 text-brand-primary mt-1 flex-shrink-0" />
                          <div>
                            <h4 className="font-semibold text-foreground mb-2">
                              Execute Codebase-Aware Refactoring
                            </h4>
                            <p className="text-foreground-muted text-sm">
                              Apply our specific performance and readability best practices across the entire application, ensuring consistency and reducing technical debt.
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-brand-primary mt-1 flex-shrink-0" />
                          <div>
                            <h4 className="font-semibold text-foreground mb-2">
                              Enforce Quality with Precision
                            </h4>
                            <p className="text-foreground-muted text-sm">
                              Go beyond generic linting to document and enhance code with a deep understanding of the project's unique context.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Business Velocity Section */}
            <a id="business-velocity"></a>
            <section className="pt-12 pb-0 relative overflow-hidden">
              <div className="container text-lg text-foreground-dark-muted leading-relaxed">
                <div className="max-w-5xl mx-auto">
                  <div className="space-y-6">
                    <h4 className="font-semibold text-2xl text-foreground-dark">
                      Turning AI Tools into Tangible Business Velocity
                    </h4>
                    <p>
                      It's about guiding the AI thoughtfully through a structured, developer-centric process. Here's our strategic framework for success:
                    </p>

                    <div className="space-y-8">
                      {/* Step 1 */}
                      <div className="bg-gradient-to-r from-blue-500/5 to-transparent border border-blue-500/20 rounded-xl p-8">
                        <h3 className="text-xl font-bold text-foreground-dark mb-4 flex items-center gap-3">
                          <span className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
                            1
                          </span>
                          Start With a Solid Foundation
                        </h3>
                        <div className="grid md:grid-cols-2 gap-6">
                          <div className="bg-white p-6 rounded-lg border border-border">
                            <h4 className="font-semibold text-foreground-dark mb-3">
                              Project Setup
                            </h4>
                            <ul className="text-sm text-foreground-dark-muted space-y-2">
                              <li>• React + TypeScript project scaffolding</li>
                              <li>• Storybook for isolated UI testing</li>
                              <li>• .mdc rules set up in .cursor/rules/</li>
                              <li>• Predefined folder structure for clarity</li>
                            </ul>
                          </div>
                          <div className="bg-white p-6 rounded-lg border border-border">
                            <h4 className="font-semibold text-foreground-dark mb-3">
                              Component Registry
                            </h4>
                            <p className="text-sm text-foreground-dark-muted">
                              We introduced a components_registry.json—a simple file that keeps track of all existing shared components to prevent duplication.
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Step 2 */}
                      <div className="bg-gradient-to-r from-green-500/5 to-transparent border border-green-500/20 rounded-xl p-8">
                        <h3 className="text-xl font-bold text-foreground-dark mb-4 flex items-center gap-3">
                          <span className="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
                            2
                          </span>
                          Break Down the Design First
                        </h3>
                        <p className="text-foreground-dark-muted mb-6">
                          Instead of throwing the full Figma screen into Cursor, we manually identified layout vs. reusable components and created base components first.
                        </p>
                        <div className="bg-white p-6 rounded-lg border border-border">
                          <h4 className="font-semibold text-foreground-dark mb-3">
                            Our Prompt
                          </h4>
                          <p className="text-sm text-foreground-dark-muted italic">
                            "Analyze the attached design. Identify & list all the reusable & common components from that."
                          </p>
                        </div>
                      </div>

                      {/* Step 3 */}
                      <div className="bg-gradient-to-r from-purple-500/5 to-transparent border border-purple-500/20 rounded-xl p-8">
                        <h3 className="text-xl font-bold text-foreground-dark mb-4 flex items-center gap-3">
                          <span className="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
                            3
                          </span>
                          Build Bottom-Up
                        </h3>
                        <div className="space-y-4">
                          <div className="flex items-start gap-3">
                            <CheckCircle className="h-5 w-5 text-purple-500 mt-1 flex-shrink-0" />
                            <div>
                              <h4 className="font-semibold text-foreground-dark mb-2">
                                Start Small
                              </h4>
                              <p className="text-foreground-dark-muted text-sm">
                                Feed Cursor isolated designs—a single card, chart, or stat block—one at a time.
                              </p>
                            </div>
                          </div>
                          <div className="flex items-start gap-3">
                            <CheckCircle className="h-5 w-5 text-purple-500 mt-1 flex-shrink-0" />
                            <div>
                              <h4 className="font-semibold text-foreground-dark mb-2">
                                Go Generic, Stay Reusable
                              </h4>
                              <p className="text-foreground-dark-muted text-sm">
                                Instruct Cursor to keep components generic and flexible for reuse across different pages.
                              </p>
                            </div>
                          </div>
                          <div className="flex items-start gap-3">
                            <CheckCircle className="h-5 w-5 text-purple-500 mt-1 flex-shrink-0" />
                            <div>
                              <h4 className="font-semibold text-foreground-dark mb-2">
                                Test in Isolation
                              </h4>
                              <p className="text-foreground-dark-muted text-sm">
                                Each component was tested independently using Storybook to spot visual bugs early.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Step 4 */}
                      <div className="bg-gradient-to-r from-orange-500/5 to-transparent border border-orange-500/20 rounded-xl p-8">
                        <h3 className="text-xl font-bold text-foreground-dark mb-4 flex items-center gap-3">
                          <span className="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
                            4
                          </span>
                          Treat AI Like a Junior Dev
                        </h3>
                        <p className="text-foreground-dark-muted mb-6">
                          NEVER take its output at face value. Every line of code was reviewed with a critical eye, looking for redundant markup, missed abstractions, and accessibility gaps.
                        </p>
                        <div className="bg-white p-6 rounded-lg border border-border">
                          <h4 className="font-semibold text-foreground-dark mb-3">
                            Before Calling It "Done"
                          </h4>
                          <p className="text-sm text-foreground-dark-muted italic">
                            "Refactor the component to make it faster & more efficient."
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Dual Approach Section */}
            <a id="dual-approach"></a>
            <section className="pt-12 pb-0 relative overflow-hidden">
              <div className="container text-lg text-foreground-dark-muted leading-relaxed">
                <div className="max-w-5xl mx-auto">
                  <div className="space-y-6">
                    <h4 className="font-semibold text-2xl text-foreground-dark">
                      A Dual Approach for Two Types of Innovators
                    </h4>

                    <div className="grid md:grid-cols-2 gap-8">
                      <div className="bg-gradient-card backdrop-blur-xl rounded-2xl p-8 border border-glass-border">
                        <h3 className="text-xl font-bold text-foreground mb-4">
                          For the Startup Builder & Technical Founder
                        </h3>
                        <p className="text-foreground-muted mb-6">
                          You want to build, and you want to do it fast. Our framework provides a direct path to mastery. We teach you not just what the tool does, but how to develop your own "secret sauce" to accelerate your MVP.
                        </p>
                        <Button variant="btnPrimary" size="sm" asChild>
                          <Link to="/services/ai-enablement">
                            Learn the Framework
                          </Link>
                        </Button>
                      </div>

                      <div className="bg-gradient-card backdrop-blur-xl rounded-2xl p-8 border border-glass-border">
                        <h3 className="text-xl font-bold text-foreground mb-4">
                          For the Enterprise & Growth-Stage Leader
                        </h3>
                        <p className="text-foreground-muted mb-6">
                          You need to modernize your tech stack and accelerate outcomes without disrupting operations. We offer our AI Pods and AI Enablement services as your R&D and innovation partner.
                        </p>
                        <Button variant="btnPrimary" size="sm" asChild>
                          <Link to="/services/ai-pods">
                            Explore AI Pods
                          </Link>
                        </Button>
                      </div>
                    </div>

                    <div className={`text-white rounded-2xl p-8 ${styles.middleCardBg2}`}>
                      <h2 className="text-2xl font-semibold mb-4">
                        The Indexnine AI Enablement Framework
                      </h2>
                      <p className="text-lg leading-relaxed mb-6">
                        We leverage a simple, four-step framework: Assess your current development lifecycle and business goals. Strategize by developing a tailored AI Roadmap. Integrate the tool seamlessly into your workflow. Amplify with ongoing support and advanced training.
                      </p>
                      <div className="flex flex-col sm:flex-row gap-4">
                        <Button variant="btnSecondary" asChild>
                          <Link to="/services/ai-enablement">
                            Book an AI Assessment
                          </Link>
                        </Button>
                        <Button variant="btnSecondary" className="bg-white/10 hover:bg-white/20">
                          Apply for 1-on-1 Coaching
                        </Button>
                      </div>
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
                    Frequently Asked Questions
                  </h4>

                  <div className="space-y-2">
                    {[
                      {
                        question: "Is Cursor AI just a wrapper around ChatGPT?",
                        answer: "No. While Cursor uses models from OpenAI (like GPT-4) and Anthropic, its core value is its deep integration with the code editor. It indexes your entire local codebase, enabling it to provide context-aware answers, generate code based on your existing files, and perform actions across your project—capabilities that a standard web-based chatbot cannot offer.",
                      },
                      {
                        question: "How does Cursor AI handle security and privacy with my codebase?",
                        answer: "Cursor offers a 'Privacy Mode' that does not store or train on your code snippets. For enterprise-level security, they recommend using your own API keys from providers like Azure OpenAI, which ensures your data is handled according to your organization's security protocols. This is a key part of the integration strategy we define in our AI Roadmap service.",
                      },
                      {
                        question: "Can Cursor AI replace the need for senior developers?",
                        answer: "No. AI-assisted software engineering tools are designed to augment, not replace, developer expertise. They are powerful assistants that handle repetitive tasks and provide suggestions, but they still require the critical thinking, architectural vision, and oversight of experienced engineers to build robust and scalable applications. Their primary benefit is amplifying the productivity of your entire team.",
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
            <div className="p-8 text-center">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold mb-6 text-foreground-white">
                <span className="leading-[1.4]">Ready to Move Beyond Autocomplete?</span>
              </h2>
              <p className="text-xl text-foreground-white/80 mb-12 font-montserrat max-w-3xl mx-auto">
                Don't let AI tools become just another experiment. Get expert guidance on building a strategic framework for AI-assisted development that delivers real business value.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="btnPrimary" size="lg" asChild>
                  <Link to="/services/ai-enablement">
                    Book an AI Enablement Assessment
                    <ExternalLink className="h-4 w-4 ml-2" />
                  </Link>
                </Button>
                <Button variant="btnSecondary" size="lg">
                  <Download className="h-4 w-4 mr-2" />
                  Download AI Tool Cheatsheet
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

export default AiAssistedSoftwareEngineeringCursor;