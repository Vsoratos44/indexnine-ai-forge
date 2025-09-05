import React, { Suspense, lazy } from "react";
import Header from "@/components/test/Header";
import Footer from "@/components/test/Footer";
import CTABanner from "@/components/test/CTABanner";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/ui/section";
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ArrowRight, Zap, Wrench, Handshake, Rocket, RefreshCw, Brain } from "lucide-react";
import { useSEO } from "@/hooks/useSEO";
import {
  WebPageSchema,
  BreadcrumbSchema,
  ServiceSchema,
} from "@/components/SEOStructuredData";

// Lazy load heavy background component
const OptimizedVideoBackground = lazy(() => import("@/components/OptimizedVideoBackground"));
const EnhancedScrollReveal = lazy(() => import("@/components/test/effects/EnhancedScrollReveal"));

// Minimal loading component
const SectionLoader = () => (
  <div className="min-h-[200px] flex items-center justify-center">
    <div className="animate-pulse bg-gradient-hero/20 rounded-lg h-32 w-full"></div>
  </div>
);

const DesignStudio = () => {
  // SEO Configuration
  useSEO({
    title: "Design Studio - Accelerating Visual Engineering | IndexNine",
    description: "Our senior UI/UX experts leverage modern AI systems to move at unmatched speed—taking unrealized concepts to functional products. Accelerate your design sprint today.",
    canonicalUrl: "https://yoursite.lovable.app/test/studios/design",
    keywords: "UI/UX design, visual engineering, design sprint, AI design, product design, startup design, MVP design",
    ogImage: "https://yoursite.lovable.app/images/design-studio-og.jpg",
  });

  return (
    <div className="min-h-screen">
      {/* SEO Structured Data */}
      <WebPageSchema
        title="Design Studio - Accelerating Visual Engineering | IndexNine"
        description="Our senior UI/UX experts leverage modern AI systems to move at unmatched speed—taking unrealized concepts to functional products."
        url="https://yoursite.lovable.app/test/studios/design"
      />
      
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://yoursite.lovable.app" },
          { name: "Studios", url: "https://yoursite.lovable.app/studios" },
          { name: "Design Studio", url: "https://yoursite.lovable.app/test/studios/design" }
        ]}
      />

      <ServiceSchema
        name="Design Studio - Visual Engineering Services"
        description="Senior UI/UX experts leveraging AI systems for rapid product design and development"
        serviceType="Product Design and Visual Engineering"
      />

      {/* Header */}
      <Header />

      {/* Hero Section */}
      <Section className="relative overflow-hidden min-h-screen flex items-center" noPadding>
        {/* Video Background */}
        <Suspense fallback={<div className="absolute inset-0 bg-gradient-hero" />}>
          <OptimizedVideoBackground 
            videoSrc="/lovable-uploads/Video_Revision_For_Text_Readability.mp4"
            className="absolute inset-0"
            overlay="dark"
          />
        </Suspense>
        
        {/* Hero Content */}
        <div className="relative z-10 container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Suspense fallback={<div className="animate-pulse h-8 bg-brand-primary/20 rounded mb-6" />}>
              <EnhancedScrollReveal direction="fade" delay={200}>
                <Badge variant="outline" className="mb-6 text-brand-primary border-brand-primary/50 bg-background/10 backdrop-blur-sm">
                  The Design Studio
                </Badge>
              </EnhancedScrollReveal>
            </Suspense>

            <Suspense fallback={<div className="animate-pulse h-20 bg-foreground-white/10 rounded mb-6" />}>
              <EnhancedScrollReveal direction="up" delay={400}>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground-white mb-6 leading-tight">
                  Accelerating Visual <span className="text-gradient">Engineering</span>.
                </h1>
              </EnhancedScrollReveal>
            </Suspense>

            <Suspense fallback={<div className="animate-pulse h-16 bg-foreground-white/10 rounded mb-8" />}>
              <EnhancedScrollReveal direction="up" delay={600}>
                <p className="text-xl md:text-2xl text-foreground-white/80 mb-8 leading-relaxed max-w-3xl mx-auto">
                  Our senior UI/UX experts leverage modern AI systems to move at a speed that's unmatched—taking 
                  unrealized concepts to realized, functional products. We empower startups and enterprises to 
                  deliver unique value to their users faster than ever.
                </p>
              </EnhancedScrollReveal>
            </Suspense>

            <Suspense fallback={<div className="animate-pulse h-16 bg-brand-primary/20 rounded" />}>
              <EnhancedScrollReveal direction="up" delay={800}>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="text-lg px-8 py-4">
                    Scope Your Design Sprint
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                  <Button variant="outline" size="lg" className="text-lg px-8 py-4 border-foreground-white/30 text-foreground-white hover:bg-foreground-white hover:text-background">
                    See Our Work
                  </Button>
                </div>
              </EnhancedScrollReveal>
            </Suspense>
          </div>
        </div>
      </Section>

      {/* The Design Disconnect Section */}
      <Section className="py-16 md:pt-20 lg:pt-28 relative overflow-hidden bg-background-light border-t border-border/20">
        {/* Enhanced Atmospheric Background */}
        <div className="absolute inset-0 opacity-40">
          <div className="absolute top-20 left-1/4 w-80 h-80 bg-brand-primary/8 rounded-full blur-3xl animate-luminous-drift"></div>
          <div 
            className="absolute bottom-20 right-1/4 w-96 h-96 bg-brand-cyan/6 rounded-full blur-3xl animate-luminous-drift"
            style={{ animationDelay: "3s" }}
          ></div>
          <div 
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-brand-purple/5 rounded-full blur-2xl animate-pulse-slow"
            style={{ animationDelay: "1.5s" }}
          ></div>
        </div>
        
        <Suspense fallback={<SectionLoader />}>
          <EnhancedScrollReveal direction="up">
            <div className="max-w-4xl mx-auto text-center relative z-10">
              <h2 className="text-4xl md:text-5xl font-bold text-brand-cyan mb-6">
                The Design Disconnect: <span className="bg-gradient-to-r from-brand-purple via-brand-primary to-brand-cyan bg-clip-text text-transparent">Bridging Vision and Reality</span>
              </h2>
              <p className="text-lg md:text-xl text-foreground-dark leading-relaxed">
                Great products are born from great design, but the path is filled with disconnects. Traditional design 
                studios often lack deep engineering context, delivering beautiful mockups that are difficult to build. 
                Internal teams can be too close to the product, missing the forest for the trees. This gap between 
                vision and feasible execution is where products stall and technical debt begins. 
                <strong className="bg-gradient-to-r from-brand-purple via-brand-primary to-brand-cyan bg-clip-text text-transparent"> We were founded to eliminate that gap.</strong>
              </p>
            </div>
          </EnhancedScrollReveal>
        </Suspense>
      </Section>

      {/* The IndexNine Philosophy Section */}
      <Section className="py-24 lg:py-32 relative overflow-hidden bg-[#fff] text-foreground-dark">
        {/* Enhanced Electric Background Effects */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-1/6 w-96 h-96 bg-brand-purple/8 rounded-full blur-3xl animate-mesh-shift"></div>
          <div className="absolute bottom-20 right-1/6 w-80 h-80 bg-brand-cyan/6 rounded-full blur-3xl animate-mesh-shift" style={{ animationDelay: "3s" }}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-brand-primary/5 rounded-full blur-2xl animate-float"></div>
        </div>
        
        <Suspense fallback={<SectionLoader />}>
          <EnhancedScrollReveal direction="up">
            <div className="text-center mb-16 relative z-10">
              <h2 className="text-4xl md:text-5xl font-bold text-brand-purple mb-6">
                Our <span className="bg-gradient-to-r from-brand-cyan via-brand-primary to-brand-purple bg-clip-text text-transparent">Design Philosophy</span>
              </h2>
              <p className="text-lg md:text-xl text-foreground-dark max-w-3xl mx-auto">
                Our approach is built on a foundation that marries creativity with pragmatism, ensuring every 
                design decision is a step toward a successful product.
              </p>
            </div>
          </EnhancedScrollReveal>

          <div className="grid md:grid-cols-3 gap-8 relative z-10">
            <Suspense fallback={<SectionLoader />}>
              <EnhancedScrollReveal direction="up" delay={200}>
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-br from-brand-purple/20 via-transparent to-brand-primary/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-xl"></div>
                  <Card className="text-center h-full relative z-10 bg-white/80 border border-brand-purple/20 backdrop-blur-sm rounded-3xl shadow-glass hover:shadow-glow transition-all duration-300">
                    <CardHeader>
                      <div className="mx-auto mb-4 w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center group-hover:animate-glow-pulse shadow-lg shadow-purple-500/20 transition-transform duration-300 group-hover:scale-110">
                        <Zap className="h-8 w-8 text-white" />
                      </div>
                      <CardTitle className="text-2xl mb-4 bg-gradient-to-r from-brand-purple to-brand-primary bg-clip-text text-transparent font-bold">Velocity by Design</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base text-foreground-dark">
                        We believe speed is a feature. By using AI accelerators like snap.design and snap.brain, 
                        we dramatically shorten the time from ideation to interactive prototype, giving you critical 
                        market feedback faster.
                      </CardDescription>
                    </CardContent>
                  </Card>
                </div>
              </EnhancedScrollReveal>
            </Suspense>

            <Suspense fallback={<SectionLoader />}>
              <EnhancedScrollReveal direction="up" delay={400}>
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-br from-brand-cyan/20 via-transparent to-brand-primary/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-xl"></div>
                  <Card className="text-center h-full relative z-10 bg-white/80 border border-brand-cyan/20 backdrop-blur-sm rounded-3xl shadow-glass hover:shadow-glow transition-all duration-300">
                    <CardHeader>
                      <div className="mx-auto mb-4 w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center group-hover:animate-glow-pulse shadow-lg shadow-cyan-500/20 transition-transform duration-300 group-hover:scale-110">
                        <Wrench className="h-8 w-8 text-white" />
                      </div>
                      <CardTitle className="text-2xl mb-4 bg-gradient-to-r from-brand-cyan to-brand-primary bg-clip-text text-transparent font-bold">Engineering in our DNA</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base text-foreground-dark">
                        We are visual engineers. Our designers think in terms of components, scalability, and 
                        technical feasibility from day one. This ensures we hand off designs that your engineering 
                        team can actually build, minimizing rework and accelerating the development lifecycle.
                      </CardDescription>
                    </CardContent>
                  </Card>
                </div>
              </EnhancedScrollReveal>
            </Suspense>

            <Suspense fallback={<SectionLoader />}>
              <EnhancedScrollReveal direction="up" delay={600}>
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/20 via-transparent to-brand-purple/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-xl"></div>
                  <Card className="text-center h-full relative z-10 bg-white/80 border border-brand-primary/20 backdrop-blur-sm rounded-3xl shadow-glass hover:shadow-glow transition-all duration-300">
                    <CardHeader>
                      <div className="mx-auto mb-4 w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center group-hover:animate-glow-pulse shadow-lg shadow-green-500/20 transition-transform duration-300 group-hover:scale-110">
                        <Handshake className="h-8 w-8 text-white" />
                      </div>
                      <CardTitle className="text-2xl mb-4 bg-gradient-to-r from-brand-primary to-brand-purple bg-clip-text text-transparent font-bold">Partnership in Practice</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base text-foreground-dark">
                        We begin every engagement with our Sprint 0 for Refresh, a collaborative 2-6 week process 
                        designed to de-risk your investment. We define the problem, iterate on solutions, and deliver 
                        a finalized design with clear specifications, ensuring complete alignment on business outcomes.
                      </CardDescription>
                    </CardContent>
                  </Card>
                </div>
              </EnhancedScrollReveal>
            </Suspense>
          </div>
        </Suspense>
      </Section>

      {/* Core Offerings Section */}
      <Section className="py-16 md:pt-20 lg:pt-28 relative overflow-hidden bg-background-light border-t border-border/20">
        {/* Enhanced Atmospheric Background */}
        <div className="absolute inset-0 opacity-40">
          <div className="absolute top-20 left-1/4 w-80 h-80 bg-brand-primary/8 rounded-full blur-3xl animate-luminous-drift"></div>
          <div 
            className="absolute bottom-20 right-1/4 w-96 h-96 bg-brand-cyan/6 rounded-full blur-3xl animate-luminous-drift"
            style={{ animationDelay: "3s" }}
          ></div>
          <div 
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-brand-purple/5 rounded-full blur-2xl animate-pulse-slow"
            style={{ animationDelay: "1.5s" }}
          ></div>
        </div>
        
        <Suspense fallback={<SectionLoader />}>
          <EnhancedScrollReveal direction="up">
            <div className="text-center mb-16 relative z-10">
              <h2 className="text-4xl md:text-5xl font-bold text-brand-cyan mb-6">
                The Velocity Suite: <span className="bg-gradient-to-r from-brand-purple via-brand-primary to-brand-cyan bg-clip-text text-transparent">Design Offerings for Every Stage</span>
              </h2>
              <p className="text-lg md:text-xl text-foreground-dark max-w-3xl mx-auto">
                From launching a new venture to modernizing an enterprise platform, our core offerings are 
                built to deliver measurable impact.
              </p>
            </div>
          </EnhancedScrollReveal>

          <div className="grid lg:grid-cols-3 gap-8 relative z-10">
            <Suspense fallback={<SectionLoader />}>
              <EnhancedScrollReveal direction="up" delay={200}>
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-br from-brand-purple/20 via-transparent to-brand-primary/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-xl"></div>
                  <Card className="h-full relative z-10 bg-white/80 border border-brand-purple/20 backdrop-blur-sm rounded-3xl shadow-glass hover:shadow-glow transition-all duration-300">
                    <CardHeader>
                      <div className="mb-4 w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center group-hover:animate-glow-pulse shadow-lg shadow-purple-500/20 transition-transform duration-300 group-hover:scale-110">
                        <Rocket className="h-8 w-8 text-white" />
                      </div>
                      <CardTitle className="text-2xl mb-4 bg-gradient-to-r from-brand-purple to-brand-primary bg-clip-text text-transparent font-bold">Product Launch (0 to MVP)</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <CardDescription className="text-base text-foreground-dark">
                        We partner with funded startups to transform bold ideas into viable, market-ready products. 
                        We bring mature processes to de-risk the journey from concept to a high-fidelity, interactive 
                        prototype that's ready to build and fundraise against.
                      </CardDescription>
                      <div>
                        <p className="text-sm font-medium text-foreground-dark/70 mb-2">Ideal For:</p>
                        <p className="text-sm text-foreground-dark/60">Funded startups needing to launch a scalable MVP quickly.</p>
                      </div>
                      <Button className="w-full group-hover:scale-105 transition-transform duration-300">
                        Launch Your Product
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </EnhancedScrollReveal>
            </Suspense>

            <Suspense fallback={<SectionLoader />}>
              <EnhancedScrollReveal direction="up" delay={400}>
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-br from-brand-cyan/20 via-transparent to-brand-primary/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-xl"></div>
                  <Card className="h-full relative z-10 bg-white/80 border border-brand-cyan/20 backdrop-blur-sm rounded-3xl shadow-glass hover:shadow-glow transition-all duration-300">
                    <CardHeader>
                      <div className="mb-4 w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center group-hover:animate-glow-pulse shadow-lg shadow-cyan-500/20 transition-transform duration-300 group-hover:scale-110">
                        <RefreshCw className="h-8 w-8 text-white" />
                      </div>
                      <CardTitle className="text-2xl mb-4 bg-gradient-to-r from-brand-cyan to-brand-primary bg-clip-text text-transparent font-bold">Product Modernization (UX Refresh)</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <CardDescription className="text-base text-foreground-dark">
                        We breathe new life into existing applications. Our UX Refresh process enhances usability, 
                        updates interfaces to modern standards, and optimizes user flows to reduce churn, increase 
                        engagement, and boost customer satisfaction.
                      </CardDescription>
                      <div>
                        <p className="text-sm font-medium text-foreground-dark/70 mb-2">Ideal For:</p>
                        <p className="text-sm text-foreground-dark/60">Established products with 5+ years of technical debt or declining user engagement.</p>
                      </div>
                      <Button className="w-full group-hover:scale-105 transition-transform duration-300">
                        Modernize Your Platform
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </EnhancedScrollReveal>
            </Suspense>

            <Suspense fallback={<SectionLoader />}>
              <EnhancedScrollReveal direction="up" delay={600}>
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/20 via-transparent to-brand-purple/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-xl"></div>
                  <Card className="h-full relative z-10 bg-white/80 border border-brand-primary/20 backdrop-blur-sm rounded-3xl shadow-glass hover:shadow-glow transition-all duration-300">
                    <CardHeader>
                      <div className="mb-4 w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center group-hover:animate-glow-pulse shadow-lg shadow-green-500/20 transition-transform duration-300 group-hover:scale-110">
                        <Brain className="h-8 w-8 text-white" />
                      </div>
                      <CardTitle className="text-2xl mb-4 bg-gradient-to-r from-brand-primary to-brand-purple bg-clip-text text-transparent font-bold">Agentic AI Design</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <CardDescription className="text-base text-foreground-dark">
                        We specialize in designing the next generation of intelligent interfaces. From AI copilots 
                        and agentic workflows to complex data visualizations, we create intuitive user experiences 
                        for AI-native products that are both powerful and easy to use.
                      </CardDescription>
                      <div>
                        <p className="text-sm font-medium text-foreground-dark/70 mb-2">Ideal For:</p>
                        <p className="text-sm text-foreground-dark/60">Companies building or integrating generative AI and complex ML models.</p>
                      </div>
                      <Button className="w-full group-hover:scale-105 transition-transform duration-300">
                        Design Your AI Experience
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </EnhancedScrollReveal>
            </Suspense>
          </div>
        </Suspense>
      </Section>

      {/* Featured Case Study Section */}
      <Section>
        <Suspense fallback={<SectionLoader />}>
          <EnhancedScrollReveal direction="up">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <Badge variant="outline" className="mb-6 text-brand-primary border-brand-primary/50">
                    Client Success Story
                  </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Building a Market-Ready MVP for <span className="text-gradient">Cygeniq in Record Time</span>
              </h2>
                  
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-3">The Challenge:</h3>
                      <p className="text-foreground/80">
                        Cygeniq needed to move from a validated idea to a functional, high-fidelity prototype 
                        to secure its next round of funding and begin development. They needed a partner who could 
                        deliver speed without sacrificing quality.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-3">The IndexNine Solution:</h3>
                      <p className="text-foreground/80">
                        Leveraging our Sprint 0 process, our visual engineers worked in lockstep with the Cygeniq 
                        founders. We rapidly iterated through wireframes to high-fidelity designs in Figma, building 
                        an interactive prototype that validated the user journey and provided a clear blueprint for 
                        the engineering team.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-3">The Results:</h3>
                      <div className="grid sm:grid-cols-3 gap-4">
                        <div className="text-center p-4 bg-gradient-primary/10 rounded-lg">
                          <div className="text-2xl font-bold text-brand-primary">6 Weeks</div>
                          <div className="text-sm text-foreground/70">from kickoff to complete interactive prototype</div>
                        </div>
                        <div className="text-center p-4 bg-gradient-secondary/10 rounded-lg">
                          <div className="text-2xl font-bold text-brand-secondary">25%</div>
                          <div className="text-sm text-foreground/70">Faster path to securing seed funding</div>
                        </div>
                        <div className="text-center p-4 bg-gradient-accent/10 rounded-lg">
                          <div className="text-2xl font-bold text-brand-accent">Zero</div>
                          <div className="text-sm text-foreground/70">ambiguity in developer handoff</div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-background-secondary/50 p-6 rounded-lg border-l-4 border-brand-primary">
                      <p className="text-foreground/80 italic">
                        "IndexNine's velocity and product mindset were game-changers. They didn't just give us designs; 
                        they gave us a clear, buildable plan that got investors excited and our developers moving."
                      </p>
                      <p className="text-sm text-foreground/60 mt-2">- Founder, Cygeniq</p>
                    </div>
                  </div>
                </div>

                <div className="relative">
                  <div className="aspect-video bg-gradient-hero rounded-2xl flex items-center justify-center">
                    <div className="text-center text-foreground-white/80">
                      <div className="w-20 h-20 bg-foreground-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <div className="w-0 h-0 border-l-[15px] border-l-foreground-white/80 border-t-[10px] border-t-transparent border-b-[10px] border-b-transparent ml-1"></div>
                      </div>
                      <p className="text-lg">Cygeniq Case Study Video</p>
                      <p className="text-sm opacity-70">High-quality image or short video</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </EnhancedScrollReveal>
        </Suspense>
      </Section>

      {/* FAQ Section */}
      <Section className="py-24 lg:py-32 relative overflow-hidden bg-[#fff] text-foreground-dark">
        {/* Enhanced Background Effects */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-1/6 w-96 h-96 bg-brand-purple/8 rounded-full blur-3xl animate-mesh-shift"></div>
          <div className="absolute bottom-20 right-1/6 w-80 h-80 bg-brand-cyan/6 rounded-full blur-3xl animate-mesh-shift" style={{ animationDelay: "3s" }}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-brand-primary/5 rounded-full blur-2xl animate-float"></div>
        </div>
        
        <Suspense fallback={<SectionLoader />}>
          <EnhancedScrollReveal direction="up">
            <div className="max-w-4xl mx-auto relative z-10">
              <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-bold text-brand-purple mb-6">
                  Your Design Questions, <span className="bg-gradient-to-r from-brand-cyan via-brand-primary to-brand-purple bg-clip-text text-transparent">Answered</span>
                </h2>
              </div>

              <Accordion type="single" collapsible className="space-y-4">
                <AccordionItem value="idea" className="border border-border/20 rounded-lg px-6">
                  <AccordionTrigger className="text-left text-lg font-medium">
                    What if I only have an idea?
                  </AccordionTrigger>
                  <AccordionContent className="text-foreground-dark">
                    That's our specialty. Our Product Launch (0 to MVP) offering is designed to take your concept 
                    through brainstorming, wireframing, and prototyping to create a tangible, validated product vision.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="feasible" className="border border-border/20 rounded-lg px-6">
                  <AccordionTrigger className="text-left text-lg font-medium">
                    How do you ensure your designs are technically feasible?
                  </AccordionTrigger>
                  <AccordionContent className="text-foreground-dark">
                    Our "Engineering in our DNA" philosophy is key. Our designers work closely with solution architects 
                    from day one. We use our snap.design system to build with components that are designed for scalability 
                    and reusability, ensuring a seamless handoff to developers.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="ai-process" className="border border-border/20 rounded-lg px-6">
                  <AccordionTrigger className="text-left text-lg font-medium">
                    What makes your AI-powered process different?
                  </AccordionTrigger>
                  <AccordionContent className="text-foreground-dark">
                    We use AI as an accelerator, not a crutch. Our designers leverage AI tools to automate repetitive 
                    tasks and generate initial concepts, freeing them to focus on the high-value strategic work of UX 
                    problem-solving and creating a polished, unique visual identity.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="roi" className="border border-border/20 rounded-lg px-6">
                  <AccordionTrigger className="text-left text-lg font-medium">
                    How do you measure the ROI of a UX Refresh?
                  </AccordionTrigger>
                  <AccordionContent className="text-foreground-dark">
                    We tie design changes to key business metrics. Before we start, we benchmark your current state 
                    (e.g., conversion rates, user satisfaction scores, support ticket volume). The success of the 
                    refresh is measured by the positive movement of those KPIs after the new design is launched.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </EnhancedScrollReveal>
        </Suspense>
      </Section>

      {/* Final CTA & Lead Capture Section */}
      <Section>
        <Suspense fallback={<SectionLoader />}>
          <EnhancedScrollReveal direction="up">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Ready to Accelerate <span className="text-gradient">Your Vision?</span>
              </h2>
              <p className="text-lg md:text-xl text-foreground/80 mb-12">
                Let's talk about what's next for your product. Schedule a no-obligation strategy session with our 
                senior product design experts and discover how Velocity Design can make your vision a reality.
              </p>

              <Card className="max-w-2xl mx-auto">
                <CardHeader>
                  <CardTitle className="text-2xl">Get Your Free Strategy Session</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="fullName">Full Name</Label>
                      <Input id="fullName" placeholder="Enter your full name" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="workEmail">Work Email</Label>
                      <Input id="workEmail" type="email" placeholder="Enter your work email" />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="company">Company</Label>
                    <Input id="company" placeholder="Enter your company name" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="challenge">What's your primary design challenge?</Label>
                    <Textarea 
                      id="challenge" 
                      placeholder="Tell us about your design needs and challenges..."
                      rows={4}
                    />
                  </div>
                  
                  <Button size="lg" className="w-full text-lg">
                    Schedule My Free Strategy Call
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </CardContent>
              </Card>
            </div>
          </EnhancedScrollReveal>
        </Suspense>
      </Section>

      {/* Global CTA Banner */}
      <CTABanner />

      <Footer />
    </div>
  );
};

export default DesignStudio;