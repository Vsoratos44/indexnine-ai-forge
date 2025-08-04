import React, { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import ValueProposition from '@/components/ValueProposition';
import SocialProof from '@/components/SocialProof';
import ClientExperience from '@/components/ClientExperience';
import ProductLifecycle from '@/components/ProductLifecycle';
import PracticesStudios from '@/components/PracticesStudios';
import Differentiators from '@/components/Differentiators';
import InsightsCarousel from '@/components/InsightsCarousel';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { useContent } from '@/hooks/useContent';
import DynamicContentRenderer from '@/components/cms/DynamicContentRenderer';

const Index = () => {
  const { content, loading } = useContent();
  const [useDynamicContent, setUseDynamicContent] = useState(false);

  // Check if we have CMS content and at least one published item
  useEffect(() => {
    if (content.length > 0 && content.some(item => item.published)) {
      setUseDynamicContent(true);
    }
  }, [content]);

  // Show loading state
  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-hero flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-brand-primary mx-auto mb-4"></div>
          <p className="text-foreground-white">Loading content...</p>
        </div>
      </div>
    );
  }

  // Use dynamic content from CMS if available, otherwise fallback to static content
  if (useDynamicContent) {
    return (
      <div className="min-h-screen">
        <Header />
        <DynamicContentRenderer contentItems={content} />
        
        {/* Global CTA Banner - Always show this */}
        <section id="home-contact" className="py-24 lg:py-32 bg-gradient-hero">
          <div className="container mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-8 font-montserrat">
              Ready to transform your idea into an enduring reality?
            </h2>
            <p className="text-xl text-foreground/80 mb-12 max-w-2xl mx-auto font-montserrat">
              Let's discuss how our product mindset and AI-forward engineering excellence can accelerate your growth. Schedule a complimentary, no-obligation strategy call with our experts today.
            </p>
            <Button variant="hero" size="xl">Let's Build Together</Button>
          </div>
        </section>
      </div>
    );
  }

  // Fallback to static content
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <ValueProposition />
      <SocialProof />
      <ClientExperience />
      <ProductLifecycle />
      <PracticesStudios />
      <Differentiators />
      <InsightsCarousel />
      
      {/* Global CTA Banner */}
      <section id="home-contact" className="py-24 lg:py-32 bg-gradient-hero">
        <div className="container mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-8 font-montserrat">
            Ready to transform your idea into an enduring reality?
          </h2>
          <p className="text-xl text-foreground/80 mb-12 max-w-2xl mx-auto font-montserrat">
            Let's discuss how our product mindset and AI-forward engineering excellence can accelerate your growth. Schedule a complimentary, no-obligation strategy call with our experts today.
          </p>
          <Button variant="hero" size="xl">Let's Build Together</Button>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
