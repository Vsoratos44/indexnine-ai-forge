import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const Insights = () => {
  const insights = [
    { type: "eBooks", date: "July 29, 2025", description: "This page is currently under construction. Please check back soon or click the title. Read more >>" },
    { type: "Blogs", date: "July 29, 2025", description: "This page is currently under construction. Please check back soon or click the title. Read more >>" },
    { type: "Case Studies", date: "July 29, 2025", description: "This page is currently under construction. Please check back soon or click the title. Read more >>" }
  ];

  return (
    <section className="py-24 lg:py-32 bg-gradient-section relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-20 right-1/4 w-64 h-64 bg-brand-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-1/4 w-80 h-80 bg-brand-purple/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-8 leading-tight tracking-tight">
            Insights that Shape{' '}
            <span className="bg-gradient-primary bg-clip-text text-transparent">Products</span>
          </h2>
        </div>

        <div className="space-y-6 max-w-5xl mx-auto">
          {insights.map((insight, index) => (
            <div key={index} className="bg-background-card rounded-3xl p-8 lg:p-10 shadow-lg border border-border hover:shadow-xl transition-all duration-500 hover:scale-[1.02] animate-fade-in group" style={{animationDelay: `${index * 0.1}s`}}>
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-6">
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-6">
                    <span className="text-sm font-medium text-brand-primary bg-brand-primary/10 px-3 py-1 rounded-full">{insight.date}</span>
                    <h3 className="text-2xl lg:text-3xl font-bold text-foreground">{insight.type}</h3>
                  </div>
                  <p className="text-foreground-muted text-lg leading-relaxed">{insight.description}</p>
                </div>
                <Button variant="link" className="text-brand-primary hover:text-brand-primary-dark self-start group-hover:translate-x-1 transition-transform">
                  Read More <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <Button variant="link" className="text-brand-primary hover:text-brand-primary-dark text-xl font-semibold">
            Read all insights <ArrowRight className="w-6 h-6 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Insights;