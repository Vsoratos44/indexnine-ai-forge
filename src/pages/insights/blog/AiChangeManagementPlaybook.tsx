import React, { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import {
  ArrowLeft,
  CheckCircle,
  Download,
  ExternalLink,
  Clock,
  User,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import { Link } from "react-router-dom";
import BlogDetailsBg from "@/assets/images/blog-details-bg.webp";
import blogImg2 from "@/assets/images/blog-img2.webp";
import styles from "../../../assets/css/stylesheet.module.css";
import { useSEO } from "@/hooks/useSEO";

const leftNavLinks = [
  { href: "#intro", label: "Introduction" },
  { href: "#mandate", label: "The Modernization Mandate" },
  { href: "#whyFail", label: "Why AI Projects Fail" },
  { href: "#framework", label: "AI Enablement Framework" },
  { href: "#caseStudy", label: "Case Study" },
  { href: "#outcomes", label: "Business Outcomes" },
  { href: "#faqs", label: "Frequently Asked Questions" },
];

const AiChangeManagementPlaybook = () => {
  const [selected, setSelected] = useState("#intro");
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  // Implement SEO for this blog post
  useSEO({
    title: "The AI Change Management Playbook: Modernizing Legacy Systems with Purpose",
    description: "AI adoption is more than a technical challenge; it's a human one. Discover a strategic framework for change management, data modernization, and identifying high-impact AI initiatives in legacy organizations.",
    canonicalUrl: "https://indexnine.com/insights/blogs/ai-change-management-playbook",
    keywords: "AI change management, legacy system modernization, AI adoption strategy, data modernization, AI enablement framework",
    ogImage: "https://indexnine.com/images/ai-change-management-og.jpg"
  });

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const faqData = [
    {
      question: "Our data is a mess and stored in old systems. Can we still pursue an AI strategy?",
      answer:
        "Absolutely. This is the most common starting point for legacy organizations. Our AI Enablement process is specifically designed to address this. We don't require you to boil the ocean; instead, we identify a high-value use case first and then focus on modernizing only the data sources required for that specific initiative, delivering value incrementally.",
    },
    {
      question: "How do you handle resistance from employees who are comfortable with the current way of doing things?",
      answer:
        "Our change management strategy is centered on demonstrating value and building trust. We actively involve key employees in the process, ensuring their domain expertise is respected and integrated. By focusing on metrics that matter to them we reframe AI as a tool that augments their capabilities, rather than replaces them.",
    },
    {
      question: "Is this purely a consulting service, or do you also build the solutions?",
      answer:
        "It's a complete, end-to-end service. The initial phase is strategic consulting - the audit and change management planning. Following that, our engineering teams execute on the plan, performing the data modernization and building the custom AI applications that drive the desired business outcomes.",
    },
    {
      question: "How long does it take to see results from AI adoption?",
      answer:
        "With our structured AI Enablement approach, you'll see initial results within 6-8 weeks through our strategic assessment phase. Measurable business impact typically appears within 3-6 months as the AI solutions are implemented and integrated into daily workflows.",
    },
    {
      question: "What makes your approach different from other AI consulting firms?",
      answer:
        "Our AI Enablement framework is uniquely focused on the human element of change management alongside technical implementation. We don't just build AI solutions; we ensure your organization is culturally and operationally ready to adopt and sustain them long-term.",
    },
  ];

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
    <div className="min-h-screen bg-background">
      <Header />

      {/* Enhanced SEO Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline:
              "The AI Change Management Playbook: Modernizing Legacy Systems with Purpose",
            description:
              "AI adoption is more than a technical challenge; it's a human one. Discover a strategic framework for change management, data modernization, and identifying high-impact AI initiatives in legacy organizations.",
            url: "https://yoursite.lovable.app/insights/blogs/ai-change-management-playbook",
            datePublished: "2025-01-25T00:00:00Z",
            dateModified: "2025-01-25T00:00:00Z",
            author: {
              "@type": "Organization",
              name: "IndexNine AI Strategy Team",
            },
            publisher: {
              "@type": "Organization",
              name: "IndexNine Technologies",
              logo: {
                "@type": "ImageObject",
                url: "https://yoursite.lovable.app/logo.png",
              },
            },
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id":
                "https://yoursite.lovable.app/insights/blogs/ai-change-management-playbook",
            },
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqData.map((faq) => ({
              "@type": "Question",
              name: faq.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: faq.answer,
              },
            })),
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
                item: "https://yoursite.lovable.app/",
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "Insights",
                item: "https://yoursite.lovable.app/insights",
              },
              {
                "@type": "ListItem",
                position: 3,
                name: "Blogs",
                item: "https://yoursite.lovable.app/insights/blogs",
              },
              {
                "@type": "ListItem",
                position: 4,
                name: "AI Change Management Playbook",
                item: "https://yoursite.lovable.app/insights/blogs/ai-change-management-playbook",
              },
            ],
          }),
        }}
      />

      {/* Hero Section */}
      <section
        className="relative overflow-hidden bg-[#fff] bg-cover bg-center"
        style={{ backgroundImage: `url(${BlogDetailsBg})` }}
      >
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
              Modernizing with Purpose: <br />
              The AI Change Management Playbook for Legacy Organizations
            </h1>

            <div className="flex items-center gap-6 text-sm text-foreground/80 mb-8">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span className="font-montserrat">AI Strategy Team</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span className="font-montserrat">12 min read</span>
              </div>
              <span className="font-montserrat">January 25, 2025</span>
            </div>
            <div className="pt-8">
              <img 
                src={blogImg2} 
                className="w-full" 
                alt="A strategic blueprint for AI change management and data modernization." 
              />
            </div>
          </div>
        </div>
      </section>

      <div className="bg-gradient-to-b from-white via-white to-[#F0F4FF]">
        <a id="intro"></a>
        <div className="container grid md:grid-cols-3 gap-12 bg-transparent pt-24">
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
                  Ready to Modernize with Purpose?
                </h3>
                <p className="text-xl py-8">
                  Schedule an AI Enablement Strategy Session to discover how we can transform your legacy organization.
                </p>
                <Button type="submit" size="lg" variant="btnSecondary">
                  Book Strategy Session
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
                    <p>
                      The promise of Artificial Intelligence is electrifying every level of the enterprise. Leaders are inundated with reports, a barrage of ads, nonstop requests for meetings, and slick vendor demos showcasing a future of unprecedented efficiency... So they're told anyway... Yet, for established organizations built on years of legacy systems and deep-seated workflows, the path from AI ambition to tangible ROI is fraught with peril.
                    </p>
                    <p>
                      The reality is that for every AI success story, countless initiatives quietly stall, failing to move beyond a promising proof-of-concept. This chaos is amplified by media outlets and the constant negative PR around 85%+ of AI implementations failing.
                    </p>
                    <div className="bg-brand-primary/10 p-6 rounded-xl border-l-4 border-brand-primary">
                      <p className="text-foreground-dark font-medium italic">
                        "Successful AI adoption is not merely a technical challenge of deploying a new model. It is a profound exercise in change management and context transfer. It requires a deep understanding of your people, your processes, and your data"
                      </p>
                      <p className="text-sm text-foreground-dark-muted mt-2">
                        - Aashish Singla, CTO IndexNine Technologies
                      </p>
                    </div>
                    <p>
                      For legacy organizations, workflows are often idiosyncratic, data is locked in silos, and invaluable knowledge resides in the minds of veteran employees. Simply layering a new AI tool on top of this complex reality is a recipe for failure. At IndexNine, we've seen this pattern repeat across industries.
                    </p>
                    <p>
                      The organizations that thrive in the AI era are not the ones that simply buy the latest technology, but the ones that approach modernization with a deliberate, strategic, and human-centric playbook. This is the core of our "AI Enablement" offering.
                    </p>
                  </div>

                  <Button type="submit" size="lg" variant="btnPrimary">
                    <Download className="w-4 h-4 mr-2" />
                    Download AI Enablement Framework Guide (PDF)
                  </Button>
                </div>
              </div>
            </section>

            {/* The Modernization Mandate Section */}
            <a id="mandate"></a>
            <section className="pt-24 pb-16 relative overflow-hidden">
              <div className="container text-lg text-foreground-dark-muted leading-relaxed">
                <div className="max-w-5xl mx-auto">
                  <div className="space-y-6">
                    <h2 className="font-semibold text-3xl text-foreground-dark">
                      The Modernization Mandate: Beyond the Hype
                    </h2>
                    <p>
                      Every established organization faces the same fundamental challenge: how to harness the transformative power of AI without disrupting the very operations that have made them successful. The pressure is mounting from every direction—competitors are gaining advantages, customers expect smarter experiences, and shareholders demand efficiency gains.
                    </p>
                    <p>
                      Yet beneath the surface of this AI revolution lies a more complex reality. Legacy systems weren't built for AI integration. Organizational cultures resist change. And most critically, the knowledge that powers these businesses exists in formats that AI cannot easily consume—in the minds of experienced employees, in undocumented processes, in the subtle nuances of industry-specific workflows.
                    </p>
                    <div className="bg-foreground-dark/5 p-8 text-md rounded-xl">
                      The most sophisticated algorithm is useless if it doesn't understand the eccentricities and unwritten rules of your specific business.
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Why AI Projects Fail Section */}
            <a id="whyFail"></a>
            <section className="pt-24 pb-16 relative overflow-hidden">
              <div className="container text-lg text-foreground-dark-muted leading-relaxed">
                <div className="max-w-5xl mx-auto">
                  <div className="space-y-6">
                    <h2 className="font-semibold text-3xl text-foreground-dark">
                      Why AI Projects Fail: The Human and Data Disconnect
                    </h2>
                    <p>
                      Before you can build the future, you must understand the present. AI projects in legacy environments often fail for two fundamental reasons that technology alone cannot solve.
                    </p>
                    
                    <h3 className="font-semibold text-xl text-foreground-dark mt-8">
                      1. The Human Element: Resistance to Change and Loss of Context
                    </h3>
                    <p>
                      At its core, AI adoption is a massive exercise in context transfer. It seeks to codify and automate knowledge that is deeply tribal, and, in most cases, has been built up over years. Without a thoughtful change management strategy, this is perceived not as an enhancement, but as a threat.
                    </p>
                    <p>
                      Employees with deep, legacy know-how can be resistant to new workflows, and if their expertise is not properly captured and integrated, the AI models will lack the critical context they need to be effective.
                    </p>

                    <h3 className="font-semibold text-xl text-foreground-dark mt-8">
                      2. The Data Foundation: A Cracked and Fragmented Ecosystem
                    </h3>
                    <p>
                      This one is more obvious, yet consistently overlooked. An AI system is only as intelligent as the data it can access. Most established organizations are sitting on a gold mine trapped in a tangled web of legacy systems, siloed data pipelines, and inconsistent data structures.
                    </p>
                    <p>
                      Nobody has the budget to waste on building a high-performance AI engine on a cracked foundation. Before any high impact POC can be scaled, there must be a concerted effort to modernize the underlying data sources.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* AI Enablement Framework Section */}
            <a id="framework"></a>
            <section className="pt-24 pb-16 relative overflow-hidden">
              <div className="container text-lg text-foreground-dark-muted leading-relaxed">
                <div className="max-w-5xl mx-auto">
                  <div className="space-y-6">
                    <h2 className="font-semibold text-3xl text-foreground-dark">
                      The AI Enablement Framework: Our Strategic Approach to Change
                    </h2>
                    <p>
                      Our AI Enablement offering is a comprehensive consulting and execution service designed to address these human and data challenges head-on. It's the much needed structured approach to bringing AI into your organization, your engineering processes, and establishing a sustainable, internal AI capability in the Enterprise.
                    </p>

                    <div className="grid md:grid-cols-1 gap-8 mt-12">
                      <div className="bg-white p-8 rounded-xl border border-gray-200">
                        <h3 className="font-semibold text-xl text-foreground-dark mb-4">
                          Step 1: Charting the Terrain (AI & Data Assessment)
                        </h3>
                        <p className="mb-4">
                          Before we write a single line of code, we begin with a deep, strategic assessment and road mapping exercise. This isn't just a technical assessment; it's a focused, business-first analysis to identify the path of least resistance and highest impact within an organization.
                        </p>
                        <ul className="space-y-2">
                          <li className="flex items-start gap-3">
                            <CheckCircle className="h-5 w-5 text-brand-primary mt-0.5 flex-shrink-0" />
                            <span>Process & Workflow Mapping: Identify bottlenecks and friction points where AI can deliver measurable ROI</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <CheckCircle className="h-5 w-5 text-brand-primary mt-0.5 flex-shrink-0" />
                            <span>Data Ecosystem Analysis: Thorough review of data infrastructure quality, accessibility, and AI readiness</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <CheckCircle className="h-5 w-5 text-brand-primary mt-0.5 flex-shrink-0" />
                            <span>Prioritizing High-Impact Initiatives: Collaborative prioritization for maximum first-project success</span>
                          </li>
                        </ul>
                      </div>

                      <div className="bg-gray-50 p-8 rounded-xl border border-gray-200">
                        <h3 className="font-semibold text-xl text-foreground-dark mb-4">
                          Step 2: Building Enthusiasm and Trust (Strategic Change Management)
                        </h3>
                        <p className="mb-4">
                          With a clear roadmap, we focus on the human element. We strategize a change management procedure designed to make everyone enthusiastic about using AI.
                        </p>
                        <ul className="space-y-2">
                          <li className="flex items-start gap-3">
                            <CheckCircle className="h-5 w-5 text-brand-primary mt-0.5 flex-shrink-0" />
                            <span>Stakeholder Workshops: Engage key team members and incorporate invaluable legacy knowledge</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <CheckCircle className="h-5 w-5 text-brand-primary mt-0.5 flex-shrink-0" />
                            <span>Demonstrating Value: Track measurable metrics like time saved and errors reduced</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <CheckCircle className="h-5 w-5 text-brand-primary mt-0.5 flex-shrink-0" />
                            <span>Establishing Internal AI Studio: Build self-sustaining AI capability and center of excellence</span>
                          </li>
                        </ul>
                      </div>

                      <div className="bg-white p-8 rounded-xl border border-gray-200">
                        <h3 className="font-semibold text-xl text-foreground-dark mb-4">
                          Step 3: Purposeful Modernization and Execution
                        </h3>
                        <p>
                          Once strategic and human foundations are in place, we begin technical execution. This is purposeful modernization of data sources and workflows directly connected to prioritized AI initiatives, building and implementing custom AI solutions seamlessly integrated into the newly modernized environment.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Case Study Section */}
            <a id="caseStudy"></a>
            <section className="pt-24 pb-16 relative overflow-hidden">
              <div className="container text-lg text-foreground-dark-muted leading-relaxed">
                <div className="max-w-5xl mx-auto">
                  <div className="space-y-6">
                    <h2 className="font-semibold text-3xl text-foreground-dark">
                      A Case Study in Purposeful Modernization
                    </h2>
                    <div className="bg-blue-50 p-8 rounded-xl">
                      <img 
                        src={blogImg2} 
                        alt="An AI enablement workshop focused on strategizing change management." 
                        className="w-full rounded-lg mb-6"
                      />
                      <p>
                        We recently applied this exact playbook for one of our larger clients, a leading sports analytics company. They possessed a treasure trove of deep, historical sports data but were struggling with the common challenges of a legacy organization.
                      </p>
                      <p className="mt-4">
                        Their workflows were unconventional and siloed from one team to the next, and they faced deep internal resistance to adopting new technologies.
                      </p>
                      <p className="mt-4">
                        Through our AI Enablement engagement, we first performed a deep strategic assessment to identify the most promising use cases while building executive consensus that filtered down early. With the team aligned, top to bottom, we modernized the relevant data pipelines and proceeded to build several high-impact solutions.
                      </p>
                      <div className="mt-6 p-6 bg-white rounded-lg">
                        <h4 className="font-semibold text-lg text-foreground-dark mb-3">Key Results:</h4>
                        <ul className="space-y-2">
                          <li className="flex items-start gap-3">
                            <CheckCircle className="h-5 w-5 text-brand-primary mt-0.5 flex-shrink-0" />
                            <span>Sales copilot implementation with measurable conversion improvements</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <CheckCircle className="h-5 w-5 text-brand-primary mt-0.5 flex-shrink-0" />
                            <span>Sports content LLM generating near-instant, on-brand social media content</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <CheckCircle className="h-5 w-5 text-brand-primary mt-0.5 flex-shrink-0" />
                            <span>Content used by official IPL and ICC teams during live matches</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Business Outcomes Section */}
            <a id="outcomes"></a>
            <section className="pt-24 pb-16 relative overflow-hidden">
              <div className="container text-lg text-foreground-dark-muted leading-relaxed">
                <div className="max-w-5xl mx-auto">
                  <div className="space-y-6">
                    <h2 className="font-semibold text-3xl text-foreground-dark">
                      The Tangible Business Outcomes of Strategic AI Enablement
                    </h2>
                    <p>
                      By approaching AI adoption as a strategic change initiative rather than a simple technology project, organizations unlock profound and sustainable benefits:
                    </p>

                    <div className="grid md:grid-cols-2 gap-6 mt-8">
                      <div className="bg-white p-6 rounded-xl border border-gray-200">
                        <h3 className="font-semibold text-lg text-foreground-dark mb-3">
                          De-Risked AI Investment
                        </h3>
                        <p>
                          By starting with strategic audit, you ensure capital is deployed on high-impact, feasible projects, avoiding costly failures and maximizing ROI.
                        </p>
                      </div>
                      <div className="bg-white p-6 rounded-xl border border-gray-200">
                        <h3 className="font-semibold text-lg text-foreground-dark mb-3">
                          Increased Adoption & Enthusiasm
                        </h3>
                        <p>
                          Thoughtful change management transforms employee skepticism into advocacy, ensuring tools are actually used and embraced.
                        </p>
                      </div>
                      <div className="bg-white p-6 rounded-xl border border-gray-200">
                        <h3 className="font-semibold text-lg text-foreground-dark mb-3">
                          Foundation for Future Innovation
                        </h3>
                        <p>
                          Purposeful data modernization creates robust, scalable ecosystem supporting future portfolio of AI initiatives.
                        </p>
                      </div>
                      <div className="bg-white p-6 rounded-xl border border-gray-200">
                        <h3 className="font-semibold text-lg text-foreground-dark mb-3">
                          Sustainable In-House Capability
                        </h3>
                        <p>
                          Empowering organizations long-term with frameworks and knowledge transfer for AI-powered future.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* FAQ Section */}
            <a id="faqs"></a>
            <section className="pt-24 pb-16 relative overflow-hidden">
              <div className="container relative z-10">
                <div className="max-w-5xl mx-auto">
                  <h2 className="text-3xl font-semibold text-foreground-dark mb-8">
                    Frequently Asked Questions (FAQ)
                  </h2>
                  
                  <div className="space-y-4">
                    {faqData.map((faq, index) => (
                      <div
                        key={index}
                        className="border border-glass-border rounded-xl bg-white/50 backdrop-blur-sm"
                      >
                        <button
                          onClick={() => toggleFAQ(index)}
                          className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-white/30 transition-colors rounded-xl"
                        >
                          <span className="font-medium text-foreground-dark">
                            {faq.question}
                          </span>
                          {openFAQ === index ? (
                            <ChevronUp className="h-5 w-5 text-brand-primary flex-shrink-0" />
                          ) : (
                            <ChevronDown className="h-5 w-5 text-brand-primary flex-shrink-0" />
                          )}
                        </button>
                        {openFAQ === index && (
                          <div className="px-6 pb-4">
                            <p className="text-foreground-dark-muted leading-relaxed">
                              {faq.answer}
                            </p>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>

                  <div className="mt-12 text-center">
                    <Button variant="btnPrimary" size="lg">
                      Schedule an AI Enablement Strategy Session
                    </Button>
                  </div>
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

export default AiChangeManagementPlaybook;