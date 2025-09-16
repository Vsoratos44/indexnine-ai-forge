import React, { useEffect, useState } from "react";
import { ChevronRight, Clock, User, Calendar, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useSEO } from "@/hooks/useSEO";

// Navigation links for blog sections
const leftNavLinks = [
  { id: "introduction", label: "Introduction" },
  { id: "architecture-framework", label: "Architecture Framework" },
  { id: "monolith-benefits", label: "Monolith Benefits" },
  { id: "microservices-advantages", label: "Microservices Advantages" },
  { id: "decision-matrix", label: "Decision Matrix" },
  { id: "implementation-guide", label: "Implementation Guide" },
  { id: "faqs", label: "FAQs" },
];

const MicroservicesVsMonolith = () => {
  const [selected, setSelected] = useState("introduction");
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);

  // SEO optimization
  useSEO({
    title: "Microservices vs Monolith: Making the Right Architectural Choice for Scale | IndexNine",
    description: "Choosing the right architecture isn't just about technology—it's about aligning your system design with business objectives, team capabilities, and growth trajectory.",
    keywords: "microservices, monolith, architecture, scalability, software design, enterprise architecture",
    canonicalUrl: "https://indexnine.com/insights/blogs/microservices-vs-monolith",
    ogImage: "https://indexnine.com/images/blog/microservices-vs-monolith.jpg",
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
          "headline": "Microservices vs Monolith: Making the Right Architectural Choice for Scale",
          "description": "Choosing the right architecture isn't just about technology—it's about aligning your system design with business objectives, team capabilities, and growth trajectory.",
          "author": {
            "@type": "Organization",
            "name": "Architecture Team",
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
          "datePublished": "2025-01-10",
          "dateModified": "2025-01-10",
          "mainEntityOfPage": "https://indexnine.com/insights/blogs/microservices-vs-monolith",
          "image": "https://indexnine.com/images/blog/microservices-vs-monolith.jpg",
          "articleSection": "Architecture",
          "keywords": "microservices, monolith, architecture, scalability, software design, enterprise architecture"
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
                    Architecture
                  </span>
                  <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 leading-tight">
                    Microservices vs Monolith: Making the Right Architectural Choice for Scale
                  </h1>
                  <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
                    Choosing the right architecture isn't just about technology—it's about aligning your system design with business objectives, team capabilities, and growth trajectory.
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground mb-8">
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    <span>Architecture Team</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>January 10, 2025</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span>11 min read</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-8">
                  {["Architecture", "Microservices", "Monolith", "Scalability"].map((tag) => (
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
                          In today's rapidly evolving digital landscape, architectural decisions can make or break your application's future. The choice between microservices and monolithic architecture isn't just a technical decision—it's a strategic business choice that impacts everything from development velocity to operational costs.
                        </p>
                      </div>

                      <div id="architecture-framework" className="scroll-mt-24">
                        <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">The Architecture Decision Framework</h2>
                        <p className="text-muted-foreground mb-6">
                          Before diving into technical comparisons, successful architecture decisions require understanding your business context, team structure, and scalability requirements. Our framework evaluates four critical dimensions.
                        </p>
                        
                        <div className="bg-gradient-to-r from-primary/10 to-secondary/10 backdrop-blur-xl rounded-2xl p-8 border border-border mb-8">
                          <h3 className="text-2xl font-bold text-foreground mb-4">Key Decision Factors</h3>
                          <ul className="space-y-3 text-muted-foreground">
                            <li>• <strong>Team size and experience:</strong> Monoliths work better for smaller, less experienced teams</li>
                            <li>• <strong>Business complexity:</strong> Complex domains benefit from service boundaries</li>
                            <li>• <strong>Scalability requirements:</strong> Different scaling needs favor different approaches</li>
                            <li>• <strong>Deployment frequency:</strong> Independent deployments require microservices</li>
                          </ul>
                        </div>
                      </div>

                      <div id="monolith-benefits" className="scroll-mt-24">
                        <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">The Monolith Advantage: Simplicity at Scale</h2>
                        <p className="text-muted-foreground mb-6">
                          Monolithic architectures excel in environments where simplicity, rapid development, and strong consistency are priorities. They're particularly effective for startups and teams with limited DevOps experience.
                        </p>
                        
                        <div className="bg-gradient-to-r from-secondary/10 to-accent/10 backdrop-blur-xl rounded-2xl p-8 border border-border mb-8">
                          <h3 className="text-2xl font-bold text-foreground mb-4">Monolith Strengths</h3>
                          <ul className="space-y-3 text-muted-foreground">
                            <li>• <strong>Simplified deployment:</strong> Single deployable unit reduces operational complexity</li>
                            <li>• <strong>Strong consistency:</strong> ACID transactions across entire application</li>
                            <li>• <strong>Easy debugging:</strong> Single codebase with unified logging and monitoring</li>
                            <li>• <strong>Performance:</strong> No network latency between components</li>
                            <li>• <strong>Development speed:</strong> Faster initial development and testing</li>
                          </ul>
                        </div>
                      </div>

                      <div id="microservices-advantages" className="scroll-mt-24">
                        <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">Microservices: The Enterprise Scalability Solution</h2>
                        <p className="text-muted-foreground mb-6">
                          Microservices architecture shines in complex enterprise environments with multiple teams, diverse technology requirements, and independent scaling needs.
                        </p>
                        
                        <div className="bg-gradient-to-r from-accent/10 to-primary/10 backdrop-blur-xl rounded-2xl p-8 border border-border mb-8">
                          <h3 className="text-2xl font-bold text-foreground mb-4">Microservices Benefits</h3>
                          <ul className="space-y-3 text-muted-foreground">
                            <li>• <strong>Independent scaling:</strong> Scale services based on specific demand patterns</li>
                            <li>• <strong>Technology diversity:</strong> Choose optimal tech stack per service</li>
                            <li>• <strong>Team autonomy:</strong> Independent development and deployment cycles</li>
                            <li>• <strong>Fault isolation:</strong> Failure in one service doesn't break entire system</li>
                            <li>• <strong>Organizational alignment:</strong> Services align with business domains</li>
                          </ul>
                        </div>
                      </div>

                      <div id="decision-matrix" className="scroll-mt-24">
                        <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">Decision Matrix: Which Architecture Fits Your Stage?</h2>
                        
                        <div className="overflow-x-auto mb-8">
                          <table className="w-full border-collapse border border-border rounded-lg">
                            <thead>
                              <tr className="bg-muted">
                                <th className="border border-border p-4 text-left">Factor</th>
                                <th className="border border-border p-4 text-left">Monolith</th>
                                <th className="border border-border p-4 text-left">Microservices</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td className="border border-border p-4 font-medium">Team Size</td>
                                <td className="border border-border p-4">2-8 developers</td>
                                <td className="border border-border p-4">10+ developers, multiple teams</td>
                              </tr>
                              <tr>
                                <td className="border border-border p-4 font-medium">Complexity</td>
                                <td className="border border-border p-4">Simple to moderate</td>
                                <td className="border border-border p-4">High business complexity</td>
                              </tr>
                              <tr>
                                <td className="border border-border p-4 font-medium">Deployment Frequency</td>
                                <td className="border border-border p-4">Weekly/Monthly</td>
                                <td className="border border-border p-4">Daily/Multiple per day</td>
                              </tr>
                              <tr>
                                <td className="border border-border p-4 font-medium">Scaling Requirements</td>
                                <td className="border border-border p-4">Uniform load patterns</td>
                                <td className="border border-border p-4">Variable, service-specific</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>

                      <div id="implementation-guide" className="scroll-mt-24">
                        <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">Implementation Strategy: From Decision to Deployment</h2>
                        <p className="text-muted-foreground mb-6">
                          Whether you choose monoliths or microservices, successful implementation requires careful planning and gradual execution.
                        </p>
                        
                        <div className="grid md:grid-cols-2 gap-6 mb-8">
                          <div className="bg-card border border-border rounded-xl p-6">
                            <h3 className="text-xl font-bold text-foreground mb-4">Monolith Implementation</h3>
                            <ul className="space-y-2 text-sm text-muted-foreground">
                              <li>1. Design modular architecture</li>
                              <li>2. Implement clean boundaries</li>
                              <li>3. Set up comprehensive testing</li>
                              <li>4. Plan for future extraction</li>
                            </ul>
                          </div>
                          <div className="bg-card border border-border rounded-xl p-6">
                            <h3 className="text-xl font-bold text-foreground mb-4">Microservices Implementation</h3>
                            <ul className="space-y-2 text-sm text-muted-foreground">
                              <li>1. Start with monolith-first approach</li>
                              <li>2. Identify service boundaries</li>
                              <li>3. Extract services incrementally</li>
                              <li>4. Implement observability from day one</li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      <div id="faqs" className="scroll-mt-24">
                        <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">Frequently Asked Questions</h2>
                        
                        <div className="space-y-4">
                          {[
                            {
                              question: "When should I migrate from monolith to microservices?",
                              answer: "Consider migration when you have multiple teams, need independent scaling, or face deployment bottlenecks. Don't migrate just for technology trends—migrate when business needs justify the operational complexity."
                            },
                            {
                              question: "Can I start with microservices for a new project?",
                              answer: "Generally, start with a well-structured monolith and extract microservices as your understanding of the domain improves. This approach reduces early complexity while preserving future options."
                            },
                            {
                              question: "What are the hidden costs of microservices?",
                              answer: "Microservices introduce significant operational overhead: service discovery, distributed tracing, network reliability, data consistency, and increased infrastructure costs. Factor in 2-3x operational complexity."
                            },
                            {
                              question: "How do I handle data consistency across microservices?",
                              answer: "Embrace eventual consistency through event-driven architectures, implement saga patterns for distributed transactions, and design for partition tolerance from the start."
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
                  Need Help Choosing the Right Architecture?
                </h2>
                <p className="text-xl text-muted-foreground mb-8">
                  Our architecture experts can help you evaluate your specific needs and design the optimal solution for your business goals.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="bg-primary text-primary-foreground px-8 py-3 rounded-xl font-semibold hover:bg-primary/90 transition-colors">
                    Schedule Architecture Review
                  </button>
                  <button className="border border-border text-foreground px-8 py-3 rounded-xl font-semibold hover:bg-muted transition-colors">
                    Download Architecture Guide
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

export default MicroservicesVsMonolith;