import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, Code } from "lucide-react";
import styles from "../../../assets/css/stylesheet.module.css";

export const CrossLinkingSection: React.FC = () => {
  return (
    <section className="py-24 lg:py-32 bg-[#fff]">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold mb-6 text-foreground-dark">
              How Our Studios Work{" "}
              <span className="text-brand-primary">Together</span>
            </h2>
            <p className="text-lg text-foreground-dark/80 max-w-3xl mx-auto">
              Our Engineering Studio and AI Studio operate as complementary
              forces, delivering end-to-end solutions for modern software
              challenges.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="relative overflow-hidden bg-gradient-to-br from-[#F1F2FF] to-white border border-[#00000019] rounded-2xl p-8 hover:shadow-lg transition-all duration-500">
              <CardContent className="p-0">
                <div className={`relative w-16 h-16 flex mb-6 items-center justify-center ${styles.icnBg}`}>
                  <Code className="w-8 h-8 text-brand-primary" />
                </div>
                <h3 className="text-2xl font-semibold text-foreground-dark mb-4">
                  Engineering Studio
                </h3>
                <p className="text-foreground-dark/70 mb-6 leading-relaxed">
                  Full-stack product development, modernization, and dedicated
                  engineering pods. We handle the build, scale, and evolution of
                  your software platforms.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center gap-2 text-sm text-foreground-dark/70">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-primary" />
                    Product Launch & MVP Development
                  </li>
                  <li className="flex items-center gap-2 text-sm text-foreground-dark/70">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-primary" />
                    Legacy System Modernization
                  </li>
                  <li className="flex items-center gap-2 text-sm text-foreground-dark/70">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-primary" />
                    Dedicated Engineering Pods
                  </li>
                </ul>
                <p className="text-sm text-brand-primary font-semibold">
                  You're on this page now →
                </p>
              </CardContent>
            </Card>

            <Card className="relative overflow-hidden bg-gradient-to-br from-[#1c1c1c] via-[#3a3a3a] to-[#4D4E4F] border-0 rounded-2xl p-8 hover:shadow-lg transition-all duration-500">
              <CardContent className="p-0">
                <div className="relative w-16 h-16 flex mb-6 items-center justify-center bg-gradient-to-br from-brand-primary/20 to-brand-purple/20 rounded-2xl">
                  <Sparkles className="w-8 h-8 text-brand-primary" />
                </div>
                <h3 className="text-2xl font-semibold text-foreground mb-4">
                  AI Studio
                </h3>
                <p className="text-foreground/80 mb-6 leading-relaxed">
                  Strategic AI consulting, agentic workflow development, and AI
                  Center of Excellence buildout. We handle AI strategy and
                  implementation.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center gap-2 text-sm text-foreground/70">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-primary" />
                    AI Strategy & Audits
                  </li>
                  <li className="flex items-center gap-2 text-sm text-foreground/70">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-primary" />
                    Agentic AI Development
                  </li>
                  <li className="flex items-center gap-2 text-sm text-foreground/70">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-primary" />
                    AI Center of Excellence
                  </li>
                </ul>
                <Button variant="btnSecondary" size="sm" asChild>
                  <Link to="/services/ai">
                    Explore AI Studio
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-8 lg:p-12 border border-blue-200">
            <h3 className="text-xl font-semibold text-foreground-dark mb-4 text-center">
              Common Engagement Pattern
            </h3>
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-brand-primary text-white flex items-center justify-center font-bold text-lg mx-auto mb-2">
                  1
                </div>
                <p className="text-sm font-semibold text-foreground-dark">
                  AI Strategy
                </p>
                <p className="text-xs text-foreground-dark/70">AI Studio</p>
              </div>
              <ArrowRight className="w-6 h-6 text-brand-primary rotate-90 md:rotate-0" />
              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-brand-primary text-white flex items-center justify-center font-bold text-lg mx-auto mb-2">
                  2
                </div>
                <p className="text-sm font-semibold text-foreground-dark">
                  Build & Launch
                </p>
                <p className="text-xs text-foreground-dark/70">
                  Engineering Studio
                </p>
              </div>
              <ArrowRight className="w-6 h-6 text-brand-primary rotate-90 md:rotate-0" />
              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-brand-primary text-white flex items-center justify-center font-bold text-lg mx-auto mb-2">
                  3
                </div>
                <p className="text-sm font-semibold text-foreground-dark">
                  Scale & Optimize
                </p>
                <p className="text-xs text-foreground-dark/70">Both Studios</p>
              </div>
            </div>
            <p className="text-center text-foreground-dark/70 mt-6 text-sm">
              Many clients engage both studios—using AI Studio for strategy and
              Engineering Studio for implementation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
