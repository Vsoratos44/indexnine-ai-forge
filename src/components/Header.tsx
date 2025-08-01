import React from 'react';
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background-dark/95 backdrop-blur-md border-b border-white/10">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-brand-primary rounded-lg flex items-center justify-center">
              <div className="w-4 h-4 bg-white rounded-sm"></div>
            </div>
            <span className="text-xl font-bold text-foreground-white">INDEXNINE</span>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <div className="relative group">
              <button className="flex items-center space-x-1 text-foreground-white hover:text-brand-primary transition-colors duration-300">
                <span>Services</span>
                <ChevronDown className="w-4 h-4" />
              </button>
            </div>
            
            <div className="relative group">
              <button className="flex items-center space-x-1 text-foreground-white hover:text-brand-primary transition-colors duration-300">
                <span>Engagement Models</span>
                <ChevronDown className="w-4 h-4" />
              </button>
            </div>
            
            <div className="relative group">
              <button className="flex items-center space-x-1 text-foreground-white hover:text-brand-primary transition-colors duration-300">
                <span>Insights</span>
                <ChevronDown className="w-4 h-4" />
              </button>
            </div>
            
            <div className="relative group">
              <button className="flex items-center space-x-1 text-foreground-white hover:text-brand-primary transition-colors duration-300">
                <span>About Us</span>
                <ChevronDown className="w-4 h-4" />
              </button>
            </div>
          </nav>

          {/* CTA Button */}
          <Button variant="hero" size="default">
            Contact Us
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;