import React, { useState } from "react";
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
import LivingVoidBackground from "@/components/LivingVoidBackground";
import {
  Users,
  Clock,
  Shield,
  Target,
  Zap,
  CheckCircle,
  ChevronDown,
  ChevronUp,
  Brain,
  Database,
  Search,
  Users2,
  GitMerge,
  TrendingUp,
  ArrowRight,
  Sparkles,
  Wrench,
  Palette,
  ShieldCheck,
} from "lucide-react";
import styles from "../../assets/css/stylesheet.module.css";

const DedicatedTeams = () => {
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setExpandedFAQ(expandedFAQ === index ? null : index);
  };

  const faqData = [
    {
      question:
        "What is the difference between a dedicated team and standard staff augmentation?",
      answer:
        "Standard staff augmentation provides you with individual contractors. An Indexnine Dedicated Team provides you with a cohesive, fully managed 'Integrated Pod' that not only works on your project but also has direct, on-demand access to our entire ecosystem of specialized studios—AI, Data, and QE. You get the benefit of a dedicated team plus the strategic depth of a full-service engineering partner.",
    },
    {
      question: "How quickly can you assemble a team?",
      answer:
        "Depending on the required skill sets and team size, we can typically assemble, vet, and propose a complete team within 1-2 weeks. The subsequent onboarding process is designed to be rapid and seamless, often getting the team productive within days.",
    },
    {
      question:
        "How do you ensure the team integrates with our company culture?",
      answer:
        "Cultural fit is a critical part of our selection process. During the initial discovery, we spend time understanding your communication styles, workflow, and core values. We select team members not just for technical skill but also for their ability to collaborate and integrate smoothly with your existing teams.",
    },
    {
      question: "Can I scale the team up or down?",
      answer:
        "Absolutely. Our model is built for flexibility. Whether you need to add specialized skills for a new project phase or scale down after a major launch, we can adjust the team's composition with minimal friction, typically within a single billing cycle.",
    },
    {
      question: "Who owns the intellectual property (IP)?",
      answer:
        "You do. 100%. All work product, source code, and intellectual property created by your dedicated team belongs exclusively to your organization.",
    },
  ];

  // Comprehensive SEO implementation
  useSEO({
    title:
      "Dedicated Development Teams | Integrated Engineering Pods | Indexnine",
    description:
      "Augment your team with more than just developers. Indexnine provides dedicated, integrated engineering pods with on-demand access to our AI, Data, and QE studios, ensuring you build faster, smarter, and stronger.",
    canonicalUrl: "https://www.indexnine.com/engagement/dedicated-teams",
    keywords:
      "dedicated development team, hire dedicated developers, software development teams, integrated engineering pods, staff augmentation services, extend development team, outsourced development team, managed development team",
    ogImage: "https://www.indexnine.com/images/og-dedicated-teams.png",
  });

  return (
    <div className="min-h-screen bg-background">
      <ServiceSchema
        name="Dedicated Development Teams & Integrated Engineering Pods"
        description="Extend your development capacity with a cohesive, dedicated software team from Indexnine. Our Integrated Pods come supercharged with on-demand access to our specialized AI, Data, and QE studios."
        serviceType="Software Development Services"
      />
      <WebPageSchema
        title="Dedicated Development Teams | Integrated Engineering Pods | Indexnine"
        description="Augment your team with more than just developers. Indexnine provides dedicated, integrated engineering pods with on-demand access to our AI, Data, and QE studios, ensuring you build faster, smarter, and stronger."
        url="https://www.indexnine.com/engagement/dedicated-teams"
      />
      <BreadcrumbSchema
        items={[
          {
            name: "Engagement Models",
            url: "https://www.indexnine.com/engagement",
          },
          {
            name: "Dedicated Teams",
            url: "https://www.indexnine.com/engagement/dedicated-teams",
          },
        ]}
      />
      <FAQSchema faqItems={faqData} />

      <Header />

      {/* Hero Section */}
      <section className="relative min-h-[780px] overflow-hidden bg-black">
        <LivingVoidBackground />
        <div className="relative z-10 container mx-auto px-6 pt-48 pb-24">
          <div className="max-w-5xl mx-auto text-center lg:text-left ml-0">
            <div className="mb-6">
              <span className="inline-block px-6 py-3 bg-brand-primary/10 text-brand-primary rounded-full text-sm font-medium border border-brand-primary/20 backdrop-blur-sm">
                Dedicated Teams Engagement Model
              </span>
            </div>
            <h1 className="text-[2.5rem] sm:text-[3rem] lg:text-[4rem] font-semibold text-foreground mb-6 leading-tight animate-fade-in font-montserrat">
              More Than a Dedicated Team.
              <br />
              An{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Integrated Engineering Pod.
              </span>
            </h1>
            <p className="text-lg text-foreground/85 mb-8 leading-relaxed font-light animate-slide-up font-montserrat max-w-4xl">
              Stop hiring isolated contractors. We provide cohesive, dedicated
              teams supercharged with on-demand access to our entire ecosystem
              of specialized studios. Build faster, smarter, and stronger with a
              partner invested in your success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-scale-in">
              <Button
                variant="btnPrimary"
                size="xl"
                className="min-w-[280px]"
                onClick={() =>
                  window.open(
                    "https://calendly.com/vaughn-soratos-indexnine",
                    "_blank"
                  )
                }
              >
                Assemble Your Team
              </Button>
              <Button
                variant="btnSecondary"
                size="xl"
                className="min-w-[240px]"
                onClick={() =>
                  document
                    .getElementById("how-it-works")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                See How It Works
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* The Problem Section */}
      <section className="py-24 lg:py-32 bg-[#fff]">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-semibold text-foreground-dark mb-6 leading-tight">
              The Staff Augmentation Trap:
              <br />
              <span className="text-brand-primary">
                Why Hiring "Bodies" Isn't Enough
              </span>
            </h2>
            <p className="text-xl text-foreground-dark-muted leading-relaxed">
              Traditional staff augmentation promises capacity but often
              delivers chaos. You get disconnected freelancers who lack
              ownership, require constant management, and can't solve complex
              problems beyond their narrow skillset. This slows you down,
              increases risk, and creates a drag on your core team.{" "}
              <strong>
                You need more than extra hands; you need an extension of your
                engineering brain.
              </strong>
            </p>
          </div>
        </div>
      </section>

      {/* The Indexnine Difference Section */}
      <section className="pb-24 lg:pb-32 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl max-w-6xl mx-auto font-semibold text-foreground-dark">
              <span className="leading-[1.25]">
                The Indexnine Difference: Your Team, Supercharged by Our Studios
              </span>
            </h2>
            <p className="text-xl text-foreground-dark/80 mt-4 max-w-3xl mx-auto">
              An Indexnine dedicated team is an "Integrated Pod"—a cohesive unit
              that becomes a seamless extension of your organization, backed by
              the collective intelligence of our entire company.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 text-left">
              <Users2 className="w-10 h-10 text-brand-primary mb-4" />
              <h3 className="text-xl font-semibold text-foreground-dark mb-2">
                Cohesive Pods, Not Freelancers
              </h3>
              <p className="text-foreground-dark/80">
                We provide fully managed teams with established chemistry and a
                shared commitment to our pragmatic engineering principles. They
                operate as a single, high-performance unit.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 text-left">
              <Zap className="w-10 h-10 text-brand-primary mb-4" />
              <h3 className="text-xl font-semibold text-foreground-dark mb-2">
                On-Demand Specialist Access
              </h3>
              <p className="text-foreground-dark/80">
                Your dedicated team is a gateway to our entire company. When you
                need to solve a complex AI problem, run a performance audit, or
                refine a UX flow, your team has direct access to our specialized
                studios.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 text-left">
              <Target className="w-10 h-10 text-brand-primary mb-4" />
              <h3 className="text-xl font-semibold text-foreground-dark mb-2">
                Outcome-Focused Mindset
              </h3>
              <p className="text-foreground-dark/80">
                Our teams are trained to think beyond the ticket. They take
                ownership, contribute to your strategy, and are measured by
                their ability to help you achieve your business goals, not just
                close tasks.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How We Build Your Team Section */}
      <section
        id="how-it-works"
        className={`py-24 lg:py-32 relative overflow-hidden ${styles.pageDarkBg}`}
      >
        <div className="container mx-auto px-6">
          <div className="max-w-8xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-semibold mb-6 text-foreground-white">
                <span className="leading-[1.24]">
                  How We Build Your Integrated Team: A 4-Step Process for
                  Seamless Integration
                </span>
              </h2>
              <p className="text-lg text-foreground/80 max-w-3xl mx-auto">
                Our proven methodology ensures your dedicated team becomes a
                true extension of your organization.
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-6">
              {[
                {
                  step: <Search className="w-6 h-6 text-white" />,
                  title: "Discovery & Strategy",
                  description:
                    "Understanding your culture, technical requirements, and business objectives to define the ideal team composition.",
                },
                {
                  step: <Users2 className="w-6 h-6 text-white" />,
                  title: "Team Assembly",
                  description:
                    "Selecting and assembling your integrated pod based on both technical skills and cultural alignment.",
                },
                {
                  step: <GitMerge className="w-6 h-6 text-white" />,
                  title: "Seamless Onboarding",
                  description:
                    "Integrating your team into your workflows, tools, and processes with minimal disruption.",
                },
                {
                  step: <TrendingUp className="w-6 h-6 text-white" />,
                  title: "Continuous Integration",
                  description:
                    "Ongoing optimization and studio integration to maximize your team's impact and efficiency.",
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
      <div className={`${styles.sectionBgAI} bg-white`}>
        {/* What Your Team Includes Section */}
        <section
          className={`py-24 lg:py-32 bg-transparent relative overflow-hidden`}
        >
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-semibold text-foreground-dark">
                {" "}
                <span className="leading-[1.25]">
                  What Your Dedicated Team Includes: The Integrated Advantage
                </span>
              </h2>
              <p className="text-xl text-foreground-dark/80 mt-4">
                Every Indexnine Integrated Pod comes with a full support system
                to ensure success.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: Users2,
                  title: "Dedicated Core Team",
                  description:
                    "Hand-picked engineers who work exclusively on your projects with full accountability and ownership.",
                },
                {
                  icon: Brain,
                  title: "AI Studio Access",
                  description:
                    "On-demand consultation with our AI specialists for machine learning, automation, and intelligent feature development.",
                },
                {
                  icon: Database,
                  title: "Data Engineering Support",
                  description:
                    "Expert guidance on data architecture, pipelines, and analytics to power data-driven decisions.",
                },
                {
                  icon: ShieldCheck,
                  title: "Quality Engineering",
                  description:
                    "Integrated QE expertise for testing strategies, automation, and performance optimization.",
                },
                {
                  icon: Sparkles,
                  title: "Design Integration",
                  description:
                    "Seamless collaboration with our design team for UX/UI excellence and user-centered development.",
                },
                {
                  icon: Target,
                  title: "Strategic Oversight",
                  description:
                    "Regular strategy sessions and performance reviews to ensure alignment with your business objectives.",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="relative overflow-hidden bg-[#ffffff39] border border-[#00000019] rounded-2xl p-8 hover:shadow-glass-sm transition-all duration-500 transform hover:scale-102 hover:-translate-y-2 animate-fade-in group text-left"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/5 via-transparent to-brand-purple/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div
                    className={`relative w-20 h-20 flex mb-6 items-center justify-center transition-all ${styles.icnBg}`}
                  >
                    <item.icon className="w-8 h-8 text-brand-primary" />
                  </div>
                  <h3 className="relative text-xl font-semibold mb-4 text-foreground-dark">
                    {item.title}
                  </h3>
                  <p className="relative text-foreground-dark/80">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Composition Section */}
        <section className="pb-24 lg:pb-32 bg-transparent">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-semibold text-foreground-dark">
                Assemble Your Ideal Team Composition
              </h2>
              <p className="text-xl text-foreground-dark/80 mt-4 max-w-3xl mx-auto">
                Build a balanced team with the exact skills you need to
                accelerate your roadmap.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {[
                { icon: Wrench, name: "Backend Engineers" },
                { icon: Palette, name: "Frontend Engineers" },
                { icon: Users2, name: "Full-Stack Engineers" },
                { icon: ShieldCheck, name: "QA Engineers" },
                { icon: Brain, name: "AI/ML Engineers" },
                { icon: Database, name: "Data Engineers" },
                { icon: GitMerge, name: "DevOps Engineers" },
                { icon: Users, name: "Project Managers" },
              ].map((role) => (
                <div
                  key={role.name}
                  className="text-center p-6 bg-white/50 backdrop-blur-lg rounded-xl border border-gray-100 hover:shadow-sm hover:-translate-y-1 transition-all"
                >
                  <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-4 border border-brand-primary/20 shadow-sm">
                    <role.icon className="w-8 h-8 text-brand-primary" />
                  </div>
                  <p className="font-semibold text-foreground-dark">
                    {role.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="pb-24 lg:pb-32 bg-transparent">
          <div className="container mx-auto px-6 max-w-4xl">
            <h2 className="text-4xl lg:text-5xl font-semibold mb-12 text-foreground-dark text-center">
              Frequently Asked Questions
            </h2>
            <div className="bg-white  rounded-lg shadow-lg px-6">
              {faqData.map((faq, index) => (
                <div
                  key={index}
                  className=" overflow-hidden border-b last:border-b-0"
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full py-6 text-left flex items-center justify-between"
                  >
                    <h3 className=" font-semibold text-foreground-dark">
                      {faq.question}
                    </h3>
                    {expandedFAQ === index ? (
                      <ChevronUp className="w-6 h-6 text-brand-primary" />
                    ) : (
                      <ChevronDown className="w-6 h-6 text-gray-500" />
                    )}
                  </button>
                  {expandedFAQ === index && (
                    <div className=" pb-6 ">
                      <p className="text-foreground-dark/80 leading-relaxed ">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
      {/* Final CTA Section */}
      <section className={`py-24 lg:py-32 text-white ${styles.ctaBg}`}>
        <div className="container mx-auto px-6 lg:px-8 text-center max-w-4xl">
          <h2 className="text-4xl lg:text-5xl font-semibold mb-6 text-white">
            Ready to Build Your Integrated Team?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Stop searching for individual contractors and start building a
            high-performance engineering pod. Schedule a free consultation to
            discuss your needs and get a custom team proposal within a week.
          </p>
          <Button
            variant="btnSecondary"
            size="xl"
            className="min-w-[300px]"
            onClick={() =>
              window.open(
                "https://calendly.com/vaughn-soratos-indexnine",
                "_blank"
              )
            }
          >
            Schedule Your Consultation <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default DedicatedTeams;
