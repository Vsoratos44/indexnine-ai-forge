import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { CardGlass } from "@/components/ui/CardGlass";
import { Users, Clock, Shield, Target, Zap, CheckCircle } from "lucide-react";
import styles from "../../assets/css/stylesheet.module.css";

const DedicatedTeams = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-[85vh] overflow-hidden bg-black">
        {/* Background Orbs */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/6 w-96 h-96 bg-brand-primary/8 rounded-full blur-3xl animate-float"></div>
          <div
            className="absolute bottom-1/4 right-1/6 w-80 h-80 bg-brand-purple/6 rounded-full blur-3xl animate-float"
            style={{ animationDelay: "2s" }}
          ></div>
        </div>

        <div className="relative z-10 container mx-auto px-6 pt-48 pb-24">
          <div className="max-w-4xl mx-auto text-center lg:text-left ml-0">
            <h1 className="text-[2.5rem] sm:text-[3rem] lg:text-[4rem] xl:text-[4rem] font-semibold text-foreground mb-6 leading-[1.25] animate-fade-in font-montserrat">
              Dedicated <br />
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Teams
              </span>
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-foreground/85 mb-8 leading-relaxed font-light animate-slide-up font-montserrat max-w-4xl">
              Extend your development capacity with dedicated teams that
              integrate seamlessly with your existing processes and culture.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-scale-in">
              <Button variant="btnPrimary" size="xl" className="min-w-[280px]">
                Build Your Team
              </Button>
              <Button
                variant="btnSecondary"
                size="xl"
                className="min-w-[280px]"
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Team Features */}
      <section className="py-24 bg-background-section">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold mb-6 text-foreground-dark ">
              Dedicated Team Benefits
            </h2>
            <p className="text-xl text-foreground-dark-muted max-w-3xl mx-auto font-montserrat mb-16">
              Get the best of both worlds - dedicated resources with the
              flexibility and expertise of our team.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Users,
                title: "Expert Team Members",
                description:
                  "Carefully selected professionals with proven expertise in your technology stack.",
              },
              {
                icon: Clock,
                title: "Full-Time Commitment",
                description:
                  "100% dedicated resources focused exclusively on your project and goals.",
              },
              {
                icon: Shield,
                title: "Seamless Integration",
                description:
                  "Teams that integrate smoothly with your existing processes and workflows.",
              },
              {
                icon: Target,
                title: "Aligned Objectives",
                description:
                  "Team members aligned with your business objectives and success metrics.",
              },
              {
                icon: Zap,
                title: "Rapid Scaling",
                description:
                  "Quickly scale your team up or down based on project requirements.",
              },
              {
                icon: CheckCircle,
                title: "Proven Methodology",
                description:
                  "Established processes and best practices for efficient collaboration.",
              },
            ].map((benefit, index) => (
              <CardGlass className="p-8" key={index}>
                <div className="relative bg-gradient-to-br from-brand-primary/20 via-brand-primary/10 to-brand-purple/20 backdrop-blur-md rounded-2xl w-20 h-20 flex items-center justify-center mb-4 border border-brand-primary/30 group-hover:shadow-glow transition-all duration-300 group-hover:scale-110">
                  <benefit.icon className="w-8 h-8 text-brand-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground-dark mb-4">
                  {benefit.title}
                </h3>
                <p className="text-foreground-dark-muted mb-6">
                  {benefit.description}
                </p>
              </CardGlass>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={`py-24 lg:py-32 text-white ${styles.ctaBg}`}>
        <div className="container mx-auto px-6 lg:px-8 text-center max-w-6xl">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold mb-6 text-foreground-white">
            {" "}
            <span className="leading-[1.4]">
              Ready to Expand Your Development Capacity?
            </span>
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Let's discuss how our dedicated teams can accelerate your
            development goals and deliver exceptional results.
          </p>
          <Button variant="btnSecondary" size="lg">
            Get Your Team
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default DedicatedTeams;
