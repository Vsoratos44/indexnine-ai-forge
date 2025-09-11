import React from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { CardGlass } from "@/components/ui/CardGlass";
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
import styles from "../../assets/css/stylesheet.module.css";
import { useSEO } from "@/hooks/useSEO";

const ProjectBased = () => {
  useSEO({
    title: "Indexnine Project-Based Team | Handle the entire lifecycle",
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
        {/* Background Orbs */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/6 w-96 h-96 bg-brand-primary/8 rounded-full blur-3xl animate-float"></div>
          <div
            className="absolute bottom-1/4 right-1/6 w-80 h-80 bg-brand-purple/6 rounded-full blur-3xl animate-float"
            style={{ animationDelay: "2s" }}
          ></div>
        </div>

        <div className="relative z-10 container mx-auto pt-48 pb-24">
          <div className="max-w-4xl mx-auto text-center lg:text-left ml-0">
            <h1 className="text-[2.5rem] sm:text-[3rem] lg:text-[4rem] xl:text-[4rem] font-semibold text-foreground mb-6 leading-[1.25] animate-fade-in font-montserrat">
              Your Vision, Delivered. Your Success,{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Guaranteed.
              </span>
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-foreground/85 mb-8 leading-relaxed font-light animate-slide-up font-montserrat max-w-4xl">
              We don't just build software. We build businesses. Our
              project-based engagements are designed to solve your most complex
              challenges and deliver tangible outcomes, because we believe in
              tying our success directly to yours.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-scale-in">
              <Button variant="btnPrimary" size="xl" className="min-w-[280px]">
                Scope a Project
              </Button>
              <Button
                variant="btnSecondary"
                size="xl"
                className="min-w-[280px]"
                onClick={() => {
                  window.open(
                    "https://calendly.com/vaughn-soratos-indexnine",
                    "_blank"
                  );
                }}
              >
                Schedule a Strategy Session
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-24 lg:py-32 bg-[#fff]">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold mb-6 text-foreground-dark ">
              Your Success is Our Success:{" "}
              <span className="text-brand-primary leading-[1.35]">
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
                <strong className="text-brand-primary font-medium">
                  success-fee structure
                </strong>{" "}
                tied to your KPIs or an{" "}
                <strong className="text-brand-primary font-medium">
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
      <section className="pb-24 lg:pb-32 bg-[#fff]">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-20">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold mb-6 text-foreground-dark ">
              Tailored Engagements for Your{" "}
              <span className="text-brand-primary leading-[1.35]">
                Unique Needs
              </span>
            </h2>
            <p className="text-xl text-foreground-dark-muted max-w-4xl mx-auto font-montserrat">
              We understand that every project is different. That's why we offer
              a range of engagement models designed to provide the right level
              of support at the right time.
            </p>
          </div>

          <div className="space-y-20">
            {/* Project-Based Teams */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-semibold text-foreground-dark mb-6 font-montserrat">
                  1. Project-Based Teams
                </h3>
                <p className="text-lg text-foreground-dark-muted leading-relaxed font-montserrat">
                  Our core offering provides you with a dedicated team of
                  experts to take your project from concept to completion. We
                  handle the entire lifecycle, from discovery and design to
                  development, testing, and deployment. This is the ideal model
                  for complex, end-to-end software development projects.
                </p>
              </div>
              <CardGlass className="p-8">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    {" "}
                    <div className="relative rounded-full bg-gradient-to-r from-[#505CFD19] to-brand-purple/20 w-14 h-14 flex items-center justify-center mr-2 border border-white/20 group-hover:shadow-glow transition-all duration-300 group-hover:scale-110">
                      <Target className="w-6 h-6 text-brand-primary" />
                    </div>
                    <span className="font-medium text-foreground-dark">
                      End-to-end project delivery
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="relative rounded-full bg-gradient-to-r from-[#505CFD19] to-brand-purple/20 w-14 h-14 flex items-center justify-center mr-2 border border-white/20 group-hover:shadow-glow transition-all duration-300 group-hover:scale-110">
                      <Users className="w-6 h-6 text-brand-primary" />
                    </div>
                    <span className="font-medium text-foreground-dark">
                      Dedicated expert team
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="relative rounded-full bg-gradient-to-r from-[#505CFD19] to-brand-purple/20 w-14 h-14 flex items-center justify-center mr-2 border border-white/20 group-hover:shadow-glow transition-all duration-300 group-hover:scale-110">
                      <Shield className="w-6 h-6 text-brand-primary" />
                    </div>
                    <span className="font-medium text-foreground-dark">
                      Full lifecycle management
                    </span>
                  </div>
                </div>
              </CardGlass>
            </div>

            {/* Specialty Services */}
            <div>
              <h3 className="text-3xl font-semibold text-foreground-dark mb-8 font-montserrat">
                2. Specialty Services & Consulting Engagements
              </h3>
              <p className="text-lg text-foreground-dark-muted mb-12 max-w-4xl font-montserrat">
                For more targeted needs, we offer a suite of specialty services
                designed to provide strategic guidance and accelerate your
                initiatives:
              </p>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="relative bg-gradient-card-light backdrop-blur-xl rounded-3xl p-6 shadow-glass-lg border border-glass-border hover:shadow-glow transition-all duration-500 transform hover:scale-105">
                  <h4 className="text-xl font-semibold text-foreground-dark mb-2 font-montserrat">
                    Sprint Zero Engagement
                  </h4>
                  <p className="text-brand-primary font-semibold mb-3 text-lg">
                    $25,000
                  </p>
                  <p className="text-foreground-dark-muted font-montserrat">
                    A foundational planning and discovery sprint to de-risk your
                    project, define scope, and create a clear roadmap before you
                    commit to a full build.
                  </p>
                </div>

                <div className="relative bg-gradient-card-light backdrop-blur-xl rounded-3xl p-6 shadow-glass-lg border border-glass-border hover:shadow-glow transition-all duration-500 transform hover:scale-105">
                  <h4 className="text-xl font-semibold text-foreground-dark mb-2 font-montserrat">
                    AI Audit
                  </h4>
                  <p className="text-brand-primary font-semibold mb-3 text-lg">
                    $35,000
                  </p>
                  <p className="text-foreground-dark-muted font-montserrat">
                    A comprehensive assessment of your current systems and data
                    to identify high-impact opportunities for leveraging
                    artificial intelligence.
                  </p>
                </div>

                <div className="relative bg-gradient-card-light backdrop-blur-xl rounded-3xl p-6 shadow-glass-lg border border-glass-border hover:shadow-glow transition-all duration-500 transform hover:scale-105">
                  <h4 className="text-xl font-semibold text-foreground-dark mb-2 font-montserrat">
                    AI Audit Pro
                  </h4>
                  <p className="text-brand-primary font-semibold mb-3 text-lg">
                    $42,500
                  </p>
                  <p className="text-foreground-dark-muted font-montserrat">
                    An advanced, in-depth audit that includes strategic
                    roadmapping and a detailed implementation plan for your AI
                    initiatives.
                  </p>
                </div>

                <div className="relative bg-gradient-card-light backdrop-blur-xl rounded-3xl p-6 shadow-glass-lg border border-glass-border hover:shadow-glow transition-all duration-500 transform hover:scale-105">
                  <h4 className="text-xl font-semibold text-foreground-dark mb-2 font-montserrat">
                    AI Assessment, Roadmap & Enablement
                  </h4>
                  <p className="text-foreground-dark-muted font-montserrat">
                    A full-service consulting offering to guide you through
                    every stage of your AI journey, from initial assessment to
                    building internal capabilities.
                  </p>
                </div>

                <div className="relative bg-gradient-card-light backdrop-blur-xl rounded-3xl p-6 shadow-glass-lg border border-glass-border hover:shadow-glow transition-all duration-500 transform hover:scale-105 md:col-span-2">
                  <h4 className="text-xl font-semibold text-foreground-dark mb-2 font-montserrat">
                    Tech Strategy & Testing Strategy (APQR)
                  </h4>
                  <p className="text-foreground-dark-muted font-montserrat">
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

      <div className="bg-gradient-to-t from-[#fff] via-[#fcfcfc] to-[#fff] text-foreground">
        <div className={` ${styles.sectionBgData}`}>
          {/* Case Studies Section */}
          <section className="pb-24 lg:pb-32 bg-transparent">
            <div className="container mx-auto max-w-6xl">
              <div className="text-center mb-16">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold mb-6 text-foreground-dark ">
                  From Complex Challenges to{" "}
                  <span className="text-brand-primary leading-[1.35]">
                    Proven Success
                  </span>
                </h2>
                <p className="text-xl text-foreground-dark-muted max-w-4xl mx-auto font-montserrat">
                  We have a track record of delivering transformative results
                  for our clients. Here are just a few examples of the
                  challenges we've solved:
                </p>
              </div>

              <div className="space-y-6">
                {/* Sports Interactive Case Study */}
                <Link to="/insights/case-studies/annotate" className="block">
                  <div className="relative bg-gradient-card-light backdrop-blur-xl rounded-3xl p-8 shadow-glass-lg border border-glass-border hover:shadow-glow transition-all duration-500 transform hover:scale-105 cursor-pointer">
                    <div className="flex items-start space-x-6">
                      <div
                        className={`relative w-20 h-20 flex mb-6 items-center justify-center transition-all ${styles.icnBg}`}
                      >
                        <Zap className="w-8 h-8 text-brand-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-semibold text-foreground-dark mb-4 font-montserrat">
                          Case Study Highlight 1: Sports Interactive
                        </h3>
                        <div className="space-y-3 text-foreground-dark-muted font-montserrat">
                          <p>
                            <strong className="text-brand-primary font-medium">
                              Challenge:
                            </strong>{" "}
                            A top-tier sports media agency was struggling to
                            automate real-time fan engagement, a critical but
                            costly and unscalable manual process.
                          </p>
                          <p>
                            <strong className="text-brand-primary font-medium">
                              Solution:
                            </strong>{" "}
                            We engineered a bespoke, low-latency AI engine that
                            automated the entire workflow, from data ingestion
                            to content generation.
                          </p>
                          <p>
                            <strong className="text-brand-primary font-medium">
                              Outcome:
                            </strong>{" "}
                            Eliminated a six-person operations team, delivered
                            live social media content in under 15 seconds, and
                            created a scalable platform for future growth.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>

                {/* Genesis Case Study */}
                <Link to="/insights/case-studies/genesys" className="block">
                  <div className="relative bg-gradient-card-light backdrop-blur-xl rounded-3xl p-8 shadow-glass-lg border border-glass-border hover:shadow-glow transition-all duration-500 transform hover:scale-105 cursor-pointer">
                    <div className="flex items-start space-x-6">
                      <div
                        className={`relative w-20 h-20 flex mb-6 items-center justify-center transition-all ${styles.icnBg}`}
                      >
                        <TrendingUp className="w-8 h-8 text-brand-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-semibold text-foreground-dark mb-4 font-montserrat">
                          Case Study Highlight 2: Genesis
                        </h3>
                        <div className="space-y-3 text-foreground-dark-muted font-montserrat">
                          <p>
                            <strong className="text-brand-primary font-medium">
                              Challenge:
                            </strong>{" "}
                            An urgent client need required the rapid deployment
                            of a skilled, five-person team to accelerate a
                            critical project timeline.
                          </p>
                          <p>
                            <strong className="text-brand-primary font-medium">
                              Solution:
                            </strong>{" "}
                            We sourced and deployed a full team immediately,
                            bypassing the lengthy hiring process that would have
                            stalled the project.
                          </p>
                          <p>
                            <strong className="text-brand-primary font-medium">
                              Outcome:
                            </strong>{" "}
                            The project was accelerated, and the client was able
                            to meet their market deadlines, demonstrating our
                            ability to deliver not just technology, but also
                            talent, at speed.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>

                {/* GPTW Case Study */}
                <Link to="#." className="block">
                  <div className="relative bg-gradient-card-light backdrop-blur-xl rounded-3xl p-8 shadow-glass-lg border border-glass-border hover:shadow-glow transition-all duration-500 transform hover:scale-105 cursor-pointer">
                    <div className="flex items-start space-x-6">
                      <div
                        className={`relative w-20 h-20 flex mb-6 items-center justify-center transition-all ${styles.icnBg}`}
                      >
                        <Target className="w-8 h-8 text-brand-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-semibold text-foreground-dark mb-4 font-montserrat">
                          Case Study Highlight 3: GPTW
                        </h3>
                        <div className="space-y-3 text-foreground-dark-muted font-montserrat">
                          <p>
                            <strong className="text-brand-primary font-medium">
                              Challenge:
                            </strong>{" "}
                            A key client initiative was stalled due to a lack of
                            a clear path forward.
                          </p>
                          <p>
                            <strong className="text-brand-primary font-medium">
                              Solution:
                            </strong>{" "}
                            We delivered a comprehensive technology roadmap that
                            provided strategic clarity and a detailed,
                            actionable plan.
                          </p>
                          <p>
                            <strong className="text-brand-primary font-medium">
                              Outcome:
                            </strong>{" "}
                            The client was able to move forward with confidence,
                            with all stakeholders aligned on the vision and the
                            execution plan.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>

                <div className="text-center pt-12">
                  <p className="text-foreground-dark-muted italic font-montserrat">
                    (We have a deep backlog of case studies that further
                    demonstrate our expertise in Product Engineering, Staff
                    Augmentation, AI, and Tech Strategy with clients like
                    Genysis, Airworks, Annotates, CygeniQ, JustTransform, and
                    Onphase/Docuphase.)
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Process Section */}
          <section className="pb-24 lg:pb-32 bg-transparent">
            <div className="container mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold mb-6 text-foreground-dark ">
                  A Disciplined Path from{" "}
                  <span className="text-brand-primary leading-[1.35]">
                    Vision to Value
                  </span>
                </h2>
                <p className="text-xl text-foreground-dark-muted max-w-4xl mx-auto font-montserrat">
                  Our engagement process is designed to be transparent,
                  collaborative, and ruthlessly efficient.
                </p>
              </div>

              <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
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
                    className="relative bg-gradient-card-light backdrop-blur-xl rounded-3xl p-6 shadow-glass-lg border border-glass-border hover:shadow-glow transition-all duration-500 transform hover:scale-105 group text-left"
                  >
                    <div
                      className={`relative w-16 h-16 flex mb-6 items-center justify-center transition-all ${styles.icnBg}`}
                    >
                      {" "}
                      <step.icon className="w-6 h-6 text-brand-primary" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground-dark mb-3 font-montserrat">
                      {step.title}
                    </h3>
                    <p className="text-sm text-foreground-dark-muted font-montserrat">
                      {step.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </div>
      {/* CTA Section */}
      <section className={`py-24 lg:py-32 text-white ${styles.ctaBg}`}>
        <div className="container mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold mb-6 text-foreground-white">
            <span className="leading-[1.4]">
              Let's Build the Future. Together.
            </span>
          </h2>
          <p className="text-xl text-foreground-white/80 mb-12 font-montserrat">
            Ready to partner with a team that is as invested in your success as
            you are? Let's talk.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="btnSecondary" size="lg">
              Contact Us
            </Button>
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
