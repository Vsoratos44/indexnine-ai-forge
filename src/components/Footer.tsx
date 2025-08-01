import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-background-dark py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-brand-primary rounded-lg flex items-center justify-center">
                <div className="w-4 h-4 bg-white rounded-sm"></div>
              </div>
              <span className="text-xl font-bold text-foreground-white">INDEXNINE</span>
            </div>
            <p className="text-foreground-white/80 leading-relaxed max-w-lg">
              We are a strategic partner for modern businesses, helping them build innovative products, modernize legacy systems, and leverage AI to drive positive business outcomes.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-foreground-white font-semibold mb-6">Services</h4>
            <ul className="space-y-3 text-foreground-white/80">
              <li>Custom Software Development</li>
              <li>AI & ML Development</li>
              <li>Data Engineering</li>
              <li>Quality Assurance Engineering</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-foreground-white font-semibold mb-6">Contact</h4>
            <div className="space-y-3 text-foreground-white/80">
              <p>12th Floor, Sadanand Business Center, Pashan Hwy Side Rd, Mahalunge, Pune, Maharashtra 411045</p>
              <p>+91 987 654 3210</p>
              <p>info@indexnine.com</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;