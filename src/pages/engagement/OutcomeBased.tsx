import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { CardGlass } from "@/components/ui/CardGlass";
import {
  Target,
  TrendingUp,
  Handshake,
  Shield,
  Zap,
  CheckCircle,
} from "lucide-react";
import styles from "../../assets/css/stylesheet.module.css";

const OutcomeBased = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-[680px] overflow-hidden bg-black">
        <>
          {" "}
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
                Outcome-Based <br />
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  Partnerships
                </span>
              </h1>
              <p className="text-base sm:text-lg lg:text-xl text-foreground/85 mb-8 leading-relaxed font-light animate-slide-up font-montserrat max-w-4xl">
                Align our success with yours through outcome-based engagement
                models that focus on delivering measurable business results.
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
                  Explore Partnership
                </Button>
                <a href="/insights/case-studies">
                  <Button
                    variant="btnSecondary"
                    size="xl"
                    className="min-w-[280px]"
                  >
                    Success Stories
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </>
      </section>

      {/* Outcome Features */}
      <section className="py-24 bg-background-section">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold mb-6 text-foreground-dark ">
              Outcome-Based Advantages
            </h2>
            <p className="text-xl text-foreground-dark-muted max-w-3xl mx-auto font-montserrat mb-16">
              Partnership models designed around your success metrics and
              business objectives.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Target,
                title: "Results-Focused",
                description:
                  "Our compensation is directly tied to achieving your defined success metrics.",
              },
              {
                icon: TrendingUp,
                title: "Shared Success",
                description:
                  "We succeed when you succeed, creating true partnership alignment.",
              },
              {
                icon: Handshake,
                title: "Risk Sharing",
                description:
                  "Shared risk model that demonstrates our confidence in delivering results.",
              },
              {
                icon: Shield,
                title: "Performance Guarantee",
                description:
                  "Clear performance guarantees and accountability for outcomes.",
              },
              {
                icon: Zap,
                title: "Agile Adaptation",
                description:
                  "Flexible approach that adapts based on real-world results and feedback.",
              },
              {
                icon: CheckCircle,
                title: "Proven Metrics",
                description:
                  "Established KPIs and measurement frameworks for transparent tracking.",
              },
            ].map((advantage, index) => (
              <CardGlass className="p-8" key={index}>
                <div
                  className={`relative w-20 h-20 flex mb-6 items-center justify-center transition-all ${styles.icnBg}`}
                >
                  <advantage.icon className="w-8 h-8 text-brand-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground-dark mb-4">
                  {advantage.title}
                </h3>
                <p className="text-foreground-dark-muted mb-6">
                  {advantage.description}
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
            <span className="leading-[1.4]">Ready for a True Partnership?</span>
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Let's discuss how our outcome-based model can drive exceptional
            results for your business.
          </p>
          <Button
            variant="btnSecondary"
            size="xl"
            onClick={() => {
              window.open(
                "https://calendly.com/vaughn-soratos-indexnine",
                "_blank"
              );
            }}
          >
            Start Partnership
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default OutcomeBased;
