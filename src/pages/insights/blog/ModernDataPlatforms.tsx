import React, { useEffect, useState } from "react";
import { ChevronRight, Clock, User, Calendar, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useSEO } from "@/hooks/useSEO";

// Navigation links for blog sections
const leftNavLinks = [
  { id: "introduction", label: "Introduction" },
  { id: "platform-fundamentals", label: "Platform Fundamentals" },
  { id: "architecture-layers", label: "Architecture Layers" },
  { id: "implementation-strategy", label: "Implementation Strategy" },
  { id: "governance-framework", label: "Governance Framework" },
  { id: "case-study", label: "Case Study" },
  { id: "faqs", label: "FAQs" },
];

const ModernDataPlatforms = () => {
  const [selected, setSelected] = useState("introduction");
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);

  // SEO optimization
  useSEO({
    title: "Building Modern Data Platforms: An Enterprise Architecture Guide | IndexNine",
    description: "Modern data platforms are the backbone of data-driven organizations. Learn how to architect scalable, secure, and efficient data ecosystems.",
    keywords: "data platforms, data engineering, analytics, cloud architecture, data governance, enterprise data",
    canonicalUrl: "https://indexnine.com/insights/blogs/modern-data-platforms",
    ogImage: "https://indexnine.com/images/blog/modern-data-platforms.jpg",
  });

  const toggleFAQ = (index: number) => {
    setExpandedFAQ(expandedFAQ === index ? null : index);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = leftNavLinks.map((link) => document.getElementById(link.id));
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setSelected(leftNavLinks[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Header />
      
      {/* Enhanced SEO Schema */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          "headline": "Building Modern Data Platforms: An Enterprise Architecture Guide",
          "description": "Modern data platforms are the backbone of data-driven organizations. Learn how to architect scalable, secure, and efficient data ecosystems.",
          "author": {
            "@type": "Organization",
            "name": "Data Engineering Team",
            "url": "https://indexnine.com"
          },
          "publisher": {
            "@type": "Organization",
            "name": "IndexNine",
            "logo": {
              "@type": "ImageObject",
              "url": "https://indexnine.com/logo.png"
            }
          },
          "datePublished": "2025-01-08",
          "dateModified": "2025-01-08",
          "mainEntityOfPage": "https://indexnine.com/insights/blogs/modern-data-platforms",
          "image": "https://indexnine.com/images/blog/modern-data-platforms.jpg",
          "articleSection": "Data Engineering",
          "keywords": "data platforms, data engineering, analytics, cloud architecture, data governance, enterprise data"
        })}
      </script>

      <div
        className="min-h-screen bg-background bg-cover bg-center relative"
        style={{ backgroundImage: `url(/src/assets/images/blog-details-bg.webp)` }}
      >
        <div className="relative z-10">
          {/* Hero Section */}
          <section className="pt-32 pb-12">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <Link
                  to="/insights/blogs"
                  className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors mb-6"
                >
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Blogs
                </Link>

                <div className="mb-6">
                  <span className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium mb-4">
                    Data Engineering
                  </span>
                  <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 leading-tight">
                    Building Modern Data Platforms: An Enterprise Architecture Guide
                  </h1>
                  <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
                    Modern data platforms are the backbone of data-driven organizations. Learn how to architect scalable, secure, and efficient data ecosystems.
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground mb-8">
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    <span>Data Engineering Team</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>January 8, 2025</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span>15 min read</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-8">
                  {["Data Engineering", "Analytics", "Cloud Architecture"].map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Main Content */}
          <section className="pb-16">
            <div className="container mx-auto px-4">
              <div className="flex flex-col lg:flex-row gap-8 max-w-7xl mx-auto">
                {/* Left Navigation */}
                <div className="lg:w-1/4">
                  <div className="sticky top-24">
                    <div className="bg-card/80 backdrop-blur-sm rounded-xl border border-border p-6">
                      <h3 className="font-semibold text-foreground mb-4">Table of Contents</h3>
                      <nav className="space-y-2">
                        {leftNavLinks.map((link) => (
                          <a
                            key={link.id}
                            href={`#${link.id}`}
                            className={`block py-2 px-3 rounded-lg text-sm transition-colors ${
                              selected === link.id
                                ? "bg-primary text-primary-foreground"
                                : "text-muted-foreground hover:text-foreground hover:bg-muted"
                            }`}
                          >
                            {link.label}
                          </a>
                        ))}
                      </nav>
                    </div>
                  </div>
                </div>

                {/* Main Content */}
                <div className="lg:w-3/4">
                  <div className="bg-card/80 backdrop-blur-sm rounded-xl border border-border p-8">
                    <article className="prose prose-lg max-w-none">
                      <div id="introduction" className="scroll-mt-24">
                        <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                          In an era where data drives competitive advantage, organizations need robust, scalable platforms that can handle everything from real-time analytics to machine learning workloads. Modern data platforms aren't just about storage—they're about creating intelligent ecosystems that enable self-service analytics and drive business innovation.
                        </p>
                      </div>

                      <div id="platform-fundamentals" className="scroll-mt-24">
                        <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">Platform Architecture Fundamentals</h2>
                        <p className="text-muted-foreground mb-6">
                          A well-designed data platform balances performance, scalability, and governance while enabling self-service analytics capabilities. The modern approach emphasizes cloud-native architectures with distributed processing engines.
                        </p>
                        
                        <div className="bg-gradient-to-r from-primary/10 to-secondary/10 backdrop-blur-xl rounded-2xl p-8 border border-border mb-8">
                          <h3 className="text-2xl font-bold text-foreground mb-4">Core Platform Components</h3>
                          <ul className="space-y-3 text-muted-foreground">
                            <li>• <strong>Data ingestion:</strong> Real-time and batch processing pipelines</li>
                            <li>• <strong>Storage layer:</strong> Data lakes, warehouses, and feature stores</li>
                            <li>• <strong>Processing engine:</strong> Distributed computing for transformation</li>
                            <li>• <strong>Governance:</strong> Data quality, lineage, and access controls</li>
                          </ul>
                        </div>
                      </div>

                      <div id="architecture-layers" className="scroll-mt-24">
                        <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">The Five-Layer Architecture Model</h2>
                        <p className="text-muted-foreground mb-6">
                          Modern data platforms follow a layered architecture that separates concerns and enables scalable, maintainable systems.
                        </p>
                        
                        <div className="space-y-6 mb-8">
                          {[
                            {
                              title: "1. Data Sources & Ingestion Layer",
                              description: "APIs, databases, streaming sources, and batch ingestion pipelines that bring data into the platform.",
                              technologies: "Kafka, Kinesis, Airbyte, Fivetran"
                            },
                            {
                              title: "2. Storage Layer", 
                              description: "Scalable storage systems including data lakes, warehouses, and specialized stores for different use cases.",
                              technologies: "S3, Snowflake, BigQuery, Delta Lake"
                            },
                            {
                              title: "3. Processing & Compute Layer",
                              description: "Distributed processing engines for ETL/ELT, machine learning, and complex analytics workloads.",
                              technologies: "Spark, Flink, dbt, Airflow"
                            },
                            {
                              title: "4. Serving & API Layer",
                              description: "Data APIs, real-time serving systems, and caching layers that provide access to processed data.",
                              technologies: "Redis, GraphQL, REST APIs, Feature Stores"
                            },
                            {
                              title: "5. Analytics & Visualization Layer",
                              description: "Business intelligence tools, dashboards, and self-service analytics interfaces.",
                              technologies: "Tableau, Looker, Power BI, Jupyter"
                            }
                          ].map((layer, index) => (
                            <div key={index} className="bg-card border border-border rounded-xl p-6">
                              <h3 className="text-xl font-bold text-foreground mb-3">{layer.title}</h3>
                              <p className="text-muted-foreground mb-3">{layer.description}</p>
                              <p className="text-sm text-primary font-medium">Key Technologies: {layer.technologies}</p>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div id="implementation-strategy" className="scroll-mt-24">
                        <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">Implementation Strategy: Build vs Buy vs Partner</h2>
                        <p className="text-muted-foreground mb-6">
                          Successful data platform implementation requires balancing custom development with proven solutions and strategic partnerships.
                        </p>
                        
                        <div className="grid md:grid-cols-3 gap-6 mb-8">
                          <div className="bg-card border border-border rounded-xl p-6">
                            <h3 className="text-xl font-bold text-foreground mb-4">Build Approach</h3>
                            <ul className="space-y-2 text-sm text-muted-foreground mb-4">
                              <li>• Maximum customization</li>
                              <li>• Full control over features</li>
                              <li>• Higher development cost</li>
                              <li>• Longer time to market</li>
                            </ul>
                            <p className="text-xs text-primary">Best for: Unique requirements, competitive differentiation</p>
                          </div>
                          <div className="bg-card border border-border rounded-xl p-6">
                            <h3 className="text-xl font-bold text-foreground mb-4">Buy Approach</h3>
                            <ul className="space-y-2 text-sm text-muted-foreground mb-4">
                              <li>• Proven solutions</li>
                              <li>• Faster implementation</li>
                              <li>• Vendor dependencies</li>
                              <li>• Licensing costs</li>
                            </ul>
                            <p className="text-xs text-primary">Best for: Standard requirements, quick deployment</p>
                          </div>
                          <div className="bg-card border border-border rounded-xl p-6">
                            <h3 className="text-xl font-bold text-foreground mb-4">Partner Approach</h3>
                            <ul className="space-y-2 text-sm text-muted-foreground mb-4">
                              <li>• Expert guidance</li>
                              <li>• Accelerated delivery</li>
                              <li>• Knowledge transfer</li>
                              <li>• Balanced investment</li>
                            </ul>
                            <p className="text-xs text-primary">Best for: Complex projects, skill gaps</p>
                          </div>
                        </div>
                      </div>

                      <div id="governance-framework" className="scroll-mt-24">
                        <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">Data Governance Framework</h2>
                        <p className="text-muted-foreground mb-6">
                          Effective governance ensures data quality, security, and compliance while enabling self-service capabilities.
                        </p>
                        
                        <div className="bg-gradient-to-r from-secondary/10 to-accent/10 backdrop-blur-xl rounded-2xl p-8 border border-border mb-8">
                          <h3 className="text-2xl font-bold text-foreground mb-4">Governance Pillars</h3>
                          <div className="grid md:grid-cols-2 gap-6">
                            <div>
                              <h4 className="font-semibold text-foreground mb-2">Data Quality</h4>
                              <ul className="space-y-1 text-sm text-muted-foreground">
                                <li>• Automated quality monitoring</li>
                                <li>• Data profiling and validation</li>
                                <li>• Quality scorecards and metrics</li>
                              </ul>
                            </div>
                            <div>
                              <h4 className="font-semibold text-foreground mb-2">Security & Privacy</h4>
                              <ul className="space-y-1 text-sm text-muted-foreground">
                                <li>• Role-based access control</li>
                                <li>• Data encryption and masking</li>
                                <li>• Compliance automation</li>
                              </ul>
                            </div>
                            <div>
                              <h4 className="font-semibold text-foreground mb-2">Metadata Management</h4>
                              <ul className="space-y-1 text-sm text-muted-foreground">
                                <li>• Data cataloging and discovery</li>
                                <li>• Lineage tracking</li>
                                <li>• Business glossaries</li>
                              </ul>
                            </div>
                            <div>
                              <h4 className="font-semibold text-foreground mb-2">Lifecycle Management</h4>
                              <ul className="space-y-1 text-sm text-muted-foreground">
                                <li>• Data retention policies</li>
                                <li>• Archival strategies</li>
                                <li>• Cost optimization</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div id="case-study" className="scroll-mt-24">
                        <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">Case Study: Global Retailer's Data Platform Transformation</h2>
                        
                        <div className="bg-card border border-border rounded-xl p-6 mb-6">
                          <h3 className="text-xl font-bold text-foreground mb-4">Challenge</h3>
                          <p className="text-muted-foreground mb-4">
                            A Fortune 500 retailer with 2,000+ stores needed real-time inventory optimization, personalized customer experiences, and predictive analytics across multiple channels.
                          </p>
                          
                          <h3 className="text-xl font-bold text-foreground mb-4">Solution</h3>
                          <ul className="space-y-2 text-muted-foreground mb-4">
                            <li>• Cloud-native architecture with multi-region deployment</li>
                            <li>• Real-time streaming for inventory and customer data</li>
                            <li>• ML-powered demand forecasting and personalization</li>
                            <li>• Self-service analytics for business users</li>
                          </ul>
                          
                          <h3 className="text-xl font-bold text-foreground mb-4">Results</h3>
                          <div className="grid md:grid-cols-3 gap-4">
                            <div className="text-center p-4 bg-primary/5 rounded-lg">
                              <div className="text-2xl font-bold text-primary">40%</div>
                              <div className="text-sm text-muted-foreground">Reduction in stockouts</div>
                            </div>
                            <div className="text-center p-4 bg-primary/5 rounded-lg">
                              <div className="text-2xl font-bold text-primary">25%</div>
                              <div className="text-sm text-muted-foreground">Increase in conversion</div>
                            </div>
                            <div className="text-center p-4 bg-primary/5 rounded-lg">
                              <div className="text-2xl font-bold text-primary">60%</div>
                              <div className="text-sm text-muted-foreground">Faster insights delivery</div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div id="faqs" className="scroll-mt-24">
                        <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">Frequently Asked Questions</h2>
                        
                        <div className="space-y-4">
                          {[
                            {
                              question: "What's the difference between a data lake and data warehouse?",
                              answer: "Data lakes store raw data in its native format and are ideal for exploratory analytics, while data warehouses store structured, processed data optimized for business intelligence queries. Modern platforms often combine both approaches."
                            },
                            {
                              question: "How do I ensure data quality at scale?",
                              answer: "Implement automated data quality checks at ingestion, use schema validation, set up data profiling pipelines, and establish quality metrics with alerting. Quality should be built into every stage of the data pipeline."
                            },
                            {
                              question: "Should I choose cloud or on-premise for my data platform?",
                              answer: "Cloud platforms offer better scalability, lower operational overhead, and access to managed services. Consider cloud-first unless you have specific compliance, latency, or data sovereignty requirements."
                            },
                            {
                              question: "How do I handle real-time and batch processing together?",
                              answer: "Use a lambda or kappa architecture pattern. Lambda processes data in both batch and real-time streams, while kappa uses only streaming with different time windows. Choose based on your consistency and complexity requirements."
                            }
                          ].map((faq, index) => (
                            <div key={index} className="border border-border rounded-lg">
                              <button
                                onClick={() => toggleFAQ(index)}
                                className="w-full text-left p-6 flex justify-between items-center hover:bg-muted/50 transition-colors"
                              >
                                <span className="font-medium text-foreground">{faq.question}</span>
                                <ChevronRight className={`w-5 h-5 transition-transform ${expandedFAQ === index ? 'rotate-90' : ''}`} />
                              </button>
                              {expandedFAQ === index && (
                                <div className="px-6 pb-6 text-muted-foreground">
                                  {faq.answer}
                                </div>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    </article>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-16 bg-muted/50">
            <div className="container mx-auto px-4 text-center">
              <div className="max-w-3xl mx-auto">
                <h2 className="text-3xl font-bold text-foreground mb-4">
                  Ready to Build Your Modern Data Platform?
                </h2>
                <p className="text-xl text-muted-foreground mb-8">
                  Our data engineering experts can help you design and implement a scalable, secure data platform tailored to your business needs.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="bg-primary text-primary-foreground px-8 py-3 rounded-xl font-semibold hover:bg-primary/90 transition-colors">
                    Schedule Data Platform Consultation
                  </button>
                  <button className="border border-border text-foreground px-8 py-3 rounded-xl font-semibold hover:bg-muted transition-colors">
                    Download Platform Blueprint
                  </button>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      
      <Footer />
    </>
  );
};

export default ModernDataPlatforms;