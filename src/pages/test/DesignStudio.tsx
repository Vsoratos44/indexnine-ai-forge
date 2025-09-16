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
    canonicalUrl: "https://www.indexnine.com/test/studios/design",
    keywords: "UI/UX design, visual engineering, design sprint, AI design, product design, startup design, MVP design",
    ogImage: "https://www.indexnine.com/images/design-studio-og.jpg",
  });

  return (
    <div className="min-h-screen">
      {/* SEO Structured Data */}
      <WebPageSchema
        title="Design Studio - Accelerating Visual Engineering | IndexNine"
        description="Our senior UI/UX experts leverage modern AI systems to move at unmatched speed—taking unrealized concepts to functional products."
        url="https://www.indexnine.com/test/studios/design"
      />
      
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://www.indexnine.com" },
          { name: "Studios", url: "https://www.indexnine.com/studios" },
          { name: "Design Studio", url: "https://www.indexnine.com/test/studios/design" }
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
      <Section className="py-24 lg:py-32 bg-[#fff]">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-semibold text-foreground-dark mb-6 leading-[1.25]">
              The Design Disconnect:{" "}
              <span className="text-brand-primary leading-[1.25]">
                Bridging Vision and Reality
              </span>
            </h2>
            <p className="text-lg text-foreground-dark-muted mb-12 max-w-6xl mb-0 mx-auto">
              Traditional design studios often lack deep engineering context, delivering beautiful mockups that are difficult to build. 
              This gap between vision and feasible execution is where products stall and tech debt begins.{" "}
              <strong>We were founded to eliminate that gap.</strong>
            </p>
          </div>
        </div>
      </Section>

      {/* The IndexNine Philosophy Section */}
      <Section className="pb-24 lg:pb-32 bg-[#fff]">
        <div className="container mx-auto px-6">
          <div className="max-w-8xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold mb-6 text-foreground-dark">
                Our Design Philosophy
              </h2>
              <p className="text-lg text-foreground-dark/80 max-w-3xl mx-auto">
                Our approach is built on a foundation that marries creativity with pragmatism, ensuring every 
                design decision is a step toward a successful product.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <Suspense fallback={<SectionLoader />}>
                <EnhancedScrollReveal direction="up" delay={200}>
                  <div className="relative overflow-hidden bg-[#ffffff39] border border-[#00000019] rounded-2xl p-8 hover:shadow-glass-sm transition-all duration-500 transform hover:scale-102 hover:-translate-y-2 animate-fade-in group text-left">
                    <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/5 via-transparent to-brand-purple/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="relative w-16 h-16 mb-6 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center shadow-lg shadow-purple-500/20">
                      <Zap className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="relative text-xl font-semibold mb-4 text-foreground-dark">
                      Velocity by Design
                    </h3>
                    <p className="relative text-foreground-dark/80">
                      We believe speed is a feature. By using AI accelerators like snap.design and snap.brain, 
                      we dramatically shorten the time from ideation to interactive prototype, giving you critical 
                      market feedback faster.
                    </p>
                  </div>
                </EnhancedScrollReveal>
              </Suspense>

              <Suspense fallback={<SectionLoader />}>
                <EnhancedScrollReveal direction="up" delay={400}>
                  <div className="relative overflow-hidden bg-[#ffffff39] border border-[#00000019] rounded-2xl p-8 hover:shadow-glass-sm transition-all duration-500 transform hover:scale-102 hover:-translate-y-2 animate-fade-in group text-left">
                    <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/5 via-transparent to-brand-purple/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="relative w-16 h-16 mb-6 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center shadow-lg shadow-cyan-500/20">
                      <Wrench className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="relative text-xl font-semibold mb-4 text-foreground-dark">
                      Engineering in our DNA
                    </h3>
                    <p className="relative text-foreground-dark/80">
                      We are visual engineers. Our designers think in terms of components, scalability, and 
                      technical feasibility from day one. This ensures we hand off designs that your engineering 
                      team can actually build, minimizing rework and accelerating the development lifecycle.
                    </p>
                  </div>
                </EnhancedScrollReveal>
              </Suspense>

              <Suspense fallback={<SectionLoader />}>
                <EnhancedScrollReveal direction="up" delay={600}>
                  <div className="relative overflow-hidden bg-[#ffffff39] border border-[#00000019] rounded-2xl p-8 hover:shadow-glass-sm transition-all duration-500 transform hover:scale-102 hover:-translate-y-2 animate-fade-in group text-left">
                    <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/5 via-transparent to-brand-purple/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="relative w-16 h-16 mb-6 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center shadow-lg shadow-green-500/20">
                      <Handshake className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="relative text-xl font-semibold mb-4 text-foreground-dark">
                      Partnership in Practice
                    </h3>
                    <p className="relative text-foreground-dark/80">
                      We begin every engagement with our Sprint 0 for Refresh, a collaborative 2-6 week process 
                      designed to de-risk your investment. We define the problem, iterate on solutions, and deliver 
                      a finalized design with clear specifications, ensuring complete alignment on business outcomes.
                    </p>
                  </div>
                </EnhancedScrollReveal>
              </Suspense>
            </div>
          </div>
        </div>
      </Section>

      {/* Core Offerings Section */}
      <Section className="pb-24 lg:pb-32 bg-[#fff]">
        <div className="container mx-auto px-6">
          <div className="max-w-8xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold mb-6 text-foreground-dark">
                The Velocity Suite: Design Offerings for Every Stage
              </h2>
              <p className="text-lg text-foreground-dark/80 max-w-3xl mx-auto">
                From launching a new venture to modernizing an enterprise platform, our core offerings are 
                built to deliver measurable impact.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-6">
              <Suspense fallback={<SectionLoader />}>
                <EnhancedScrollReveal direction="up" delay={200}>
                  <Card className="p-8 bg-[#fff] border-card-border shadow-lg hover:shadow-xl transition-all duration-300 relative text-foreground-dark flex flex-col">
                    <CardContent className="p-0 h-full">
                      <div className="flex items-center gap-4 mb-6">
                        <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center shadow-lg shadow-purple-500/20">
                          <Rocket className="h-8 w-8 text-white" />
                        </div>
                      </div>
                      <h3 className="text-2xl font-semibold mb-4">
                        Product Launch (0 to MVP)
                      </h3>
                      <p className="text-foreground-dark/80 mb-6">
                        We partner with funded startups to transform bold ideas into viable, market-ready products. 
                        We bring mature processes to de-risk the journey from concept to a high-fidelity, interactive 
                        prototype that's ready to build and fundraise against.
                      </p>

                      <p className="text-sm text-foreground-dark/70 mb-4">
                        <strong>Ideal For:</strong> Funded startups needing to launch a scalable MVP quickly.
                      </p>

                      <Button className="w-full mt-auto">
                        Launch Your Product
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </CardContent>
                  </Card>
                </EnhancedScrollReveal>
              </Suspense>

              <Suspense fallback={<SectionLoader />}>
                <EnhancedScrollReveal direction="up" delay={400}>
                  <Card className="p-8 bg-[#fff] border-card-border shadow-lg hover:shadow-xl transition-all duration-300 relative text-foreground-dark flex flex-col">
                    <CardContent className="p-0 h-full">
                      <div className="flex items-center gap-4 mb-6">
                        <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center shadow-lg shadow-cyan-500/20">
                          <RefreshCw className="h-8 w-8 text-white" />
                        </div>
                      </div>
                      <h3 className="text-2xl font-semibold mb-4">
                        Product Modernization (UX Refresh)
                      </h3>
                      <p className="text-foreground-dark/80 mb-6">
                        We breathe new life into existing applications. Our UX Refresh process enhances usability, 
                        updates interfaces to modern standards, and optimizes user flows to reduce churn, increase 
                        engagement, and boost customer satisfaction.
                      </p>

                      <p className="text-sm text-foreground-dark/70 mb-4">
                        <strong>Ideal For:</strong> Established products with 5+ years of technical debt or declining user engagement.
                      </p>

                      <Button className="w-full mt-auto">
                        Modernize Your Platform
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </CardContent>
                  </Card>
                </EnhancedScrollReveal>
              </Suspense>

              <Suspense fallback={<SectionLoader />}>
                <EnhancedScrollReveal direction="up" delay={600}>
                  <Card className="p-8 bg-[#000000] border-card-border shadow-lg hover:shadow-xl transition-all duration-300 relative flex flex-col">
                    <CardContent className="p-0 h-full">
                      <div className="flex items-center gap-4 mb-6">
                        <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center shadow-lg shadow-green-500/20">
                          <Brain className="h-8 w-8 text-white" />
                        </div>
                      </div>
                      <h3 className="text-2xl font-semibold mb-4 text-foreground">
                        Agentic AI Design
                      </h3>
                      <p className="text-foreground/80 mb-6">
                        We specialize in designing the next generation of intelligent interfaces. From AI copilots 
                        and agentic workflows to complex data visualizations, we create intuitive user experiences 
                        for AI-native products that are both powerful and easy to use.
                      </p>

                      <p className="text-sm text-foreground/70 mb-4">
                        <strong>Ideal For:</strong> Companies building or integrating generative AI and complex ML models.
                      </p>

                      <Button variant="btnSecondary" className="w-full mt-auto rounded-full">
                        Design Your AI Experience
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </CardContent>
                  </Card>
                </EnhancedScrollReveal>
              </Suspense>
            </div>
          </div>
        </div>
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
      <Section className="pb-24 lg:pb-32 bg-[#fff]">
        <div className="container mx-auto px-6">
          <div className="max-w-8xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold mb-6 text-foreground-dark">
                Your Design Questions, Answered
              </h2>
            </div>

            <Suspense fallback={<SectionLoader />}>
              <EnhancedScrollReveal direction="up">
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
              </EnhancedScrollReveal>
            </Suspense>
          </div>
        </div>
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