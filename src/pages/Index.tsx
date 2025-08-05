import React, { useState, useEffect, Suspense, lazy } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { useOptimizedContent } from '@/hooks/useOptimizedContent';
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
  const { content, loading, hasContent, fetchContent } = useOptimizedContent();
  const [useDynamicContent, setUseDynamicContent] = useState(false);
  const [contentRequested, setContentRequested] = useState(false);

  // Only fetch content when user scrolls or after initial load completes
  useEffect(() => {
    const handleScroll = () => {
      if (!contentRequested && window.scrollY > 100) {
        setContentRequested(true);
        fetchContent();
      }
    };

    // Also try to fetch after a delay to avoid blocking initial render
    const delayedFetch = setTimeout(() => {
      if (!contentRequested) {
        setContentRequested(true);
        fetchContent();
      }
    }, 2000);

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(delayedFetch);
    };
  }, [contentRequested, fetchContent]);

  // Check if we should use dynamic content
  useEffect(() => {
    if (hasContent && content.some(item => item.published)) {
      setUseDynamicContent(true);
    }
  }, [hasContent, content]);

  // Don't show loading state on initial render - show static content immediately
  const showStaticContent = !useDynamicContent || !hasContent;

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
      {useDynamicContent && hasContent ? (
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
