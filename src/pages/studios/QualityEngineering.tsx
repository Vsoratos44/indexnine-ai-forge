import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Settings, Zap, Target, Award, Plus, Minus } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LivingVoidBackground from "@/components/LivingVoidBackground";
import { SEOStructuredData, OrganizationSchema, WebPageSchema, ServiceSchema, BreadcrumbSchema } from "@/components/SEOStructuredData";

const QualityEngineering = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  
  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const faqData = [
    {
      question: "How does this integrate with our existing development team?",
      answer: "Our model is collaborative. We work within your existing agile process, integrating directly with your developers in their environment (e.g., GitHub, Jira). Our goal is to empower your team by building systems they can own and extend long-term."
    },
    {
      question: "What is the typical ROI on a test automation project?",
      answer: "ROI is measured in several ways: reduced manual testing hours, decreased bug-fixing costs (by catching them earlier), and increased development velocity. During an APQ Roadmap, we build a specific ROI model based on your metrics to justify the investment."
    },
    {
      question: "How long does it take to see results from test automation?",
      answer: "With our Sprint 0 approach, you'll see working automation within 2 weeks. Measurable ROI typically appears within 3-6 months as the automated tests accumulate saved hours and prevent costly production bugs."
    },
    {
      question: "Do you support legacy systems and older technologies?",
      answer: "Yes. Our platforms are designed to work with both modern and legacy systems. We often help companies bridge the gap between old and new technology stacks while maintaining comprehensive test coverage."
    }
  ];

  return (
    <div className="min-h-screen bg-background-dark">
      {/* SEO Head Elements */}
      <title>Quality Engineering & Test Automation | IndexNine QE Studio</title>
      <meta name="description" content="Move beyond testing to engineered quality. IndexNine delivers outcome-driven test automation and strategic quality engineering to help you release mission-critical software with speed and confidence." />
      <link rel="canonical" href="https://www.indexnine.com/studios/quality-engineering" />
      
      {/* Open Graph Meta Tags */}
      <meta property="og:title" content="Quality Engineering & Test Automation | IndexNine QE Studio" />
      <meta property="og:description" content="Build reliable, mission-critical software faster with our strategic test automation and quality engineering services." />
      <meta property="og:image" content="https://www.indexnine.com/images/og-quality-engineering.png" />
      <meta property="og:url" content="https://www.indexnine.com/studios/quality-engineering" />
      <meta property="og:type" content="website" />
      
      {/* Twitter Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Quality Engineering & Test Automation | IndexNine QE Studio" />
      <meta name="twitter:description" content="Build reliable, mission-critical software faster with our strategic test automation and quality engineering services." />
      <meta name="twitter:image" content="https://www.indexnine.com/images/twitter-quality-engineering.png" />

      {/* Structured Data */}
      <ServiceSchema 
        name="Enterprise Quality Engineering and Test Automation"
        description="IndexNine's Quality Engineering Studio provides strategic services including test automation, performance testing, and Agile Product Quality (APQ) roadmaps to ensure the reliability of mission-critical software."
        serviceType="Quality Engineering"
      />
      
      <BreadcrumbSchema 
        items={[
          { name: "Studios", url: "https://www.indexnine.com/studios" },
          { name: "Quality Engineering", url: "https://www.indexnine.com/studios/quality-engineering" }
        ]}
      />

      <Header />

      {/* Hero Section */}
      <section className="relative min-h-[400px] md:min-h-[500px] overflow-hidden bg-background-dark">
        {/* Three.js Living Void Background */}
        <LivingVoidBackground />

        {/* Content - Precisely positioned */}
        <div className="relative z-10 container mx-auto px-6 lg:px-8 pt-24 md:pt-32 pb-8 md:pb-16">
          <div className="max-w-5xl mx-auto text-center lg:text-left">
            <div className="mb-6">
              <span className="inline-block px-6 py-3 bg-brand-primary/10 text-brand-primary rounded-full text-sm font-medium border border-brand-primary/20 backdrop-blur-sm">
                IndexNine QAE
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight tracking-tight animate-fade-in">
              Beyond Testing: <br />
              <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
                Engineering Quality
              </span>
              <br />
              for Mission-Critical Software
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-white/90 mb-8 max-w-4xl leading-relaxed font-light animate-slide-up">
              We deliver enterprise-grade quality engineering and outcome-driven test automation to help startups and enterprises alike ship reliable products faster and with confidence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-scale-in">
              <Button variant="hero" size="xl" className="min-w-[280px]">
                Get Your APQ Roadmap
              </Button>
              <Button
                variant="hero-secondary"
                size="xl"
                className="min-w-[240px]"
              >
                See Our Impact
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Quality Dilemma Section */}
      <section className="py-12 bg-background-alternate">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
              The Quality Dilemma: Balancing Speed, Cost, and Reliability
            </h2>
            <p className="text-lg text-foreground/80 mb-8 max-w-3xl mx-auto leading-relaxed">
              In a competitive market, pressure to innovate has never been higher. Development teams are forced to move faster, but without a modern approach to quality, this leads to brittle tests, rising bug counts, and eroded customer trust. Manual testing can't keep up, and traditional automation often creates more maintenance overhead than it saves.
            </p>
          </div>
        </div>
      </section>

      {/* QAE Blueprint Section */}
      <section
        id="qae-solution"
        className="py-12 bg-background-dark text-foreground"
      >
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
                The Outcome-Driven Automation Blueprint
              </h2>
              <p className="text-lg text-foreground/80 max-w-3xl mx-auto">
                Our philosophy is that quality isn't a phase, it's a measurable outcome. We transform your QE practice from a cost center into a strategic enabler of speed and reliability with our proven, three-step methodology.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
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
                <div key={item.step} className="relative overflow-hidden bg-gradient-card-light border border-[#ffffff39] rounded-2xl p-8 hover:shadow-glass-sm transition-all duration-500 transform hover:scale-102 hover:-translate-y-2 animate-fade-in group text-center">
                  <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/8 via-transparent to-brand-purple/8 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-white/10 rounded-2xl opacity-50"></div>
                  <div className="relative w-16 h-16 bg-brand-purple rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-white font-bold text-lg">
                      {item.step}
                    </span>
                  </div>
                  <h3 className="relative text-xl font-bold mb-4 text-foreground">
                    {item.title}
                  </h3>
                  <p className="relative text-foreground/80">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* QAE Case Study Section */}
      <section id="qae-case-study" className="py-16 bg-background-alternate">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="mb-6">
              <span className="inline-block px-4 py-2 bg-brand-purple/10 text-brand-purple rounded-full text-sm font-medium">
                Case Study: Outcome-Based Automation
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-foreground">
              Enabling Velocity for a High-Growth FinTech
            </h2>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-lg text-foreground/80 mb-6">
                  A rapidly scaling FinTech client was crippled by a 5-day manual regression testing cycle, blocking their ability to release new features. We implemented a comprehensive test automation suite using Robot Framework, tied to a 100% success-fee engagement model.
                </p>
                <blockquote className="border-l-4 border-brand-primary pl-6 mb-8 italic text-lg text-foreground/90">
                  <p className="mb-3">"IndexNine didn't just meet our expectations; they shattered them. Reducing our regression time to 30 minutes has fundamentally changed how we build and ship product. They are true partners in quality."</p>
                  <footer className="text-sm text-foreground/70 font-medium">— CTO, FinTech Client</footer>
                </blockquote>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <Card className="p-6 text-center bg-gradient-card border-card-border shadow-lg">
                  <CardContent className="p-0">
                    <div className="text-3xl font-bold text-brand-purple mb-2">
                      97%
                    </div>
                    <p className="text-sm text-foreground/80">
                      Reduction in Execution Time (5 days to 30 mins)
                    </p>
                  </CardContent>
                </Card>
                <Card className="p-6 text-center bg-gradient-card border-card-border shadow-lg">
                  <CardContent className="p-0">
                    <div className="text-3xl font-bold text-brand-purple mb-2">
                      100%
                    </div>
                    <p className="text-sm text-foreground/80">
                      Success Fee Achieved
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* QAE Solutions in Action & Proprietary Automation Platforms */}
      <section id="qae-solutions" className="py-20 bg-background-section">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground-dark">
                QAE Solutions in Action
              </h2>
              <p className="text-lg text-foreground-dark-muted max-w-3xl mx-auto">
                Powered by our proprietary automation platforms, purpose-built
                internally to accelerate implementation and maximize ROI.
              </p>
            </div>

            {/* Proprietary Automation Platforms */}
            <div className="mb-20">
              <div className="text-center mb-16">
                <h3 className="text-2xl font-bold text-foreground-dark mb-4">
                  Our Proprietary Automation Accelerators
                </h3>
                <p className="text-lg text-foreground-dark/80 max-w-2xl mx-auto">
                  We augment our strategic services with proprietary platforms designed to accelerate results and provide unparalleled visibility into your application's quality.
                </p>
              </div>

              <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
                <Card className="p-8 bg-gradient-card border-card-border shadow-lg hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-0">
                    <div className="w-16 h-16 bg-brand-purple/10 rounded-full flex items-center justify-center mb-6">
                      <Zap className="h-8 w-8 text-brand-purple" />
                    </div>
                    <h4 className="text-2xl font-bold mb-4 text-foreground-light">
                      snap.automate
                    </h4>
                    <p className="text-foreground-light-muted mb-6">
                      Our flagship, AI-assisted test automation platform that enables rapid script creation, self-healing tests, and comprehensive reporting dashboards for end-to-end testing.
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

                <Card className="p-8 bg-gradient-card border-card-border shadow-lg hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-0">
                    <div className="w-16 h-16 bg-brand-purple/10 rounded-full flex items-center justify-center mb-6">
                      <Target className="h-8 w-8 text-brand-purple" />
                    </div>
                    <h4 className="text-2xl font-bold mb-4 text-foreground-light">
                      snap.atomicqa
                    </h4>
                    <p className="text-foreground-light-muted mb-6">
                      A component-level testing platform designed for 'shift-left'. It allows developers to test individual components and APIs in isolation, catching bugs at the earliest possible stage.
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
            <div>
              <div className="text-center mb-16">
                <h3 className="text-2xl font-bold text-foreground-dark mb-4">
                  Real-World Applications
                </h3>
                <p className="text-lg text-foreground-dark-muted max-w-2xl mx-auto">
                  How our proprietary platforms deliver measurable results
                  across different scenarios.
                </p>
              </div>

              <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
                <Card className="p-8 bg-gradient-card border-card-border shadow-lg hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-0">
                    <h4 className="text-2xl font-bold mb-4 text-foreground-light">
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

                <Card className="p-8 bg-gradient-card border-card-border shadow-lg hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-0">
                    <h4 className="text-2xl font-bold mb-4 text-foreground-light">
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
      <section id="qae-consulting" className="py-16 bg-secondary/100">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground-dark">
                Our Strategic QE Services
              </h2>
              <p className="text-lg text-foreground-dark/80 max-w-3xl mx-auto">
                We offer tangible, fixed-scope engagements designed to deliver immediate value and provide a clear path to modernizing your quality engineering practices.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              <Card className="p-8 bg-background-card-light border-border shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-0">
                  <h3 className="text-2xl font-bold mb-4 text-foreground-dark">
                    Sprint 0: Automation Kickstart
                  </h3>
                  <p className="text-foreground-dark/80 mb-6">
                    A 2-week intensive engagement to build and deliver a working Proof-of-Concept for your most critical user flow.
                  </p>
                  <h4 className="font-semibold text-foreground-dark mb-3">Deliverables:</h4>
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
                  <div className="text-lg font-semibold text-brand-primary mb-4">Investment: Starting at $15,000</div>
                  <Button className="w-full rounded-full">Kickstart Your Automation</Button>
                </CardContent>
              </Card>

              <Card className="p-8 bg-background-card-light border-border shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-0">
                  <h3 className="text-2xl font-bold mb-4 text-foreground-dark">
                    Agile Product Quality (APQ) Roadmap
                  </h3>
                  <p className="text-foreground-dark/80 mb-6">
                    A 4-week strategic assessment to analyze your entire SDLC and deliver a comprehensive roadmap for achieving elite-level quality and velocity.
                  </p>
                  <h4 className="font-semibold text-foreground-dark mb-3">Deliverables:</h4>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-brand-purple mt-0.5 flex-shrink-0" />
                      <span className="text-foreground-dark/80">
                        Full QE process and tooling audit
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-brand-purple mt-0.5 flex-shrink-0" />
                      <span className="text-foreground-dark/80">
                        Risk analysis and test coverage gap identification
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-brand-purple mt-0.5 flex-shrink-0" />
                      <span className="text-foreground-dark/80">
                        Prioritized automation strategy
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-brand-purple mt-0.5 flex-shrink-0" />
                      <span className="text-foreground-dark/80">
                        Detailed implementation plan with ROI projections
                      </span>
                    </li>
                  </ul>
                  <div className="text-lg font-semibold text-brand-primary mb-4">Investment: Starting at $30,000</div>
                  <Button className="w-full rounded-full">Build My APQ Roadmap</Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Frameworks Comparison Section */}
      <section id="qae-frameworks" className="py-16 bg-background-section">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground-dark">
                The Right Tool for the Job: Robot Framework vs. Playwright
              </h2>
              <p className="text-lg text-foreground-dark-muted max-w-3xl mx-auto">
                Choosing a test automation framework is a strategic decision
                that impacts long-term success. We help you make the right
                choice based on your specific needs.
              </p>
            </div>

            <div className="overflow-x-auto">
              <div className="relative overflow-hidden bg-gradient-card-light border border-[#ffffff39] rounded-2xl hover:shadow-glass-sm transition-all duration-500 animate-fade-in group">
                <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/8 via-transparent to-brand-purple/8 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-white/10 rounded-2xl opacity-50"></div>
                <table className="relative w-full border-collapse rounded-lg overflow-hidden">
                  <thead>
                    <tr className="bg-brand-primary/10">
                      <th className="text-left p-4 font-semibold text-foreground-dark border-b border-black">
                        Feature
                      </th>
                      <th className="text-center p-4 font-semibold text-foreground-dark border-b border-l border-black">
                        Robot Framework
                      </th>
                      <th className="text-center p-4 font-semibold text-foreground-dark border-b border-l border-black">
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
                      <tr key={index} className="border-b border-black">
                        <td className="p-4 font-medium text-foreground-dark">
                          {row.feature}
                        </td>
                        <td className="p-4 text-center text-foreground-dark-muted border-l border-black">
                          {row.robot}
                        </td>
                        <td className="p-4 text-center text-foreground-dark-muted border-l border-black">
                          {row.playwright}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <div className="text-center mt-8">
              <Button variant="hero" asChild className="inline-flex items-center gap-2">
                <a href="/insights/blogs/robot-framework-vs-playwright-automation" className="no-underline">
                  Read Full Comparison Blog
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-muted/10">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground-dark">
                Your Quality Engineering Questions, Answered
              </h2>
            </div>
            
            <div className="space-y-4">
              {faqData.map((faq, index) => (
                <div key={index} className="border border-border rounded-lg bg-background-card-light">
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-muted/20 transition-colors"
                    aria-expanded={openFAQ === index}
                  >
                    <span className="font-semibold text-foreground-dark pr-4">{faq.question}</span>
                    {openFAQ === index ? (
                      <Minus className="h-5 w-5 text-brand-primary flex-shrink-0" />
                    ) : (
                      <Plus className="h-5 w-5 text-brand-primary flex-shrink-0" />
                    )}
                  </button>
                  {openFAQ === index && (
                    <div className="px-6 pb-4">
                      <p className="text-foreground-dark/80 leading-relaxed">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section with Form */}
      <section id="contact" className="py-20 bg-background-dark">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
                  Ready to Transform Your QA Process?
                </h2>
                <p className="text-xl mb-8 text-foreground/85 leading-relaxed">
                  Let's discuss your quality challenges and build a value-driven roadmap to accelerate your releases and build more reliable software. Schedule a complimentary, no-obligation call with a senior QE architect today.
                </p>
              </div>
              
              <div className="bg-muted/5 p-8 rounded-lg border border-border">
                <form className="space-y-6" action="/submit-qe-lead" method="POST">
                  <div>
                    <Label htmlFor="name" className="text-foreground">Full Name</Label>
                    <Input 
                      type="text" 
                      id="name" 
                      name="name" 
                      required 
                      className="mt-2 bg-background-card-light border-border text-foreground"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="email" className="text-foreground">Work Email</Label>
                    <Input 
                      type="email" 
                      id="email" 
                      name="email" 
                      required 
                      className="mt-2 bg-background-card-light border-border text-foreground"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="challenge" className="text-foreground">What is your primary quality challenge?</Label>
                    <Textarea 
                      id="challenge" 
                      name="challenge" 
                      rows={4}
                      className="mt-2 bg-background-card-light border-border text-foreground"
                    />
                  </div>
                  
                  <Button type="submit" className="w-full" size="lg">
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
