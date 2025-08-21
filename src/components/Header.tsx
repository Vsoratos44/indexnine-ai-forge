import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import LogoWhite from "../assets/images/i9logo-logo-wht.svg";
import LogoBlack from "../assets/images/i9logo-logo-blk.svg";
import { ChevronRight } from "lucide-react";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [isLightSection, setIsLightSection] = useState(false);
  const [scrolledHeaderToVh, setScrolledHeaderToVh] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    // Close any open dropdowns when toggling menu
    setOpenDropdown(null);
  };
  const toggleDropdown = (dropdown: string) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown);
  };

  useEffect(() => {
    const handleScroll = () => {
      const triggerPoint = window.innerHeight * 0.2;
      setScrolledHeaderToVh(window.scrollY > triggerPoint);

      const headerHeight = 80;

      // Find the element currently under the header
      const elementFromPoint = document.elementFromPoint(
        window.innerWidth / 2,
        headerHeight + 10
      );

      let light = false;

      if (elementFromPoint) {
        const section = elementFromPoint.closest("[data-section]");
        if (section) {
          const sectionType = section.getAttribute("data-section");

          if (sectionType === "value-proposition") {
            // Keep header white over most of the Value Prop gradient,
            // switch to dark text only near the very bottom (white area)
            const vp = section as HTMLElement;
            const vpRect = vp.getBoundingClientRect();
            const vpTop = window.scrollY + vpRect.top;
            const vpHeight = vpRect.height || vp.offsetHeight || 1;
            const headerY = window.scrollY + headerHeight + 10;
            const progress = (headerY - vpTop) / vpHeight; // 0 at top, 1 at bottom

            light = progress >= 0.9; // turn dark text when ~last 10% (near white)
          } else {
            // Sections that should use dark text (light backgrounds)
            const lightSections = [
              "social-proof",
              "client-experience",
              "product-lifecycle",
              "practices-studios",
              "insights",
            ];
            light = lightSections.includes(sectionType || "");
          }
        }
      }

      // Fallbacks
      if (window.scrollY < 100) {
        light = false; // Hero is dark
      }

      setIsLightSection(light);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initialize state

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50">
        <div className="container mx-auto px-4 md:px-0 lg:px-0 py-3">
          <div
            className={`border px-6 py-4 rounded-2xl transition-colors duration-500
    ${
      scrolledHeaderToVh
        ? "bg-[#00000050] backdrop-blur-md border-border/40 shadow-md"
        : "bg-[#00000000] border-transparent"
    }`}
          >
            <div className="flex items-center justify-between h-12">
              {/* Logo */}
              <Link
                to="/"
                className="flex items-center space-x-2 hover:opacity-80 transition-opacity"
              >
                <span
                  className={`text-xl font-bold transition-colors duration-300 ${
                    isLightSection ? "text-gray-900" : "text-foreground"
                  }`}
                >
                  {isLightSection ? (
                    <img src={LogoBlack} alt="IndexNine" className="h-8" />
                  ) : (
                    <img src={LogoWhite} alt="IndexNine" className="h-8" />
                  )}
                </span>
              </Link>

              {/* Desktop Navigation */}
              <nav className="hidden md:flex items-center space-x-8">
                <div className="relative group">
                  <button
                    className={`flex items-center space-x-1 transition-colors duration-300 ${
                      isLightSection
                        ? "text-gray-900 hover:text-brand-primary"
                        : "text-foreground hover:text-brand-primary"
                    }`}
                  >
                    <span>Services</span>
                    <ChevronDown className="w-4 h-4" />
                  </button>
                  {/* Backdrop overlay */}
                  {/* <div className="fixed inset-0 bg-black/60 backdrop-blur-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-[90]"></div> */}
                  <div className="absolute top-full left-0 mt-2 w-64 bg-white border border-gray-200 rounded-xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-[100]">
                    <div className="p-4 space-y-2">
                      {/* <a
                        href="#"
                        className="group inline-flex items-center space-x-1 text-sm font-medium text-gray-800"
                      >
                        <ChevronRight className="transform transition-transform duration-300 group-hover:ease-in-out group-hover:translate-x-1" />
                        <span className="transform transition-transform duration-300 ease-in-out group-hover:translate-x-1">
                          OURA 101
                        </span>
                      </a>
                      <a
                        href="#"
                        className="group inline-flex items-center space-x-2 text-lg font-medium text-gray-800"
                      >
                        <ChevronRight className="transform transition-transform duration-300 ease-in-out hover:translate-x-1" />
                        <span className="transform transition-transform duration-300 ease-in-out group-hover:translate-x-1">
                          OURA 101
                        </span>
                      </a> */}
                      <Link
                        to="/services/custom-software"
                        className="block px-4 py-3 text-gray-800 hover:text-brand-primary hover:bg-brand-primary/10 rounded-lg transition-all duration-200"
                      >
                        Custom Software Development
                      </Link>
                      <Link
                        to="/studios/ai"
                        className="block px-4 py-3 text-gray-800 hover:text-brand-primary hover:bg-brand-primary/10 rounded-lg transition-all duration-200"
                      >
                        AI & ML Development
                      </Link>
                      <Link
                        to="/studios/data-engineering"
                        className="block px-4 py-3 text-gray-800 hover:text-brand-primary hover:bg-brand-primary/10 rounded-lg transition-all duration-200"
                      >
                        Data Engineering
                      </Link>
                      <Link
                        to="/studios/quality-engineering"
                        className="block px-4 py-3 text-gray-800 hover:text-brand-primary hover:bg-brand-primary/10 rounded-lg transition-all duration-200"
                      >
                        Quality Assurance Engineering
                      </Link>
                      <Link
                        to="/services/consulting"
                        className="block px-4 py-3 text-gray-800 hover:text-brand-primary hover:bg-brand-primary/10 rounded-lg transition-all duration-200"
                      >
                        Consulting & Strategy
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="relative group">
                  <button
                    className={`flex items-center space-x-1 transition-colors duration-300 ${
                      isLightSection
                        ? "text-gray-900 hover:text-brand-primary"
                        : "text-foreground hover:text-brand-primary"
                    }`}
                  >
                    <span>Engagement Models</span>
                    <ChevronDown className="w-4 h-4" />
                  </button>
                  {/* Backdrop overlay */}
                  {/* <div className="fixed inset-0 bg-black/60 backdrop-blur-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-[90]"></div> */}
                  <div className="absolute top-full left-0 mt-2 w-64 bg-white border border-gray-200 rounded-xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-[100]">
                    <div className="p-4 space-y-2">
                      <Link
                        to="/engagement/innovation-lab"
                        className="block px-4 py-3 text-gray-800 hover:text-brand-primary hover:bg-brand-primary/10 rounded-lg transition-all duration-200"
                      >
                        Innovation Lab
                      </Link>
                      <Link
                        to="/engagement/enterprise"
                        className="block px-4 py-3 text-gray-800 hover:text-brand-primary hover:bg-brand-primary/10 rounded-lg transition-all duration-200"
                      >
                        Enterprise Studio
                      </Link>
                      <Link
                        to="/engagement/dedicated-teams"
                        className="block px-4 py-3 text-gray-800 hover:text-brand-primary hover:bg-brand-primary/10 rounded-lg transition-all duration-200"
                      >
                        Dedicated Engineering Teams
                      </Link>
                      <Link
                        to="/engagement/project-based"
                        className="block px-4 py-3 text-gray-800 hover:text-brand-primary hover:bg-brand-primary/10 rounded-lg transition-all duration-200"
                      >
                        Project-Based Engagements
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="relative group">
                  <button
                    className={`flex items-center space-x-1 transition-colors duration-300 ${
                      isLightSection
                        ? "text-gray-900 hover:text-brand-primary"
                        : "text-foreground hover:text-brand-primary"
                    }`}
                  >
                    <span>Insights</span>
                    <ChevronDown className="w-4 h-4" />
                  </button>
                  {/* Backdrop overlay */}
                  {/* <div className="fixed inset-0 bg-black/60 backdrop-blur-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-[90]"></div> */}
                  <div className="absolute top-full left-0 mt-2 w-48 bg-white border border-gray-200 rounded-xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-[100]">
                    <div className="p-4 space-y-2">
                      <Link
                        to="/insights/case-studies"
                        className="block px-4 py-3 text-gray-800 hover:text-brand-primary hover:bg-brand-primary/10 rounded-lg transition-all duration-200"
                      >
                        Case Studies
                      </Link>
                      <Link
                        to="/insights/blogs"
                        className="block px-4 py-3 text-gray-800 hover:text-brand-primary hover:bg-brand-primary/10 rounded-lg transition-all duration-200"
                      >
                        Blogs
                      </Link>
                      <Link
                        to="/resources/ebooks"
                        className="block px-4 py-3 text-gray-800 hover:text-brand-primary hover:bg-brand-primary/10 rounded-lg transition-all duration-200"
                      >
                        eBooks
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="relative group">
                  <button
                    className={`flex items-center space-x-1 transition-colors duration-300 ${
                      isLightSection
                        ? "text-gray-900 hover:text-brand-primary"
                        : "text-foreground hover:text-brand-primary"
                    }`}
                  >
                    <span>Events</span>
                    <ChevronDown className="w-4 h-4" />
                  </button>
                  {/* Backdrop overlay */}
                  {/* <div className="fixed inset-0 bg-black/60 backdrop-blur-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-[90]"></div> */}
                  <div className="absolute top-full left-0 mt-2 w-64 bg-white border border-gray-200 rounded-xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-[100]">
                    <div className="p-4 space-y-2">
                      <Link
                        to="/events"
                        className="block px-4 py-3 text-gray-800 hover:text-brand-primary hover:bg-brand-primary/10 rounded-lg transition-all duration-200"
                      >
                        Events
                      </Link>
                      <Link
                        to="/events/features/on-site-experience"
                        className="block px-4 py-3 text-gray-800 hover:text-brand-primary hover:bg-brand-primary/10 rounded-lg transition-all duration-200"
                      >
                        On-Site Experience
                      </Link>
                    </div>
                  </div>
                </div>

                <Link
                  to="/about"
                  className={`transition-colors duration-300 ${
                    isLightSection
                      ? "text-gray-900 hover:text-brand-primary"
                      : "text-foreground hover:text-brand-primary"
                  }`}
                >
                  About Us
                </Link>
              </nav>

              {/* Mobile Menu Button */}
              <button
                className={`md:hidden transition-colors duration-300 ${
                  isLightSection
                    ? "text-gray-900 hover:text-brand-primary"
                    : "text-foreground hover:text-brand-primary"
                }`}
                onClick={toggleMobileMenu}
                aria-label="Toggle mobile menu"
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>

              {/* Desktop CTA Button */}
              <div className="hidden md:block">
                <Button
                  variant="default"
                  size="default"
                  className="rounded-full"
                >
                  Scope a Project
                </Button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Menu */}
      <div
        className={`fixed inset-0 top-0 bg-background z-[100] transform transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden`}
        style={{ backgroundColor: "hsl(234, 65%, 8%)" }}
      >
        {/* Mobile Header */}
        <div
          className="flex items-center justify-between h-20 px-6 border-b border-white/20"
          style={{ backgroundColor: "hsl(234, 65%, 8%)" }}
        >
          <Link
            to="/"
            className="flex items-center space-x-2"
            onClick={toggleMobileMenu}
          >
            <div className="w-8 h-8 bg-brand-primary rounded-lg flex items-center justify-center">
              <div className="w-4 h-4 bg-white rounded-sm"></div>
            </div>
            <span className="text-xl font-bold text-white">INDEXNINE</span>
          </Link>
          <button
            onClick={() => {
              setIsMobileMenuOpen(false);
              setOpenDropdown(null);
            }}
            className="text-white hover:text-brand-primary transition-colors p-2"
            aria-label="Close mobile menu"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Mobile Navigation Content */}
        <div
          className="flex-1 overflow-y-auto px-6 py-8"
          style={{ backgroundColor: "hsl(234, 65%, 8%)" }}
        >
          <nav className="space-y-6">
            {/* Services */}
            <div className="space-y-4">
              <button
                onClick={() => toggleDropdown("services")}
                className="flex items-center justify-between w-full text-left text-lg font-semibold text-white hover:text-brand-primary transition-colors"
              >
                <span>Services</span>
                <ChevronDown
                  className={`w-5 h-5 transition-transform ${
                    openDropdown === "services" ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openDropdown === "services" && (
                <div className="pl-4 space-y-3 border-l-2 border-brand-primary/30">
                  <Link
                    to="/services/custom-software"
                    className="block py-2 text-white/80 hover:text-brand-primary transition-colors font-medium"
                    onClick={toggleMobileMenu}
                  >
                    Custom Software Development
                  </Link>
                  <Link
                    to="/studios/ai"
                    className="block py-2 text-white/80 hover:text-brand-primary transition-colors font-medium"
                    onClick={toggleMobileMenu}
                  >
                    AI & ML Development
                  </Link>
                  <Link
                    to="/studios/data-engineering"
                    className="block py-2 text-white/80 hover:text-brand-primary transition-colors font-medium"
                    onClick={toggleMobileMenu}
                  >
                    Data Engineering
                  </Link>
                  <Link
                    to="/studios/quality-engineering"
                    className="block py-2 text-white/80 hover:text-brand-primary transition-colors font-medium"
                    onClick={toggleMobileMenu}
                  >
                    Quality Assurance Engineering
                  </Link>
                  <Link
                    to="/services/consulting"
                    className="block py-2 text-white/80 hover:text-brand-primary transition-colors font-medium"
                    onClick={toggleMobileMenu}
                  >
                    Consulting & Strategy
                  </Link>
                </div>
              )}
            </div>

            {/* Engagement Models */}
            <div className="space-y-4">
              <button
                onClick={() => toggleDropdown("engagement")}
                className="flex items-center justify-between w-full text-left text-lg font-semibold text-white hover:text-brand-primary transition-colors"
              >
                <span>Engagement Models</span>
                <ChevronDown
                  className={`w-5 h-5 transition-transform ${
                    openDropdown === "engagement" ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openDropdown === "engagement" && (
                <div className="pl-4 space-y-3 border-l-2 border-brand-primary/30">
                  <Link
                    to="/engagement/innovation-lab"
                    className="block py-2 text-white/80 hover:text-brand-primary transition-colors font-medium"
                    onClick={toggleMobileMenu}
                  >
                    Innovation Lab
                  </Link>
                  <Link
                    to="/engagement/enterprise"
                    className="block py-2 text-white/80 hover:text-brand-primary transition-colors font-medium"
                    onClick={toggleMobileMenu}
                  >
                    Enterprise Studio
                  </Link>
                  <Link
                    to="/engagement/dedicated-teams"
                    className="block py-2 text-white/80 hover:text-brand-primary transition-colors font-medium"
                    onClick={toggleMobileMenu}
                  >
                    Dedicated Engineering Teams
                  </Link>
                  <Link
                    to="/engagement/project-based"
                    className="block py-2 text-white/80 hover:text-brand-primary transition-colors font-medium"
                    onClick={toggleMobileMenu}
                  >
                    Project-Based Engagements
                  </Link>
                </div>
              )}
            </div>

            {/* Insights */}
            <div className="space-y-4">
              <button
                onClick={() => toggleDropdown("insights")}
                className="flex items-center justify-between w-full text-left text-lg font-semibold text-white hover:text-brand-primary transition-colors"
              >
                <span>Insights</span>
                <ChevronDown
                  className={`w-5 h-5 transition-transform ${
                    openDropdown === "insights" ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openDropdown === "insights" && (
                <div className="pl-4 space-y-3 border-l-2 border-brand-primary/30">
                  <Link
                    to="/insights/case-studies"
                    className="block py-2 text-white/80 hover:text-brand-primary transition-colors font-medium"
                    onClick={toggleMobileMenu}
                  >
                    Case Studies
                  </Link>
                  <Link
                    to="/insights/blogs"
                    className="block py-2 text-white/80 hover:text-brand-primary transition-colors font-medium"
                    onClick={toggleMobileMenu}
                  >
                    Blogs
                  </Link>
                  <Link
                    to="/resources/ebooks"
                    className="block py-2 text-white/80 hover:text-brand-primary transition-colors font-medium"
                    onClick={toggleMobileMenu}
                  >
                    eBooks
                  </Link>
                </div>
              )}
            </div>

            {/* Events */}
            <div className="space-y-4">
              <button
                onClick={() => toggleDropdown("events")}
                className="flex items-center justify-between w-full text-left text-lg font-semibold text-white hover:text-brand-primary transition-colors"
              >
                <span>Events</span>
                <ChevronDown
                  className={`w-5 h-5 transition-transform ${
                    openDropdown === "events" ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openDropdown === "events" && (
                <div className="pl-4 space-y-3 border-l-2 border-brand-primary/30">
                  <Link
                    to="/events"
                    className="block py-2 text-white/80 hover:text-brand-primary transition-colors font-medium"
                    onClick={toggleMobileMenu}
                  >
                    Events
                  </Link>
                  <Link
                    to="/events/features/on-site-experience"
                    className="block py-2 text-white/80 hover:text-brand-primary transition-colors font-medium"
                    onClick={toggleMobileMenu}
                  >
                    On-Site Experience
                  </Link>
                </div>
              )}
            </div>

            {/* About Us */}
            <Link
              to="/about"
              className="block text-lg font-semibold text-white hover:text-brand-primary transition-colors py-2"
              onClick={toggleMobileMenu}
            >
              About Us
            </Link>
          </nav>

          {/* Mobile CTA */}
          <div className="mt-8 pt-6 border-t border-white/20">
            <Button
              variant="hero"
              size="default"
              className="w-full text-lg py-4"
              onClick={toggleMobileMenu}
            >
              Scope a Project
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
