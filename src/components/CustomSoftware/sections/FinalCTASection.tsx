import React from "react";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import { CALENDLY_URL } from "../../../config/constants";
import styles from "../../../assets/css/stylesheet.module.css";

export const FinalCTASection: React.FC = () => {
  const trustSignals = [
    "No-obligation consultation",
    "Senior solutions architect (not sales)",
    "Response within 1 business day",
  ];

  return (
    <section className={`py-24 lg:py-32 text-white ${styles.ctaBg}`}>
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold mb-6 text-foreground-white">
            Ready to Build With an{" "}
            <span className="text-brand-primary">AI-Augmented Partner?</span>
          </h2>
          <p className="text-lg text-foreground-white/85 mb-8 leading-relaxed max-w-3xl mx-auto">
            Let's discuss your vision. Schedule a free, no-obligation
            consultation with our senior solutions architects to explore how our
            flexible engineering teams can turn your idea into a market-leading
            reality.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-10 max-w-3xl mx-auto px-4 sm:px-0">
            {trustSignals.map((signal, index) => (
              <div
                key={index}
                className="flex items-center justify-center gap-3 bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20"
              >
                <CheckCircle className="w-5 h-5 text-brand-primary flex-shrink-0" />
                <span className="text-sm font-medium text-foreground-white">
                  {signal}
                </span>
              </div>
            ))}
          </div>

          <Button
            variant="btnSecondary"
            size="lg"
            className="min-w-[320px]"
            onClick={() => window.open(CALENDLY_URL, "_blank")}
          >
            Schedule Your Free Consultation
          </Button>
        </div>
      </div>
    </section>
  );
};
