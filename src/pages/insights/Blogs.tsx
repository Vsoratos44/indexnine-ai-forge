import React from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useSEO } from "@/hooks/useSEO";
import {
  WebPageSchema,
  BreadcrumbSchema,
} from "@/components/SEOStructuredData";
import { Clock, User, ArrowRight } from "lucide-react";
import styles from "../../assets/css/stylesheet.module.css";

// import blogImg from "@/assets/images/blog-img.webp";
// import blogImg2 from "@/assets/images/blog-img2.webp";

import blogAgentic from "@/assets/images/blog-agentic.webp";
import blogAimgmt from "@/assets/images/blog-ai-mgmt.webp";
import blogAutocomplete from "@/assets/images/blog-autocomplete.webp";
import blogMicrosMonolth from "@/assets/images/blog-micros-monolth.webp";
import blogModenrnAnltcs from "@/assets/images/blog-modern-analytics.webp";
import blogRobot from "@/assets/images/blog-robot.webp";
import blogCloudInfra from "@/assets/images/blog-cloud-infra.webp";
import blogSnapTest from "@/assets/images/blog-snap-test.webp";

const Blogs = () => {
  /**
   * Blog Posts Data Structure - CMS Ready
   * SEO-optimized content with comprehensive metadata for better search visibility
   * Each post designed for engagement and conversion optimization
   */
  const blogPosts = [
    {
      id: "quality-engineering-platform",
      img: blogSnapTest,
      title: "Snap.TestAuthor: Stop Guessing, Start Engineering Quality",
      excerpt:
        "Empower your non-technical teams with Snap.TestAuthor. Our platform uses the TMap® methodology to generate risk-driven test cases from your existing documents, ensuring you build the right product, right from the start.",
      author: "QA Engineering Team",
      publishDate: "February 15, 2025",
      readTime: "12 min read",
      category: "Quality Engineering",
      featured: false,
      metaTitle: "Snap.TestAuthor: Stop Guessing, Start Engineering Quality",
      metaDescription:
        "Empower your non-technical teams with Snap.TestAuthor. Our platform uses the TMap® methodology to generate risk-driven test cases from your existing documents, ensuring you build the right product, right from the start.",
      tags: [
        "test case generation",
        "product owner testing",
        "quality engineering",
        "TMap methodology",
        "agile QA",
        "risk-based testing",
        "Jira test automation",
        "QA consulting",
        "test automation",
        "shift-left testing",
      ],
      content: {
        summary:
          "Strategic guide to intelligent test case generation using TMap methodology, empowering non-technical teams to build quality into products from the start.",
        sections: [
          "The Product Owner's Testing Dilemma",
          "The Shift to Intelligent, Outcome-Driven Quality",
          "From Raw Requirements to Actionable Insights in Four Steps",
          "The Future is Automated, Self-Healing, and Intelligent",
          "Frequently Asked Questions",
        ],
        cta: {
          primary: "Schedule Your Live Demo",
          secondary: "Talk to a QA Strategist",
        },
      },
    },
    {
      id: "cloud-infrastructure-automation-terraform",
      img: blogCloudInfra,
      title:
        "Cloud Infrastructure Automation: Deploy Production-Ready AWS Environments in Minutes",
      excerpt:
        "Skip weeks of manual cloud setup. Deploy production-ready AWS, GCP, or Azure infrastructure in 10 minutes with Terraform automation. Get secure, scalable environments instantly.",
      author: "Cloud Architecture Team",
      publishDate: "January 30, 2025",
      readTime: "15 min read",
      category: "Cloud Infrastructure",
      featured: true,
      metaTitle:
        "Cloud Infrastructure Automation: Deploy AWS with Terraform in Minutes | Snap.MVP",
      metaDescription:
        "Skip weeks of manual cloud setup. Deploy production-ready AWS, GCP, or Azure infrastructure in 10 minutes with Terraform automation. Get secure, scalable environments instantly.",
      tags: [
        "cloud infrastructure automation",
        "terraform aws deployment",
        "infrastructure as code tutorial",
        "aws well-architected framework",
        "cloud deployment automation",
        "production ready infrastructure",
        "terraform vs manual cloud configuration",
        "aws infrastructure deployment best practices",
      ],
      content: {
        summary:
          "Comprehensive guide to cloud infrastructure automation using Terraform, covering deployment strategies, cost optimization, and AWS Well-Architected Framework implementation.",
        sections: [
          "Executive Summary: Key Takeaways",
          "Manual vs Automated Infrastructure Deployment",
          "What is Snap.MVP? An Accelerator for a Production-Ready Foundation",
          "How to Deploy Cloud Infrastructure in 10 Minutes",
          "The Four Pillars of Accelerated Deployment",
          "Under the Hood: The Five Layers of a Well-Architected Cloud Environment",
          "How Our Clients Leverage Snap.MVP for a Strategic Advantage",
          "Frequently Asked Questions (FAQ)",
        ],
        cta: {
          primary: "Book a Product Launch Assessment Today",
          secondary: "Download Infrastructure Guide (PDF)",
        },
      },
    },
    {
      id: "modern-analytics-platform",
      img: blogModenrnAnltcs,
      title:
        "The Modern Analytics Platform: A Blueprint for Your Data Strategy",
      excerpt:
        "Don't let your data strategy fail. Discover a pragmatic blueprint for building a modern, cloud-native analytics platform that powers business intelligence and drives real ROI from your AI investments.",
      author: "Data Engineering Team",
      publishDate: "January 28, 2025",
      readTime: "15 min read",
      category: "Data Engineering",
      featured: false,
      metaTitle:
        "The Modern Analytics Platform: An Enterprise Blueprint for Your Data Strategy",
      metaDescription:
        "Don't let your data strategy fail. Discover a pragmatic blueprint for building a modern, cloud-native analytics platform that powers business intelligence and drives real ROI from your AI investments.",
      tags: [
        "Modern Analytics Platform",
        "Data Strategy",
        "Enterprise Data Architecture",
        "Data Modernization",
        "Business Intelligence",
        "AI-Ready Infrastructure",
      ],
      content: {
        summary:
          "Comprehensive blueprint for building modern analytics platforms that transform data assets into strategic resources for AI and business intelligence success.",
        sections: [
          "The Readiness Reality Check: Why Most Data & AI Initiatives Fail",
          "Assessing Your Data Maturity: The AGILE Framework",
          "The Blueprint for a Modern Analytics Platform: A Four-Step Journey",
          "Case Study in Transformation: Modernizing Parking Management for the Cloud Era",
          "Frequently Asked Questions (FAQ)",
        ],
        cta: {
          primary: "Schedule a Data Readiness Assessment with Our Experts",
          secondary: "Download Data Strategy Blueprint Guide (PDF)",
        },
      },
    },
    {
      id: "ai-change-management-playbook",
      img: blogAimgmt,
      title:
        "The AI Change Management Playbook: Modernizing Legacy Systems with Purpose",
      excerpt:
        "AI adoption is more than a technical challenge; it's a human one. Discover a strategic framework for change management, data modernization, and identifying high-impact AI initiatives in legacy organizations.",
      author: "AI Strategy Team",
      publishDate: "January 25, 2025",
      readTime: "12 min read",
      category: "AI Strategy",
      featured: false,
      metaTitle:
        "The AI Change Management Playbook: Modernizing Legacy Systems with Purpose",
      metaDescription:
        "AI adoption is more than a technical challenge; it's a human one. Discover a strategic framework for change management, data modernization, and identifying high-impact AI initiatives in legacy organizations.",
      tags: [
        "AI Change Management",
        "Legacy System Modernization",
        "AI Adoption Strategy",
        "Data Modernization",
        "AI Enablement Framework",
      ],
      content: {
        summary:
          "Strategic guide to AI adoption for legacy organizations, covering change management, data modernization, and the AI Enablement framework for sustainable transformation.",
        sections: [
          "The Modernization Mandate: Beyond the Hype",
          "Why AI Projects Fail: The Human and Data Disconnect",
          "The AI Enablement Framework: Our Strategic Approach to Change",
          "A Case Study in Purposeful Modernization",
          "The Tangible Business Outcomes of Strategic AI Enablement",
        ],
        cta: {
          primary: "Schedule an AI Enablement Strategy Session",
          secondary: "Download AI Enablement Framework Guide (PDF)",
        },
      },
    },
    {
      id: "robot-framework-vs-playwright",
      img: blogRobot,
      title:
        "Robot Framework vs. Playwright: The Test Automation Showdown Your Business Can't Ignore",
      excerpt:
        "In today's competitive landscape, cutting corners on QA isn't an option. Discover which modern test automation framework—Robot Framework or Playwright—is right for your business stage and team.",
      author: "QA Engineering Team",
      publishDate: "January 20, 2025",
      readTime: "10 min read",
      category: "Quality Assurance",
      featured: false,
      metaTitle:
        "Robot Framework vs Playwright: Which Test Automation Service is Right for You?",
      metaDescription:
        "A deep dive into Robot Framework vs Playwright for enterprise-grade test automation. See which framework powers a better continuous testing and QA process.",
      tags: [
        "Test Automation",
        "Robot Framework",
        "Playwright",
        "QA Process",
        "Continuous Testing",
      ],
      content: {
        summary:
          "Comprehensive comparison of Robot Framework vs Playwright for modern test automation, including business impact analysis, framework selection criteria, and implementation strategies.",
        sections: [
          "At a Glance: Robot Framework vs. Playwright Comparison",
          "Robot Framework: The Startup's Secret Weapon for Agile Quality",
          "Playwright: The Enterprise Powerhouse for High-Velocity Teams",
          "Don't Settle for Good Enough: A Partner in Quality Engineering",
        ],
        cta: {
          primary: "Book a Free QA Consulting Session",
          secondary: "Download Our QA Automation Framework eBook (PDF)",
        },
      },
    },
    {
      id: "agentic-ai-enterprise-future",
      img: blogAgentic,
      title:
        "The Future Is Agentic. Is Your Enterprise Ready for What Comes Next?",
      excerpt:
        "The enterprise technology landscape is buzzing with AI agents. Amazon's AgentCore toolkit signals a seismic shift toward autonomous systems. Learn strategic adoption with extreme caution.",
      author: "AI Strategy Team",
      publishDate: "January 15, 2025",
      readTime: "8 min read",
      category: "AI & Technology",
      featured: false,
      tags: [
        "AI Agents",
        "Enterprise Technology",
        "AWS AgentCore",
        "Digital Transformation",
      ],
      content: {
        summary:
          "Strategic guide to enterprise AI agent adoption, covering Amazon's AgentCore toolkit, implementation frameworks, and risk management strategies.",
        sections: [
          "Beyond the Hype: What an Enterprise Agent Truly Means",
          "AWS - Always a Powerful Accelerator, Never a Magic Bullet",
          "The Indexnine Approach: Strategic AI Adoption",
        ],
      },
    },
    {
      id: "ai-assisted-software-engineering",
      img: blogAutocomplete,
      title:
        "Beyond Autocomplete: When AI Meets UI to Supercharge Software Engineering with Cursor AI",
      excerpt:
        "Discover how AI code generation tools like Cursor AI can accelerate React development. Learn our proven framework for AI-assisted engineering with measurable productivity gains.",
      author: "Senior UI Architect",
      publishDate: "January 12, 2025",
      readTime: "12 min read",
      category: "Development Tools",
      featured: false,
      tags: [
        "Cursor AI",
        "React Development",
        "AI Tools",
        "Developer Productivity",
      ],
      content: {
        summary:
          "Comprehensive guide to leveraging Cursor AI for React development, including proprietary frameworks, best practices, and real-world implementation lessons.",
        sections: [
          "Can AI Really Help Build UI?",
          "The Good, the Glitchy, and the Fixable",
          "Turning AI Tools into Tangible Business Velocity",
        ],
      },
    },
    {
      id: "microservices-vs-monolith",
      img: blogMicrosMonolth,
      title:
        "Microservices vs Monolith: Making the Right Architectural Choice for Scale",
      excerpt:
        "A comprehensive guide to choosing between microservices and monolithic architecture based on your business stage, team size, and technical requirements.",
      author: "Architecture Team",
      publishDate: "January 10, 2025",
      readTime: "11 min read",
      category: "Architecture",
      featured: false,
      tags: [
        "Microservices",
        "Monolithic Architecture",
        "System Design",
        "Scalability",
      ],
      content: {
        summary:
          "Strategic framework for architectural decision-making, covering when to choose microservices vs monoliths, migration strategies, and business impact considerations.",
      },
    },
  ];

  // Implement comprehensive SEO for Blog listing page
  useSEO({
    title: "Technology Insights & Engineering Blog | IndexNine",
    description:
      "Read the latest insights on product engineering, AI development, quality assurance, and technology trends from IndexNine's expert team",
    canonicalUrl: "https://www.indexnine.com/insights/blogs",
    keywords:
      "technology blog, product engineering, AI development, quality assurance, software engineering insights, tech trends",
    ogImage: "https://www.indexnine.com/images/blog-og.jpg",
  });

  return (
    <div className="min-h-screen bg-background">
      <WebPageSchema
        title="Technology Insights & Engineering Blog | IndexNine"
        description="Read the latest insights on product engineering, AI development, quality assurance, and technology trends from IndexNine's expert team"
        url="https://www.indexnine.com/insights/blogs"
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://www.indexnine.com/" },
          { name: "Insights", url: "https://www.indexnine.com/insights" },
          { name: "Blog", url: "https://www.indexnine.com/insights/blogs" },
        ]}
      />
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-[380px] sm:min-h-[480px] overflow-hidden bg-black">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/6 w-96 h-96 bg-brand-primary/8 rounded-full blur-3xl animate-float"></div>
          <div
            className="absolute bottom-1/4 right-1/6 w-80 h-80 bg-brand-purple/6 rounded-full blur-3xl animate-float"
            style={{ animationDelay: "2s" }}
          ></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 pt-32 lg:pt-48 pb-12 sm:pb-16 lg:pb-24">
          <div className="max-w-6xl mx-auto text-center lg:text-left lg:ml-0">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-semibold text-foreground mb-4 sm:mb-6 leading-[1.25] animate-fade-in font-montserrat">
              Engineering{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Insights
              </span>
            </h1>
            <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-foreground/85 mb-6 sm:mb-8 leading-relaxed font-light animate-slide-up font-montserrat max-w-4xl">
              Deep dives into product engineering, AI implementation strategies,
              and real-world solutions to complex technical challenges.
            </p>
          </div>
        </div>
      </section>
      <div
        className={`pb-24 lg:pb-32 relative bg-[#fff] overflow-hidden ${styles.blogBg}`}
      >
        <div className="bg-glass-light border-glass">
          {/* Featured Post */}
          {blogPosts
            .filter((post) => post.featured)
            .map((post, index) => (
              <section key={index} className="pt-24 lg:pt-32 ">
                <div className="container">
                  <div className="max-w-8xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-y-12">
                    <div className="col-span-2">
                      <div className="mb-4">
                        <span className="text-sm border border-brand-primary/40 text-brand-primary px-3 py-2 rounded-full font-montserrat">
                          Featured Post
                        </span>
                      </div>
                      <h2 className="text-3xl lg:text-4xl font-semibold text-foreground-dark mb-6 font-montserrat">
                        <span className="leading-[1.3]">{post.title}</span>
                      </h2>
                      <p className="text-xl text-foreground-dark-muted mb-8 leading-relaxed font-montserrat">
                        {post.excerpt}
                      </p>

                      <div className="flex items-center gap-6 mb-8 text-sm text-foreground-dark-muted/80">
                        <div className="flex items-center gap-2">
                          <span>
                            <User className="w-4 h-4" />
                          </span>
                          <span className="font-montserrat">{post.author}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span>
                            <Clock className="w-4 h-4" />
                          </span>
                          <span className="font-montserrat">
                            {post.readTime}
                          </span>
                        </div>
                        <span className="font-montserrat">
                          {post.publishDate}
                        </span>
                      </div>

                      <Link to={`/insights/blogs/${post.id}`}>
                        <Button variant="btnPrimary">
                          Read Full Article{" "}
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                      </Link>
                    </div>
                    <div className=" w-auto">
                      <img
                        src={blogCloudInfra}
                        alt="Blogs"
                        className="w-full rounded-xl h-[480px] object-cover"
                      />
                    </div>
                  </div>
                </div>
              </section>
            ))}
        </div>

        {/* Blog Posts Grid */}
        <section className="max-w-6xl mx-auto pt-16 lg:pt-32 bg-transparent">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-foreground-dark mb-8 font-montserrat leading-[1.2]">
                Latest Posts
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {blogPosts
                .filter((post) => !post.featured)
                .map((post, index) => (
                  <div
                    key={index}
                    className="relative bg-gradient-card-light backdrop-blur-xl rounded-3xl p-6 shadow-glass-lg border border-glass-border hover:shadow-glow transition-all duration-500 transform hover:scale-105 flex flex-col"
                  >
                    <div className="mb-4">
                      <img
                        src={post.img}
                        alt={post.id}
                        className="rounded-lg w-full h-64 object-cover"
                      />
                    </div>
                    <div className="mb-4">
                      <span className="text-sm bg-brand-purple/10 text-brand-purple px-3 py-1 rounded-full font-montserrat">
                        {post.category}
                      </span>
                    </div>

                    <h3 className="text-2xl font-semibold text-foreground-dark mb-4 font-montserrat leading-tight">
                      {post.title}
                    </h3>
                    <p className="text-foreground-dark-muted mb-6 leading-relaxed font-montserrat">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center gap-4 mb-6 text-sm text-foreground-dark-muted/80">
                      <div className="flex items-center gap-2">
                        <User className="w-4 h-4" />
                        <span className="font-montserrat">{post.author}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        <span className="font-montserrat">{post.readTime}</span>
                      </div>
                    </div>

                    <Link to={`/insights/blogs/${post.id}`} className="mt-auto">
                      <Button
                        variant="btnLink"
                        size="lg"
                        className="p-0 md:px-0"
                      >
                        Read More <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </Link>
                  </div>
                ))}
            </div>
          </div>
        </section>
      </div>
      {/* CTA Section */}
      <section className={`py-24 lg:py-32 ${styles.ctaBg}`}>
        <div className="container mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold mb-6 text-foreground-white">
            <span className="leading-[1.2]">Want to Share Your Insights?</span>
          </h2>
          <p className="text-xl text-foreground-white/80 mb-12 font-montserrat">
            Join our community of thought leaders and share your expertise with
            fellow technology professionals.
          </p>
          <Button variant="btnSecondary" size="lg" className="rounded-full">
            Contribute
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blogs;
