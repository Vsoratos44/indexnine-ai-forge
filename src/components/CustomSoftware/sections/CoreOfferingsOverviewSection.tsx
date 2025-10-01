import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Rocket, RefreshCw } from "lucide-react";
import styles from "../../../assets/css/stylesheet.module.css";

export const CoreOfferingsOverviewSection: React.FC = () => {
  const offerings = [
    {
      icon: Rocket,
      title: "Product Launch",
      description:
        "Distill your visionary idea into a market-defining MVP. Our Sprint Zero Blueprint de-risks your investment and provides a guaranteed roadmap to launch, accelerated by our proprietary platforms like snap.mvp and snap.bluprint.",
      ctaText: "Learn About Our Launch Process",
      target: "product-launch",
    },
    {
      icon: RefreshCw,
      title: "Product Modernization",
      description:
        "Transform technical debt into a competitive advantage. We use AI-accelerated refactoring and proven architectural patterns to migrate legacy systems (Java, PHP, Python 2.x) to scalable, cloud-native solutions.",
      ctaText: "Explore Modernization Services",
      target: "product-modernization",
    },
  ];

  return (
    <section id="core-offerings" className={`py-24 lg:py-32 ${styles.sectionBgAI}`}>
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold mb-6 text-foreground-dark">
              Our AI-Augmented{" "}
              <span className="text-brand-primary">Engineering Offerings</span>
            </h2>
            <p className="text-lg text-foreground-dark/80 max-w-3xl mx-auto">
              We've enriched our core engineering services with AI to deliver
              faster, more cost-effective, and higher-quality outcomes for
              startups and enterprises.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {offerings.map((offering, index) => {
              const IconComponent = offering.icon;
              return (
                <Card
                  key={index}
                  className="bg-white border border-[#00000019] rounded-2xl p-10 hover:shadow-xl transition-all duration-500 flex flex-col"
                >
                  <CardContent className="p-0 flex-1">
                    <div className={`relative w-20 h-20 flex mb-6 items-center justify-center ${styles.icnBg}`}>
                      <IconComponent className="w-10 h-10 text-brand-primary" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground-dark mb-4">
                      {offering.title}
                    </h3>
                    <p className="text-foreground-dark/70 mb-6 leading-relaxed">
                      {offering.description}
                    </p>
                  </CardContent>
                  <button
                    onClick={() => {
                      document
                        .getElementById(offering.target)
                        ?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="inline-flex items-center gap-2 text-brand-primary font-semibold hover:gap-3 transition-all duration-300"
                  >
                    {offering.ctaText}
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
