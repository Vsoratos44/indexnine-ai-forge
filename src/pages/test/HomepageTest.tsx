import React, { useState, useEffect, Suspense, lazy } from "react";
import Header from "@/components/test/Header";
import Hero from "@/components/test/Hero";
import Footer from "@/components/test/Footer";
import CTABanner from "@/components/test/CTABanner";
import { Button } from "@/components/ui/button";
import { useContent } from "@/hooks/useContent";
import {
  OrganizationSchema,
  WebPageSchema,
  LocalBusinessSchema,
  VideoObjectSchema,
} from "@/components/SEOStructuredData";

// Lazy load heavy components that are below the fold - using test versions
const ValueProposition = lazy(() => import("@/components/test/ValueProposition"));
const SocialProof = lazy(() => import("@/components/test/SocialProof"));
const ClientExperience = lazy(() => import("@/components/test/ClientExperience"));
const ProductLifecycle = lazy(() => import("@/components/test/ProductLifecycle"));
const PracticesStudios = lazy(() => import("@/components/test/PracticesStudios"));
const Differentiators = lazy(() => import("@/components/test/Differentiators"));
const InsightsCarousel = lazy(() => import("@/components/test/InsightsCarousel"));
const DynamicContentRenderer = lazy(
  () => import("@/components/test/cms/DynamicContentRenderer")
);

// Minimal loading component
const SectionLoader = () => (
  <div className="min-h-[200px] flex items-center justify-center">
    <div className="animate-pulse bg-gradient-hero/20 rounded-lg h-32 w-full"></div>
  </div>
);

const HomepageTest = () => {
  console.log("HomepageTest page loading...");
  const { content, loading } = useContent();
  const [useDynamicContent, setUseDynamicContent] = useState(false);

  // Check if we should use dynamic content
  useEffect(() => {
    if (content.length > 0 && content.some((item) => item.published)) {
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
      {/* Enhanced SEO: Organization + LocalBusiness + VideoObject schema for comprehensive homepage visibility */}
      {/* These schemas help AI systems understand our company, services, and multimedia content */}
      <OrganizationSchema />
      <WebPageSchema
        title="Product Engineering & AI that Charts Your Path to Market Leadership | IndexNine - Test"
        description="You have the ambition. We provide the path. IndexNine transforms complexity into performance with elite product engineering, custom software, and AI solutions that define market leaders."
        url="https://yoursite.lovable.app/test/homepage"
      />
      <LocalBusinessSchema />
      {/* VideoObject schema helps AI understand our hero video content for multimedia responses */}
      <VideoObjectSchema
        name="IndexNine Technologies Hero Video"
        description="Discover how IndexNine Technologies delivers exceptional product engineering and AI consulting services"
        thumbnailUrl="https://yoursite.lovable.app/video-thumbnails/hero-thumbnail.jpg"
        uploadDate="2024-01-01T00:00:00Z"
        duration="60"
        contentUrl="https://yoursite.lovable.app/videos/intro.mp4"
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
      <CTABanner />

      <Footer />
    </div>
  );
};

export default HomepageTest;