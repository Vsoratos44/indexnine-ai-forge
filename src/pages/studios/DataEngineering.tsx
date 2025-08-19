import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Database, Cloud, Shield, BarChart3, CheckCircle } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LivingVoidBackground from "@/components/LivingVoidBackground";
import styles from "../../assets/css/stylesheet.module.css";

import VelocityIcon from "../../assets/images/accel-velocity.svg";
import QuoteIcon from "../../assets/images/quote.svg";

import {
  ServiceSchema,
  WebPageSchema,
  BreadcrumbSchema,
} from "@/components/SEOStructuredData";

const DataEngineering = () => {
  return (
    <div className="min-h-screen bg-background-dark">
      <ServiceSchema
        name="Data Engineering & Platform Modernization"
        description="Build an AI-ready data foundation. We design and implement modern data platforms using Snowflake and more to unlock analytics, drive efficiency, and prepare your data for what's next."
        serviceType="Data Engineering"
      />
      <WebPageSchema
        title="Data Engineering & Platform Modernization | IndexNine Data Studio"
        description="Build an AI-ready data foundation. We design and implement modern data platforms using Snowflake and more to unlock analytics, drive efficiency, and prepare your data for what's next."
        url="https://yoursite.lovable.app/studios/data-engineering"
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://yoursite.lovable.app/" },
          { name: "Studios", url: "https://yoursite.lovable.app/studios" },
          {
            name: "Data Engineering",
            url: "https://yoursite.lovable.app/studios/data-engineering",
          },
        ]}
      />
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-[90vh] overflow-hidden bg-background-dark">
        {/* Three.js Living Void Background */}
        <LivingVoidBackground />

        {/* Content - Precisely positioned */}
        <div className="relative z-10 container mx-auto px-6 pt-48 pb-24">
          <div className="max-w-3xl mx-auto text-center lg:text-left ml-0">
            <div className="mb-6">
              <span className="inline-block px-6 py-3 bg-brand-primary/10 text-brand-primary rounded-full text-sm font-medium border border-brand-primary/20 backdrop-blur-sm">
                IndexNine Data
              </span>
            </div>
            <h1 className="text-[2.5rem] sm:text-[3rem] lg:text-[4rem] xl:text-[4rem] font-semibold text-foreground mb-6 leading-[1.25]  animate-fade-in font-montserrat">
              Unlock Modern <br />
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Analytics.
              </span>
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl text-foreground/85 mb-12 max-w-4xl leading-relaxed font-light animate-slide-up">
              We architect and build intelligent data platforms that drive
              clarity, efficiency, and growth. Turn your data into your most
              valuable asset.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-scale-in">
              <Button
                variant="hero"
                size="xl"
                className="min-w-[280px] rounded-full"
              >
                Build Your Data Roadmap
              </Button>
              <Button
                variant="hero-secondary"
                size="xl"
                className="min-w-[240px] rounded-full"
              >
                See Our Solutions
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Data Problem Section */}
      <section className="pt-24 lg:pt-32 bg-[#fff]">
        <div className="container mx-auto px-6">
          <div className="max-w-8xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl lg:text-3xl font-semibold text-foreground-dark mb-6 text-foreground-dark leading-[1.25]">
                Is Your Data Working For You, or Against You?
              </h2>
              <p className="text-lg text-foreground-dark-muted">
                Siloed systems, unreliable reports, and slow queries don't just
                frustrate teams—they cripple innovation. A weak data foundation
                is the silent killer of transformation initiatives and the
                primary reason digital projects fail to deliver ROI.
              </p>
            </div>
            <div className="text-center lg:text-left">
              <div className="inline-block">
                <div className="text-8xl md:text-7xl font-semibold text-brand-primary mb-4">
                  85%
                </div>
                <h3 className="text-2xl font-semibold text-foreground-dark mb-3">
                  Of AI Projects Fail
                </h3>
                <p className="text-foreground-dark-muted">
                  ...primarily due to inadequate data quality and
                  infrastructure. Your AI strategy is only as strong as the data
                  it's built on.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="bg-gradient-to-t from-[#fcfcfc] via-[#AAB0FF] to-[#ffffff] text-foreground">
        <div className={`py-24 lg:py-32 relative ${styles.sectionBgData}`}>
          {/* Data Blueprint Section */}
          <section id="data-blueprint">
            <div className="container mx-auto px-6">
              <div className="max-w-8xl mx-auto">
                <div className="text-center mb-12">
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold mb-6 text-foreground-dark">
                    Our Blueprint for an AI-Ready Data Foundation{" "}
                    <span className="text-brand-primary leading-[1.4]">
                      Answered
                    </span>
                  </h2>
                  <p className="text-lg text-foreground-dark/80 max-w-3xl mx-auto">
                    We transform your data from a fragmented resource into a
                    strategic asset with a proven, three-step methodology that
                    delivers results.
                  </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                  <div className="relative overflow-hidden bg-[#ffffff75] border border-[#ffffff39] rounded-2xl p-8 hover:shadow-glass-sm transition-all duration-500 transform hover:scale-102 hover:-translate-y-2 animate-fade-in group text-left">
                    <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/8 via-transparent to-brand-purple/8 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-white/10 rounded-2xl opacity-50"></div>
                    <div className="relative w-20 h-20 ml-0 mb-6">
                      <img src={VelocityIcon} alt="" />
                    </div>
                    <h3 className="relative text-xl font-bold mb-4 text-foreground-dark">
                      Build a Unified Data Foundation
                    </h3>
                    <p className="relative text-foreground-dark/80">
                      We centralize your disparate data sources into a scalable,
                      cloud-native data platform, creating a single source of
                      truth to break down silos.
                    </p>
                  </div>

                  <div className="relative overflow-hidden bg-[#ffffff75] border border-[#ffffff39] rounded-2xl p-8 hover:shadow-glass-sm transition-all duration-500 transform hover:scale-102 hover:-translate-y-2 animate-fade-in group text-left">
                    <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/8 via-transparent to-brand-purple/8 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-white/10 rounded-2xl opacity-50"></div>
                    <div className="relative w-20 h-20 ml-0 mb-6">
                      <img src={VelocityIcon} alt="" />
                    </div>
                    <h3 className="relative text-xl font-bold mb-4 text-foreground-dark">
                      Enhance Data Quality & Context
                    </h3>
                    <p className="relative text-foreground-dark/80">
                      Our intelligent data integration pipelines clean,
                      validate, and enrich your data with business context,
                      making it ready for reliable AI consumption.
                    </p>
                  </div>

                  <div className="relative overflow-hidden bg-[#ffffff75] border border-[#ffffff39] rounded-2xl p-8 hover:shadow-glass-sm transition-all duration-500 transform hover:scale-102 hover:-translate-y-2 animate-fade-in group text-left">
                    <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/8 via-transparent to-brand-purple/8 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-white/10 rounded-2xl opacity-50"></div>
                    <div className="relative w-20 h-20 ml-0 mb-6">
                      <img src={VelocityIcon} alt="" />
                    </div>
                    <h3 className="relative text-xl font-bold mb-4 text-foreground-dark">
                      Establish Robust Governance
                    </h3>
                    <p className="relative text-foreground-dark/80">
                      We implement comprehensive data governance, quality
                      checks, and security frameworks to ensure your data is
                      accurate, compliant, and secure.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Data Foundation Roadmap Section */}
          <section id="data-roadmap" className="pt-24">
            <div className="container mx-auto grid md:grid-cols-2 gap-4">
              <div className="max-w-4xl mx-auto text-left">
                <h2 className="pt-4 text-2xl md:text-3xl font-semibold mb-6 text-foreground-dark">
                  Your Blueprint for Data-Driven Success
                </h2>
                <p className="text-lg text-foreground-dark/80 mb-8">
                  Our <strong>Data Foundation Roadmap</strong> is a fixed-scope,
                  4 to 6-week strategic engagement designed to give you a
                  comprehensive, actionable plan for modernizing your data
                  infrastructure.
                </p>
                <Button
                  variant="hero"
                  size="xl"
                  className="min-w-[280px] rounded-full mb-4"
                >
                  Scope Your Roadmap
                </Button>
                <div className="text-lg font-medium text-foreground-dark mb-8">
                  Investment: Starting at $30,000
                </div>
              </div>
              <div className="max-w-4xl mx-auto text-center">
                <div className={`rounded-2xl p-1 text-left ${styles.bordRb}`}>
                  <div className="bg-[#fff] rounded-2xl py-6 px-8">
                    <h4 className="text-xl font-semibold text-foreground-dark mb-6">
                      Key Deliverables Include:
                    </h4>
                    <div className="grid md:grid-cols-2 gap-4">
                      {[
                        "Current State Analysis & Architecture Audit",
                        "Future State Cloud-Native Blueprint",
                        "Vendor-Agnostic Tooling Recommendation",
                        "Phased Implementation Plan & Timelines",
                        "Detailed Business Case & ROI Model",
                      ].map((deliverable, index) => (
                        <div key={index} className="flex items-center gap-3">
                          <CheckCircle className="w-5 h-5 text-brand-primary flex-shrink-0" />
                          <span className="text-foreground-dark/80">
                            {deliverable}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      {/* Data Solutions in Action Section */}
      <section
        id="data-solutions"
        className="pb-24 lg:pb-32 bg-gradient-to-t from-[#fff] to-[#fcfcfc] relative overflow-hidden"
      >
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/6 w-96 h-96 bg-brand-primary/8 rounded-full blur-3xl animate-float"></div>
          <div
            className="absolute bottom-1/4 right-1/6 w-80 h-80 bg-brand-purple/6 rounded-full blur-3xl animate-float"
            style={{ animationDelay: "2s" }}
          ></div>
        </div>

        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <div
            className={`relative max-w-8xl mx-auto ${styles.sectionBgData2}`}
          >
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold mb-6 text-foreground-dark">
                Data Solutions{" "}
                <span className="text-brand-primary leading-[1.4]">
                  in Action
                </span>
              </h2>
              <p className="text-xl text-foreground-dark/80 mb-24 leading-relaxed font-montserrat">
                Real-world applications delivering measurable results across
                diverse industries.
              </p>
            </div>
            <div className="bg-[#fff] rounded-3xl p-6 lg:p-8 max-w-3xl mx-auto">
              <div className="mb-12">
                {/* Legacy Modernization */}

                <div className="space-y-6">
                  <div className="mt-0">
                    <span className="inline-block px-6 py-3 bg-brand-primary/10 text-brand-primary rounded-full text-sm font-medium border border-brand-primary/20">
                      LEGACY SYSTEM MODERNIZATION
                    </span>
                  </div>
                  <h3 className="text-2xl font-semibold text-foreground-dark">
                    From Legacy Chaos to Cloud-Native Clarity
                  </h3>
                  <p className="text-foreground-dark/80 mb-6">
                    A North American parking operations leader was struggling
                    with legacy systems unable to process 15B+ annual records in
                    real-time. We engineered a seamless migration to a modern
                    data platform on AWS and Snowflake.
                  </p>

                  <div className="grid grid-cols-2 gap-6">
                    <Card className="p-6 text-center bg-gradient-to-br from-[#1c1c1c] via-[#3a3a3a] to-[#4D4E4F] shadow-lg">
                      <CardContent className="p-0">
                        <div className="text-3xl font-semibold text-white mb-2">
                          72%
                        </div>
                        <p className="text text-foreground-white/80">
                          Increase in Booking Efficiency
                        </p>
                      </CardContent>
                    </Card>
                    <Card className="p-6 text-center bg-gradient-to-br from-[#1c1c1c] via-[#3a3a3a] to-[#4D4E4F] shadow-lg">
                      <CardContent className="p-0">
                        <div className="text-3xl font-semibold text-white mb-2">
                          35%
                        </div>
                        <p className="text text-foreground-white/80">
                          Annual Infrastructure Savings
                        </p>
                      </CardContent>
                    </Card>
                  </div>

                  <blockquote className="bg-[#F1F2FF] flex rounded-xl">
                    <div className="relative w-24 h-24 md:w-36 md:h-36  mx-6">
                      <img src={QuoteIcon} alt="" />
                    </div>
                    <div className="p-8">
                      <p className="text-foreground-dark mb-2">
                        "IndexNine transformed our data capabilities from a cost
                        center to a strategic advantage. Our teams are now
                        making decisions based on data that's hours, not weeks,
                        old."
                      </p>
                      <span className="text-sm text-foreground-dark/70 font-medium">
                        — Director of Analytics, [Client Name]
                      </span>
                    </div>
                  </blockquote>
                </div>
              </div>

              <div className="mt-16">
                <div className="space-y-6 lg:order-2">
                  <div className="mb-6">
                    <span className="inline-block px-6 py-3 bg-brand-primary/10 text-brand-primary rounded-full text-sm font-medium border border-brand-primary/20">
                      AI-READY DATA LAKES
                    </span>
                  </div>
                  <h3 className="text-2xl font-semibold text-foreground-dark">
                    From Scattered Silos to a Single Source of Truth
                  </h3>
                  <p className="text-foreground-dark/80 mb-6">
                    A global workplace culture leader needed to unify 15+ years
                    of fragmented data to power AI-driven decision-making. We
                    built a unified Snowflake data lake and integrated Cortex AI
                    for NLP-based analytics.
                  </p>

                  <div className="grid grid-cols-2 gap-6">
                    <Card className="p-6 text-center bg-gradient-to-br from-[#1c1c1c] via-[#3a3a3a] to-[#4D4E4F] shadow-lg">
                      <CardContent className="p-0">
                        <div className="text-3xl font-semibold text-white mb-2">
                          96x
                        </div>
                        <p className="text text-foreground-white/80">
                          Faster Data Preparation
                        </p>
                      </CardContent>
                    </Card>
                    <Card className="p-6 text-center bg-gradient-to-br from-[#1c1c1c] via-[#3a3a3a] to-[#4D4E4F] shadow-lg">
                      <CardContent className="p-0">
                        <div className="text-3xl font-semibold text-white mb-2">
                          48
                        </div>
                        <p className="text text-foreground-white/80">
                          Report Latency (Hours)
                        </p>
                      </CardContent>
                    </Card>
                  </div>

                  <blockquote className="bg-[#F1F2FF] flex rounded-xl">
                    <div className="relative w-24 h-24 md:w-36 md:h-36  mx-6">
                      <img src={QuoteIcon} alt="" />
                    </div>
                    <div className="p-8">
                      <p className="text-foreground-dark mb-2">
                        "The data foundation IndexNine built is the backbone of
                        our new AI features. We're now able to develop and
                        deploy models in a fraction of the time."
                      </p>
                      <span className="text-sm text-foreground-dark/70 font-medium">
                        — Head of Data Science, [Client Name]
                      </span>
                    </div>
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default DataEngineering;
