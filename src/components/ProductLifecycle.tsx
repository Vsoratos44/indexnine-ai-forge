import React from 'react';
import { Rocket, BarChart3, TrendingUp, Settings } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from './ui/button';

const ProductLifecycle = () => {
  const phases = [
    {
      icon: Rocket,
      title: "Launch",
      subtitle: "Excellence from Day One",
      description: "We help founders and innovators turn bold ideas into viable, market-ready products.",
      example: "We built a complex AI research agent to disrupt the high-cost philanthropic consulting market.",
      caseStudyLink: "/case-studies/launch"
    },
    {
      icon: BarChart3,
      title: "Pivot",
      subtitle: "Finding Product-Market Fit",
      description: "When the market speaks, we listen. We partner with companies to provide data-backed insights at critical inflection points.",
      example: "We helped a security client pivot from a simple auditing tool to a full-fledged provisioning product.",
      caseStudyLink: "/case-studies/pivot"
    },
    {
      icon: TrendingUp,
      title: "Grow",
      subtitle: "Creating Revenue Streams with AI",
      description: "We help successful products evolve into dominant platforms. By leveraging custom AI models, we identify new opportunities in your existing assets.",
      example: "For a gaming industry client, we developed Cricket LLM, an AI agent designed to deliver a nimble and scalable revenue stream.",
      caseStudyLink: "/case-studies/grow"
    },
    {
      icon: Settings,
      title: "Mature",
      subtitle: "Modernizing for Scale and Efficiency",
      description: "Technical debt is an issue that even industry-leading companies can struggle with. We specialize in the complex challenge of legacy system modernization.",
      example: "Our client needed a complete rearchitecture of a 16-year-old, mission-critical system that was actively integrated with 178 e-commerce platforms.",
      caseStudyLink: "/case-studies/mature"
    }
  ];

  return (
    <section data-section="product-lifecycle" className="py-24 lg:py-32 bg-gradient-section relative overflow-hidden">
      {/* Background blur elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-1/6 w-80 h-80 bg-brand-primary/8 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-1/6 w-96 h-96 bg-brand-purple/6 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-brand-accent/5 rounded-full blur-2xl"></div>
      </div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 lg:mb-20">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground-dark mb-6 leading-tight tracking-tight font-montserrat">
            Product Lifecycle:{' '}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Every Step Counts
            </span>
          </h2>
          <p className="text-lg sm:text-xl lg:text-2xl text-foreground-dark-muted leading-relaxed font-light max-w-4xl mx-auto">
            Our product engineering services are purpose-built to meet your specific needs at each phase of the product lifecycle. along with case studies to show you exactly what we mean.
          </p>
        </div>

        {/* 2x2 Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
          {phases.map((phase, index) => (
            <div 
              key={index}
              className="relative overflow-hidden backdrop-blur-xl bg-gradient-card-light border border-glass-border rounded-3xl p-8 lg:p-10 shadow-glass hover:shadow-glass-lg transition-all duration-500 hover:scale-105 animate-fade-in group"
              style={{animationDelay: `${index * 0.15}s`}}
            >
              {/* Inner glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/3 via-transparent to-brand-purple/3 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10 flex items-start space-x-6">
                {/* Icon Container */}
                <div className="flex-shrink-0 bg-gradient-to-br from-brand-primary/10 via-brand-primary/5 to-brand-purple/10 backdrop-blur-md rounded-2xl w-16 h-16 lg:w-20 lg:h-20 flex items-center justify-center border border-brand-primary/20 shadow-md group-hover:shadow-glow transition-all duration-300 group-hover:scale-110">
                  <phase.icon className="w-8 h-8 lg:w-10 lg:h-10 text-brand-primary group-hover:text-brand-primary-dark transition-colors duration-300" />
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-2xl lg:text-3xl font-bold text-foreground-dark mb-2 leading-tight font-montserrat">{phase.title}</h3>
                  <h4 className="text-lg lg:text-xl font-semibold text-brand-primary mb-4 font-montserrat">{phase.subtitle}</h4>
                  <p className="text-foreground-dark-muted leading-relaxed text-base lg:text-lg font-light font-montserrat mb-6">{phase.description}</p>
                  
                  {/* Client Example */}
                  <p className="text-sm text-foreground-dark-muted leading-relaxed font-montserrat mb-4">
                    {phase.example}
                  </p>
                  
                  {/* Case Study Button */}
                  <Link to={phase.caseStudyLink}>
                    <Button variant="outline" size="sm" className="text-brand-primary border-brand-primary/30 hover:bg-brand-primary/10">
                      Check out the full case study here
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductLifecycle;