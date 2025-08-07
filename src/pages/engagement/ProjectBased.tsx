import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import {
  Handshake,
  Zap,
  Eye,
  Rocket,
  BarChart3,
  Sprout,
  Settings,
  Trophy,
  Users,
  Target,
  TrendingUp,
  Shield,
} from "lucide-react";

const ProjectBased = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-24 bg-gradient-hero relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/6 w-96 h-96 bg-brand-primary/8 rounded-full blur-3xl animate-float"></div>
          <div
            className="absolute bottom-1/4 right-1/6 w-80 h-80 bg-brand-purple/6 rounded-full blur-3xl animate-float"
            style={{ animationDelay: "2s" }}
          ></div>
        </div>

        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground-white mb-8 leading-tight font-montserrat">
              Your Vision, Delivered. Your Success,{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Guaranteed.
              </span>
            </h1>
            <p className="text-xl text-foreground-white/80 mb-12 leading-relaxed font-montserrat max-w-4xl mx-auto">
              We don't just build software. We build businesses. Our
              project-based engagements are designed to solve your most complex
              challenges and deliver tangible outcomes, because we believe in
              tying our success directly to yours.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="xl">
                Scope a Project
              </Button>
              <Button variant="hero-secondary" size="xl">
                Schedule a Strategy Session
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-24 bg-gradient-section">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground-dark mb-8 font-montserrat">
              Your Success is Our Success:{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                The Outcome-Based Engagement Model
              </span>
            </h2>
            <div className="max-w-4xl mx-auto space-y-6 text-lg text-foreground-dark-muted leading-relaxed font-montserrat">
              <p>
                For too long, the traditional consulting model has been broken.
                You pay for effort, not for results. We're changing that. Our
                engagement philosophy is built on a foundation of shared risk
                and shared reward. We are so confident in our ability to deliver
                that we predicate our fees on the successful outcomes we
                generate for your business.
              </p>
              <p>
                This isn't just a talking point; it's a core tenet of our
                operational model. Whether it's through a{" "}
                <strong className="text-brand-primary">
                  success-fee structure
                </strong>{" "}
                tied to your KPIs or an{" "}
                <strong className="text-brand-primary">
                  outcome-based agreement
                </strong>
                , we are a partner in your venture, not just a vendor. This
                ensures complete alignment and a relentless focus on what truly
                matters: delivering value and driving your business forward.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Engagement Models Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6 font-montserrat">
              Tailored Engagements for Your{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Unique Needs
              </span>
            </h2>
            <p className="text-xl text-foreground-muted max-w-4xl mx-auto font-montserrat">
              We understand that every project is different. That's why we offer
              a range of engagement models designed to provide the right level
              of support at the right time.
            </p>
          </div>

          <div className="space-y-20">
            {/* Project-Based Teams */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-bold text-foreground mb-6 font-montserrat">
                  1. Project-Based Teams
                </h3>
                <p className="text-lg text-foreground-muted leading-relaxed font-montserrat">
                  Our core offering provides you with a dedicated team of
                  experts to take your project from concept to completion. We
                  handle the entire lifecycle, from discovery and design to
                  development, testing, and deployment. This is the ideal model
                  for complex, end-to-end software development projects.
                </p>
              </div>
              <div className="relative bg-gradient-card backdrop-blur-xl rounded-3xl p-8 shadow-glass-lg border border-glass-border">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Target className="w-5 h-5 text-brand-primary" />
                    <span className="font-medium text-foreground">
                      End-to-end project delivery
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Users className="w-5 h-5 text-brand-primary" />
                    <span className="font-medium text-foreground">
                      Dedicated expert team
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Shield className="w-5 h-5 text-brand-primary" />
                    <span className="font-medium text-foreground">
                      Full lifecycle management
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Specialty Services */}
            <div>
              <h3 className="text-3xl font-bold text-foreground mb-8 font-montserrat">
                2. Specialty Services & Consulting Engagements
              </h3>
              <p className="text-lg text-foreground-muted mb-12 max-w-4xl font-montserrat">
                For more targeted needs, we offer a suite of specialty services
                designed to provide strategic guidance and accelerate your
                initiatives:
              </p>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="relative bg-gradient-card backdrop-blur-xl rounded-3xl p-6 shadow-glass-lg border border-glass-border hover:shadow-glow transition-all duration-500 transform hover:scale-105">
                  <h4 className="text-xl font-bold text-foreground mb-2 font-montserrat">
                    Sprint Zero Engagement
                  </h4>
                  <p className="text-brand-primary font-semibold mb-3 text-lg">
                    $25,000
                  </p>
                  <p className="text-foreground-muted font-montserrat">
                    A foundational planning and discovery sprint to de-risk your
                    project, define scope, and create a clear roadmap before you
                    commit to a full build.
                  </p>
                </div>

                <div className="relative bg-gradient-card backdrop-blur-xl rounded-3xl p-6 shadow-glass-lg border border-glass-border hover:shadow-glow transition-all duration-500 transform hover:scale-105">
                  <h4 className="text-xl font-bold text-foreground mb-2 font-montserrat">
                    AI Audit
                  </h4>
                  <p className="text-brand-primary font-semibold mb-3 text-lg">
                    $35,000
                  </p>
                  <p className="text-foreground-muted font-montserrat">
                    A comprehensive assessment of your current systems and data
                    to identify high-impact opportunities for leveraging
                    artificial intelligence.
                  </p>
                </div>

                <div className="relative bg-gradient-card backdrop-blur-xl rounded-3xl p-6 shadow-glass-lg border border-glass-border hover:shadow-glow transition-all duration-500 transform hover:scale-105">
                  <h4 className="text-xl font-bold text-foreground mb-2 font-montserrat">
                    AI Audit Pro
                  </h4>
                  <p className="text-brand-primary font-semibold mb-3 text-lg">
                    $42,500
                  </p>
                  <p className="text-foreground-muted font-montserrat">
                    An advanced, in-depth audit that includes strategic
                    roadmapping and a detailed implementation plan for your AI
                    initiatives.
                  </p>
                </div>

                <div className="relative bg-gradient-card backdrop-blur-xl rounded-3xl p-6 shadow-glass-lg border border-glass-border hover:shadow-glow transition-all duration-500 transform hover:scale-105">
                  <h4 className="text-xl font-bold text-foreground mb-2 font-montserrat">
                    AI Assessment, Roadmap & Enablement
                  </h4>
                  <p className="text-foreground-muted font-montserrat">
                    A full-service consulting offering to guide you through
                    every stage of your AI journey, from initial assessment to
                    building internal capabilities.
                  </p>
                </div>

                <div className="relative bg-gradient-card backdrop-blur-xl rounded-3xl p-6 shadow-glass-lg border border-glass-border hover:shadow-glow transition-all duration-500 transform hover:scale-105 md:col-span-2">
                  <h4 className="text-xl font-bold text-foreground mb-2 font-montserrat">
                    Tech Strategy & Testing Strategy (APQR)
                  </h4>
                  <p className="text-foreground-muted font-montserrat">
                    Strategic consulting to modernize your technology stack and
                    implement a world-class quality and performance testing
                    framework.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-24 bg-gradient-section">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground-dark mb-6 font-montserrat">
              From Complex Challenges to{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Proven Success
              </span>
            </h2>
            <p className="text-xl text-foreground-dark-muted max-w-4xl mx-auto font-montserrat">
              We have a track record of delivering transformative results for
              our clients. Here are just a few examples of the challenges we've
              solved:
            </p>
          </div>

          <div className="space-y-8">
            {/* Sports Interactive Case Study */}
            <div className="relative bg-gradient-card backdrop-blur-xl rounded-3xl p-8 shadow-glass-lg border border-glass-border hover:shadow-glow transition-all duration-500 transform hover:scale-105">
              <div className="flex items-start space-x-6">
                <div className="bg-gradient-to-br from-brand-primary to-brand-accent rounded-2xl w-16 h-16 flex items-center justify-center">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-foreground mb-4 font-montserrat">
                    Case Study Highlight 1: Sports Interactive
                  </h3>
                  <div className="space-y-3 text-foreground-muted font-montserrat">
                    <p>
                      <strong className="text-foreground">Challenge:</strong> A
                      top-tier sports media agency was struggling to automate
                      real-time fan engagement, a critical but costly and
                      unscalable manual process.
                    </p>
                    <p>
                      <strong className="text-foreground">Solution:</strong> We
                      engineered a bespoke, low-latency AI engine that automated
                      the entire workflow, from data ingestion to content
                      generation.
                    </p>
                    <p>
                      <strong className="text-foreground">Outcome:</strong>{" "}
                      Eliminated a six-person operations team, delivered live
                      social media content in under 15 seconds, and created a
                      scalable platform for future growth.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Genesis Case Study */}
            <div className="relative bg-gradient-card backdrop-blur-xl rounded-3xl p-8 shadow-glass-lg border border-glass-border hover:shadow-glow transition-all duration-500 transform hover:scale-105">
              <div className="flex items-start space-x-6">
                <div className="bg-gradient-to-br from-brand-primary to-brand-accent rounded-2xl w-16 h-16 flex items-center justify-center">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-foreground mb-4 font-montserrat">
                    Case Study Highlight 2: Genesis
                  </h3>
                  <div className="space-y-3 text-foreground-muted font-montserrat">
                    <p>
                      <strong className="text-foreground">Challenge:</strong> An
                      urgent client need required the rapid deployment of a
                      skilled, five-person team to accelerate a critical project
                      timeline.
                    </p>
                    <p>
                      <strong className="text-foreground">Solution:</strong> We
                      sourced and deployed a full team immediately, bypassing
                      the lengthy hiring process that would have stalled the
                      project.
                    </p>
                    <p>
                      <strong className="text-foreground">Outcome:</strong> The
                      project was accelerated, and the client was able to meet
                      their market deadlines, demonstrating our ability to
                      deliver not just technology, but also talent, at speed.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* GPTW Case Study */}
            <div className="relative bg-gradient-card backdrop-blur-xl rounded-3xl p-8 shadow-glass-lg border border-glass-border hover:shadow-glow transition-all duration-500 transform hover:scale-105">
              <div className="flex items-start space-x-6">
                <div className="bg-gradient-to-br from-brand-primary to-brand-accent rounded-2xl w-16 h-16 flex items-center justify-center">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-foreground mb-4 font-montserrat">
                    Case Study Highlight 3: GPTW
                  </h3>
                  <div className="space-y-3 text-foreground-muted font-montserrat">
                    <p>
                      <strong className="text-foreground">Challenge:</strong> A
                      key client initiative was stalled due to a lack of a clear
                      path forward.
                    </p>
                    <p>
                      <strong className="text-foreground">Solution:</strong> We
                      delivered a comprehensive technology roadmap that provided
                      strategic clarity and a detailed, actionable plan.
                    </p>
                    <p>
                      <strong className="text-foreground">Outcome:</strong> The
                      client was able to move forward with confidence, with all
                      stakeholders aligned on the vision and the execution plan.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center mt-8">
              <p className="text-foreground-dark-muted italic font-montserrat">
                (We have a deep backlog of case studies that further demonstrate
                our expertise in Product Engineering, Staff Augmentation, AI,
                and Tech Strategy with clients like Genysis, Airworks,
                Annotates, CygeniQ, JustTransform, and Onphase/Docuphase.)
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-background-light">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground-dark mb-6 font-montserrat">
              A Disciplined Path from{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Vision to Value
              </span>
            </h2>
            <p className="text-xl text-foreground-dark-muted max-w-4xl mx-auto font-montserrat">
              Our engagement process is designed to be transparent,
              collaborative, and ruthlessly efficient.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
            {[
              {
                icon: Target,
                title: "Discovery & Alignment",
                description:
                  "We start by deeply understanding your business, your challenges, and your goals. We work with you to define what success looks like and ensure we are fully aligned on the desired outcomes.",
              },
              {
                icon: BarChart3,
                title: "Strategic Planning & Roadmapping",
                description:
                  "We develop a detailed project plan and roadmap, outlining the key milestones, deliverables, and timelines.",
              },
              {
                icon: Rocket,
                title: "Agile Execution & Delivery",
                description:
                  "Our teams operate in an agile, iterative manner, with regular check-ins and demos to ensure you have full visibility into our progress.",
              },
              {
                icon: Users,
                title: "Continuous Collaboration",
                description:
                  "We believe in open communication and a true partnership. Your feedback is integral to our process, and we work closely with your stakeholders at every stage.",
              },
              {
                icon: Trophy,
                title: "Outcome Measurement & Optimization",
                description:
                  "We don't disappear after deployment. We work with you to measure the impact of our work and identify opportunities for ongoing improvement and future collaboration.",
              },
            ].map((step, index) => (
              <div
                key={index}
                className="relative bg-gradient-card backdrop-blur-xl rounded-3xl p-6 shadow-glass-lg border border-glass-border hover:shadow-glow transition-all duration-500 transform hover:scale-105 group text-center"
              >
                <div className="bg-gradient-to-br from-brand-primary to-brand-accent rounded-2xl w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                  <step.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-3 font-montserrat">
                  {step.title}
                </h3>
                <p className="text-sm text-foreground-muted font-montserrat">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-background-dark">
        <div className="container mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground-white mb-8 font-montserrat">
            Let's Build the Future.{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Together.
            </span>
          </h2>
          <p className="text-xl text-foreground-white/80 mb-12 font-montserrat">
            Ready to partner with a team that is as invested in your success as
            you are? Let's talk.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="xl">
              Contact Us
            </Button>
            <Button variant="hero" size="xl">
              Schedule a Strategy Session
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProjectBased;
