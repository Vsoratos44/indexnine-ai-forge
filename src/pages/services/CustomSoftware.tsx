import React from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  ServiceSchema,
  WebPageSchema,
  BreadcrumbSchema,
  FAQSchema,
} from "@/components/SEOStructuredData";
import { useSEO } from "@/hooks/useSEO";
import LivingVoidBackground from "@/components/LivingVoidBackground";
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
  Trophy,
  ShieldCheck,
  Brain,
  Layers,
  Cloud,
  LayoutGrid,
  TrendingUp,
  Package,
  Target,
  Handshake,
  Globe,
  ArrowRight,
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
        "It's simple: you own 100% of it. All intellectual property, source code, and project artifacts we create for you are the exclusive property of your organization from day one.",
    },
    {
      question: "How does your integrated studio model benefit my project?",
      answer:
        "Our model eliminates silos. Your core engineering team has direct access to dedicated experts in AI, Quality Engineering, Data, and Design. This means better strategy, faster problem-solving, higher quality, and the ability to seamlessly integrate advanced capabilities without hiring multiple vendors.",
    },
    {
      question: "What is your typical project timeline?",
      answer:
        "An initial MVP can often be launched in 3-4 months. More complex enterprise platforms can range from 6 to 12+ months. Our Strategic Scoping Session provides a detailed, reliable timeline tailored to your specific project.",
    },
    {
      question: "Do you specialize in specific industries?",
      answer:
        "While we have deep experience in FinTech, EdTech, and SaaS, our strength lies in applying our pragmatic engineering principles to complex challenges across any industry. We focus on the business problem first, then apply our technical expertise.",
    },
    {
      question: "Do you provide ongoing support and maintenance?",
      answer:
        "Yes, we offer comprehensive support and maintenance packages. Our 'Evolve & Grow' service includes proactive monitoring, regular updates, security patches, and strategic feature enhancements to ensure your software continues to deliver value long after launch.",
    },
  ];

  // SEO optimization
  useSEO({
    title: "Custom Software Development Services | Pragmatic Engineering for Ventures & Enterprises | Indexnine",
    description: "Indexnine engineers mission-critical software. Our integrated studios deliver full-stack web, mobile, and enterprise applications using a Pragmatic AI Engineering approach to ensure scalability, security, and measurable business outcomes.",
    keywords: "custom software development services, enterprise application development, saas development services, full-stack development company, pragmatic engineering, product modernization, cloud-native development, integrated software teams, mobile application development, web application services",
    canonicalUrl: "https://indexnine.com/services/custom-software",
  });

  return (
    <div className="min-h-screen bg-background">
      <ServiceSchema
        name="Custom Software Development Services"
        description="We engineer and scale mission-critical web, mobile, and enterprise applications. Our end-to-end, pragmatic software development services focus on delivering secure, scalable, and high-performance solutions that drive measurable business outcomes."
        serviceType="Software Development"
      />
      <WebPageSchema
        title="Custom Software Development Services | Pragmatic Engineering for Ventures & Enterprises | Indexnine"
        description="Indexnine engineers mission-critical software. Our integrated studios deliver full-stack web, mobile, and enterprise applications using a Pragmatic AI Engineering approach to ensure scalability, security, and measurable business outcomes."
        url="https://indexnine.com/services/custom-software"
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://indexnine.com/" },
          { name: "Services", url: "https://indexnine.com/services" },
          {
            name: "Custom Software Development",
            url: "https://indexnine.com/services/custom-software",
          },
        ]}
      />
      <FAQSchema faqItems={faqData.map(faq => ({ question: faq.question, answer: faq.answer }))} />
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
                Custom Software Development
              </span>
            </div>
            <h1 className="text-[2.5rem] sm:text-[3rem] lg:text-[4rem] xl:text-[4rem] font-semibold text-foreground mb-6 leading-[1.25] animate-fade-in font-montserrat">
              Pragmatic Engineering
              <br />
              for <span className="bg-gradient-primary bg-clip-text text-transparent">Software That Works.</span>
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-foreground/85 mb-8 leading-relaxed font-light animate-slide-up font-montserrat">
              We don't just write code, we engineer strategic assets. Our integrated teams build secure, scalable, and intelligent applications designed to solve your core business challenges and drive measurable growth, from venture-backed startups to established enterprises.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-scale-in">
              <Button
                variant="btnPrimary"
                size="xl"
                className="min-w-[280px]"
                onClick={() => {
                  window.open(
                    "https://calendly.com/vaughn-soratos-indexnine",
                    "_blank"
                  );
                }}
              >
                Scope Your Project
              </Button>
              <Link to="/insights/case-studies">
                <Button variant="btnSecondary" size="xl" className="min-w-[240px]">
                  View Our Work
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof: Trusted by Section */}
      <section className="py-12 bg-[#fff]">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <p className="text-sm font-semibold text-foreground-dark/60 uppercase tracking-wider mb-8">Trusted by Industry Leaders and High-Growth Startups</p>
            <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8 opacity-60">
              <div className="h-8 w-24 bg-foreground-dark/20 rounded"></div>
              <div className="h-8 w-24 bg-foreground-dark/20 rounded"></div>
              <div className="h-8 w-24 bg-foreground-dark/20 rounded"></div>
              <div className="h-8 w-24 bg-foreground-dark/20 rounded"></div>
              <div className="h-8 w-24 bg-foreground-dark/20 rounded"></div>
            </div>
          </div>
        </div>
      </section>

      {/* The Software Development Dilemma Section */}
      <section className="py-24 lg:py-32 bg-[#fff]">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-semibold text-foreground-dark mb-6 text-foreground-dark leading-[1.25]">
              The Software Development Dilemma:{" "}
              <span className="text-brand-primary leading-[1.25]">
                Speed vs. Quality vs. Scale
              </span>
            </h2>
            <p className="text-lg text-foreground-dark-muted max-w-6xl mb-0 mx-auto">
              In today's market, you can't afford a false choice between speed and quality. A fragile MVP creates technical debt that cripples growth, while a slow, over-engineered system misses the market window entirely. Our <strong>Pragmatic Engineering</strong> philosophy solves this dilemma. We combine startup velocity with enterprise-grade discipline to build software that is not only fast to market but is also secure, scalable, and built to last.
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
                Beyond Code: We Engineer Strategic Assets
              </h2>
              <p className="text-lg text-foreground-dark/80 max-w-3xl mx-auto">
                Our core philosophy is simple: we don't just build software, we engineer digital assets that become competitive advantages. Every line of code is tied to measurable business outcomes.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="relative overflow-hidden bg-[#ffffff39] border border-[#00000019] rounded-2xl p-8 hover:shadow-glass-sm transition-all duration-500 transform hover:scale-102 hover:-translate-y-2 animate-fade-in group text-left">
                <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/5 via-transparent to-brand-purple/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div
                  className={`relative w-20 h-20 flex mb-6 items-center justify-center transition-all ${styles.icnBg}`}
                >
                  <Target className="w-8 h-8 text-brand-primary" />
                </div>
                <h3 className="relative text-xl font-semibold mb-4 text-foreground-dark">
                  Business-First Engineering
                </h3>
                <p className="relative text-foreground-dark/80">
                  We begin by understanding your business context, challenges, and goals. Every technical decision we make serves your strategic objectives, not just technical elegance.
                </p>
              </div>

              <div className="relative overflow-hidden bg-[#ffffff39] border border-[#00000019] rounded-2xl p-8 hover:shadow-glass-sm transition-all duration-500 transform hover:scale-102 hover:-translate-y-2 animate-fade-in group text-left">
                <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/5 via-transparent to-brand-purple/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div
                  className={`relative w-20 h-20 flex mb-6 items-center justify-center transition-all ${styles.icnBg}`}
                >
                  <ShieldCheck className="w-8 h-8 text-brand-primary" />
                </div>
                <h3 className="relative text-xl font-semibold mb-4 text-foreground-dark">
                  Quality Without Compromise
                </h3>
                <p className="relative text-foreground-dark/80">
                  We never sacrifice long-term maintainability for short-term speed. Our pragmatic approach ensures your software is built to scale and evolve with your business.
                </p>
              </div>

              <div className="relative overflow-hidden bg-[#ffffff39] border border-[#00000019] rounded-2xl p-8 hover:shadow-glass-sm transition-all duration-500 transform hover:scale-102 hover:-translate-y-2 animate-fade-in group text-left">
                <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/5 via-transparent to-brand-purple/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div
                  className={`relative w-20 h-20 flex mb-6 items-center justify-center transition-all ${styles.icnBg}`}
                >
                  <Handshake className="w-8 h-8 text-brand-primary" />
                </div>
                <h3 className="relative text-xl font-semibold mb-4 text-foreground-dark">
                  Partnership Over Transactions
                </h3>
                <p className="relative text-foreground-dark/80">
                  We're not just vendors; we're your strategic technology partner. Our success is measured by your business outcomes, not just project deliverables.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Full-Lifecycle Process Section */}
      <section className={`py-24 lg:py-32 ${styles.strBg1}`}>
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold mb-6 text-foreground-dark">
              Our Full-Lifecycle Development Process
            </h2>
            <p className="text-xl text-foreground-dark/80 max-w-3xl mx-auto">
              From initial idea to enterprise scale, we provide an end-to-end partnership that ensures quality and strategic alignment at every step.
            </p>
          </div>

          <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {[
              {
                icon: Lightbulb,
                title: "Sprint Zero: Strategy & Discovery",
                description:
                  "We begin with our Sprint Zero sessions to validate assumptions, define user personas, map functionality, and create a strategic roadmap with a clear business case.",
              },
              {
                icon: PenTool,
                title: "Architect: UI/UX & System Design",
                description:
                  "Our experts create intuitive user interfaces and architect a robust, scalable, and secure technical foundation built for future growth and easy maintenance.",
              },
              {
                icon: Rocket,
                title: "Engineer: Development & Testing",
                description:
                  "Our full-stack engineers build your solution using modern technologies and best practices, with comprehensive testing at every stage.",
              },
              {
                icon: Settings,
                title: "Deploy: Launch & Scale",
                description:
                  "We deploy your application to production with robust monitoring, security, and scaling capabilities to support your growth.",
              },
            ].map((step, index) => (
              <div key={index} className="relative group">
                <div className="relative overflow-hidden bg-[#ffffff75] backdrop-blur-md border border-[#00000019] rounded-2xl p-8 lg:p-10 hover:border-brand-primary/30 transition-all duration-500 transform hover:scale-102 hover:-translate-y-2 animate-fade-in group h-full">
                  <div className="flex items-center mb-6">
                    <div
                      className={`relative w-20 h-20 flex items-center justify-center transition-all ${styles.icnBg}`}
                    >
                      <step.icon className="w-8 h-8 text-brand-primary" />
                    </div>
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

      {/* Custom Software Development Services Section */}
      <section
        id="software-services"
        className={`pb-24 lg:pb-32 relative bg-[#fff] overflow-hidden ${styles.sectionBgAI}`}
      >
        <div className="container mx-auto px-6">
          <div className="max-w-8xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold mb-6 text-foreground-dark">
                Our Custom Software Development Services
              </h2>
              <p className="text-lg text-foreground-dark-muted max-w-3xl mx-auto">
                We offer a comprehensive suite of services to build, modernize, and scale your mission-critical applications with enterprise-grade quality and startup velocity.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
              <Card className="p-8 bg-[#fff] border-card-border shadow-lg hover:shadow-xl transition-all duration-300 relative text-foreground-dark flex flex-col">
                <CardContent className="p-0 h-full">
                  <div className="flex items-center gap-4 mb-6">
                    <div
                      className={`relative w-12 h-12 rounded-sm flex items-center justify-center bg-gradient-to-r from-brand-purple to-[#505CFD]`}
                    >
                      <LayoutGrid className="w-5 h-5 text-white" />
                    </div>

                    <div className="backdrop-blur-md px-3 py-1 rounded-full text-sm font-medium border border-black-500 ml-auto">
                      Enterprise
                    </div>
                  </div>
                  <h3 className="text-2xl font-semibold mb-4">
                    Enterprise Application Development
                  </h3>
                  <p className="text-foreground-dark/80 mb-6">
                    Complex, scalable solutions to streamline your core business operations, from ERPs to internal process automation.
                  </p>

                  <h4 className="font-semibold text-foreground-dark mb-3">
                    Capabilities:
                  </h4>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-brand-primary mt-0.5 flex-shrink-0" />
                      <span className="text-foreground-dark/80">
                        Custom ERP & CRM Solutions
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-brand-primary mt-0.5 flex-shrink-0" />
                      <span className="text-foreground-dark/80">
                        Workflow Automation Platforms
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-brand-primary mt-0.5 flex-shrink-0" />
                      <span className="text-foreground-dark/80">
                        Data Analytics Dashboards
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-brand-primary mt-0.5 flex-shrink-0" />
                      <span className="text-foreground-dark/80">
                        Integration & API Development
                      </span>
                    </li>
                  </ul>

                  <p className="text-sm text-foreground-dark/70 mb-4">
                    <strong>Ideal For:</strong> Large organizations needing custom internal tools and process optimization.
                  </p>
                </CardContent>
                <Button
                  variant="btnPrimary"
                  className="w-full"
                  onClick={() => {
                    window.open(
                      "https://calendly.com/vaughn-soratos-indexnine",
                      "_blank"
                    );
                  }}
                >
                  Discuss Your Enterprise Needs
                </Button>
              </Card>

              <Card className="p-8 bg-[#000000] border-card-border shadow-lg hover:shadow-xl transition-all duration-300 relative flex flex-col">
                <CardContent className="p-0 h-full">
                  <div className="flex items-center gap-4 mb-6">
                    <div
                      className={`relative w-12 h-12 rounded-sm flex items-center justify-center bg-gradient-to-r from-brand-purple to-[#505CFD]`}
                    >
                      <Cloud className="w-5 h-5 text-white" />
                    </div>
                    <div className="backdrop-blur-md px-3 py-1 rounded-full text-sm font-medium border border-black-500 ml-auto">
                      SaaS
                    </div>
                  </div>
                  <h3 className="text-2xl font-semibold mb-4 text-foreground">
                    SaaS Product Development
                  </h3>
                  <p className="text-foreground/80 mb-6">
                    End-to-end design and development of multi-tenant, cloud-native SaaS platforms ready for commercial success.
                  </p>

                  <h4 className="font-semibold text-foreground mb-3">
                    Features:
                  </h4>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-brand-primary mt-0.5 flex-shrink-0" />
                      <span className="text-foreground/80">
                        Multi-Tenant Architecture
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-brand-primary mt-0.5 flex-shrink-0" />
                      <span className="text-foreground/80">
                        Subscription Management
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-brand-primary mt-0.5 flex-shrink-0" />
                      <span className="text-foreground/80">
                        Auto-Scaling Infrastructure
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-brand-primary mt-0.5 flex-shrink-0" />
                      <span className="text-foreground/80">
                        Analytics & Monitoring
                      </span>
                    </li>
                  </ul>

                  <p className="text-sm text-foreground/70 mb-4">
                    <strong>Ideal For:</strong> Startups and companies building commercial software products for market.
                  </p>
                </CardContent>
                <Button
                  variant="btnSecondary"
                  className="w-full rounded-full"
                  onClick={() => {
                    window.open(
                      "https://calendly.com/vaughn-soratos-indexnine",
                      "_blank"
                    );
                  }}
                >
                  Start Your SaaS Journey
                </Button>
              </Card>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mt-8 max-w-6xl mx-auto">
              {[
                { 
                  icon: Cpu, 
                  title: "Mobile Application Development", 
                  description: "Native and cross-platform mobile apps for iOS and Android that deliver exceptional user experiences and drive engagement."
                },
                { 
                  icon: Layers, 
                  title: "Application Modernization", 
                  description: "Transform legacy systems into modern, agile applications that reduce technical debt and unlock new capabilities."
                },
                { 
                  icon: Package, 
                  title: "MVP Development", 
                  description: "Rapidly build and launch Minimum Viable Products that are strategically architected for future growth and success."
                }
              ].map((service, index) => (
                <div key={index} className="relative overflow-hidden bg-[#ffffff39] border border-[#00000019] rounded-2xl p-8 hover:shadow-glass-sm transition-all duration-500 transform hover:scale-102 hover:-translate-y-2 animate-fade-in group text-left">
                  <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/5 via-transparent to-brand-purple/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div
                    className={`relative w-20 h-20 flex mb-6 items-center justify-center transition-all ${styles.icnBg}`}
                  >
                    <service.icon className="w-8 h-8 text-brand-primary"/>
                  </div>
                  <h3 className="relative text-xl font-semibold text-foreground-dark mb-4">{service.title}</h3>
                  <p className="relative text-foreground-dark/80">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Why Indexnine Differentiators Section */}
      <section className={`py-24 lg:py-32 ${styles.strBg1}`}>
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold mb-6 text-foreground-dark">
              The Indexnine Difference: <span className="text-brand-primary">Why Partner With Us?</span>
            </h2>
            <p className="text-xl text-foreground-dark/80 max-w-3xl mx-auto">
              We're not just another development shop. We're your strategic technology partner, committed to your long-term success.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              {
                icon: Brain,
                title: "Integrated Studio Model",
                description: "Your project benefits from our full ecosystem of specialists—AI engineers, data scientists, QE experts, and designers—all working in harmony."
              },
              {
                icon: Target,
                title: "Business-First Approach",
                description: "Every technical decision we make is aligned with your business objectives. We solve problems, not just implement features."
              },
              {
                icon: ShieldCheck,
                title: "Enterprise-Grade Security",
                description: "Built-in security from day one, with comprehensive testing, compliance frameworks, and robust architecture patterns."
              },
              {
                icon: TrendingUp,
                title: "Future-Proof Architecture",
                description: "We architect for scale and change, ensuring your software can evolve with your business needs and market conditions."
              }
            ].map((differentiator, index) => (
              <div key={index} className="relative overflow-hidden bg-[#ffffff75] backdrop-blur-md border border-[#00000019] rounded-2xl p-8 hover:border-brand-primary/30 transition-all duration-500 transform hover:scale-102 hover:-translate-y-2 animate-fade-in group">
                <div className="flex items-center mb-6">
                  <div
                    className={`relative w-20 h-20 flex items-center justify-center transition-all ${styles.icnBg}`}
                  >
                    <differentiator.icon className="w-8 h-8 text-brand-primary" />
                  </div>
                </div>
                <h3 className="text-2xl font-semibold text-foreground-dark mb-4 font-montserrat">
                  {differentiator.title}
                </h3>
                <p className="text-foreground-dark/70 leading-relaxed font-montserrat">
                  {differentiator.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className={`${styles.pageDarkBg}`}>
        {/* Technology Stack Section */}
        <section
          id="tech-stack"
          className={`py-24 lg:py-32 relative overflow-hidden bg-transparent`}
        >
          <div className="container mx-auto px-6">
            <div className="max-w-8xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold mb-6 text-foreground-white">
                  <span className="leading-[1.4]">
                    Our Modern Technology Stack
                  </span>
                </h2>
                <p className="text-lg text-foreground-white/80 max-w-3xl mx-auto">
                  We leverage cutting-edge technologies and proven frameworks to build robust, scalable, and maintainable applications that stand the test of time.
                </p>
              </div>

              <div className="grid md:grid-cols-4 gap-6">
                {[
                  {
                    icon: <Code className="w-6 h-6 text-white" />,
                    title: "Frontend Technologies",
                    description: "Modern frameworks for exceptional user experiences.",
                    techs: ["React", "Next.js", "Vue.js", "TypeScript"]
                  },
                  {
                    icon: <Database className="w-6 h-6 text-white" />,
                    title: "Backend & Database",
                    description: "Scalable server architecture and data management.",
                    techs: ["Node.js", "Python", "PostgreSQL", "MongoDB"]
                  },
                  {
                    icon: <Cloud className="w-6 h-6 text-white" />,
                    title: "Cloud Platforms",
                    description: "Enterprise-grade cloud infrastructure and services.",
                    techs: ["AWS", "Azure", "GCP", "Kubernetes"]
                  },
                  {
                    icon: <Settings className="w-6 h-6 text-white" />,
                    title: "DevOps & Tools",
                    description: "Automated deployment and continuous integration.",
                    techs: ["Docker", "CI/CD", "Terraform", "Monitoring"]
                  }
                ].map((item, index) => (
                  <div key={item.title} className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-b from-brand-purple to-[#505CFD] rounded-xl flex items-center justify-center mx-auto mb-[-2rem] relative z-[10]">
                      <div
                        className={`relative w-16 h-16 rounded-sm flex items-center justify-center mt-[-0.5rem] mr-[-0.5rem] bg-gradient-to-r from-[#727AF2] to-[#535DE1] border border-white/25`}
                      >
                        {item.icon}
                      </div>
                    </div>
                    <div
                      className={`bg-gradient-to-tr from-[#ffffff01] via-[#ffffff10] to-[#ffffff05] border border-[#ffffff19] bg-clip-padding backdrop-filter backdrop-blur-lg h-full rounded-2xl`}
                    >
                      <div className={`px-3 pt-10 pb-6 bg-transparent`}>
                        <h3 className="text-lg font-medium mb-3 text-foreground">
                          {item.title}
                        </h3>
                        <p className="text-sm text-foreground/80 mb-4">
                          {item.description}
                        </p>
                        <div className="flex flex-wrap gap-1 justify-center">
                          {item.techs.map((tech, techIndex) => (
                            <span key={techIndex} className="text-xs px-2 py-1 bg-white/10 rounded-full text-foreground/70">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Strategic Scoping Session Section */}
        <section className="pb-24 lg:pb-32 bg-background-dark">
          <div className="container mx-auto px-6">
            <div className="max-w-8xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-semibold mb-6 text-foreground-white">
                  <span className="leading-[1.24]">Start with a Strategic Scoping Session</span>
                </h2>
                <p className="text-lg text-foreground/80 max-w-3xl mx-auto">
                  Every successful project begins with clarity. Our Strategic Scoping Session ensures alignment on objectives, timeline, and success metrics before any development begins.
                </p>
              </div>

              <div className="grid md:grid-cols-5 gap-6">
                {[
                  {
                    step: <Target className="w-6 h-6 text-white" />,
                    title: "Business Analysis",
                    description: "Understanding your market, users, and competitive landscape.",
                  },
                  {
                    step: <Lightbulb className="w-6 h-6 text-white" />,
                    title: "Requirements Definition",
                    description: "Translating business needs into technical specifications.",
                  },
                  {
                    step: <PenTool className="w-6 h-6 text-white" />,
                    title: "Architecture Design",
                    description: "Creating scalable, secure system architecture and technology stack.",
                  },
                  {
                    step: <Globe className="w-6 h-6 text-white" />,
                    title: "Project Planning",
                    description: "Detailed timeline, milestones, and resource allocation.",
                  },
                  {
                    step: <CheckCircle className="w-6 h-6 text-white" />,
                    title: "Success Metrics",
                    description: "Defining clear, measurable outcomes and KPIs.",
                  },
                ].map((item) => (
                  <div key={item.title} className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-b from-brand-purple to-[#505CFD] rounded-xl flex items-center justify-center mx-auto mb-[-2rem] relative z-[10]">
                      <div
                        className={`relative w-16 h-16 rounded-sm flex items-center justify-center mt-[-0.5rem] mr-[-0.5rem] bg-gradient-to-r from-[#727AF2] to-[#535DE1] border border-white/25`}
                      >
                        {item.step}
                      </div>
                    </div>
                    <div
                      className={`bg-gradient-to-tr from-[#ffffff01] via-[#ffffff10] to-[#ffffff05] border border-[#ffffff19] bg-clip-padding backdrop-filter backdrop-blur-lg h-full rounded-2xl`}
                    >
                      <div className={`px-3 pt-10 bg-transparent`}>
                        <h3 className="text-lg font-medium mb-3 text-foreground">
                          {item.title}
                        </h3>
                        <p className="text-sm text-foreground/80 mb-0">
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

      {/* FAQ Section */}
      <section className="py-24 lg:py-32 bg-[#efeff6]">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold mb-6 text-foreground-dark">
              Your Questions,{" "}
              <span className="text-brand-primary leading-[1.4]">
                Answered
              </span>
            </h2>
          </div>

          <div className="space-y-6 rounded-2xl p-8 bg-[#fff]">
            {faqData.map((faq, index) => (
              <details key={index} className="group border-b pb-4">
                <summary className="flex justify-between items-center cursor-pointer text-lg font-semibold text-foreground-dark">
                  {faq.question}
                  <span className="transform transition-transform group-open:rotate-180">
                    <ChevronDown className="w-5 h-5" />
                  </span>
                </summary>
                <div className="mt-4 text-foreground-dark/80">
                  <p>{faq.answer}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section id="cta" className={`py-24 lg:py-32 text-white ${styles.ctaBg}`}>
        <div className="container max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl lg:text-5xl font-semibold mb-6 text-white">
            Ready to Build Your Next Great Product?
          </h2>
          <p className="text-xl text-white/80 mb-8">
            Let's discuss your vision. Schedule a free, no-obligation consultation with our senior solutions architects to explore how we can turn your idea into a market-leading reality.
          </p>
          <Button
            variant="btnSecondary"
            size="xl"
            className="min-w-[300px]"
            onClick={() => window.open("https://calendly.com/vaughn-soratos-indexnine", "_blank")}
          >
            Schedule Your Free Consultation
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CustomSoftware;