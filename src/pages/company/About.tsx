import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import {
  WebPageSchema,
  BreadcrumbSchema,
  LocalBusinessSchema,
} from "@/components/SEOStructuredData";
import { BrainCircuit, BrickWall, Sparkles } from "lucide-react";
import LivingVoidBackground from "@/components/LivingVoidBackground";
import styles from "../../assets/css/stylesheet.module.css";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <WebPageSchema
        title="About IndexNine Technologies - Our Story & Mission"
        description="Learn about IndexNine Technologies, our mission to deliver exceptional product engineering solutions, and our commitment to excellence in AI and software development"
        url="https://www.indexnine.com/company/about"
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://www.indexnine.com/" },
          { name: "About", url: "https://www.indexnine.com/company/about" },
        ]}
      />
      <LocalBusinessSchema />
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-[480px] overflow-hidden bg-black">
        <LivingVoidBackground />

        <div className="relative z-10 container mx-auto px-6 pt-48 pb-24">
          <div className="max-w-4xl mx-auto text-center lg:text-left ml-0">
            <h1 className="text-[2.5rem] sm:text-[3rem] lg:text-[4rem] xl:text-[4rem] font-semibold text-foreground mb-6 leading-[1.25]  animate-fade-in font-montserrat">
              About{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                IndexNine
              </span>
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-foreground/85 mb-8 leading-relaxed font-light animate-slide-up font-montserrat max-w-4xl">
              We are a private-equity backed software product engineering
              solutions company that partners with businesses to transform bold
              ideas into market-leading products.
            </p>
          </div>
        </div>
      </section>

      <div
        className={`relative max-w-8xl bg-white mx-auto ${styles.sectionBgData}`}
      >
        {/* Mission Section */}
        <section className="py-24 lg:py-32 bg-glass-light border-glass backdrop-blur-sm shadow shadow-inner shadow-xl shadow-white">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-1/6 w-80 h-80 bg-brand-primary/8 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-1/6 w-96 h-96 bg-brand-purple/6 rounded-full blur-3xl"></div>
          </div>

          <div className="container mx-auto px-6 lg:px-8 relative z-10">
            <div className="max-w-5xl mx-auto text-center">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold mb-6 text-foreground-dark ">
                Our Mission
              </h2>
              <p className="text-base sm:text-lg text-foreground-dark-muted leading-relaxed space-y-4 sm:space-y-6">
                In a market often defined by reactive order-takers, we were
                founded on a refusal to be just another vendor. Our mission is
                to permanently challenge that stigma. We prove every day that a
                globally-recognized, product-first engineering powerhouse can be
                built in India. We don't just take orders; we challenge
                assumptions, contribute to your product strategy, and build
                enduring value. We are the high-value, strategic partner you
                thought you couldn't find.
              </p>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-24 lg:py-32 bg-transparent">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="text-center mb-20">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold mb-6 text-foreground-dark ">
                Our Values
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6 max-w-8xl mx-auto">
              <div className="relative overflow-hidden backdrop-blur-lg bg-glass-bg border border-glass-border rounded-2xl p-8 shadow-glass hover:shadow-glass-lg transition-all duration-500 transform hover:scale-105">
                <div
                  className={`relative w-20 h-20 flex mb-6 items-center justify-center transition-all ${styles.icnBg}`}
                >
                  <BrainCircuit className="w-8 h-8 text-brand-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground-dark mb-6 leading-tight font-montserrat">
                  Product-First Mindset
                </h3>
                <p className="text-foreground-dark-muted font-montserrat">
                  We think like product owners, not service providers. Every
                  decision is evaluated through the lens of business impact and
                  user value.
                </p>
              </div>

              <div className="relative overflow-hidden backdrop-blur-lg bg-glass-bg border border-glass-border rounded-2xl p-8 shadow-glass hover:shadow-glass-lg transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 animate-fade-in">
                <div
                  className={`relative w-20 h-20 flex mb-6 items-center justify-center transition-all ${styles.icnBg}`}
                >
                  <Sparkles className="w-8 h-8 text-brand-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground-dark mb-6 leading-tight font-montserrat">
                  AI-Forward Innovation
                </h3>
                <p className="text-foreground-dark-muted font-montserrat">
                  We leverage artificial intelligence not as a buzzword, but as
                  a core tool to solve complex problems and create competitive
                  advantages.
                </p>
              </div>

              <div className="relative overflow-hidden backdrop-blur-lg bg-glass-bg border border-glass-border rounded-2xl p-8 shadow-glass hover:shadow-glass-lg transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 animate-fade-in">
                <div
                  className={`relative w-20 h-20 flex mb-6 items-center justify-center transition-all ${styles.icnBg}`}
                >
                  <BrickWall className="w-8 h-8 text-brand-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground-dark mb-6 leading-tight font-montserrat">
                  Outcome Alignment
                </h3>
                <p className="text-foreground-dark-muted font-montserrat">
                  Our success is measured by your success. We put skin in the
                  game with outcome-based models that align our incentives with
                  your goals.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Final CTA Section */}
      <section className={`py-24 lg:py-32 text-white ${styles.ctaBg}`}>
        <div className="container mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold mb-6 text-foreground-white">
            <span className="leading-[1.4]">Ready to Partner with Us?</span>
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Let's discuss how our product mindset and AI-forward engineering
            excellence can accelerate your growth.
          </p>
          <Button variant="btnSecondary" size="lg">
            Contact Us
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
