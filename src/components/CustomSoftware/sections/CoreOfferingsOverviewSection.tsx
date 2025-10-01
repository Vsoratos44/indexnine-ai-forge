import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Rocket, Layers } from "lucide-react";
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
      icon: Layers,
      title: "Product Modernization",
      description:
        "Transform technical debt into a competitive advantage. We use AI-accelerated refactoring and proven architectural patterns to migrate legacy systems (Java, PHP, Python 2.x) to scalable, cloud-native solutions.",
      ctaText: "Explore Modernization Services",
      target: "product-modernization",
    },
  ];

  return (
    <section id="core-offerings" className={`py-16 sm:py-24 lg:py-32 ${styles.sectionBgAI}`}>
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold mb-4 sm:mb-6 text-foreground-dark font-montserrat px-4 sm:px-0">
              Our AI-Augmented{" "}
              <span className="text-brand-primary">Engineering Offerings</span>
            </h2>
            <p className="text-base sm:text-lg text-foreground-dark/80 max-w-3xl mx-auto font-montserrat px-4 sm:px-0">
              We've enriched our core engineering services with AI to deliver
              faster, more cost-effective, and higher-quality outcomes for
              startups and enterprises.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 px-4 sm:px-0">
            {offerings.map((offering, index) => {
              const IconComponent = offering.icon;
              return (
                <Card
                  key={index}
                  className="bg-white border border-[#00000019] rounded-2xl p-8 sm:p-10 hover:shadow-xl transition-all duration-500 flex flex-col group"
                >
                  <CardContent className="p-0 flex-1">
                    <div className={`relative w-16 h-16 sm:w-20 sm:h-20 flex mb-4 sm:mb-6 items-center justify-center ${styles.icnBg}`}>
                      <IconComponent className="w-8 h-8 sm:w-10 sm:h-10 text-brand-primary" />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-foreground-dark mb-3 sm:mb-4 font-montserrat">
                      {offering.title}
                    </h3>
                    <p className="text-sm sm:text-base text-foreground-dark/70 mb-4 sm:mb-6 leading-relaxed font-montserrat">
                      {offering.description}
                    </p>
                  </CardContent>
                  <button
                    onClick={() => {
                      document
                        .getElementById(offering.target)
                        ?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="inline-flex items-center gap-2 text-brand-primary font-semibold hover:gap-3 transition-all duration-300 text-sm sm:text-base group-hover:underline"
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
