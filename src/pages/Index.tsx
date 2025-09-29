import React, { useState, useEffect, Suspense, lazy } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import CTABanner from "@/components/CTABanner";
import { Button } from "@/components/ui/button";
import { useContent } from "@/hooks/useContent";
import { useSEO } from "@/hooks/useSEO";
import IndexNineInfiniteCarousel, {
  indexNineStrategicClients,
} from "@/components/sections/IndexNineInfiniteCarousel";
import {
  OrganizationSchema,
  WebPageSchema,
  LocalBusinessSchema,
  VideoObjectSchema,
  FAQSchema,
} from "@/components/SEOStructuredData";

// Lazy load heavy components that are below the fold
const ValueProposition = lazy(() => import("@/components/ValueProposition"));
const SocialProof = lazy(() => import("@/components/SocialProof"));
const ClientExperience = lazy(() => import("@/components/ClientExperience"));
const ProductLifecycle = lazy(() => import("@/components/ProductLifecycle"));
const PracticesStudios = lazy(() => import("@/components/PracticesStudios"));
const Differentiators = lazy(() => import("@/components/Differentiators"));
const InsightsCarousel = lazy(() => import("@/components/InsightsCarousel"));
const DynamicContentRenderer = lazy(
  () => import("@/components/cms/DynamicContentRenderer")
);

// Minimal loading component
const SectionLoader = () => (
  <div className="min-h-[200px] flex items-center justify-center">
    <div className="animate-pulse bg-gradient-hero/20 rounded-lg h-32 w-full"></div>
  </div>
);

// Enterprise client logos data
// const enterpriseClients = [
//   {
//     id: 1,
//     name: "CyberArk",
//     description:
//       "The leader in identity security and privileged access management, securing enterprises worldwide",
//     src: "/images/clients/cyberark-logo.png",
//     fallbackSrc:
//       "https://via.placeholder.com/160x70/ffffff/505dfd?text=CyberArk",
//     url: "https://www.cyberark.com",
//     industry: "Cybersecurity",
//   },
//   {
//     id: 2,
//     name: "Ginesys",
//     description:
//       "Cloud-based retail ERP system built for the retail value chain with omnichannel capabilities",
//     src: "/images/clients/ginesys-logo.png",
//     fallbackSrc:
//       "https://via.placeholder.com/160x70/ffffff/505dfd?text=Ginesys",
//     url: "https://www.ginesys.com",
//     industry: "Retail Technology",
//   },
//   {
//     id: 3,
//     name: "Great Place to Work",
//     description:
//       "The global authority on workplace culture, helping organizations build better workplaces",
//     src: "/images/clients/gptw-logo.png",
//     fallbackSrc: "https://via.placeholder.com/160x70/ffffff/505dfd?text=GPTW",
//     url: "https://www.greatplacetowork.com",
//     industry: "HR & Culture",
//   },
//   {
//     id: 4,
//     name: "Sensable",
//     description:
//       "Advanced haptic technology solutions enabling touch and force feedback in digital environments",
//     src: "/images/clients/sensable-logo.png",
//     fallbackSrc:
//       "https://via.placeholder.com/160x70/ffffff/505dfd?text=Sensable",
//     url: "https://sensable.com",
//     industry: "Haptic Technology",
//   },
//   {
//     id: 5,
//     name: "Equifax",
//     description:
//       "Global data, analytics and technology company providing consumer credit reporting and insights",
//     src: "/images/clients/equifax-logo.png",
//     fallbackSrc:
//       "https://via.placeholder.com/160x70/ffffff/505dfd?text=Equifax",
//     url: "https://www.equifax.com",
//     industry: "Financial Services",
//   },
//   {
//     id: 6,
//     name: "DocuPhase",
//     description:
//       "Intelligent process automation platform streamlining business operations with document management",
//     src: "/images/clients/docuphase-logo.png",
//     fallbackSrc:
//       "https://via.placeholder.com/160x70/ffffff/505dfd?text=DocuPhase",
//     url: "https://www.docuphase.com",
//     industry: "Process Automation",
//   },
//   {
//     id: 7,
//     name: "Cygeniq",
//     description:
//       "AI-powered cybersecurity solutions securing digital ecosystems with adaptive threat defense",
//     src: "/images/clients/cygeniq-logo.png",
//     fallbackSrc:
//       "https://via.placeholder.com/160x70/ffffff/505dfd?text=Cygeniq",
//     url: "https://cygeniq.com",
//     industry: "AI Cybersecurity",
//   },
// ];

const Index = () => {
  console.log("Index page loading...");
  const { content, loading } = useContent();
  const [useDynamicContent, setUseDynamicContent] = useState(false);

  // Homepage SEO - Critical for search visibility and AI referencing
  useSEO({
    title:
      "Enterprise Product Engineering & AI Consulting Services | Custom Software Development | IndexNine",
    description:
      "Leading product engineering and AI consulting services for enterprises. Custom software development, data engineering, quality engineering, and AI implementation solutions. Transform your legacy systems with expert product lifecycle engineering.",
    canonicalUrl: "https://www.indexnine.com/",
    keywords:
      "product engineering services, AI consulting services, custom software development, enterprise software solutions, digital transformation consulting, legacy system modernization, data engineering services, quality engineering, AI implementation, product lifecycle management, enterprise product development, software engineering consulting, technology consulting services, digital product engineering",
    ogImage: "https://www.indexnine.com/images/og-homepage.png",
    ogType: "website",
    schemaType: "WebPage",
  });

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
        title="Enterprise Product Engineering & AI Consulting Services | Custom Software Development | IndexNine"
        description="Leading product engineering and AI consulting services for enterprises. Custom software development, data engineering, quality engineering, and AI implementation solutions. Transform your legacy systems with expert product lifecycle engineering."
        url="https://www.indexnine.com/"
      />

      {/* FAQ Schema for common enterprise questions */}
      <FAQSchema
        faqItems={[
          {
            question: "What product engineering services does IndexNine offer?",
            answer:
              "IndexNine provides comprehensive product engineering services including custom software development, AI/ML consulting, data engineering, quality engineering, and enterprise digital transformation solutions.",
          },
          {
            question:
              "How does IndexNine help with AI implementation for enterprises?",
            answer:
              "We provide end-to-end AI consulting from strategy and readiness assessment to implementation and deployment. Our AI Studio helps enterprises navigate from AI potential to measurable business outcomes with our P2R (Potential to Reality) framework.",
          },
          {
            question:
              "What makes IndexNine different from other software development companies?",
            answer:
              "IndexNine focuses on outcome-driven engineering with radical transparency, founder mindset, and accelerated velocity. We combine strategic consulting with hands-on development to deliver measurable business results.",
          },
        ]}
      />
      <LocalBusinessSchema />
      {/* VideoObject schema helps AI understand our hero video content for multimedia responses */}
      <VideoObjectSchema
        name="IndexNine Technologies Hero Video"
        description="Discover how IndexNine Technologies delivers exceptional product engineering and AI consulting services"
        thumbnailUrl="https://www.indexnine.com/video-thumbnails/hero-thumbnail.jpg"
        uploadDate="2024-01-01T00:00:00Z"
        duration="60"
        contentUrl="https://www.indexnine.com/videos/intro.mp4"
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

          {/* IndexNine Infinite Client Carousel */}
          <IndexNineInfiniteCarousel
            logos={indexNineStrategicClients}
            title="Trusted by Fortune 500 Leaders"
            subtitle="Join enterprises who've accelerated their digital transformation and AI adoption with IndexNine's proven methodologies"
            speed={30}
            pauseOnHover={true}
          />

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

export default Index;
