import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CardGlass } from "@/components/ui/CardGlass";
import { Section } from "@/components/ui/section";
import {
  ArrowRight,
  Lightbulb,
  Palette,
  Brain,
  Zap,
  Rocket,
  Users,
  Search,
  PenTool,
} from "lucide-react";
import CtaButton from "@/components/test/CtaButton";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LivingVoidBackground from "@/components/LivingVoidBackground";
import { useSEO } from "@/hooks/useSEO";
import {
  SEOStructuredData,
  ServiceSchema,
  OrganizationSchema,
} from "@/components/SEOStructuredData";
import styles from "../../assets/css/stylesheet.module.css";

const InnovationLab = () => {
  // SEO Configuration
  useSEO({
    title: "Indexnine Innovation Lab | From Idea to MVP at Unprecedented Speed",
    description:
      "Bring your vision to life with the Indexnine Innovation Lab. We combine rapid product discovery, expert UI/UX design, and custom AI development to launch your MVP faster and smarter.",
    keywords:
      "innovation lab, MVP development, rapid prototyping, product development, startup accelerator, AI studio, design studio, discovery studio, Snap.MVP, AWS deployment, GCP deployment, Azure deployment, idea to MVP, product discovery, UI/UX design, custom AI development",
    canonicalUrl: "https://indexnine.com/engagement/innovation-lab",
    ogImage: "https://indexnine.com/images/innovation-lab-og.jpg",
    ogType: "website",
  });

  return (
    <div className="min-h-screen bg-background">
      {/* Structured Data */}
      <SEOStructuredData
        type="Service"
        data={{
          name: "Innovation Lab - Rapid MVP Development",
          description:
            "Accelerated product development engine that transforms groundbreaking ideas into market-ready MVPs with unprecedented speed and precision using specialized studios and proprietary accelerators.",
          serviceType: "Software Development",
          areaServed: "Global",
          hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: "Innovation Lab Services",
            itemListElement: [
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "Discovery Studio",
                  description:
                    "De-risk your vision with product roadmapping, feature prioritization, market feasibility analysis, and MVP scoping.",
                },
              },
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "Design Studio",
                  description:
                    "Craft intuitive user experiences with UI/UX design, interactive prototyping, user journey mapping, and design system creation.",
                },
              },
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "AI Studio",
                  description:
                    "Build competitive advantage with custom AI development, generative AI solutions, RAG implementations, and machine learning models.",
                },
              },
            ],
          },
        }}
      />

      <SEOStructuredData
        type="Organization"
        data={{
          name: "IndexNine Technologies",
          url: "https://indexnine.com",
          logo: "https://indexnine.com/images/logo.png",
          description:
            "Innovation Lab specializing in rapid MVP development, AI solutions, and accelerated product development for startups and enterprises.",
          address: {
            "@type": "PostalAddress",
            addressCountry: "US",
          },
          contactPoint: {
            "@type": "ContactPoint",
            contactType: "customer service",
          },
          knowsAbout: [
            "MVP Development",
            "Product Strategy",
            "AI Development",
            "UI/UX Design",
            "Cloud Infrastructure",
            "Startup Acceleration",
          ],
          makesOffer: {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Innovation Lab Services",
              description:
                "Complete product development ecosystem from discovery to deployment",
            },
          },
        }}
      />

      <Header />

      {/* Hero Section */}
      <section className="relative min-h-[680px] overflow-hidden bg-black">
        <LivingVoidBackground />
        <div className="relative z-10 container mx-auto px-6 pt-48 pb-24">
          <div className="max-w-4xl mx-auto text-center lg:text-left ml-0">
            <h1 className="text-[2.5rem] sm:text-[3rem] lg:text-[4rem] xl:text-[4rem] font-semibold text-foreground mb-6 leading-[1.25] animate-fade-in font-montserrat">
              Where Visionaries{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Build the Future
              </span>
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-foreground/85 mb-8 leading-relaxed font-light animate-slide-up font-montserrat max-w-4xl">
              The Indexnine Innovation Lab is an accelerated product development
              engine designed for one purpose: to turn your groundbreaking idea
              into a market-ready MVP with unprecedented speed and precision.
              Stop dreaming, start building.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center animate-scale-in">
              <CtaButton
                onClick={() => {
                  window.open(
                    "https://calendly.com/vaughn-soratos-indexnine",
                    "_blank"
                  );
                }}
              >
                Bring Your Vision to Life
              </CtaButton>
              <Button
                variant="btnLink"
                size="xl"
                className="min-w-[280px] text-foreground/80 hover:text-foreground h-auto"
              >
                See how we launched an MVP in 8 weeks{" "}
                <ArrowRight className="ml-2 h-4 w-4" />
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
            You Have the Vision.{" "}
            <br className="hidden sm:block" />
            We Have the{" "}
            <span className="text-brand-primary leading-[1.35]">
              Blueprint for Reality
            </span>
          </h2>
          <div className="text-base sm:text-lg text-foreground-dark-muted leading-relaxed space-y-4 sm:space-y-6 mb-8">
            <p>
              Every disruptive product starts with a "what if?"{" "}
              <br className="hidden sm:block" />
              The journey from idea to production code is fraught with risk, delays, and budget overruns, even in the age of AI. Traditional development processes and old school service providers are too slow for today's market.
            </p>
            <p>
              The Innovation Lab was created to solve this.
            </p>
            <p>
              It's not a service; It's built on an ecosystem of specialized studios,
              proprietary accelerators, and expert talent, all integrated to
              de-risk your investment and maximize your velocity to market. We build
              alongside you as a true engineering partner, making business centric,
              architectural decisions from day one so you can launch with
              confidence and scale without limits.
            </p>
          </div>
          <div className="flex justify-center">
            <CtaButton
              onClick={() => {
                window.open(
                  "https://calendly.com/vaughn-soratos-indexnine",
                  "_blank"
                );
              }}
              className="text-primary"
            >
              Schedule an Innovation Strategy Session
            </CtaButton>
          </div>
        </div>
      </Section>

      {/* Our Studios Section */}
      <section className={`pb-24 lg:pb-32 bg-[#fff] relative overflow-hidden `}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold mb-6 text-foreground-dark ">
              An Integrated Ecosystem for{" "}
              <span className="text-brand-primary leading-[1.35]">
                Rapid Innovation
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-foreground-dark-muted max-w-4xl mx-auto px-4">
              Our three specialized studios work in concert, providing a
              seamless path from initial strategy to a fully functional product.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <CardGlass className="group p-6 sm:p-8">
              <div
                className={`relative w-20 h-20 flex mb-6 items-center justify-center transition-all ${styles.icnBg}`}
              >
                <Search className="w-8 h-8 text-brand-primary" />
              </div>
              <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-foreground-dark mb-3 sm:mb-4 leading-tight">
                The Discovery Studio: De-Risking Your Vision
              </h3>
              <p className="text-sm sm:text-base text-foreground-dark-muted mb-4 sm:mb-6 leading-relaxed">
                Great products aren't just built; they're validated. Our
                Discovery Studio is a structured, intensive process—our Sprint
                0—where we map your business goals to a technical strategy.
                We define your core user journeys, prioritize features for a
                Minimum Viable Product, and create a comprehensive product roadmap.
                This is where we ensure what we build is what your customers will love.
              </p>
              <div className="space-y-2 mb-6">
                <h4 className="font-semibold text-foreground-dark text-sm sm:text-base">
                  Offerings:
                </h4>
                <ul className="text-xs sm:text-sm text-foreground-dark-muted space-y-1">
                  <li>• Product Roadmapping</li>
                  <li>• Feature Prioritization</li>
                  <li>• Market & Technical Feasibility</li>
                  <li>• MVP Scoping</li>
                </ul>
              </div>
              <div className="flex justify-center">
                <CtaButton variant="secondary">
                  Explore our Discovery Process
                </CtaButton>
              </div>
            </CardGlass>

            <CardGlass className="group p-6 sm:p-8">
              <div
                className={`relative w-20 h-20 flex mb-6 items-center justify-center transition-all ${styles.icnBg}`}
              >
                <PenTool className="w-8 h-8 text-brand-primary" />
              </div>
              <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-foreground-dark mb-3 sm:mb-4 leading-tight">
                The Design Studio: Crafting Intuitive Experiences
              </h3>
              <p className="text-sm sm:text-base text-foreground-dark-muted mb-4 sm:mb-6 leading-relaxed">
                A brilliant idea deserves a brilliant user experience. Our
                Design Studio translates your vision into intuitive, engaging,
                and beautiful interfaces. We move from low-fidelity wireframes
                to high-fidelity, market ready MVPs with unmatched speed.
                Our design-led product mindset means we build products that
                aren't just functional, but memorable.
              </p>
              <div className="space-y-2 mb-6">
                <h4 className="font-semibold text-foreground-dark text-sm sm:text-base">
                  Offerings:
                </h4>
                <ul className="text-xs sm:text-sm text-foreground-dark-muted space-y-1">
                  <li>• UI/UX Design</li>
                  <li>• Interactive Prototyping</li>
                  <li>• Enterprise Design Refresh</li>
                </ul>
              </div>
              <div className="flex justify-center">
                <CtaButton variant="secondary">
                  Explore our Design Studio
                </CtaButton>
              </div>
            </CardGlass>

            <CardGlass className="group p-6 sm:p-8">
              <div
                className={`relative w-20 h-20 flex mb-6 items-center justify-center transition-all ${styles.icnBg}`}
              >
                <Brain className="w-8 h-8 text-brand-primary" />
              </div>
              <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-foreground-dark mb-3 sm:mb-4 leading-tight">
                The AI Studio: Building Your Competitive Edge
              </h3>
              <p className="text-sm sm:text-base text-foreground-dark-muted mb-4 sm:mb-6 leading-relaxed">
                In today's business climate, AI is no longer an afterthought, or a differentiator.
                Leveraging AI in digital products is table stakes. Our AI Studio specializes in
                building custom AI solutions that give your product unique and differentiated
                advantages against the competition. From Generative AI applications, Large Language
                Model (LLM), and Small Language Model development, we accelerate feature creation
                and embed intelligent user experiences into the heart of your product.
              </p>
              <div className="space-y-2 mb-6">
                <h4 className="font-semibold text-foreground-dark text-sm sm:text-base">
                  Offerings:
                </h4>
                <ul className="text-xs sm:text-sm text-foreground-dark-muted space-y-1">
                  <li>• Custom AI Development</li>
                  <li>• Generative AI & RAG Solutions</li>
                  <li>• Small Language Model Development</li>
                </ul>
              </div>
              <div className="flex justify-center">
                <CtaButton variant="secondary">
                  Innovate with our AI Studio
                </CtaButton>
              </div>
            </CardGlass>
          </div>
        </div>
      </section>
      <div className="bg-gradient-to-t from-[#fff] via-[#fcfcfc] to-[#fff] text-foreground">
        <div className={` ${styles.sectionBgData}`}>
          <Section containerSize="6xl" className="bg-transparent  lg:pt-0 pt-0">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold mb-6 text-foreground-dark ">
                Our Proprietary Accelerators Weapons:{" "}
                <span className="text-brand-primary leading-[1.35]">
                  Snap.MVP
                </span>
              </h2>
            </div>

            <div className="max-w-4xl mx-auto text-center">
              <CardGlass variant="light" className="mb-8">
                <Zap className="w-16 h-16 text-brand-primary mx-auto mb-6" />
                <p className="text-lg text-foreground-dark-muted leading-relaxed mb-8">
                  How do we launch so fast? We've automated the foundation.
                  <br className="hidden sm:block" />
                  Snap.MVP is our proprietary accelerator that
                  deploys a secure, scalable, and production-ready cloud
                  environment on AWS, GCP, or Azure in about 10 minutes. While
                  others spend weeks on manual setup, we've built in best practices and security into an automation platform so we spend the first weeks of
                  our engagement building real products. This single
                  accelerator dramatically reduces time-to-market and eliminates
                  the foundational risk.
                </p>
                <div className="flex justify-center">
                  <CtaButton className="text-primary">
                    Learn More About Snap.MVP
                  </CtaButton>
                </div>
              </CardGlass>
            </div>
          </Section>

          <Section
            variant="alternate"
            containerSize="6xl"
            className="bg-transparent lg:pt-0 pt-0"
          >
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold mb-6 text-foreground-dark ">
                Proof, Not{" "}
                <span className="text-brand-primary leading-[1.25]">
                  Promises
                </span>
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <CardGlass className="group">
                <div
                  className={`relative w-20 h-20 flex mb-6 items-center justify-center transition-all ${styles.icnBg}`}
                >
                  <Rocket className="w-8 h-8 text-brand-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground-dark mb-4">
                  FinTech Startup Launches Secure MVP in 8 Weeks
                </h3>
                <p className="text-foreground-dark-muted mb-6">
                  See how we partnered with a visionary founder to go from a
                  napkin sketch to a fully functional, secure FinTech platform,
                  ready for its seed round.
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
                  <Zap className="w-8 h-8 text-brand-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground-dark mb-4">
                  Weeks to Minutes: How We Deploy Production-Ready Cloud
                  Infrastructure with Snap.MVP
                </h3>
                <p className="text-foreground-dark-muted mb-6">
                  A deep dive into the technology and philosophy behind our
                  game-changing deployment accelerator.
                </p>
                <Button variant="btnLink" size="link">
                  Read the Blog Post{" "}
                  <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                </Button>
              </CardGlass>

              <CardGlass className="group">
                <div
                  className={`relative w-20 h-20 flex mb-6 items-center justify-center transition-all ${styles.icnBg}`}
                >
                  <Brain className="w-8 h-8 text-brand-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground-dark mb-4">
                  AI-Assisted React Development: From Design to Dashboard with Cursor AI
                </h3>
                <p className="text-foreground-dark-muted mb-6">
                  Explore how our UI architects leverage AI tools to build
                  complex interfaces with incredible speed and quality.
                </p>
                <Button variant="btnLink" size="link">
                  Read the Blog Post{" "}
                  <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                </Button>
              </CardGlass>
            </div>
          </Section>
        </div>
      </div>

      {/* Final CTA Section */}
      <section className={`py-24 lg:py-32 text-white ${styles.ctaBg}`}>
        <div className="container mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold mb-6 text-foreground-white">
            <span className="leading-[1.4]">
              Let's Build What's Next. Together.
            </span>
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Your vision deserves more than just a team of coders. It deserves a
            dedicated engineering partner obsessed with turning your idea into a
            market-defining success.
          </p>
          <CtaButton
            onClick={() => {
              window.open(
                "https://calendly.com/vaughn-soratos-indexnine",
                "_blank"
              );
            }}
          >
            Book Your Free Discovery Session
          </CtaButton>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default InnovationLab;
