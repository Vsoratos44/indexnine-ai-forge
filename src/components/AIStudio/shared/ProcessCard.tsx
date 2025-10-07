import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { getIconComponent } from "@/utils/iconMapper";
import styles from "../../../assets/css/stylesheet.module.css";

interface ProcessCardProps {
  icon: string;
  title: string;
  description: string;
  step: number;
}

export const ProcessCard: React.FC<ProcessCardProps> = ({
  icon,
  title,
  description,
  step,
}) => {
  const IconComponent = getIconComponent(icon);

  return (
    <Card className="relative overflow-hidden bg-gradient-card-light border border-[#ffffff39] rounded-2xl p-8 hover:border-brand-primary/30 transition-all duration-500 transform hover:scale-102 hover:-translate-y-2 animate-fade-in group bg-white-600 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-20">
      <CardContent className="p-0">
        {/* <div className="w-12 h-12 rounded-full bg-gradient-to-br from-brand-primary to-brand-purple flex items-center justify-center mx-auto mb-4 shadow-lg">
          <span className="text-xl font-bold text-white">{step}</span>
        </div> */}
        <div
          className={`relative w-16 h-16 flex mb-6 items-center justify-center mx-auto transition-all ${styles.icnBg}`}
        >
          <IconComponent className="w-6 h-6 text-white" />
        </div>
        <h4 className="text-lg font-semibold text-foreground-light mb-2">
          {title}
        </h4>
        <p className="text-sm text-foreground-light-muted leading-snug">
          {description}
        </p>
      </CardContent>
    </Card>
  );
};
