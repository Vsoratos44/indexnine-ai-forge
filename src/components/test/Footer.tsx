import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Linkedin, Mail, MapPin, Phone, Twitter } from "lucide-react";
import LogoWhite from "../../assets/images/i9logo-logo-wht.svg";

const Footer = () => {
  // Load Clutch widget script
  useEffect(() => {
    // Create and append the Clutch script
    const script = document.createElement("script");
    script.src = "https://widget.clutch.co/static/js/widget.js";
    script.async = true;
    script.onload = () => {
      // Initialize the widget after script loads
      if ((window as any).CLUTCHCO) {
        (window as any).CLUTCHCO.Init();
      }
    };
    document.head.appendChild(script);

    // Cleanup function to remove the script
    return () => {
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, []);

  return (
    <footer className="bg-background relative border-t border-border/20">
      {/* Enhanced background decoration */}
      <div className="absolute inset-0 ">
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `radial-gradient(circle at 50% 50%, hsl(239 84% 67%) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        ></div>
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-brand-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-brand-purple/4 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 py-16 lg:py-20 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <img src={LogoWhite} alt="IndexNine" className="h-8" />
            </div>
            <p className="text-foreground/70 leading-relaxed max-w-sm">
              IndexNine Technologies delivers world-class product engineering
              and AI consulting services for startups and enterprises.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://linkedin.com/company/indexnine"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/60 hover:text-brand-primary transition-colors p-2 rounded-lg hover:bg-brand-primary/10"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://x.com/indexnine"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/60 hover:text-brand-primary transition-colors p-2 rounded-lg hover:bg-brand-primary/10"
                aria-label="X (Twitter)"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-foreground">Services</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/services/custom-software"
                  className="text-foreground/70 hover:text-brand-primary transition-colors"
                >
                  Custom Software Development
                </Link>
              </li>
              <li>
                <Link
                  to="/studios/ai"
                  className="text-foreground/70 hover:text-brand-primary transition-colors"
                >
                  AI & ML Development
                </Link>
              </li>
              <li>
                <Link
                  to="/studios/data-engineering"
                  className="text-foreground/70 hover:text-brand-primary transition-colors"
                >
                  Data Engineering
                </Link>
              </li>
              <li>
                <Link
                  to="/studios/quality-engineering"
                  className="text-foreground/70 hover:text-brand-primary transition-colors"
                >
                  Quality Engineering
                </Link>
              </li>
              <li>
                <Link
                  to="/services/consulting"
                  className="text-foreground/70 hover:text-brand-primary transition-colors"
                >
                  Consulting & Strategy
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-foreground">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-brand-primary mt-0.5 flex-shrink-0" />
                <span className="text-foreground/70 text-sm leading-relaxed">
                  450 Columbus Blvd, Suite 200,
                  <br />
                  Hartford, CT 06103
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-brand-primary flex-shrink-0" />
                <a
                  href="tel:+18605555555"
                  className="text-foreground/70 hover:text-brand-primary transition-colors"
                >
                  (860) 555-5555
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-brand-primary flex-shrink-0" />
                <a
                  href="mailto:hello@indexnine.com"
                  className="text-foreground/70 hover:text-brand-primary transition-colors"
                >
                  hello@indexnine.com
                </a>
              </li>
            </ul>
          </div>

          {/* Partners & Certifications */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-foreground">Partners</h3>
            <div className="space-y-4">
              {/* Great Place to Work */}
              <div className="bg-white rounded-lg p-3 inline-block">
                <img
                  src="/lovable-uploads/7f07299e-0d50-4a70-ac3b-4d27f0a98a19.png"
                  alt="Great Place to Work Certified"
                  className="h-12 w-auto"
                />
              </div>

              {/* ISO Certification */}
              <div className="bg-white rounded-lg p-3 inline-block">
                <svg
                  viewBox="0 0 100 100"
                  className="h-12 w-12"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="50"
                    cy="50"
                    r="45"
                    fill="none"
                    stroke="#2563eb"
                    strokeWidth="3"
                  />
                  <text
                    x="50"
                    y="45"
                    textAnchor="middle"
                    className="fill-current text-blue-600 text-xs font-bold"
                  >
                    ISO
                  </text>
                  <text
                    x="50"
                    y="60"
                    textAnchor="middle"
                    className="fill-current text-blue-600 text-xs font-bold"
                  >
                    27001
                  </text>
                </svg>
              </div>

              {/* Clutch Widget */}
              <div
                className="clutch-widget"
                data-url="https://widget.clutch.co"
                data-widget-type="2"
                data-height="50"
                data-nofollow="true"
                data-expandifr="true"
                data-scale="100"
                data-clutchcompany-id="2329166"
              ></div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border/20 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
          <p className="text-foreground/60 text-sm">
            © 2025 IndexNine Technologies. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm">
            <Link
              to="/privacy"
              className="text-foreground/60 hover:text-brand-primary transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms"
              className="text-foreground/60 hover:text-brand-primary transition-colors"
            >
              Terms of Service
            </Link>
            <Link
              to="/test/homepage"
              className="text-foreground/60 hover:text-brand-primary transition-colors"
            >
              Homepage Test
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;