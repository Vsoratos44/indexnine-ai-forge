import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";
import styles from "../../../assets/css/stylesheet.module.css";
import { getIconComponent } from "../../../utils/iconMapper";

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
  features?: string[];
  variant?: "light" | "dark";
}

export const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  title,
  description,
  features,
  variant = "light",
}) => {
  const IconComponent = getIconComponent(icon);
  const textColor =
    variant === "dark" ? "text-foreground-light" : "text-foreground-dark";
  const mutedColor =
    variant === "dark"
      ? "text-foreground-light-muted"
      : "text-foreground-dark/80";

  return (
    <Card
      className={`relative overflow-hidden bg-gradient-card-light border ${
        variant === "dark" ? "border-[#ffffff39]" : "border-[#00000019]"
      } ${
        variant === "dark" ? "bg-white-600" : "bg-[#ffffff59]"
      } rounded-2xl p-8 hover:shadow-glass-sm transition-all duration-500 transform hover:scale-102 hover:-translate-y-2 animate-fade-in group text-left bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-20`}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/8 via-transparent to-brand-purple/8 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/5 via-transparent to-brand-purple/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <CardContent className="p-0 relative">
        <div
          className={`relative w-20 h-20 flex mb-6 items-center justify-center transition-all ${styles.icnBg}`}
        >
          <IconComponent className="w-8 h-8 text-brand-primary" />
        </div>

        <h3 className={`text-xl font-bold mb-4 ${textColor}`}>{title}</h3>
        <p className={mutedColor}>{description}</p>

        {features && features.length > 0 && (
          <ul className="space-y-3 mt-6">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-brand-purple mt-0.5 flex-shrink-0" />
                <span className={mutedColor}>{feature}</span>
              </li>
            ))}
          </ul>
        )}
      </CardContent>
    </Card>
  );
};
