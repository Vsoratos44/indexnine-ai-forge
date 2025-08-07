import React, { useEffect } from "react";

const Footer = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://widget.clutch.co/static/js/widget.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <footer className="bg-background-dark py-20 lg:py-24 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-brand-purple/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-4 gap-12 lg:gap-16">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-8">
              <span className="text-2xl font-bold text-foreground-white">
                <img
                  src="./src/assets/images/i9logo-logo-wht.svg"
                  alt="IndexNine"
                  className="h-8"
                />
              </span>
            </div>
            <p className="text-foreground-white/85 leading-relaxed max-w-lg text-lg font-light mb-8">
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
            <h4 className="text-foreground-white font-bold text-lg mb-8">
              Services
            </h4>
            <ul className="space-y-4 text-foreground-white/80">
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
            <h4 className="text-foreground-white font-bold text-lg mb-8">
              Contact
            </h4>
            <div className="space-y-4 text-foreground-white/80">
              <p className="leading-relaxed">
                12th Floor, Sadanand Business Center, Pashan Hwy Side Rd,
                Mahalunge, Pune, Maharashtra 411045
              </p>
              <p className="hover:text-brand-primary transition-colors cursor-pointer">
                +91 987 654 3210
              </p>
              <p className="hover:text-brand-primary transition-colors cursor-pointer">
                info@indexnine.com
              </p>
            </div>
          </div>
          <div className="md:col-span-2 flex items-center gap-4"></div>
          {/* Awards + Clutch Badge */}
          <div className="md:col-span-2 flex items-center gap-4">
            <a href="https://indexnine.com/careers/">
              <img
                src="./src/assets/images/gptw.webp"
                alt="GPTW"
                className="h-24"
              />
            </a>
            <div className="mb-3">
              <a href="https://indexnine.com/careers/">
                <img
                  src="./src/assets/images/iso.svg"
                  alt="ISO"
                  className="h-12"
                />
              </a>
              <div className="min-w-[220px]">
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
              Service
            </p>
            {/* Optional Login link */}
            {/* <a
              href="/cms/dashboard"
              className="text-foreground-white/60 hover:text-brand-primary transition-colors text-sm border border-white/20 px-4 py-2 rounded-lg hover:border-brand-primary/50"
            >
              Employee Login
            </a> */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
