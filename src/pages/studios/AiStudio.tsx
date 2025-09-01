import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import styles from "../../assets/css/stylesheet.module.css";

import VelocityIcon from "../../assets/images/accel-velocity.svg";
import StdAudit from "../../assets/images/std-audit.svg";
import ProAudit from "../../assets/images/pro-audit.svg";

import {
  ServiceSchema,
  WebPageSchema,
  BreadcrumbSchema,
} from "@/components/SEOStructuredData";
import {
  Brain,
  Target,
  Shield,
  CheckCircle,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LivingVoidBackground from "@/components/LivingVoidBackground";
import CasesCarousel from "@/components/CasesCarousel";

const AiStudio = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* <ServiceSchema
        name="AI Strategy & Custom Solutions | IndexNine AI Studio"
        description="Go from AI potential to business reality. IndexNine's AI Studio provides strategic consulting, readiness assessments (P2R Score), and end-to-end development of custom AI/ML solutions that deliver measurable ROI."
        serviceType="AI Development"
      />
      <WebPageSchema
        title="AI Strategy & Custom Solutions | IndexNine AI Studio"
        description="We partner with you to develop and deploy custom AI solutions that solve real business problems and deliver transformative results."
        url="https://indexnine.com/studios/ai"
      />
      <BreadcrumbSchema
        items={[
          { name: "Studios", url: "https://indexnine.com/studios" },
          {
            name: "AI Studio",
            url: "https://indexnine.com/studios/ai",
          },
        ]}
      /> */}
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-[780px] overflow-hidden bg-black">
        {/* Three.js Living Void Background */}
        <LivingVoidBackground />

        {/* Content - Precisely positioned */}
        <div className="relative z-10 container mx-auto px-6 pt-48 pb-24">
          <div className="max-w-5xl mx-auto text-center lg:text-left ml-0">
            <div className="mb-6">
              <span className="inline-block px-6 py-3 bg-brand-primary/10 text-brand-primary rounded-full text-sm font-medium border border-brand-primary/20 backdrop-blur-sm">
                AI & ML Engineering Studio
              </span>
            </div>
            <h1 className="text-[2.5rem] sm:text-[3rem] lg:text-[4rem] xl:text-[4rem] font-semibold text-foreground mb-6 leading-[1.25]  animate-fade-in font-montserrat">
              AI-Powered Business <br />
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Transformation.
              </span>
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-foreground/85 mb-8 leading-relaxed font-light animate-slide-up font-montserrat">
              We architect and build intelligent systems that drive measurable
              growth. Through strategic AI consulting and end-to-end product
              development, we help you navigate complexity, unlock efficiency,
              and create new competitive advantages.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-scale-in">
              <Button
                variant="btnPrimary"
                size="xl"
                className={`min-w-[280px]`}
                onClick={() =>
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Book Your AI Strategy Call
              </Button>
              <Button
                variant="btnSecondary"
                size="xl"
                className="min-w-[240px]"
                onClick={() =>
                  document
                    .getElementById("p2r-framework")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Discover Your AI P2R Score
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* The AI Dilemma Section */}
      <section className="py-24 lg:py-32 bg-[#fff]">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-semibold text-foreground-dark mb-6 text-foreground-dark leading-[1.25]">
              The AI Dilemma:{" "}
              <span className="text-brand-primary leading-[1.25]">
                Bridging Potential and Profitability
              </span>
            </h2>
            <p className="text-lg text-foreground-dark-muted mb-12 max-w-6xl mb-0 mx-auto">
              AI promises to revolutionize industries, yet Gartner reports over
              65% of AI projects fail to deliver their intended ROI. This isn't
              a technology problem; it's a strategy problem. The gap between
              potential and reality stems from a lack of data readiness, unclear
              business cases, and poor execution.{" "}
              <strong>We were founded to bridge that gap.</strong>
            </p>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="pb-24 lg:pb-32 bg-[#fff]">
        <div className="container mx-auto px-6">
          <div className="max-w-8xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold mb-6 text-foreground-dark">
                Clarity Before Code
              </h2>
              <p className="text-lg text-foreground-dark/80 max-w-3xl mx-auto">
                Our core philosophy is simple: we de-risk your investment by
                ensuring every line of code is tied to a clear, measurable
                business outcome. Technology is the tool, not the goal.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="relative overflow-hidden bg-[#ffffff39] border border-[#00000019] rounded-2xl p-8 hover:shadow-glass-sm transition-all duration-500 transform hover:scale-102 hover:-translate-y-2 animate-fade-in group text-left">
                <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/5 via-transparent to-brand-purple/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative w-20 h-20 mb-6">
                  <img src={VelocityIcon} alt="" />
                </div>
                <h3 className="relative text-xl font-semibold mb-4 text-foreground-dark">
                  Strategy First, Technology Second
                </h3>
                <p className="relative text-foreground-dark/80">
                  We begin by immersing ourselves in your business context. Our
                  Illuminate discovery sessions map your challenges to viable AI
                  opportunities, ensuring technology serves the strategy.
                </p>
              </div>

              <div className="relative overflow-hidden bg-[#ffffff39] border border-[#00000019] rounded-2xl p-8 hover:shadow-glass-sm transition-all duration-500 transform hover:scale-102 hover:-translate-y-2 animate-fade-in group text-left">
                <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/5 via-transparent to-brand-purple/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative w-20 h-20 mb-6">
                  <img src={VelocityIcon} />
                </div>
                <h3 className="relative text-xl font-semibold mb-4 text-foreground-dark">
                  De-Risk Through Discovery
                </h3>
                <p className="relative text-foreground-dark/80">
                  Every AI project begins with our structured assessment
                  framework. We validate assumptions, identify constraints, and
                  build consensus before writing a single line of code.
                </p>
              </div>

              <div className="relative overflow-hidden bg-[#ffffff39] border border-[#00000019] rounded-2xl p-8 hover:shadow-glass-sm transition-all duration-500 transform hover:scale-102 hover:-translate-y-2 animate-fade-in group text-left">
                <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/5 via-transparent to-brand-purple/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative w-20 h-20 mb-6">
                  <img src={VelocityIcon} />
                </div>
                <h3 className="relative text-xl font-semibold mb-4 text-foreground-dark">
                  Measurable Business Impact
                </h3>
                <p className="relative text-foreground-dark/80">
                  Our success is measured in business outcomes, not technical
                  achievements. We establish clear KPIs and track ROI from day
                  one through deployment and beyond.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Consulting Section */}
      <section
        id="ai-consulting"
        className={`pb-24 lg:pb-32 relative bg-[#fff] overflow-hidden ${styles.sectionBgAI}`}
      >
        <div className="container mx-auto px-6">
          <div className="max-w-8xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold mb-6 text-foreground-dark">
                Our AI Audit & Strategy Practice
              </h2>
              <p className="text-lg text-foreground-dark-muted max-w-3xl mx-auto">
                Don't invest in a solution until you've validated the problem.
                Our structured audits are the first step in our "Clarity Before
                Code" process, designed to provide a comprehensive, data-backed
                plan for your AI journey.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <Card className="p-8 bg-[#fff] border-card-border shadow-lg hover:shadow-xl transition-all duration-300 relative text-foreground-dark flex flex-col">
                <CardContent className="p-0 h-full">
                  <div className="flex items-center gap-4 mb-6">
                    <img className="relative w-12 h-12" src={StdAudit} alt="" />
                    <div className="backdrop-blur-md px-3 py-1 rounded-full text-sm font-medium border border-black-500 ml-auto">
                      4 Weeks
                    </div>
                  </div>
                  <h3 className="text-2xl font-semibold mb-4">
                    Standard AI Audit
                  </h3>
                  <p className="text-foreground-dark/80 mb-6">
                    An accelerated assessment to align AI potential with your
                    core business strategy.
                  </p>

                  <h4 className="font-semibold text-foreground-dark mb-3">
                    Deliverables:
                  </h4>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-brand-primary mt-0.5 flex-shrink-0" />
                      <span className="text-foreground-dark/80">
                        Business Context Analysis
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-brand-primary mt-0.5 flex-shrink-0" />
                      <span className="text-foreground-dark/80">
                        Asset & Data Inventory
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-brand-primary mt-0.5 flex-shrink-0" />
                      <span className="text-foreground-dark/80">
                        Prioritized AI Roadmap with ROI
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-brand-primary mt-0.5 flex-shrink-0" />
                      <span className="text-foreground-dark/80">
                        Executive Summary
                      </span>
                    </li>
                  </ul>

                  <p className="text-sm text-foreground-dark/70 mb-4">
                    <strong>Ideal For:</strong> Teams seeking to validate
                    initial AI concepts and secure internal buy-in.
                  </p>

                  <div className="text-xl font-semibold text-brand-primary mb-4">
                    Starting at $25,000
                  </div>
                </CardContent>
                <Button
                  variant="btnPrimary"
                  className="w-full"
                  onClick={() =>
                    document
                      .getElementById("contact")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                >
                  Scope Your Audit
                </Button>
              </Card>

              <Card className="p-8 bg-[#000000] border-card-border shadow-lg hover:shadow-xl transition-all duration-300 relative flex flex-col">
                <CardContent className="p-0 h-full">
                  <div className="flex items-center gap-4 mb-6">
                    <img className="relative w-12 h-12" src={ProAudit} alt="" />
                    <div className="backdrop-blur-md px-3 py-1 rounded-full text-sm font-medium border border-black-500 ml-auto">
                      8 Weeks
                    </div>
                  </div>
                  <h3 className="text-2xl font-semibold mb-4 text-foreground">
                    Pro AI Audit
                  </h3>
                  <p className="text-foreground/80 mb-6">
                    A comprehensive deep-dive for organizations ready to commit
                    to a transformational AI initiative.
                  </p>

                  <h4 className="font-semibold text-foreground mb-3">
                    Deliverables:
                  </h4>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-brand-primary mt-0.5 flex-shrink-0" />
                      <span className="text-foreground/80">
                        Everything in Standard, plus:
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-brand-primary mt-0.5 flex-shrink-0" />
                      <span className="text-foreground/80">
                        <strong>Working Proof-of-Concept (PoC)</strong>
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-brand-primary mt-0.5 flex-shrink-0" />
                      <span className="text-foreground/80">
                        Detailed Technical Architecture
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-brand-primary mt-0.5 flex-shrink-0" />
                      <span className="text-foreground/80">
                        Data Governance Framework
                      </span>
                    </li>
                  </ul>

                  <p className="text-sm text-foreground/70 mb-4">
                    <strong>Ideal For:</strong> Organizations planning a
                    significant AI investment and requiring a de-risked,
                    shovel-ready project plan.
                  </p>

                  <div className="text-xl font-semibold text-brand-primary mb-4">
                    Starting at $60,000
                  </div>
                </CardContent>
                <Button
                  variant="btnSecondary"
                  className="w-full rounded-full"
                  onClick={() =>
                    document
                      .getElementById("contact")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                >
                  Start Your Deep-Dive
                </Button>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <div className={`${styles.pageDarkBg}`}>
        {/* P2R Framework Section */}
        <section
          id="p2r-framework"
          className={`py-24 lg:py-32 relative  overflow-hidden bg-transparent`}
        >
          <div className="container mx-auto px-6">
            <div className="max-w-8xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold mb-6 text-foreground-white">
                  <span className="leading-[1.4]">
                    Our Proprietary AI P2R™ Assessment Framework
                  </span>
                </h2>
                <p className="text-lg text-foreground-white/80 max-w-3xl mx-auto">
                  Your AI journey is unique. Our proprietary{" "}
                  <strong>Potential-to-Reality (P2R)™</strong> framework
                  evaluates your organization across three critical dimensions.
                  The output is your <strong>P2R Score</strong>—a clear,
                  actionable benchmark that defines your optimal path to
                  AI-driven transformation.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="relative overflow-hidden bg-gradient-card-light border border-[#ffffff39] rounded-2xl p-8 lg:p-10 hover:border-brand-primary/30 transition-all duration-500 transform hover:scale-102 hover:-translate-y-2 animate-fade-in group bg-white-600 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-20 ">
                  {/* <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/5 via-transparent to-brand-purple/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div> */}
                  {/* Enhanced Glassmorphism Glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/8 via-transparent to-brand-purple/8 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  {/* Frosted Glass Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-white/10 rounded-2xl opacity-50"></div>

                  <div className="relative bg-gradient-to-br from-brand-primary/20 via-brand-primary/10 to-brand-purple/20 backdrop-blur-md rounded-2xl w-20 h-20 flex items-center justify-center mb-8 border border-brand-primary/30 group-hover:shadow-glow transition-all duration-300 group-hover:scale-110">
                    <Target className="h-8 w-8 text-brand-primary" />
                  </div>
                  <h3 className="relative text-xl font-semibold mb-4 text-foreground-white">
                    AI Potential Score
                  </h3>
                  <p className="relative text-foreground-white/80">
                    We analyze your market position, business processes, and
                    strategic goals to quantify the potential impact of AI. This
                    isn't about hype; it's a rigorous evaluation of where AI can
                    create the most value.
                  </p>
                </div>

                <div className="relative overflow-hidden bg-gradient-card-light border border-[#ffffff39] rounded-2xl p-8 lg:p-10 hover:border-brand-primary/30 transition-all duration-500 transform hover:scale-102 hover:-translate-y-2 animate-fade-in group bg-white-600 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-20 ">
                  {/* <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/5 via-transparent to-brand-purple/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div> */}
                  {/* Enhanced Glassmorphism Glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/8 via-transparent to-brand-purple/8 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  {/* Frosted Glass Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-white/10 rounded-2xl opacity-50"></div>

                  <div className="relative bg-gradient-to-br from-brand-primary/20 via-brand-primary/10 to-brand-purple/20 backdrop-blur-md rounded-2xl w-20 h-20 flex items-center justify-center mb-8 border border-brand-primary/30 group-hover:shadow-glow transition-all duration-300 group-hover:scale-110">
                    <Brain className="h-8 w-8 text-brand-primary" />
                  </div>
                  <h3 className="relative text-xl font-semibold mb-4 text-foreground-white">
                    AI Readiness Score
                  </h3>
                  <p className="relative text-foreground-white/80">
                    An idea is only as good as your ability to execute it. We
                    assess your data maturity, technical infrastructure, talent,
                    and organizational culture to identify your strengths and
                    critical gaps for successful AI adoption.
                  </p>
                </div>

                <div className="relative overflow-hidden bg-gradient-card-light border border-[#ffffff39] rounded-2xl p-8 lg:p-10 hover:border-brand-primary/30 transition-all duration-500 transform hover:scale-102 hover:-translate-y-2 animate-fade-in group bg-white-600 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-20 ">
                  {/* <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/5 via-transparent to-brand-purple/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div> */}
                  {/* Enhanced Glassmorphism Glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/8 via-transparent to-brand-purple/8 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  {/* Frosted Glass Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-white/10 rounded-2xl opacity-50"></div>

                  <div className="relative bg-gradient-to-br from-brand-primary/20 via-brand-primary/10 to-brand-purple/20 backdrop-blur-md rounded-2xl w-20 h-20 flex items-center justify-center mb-8 border border-brand-primary/30 group-hover:shadow-glow transition-all duration-300 group-hover:scale-110">
                    <Shield className="h-8 w-8 text-brand-primary" />
                  </div>
                  <h3 className="relative text-xl font-semibold mb-4 text-foreground-white">
                    AI Risk Score
                  </h3>
                  <p className="relative text-foreground-white/80">
                    We proactively identify and score potential hurdles. This
                    includes evaluating ethical considerations, regulatory
                    compliance (like GDPR/CCPA), data privacy, model bias, and
                    the change management required for success.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Audit Process Section */}
        <section
          id="ai-framework"
          className="pb-24 lg:pb-32 bg-background-dark"
        >
          <div className="container mx-auto px-6">
            <div className="max-w-8xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-semibold mb-6 text-foreground-white">
                  <span className="leading-[1.24]">How Our AI Audit Works</span>
                </h2>
                <p className="text-lg text-foreground/80 max-w-3xl mx-auto">
                  Our proven 5-step methodology ensures comprehensive evaluation
                  and actionable insights.
                </p>
              </div>

              <div className="grid md:grid-cols-5 gap-6">
                {[
                  {
                    step: "01",
                    title: "Business Context & Strategy",
                    description:
                      "Understanding your business goals, challenges, and strategic priorities.",
                  },
                  {
                    step: "02",
                    title: "Build Business Asset Inventory",
                    description:
                      "Cataloging your data assets, systems, and existing capabilities.",
                  },
                  {
                    step: "03",
                    title: "Identify & Prioritize Opportunities",
                    description:
                      "Mapping AI opportunities to business value and feasibility.",
                  },
                  {
                    step: "04",
                    title: "Roadmap Creation",
                    description:
                      "Developing a phased implementation plan with clear milestones.",
                  },
                  {
                    step: "05",
                    title: "Governance & Sustainability",
                    description:
                      "Establishing frameworks for ethical AI and long-term success.",
                  },
                ].map((item) => (
                  <div key={item.step} className="text-center">
                    <div className="w-16 h-16 bg-brand-primary rounded-xl flex items-center justify-center mx-auto mb-[-2rem] relative z-[10]">
                      <span className="text-white font-bold text-lg">
                        {item.step}
                      </span>
                    </div>
                    <div
                      className={`bg-brand-purple/20 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-20 h-full rounded-tl-2xl rounded-tr-2xl`}
                    >
                      <div className={`p-3 pt-10 bg-transparent`}>
                        <h3 className="text-lg font-medium mb-3 text-foreground">
                          {item.title}
                        </h3>
                        <p className="text-sm text-foreground/80">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* AI Services Section */}
      <section className="py-24 lg:py-32 bg-[#efeff6]">
        <div className="container mx-auto px-6">
          <div className="max-w-8xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold mb-6 text-foreground-dark">
                Our Applied AI Development Services
              </h2>
              <p className="text-lg text-foreground-dark-muted max-w-3xl mx-auto">
                From strategic advisory to full-stack implementation, our
                services cover the entire AI lifecycle. We specialize in
                building robust, scalable, and secure AI solutions.
              </p>
            </div>
            <CasesCarousel />
            {/* <div className="grid md:grid-cols-3 gap-8">
              <div className="relative overflow-hidden bg-[#ffffff39] border border-[#ffffff55] rounded-2xl p-8 hover:shadow-glass-sm transition-all duration-500 transform hover:scale-102 hover:-translate-y-2 animate-fade-in group">
                <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/5 via-transparent to-brand-purple/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <h3 className="relative text-xl font-bold mb-4 text-brand-primary">
                  Generative AI Solutions
                </h3>
                <p className="relative text-foreground-dark mb-4">
                  We build custom LLM applications, content automation engines,
                  and intelligent chatbots that enhance creativity and
                  efficiency.
                </p>
                <p className="relative text-sm text-brand-primary font-medium">
                  Use Cases: Automated Content Creation, Code Generation,
                  Advanced Customer Support
                </p>
              </div>

              <div className="relative overflow-hidden bg-[#ffffff39] border border-[#ffffff55] rounded-2xl p-8 hover:shadow-glass-sm transition-all duration-500 transform hover:scale-102 hover:-translate-y-2 animate-fade-in group">
                <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/5 via-transparent to-brand-purple/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <h3 className="relative text-xl font-bold mb-4 text-brand-primary">
                  Computer Vision & Analytics
                </h3>
                <p className="relative text-foreground-dark mb-4">
                  Custom image recognition, video analysis, and real-time
                  monitoring systems for operational excellence and safety.
                </p>
                <p className="relative text-sm text-brand-primary font-medium">
                  Use Cases: Quality Control, Security Monitoring, Process
                  Automation
                </p>
              </div>

              <div className="relative overflow-hidden bg-[#ffffff39] border border-[#ffffff55] rounded-2xl p-8 hover:shadow-glass-sm transition-all duration-500 transform hover:scale-102 hover:-translate-y-2 animate-fade-in group">
                <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/5 via-transparent to-brand-purple/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <h3 className="relative text-xl font-bold mb-4 text-brand-primary">
                  Predictive Analytics & ML
                </h3>
                <p className="relative text-foreground-dark mb-4">
                  Machine learning models for forecasting, risk assessment, and
                  intelligent decision-making systems.
                </p>
                <p className="relative text-sm text-brand-primary font-medium">
                  Use Cases: Demand Forecasting, Risk Management,
                  Personalization
                </p>
              </div>

              <div className="relative overflow-hidden bg-[#ffffff39] border border-[#ffffff55] rounded-2xl p-8 hover:shadow-glass-sm transition-all duration-500 transform hover:scale-102 hover:-translate-y-2 animate-fade-in group">
                <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/5 via-transparent to-brand-purple/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <h3 className="relative text-xl font-bold mb-4 text-brand-primary">
                  Natural Language Processing
                </h3>
                <p className="relative text-foreground-dark mb-4">
                  Text analysis, sentiment monitoring, and intelligent document
                  processing to unlock insights from unstructured data.
                </p>
                <p className="relative text-sm text-brand-primary font-medium">
                  Use Cases: Document Intelligence, Sentiment Analysis,
                  Knowledge Extraction
                </p>
              </div>

              <div className="relative overflow-hidden bg-[#ffffff39] border border-[#ffffff55] rounded-2xl p-8 hover:shadow-glass-sm transition-all duration-500 transform hover:scale-102 hover:-translate-y-2 animate-fade-in group">
                <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/5 via-transparent to-brand-purple/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <h3 className="relative text-xl font-bold mb-4 text-brand-primary">
                  Intelligent Automation
                </h3>
                <p className="relative text-foreground-dark mb-4">
                  AI-powered workflow automation that adapts to changing
                  conditions and makes intelligent decisions.
                </p>
                <p className="relative text-sm text-brand-primary font-medium">
                  Use Cases: Process Optimization, Intelligent Routing, Adaptive
                  Systems
                </p>
              </div>

              <div className="relative overflow-hidden bg-[#ffffff39] border border-[#ffffff55] rounded-2xl p-8 hover:shadow-glass-sm transition-all duration-500 transform hover:scale-102 hover:-translate-y-2 animate-fade-in group">
                <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/5 via-transparent to-brand-purple/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <h3 className="relative text-xl font-bold mb-4 text-brand-primary">
                  AI Strategy & Consulting
                </h3>
                <p className="relative text-foreground-dark mb-4">
                  Strategic guidance, technology roadmaps, and organizational
                  change management for successful AI adoption.
                </p>
                <p className="relative text-sm text-brand-primary font-medium">
                  Use Cases: AI Readiness Assessment, Technology Selection,
                  Change Management
                </p>
              </div>
            </div> */}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="pb-24 lg:pb-32 bg-gradient-to-t from-[#fff] to-[#efeff6]">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold mb-6 text-foreground-dark">
                Your AI Questions,{" "}
                <span className="text-brand-primary leading-[1.4]">
                  Answered
                </span>
              </h2>
            </div>

            <div className="space-y-6 rounded-2xl p-8 bg-[#fff]">
              <details className="group border-b pb-4">
                <summary className="flex justify-between items-center cursor-pointer text-lg font-semibold text-foreground-dark">
                  What if our data isn't clean or "AI-ready"?
                  <span className="transform transition-transform group-open:rotate-180">
                    <ChevronDown className="w-5 h-5 " />
                  </span>
                </summary>
                <div className="mt-4 text-foreground-dark/80">
                  <p>
                    This is the most common starting point. Our AI Readiness
                    assessment is specifically designed to evaluate your data
                    maturity. We often partner with our Data Engineering Studio
                    to provide a clear plan for data cleansing, aggregation, and
                    governance as a foundational part of any AI project.
                  </p>
                </div>
              </details>

              <details className="group border-b pb-4">
                <summary className="flex justify-between items-center cursor-pointer text-lg font-semibold text-foreground-dark">
                  How do you ensure AI projects deliver ROI?
                  <span className="transform transition-transform group-open:rotate-180">
                    <ChevronDown className="w-5 h-5 " />
                  </span>
                </summary>
                <div className="mt-4 text-foreground-dark/80">
                  <p>
                    Our "Clarity Before Code" approach means we never start
                    development without a clear business case and measurable
                    success criteria. We establish KPIs upfront, validate
                    assumptions through proof-of-concept development, and
                    maintain regular check-ins to ensure we're on track to
                    deliver promised outcomes.
                  </p>
                </div>
              </details>

              <details className="group border-b pb-4">
                <summary className="flex justify-between items-center cursor-pointer text-lg font-semibold text-foreground-dark">
                  Do you work with specific AI technologies or platforms?
                  <span className="transform transition-transform group-open:rotate-180">
                    <ChevronDown className="w-5 h-5 " />
                  </span>
                </summary>
                <div className="mt-4 text-foreground-dark/80">
                  <p>
                    We're platform-agnostic and choose technologies based on
                    your specific needs, not vendor relationships. Our team has
                    deep expertise across cloud platforms (AWS, Azure, GCP), AI
                    frameworks (TensorFlow, PyTorch, Hugging Face), and
                    enterprise tools. We select the best fit for your
                    environment and goals.
                  </p>
                </div>
              </details>

              <details className="group">
                <summary className="flex justify-between items-center cursor-pointer text-lg font-semibold text-foreground-dark">
                  How long does a typical AI project take?
                  <span className="transform transition-transform group-open:rotate-180">
                    <ChevronDown className="w-5 h-5 " />
                  </span>
                </summary>
                <div className="mt-4 text-foreground-dark/80">
                  <p>
                    It varies significantly based on complexity and scope. Our
                    AI audits take 4-8 weeks. Proof-of-concept development
                    typically runs 8-12 weeks. Full production deployment can
                    range from 3-12 months depending on integration
                    requirements, data preparation needs, and organizational
                    readiness.
                  </p>
                </div>
              </details>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA & Contact Form */}
      <section
        id="contact"
        className={`py-24 lg:py-32 text-white ${styles.ctaBg}`}
      >
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold mb-6 text-foreground-white">
                  <span className="leading-[1.4]">
                    Ready to Move from AI Potential to Reality?
                  </span>
                </h2>
                <p className="text-lg text-foreground-white/80 mb-8">
                  An AI strategy without an execution plan is just a theory.
                  Let's discuss your specific challenges and build a pragmatic,
                  value-driven roadmap for your AI transformation. The first
                  call is a no-obligation strategy session with one of our
                  senior AI consultants.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-primary" />
                    <span className="text-foreground-white/80">
                      No-obligation initial consultation
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-primary" />
                    <span className="text-foreground-white/80">
                      Senior AI consultant, not a sales rep
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-primary" />
                    <span className="text-foreground-white/80">
                      Response within one business day
                    </span>
                  </div>
                </div>
              </div>

              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                <form className="space-y-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-foreground-white mb-2"
                    >
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-foreground-white placeholder-white/60 focus:outline-none focus:border-brand-primary"
                      placeholder="Your full name"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-foreground-white mb-2"
                    >
                      Work Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-foreground-white placeholder-white/60 focus:outline-none focus:border-brand-primary"
                      placeholder="your.email@company.com"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="challenge"
                      className="block text-sm font-medium text-foreground-white mb-2"
                    >
                      What is your primary business challenge?
                    </label>
                    <textarea
                      id="challenge"
                      name="challenge"
                      rows={4}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-foreground-white placeholder-white/60 focus:outline-none focus:border-brand-primary resize-none"
                      placeholder="Tell us about the business challenge you're looking to solve with AI..."
                    />
                  </div>

                  <Button
                    type="submit"
                    variant="btnSecondary"
                    size="lg"
                    className="w-full"
                  >
                    Schedule My Free Strategy Call
                  </Button>

                  <p className="text-center text-sm text-foreground-white/60">
                    We'll respond within one business day. We respect your
                    privacy.
                  </p>
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

export default AiStudio;
