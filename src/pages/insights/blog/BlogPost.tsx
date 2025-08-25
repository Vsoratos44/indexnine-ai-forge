import React from "react";
import { useParams, Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import {
  WebPageSchema,
  BreadcrumbSchema,
  ArticleSchema,
} from "@/components/SEOStructuredData";
import { Clock, User, ArrowLeft, Calendar } from "lucide-react";
import styles from "../../../assets/css/stylesheet.module.css";
import BlogDetailsBg from "@/assets/images/blog-details-bg.webp";
import blogImg2 from "@/assets/images/blog-img2.webp";

const BlogPost = () => {
  const { slug } = useParams();

  // Blog posts data - this should eventually come from CMS
  const blogPosts = {
    "robot-framework-vs-playwright-automation": {
      id: "robot-framework-vs-playwright-automation",
      title:
        "Robot Framework vs. Playwright: The Test Automation Showdown Your Business Can't Ignore",
      content: `
        <div class="prose prose-lg max-w-none">
          <p class="text-xl text-foreground-muted mb-8 leading-relaxed">In today's competitive landscape, cutting corners on QA isn't an option. Discover which modern test automation framework—Robot Framework or Playwright—is right for your business stage and team.</p>
          
          <h2 class="text-3xl font-bold text-foreground mt-12 mb-6">At a Glance: Robot Framework vs. Playwright Comparison</h2>
          <p class="text-foreground-muted mb-6">When choosing between Robot Framework and Playwright, understanding your business context is crucial. Both frameworks offer distinct advantages depending on your organization's size, technical expertise, and automation goals.</p>
          
          <div class="bg-gradient-card backdrop-blur-xl rounded-2xl p-8 border border-glass-border mb-8">
            <h3 class="text-2xl font-bold text-foreground mb-4">Key Decision Factors</h3>
            <ul class="space-y-3 text-foreground-muted">
              <li>• <strong>Team expertise level:</strong> Robot Framework excels with mixed technical teams</li>
              <li>• <strong>Scalability needs:</strong> Playwright offers superior performance for large-scale testing</li>
              <li>• <strong>Integration requirements:</strong> Both support CI/CD, but with different approaches</li>
              <li>• <strong>Maintenance overhead:</strong> Consider long-term support and updates</li>
            </ul>
          </div>

          <h2 class="text-3xl font-bold text-foreground mt-12 mb-6">Robot Framework: The Startup's Secret Weapon for Agile Quality</h2>
          <p class="text-foreground-muted mb-6">Robot Framework shines in environments where speed to market and collaborative testing are priorities. Its keyword-driven approach enables non-technical stakeholders to contribute to test creation and maintenance.</p>
          
          <div class="bg-gradient-card backdrop-blur-xl rounded-2xl p-8 border border-glass-border mb-8">
            <h3 class="text-2xl font-bold text-foreground mb-4">Robot Framework Advantages</h3>
            <ul class="space-y-3 text-foreground-muted">
              <li>• <strong>Natural language syntax:</strong> Business analysts can write and understand tests</li>
              <li>• <strong>Extensive library ecosystem:</strong> Pre-built keywords for common testing scenarios</li>
              <li>• <strong>Detailed reporting:</strong> Built-in HTML reports with screenshots and logs</li>
              <li>• <strong>Cross-platform support:</strong> Works seamlessly across web, mobile, and API testing</li>
            </ul>
          </div>

          <h2 class="text-3xl font-bold text-foreground mt-12 mb-6">Playwright: The Enterprise Powerhouse for High-Velocity Teams</h2>
          <p class="text-foreground-muted mb-6">For organizations with dedicated QA engineers and complex testing requirements, Playwright offers unmatched performance and modern web testing capabilities.</p>
          
          <div class="bg-gradient-card backdrop-blur-xl rounded-2xl p-8 border border-glass-border mb-8">
            <h3 class="text-2xl font-bold text-foreground mb-4">Playwright Advantages</h3>
            <ul class="space-y-3 text-foreground-muted">
              <li>• <strong>Lightning-fast execution:</strong> Parallel testing across multiple browsers</li>
              <li>• <strong>Modern web support:</strong> Native handling of SPAs, PWAs, and modern frameworks</li>
              <li>• <strong>Auto-wait capabilities:</strong> Intelligent waiting reduces flaky tests</li>
              <li>• <strong>Network interception:</strong> Mock APIs and test offline scenarios</li>
            </ul>
          </div>

          <h2 class="text-3xl font-bold text-foreground mt-12 mb-6">Don't Settle for Good Enough: A Partner in Quality Engineering</h2>
          <p class="text-foreground-muted mb-6">The choice between Robot Framework and Playwright isn't just about technical features—it's about aligning your testing strategy with your business goals and team capabilities.</p>
          
          <div class="bg-gradient-hero rounded-2xl p-8 text-center mb-8">
            <h3 class="text-2xl font-bold text-foreground-white mb-4">Ready to Transform Your QA Process?</h3>
            <p class="text-foreground-white/80 mb-6">Our Quality Engineering experts can help you choose and implement the right automation framework for your specific needs.</p>
            <div class="flex flex-col sm:flex-row gap-4 justify-center">
              <button class="bg-white text-brand-primary px-8 py-3 rounded-xl font-semibold hover:bg-white/90 transition-colors">
                Book a Free QA Consulting Session
              </button>
              <button class="border border-white/30 text-white px-8 py-3 rounded-xl font-semibold hover:bg-white/10 transition-colors">
                Download QA Framework Guide
              </button>
            </div>
          </div>
        </div>
      `,
      author: "QA Engineering Team",
      publishDate: "January 20, 2025",
      readTime: "10 min read",
      category: "Quality Assurance",
      excerpt:
        "In today's competitive landscape, cutting corners on QA isn't an option. Discover which modern test automation framework—Robot Framework or Playwright—is right for your business stage and team.",
      tags: [
        "Test Automation",
        "Robot Framework",
        "Playwright",
        "QA Process",
        "Continuous Testing",
      ],
    },
    "agentic-ai-enterprise-future": {
      id: "agentic-ai-enterprise-future",
      title:
        "The Future Is Agentic. Is Your Enterprise Ready for What Comes Next?",
      content: `
        <div class="space-y-6 text-lg text-foreground-dark-muted leading-relaxed mb-16">
          <p class="font-semibold text-xl">The enterprise technology landscape is buzzing with AI agents. Amazon's AgentCore toolkit signals a seismic shift toward autonomous systems. Learn strategic adoption with extreme caution.</p>
          
          <h2 class="font-semibold text-2xl text-foreground-dark pt-8">Beyond the Hype: What an Enterprise Agent Truly Means</h2>
          <p class="text-foreground-dark-muted mb-6">AI agents represent more than just automated workflows—they're autonomous systems capable of reasoning, planning, and executing complex business processes without human intervention.</p>
          
            <div class="p-8 rounded-3xl bg-foreground-dark/5">
              <h3 class="text-xl font-semibold text-foreground-dark mb-4">Core Agent Capabilities</h3>
              <ul class="space-y-3 text-foreground-dark-muted">
                <li><strong class="font-semibold">Autonomous decision-making:</strong> Agents can evaluate situations and choose optimal actions</li>
                <li><strong class="font-semibold">Multi-step planning:</strong> Breaking down complex goals into executable sub-tasks</li>
                <li><strong class="font-semibold">Environment interaction:</strong> Seamless integration with existing enterprise systems</li>
                <li><strong class="font-semibold">Learning and adaptation:</strong> Continuous improvement through experience</li>
              </ul>
            </div>
          <h2 class="font-semibold text-2xl text-foreground-dark pt-8">AWS - Always a Powerful Accelerator, Never a Magic Bullet</h2>
          <p class="text-foreground-dark-muted mb-6">Amazon's AgentCore toolkit provides the infrastructure for building enterprise AI agents, but successful implementation requires strategic planning and careful risk management.</p>
          
          <div class="p-8 rounded-3xl bg-foreground-dark/5">
            <h3 class="text-xl font-semibold text-foreground-dark mb-4">Implementation Considerations</h3>
            <ul class="space-y-3 text-foreground-dark-muted">
              <li><strong class="font-semibold">Data governance:</strong> Ensure agents have access to clean, relevant data</li>
              <li><strong class="font-semibold">Security protocols:</strong> Implement robust authentication and authorization</li>
              <li><strong class="font-semibold">Monitoring systems:</strong> Track agent behavior and performance metrics</li>
              <li><strong class="font-semibold">Fallback mechanisms:</strong> Human oversight for critical decisions</li>
            </ul>
          </div>

          <h2 class="font-semibold text-2xl text-foreground-dark pt-8">The Indexnine Approach: Strategic AI Adoption</h2>
          <p class="text-foreground-dark-muted mb-6">Our proven framework ensures successful AI agent implementation while mitigating risks and maximizing business value.</p>
          
          <div class="bg-gradient-hero rounded-2xl p-8 text-center mb-8">
            <h3 class="text-2xl font-semibold text-foreground mb-4">Ready to Explore AI Agents?</h3>
            <p class="text-foreground-muted mb-6">Let our AI Strategy team help you assess your readiness for agentic AI and develop a tailored implementation roadmap.</p>
            <div class="flex flex-col sm:flex-row gap-4 justify-center">
              <button class="bg-white text-brand-primary px-8 py-3 rounded-full font-semibold hover:bg-white/90 transition-colors">
                Schedule AI Strategy Session
              </button>
              <button class="border border-white/30 text-white px-8 py-3 rounded-full font-semibold hover:bg-white/10 transition-colors">
                Download AI Readiness Guide
              </button>
            </div>
          </div>
        </div>
      `,
      author: "AI Strategy Team",
      publishDate: "January 15, 2025",
      readTime: "8 min read",
      category: "AI & Technology",
      excerpt:
        "The enterprise technology landscape is buzzing with AI agents. Amazon's AgentCore toolkit signals a seismic shift toward autonomous systems. Learn strategic adoption with extreme caution.",
      tags: [
        "AI Agents",
        "Enterprise Technology",
        "AWS AgentCore",
        "Digital Transformation",
      ],
    },
    "ai-assisted-software-engineering-cursor": {
      id: "ai-assisted-software-engineering-cursor",
      title:
        "Beyond Autocomplete: When AI Meets UI to Supercharge Software Engineering",
      content: `
        <div class="space-y-6 text-lg text-foreground-dark-muted leading-relaxed mb-16">
          <p class="font-semibold text-xl">
            Discover how AI code generation tools like Cursor AI can accelerate React development. Learn our proven framework for AI-assisted engineering with measurable productivity gains.
          </p>

          <h2 class="font-semibold text-2xl text-foreground-dark pt-8">Can AI Really Help Build UI?</h2>
          <p class="text-foreground-dark-muted mb-6">
            The integration of AI tools into software development workflows has reached a tipping point. Modern AI-assisted development tools like Cursor AI are transforming how we approach React development.
          </p>

          <div class="p-8 rounded-3xl bg-foreground-dark/5">
            <h3 class="text-xl font-semibold text-foreground-dark mb-4">AI Development Benefits</h3>
            <ul class="space-y-3 text-foreground-dark-muted">
              <li><strong class="font-semibold">Rapid prototyping:</strong> Generate component structures in seconds</li>
              <li><strong class="font-semibold">Code consistency:</strong> Maintain patterns across your application</li>
              <li><strong class="font-semibold">Bug reduction:</strong> AI suggests best practices and catches common errors</li>
              <li><strong class="font-semibold">Documentation generation:</strong> Automatic comments and documentation</li>
            </ul>
          </div>

          <h2 class="font-semibold text-2xl text-foreground-dark pt-8">The Good, the Glitchy, and the Fixable</h2>
          <p class="text-foreground-dark-muted mb-6">
            While AI tools offer significant advantages, understanding their limitations is crucial for successful implementation.
          </p>

          <div class="p-8 rounded-3xl bg-foreground-dark/5">
            <h3 class="text-xl font-semibold text-foreground-dark mb-4">Common Challenges</h3>
            <ul class="space-y-3 text-foreground-dark-muted">
              <li><strong class="font-semibold">Context limitations:</strong> AI may not understand complex business logic</li>
              <li><strong class="font-semibold">Inconsistent outputs:</strong> Generated code quality can vary</li>
              <li><strong class="font-semibold">Over-reliance risk:</strong> Developers may lose fundamental skills</li>
              <li><strong class="font-semibold">Security concerns:</strong> Generated code requires thorough review</li>
            </ul>
          </div>

          <h2 class="font-semibold text-2xl text-foreground-dark pt-8">Turning AI Tools into Tangible Business Velocity</h2>
          <p class="text-foreground-dark-muted mb-6">
            Our framework for AI-assisted development ensures teams maximize productivity while maintaining code quality and security standards.
          </p>

          <div class="bg-gradient-hero rounded-2xl p-8 text-center mb-8">
            <h3 class="text-2xl font-semibold text-foreground mb-4">Accelerate Your Development Process</h3>
            <p class="text-foreground-muted mb-6">
              Learn how to integrate AI tools effectively into your development workflow with our proven methodology.
            </p>
            <div class="space-y-4 ">
              <button class="bg-white text-brand-primary px-8 py-3 rounded-full font-semibold hover:bg-white/90 transition-colors">
                Book Development Consultation
              </button>
              <button class="border border-white/30 text-white px-8 py-3 rounded-full font-semibold hover:bg-white/10 transition-colors">
                Download AI Development Guide
              </button>
            </div>
          </div>
        </div>

      `,
      author: "Senior UI Architect",
      publishDate: "January 12, 2025",
      readTime: "12 min read",
      category: "Development Tools",
      excerpt:
        "Discover how AI code generation tools like Cursor AI can accelerate React development. Learn our proven framework for AI-assisted engineering with measurable productivity gains.",
      tags: [
        "Cursor AI",
        "React Development",
        "AI Tools",
        "Developer Productivity",
      ],
    },
    "microservices-vs-monolith-decision-guide": {
      id: "microservices-vs-monolith-decision-guide",
      title:
        "Microservices vs Monolith: Making the Right Architectural Choice for Scale",
      content: `
        <div class="space-y-6 text-lg text-foreground-dark-muted leading-relaxed mb-16">
          <p class="font-semibold text-xl">
            A comprehensive guide to choosing between microservices and monolithic architecture based on your business stage, team size, and technical requirements.
          </p>

          <h2 class="font-semibold text-2xl text-foreground-dark pt-8">Understanding Architectural Patterns</h2>
          <p class="text-foreground-dark-muted mb-6">
            The choice between microservices and monolithic architecture isn't just technical—it's a strategic business decision that impacts development velocity, operational complexity, and scalability.
          </p>

          <div class="p-8 rounded-3xl bg-foreground-dark/5">
            <h3 class="text-xl font-semibold text-foreground-dark mb-4">Decision Framework</h3>
            <ul class="space-y-3 text-foreground-dark-muted">
              <li><strong class="font-semibold">Team size and structure:</strong> Microservices require larger, specialized teams</li>
              <li><strong class="font-semibold">Business complexity:</strong> Monoliths excel for simpler, focused products</li>
              <li><strong class="font-semibold">Scalability requirements:</strong> Consider both technical and organizational scaling</li>
              <li><strong class="font-semibold">Operational maturity:</strong> Microservices demand advanced DevOps practices</li>
            </ul>
          </div>

          <h2 class="font-semibold text-2xl text-foreground-dark pt-8">When Monoliths Make Sense</h2>
          <p class="text-foreground-dark-muted mb-6">
            Monolithic architecture remains the best choice for many applications, especially in early-stage companies and well-defined problem domains.
          </p>

          <div class="p-8 rounded-3xl bg-foreground-dark/5">
            <h3 class="text-xl font-semibold text-foreground-dark mb-4">Monolith Advantages</h3>
            <ul class="space-y-3 text-foreground-dark-muted">
              <li><strong class="font-semibold">Simplified deployment:</strong> Single artifact to build and deploy</li>
              <li><strong class="font-semibold">Easier debugging:</strong> All code in one place for troubleshooting</li>
              <li><strong class="font-semibold">ACID transactions:</strong> Database consistency across features</li>
              <li><strong class="font-semibold">Lower operational overhead:</strong> Fewer moving parts to monitor</li>
            </ul>
          </div>

          <h2 class="font-semibold text-2xl text-foreground-dark pt-8">The Microservices Trade-off</h2>
          <p class="text-foreground-dark-muted mb-6">
            Microservices offer significant benefits for large, complex systems but come with increased operational complexity and development overhead.
          </p>

          <div class="bg-gradient-hero rounded-2xl p-8 text-center mb-8">
            <h3 class="text-2xl font-semibold text-foreground mb-4">Need Architecture Guidance?</h3>
            <p class="text-foreground-muted mb-6">
              Our architecture team can help you make the right choice based on your specific business context and technical requirements.
            </p>
            <div class="flex flex-col sm:flex-row gap-4 justify-center">
              <button class="bg-white text-brand-primary px-8 py-3 rounded-full font-semibold hover:bg-white/90 transition-colors">
                Schedule Architecture Review
              </button>
              <button class="border border-white/30 text-white px-8 py-3 rounded-full font-semibold hover:bg-white/10 transition-colors">
                Download Architecture Guide
              </button>
            </div>
          </div>
        </div>

      `,
      author: "Architecture Team",
      publishDate: "January 10, 2025",
      readTime: "11 min read",
      category: "Architecture",
      excerpt:
        "A comprehensive guide to choosing between microservices and monolithic architecture based on your business stage, team size, and technical requirements.",
      tags: [
        "Microservices",
        "Monolithic Architecture",
        "System Design",
        "Scalability",
      ],
    },
    "modern-data-platforms-enterprise-guide": {
      id: "modern-data-platforms-enterprise-guide",
      title: "Building Modern Data Platforms: An Enterprise Architecture Guide",
      content: `
       <div class="space-y-6 text-lg text-foreground-dark-muted leading-relaxed mb-16">
        <p class="font-semibold text-xl">
          Best practices for designing and implementing scalable data platforms that drive business intelligence and enable data-driven decision making across your organization.
        </p>

        <h2 class="font-semibold text-2xl text-foreground-dark pt-8">Modern Data Platform Architecture</h2>
        <p class="text-foreground-dark-muted mb-6">
          Today's data platforms must handle massive volumes of structured and unstructured data while providing real-time insights and maintaining security and compliance standards.
        </p>

        <div class="p-8 rounded-3xl bg-foreground-dark/5">
          <h3 class="text-xl font-semibold text-foreground-dark mb-4">Core Platform Components</h3>
          <ul class="space-y-3 text-foreground-dark-muted">
            <li><strong class="font-semibold">Data ingestion layer:</strong> Real-time and batch data collection</li>
            <li><strong class="font-semibold">Storage systems:</strong> Data lakes, warehouses, and operational stores</li>
            <li><strong class="font-semibold">Processing engines:</strong> Stream and batch processing capabilities</li>
            <li><strong class="font-semibold">Analytics layer:</strong> Business intelligence and machine learning tools</li>
          </ul>
        </div>

        <h2 class="font-semibold text-2xl text-foreground-dark pt-8">Cloud-Native Implementation</h2>
        <p class="text-foreground-dark-muted mb-6">
          Leveraging cloud services enables rapid scaling and reduces operational overhead while providing enterprise-grade security and compliance features.
        </p>

        <div class="p-8 rounded-3xl bg-foreground-dark/5">
          <h3 class="text-xl font-semibold text-foreground-dark mb-4">Implementation Best Practices</h3>
          <ul class="space-y-3 text-foreground-dark-muted">
            <li><strong class="font-semibold">Data governance:</strong> Implement comprehensive data lineage and quality controls</li>
            <li><strong class="font-semibold">Security by design:</strong> Encryption at rest and in transit</li>
            <li><strong class="font-semibold">Cost optimization:</strong> Tiered storage and auto-scaling</li>
            <li><strong class="font-semibold">Monitoring and observability:</strong> Real-time platform health metrics</li>
          </ul>
        </div>

        <h2 class="font-semibold text-2xl text-foreground-dark pt-8">Enabling Data-Driven Decisions</h2>
        <p class="text-foreground-dark-muted mb-6">
          The ultimate goal is democratizing data access while maintaining security, enabling business users to make informed decisions quickly.
        </p>

        <div class="bg-gradient-hero rounded-2xl p-8 text-center mb-8">
          <h3 class="text-2xl font-semibold text-foreground mb-4">Transform Your Data Strategy</h3>
          <p class="text-foreground-muted mb-6">
            Our data engineering experts can help you design and implement a modern data platform tailored to your business needs.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <button class="bg-white text-brand-primary px-8 py-3 rounded-full font-semibold hover:bg-white/90 transition-colors">
              Book Data Strategy Session
            </button>
            <button class="border border-white/30 text-white px-8 py-3 rounded-full font-semibold hover:bg-white/10 transition-colors">
              Download Platform Blueprint
            </button>
          </div>
        </div>
      </div>

      `,
      author: "Data Engineering Team",
      publishDate: "January 8, 2025",
      readTime: "15 min read",
      category: "Data Engineering",
      excerpt:
        "Best practices for designing and implementing scalable data platforms that drive business intelligence and enable data-driven decision making across your organization.",
      tags: [
        "Data Platforms",
        "Cloud Architecture",
        "Business Intelligence",
        "Analytics",
      ],
    },
    "security-first-development-practices": {
      id: "security-first-development-practices",
      title: "Security-First Development: Integrating DevSecOps from Day One",
      content: `
        <div class="space-y-6 text-lg text-foreground-dark-muted leading-relaxed mb-16">
          <p class="font-semibold text-xl">
            How to integrate security considerations into every stage of the software development lifecycle, from initial architecture to production deployment.
          </p>

          <h2 class="font-semibold text-2xl text-foreground-dark pt-8">The Security-First Mindset</h2>
          <p class="text-foreground-dark-muted mb-6">
            Security cannot be an afterthought in modern software development. Integrating security practices from the beginning reduces vulnerabilities and compliance risks.
          </p>

          <div class="p-8 rounded-3xl bg-foreground-dark/5">
            <h3 class="text-xl font-semibold text-foreground-dark mb-4">Core Security Principles</h3>
            <ul class="space-y-3 text-foreground-dark-muted">
              <li><strong class="font-semibold">Shift-left security:</strong> Identify and fix vulnerabilities early</li>
              <li><strong class="font-semibold">Zero trust architecture:</strong> Never trust, always verify</li>
              <li><strong class="font-semibold">Defense in depth:</strong> Multiple layers of security controls</li>
              <li><strong class="font-semibold">Continuous monitoring:</strong> Real-time threat detection and response</li>
            </ul>
          </div>

          <h2 class="font-semibold text-2xl text-foreground-dark pt-8">DevSecOps Implementation</h2>
          <p class="text-foreground-dark-muted mb-6">
            Successful DevSecOps requires cultural change, tool integration, and process automation to make security a shared responsibility across development teams.
          </p>

          <div class="p-8 rounded-3xl bg-foreground-dark/5">
            <h3 class="text-xl font-semibold text-foreground-dark mb-4">Implementation Strategy</h3>
            <ul class="space-y-3 text-foreground-dark-muted">
              <li><strong class="font-semibold">Automated security testing:</strong> SAST, DAST, and dependency scanning</li>
              <li><strong class="font-semibold">Infrastructure as code:</strong> Security policies as code</li>
              <li><strong class="font-semibold">Container security:</strong> Image scanning and runtime protection</li>
              <li><strong class="font-semibold">Compliance automation:</strong> Continuous compliance monitoring</li>
            </ul>
          </div>

          <h2 class="font-semibold text-2xl text-foreground-dark pt-8">Building a Security Culture</h2>
          <p class="text-foreground-dark-muted mb-6">
            Technology alone isn't enough—building a security-conscious culture ensures that security considerations are embedded in every development decision.
          </p>

          <div class="bg-gradient-hero rounded-2xl p-8 text-center mb-8">
            <h3 class="text-2xl font-semibold text-foreground mb-4">Secure Your Development Process</h3>
            <p class="text-foreground-muted mb-6">
              Let our security experts help you implement DevSecOps practices that protect your applications without slowing down development.
            </p>
            <div class="flex flex-col sm:flex-row gap-4 justify-center">
              <button class="bg-white text-brand-primary px-8 py-3 rounded-full font-semibold hover:bg-white/90 transition-colors">
                Schedule Security Assessment
              </button>
              <button class="border border-white/30 text-white px-8 py-3 rounded-full font-semibold hover:bg-white/10 transition-colors">
                Download DevSecOps Guide
              </button>
            </div>
          </div>
        </div>

      `,
      author: "Security Engineering Team",
      publishDate: "January 5, 2025",
      readTime: "9 min read",
      category: "Security",
      excerpt:
        "How to integrate security considerations into every stage of the software development lifecycle, from initial architecture to production deployment.",
      tags: [
        "DevSecOps",
        "Application Security",
        "Secure Development",
        "Compliance",
      ],
    },
  };

  const post = blogPosts[slug as keyof typeof blogPosts];

  if (!post) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Blog Post Not Found
          </h1>
          <p className="text-foreground-muted mb-8">
            The blog post you're looking for doesn't exist.
          </p>
          <Link to="/insights/blogs">
            <Button variant="outline">Back to Blog</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <WebPageSchema
        title={`${post.title} | IndexNine`}
        description={post.excerpt}
        url={`https://yoursite.lovable.app/insights/blogs/${slug}`}
      />
      <ArticleSchema
        title={post.title}
        description={post.excerpt}
        author={post.author}
        datePublished={post.publishDate}
        url={`https://yoursite.lovable.app/insights/blogs/${slug}`}
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://yoursite.lovable.app/" },
          { name: "Insights", url: "https://yoursite.lovable.app/insights" },
          { name: "Blog", url: "https://yoursite.lovable.app/insights/blogs" },
          {
            name: post.title,
            url: `https://yoursite.lovable.app/insights/blogs/${slug}`,
          },
        ]}
      />
      <Header />

      <section
        className="relative  overflow-hidden bg-[#fff] bg-cover bg-center"
        style={{ backgroundImage: `url(${BlogDetailsBg})` }}
      >
        <div className="container mx-auto pt-36">
          {/* Back to Blog */}
          <div className="max-w-7xl mx-auto text-center lg:text-left ml-0">
            <Link
              to="/insights/blogs"
              className="inline-flex items-center text-foreground-muted hover:text-brand-primary-dark transition-colors mb-6 mr-6"
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="font-montserrat">Back to Blog</span>
            </Link>
          </div>

          {/* Article Header */}
          <header className="relative  overflow-hidden bg-cover bg-center">
            {/* <div className="mb-6">
              <span className="text-sm bg-brand-primary/10 text-brand-primary px-3 py-2 rounded-full font-montserrat">
                {post.category}
              </span>
            </div> */}

            <h1 className="text-[1.5rem] sm:text-[2rem] lg:text-[2.5rem] font-semibold text-foreground mb-6 leading-[1.25] animate-fade-in font-montserrat">
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center gap-6 text-sm text-foreground-muted mb-8">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span className="font-montserrat">{post.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span className="font-montserrat">{post.publishDate}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span className="font-montserrat">{post.readTime}</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag, index) => (
                <span
                  key={index}
                  className="text-sm bg-brand-primary/10 text-white/50 px-3 py-2 rounded-full font-montserrat"
                >
                  {tag}
                </span>
              ))}
            </div>
          </header>
          <div className="pt-8">
            <img src={blogImg2} className="w-full" alt="" />
          </div>
        </div>
      </section>
      <article>
        <div className="bg-gradient-to-b from-white via-white to-[#F0F4FF]">
          <div className="container grid md:grid-cols-3 gap-12 bg-transparent pt-24">
            <div className="text-foreground-dark">
              <div className="sticky top-[120px] pb-8">
                <div
                  className={`p-8 my-8 text-center text-white ${styles.sideCardBg}`}
                >
                  <h3 className="text-3xl font-bold">
                    Want to Share Your Insights?
                  </h3>
                  <p className="text-xl py-8">
                    Join our community of thought leaders and share your
                    expertise with fellow technology professionals.
                  </p>
                  <Button
                    type="submit"
                    className="px-16 rounded-full transition hover:scale-100"
                    size="lg"
                  >
                    Continue
                  </Button>
                </div>
              </div>
            </div>
            <div className="col-span-2">
              <div className="container mx-auto pt-8">
                {/* Article Content */}
                <div className="space-y-6 text-lg text-foreground-dark-muted leading-relaxed mb-8">
                  <div
                    className="font-montserrat leading-relaxed text-foreground-dark-muted"
                    dangerouslySetInnerHTML={{ __html: post.content }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>

      <section className={`py-24 lg:py-32 ${styles.ctaBg}`}>
        <div className="container mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold mb-6 text-foreground-white">
            <span className="leading-[1.4]">Want to Read More Insights?</span>
          </h2>
          <p className="text-xl text-foreground-white/80 mb-12 font-montserrat">
            Explore our complete collection of technology insights and best
            practices.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/insights/blogs">
              <Button variant="hero" size="xl" className="rounded-full">
                View All Blog Posts
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BlogPost;
