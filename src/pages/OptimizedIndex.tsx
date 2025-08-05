import React, { Suspense, lazy } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Footer from '@/components/Footer';
import { OrganizationSchema, WebPageSchema } from '@/components/SEOStructuredData';

// Lazy load heavy components
const ValueProposition = lazy(() => import('@/components/ValueProposition'));
const SocialProof = lazy(() => import('@/components/SocialProof'));
const ClientExperience = lazy(() => import('@/components/ClientExperience'));
const ProductLifecycle = lazy(() => import('@/components/ProductLifecycle'));
const PracticesStudios = lazy(() => import('@/components/PracticesStudios'));
const Differentiators = lazy(() => import('@/components/Differentiators'));
const InsightsCarousel = lazy(() => import('@/components/InsightsCarousel'));

// Optimized loading component
const SectionLoader = () => (
  <div className="min-h-[200px] flex items-center justify-center">
    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-brand-primary opacity-50"></div>
  </div>
);

const OptimizedIndex = () => {
  return (
    <div className="min-h-screen">
      <OrganizationSchema />
      <WebPageSchema 
        title="Leading Technology Consulting & Software Development"
        description="Transform your ideas into enduring reality with our AI-forward engineering excellence and product mindset"
        url="https://yoursite.lovable.app/"
      />
      
      {/* Above-the-fold content - loaded immediately */}
      <Header />
      <Hero />
      
      {/* Below-the-fold content - lazy loaded */}
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
      
      {/* Global CTA Banner */}
      <section id="home-contact" className="py-24 lg:py-32 bg-gradient-hero">
        <div className="container mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-8 font-montserrat">
            Ready to transform your idea into an enduring reality?
          </h2>
          <p className="text-xl text-foreground/80 mb-12 max-w-2xl mx-auto font-montserrat">
            Let's discuss how our product mindset and AI-forward engineering excellence can accelerate your growth. Schedule a complimentary, no-obligation strategy call with our experts today.
          </p>
          <button 
            className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-gradient-primary text-white hover:bg-gradient-primary/90 h-12 px-8 py-2 min-w-[240px] shadow-glow"
            onClick={() => document.getElementById('home-contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Let's Build Together
          </button>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default OptimizedIndex;