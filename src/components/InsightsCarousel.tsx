import React from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Button } from '@/components/ui/button';
import { ArrowRight, BookOpen, FileText, Target } from 'lucide-react';

interface CarouselItem {
  id: string;
  type: 'eBooks' | 'Blogs' | 'Case Studies';
  title: string;
  description: string;
  date: string;
  readTime?: string;
  category?: string;
  image?: string;
  link: string;
}

const InsightsCarousel = () => {
  // CMS-ready data structure - can be replaced with API call
  const carouselItems: CarouselItem[] = [
    {
      id: '1',
      type: 'eBooks',
      title: 'AI-Driven Product Development',
      description: 'A comprehensive guide to integrating artificial intelligence into your product development lifecycle for maximum efficiency and innovation.',
      date: 'January 15, 2025',
      readTime: '45 min read',
      category: 'AI & Innovation',
      image: '/api/placeholder/400/300',
      link: '/ebooks/ai-driven-development'
    },
    {
      id: '2',
      type: 'Blogs',
      title: 'The Future of Enterprise Software',
      description: 'Exploring emerging trends and technologies that will shape enterprise software development in the next decade.',
      date: 'January 12, 2025',
      readTime: '8 min read',
      category: 'Enterprise',
      image: '/api/placeholder/400/300',
      link: '/blog/future-enterprise-software'
    },
    {
      id: '3',
      type: 'Case Studies',
      title: 'FinTech Startup: 10x Growth',
      description: 'How we helped a fintech startup scale their platform to handle 10x user growth while maintaining 99.9% uptime.',
      date: 'January 10, 2025',
      readTime: '12 min read',
      category: 'Success Story',
      image: '/api/placeholder/400/300',
      link: '/case-studies/fintech-growth'
    },
    {
      id: '4',
      type: 'eBooks',
      title: 'Digital Transformation Playbook',
      description: 'A step-by-step guide for enterprises looking to modernize their technology stack and processes.',
      date: 'January 8, 2025',
      readTime: '60 min read',
      category: 'Digital Transformation',
      image: '/api/placeholder/400/300',
      link: '/ebooks/digital-transformation'
    },
    {
      id: '5',
      type: 'Blogs',
      title: 'Microservices Best Practices',
      description: 'Essential patterns and practices for building scalable, maintainable microservices architectures.',
      date: 'January 5, 2025',
      readTime: '10 min read',
      category: 'Architecture',
      image: '/api/placeholder/400/300',
      link: '/blog/microservices-best-practices'
    }
  ];

  const getIcon = (type: string) => {
    switch (type) {
      case 'eBooks':
        return BookOpen;
      case 'Blogs':
        return FileText;
      case 'Case Studies':
        return Target;
      default:
        return FileText;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'eBooks':
        return 'bg-brand-primary/10 text-brand-primary border-brand-primary/20';
      case 'Blogs':
        return 'bg-brand-purple/10 text-brand-purple border-brand-purple/20';
      case 'Case Studies':
        return 'bg-brand-accent/10 text-brand-accent border-brand-accent/20';
      default:
        return 'bg-brand-primary/10 text-brand-primary border-brand-primary/20';
    }
  };

  return (
    <section className="py-24 lg:py-32 bg-gradient-hero relative overflow-hidden">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/6 w-96 h-96 bg-brand-primary/8 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/6 w-80 h-80 bg-brand-purple/6 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-brand-accent/5 rounded-full blur-2xl animate-pulse-slow"></div>
        
        {/* Animated Grid Pattern */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: `radial-gradient(circle at 50% 50%, hsl(239 84% 67%) 1px, transparent 1px)`,
          backgroundSize: '80px 80px'
        }}></div>
      </div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground-white mb-8 leading-tight tracking-tight font-montserrat">
            Our Success is Measured by the{' '}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Value We Create
            </span>
          </h2>
          <p className="text-xl text-foreground-white/80 max-w-3xl mx-auto font-light font-montserrat">
            Discover insights, strategies, and success stories that drive innovation and growth
          </p>
        </div>

        {/* Enhanced Glassmorphism Carousel Container */}
        <div className="relative max-w-7xl mx-auto">
          <Carousel 
            className="w-full"
            opts={{
              align: "start",
              loop: true,
            }}
          >
            <CarouselContent className="-ml-4">
              {carouselItems.map((item) => {
                const IconComponent = getIcon(item.type);
                return (
                  <CarouselItem key={item.id} className="pl-4 md:basis-1/2 lg:basis-1/3">
                    <div className="relative group h-full">
                      {/* Enhanced Glassmorphism Card */}
                      <div className="relative overflow-hidden backdrop-blur-xl bg-glass-bg-dark border border-glass-border rounded-3xl p-8 shadow-glass-lg hover:shadow-glow transition-all duration-500 transform group-hover:scale-105 group-hover:-translate-y-2 h-full flex flex-col">
                        {/* Frosted Glass Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-brand-primary/5 rounded-3xl opacity-50"></div>
                        
                        {/* Dynamic Glow Effect */}
                        <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/5 via-transparent to-brand-purple/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                        {/* Content Header */}
                        <div className="relative flex items-start justify-between mb-6">
                          <div className={`flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium border backdrop-blur-sm ${getTypeColor(item.type)}`}>
                            <IconComponent className="w-4 h-4" />
                            {item.type}
                          </div>
                          <div className="text-sm text-foreground-white/60 font-montserrat">{item.date}</div>
                        </div>

                        {/* Image Placeholder with Glassmorphism */}
                        <div className="relative mb-6 rounded-2xl overflow-hidden bg-gradient-to-br from-brand-primary/10 to-brand-purple/10 backdrop-blur-md border border-white/10 h-48 flex items-center justify-center">
                          <div className="text-foreground-white/30 text-4xl">
                            <IconComponent className="w-16 h-16" />
                          </div>
                          {/* CMS Image Overlay - Dynamic */}
                          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                        </div>

                        {/* Content Body */}
                        <div className="relative flex-1 flex flex-col">
                          <h3 className="text-xl lg:text-2xl font-bold text-foreground-white mb-4 leading-tight font-montserrat group-hover:text-brand-primary transition-colors duration-300">
                            {item.title}
                          </h3>
                          <p className="text-foreground-white/80 leading-relaxed mb-6 flex-1 font-montserrat">
                            {item.description}
                          </p>
                          
                          {/* Meta Information */}
                          <div className="flex items-center justify-between mb-6">
                            {item.readTime && (
                              <span className="text-sm text-foreground-white/60 font-montserrat">{item.readTime}</span>
                            )}
                            {item.category && (
                              <span className="text-sm bg-white/10 text-foreground-white/80 px-2 py-1 rounded-full font-montserrat">
                                {item.category}
                              </span>
                            )}
                          </div>

                          {/* CTA Button */}
                          <Button 
                            variant="ghost" 
                            className="relative text-brand-primary hover:text-white hover:bg-brand-primary/20 border border-brand-primary/30 rounded-xl font-semibold group-hover:shadow-glow transition-all duration-300 font-montserrat"
                          >
                            Read More <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                );
              })}
            </CarouselContent>
            
            {/* Enhanced Glassmorphism Navigation */}
            <CarouselPrevious className="left-4 backdrop-blur-md bg-white/10 border-white/20 text-white hover:bg-white/20 hover:text-brand-primary transition-all duration-300" />
            <CarouselNext className="right-4 backdrop-blur-md bg-white/10 border-white/20 text-white hover:bg-white/20 hover:text-brand-primary transition-all duration-300" />
          </Carousel>

          {/* View All CTA */}
          <div className="text-center mt-16">
            <Button 
              variant="outline" 
              size="lg"
              className="backdrop-blur-md bg-white/10 border-white/20 text-white hover:bg-white/20 hover:text-brand-primary transition-all duration-300 px-8 py-4 rounded-2xl font-semibold text-lg font-montserrat"
            >
              View All Insights <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InsightsCarousel;