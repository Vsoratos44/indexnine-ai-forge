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
          <h1 className="text-[46pt] font-bold text-foreground mb-6 leading-[0.9] tracking-tight animate-fade-in font-montserrat">
            Product Innovation{' '}
            <br />
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Software Engineering
            </span>
            <br />
            <TypewriterText />
          </h1>
          
          <p className="text-lg sm:text-xl lg:text-2xl text-foreground/85 mb-8 max-w-4xl leading-relaxed font-light animate-slide-up font-montserrat">
            The industry leader in infrastructure modernization, launching digital revenue streams, and AI integration. We don't just build software; we engineer products, platforms, and AI-powered solutions that define market leaders.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-scale-in mt-4">
            <a href="#home-contact">
              <Button variant="hero" size="xl" className="min-w-[280px] h-14">
                Schedule a Strategy Session
              </Button>
            </a>
            <Link to="/services/custom-software">
              <Button variant="hero-secondary" size="xl" className="min-w-[240px] h-14">
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