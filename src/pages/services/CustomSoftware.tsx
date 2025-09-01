import React from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { CardGlass } from "@/components/ui/CardGlass";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import {
  ServiceSchema,
  WebPageSchema,
  BreadcrumbSchema,
} from "@/components/SEOStructuredData";
import ServiceVideoBackground from "@/components/ServiceVideoBackground";
import {
  Code,
  Cpu,
  Database,
  Shield,
  Zap,
  Users,
  Lightbulb,
  PenTool,
  Rocket,
  Settings,
  CheckCircle,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import styles from "../../assets/css/stylesheet.module.css";

const CustomSoftware = () => {
  const [expandedFaq, setExpandedFaq] = React.useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  const faqData = [
    {
      question: "How do you handle intellectual property (IP)?",
      answer:
        "It's simple: you own it. All intellectual property, source code, and project artifacts we create for you are the exclusive property of your organization.",
    },
    {
      question: "What is your typical project timeline?",
      answer:
        "An initial MVP can often be launched in 3-4 months. More complex enterprise platforms can range from 6 to 12+ months. Our Scoping Session provides a detailed timeline tailored to your specific project.",
    },
    {
      question: "What technologies do you use?",
      answer:
        "We use modern, proven technologies including React, Next.js, Node.js, Python, AWS, GCP, Azure, and many others. Our technology choices are always driven by your specific requirements and long-term goals.",
    },
    {
      question: "Do you provide ongoing support and maintenance?",
      answer:
        "Yes, we offer comprehensive support and maintenance packages including monitoring, updates, security patches, and feature enhancements to ensure your software continues to perform optimally.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <ServiceSchema
        name="Custom Software Development"
        description="We architect, build, and scale mission-critical web and mobile applications. Our end-to-end software development services focus on delivering secure, scalable, and high-performance solutions that drive business outcomes."
        serviceType="Software Development"
      />
      <WebPageSchema
        title="Custom Software Development Services | IndexNine"
        description="We architect, build, and scale mission-critical web and mobile applications. Our end-to-end software development services focus on delivering secure, scalable, and high-performance solutions that drive business outcomes."
        url="https://yoursite.lovable.app/services/custom-software"
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://yoursite.lovable.app/" },
          { name: "Services", url: "https://yoursite.lovable.app/services" },
          {
            name: "Custom Software Development",
            url: "https://yoursite.lovable.app/services/custom-software",
          },
        ]}
      />
      <Header />
      {/* 
      <div className="container mx-auto px-6 lg:px-8 pt-32">
        <Breadcrumbs />
      </div> */}

      {/* Hero Section */}
      <section className="relative min-h-[780px] overflow-hidden bg-black">
        <ServiceVideoBackground />

        {/* Content - Precisely positioned */}
        <div className="relative z-10 container mx-auto px-6 pt-48 pb-24">
          <div className="max-w-5xl mx-auto text-center lg:text-left ml-0">
            <div className="mb-6">
              <span className="inline-block px-6 py-3 bg-brand-primary/10 text-brand-primary rounded-full text-sm font-medium border border-brand-primary/20 backdrop-blur-sm">
                End-to-End Engineering
              </span>
            </div>
            <h1 className="text-[2.5rem] sm:text-[3rem] lg:text-[4rem] xl:text-[4rem] font-semibold text-foreground mb-6 leading-[1.25]  animate-fade-in font-montserrat">
              We Build Software That Drives <br />
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Business Outcomes
              </span>
            </h1>

            <p className="text-base sm:text-lg lg:text-xl text-foreground/85 mb-8 leading-relaxed font-light animate-slide-up font-montserrat max-w-4xl">
              We go beyond simply writing code. We engineer scalable, secure,
              and high-performance web and mobile applications that solve your
              most complex challenges and create new competitive advantages. Our
              full-stack development capabilities deliver custom solutions that
              are architected for growth.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-scale-in">
              <Button
                variant="btnPrimary"
                size="xl"
                className="min-w-[280px]"
                onClick={() =>
                  document
                    .getElementById("scoping-session")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Scope Your Project
              </Button>
              <Button
                variant="btnSecondary"
                size="xl"
                className="min-w-[240px]"
              >
                View Our Work
              </Button>
            </div>
          </div>
        </div>
      </section>
      <section className={` ${styles.strBg1} `}>
        {/* Philosophy Section */}
        <section className="py-24 lg:py-32 bg-transparent">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="max-w-6xl mx-auto text-center">
              <h2 className="text-2xl lg:text-3xl font-semibold text-foreground-dark mb-6 text-foreground-dark leading-[1.25]">
                <span className="leading-[1.25]">Clarity Before Code:</span>
                <br />
                <span className="text-brand-primary leading-[1.25]">
                  Our Commitment to Your Success
                </span>
              </h2>
              <p className="text-xl text-foreground-dark leading-relaxed font-montserrat">
                A successful software project is built on a foundation of shared
                understanding. Our core philosophy ensures that every feature we
                build, every line of code we write, and every system we deploy
                is directly tied to a validated business need and a measurable
                outcome. We mitigate risk and guarantee value by architecting
                for your business goals first.
              </p>
            </div>
          </div>
        </section>

        {/* Lifecycle Process Section */}
        <section
          className={`pb-24 lg:pb-32 bg-transparent relative overflow-hidden`}
        >
          <div className="container mx-auto px-6 lg:px-8 max-w-6xl">
            <div className="text-center mb-20">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold mb-6 text-foreground-dark ">
                <span className="leading-[1.25]">From Concept to Scale:</span>
                <br />
                <span className="text-brand-primary leading-[1.25]">
                  Our Full-Lifecycle Process
                </span>
              </h2>
              <p className="text-xl text-foreground-dark/80 max-w-3xl mx-auto font-montserrat">
                We provide end-to-end partnership across the entire software
                development lifecycle, ensuring quality, velocity, and strategic
                alignment at every stage.
              </p>
            </div>

            <div className={`grid md:grid-cols-1 lg:grid-cols-2 gap-6`}>
              {[
                {
                  icon: Lightbulb,
                  number: "01",
                  title: "Sprint Zero: Strategy & Discovery",
                  description:
                    "We begin with our Sprint Zero sessions to validate assumptions, define user personas, map functionality, and create a strategic roadmap with a clear business case.",
                },
                {
                  icon: PenTool,
                  number: "02",
                  title: "Architect: UI/UX & System Design",
                  description:
                    "Our experts create intuitive user interfaces and architect a robust, scalable, and secure technical foundation built for future growth and easy maintenance.",
                },
                {
                  icon: Rocket,
                  number: "03",
                  title: "Engineer: Development & Testing",
                  description:
                    "Our full-stack engineers build your solution using modern technologies and best practices, with comprehensive testing at every stage.",
                },
                {
                  icon: Settings,
                  number: "04",
                  title: "Deploy: Launch & Scale",
                  description:
                    "We deploy your application to production with robust monitoring, security, and scaling capabilities to support your growth.",
                },
              ].map((step, index) => (
                <div key={index} className="relative group">
                  <div className="relative overflow-hidden bg-gradient-card-light border border-[#00039] rounded-2xl p-8 lg:p-10 hover:border-brand-primary/30 transition-all duration-500 transform hover:scale-102 hover:-translate-y-2 animate-fade-in group h-full bg-[#ffffff75] backdrop-blur-md">
                    <div className="flex items-center mb-6">
                      <div className="relative bg-gradient-to-br from-brand-primary/20 via-brand-primary/10 to-brand-purple/20 backdrop-blur-md rounded-2xl w-20 h-20 flex items-center justify-center mb-4 border border-brand-primary/30 group-hover:shadow-glow transition-all duration-300 group-hover:scale-110">
                        <step.icon className="w-8 h-8 text-brand-primary" />
                      </div>
                      {/* <span className="text-3xl font-bold text-brand-primary/60">
                      {step.number}
                    </span> */}
                    </div>
                    <h3 className="text-xl font-semibold text-foreground-dark mb-4 font-montserrat">
                      {step.title}
                    </h3>
                    <p className="text-foreground-dark/70 leading-relaxed font-montserrat">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Capabilities Section */}
        <section className="pb-24 lg:pb-32 bg-transparent">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="text-center mb-20">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold mb-6 text-foreground-dark">
                Our Full-Stack Development Capabilities
              </h2>
              <p className="text-xl text-foreground-dark/80 max-w-3xl mx-auto font-montserrat">
                We build scalable, secure, and innovative software solutions
                using cutting-edge technologies and industry best practices
                across the entire technology stack.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: Code,
                  title: "Web Development",
                  description:
                    "We engineer responsive, high-performance web applications, customer portals, and enterprise SaaS platforms using modern frameworks like React, Next.js, and Node.js.",
                },
                {
                  icon: Cpu,
                  title: "Mobile Development",
                  description:
                    "We build beautiful and intuitive native and cross-platform mobile apps for iOS and Android that deliver engaging user experiences.",
                },
                {
                  icon: Database,
                  title: "Backend Engineering",
                  description:
                    "We architect and build the robust, scalable server-side logic, databases, and APIs that power your applications, ensuring reliability at scale.",
                },
                {
                  icon: Shield,
                  title: "DevOps & Cloud",
                  description:
                    "We leverage AWS, GCP, and Azure to build and manage resilient, scalable cloud infrastructure and automate your path to production.",
                },
                {
                  icon: Zap,
                  title: "AI/ML Integration",
                  description:
                    "In partnership with our AI Studio, we integrate intelligent features—from generative AI to predictive analytics—into your applications.",
                },
                {
                  icon: Users,
                  title: "Integrated Quality Assurance",
                  description:
                    "Backed by our QE Studio, we ensure your software is flawless with test automation, performance, and security audits.",
                },
              ].map((service, index) => (
                <div
                  className="relative overflow-hidden bg-gradient-card-light border border-[#00039] rounded-2xl p-8 lg:p-10 hover:border-brand-primary/30 transition-all duration-500 transform hover:scale-102 hover:-translate-y-2 animate-fade-in group h-full bg-[#ffffff75] "
                  key={index}
                >
                  <div className="relative bg-gradient-to-br from-brand-primary/20 via-brand-primary/10 to-brand-purple/20 backdrop-blur-md rounded-2xl w-20 h-20 flex items-center justify-center mb-4 border border-brand-primary/30 group-hover:shadow-glow transition-all duration-300 group-hover:scale-110">
                    <service.icon className="w-8 h-8 text-brand-primary" />
                  </div>
                  <h3 className="text-2xl font-semibold text-foreground-dark mb-4 font-montserrat">
                    {service.title}
                  </h3>
                  <p className="text-foreground-dark/70 leading-relaxed font-montserrat">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </section>

      <section
        className={`pb-24 lg:pb-32 bg-[#fff] relative overflow-hidden ${styles.strBg2}`}
      >
        {/* Strategic Scoping Session */}
        <section className="pb-24 lg:pb-32 bg-transparent">
          <div className="container ">
            <div className="max-w-4xl mx-auto">
              <div
                className={`rounded-3xl p-12 shadow-glass-lg border border-glass-border ${styles.middleCardBg}`}
              >
                <div className="text-left mb-8">
                  <h2 className="text-3xl sm:text-2xl font-semibold text-foreground mb-6 font-montserrat">
                    Start with a Strategic Scoping Session
                  </h2>
                  <p className="text-lg text-foreground/80 font-montserrat">
                    For complex projects, our{" "}
                    <strong>Strategic Scoping Session</strong> is the ideal
                    first step. This is a 1-2 week, fixed-price engagement where
                    our senior architects partner with you to define project
                    scope, create initial wireframes, map out the technical
                    architecture, and provide a detailed project plan with a
                    firm estimate.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-12 items-center">
                  <div>
                    <h4 className="text-lg font-medium text-foreground mb-6 font-montserrat">
                      Key Deliverables:
                    </h4>
                    <ul className="space-y-4">
                      {[
                        "Defined MVP Feature Set",
                        "High-Level Technical Architecture",
                        "Project Roadmap & Timeline",
                        "Detailed Cost Estimate",
                      ].map((item, index) => (
                        <li key={index} className="flex items-center">
                          <CheckCircle className="w-5 h-5 text-brand-primary mr-3" />
                          <span className="text-foreground/80 font-montserrat">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="text-center ">
                    <div className="mb-8">
                      <p className="text-sm text-foreground/60 uppercase tracking-wide mb-2 font-montserrat">
                        Investment
                      </p>
                      <p className="text-3xl font-semibold text-brand-primary font-montserrat">
                        Starting at $10,000
                      </p>
                    </div>
                    <Button variant="btnSecondary" className="rounded-full">
                      Plan Your Scoping Session
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="pb-24 lg:pb-32 bg-transparent">
          <div className="container mx-auto px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold mb-12 text-foreground-dark text-center">
              Your Custom Software Questions, Answered
            </h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div className="max-w-4xl bg-[#fcfcfc] shadow-glass-lg  p-8 rounded-3xl">
                <div className="space-y-0">
                  {faqData.map((faq, index) => (
                    <div
                      key={index}
                      className="rounded-0 border-b border-[#00000019]"
                    >
                      <button
                        onClick={() => toggleFaq(index)}
                        className="w-full py-6 text-left flex items-center justify-between "
                      >
                        <h3 className="text-lg font-semibold text-foreground-dark font-montserrat">
                          {faq.question}
                        </h3>
                        {expandedFaq === index ? (
                          <ChevronUp className="w-5 h-5 text-brand-primary " />
                        ) : (
                          <ChevronDown className="w-5 h-5 text-brand-primary" />
                        )}
                      </button>
                      {expandedFaq === index && (
                        <div className="pr-6 pb-6">
                          <p className="text-foreground-dark/70 leading-relaxed font-montserrat">
                            {faq.answer}
                          </p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <div className="max-w-4xl">
                <h3 className="text-2xl pt-4 font-semibold text-foreground-dark mb-8 font-montserrat">
                  Related Services
                </h3>
                <div className="grid md:grid-rows-3 gap-4">
                  <Link
                    to="/studios/ai"
                    className="py-4 border-b flex gap-6 rounded-0 hover:bg-[#fcfcfc] transition-all bg backdrop-blur-xl"
                  >
                    <div className="w-20">
                      <div className="relative bg-gradient-to-br from-brand-primary/20 via-brand-primary/10 to-brand-purple/20 backdrop-blur-md rounded-2xl w-20 h-20 flex items-center justify-center mb-4 border border-brand-primary/30 group-hover:shadow-glow transition-all duration-300 group-hover:scale-110">
                        <Zap className="w-8 h-8 text-brand-primary" />
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground-dark mb-2">
                        AI & ML Development
                      </h4>
                      <p className="text-foreground-dark/70 text-sm">
                        In partnership with our AI Studio, we integrate
                        intelligent features into your applications
                      </p>
                    </div>
                  </Link>
                  <Link
                    to="/studios/quality-engineering"
                    className="py-4 border-b flex gap-6 rounded-0 hover:bg-[#fcfcfc] transition-all bg backdrop-blur-xl"
                  >
                    <div className="w-20">
                      <div className="relative bg-gradient-to-br from-brand-primary/20 via-brand-primary/10 to-brand-purple/20 backdrop-blur-md rounded-2xl w-20 h-20 flex items-center justify-center mb-4 border border-brand-primary/30 group-hover:shadow-glow transition-all duration-300 group-hover:scale-110">
                        <Zap className="w-8 h-8 text-brand-primary" />
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground-dark mb-2">
                        QA Engineering
                      </h4>
                      <p className="text-foreground-dark/70 text-sm">
                        Backed by our QE Studio, comprehensive testing for your
                        software solutions
                      </p>
                    </div>
                  </Link>
                  <Link
                    to="/insights/case-study/genesys-modernization"
                    className="py-4 flex gap-6 rounded-0 hover:bg-[#fcfcfc] transition-all bg backdrop-blur-xl"
                  >
                    <div className="w-20">
                      <div className="relative bg-gradient-to-br from-brand-primary/20 via-brand-primary/10 to-brand-purple/20 backdrop-blur-md rounded-2xl w-20 h-20 flex items-center justify-center mb-4 border border-brand-primary/30 group-hover:shadow-glow transition-all duration-300 group-hover:scale-110">
                        <Zap className="w-8 h-8 text-brand-primary" />
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground-dark mb-2">
                        Success Story
                      </h4>
                      <p className="text-foreground-dark/70 text-sm">
                        See how we modernized Genesys applications with custom
                        development
                      </p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
      {/* Final CTA Section */}
      <section className={`py-24 lg:py-32 text-white ${styles.ctaBg}`}>
        <div className="container max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold mb-6 text-foreground-white">
                <span className="leading-[1.4]">
                  Ready to Build Your Custom Solution?
                </span>
              </h2>
              <p className="text-lg text-foreground-white/80 mb-8">
                Let's have a conversation about your project requirements,
                business goals, and how we can build a solution that drives your
                business forward. The first call is a no-obligation consultation
                with one of our senior solutions architects.
              </p>
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
                    htmlFor="project-description"
                    className="block text-sm font-medium text-foreground-white mb-2"
                  >
                    Tell us about your project
                  </label>
                  <textarea
                    id="project-description"
                    name="project_description"
                    rows={4}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-foreground-white placeholder-white/60 focus:outline-none focus:border-brand-primary resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>
                <Button variant="btnSecondary" size="lg" className="w-full">
                  Schedule My Free Consultation
                </Button>
                <p className="text-center text-sm text-foreground-white/60">
                  We'll respond within one business day. We respect your
                  privacy.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CustomSoftware;
