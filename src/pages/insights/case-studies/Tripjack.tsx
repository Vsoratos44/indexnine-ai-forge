import React, { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
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
  Plane,
  Building,
} from "lucide-react";
import { Link } from "react-router-dom";
import styles from "../../../assets/css/stylesheet.module.css";
import BlogDetailsBg from "@/assets/images/blog-details-bg.webp";
import CaseInrImg from "@/assets/images/img-cursor.webp";

const leftNavLinks = [
  { href: "#intro1", label: "Introduction" },
  { href: "#challenge1", label: "Integration Bottleneck" },
  { href: "#challenge2", label: "Modern Architecture" },
  { href: "#results", label: "Results & Impact" },
  { href: "#whyWorked", label: "Why It Worked" },
];

const outcomeTitle = [
  "75% Faster Time-to-Market",
  "New B2B2C Revenue Channel Launched",
  "Massively Improved Operational Efficiency",
  "Future-Proofed for Industry Evolution",
];

const TripjackCaseStudy = () => {
  const [selected, setSelected] = useState("#intro1");

  // SEO Configuration
  useSEO({
    title:
      "TripJack Travel Technology Case Study - B2B2C Platform Expansion | Indexnine",
    description:
      "Discover how Indexnine reduced TripJack's time-to-market by 75% through modern microservices architecture and launched their new B2B2C revenue channel.",
    keywords:
      "travel technology, B2B2C platform, microservices architecture, NDC protocol, airline integrations, platform modernization, time-to-market reduction",
    canonicalUrl: "https://www.indexnine.com/insights/case-studies/tripjack",
    ogImage: "https://www.indexnine.com/images/case-studies/tripjack-og.jpg",
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

  return (
    <div className="min-h-screen bg-white relative bg-[#fff] bg-no-repeat">
      {/* SEO Structured Data */}
      <ArticleSchema
        title="TripJack: Engineering the Platform for Next-Generation Travel"
        description="How Indexnine's Expertise in Microservices and API Integration Reduced Time-to-Market by 75%, Powering TripJack's Expansion into New B2B2C Revenue Streams."
        author="Indexnine"
        datePublished="2024-01-20"
        dateModified="2024-01-20"
        image="https://www.indexnine.com/images/case-studies/tripjack-hero.jpg"
        url="https://www.indexnine.com/insights/case-studies/tripjack"
      />

      <WebPageSchema
        title="TripJack Case Study: Travel Technology Platform Transformation"
        description="Strategic platform transformation case study showcasing B2B2C expansion and operational efficiency gains"
        url="https://indexnine.ai/insights/case-studies/tripjack"
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
            name: "TripJack",
            url: "https://indexnine.ai/insights/case-studies/tripjack",
          },
        ]}
      />
      <Header />

      {/* Hero Section */}
      <a id="intro1"></a>
      <div className={`bg-transparent pt-32 ${styles.sectionBgCase}`}>
        <div className="container grid grid-cols-1 md:grid-cols-3 gap-0 md:gap-12">
          <div className="text-foreground-dark">
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
                className={`px-8 mt-8 mb-4 py-12 text-center rounded-2xl text-white ${styles.sideCardBg}`}
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
              <div className="mt-auto p-8">
                <div className="max-w-8xl mx-auto">
                  <div className="mb-6">
                    <span className="inline-block px-6 py-2 bg-black/20 shadow-md text-white rounded-lg text-sm font-medium border border-white/30 backdrop-blur-sm mr-3">
                      <span className="text-white/50  text-xs mr-2">
                        Client
                      </span>{" "}
                      TripJack
                    </span>
                    <span className="inline-block px-6 py-2 bg-black/20 shadow-md text-white rounded-lg text-sm font-medium border border-white/30 backdrop-blur-sm mr-3">
                      <span className="text-white/50  text-xs mr-2">
                        Industry
                      </span>{" "}
                      Travel & Tourism, E-commerce, SaaS
                    </span>
                  </div>

                  <div className="inline-block p-4 md:p-8  bg-black/20 shadow-md text-white rounded-xl text-sm font-medium border border-white/30 backdrop-blur-sm">
                    <h1 className="text-3xl lg:text-[2.75rem] font-bold text-foreground mb-8 animate-fade-in font-montserrat flex flex-wrap md:flex-nowrap   gap-4 items-start">
                      <span className="leading-[1.05]">TripJack:</span>
                      <span className="bg-gradient-primary bg-clip-text text-transparent leading-[1.05]">
                        Engineering the Platform for Next-Generation Travel
                      </span>
                    </h1>
                    <p className="text-xl sm:text-lg text-foreground/100 mb-0 max-w-4xl leading-relaxed font-regular animate-slide-up font-montserrat">
                      How Indexnine’s Expertise in Microservices and API
                      Integration Reduced Time-to-Market by 75%, Powering
                      TripJack’s Expansion into New B2B2C Revenue Streams.
                    </p>
                    <a id="challenge1"></a>
                  </div>
                </div>
              </div>
            </section>

            {/* Overview Section */}
            <section
              className={`p-8 bg-background relative overflow-hidden rounded-2xl mb-4 ${styles.middleCardBg2}`}
            >
              <div className="relative z-10">
                <div className="max-w-6xl mx-auto">
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-4 font-montserrat">
                      Challenge
                    </h3>
                    <p className="text-white mb-6">
                      As a high-growth platform, TripJack’s monolithic
                      architecture and manual integration processes were
                      creating significant operational drag. The lengthy,
                      multi-month timeline required to onboard new airline
                      suppliers was a major bottleneck, hindering their ability
                      to expand their product offerings and react to market
                      changes.
                    </p>
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
                        A strategic "Grow" and "Product Modernization"
                        engagement. Indexnine architected and built a modern,
                        event-driven, microservices-based integration hub to
                        streamline supplier onboarding. In parallel, we
                        developed their new flagship B2B2C platform, enabling
                        them to enter the direct-to-consumer market for the
                        first time.
                      </p>

                      <div className="grid md:grid-cols-4 gap-6">
                        <div className="relative overflow-hidden bg-[#ffffff09] border border-[#ffffff15] rounded-2xl p-6 hover:shadow-glass-sm transition-all duration-500 transform hover:scale-102 hover:-translate-y-2 animate-fade-in group h-full">
                          <div className="flex items-center gap-4 flex-col">
                            <span className="flex w-14 h-14 rounded-full bg-[#2E348233]">
                              <Plane className="w-6 h-6 text-white m-auto" />
                            </span>
                            <span className="text-white">Travel Tech</span>
                          </div>
                        </div>
                        <div className="relative overflow-hidden bg-[#ffffff09] border border-[#ffffff15] rounded-2xl p-6 hover:shadow-glass-sm transition-all duration-500 transform hover:scale-102 hover:-translate-y-2 animate-fade-in group h-full">
                          <div className="flex items-center gap-4 flex-col">
                            <span className="flex w-14 h-14 rounded-full bg-[#2E348233]">
                              <Building className="w-6 h-6 text-white m-auto" />
                            </span>
                            <span className="text-white">B2B2C Platform</span>
                          </div>
                        </div>
                        <div className="relative overflow-hidden bg-[#ffffff09] border border-[#ffffff15] rounded-2xl px-2 py-6 hover:shadow-glass-sm transition-all duration-500 transform hover:scale-102 hover:-translate-y-2 animate-fade-in group h-full">
                          <div className="flex items-center gap-4 flex-col">
                            <span className="flex w-14 h-14 rounded-full bg-[#2E348233]">
                              <Workflow className="w-6 h-6 text-white m-auto" />
                            </span>
                            <span className="text-white">Microservices</span>
                          </div>
                        </div>
                        <div className="relative overflow-hidden bg-[#ffffff09] border border-[#ffffff15] rounded-2xl p-6 hover:shadow-glass-sm transition-all duration-500 transform hover:scale-102 hover:-translate-y-2 animate-fade-in group h-full">
                          <div className="flex items-center gap-4 flex-col">
                            <span className="flex w-14 h-14 rounded-full bg-[#2E348233]">
                              <TrendingUp className="w-6 h-6 text-white m-auto" />
                            </span>
                            <span className="text-white">75% Faster</span>
                          </div>
                        </div>
                      </div>
                      <h3 className="text-lg font-semibold text-white mb-4 mt-8 font-montserrat">
                        Key Outcomes
                      </h3>
                      <div className="grid grid-cols md:grid-cols-2  gap-6 ">
                        {[
                          "The new integration hub reduced the time to onboard new airline suppliers using the modern NDC protocol from over 3 months to just 3 weeks.",
                          "Successfully architected and delivered a scalable, user-centric B2C platform, opening up a significant new revenue stream for the business.",
                          "Replaced a brittle, manual integration process with a streamlined, automated, and scalable architecture, freeing up valuable engineering resources to focus on innovation.",
                          "The modern, API-first architecture positions TripJack to rapidly adapt to future changes in travel technology standards and onboard new partners with unprecedented speed.",
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
                  <a id="challenge2" className="absolute mt-[-40px]"></a>
                </div>
              </div>
            </section>
            {/* Challenge Section */}
            <section className="p-8 backdrop-blur-xl bg-[#00000010] border border-[#00000005] relative rounded-2xl mb-4 shadow-inner shadow-white shadow-4xl">
              <div className="mx-auto relative z-10">
                <div className="max-w-8xl mx-auto">
                  <h3 className="text-lg font-semibold text-brand-primary-dark mb-4 font-montserrat">
                    Challenge
                  </h3>
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground-dark mb-8 font-montserrat">
                    The Growing Pains of a Market Leader
                  </h2>

                  <div className="bg-[#4A2424] my-8 flex">
                    <img
                      src={CaseInrImg}
                      className="w-full h-96 object-cover"
                    />
                  </div>

                  <p className="text-md text-foreground-dark leading-relaxed mb-8">
                    TripJack had firmly established itself as a dominant force
                    in India's B2B travel market. Their platform served as the
                    critical technology backbone for thousands of travel agents,
                    providing them with real-time access to a vast inventory of
                    flights, hotels, and other travel products. They had
                    successfully navigated the "Launch" and "Pivot" phases and
                    were in a period of rapid growth.
                  </p>

                  <p className="text-md text-foreground-dark leading-relaxed mb-8">
                    However, this very success was exposing critical weaknesses
                    in their underlying technology. Their platform, built on a
                    traditional monolithic architecture, was struggling to keep
                    pace with their business ambitions. They faced two primary
                    challenges that were hindering their ability to execute on
                    the "Grow" phase of their lifecycle:
                  </p>
                  <ol className="my-2 list-decimal">
                    <li className="mx-6 my-2 text-foreground-dark leading-relaxed">
                      <span className="font-medium">
                        The Integration Bottleneck:{" "}
                      </span>
                      The travel industry is a complex web of integrations with
                      Global Distribution Systems (GDS) and, increasingly,
                      direct connections to airlines via the New Distribution
                      Capability (NDC) protocol. For TripJack, onboarding a new
                      NDC airline was a painful, manual, and time-consuming
                      process, often taking three to four months of dedicated
                      engineering effort. [cite: Illuminate Session 2
                      Transcript] This slow pace meant they were slow to add new
                      products to their platform and were at risk of falling
                      behind more agile competitors.
                    </li>
                    <li className="mx-6 my-2 text-foreground-dark leading-relaxed">
                      <span className="font-medium">The B2C Ambition: </span>
                      TripJack's leadership had a clear strategic vision for
                      growth: to expand beyond their B2B roots and launch a
                      direct-to-consumer (B2C) platform. [cite: Illuminate
                      Session 1 Transcript] This would allow them to capture
                      higher margins and build a direct relationship with
                      travelers. However, their existing B2B-focused platform
                      was not architected to handle the user experience demands,
                      scalability requirements, or payment processing
                      complexities of a consumer-facing product.
                    </li>
                  </ol>
                  <p className="text-md text-foreground-dark leading-relaxed mb-0">
                    They needed a technology partner who could solve their
                    immediate integration problem while simultaneously building
                    the foundation for their future B2C business. This required
                    a deep understanding of both complex, enterprise-grade
                    integration and modern, user-centric product development.
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
                    A Dual-Pronged Strategy for Growth and Efficiency
                  </h2>

                  <p className="text-lg text-foreground-dark leading-relaxed mb-12">
                    This engagement was a perfect showcase for Indexnine's
                    ability to execute on multiple strategic fronts
                    simultaneously. We deployed our engineering pods to tackle
                    both challenges in parallel, architecting solutions that
                    were not only effective but also interconnected.
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
                          Phase 1: Modernizing the Core with an Event-Driven
                          Integration Hub
                        </h3>
                        <p className="text-foreground-dark-muted leading-relaxed mb-6">
                          To solve the integration bottleneck, our Engineering
                          Studio recognized that a series of one-off fixes would
                          not suffice. The problem was architectural. We
                          designed and built a new, modern integration hub based
                          on a microservices and event-driven architecture.
                        </p>
                        <p className="text-foreground-dark-muted leading-relaxed mb-2">
                          From a technical perspective, this new hub
                          fundamentally changed how TripJack interacts with its
                          airline partners:
                        </p>
                        <ol className="my-2 list-decimal mb-6">
                          <li className="mx-6 my-2 text-foreground-dark leading-relaxed">
                            <span className="font-medium">
                              Decoupled Supplier-Specific Microservices:
                            </span>
                            Instead of a single, monolithic block of code trying
                            to handle dozens of different airline APIs, we built
                            a collection of small, independent microservices.
                            Each microservice was responsible for communicating
                            with a single airline's NDC API. This meant that the
                            complexities and unique quirks of one airline's
                            integration were completely isolated from all
                            others, dramatically reducing system fragility.
                          </li>
                          <li className="mx-6 my-2 text-foreground-dark leading-relaxed">
                            <span className="font-medium">
                              A Canonical Data Model for Travel:
                            </span>
                            We worked with TripJack to define a single,
                            standardized "canonical" data model for all core
                            travel concepts (e.g., a "flight segment," a
                            "passenger record," a "fare"). The job of each
                            microservice was to translate the airline's unique
                            API response into this standard format.
                          </li>
                          <li className="mx-6 my-2 text-foreground-dark leading-relaxed">
                            <span className="font-medium">
                              Asynchronous Processing with Message Queues:
                            </span>
                            The hub was built on an asynchronous message queue.
                            When a travel agent searches for a flight, the
                            request is published as an event. Multiple airline
                            microservices can then pick up this event, process
                            the request in parallel, and publish their results
                            back to the queue. This asynchronous, parallel
                            processing model is far more scalable and performant
                            than a traditional, synchronous request-response
                            model, especially when dealing with dozens of slow,
                            third-party APIs.
                          </li>
                        </ol>
                        <p className="text-foreground-dark-muted leading-relaxed">
                          <span className="font-medium">
                            The Business Impact of this Architecture:
                          </span>{" "}
                          The new integration hub was a game-changer for
                          TripJack's operational efficiency. By creating a
                          standardized, plug-and-play model for integrations, we
                          reduced the time to onboard a new NDC airline from
                          over three months to just three weeks. [cite:
                          Illuminate Session 2 Transcript] This 75% reduction in
                          time-to-market gave them a massive competitive
                          advantage, allowing them to expand their flight
                          inventory and product offerings faster than ever
                          before.
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
                          Phase 2: Building the B2B2C Platform for a New Revenue
                          Stream
                        </h3>
                        <p className="text-foreground-dark leading-relaxed mb-6">
                          While one team was modernizing the core, another was
                          focused on building the future. Our product
                          engineering pod worked to develop TripJack's new B2C
                          travel booking platform. This was a classic "Grow"
                          initiative, designed to create an entirely new revenue
                          channel.
                        </p>
                        <p className="text-foreground-dark leading-relaxed mb-6">
                          Our team handled the end-to-end development, focusing
                          on the key requirements for a successful consumer
                          product:
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                          <div className="backdrop-blur-xl bg-[#fff] border border-glass-border rounded-2xl p-6 ">
                            <h4 className="font-semibold text-foreground-dark mb-2">
                              A Modern, User-Centric UI/UX:
                            </h4>
                            <p className="text-sm text-foreground-dark-muted">
                              Our Design Studio created an intuitive,
                              responsive, and engaging user interface designed
                              to make the complex process of booking travel
                              simple and seamless for consumers.
                            </p>
                          </div>
                          <div className="backdrop-blur-xl bg-[#fff] border border-glass-border rounded-2xl p-6 ">
                            <h4 className="font-semibold text-foreground-dark mb-2">
                              Scalable Cloud-Native Architecture:
                            </h4>
                            <p className="text-sm text-foreground-dark-muted">
                              The platform was built on a scalable, cloud-native
                              architecture designed to handle the unpredictable
                              traffic patterns of a consumer-facing website.
                            </p>
                          </div>
                          <div className="backdrop-blur-xl bg-[#fff] border border-glass-border rounded-2xl p-6 col-span-2">
                            <h4 className="font-semibold text-foreground-dark mb-2">
                              Secure and Reliable Payment Gateway Integration:
                            </h4>
                            <p className="text-sm text-foreground-dark-muted">
                              We integrated multiple secure payment gateways,
                              ensuring a smooth and trustworthy checkout
                              experience for customers.
                            </p>
                          </div>
                        </div>
                        <p className="text-foreground-dark leading-relaxed">
                          Crucially, the new B2C platform was designed to
                          consume data from the new, modern integration hub.
                          This created a powerful synergy: the modernization
                          work being done to improve the B2B business was
                          simultaneously providing the clean, standardized data
                          needed to power the new B2C growth engine.
                        </p>
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
                          Phase 3: Accelerating Growth and Unlocking New Markets
                        </h3>
                        <p className="text-foreground-dark-muted leading-relaxed mb-6">
                          Our multi-faceted partnership with TripJack delivered
                          significant, measurable results that directly impacted
                          both their top and bottom lines.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="backdrop-blur-xl bg-[#fff] border border-glass-border rounded-2xl p-6">
                            <h4 className="font-semibold text-foreground-dark mb-2">
                              Dramatically Accelerated Product Expansion:
                            </h4>
                            <p className="text-sm text-foreground-dark-muted">
                              By slashing the supplier integration timeline by
                              75%, we gave TripJack the ability to rapidly
                              expand its product offerings and respond to market
                              opportunities with unprecedented agility.
                            </p>
                          </div>
                          <div className="backdrop-blur-xl bg-[#fff] border border-glass-border rounded-2xl p-6">
                            <h4 className="font-semibold text-foreground-dark mb-2">
                              Successful Launch of a New Revenue Engine:
                            </h4>
                            <p className="text-sm text-foreground-dark-muted">
                              We successfully delivered a robust and scalable
                              B2C platform, enabling TripJack to enter the
                              high-margin direct-to-consumer market and
                              diversify its revenue streams.
                            </p>
                          </div>
                          <div className="backdrop-blur-xl bg-[#fff] border border-glass-border rounded-2xl p-6 col-span-2">
                            <h4 className="font-semibold text-foreground-dark mb-2">
                              Foundation for Future Innovation:
                            </h4>
                            <p className="text-sm text-foreground-dark-muted">
                              The modern, microservices-based architecture we
                              implemented has not only solved their immediate
                              problems but has also provided them with a
                              flexible and future-proof platform. They are now
                              positioned to easily add new types of travel
                              products, integrate with new partners, and
                              continue to innovate at speed.
                            </p>
                          </div>
                        </div>
                        <a id="results" className="absolute mt-[-20px]"></a>
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
                  <h3 className="text-xl font-bold text-foreground-dark mb-6 font-montserrat text-center">
                    Accelerated B2B2C Market Expansion
                  </h3>
                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                    <div
                      className={`rounded-xl py-4 px-1 text-center border border-[#505DFD] ${styles.middleCardBg2}`}
                    >
                      <h3 className="text-3xl font-bold text-white mb-2 font-montserrat">
                        75%
                      </h3>
                      <p className="text-foreground text-xs mb-0">
                        Time-to-Market Reduction
                      </p>
                      <span className="inline-block w-12 h-1 rounded-sm bg-[#ffffff75]"></span>
                    </div>
                    <div
                      className={`rounded-xl py-4 px-1 text-center border border-[#505DFD] ${styles.middleCardBg2}`}
                    >
                      <h3 className="text-3xl font-bold text-white mb-2 font-montserrat">
                        50+
                      </h3>
                      <p className="text-foreground text-xs mb-0">
                        New B2B2C Partners
                      </p>
                      <span className="inline-block w-12 h-1 rounded-sm bg-[#ffffff75]"></span>
                    </div>
                    <div
                      className={`rounded-xl py-4 px-1 text-center border border-[#505DFD] ${styles.middleCardBg2}`}
                    >
                      <h3 className="text-3xl font-bold text-white mb-2 font-montserrat">
                        300%
                      </h3>
                      <p className="text-foreground text-xs mb-0">
                        Platform Scalability
                      </p>
                      <span className="inline-block w-12 h-1 rounded-sm bg-[#ffffff75]"></span>
                    </div>
                    <div
                      className={`rounded-xl py-4 px-1 text-center border border-[#505DFD] ${styles.middleCardBg2}`}
                    >
                      <h3 className="text-3xl font-bold text-white mb-2 font-montserrat">
                        NDC
                      </h3>
                      <p className="text-foreground text-xs mb-0">
                        Protocol Ready
                      </p>
                      <span className="inline-block w-12 h-1 rounded-sm bg-[#ffffff75]"></span>
                    </div>
                  </div>
                  <div
                    className={`p-8 bg-background relative rounded-xl mb-6 ${styles.middleCardBg2}`}
                  >
                    <p className="text-lg text-foreground text-center font-medium">
                      For any established e-commerce or travel technology
                      company looking to break through growth plateaus, the
                      TripJack story provides a clear roadmap. It demonstrates
                      that by partnering with Indexnine to modernize core
                      technology and streamline operations, companies can unlock
                      new efficiencies and create powerful new engines for
                      revenue growth.
                    </p>
                    <a id="whyWorked"></a>
                  </div>
                </div>
              </div>
            </section>

            {/* Why It Worked Section */}
            <section className="bg-gradient-to-r from-[#fff] to-[#899CFF10] shadow-xl rounded-2xl border border-[#00000025] p-8 mb-12">
              <div className="container mx-auto px-6 lg:px-8">
                <div className="max-w-5xl mx-auto">
                  <div className="mb-0">
                    <h3 className="text-xl font-bold text-foreground-dark mb-6 font-montserrat text-center">
                      Why It Worked
                    </h3>
                    <p className="text-md text-foreground-dark-muted text-center mb-8">
                      The TripJack engagement is a powerful example of how
                      Indexnine helps successful companies navigate the complex
                      "Grow" phase of their lifecycle.
                    </p>

                    <div className="grid md:grid-cols-2 gap-6">
                      {[
                        "Deep Domain and Technical Expertise: This project required a deep understanding of the travel technology domain (NDC, GDS) combined with elite expertise in modern software architecture (microservices, event-driven systems). Our ability to bring both to the table was a key differentiator.",
                        "Strategic, Outcome-Centric Approach: We didn't just focus on the tactical request ('build a B2C app'). We understood the client's broader strategic goals and recognized that solving their core integration bottleneck was a prerequisite for successful growth.",
                        "Parallel Execution for Maximum Velocity: Our ability to deploy multiple, coordinated engineering pods allowed us to tackle both the core modernization and the new product development in parallel, delivering value on multiple fronts simultaneously and maximizing the client's speed to market.",
                      ].map((result, index) => (
                        <div key={index} className="mb-4 last:col-span-full">
                          <span className="inline-block w-full h-1 rounded-sm bg-gradient-to-r from-brand-purple/50 via-[#505CFD] to-brand-purple/50 mb-2"></span>
                          <div className="flex flex-col text-center">
                            <span className="mx-auto flex w-14 h-14 rounded-full bg-gradient-to-r from-[#505CFD19] to-brand-purple/20 mb-2">
                              <CheckCircle className="w-6 h-6 text-[#8389DC] m-auto" />
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
              Ready to Transform Your Travel Platform?
            </span>
          </h2>
          <p className="text-xl text-foreground/80 mb-8 max-w-3xl mx-auto font-montserrat">
            Modernize your travel technology stack and expand into new revenue
            channels. Let's build the platform that powers your next phase of
            growth.
          </p>
          <p className="text-lg text-foreground/70 mb-12 max-w-xl mx-auto font-montserrat">
            Ready to accelerate your B2B2C expansion? Let's discuss your
            platform modernization strategy.
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

export default TripjackCaseStudy;
