import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import {
  ServiceSchema,
  WebPageSchema,
  BreadcrumbSchema,
  FAQSchema,
} from "@/components/SEOStructuredData";
import { useSEO } from "@/hooks/useSEO";
import LivingVoidBackground from "@/components/LivingVoidBackground";
import {
  ArrowRight,
  Shield,
  RefreshCw,
  Eye,
  Settings,
  Download,
  CheckCircle,
  ChevronDown,
  ChevronUp,
  Brain,
  Target,
  Zap,
  Users,
  TrendingUp,
  Lock,
  Scale,
  Workflow,
  Handshake,
  Award,
  Building2,
  Gauge,
  FileText,
} from "lucide-react";
import styles from "../../assets/css/stylesheet.module.css";

const Enterprise = () => {
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setExpandedFAQ(expandedFAQ === index ? null : index);
  };

  const faqData = [
    {
      question: "What is 'technical debt' and why is it a problem for my enterprise?",
      answer: "Technical debt is the implied cost of rework caused by choosing an easy (limited) solution now instead of using a better approach that would take longer. It slows down future development, increases bugs, creates security vulnerabilities, and makes it difficult to scale or add new features, ultimately hindering innovation and growth.",
    },
    {
      question: "Our legacy system is business-critical. How do you modernize it without disrupting our operations?",
      answer: "We specialize in minimizing disruption. Our approach involves a phased migration strategy, often using patterns like the 'strangler fig' to incrementally replace parts of the old system with new microservices. We build in parallel, run extensive tests, and ensure a seamless transition for your users and data.",
    },
    {
      question: "How is Indexnine's approach different from a large, traditional consulting firm?",
      answer: "Our key difference is our 'practitioner-led' philosophy. Our strategists and architects are active builders, not just theorists. We combine high-level strategic planning with deep, hands-on engineering expertise. This ensures our recommendations are not only visionary but also practical, actionable, and ready for implementation by our integrated teams.",
    },
    {
      question: "How do you measure the ROI of a modernization project?",
      answer: "ROI is measured against the specific business goals we establish in the initial assessment. Metrics often include: reduction in operational/maintenance costs, increased developer velocity (faster time-to-market for new features), improved system uptime and performance, and the enablement of new revenue streams that were previously impossible.",
    },
    {
      question: "Can you work with our existing development team?",
      answer: "Absolutely. We prefer to work collaboratively with your internal teams, enhancing their capabilities rather than replacing them. Our approach includes knowledge transfer, best practices training, and mentoring to ensure your team can maintain and continue building upon our modernization work.",
    },
  ];

  // Comprehensive SEO implementation
  useSEO({
    title: "Enterprise Transformation Services | Legacy System Modernization & Technical Debt Resolution | Indexnine",
    description: "Transform mission-critical enterprise systems with Indexnine's proven modernization approach. Eliminate technical debt, implement scalable architectures, and accelerate innovation without operational disruption.",
    keywords: "enterprise transformation, legacy system modernization, technical debt resolution, enterprise architecture, system modernization services, digital transformation consulting, enterprise software development, mission critical systems",
    canonicalUrl: "https://www.indexnine.com/engagement/enterprise",
    ogImage: "https://www.indexnine.com/images/og-enterprise-transformation.png",
  });

  return (
    <div className="min-h-screen bg-background">
      <ServiceSchema
        name="Enterprise Transformation Services"
        description="Strategic partnership for modernizing mission-critical systems, eliminating technical debt, and implementing scalable AI and Quality Assurance frameworks to drive enterprise growth and resilience."
        serviceType="Technology Consulting"
      />
      <WebPageSchema
        title="Enterprise Transformation Services | Legacy System Modernization & Technical Debt Resolution | Indexnine"
        description="Transform mission-critical enterprise systems with Indexnine's proven modernization approach. Eliminate technical debt, implement scalable architectures, and accelerate innovation without operational disruption."
        url="https://www.indexnine.com/engagement/enterprise"
      />
      <BreadcrumbSchema
        items={[
          { name: "Engagement Models", url: "https://www.indexnine.com/engagement" },
          { name: "Enterprise Transformation", url: "https://www.indexnine.com/engagement/enterprise" },
        ]}
      />
      <FAQSchema faqItems={faqData} />

      <Header />

      {/* Hero Section */}
      <section className="relative min-h-[780px] overflow-hidden bg-black">
        <LivingVoidBackground />
        <div className="relative z-10 container mx-auto px-6 pt-48 pb-24">
          <div className="max-w-5xl mx-auto text-center lg:text-left ml-0">
             <div className="mb-6">
               <span className="inline-block px-6 py-3 bg-brand-primary/10 text-brand-primary rounded-full text-sm font-medium border border-brand-primary/20 backdrop-blur-sm">
                 Enterprise Transformation Services
               </span>
             </div>
            <h1 className="text-[2.5rem] sm:text-[3rem] lg:text-[4rem] font-semibold text-foreground mb-6 leading-tight animate-fade-in font-montserrat">
              Engineer Resilience.{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Modernize for Tomorrow.
              </span>
            </h1>
            <p className="text-lg text-foreground/85 mb-8 leading-relaxed font-light animate-slide-up font-montserrat max-w-4xl">
              Transform mission-critical enterprise systems without operational disruption. We eliminate technical debt, implement scalable architectures, and embed engineering excellence to future-proof your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-scale-in">
              <Button
                variant="btnPrimary"
                size="xl"
                className="min-w-[280px]"
                onClick={() => window.open("https://calendly.com/vaughn-soratos-indexnine", "_blank")}
              >
                Schedule a Modernization Assessment
              </Button>
              <Button
                variant="btnSecondary"
                size="xl"
                className="min-w-[280px]"
                onClick={() => document.getElementById("ai-audit")?.scrollIntoView({ behavior: "smooth" })}
              >
                Explore AI Risk Audits
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="container mx-auto px-6 max-w-4xl text-center">
            <h2 className="text-3xl lg:text-4xl font-semibold text-foreground-dark mb-6">
                Your Technology is Your Business. 
                <span className="text-brand-primary block">Is It Ready for the Future?</span>
            </h2>
            <div className="text-lg text-foreground-dark-muted leading-relaxed space-y-6">
                <p>
                    In the enterprise world, the very systems that brought you success can become the anchors that hold you back. Technical debt slows innovation, legacy platforms create security risks, and inefficient processes burn resources, preventing you from competing effectively.
                </p>
                <p>
                    The Enterprise Studio was designed to solve these challenges head-on. We provide the strategic consulting, deep technical expertise, and battle-tested frameworks to modernize your technology, optimize your processes, and transform your engineering organization into a powerful engine for growth.
                </p>
            </div>
        </div>
      </section>

      {/* Our Enterprise Offerings Section */}
      <section className={`py-24 lg:py-32 bg-gray-50 ${styles.strBg1}`}>
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-semibold text-foreground-dark">
              A Full-Spectrum Partner for{" "}
              <span className="text-brand-primary">Enterprise Transformation</span>
            </h2>
            <p className="text-xl text-foreground-dark/80 mt-4 max-w-3xl mx-auto">
              We offer a suite of services designed to address the most critical challenges facing modern enterprises.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 text-left">
              <RefreshCw className="w-10 h-10 text-brand-primary mb-4"/>
              <h3 className="text-xl font-semibold text-foreground-dark mb-2">Product Modernization</h3>
              <p className="text-foreground-dark/80 mb-4">
                Transform legacy monoliths into scalable, cloud-native architectures. Our phased migration approach ensures minimal disruption while maximizing business value.
              </p>
              <div className="space-y-2">
                <h4 className="font-semibold text-foreground-dark text-sm">Key Services:</h4>
                <ul className="text-sm text-foreground-dark/80 space-y-1">
                  <li>• Monolith to Microservices Migration</li>
                  <li>• Cloud-Native Development</li>
                  <li>• Technology Stack Upgrades</li>
                  <li>• Performance Optimization</li>
                </ul>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 text-left">
              <Shield className="w-10 h-10 text-brand-primary mb-4"/>
              <h3 className="text-xl font-semibold text-foreground-dark mb-2">QAE & Automation</h3>
              <p className="text-foreground-dark/80 mb-4">
                Embed quality into every stage of your development lifecycle with robust test automation frameworks and comprehensive performance testing.
              </p>
              <div className="space-y-2">
                <h4 className="font-semibold text-foreground-dark text-sm">Key Services:</h4>
                <ul className="text-sm text-foreground-dark/80 space-y-1">
                  <li>• Test Automation Services</li>
                  <li>• Performance Testing</li>
                  <li>• QA Process Improvement</li>
                  <li>• Security Testing</li>
                </ul>
              </div>
            </div>
            
            <div id="ai-audit" className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 text-left">
              <Eye className="w-10 h-10 text-brand-primary mb-4"/>
              <h3 className="text-xl font-semibold text-foreground-dark mb-2">AI Audit & Risk Management</h3>
              <p className="text-foreground-dark/80 mb-4">
                Comprehensive AI audits that assess viability, security, and ethical implications. Strategic approach to AI adoption with proper governance frameworks.
              </p>
              <div className="space-y-2">
                <h4 className="font-semibold text-foreground-dark text-sm">Key Services:</h4>
                <ul className="text-sm text-foreground-dark/80 space-y-1">
                  <li>• AI Strategy Consulting</li>
                  <li>• AI Readiness Assessment</li>
                  <li>• AI Governance & Risk Audit</li>
                  <li>• AI Implementation Roadmap</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Indexnine Difference Section */}
       <section className="py-24 lg:py-32 bg-white">
        <div className="container mx-auto px-6 max-w-5xl">
            <div className="text-center mb-16">
                 <h2 className="text-4xl lg:text-5xl font-semibold text-foreground-dark">The Indexnine Difference: <br/><span className="text-brand-primary">Practitioner-Led Transformation</span></h2>
                 <p className="text-xl text-foreground-dark/80 mt-4 max-w-3xl mx-auto">
                    Technology is only half the battle. Our approach is rooted in a culture of process maturity and hands-on expertise, ensuring strategy translates into reality.
                 </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              <div className="bg-gradient-to-r from-brand-primary/5 to-brand-purple/5 p-8 rounded-2xl border-l-4 border-brand-primary">
                <Settings className="w-12 h-12 text-brand-primary mb-4"/>
                <h3 className="text-xl font-semibold text-foreground-dark mb-4">Process Maturity Culture</h3>
                <p className="text-foreground-dark/80">
                  We establish clear communication cadences, robust project management frameworks, and risk mitigation strategies to ensure predictable outcomes, transparent collaboration, and continuous improvement across your organization.
                </p>
              </div>
              
              <div className="bg-gradient-to-r from-brand-primary/5 to-brand-purple/5 p-8 rounded-2xl border-l-4 border-brand-primary">
                <Users className="w-12 h-12 text-brand-primary mb-4"/>
                <h3 className="text-xl font-semibold text-foreground-dark mb-4">Active Practitioners</h3>
                <p className="text-foreground-dark/80">
                  Our strategists and architects are active builders, not just theorists. We combine high-level strategic planning with deep, hands-on engineering expertise to deliver practical, actionable solutions.
                </p>
              </div>
            </div>
        </div>
      </section>
      
      {/* Case Studies / Actionable Content */}
      <section className="py-24 lg:py-32 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-semibold text-foreground-dark">
              Engineering Transformation <span className="text-brand-primary">in Action</span>
            </h2>
            <p className="text-xl text-foreground-dark/80 mt-4 max-w-3xl mx-auto">
              Real-world examples of how we've helped enterprises modernize and scale.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <RefreshCw className="w-10 h-10 text-brand-primary mb-4"/>
              <h3 className="text-xl font-semibold text-foreground-dark mb-4">
                From Monolith to Market Leader: Modernizing an Enterprise Insurance Platform
              </h3>
              <p className="text-foreground-dark/80 mb-6">
                Learn how we re-architected a critical legacy system, reducing latency by 60% and enabling the rapid launch of new product lines.
              </p>
              <Button variant="outline" size="sm" asChild>
                <Link to="/insights/case-studies/genesys">
                  Read the Case Study <ArrowRight className="w-4 h-4 ml-2"/>
                </Link>
              </Button>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <Shield className="w-10 h-10 text-brand-primary mb-4"/>
              <h3 className="text-xl font-semibold text-foreground-dark mb-4">
                Achieving 95% Test Automation for a Global Logistics Provider
              </h3>
              <p className="text-foreground-dark/80 mb-6">
                Discover our process for building a comprehensive QA automation suite that cut regression testing time from two weeks to four hours.
              </p>
              <Button variant="outline" size="sm">
                Read the Case Study <ArrowRight className="w-4 h-4 ml-2"/>
              </Button>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <FileText className="w-10 h-10 text-brand-primary mb-4"/>
              <h3 className="text-xl font-semibold text-foreground-dark mb-4">
                The CTO's Guide to AI Risk Management
              </h3>
              <p className="text-foreground-dark/80 mb-6">
                A framework for assessing and mitigating the technical, operational, and ethical risks of implementing AI solutions in the enterprise.
              </p>
              <Button variant="outline" size="sm">
                Download Whitepaper <Download className="w-4 h-4 ml-2"/>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-4xl lg:text-5xl font-semibold mb-12 text-foreground-dark text-center">
            Your Enterprise Questions, Answered
          </h2>
          <div className="space-y-4">
            {faqData.map((faq, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <h3 className="text-lg font-semibold text-foreground-dark">{faq.question}</h3>
                  {expandedFAQ === index ? (
                    <ChevronUp className="w-6 h-6 text-brand-primary" />
                  ) : (
                    <ChevronDown className="w-6 h-6 text-gray-500" />
                  )}
                </button>
                {expandedFAQ === index && (
                  <div className="px-6 pb-6 border-t border-gray-100">
                    <p className="text-foreground-dark/80 leading-relaxed pt-4">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className={`py-24 lg:py-32 text-white ${styles.ctaBg}`}>
        <div className="container mx-auto px-6 lg:px-8 text-center max-w-4xl">
          <h2 className="text-4xl lg:text-5xl font-semibold mb-6 text-white">
            Build a More Resilient, Scalable, and Innovative Future.
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Let's transform your technology from a cost center into your greatest competitive advantage. Schedule a complimentary assessment with our enterprise architects today.
          </p>
          <Button
            variant="btnSecondary"
            size="xl"
            className="min-w-[300px]"
            onClick={() => window.open("https://calendly.com/vaughn-soratos-indexnine", "_blank")}
          >
            Schedule Your Modernization Assessment <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Enterprise;