import React, { useState, useEffect, Suspense, lazy } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { useContent } from '@/hooks/useContent';
import { OrganizationSchema, WebPageSchema } from '@/components/SEOStructuredData';

// Lazy load heavy components that are below the fold
const ValueProposition = lazy(() => import('@/components/ValueProposition'));
const SocialProof = lazy(() => import('@/components/SocialProof'));
const ClientExperience = lazy(() => import('@/components/ClientExperience'));
const ProductLifecycle = lazy(() => import('@/components/ProductLifecycle'));
const PracticesStudios = lazy(() => import('@/components/PracticesStudios'));
const Differentiators = lazy(() => import('@/components/Differentiators'));
const InsightsCarousel = lazy(() => import('@/components/InsightsCarousel'));
const DynamicContentRenderer = lazy(() => import('@/components/cms/DynamicContentRenderer'));

// Minimal loading component
const SectionLoader = () => (
  <div className="min-h-[200px] flex items-center justify-center">
    <div className="animate-pulse bg-gradient-hero/20 rounded-lg h-32 w-full"></div>
  </div>
);

const Index = () => {
  console.log('Index page loading...');
  const { content, loading } = useContent();
  const [useDynamicContent, setUseDynamicContent] = useState(false);

  // Check if we should use dynamic content
  useEffect(() => {
    if (content.length > 0 && content.some(item => item.published)) {
      setUseDynamicContent(true);
    }
  }, [content]);

  // Show loading state only if actually loading
  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-hero flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-brand-primary mx-auto mb-4"></div>
          <p className="text-foreground-white/60">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <OrganizationSchema />
      <WebPageSchema 
        title="Leading Technology Consulting & Software Development"
        description="Transform your ideas into enduring reality with our AI-forward engineering excellence and product mindset"
        url="https://yoursite.lovable.app/"
      />
      
      {/* Above-the-fold content - always load immediately */}
      <Header />
      <Hero />

      {/* Content Strategy: Show static content by default, replace with dynamic if available */}
      {useDynamicContent && content.length > 0 ? (
        <Suspense fallback={<SectionLoader />}>
          <DynamicContentRenderer contentItems={content} />
        </Suspense>
      ) : (
        <>
          {/* Below-the-fold static content - lazy loaded */}
          <Suspense fallback={<SectionLoader />}>
            <ValueProposition />
          </Suspense>
          
          <Suspense fallback={<SectionLoader />}>
            <SocialProof />
          </Suspense>
          
          <Suspense fallback={<SectionLoader />}>
            <ClientExperience />
          </Suspense>
          
          <Suspense fallback={<SectionLoader />}>
            <ProductLifecycle />
          </Suspense>
          
          <Suspense fallback={<SectionLoader />}>
            <PracticesStudios />
          </Suspense>
          
          <Suspense fallback={<SectionLoader />}>
            <Differentiators />
          </Suspense>
          
          <Suspense fallback={<SectionLoader />}>
            <InsightsCarousel />
          </Suspense>
        </>
      )}
      
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
