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
  ChevronUp
} from "lucide-react";

const CustomSoftware = () => {
  const [expandedFaq, setExpandedFaq] = React.useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  const faqData = [
    {
      question: "How do you handle intellectual property (IP)?",
      answer: "It's simple: you own it. All intellectual property, source code, and project artifacts we create for you are the exclusive property of your organization."
    },
    {
      question: "What is your typical project timeline?",
      answer: "An initial MVP can often be launched in 3-4 months. More complex enterprise platforms can range from 6 to 12+ months. Our Scoping Session provides a detailed timeline tailored to your specific project."
    },
    {
      question: "What technologies do you use?",
      answer: "We use modern, proven technologies including React, Next.js, Node.js, Python, AWS, GCP, Azure, and many others. Our technology choices are always driven by your specific requirements and long-term goals."
    },
    {
      question: "Do you provide ongoing support and maintenance?",
      answer: "Yes, we offer comprehensive support and maintenance packages including monitoring, updates, security patches, and feature enhancements to ensure your software continues to perform optimally."
    }
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

      <div className="container mx-auto px-6 lg:px-8 pt-32">
        <Breadcrumbs />
      </div>

      {/* Hero Section */}
      <section className="relative min-h-[90vh] overflow-hidden bg-black">
        <ServiceVideoBackground />

        {/* Content - Precisely positioned */}
        <div className="relative z-10 container mx-auto px-6 lg:px-8 pt-48 pb-24">
          <div className="max-w-5xl mx-auto text-center lg:text-left lg:mx-0">
            <div className="inline-block bg-gradient-to-r from-brand-primary/10 to-brand-accent/10 backdrop-blur-sm border border-brand-primary/20 rounded-full px-6 py-2 mb-8">
              <span className="text-brand-primary font-semibold">End-to-End Engineering</span>
            </div>
            <h1 className="text-[3.5rem] sm:text-[4.5rem] lg:text-[5.5rem] font-bold text-foreground mb-8 leading-[0.9] tracking-tight animate-fade-in">
              We Build Software That Drives <br />
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Business Outcomes
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl lg:text-2xl text-foreground/85 mb-12 max-w-4xl leading-relaxed font-light animate-slide-up">
              We go beyond simply writing code. We engineer scalable, secure, and high-performance web and mobile applications that solve your most complex challenges and create new competitive advantages. Our full-stack development capabilities deliver custom solutions that are architected for growth.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-scale-in">
              <Button 
                variant="hero" 
                size="xl"
                className="min-w-[280px]"
                onClick={() => document.getElementById('scoping-session')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Scope Your Project
              </Button>
              <Button variant="hero-secondary" size="xl" className="min-w-[240px]">
                View Our Work
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-24 bg-background-section">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-8 font-montserrat">
              Clarity Before Code: Our Commitment to Your Success
            </h2>
            <p className="text-xl text-foreground-dark leading-relaxed font-montserrat">
              A successful software project is built on a foundation of shared understanding. Our core philosophy ensures that every feature we build, every line of code we write, and every system we deploy is directly tied to a validated business need and a measurable outcome. We mitigate risk and guarantee value by architecting for your business goals first.
            </p>
          </div>
        </div>
      </section>

      {/* Lifecycle Process Section */}
      <section className="py-24 bg-gradient-to-b from-background to-muted/20">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6 font-montserrat">
              From Concept to Scale: Our Full-Lifecycle Process
            </h2>
            <p className="text-xl text-foreground/80 max-w-3xl mx-auto font-montserrat">
              We provide end-to-end partnership across the entire software development lifecycle, ensuring quality, velocity, and strategic alignment at every stage.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Lightbulb,
                number: "01",
                title: "Sprint Zero: Strategy & Discovery",
                description: "We begin with our Sprint Zero sessions to validate assumptions, define user personas, map functionality, and create a strategic roadmap with a clear business case."
              },
              {
                icon: PenTool,
                number: "02", 
                title: "Architect: UI/UX & System Design",
                description: "Our experts create intuitive user interfaces and architect a robust, scalable, and secure technical foundation built for future growth and easy maintenance."
              },
              {
                icon: Rocket,
                number: "03",
                title: "Engineer: Development & Testing",
                description: "Our full-stack engineers build your solution using modern technologies and best practices, with comprehensive testing at every stage."
              },
              {
                icon: Settings,
                number: "04",
                title: "Deploy: Launch & Scale",
                description: "We deploy your application to production with robust monitoring, security, and scaling capabilities to support your growth."
              }
            ].map((step, index) => (
              <div key={index} className="relative group">
                <div className="bg-gradient-card backdrop-blur-xl rounded-3xl p-8 shadow-glass-lg border border-glass-border hover:shadow-glow transition-all duration-500 h-full">
                  <div className="flex items-center mb-6">
                    <div className="bg-gradient-to-br from-brand-primary to-brand-accent rounded-2xl w-12 h-12 flex items-center justify-center mr-4">
                      <step.icon className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-3xl font-bold text-brand-primary/60">{step.number}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-4 font-montserrat">
                    {step.title}
                  </h3>
                  <p className="text-foreground/70 leading-relaxed font-montserrat">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6 font-montserrat">
              Our Full-Stack Development Capabilities
            </h2>
            <p className="text-xl text-foreground/80 max-w-3xl mx-auto font-montserrat">
              We build scalable, secure, and innovative software solutions using cutting-edge technologies and industry best practices across the entire technology stack.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Code,
                title: "Web Development",
                description: "We engineer responsive, high-performance web applications, customer portals, and enterprise SaaS platforms using modern frameworks like React, Next.js, and Node.js."
              },
              {
                icon: Cpu,
                title: "Mobile Development",
                description: "We build beautiful and intuitive native and cross-platform mobile apps for iOS and Android that deliver engaging user experiences."
              },
              {
                icon: Database,
                title: "Backend Engineering",
                description: "We architect and build the robust, scalable server-side logic, databases, and APIs that power your applications, ensuring reliability at scale."
              },
              {
                icon: Shield,
                title: "DevOps & Cloud",
                description: "We leverage AWS, GCP, and Azure to build and manage resilient, scalable cloud infrastructure and automate your path to production."
              },
              {
                icon: Zap,
                title: "AI/ML Integration",
                description: "In partnership with our AI Studio, we integrate intelligent features—from generative AI to predictive analytics—into your applications."
              },
              {
                icon: Users,
                title: "Integrated Quality Assurance",
                description: "Backed by our QE Studio, we ensure your software is flawless with test automation, performance, and security audits."
              }
            ].map((service, index) => (
<CardGlass className="p-8" key={index}>
                <div className="bg-gradient-to-br from-brand-primary to-brand-accent rounded-2xl w-16 h-16 flex items-center justify-center mb-6">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-foreground mb-4 font-montserrat">
                  {service.title}
                </h3>
                <p className="text-foreground/70 leading-relaxed font-montserrat">
                  {service.description}
                </p>
              </CardGlass>
            ))}
          </div>
        </div>
      </section>

      {/* Strategic Scoping Session */}
      <section className="py-24 bg-background-section">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-card backdrop-blur-xl rounded-3xl p-12 shadow-glass-lg border border-glass-border">
              <div className="text-center mb-12">
                <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6 font-montserrat">
                  Start with a Strategic Scoping Session
                </h2>
                <p className="text-xl text-foreground/80 font-montserrat">
                  For complex projects, our <strong>Strategic Scoping Session</strong> is the ideal first step. This is a 1-2 week, fixed-price engagement where our senior architects partner with you to define project scope, create initial wireframes, map out the technical architecture, and provide a detailed project plan with a firm estimate.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h4 className="text-xl font-semibold text-foreground mb-6 font-montserrat">Key Deliverables:</h4>
                  <ul className="space-y-4">
                    {[
                      "Defined MVP Feature Set",
                      "High-Level Technical Architecture", 
                      "Project Roadmap & Timeline",
                      "Detailed Cost Estimate"
                    ].map((item, index) => (
                      <li key={index} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-brand-primary mr-3" />
                        <span className="text-foreground/80 font-montserrat">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="text-center">
                  <div className="mb-8">
                    <p className="text-sm text-foreground/60 uppercase tracking-wide mb-2 font-montserrat">Investment</p>
                    <p className="text-3xl font-bold text-brand-primary font-montserrat">Starting at $10,000</p>
                  </div>
                  <Button variant="hero" size="xl">
                    Plan Your Scoping Session
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-12 text-center font-montserrat">
              Your Custom Software Questions, Answered
            </h2>
            
            <div className="space-y-4">
              {faqData.map((faq, index) => (
                <div key={index} className="bg-gradient-card backdrop-blur-xl rounded-2xl border border-glass-border">
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full p-6 text-left flex items-center justify-between hover:bg-brand-primary/5 transition-colors rounded-2xl"
                  >
                    <h3 className="text-lg font-semibold text-foreground font-montserrat">
                      {faq.question}
                    </h3>
                    {expandedFaq === index ? (
                      <ChevronUp className="w-5 h-5 text-brand-primary" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-brand-primary" />
                    )}
                  </button>
                  {expandedFaq === index && (
                    <div className="px-6 pb-6">
                      <p className="text-foreground/70 leading-relaxed font-montserrat">
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

      <section className="py-24 bg-background-section">
        <div className="container mx-auto px-6 lg:px-8">
          <h3 className="text-2xl font-bold text-foreground mb-8 font-montserrat">
            Related Services
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <Link
              to="/studios/ai"
              className="p-6 border border-glass-border rounded-3xl hover:shadow-glass-lg transition-all bg-gradient-card backdrop-blur-xl"
            >
              <h4 className="font-semibold text-foreground mb-2">
                AI & ML Development
              </h4>
              <p className="text-foreground/70 text-sm">
                In partnership with our AI Studio, we integrate intelligent features into your applications
              </p>
            </Link>
            <Link
              to="/studios/quality-engineering"
              className="p-6 border border-glass-border rounded-3xl hover:shadow-glass-lg transition-all bg-gradient-card backdrop-blur-xl"
            >
              <h4 className="font-semibold text-foreground mb-2">
                QA Engineering
              </h4>
              <p className="text-foreground/70 text-sm">
                Backed by our QE Studio, comprehensive testing for your software solutions
              </p>
            </Link>
            <Link
              to="/insights/case-study/genesys-modernization"
              className="p-6 border border-glass-border rounded-3xl hover:shadow-glass-lg transition-all bg-gradient-card backdrop-blur-xl"
            >
              <h4 className="font-semibold text-foreground mb-2">
                Success Story
              </h4>
              <p className="text-foreground/70 text-sm">
                See how we modernized Genesys applications with custom development
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 bg-gradient-hero">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6 font-montserrat">
                Ready to Build Your Custom Solution?
              </h2>
              <p className="text-xl text-foreground/85 mb-8 font-montserrat">
                Let's have a conversation about your project requirements, business goals, and how we can build a solution that drives your business forward. The first call is a no-obligation consultation with one of our senior solutions architects.
              </p>
            </div>
            
            <div className="bg-gradient-card backdrop-blur-xl rounded-3xl p-8 shadow-glass-lg border border-glass-border">
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 bg-background/50 border border-glass-border rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-primary text-foreground"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Work Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 bg-background/50 border border-glass-border rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-primary text-foreground"
                  />
                </div>
                <div>
                  <label htmlFor="project-description" className="block text-sm font-medium text-foreground mb-2">
                    Tell us about your project
                  </label>
                  <textarea
                    id="project-description"
                    name="project_description"
                    rows={4}
                    className="w-full px-4 py-3 bg-background/50 border border-glass-border rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-primary text-foreground resize-none"
                  />
                </div>
                <Button variant="hero" size="xl" className="w-full">
                  Schedule My Free Consultation
                </Button>
                <p className="text-sm text-foreground/60 text-center">
                  We'll respond within one business day. We respect your privacy.
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
