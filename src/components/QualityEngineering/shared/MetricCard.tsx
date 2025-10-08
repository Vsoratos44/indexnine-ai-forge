import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

interface Metric {
  label: string;
}

interface MetricCardProps {
  title: string;
  description: string;
  metrics: Metric[];
}

export const MetricCard: React.FC<MetricCardProps> = ({
  title,
  description,
  metrics,
}) => {
  return (
    <Card className="relative overflow-hidden bg-gradient-card-dark border border-[#00000019] rounded-2xl p-8 lg:p-10 hover:border-brand-primary/30 transition-all duration-500 transform hover:scale-102 hover:-translate-y-2 animate-fade-in group bg-white-600 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-20">
      <CardContent className="p-0">
        <h4 className="text-2xl font-semibold mb-4 text-foreground-dark">
          {title}
        </h4>
        <p className="text-foreground-dark-muted mb-6">{description}</p>
        <div className="space-y-3">
          {metrics.map((metric, index) => (
            <div key={index} className="flex items-center gap-3">
              <CheckCircle className="w-5 h-5 text-foreground-dark flex-shrink-0" />
              <span className="text-foreground-dark font-medium">
                {metric.label}
              </span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
