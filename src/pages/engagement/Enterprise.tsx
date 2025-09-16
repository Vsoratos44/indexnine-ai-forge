import React from "react";
import { Button } from "@/components/ui/button";
import { CardGlass } from "@/components/ui/CardGlass";
import { Section } from "@/components/ui/section";
import {
  ArrowRight,
  Shield,
  RefreshCw,
  Eye,
  Users,
  Settings,
  Clock,
  Download,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LivingVoidBackground from "@/components/LivingVoidBackground";
import styles from "../../assets/css/stylesheet.module.css";
import { useSEO } from "@/hooks/useSEO";

const Enterprise = () => {
  useSEO({
    title: "Indexnine Enterprise Studio | For Enterprise SMBs and F1000",
    description: "",
    keywords: "",
    canonicalUrl: "",
    ogImage: "",
    ogType: "website",
  });
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-[680px] overflow-hidden bg-black">
        <LivingVoidBackground />
        <div className="relative z-10 container mx-auto px-6 pt-48 pb-24">
          <div className="max-w-4xl mx-auto text-center lg:text-left ml-0">
            <h1 className="text-[2.5rem] sm:text-[3rem] lg:text-[4rem] xl:text-[4rem] font-semibold text-foreground mb-6 leading-[1.25]  animate-fade-in font-montserrat">
              Engineer Resilience.{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Modernize for Tomorrow
              </span>
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-foreground/85 mb-8 leading-relaxed font-light animate-slide-up font-montserrat max-w-4xl">
              The Indexnine Enterprise Studio is your strategic partner for
              transforming mission-critical systems. We help you eliminate
              technical debt, scale with confidence, and embed a culture of
              engineering excellence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-scale-in">
              <Button
                variant="btnPrimary"
                size="xl"
                className="min-w-[280px]"
                onClick={() => {
                  window.open(
                    "https://calendly.com/vaughn-soratos-indexnine",
                    "_blank"
                  );
                }}
              >
                Schedule a Modernization Assessment
              </Button>
              <Button
                variant="btnSecondary"
                size="xl"
                className="min-w-[280px]"
              >
                Explore our AI Risk Audit Framework{" "}
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Section
        variant="light"
        containerSize="6xl"
        className={`pb-24 lg:pb-32 bg-[#fff] relative overflow-hidden `}
      >
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold mb-6 text-foreground-dark ">
            Your Technology is Your Business.{" "}
            <span className="text-brand-primary leading-[1.55]">
              Is It Ready for the Future?
            </span>
          </h2>
          <div className="text-base sm:text-lg text-foreground-dark-muted leading-relaxed space-y-4 sm:space-y-6">
            <p>
              In the enterprise world, the systems that brought you success can
              become the anchors that hold you back. Technical debt slows
              innovation, legacy platforms create security risks, and
              inefficient processes burn resources.
            </p>
            <p>
              The Enterprise Studio is designed to address these challenges
              head-on. We provide the strategic consulting, deep technical
              expertise, and proven frameworks necessary to modernize your
              technology, optimize your processes, and ensure your engineering
              organization is a powerful engine for growth.
            </p>
          </div>
        </div>
      </Section>

      {/* Our Enterprise Offerings Section */}
      <section className={`pb-24 lg:pb-32 bg-[#fff] relative overflow-hidden `}>
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold mb-6 text-foreground-dark ">
              A Full-Spectrum Partner for{" "}
              <span className="text-brand-primary leading-[1.35]">
                Enterprise Transformation
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-foreground-dark-muted max-w-4xl mx-auto px-4">
              We offer a suite of services designed to address the most critical
              challenges facing modern enterprises.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <CardGlass className="group p-6 sm:p-8">
              <div
                className={`relative w-20 h-20 flex mb-6 items-center justify-center transition-all ${styles.icnBg}`}
              >
                <RefreshCw className="w-8 h-8 text-brand-primary" />
              </div>
              <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-foreground-dark mb-3 sm:mb-4 leading-tight">
                Product Modernization
              </h3>
              <p className="text-sm sm:text-base text-foreground-dark-muted mb-4 sm:mb-6 leading-relaxed">
                Is your core application a monolith that's difficult to update
                and scale? Our Legacy System Modernization services are the
                answer. We meticulously analyze your existing architecture,
                devise a phased migration strategy to modern, cloud-native
                technologies, and execute it with minimal disruption.
              </p>
              <div className="space-y-2">
                <h4 className="font-semibold text-foreground-dark text-sm sm:text-base">
                  Offerings:
                </h4>
                <ul className="text-xs sm:text-sm text-foreground-dark-muted space-y-1">
                  <li>• Monolith to Microservices Migration</li>
                  <li>• Cloud-Native Development</li>
                  <li>• Technology Stack Upgrades</li>
                </ul>
              </div>
            </CardGlass>

            <CardGlass className="group p-6 sm:p-8">
              <div
                className={`relative w-20 h-20 flex mb-6 items-center justify-center transition-all ${styles.icnBg}`}
              >
                <Shield className="w-8 h-8 text-brand-primary" />
              </div>
              <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-foreground-dark mb-3 sm:mb-4 leading-tight">
                QAE & Automation
              </h3>
              <p className="text-sm sm:text-base text-foreground-dark-muted mb-4 sm:mb-6 leading-relaxed">
                In the enterprise, quality is non-negotiable. Our Quality
                Assurance Engineering (QAE) services go beyond simple testing.
                We embed quality into every stage of the development lifecycle,
                implementing robust Test Automation frameworks and performance
                testing protocols.
              </p>
              <div className="space-y-2">
                <h4 className="font-semibold text-foreground-dark text-sm sm:text-base">
                  Offerings:
                </h4>
                <ul className="text-xs sm:text-sm text-foreground-dark-muted space-y-1">
                  <li>• Test Automation Services</li>
                  <li>• Performance Testing</li>
                  <li>• QA Process Improvement</li>
                  <li>• Security Testing</li>
                </ul>
              </div>
            </CardGlass>

            <CardGlass className="group p-6 sm:p-8">
              <div
                className={`relative w-20 h-20 flex mb-6 items-center justify-center transition-all ${styles.icnBg}`}
              >
                <Eye className="w-8 h-8 text-brand-primary" />
              </div>
              <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-foreground-dark mb-3 sm:mb-4 leading-tight">
                AI Audit & Risk Management
              </h3>
              <p className="text-sm sm:text-base text-foreground-dark-muted mb-4 sm:mb-6 leading-relaxed">
                Adopting AI without proper governance is a significant risk.
                With up to 70% of AI projects failing to show ROI, a strategic
                approach is essential. Our AI Consulting Services include a
                comprehensive AI Audit that assesses the viability, security,
                and ethical implications of your AI initiatives.
              </p>
              <div className="space-y-2">
                <h4 className="font-semibold text-foreground-dark text-sm sm:text-base">
                  Offerings:
                </h4>
                <ul className="text-xs sm:text-sm text-foreground-dark-muted space-y-1">
                  <li>• AI Strategy Consulting</li>
                  <li>• AI Readiness Assessment</li>
                  <li>• AI Governance & Risk Audit</li>
                </ul>
              </div>
            </CardGlass>
          </div>
        </div>
      </section>

      <div className="bg-gradient-to-t from-[#fff] via-[#fcfcfc] to-[#fff] text-foreground">
        <div className={`${styles.sectionBgData}`}>
          {/* Section 1 */}
          <Section
            variant="light"
            containerSize="6xl"
            className="bg-transparent lg:pt-0 pt-0"
          >
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold mb-6 text-foreground-dark font-montserrat">
                The Indexnine Difference:{" "}
                <span className="text-brand-primary leading-[1.35]">
                  A Culture of Process Maturity
                </span>
              </h2>
            </div>

            <div className="max-w-4xl mx-auto text-center">
              <CardGlass variant="light" className="mb-8">
                <Settings className="w-16 h-16 text-brand-primary mx-auto mb-6" />
                <p className="text-lg text-foreground-dark-muted leading-relaxed">
                  Technology is only half the battle. The true differentiator
                  for long-term success is a mature, repeatable process. For all
                  our enterprise engagements, we focus on instilling a culture
                  of process maturity. We establish clear communication
                  cadences, robust project management frameworks, and risk
                  mitigation strategies to ensure predictable outcomes,
                  transparent collaboration, and continuous improvement across
                  your organization.
                </p>
              </CardGlass>
            </div>
          </Section>

          {/* Section 2 */}
          <Section
            variant="alternate"
            containerSize="6xl"
            className="bg-transparent lg:pt-0 pt-0"
          >
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold mb-6 text-foreground-dark font-montserrat">
                Engineering Transformation{" "}
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  in Action
                </span>
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <CardGlass className="group">
                <div
                  className={`relative w-20 h-20 flex mb-6 items-center justify-center transition-all ${styles.icnBg}`}
                >
                  <RefreshCw className="w-8 h-8 text-brand-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground-dark mb-4">
                  From Monolith to Market Leader: Modernizing an Enterprise
                  Insurance Platform
                </h3>
                <p className="text-foreground-dark-muted mb-6">
                  Learn how we re-architected a critical legacy system, reducing
                  latency by 60% and enabling the rapid launch of new product
                  lines.
                </p>
                <Button variant="btnLink" size="link">
                  Read the Case Study{" "}
                  <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                </Button>
              </CardGlass>

              <CardGlass className="group">
                <div
                  className={`relative w-20 h-20 flex mb-6 items-center justify-center transition-all ${styles.icnBg}`}
                >
                  <Shield className="w-8 h-8 text-brand-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground-dark mb-4">
                  Achieving 95% Test Automation for a Global Logistics Provider
                </h3>
                <p className="text-foreground-dark-muted mb-6">
                  Discover our process for building a comprehensive QA
                  automation suite that cut regression testing time from two
                  weeks to four hours.
                </p>
                <Button variant="btnLink" size="link">
                  Read the Case Study{" "}
                  <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                </Button>
              </CardGlass>

              <CardGlass className="group">
                <div
                  className={`relative w-20 h-20 flex mb-6 items-center justify-center transition-all ${styles.icnBg}`}
                >
                  <Eye className="w-8 h-8 text-brand-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground-dark mb-4">
                  The CTO's Guide to AI Risk Management
                </h3>
                <p className="text-foreground-dark-muted mb-6">
                  A framework for assessing and mitigating the technical,
                  operational, and ethical risks of implementing AI solutions in
                  the enterprise.
                </p>
                <Button variant="btnLink" size="link">
                  Download the Whitepaper <Download className="w-5 h-5 ml-1" />
                </Button>
              </CardGlass>
            </div>
          </Section>
        </div>
      </div>

      {/* Final CTA Section */}
      <section className={`py-24 lg:py-32 text-white ${styles.ctaBg}`}>
        <div className="container mx-auto px-6 lg:px-8 text-center max-w-6xl">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold mb-6 text-foreground-white">
            <span className="leading-[1.4]">
              Build a More Resilient, Scalable, and Innovative Future.
            </span>
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Let's transform your technology from a cost center into your
            greatest competitive advantage. Schedule a complimentary,
            no-obligation assessment with our enterprise architects today.
          </p>
          <Button
            variant="btnSecondary"
            size="lg"
            onClick={() => {
              window.open(
                "https://calendly.com/vaughn-soratos-indexnine",
                "_blank"
              );
            }}
          >
            Schedule Your Modernization Assessment
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Enterprise;
