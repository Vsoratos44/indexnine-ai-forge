import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { useSEO } from "@/hooks/useSEO";
import styles from "../../assets/css/stylesheet.module.css";

import {
  ServiceSchema,
  WebPageSchema,
  BreadcrumbSchema,
} from "@/components/SEOStructuredData";
import {
  Target,
  Shield,
  CheckCircle,
  ChevronDown,
  ChevronUp,
  DollarSign,
  Handshake,
  TrendingUp,
  Users,
  AlertTriangle,
  Zap,
  BarChart3,
  Clock,
  ArrowRight,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LivingVoidBackground from "@/components/LivingVoidBackground";

const OutcomeBased = () => {
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setExpandedFAQ(expandedFAQ === index ? null : index);
  };

  // Comprehensive SEO implementation
  useSEO({
    title: "Outcome-Based Engagements & Success Fee Models | IndexNine",
    description: "Align your success with ours. IndexNine's outcome-based and success fee models de-risk your investment and guarantee ROI by tying our success directly to your business KPIs.",
    canonicalUrl: "https://www.indexnine.com/engagement/outcome-based",
    keywords: "outcome-based engagement, success fee model, performance-based pricing, technology partnership agreement, shared-risk model, engineering partner, guaranteed ROI, KPI-driven development, software development partner, value-based pricing",
    ogImage: "https://www.indexnine.com/images/og-outcome-based.png",
  });

  return (
    <div className="min-h-screen bg-background">
      <ServiceSchema
        name="Outcome-Based Engagements & Success Fee Models | IndexNine"
        description="Partnership model where success is shared. De-risk your investment with outcome-based engagements that tie our compensation directly to your business KPIs and measurable results."
        serviceType="Technology Partnership"
      />
      <WebPageSchema
        title="Outcome-Based Engagements & Success Fee Models | IndexNine"
        description="Align your success with ours. IndexNine's outcome-based and success fee models de-risk your investment and guarantee ROI by tying our success directly to your business KPIs."
        url="https://www.indexnine.com/engagement/outcome-based"
      />
      <BreadcrumbSchema
        items={[
          { name: "Engagement Models", url: "https://www.indexnine.com/engagement" },
          {
            name: "Outcome-Based Partnerships",
            url: "https://www.indexnine.com/engagement/outcome-based",
          },
        ]}
      />

      {/* Structured Data for FAQ */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "Is this model more expensive than a traditional contract?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Potentially, yes—and that's a good thing. If we significantly exceed your goals and generate massive value for your business, our success fee will reflect that. However, the foundational cost is often lower, and you are protected from paying the full amount for a project that doesn't meet its objectives. You only pay for exceptional results when you get them."
              }
            },
            {
              "@type": "Question",
              "name": "How do you handle factors outside of your control that might affect the KPIs?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "This is a key part of the initial 'Define Success' workshop. We work with you to identify external dependencies (e.g., marketing spend, sales team performance) and build them into the agreement. The goal is to isolate the impact of our engineering and product work as precisely as possible."
              }
            },
            {
              "@type": "Question",
              "name": "What if our business goals or KPIs need to change mid-project?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "We understand that markets evolve. Our agreements are designed to be agile. We have a clear change-control process that allows us to revisit and adjust the target KPIs and success fees if there is a significant pivot in business strategy, ensuring the partnership remains aligned."
              }
            },
            {
              "@type": "Question",
              "name": "What's the 'catch'?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "The only 'catch' is that this model requires a higher degree of upfront collaboration and trust. It's not a transactional, 'throw it over the wall' relationship. It requires both parties to be deeply invested in the process and committed to radical transparency. We are selective about the partners we engage with in this model to ensure a high probability of mutual success."
              }
            }
          ]
        })}
      </script>

      <Header />

      {/* Hero Section */}
      <section className="relative min-h-[780px] overflow-hidden bg-black">
        {/* Three.js Living Void Background */}
        <LivingVoidBackground />

        {/* Content - Precisely positioned */}
        <div className="relative z-10 container mx-auto px-6 pt-48 pb-24">
          <div className="max-w-5xl mx-auto text-center lg:text-left ml-0">
            <div className="mb-6">
              <span className="inline-block px-6 py-3 bg-brand-primary/10 text-brand-primary rounded-full text-sm font-medium border border-brand-primary/20 backdrop-blur-sm">
                Outcome-Based Partnership Model
              </span>
            </div>
            <h1 className="text-[2.5rem] sm:text-[3rem] lg:text-[4rem] xl:text-[4rem] font-semibold text-foreground mb-6 leading-[1.25] animate-fade-in font-montserrat">
              Your Outcomes Are Our Contract: <br />
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                A Partnership Built on Shared Success
              </span>
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-foreground/85 mb-8 leading-relaxed font-light animate-slide-up font-montserrat">
              Stop paying for hours and start investing in outcomes. We're so confident in our ability to deliver measurable results that we put our own skin in the game—our success is contractually tied to yours.
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
                Book a Partnership Assessment Call
              </Button>
              <Button
                variant="btnSecondary"
                size="xl"
                className="min-w-[240px]"
                onClick={() =>
                  document
                    .getElementById("partnership-framework")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                See Our Framework
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* The Flaw in Traditional Model Section */}
      <section className="py-24 lg:py-32 bg-[#fff]">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-semibold text-foreground-dark mb-6 text-foreground-dark leading-[1.25]">
              The Flaw in the Traditional Model:{" "}
              <span className="text-brand-primary leading-[1.25]">
                Paying for Hours, Not Results
              </span>
            </h2>
            <p className="text-lg text-foreground-dark-muted max-w-6xl mb-8 mx-auto">
              The standard time-and-materials contract creates an inherent conflict of interest. It incentivizes inefficiency and penalizes velocity. The longer a project takes, the more the vendor makes. This vendor-client divide means you're constantly managing budgets and timelines instead of collaborating on strategy and innovation.
            </p>
            <p className="text-lg text-foreground-dark-muted max-w-6xl mb-0 mx-auto">
              <strong>It's like paying a personal trainer by the hour, regardless of whether you ever get in shape.</strong> We were founded to bridge that gap. We believe the ultimate measure of our work is its tangible impact on your business—increased revenue, improved user adoption, reduced operational costs, or faster market entry.
            </p>
          </div>
        </div>
      </section>

      {/* Partnership Principle Section */}
      <section className="pb-24 lg:pb-32 bg-[#fff]">
        <div className="container mx-auto px-6">
          <div className="max-w-8xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold mb-6 text-foreground-dark">
                The IndexNine Partnership Principle: Our Success is Your Success
              </h2>
              <p className="text-lg text-foreground-dark/80 max-w-4xl mx-auto">
                Our outcome-based model is the purest expression of our core values. It transforms the client-vendor dynamic into a true, unified partnership where risk and reward are shared.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="relative overflow-hidden bg-[#ffffff39] border border-[#00000019] rounded-2xl p-8 hover:shadow-glass-sm transition-all duration-500 transform hover:scale-102 hover:-translate-y-2 animate-fade-in group text-left">
                <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/5 via-transparent to-brand-purple/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div
                  className={`relative w-20 h-20 flex mb-6 items-center justify-center transition-all ${styles.icnBg}`}
                >
                  <Target className="w-8 h-8 text-brand-primary" />
                </div>
                <h3 className="relative text-xl font-semibold mb-4 text-foreground-dark">
                  Aligned Incentives
                </h3>
                <p className="relative text-foreground-dark/80">
                  We shift the conversation from "How much will this cost?" to "What business result are we trying to achieve, and how do we get there together?"
                </p>
              </div>

              <div className="relative overflow-hidden bg-[#ffffff39] border border-[#00000019] rounded-2xl p-8 hover:shadow-glass-sm transition-all duration-500 transform hover:scale-102 hover:-translate-y-2 animate-fade-in group text-left">
                <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/5 via-transparent to-brand-purple/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div
                  className={`relative w-20 h-20 flex mb-6 items-center justify-center transition-all ${styles.icnBg}`}
                >
                  <Handshake className="w-8 h-8 text-brand-primary" />
                </div>
                <h3 className="relative text-xl font-semibold mb-4 text-foreground-dark">
                  True Partnership
                </h3>
                <p className="relative text-foreground-dark/80">
                  This model requires a higher level of trust, transparency, and collaboration from day one, ensuring every decision is laser-focused on moving your most important needles.
                </p>
              </div>

              <div className="relative overflow-hidden bg-[#ffffff39] border border-[#00000019] rounded-2xl p-8 hover:shadow-glass-sm transition-all duration-500 transform hover:scale-102 hover:-translate-y-2 animate-fade-in group text-left">
                <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/5 via-transparent to-brand-purple/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div
                  className={`relative w-20 h-20 flex mb-6 items-center justify-center transition-all ${styles.icnBg}`}
                >
                  <BarChart3 className="w-8 h-8 text-brand-primary" />
                </div>
                <h3 className="relative text-xl font-semibold mb-4 text-foreground-dark">
                  Measurable Impact
                </h3>
                <p className="relative text-foreground-dark/80">
                  Every decision our team makes is focused on driving concrete, measurable business outcomes that directly impact your bottom line.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3-Step Framework Section */}
      <section
        id="partnership-framework"
        className={`pb-24 lg:pb-32 relative bg-[#fff] overflow-hidden ${styles.sectionBgAI}`}
      >
        <div className="container mx-auto px-6">
          <div className="max-w-8xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold mb-6 text-foreground-dark">
                How Our Outcome-Based Engagements Work: A 3-Step Framework for Alignment
              </h2>
              <p className="text-lg text-foreground-dark-muted max-w-3xl mx-auto">
                Our process is designed for clarity and mutual understanding, ensuring we build the partnership on a rock-solid foundation.
              </p>
            </div>

            <div className="space-y-12">
              {/* Step 1 */}
              <div className="grid md:grid-cols-12 gap-8 items-center">
                <div className="md:col-span-2 flex justify-center">
                  <div className="w-20 h-20 bg-gradient-to-r from-brand-primary to-brand-purple rounded-full flex items-center justify-center text-white text-2xl font-bold">
                    1
                  </div>
                </div>
                <div className="md:col-span-10">
                  <Card className="p-8 bg-[#fff] border-card-border shadow-lg">
                    <CardContent className="p-0">
                      <div className="flex items-center gap-4 mb-4">
                        <Target className="w-8 h-8 text-brand-primary" />
                        <h3 className="text-2xl font-semibold text-foreground-dark">
                          🎯 Collaboratively Define Success
                        </h3>
                      </div>
                      <p className="text-foreground-dark/80 mb-4">
                        We begin with a series of intensive, data-driven workshops to define what success looks like in concrete, measurable terms. We work with your leadership to establish the exact Key Performance Indicators (KPIs) that matter.
                      </p>
                      <div className="bg-muted/50 rounded-lg p-4">
                        <h4 className="font-semibold text-foreground-dark mb-3">Example KPIs:</h4>
                        <ul className="space-y-2 text-sm text-foreground-dark/80">
                          <li className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-green-500" />
                            A 20% increase in user conversion rates
                          </li>
                          <li className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-green-500" />
                            A 15% reduction in customer support tickets
                          </li>
                          <li className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-green-500" />
                            Achieving 50,000 monthly active users within six months
                          </li>
                          <li className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-green-500" />
                            Reducing cloud infrastructure costs by 25%
                          </li>
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Step 2 */}
              <div className="grid md:grid-cols-12 gap-8 items-center">
                <div className="md:col-span-2 flex justify-center">
                  <div className="w-20 h-20 bg-gradient-to-r from-brand-primary to-brand-purple rounded-full flex items-center justify-center text-white text-2xl font-bold">
                    2
                  </div>
                </div>
                <div className="md:col-span-10">
                  <Card className="p-8 bg-[#000000] border-card-border shadow-lg">
                    <CardContent className="p-0">
                      <div className="flex items-center gap-4 mb-4">
                        <Handshake className="w-8 h-8 text-brand-primary" />
                        <h3 className="text-2xl font-semibold text-foreground">
                          🤝 Structure the Shared-Risk Partnership
                        </h3>
                      </div>
                      <p className="text-foreground/80 mb-4">
                        Once the KPIs are defined, we structure a hybrid engagement model that balances operational security with performance incentives.
                      </p>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-white/5 rounded-lg p-4">
                          <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                            <Shield className="w-5 h-5 text-brand-primary" />
                            Foundational Fee
                          </h4>
                          <p className="text-foreground/70 text-sm">
                            Covers our core team's operational costs, ensuring we have a dedicated, world-class team focused on your project.
                          </p>
                        </div>
                        <div className="bg-white/5 rounded-lg p-4">
                          <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                            <TrendingUp className="w-5 h-5 text-brand-primary" />
                            Success Fee
                          </h4>
                          <p className="text-foreground/70 text-sm">
                            A significant, performance-based bonus paid out only when—and to the degree that—we meet or exceed the pre-defined KPIs.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Step 3 */}
              <div className="grid md:grid-cols-12 gap-8 items-center">
                <div className="md:col-span-2 flex justify-center">
                  <div className="w-20 h-20 bg-gradient-to-r from-brand-primary to-brand-purple rounded-full flex items-center justify-center text-white text-2xl font-bold">
                    3
                  </div>
                </div>
                <div className="md:col-span-10">
                  <Card className="p-8 bg-[#fff] border-card-border shadow-lg">
                    <CardContent className="p-0">
                      <div className="flex items-center gap-4 mb-4">
                        <BarChart3 className="w-8 h-8 text-brand-primary" />
                        <h3 className="text-2xl font-semibold text-foreground-dark">
                          🚀 Execute, Measure, and Win Together
                        </h3>
                      </div>
                      <p className="text-foreground-dark/80 mb-4">
                        With the agreement in place, our team executes with the discipline and rigor of a true stakeholder. We provide complete transparency throughout the engagement with real-time dashboards and regular progress reports against our shared KPIs.
                      </p>
                      <div className="flex items-center gap-4 p-4 bg-green-50 rounded-lg border border-green-200">
                        <CheckCircle className="w-6 h-6 text-green-600" />
                        <p className="text-green-800 font-medium">
                          Our success is inextricably linked to yours, motivating our team to innovate, solve problems creatively, and deliver extraordinary value.
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Four Pillars Table Section */}
      <section className="py-24 lg:py-32 bg-[#fff]">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold mb-6 text-foreground-dark">
                The Four Pillars of a True Partnership: The Advantages of Our Model
              </h2>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200">
                <thead className="bg-gradient-to-r from-brand-primary to-brand-purple text-white">
                  <tr>
                    <th className="px-8 py-6 text-left font-semibold text-xl">Pillar</th>
                    <th className="px-8 py-6 text-left font-semibold text-xl">Advantage</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  <tr className="hover:bg-gray-50 transition-colors">
                    <td className="px-8 py-6">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                          <Shield className="w-6 h-6 text-red-600" />
                        </div>
                        <span className="font-semibold text-lg text-foreground-dark">
                          🛡️ De-Risked Investment
                        </span>
                      </div>
                    </td>
                    <td className="px-8 py-6 text-foreground-dark/80">
                      You're no longer shouldering 100% of the financial risk. We share the burden, significantly lowering the barrier to undertaking ambitious, transformational projects.
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50 transition-colors">
                    <td className="px-8 py-6">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                          <Target className="w-6 h-6 text-blue-600" />
                        </div>
                        <span className="font-semibold text-lg text-foreground-dark">
                          🔗 Fully Aligned Incentives
                        </span>
                      </div>
                    </td>
                    <td className="px-8 py-6 text-foreground-dark/80">
                      Our team is motivated by the same goals you are. This eliminates adversarial negotiations over scope and hours, fostering a culture of trust and collaborative problem-solving.
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50 transition-colors">
                    <td className="px-8 py-6">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                          <TrendingUp className="w-6 h-6 text-green-600" />
                        </div>
                        <span className="font-semibold text-lg text-foreground-dark">
                          📈 Guaranteed ROI Focus
                        </span>
                      </div>
                    </td>
                    <td className="px-8 py-6 text-foreground-dark/80">
                      The entire engagement is reverse-engineered from your desired business outcome. We don't get fully paid unless we deliver tangible, measurable value, ensuring a positive return on your investment.
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50 transition-colors">
                    <td className="px-8 py-6">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                          <Users className="w-6 h-6 text-purple-600" />
                        </div>
                        <span className="font-semibold text-lg text-foreground-dark">
                          🤝 A True Strategic Partner
                        </span>
                      </div>
                    </td>
                    <td className="px-8 py-6 text-foreground-dark/80">
                      We move beyond the role of a service provider to become an integral part of your strategic team, offering proactive insights and innovative solutions to help you win your market.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Is This Right For You Section */}
      <section className="py-24 lg:py-32 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold mb-8 text-foreground-dark">
              Is an Outcome-Based Partnership Right for You?
            </h2>
            <p className="text-lg text-foreground-dark/80 mb-12">
              This model is designed for ambitious, forward-thinking organizations and is most effective when:
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-foreground-dark mb-4">Clear Business Objectives</h3>
                <p className="text-foreground-dark/70">
                  You have a clear business objective that can be measured with concrete KPIs and direct impact on revenue, growth, or efficiency.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Handshake className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-foreground-dark mb-4">Long-Term Partnership</h3>
                <p className="text-foreground-dark/70">
                  You are looking for a long-term, strategic partner, not a short-term code-for-hire vendor who disappears after delivery.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <TrendingUp className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-foreground-dark mb-4">Measurable Impact</h3>
                <p className="text-foreground-dark/70">
                  Your project has a direct and measurable impact on revenue, user growth, or operational efficiency that can be tracked and attributed.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold text-foreground-dark mb-4">Collaborative Culture</h3>
                <p className="text-foreground-dark/70">
                  You value deep collaboration and are prepared to build a transparent, trust-based relationship with shared accountability.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 lg:py-32 bg-[#fff]">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold mb-6 text-foreground-dark">
                Frequently Asked Questions
              </h2>
            </div>

            <div className="space-y-4">
              {[
                {
                  question: "Is this model more expensive than a traditional contract?",
                  answer: "Potentially, yes—and that's a good thing. If we significantly exceed your goals and generate massive value for your business, our success fee will reflect that. However, the foundational cost is often lower, and you are protected from paying the full amount for a project that doesn't meet its objectives. You only pay for exceptional results when you get them."
                },
                {
                  question: "How do you handle factors outside of your control that might affect the KPIs?",
                  answer: "This is a key part of the initial \"Define Success\" workshop. We work with you to identify external dependencies (e.g., marketing spend, sales team performance) and build them into the agreement. The goal is to isolate the impact of our engineering and product work as precisely as possible."
                },
                {
                  question: "What if our business goals or KPIs need to change mid-project?",
                  answer: "We understand that markets evolve. Our agreements are designed to be agile. We have a clear change-control process that allows us to revisit and adjust the target KPIs and success fees if there is a significant pivot in business strategy, ensuring the partnership remains aligned."
                },
                {
                  question: "What's the \"catch\"?",
                  answer: "The only \"catch\" is that this model requires a higher degree of upfront collaboration and trust. It's not a transactional, \"throw it over the wall\" relationship. It requires both parties to be deeply invested in the process and committed to radical transparency. We are selective about the partners we engage with in this model to ensure a high probability of mutual success."
                }
              ].map((faq, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                  >
                    <span className="font-semibold text-foreground-dark pr-4 text-lg">
                      {faq.question}
                    </span>
                    {expandedFAQ === index ? (
                      <ChevronUp className="w-6 h-6 text-muted-foreground flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-6 h-6 text-muted-foreground flex-shrink-0" />
                    )}
                  </button>
                  {expandedFAQ === index && (
                    <div className="px-8 pb-6 border-t border-gray-100">
                      <p className="text-foreground-dark/80 leading-relaxed pt-4">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className={`py-24 lg:py-32 text-white ${styles.ctaBg}`}>
        <div className="container mx-auto px-6 lg:px-8 text-center max-w-6xl">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold mb-6 text-foreground-white">
            <span className="leading-[1.4]">Ready for a Different Kind of Partnership?</span>
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Stop paying for hours and start investing in outcomes. Let's build a partnership where our success is the product of yours.
          </p>
          <Button
            variant="btnSecondary"
            size="xl"
            className="min-w-[320px]"
            onClick={() => {
              window.open(
                "https://calendly.com/vaughn-soratos-indexnine",
                "_blank"
              );
            }}
          >
            Book a Partnership Assessment Call
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default OutcomeBased;