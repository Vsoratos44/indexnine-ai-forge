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
  Speaker,
} from "lucide-react";
import { Link } from "react-router-dom";
import styles from "../../../assets/css/stylesheet.module.css";
import BlogDetailsBg from "@/assets/images/blog-details-bg.webp";
import CaseInrImg from "@/assets/images/case-details-img.webp";

const leftNavLinks = [
  { href: "#intro1", label: "Introduction" },
  { href: "#challenge1", label: "Legacy System Challenge" },
  { href: "#challenge2", label: "Event-Driven Architecture" },
  { href: "#results", label: "Results & Impact" },
  { href: "#whyWorked", label: "Why It Worked" },
];

const outcomeTitle = [
  "Seamless continuity of operations",
  "Achieved Near-100% Uptime",
  "Future-Proofed",
  "Zero-Downtime Migration",
];

const MatureCaseStudy = () => {
  const [selected, setSelected] = useState("#intro1");

  // SEO Configuration
  useSEO({
    title:
      "Genesys E-commerce Platform Modernization Case Study - Mission-Critical System Transformation | Indexnine",
    description:
      "Learn how Indexnine modernized Genesys's 16-year-old legacy e-commerce platform, achieving 100% uptime and zero-downtime migration of 178 integrations through event-driven architecture.",
    keywords:
      "platform modernization, legacy system migration, event-driven architecture, e-commerce platform, zero-downtime migration, system reliability, enterprise modernization, PHP modernization",
    canonicalUrl: "https://indexnine.ai/insights/case-studies/mature",
    ogImage: "https://indexnine.ai/images/case-studies/mature-og.jpg",
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
        title="Mission-Critical Modernization: Genesys E-commerce Platform"
        description="Product modernization and event-driven architecture transformation for a mature e-commerce platform serving thousands of merchants."
        author="Indexnine"
        datePublished="2024-01-30"
        dateModified="2024-01-30"
        image="https://indexnine.ai/images/case-studies/mature-hero.jpg"
        url="https://indexnine.ai/insights/case-studies/mature"
      />

      <WebPageSchema
        title="Mature Case Study: Genesys Platform Modernization"
        description="Legacy platform modernization case study showcasing event-driven architecture and zero-downtime migration success"
        url="https://indexnine.ai/insights/case-studies/mature"
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
            name: "Mature Phase",
            url: "https://indexnine.ai/insights/case-studies/mature",
          },
        ]}
      />
      <Header />

      {/* Hero Section */}
      <a id="intro1"></a>
      <div className={`bg-transparent pt-32 ${styles.sectionBgCase}`}>
        <div className="container grid md:grid-cols-3 gap-12">
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
            <section className="min-h-[400px] bg-gradient-to-br from-background via-background-alternate to-background rounded-2xl shadow-2xl flex mb-12 border backdrop-blur-xl relative overflow-hidden">
              <div className="mt-auto p-8">
                <div className="max-w-8xl mx-auto">
                  <div className="mb-6">
                    <span className="inline-block px-6 py-2 bg-black/20 shadow-md text-white rounded-lg text-sm font-medium border border-white/30 backdrop-blur-sm mr-3">
                      <span className="text-brand-primary text-xs mr-2">
                        Client
                      </span>{" "}
                      Genesys
                    </span>
                    <span className="inline-block px-6 py-2 bg-black/20 shadow-md text-white rounded-lg text-sm font-medium border border-white/30 backdrop-blur-sm mr-3">
                      <span className="text-brand-primary text-xs mr-2">
                        Industry
                      </span>{" "}
                      E-commerce, SaaS
                    </span>
                  </div>

                  <div className="inline-block p-8 bg-black/20 shadow-md text-white rounded-xl text-sm font-medium border border-white/30 backdrop-blur-sm">
                    <h1 className="text-4xl sm:text-3xl lg:text-[2.75rem] font-bold text-foreground mb-8 animate-fade-in font-montserrat md:flex gap-4 items-start">
                      <span className="leading-[1.05]">
                        Mission-Critical Modernization:
                      </span>
                      <span className="bg-gradient-primary bg-clip-text text-[#505cfd] leading-[1.05]">
                        Genesys E-commerce Platform
                      </span>
                    </h1>
                    <p className="text-xl sm:text-lg text-foreground/100 mb-0 max-w-4xl leading-relaxed font-regular animate-slide-up font-montserrat">
                      Product modernization and event-driven architecture
                      transformation for a mature e-commerce platform serving
                      thousands of merchants.
                    </p>
                    <a id="challenge1"></a>
                  </div>
                </div>
              </div>
            </section>

            {/* Overview Section */}
            <section
              className={`p-8 bg-background relative overflow-hidden mb-4 rounded-2xl ${styles.middleCardBg2}`}
            >
              <div className="relative z-10">
                <div className="max-w-6xl mx-auto">
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-4 font-montserrat">
                      Challenge
                    </h3>
                    <p className="text-white mb-6">
                      The client’s vital but aging e-commerce integration
                      platform was experiencing daily failures. Written in
                      legacy PHP, its monolithic architecture couldn’t handle
                      the complexity of its real-time integrations, threatening
                      catastrophic business disruption.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section
              className={`p-8 mb-12 bg-background relative overflow-hidden rounded-2xl  ${styles.middleCardBg2}`}
            >
              <div className="relative z-10">
                <div className="max-w-6xl mx-auto">
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-4 font-montserrat">
                      Solution
                    </h3>
                    <p className="text-white mb-6">
                      A robust product modernization that would enable
                      outstanding performance for the current demands of the
                      business, along with scalability for future growth.
                      Indexnine would architect and implement a modern,
                      event-driven integration hub to decouple the legacy core
                      from its volatile external dependencies, followed by a
                      phased and meticulous migration of the system’s 178
                      integrations.
                    </p>

                    <div className="grid md:grid-cols-4 gap-6">
                      <div className="relative overflow-hidden bg-[#ffffff09] border border-[#ffffff15] rounded-2xl p-6 hover:shadow-glass-sm transition-all duration-500 transform hover:scale-102 hover:-translate-y-2 animate-fade-in group h-full">
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
                            <Speaker className="w-6 h-6 text-white m-auto" />
                          </span>
                          <span className="text-white">Event Streaming</span>
                        </div>
                      </div>
                      <div className="relative overflow-hidden bg-[#ffffff09] border border-[#ffffff15] rounded-2xl px-2 py-6 hover:shadow-glass-sm transition-all duration-500 transform hover:scale-102 hover:-translate-y-2 animate-fade-in group h-full">
                        <div className="flex items-center gap-4 flex-col">
                          <span className="flex w-14 h-14 rounded-full bg-[#2E348233]">
                            <Shield className="w-6 h-6 text-white m-auto" />
                          </span>
                          <span className="text-white">Zero Downtime</span>
                        </div>
                      </div>
                      <div className="relative overflow-hidden bg-[#ffffff09] border border-[#ffffff15] rounded-2xl px-2 py-6 hover:shadow-glass-sm transition-all duration-500 transform hover:scale-102 hover:-translate-y-2 animate-fade-in group h-full">
                        <div className="flex items-center gap-4 flex-col">
                          <span className="flex w-14 h-14 rounded-full bg-[#2E348233]">
                            <CheckCircle className="w-6 h-6 text-white m-auto" />
                          </span>
                          <span className="text-white text-center">
                            Integration Preservation
                          </span>
                        </div>
                      </div>
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-4 mt-8 font-montserrat">
                      Key Outcomes
                    </h3>
                    <div className="grid grid-cols md:grid-cols-2 gap-6">
                      {[
                        "Our solution transformed a failing system into a fully operational one (with no downtime!), ensuring operational stability and preventing significant revenue loss for the client and their thousands of merchants.",
                        "Achieved Near-100% Uptime: The new event-driven architecture eliminated the daily crashes, dramatically increasing the platform's reliability and performance.",
                        "Future-Proofed: Replacing a brittle, monolithic structure with modern architecture made the system faster, smoother, and safer to add new e-commerce integrations in the future while opening up a new frontier of scalability.",
                        "Zero-Downtime Migration: Our team modernized a core piece of live infrastructure without disrupting ongoing business operations.",
                      ].map((outcome, index) => (
                        <div
                          key={index}
                          className="relative overflow-hidden bg-[#ffffff09] border border-[#ffffff25] rounded-2xl p-6 hover:shadow-glass-sm transition-all duration-500 transform hover:scale-102 hover:-translate-y-2 animate-fade-in group h-full"
                        >
                          <div className="flex items-center space-x-3 mb-3">
                            <div className="mr-2">
                              <span className="flex w-14 h-14 rounded-full bg-[#2E348233]">
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
                  </div>
                  <a id="challenge2" className="absolute mt-[-40px]"></a>
                </div>
              </div>
            </section>

            {/* Challenge Section */}
            <section className="p-8 backdrop-blur-xl bg-[#00000010] border border-[#00000005] relative mb-4 rounded-2xl shadow-inner shadow-white shadow-4xl">
              <div className="mx-auto relative z-10">
                <div className="max-w-8xl mx-auto">
                  <h3 className="text-lg font-semibold text-brand-primary-dark mb-4 font-montserrat">
                    Challenge
                  </h3>
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground-dark mb-8 font-montserrat">
                    A Platform on the Brink of Collapse
                  </h2>

                  <div className="bg-[#4A2424] my-8 flex">
                    <img src={CaseInrImg} className="w-full h-full" />
                  </div>

                  <p className="text-md text-foreground-dark leading-relaxed mb-8">
                    For thousands of merchants across India, Genesys's platform
                    was their lifeline to the world of e-commerce. The platform
                    was an integration engine, connecting sellers on platforms
                    like Amazon, Myntra, and Flipkart, and managing a constant
                    flow of inventory updates, orders, and transactions. The
                    problem? The engine was over 16 years old, built on legacy
                    PHP, and was bursting at the seams.
                  </p>

                  <p className="text-md text-foreground-dark leading-relaxed ">
                    The platform's core architectural flaw was a
                    tightly-coupled, monolithic design. With 178 different
                    e-commerce integrations, the system was incredibly fragile.
                    Every time one of those partners made a change to their
                    API—an almost daily occurrence—it sent a shockwave through
                    the entire system, causing it to crash. These failures
                    happened most often at night, the peak period for inventory
                    updates, causing further disruption. Suffice it to say, the
                    infrastructure needed an update.
                  </p>
                </div>
              </div>
            </section>

            <section className="p-8 backdrop-blur-xl bg-[#00000010] border border-[#00000005] relative rounded-2xl mb-12 shadow-inner shadow-white shadow-4xl">
              <div className="mx-auto relative z-10">
                <div className="max-w-8xl mx-auto">
                  <h3 className="text-lg font-semibold text-brand-primary-dark mb-4 font-montserrat">
                    Our Solution
                  </h3>
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground-dark mb-8 font-montserrat">
                    Architecting Stability with an Event-Driven Integration Hub
                  </h2>

                  <p className="text-lg text-foreground-dark leading-relaxed mb-12">
                    As a product modernization challenge, it required a solution
                    as much about risk reduction as technical execution. A
                    simple "lift and shift" or rewrite was untenable. We needed
                    new system architecture that could be introduced piece by
                    piece, protecting the core from the chaos of its surrounding
                    external environment.
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
                          Phase 1: Event-Driven Architecture
                        </h3>
                        <p className="text-foreground-dark-muted leading-relaxed mb-6">
                          Our Engineering and Applied AI studios determined that
                          the optimal path forward would be to introduce a new
                          architectural pattern: an event-driven integration
                          hub. Instead of having all 178 integrations
                          communicating directly with the legacy core, we would
                          build a modern, robust hub – essentially a clearing
                          house – that would sit in the operational center.
                        </p>
                        <p className="text-foreground-dark-muted leading-relaxed">
                          This hub would be responsible for receiving all data
                          from the external e-commerce platforms. It would then
                          validate, transform, and standardize these events
                          before passing them to the core application in a
                          format it could safely handle. This decoupled
                          architecture would act as a protective buffer,
                          absorbing the shock of any external API changes and
                          ensuring the legacy core remained stable.
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
                          Phase 2: Building a Resilient, Scalable Hub
                        </h3>
                        <p className="text-foreground-dark leading-relaxed mb-6">
                          Our engineering pod executed this vision by building a
                          platform on modern, cloud-native principles:
                        </p>

                        <div className="grid md:grid-cols-2 gap-6">
                          <div className="backdrop-blur-xl bg-[#fff] border border-glass-border rounded-2xl p-6 col-span-2">
                            <h4 className="font-semibold text-foreground-dark mb-2">
                              Asynchronous Message Queues:
                            </h4>
                            <p className="text-sm text-foreground-dark-muted">
                              At the heart of the hub, we implemented a
                              high-throughput message queueing system (akin to
                              technologies like Apache Kafka or RabbitMQ). This
                              allows the hub to ingest millions of events per
                              minute from external partners without being
                              overwhelmed. If a partner sends a massive burst of
                              updates, the events are lined up in a queue to be
                              processed sequentially, preventing system crashes.
                            </p>
                          </div>
                          <div className="backdrop-blur-xl bg-[#fff] border border-glass-border rounded-2xl p-6 col-span-2">
                            <h4 className="font-semibold text-foreground-dark mb-2">
                              Standardized "Canonical" Data Model:
                            </h4>
                            <p className="text-sm text-foreground-dark-muted">
                              Developing a single, standardized data model—a
                              "canonical model"—for every type of event (e.g.,
                              "inventory update," "new order") dramatically
                              simplified the work for the core, as it now only
                              had to understand one type of message format, not
                              178 different varieties.
                            </p>
                          </div>
                          <div className="backdrop-blur-xl bg-[#fff] border border-glass-border rounded-2xl p-6 col-span-2">
                            <h4 className="font-semibold text-foreground-dark mb-2">
                              Microservices for Transformation:
                            </h4>
                            <p className="text-sm text-foreground-dark-muted">
                              We built a series of small, independent
                              microservices, each responsible for transforming
                              messages from a specific e-commerce platform
                              (e.g., an "Amazon Transformer," a "Flipkart
                              Transformer") into the canonical model. This meant
                              that if an integration changed its API, only one
                              isolated microservice needed to be updated,
                              eliminating risk to the rest of the system.
                            </p>
                          </div>
                          <div className="backdrop-blur-xl bg-[#fff] border border-glass-border rounded-2xl p-6 col-span-2">
                            <h4 className="font-semibold text-foreground-dark mb-2">
                              Zero-Downtime Rollout:
                            </h4>
                            <p className="text-sm text-foreground-dark-muted">
                              Critical to the execution was our migration
                              strategy. We couldn't switch all 178 integrations
                              at once. We worked with the client to determine an
                              optimized rollout list, then executed a swift,
                              meticulous, channel-by-channel rollout.
                              Redirecting one integration at a time to the new
                              hub, we’d rigorously test its performance, confirm
                              that the transfer was successful, then move to the
                              next. This way, we could ensure the uninterrupted
                              continuity of business for the client throughout
                              the entire project.
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
                          Phase 3: A Foundation for Future Growth
                        </h3>
                        <p className="text-foreground-dark-muted leading-relaxed mb-6 col-span-2">
                          Our engagement with Genesys pulled their most critical
                          platform out of the tech-debt depths and repositioned
                          it for a stable, scalable future.
                        </p>

                        <div className="grid md:grid-cols-2 gap-6">
                          <div className="backdrop-blur-xl bg-[#fff] border border-glass-border rounded-2xl p-6 ">
                            <h4 className="font-semibold text-foreground-dark mb-2">
                              Eliminated Critical Downtime:
                            </h4>
                            <p className="text-sm text-foreground-dark-muted">
                              The new event-driven architecture immediately
                              stabilized the system. The daily crashes ceased,
                              improving user experience, restoring trust with
                              merchants, and preventing further revenue loss.
                            </p>
                          </div>
                          <div className="backdrop-blur-xl bg-[#fff] border border-glass-border rounded-2xl p-6 ">
                            <h4 className="font-semibold text-foreground-dark mb-2">
                              Created a Scalable, Future-Proof Platform:
                            </h4>
                            <p className="text-sm text-foreground-dark-muted">
                              The outdated architecture was replaced with a
                              modern, decoupled system. Adding new integrations,
                              previously a high-risk, multi-month endeavor, is
                              now a safe, streamlined process, allowing the
                              client to expand swiftly and seamlessly.
                            </p>
                          </div>
                          <div className="backdrop-blur-xl bg-[#fff] border border-glass-border rounded-2xl p-6 ">
                            <h4 className="font-semibold text-foreground-dark mb-2">
                              Provided Mission-Critical Stability:
                            </h4>
                            <p className="text-sm text-foreground-dark-muted">
                              We solved the client's most pressing technical and
                              business challenge, creating a reliable base for
                              the platform that their operation depends on.
                            </p>
                          </div>
                          <div className="backdrop-blur-xl bg-[#fff] border border-glass-border rounded-2xl p-6">
                            <h4 className="font-semibold text-foreground-dark mb-2">
                              Demonstrated Complex Modernization Expertise:
                            </h4>
                            <p className="text-sm text-foreground-dark-muted">
                              We demonstrated our ability to handle one of the
                              most difficult challenges in software engineering:
                              modernizing a complex, mission-critical legacy
                              system with zero downtime and zero disruption to
                              business operations.
                            </p>
                          </div>
                        </div>

                        <a id="results" className="absolute mt-[-40px]"></a>
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
                    Zero-Downtime Transformation Success
                  </h3>
                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                    <div
                      className={`rounded-xl py-4 px-1 text-center border border-[#505DFD] ${styles.middleCardBg2}`}
                    >
                      <h3 className="text-3xl font-bold text-white mb-2 font-montserrat">
                        100%
                      </h3>
                      <p className="text-foreground text-xs mb-0">
                        Uptime Maintained
                      </p>
                      <span className="inline-block w-12 h-1 rounded-sm bg-[#ffffff75]"></span>
                    </div>
                    <div
                      className={`rounded-xl py-4 px-1 text-center border border-[#505DFD] ${styles.middleCardBg2}`}
                    >
                      <h3 className="text-3xl font-bold text-white mb-2 font-montserrat">
                        178
                      </h3>
                      <p className="text-foreground text-xs mb-0">
                        Integrations Preserved
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
                        Performance Boost
                      </p>
                      <span className="inline-block w-12 h-1 rounded-sm bg-[#ffffff75]"></span>
                    </div>
                    <div
                      className={`rounded-xl py-4 px-1 text-center border border-[#505DFD] ${styles.middleCardBg2}`}
                    >
                      <h3 className="text-3xl font-bold text-white mb-2 font-montserrat">
                        Zero
                      </h3>
                      <p className="text-foreground text-xs mb-0">
                        Downtime Events
                      </p>
                      <span className="inline-block w-12 h-1 rounded-sm bg-[#ffffff75]"></span>
                    </div>
                  </div>
                  <div
                    className={`p-8 bg-background relative rounded-xl mb-6 ${styles.middleCardBg2}`}
                  >
                    <p className="text-lg text-foreground text-center font-medium">
                      The Genesys story is a testament to our product
                      modernization capabilities. We cultivate a deep bench of
                      industry-veteran expertise at every phase of the product
                      lifecycle. We don't just build new things; we have the
                      experience and technical knowledge to redesign, rebuild,
                      and future-proof the complex, mission-critical systems
                      that established businesses rely on.
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
                      The success of the Genesys engagement was a direct result
                      of our engineering practices and strategic mindset.
                    </p>

                    <div className="grid auto-fit md:grid-cols-2 gap-6">
                      {[
                        "In-Depth Architectural Expertise: This problem required the kind of deep understanding of event-driven systems, microservices, and complex data transformations that Indexnine cultivates in our talent pool.",
                        "Disciplined and De-risked: Our phased, channel-by-channel migration strategy was essential for a project of this risk profile. Understanding the needs of our client, we prioritized stability and business continuity without compromising on engineering excellence.",
                        "A True Partnership Approach: We embedded ourselves within the client's team, working as a single, unified unit to tackle this immense challenge. Our transparent communication and shared sense of ownership were key to navigating the project's complexities.",
                      ].map((result, index) => (
                        <div key={index} className="mb-4">
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
          <h2 className="text-3xl sm:text-4xl max-w-4xl m-auto lg:text-5xl font-semibold mb-6 text-foreground-white">
            <span className="leading-[1.4]">
              Interested in taking your business to new heights?
            </span>
          </h2>
          <p className="text-lg text-foreground/70 mb-12 max-w-xl mx-auto font-montserrat">
            So are we. We redesign, rebuild, and future-proof the complex,
            mission-critical systems that established businesses rely on
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

export default MatureCaseStudy;
