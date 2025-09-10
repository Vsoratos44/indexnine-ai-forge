import React, { ReactNode, useEffect } from 'react';
import { useSEO } from '@/hooks/useSEO';
import { useMobileOptimization, useTouchOptimization } from '@/hooks/useMobileOptimization';
import { useImagePerformance } from '@/hooks/useImageOptimization';
import { BreadcrumbSchema, WebPageSchema } from '@/components/SEOStructuredData';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

interface BreadcrumbItem {
  name: string;
  url: string;
}

interface SEOOptimizedLayoutProps {
  children: ReactNode;
  title: string;
  description: string;
  keywords?: string;
  canonicalUrl?: string;
  ogImage?: string;
  author?: string;
  publishedDate?: string;
  modifiedDate?: string;
  articleSection?: string;
  readingTime?: string;
  schemaType?: 'Article' | 'WebPage' | 'BlogPosting';
  breadcrumbs?: BreadcrumbItem[];
  showHeader?: boolean;
  showFooter?: boolean;
  className?: string;
}

export const SEOOptimizedLayout: React.FC<SEOOptimizedLayoutProps> = ({
  children,
  title,
  description,
  keywords,
  canonicalUrl,
  ogImage,
  author,
  publishedDate,
  modifiedDate,
  articleSection,
  readingTime,
  schemaType = 'WebPage',
  breadcrumbs = [],
  showHeader = true,
  showFooter = true,
  className = ''
}) => {
  // SEO optimization
  useSEO({
    title,
    description,
    keywords,
    canonicalUrl,
    ogImage,
    author,
    publishedDate,
    modifiedDate,
    articleSection,
    readingTime,
    schemaType
  });

  // Mobile optimization
  const { isMobile, isTablet, touchDevice } = useMobileOptimization();
  useTouchOptimization();
  useImagePerformance();

  // Add performance monitoring
  useEffect(() => {
    // Monitor Core Web Vitals
    if ('web-vitals' in window) {
      // This would typically use the web-vitals library
      console.log('Monitoring Core Web Vitals for:', title);
    }
  }, [title]);

  // Add mobile-specific meta tags
  useEffect(() => {
    const addMobileMetaTags = () => {
      // Theme color for mobile browsers
      let themeColor = document.querySelector('meta[name="theme-color"]');
      if (!themeColor) {
        themeColor = document.createElement('meta');
        themeColor.setAttribute('name', 'theme-color');
        themeColor.setAttribute('content', '#505CFD');
        document.head.appendChild(themeColor);
      }

      // Mobile app manifest
      let manifest = document.querySelector('link[rel="manifest"]');
      if (!manifest) {
        manifest = document.createElement('link');
        manifest.setAttribute('rel', 'manifest');
        manifest.setAttribute('href', '/manifest.json');
        document.head.appendChild(manifest);
      }
    };

    addMobileMetaTags();
  }, []);

  return (
    <div className={`min-h-screen bg-background ${className}`}>
      {/* Structured Data */}
      <WebPageSchema
        title={title}
        description={description}
        url={canonicalUrl || window.location.href}
      />
      
      {breadcrumbs.length > 0 && (
        <BreadcrumbSchema items={breadcrumbs} />
      )}

      {/* Skip to main content for accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-primary text-primary-foreground px-4 py-2 rounded-md z-50"
      >
        Skip to main content
      </a>

      {/* Header */}
      {showHeader && <Header />}

      {/* Main Content */}
      <main
        id="main-content"
        className={`
          ${showHeader ? 'pt-16' : ''}
          ${isMobile ? 'px-4' : ''}
          ${touchDevice ? 'touch-optimized' : ''}
        `}
        role="main"
      >
        {children}
      </main>

      {/* Footer */}
      {showFooter && <Footer />}

      {/* Mobile-specific enhancements */}
      {isMobile && (
        <style>
          {`
            /* Mobile-specific styles */
            html {
              font-size: 16px; /* Prevent zoom on form inputs */
              text-size-adjust: 100%;
              -webkit-text-size-adjust: 100%;
            }
            
            /* Improve tap targets */
            a, button, [role="button"] {
              min-height: 44px;
              display: inline-flex;
              align-items: center;
              justify-content: center;
            }
            
            /* Prevent horizontal scroll */
            body {
              overflow-x: hidden;
            }
            
            /* Optimize scrolling */
            * {
              -webkit-overflow-scrolling: touch;
            }
          `}
        </style>
      )}
    </div>
  );
};

export default SEOOptimizedLayout;