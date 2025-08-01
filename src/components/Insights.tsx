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
    <section className="py-20 bg-background-section">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Insights that Shape{' '}
            <span className="bg-gradient-primary bg-clip-text text-transparent">Products</span>
          </h2>
        </div>

        <div className="space-y-8 max-w-4xl mx-auto">
          {insights.map((insight, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-soft hover:shadow-lg transition-all duration-300 animate-fade-in" style={{animationDelay: `${index * 0.2}s`}}>
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <div className="flex items-center space-x-4 mb-4">
                    <span className="text-sm text-foreground-light">{insight.date}</span>
                    <h3 className="text-xl font-bold text-foreground">{insight.type}</h3>
                  </div>
                  <p className="text-foreground-light">{insight.description}</p>
                </div>
                <Button variant="link" className="text-brand-primary hover:text-brand-primary-dark">
                  Read More <ArrowRight className="w-4 h-4 ml-1" />
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="link" className="text-brand-primary hover:text-brand-primary-dark text-lg">
            Reas all insights <ArrowRight className="w-5 h-5 ml-1" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Insights;