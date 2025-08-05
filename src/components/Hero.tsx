import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import VideoBackground from './VideoBackground';
import TypewriterText from './TypewriterText';

const Hero = () => {
  return (
    <section data-section="hero" className="relative h-[80vh] min-h-[750px] overflow-hidden bg-black">
      {/* Dynamic Video Background */}
      <VideoBackground />

      {/* Content - Precisely positioned */}
      <div className="relative z-10 container mx-auto px-6 lg:px-8 py-24 flex items-center min-h-full">
        <div className="max-w-5xl mx-auto text-center lg:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[52pt] font-bold text-foreground mb-4 sm:mb-6 leading-[0.95] sm:leading-[0.9] tracking-tight animate-fade-in font-montserrat">
            Product Innovation{' '}
            <br />
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Software Engineering
            </span>
            <br />
            <TypewriterText />
          </h1>
          
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-foreground/85 mb-6 sm:mb-8 max-w-4xl leading-relaxed font-light animate-slide-up font-montserrat px-2 sm:px-0">
            The industry leader in infrastructure modernization, launching digital revenue streams, and AI integration. We don't just build software; we engineer products, platforms, and AI-powered solutions that define market leaders.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start animate-scale-in mt-4 px-2 sm:px-0">
            <a href="#home-contact" className="w-full sm:w-auto">
              <Button variant="hero" size="xl" className="w-full sm:min-w-[280px] h-12 sm:h-14 text-sm sm:text-base">
                Schedule a Strategy Session
              </Button>
            </a>
            <Link to="/services/custom-software" className="w-full sm:w-auto">
              <Button variant="hero-secondary" size="xl" className="w-full sm:min-w-[240px] h-12 sm:h-14 text-sm sm:text-base">
                Get a custom solution
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;