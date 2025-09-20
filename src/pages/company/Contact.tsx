import React, { useEffect, useRef } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import {
  WebPageSchema,
  BreadcrumbSchema,
  LocalBusinessSchema,
} from "@/components/SEOStructuredData";
import { BrainCircuit, BrickWall, Sparkles, SquareUser } from "lucide-react";
import LivingVoidBackground from "@/components/LivingVoidBackground";
import styles from "../../assets/css/stylesheet.module.css";
import { Input, Textarea } from "@/components/atoms";
import { Label } from "@/components/ui/label";

const Contact = () => {
  const formRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Create script element
    const script = document.createElement("script");
    script.src = "https://webforms.pipedrive.com/f/loader";
    script.async = true;

    // Append script inside the div or document body
    if (formRef.current) {
      formRef.current.appendChild(script);
    }

    // Cleanup: Remove script when component unmounts
    return () => {
      if (formRef.current && script.parentNode === formRef.current) {
        formRef.current.removeChild(script);
      }
    };
  }, []);
  return (
    <div className="min-h-screen bg-background">
      <WebPageSchema
        title="About IndexNine Technologies - Our Story & Mission"
        description="Learn about IndexNine Technologies, our mission to deliver exceptional product engineering solutions, and our commitment to excellence in AI and software development"
        url="https://www.indexnine.com/company/contact"
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://www.indexnine.com/" },
          { name: "Contact", url: "https://www.indexnine.com/company/contact" },
        ]}
      />
      <LocalBusinessSchema />
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-[480px] overflow-hidden bg-black">
        <LivingVoidBackground />

        <div className="relative z-10 container mx-auto px-6 pt-48 pb-24">
          <div className="max-w-4xl mx-auto text-center lg:text-left ml-0">
            <h1 className="text-[2.5rem] sm:text-[3rem] lg:text-[4rem] xl:text-[4rem] font-semibold text-foreground mb-6 leading-[1.25]  animate-fade-in font-montserrat">
              Contact{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Us
              </span>
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-foreground/85 mb-8 leading-relaxed font-light animate-slide-up font-montserrat max-w-4xl">
              We are a strategic partner for modern businesses, helping them
              build innovative products, modernize legacy systems, and leverage
              AI to drive positive business outcomes.
            </p>
          </div>
        </div>
      </section>

      <div
        className={`relative max-w-8xl bg-white mx-auto ${styles.sectionBgData}`}
      >
        {/* Mission Section */}
        <section className="py-24 lg:py-32 bg-glass-light border-glass backdrop-blur-sm shadow shadow-inner shadow-xl shadow-white">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-1/6 w-80 h-80 bg-brand-primary/8 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-1/6 w-96 h-96 bg-brand-purple/6 rounded-full blur-3xl"></div>
          </div>

          <div className="container mx-auto px-6 lg:px-8 relative z-10">
            <div className="max-w-5xl mx-auto text-center">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold mb-6 text-foreground-dark ">
                Our Vision
              </h2>
              <p className="text-base sm:text-lg text-foreground-dark-muted leading-relaxed space-y-4 sm:space-y-6">
                To be the global leader in transformative technology solutions,
                recognized for our innovation, expertise, and unwavering
                commitment to client success.
              </p>
            </div>
          </div>
        </section>
        <a id="contactForm"></a>
        {/* Values Section */}
        <section className="py-24 lg:py-32 bg-transparent">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="text-center mb-20">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold mb-6 text-foreground-dark ">
                Start your Project
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6 max-w-8xl mx-auto">
              <div className="relative overflow-hidden backdrop-blur-lg bg-glass-bg border border-glass-border rounded-2xl p-8 shadow-glass hover:shadow-glass-lg transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 animate-fade-in">
                <div className="flex items-center gap-4">
                  <div
                    className={`relative w-16 h-16 flex mb-6 items-center justify-center transition-all ${styles.icnBg}`}
                  >
                    <SquareUser className="w-6 h-6 text-brand-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground-dark mb-6 leading-tight font-montserrat">
                    Contact
                  </h3>
                </div>
                <p className="text-foreground-dark-muted font-montserrat">
                  12th Floor,
                  <br />
                  Sadanand Business Center,
                  <br />
                  Pashan Hwy Side Rd,
                  <br />
                  Mahalunge, Pune,
                  <br />
                  Maharashtra 411045
                </p>
                <p className="mt-3">
                  <a
                    className="text-foreground-dark-muted font-montserrat"
                    href="mailto:sales@indexnine.com"
                  >
                    sales@indexnine.com
                  </a>
                </p>
                <div className="flex space-x-4 mt-3">
                  <a
                    href="https://www.linkedin.com/company/indexnine-technologies"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center bg-black/10 hover:bg-brand-primary text-brand-primary hover:text-white transition-colors duration-300 cursor-pointer"
                  >
                    <span className="text-sm font-semibold">in</span>
                  </a>
                  <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center bg-black/10 hover:bg-brand-primary text-brand-primary hover:text-white transition-colors duration-300 cursor-pointer">
                    <span className=" text-sm font-semibold">𝕏</span>
                  </div>
                </div>
              </div>

              <div className="relative overflow-hidden backdrop-blur-lg bg-glass-bg border border-glass-border rounded-2xl p-8 shadow-glass hover:shadow-glass-lg transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 animate-fade-in">
                {/* <form
                  className="space-y-6"
                  action="/submit-qe-lead"
                  method="POST"
                >
                  <div>
                    <Label
                      htmlFor="name"
                      className="block text-sm font-medium text-foreground-dark mb-2"
                    >
                      Full Name
                    </Label>
                    <Input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-3 bg-white/10 border border-black/20 rounded-sm text-foreground-dark placeholder-black/60 focus:outline-none focus:ring-0"
                    />
                  </div>

                  <div>
                    <Label
                      htmlFor="email"
                      className="block text-sm font-medium text-foreground-dark mb-2"
                    >
                      Work Email
                    </Label>
                    <Input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 bg-white/10 border border-black/20 rounded-sm text-foreground-dark placeholder-black/60 focus:outline-none focus:ring-0"
                    />
                  </div>

                  <div>
                    <Label
                      htmlFor="challenge"
                      className="block text-sm font-medium text-foreground-dark mb-2"
                    >
                      What is your primary quality challenge?
                    </Label>
                    <Textarea
                      id="challenge"
                      name="challenge"
                      rows={4}
                      className="w-full px-4 py-3 bg-white/10 border border-black/20 rounded-sm text-foreground-dark placeholder-black/60 focus:outline-none focus:ring-0 resize-none"
                    />
                  </div>

                  <Button type="submit" size="lg" variant="btnSecondary">
                    Submit
                  </Button>
                </form> */}
                <div
                  ref={formRef}
                  className="pipedriveWebForms"
                  data-pd-webforms="https://webforms.pipedrive.com/f/czPwmg107NiqeB4e4Uk1RpjpoM2hmR7XEDrNLOyeIT4EM0EKMQFP68ODIrplODHjr5"
                />
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Final CTA Section */}

      <Footer />
    </div>
  );
};

export default Contact;
