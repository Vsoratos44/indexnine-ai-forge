import React from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import {
  WebPageSchema,
  BreadcrumbSchema,
} from "@/components/SEOStructuredData";
import { Clock, User, ArrowRight } from "lucide-react";
import styles from "../../assets/css/stylesheet.module.css";

import blogImg from "@/assets/images/blog-img.webp";
import blogImg2 from "@/assets/images/blog-img2.webp";

const Blogs = () => {
  /**
   * Blog Posts Data Structure - CMS Ready
   * SEO-optimized content with comprehensive metadata for better search visibility
   * Each post designed for engagement and conversion optimization
   */
  const blogPosts = [
    {
      id: "robot-framework-vs-playwright-automation",
      img: blogImg2,
      title:
        "Robot Framework vs. Playwright: The Test Automation Showdown Your Business Can't Ignore",
      excerpt:
        "In today's competitive landscape, cutting corners on QA isn't an option. Discover which modern test automation framework—Robot Framework or Playwright—is right for your business stage and team.",
      author: "QA Engineering Team",
      publishDate: "January 20, 2025",
      readTime: "10 min read",
      category: "Quality Assurance",
      featured: true,
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
      img: blogImg2,
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
      id: "ai-assisted-software-engineering-cursor",
      img: blogImg2,
      title:
        "Beyond Autocomplete: When AI Meets UI to Supercharge Software Engineering",
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
      id: "microservices-vs-monolith-decision-guide",
      img: blogImg2,
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
    {
      id: "modern-data-platforms-enterprise-guide",
      img: blogImg2,
      title: "Building Modern Data Platforms: An Enterprise Architecture Guide",
      excerpt:
        "Best practices for designing and implementing scalable data platforms that drive business intelligence and enable data-driven decision making across your organization.",
      author: "Data Engineering Team",
      publishDate: "January 8, 2025",
      readTime: "15 min read",
      category: "Data Engineering",
      featured: false,
      tags: [
        "Data Platforms",
        "Cloud Architecture",
        "Business Intelligence",
        "Analytics",
      ],
      content: {
        summary:
          "Complete guide to modern data platform architecture, covering cloud-native solutions, real-time processing, and enterprise security implementations.",
      },
    },
    {
      id: "security-first-development-practices",
      img: blogImg2,
      title: "Security-First Development: Integrating DevSecOps from Day One",
      excerpt:
        "How to integrate security considerations into every stage of the software development lifecycle, from initial architecture to production deployment.",
      author: "Security Engineering Team",
      publishDate: "January 5, 2025",
      readTime: "9 min read",
      category: "Security",
      featured: false,
      tags: [
        "DevSecOps",
        "Application Security",
        "Secure Development",
        "Compliance",
      ],
      content: {
        summary:
          "Practical guide to implementing security-first development practices, including automated security testing, threat modeling, and compliance frameworks.",
      },
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <WebPageSchema
        title="Technology Insights & Engineering Blog | IndexNine"
        description="Read the latest insights on product engineering, AI development, quality assurance, and technology trends from IndexNine's expert team"
        url="https://yoursite.lovable.app/insights/blogs"
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://yoursite.lovable.app/" },
          { name: "Insights", url: "https://yoursite.lovable.app/insights" },
          { name: "Blog", url: "https://yoursite.lovable.app/insights/blogs" },
        ]}
      />
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-[55vh] overflow-hidden bg-black">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/6 w-96 h-96 bg-brand-primary/8 rounded-full blur-3xl animate-float"></div>
          <div
            className="absolute bottom-1/4 right-1/6 w-80 h-80 bg-brand-purple/6 rounded-full blur-3xl animate-float"
            style={{ animationDelay: "2s" }}
          ></div>
        </div>

        <div className="relative z-10 container mx-auto pt-48 pb-24">
          <div className="max-w-4xl mx-auto text-center lg:text-left ml-0">
            <h1 className="text-[2.5rem] sm:text-[3rem] lg:text-[4rem] xl:text-[4rem] font-semibold text-foreground mb-6 leading-[1.25] animate-fade-in font-montserrat">
              Tech{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Insights
              </span>
            </h1>
            <p className="text-xl text-foreground-white/80 mb-12 leading-relaxed font-montserrat">
              Stay ahead of the curve with our latest insights on technology
              trends, best practices, and industry developments.
            </p>
          </div>
        </div>
      </section>
      <div
        className={`pb-24 lg:pb-32 relative bg-[#fff] overflow-hidden ${styles.blogBg}`}
      >
        <div className="bg-glass-light border-glass backdrop-blur-md">
          {/* Featured Post */}
          {blogPosts
            .filter((post) => post.featured)
            .map((post, index) => (
              <section key={index} className="py-24 lg:py-32 ">
                <div className="container">
                  <div className="max-w-8xl mx-auto grid md:grid-cols-3 gap-12">
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
                          <User className="w-4 h-4" />
                          <span className="font-montserrat">{post.author}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4" />
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
                        src={blogImg}
                        alt="Blogs"
                        className="w-full h-auto max-w-md mx-auto"
                      />
                    </div>
                  </div>
                </div>
              </section>
            ))}
        </div>

        {/* Blog Posts Grid */}
        <section className="max-w-6xl mx-auto lg:pt-32 bg-transparent">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-foreground-dark mb-6 font-montserrat leading-[1.4]">
                Latest Posts
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {blogPosts
                .filter((post) => !post.featured)
                .map((post, index) => (
                  <div
                    key={index}
                    className="relative bg-gradient-card-light backdrop-blur-xl rounded-3xl p-6 shadow-glass-lg border border-glass-border hover:shadow-glow transition-all duration-500 transform hover:scale-105"
                  >
                    <div className="mb-4">
                      <img
                        src={post.img}
                        alt={post.id}
                        className="rounded-lg w-full"
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

                    <Link to={`/insights/blogs/${post.id}`}>
                      <Button variant="btnLink" size="link">
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
      <section className="py-24 lg:py-32 bg-gradient-hero">
        <div className="container mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold mb-6 text-foreground-white">
            <span className="leading-[1.4]">Want to Share Your Insights?</span>
          </h2>
          <p className="text-xl text-foreground-white/80 mb-12 font-montserrat">
            Join our community of thought leaders and share your expertise with
            fellow technology professionals.
          </p>
          <Button variant="hero" size="xl" className="rounded-full">
            Contribute
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blogs;
