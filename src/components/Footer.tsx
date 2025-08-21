import React, { useEffect } from "react";

import Gptw from "../assets/images/gptw.webp";
import Iso from "../assets/images/iso.svg";
import Logo from "../assets/images/i9logo-logo-wht.svg";

const Footer = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://widget.clutch.co/static/js/widget.js";
    script.async = true;

    // Append the script AFTER widget placeholder is in DOM
    script.onload = () => {
      if ((window as any).Clutch) {
        // Sometimes Clutch attaches init to window
        (window as any).Clutch.init?.();
      }
    };

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <footer className="bg-background-dark py-28 lg:py-32 relative overflow-hidden border-t border-white/10">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-brand-purple/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-screen-xl relative z-10">
        <div className="grid md:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="md:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <span className="text-2xl font-bold text-foreground-white">
                <img src={Logo} alt="IndexNine" className="h-8" />
              </span>
            </div>
            <p className="text-foreground-white/85 leading-relaxed text-base font-light mb-6">
              We are a strategic partner for modern businesses, helping them
              build innovative products, modernize legacy systems, and leverage
              AI to drive positive business outcomes.
            </p>
            <div className="flex space-x-4">
              <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-brand-primary transition-colors duration-300 cursor-pointer">
                <span className="text-foreground-white text-sm font-semibold">
                  in
                </span>
              </div>
              <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-brand-primary transition-colors duration-300 cursor-pointer">
                <span className="text-foreground-white text-sm font-semibold">
                  𝕏
                </span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-foreground-white font-semibold text-lg mb-6">
              Services
            </h4>
            <ul className="space-y-3 text-foreground-white/80">
              <li className="hover:text-brand-primary transition-colors cursor-pointer">
                Custom Software Development
              </li>
              <li className="hover:text-brand-primary transition-colors cursor-pointer">
                AI & ML Development
              </li>
              <li className="hover:text-brand-primary transition-colors cursor-pointer">
                Data Engineering
              </li>
              <li className="hover:text-brand-primary transition-colors cursor-pointer">
                Quality Assurance Engineering
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-foreground-white font-semibold text-lg mb-6">
              Contact
            </h4>
            <div className="space-y-3 text-foreground-white/80">
              <p className="leading-relaxed">
                12th Floor, Sadanand Business Center, Pashan Hwy Side Rd,
                Mahalunge, Pune, Maharashtra 411045
              </p>
              <p className="hover:text-brand-primary transition-colors cursor-pointer">
                +91 00000 00000
              </p>
              <p className="hover:text-brand-primary transition-colors cursor-pointer">
                <a href="mailto:sales@indexnine.com">sales@indexnine.com</a>
              </p>
            </div>
          </div>

          {/* Partners */}
          <div>
            <h4 className="text-foreground-white font-semibold text-lg mb-6">
              Partners
            </h4>
            <div className="space-y-4">
              <a href="https://www.greatplacetowork.in/great/company/indexnine-technologies-private-limited">
                <img src={Gptw} alt="GPTW" className="h-16" />
              </a>
              <a href="https://indexnine.com/careers/">
                <img src={Iso} alt="ISO" className="h-10" />
              </a>
              <div className="min-w-[200px] min-h-[50px]">
                <div
                  className="clutch-widget"
                  data-url="https://widget.clutch.co"
                  data-widget-type="14"
                  data-height="50"
                  data-nofollow="false"
                  data-expandifr="true"
                  data-primary-color="#505dfd"
                  data-header-color="#00010a"
                  data-clutchcompany-id="2249150"
                ></div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Border */}
        <div className="border-t border-white/10 mt-16 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-foreground-white/60 text-sm">
              © 2025 IndexNine. All rights reserved. | Privacy Policy | Terms of
              Service |{" "}
              <a
                href="/test/homepage"
                className="hover:text-brand-primary transition-colors"
              >
                Homepage Test
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
