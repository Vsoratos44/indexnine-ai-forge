import React, { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useSEO } from "@/hooks/useSEO";
import {
  ArrowLeft,
  CheckCircle,
  Download,
  ExternalLink,
  Clock,
  User,
  ChevronDown,
  ChevronUp,
  Database,
  TrendingUp,
  Shield,
  Layers,
} from "lucide-react";
import { Link } from "react-router-dom";
import BlogDetailsBg from "@/assets/images/blog-details-bg.webp";
import BlogContBg from "@/assets/images/blog-content-bg.webp";
import blogImg2 from "@/assets/images/blog-img2.webp";
import styles from "../../../assets/css/stylesheet.module.css";

const leftNavLinks = [
  { href: "#intro", label: "Introduction" },
  { href: "#readiness-check", label: "The Readiness Reality Check" },
  { href: "#agile-framework", label: "Assessing Your Data Maturity" },
  { href: "#blueprint", label: "The Blueprint for a Modern Analytics Platform" },
  { href: "#case-study", label: "Case Study in Transformation" },
  { href: "#faqs", label: "Frequently Asked Questions" },
];

const ModernAnalyticsPlatformDataStrategy = () => {
  const [selected, setSelected] = useState("#intro");
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);

  // Implement comprehensive SEO optimization
  useSEO({
    title:
      "The Modern Analytics Platform: An Enterprise Blueprint for Your Data Strategy",
    description:
      "Don't let your data strategy fail. Discover a pragmatic blueprint for building a modern, cloud-native analytics platform that powers business intelligence and drives real ROI from your AI investments.",
    canonicalUrl:
      "https://www.indexnine.com/insights/blogs/modern-analytics-platform-data-strategy-blueprint",
    keywords:
      "modern analytics platform, data strategy, enterprise data blueprint, AI-ready infrastructure, data modernization, business intelligence, data quality, cloud analytics, data governance",
    ogImage:
      "https://www.indexnine.com/images/modern-analytics-platform-og.jpg",
  });

  const toggleFAQ = (index: number) => {
    setExpandedFAQ(expandedFAQ === index ? null : index);
  };

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
    <div
      className="min-h-screen bg-contain bg-top bg-no-repeat bg-white"
      style={{ backgroundImage: `url(${BlogDetailsBg})` }}
    >
      <Header />

      {/* Enhanced SEO Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline:
              "The Modern Analytics Platform: An Enterprise Blueprint for Your Data Strategy",
            description:
              "A comprehensive blueprint for building modern, cloud-native analytics platforms that transform data assets into strategic resources for AI and business intelligence.",
            url: "https://www.indexnine.com/insights/blogs/modern-analytics-platform-data-strategy-blueprint",
            datePublished: "2025-01-28T00:00:00Z",
            dateModified: "2025-01-28T00:00:00Z",
            author: {
              "@type": "Organization",
              name: "IndexNine Data Engineering Team",
            },
            publisher: {
              "@type": "Organization",
              name: "IndexNine Technologies",
              logo: {
                "@type": "ImageObject",
                url: "https://www.indexnine.com/logo.png",
              },
            },
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id":
                "https://www.indexnine.com/insights/blogs/modern-analytics-platform-data-strategy-blueprint",
            },
            image: {
              "@type": "ImageObject",
              url: "https://www.indexnine.com/images/modern-analytics-platform.jpg",
              width: 1200,
              height: 630,
              alt: "A strategic blueprint of a modern, cloud-native enterprise analytics platform architecture.",
            },
            wordCount: 3500,
            articleSection: "Data Engineering",
            keywords: [
              "Modern Analytics Platform",
              "Data Strategy",
              "Enterprise Data Architecture",
              "Data Modernization",
              "Business Intelligence",
            ],
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "What's the difference between a Data Fabric and a Data Mesh?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "A Data Fabric focuses on creating a unified data management layer across distributed environments using metadata and automation. A Data Mesh is a decentralized approach that treats data as a product, empowering individual domain teams to own and share their data assets responsibly.",
                },
              },
              {
                "@type": "Question",
                name: "Our data is extremely siloed. Where do we even begin?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Begin with an AI/Data Readiness Assessment. Identify the single most critical business problem constrained by data silos and focus on building a modern 'data slice' to solve that problem first. This delivers rapid wins and creates a repeatable blueprint.",
                },
              },
              {
                "@type": "Question",
                name: "How do we justify the investment in a modern analytics platform?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "The business case combines cost savings and value creation. Infrastructure cost reductions provide hard ROI, while improved operational efficiency and new data monetization opportunities demonstrate value creation.",
                },
              },
              {
                "@type": "Question",
                name: "What is the difference between Business Intelligence (BI) and Decision Intelligence (DI)?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "BI is descriptive, using historical data to answer 'What happened?' DI is prescriptive, combining data, domain knowledge, and predictive models to answer 'What should I do?' A modern platform should support both.",
                },
              },
            ],
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: "https://www.indexnine.com/",
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "Insights",
                item: "https://www.indexnine.com/insights",
              },
              {
                "@type": "ListItem",
                position: 3,
                name: "Blogs",
                item: "https://www.indexnine.com/insights/blogs",
              },
              {
                "@type": "ListItem",
                position: 4,
                name: "Modern Analytics Platform Blueprint",
                item: "https://www.indexnine.com/insights/blogs/modern-analytics-platform-data-strategy-blueprint",
              },
            ],
          }),
        }}
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[#ffffff00]">
        <div className="relative z-10 container mx-auto pt-36">
          <div className="max-w-7xl mx-auto text-center lg:text-left ml-0">
            <div className="flex items-center">
              <Link
                to="/insights/blogs"
                className="inline-flex items-center text-foreground-muted hover:text-brand-primary-dark transition-colors mb-6 mr-6"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Blogs
              </Link>
            </div>

            <h1 className="text-[1.5rem] sm:text-[2rem] lg:text-[2.5rem] font-semibold text-foreground mb-6 leading-[1.25] animate-fade-in font-montserrat">
              The Modern Analytics Platform: <br />
              An Enterprise Blueprint for Your Data Strategy
            </h1>

            <div className="flex items-center gap-6 text-sm text-foreground/80 mb-8">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span className="font-montserrat">Data Engineering Team</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span className="font-montserrat">15 min read</span>
              </div>
              <span className="font-montserrat">January 28, 2025</span>
            </div>
          </div>
        </div>
      </section>
      
      <div className="bg-[#ffffff00] pt-8">
        <a id="intro"></a>
        <div
          className="container grid md:grid-cols-3 gap-12 bg-transparent pt-12 rounded-tl-3xl rounded-tr-3xl bg-gradient-to-b from-white via-white to-[#F0F4FF] bg-contain bg-no-repeat"
          style={{ backgroundImage: `url(${BlogContBg})` }}
        >
          <div className="text-foreground-dark">
            <div className="sticky top-[120px] pb-8">
              <ul className="space-y-2">
                {leftNavLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={() => setSelected(link.href)}
                      className={`inline-block py-2 rounded transition 
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
                className={`px-8 py-12 rounded-2xl my-8 text-center text-white ${styles.sideCardBg}`}
              >
                <h3 className="text-3xl font-bold">
                  Ready for Data Strategy?
                </h3>
                <p className="text-xl py-8">
                  Get your comprehensive data readiness assessment and strategic
                  roadmap for modern analytics implementation.
                </p>
                <Button type="submit" size="lg" variant="btnSecondary">
                  Get Assessment
                </Button>
              </div>
            </div>
          </div>

          <div className="col-span-2 w-full">
            {/* Introduction Section */}
            <section className="relative overflow-hidden">
              <div className="container relative z-10">
                <div className="max-w-5xl mx-auto pb-8">
                  <div className="space-y-6 text-lg text-foreground-dark-muted leading-relaxed mb-8">
                    <h4 className="font-semibold text-xl">
                      Don't let your data strategy fail. Discover a pragmatic blueprint for building a modern, cloud-native analytics platform that powers business intelligence and drives real ROI from your AI investments.
                    </h4>
                    <p>
                      <strong>The enterprise is in the midst of a data paradox.</strong> According to McKinsey, a staggering 92% of businesses are increasing their investment in Artificial Intelligence, yet only 22% are realizing significant business value from these initiatives. This enormous gap between investment and impact is not born from flawed algorithms or a lack of ambition. It stems from a single, foundational, and often-overlooked challenge: a lack of readiness in the underlying data infrastructure.
                    </p>
                    <p>
                      Organizations, eager to capitalize on the promise of AI, often rush into complex projects without first preparing their data systems. This leads to a predictable and costly cycle of failure. Gartner reports that 85% of AI projects fail to deliver their expected outcomes, primarily because of unprepared and poorly governed data. The consequences are severe: AI teams spend 60-80% of their time on low-value data preparation instead of high-value analysis, and each failed project can represent a sunk cost of $300,000 to $500,000, not including the immense cost of missed market opportunities.
                    </p>
                    <p>
                      To move from aspiration to activation, leaders need a practical, business-oriented blueprint for creating an AI-ready data foundation. This isn't about chasing the latest technology; it's about architecting a cohesive, scalable, and governed analytics platform that transforms fragmented data assets into a powerful strategic resource. At Indexnine, our <strong>Data Studio</strong> specializes in guiding enterprises through this journey, ensuring that every data initiative is directly aligned with business goals, budgets, and organizational maturity.
                    </p>
                    <p>
                      This is our blueprint for building the modern analytics platforms that don't just store data but unlock its full potential.
                    </p>
                  </div>

                  <Button type="submit" size="lg" variant="btnPrimary">
                    <Download className="w-4 h-4 mr-2" />
                    Download Our Data Strategy Blueprint Guide (PDF)
                  </Button>
                  <div className="mt-6">
                    <Button
                      type="submit"
                      size="lg"
                      variant="btnSecondary"
                      asChild
                    >
                      <Link to="/studios/data-engineering">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Explore Our Data Engineering Services
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </section>

            {/* Readiness Check Section */}
            <a id="readiness-check"></a>
            <section className="pt-12 pb-0 relative overflow-hidden">
              <div className="container text-lg text-foreground-dark-muted leading-relaxed">
                <div className="max-w-5xl mx-auto">
                  <div className="space-y-6">
                    <h2 className="font-semibold text-2xl text-foreground-dark">
                      The Readiness Reality Check: Why Most Data & AI Initiatives Fail
                    </h2>
                    <p>
                      Before embarking on a significant data modernization journey, leaders need a clear-eyed view of their organization's current state. To facilitate this, we've developed the <strong>AGILE Framework</strong>, a structured assessment across five critical dimensions that provides a quantifiable "Data Readiness Scorecard."
                    </p>

                    <div className="bg-gradient-to-r from-brand-primary/5 to-brand-purple/5 border-l-4 border-brand-primary p-6 rounded-r-lg my-8">
                      <h3 className="text-xl font-semibold text-foreground-dark mb-4">
                        Answer these questions honestly to understand your starting point:
                      </h3>
                      <ul className="space-y-4 text-foreground-dark-muted">
                        <li className="flex items-start gap-3">
                          <Database className="h-5 w-5 text-brand-primary mt-1 flex-shrink-0" />
                          <span>
                            <strong>(A) Accessibility:</strong> Can authorized users easily retrieve relevant data across departments, or is data locked in silos?
                          </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <Shield className="h-5 w-5 text-brand-primary mt-1 flex-shrink-0" />
                          <span>
                            <strong>(G) Governance:</strong> Are there established policies and controls to ensure data security, privacy, and compliance?
                          </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <Layers className="h-5 w-5 text-brand-primary mt-1 flex-shrink-0" />
                          <span>
                            <strong>(I) Integration:</strong> Are your systems interoperable, enabling seamless data flow, or is every integration a custom, brittle project?
                          </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <User className="h-5 w-5 text-brand-primary mt-1 flex-shrink-0" />
                          <span>
                            <strong>(L) Literacy:</strong> Does your team understand how to work with data to derive insights, or is data analysis confined to a small group of specialists?
                          </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-brand-primary mt-1 flex-shrink-0" />
                          <span>
                            <strong>(E) Excellence (Quality):</strong> Is your data consistently accurate, complete, and trustworthy enough for high-stakes decision-making?
                          </span>
                        </li>
                      </ul>
                    </div>

                    <p>
                      Scoring each dimension on a scale of 1-5 provides a total AGILE Score out of 25. This isn't just a number; it's a roadmap. A score below 15 indicates that foundational work is required before any large-scale AI investment can be expected to yield meaningful returns.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* AGILE Framework Section */}
            <a id="agile-framework"></a>
            <section className="pt-12 pb-0 relative overflow-hidden">
              <div className="container text-lg text-foreground-dark-muted leading-relaxed">
                <div className="max-w-5xl mx-auto">
                  <div className="space-y-6">
                    <h2 className="font-semibold text-2xl text-foreground-dark">
                      Assessing Your Data Maturity: The AGILE Framework
                    </h2>
                    
                    <div className="bg-foreground-dark/5 p-8 rounded-lg">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-4">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 bg-brand-primary rounded-full flex items-center justify-center text-white font-bold">A</div>
                            <h4 className="font-semibold text-foreground-dark">Accessibility</h4>
                          </div>
                          <p className="text-sm text-foreground-dark-muted ml-11">
                            Data availability across departments and user roles
                          </p>
                        </div>
                        
                        <div className="space-y-4">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 bg-brand-primary rounded-full flex items-center justify-center text-white font-bold">G</div>
                            <h4 className="font-semibold text-foreground-dark">Governance</h4>
                          </div>
                          <p className="text-sm text-foreground-dark-muted ml-11">
                            Security, privacy, and compliance frameworks
                          </p>
                        </div>
                        
                        <div className="space-y-4">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 bg-brand-primary rounded-full flex items-center justify-center text-white font-bold">I</div>
                            <h4 className="font-semibold text-foreground-dark">Integration</h4>
                          </div>
                          <p className="text-sm text-foreground-dark-muted ml-11">
                            System interoperability and data flow automation
                          </p>
                        </div>
                        
                        <div className="space-y-4">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 bg-brand-primary rounded-full flex items-center justify-center text-white font-bold">L</div>
                            <h4 className="font-semibold text-foreground-dark">Literacy</h4>
                          </div>
                          <p className="text-sm text-foreground-dark-muted ml-11">
                            Team capability to analyze and derive insights
                          </p>
                        </div>
                        
                        <div className="space-y-4 md:col-span-2">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 bg-brand-primary rounded-full flex items-center justify-center text-white font-bold">E</div>
                            <h4 className="font-semibold text-foreground-dark">Excellence (Quality)</h4>
                          </div>
                          <p className="text-sm text-foreground-dark-muted ml-11">
                            Data accuracy, completeness, and trustworthiness for decision-making
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Blueprint Section */}
            <a id="blueprint"></a>
            <section className="pt-12 pb-0 relative overflow-hidden">
              <div className="container text-lg text-foreground-dark-muted leading-relaxed">
                <div className="max-w-5xl mx-auto">
                  <div className="space-y-6">
                    <h2 className="font-semibold text-2xl text-foreground-dark">
                      The Blueprint for a Modern Analytics Platform: A Four-Step Journey
                    </h2>
                    <p>
                      Building a modern, AI-ready analytics platform is a journey that transforms your data environment into an agile, scalable, and trusted asset. The journey follows four strategic steps.
                    </p>

                    {/* Step 1 */}
                    <div className="border-l-4 border-brand-primary pl-6 my-8">
                      <h3 className="text-xl font-semibold text-foreground-dark mb-4">
                        Step 1: Build a Unified Data Foundation
                      </h3>
                      <p className="mb-4">
                        The cornerstone of any successful data strategy is a unified and accessible data foundation. This involves strategically choosing scalable platforms, consolidating disparate sources, and standardizing how data flows into your environment.
                      </p>
                      <ul className="space-y-3 ml-4">
                        <li className="list-disc">
                          <strong>Platform Selection:</strong> The era of the monolithic, on-premises data warehouse built only for structured data is over. Today, over 80% of enterprise data is semi-structured or unstructured. Your choice will depend on your maturity, from a cloud data warehouse (like Snowflake or BigQuery) for startups, to a flexible Lakehouse (like Databricks) for mid-size firms, to a sophisticated Data Fabric or Data Mesh for large enterprises.
                        </li>
                        <li className="list-disc">
                          <strong>Data Consolidation & Ingestion:</strong> The goal is to break down data silos. This requires robust ingestion pipelines that can handle both batch ingestion (for scheduled, periodic loads) and streaming ingestion (for real-time events, logs, and user interactions) from dozens of sources, including legacy systems, SaaS apps, and IoT feeds.
                        </li>
                      </ul>
                    </div>

                    {/* Step 2 */}
                    <div className="border-l-4 border-brand-purple pl-6 my-8">
                      <h3 className="text-xl font-semibold text-foreground-dark mb-4">
                        Step 2: Enhance Data Quality and Context for AI Consumption
                      </h3>
                      <p className="mb-4">
                        Once data is centralized, the focus shifts to making it trustworthy and intelligent. Poor data quality costs organizations an average of $12.9 million annually. This step is about transforming raw data into a reliable, context-rich asset.
                      </p>
                      <ul className="space-y-3 ml-4">
                        <li className="list-disc">
                          <strong>Data Quality & Observability:</strong> This involves implementing frameworks to monitor and enforce data quality across key dimensions like accuracy, completeness, consistency, and timeliness.
                        </li>
                        <li className="list-disc">
                          <strong>Enriching with Business Semantics:</strong> Raw data lacks business meaning. This phase involves implementing a semantic layer and metadata management tools (like dbt or Atlan) to add business glossaries, definitions, and ownership to your data, making it understandable and usable for a broader audience.
                        </li>
                      </ul>
                    </div>

                    {/* Step 3 */}
                    <div className="border-l-4 border-emerald-500 pl-6 my-8">
                      <h3 className="text-xl font-semibold text-foreground-dark mb-4">
                        Step 3: Establish Enterprise-Grade Governance and Operational Excellence
                      </h3>
                      <p className="mb-4">
                        A modern data platform must be governed, secure, and operationally reliable at scale. This involves:
                      </p>
                      <ul className="space-y-3 ml-4">
                        <li className="list-disc">
                          <strong>Defining Roles & Responsibilities:</strong> Establishing clear accountability with roles like Data Owners and Data Stewards.
                        </li>
                        <li className="list-disc">
                          <strong>Implementing Policy-Driven Governance:</strong> Automating governance with policy-as-code for data classification, access management (RBAC), and retention.
                        </li>
                        <li className="list-disc">
                          <strong>Driving Operational Efficiency:</strong> Ensuring the platform is scalable and cost-effective through comprehensive monitoring, FinOps practices, and CI/CD for data pipelines.
                        </li>
                      </ul>
                    </div>

                    {/* Step 4 */}
                    <div className="border-l-4 border-orange-500 pl-6 my-8">
                      <h3 className="text-xl font-semibold text-foreground-dark mb-4">
                        Step 4: Activate Insights & Drive Business Outcomes
                      </h3>
                      <p className="mb-4">
                        The ultimate goal of a modern analytics platform is to activate data in ways that deliver tangible business value.
                      </p>
                      <ul className="space-y-3 ml-4">
                        <li className="list-disc">
                          <strong>Output & Activation Channels:</strong> Making data accessible through the right channels, including BI dashboards (Power BI, Tableau), Reverse ETL pipelines into business tools (Salesforce, HubSpot), and APIs for applications.
                        </li>
                        <li className="list-disc">
                          <strong>Moving from BI to Decision Intelligence (DI):</strong> While Business Intelligence (BI) answers "What happened?", Decision Intelligence (DI) suggests "What should I do?" This involves embedding predictive models and prescriptive recommendations directly into business workflows.
                        </li>
                        <li className="list-disc">
                          <strong>Data Monetization:</strong> As data maturity grows, organizations can turn their curated data assets into new revenue streams, such as by licensing anonymized insights or selling industry benchmark reports.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Case Study Section */}
            <a id="case-study"></a>
            <section className="pt-12 pb-0 relative overflow-hidden">
              <div className="container text-lg text-foreground-dark-muted leading-relaxed">
                <div className="max-w-5xl mx-auto">
                  <div className="space-y-6">
                    <h2 className="font-semibold text-2xl text-foreground-dark">
                      Case Study in Transformation: Modernizing Parking Management for the Cloud Era
                    </h2>
                    <p>
                      This four-step blueprint is not theoretical. We executed this exact strategy for a <strong>leading provider of parking services</strong>, transforming their legacy-bound operation into a data-driven market leader.
                    </p>

                    <div className="bg-gradient-to-r from-red-50 to-orange-50 border-l-4 border-red-500 p-6 rounded-r-lg my-8">
                      <h3 className="text-xl font-semibold text-foreground-dark mb-4">
                        The Challenge
                      </h3>
                      <p>
                        The client was trapped by a high-cost, on-premises IBM system (DB2) and outdated data ingestion tools. Their data was fragmented, making it impossible to get real-time insights from over <strong>15 billion annual records</strong>. Revenue reconciliation took a full week, vendor onboarding was a slow, manual process, and infrastructure costs were spiraling.
                      </p>
                    </div>

                    <div className="bg-gradient-to-r from-emerald-50 to-green-50 border-l-4 border-emerald-500 p-6 rounded-r-lg my-8">
                      <h3 className="text-xl font-semibold text-foreground-dark mb-4">
                        Our Solution: A Blueprint-Driven Modernization
                      </h3>
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold mb-2">1. Unified Foundation:</h4>
                          <p>
                            We executed a phased migration of their legacy DB2 data warehouse to a modern, cloud-native architecture on <strong>AWS and Snowflake</strong>. We replaced brittle ETL scripts with a unified, vendor-agnostic ingestion pipeline using AWS Kinesis for real-time streaming and AWS Lambda for serverless processing.
                          </p>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2">2. Data Quality & Context:</h4>
                          <p>
                            By consolidating all operational systems into a <strong>Snowflake-powered central data mart</strong>, we created a single source of truth. We implemented automated data validation rules within Snowflake to ensure data quality and consistency.
                          </p>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2">3. Governance & Operations:</h4>
                          <p>
                            The new platform was built with enterprise-grade governance, including role-based access control and data masking in Snowflake. The shift to a serverless architecture dramatically improved operational efficiency and reduced costs.
                          </p>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2">4. Activated Insights:</h4>
                          <p>
                            We enabled near real-time dashboards that allowed parking operators to view lot occupancy data within minutes instead of hours. The automated validation workflow slashed revenue reconciliation time from <strong>7 days to just 2 days</strong>. This real-time data also empowered a new dynamic pricing capability, a key driver of business growth.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gradient-to-r from-brand-primary/5 to-brand-purple/5 border-l-4 border-brand-primary p-6 rounded-r-lg my-8">
                      <h3 className="text-xl font-semibold text-foreground-dark mb-4">
                        The Results
                      </h3>
                      <p>
                        The business impact was transformative. The client achieved a <strong>35% annual savings</strong> in infrastructure costs, a <strong>72% increase in booking efficiency</strong>, and even unlocked a <strong>new revenue stream</strong> by providing parking insights as a data product. This project is a testament to how executing a disciplined data modernization blueprint can turn a legacy cost center into a strategic, revenue-generating asset.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* FAQ Section */}
            <a id="faqs"></a>
            <section className="pt-12 pb-12 relative overflow-hidden">
              <div className="container text-lg text-foreground-dark-muted leading-relaxed">
                <div className="max-w-5xl mx-auto">
                  <h2 className="font-semibold text-2xl text-foreground-dark mb-8">
                    Frequently Asked Questions (FAQ)
                  </h2>

                  {[
                    {
                      question: "What's the difference between a Data Fabric and a Data Mesh?",
                      answer: "Both are advanced architectural patterns for large enterprises. A Data Fabric focuses on creating a unified data management layer across distributed environments using metadata and automation. A Data Mesh is a decentralized approach that treats data as a product, empowering individual domain teams to own and share their data assets responsibly. The choice depends on an organization's culture and structure."
                    },
                    {
                      question: "Our data is extremely siloed. Where do we even begin?",
                      answer: "This is the most common starting point. The journey begins with our AI/Data Readiness Assessment. We don't try to boil the ocean. We identify the single most critical business problem that is constrained by data silos and focus on building a modern 'data slice' to solve that problem first. This delivers a rapid win and creates a repeatable blueprint for modernizing other domains."
                    },
                    {
                      question: "How do we justify the investment in a modern analytics platform?",
                      answer: "The business case is built on both cost savings and value creation. The Parking Management case study is a perfect example: the 35% reduction in infrastructure costs provided a hard ROI, while the 72% increase in booking efficiency and the new data monetization stream demonstrated immense value creation. A proper readiness assessment will help you build a similar business case tailored to your organization."
                    },
                    {
                      question: "What is the difference between Business Intelligence (BI) and Decision Intelligence (DI)?",
                      answer: "BI is primarily descriptive; it uses historical data to answer the question, 'What happened?' DI is prescriptive; it combines data, domain knowledge, and predictive models to answer the question, 'What should I do?' A modern analytics platform should support both, providing dashboards for historical analysis and enabling the embedded, AI-powered recommendations that define DI."
                    }
                  ].map((faq, index) => (
                    <div key={index} className="border-b border-gray-200 py-6">
                      <button
                        onClick={() => toggleFAQ(index)}
                        className="flex justify-between items-center w-full text-left"
                      >
                        <h3 className="text-xl font-semibold text-foreground-dark pr-4">
                          {faq.question}
                        </h3>
                        {expandedFAQ === index ? (
                          <ChevronUp className="w-6 h-6 text-brand-primary flex-shrink-0" />
                        ) : (
                          <ChevronDown className="w-6 h-6 text-brand-primary flex-shrink-0" />
                        )}
                      </button>
                      {expandedFAQ === index && (
                        <div className="mt-4 text-foreground-dark-muted">
                          <p>{faq.answer}</p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Call to Action */}
            <section className="pt-8 pb-12">
              <div className="max-w-5xl mx-auto text-center">
                <div className="bg-gradient-to-r from-brand-primary/10 to-brand-purple/10 border border-brand-primary/20 rounded-2xl p-8">
                  <h3 className="text-2xl font-semibold text-foreground-dark mb-4">
                    Ready to move from a data swamp to a strategic data asset?
                  </h3>
                  <p className="text-foreground-dark-muted mb-6">
                    Transform your data infrastructure with our proven blueprint and expert guidance.
                  </p>
                  <Button type="submit" size="lg" variant="btnPrimary">
                    Schedule a Data Readiness Assessment with Our Experts
                  </Button>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default ModernAnalyticsPlatformDataStrategy;