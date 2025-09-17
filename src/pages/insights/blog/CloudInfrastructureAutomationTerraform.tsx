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
  Download,
  Rocket,
  TrendingUp,
  AlertTriangle,
  ArrowLeft,
  User,
} from "lucide-react";
import styles from "../../../assets/css/stylesheet.module.css";
import BlogDetailsBg from "@/assets/images/blog-details-bg.webp";
import BlogContBg from "@/assets/images/blog-content-bg.webp";

const CloudInfrastructureAutomationTerraform = () => {
  const [selectedNav, setSelectedNav] = useState("introduction");
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);

  const navigationLinks = [
    { id: "introduction", label: "Introduction", icon: Target },
    { id: "executive-summary", label: "Executive Summary", icon: FileText },
    { id: "what-is-snap-mvp", label: "What is Snap.MVP?", icon: Cloud },
    { id: "comparison", label: "Manual vs Automated", icon: BarChart3 },
    { id: "four-pillars", label: "Four Pillars", icon: Layers },
    { id: "step-by-step", label: "10-Minute Deployment", icon: Rocket },
    { id: "architecture", label: "Under the Hood", icon: Settings },
    { id: "client-advantage", label: "Client Advantage", icon: Users },
    { id: "faq", label: "FAQ", icon: FileText },
  ];

  const toggleFAQ = (index: number) => {
    setExpandedFAQ(expandedFAQ === index ? null : index);
  };

  // Comprehensive SEO implementation with optimized keywords
  useSEO({
    title:
      "Cloud Infrastructure Automation: Deploy AWS with Terraform in Minutes | Snap.MVP",
    description:
      "Skip weeks of manual cloud setup. Deploy production-ready AWS, GCP, or Azure infrastructure in 10 minutes with Terraform automation. Get secure, scalable environments instantly.",
    canonicalUrl:
      "https://indexnine.com/insights/blogs/cloud-infrastructure-automation-terraform",
    keywords:
      "cloud infrastructure automation, terraform aws deployment, infrastructure as code tutorial, aws well-architected framework, cloud deployment automation, production ready infrastructure, terraform vs manual cloud configuration, aws infrastructure deployment best practices",
    ogImage:
      "https://indexnine.com/images/cloud-infrastructure-automation-og.jpg",
    ogType: "article",
    author: "IndexNine Technologies",
    publishedDate: "2025-01-30",
    modifiedDate: "2025-01-30",
    articleSection: "Cloud Infrastructure",
    schemaType: "Article",
  });

  // Intersection Observer for scroll-based navigation

  useEffect(() => {
    const options: IntersectionObserverInit = {
      root: null,
      threshold: 0,
      rootMargin: "-120px 0px -70% 0px", // adjust for sticky header height
    };

    const observer = new IntersectionObserver((entries) => {
      const visibleEntries = entries.filter((e) => e.isIntersecting);
      if (visibleEntries.length === 0) return;

      // choose the most visible section; alternatively sort by top
      const best = visibleEntries.reduce((prev, curr) =>
        prev.intersectionRatio > curr.intersectionRatio ? prev : curr
      );

      const id = (best.target as HTMLElement).id;
      if (id) setSelectedNav(id);
    }, options);

    const sections = Array.from(
      document.querySelectorAll<HTMLElement>("section[id]")
    );
    sections.forEach((s) => observer.observe(s));

    return () => observer.disconnect();
  }, []);

  return (
    <div
      className="min-h-screen bg-contain bg-top bg-no-repeat bg-white"
      style={{ backgroundImage: `url(${BlogDetailsBg})` }}
    >
      {/* Enhanced Structured Data for SEO */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          headline:
            "Cloud Infrastructure Automation: Deploy AWS with Terraform in Minutes",
          description:
            "Skip weeks of manual cloud setup. Deploy production-ready AWS, GCP, or Azure infrastructure in 10 minutes with Terraform automation. Get secure, scalable environments instantly.",
          author: {
            "@type": "Organization",
            name: "IndexNine Technologies",
          },
          publisher: {
            "@type": "Organization",
            name: "IndexNine Technologies",
            logo: {
              "@type": "ImageObject",
              url: "https://www.indexnine.com/logo.png",
            },
          },
          datePublished: "2025-01-30",
          dateModified: "2025-01-30",
          mainEntityOfPage: {
            "@type": "WebPage",
            "@id":
              "https://www.indexnine.com/insights/blogs/cloud-infrastructure-automation-terraform",
          },
          image:
            "https://www.indexnine.com/images/cloud-infrastructure-automation-og.jpg",
          articleSection: "Cloud Infrastructure",
          keywords: [
            "cloud infrastructure automation",
            "terraform aws deployment",
            "infrastructure as code",
            "aws well-architected framework",
          ],
          wordCount: 2800,
        })}
      </script>

      {/* Enhanced FAQ Schema with cost-related questions */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: "How much does cloud infrastructure automation cost compared to manual setup?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Cloud infrastructure automation with Terraform eliminates the need for dedicated DevOps teams (saving $150K+ annually) and prevents costly misconfigurations that can lead to $4.88M+ in security breach damages. The ROI is immediate through reduced operational overhead and optimized resource allocation.",
              },
            },
            {
              "@type": "Question",
              name: "Do I need to know Terraform to use automated cloud infrastructure deployment?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "No. When you partner with IndexNine, our teams handle the entire process using our Snap.MVP accelerator. The Terraform templates are pre-built and automated by our experts. You get production-ready environments without needing deep DevOps expertise.",
              },
            },
            {
              "@type": "Question",
              name: "How customizable is automated cloud infrastructure?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Highly customizable through modular Terraform design. We can adjust server counts, database types, storage classes, and deploy to different geographic regions by modifying variables, often without application downtime.",
              },
            },
            {
              "@type": "Question",
              name: "Is automated infrastructure truly production-ready for enterprise workloads?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. All deployments follow AWS Well-Architected Framework principles—the industry standard. This includes high availability, disaster recovery, security, and enterprise-scale capabilities from day one.",
              },
            },
            {
              "@type": "Question",
              name: "Can cloud infrastructure automation work with different cloud providers?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. Our Snap.MVP accelerator is cloud-agnostic and deploys across AWS, Google Cloud, and Azure using modular Terraform templates for each provider.",
              },
            },
            {
              "@type": "Question",
              name: "How long does it take to deploy production-ready cloud infrastructure?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "With our automated Terraform templates, complete production-ready infrastructure deploys in approximately 10 minutes, compared to weeks or months with manual setup.",
              },
            },
          ],
        })}
      </script>

      {/* HowTo Schema for step-by-step deployment */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "HowTo",
          name: "How to Deploy Cloud Infrastructure in 10 Minutes with Terraform",
          description:
            "Step-by-step guide to automated cloud infrastructure deployment using Terraform and the Snap.MVP accelerator",
          totalTime: "PT10M",
          supply: [
            "AWS/GCP/Azure account",
            "Terraform templates",
            "Configuration parameters",
          ],
          tool: ["Terraform", "AWS CLI", "Snap.MVP accelerator"],
          step: [
            {
              "@type": "HowToStep",
              name: "Configure Project Parameters",
              text: "Provide project details including environment name, region, and scaling requirements",
            },
            {
              "@type": "HowToStep",
              name: "Initialize Terraform Templates",
              text: "Run terraform init to prepare the Snap.MVP modules for your cloud provider",
            },
            {
              "@type": "HowToStep",
              name: "Plan Infrastructure Deployment",
              text: "Execute terraform plan to review all resources that will be created",
            },
            {
              "@type": "HowToStep",
              name: "Deploy Production Environment",
              text: "Run terraform apply to create your complete, production-ready infrastructure",
            },
            {
              "@type": "HowToStep",
              name: "Verify and Monitor",
              text: "Confirm all services are running and monitoring is active across all layers",
            },
          ],
        })}
      </script>

      {/* Breadcrumb Schema with Cloud Infrastructure category */}
      <script type="application/ld+json">
        {JSON.stringify({
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
              name: "Blog",
              item: "https://www.indexnine.com/insights/blogs",
            },
            {
              "@type": "ListItem",
              position: 4,
              name: "Cloud Infrastructure",
              item: "https://www.indexnine.com/insights/blogs?category=cloud-infrastructure",
            },
            {
              "@type": "ListItem",
              position: 5,
              name: "Cloud Infrastructure Automation with Terraform",
              item: "https://www.indexnine.com/insights/blogs/cloud-infrastructure-automation-terraform",
            },
          ],
        })}
      </script>

      {/* Service Schema */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Snap.MVP Cloud Infrastructure Accelerator",
          description:
            "Automated cloud infrastructure deployment using Terraform templates for AWS, Google Cloud, and Azure. Production-ready environments in 10 minutes.",
          provider: {
            "@type": "Organization",
            name: "IndexNine Technologies",
          },
          serviceType: "Cloud Infrastructure Automation",
          offers: {
            "@type": "Offer",
            description:
              "Production-ready cloud environment deployment in 10 minutes using Terraform automation",
          },
        })}
      </script>

      <Header />

      {/* Optimized Hero Section */}

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[#ffffff00]">
        <div className="relative z-10 container mx-auto pt-36">
          <div className="max-w-7xl mx-auto text-center lg:text-left ml-0">
            <div className="flex items-center">
              <Link
                to="/insights/blogs"
                className="inline-flex items-center text-foreground-muted hover:text-brand-primary transition-colors mb-6 mr-6"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Blogs
              </Link>
            </div>

            <h1 className="text-[1.5rem] sm:text-[2rem] lg:text-[2.5rem] font-semibold text-foreground mb-6 leading-[1.25] animate-fade-in font-montserrat">
              Cloud Infrastructure Automation: <br />
              Deploy Production-Ready AWS Environments in Minutes
            </h1>

            <div className="flex items-center gap-6 text-sm text-foreground/80 mb-8">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span className="font-montserrat">
                  Cloud Infrastructure Automation
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span className="font-montserrat">15 min read</span>
              </div>
              <span className="font-montserrat">January 25, 2025</span>
            </div>
          </div>
        </div>
      </section>

      {/* <section className="relative min-h-[600px] overflow-hidden bg-black">
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
                <span className="text-sm font-medium">
                  15 min read • Cloud Infrastructure Automation
                </span>
              </div>
            </EnhancedScrollReveal>

            <EnhancedScrollReveal direction="up" delay={400}>
              <h1 className="text-[2.5rem] sm:text-[3rem] lg:text-[4rem] xl:text-[4.5rem] font-semibold text-foreground-dark mb-6 leading-[1.1] font-montserrat">
                Cloud Infrastructure Automation: Deploy Production-Ready{" "}
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  AWS Environments in Minutes
                </span>
              </h1>
            </EnhancedScrollReveal>

            <EnhancedScrollReveal direction="up" delay={600}>
              <p className="text-xl text-foreground-dark-white/80 mb-8 leading-relaxed font-montserrat max-w-3xl mx-auto">
                Skip weeks of manual cloud setup. Deploy production-ready AWS,
                GCP, or Azure infrastructure in 10 minutes with Terraform
                automation. Get secure, scalable environments instantly.
              </p>
            </EnhancedScrollReveal>

            <EnhancedScrollReveal direction="up" delay={800}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/company/contact">
                  <Button variant="btnPrimary" size="lg" className="group">
                    Schedule Infrastructure Assessment
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Button variant="btnSecondary" size="lg">
                  <Download className="w-4 h-4 mr-2" />
                  Download Terraform Guide
                </Button>
              </div>
            </EnhancedScrollReveal>
          </div>
        </div>
      </section> */}

      {/* Main Content with Sticky Navigation */}
      <div className="bg-[#ffffff00] pt-8">
        <div
          className="container from-white via-white to-[#F0F4FF] bg-contain bg-no-repeat pt-12 rounded-tl-3xl rounded-tr-3xl bg-gradient-to-b"
          style={{ backgroundImage: `url(${BlogContBg})` }}
        >
          <StickyScrollLayout
            containerClassName=" bg-transparent  "
            stickyContent={
              <div className="mb-12">
                <nav className="space-y-2">
                  {navigationLinks.map((link) => {
                    const IconComponent = link.icon;
                    return (
                      <a
                        key={link.id}
                        href={`#${link.id}`}
                        onClick={() => setSelectedNav(link.id)}
                        className={`flex items-center gap-3 rounded-lg transition-colors ${
                          selectedNav === link.id
                            ? "text-primary font-semibold"
                            : "text-foreground-dark hover:text-foreground-dark hover:bg-muted"
                        }`}
                      >
                        <IconComponent className="w-4 h-4" />
                        <span className="text-sm font-medium">
                          {link.label}
                        </span>
                      </a>
                    );
                  })}
                </nav>
              </div>
            }
            scrollingContent={
              <div className="prose prose-lg max-w-none col-span-2 w-full">
                {/* Introduction */}
                <section id="introduction" className="mb-16">
                  <EnhancedScrollReveal direction="up">
                    <p className="text-lg text-foreground-dark leading-relaxed mb-6">
                      For decades, founders and enterprise innovators have been
                      governed by the immutable law of engineering: the "Iron
                      Triangle."
                    </p>
                    <p className="text-lg text-foreground-dark leading-relaxed mb-6">
                      Good, Fast, Cheap: pick any two. This principle dictates
                      that a high-quality (Good) project delivered quickly
                      (Fast) will not be cheap. One that is Good and Cheap will
                      not be Fast. And one that is Fast and Cheap will certainly
                      not be Good.
                    </p>
                    <p className="text-lg text-foreground-dark leading-relaxed mb-6">
                      Nowhere is this painful trade-off more acute than in the
                      setup of cloud infrastructure—a process that is often
                      slow, expensive, and alarmingly prone to error. The
                      pressure to launch is immense; a McKinsey study found that
                      products launching just six months late can lose up to a
                      third of their potential profits. This pressure often
                      forces teams into a false choice: get to market fast by
                      cutting corners with manual setups, or build it "right"
                      and lose the race to a faster competitor.
                    </p>
                    <p className="text-lg text-foreground-dark leading-relaxed mb-8">
                      At IndexNine, we believe this is an unacceptable
                      trade-off. Our philosophy is rooted in a simple principle:
                      use engineering excellence to build accelerators that
                      eliminate friction, automate complexity, and allow our
                      clients to focus on their product, not their plumbing.
                    </p>
                    <p className="text-lg text-foreground-dark leading-relaxed">
                      That's why we're pulling back the curtain on one of our
                      most powerful internal accelerators:{" "}
                      <strong>Snap.MVP</strong>. This isn't just a tool; it's
                      our answer to the startup dilemma, turning a process that
                      takes low-performing organizations months into a 10-minute
                      automated workflow that delivers on all three pillars of
                      the Iron Triangle.
                    </p>
                  </EnhancedScrollReveal>
                </section>

                {/* Executive Summary - New Section for Featured Snippets */}
                <section id="executive-summary" className="mb-16">
                  <EnhancedScrollReveal direction="up">
                    <h2 className="text-3xl font-semibold text-foreground-dark mb-8 font-montserrat flex items-center gap-3">
                      <FileText className="w-8 h-8 text-primary" />
                      Executive Summary: Key Takeaways
                    </h2>
                    <div className="bg-card rounded-2xl p-8 shadow-glass border-glass mb-8">
                      <ul className="space-y-4 text-lg text-muted-foreground">
                        <li className="flex items-start gap-3">
                          <CheckCircle className="w-6 h-6 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>
                            <strong>Deploy in 10 minutes:</strong> Terraform
                            automation reduces infrastructure setup from weeks
                            to minutes
                          </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle className="w-6 h-6 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>
                            <strong>Production-ready from day one:</strong> AWS
                            Well-Architected Framework ensures enterprise-grade
                            security and scalability
                          </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle className="w-6 h-6 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>
                            <strong>Eliminate DevOps costs:</strong> Save $150K+
                            annually by removing the need for dedicated
                            infrastructure teams
                          </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle className="w-6 h-6 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>
                            <strong>Multi-cloud ready:</strong> Deploy
                            consistently across AWS, Google Cloud, and Azure
                            using modular templates
                          </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle className="w-6 h-6 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>
                            <strong>Zero vendor lock-in:</strong> Infrastructure
                            as Code ensures portability and complete control
                          </span>
                        </li>
                      </ul>
                    </div>
                  </EnhancedScrollReveal>
                </section>

                {/* Manual vs Automated Comparison Table - New Section */}
                <section id="comparison" className="mb-16">
                  <EnhancedScrollReveal direction="up">
                    <h2 className="text-3xl font-semibold text-foreground-dark mb-8 font-montserrat flex items-center gap-3">
                      <BarChart3 className="w-8 h-8 text-primary" />
                      Manual vs Automated Infrastructure Deployment
                    </h2>
                    <div className="overflow-x-auto mb-8">
                      <table className="w-full bg-card rounded-2xl shadow-glass border-glass overflow-hidden">
                        <thead className="bg-primary text-primary-foreground">
                          <tr>
                            <th className="px-6 py-4 text-left font-semibold">
                              Factor
                            </th>
                            <th className="px-6 py-4 text-left font-semibold">
                              Manual Setup
                            </th>
                            <th className="px-6 py-4 text-left font-semibold">
                              Automated (Terraform)
                            </th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-border">
                          <tr>
                            <td className="px-6 py-4 font-medium text-card-foreground">
                              Deployment Time
                            </td>
                            <td className="px-6 py-4 text-red-500 flex items-center gap-2">
                              <AlertTriangle className="w-4 h-4" />
                              2-8 weeks
                            </td>
                            <td className="px-6 py-4 text-green-500 flex items-center gap-2">
                              <CheckCircle className="w-4 h-4" />
                              10 minutes
                            </td>
                          </tr>
                          <tr>
                            <td className="px-6 py-4 font-medium text-card-foreground">
                              Initial Cost
                            </td>
                            <td className="px-6 py-4 text-red-500">
                              $150K+ DevOps team
                            </td>
                            <td className="px-6 py-4 text-green-500">
                              Included in service
                            </td>
                          </tr>
                          <tr>
                            <td className="px-6 py-4 font-medium text-card-foreground">
                              Error Risk
                            </td>
                            <td className="px-6 py-4 text-red-500">
                              High - Human mistakes
                            </td>
                            <td className="px-6 py-4 text-green-500">
                              Low - Automated testing
                            </td>
                          </tr>
                          <tr>
                            <td className="px-6 py-4 font-medium text-card-foreground">
                              Consistency
                            </td>
                            <td className="px-6 py-4 text-red-500">Variable</td>
                            <td className="px-6 py-4 text-green-500">
                              100% Reproducible
                            </td>
                          </tr>
                          <tr>
                            <td className="px-6 py-4 font-medium text-card-foreground">
                              Security Compliance
                            </td>
                            <td className="px-6 py-4 text-red-500">
                              Manual audits required
                            </td>
                            <td className="px-6 py-4 text-green-500">
                              Built-in compliance
                            </td>
                          </tr>
                          <tr>
                            <td className="px-6 py-4 font-medium text-card-foreground">
                              Scalability
                            </td>
                            <td className="px-6 py-4 text-red-500">
                              Requires re-architecture
                            </td>
                            <td className="px-6 py-4 text-green-500">
                              Auto-scaling enabled
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </EnhancedScrollReveal>
                </section>

                {/* What is Snap.MVP */}
                <section id="what-is-snap-mvp" className="mb-16">
                  <EnhancedScrollReveal direction="up">
                    <h2 className="text-3xl font-semibold text-foreground-dark mb-8 font-montserrat flex items-center gap-3">
                      <Cloud className="w-8 h-8 text-primary" />
                      What is Snap.MVP? An Accelerator for a Production-Ready
                      Foundation
                    </h2>
                    <p className="text-lg text-foreground-dark leading-relaxed mb-6">
                      Snap.MVP is a ready-to-use, accelerated cloud
                      infrastructure solution built and refined by our own
                      expert engineers. It is the codified expression of our
                      deep architectural expertise, designed to solve the
                      infrastructure puzzle from day one.
                    </p>
                    <p className="text-lg text-foreground-dark leading-relaxed mb-6">
                      At its core, Snap.MVP uses a powerful set of modular,
                      reusable{" "}
                      <Link
                        to="/services/custom-software"
                        className="text-primary hover:underline"
                      >
                        Terraform templates
                      </Link>
                      —the industry standard for Infrastructure as Code (IaC).
                      IaC is a transformative approach that manages and
                      provisions infrastructure through machine-readable
                      definition files, rather than physical hardware
                      configuration or interactive configuration tools. This
                      means your entire cloud environment is defined as code:
                      it's repeatable, version-controlled, and auditable.
                    </p>
                    <p className="text-lg text-foreground-dark leading-relaxed mb-6">
                      With Snap.MVP, we can provision a complete,
                      production-ready environment on AWS, Google Cloud, or
                      Azure during the first week of an engineering engagement.
                      Instead of starting from scratch, our teams provide a few
                      key project details, and the system automatically builds
                      everything: servers, networks, databases, security, and
                      monitoring, all configured according to the highest
                      industry standards.
                    </p>
                    <p className="text-lg text-foreground-dark leading-relaxed">
                      It is the foundational engine of our{" "}
                      <Link
                        to="/services/consulting"
                        className="text-primary hover:underline"
                      >
                        Sprint Zero and product launch programs
                      </Link>
                      . We don't just talk about your product vision; we build
                      its permanent, scalable home while we're still planning
                      the first feature.
                    </p>
                  </EnhancedScrollReveal>
                </section>

                {/* Step-by-Step Guide - New Section */}
                <section id="step-by-step" className="mb-16">
                  <EnhancedScrollReveal direction="up">
                    <h2 className="text-3xl font-semibold text-foreground-dark mb-8 font-montserrat flex items-center gap-3">
                      <Rocket className="w-8 h-8 text-primary" />
                      How to Deploy Cloud Infrastructure in 10 Minutes
                    </h2>
                    <p className="text-lg text-foreground-dark leading-relaxed mb-8">
                      Here's our proven process for automated cloud
                      infrastructure deployment using Terraform and the Snap.MVP
                      accelerator:
                    </p>
                    <div className="space-y-8">
                      <div className="flex gap-6">
                        <div className="flex-shrink-0 w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-semibold text-lg">
                          1
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold text-foreground-dark mb-3">
                            Configure Project Parameters
                          </h3>
                          <p className="text-foreground-dark leading-relaxed">
                            Provide essential project details including
                            environment name, target region, expected traffic
                            patterns, and compliance requirements. Our team
                            gathers this information in a single 30-minute
                            session.
                          </p>
                        </div>
                      </div>
                      <div className="flex gap-6">
                        <div className="flex-shrink-0 w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-semibold text-lg">
                          2
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold text-foreground-dark mb-3">
                            Initialize Terraform Templates
                          </h3>
                          <p className="text-foreground-dark leading-relaxed">
                            Execute{" "}
                            <code className="bg-muted px-2 py-1 rounded">
                              terraform init
                            </code>{" "}
                            to prepare the Snap.MVP modules specific to your
                            chosen cloud provider (AWS, GCP, or Azure). This
                            downloads and configures all necessary provider
                            plugins.
                          </p>
                        </div>
                      </div>
                      <div className="flex gap-6">
                        <div className="flex-shrink-0 w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-semibold text-lg">
                          3
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold text-foreground-dark mb-3">
                            Plan Infrastructure Deployment
                          </h3>
                          <p className="text-foreground-dark leading-relaxed">
                            Run{" "}
                            <code className="bg-muted px-2 py-1 rounded">
                              terraform plan
                            </code>{" "}
                            to review all resources that will be created. This
                            step provides a detailed preview of your entire
                            infrastructure architecture before any resources are
                            provisioned.
                          </p>
                        </div>
                      </div>
                      <div className="flex gap-6">
                        <div className="flex-shrink-0 w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-semibold text-lg">
                          4
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold text-foreground-dark mb-3">
                            Deploy Production Environment
                          </h3>
                          <p className="text-foreground-dark leading-relaxed">
                            Execute{" "}
                            <code className="bg-muted px-2 py-1 rounded">
                              terraform apply
                            </code>{" "}
                            to create your complete, production-ready
                            infrastructure. Watch as your entire cloud
                            environment materializes in approximately 10
                            minutes.
                          </p>
                        </div>
                      </div>
                      <div className="flex gap-6">
                        <div className="flex-shrink-0 w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-semibold text-lg">
                          5
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold text-foreground-dark mb-3">
                            Verify and Monitor
                          </h3>
                          <p className="text-foreground-dark leading-relaxed">
                            Confirm all services are operational and monitoring
                            dashboards are active. Your infrastructure includes
                            built-in health checks, alerting systems, and
                            comprehensive logging across all layers.
                          </p>
                        </div>
                      </div>
                    </div>
                  </EnhancedScrollReveal>
                </section>

                {/* Four Pillars */}
                <section id="four-pillars" className="mb-16">
                  <EnhancedScrollReveal direction="up">
                    <h2 className="text-3xl font-semibold text-foreground-dark mb-8 font-montserrat flex items-center gap-3">
                      <Layers className="w-8 h-8 text-primary" />
                      The Four Pillars of Accelerated Deployment: How Snap.MVP
                      Solves the Iron Triangle
                    </h2>
                    <p className="text-lg text-foreground-dark leading-relaxed mb-8">
                      Snap.MVP was born from our experience launching countless
                      products for startups and enterprises. We focused on
                      solving the four things that matter most, delivering a
                      solution that achieves the seemingly impossible: Good,
                      Fast, and Cost-Effective.
                    </p>
                  </EnhancedScrollReveal>

                  <div className="grid md:grid-cols-2 gap-6 mb-12">
                    <EnhancedScrollReveal direction="left" delay={200}>
                      <div className="bg-card rounded-2xl p-8 shadow-glass border-glass h-full">
                        <div className="flex items-center gap-4 mb-6">
                          <div className="w-12 h-12 bg-yellow-500/10 rounded-full flex items-center justify-center">
                            <Zap className="w-6 h-6 text-yellow-500" />
                          </div>
                          <h3 className="text-xl font-semibold text-card-foreground font-montserrat">
                            ⚡ Radical Speed (Delivering "Fast")
                          </h3>
                        </div>
                        <p className="text-muted-foreground leading-relaxed">
                          In today's market, speed is revenue. While a manual
                          infrastructure deployment can take even a
                          high-performing team up to a week (and low-performers
                          over a month), Snap.MVP reduces that to about 10
                          minutes. This isn't just an efficiency gain; it's a
                          profound competitive advantage. It allows our clients
                          to begin development on a production-grade environment
                          immediately, enabling them to test, iterate, and
                          capture market share while competitors are still
                          debating VPC configurations.
                        </p>
                      </div>
                    </EnhancedScrollReveal>

                    <EnhancedScrollReveal direction="right" delay={400}>
                      <div className="bg-card rounded-2xl p-8 shadow-glass border-glass h-full">
                        <div className="flex items-center gap-4 mb-6">
                          <div className="w-12 h-12 bg-blue-500/10 rounded-full flex items-center justify-center">
                            <Shield className="w-6 h-6 text-blue-500" />
                          </div>
                          <h3 className="text-xl font-semibold text-card-foreground font-montserrat">
                            🏗️ Fortress-Like Architecture (Delivering "Good")
                          </h3>
                        </div>
                        <p className="text-muted-foreground leading-relaxed">
                          Manual configurations are a leading cause of security
                          vulnerabilities and system instability. A single
                          misconfiguration can lead to data breaches costing an
                          average of $4.88 million per incident. Snap.MVP
                          mitigates this risk by programmatically deploying a
                          well-tested, robust architecture that aligns with the
                          principles of the AWS Well-Architected Framework—the
                          gold standard for building secure, high-performing,
                          and resilient cloud infrastructure.
                        </p>
                      </div>
                    </EnhancedScrollReveal>

                    <EnhancedScrollReveal direction="left" delay={600}>
                      <div className="bg-card rounded-2xl p-8 shadow-glass border-glass h-full">
                        <div className="flex items-center gap-4 mb-6">
                          <div className="w-12 h-12 bg-green-500/10 rounded-full flex items-center justify-center">
                            <DollarSign className="w-6 h-6 text-green-500" />
                          </div>
                          <h3 className="text-xl font-semibold text-card-foreground font-montserrat">
                            💰 Built-in Cost Optimization (Delivering on
                            "Cheap")
                          </h3>
                        </div>
                        <p className="text-muted-foreground leading-relaxed">
                          DevOps is expensive, and cloud misconfigurations can
                          lead to massive, unexpected cost overruns. Snap.MVP
                          provides immediate ROI by automating the work of a
                          dedicated DevOps team and implementing cost-saving
                          measures from day one. It shifts the economic model
                          from large, upfront Capital Expense (CapEx) to a lean,
                          variable Operational Expense (OpEx). Resources are
                          right-sized, with autoscaling enabled by default to
                          handle traffic spikes efficiently.
                        </p>
                      </div>
                    </EnhancedScrollReveal>

                    <EnhancedScrollReveal direction="right" delay={800}>
                      <div className="bg-card rounded-2xl p-8 shadow-glass border-glass h-full">
                        <div className="flex items-center gap-4 mb-6">
                          <div className="w-12 h-12 bg-purple-500/10 rounded-full flex items-center justify-center">
                            <Settings className="w-6 h-6 text-purple-500" />
                          </div>
                          <h3 className="text-xl font-semibold text-card-foreground font-montserrat">
                            🔧 Flexible to the Core (Built with Terraform)
                          </h3>
                        </div>
                        <p className="text-muted-foreground leading-relaxed">
                          We built Snap.MVP using Terraform for a deliberate,
                          strategic reason. As the industry's most widely
                          adopted IaC tool, its declarative, provider-agnostic
                          approach allows us to manage any infrastructure with a
                          consistent workflow. With IaC being a core part of 74%
                          of IT leaders' future cloud strategies, our solution
                          ensures clients are building on a modern, future-proof
                          foundation that avoids vendor lock-in.
                        </p>
                      </div>
                    </EnhancedScrollReveal>
                  </div>
                </section>

                {/* Under the Hood */}
                <section id="architecture" className="mb-16">
                  <EnhancedScrollReveal direction="up">
                    <h2 className="text-3xl font-semibold text-foreground-dark mb-8 font-montserrat flex items-center gap-3">
                      <Settings className="w-8 h-8 text-primary" />
                      Under the Hood: The Five Layers of a Well-Architected
                      Cloud Environment
                    </h2>
                    <p className="text-lg leading-relaxed mb-8 text-foreground-dark">
                      Snap.MVP configures all five essential layers of a modern
                      cloud environment, using best-in-class services and
                      architectural patterns to ensure security and scalability
                      from the start.
                    </p>
                  </EnhancedScrollReveal>

                  <div className="space-y-6">
                    <EnhancedScrollReveal direction="up" delay={200}>
                      <div className="bg-card rounded-2xl p-6 shadow-glass border-glass">
                        <div className="flex items-center gap-4 mb-4">
                          <div className="w-10 h-10 bg-blue-500/10 rounded-full flex items-center justify-center">
                            <Cloud className="w-5 h-5 text-blue-500" />
                          </div>
                          <h3 className="text-xl font-semibold text-card-foreground">
                            Network Layer
                          </h3>
                        </div>
                        <p className="text-muted-foreground leading-relaxed">
                          A logically isolated Virtual Private Cloud (VPC)
                          serves as your own private office within the public
                          cloud, with public/private subnets, internet gateways,
                          and security groups to control all inbound and
                          outbound traffic.
                        </p>
                      </div>
                    </EnhancedScrollReveal>

                    <EnhancedScrollReveal direction="up" delay={300}>
                      <div className="bg-card rounded-2xl p-6 shadow-glass border-glass">
                        <div className="flex items-center gap-4 mb-4">
                          <div className="w-10 h-10 bg-green-500/10 rounded-full flex items-center justify-center">
                            <TrendingUp className="w-5 h-5 text-green-500" />
                          </div>
                          <h3 className="text-xl font-semibold text-card-foreground">
                            Compute Layer
                          </h3>
                        </div>
                        <p className="text-muted-foreground leading-relaxed">
                          Resizable compute capacity with Auto-Scaling Groups
                          using EC2, ECS (Containers), or EKS (Kubernetes). This
                          enables horizontal scaling ("scaling out"), the
                          foundation of modern cloud elasticity. All traffic is
                          distributed by an Application Load Balancer—acting
                          like a traffic cop—to enhance availability and fault
                          tolerance.
                        </p>
                      </div>
                    </EnhancedScrollReveal>

                    <EnhancedScrollReveal direction="up" delay={400}>
                      <div className="bg-card rounded-2xl p-6 shadow-glass border-glass">
                        <div className="flex items-center gap-4 mb-4">
                          <div className="w-10 h-10 bg-red-500/10 rounded-full flex items-center justify-center">
                            <Lock className="w-5 h-5 text-red-500" />
                          </div>
                          <h3 className="text-xl font-semibold text-card-foreground">
                            Security Layer
                          </h3>
                        </div>
                        <p className="text-muted-foreground leading-relaxed">
                          Comprehensive security begins with AWS Secrets Manager
                          to encrypt secrets at rest and rotate them
                          automatically, preventing the dangerous practice of
                          hardcoding credentials. This is complemented by the
                          principle of least privilege via granular Identity and
                          Access Management (IAM) policies and full audit
                          logging with AWS CloudTrail.
                        </p>
                      </div>
                    </EnhancedScrollReveal>

                    <EnhancedScrollReveal direction="up" delay={500}>
                      <div className="bg-card rounded-2xl p-6 shadow-glass border-glass">
                        <div className="flex items-center gap-4 mb-4">
                          <div className="w-10 h-10 bg-purple-500/10 rounded-full flex items-center justify-center">
                            <Database className="w-5 h-5 text-purple-500" />
                          </div>
                          <h3 className="text-xl font-semibold text-card-foreground">
                            Storage Layer
                          </h3>
                        </div>
                        <p className="text-muted-foreground leading-relaxed">
                          Encrypted and policy-managed S3 object storage for
                          unstructured data like media files and logs, alongside
                          high-availability RDS instances for your relational
                          databases, with automated backups enabled by default.
                        </p>
                      </div>
                    </EnhancedScrollReveal>

                    <EnhancedScrollReveal direction="up" delay={600}>
                      <div className="bg-card rounded-2xl p-6 shadow-glass border-glass">
                        <div className="flex items-center gap-4 mb-4">
                          <div className="w-10 h-10 bg-yellow-500/10 rounded-full flex items-center justify-center">
                            <BarChart3 className="w-5 h-5 text-yellow-500" />
                          </div>
                          <h3 className="text-xl font-semibold text-card-foreground">
                            Monitoring Layer
                          </h3>
                        </div>
                        <p className="text-muted-foreground leading-relaxed">
                          Centralized resource monitoring and logging via
                          CloudWatch and CloudTrail, providing complete,
                          real-time visibility into your environment's health,
                          security, and performance.
                        </p>
                      </div>
                    </EnhancedScrollReveal>
                  </div>
                </section>

                {/* Client Advantage */}
                <section id="client-advantage" className="mb-16">
                  <EnhancedScrollReveal direction="up">
                    <h2 className="text-3xl font-semibold text-foreground-dark mb-8 font-montserrat flex items-center gap-3">
                      <Users className="w-8 h-8 text-primary" />
                      How Our Clients Leverage Snap.MVP for a Strategic
                      Advantage
                    </h2>
                    <p className="text-lg text-foreground-dark leading-relaxed mb-8">
                      Snap.MVP is a strategic asset we bring to every client
                      engagement. It's the first step in our proven process for
                      launching and scaling mission-critical products. When you
                      partner with IndexNine, you're not just hiring developers;
                      you're gaining immediate access to a mature, high-velocity
                      ecosystem.
                    </p>
                  </EnhancedScrollReveal>

                  <div className="grid md:grid-cols-3 gap-6">
                    <EnhancedScrollReveal direction="up" delay={200}>
                      <div className="bg-card rounded-2xl p-6 shadow-glass border-glass h-full">
                        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                          <Rocket className="w-6 h-6 text-primary" />
                        </div>
                        <h3 className="text-lg font-semibold text-card-foreground mb-3">
                          An Accelerated Sprint 0
                        </h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          We build your entire production-ready infrastructure
                          while we are still collaboratively defining your
                          product roadmap, ensuring you are ready to deploy code
                          from day one of the first sprint.
                        </p>
                      </div>
                    </EnhancedScrollReveal>

                    <EnhancedScrollReveal direction="up" delay={400}>
                      <div className="bg-card rounded-2xl p-6 shadow-glass border-glass h-full">
                        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                          <Target className="w-6 h-6 text-primary" />
                        </div>
                        <h3 className="text-lg font-semibold text-card-foreground mb-3">
                          A Battle-Tested Launchpad
                        </h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          Your MVP is built on an architecture that is already
                          prepared for production traffic and scale. You avoid
                          the costly and time-consuming process of
                          re-architecting your application as you grow.
                        </p>
                      </div>
                    </EnhancedScrollReveal>

                    <EnhancedScrollReveal direction="up" delay={600}>
                      <div className="bg-card rounded-2xl p-6 shadow-glass border-glass h-full">
                        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                          <DollarSign className="w-6 h-6 text-primary" />
                        </div>
                        <h3 className="text-lg font-semibold text-card-foreground mb-3">
                          Reduced Operational Overhead
                        </h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          You can focus your valuable resources on product
                          development and market strategy, not DevOps. We handle
                          the complexities of cloud management for you.
                        </p>
                      </div>
                    </EnhancedScrollReveal>
                  </div>

                  <EnhancedScrollReveal direction="up" delay={800}>
                    <div className="mt-8 bg-gradient-to-r from-primary/5 to-purple-500/5 rounded-2xl p-8 border border-primary/20">
                      <p className="text-lg text-foreground-dark leading-relaxed text-center">
                        This is how we live our engineering-first philosophy. We
                        invest in our own tools and processes to deliver
                        unparalleled value to our clients, ensuring they can
                        innovate faster, smarter, and more securely.{" "}
                        <Link
                          to="/insights/case-studies"
                          className="text-primary hover:underline font-medium"
                        >
                          See how our clients have leveraged this advantage
                        </Link>{" "}
                        to achieve remarkable outcomes.
                      </p>
                    </div>
                  </EnhancedScrollReveal>
                </section>
              </div>
            }
          />
        </div>
      </div>

      {/* CTA Section */}
      <section className={`py-24 lg:py-32 ${styles.ctaBg}`}>
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <div className="p-8 text-center">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold mb-6 text-foreground-dark-white">
                <span className="leading-[1.4]">
                  Ready to Launch Your MVP in Record Time?
                </span>
              </h2>
              <p className="text-xl text-foreground-dark-white/80 mb-12 font-montserrat max-w-3xl mx-auto">
                Stop losing weeks to manual configuration and risking costly
                errors. Partner with a team that has already solved the
                infrastructure puzzle.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/company/contact">
                  <Button variant="btnSecondary" size="lg">
                    Book a Product Launch Assessment Today
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
                <Button variant="btnSecondary" size="lg">
                  <Download className="w-4 h-4 mr-2" />
                  Download Infrastructure Guide
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced FAQ */}
      <section id="faq" className="container max-w-6xl my-16">
        <EnhancedScrollReveal direction="up">
          <h2 className="text-3xl font-semibold text-foreground-dark mb-8 font-montserrat flex items-center gap-3">
            <FileText className="w-8 h-8 text-primary" />
            Frequently Asked Questions
          </h2>
        </EnhancedScrollReveal>

        <div className="space-y-4">
          {[
            {
              question:
                "How much does cloud infrastructure automation cost compared to manual setup?",
              answer:
                "Cloud infrastructure automation with Terraform eliminates the need for dedicated DevOps teams (saving $150K+ annually) and prevents costly misconfigurations that can lead to $4.88M+ in security breach damages. The ROI is immediate through reduced operational overhead and optimized resource allocation.",
            },
            {
              question:
                "Do I need to know Terraform to use automated cloud infrastructure deployment?",
              answer:
                "No. When you partner with IndexNine, our teams handle the entire process using our Snap.MVP accelerator. The Terraform templates are pre-built and automated by our experts. You get production-ready environments without needing deep DevOps expertise.",
            },
            {
              question: "How customizable is automated cloud infrastructure?",
              answer:
                "Highly customizable through modular Terraform design. We can adjust server counts, database types, storage classes, and deploy to different geographic regions by modifying variables, often without application downtime.",
            },
            {
              question:
                "Is automated infrastructure truly production-ready for enterprise workloads?",
              answer:
                "Yes. All deployments follow AWS Well-Architected Framework principles—the industry standard. This includes high availability, disaster recovery, security, and enterprise-scale capabilities from day one.",
            },
            {
              question:
                "Can cloud infrastructure automation work with different cloud providers?",
              answer:
                "Yes. Our Snap.MVP accelerator is cloud-agnostic and deploys across AWS, Google Cloud, and Azure using modular Terraform templates for each provider.",
            },
            {
              question:
                "How long does it take to deploy production-ready cloud infrastructure?",
              answer:
                "With our automated Terraform templates, complete production-ready infrastructure deploys in approximately 10 minutes, compared to weeks or months with manual setup.",
            },
          ].map((faq, index) => (
            <EnhancedScrollReveal
              key={index}
              direction="up"
              delay={index * 100}
            >
              <div className="bg-card rounded-2xl shadow-glass border-glass overflow-hidden">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-muted/50 transition-colors"
                >
                  <span className="font-medium text-card-foreground pr-4">
                    {faq.question}
                  </span>
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

      <div className="bg-black">
        <Footer />
      </div>
    </div>
  );
};

export default CloudInfrastructureAutomationTerraform;
