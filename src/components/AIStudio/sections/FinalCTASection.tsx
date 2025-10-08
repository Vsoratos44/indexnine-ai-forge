import React from "react";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import { CALENDLY_URL } from "../../../config/constants";
import styles from "../../../assets/css/stylesheet.module.css";

export const FinalCTASection: React.FC = () => {
  const trustSignals = [
    "No-obligation consultation",
    "Senior AI consultant (not sales)",
    "Response within 1 business day",
  ];

  return (
    <section className={`py-24 lg:py-32 text-white ${styles.ctaBg}`}>
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold mb-6 text-foreground-white">
            Ready to Transform Your Business with{" "}
            <span className="text-white">AI?</span>
          </h2>
          <p className="text-lg text-foreground-white/85 mb-8 leading-relaxed max-w-3xl mx-auto">
            Let's discuss your AI ambitions and map out a clear path to
            measurable outcomes. Whether you're just starting to explore AI or
            looking to scale existing capabilities, our Growth Engine is
            designed to meet you where you are.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-10 max-w-3xl mx-auto">
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
            Schedule My Free Strategy Call
          </Button>
        </div>
      </div>
    </section>
  );
};
