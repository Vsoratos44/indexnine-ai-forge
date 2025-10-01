import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { getIconComponent } from "@/utils/iconMapper";

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
    <Card className="relative overflow-hidden bg-gradient-to-br from-[#ffffff10] to-[#ffffff05] border border-[#ffffff20] rounded-xl p-6 text-center hover:border-brand-primary/40 transition-all duration-300">
      <CardContent className="p-0">
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-brand-primary to-brand-purple flex items-center justify-center mx-auto mb-4 shadow-lg">
          <span className="text-xl font-bold text-white">{step}</span>
        </div>
        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-brand-primary/20 to-brand-purple/20 flex items-center justify-center mx-auto mb-4">
          <IconComponent className="w-8 h-8 text-brand-primary" />
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
