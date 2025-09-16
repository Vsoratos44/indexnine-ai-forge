import React from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import {
  ServiceSchema,
  WebPageSchema,
  BreadcrumbSchema,
  FAQSchema,
} from "@/components/SEOStructuredData";
import { useSEO } from "@/hooks/useSEO";
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
    schemaType: "WebPage"
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
        <ServiceVideoBackground />
        <div className="relative z-10 container mx-auto px-6 pt-48 pb-24">
          <div className="max-w-5xl mx-auto text-center lg:text-left ml-0">
            <div className="mb-6">
              <span className="inline-block px-6 py-3 bg-brand-primary/10 text-brand-primary rounded-full text-sm font-medium border border-brand-primary/20 backdrop-blur-sm">
                Custom Software Development
              </span>
            </div>
            <h1 className="text-[2.5rem] sm:text-[3rem] lg:text-[4rem] font-semibold text-foreground mb-6 leading-tight animate-fade-in font-montserrat">
              Pragmatic Engineering
              <br />
              for <span className="bg-gradient-primary bg-clip-text text-transparent">Software That Works.</span>
            </h1>
            <p className="text-lg text-foreground/85 mb-8 leading-relaxed font-light animate-slide-up font-montserrat max-w-4xl">
              We don't just write code, we engineer strategic assets. Our integrated teams build secure, scalable, and intelligent applications designed to solve your core business challenges and drive measurable growth, from venture-backed startups to established enterprises.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-scale-in">
              <a href="#cta">
                <Button variant="btnPrimary" size="xl" className="min-w-[280px]">
                  Scope Your Project
                </Button>
              </a>
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
      
      {/* Philosophy Section */}
      <section className="py-24 lg:py-32 bg-[#fff]">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-semibold text-foreground-dark mb-6 leading-tight">
              Beyond Code: <span className="text-brand-primary">We Engineer Strategic Assets</span>
            </h2>
            <p className="text-xl text-foreground-dark/80 leading-relaxed max-w-5xl mx-auto">
              In today's market, you can't afford a false choice between speed and quality. A fragile MVP creates technical debt that cripples growth, while a slow, over-engineered system misses the market window entirely. Our <strong>Pragmatic Engineering</strong> philosophy solves this dilemma. We combine startup velocity with enterprise-grade discipline to build software that is not only fast to market but is also secure, scalable, and built to last.
            </p>
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
      <section className="py-24 lg:py-32 bg-[#fff]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-foreground-dark mb-6">
              Our Custom Software Development Services
            </h2>
            <p className="text-xl text-foreground-dark/80 max-w-3xl mx-auto">
              We offer a comprehensive suite of services to build, modernize, and scale your mission-critical applications.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              { icon: LayoutGrid, title: "Enterprise Application Development", description: "Complex, scalable solutions to streamline your core business operations, from ERPs to internal process automation." },
              { icon: Cloud, title: "SaaS Product Development", description: "End-to-end design and development of multi-tenant, cloud-native SaaS platforms ready for commercial success." },
              { icon: Cpu, title: "Mobile Application Development", description: "Engaging native and cross-platform mobile apps for iOS and Android that deliver exceptional user experiences." },
              { icon: Layers, title: "Application Modernization", description: "Transforming legacy systems into modern, agile, and scalable applications to reduce technical debt and unlock new capabilities." },
              { icon: Zap, title: "Cloud-Native Development", description: "Architecting and building applications on AWS, GCP, and Azure to leverage the full power of the cloud for scalability and resilience." },
              { icon: Package, title: "MVP Development", description: "Rapidly building and launching Minimum Viable Products that are not just quick, but strategically architected for future growth." }
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

      {/* Technology Stack Section */}
      <section className="py-24 lg:py-32 bg-[#000]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold mb-6 text-foreground">
              Our Technology Stack
            </h2>
            <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
              We leverage modern, proven technologies to build applications that are fast, scalable, and maintainable.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              { category: "Frontend", technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS"] },
              { category: "Backend", technologies: ["Node.js", "Python", "PostgreSQL", "MongoDB"] },
              { category: "Cloud & DevOps", technologies: ["AWS", "GCP", "Azure", "Docker"] },
              { category: "AI & ML", technologies: ["OpenAI", "TensorFlow", "PyTorch", "LangChain"] }
            ].map((stack, index) => (
              <div key={index} className="bg-[#111] border border-[#333] rounded-xl p-6">
                <h3 className="text-xl font-semibold text-foreground mb-4">{stack.category}</h3>
                <ul className="space-y-2">
                  {stack.technologies.map((tech, techIndex) => (
                    <li key={techIndex} className="text-foreground/80">{tech}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Strategic Scoping Session Section */}
      <section className="py-24 lg:py-32 bg-[#fff]">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className={`rounded-3xl p-12 shadow-glass-lg border border-glass-border ${styles.middleCardBg}`}>
              <div className="text-center mb-8">
                <h2 className="text-3xl sm:text-4xl font-semibold text-foreground mb-6 font-montserrat">
                  Start with a Strategic Scoping Session
                </h2>
                <p className="text-lg text-foreground/80 font-montserrat">
                  For complex projects, our <strong>Strategic Scoping Session</strong> is the ideal first step. This is a 1-2 week, fixed-price engagement where our senior architects partner with you to define project scope, create initial wireframes, map out the technical architecture, and provide a detailed project plan with a firm estimate.
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

                <div className="text-center">
                  <div className="mb-8">
                    <p className="text-sm text-foreground/60 uppercase tracking-wide mb-2 font-montserrat">
                      Investment
                    </p>
                    <p className="text-3xl font-semibold text-foreground font-montserrat">
                      Starting at $10,000
                    </p>
                  </div>
                  <Button
                    variant="btnPrimary"
                    size="xl"
                    className="w-full"
                    onClick={() => window.open("https://calendly.com/vaughn-soratos-indexnine", "_blank")}
                  >
                    Schedule Your Session
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 lg:py-32 bg-[#fff]">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold mb-12 text-foreground-dark text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {faqData.map((faq, index) => (
              <div key={index} className="border border-gray-200 rounded-lg">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <h3 className="text-lg font-semibold text-foreground-dark">{faq.question}</h3>
                  {expandedFaq === index ? (
                    <ChevronUp className="w-6 h-6 text-brand-primary" />
                  ) : (
                    <ChevronDown className="w-6 h-6 text-gray-500" />
                  )}
                </button>
                {expandedFaq === index && (
                  <div className="px-6 pb-6">
                    <p className="text-foreground-dark/80 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section id="cta" className={`py-24 lg:py-32 text-white ${styles.ctaBg}`}>
        <div className="container max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold mb-6 text-white">
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