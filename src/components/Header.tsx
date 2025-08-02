import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronDown, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [isLightSection, setIsLightSection] = useState(false);

  const toggleMobileMenu = () => {
    console.log('Mobile menu toggle clicked, current state:', isMobileMenuOpen);
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  const toggleDropdown = (dropdown: string) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const headerHeight = 80;
      
      // Get the element that's currently under the header
      const elementFromPoint = document.elementFromPoint(window.innerWidth / 2, headerHeight + 10);
      
      if (elementFromPoint) {
        const section = elementFromPoint.closest('[data-section]');
        if (section) {
          const sectionType = section.getAttribute('data-section');
          
          // Define which sections have light backgrounds
          const lightSections = [
            'value-proposition', 
            'social-proof', 
            'client-experience', 
            'practices-studios', 
            'insights'
          ];
          
          setIsLightSection(lightSections.includes(sectionType || ''));
        }
      }
      
      // Fallback: check scroll position against known section positions
      if (scrollY < 100) {
        setIsLightSection(false); // Hero is dark
      } else if (scrollY > 600 && scrollY < 1200) {
        setIsLightSection(true); // Value prop section
      } else if (scrollY > 1200 && scrollY < 1800) {
        setIsLightSection(true); // Social proof section
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Call once to set initial state

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background-dark/95 backdrop-blur-md border-b border-white/10">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
            <div className="w-8 h-8 bg-brand-primary rounded-lg flex items-center justify-center">
              <div className="w-4 h-4 bg-white rounded-sm"></div>
            </div>
            <span className={`text-xl font-bold transition-colors duration-300 ${isLightSection ? 'text-gray-900' : 'text-foreground'}`}>INDEXNINE</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <div className="relative group">
              <button className={`flex items-center space-x-1 transition-colors duration-300 ${isLightSection ? 'text-gray-900 hover:text-brand-primary' : 'text-foreground hover:text-brand-primary'}`}>
                <span>Services</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              {/* Backdrop overlay */}
              <div className="fixed inset-0 bg-black/60 backdrop-blur-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-[90]"></div>
              <div className="absolute top-full left-0 mt-2 w-64 bg-white border border-gray-200 rounded-xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-[100]">
                <div className="p-4 space-y-2">
                  <Link to="/services/custom-software" className="block px-4 py-3 text-gray-800 hover:text-brand-primary hover:bg-brand-primary/10 rounded-lg transition-all duration-200">
                    Custom Software Development
                  </Link>
                  <Link to="/studios/ai" className="block px-4 py-3 text-gray-800 hover:text-brand-primary hover:bg-brand-primary/10 rounded-lg transition-all duration-200">
                    AI & ML Development
                  </Link>
                  <Link to="/studios/data-engineering" className="block px-4 py-3 text-gray-800 hover:text-brand-primary hover:bg-brand-primary/10 rounded-lg transition-all duration-200">
                    Data Engineering
                  </Link>
                  <Link to="/studios/quality-engineering" className="block px-4 py-3 text-gray-800 hover:text-brand-primary hover:bg-brand-primary/10 rounded-lg transition-all duration-200">
                    Quality Assurance Engineering
                  </Link>
                  <Link to="/services/consulting" className="block px-4 py-3 text-gray-800 hover:text-brand-primary hover:bg-brand-primary/10 rounded-lg transition-all duration-200">
                    Consulting & Strategy
                  </Link>
                </div>
              </div>
            </div>
            
            <div className="relative group">
              <button className={`flex items-center space-x-1 transition-colors duration-300 ${isLightSection ? 'text-gray-900 hover:text-brand-primary' : 'text-foreground hover:text-brand-primary'}`}>
                <span>Engagement Models</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              {/* Backdrop overlay */}
              <div className="fixed inset-0 bg-black/60 backdrop-blur-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-[90]"></div>
              <div className="absolute top-full left-0 mt-2 w-64 bg-white border border-gray-200 rounded-xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-[100]">
                <div className="p-4 space-y-2">
                  <Link to="/engagement/dedicated-teams" className="block px-4 py-3 text-gray-800 hover:text-brand-primary hover:bg-brand-primary/10 rounded-lg transition-all duration-200">
                    Dedicated Engineering Teams
                  </Link>
                  <a href="#contact" className="block px-4 py-3 text-gray-800 hover:text-brand-primary hover:bg-brand-primary/10 rounded-lg transition-all duration-200">
                    Project-Based Engagements
                  </a>
                </div>
              </div>
            </div>
            
            <div className="relative group">
              <button className={`flex items-center space-x-1 transition-colors duration-300 ${isLightSection ? 'text-gray-900 hover:text-brand-primary' : 'text-foreground hover:text-brand-primary'}`}>
                <span>Insights</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              {/* Backdrop overlay */}
              <div className="fixed inset-0 bg-black/60 backdrop-blur-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-[90]"></div>
              <div className="absolute top-full left-0 mt-2 w-48 bg-white border border-gray-200 rounded-xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-[100]">
                <div className="p-4 space-y-2">
                  <Link to="/case-studies" className="block px-4 py-3 text-gray-800 hover:text-brand-primary hover:bg-brand-primary/10 rounded-lg transition-all duration-200">
                    Case Studies
                  </Link>
                  <Link to="/insights" className="block px-4 py-3 text-gray-800 hover:text-brand-primary hover:bg-brand-primary/10 rounded-lg transition-all duration-200">
                    Blogs
                  </Link>
                  <Link to="/resources/ebooks" className="block px-4 py-3 text-gray-800 hover:text-brand-primary hover:bg-brand-primary/10 rounded-lg transition-all duration-200">
                    eBooks
                  </Link>
                </div>
              </div>
            </div>

            <div className="relative group">
              <button className={`flex items-center space-x-1 transition-colors duration-300 ${isLightSection ? 'text-gray-900 hover:text-brand-primary' : 'text-foreground hover:text-brand-primary'}`}>
                <span>Events</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              {/* Backdrop overlay */}
              <div className="fixed inset-0 bg-black/60 backdrop-blur-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-[90]"></div>
              <div className="absolute top-full left-0 mt-2 w-64 bg-white border border-gray-200 rounded-xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-[100]">
                <div className="p-4 space-y-2">
                  <Link to="/events" className="block px-4 py-3 text-gray-800 hover:text-brand-primary hover:bg-brand-primary/10 rounded-lg transition-all duration-200">
                    Events
                  </Link>
                  <Link to="/events/features/registration-and-ticketing" className="block px-4 py-3 text-gray-800 hover:text-brand-primary hover:bg-brand-primary/10 rounded-lg transition-all duration-200">
                    Registration & Ticketing
                  </Link>
                  <Link to="/events/features/on-site-experience" className="block px-4 py-3 text-gray-800 hover:text-brand-primary hover:bg-brand-primary/10 rounded-lg transition-all duration-200">
                    On-Site Experience
                  </Link>
                </div>
              </div>
            </div>
            
            <Link to="/about" className={`transition-colors duration-300 ${isLightSection ? 'text-gray-900 hover:text-brand-primary' : 'text-foreground hover:text-brand-primary'}`}>
              About Us
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className={`md:hidden transition-colors duration-300 ${isLightSection ? 'text-gray-900 hover:text-brand-primary' : 'text-foreground hover:text-brand-primary'}`}
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          {/* Desktop CTA Button */}
          <div className="hidden md:block">
            <Button variant="hero" size="default">
              Scope a Project
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <>
          {console.log('Rendering mobile menu, isMobileMenuOpen:', isMobileMenuOpen)}
          <div className="fixed inset-0 top-20 bg-red-500 z-[60] overflow-y-auto block">
          <div className="container mx-auto px-6 py-8 space-y-6">
            
            {/* Services */}
            <div>
              <button 
                onClick={() => toggleDropdown('services')}
                className="flex items-center justify-between w-full text-left text-lg font-semibold text-foreground hover:text-brand-primary transition-colors"
              >
                Services
                <ChevronDown className={`w-5 h-5 transition-transform ${openDropdown === 'services' ? 'rotate-180' : ''}`} />
              </button>
              {openDropdown === 'services' && (
                <div className="mt-4 pl-4 space-y-3">
                  <Link to="/services/custom-software" className="block py-2 text-foreground/80 hover:text-brand-primary transition-colors" onClick={toggleMobileMenu}>
                    Custom Software Development
                  </Link>
                  <Link to="/studios/ai" className="block py-2 text-foreground/80 hover:text-brand-primary transition-colors" onClick={toggleMobileMenu}>
                    AI & ML Development
                  </Link>
                  <Link to="/studios/data-engineering" className="block py-2 text-foreground/80 hover:text-brand-primary transition-colors" onClick={toggleMobileMenu}>
                    Data Engineering
                  </Link>
                  <Link to="/studios/quality-engineering" className="block py-2 text-foreground/80 hover:text-brand-primary transition-colors" onClick={toggleMobileMenu}>
                    Quality Assurance Engineering
                  </Link>
                  <Link to="/services/consulting" className="block py-2 text-foreground/80 hover:text-brand-primary transition-colors" onClick={toggleMobileMenu}>
                    Consulting & Strategy
                  </Link>
                </div>
              )}
            </div>

            {/* Engagement Models */}
            <div>
              <button 
                onClick={() => toggleDropdown('engagement')}
                className="flex items-center justify-between w-full text-left text-lg font-semibold text-foreground hover:text-brand-primary transition-colors"
              >
                Engagement Models
                <ChevronDown className={`w-5 h-5 transition-transform ${openDropdown === 'engagement' ? 'rotate-180' : ''}`} />
              </button>
               {openDropdown === 'engagement' && (
                <div className="mt-4 pl-4 space-y-3">
                  <Link to="/engagement/dedicated-teams" className="block py-2 text-foreground/80 hover:text-brand-primary transition-colors" onClick={toggleMobileMenu}>
                    Dedicated Engineering Teams
                  </Link>
                  <a href="#contact" className="block py-2 text-foreground/80 hover:text-brand-primary transition-colors" onClick={toggleMobileMenu}>
                    Project-Based Engagements
                  </a>
                </div>
              )}
            </div>

            {/* Insights */}
            <div>
              <button 
                onClick={() => toggleDropdown('insights')}
                className="flex items-center justify-between w-full text-left text-lg font-semibold text-foreground hover:text-brand-primary transition-colors"
              >
                Insights
                <ChevronDown className={`w-5 h-5 transition-transform ${openDropdown === 'insights' ? 'rotate-180' : ''}`} />
              </button>
              {openDropdown === 'insights' && (
                <div className="mt-4 pl-4 space-y-3">
                  <Link to="/case-studies" className="block py-2 text-foreground/80 hover:text-brand-primary transition-colors" onClick={toggleMobileMenu}>
                    Case Studies
                  </Link>
                  <Link to="/insights" className="block py-2 text-foreground/80 hover:text-brand-primary transition-colors" onClick={toggleMobileMenu}>
                    Blogs
                  </Link>
                  <Link to="/resources/ebooks" className="block py-2 text-foreground/80 hover:text-brand-primary transition-colors" onClick={toggleMobileMenu}>
                    eBooks
                  </Link>
                </div>
              )}
            </div>

            {/* Events Platform */}
            <div>
              <button 
                onClick={() => toggleDropdown('events')}
                className="flex items-center justify-between w-full text-left text-lg font-semibold text-foreground hover:text-brand-primary transition-colors"
              >
                Events
                <ChevronDown className={`w-5 h-5 transition-transform ${openDropdown === 'events' ? 'rotate-180' : ''}`} />
              </button>
              {openDropdown === 'events' && (
                <div className="mt-4 pl-4 space-y-3">
                  <Link to="/events" className="block py-2 text-foreground/80 hover:text-brand-primary transition-colors" onClick={toggleMobileMenu}>
                    Events
                  </Link>
                  <Link to="/events/features/registration-and-ticketing" className="block py-2 text-foreground/80 hover:text-brand-primary transition-colors" onClick={toggleMobileMenu}>
                    Registration & Ticketing
                  </Link>
                  <Link to="/events/features/on-site-experience" className="block py-2 text-foreground/80 hover:text-brand-primary transition-colors" onClick={toggleMobileMenu}>
                    On-Site Experience
                  </Link>
                </div>
              )}
            </div>

            {/* About Us */}
            <Link to="/about" className="block text-lg font-semibold text-foreground hover:text-brand-primary transition-colors" onClick={toggleMobileMenu}>
              About Us
            </Link>

            {/* Mobile CTA */}
            <div className="pt-6 border-t border-white/10">
              <Button variant="hero" size="default" className="w-full">
                Scope a Project
              </Button>
            </div>
          </div>
          </div>
        </>
      )}
    </header>
  );
};

export default Header;