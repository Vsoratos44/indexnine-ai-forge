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
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LivingVoidBackground from "@/components/LivingVoidBackground";
import styles from "../../assets/css/stylesheet.module.css";

const InnovationLab = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-[85vh] overflow-hidden bg-black">
        <LivingVoidBackground />
        <div className="relative z-10 container mx-auto px-6 pt-48 pb-24">
          <div className="max-w-4xl mx-auto text-center lg:text-left ml-0">
            <h1 className="text-[2.5rem] sm:text-[3rem] lg:text-[4rem] xl:text-[4rem] font-semibold text-foreground mb-6 leading-[1.25]  animate-fade-in font-montserrat">
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
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-scale-in">
              <Button
                variant="hero"
                size="lg"
                className="min-w-[280px] rounded-full"
              >
                Bring Your Vision to Life
              </Button>
              <Button
                variant="hero-secondary"
                size="lg"
                className="min-w-[280px] rounded-full"
              >
                See how we launched an MVP in 8 weeks{" "}
                <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
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
            You Have the Vision. We Have the{" "}
            <span className="text-brand-primary leading-[1.25]">
              Blueprint for Reality
            </span>
          </h2>
          <div className="text-base sm:text-lg text-foreground-dark-muted leading-relaxed space-y-4 sm:space-y-6">
            <p>
              Every disruptive product starts with a "what if?" But the journey
              from concept to code is fraught with risk, delays, and budget
              overruns. The traditional development process is too slow for
              today's market. The Innovation Lab was created to solve this.
            </p>
            <p>
              It's not a service; it's an ecosystem of specialized studios,
              proprietary accelerators, and expert talent, all integrated to
              de-risk your investment and maximize your velocity. We build
              alongside you as a true engineering partner, making the right
              architectural decisions from day one so you can launch with
              confidence and scale without limits.
            </p>
          </div>
        </div>
      </Section>

      {/* Our Studios Section */}
      <section className={`pb-24 lg:pb-32 bg-[#fff] relative overflow-hidden `}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold mb-6 text-foreground-dark ">
              An Integrated Ecosystem for{" "}
              <span className="text-brand-primary leading-[1.25]">
                Rapid Innovation
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-foreground-dark-muted max-w-4xl mx-auto px-4">
              Our three specialized studios work in concert, providing a
              seamless path from initial strategy to a fully functional product.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
            <CardGlass className="group p-6 sm:p-8">
              <div className="relative bg-gradient-to-br from-brand-primary/20 via-brand-primary/10 to-brand-purple/20 backdrop-blur-md rounded-2xl w-20 h-20 flex items-center justify-center mb-4 border border-brand-primary/30 group-hover:shadow-glow transition-all duration-300 group-hover:scale-110">
                <Lightbulb className="w-8 h-8 text-brand-primary" />
              </div>
              <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-foreground-dark mb-3 sm:mb-4 leading-tight">
                The Discovery Studio: De-Risking Your Vision
              </h3>
              <p className="text-sm sm:text-base text-foreground-dark-muted mb-4 sm:mb-6 leading-relaxed">
                Great products aren't just built; they're validated. Our
                Discovery Studio is a structured, intensive process—our Sprint
                0—where we map your business goals to a technical strategy.
              </p>
              <div className="space-y-2">
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
            </CardGlass>

            <CardGlass className="group">
              <div className="relative bg-gradient-to-br from-brand-primary/20 via-brand-primary/10 to-brand-purple/20 backdrop-blur-md rounded-2xl w-20 h-20 flex items-center justify-center mb-4 border border-brand-primary/30 group-hover:shadow-glow transition-all duration-300 group-hover:scale-110">
                <Palette className="w-8 h-8 text-brand-primary" />
              </div>
              <h3 className="text-2xl font-semibold text-foreground-dark mb-4">
                The Design Studio: Crafting Intuitive Experiences
              </h3>
              <p className="text-foreground-dark-muted mb-6 leading-relaxed">
                A brilliant idea deserves a brilliant user experience. Our
                Design Studio translates your vision into intuitive, engaging,
                and beautiful interfaces. We move from low-fidelity wireframes
                to high-fidelity, interactive prototypes, ensuring every click
                is purposeful and every screen is a delight.
              </p>
              <div className="space-y-2">
                <h4 className="font-semibold text-foreground-dark">
                  Offerings:
                </h4>
                <ul className="text-sm text-foreground-dark-muted space-y-1">
                  <li>• UI/UX Design</li>
                  <li>• Interactive Prototyping</li>
                  <li>• User Journey Mapping</li>
                  <li>• Design System Creation</li>
                </ul>
              </div>
            </CardGlass>

            <CardGlass className="group">
              <div className="relative bg-gradient-to-br from-brand-primary/20 via-brand-primary/10 to-brand-purple/20 backdrop-blur-md rounded-2xl w-20 h-20 flex items-center justify-center mb-4 border border-brand-primary/30 group-hover:shadow-glow transition-all duration-300 group-hover:scale-110">
                <Brain className="w-8 h-8 text-brand-primary" />
              </div>
              <h3 className="text-2xl font-semibold text-foreground-dark mb-4">
                The AI Studio: Building Your Competitive Edge
              </h3>
              <p className="text-foreground-dark-muted mb-6 leading-relaxed">
                In today's market, AI is not an afterthought—it's the core
                differentiator. Our AI Studio specializes in building custom AI
                solutions that give your product an unfair advantage. From
                Generative AI applications and Large Language Model development
                to leveraging tools like Cursor AI to accelerate feature
                creation.
              </p>
              <div className="space-y-2">
                <h4 className="font-semibold text-foreground-dark">
                  Offerings:
                </h4>
                <ul className="text-sm text-foreground-dark-muted space-y-1">
                  <li>• Custom AI Development</li>
                  <li>• Generative AI & RAG Solutions</li>
                  <li>• AI-Assisted Engineering</li>
                  <li>• Machine Learning Model Development</li>
                </ul>
              </div>
            </CardGlass>
          </div>
        </div>
      </section>

      <Section variant="light" containerSize="6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground-dark mb-6 font-montserrat">
            Our Secret Weapon:{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Snap.MVP.Deploy.Cloud
            </span>
          </h2>
        </div>

        <div className="max-w-4xl mx-auto text-center">
          <CardGlass variant="light" className="mb-8">
            <Zap className="w-16 h-16 text-brand-primary mx-auto mb-6" />
            <p className="text-lg text-foreground-dark-muted leading-relaxed mb-8">
              How do we launch so fast? We've automated the foundation.
              Snap.MVP.Deploy.Cloud is our proprietary accelerator that deploys
              a secure, scalable, and production-ready cloud environment on AWS,
              GCP, or Azure in about 10 minutes. While others spend weeks on
              manual setup, we spend the first week of our engagement building
              your actual product. This single accelerator dramatically reduces
              time-to-market and eliminates foundational risk.
            </p>
            <Button
              variant="outline"
              className="border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white rounded-full"
            >
              Learn More About Snap.MVP
            </Button>
          </CardGlass>
        </div>
      </Section>

      <Section variant="alternate" containerSize="6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground-dark mb-6 font-montserrat">
            Proof, Not{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Promises
            </span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <CardGlass className="group">
            <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-6">
              <Rocket className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-4">
              FinTech Startup Launches Secure MVP in 8 Weeks
            </h3>
            <p className="text-foreground-muted mb-6">
              See how we partnered with a visionary founder to go from a napkin
              sketch to a fully functional, secure FinTech platform, ready for
              its seed round.
            </p>
            <Button variant="outline" size="sm">
              Read the Case Study
            </Button>
          </CardGlass>

          <CardGlass className="group">
            <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-6">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-4">
              Weeks to Minutes: How We Deploy Production-Ready Cloud
              Infrastructure
            </h3>
            <p className="text-foreground-muted mb-6">
              A deep dive into the technology and philosophy behind our
              game-changing deployment accelerator.
            </p>
            <Button variant="outline" size="sm">
              Read the Blog Post
            </Button>
          </CardGlass>

          <CardGlass className="group">
            <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-6">
              <Brain className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-4">
              AI-Assisted React Development: From Design to Dashboard
            </h3>
            <p className="text-foreground-muted mb-6">
              Explore how our UI architects leverage AI tools to build complex
              interfaces with incredible speed and quality.
            </p>
            <Button variant="outline" size="sm">
              Read the Blog Post
            </Button>
          </CardGlass>
        </div>
      </Section>

      {/* Final CTA Section */}
      <section className="py-24 bg-background-dark">
        <div className="container mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6 font-montserrat">
            Let's Build What's Next. Together.
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Your vision deserves more than just a team of coders. It deserves a
            dedicated engineering partner obsessed with turning your idea into a
            market-defining success.
          </p>
          <Button variant="hero" size="lg" className="">
            Book Your Free Discovery Session
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default InnovationLab;
