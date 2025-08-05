import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import VideoBackground from './VideoBackground';
import TypewriterText from './TypewriterText';

const Hero = () => {
  return (
    <section data-section="hero" className="relative h-[65vh] min-h-[600px] overflow-hidden bg-black">
      {/* Dynamic Video Background */}
      <VideoBackground />

      {/* Content - Precisely positioned */}
      <div className="relative z-10 container mx-auto px-6 lg:px-8 pt-32 pb-24">
        <div className="max-w-5xl mx-auto text-center lg:text-left">
          <h1 className="text-[3.5rem] sm:text-[4.5rem] lg:text-[5.5rem] xl:text-[6rem] font-bold text-foreground mb-8 leading-[0.9] tracking-tight animate-fade-in font-montserrat">
            Product Innovation &{' '}
            <br />
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Software Engineering
            </span>
            <br />
            <TypewriterText />
          </h1>
          
          <p className="text-lg sm:text-xl lg:text-2xl text-foreground/85 mb-12 max-w-4xl leading-relaxed font-light animate-slide-up font-montserrat">
            Your strategic partner for modernizing critical systems & infrastructure, 
            launching new digital revenue streams, and embedding AI to drive impactful, 
            positive business outcomes.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-scale-in">
            <a href="#home-contact">
              <Button variant="hero" size="xl" className="min-w-[280px]">
                Schedule a Strategy Session
              </Button>
            </a>
            <Link to="/services/custom-software">
              <Button variant="hero-secondary" size="xl" className="min-w-[240px]">
                Explore our Solutions
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;