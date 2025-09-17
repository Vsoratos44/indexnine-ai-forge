import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  CheckCircle,
  Settings,
  Zap,
  Target,
  Award,
  Plus,
  Minus,
  ArrowRight,
  ChevronDown,
  ChevronUp,
  Sparkles,
  Repeat2,
  LandPlot,
  NotepadText,
  CalendarCheck2,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServiceVideoBackground from "@/components/ServiceVideoBackground";
import { useSEO } from "@/hooks/useSEO";
import {
  SEOStructuredData,
  OrganizationSchema,
  WebPageSchema,
  ServiceSchema,
  BreadcrumbSchema,
  FAQSchema,
} from "@/components/SEOStructuredData";
import QuoteIcon from "../../assets/images/quote.svg";
import styles from "../../assets/css/stylesheet.module.css";

const QualityEngineering = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  // Quality Engineering SEO - Enterprise-focused keywords
  useSEO({
    title:
      "Quality Engineering Services & Test Automation Solutions | Enterprise QA Testing | IndexNine",
    description:
      "Leading quality engineering and test automation services for enterprises. Strategic QA testing, automated testing solutions, performance testing, and quality assurance consulting. Transform your software testing with outcome-driven quality engineering.",
    canonicalUrl: "https://www.indexnine.com/services/quality-engineering",
    keywords:
      "quality engineering services, test automation solutions, enterprise QA testing, automated testing services, performance testing, quality assurance consulting, software testing automation, QE consulting, continuous testing, test strategy consulting, quality engineering framework, enterprise testing solutions, QA automation services, test automation framework development, software quality assurance",
    ogImage: "https://www.indexnine.com/images/og-quality-engineering.png",
    schemaType: "WebPage",
  });

  const faqData = [
    {
      question: "Can you use Robot Framework and Playwright together?",
      answer:
        "Yes. Robot Framework can use Playwright's engine directly through its modern Browser library. This is a popular and powerful combination that offers Robot's simple syntax with Playwright's speed and reliability.",
    },
    {
      question: "Is Playwright better than Robot Framework for enterprise QA?",
      answer:
        "Playwright is often preferred for larger, developer-heavy enterprise teams due to its raw speed, native multi-language support, and advanced debugging features. However, Robot Framework's readability and extensibility make it a highly viable and scalable enterprise solution as well, especially in Python-centric environments.",
    },
    {
      question:
        "What are the main differences between Robot Framework and Playwright?",
      answer:
        "The main differences are in their philosophy and primary user. Robot Framework uses a keyword-driven syntax designed for accessibility and collaboration. Playwright is a developer-first tool with a traditional coding syntax in multiple languages, built for maximum speed and efficiency within engineering workflows.",
    },
    {
      question:
        "Can you integrate Robot Framework with Playwright for hybrid testing?",
      answer:
        "Absolutely. Integrating Robot Framework with the Playwright-based Browser library is an advanced strategy for hybrid testing. It allows you to write simple, maintainable test cases that are executed by Playwright's powerful and reliable automation engine.",
    },
    {
      question: "How does this integrate with our existing development team?",
      answer:
        "Our model is collaborative. We work within your existing agile process, integrating directly with your developers in their environment (e.g., GitHub, Jira). Our goal is to empower your team by building systems they can own and extend long-term.",
    },
    {
      question: "What is the typical ROI on a test automation project?",
      answer:
        "ROI is measured in several ways: reduced manual testing hours, decreased bug-fixing costs (by catching them earlier), and increased development velocity. During an APQ Roadmap, we build a specific ROI model based on your metrics to justify the investment.",
    },
    {
      question: "How long does it take to see results from test automation?",
      answer:
        "With our Sprint 0 approach, you'll see working automation within 2 weeks. Measurable ROI typically appears within 3-6 months as the automated tests accumulate saved hours and prevent costly production bugs.",
    },
    {
      question: "Do you support legacy systems and older technologies?",
      answer:
        "Yes. Our platforms are designed to work with both modern and legacy systems. We often help companies bridge the gap between old and new technology stacks while maintaining comprehensive test coverage.",
    },
  ];

  return (
    <div className="min-h-screen bg-background-dark">
      {/* Structured Data for Quality Engineering */}
      <ServiceSchema
        name="Enterprise Quality Engineering and Test Automation"
        description="IndexNine's Quality Engineering Studio provides strategic services including test automation, performance testing, and Agile Product Quality (APQ) roadmaps to ensure the reliability of mission-critical software."
        serviceType="Quality Engineering"
      />

      <BreadcrumbSchema
        items={[
          { name: "Services", url: "https://www.indexnine.com/services" },
          {
            name: "Quality Engineering",
            url: "https://www.indexnine.com/services/quality-engineering",
          },
        ]}
      />

      {/* FAQ Schema for Quality Engineering */}
      <FAQSchema
        faqItems={faqData.map((item) => ({
          question: item.question,
          answer: item.answer,
        }))}
      />

      <Header />

      {/* Hero Section */}
      <section className="relative min-h-[780px] overflow-hidden bg-black">
        {/* Service Video Background */}
        <ServiceVideoBackground />

        {/* Content - Precisely positioned */}
        <div className="relative z-10 container mx-auto px-6 pt-48 pb-24">
          <div className="max-w-6xl mx-auto text-center lg:text-left ml-0">
            <div className="mb-6">
              <span className="inline-block px-6 py-3 bg-brand-primary/10 text-brand-primary rounded-full text-sm font-medium border border-brand-primary/20 backdrop-blur-sm">
                IndexNine QAE
              </span>
            </div>
            <h1 className="text-[2.5rem] sm:text-[3rem] lg:text-[4rem] xl:text-[4rem] font-semibold text-foreground mb-6 leading-[1.25]  animate-fade-in font-montserrat">
              Beyond Testing: <br />
              <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent ">
                Engineering Quality
              </span>
              <br />
              for Mission-Critical Software
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-foreground/85 mb-8 leading-relaxed font-light animate-slide-up font-montserrat">
              We deliver enterprise-grade quality engineering and outcome-driven
              test automation to help startups and enterprises alike ship
              reliable products faster and with confidence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-scale-in">
              <Button
                variant="btnPrimary"
                size="xl"
                className="min-w-[280px] "
                onClick={() => {
                  window.open(
                    "https://calendly.com/vaughn-soratos-indexnine",
                    "_blank"
                  );
                }}
              >
                Get Your APQ Roadmap
              </Button>
              <a href="/insights/case-studies">
                <Button
                  variant="btnSecondary"
                  size="xl"
                  className="min-w-[240px]  "
                >
                  See Our Impact
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Quality Dilemma Section */}
      <section className="py-24 lg:py-32 bg-[#fff]">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl lg:text-3xl font-semibold text-foreground-dark mb-6 text-foreground-dark leading-[1.25]">
              The Quality Dilemma:{" "}
              <span className="text-brand-primary leading-[1.25]">
                Balancing Speed, Cost, and Reliability
              </span>
            </h2>
            <p className="text-lg text-foreground-dark mb-0 max-w-3xl mx-auto leading-relaxed">
              In a competitive market, pressure to innovate has never been
              higher. Development teams are forced to move faster, but without a
              modern approach to quality, this leads to brittle tests, rising
              bug counts, and eroded customer trust. Manual testing can't keep
              up, and traditional automation often creates more maintenance
              overhead than it saves.
            </p>
          </div>
        </div>
      </section>
      <div className="bg-gradient-to-t from-[#fff] via-[#fcfcfc] to-[#fff] text-foreground">
        <div className={` ${styles.sectionBgData}`}>
          {/* QAE Blueprint Section */}
          <section id="qae-solution" className="pb-16 lg:pb-24">
            <div className="container mx-auto px-6">
              <div className="max-w-8xl mx-auto">
                <div className="text-center mb-12">
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold mb-6 text-foreground-dark">
                    <span className="leading-[1.25]">
                      The Outcome-Driven Automation Blueprint
                    </span>
                  </h2>
                  <p className="text-lg text-foreground-dark/80 max-w-3xl mx-auto">
                    Our philosophy is that quality isn't a phase, it's a
                    measurable outcome. We transform your QE practice from a
                    cost center into a strategic enabler of speed and
                    reliability with our proven, three-step methodology.
                  </p>
                </div>

                <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
                  {[
                    {
                      step: <Sparkles className="w-8 h-8 text-brand-primary" />,
                      title: "BUILD an AI-Assisted Foundation",
                      description:
                        "We establish a scalable, low-maintenance test automation framework using modern tools and AI-powered test generation, creating a resilient foundation that grows with your product.",
                    },
                    {
                      step: <Repeat2 className="w-8 h-8 text-brand-primary" />,
                      title: "ADOPT Shift-Left Principles",
                      description:
                        "We integrate quality checks early in the development lifecycle ('shifting left'), enabling your developers to catch and fix bugs faster, reducing downstream costs and delays.",
                    },
                    {
                      step: <LandPlot className="w-8 h-8 text-brand-primary" />,
                      title: "DEPLOY Smart & Efficiently",
                      description:
                        "We implement intelligent test selection and parallel execution strategies, ensuring fast, targeted feedback from your CI/CD pipeline so you can deploy to production with confidence.",
                    },
                  ].map((item) => (
                    <div
                      key={item.title}
                      className="relative overflow-hidden bg-gradient-card-light border border-[#00000019] bg-[#ffffff59] rounded-2xl p-8 hover:shadow-glass-sm transition-all duration-500 transform hover:scale-102 hover:-translate-y-2 animate-fade-in group text-left"
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/8 via-transparent to-brand-purple/8 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/5 via-transparent to-brand-purple/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                      <div
                        className={`relative w-20 h-20 flex mb-6 items-center justify-center transition-all ${styles.icnBg}`}
                      >
                        {item.step}
                      </div>

                      <h3 className="relative text-xl font-bold mb-4 text-foreground-dark">
                        {item.title}
                      </h3>
                      <p className="relative text-foreground-dark/80">
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* QAE Case Study Section */}
          <section id="qae-case-study" className="pb-24 lg:pb-32">
            <div className="container mx-auto">
              <div className="max-w-4xl bg-[#fff] p-8 rounded-3xl mx-auto ">
                <div className="mb-6">
                  <span className="inline-block px-6 py-3 bg-brand-primary/10 text-brand-primary rounded-full text-sm font-medium border border-brand-primary/20">
                    Case Study: Outcome-Based Automation
                  </span>
                </div>
                <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-foreground-dark">
                  Enabling Velocity for a High-Growth B2B Travel Platform
                </h2>

                <div className="">
                  <div>
                    <p className="text-lg text-foreground-dark mb-6">
                      A rapidly scaling B2B Travel Platform client was crippled
                      by a 5-day manual regression testing cycle, blocking their
                      ability to release new features. We implemented a
                      comprehensive test automation suite using Robot Framework,
                      tied to a 100% success-fee engagement model.
                    </p>
                    <div className="grid grid-cols-2 gap-6">
                      <Card className="p-6 text-center bg-gradient-to-br from-[#1c1c1c] via-[#3a3a3a] to-[#4D4E4F] shadow-lg">
                        <CardContent className="p-0">
                          <div className="text-3xl font-semibold text-white mb-2">
                            97%
                          </div>
                          <p className="text-sm text-foreground/80">
                            Reduction in Execution Time (5 days to 30 mins)
                          </p>
                        </CardContent>
                      </Card>
                      <Card className="p-6 text-center bg-gradient-to-br from-[#1c1c1c] via-[#3a3a3a] to-[#4D4E4F] shadow-lg">
                        <CardContent className="p-0">
                          <div className="text-3xl font-semibold text-white mb-2">
                            100%
                          </div>
                          <p className="text-sm text-foreground/80">
                            Success Fee Achieved
                          </p>
                        </CardContent>
                      </Card>
                    </div>

                    <blockquote className="bg-[#F1F2FF] flex rounded-xl mt-12">
                      <div className="relative w-24 h-24 md:w-36 md:h-36  mx-6">
                        <img src={QuoteIcon} alt="" />
                      </div>
                      <div className="p-8">
                        <p className="text-foreground-dark mb-2">
                          "IndexNine didn't just meet our expectations; they
                          shattered them. Reducing our regression time to 30
                          minutes has fundamentally changed how we build and
                          ship product. They are true partners in quality."
                        </p>
                        <span className="text-sm text-foreground-dark/70 font-medium">
                          — CTO, Tripjack
                        </span>
                      </div>
                    </blockquote>
                    <div className="mt-6">
                      <Button variant="btnPrimary" size="lg" asChild>
                        <Link to="/insights/case-studies/tripjack">
                          Read Full Tripjack Case Study
                          <ArrowRight className="h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      {/* QAE Solutions in Action & Proprietary Automation Platforms */}
      <section
        id="qae-solutions"
        className={`py-24 lg:py-32 relative  overflow-hidden ${styles.pageDarkBg}`}
      >
        <div className="container mx-auto px-6">
          <div className="max-w-8xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold mb-6 text-foreground-white">
                <span className="leading-[1.4]">QAE Solutions in Action</span>
              </h2>
              <p className="text-lg text-foreground-light-muted max-w-4xl mx-auto">
                Powered by our proprietary automation platforms, purpose-built
                internally to accelerate implementation and maximize ROI.
              </p>
            </div>

            {/* Proprietary Automation Platforms */}
            <div className="mb-16">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-semibold text-foreground mb-4">
                  Our Proprietary Automation Accelerators
                </h3>
                <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
                  We augment our strategic services with proprietary platforms
                  designed to accelerate results and provide unparalleled
                  visibility into your application's quality.
                </p>
              </div>

              <div className="grid lg:grid-cols-2 gap-6 max-w-5xl mx-auto">
                <Card className="relative overflow-hidden bg-gradient-card-light border border-[#ffffff39] rounded-2xl p-8 lg:p-10 hover:border-brand-primary/30 transition-all duration-500 transform hover:scale-102 hover:-translate-y-2 animate-fade-in group bg-white-600 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-20">
                  <CardContent className="p-0">
                    <div
                      className={`relative w-20 h-20 flex mb-6 items-center justify-center transition-all ${styles.icnBg}`}
                    >
                      {" "}
                      <Zap className="h-8 w-8 text-brand-purple" />
                    </div>
                    <h4 className="text-2xl font-semibold mb-4 text-foreground-light">
                      snap.automate
                    </h4>
                    <p className="text-foreground-light-muted mb-6">
                      Our flagship, AI-assisted test automation platform that
                      enables rapid script creation, self-healing tests, and
                      comprehensive reporting dashboards for end-to-end testing.
                    </p>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-brand-purple mt-0.5 flex-shrink-0" />
                        <span className="text-foreground-light-muted">
                          AI-assisted test creation and maintenance
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-brand-purple mt-0.5 flex-shrink-0" />
                        <span className="text-foreground-light-muted">
                          Intelligent test orchestration and optimization
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-brand-purple mt-0.5 flex-shrink-0" />
                        <span className="text-foreground-light-muted">
                          Real-time insights and actionable reports
                        </span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="relative overflow-hidden bg-gradient-card-light border border-[#ffffff39] rounded-2xl p-8 lg:p-10 hover:border-brand-primary/30 transition-all duration-500 transform hover:scale-102 hover:-translate-y-2 animate-fade-in group bg-white-600 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-20">
                  <CardContent className="p-0">
                    <div
                      className={`relative w-20 h-20 flex mb-6 items-center justify-center transition-all ${styles.icnBg}`}
                    >
                      {" "}
                      <Target className="h-8 w-8 text-brand-purple" />
                    </div>
                    <h4 className="text-2xl font-semibold mb-4 text-foreground-light">
                      snap.atomicqa
                    </h4>
                    <p className="text-foreground-light-muted mb-6">
                      A component-level testing platform designed for
                      'shift-left'. It allows developers to test individual
                      components and APIs in isolation, catching bugs at the
                      earliest possible stage.
                    </p>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-brand-purple mt-0.5 flex-shrink-0" />
                        <span className="text-foreground-light-muted">
                          Component-level test automation
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-brand-purple mt-0.5 flex-shrink-0" />
                        <span className="text-foreground-light-muted">
                          Continuous integration and deployment support
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-brand-purple mt-0.5 flex-shrink-0" />
                        <span className="text-foreground-light-muted">
                          Micro-service testing capabilities
                        </span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Real-world Applications */}
            <div className="pt-8">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-semibold text-foreground my-4">
                  Real-World Applications
                </h3>
                <p className="text-lg text-foreground-muted max-w-2xl mx-auto">
                  How our proprietary platforms deliver measurable results
                  across different scenarios.
                </p>
              </div>

              <div className="grid lg:grid-cols-2 gap-6 max-w-5xl mx-auto">
                <Card className="relative overflow-hidden bg-gradient-card-light border border-[#ffffff39] rounded-2xl p-8 lg:p-10 hover:border-brand-primary/30 transition-all duration-500 transform hover:scale-102 hover:-translate-y-2 animate-fade-in group bg-white-600 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-20">
                  <CardContent className="p-0">
                    <h4 className="text-2xl font-semibold mb-4 text-foreground-light">
                      E-commerce Platform Testing
                    </h4>
                    <p className="text-foreground-light-muted mb-6">
                      Comprehensive testing strategy for a high-traffic retail
                      platform using snap.automate, ensuring seamless user
                      experience during peak shopping periods.
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-brand-purple flex-shrink-0" />
                        <span className="text-foreground-light font-medium">
                          99.9% uptime achieved
                        </span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-brand-purple flex-shrink-0" />
                        <span className="text-foreground-light font-medium">
                          40% faster test execution
                        </span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-brand-purple flex-shrink-0" />
                        <span className="text-foreground-light font-medium">
                          60% reduction in production bugs
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="relative overflow-hidden bg-gradient-card-light border border-[#ffffff39] rounded-2xl p-8 lg:p-10 hover:border-brand-primary/30 transition-all duration-500 transform hover:scale-102 hover:-translate-y-2 animate-fade-in group bg-white-600 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-20">
                  <CardContent className="p-0">
                    <h4 className="text-2xl font-semibold mb-4 text-foreground-light">
                      Financial Services Automation
                    </h4>
                    <p className="text-foreground-light-muted mb-6">
                      End-to-end automation suite using snap.atomicqa for a
                      fintech application, covering security, performance, and
                      regulatory compliance testing.
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-brand-purple flex-shrink-0" />
                        <span className="text-foreground-light font-medium">
                          100% regulatory compliance
                        </span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-brand-purple flex-shrink-0" />
                        <span className="text-foreground-light font-medium">
                          50% faster release cycles
                        </span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-brand-purple flex-shrink-0" />
                        <span className="text-foreground-light font-medium">
                          Zero security incidents
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* QAE Consulting Section */}
      <section
        id="qae-consulting"
        className="py-24 lg:py-32 bg-[#fff] relative overflow-hidden"
      >
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold mb-6 text-foreground-dark">
                Our Strategic QE Services
              </h2>
              <p className="text-lg text-foreground-dark/80 max-w-3xl mx-auto">
                We offer tangible, fixed-scope engagements designed to deliver
                immediate value and provide a clear path to modernizing your
                quality engineering practices.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <Card className="p-8 bg-[#fff] border-card-border shadow-lg hover:shadow-xl transition-all duration-300 relative text-foreground-dark flex flex-col">
                <CardContent className="p-0 h-full">
                  <h3 className="text-2xl font-semibold mb-4 text-foreground-dark">
                    Sprint 0: Automation Kickstart
                  </h3>
                  <p className="text-foreground-dark/80 mb-6">
                    A 2-week intensive engagement to build and deliver a working
                    Proof-of-Concept for your most critical user flow.
                  </p>
                  <h4 className="font-semibold text-foreground-dark mb-3">
                    Deliverables:
                  </h4>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-brand-purple mt-0.5 flex-shrink-0" />
                      <span className="text-foreground-dark/80">
                        Working automated test suite for one key feature
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-brand-purple mt-0.5 flex-shrink-0" />
                      <span className="text-foreground-dark/80">
                        Setup of a modern test framework (e.g., Playwright)
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-brand-purple mt-0.5 flex-shrink-0" />
                      <span className="text-foreground-dark/80">
                        Integration into your CI/CD pipeline
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-brand-purple mt-0.5 flex-shrink-0" />
                      <span className="text-foreground-dark/80">
                        Live demo and team handoff
                      </span>
                    </li>
                  </ul>
                  <div className="text-lg font-semibold text-brand-primary mb-4">
                    Investment: Starting at $15,000
                  </div>
                </CardContent>
                <Button
                  className="w-full"
                  variant="btnPrimary"
                  onClick={() => {
                    window.open(
                      "https://calendly.com/vaughn-soratos-indexnine",
                      "_blank"
                    );
                  }}
                >
                  Kickstart Your Automation
                </Button>
              </Card>

              <Card className="p-8 bg-[#000000] border-card-border shadow-lg hover:shadow-xl transition-all duration-300 relative flex flex-col">
                <CardContent className="p-0 h-full">
                  <h3 className="text-2xl font-semibold mb-4 text-foreground">
                    Agile Product Quality (APQ) Roadmap
                  </h3>
                  <p className="text-foreground/80 mb-6">
                    A 4-week strategic assessment to analyze your entire SDLC
                    and deliver a comprehensive roadmap for achieving
                    elite-level quality and velocity.
                  </p>
                  <h4 className="font-semibold text-foreground mb-3">
                    Deliverables:
                  </h4>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-brand-purple mt-0.5 flex-shrink-0" />
                      <span className="text-foreground/80">
                        Full QE process and tooling audit
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-brand-purple mt-0.5 flex-shrink-0" />
                      <span className="text-foreground/80">
                        Risk analysis and test coverage gap identification
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-brand-purple mt-0.5 flex-shrink-0" />
                      <span className="text-foreground/80">
                        Prioritized automation strategy
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-brand-purple mt-0.5 flex-shrink-0" />
                      <span className="text-foreground/80">
                        Detailed implementation plan with ROI projections
                      </span>
                    </li>
                  </ul>
                  <div className="text-lg font-semibold text-brand-primary mb-4">
                    Investment: Starting at $30,000
                  </div>
                </CardContent>
                <Button
                  className="w-full "
                  variant="btnSecondary"
                  onClick={() => {
                    window.open(
                      "https://calendly.com/vaughn-soratos-indexnine",
                      "_blank"
                    );
                  }}
                >
                  Build My APQ Roadmap
                </Button>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Frameworks Comparison Section */}
      <section
        id="qae-frameworks"
        className="pb-24 lg:pb-32 relative bg-[#fff] overflow-hidden"
      >
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-6xl sm:text-4xl lg:text-5xl font-semibold mb-6 text-foreground-dark leading-[1.25]">
                The Right Tool for the Job:
                <div className="text-brand-primary leading-[1.25]">
                  Robot Framework vs. Playwright
                </div>
              </h2>
              <p className="text-lg text-foreground-dark-muted max-w-6xl mx-auto">
                In today's competitive landscape, the pressure to balance
                quality, velocity, and cost is relentless. Cutting corners on
                Quality Assurance (QA) isn't an option when your product's
                reputation is on the line, but slow release cycles and rising
                technical debt can sink you before you find product-market fit.
              </p>
              <p className="text-lg text-foreground-dark-muted max-w-6xl mx-auto mt-4">
                The good news? The days of wrestling with the flaky tests and
                cross-browser nightmares of legacy frameworks are over. Two
                modern titans have emerged to address these pains: Robot
                Framework and Playwright. They deliver the speed, reliability,
                and developer-friendliness that modern quality engineering
                services have been missing.
              </p>
            </div>

            <div className="overflow-x-auto">
              <div className="relative overflow-hidden bg-gradient-card-light border border-[#ffffff39] rounded-2xl hover:shadow-glass-sm transition-all duration-500 animate-fade-in group">
                <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/8 via-transparent to-brand-purple/8 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-white/10 rounded-2xl opacity-50"></div>
                <table className="relative w-full border-collapse rounded-lg overflow-hidden">
                  <thead>
                    <tr className="bg-brand-primary/10">
                      <th className="text-left p-4 font-semibold text-foreground-dark">
                        Feature
                      </th>
                      <th className="text-center p-4 font-semibold text-foreground-dark">
                        Robot Framework
                      </th>
                      <th className="text-center p-4 font-semibold text-foreground-dark">
                        Playwright
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      {
                        feature: "Learning Curve",
                        robot: "Low - Keyword-driven, business-friendly",
                        playwright:
                          "Medium - Requires JavaScript/TypeScript knowledge",
                      },
                      {
                        feature: "Team Collaboration",
                        robot:
                          "Excellent - Non-technical team members can contribute",
                        playwright: "Good - Developer-focused",
                      },
                      {
                        feature: "Performance",
                        robot: "Good - Suitable for most use cases",
                        playwright: "Excellent - Modern, fast execution",
                      },
                      {
                        feature: "Browser Support",
                        robot: "Good - Multiple browser support",
                        playwright: "Excellent - Native modern browser support",
                      },
                      {
                        feature: "Maintenance",
                        robot: "Easy - Readable, maintainable tests",
                        playwright: "Medium - Requires technical expertise",
                      },
                      {
                        feature: "Reporting",
                        robot: "Excellent - Rich, detailed reports",
                        playwright: "Good - Developer-friendly reports",
                      },
                    ].map((row, index) => (
                      <tr
                        key={index}
                        className={
                          index % 2 === 0 ? "bg-white" : "bg-[#f8f8f8]"
                        }
                      >
                        <td className="p-4 font-medium text-foreground-dark">
                          {row.feature}
                        </td>
                        <td className="p-4 text-center text-foreground-dark-muted">
                          {row.robot}
                        </td>
                        <td className="p-4 text-center text-foreground-dark-muted">
                          {row.playwright}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <div className="text-center mt-8">
              <Button variant="btnPrimary" asChild>
                <a
                  href="/insights/blogs/robot-framework-vs-playwright"
                  className="no-underline"
                >
                  Read Full Comparison Blog
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <div className="pb-24 lg:pb-32 bg-gradient-to-b from-[#fff] via-[#F1F2FF] to-[#F1F2FF] relative overflow-hidden">
        {/* Partner Section */}
        <div className="text-center">
          <h2 className="text-6xl sm:text-4xl lg:text-5xl font-semibold mb-6 text-foreground-dark">
            Don't Settle for "Good Enough":
            <br />
            <span className="text-brand-primary leading-[1.25]">
              A Partner in Quality Engineering
            </span>
          </h2>
          <p className="text-lg text-foreground-dark-muted mb-8 max-w-6xl mx-auto leading-relaxed">
            Choosing not to leverage modern test automation services is actively
            costing your business—in slower releases, developer frustration,
            higher bug-fixing expenses, and lost customers. But a powerful tool
            is only as good as the artisan wielding it.
          </p>
          <p className="text-lg text-foreground-dark-muted mb-8 max-w-6xl mx-auto leading-relaxed">
            Before a single line of code is written, our Sprint 0 process lays
            the critical groundwork. We dive deep to understand your product,
            workflows, and business goals to build an automation strategy that
            is technically sound and perfectly aligned with your objectives.
          </p>
          <div className="max-w-6xl mx-auto mb-8">
            <h3 className="text-xl font-semibold mb-6 text-foreground-dark">
              This is how we execute:
            </h3>

            <div className="grid md:grid-cols-3 gap-6 ">
              <Card className="relative  bg-gradient-card-light border border-[#00039] rounded-2xl p-6 hover:border-brand-primary/30 transition-all duration-500 transform hover:scale-102 hover:-translate-y-2 animate-fade-in group ">
                <CardContent className="p-0 text-left">
                  <div
                    className={`relative w-20 h-20 flex mb-6 items-center justify-center transition-all ${styles.icnBg}`}
                  >
                    <NotepadText className="h-8 w-8 text-brand-purple" />
                  </div>
                  <h4 className="text-2xl font-semibold mb-4 text-foreground-dark">
                    Strategize
                  </h4>
                  <p className="text-foreground-dark-muted">
                    Through our APQ assessment, we tailor the right framework—be
                    it Robot, Playwright, or a hybrid—to your specific needs.
                  </p>
                </CardContent>
              </Card>
              <Card className="relative  bg-gradient-card-light border border-[#00039] rounded-2xl p-6 hover:border-brand-primary/30 transition-all duration-500 transform hover:scale-102 hover:-translate-y-2 animate-fade-in group ">
                <CardContent className="p-0 text-left">
                  <div
                    className={`relative w-20 h-20 flex mb-6 items-center justify-center transition-all ${styles.icnBg}`}
                  >
                    <CalendarCheck2 className="h-8 w-8 text-brand-purple" />
                  </div>
                  <h4 className="text-2xl font-semibold mb-4 text-foreground-dark">
                    Execute
                  </h4>
                  <p className="text-foreground-dark-muted">
                    We build efficient, maintainable automation suites and
                    integrate them into your DevOps lifecycle, aiming for over
                    90% automation.
                  </p>
                </CardContent>
              </Card>
              <Card className="relative  bg-gradient-card-light border border-[#00039] rounded-2xl p-6 hover:border-brand-primary/30 transition-all duration-500 transform hover:scale-102 hover:-translate-y-2 animate-fade-in group ">
                <CardContent className="p-0 text-left">
                  <div
                    className={`relative w-20 h-20 flex mb-6 items-center justify-center transition-all ${styles.icnBg}`}
                  >
                    {" "}
                    <Zap className="h-8 w-8 text-brand-purple" />
                  </div>
                  <h4 className="text-2xl font-semibold mb-4 text-foreground-dark">
                    Empower
                  </h4>
                  <p className="text-foreground-dark-muted">
                    We ensure your team can confidently manage and scale your QA
                    efforts for the long term.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
      {/* Final CTA Section with Form */}
      <section
        id="contact"
        className={`py-24 lg:py-32 text-white ${styles.ctaBg}`}
      >
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold mb-6 text-foreground-white">
                <span className="leading-[1.4]">
                  Ready to Transform Your QA Process?
                </span>
              </h2>
              <p className="text-lg text-foreground-white/80 mb-8 leading-relaxed max-w-4xl mx-auto">
                Let's discuss your quality challenges and build a value-driven
                roadmap to accelerate your releases and build more reliable
                software. Schedule a complimentary, no-obligation call with a
                senior QE architect today.
              </p>
              <Button type="submit" size="lg" variant="btnSecondary">
                Book My APQ Roadmap Session
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-6xl sm:text-4xl lg:text-5xl font-semibold mb-6 text-foreground-dark ">
                <span className="leading-[1.25]">
                  Your Quality Engineering Questions, Answered
                </span>
              </h2>
            </div>

            <div className="space-y-0 rounded-3xl bg-[#fff] px-8 py-4">
              {faqData.map((faq, index) => (
                <div
                  key={index}
                  className="border-b border-border last:border-b-0 bg-background-card-light"
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full  py-4 text-left flex justify-between items-center hover:bg-muted/20  transition-colors"
                    aria-expanded={openFAQ === index}
                  >
                    <span className="font-semibold text-foreground-dark pr-4">
                      {faq.question}
                    </span>
                    {openFAQ === index ? (
                      <ChevronUp className="h-5 w-5 text-[#000] flex-shrink-0" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-[#000] flex-shrink-0" />
                    )}
                  </button>
                  {openFAQ === index && (
                    <div className="pb-4">
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

      <Footer />
    </div>
  );
};

export default QualityEngineering;
