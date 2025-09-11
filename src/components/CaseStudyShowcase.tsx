import React from "react";
import { OptimizedImage } from "@/components/OptimizedImage";

const CaseStudyShowcase = () => {
  return (
    <section className="py-16 md:py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex justify-center">
          <div className="w-full max-w-md">
            {/* Outer container with glassmorphism effect */}
            <div className="relative rounded-[30px] border border-white/8 backdrop-blur-sm bg-background-card p-[10px]">
              {/* Inner border */}
              <div className="rounded-[20px] border border-white/8 overflow-hidden">
                {/* Background image container */}
                <div className="relative rounded-[19px] h-[516px] overflow-hidden">
                  <OptimizedImage
                    src="https://framerusercontent.com/images/kcm4RjyF1U6efwjAGVhZicw1c8.jpeg"
                    alt="Modern building representing digital transformation"
                    className="absolute inset-0 w-full h-full object-cover"
                    width={460}
                    height={516}
                    priority={false}
                  />
                  
                  {/* Gradient overlay */}
                  <div 
                    className="absolute inset-0"
                    style={{
                      background: "linear-gradient(185.5deg, transparent 43%, rgba(0, 0, 0, 0.95) 68%, rgba(0, 0, 0, 0.95) 100%)"
                    }}
                  />
                  
                  {/* Content container */}
                  <div className="absolute bottom-0 left-0 right-0 m-4">
                    <div className="rounded-xl border border-white/5 bg-background-card/95 backdrop-blur-sm p-6">
                      {/* Header section */}
                      <div className="flex items-center justify-between mb-4">
                        <div className="w-[100px] h-[24px] flex items-center">
                          <OptimizedImage
                            src="https://framerusercontent.com/images/QwSKiVES2EVuIgRR1dsm4oHtU.svg"
                            alt="Sling Interactive Tech Logo"
                            className="w-full h-full object-contain"
                            width={113}
                            height={24}
                          />
                        </div>
                        <div>
                          <h4 className="text-lg font-medium text-foreground-white tracking-tight">
                            Sling Interactive Tech
                          </h4>
                        </div>
                      </div>
                      
                      {/* Separator */}
                      <div 
                        className="h-px mb-6"
                        style={{
                          background: "linear-gradient(90deg, transparent 0%, rgba(255, 255, 255, 0.15) 50%, transparent 100%)"
                        }}
                      />
                      
                      {/* Body content */}
                      <div className="space-y-4">
                        <p className="text-foreground-white/70 text-sm leading-relaxed tracking-tight">
                          Expanded market reach, tapping into new demographics with a driven approach.
                        </p>
                        
                        {/* Stats tags */}
                        <div className="flex gap-3 flex-wrap">
                          <div className="inline-flex items-center px-3 py-1.5 rounded-lg border border-white/5 backdrop-blur-sm bg-gradient-to-r from-white/5 to-gray-600/9">
                            <span className="text-xs text-foreground-white/60 font-medium">
                              20% Market Share
                            </span>
                          </div>
                          <div className="inline-flex items-center px-3 py-1.5 rounded-lg border border-white/5 backdrop-blur-sm bg-gradient-to-r from-white/5 to-gray-600/9">
                            <span className="text-xs text-foreground-white/60 font-medium">
                              45% Enhanced Visibility
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudyShowcase;