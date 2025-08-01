import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronDown, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const toggleDropdown = (dropdown: string) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown);
  };

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

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <div className="relative group">
              <button className="flex items-center space-x-1 text-foreground-white hover:text-brand-primary transition-colors duration-300">
                <span>Services</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              <div className="absolute top-full left-0 mt-2 w-64 bg-background-dark/95 backdrop-blur-lg border border-white/10 rounded-xl shadow-glass-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                <div className="p-4 space-y-2">
                  <Link to="/services/custom-software" className="block px-4 py-3 text-foreground-white hover:text-brand-primary hover:bg-white/5 rounded-lg transition-colors">
                    Custom Software Development
                  </Link>
                  <Link to="/services/ai-ml" className="block px-4 py-3 text-foreground-white hover:text-brand-primary hover:bg-white/5 rounded-lg transition-colors">
                    AI & ML Development
                  </Link>
                  <Link to="/services/data-engineering" className="block px-4 py-3 text-foreground-white hover:text-brand-primary hover:bg-white/5 rounded-lg transition-colors">
                    Data Engineering
                  </Link>
                  <Link to="/services/qa-engineering" className="block px-4 py-3 text-foreground-white hover:text-brand-primary hover:bg-white/5 rounded-lg transition-colors">
                    Quality Assurance Engineering
                  </Link>
                </div>
              </div>
            </div>
            
            <div className="relative group">
              <button className="flex items-center space-x-1 text-foreground-white hover:text-brand-primary transition-colors duration-300">
                <span>Engagement Models</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              <div className="absolute top-full left-0 mt-2 w-64 bg-background-dark/95 backdrop-blur-lg border border-white/10 rounded-xl shadow-glass-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                <div className="p-4 space-y-2">
                  <Link to="/engagement/enterprise" className="block px-4 py-3 text-foreground-white hover:text-brand-primary hover:bg-white/5 rounded-lg transition-colors">
                    For Enterprise
                  </Link>
                  <Link to="/engagement/innovation-lab" className="block px-4 py-3 text-foreground-white hover:text-brand-primary hover:bg-white/5 rounded-lg transition-colors">
                    For Startups (Innovation Lab)
                  </Link>
                  <Link to="/engagement/dedicated-teams" className="block px-4 py-3 text-foreground-white hover:text-brand-primary hover:bg-white/5 rounded-lg transition-colors">
                    Dedicated Teams
                  </Link>
                  <Link to="/engagement/outcome-based" className="block px-4 py-3 text-foreground-white hover:text-brand-primary hover:bg-white/5 rounded-lg transition-colors">
                    Outcome-Based
                  </Link>
                </div>
              </div>
            </div>
            
            <div className="relative group">
              <button className="flex items-center space-x-1 text-foreground-white hover:text-brand-primary transition-colors duration-300">
                <span>Insights</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              <div className="absolute top-full left-0 mt-2 w-48 bg-background-dark/95 backdrop-blur-lg border border-white/10 rounded-xl shadow-glass-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                <div className="p-4 space-y-2">
                  <Link to="/insights/case-studies" className="block px-4 py-3 text-foreground-white hover:text-brand-primary hover:bg-white/5 rounded-lg transition-colors">
                    Case Studies
                  </Link>
                  <Link to="/insights/blogs" className="block px-4 py-3 text-foreground-white hover:text-brand-primary hover:bg-white/5 rounded-lg transition-colors">
                    Blogs
                  </Link>
                  <Link to="/insights/ebooks" className="block px-4 py-3 text-foreground-white hover:text-brand-primary hover:bg-white/5 rounded-lg transition-colors">
                    eBooks
                  </Link>
                </div>
              </div>
            </div>

            <div className="relative group">
              <button className="flex items-center space-x-1 text-foreground-white hover:text-brand-primary transition-colors duration-300">
                <span>Events</span>
                <ChevronDown className="w-4 h-4" />
              </button>
               <div className="absolute top-full left-0 mt-2 w-64 bg-background-dark/95 backdrop-blur-lg border border-white/10 rounded-xl shadow-glass-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                <div className="p-4 space-y-2">
                  <Link to="/events" className="block px-4 py-3 text-foreground-white hover:text-brand-primary hover:bg-white/5 rounded-lg transition-colors">
                    Events
                  </Link>
                  <Link to="/events/features/registration-and-ticketing" className="block px-4 py-3 text-foreground-white hover:text-brand-primary hover:bg-white/5 rounded-lg transition-colors">
                    Registration & Ticketing
                  </Link>
                  <Link to="/events/features/on-site-experience" className="block px-4 py-3 text-foreground-white hover:text-brand-primary hover:bg-white/5 rounded-lg transition-colors">
                    On-Site Experience
                  </Link>
                </div>
              </div>
            </div>
            
            <div className="relative group">
              <button className="flex items-center space-x-1 text-foreground-white hover:text-brand-primary transition-colors duration-300">
                <span>About Us</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              <div className="absolute top-full left-0 mt-2 w-48 bg-background-dark/95 backdrop-blur-lg border border-white/10 rounded-xl shadow-glass-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                <div className="p-4 space-y-2">
                  <Link to="/about/who-we-are" className="block px-4 py-3 text-foreground-white hover:text-brand-primary hover:bg-white/5 rounded-lg transition-colors">
                    Who We Are
                  </Link>
                  <Link to="/about/careers" className="block px-4 py-3 text-foreground-white hover:text-brand-primary hover:bg-white/5 rounded-lg transition-colors">
                    Careers
                  </Link>
                </div>
              </div>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-foreground-white hover:text-brand-primary transition-colors"
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          {/* Desktop CTA Button */}
          <div className="hidden md:block">
            <Button variant="hero" size="default">
              Contact Us
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed top-20 left-0 right-0 bg-background-dark/95 backdrop-blur-lg border-b border-white/10 z-40">
          <div className="container mx-auto px-6 py-8 space-y-6">
            
            {/* Services */}
            <div>
              <button 
                onClick={() => toggleDropdown('services')}
                className="flex items-center justify-between w-full text-left text-lg font-semibold text-foreground-white hover:text-brand-primary transition-colors"
              >
                Services
                <ChevronDown className={`w-5 h-5 transition-transform ${openDropdown === 'services' ? 'rotate-180' : ''}`} />
              </button>
              {openDropdown === 'services' && (
                <div className="mt-4 pl-4 space-y-3">
                  <Link to="/services/custom-software" className="block py-2 text-foreground-white/80 hover:text-brand-primary transition-colors" onClick={toggleMobileMenu}>
                    Custom Software Development
                  </Link>
                  <Link to="/services/ai-ml" className="block py-2 text-foreground-white/80 hover:text-brand-primary transition-colors" onClick={toggleMobileMenu}>
                    AI & ML Development
                  </Link>
                  <Link to="/services/data-engineering" className="block py-2 text-foreground-white/80 hover:text-brand-primary transition-colors" onClick={toggleMobileMenu}>
                    Data Engineering
                  </Link>
                  <Link to="/services/qa-engineering" className="block py-2 text-foreground-white/80 hover:text-brand-primary transition-colors" onClick={toggleMobileMenu}>
                    Quality Assurance Engineering
                  </Link>
                </div>
              )}
            </div>

            {/* Engagement Models */}
            <div>
              <button 
                onClick={() => toggleDropdown('engagement')}
                className="flex items-center justify-between w-full text-left text-lg font-semibold text-foreground-white hover:text-brand-primary transition-colors"
              >
                Engagement Models
                <ChevronDown className={`w-5 h-5 transition-transform ${openDropdown === 'engagement' ? 'rotate-180' : ''}`} />
              </button>
              {openDropdown === 'engagement' && (
                <div className="mt-4 pl-4 space-y-3">
                  <Link to="/engagement/enterprise" className="block py-2 text-foreground-white/80 hover:text-brand-primary transition-colors" onClick={toggleMobileMenu}>
                    For Enterprise
                  </Link>
                  <Link to="/engagement/innovation-lab" className="block py-2 text-foreground-white/80 hover:text-brand-primary transition-colors" onClick={toggleMobileMenu}>
                    For Startups (Innovation Lab)
                  </Link>
                  <Link to="/engagement/dedicated-teams" className="block py-2 text-foreground-white/80 hover:text-brand-primary transition-colors" onClick={toggleMobileMenu}>
                    Dedicated Teams
                  </Link>
                  <Link to="/engagement/outcome-based" className="block py-2 text-foreground-white/80 hover:text-brand-primary transition-colors" onClick={toggleMobileMenu}>
                    Outcome-Based
                  </Link>
                </div>
              )}
            </div>

            {/* Insights */}
            <div>
              <button 
                onClick={() => toggleDropdown('insights')}
                className="flex items-center justify-between w-full text-left text-lg font-semibold text-foreground-white hover:text-brand-primary transition-colors"
              >
                Insights
                <ChevronDown className={`w-5 h-5 transition-transform ${openDropdown === 'insights' ? 'rotate-180' : ''}`} />
              </button>
              {openDropdown === 'insights' && (
                <div className="mt-4 pl-4 space-y-3">
                  <Link to="/insights/case-studies" className="block py-2 text-foreground-white/80 hover:text-brand-primary transition-colors" onClick={toggleMobileMenu}>
                    Case Studies
                  </Link>
                  <Link to="/insights/blogs" className="block py-2 text-foreground-white/80 hover:text-brand-primary transition-colors" onClick={toggleMobileMenu}>
                    Blogs
                  </Link>
                  <Link to="/insights/ebooks" className="block py-2 text-foreground-white/80 hover:text-brand-primary transition-colors" onClick={toggleMobileMenu}>
                    eBooks
                  </Link>
                </div>
              )}
            </div>

            {/* Events Platform */}
            <div>
              <button 
                onClick={() => toggleDropdown('events')}
                className="flex items-center justify-between w-full text-left text-lg font-semibold text-foreground-white hover:text-brand-primary transition-colors"
              >
                Events
                <ChevronDown className={`w-5 h-5 transition-transform ${openDropdown === 'events' ? 'rotate-180' : ''}`} />
              </button>
              {openDropdown === 'events' && (
                <div className="mt-4 pl-4 space-y-3">
                  <Link to="/events" className="block py-2 text-foreground-white/80 hover:text-brand-primary transition-colors" onClick={toggleMobileMenu}>
                    Events
                  </Link>
                  <Link to="/events/features/registration-and-ticketing" className="block py-2 text-foreground-white/80 hover:text-brand-primary transition-colors" onClick={toggleMobileMenu}>
                    Registration & Ticketing
                  </Link>
                  <Link to="/events/features/on-site-experience" className="block py-2 text-foreground-white/80 hover:text-brand-primary transition-colors" onClick={toggleMobileMenu}>
                    On-Site Experience
                  </Link>
                </div>
              )}
            </div>

            {/* About Us */}
            <div>
              <button 
                onClick={() => toggleDropdown('about')}
                className="flex items-center justify-between w-full text-left text-lg font-semibold text-foreground-white hover:text-brand-primary transition-colors"
              >
                About Us
                <ChevronDown className={`w-5 h-5 transition-transform ${openDropdown === 'about' ? 'rotate-180' : ''}`} />
              </button>
              {openDropdown === 'about' && (
                <div className="mt-4 pl-4 space-y-3">
                  <Link to="/about/who-we-are" className="block py-2 text-foreground-white/80 hover:text-brand-primary transition-colors" onClick={toggleMobileMenu}>
                    Who We Are
                  </Link>
                  <Link to="/about/careers" className="block py-2 text-foreground-white/80 hover:text-brand-primary transition-colors" onClick={toggleMobileMenu}>
                    Careers
                  </Link>
                </div>
              )}
            </div>

            {/* Mobile CTA */}
            <div className="pt-6 border-t border-white/10">
              <Button variant="hero" size="default" className="w-full">
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;