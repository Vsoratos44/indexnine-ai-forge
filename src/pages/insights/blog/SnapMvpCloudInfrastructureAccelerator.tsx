import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useSEO } from "@/hooks/useSEO";
import EnhancedScrollReveal from "@/components/test/effects/EnhancedScrollReveal";
import StickyScrollLayout from "@/components/test/effects/StickyScrollLayout";
import { 
  ChevronDown, 
  ChevronUp, 
  ArrowRight, 
  Clock,
  Zap,
  Shield,
  DollarSign,
  Settings,
  Cloud,
  Layers,
  Lock,
  Database,
  BarChart3,
  CheckCircle,
  Users,
  Target,
  FileText,
  Download
} from "lucide-react";
import styles from "../../../assets/css/stylesheet.module.css";

const SnapMvpCloudInfrastructureAccelerator = () => {
  const [selectedNav, setSelectedNav] = useState("introduction");
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);

  const navigationLinks = [
    { id: "introduction", label: "Introduction", icon: Target },
    { id: "what-is-snap-mvp", label: "What is Snap.MVP?", icon: Cloud },
    { id: "four-pillars", label: "Four Pillars", icon: Layers },
    { id: "architecture", label: "Under the Hood", icon: Settings },
    { id: "client-advantage", label: "Client Advantage", icon: Users },
    { id: "faq", label: "FAQ", icon: FileText },
  ];

  const toggleFAQ = (index: number) => {
    setExpandedFAQ(expandedFAQ === index ? null : index);
  };

  // Comprehensive SEO implementation
  useSEO({
    title: "Weeks to Minutes: Deploying Production-Ready Cloud Infrastructure with Snap.MVP",
    description: "Manual cloud setup is slow, risky, and expensive. Discover Snap.MVP, the Indexnine accelerator that deploys secure, scalable infrastructure on AWS, GCP, or Azure in minutes using Terraform.",
    canonicalUrl: "https://indexnine.com/insights/blogs/snap-mvp-cloud-infrastructure-accelerator",
    keywords: "cloud infrastructure automation, Infrastructure as Code, Terraform, AWS Well-Architected Framework, MVP deployment, startup infrastructure, Sprint Zero, cloud cost optimization, secure cloud setup",
    ogImage: "https://indexnine.com/images/snap-mvp-blog-og.jpg",
    ogType: "article",
    author: "IndexNine Technologies",
    publishedDate: "2025-01-30",
    modifiedDate: "2025-01-30",
    articleSection: "Cloud Infrastructure",
    schemaType: "Article"
  });

  // Intersection Observer for scroll-based navigation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setSelectedNav(entry.target.id);
          }
        });
      },
      { threshold: 0.3, rootMargin: "-20% 0px -70% 0px" }
    );

    const sections = document.querySelectorAll("section[id]");
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Structured Data for SEO */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": "Weeks to Minutes: Deploying Production-Ready Cloud Infrastructure with Snap.MVP",
          "description": "Manual cloud setup is slow, risky, and expensive. Discover Snap.MVP, the Indexnine accelerator that deploys secure, scalable infrastructure on AWS, GCP, or Azure in minutes using Terraform.",
          "author": {
            "@type": "Organization",
            "name": "IndexNine Technologies"
          },
          "publisher": {
            "@type": "Organization",
            "name": "IndexNine Technologies",
            "logo": {
              "@type": "ImageObject",
              "url": "https://indexnine.com/logo.png"
            }
          },
          "datePublished": "2025-01-30",
          "dateModified": "2025-01-30",
          "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": "https://indexnine.com/insights/blogs/snap-mvp-cloud-infrastructure-accelerator"
          },
          "image": "https://indexnine.com/images/snap-mvp-blog-og.jpg",
          "articleSection": "Cloud Infrastructure"
        })}
      </script>

      {/* FAQ Schema */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "Do I need to know Terraform to use this?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "No. When you partner with Indexnine, our teams handle the entire process. The templates are pre-built and automated by our experts. You get the benefit of a production-ready environment without needing deep DevOps expertise."
              }
            },
            {
              "@type": "Question", 
              "name": "How customizable is the infrastructure?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "The infrastructure is highly modular by design. We can easily adjust server counts, database types, storage classes, and even deploy to different geographic regions by modifying Terraform variables, often without requiring any application downtime."
              }
            },
            {
              "@type": "Question",
              "name": "Is this infrastructure truly production-ready?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes. All deployments are built upon the principles of the AWS Well-Architected Framework, which is the industry-standard blueprint for excellence. This includes provisions for high availability, disaster recovery, security, and the ability to be scaled for enterprise-level traffic as your business grows."
              }
            },
            {
              "@type": "Question",
              "name": "Can this be deployed to different cloud providers?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes. Snap.MVP is designed to be cloud-agnostic and works across AWS, Google Cloud, and Azure, using modular Terraform templates for each provider."
              }
            }
          ]
        })}
      </script>

      {/* Breadcrumb Schema */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Home",
              "item": "https://indexnine.com/"
            },
            {
              "@type": "ListItem", 
              "position": 2,
              "name": "Insights",
              "item": "https://indexnine.com/insights"
            },
            {
              "@type": "ListItem",
              "position": 3,
              "name": "Blog",
              "item": "https://indexnine.com/insights/blogs"
            },
            {
              "@type": "ListItem",
              "position": 4,
              "name": "Snap.MVP Cloud Infrastructure Accelerator",
              "item": "https://indexnine.com/insights/blogs/snap-mvp-cloud-infrastructure-accelerator"
            }
          ]
        })}
      </script>

      {/* Service Schema */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Snap.MVP Cloud Infrastructure Accelerator",
          "description": "Ready-to-use, accelerated cloud infrastructure solution built with Terraform templates for rapid deployment on AWS, Google Cloud, or Azure.",
          "provider": {
            "@type": "Organization",
            "name": "IndexNine Technologies"
          },
          "serviceType": "Cloud Infrastructure Automation",
          "offers": {
            "@type": "Offer",
            "description": "Production-ready cloud environment deployment in 10 minutes"
          }
        })}
      </script>

      <Header />

      {/* Hero Section */}
      <section className="relative min-h-[600px] overflow-hidden bg-black">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/6 w-96 h-96 bg-brand-primary/8 rounded-full blur-3xl animate-float"></div>
          <div
            className="absolute bottom-1/4 right-1/6 w-80 h-80 bg-brand-purple/6 rounded-full blur-3xl animate-float"
            style={{ animationDelay: "2s" }}
          ></div>
        </div>

        <div className="relative z-10 container mx-auto pt-48 pb-24">
          <div className="max-w-4xl mx-auto text-center">
            <EnhancedScrollReveal direction="up" delay={200}>
              <div className="flex items-center justify-center gap-2 text-brand-primary mb-6">
                <Clock className="w-5 h-5" />
                <span className="text-sm font-medium">15 min read • Cloud Infrastructure</span>
              </div>
            </EnhancedScrollReveal>
            
            <EnhancedScrollReveal direction="up" delay={400}>
              <h1 className="text-[2.5rem] sm:text-[3rem] lg:text-[4rem] xl:text-[4.5rem] font-semibold text-foreground mb-6 leading-[1.1] font-montserrat">
                The Startup Dilemma Is a Myth: You Don't Have to Choose Between{" "}
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  Speed and Technical Debt
                </span>
              </h1>
            </EnhancedScrollReveal>

            <EnhancedScrollReveal direction="up" delay={600}>
              <p className="text-xl text-foreground-white/80 mb-8 leading-relaxed font-montserrat max-w-3xl mx-auto">
                Manual cloud setup is slow, risky, and expensive. Discover Snap.MVP, the Indexnine accelerator that deploys secure, scalable infrastructure on AWS, GCP, or Azure in minutes using Terraform.
              </p>
            </EnhancedScrollReveal>

            <EnhancedScrollReveal direction="up" delay={800}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="btnPrimary" size="lg" className="group">
                  Schedule Infrastructure Assessment
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button variant="btnSecondary" size="lg">
                  <Download className="w-4 h-4 mr-2" />
                  Download Framework Guide
                </Button>
              </div>
            </EnhancedScrollReveal>
          </div>
        </div>
      </section>

      {/* Main Content with Sticky Navigation */}
      <div className={`py-24 lg:py-32 bg-background ${styles.blogContentBg}`}>
        <div className="container mx-auto px-6 lg:px-8">
          <StickyScrollLayout
            stickyContent={
              <div className="bg-card rounded-2xl p-6 shadow-glass border-glass">
                <h3 className="text-lg font-semibold text-card-foreground mb-4 font-montserrat">
                  Article Navigation
                </h3>
                <nav className="space-y-2">
                  {navigationLinks.map((link) => {
                    const IconComponent = link.icon;
                    return (
                      <a
                        key={link.id}
                        href={`#${link.id}`}
                        className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${
                          selectedNav === link.id
                            ? "bg-primary text-primary-foreground"
                            : "text-muted-foreground hover:text-foreground hover:bg-muted"
                        }`}
                      >
                        <IconComponent className="w-4 h-4" />
                        <span className="text-sm font-medium">{link.label}</span>
                      </a>
                    );
                  })}
                </nav>
              </div>
            }
            scrollingContent={
              <div className="prose prose-lg max-w-none">
                {/* Introduction */}
                <section id="introduction" className="mb-16">
                  <EnhancedScrollReveal direction="up">
                    <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                      For decades, founders and enterprise innovators have been governed by the immutable law of engineering: the "Iron Triangle."
                    </p>
                    <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                      Good, Fast, Cheap: pick any two. This principle dictates that a high-quality (Good) project delivered quickly (Fast) will not be cheap. One that is Good and Cheap will not be Fast. And one that is Fast and Cheap will certainly not be Good.
                    </p>
                    <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                      Nowhere is this painful trade-off more acute than in the setup of cloud infrastructure—a process that is often slow, expensive, and alarmingly prone to error. The pressure to launch is immense; a McKinsey study found that products launching just six months late can lose up to a third of their potential profits. This pressure often forces teams into a false choice: get to market fast by cutting corners with manual setups, or build it "right" and lose the race to a faster competitor.
                    </p>
                    <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                      At Indexnine, we believe this is an unacceptable trade-off. Our philosophy is rooted in a simple principle: use engineering excellence to build accelerators that eliminate friction, automate complexity, and allow our clients to focus on their product, not their plumbing.
                    </p>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      That's why we're pulling back the curtain on one of our most powerful internal accelerators: <strong>Snap.MVP</strong>. This isn't just a tool; it's our answer to the startup dilemma, turning a process that takes low-performing organizations months into a 10-minute automated workflow that delivers on all three pillars of the Iron Triangle.
                    </p>
                  </EnhancedScrollReveal>
                </section>

                {/* What is Snap.MVP */}
                <section id="what-is-snap-mvp" className="mb-16">
                  <EnhancedScrollReveal direction="up">
                    <h2 className="text-3xl font-semibold text-foreground mb-8 font-montserrat flex items-center gap-3">
                      <Cloud className="w-8 h-8 text-primary" />
                      What is Snap.MVP? An Accelerator for a Production-Ready Foundation
                    </h2>
                    <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                      Snap.MVP is a ready-to-use, accelerated cloud infrastructure solution built and refined by our own expert engineers. It is the codified expression of our deep architectural expertise, designed to solve the infrastructure puzzle from day one.
                    </p>
                    <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                      At its core, Snap.MVP uses a powerful set of modular, reusable Terraform templates—the industry standard for Infrastructure as Code (IaC). IaC is a transformative approach that manages and provisions infrastructure through machine-readable definition files, rather than physical hardware configuration or interactive configuration tools. This means your entire cloud environment is defined as code: it's repeatable, version-controlled, and auditable.
                    </p>
                    <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                      With Snap.MVP, we can provision a complete, production-ready environment on AWS, Google Cloud, or Azure during the first week of an engineering engagement. Instead of starting from scratch, our teams provide a few key project details, and the system automatically builds everything: servers, networks, databases, security, and monitoring, all configured according to the highest industry standards.
                    </p>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      It is the foundational engine of our Sprint Zero and product launch programs. We don't just talk about your product vision; we build its permanent, scalable home while we're still planning the first feature.
                    </p>
                  </EnhancedScrollReveal>
                </section>

                {/* Four Pillars */}
                <section id="four-pillars" className="mb-16">
                  <EnhancedScrollReveal direction="up">
                    <h2 className="text-3xl font-semibold text-foreground mb-8 font-montserrat flex items-center gap-3">
                      <Layers className="w-8 h-8 text-primary" />
                      The Four Pillars of Accelerated Deployment: How Snap.MVP Solves the Iron Triangle
                    </h2>
                    <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                      Snap.MVP was born from our experience launching countless products for startups and enterprises. We focused on solving the four things that matter most, delivering a solution that achieves the seemingly impossible: Good, Fast, and Cost-Effective.
                    </p>
                  </EnhancedScrollReveal>

                  <div className="grid md:grid-cols-2 gap-8 mb-12">
                    <EnhancedScrollReveal direction="left" delay={200}>
                      <div className="bg-card rounded-2xl p-8 shadow-glass border-glass">
                        <div className="flex items-center gap-4 mb-4">
                          <div className="p-2 bg-primary/10 rounded-lg">
                            <Zap className="w-6 h-6 text-primary" />
                          </div>
                          <h3 className="text-xl font-semibold text-card-foreground">⚡ Radical Speed</h3>
                        </div>
                        <p className="text-muted-foreground leading-relaxed">
                          While manual infrastructure deployment can take a high-performing team up to a week (and low-performers over a month), Snap.MVP reduces that to about 10 minutes. This isn't just efficiency—it's a profound competitive advantage that allows immediate development on production-grade environments.
                        </p>
                      </div>
                    </EnhancedScrollReveal>

                    <EnhancedScrollReveal direction="right" delay={400}>
                      <div className="bg-card rounded-2xl p-8 shadow-glass border-glass">
                        <div className="flex items-center gap-4 mb-4">
                          <div className="p-2 bg-primary/10 rounded-lg">
                            <Shield className="w-6 h-6 text-primary" />
                          </div>
                          <h3 className="text-xl font-semibold text-card-foreground">🏗️ Fortress-Like Architecture</h3>
                        </div>
                        <p className="text-muted-foreground leading-relaxed">
                          Manual configurations lead to security vulnerabilities and instability. Snap.MVP deploys well-tested, robust architecture aligned with AWS Well-Architected Framework principles, mitigating risks that cost an average of $4.88 million per data breach.
                        </p>
                      </div>
                    </EnhancedScrollReveal>

                    <EnhancedScrollReveal direction="left" delay={600}>
                      <div className="bg-card rounded-2xl p-8 shadow-glass border-glass">
                        <div className="flex items-center gap-4 mb-4">
                          <div className="p-2 bg-primary/10 rounded-lg">
                            <DollarSign className="w-6 h-6 text-primary" />
                          </div>
                          <h3 className="text-xl font-semibold text-card-foreground">💰 Built-in Cost Optimization</h3>
                        </div>
                        <p className="text-muted-foreground leading-relaxed">
                          Provides immediate ROI by automating DevOps work and implementing cost-saving measures from day one. Shifts from large upfront CapEx to lean OpEx with right-sized resources, autoscaling, and pre-configured cost alerts to prevent budget overruns.
                        </p>
                      </div>
                    </EnhancedScrollReveal>

                    <EnhancedScrollReveal direction="right" delay={800}>
                      <div className="bg-card rounded-2xl p-8 shadow-glass border-glass">
                        <div className="flex items-center gap-4 mb-4">
                          <div className="p-2 bg-primary/10 rounded-lg">
                            <Settings className="w-6 h-6 text-primary" />
                          </div>
                          <h3 className="text-xl font-semibold text-card-foreground">🔧 Flexible to the Core</h3>
                        </div>
                        <p className="text-muted-foreground leading-relaxed">
                          Built with Terraform, the industry's most widely adopted IaC tool. Its declarative, provider-agnostic approach ensures clients build on a modern, future-proof foundation that avoids vendor lock-in and provides maximum flexibility as needs evolve.
                        </p>
                      </div>
                    </EnhancedScrollReveal>
                  </div>
                </section>

                {/* Under the Hood */}
                <section id="architecture" className="mb-16">
                  <EnhancedScrollReveal direction="up">
                    <h2 className="text-3xl font-semibold text-foreground mb-8 font-montserrat flex items-center gap-3">
                      <Settings className="w-8 h-8 text-primary" />
                      Under the Hood: The Five Layers of a Well-Architected Cloud Environment
                    </h2>
                    <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                      Snap.MVP configures all five essential layers of a modern cloud environment, using best-in-class services and architectural patterns to ensure security and scalability from the start.
                    </p>
                  </EnhancedScrollReveal>

                  <div className="space-y-6">
                    <EnhancedScrollReveal direction="up" delay={200}>
                      <div className="bg-card rounded-2xl p-6 shadow-glass border-glass">
                        <div className="flex items-start gap-4">
                          <div className="p-2 bg-primary/10 rounded-lg mt-1">
                            <Cloud className="w-5 h-5 text-primary" />
                          </div>
                          <div>
                            <h3 className="text-lg font-semibold text-card-foreground mb-2">Network Layer</h3>
                            <p className="text-muted-foreground">
                              A logically isolated Virtual Private Cloud (VPC) serves as your own private office within the public cloud, with public/private subnets, internet gateways, and security groups to control all inbound and outbound traffic.
                            </p>
                          </div>
                        </div>
                      </div>
                    </EnhancedScrollReveal>

                    <EnhancedScrollReveal direction="up" delay={300}>
                      <div className="bg-card rounded-2xl p-6 shadow-glass border-glass">
                        <div className="flex items-start gap-4">
                          <div className="p-2 bg-primary/10 rounded-lg mt-1">
                            <Zap className="w-5 h-5 text-primary" />
                          </div>
                          <div>
                            <h3 className="text-lg font-semibold text-card-foreground mb-2">Compute Layer</h3>
                            <p className="text-muted-foreground">
                              Resizable compute capacity with Auto-Scaling Groups using EC2, ECS (Containers), or EKS (Kubernetes). This enables horizontal scaling ("scaling out"), the foundation of modern cloud elasticity. All traffic is distributed by an Application Load Balancer—acting like a traffic cop—to enhance availability and fault tolerance.
                            </p>
                          </div>
                        </div>
                      </div>
                    </EnhancedScrollReveal>

                    <EnhancedScrollReveal direction="up" delay={400}>
                      <div className="bg-card rounded-2xl p-6 shadow-glass border-glass">
                        <div className="flex items-start gap-4">
                          <div className="p-2 bg-primary/10 rounded-lg mt-1">
                            <Lock className="w-5 h-5 text-primary" />
                          </div>
                          <div>
                            <h3 className="text-lg font-semibold text-card-foreground mb-2">Security Layer</h3>
                            <p className="text-muted-foreground">
                              Comprehensive security begins with AWS Secrets Manager to encrypt secrets at rest and rotate them automatically, preventing the dangerous practice of hardcoding credentials. This is complemented by the principle of least privilege via granular Identity and Access Management (IAM) policies and full audit logging with AWS CloudTrail.
                            </p>
                          </div>
                        </div>
                      </div>
                    </EnhancedScrollReveal>

                    <EnhancedScrollReveal direction="up" delay={500}>
                      <div className="bg-card rounded-2xl p-6 shadow-glass border-glass">
                        <div className="flex items-start gap-4">
                          <div className="p-2 bg-primary/10 rounded-lg mt-1">
                            <Database className="w-5 h-5 text-primary" />
                          </div>
                          <div>
                            <h3 className="text-lg font-semibold text-card-foreground mb-2">Storage Layer</h3>
                            <p className="text-muted-foreground">
                              Encrypted and policy-managed S3 object storage for unstructured data like media files and logs, alongside high-availability RDS instances for your relational databases, with automated backups enabled by default.
                            </p>
                          </div>
                        </div>
                      </div>
                    </EnhancedScrollReveal>

                    <EnhancedScrollReveal direction="up" delay={600}>
                      <div className="bg-card rounded-2xl p-6 shadow-glass border-glass">
                        <div className="flex items-start gap-4">
                          <div className="p-2 bg-primary/10 rounded-lg mt-1">
                            <BarChart3 className="w-5 h-5 text-primary" />
                          </div>
                          <div>
                            <h3 className="text-lg font-semibold text-card-foreground mb-2">Monitoring Layer</h3>
                            <p className="text-muted-foreground">
                              Centralized resource monitoring and logging via CloudWatch and CloudTrail, providing complete, real-time visibility into your environment's health, security, and performance.
                            </p>
                          </div>
                        </div>
                      </div>
                    </EnhancedScrollReveal>
                  </div>
                </section>

                {/* Client Advantage */}
                <section id="client-advantage" className="mb-16">
                  <EnhancedScrollReveal direction="up">
                    <h2 className="text-3xl font-semibold text-foreground mb-8 font-montserrat flex items-center gap-3">
                      <Users className="w-8 h-8 text-primary" />
                      How Our Clients Leverage Snap.MVP for a Strategic Advantage
                    </h2>
                    <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                      Snap.MVP is a strategic asset we bring to every client engagement. It's the first step in our proven process for launching and scaling mission-critical products. When you partner with Indexnine, you're not just hiring developers; you're gaining immediate access to a mature, high-velocity ecosystem.
                    </p>
                  </EnhancedScrollReveal>

                  <div className="space-y-6">
                    <EnhancedScrollReveal direction="up" delay={200}>
                      <div className="flex items-start gap-4 p-6 bg-card rounded-2xl shadow-glass border-glass">
                        <CheckCircle className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                        <div>
                          <h3 className="text-lg font-semibold text-card-foreground mb-2">An Accelerated Sprint 0</h3>
                          <p className="text-muted-foreground">
                            We build your entire production-ready infrastructure while we are still collaboratively defining your product roadmap, ensuring you are ready to deploy code from day one of the first sprint.
                          </p>
                        </div>
                      </div>
                    </EnhancedScrollReveal>

                    <EnhancedScrollReveal direction="up" delay={300}>
                      <div className="flex items-start gap-4 p-6 bg-card rounded-2xl shadow-glass border-glass">
                        <CheckCircle className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                        <div>
                          <h3 className="text-lg font-semibold text-card-foreground mb-2">A Battle-Tested Launchpad</h3>
                          <p className="text-muted-foreground">
                            Your MVP is built on an architecture that is already prepared for production traffic and scale. You avoid the costly and time-consuming process of re-architecting your application as you grow.
                          </p>
                        </div>
                      </div>
                    </EnhancedScrollReveal>

                    <EnhancedScrollReveal direction="up" delay={400}>
                      <div className="flex items-start gap-4 p-6 bg-card rounded-2xl shadow-glass border-glass">
                        <CheckCircle className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                        <div>
                          <h3 className="text-lg font-semibold text-card-foreground mb-2">Reduced Operational Overhead</h3>
                          <p className="text-muted-foreground">
                            You can focus your valuable resources on product development and market strategy, not DevOps. We handle the complexities of cloud management for you.
                          </p>
                        </div>
                      </div>
                    </EnhancedScrollReveal>
                  </div>

                  <EnhancedScrollReveal direction="up" delay={600}>
                    <p className="text-lg text-muted-foreground leading-relaxed mt-8">
                      This is how we live our engineering-first philosophy. We invest in our own tools and processes to deliver unparalleled value to our clients, ensuring they can innovate faster, smarter, and more securely.
                    </p>
                  </EnhancedScrollReveal>
                </section>

                {/* FAQ Section */}
                <section id="faq" className="mb-16">
                  <EnhancedScrollReveal direction="up">
                    <h2 className="text-3xl font-semibold text-foreground mb-8 font-montserrat flex items-center gap-3">
                      <FileText className="w-8 h-8 text-primary" />
                      Frequently Asked Questions (FAQ)
                    </h2>
                  </EnhancedScrollReveal>

                  <div className="space-y-4">
                    {[
                      {
                        question: "Do I need to know Terraform to use this?",
                        answer: "No. When you partner with Indexnine, our teams handle the entire process. The templates are pre-built and automated by our experts. You get the benefit of a production-ready environment without needing deep DevOps expertise."
                      },
                      {
                        question: "How customizable is the infrastructure?",
                        answer: "The infrastructure is highly modular by design. We can easily adjust server counts, database types, storage classes, and even deploy to different geographic regions by modifying Terraform variables, often without requiring any application downtime."
                      },
                      {
                        question: "Is this infrastructure truly production-ready?",
                        answer: "Yes. All deployments are built upon the principles of the AWS Well-Architected Framework, which is the industry-standard blueprint for excellence. This includes provisions for high availability, disaster recovery, security, and the ability to be scaled for enterprise-level traffic as your business grows."
                      },
                      {
                        question: "Can this be deployed to different cloud providers?",
                        answer: "Yes. Snap.MVP is designed to be cloud-agnostic and works across AWS, Google Cloud, and Azure, using modular Terraform templates for each provider."
                      }
                    ].map((faq, index) => (
                      <EnhancedScrollReveal key={index} direction="up" delay={200 * (index + 1)}>
                        <div className="bg-card rounded-2xl shadow-glass border-glass overflow-hidden">
                          <button
                            className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-muted/50 transition-colors"
                            onClick={() => toggleFAQ(index)}
                          >
                            <h3 className="text-lg font-semibold text-card-foreground pr-4">
                              {faq.question}
                            </h3>
                            {expandedFAQ === index ? (
                              <ChevronUp className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                            ) : (
                              <ChevronDown className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                            )}
                          </button>
                          {expandedFAQ === index && (
                            <div className="px-6 pb-4">
                              <p className="text-muted-foreground leading-relaxed">
                                {faq.answer}
                              </p>
                            </div>
                          )}
                        </div>
                      </EnhancedScrollReveal>
                    ))}
                  </div>
                </section>

                {/* CTA Section */}
                <section className="text-center py-16 bg-gradient-card rounded-3xl border-glass">
                  <EnhancedScrollReveal direction="up">
                    <h2 className="text-3xl font-semibold text-foreground mb-6 font-montserrat">
                      Ready to Launch Your MVP in Record Time?
                    </h2>
                    <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                      Stop losing weeks to manual configuration and risking costly errors. Partner with a team that has already solved the infrastructure puzzle.
                    </p>
                    <Button variant="btnPrimary" size="lg" className="group">
                      Book a Product Launch Assessment Today
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </EnhancedScrollReveal>
                </section>
              </div>
            }
          />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default SnapMvpCloudInfrastructureAccelerator;