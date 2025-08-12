import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { CardGlass } from "@/components/ui/CardGlass";
import { Users, Clock, Shield, Target, Zap, CheckCircle } from "lucide-react";

const DedicatedTeams = () => {
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
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground-white mb-8 leading-tight font-montserrat">
              Dedicated{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Teams
              </span>
            </h1>
            <p className="text-xl text-foreground-white/80 mb-12 leading-relaxed font-montserrat">
              Extend your development capacity with dedicated teams that
              integrate seamlessly with your existing processes and culture.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="xl">
                Build Your Team
              </Button>
              <Button variant="hero-secondary" size="xl">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Team Features */}
      <section className="py-24 bg-background-section">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-foreground-dark mb-6 font-montserrat">
              Dedicated Team Benefits
            </h2>
            <p className="text-xl text-foreground-dark-muted max-w-3xl mx-auto font-montserrat">
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
                <div className="bg-gradient-to-br from-brand-primary to-brand-accent rounded-2xl w-16 h-16 flex items-center justify-center mb-6">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4 font-montserrat">
                  {benefit.title}
                </h3>
                <p className="text-foreground-muted leading-relaxed font-montserrat">
                  {benefit.description}
                </p>
              </CardGlass>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-background-dark">
        <div className="container mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-foreground-white mb-8 font-montserrat">
            Ready to Expand Your Development Capacity?
          </h2>
          <p className="text-xl text-foreground-white/80 mb-12 max-w-2xl mx-auto font-montserrat">
            Let's discuss how our dedicated teams can accelerate your
            development goals and deliver exceptional results.
          </p>
          <Button variant="hero" size="xl">
            Get Your Team
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default DedicatedTeams;
