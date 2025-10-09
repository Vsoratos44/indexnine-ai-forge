import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

interface OfferingItem {
  tier: string;
  title: string;
  price: string;
  duration: string;
  description: string;
  deliverables: string[];
  ctaText: string;
  variant?: "light" | "dark";
  featured?: boolean;
}

interface StrategicOfferingsProps {
  title?: string;
  offerings: OfferingItem[];
  calendlyUrl: string;
  maxWidth?: string;
}

export const StrategicOfferings: React.FC<StrategicOfferingsProps> = ({
  title = "Choose Your Strategic Entry Point",
  offerings,
  calendlyUrl,
  maxWidth = "max-w-5xl",
}) => {
  return (
    <div className="">
      <h3 className="text-3xl font-semibold text-center text-foreground-dark mb-8">
        {title}
      </h3>
      <div className={`grid md:grid-cols-2 gap-6 ${maxWidth} mx-auto`}>
        {offerings.map((offering, index) => (
          <Card
            key={index}
            className={`p-8 ${
              offering.variant === "dark" ? "bg-[#000000]" : "bg-[#fff]"
            } border-card-border shadow-lg hover:shadow-xl transition-all duration-300 relative flex flex-col`}
          >
            {offering.featured && (
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-gradient-to-r from-brand-primary to-brand-purple text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg">
                  Most Popular
                </span>
              </div>
            )}
            <CardContent className="p-0 h-full">
              <div className="mb-6">
                <div className="text-sm font-medium text-brand-primary mb-2">
                  {offering.tier}
                </div>
                <h4
                  className={`text-2xl font-semibold mb-2 ${
                    offering.variant === "dark"
                      ? "text-foreground"
                      : "text-foreground-dark"
                  }`}
                >
                  {offering.title}
                </h4>
                <div
                  className={`text-3xl font-bold mb-2 ${
                    offering.variant === "dark"
                      ? "text-foreground"
                      : "text-foreground-dark"
                  }`}
                >
                  {offering.price}
                </div>
                <div
                  className={`text-sm ${
                    offering.variant === "dark"
                      ? "text-foreground/60"
                      : "text-foreground-dark/60"
                  }`}
                >
                  {offering.duration}
                </div>
              </div>
              <p
                className={`mb-6 ${
                  offering.variant === "dark"
                    ? "text-foreground/80"
                    : "text-foreground-dark/80"
                }`}
              >
                {offering.description}
              </p>
              <h5
                className={`font-semibold mb-3 ${
                  offering.variant === "dark"
                    ? "text-foreground"
                    : "text-foreground-dark"
                }`}
              >
                Deliverables:
              </h5>
              <ul className="space-y-3 mb-8">
                {offering.deliverables.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-brand-purple mt-0.5 flex-shrink-0" />
                    <span
                      className={
                        offering.variant === "dark"
                          ? "text-foreground/80"
                          : "text-foreground-dark/80"
                      }
                    >
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <Button
              className="w-full mt-auto"
              variant={
                offering.variant === "dark" ? "btnSecondary" : "btnPrimary"
              }
              onClick={() => window.open(calendlyUrl, "_blank")}
            >
              {offering.ctaText}
            </Button>
          </Card>
        ))}
      </div>
    </div>
  );
};
