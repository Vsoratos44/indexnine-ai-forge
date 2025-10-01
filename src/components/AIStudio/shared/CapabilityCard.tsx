import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { getIconComponent } from "@/utils/iconMapper";
import styles from "@/assets/css/stylesheet.module.css";

interface CapabilityCardProps {
  icon: string;
  title: string;
  description: string;
  variant?: "light" | "dark";
}

export const CapabilityCard: React.FC<CapabilityCardProps> = ({
  icon,
  title,
  description,
  variant = "light",
}) => {
  const IconComponent = getIconComponent(icon);

  return (
    <Card
      className={`relative overflow-hidden ${
        variant === "dark"
          ? "bg-gradient-to-br from-[#1c1c1c] via-[#3a3a3a] to-[#4D4E4F] border-[#ffffff19]"
          : "bg-white border-[#00000019]"
      } rounded-2xl p-8 hover:shadow-lg transition-all duration-500`}
    >
      <CardContent className="p-0">
        <div className={`relative w-20 h-20 flex mb-6 items-center justify-center transition-all ${styles.icnBg}`}>
          <IconComponent className="w-8 h-8 text-brand-primary" />
        </div>
        <h3
          className={`text-xl font-semibold mb-3 ${
            variant === "dark" ? "text-foreground" : "text-foreground-dark"
          }`}
        >
          {title}
        </h3>
        <p
          className={`leading-relaxed ${
            variant === "dark" ? "text-foreground/80" : "text-foreground-dark/80"
          }`}
        >
          {description}
        </p>
      </CardContent>
    </Card>
  );
};
