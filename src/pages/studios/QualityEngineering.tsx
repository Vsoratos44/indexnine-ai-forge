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
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LivingVoidBackground from "@/components/LivingVoidBackground";
import {
  SEOStructuredData,
  OrganizationSchema,
  WebPageSchema,
  ServiceSchema,
  BreadcrumbSchema,
} from "@/components/SEOStructuredData";
import QuoteIcon from "../../assets/images/quote.svg";
import styles from "../../assets/css/stylesheet.module.css";

const QualityEngineering = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

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
      {/* SEO Head Elements */}
      <title>Quality Engineering & Test Automation | IndexNine QE Studio</title>
      <meta
        name="description"
        content="Move beyond testing to engineered quality. IndexNine delivers outcome-driven test automation and strategic quality engineering to help you release mission-critical software with speed and confidence."
      />
      <link
        rel="canonical"
        href="https://www.indexnine.com/studios/quality-engineering"
      />

      {/* Open Graph Meta Tags */}
      <meta
        property="og:title"
        content="Quality Engineering & Test Automation | IndexNine QE Studio"
      />
      <meta
        property="og:description"
        content="Build reliable, mission-critical software faster with our strategic test automation and quality engineering services."
      />
      <meta
        property="og:image"
        content="https://www.indexnine.com/images/og-quality-engineering.png"
      />
      <meta
        property="og:url"
        content="https://www.indexnine.com/studios/quality-engineering"
      />
      <meta property="og:type" content="website" />

      {/* Twitter Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta
        name="twitter:title"
        content="Quality Engineering & Test Automation | IndexNine QE Studio"
      />
      <meta
        name="twitter:description"
        content="Build reliable, mission-critical software faster with our strategic test automation and quality engineering services."
      />
      <meta
        name="twitter:image"
        content="https://www.indexnine.com/images/twitter-quality-engineering.png"
      />

      {/* Structured Data */}
      <ServiceSchema
        name="Enterprise Quality Engineering and Test Automation"
        description="IndexNine's Quality Engineering Studio provides strategic services including test automation, performance testing, and Agile Product Quality (APQ) roadmaps to ensure the reliability of mission-critical software."
        serviceType="Quality Engineering"
      />

      <BreadcrumbSchema
        items={[
          { name: "Studios", url: "https://www.indexnine.com/studios" },
          {
            name: "Quality Engineering",
            url: "https://www.indexnine.com/studios/quality-engineering",
          },
        ]}
      />

      <Header />

      {/* Hero Section */}
      <section className="relative min-h-[90vh] overflow-hidden bg-black">
        {/* Three.js Living Void Background */}
        <LivingVoidBackground />

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
              <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
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
              <Button variant="btnPrimary" size="xl" className="min-w-[280px] ">
                Get Your APQ Roadmap
              </Button>
              <Button
                variant="btnSecondary"
                size="xl"
                className="min-w-[240px]  "
              >
                See Our Impact
              </Button>
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
            <p className="text-lg text-foreground-dark mb-8 max-w-3xl mx-auto leading-relaxed">
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
          <section id="qae-solution" className="pb-24 lg:pb-32">
            <div className="container mx-auto px-6">
              <div className="max-w-8xl mx-auto">
                <div className="text-center mb-12">
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold mb-6 text-foreground-dark">
                    The Outcome-Driven Automation Blueprint
                  </h2>
                  <p className="text-lg text-foreground-dark/80 max-w-3xl mx-auto">
                    Our philosophy is that quality isn't a phase, it's a
                    measurable outcome. We transform your QE practice from a
                    cost center into a strategic enabler of speed and
                    reliability with our proven, three-step methodology.
                  </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                  {[
                    {
                      step: "01",
                      title: "BUILD an AI-Assisted Foundation",
                      description:
                        "We establish a scalable, low-maintenance test automation framework using modern tools and AI-powered test generation, creating a resilient foundation that grows with your product.",
                    },
                    {
                      step: "02",
                      title: "ADOPT Shift-Left Principles",
                      description:
                        "We integrate quality checks early in the development lifecycle ('shifting left'), enabling your developers to catch and fix bugs faster, reducing downstream costs and delays.",
                    },
                    {
                      step: "03",
                      title: "DEPLOY Smart & Efficiently",
                      description:
                        "We implement intelligent test selection and parallel execution strategies, ensuring fast, targeted feedback from your CI/CD pipeline so you can deploy to production with confidence.",
                    },
                  ].map((item) => (
                    <div
                      key={item.step}
                      className="relative overflow-hidden bg-gradient-card-light border border-[#00000019] bg-[#ffffff59] rounded-2xl p-8 hover:shadow-glass-sm transition-all duration-500 transform hover:scale-102 hover:-translate-y-2 animate-fade-in group text-left"
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/8 via-transparent to-brand-purple/8 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/5 via-transparent to-brand-purple/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                      <div className="relative w-20 h-20 border border-brand-purple rounded-xl flex items-center justify-center ml-0 mb-6">
                        <span className="text-brand-purple font-bold text-2xl">
                          {item.step}
                        </span>
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
        className={`py-24 lg:py-32 relative  overflow-hidden ${styles.sectionBg}`}
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

              <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
                <Card className="relative overflow-hidden bg-gradient-card-light border border-[#ffffff39] rounded-2xl p-8 lg:p-10 hover:border-brand-primary/30 transition-all duration-500 transform hover:scale-102 hover:-translate-y-2 animate-fade-in group ">
                  <CardContent className="p-0">
                    <div className="relative bg-gradient-to-br from-brand-primary/20 via-brand-primary/10 to-brand-purple/20 backdrop-blur-md rounded-2xl w-20 h-20 flex items-center justify-center mb-8 border border-brand-primary/30 group-hover:shadow-glow transition-all duration-300 group-hover:scale-110">
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

                <Card className="relative overflow-hidden bg-gradient-card-light border border-[#ffffff39] rounded-2xl p-8 lg:p-10 hover:border-brand-primary/30 transition-all duration-500 transform hover:scale-102 hover:-translate-y-2 animate-fade-in group ">
                  <CardContent className="p-0">
                    <div className="relative bg-gradient-to-br from-brand-primary/20 via-brand-primary/10 to-brand-purple/20 backdrop-blur-md rounded-2xl w-20 h-20 flex items-center justify-center mb-8 border border-brand-primary/30 group-hover:shadow-glow transition-all duration-300 group-hover:scale-110">
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

              <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
                <Card className="relative overflow-hidden bg-gradient-card-light border border-[#ffffff39] rounded-2xl p-8 lg:p-10 hover:border-brand-primary/30 transition-all duration-500 transform hover:scale-102 hover:-translate-y-2 animate-fade-in group ">
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

                <Card className="relative overflow-hidden bg-gradient-card-light border border-[#ffffff39] rounded-2xl p-8 lg:p-10 hover:border-brand-primary/30 transition-all duration-500 transform hover:scale-102 hover:-translate-y-2 animate-fade-in group ">
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

            <div className="grid lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <Card className="p-8 bg-[#fff] border-card-border shadow-lg hover:shadow-xl transition-all duration-300 relative text-foreground-dark">
                <CardContent className="p-0">
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
                  <Button className="w-full" variant="btnPrimary">
                    Kickstart Your Automation
                  </Button>
                </CardContent>
              </Card>

              <Card className="p-8 bg-[#000000] border-card-border shadow-lg hover:shadow-xl transition-all duration-300 relative">
                <CardContent className="p-0">
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
                  <Button className="w-full " variant="btnSecondary">
                    Build My APQ Roadmap
                  </Button>
                </CardContent>
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
              <h2 className="text-6xl sm:text-4xl lg:text-5xl font-semibold mb-6 text-foreground-dark">
                The Right Tool for the Job: <br />
                <span className="text-brand-primary leading-[1.25]">
                  Robot Framework vs. Playwright
                </span>
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
                services have been missing. But the critical question isn't just
                which tool is better—it's which tool is right for your business,
                your team, and your growth stage.
              </p>
              <p className="text-lg text-foreground-dark-muted max-w-6xl mx-auto mt-4">
                At Indexnine, we know it's never just about the tool; it's about
                a tailored QA process improvement strategy and flawless
                execution. Through our Sprint 0 discovery process and Agile
                Product Quality (APQ) Roadmap, we help you build an
                outcome-based automation strategy that turns QA from a
                bottleneck into a velocity enabler.
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
                  href="/insights/blogs/robot-framework-vs-playwright-automation"
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

            {/* Robot Framework Section */}
            <div className="grid lg:grid-cols-2 mt-16 rounded-3xl bg-brand-primary/10 ">
              <div className="p-10 border-r-0 lg:border-r-4 border-[#fff] border-dashed w-full">
                <h3 className="text-2xl md:text-3xl font-semibold mb-6 text-foreground-dark">
                  Robot Framework: The Startup's Secret Weapon
                </h3>
                <p className="text-foreground-dark-muted mb-6">
                  For early-stage startups, agility and resourcefulness are
                  everything. You need to iterate on your MVP quickly without an
                  army of dedicated QA engineers. This is where Robot Framework
                  shines.
                </p>
                <div className="space-y-6">
                  <div>
                    <h4 className="text-xl font-semibold mb-3 text-foreground-dark">
                      Why Robot Framework is a Founder's Best Friend
                    </h4>
                    <div className="space-y-4">
                      <div>
                        <h5 className="font-semibold text-brand-purple mb-2">
                          Human-Readable Syntax
                        </h5>
                        <p className="text-foreground-dark-muted">
                          Its keyword-driven approach is a game-changer. Test
                          cases double as living documentation that product
                          managers and developers can understand, ideal for
                          fostering collaboration.
                        </p>
                      </div>
                      <div>
                        <h5 className="font-semibold text-brand-purple mb-2">
                          Powerful & Extensible Ecosystem
                        </h5>
                        <p className="text-foreground-dark-muted">
                          Built on Python, Robot Framework boasts a rich library
                          ecosystem that can handle web, API testing, and mobile
                          testing, ensuring you can cover all your bases with
                          one tool.
                        </p>
                      </div>
                      <div>
                        <h5 className="font-semibold text-brand-purple mb-2">
                          Cost-Effective & Quick to Ramp Up
                        </h5>
                        <p className="text-foreground-dark-muted">
                          As an open-source tool with a gentle learning curve,
                          it allows your existing team to become productive
                          faster, reducing the need to hire expensive,
                          specialized automation engineers from day one.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <p className="text-foreground-dark-muted mt-6">
                  For our startup clients, our agile product quality assessment
                  often points to Robot Framework when the goal is to establish
                  a scalable, keyword-driven architecture that the whole team
                  can maintain. The business outcome? Your core regression suite
                  is automated in record time, freeing your team to focus on
                  innovation while increasing confidence in every release.
                </p>
              </div>

              {/* Playwright Section */}
              <div className="p-10 w-full">
                <h3 className="text-2xl md:text-3xl font-semibold mb-6 text-foreground-dark">
                  Playwright: The Enterprise Powerhouse
                </h3>
                <p className="text-foreground-dark-muted mb-6">
                  As your startup hits a growth spurt, the game changes. Complex
                  applications, multiple teams, and the demand for a flawless
                  user experience require a framework that is exceptionally
                  robust and fast.
                </p>
                <div className="space-y-6">
                  <div>
                    <h4 className="text-xl font-semibold mb-3 text-foreground-dark">
                      Why Playwright is the Go-To for Scaling Enterprises
                    </h4>
                    <div className="space-y-4">
                      <div>
                        <h5 className="font-semibold text-brand-purple mb-2">
                          Blazing Speed & Ironclad Reliability
                        </h5>
                        <p className="text-foreground-dark-muted">
                          Playwright's modern architecture was built to combat
                          flaky tests. Its intelligent auto-waits and web-first
                          assertions, which automatically retry until conditions
                          are met, drastically improve test stability and
                          execution speed.
                        </p>
                      </div>
                      <div>
                        <h5 className="font-semibold text-brand-purple mb-2">
                          True Cross-Browser Mastery
                        </h5>
                        <p className="text-foreground-dark-muted">
                          Test reliably on Chromium, WebKit (Safari), and
                          Firefox with a single, consistent API. This is
                          critical for ensuring a consistent user experience.
                        </p>
                      </div>
                      <div>
                        <h5 className="font-semibold text-brand-purple mb-2">
                          Developer-Centric Features
                        </h5>
                        <p className="text-foreground-dark-muted">
                          With first-class support for TypeScript, JavaScript,
                          and Python, Playwright meets your developers where
                          they are. Tools like the Playwright Inspector,
                          Codegen, and the Trace Viewer empower engineers to
                          write, debug, and maintain complex tests with
                          unparalleled efficiency.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
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
                  <div className="relative bg-gradient-to-br from-brand-primary/20 via-brand-primary/10 to-brand-purple/20 backdrop-blur-md rounded-2xl w-20 h-20 flex items-center justify-center mb-8 border border-brand-primary/30 group-hover:shadow-glow transition-all duration-300 group-hover:scale-110">
                    <Zap className="h-8 w-8 text-brand-purple" />
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
                  <div className="relative bg-gradient-to-br from-brand-primary/20 via-brand-primary/10 to-brand-purple/20 backdrop-blur-md rounded-2xl w-20 h-20 flex items-center justify-center mb-8 border border-brand-primary/30 group-hover:shadow-glow transition-all duration-300 group-hover:scale-110">
                    <Zap className="h-8 w-8 text-brand-purple" />
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
                  <div className="relative bg-gradient-to-br from-brand-primary/20 via-brand-primary/10 to-brand-purple/20 backdrop-blur-md rounded-2xl w-20 h-20 flex items-center justify-center mb-8 border border-brand-primary/30 group-hover:shadow-glow transition-all duration-300 group-hover:scale-110">
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
        {/* FAQ Section */}
        <section className="py-20 bg-muted/10">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-6xl sm:text-4xl lg:text-5xl font-semibold mb-6 text-foreground-dark">
                  Your Quality Engineering Questions, Answered
                </h2>
              </div>

              <div className="space-y-0 rounded-3xl bg-[#fff] p-8">
                {faqData.map((faq, index) => (
                  <div
                    key={index}
                    className="border-b border-border  bg-background-card-light"
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
                        <Minus className="h-5 w-5 text-brand-primary flex-shrink-0" />
                      ) : (
                        <Plus className="h-5 w-5 text-brand-primary flex-shrink-0" />
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
      </div>
      {/* Final CTA Section with Form */}
      <section id="contact" className="py-24 lg:py-32 bg-gradient-hero">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold mb-6 text-foreground-white">
                  <span className="leading-[1.4]">
                    Ready to Transform Your QA Process?
                  </span>
                </h2>
                <p className="text-lg text-foreground-white/80 mb-8 leading-relaxed">
                  Let's discuss your quality challenges and build a value-driven
                  roadmap to accelerate your releases and build more reliable
                  software. Schedule a complimentary, no-obligation call with a
                  senior QE architect today.
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                <form
                  className="space-y-6"
                  action="/submit-qe-lead"
                  method="POST"
                >
                  <div>
                    <Label
                      htmlFor="name"
                      className="block text-sm font-medium text-foreground-white mb-2"
                    >
                      Full Name
                    </Label>
                    <Input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-foreground-white placeholder-white/60 focus:outline-none focus:border-brand-primary focus:ring-2 focus:ring-brand-primary"
                    />
                  </div>

                  <div>
                    <Label
                      htmlFor="email"
                      className="block text-sm font-medium text-foreground-white mb-2"
                    >
                      Work Email
                    </Label>
                    <Input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-foreground-white placeholder-white/60 focus:outline-none focus:border-brand-primary focus:ring-2 focus:ring-brand-primary"
                    />
                  </div>

                  <div>
                    <Label
                      htmlFor="challenge"
                      className="block text-sm font-medium text-foreground-white mb-2"
                    >
                      What is your primary quality challenge?
                    </Label>
                    <Textarea
                      id="challenge"
                      name="challenge"
                      rows={4}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-foreground-white placeholder-white/60 focus:outline-none focus:border-brand-primary focus:ring-2 focus:ring-brand-primary resize-none"
                    />
                  </div>

                  <Button type="submit" size="lg" variant="btnSecondary">
                    Book My APQ Roadmap Session
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default QualityEngineering;
