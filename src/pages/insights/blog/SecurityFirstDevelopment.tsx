import React, { useEffect, useState } from "react";
import { ChevronRight, Clock, User, Calendar, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useSEO } from "@/hooks/useSEO";

// Navigation links for blog sections
const leftNavLinks = [
  { id: "introduction", label: "Introduction" },
  { id: "devsecops-philosophy", label: "DevSecOps Philosophy" },
  { id: "security-integration", label: "Security Integration" },
  { id: "implementation-framework", label: "Implementation Framework" },
  { id: "toolchain-selection", label: "Toolchain Selection" },
  { id: "measurement-metrics", label: "Measurement & Metrics" },
  { id: "faqs", label: "FAQs" },
];

const SecurityFirstDevelopment = () => {
  const [selected, setSelected] = useState("introduction");
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);

  // SEO optimization
  useSEO({
    title: "Security-First Development: Integrating DevSecOps from Day One | IndexNine",
    description: "Security can't be an afterthought. Learn how to embed security practices throughout your development lifecycle for robust, compliant applications.",
    keywords: "devsecops, security engineering, secure development, application security, security automation, compliance",
    canonicalUrl: "https://indexnine.com/insights/blogs/security-first-development",
    ogImage: "https://indexnine.com/images/blog/security-first-development.jpg",
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
          "headline": "Security-First Development: Integrating DevSecOps from Day One",
          "description": "Security can't be an afterthought. Learn how to embed security practices throughout your development lifecycle for robust, compliant applications.",
          "author": {
            "@type": "Organization",
            "name": "Security Engineering Team",
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
          "datePublished": "2025-01-05",
          "dateModified": "2025-01-05",
          "mainEntityOfPage": "https://indexnine.com/insights/blogs/security-first-development",
          "image": "https://indexnine.com/images/blog/security-first-development.jpg",
          "articleSection": "Security",
          "keywords": "devsecops, security engineering, secure development, application security, security automation, compliance"
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
                    Security
                  </span>
                  <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 leading-tight">
                    Security-First Development: Integrating DevSecOps from Day One
                  </h1>
                  <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
                    Security can't be an afterthought. Learn how to embed security practices throughout your development lifecycle for robust, compliant applications.
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground mb-8">
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    <span>Security Engineering Team</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>January 5, 2025</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span>9 min read</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-8">
                  {["DevSecOps", "Security", "Development"].map((tag) => (
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
                          In today's threat landscape, security vulnerabilities can cost organizations millions in damages, regulatory fines, and lost customer trust. The traditional approach of adding security as a final step is no longer viable. Modern organizations need security baked into every aspect of their development process from day one.
                        </p>
                      </div>

                      <div id="devsecops-philosophy" className="scroll-mt-24">
                        <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">The DevSecOps Philosophy</h2>
                        <p className="text-muted-foreground mb-6">
                          DevSecOps transforms security from a gatekeeper into an enabler, allowing teams to move fast while maintaining security standards. It's about shifting security left in the development lifecycle and making it everyone's responsibility.
                        </p>
                        
                        <div className="bg-gradient-to-r from-primary/10 to-secondary/10 backdrop-blur-xl rounded-2xl p-8 border border-border mb-8">
                          <h3 className="text-2xl font-bold text-foreground mb-4">Core DevSecOps Principles</h3>
                          <ul className="space-y-3 text-muted-foreground">
                            <li>• <strong>Security as Code:</strong> Treat security policies and controls as code that can be versioned and automated</li>
                            <li>• <strong>Shift Left:</strong> Integrate security checks early in the development process</li>
                            <li>• <strong>Continuous Monitoring:</strong> Implement ongoing security monitoring throughout the lifecycle</li>
                            <li>• <strong>Shared Responsibility:</strong> Make security everyone's job, not just the security team's</li>
                            <li>• <strong>Fail Fast:</strong> Catch and fix security issues quickly with automated feedback loops</li>
                          </ul>
                        </div>
                      </div>

                      <div id="security-integration" className="scroll-mt-24">
                        <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">Security Integration Points</h2>
                        <p className="text-muted-foreground mb-6">
                          Effective DevSecOps requires security integration at multiple points throughout the development lifecycle. Each stage presents unique opportunities to catch and prevent security issues.
                        </p>
                        
                        <div className="space-y-6 mb-8">
                          {[
                            {
                              stage: "Planning & Design",
                              practices: [
                                "Threat modeling and risk assessment",
                                "Security requirements definition",
                                "Architecture security reviews",
                                "Privacy by design considerations"
                              ],
                              tools: "Microsoft Threat Modeling Tool, OWASP Threat Dragon"
                            },
                            {
                              stage: "Development",
                              practices: [
                                "Secure coding guidelines and training",
                                "Static Application Security Testing (SAST)",
                                "IDE security plugins and linting",
                                "Security-focused code reviews"
                              ],
                              tools: "SonarQube, Checkmarx, Veracode, Semgrep"
                            },
                            {
                              stage: "Build & CI/CD",
                              practices: [
                                "Dependency vulnerability scanning",
                                "Container image security scanning",
                                "Infrastructure as Code security checks",
                                "Supply chain security validation"
                              ],
                              tools: "Snyk, Aqua Security, Twistlock, Grype"
                            },
                            {
                              stage: "Testing",
                              practices: [
                                "Dynamic Application Security Testing (DAST)",
                                "Interactive Application Security Testing (IAST)",
                                "Penetration testing automation",
                                "Security test case development"
                              ],
                              tools: "OWASP ZAP, Burp Suite, Contrast Security"
                            },
                            {
                              stage: "Deployment & Runtime",
                              practices: [
                                "Runtime Application Self-Protection (RASP)",
                                "Security monitoring and alerting",
                                "Compliance validation and reporting",
                                "Incident response automation"
                              ],
                              tools: "Datadog Security, Splunk, ELK Stack, SIEM solutions"
                            }
                          ].map((integration, index) => (
                            <div key={index} className="bg-card border border-border rounded-xl p-6">
                              <h3 className="text-xl font-bold text-foreground mb-3">{integration.stage}</h3>
                              <ul className="space-y-2 text-muted-foreground mb-4">
                                {integration.practices.map((practice, practiceIndex) => (
                                  <li key={practiceIndex}>• {practice}</li>
                                ))}
                              </ul>
                              <p className="text-sm text-primary font-medium">Key Tools: {integration.tools}</p>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div id="implementation-framework" className="scroll-mt-24">
                        <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">Implementation Framework: The SECURE Model</h2>
                        <p className="text-muted-foreground mb-6">
                          Our SECURE framework provides a structured approach to implementing DevSecOps practices in your organization.
                        </p>
                        
                        <div className="grid md:grid-cols-2 gap-6 mb-8">
                          {[
                            {
                              letter: "S",
                              word: "Standardize",
                              description: "Establish security standards, policies, and baseline configurations across all environments."
                            },
                            {
                              letter: "E",
                              word: "Educate",
                              description: "Train development teams on secure coding practices and security awareness."
                            },
                            {
                              letter: "C",
                              word: "Centralize",
                              description: "Centralize security tools, policies, and monitoring for consistent enforcement."
                            },
                            {
                              letter: "U",
                              word: "Unify",
                              description: "Unify security and development processes through automation and collaboration."
                            },
                            {
                              letter: "R",
                              word: "Remediate",
                              description: "Implement fast remediation processes with clear escalation paths."
                            },
                            {
                              letter: "E",
                              word: "Evolve",
                              description: "Continuously evolve security practices based on threat intelligence and lessons learned."
                            }
                          ].map((item, index) => (
                            <div key={index} className="bg-card border border-border rounded-xl p-6">
                              <div className="flex items-center mb-3">
                                <div className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg mr-3">
                                  {item.letter}
                                </div>
                                <h3 className="text-xl font-bold text-foreground">{item.word}</h3>
                              </div>
                              <p className="text-muted-foreground">{item.description}</p>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div id="toolchain-selection" className="scroll-mt-24">
                        <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">DevSecOps Toolchain Selection</h2>
                        <p className="text-muted-foreground mb-6">
                          Choosing the right security tools is critical for successful DevSecOps implementation. Focus on tools that integrate well with your existing development workflow.
                        </p>
                        
                        <div className="bg-gradient-to-r from-secondary/10 to-accent/10 backdrop-blur-xl rounded-2xl p-8 border border-border mb-8">
                          <h3 className="text-2xl font-bold text-foreground mb-4">Tool Selection Criteria</h3>
                          <div className="grid md:grid-cols-2 gap-6">
                            <div>
                              <h4 className="font-semibold text-foreground mb-2">Integration Requirements</h4>
                              <ul className="space-y-1 text-sm text-muted-foreground">
                                <li>• CI/CD pipeline compatibility</li>
                                <li>• API availability for automation</li>
                                <li>• IDE and editor plugins</li>
                                <li>• Dashboard and reporting integration</li>
                              </ul>
                            </div>
                            <div>
                              <h4 className="font-semibold text-foreground mb-2">Performance Criteria</h4>
                              <ul className="space-y-1 text-sm text-muted-foreground">
                                <li>• Scan speed and accuracy</li>
                                <li>• False positive rates</li>
                                <li>• Language and framework support</li>
                                <li>• Scalability and performance</li>
                              </ul>
                            </div>
                            <div>
                              <h4 className="font-semibold text-foreground mb-2">Usability Factors</h4>
                              <ul className="space-y-1 text-sm text-muted-foreground">
                                <li>• Developer experience and UX</li>
                                <li>• Configuration complexity</li>
                                <li>• Learning curve and training needs</li>
                                <li>• Documentation quality</li>
                              </ul>
                            </div>
                            <div>
                              <h4 className="font-semibold text-foreground mb-2">Business Considerations</h4>
                              <ul className="space-y-1 text-sm text-muted-foreground">
                                <li>• Total cost of ownership</li>
                                <li>• Vendor support and roadmap</li>
                                <li>• Compliance requirements</li>
                                <li>• Enterprise security features</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div id="measurement-metrics" className="scroll-mt-24">
                        <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">Measuring DevSecOps Success</h2>
                        <p className="text-muted-foreground mb-6">
                          Effective measurement drives continuous improvement in your DevSecOps practices. Track both security outcomes and process efficiency.
                        </p>
                        
                        <div className="grid md:grid-cols-3 gap-6 mb-8">
                          <div className="bg-card border border-border rounded-xl p-6">
                            <h3 className="text-lg font-bold text-foreground mb-4">Security Metrics</h3>
                            <ul className="space-y-2 text-sm text-muted-foreground">
                              <li>• Time to detect vulnerabilities</li>
                              <li>• Mean time to remediation</li>
                              <li>• Vulnerability backlog trends</li>
                              <li>• Security coverage percentage</li>
                              <li>• Incident frequency and impact</li>
                            </ul>
                          </div>
                          <div className="bg-card border border-border rounded-xl p-6">
                            <h3 className="text-lg font-bold text-foreground mb-4">Process Metrics</h3>
                            <ul className="space-y-2 text-sm text-muted-foreground">
                              <li>• Pipeline security gate pass rates</li>
                              <li>• Developer security training completion</li>
                              <li>• Security tool adoption rates</li>
                              <li>• Policy compliance scores</li>
                              <li>• Automation coverage levels</li>
                            </ul>
                          </div>
                          <div className="bg-card border border-border rounded-xl p-6">
                            <h3 className="text-lg font-bold text-foreground mb-4">Business Metrics</h3>
                            <ul className="space-y-2 text-sm text-muted-foreground">
                              <li>• Development velocity impact</li>
                              <li>• Cost of security incidents</li>
                              <li>• Compliance audit results</li>
                              <li>• Customer trust indicators</li>
                              <li>• Risk reduction achievements</li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      <div id="faqs" className="scroll-mt-24">
                        <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">Frequently Asked Questions</h2>
                        
                        <div className="space-y-4">
                          {[
                            {
                              question: "How do we start implementing DevSecOps without slowing down development?",
                              answer: "Start with low-friction tools like dependency scanners and static analysis that run automatically. Gradually introduce more comprehensive security practices as teams adapt. Focus on education and automation to reduce manual overhead."
                            },
                            {
                              question: "What's the ROI of implementing DevSecOps practices?",
                              answer: "Studies show that fixing vulnerabilities in production costs 30-100x more than fixing them during development. DevSecOps reduces incident response costs, compliance violations, and brand damage while improving development velocity through automation."
                            },
                            {
                              question: "How do we handle security tool false positives?",
                              answer: "Tune tools for your specific environment, implement risk-based prioritization, and establish clear triage processes. Use multiple scanning techniques (SAST, DAST, IAST) for better accuracy and provide training to help developers distinguish real issues."
                            },
                            {
                              question: "Should we build or buy DevSecOps tools?",
                              answer: "Generally, buy proven commercial tools or use open-source solutions rather than building from scratch. Focus internal development on customizations, integrations, and workflows that provide unique competitive advantages."
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
                  Ready to Implement Security-First Development?
                </h2>
                <p className="text-xl text-muted-foreground mb-8">
                  Our security experts can help you design and implement a comprehensive DevSecOps strategy tailored to your organization's needs.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="bg-primary text-primary-foreground px-8 py-3 rounded-xl font-semibold hover:bg-primary/90 transition-colors">
                    Schedule Security Assessment
                  </button>
                  <button className="border border-border text-foreground px-8 py-3 rounded-xl font-semibold hover:bg-muted transition-colors">
                    Download DevSecOps Guide
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

export default SecurityFirstDevelopment;