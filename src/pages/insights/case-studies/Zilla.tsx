import React, { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import LivingVoidBackground from "@/components/LivingVoidBackground";
import { useSEO } from "@/hooks/useSEO";
import {
  SEOStructuredData,
  ArticleSchema,
  WebPageSchema,
  BreadcrumbSchema,
} from "@/components/SEOStructuredData";
import {
  ArrowLeft,
  CheckCircle,
  Shield,
  Users,
  Target,
  TrendingUp,
  ArrowRightLeft,
  Lock,
  Scale,
  Settings,
  RefreshCcw,
  QuoteIcon,
  Boxes,
  Rocket,
  Workflow,
  Handshake,
} from "lucide-react";
import { Link } from "react-router-dom";
import styles from "../../../assets/css/stylesheet.module.css";
import BlogDetailsBg from "@/assets/images/blog-details-bg.webp";

import CaseInrImg from "@/assets/images/case-details-img.webp";

const leftNavLinks = [
  { href: "#intro1", label: "Introduction" },
  { href: "#challange1", label: "Identifying critical security gaps" },
  { href: "#challange2", label: "The Paradox of Visibility" },
  { href: "#value", label: "Value of Excellence" },
  { href: "#whyWorked", label: "Why It Worked" },
];

const PivotCaseStudy = () => {
  const [selected, setSelected] = useState("#intro1");

  // SEO Configuration
  useSEO({
    title:
      "Zilla Security Pivot Case Study - Engineering the Perfect Product Pivot | Indexnine",
    description:
      "Learn how Indexnine transformed Zilla Security from a passive auditing tool into a mission-critical IGA platform, enabling a successful $165M+ acquisition through strategic product pivoting.",
    keywords:
      "product pivot, identity governance, cybersecurity platform, enterprise software, IGA solution, product transformation, acquisition success, security automation",
    canonicalUrl: "https://indexnine.ai/insights/case-studies/zilla",
    ogImage: "https://indexnine.ai/images/case-studies/pivot-og.jpg",
    ogType: "article",
  });
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

  const exlnceIcons = [
    <Boxes className="w-6 h-6 text-brand-primary m-auto " />,
    <Rocket className="w-6 h-6 text-brand-primary m-auto " />,
    <Workflow className="w-6 h-6 text-brand-primary m-auto " />,
    <Handshake className="w-6 h-6 text-brand-primary m-auto " />,
  ];

  const outcomeTitle = [
    "Mission-Critical Integration",
    "Upgraded Scope, Expanded Value",
    "Enterprise Architecture",
    "Successful $165M+ Acquisition",
  ];

  return (
    <div className="min-h-screen bg-white relative  bg-[#fff] bg-no-repeat">
      {/* SEO Structured Data */}
      <ArticleSchema
        title="Zilla Security: Engineering the Perfect Pivot"
        description="Indexnine's strategic product engineering transformed a niche auditing tool into a mission-critical identity platform, creating exponential enterprise value."
        author="Indexnine"
        datePublished="2024-01-20"
        dateModified="2024-01-20"
        image="https://indexnine.ai/images/case-studies/pivot-hero.jpg"
        url="https://indexnine.ai/insights/case-studies/zilla"
      />

      <WebPageSchema
        title="Pivot Case Study: Zilla Security Platform Transformation"
        description="Strategic product pivot case study showcasing enterprise platform transformation and successful acquisition outcome"
        url="https://indexnine.ai/insights/case-studies/zilla"
      />

      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://indexnine.ai" },
          { name: "Insights", url: "https://indexnine.ai/insights" },
          {
            name: "Case Studies",
            url: "https://indexnine.ai/insights/case-studies",
          },
          {
            name: "Pivot Phase",
            url: "https://indexnine.ai/insights/case-studies/zilla",
          },
        ]}
      />
      <Header />
      {/* Hero Section */}
      <a id="intro1"></a>
      <div className={`bg-transparent pt-32 ${styles.sectionBgCase} `}>
        <div className="container grid grid-cols-1 md:grid-cols-3 gap-0 md:gap-12">
          <div className="text-foreground-dark col-span-1">
            <div className="sticky top-[128px] pb-8">
              <ul className="space-y-2">
                {leftNavLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={() => setSelected(link.href)}
                      className={`inline-blockpy-2 rounded transition 
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
              <div
                className={`px-8 mt-8 mb-4 py-12 text-center rounded-2xl w-full text-white ${styles.sideCardBg}`}
              >
                <h3 className="text-3xl font-bold">
                  Want to Share Your Insights?
                </h3>
                <p className="text-xl py-8">
                  Join our community of thought leaders and share your expertise
                  with fellow technology professionals.
                </p>
                <Button type="submit" size="lg" variant="btnSecondary">
                  Continue
                </Button>
              </div>
            </div>
          </div>
          <div className="col-span-2">
            <section
              className={`min-h-[100px] rounded-2xl shadow-2xl flex mb-12 border backdrop-blur-xl relative overflow-hidden ${styles.caseTitle}`}
            >
              <div className="mt-auto p-4 md:p-8">
                <div className="max-w-8xl mx-auto">
                  <div className="mb-6">
                    <span className="inline-block px-6 py-2 bg-black/20 shadow-md text-white rounded-lg text-sm font-medium border border-white/30 backdrop-blur-sm mr-3">
                      <span className="text-white/50 text-xs mr-2">Client</span>{" "}
                      Zilla
                    </span>
                    <span className="inline-block px-6 py-2 bg-black/20 shadow-md text-white rounded-lg text-sm font-medium border border-white/30 backdrop-blur-sm mr-3">
                      <span className="text-white/50 text-xs mr-2">
                        Industry
                      </span>{" "}
                      Cybersecurity
                    </span>
                  </div>

                  <div className="inline-block p-4 md:p-8  bg-black/20 shadow-md text-white rounded-xl text-sm font-medium border border-white/30 backdrop-blur-sm">
                    <h1 className="text-3xl lg:text-[2.75rem] font-bold text-foreground mb-8 animate-fade-in font-montserrat flex flex-wrap md:flex-nowrap   gap-4 items-start">
                      <span className="leading-[1.05]">Zilla Security:</span>
                      <span className="bg-gradient-primary bg-clip-text text-transparent leading-[1.05]">
                        Engineering the Perfect Pivot
                      </span>
                    </h1>
                    <p className="text-xl sm:text-lg text-foreground/100 mb-0 max-w-4xl leading-relaxed font-regular animate-slide-up font-montserrat">
                      Indexnine's strategic product engineering transformed a
                      niche auditing tool into a mission-critical identity
                      platform, creating exponential enterprise value.
                    </p>
                    <a id="challange1"></a>
                  </div>
                </div>
              </div>
            </section>

            {/* Overview Section */}
            <section
              className={`p-8 mb-4 bg-background relative overflow-hidden rounded-2xl  ${styles.middleCardBg2}`}
            >
              <div className=" relative z-10">
                <div className="max-w-6xl mx-auto">
                  <div className="">
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-4 font-montserrat">
                        Challenge
                      </h3>
                      <p className="text-white mb-6">
                        The client had built an auditing product capable of
                        identifying critical security gaps, but not solving
                        them. With strong demand from existing users and
                        potential new customers, Zilla wanted a solution that
                        could capitalize on this major opportunity. They needed
                        to evolve from a passive reporting tool into an active,
                        enterprise-grade management platform.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section
              className={`p-8 mb-12 bg-background relative overflow-hidden rounded-2xl  ${styles.middleCardBg2}`}
            >
              <div className=" relative z-10">
                <div className="max-w-6xl mx-auto">
                  <div className="">
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-4 font-montserrat">
                        Solution
                      </h3>
                      <p className="text-white mb-6">
                        A multi-year strategic engagement with Indexnine to
                        architect and execute a complex product pivot. This
                        involved engineering a secure, scalable provisioning
                        engine from the ground up and a continuous product
                        modernization effort to meet enterprise demands.
                      </p>
                      <div className="grid grid-cols md:grid-cols-4  gap-6 ">
                        <div className=" relative overflow-hidden bg-[#ffffff09] border border-[#ffffff15] rounded-2xl p-6 hover:shadow-glass-sm transition-all duration-500 transform hover:scale-102 hover:-translate-y-2 animate-fade-in group h-full ">
                          <div className="flex items-center gap-4 flex-col">
                            <span className="flex w-14 h-14 rounded-full bg-[#2E348233] ">
                              <Lock className="w-6 h-6 text-white m-auto" />
                            </span>
                            <span className="text-white">Secure</span>
                          </div>
                        </div>
                        <div className=" relative overflow-hidden bg-[#ffffff09] border border-[#ffffff15] rounded-2xl p-6 hover:shadow-glass-sm transition-all duration-500 transform hover:scale-102 hover:-translate-y-2 animate-fade-in group h-full ">
                          <div className="flex items-center gap-4 flex-col">
                            <span className="flex w-14 h-14 rounded-full bg-[#2E348233] ">
                              <Scale className="w-6 h-6 text-white m-auto" />
                            </span>
                            <span className="text-white">Scalable</span>
                          </div>
                        </div>
                        <div className=" relative overflow-hidden bg-[#ffffff09] border border-[#ffffff15] rounded-2xl px-2 py-6 hover:shadow-glass-sm transition-all duration-500 transform hover:scale-102 hover:-translate-y-2 animate-fade-in group h-full ">
                          <div className="flex items-center gap-4 flex-col">
                            <span className="flex w-14 h-14 rounded-full bg-[#2E348233] ">
                              <Settings className="w-6 h-6 text-white m-auto" />
                            </span>
                            <span className="text-white">
                              Provisioning Engine
                            </span>
                          </div>
                        </div>
                        <div className=" relative overflow-hidden bg-[#ffffff09] border border-[#ffffff15] rounded-2xl p-6 hover:shadow-glass-sm transition-all duration-500 transform hover:scale-102 hover:-translate-y-2 animate-fade-in group h-full ">
                          <div className="flex items-center gap-4 flex-col">
                            <span className="flex w-14 h-14 rounded-full bg-[#2E348233] ">
                              <RefreshCcw className="w-6 h-6 text-white m-auto" />
                            </span>
                            <span className="text-white">Modernization</span>
                          </div>
                        </div>
                      </div>
                      <h3 className="text-lg font-semibold text-white mb-4 mt-8 font-montserrat">
                        Key Outcomes
                      </h3>
                      <div className="grid grid-cols md:grid-cols-2  gap-6 ">
                        {[
                          "Evolved the product from a supplemental visibility tool into an indispensable, action-oriented, core operational system for enterprise customers.",
                          "By transforming the product into a comprehensive Identity Governance and Administration (IGA) platform, it could provide an IGA solution to a broader range of enterprise customers, expanding its total addressable market.",
                          "By delivering a robust, secure, and scalable platform, the client could now meet the rigorous technical and compliance standards of its expanded customer base as well as the acquisition standards of a publicly traded company.",
                          "The pivot directly enabled Zilla's acquisition by, a global leader in identity security.",
                        ].map((outcome, index) => (
                          <div
                            key={index}
                            className=" relative overflow-hidden bg-[#ffffff09] border border-[#ffffff25] rounded-2xl p-6 hover:shadow-glass-sm transition-all duration-500 transform hover:scale-102 hover:-translate-y-2 animate-fade-in group h-full"
                          >
                            <div className="flex items-center space-x-3 mb-3">
                              <div className="mr-2">
                                <span className="flex w-14 h-14 rounded-full bg-[#2E348233] ">
                                  <ArrowRightLeft className="w-6 h-6 text-white m-auto" />
                                </span>
                              </div>
                              {outcomeTitle[index]}
                            </div>
                            <div className="text-foreground text-sm">
                              {outcome}
                            </div>
                          </div>
                        ))}
                      </div>
                      <a id="challange2" className="absolute mt-[-40px]"></a>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* Challenge Section */}
            <section className="p-8 backdrop-blur-xl bg-[#00000010] border border-[#00000005] relative mb-4 rounded-2xl shadow-inner shadow-white shadow-4xl">
              <div className="mx-auto relative z-10">
                <div className="max-w-8xl mx-auto">
                  <h3 className="text-lg font-semibold text-brand-primary-dark  mb-4 font-montserrat">
                    Challenge
                  </h3>
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground-dark mb-8 font-montserrat">
                    The Paradox of Visibility in a Sprawling Digital Estate
                  </h2>

                  <div className=" my-8 flex">
                    <img
                      src={CaseInrImg}
                      className="w-full h-96 object-cover"
                    />
                  </div>
                  <p className="text-md text-foreground-dark leading-relaxed mb-8">
                    The IT landscape is a chaotic one; applications and data are
                    no longer confined exclusively to a secure, on-premise data
                    center; they're distributed across hundreds of SaaS
                    platforms like Salesforce and SAP, multiple cloud providers,
                    and countless homegrown systems. For a Chief Information
                    Security Officer (CISO), this creates a nightmare scenario
                    for managing who has access to what.
                  </p>

                  <p className="text-md text-foreground-dark leading-relaxed mb-8">
                    Zilla Security was founded to solve just this problem. Their
                    initial product was brilliant: an auditing tool that could
                    connect to this fragmented digital estate and give CISOs a
                    unified view of all user permissions, answering at a glance
                    the fundamental, critical question of infosec: "Who has
                    access to things they shouldn't?"
                  </p>

                  <p className="text-md text-foreground-dark leading-relaxed mb-8">
                    The product was a success. Zilla quickly acquired 100+
                    customers, including major enterprises like United Airlines.
                    They'd successfully navigated the launch phase of their
                    product lifecycle. But in doing so, they found a new
                    challenge.
                  </p>

                  <div
                    className={`p-8 bg-background relative  rounded-xl mb-6 ${styles.middleCardBg2}`}
                  >
                    <div className=" absolute transform rotate-180 -left-[1rem] -top-[1rem]">
                      <QuoteIcon
                        className="w-12 h-12 text-brand-purple/50"
                        strokeWidth={1}
                      />
                    </div>
                    <p className="text-lg text-foreground leading-relaxed italic">
                      "This is great, you've shown me that I have security
                      issues. Now, how do I fix them?"
                    </p>
                    <p className="text-sm text-right text-foreground/60 mt-2">
                      — Consistent customer feedback across 100+ enterprise
                      clients
                    </p>
                  </div>

                  <p className="text-md text-foreground-dark leading-relaxed">
                    Their customers loved the reports, but they all came back
                    with the same feedback. With customers empowered to see
                    problems instantaneously, they wanted a way to solve those
                    problems just as fast. Zilla found itself with a product
                    that could show customers their security problems. Now, they
                    needed the product to offer security solutions. Until it was
                    overcome, this customer friction could prove a roadblock to
                    continued growth and a potential threat to the company's
                    long-term viability. They were at a strategic inflection
                    point and needed a partner with the technical depth and
                    product development expertise to help them navigate their
                    next move.
                  </p>
                </div>
              </div>
            </section>

            {/* Solution Section */}
            <section className="p-8 backdrop-blur-xl bg-[#00000010] border border-[#00000005] relative rounded-2xl  mb-12 shadow-inner shadow-white shadow-4xl">
              <div className="mx-auto relative z-10">
                <div className="max-w-8xl mx-auto">
                  <h3 className="text-lg font-semibold text-brand-primary-dark  mb-4 font-montserrat">
                    Our Solution
                  </h3>
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground-dark mb-8 font-montserrat">
                    The Pivot, From Audit to Action
                  </h2>

                  <p className="text-lg text-foreground-dark leading-relaxed mb-12">
                    The client's challenge was a perfect match for the core DNA
                    of Indexnine. This wasn't a simple feature request; it was a
                    mission-critical product pivot that required a decisive
                    intersection of experienced strategic consulting and
                    best-in-class engineering execution.
                  </p>

                  <div className="space-y-12">
                    {/* Phase 1 */}
                    <div className="grid md:grid-cols-12 gap-8 items-start">
                      <div className="md:col-span-1">
                        <span className="flex w-12 h-12 rounded-full bg-[#505DFD] ">
                          <span className="font-light text-xl text-foreground m-auto">
                            1
                          </span>
                        </span>
                      </div>
                      <div className="md:col-span-11 backdrop-blur-xl bg-[#ffffff] border border-glass-border rounded-2xl p-6">
                        <h3 className="text-2xl font-semibold text-foreground-dark mb-4 font-montserrat">
                          Phase 1: Charting the Course
                        </h3>
                        <p className="text-foreground-dark-muted leading-relaxed">
                          Our engagement began with a series of in-depth
                          strategy workshops led by our Discovery and
                          Engineering studios. We worked closely with client
                          leadership to internalize their customer feedback and
                          map out a new product vision. Plans quickly took shape
                          on how to evolve the product from a passive, read-only
                          auditing tool into an active, read-write provisioning
                          platform capable of identifying and remediating access
                          issues entirely within the product.
                        </p>
                      </div>
                    </div>

                    {/* Phase 2 */}
                    <div className="grid md:grid-cols-12 gap-8 items-start">
                      <div className="md:col-span-1">
                        <span className="flex w-12 h-12 rounded-full bg-[#505DFD] ">
                          <span className="font-light text-xl text-foreground m-auto">
                            2
                          </span>
                        </span>
                      </div>
                      <div className="md:col-span-11 backdrop-blur-xl bg-glass-bg/10 border border-glass-border rounded-2xl p-6">
                        <h3 className="text-2xl font-semibold text-foreground-dark mb-4 font-montserrat">
                          Phase 2: Engineering an Enterprise-Grade Provisioning
                          Engine
                        </h3>
                        <p className="text-foreground-dark leading-relaxed mb-6">
                          Moving from a system that reports on permissions to
                          one that changes them is an order-of-magnitude
                          increase in technical complexity. It required us to
                          architect and build a secure, scalable, and resilient
                          provisioning engine from the ground up. This involved
                          solving several substantial challenges:
                        </p>

                        <div className="grid md:grid-cols-2 gap-6">
                          <div className="backdrop-blur-xl bg-[#fff] border border-glass-border rounded-2xl p-6">
                            <h4 className="font-semibold text-foreground-dark mb-2">
                              API Integration at Enterprise Scale
                            </h4>
                            <p className="text-sm text-foreground-dark-muted">
                              The engine needed to communicate with hundreds of
                              disparate third-party systems. This meant
                              architecting a highly extensible integration
                              framework capable of handling modern REST APIs,
                              legacy SOAP APIs, and everything in between.
                            </p>
                          </div>
                          <div className="backdrop-blur-xl bg-[#fff] border border-glass-border rounded-2xl p-6">
                            <h4 className="font-semibold text-foreground-dark mb-2">
                              Transactional State Management
                            </h4>
                            <p className="text-sm text-foreground-dark-muted">
                              The system had to guarantee that when a user's
                              access was revoked, it was revoked across all
                              target systems. We implemented a sophisticated,
                              transactional state management architecture with
                              robust rollback capabilities.
                            </p>
                          </div>
                          <div className="backdrop-blur-xl bg-[#fff] border border-glass-border rounded-2xl p-6">
                            <h4 className="font-semibold text-foreground-dark mb-2">
                              Security-First, Zero-Trust Design
                            </h4>
                            <p className="text-sm text-foreground-dark-muted">
                              As a security product that would be granted
                              privileged access to a client's most sensitive
                              systems, the provisioning engine itself had to be
                              a fortress with least-privilege access, end-to-end
                              encryption, and comprehensive audit logging.
                            </p>
                          </div>
                          <div className="backdrop-blur-xl bg-[#fff] border border-glass-border rounded-2xl p-6">
                            <h4 className="font-semibold text-foreground-dark mb-2">
                              Scalable Microservices Architecture
                            </h4>
                            <p className="text-sm text-foreground-dark-muted">
                              To handle the load of managing millions of
                              permissions across enterprises, we architected the
                              provisioning engine using a microservices-based
                              approach allowing independent scaling for
                              different system integrations.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Phase 3 */}
                    <div className="grid md:grid-cols-12 gap-8 items-start">
                      <div className="md:col-span-1">
                        <span className="flex w-12 h-12 rounded-full bg-[#505DFD] ">
                          <span className="font-light text-xl text-foreground m-auto">
                            3
                          </span>
                        </span>
                      </div>
                      <div className="md:col-span-11 backdrop-blur-xl bg-glass-bg/10 border border-glass-border rounded-2xl p-6">
                        <h3 className="text-2xl font-semibold text-foreground-dark mb-4 font-montserrat">
                          Phase 3: Continuous Product Modernization for an
                          Enterprise Future
                        </h3>
                        <p className="text-foreground-dark-muted leading-relaxed mb-6">
                          Our partnership didn't end with the launch of the
                          provisioning engine. As Zilla grew and entered the
                          acquisition conversation with an interested party, the
                          demands on the platform increased. The client expanded
                          our engagement, leveraging Indexnine's product
                          development expertise to focus on product
                          modernization to ensure the platform stayed ahead of
                          the curve:
                        </p>

                        <div className="grid md:grid-cols-2 gap-6">
                          <div className="backdrop-blur-xl bg-[#fff] border border-glass-border rounded-2xl p-6">
                            <h4 className="font-semibold text-foreground-dark mb-2">
                              Refactoring for Enterprise-Grade Security
                            </h4>
                            <p className="text-sm text-foreground-dark-muted">
                              We worked to refactor and harden the codebase to
                              meet the rigorous security and compliance
                              standards of a publicly traded company, aligned
                              with our ISO 27001 certification standards.
                            </p>
                          </div>
                          <div className="backdrop-blur-xl bg-[#fff] border border-glass-border rounded-2xl p-6">
                            <h4 className="font-semibold text-foreground-dark mb-2">
                              Performance and Scalability Optimization
                            </h4>
                            <p className="text-sm text-foreground-dark-muted">
                              We continuously monitored and optimized the
                              platform for performance, safeguarding it against
                              increasing load demands from larger and more
                              exacting enterprise clients without degradation.
                            </p>
                          </div>
                        </div>
                        <a id="value"></a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Results Section */}
            <section className="bg-gradient-to-r from-[#fff] to-[#899CFF10] shadow-xl rounded-2xl border border-[#00000025] p-8 mb-12">
              <div className="container mx-auto px-6 lg:px-8">
                <div className="max-w-5xl mx-auto">
                  <h2 className="text-2xl font-bold text-foreground-dark mb-12 text-center font-montserrat">
                    The Value of Excellence
                  </h2>
                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                    <div
                      className={`rounded-xl py-4 px-1  text-center border border-[#505DFD] ${styles.middleCardBg2}`}
                    >
                      <h3 className="text-3xl font-bold text-white mb-2 font-montserrat">
                        $165M+
                      </h3>
                      <p className="text-foreground text-xs mb-0">
                        Acquisition Value
                      </p>
                      <span className="inline-block w-12 h-1 rounded-sm bg-[#ffffff75]"></span>
                    </div>

                    <div
                      className={`rounded-xl py-4 px-1  text-center border border-[#505DFD] ${styles.middleCardBg2}`}
                    >
                      <h3 className="text-3xl font-bold text-white mb-2 font-montserrat">
                        100+
                      </h3>
                      <p className="text-foreground text-xs mb-0">
                        Enterprise Customers
                      </p>
                      <span className="inline-block w-12 h-1 rounded-sm bg-[#ffffff75]"></span>
                    </div>

                    <div
                      className={`rounded-xl py-4 px-1  text-center border border-[#505DFD] ${styles.middleCardBg2}`}
                    >
                      <h3 className="text-3xl font-bold text-white mb-2 font-montserrat">
                        Mission
                      </h3>
                      <p className="text-foreground text-xs mb-0">
                        Critical Status
                      </p>
                      <span className="inline-block w-12 h-1 rounded-sm bg-[#ffffff75]"></span>
                    </div>

                    <div
                      className={`rounded-xl py-4 px-1  text-center border border-[#505DFD] ${styles.middleCardBg2}`}
                    >
                      <h3 className="text-3xl font-bold text-white mb-2 font-montserrat">
                        IGA
                      </h3>
                      <p className="text-foreground text-xs mb-0">
                        Platform Evolution
                      </p>
                      <span className="inline-block w-12 h-1 rounded-sm bg-[#ffffff75]"></span>
                    </div>
                  </div>
                  <div className="mb-12">
                    <h3 className="text-xl font-bold text-foreground-dark mb-6 font-montserrat text-center">
                      Excellence Values Delivered
                    </h3>

                    <div className="grid md:grid-cols-2 gap-6">
                      {[
                        "Transformed a Feature into a Platform: Our work elevated Zilla from a niche auditing tool into a comprehensive IGA platform. This dramatically increased their TAM and positioned them as a major player in the cybersecurity landscape.",
                        'Created a Mission-Critical Product: By solving the problems identified by the original auditing tool, the product we helped build became indispensable to customers. It elevated the client\'s product from a "nice-to-have" tool to a "must-have" operational system for managing enterprise security.',
                        "Enhanced Long-Term Viability, Eliminated Tech Debt: Our continuous focus on product modernization and enterprise-grade architecture meant avoiding massive technical debt and increasing the client's appeal to prospective acquirers as a mature, scalable, and secure technology platform ready for immediate integration into a portfolio.",
                        "Enabled a $165M+ Acquisition: The strategic pivot from auditing to provisioning was the single most critical factor in Zilla's acquisition. We didn't just build a feature; we helped build the core asset that created exponential enterprise value.",
                      ].map((result, index) => (
                        <div className="mb-4">
                          <span className="inline-block w-full h-1 rounded-sm bg-gradient-to-r from-brand-purple/50 via-[#505CFD] to-brand-purple/50 mb-2"></span>

                          <div
                            key={index}
                            className="flex flex-col text-center"
                          >
                            <span className="mx-auto flex w-14 h-14 rounded-full bg-gradient-to-r from-[#505CFD19] to-brand-purple/20 mb-2">
                              {exlnceIcons[index]}
                            </span>
                            <span className="text-foreground-dark">
                              {result}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div
                    className={`p-8 bg-background relative rounded-xl mb-6 ${styles.middleCardBg2}`}
                  >
                    <p className="text-lg text-foreground text-center font-medium">
                      Our partnership with Zilla Security exemplifies how
                      strategic product engineering can transform market
                      positioning, create exponential value, and deliver
                      outcomes that exceed expectations.
                    </p>
                    <a id="whyWorked"></a>
                  </div>
                </div>
              </div>
            </section>

            {/* ehy worked Section */}
            <section className="bg-gradient-to-r from-[#fff] to-[#899CFF10] shadow-xl rounded-2xl border border-[#00000025] p-8 mb-12">
              <div className="container mx-auto px-6 lg:px-8">
                <div className="max-w-5xl mx-auto">
                  <div className="mb-0">
                    <h3 className="text-xl font-bold text-foreground-dark mb-6 font-montserrat text-center">
                      Why It Worked
                      <br />
                      <span className="inline-block w-24 h-1 rounded-sm bg-gradient-to-r from-brand-purple/50 via-[#505CFD] to-brand-purple/50"></span>
                    </h3>
                    <p className="text-md text-foreground-dark-muted text-center mb-8">
                      The Zilla Security story is a quintessential example of
                      our core values and differentiators in action.
                    </p>

                    <div className="grid md:grid-cols-2 gap-6">
                      {[
                        "Product-centric Development: Our team, with its ingrained product mindset, understood the strategic importance of customer feedback and leveraged it to inform our vision for the client's pivot.",
                        "Deep Engineering Expertise: Building a secure, scalable provisioning engine is a formidable engineering challenge. Having industry  veterans with years of expertise in API integration, microservices architecture, and enterprise security was critical to the project's success.",
                        "Partnership Across the Product Lifecycle: Our engagement spanned multiple phases, from the critical 'Pivot' phase into the ongoing 'Mature' phase of Zilla's ongoing and evolving success. We believe in  commitment to our clients as a long-term strategic partner.",
                        "A Founder's Mindset : We approached the problem with the same sense of urgency  and ownership as the client's leadership team. We understood that the success of this pivot was a defining moment for the company, and we would deliver nothing less than excellence for it.",
                      ].map((result, index) => (
                        <div className="mb-4">
                          <span className="inline-block w-full h-1 rounded-sm bg-gradient-to-r from-brand-purple/50 via-[#505CFD] to-brand-purple/50 mb-2"></span>

                          <div
                            key={index}
                            className="flex flex-col text-center"
                          >
                            <span className="mx-auto flex w-14 h-14 rounded-full bg-gradient-to-r from-[#505CFD19] to-brand-purple/20 mb-2">
                              <CheckCircle className="w-6 h-6 text-[#8389DC] m-auto " />
                            </span>
                            <span className="text-foreground-dark">
                              {result}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <section className={`py-24 lg:py-32 ${styles.ctaBg}`}>
        <div className="container mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold mb-6 text-foreground-white">
            <span className="leading-[1.4]">
              Ready to Engineer Your Perfect Pivot?
            </span>
          </h2>
          <p className="text-xl text-foreground/80 mb-8 max-w-3xl mx-auto font-montserrat">
            For any company at a strategic crossroads, we provide the
            transformative power of strategic product engineering. Our work with
            Zilla reinforces our firm belief that, with the right partner, a
            major challenge can be engineered into a market-defining
            opportunity.
          </p>
          <p className="text-lg text-foreground/70 mb-12 max-w-xl mx-auto font-montserrat">
            Want to take your product to the next level? So do we. Set up a free
            consultation with Indexnine today.
          </p>
          <Button variant="btnSecondary" size="lg">
            Get Started
          </Button>
        </div>
      </section>
      <div className="bg-background">
        <Footer />
      </div>
    </div>
  );
};

export default PivotCaseStudy;
