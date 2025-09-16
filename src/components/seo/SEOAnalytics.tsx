import React, { useEffect } from 'react';

/**
 * SEO Analytics Component
 * 
 * Implements comprehensive SEO tracking and analytics for monitoring
 * search performance, user behavior, and conversion optimization.
 * Essential for Phase 3 monitoring and continuous improvement.
 */

interface SEOAnalyticsProps {
  pageTitle?: string;
  pageUrl?: string;
  category?: string;
  enableSearchConsole?: boolean;
  enableGTM?: boolean;
  trackingId?: string;
}

export const SEOAnalytics: React.FC<SEOAnalyticsProps> = ({
  pageTitle,
  pageUrl,
  category = 'General',
  enableSearchConsole = true,
  enableGTM = true,
  trackingId
}) => {

  useEffect(() => {
    // Google Search Console verification and setup
    if (enableSearchConsole) {
      // Add Search Console verification meta tag if not present
      const existingMeta = document.querySelector('meta[name="google-site-verification"]');
      if (!existingMeta) {
        const meta = document.createElement('meta');
        meta.name = 'google-site-verification';
        meta.content = 'YOUR_SEARCH_CONSOLE_VERIFICATION_CODE'; // Replace with actual code
        document.head.appendChild(meta);
      }

      // Track search-related events
      const trackSearchEvent = (eventName: string, parameters: Record<string, any>) => {
        if (window.gtag) {
          window.gtag('event', eventName, {
            event_category: 'SEO',
            event_label: pageTitle || document.title,
            page_title: pageTitle,
            page_location: pageUrl || window.location.href,
            page_category: category,
            ...parameters
          });
        }
      };

      // Track page view with SEO context
      trackSearchEvent('page_view_seo', {
        page_title: pageTitle || document.title,
        page_location: pageUrl || window.location.href,
        content_group1: category
      });

      // Track scroll depth for engagement signals
      let maxScroll = 0;
      const trackScrollDepth = () => {
        const scrolled = Math.round((window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100);
        if (scrolled > maxScroll && scrolled % 25 === 0) {
          maxScroll = scrolled;
          trackSearchEvent('scroll_depth', {
            scroll_percentage: scrolled,
            page_category: category
          });
        }
      };

      window.addEventListener('scroll', trackScrollDepth, { passive: true });

      // Track time on page for dwell time signals
      const startTime = Date.now();
      const trackTimeOnPage = () => {
        const timeSpent = Math.round((Date.now() - startTime) / 1000);
        if (timeSpent > 30) { // Only track if user spent more than 30 seconds
          trackSearchEvent('engaged_session', {
            engagement_time_msec: timeSpent * 1000,
            page_category: category
          });
        }
      };

      window.addEventListener('beforeunload', trackTimeOnPage);

      // Cleanup
      return () => {
        window.removeEventListener('scroll', trackScrollDepth);
        window.removeEventListener('beforeunload', trackTimeOnPage);
      };
    }
  }, [pageTitle, pageUrl, category, enableSearchConsole]);

  useEffect(() => {
    // Enhanced Google Tag Manager implementation
    if (enableGTM && trackingId) {
      const gtmScript = `
        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','${trackingId}');
      `;

      const script = document.createElement('script');
      script.innerHTML = gtmScript;
      script.id = 'gtm-script';
      
      if (!document.getElementById('gtm-script')) {
        document.head.appendChild(script);
      }

      // Initialize dataLayer with SEO-specific events
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: 'seo_page_load',
        page_title: pageTitle || document.title,
        page_location: pageUrl || window.location.href,
        page_category: category,
        content_type: 'website'
      });
    }
  }, [enableGTM, trackingId, pageTitle, pageUrl, category]);

  useEffect(() => {
    // Schema.org JSON-LD for analytics and tracking
    const analyticsSchema = {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: pageTitle || document.title,
      url: pageUrl || window.location.href,
      isPartOf: {
        '@type': 'WebSite',
        name: 'IndexNine Technologies',
        url: 'https://www.indexnine.com',
        potentialAction: {
          '@type': 'SearchAction',
          target: 'https://www.indexnine.com/search?q={search_term_string}',
          'query-input': 'required name=search_term_string'
        }
      },
      mainEntity: {
        '@type': 'Organization',
        name: 'IndexNine Technologies',
        sameAs: [
          'https://www.linkedin.com/company/indexnine',
          'https://twitter.com/IndexNineTech'
        ]
      },
      publisher: {
        '@type': 'Organization',
        name: 'IndexNine Technologies',
        logo: {
          '@type': 'ImageObject',
          url: 'https://www.indexnine.com/images/logo.png'
        }
      }
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.id = 'seo-analytics-schema';
    script.innerHTML = JSON.stringify(analyticsSchema);
    
    const existingScript = document.getElementById('seo-analytics-schema');
    if (existingScript) {
      existingScript.remove();
    }
    document.head.appendChild(script);

    return () => {
      const scriptToRemove = document.getElementById('seo-analytics-schema');
      if (scriptToRemove) {
        scriptToRemove.remove();
      }
    };
  }, [pageTitle, pageUrl]);

  // Render GTM noscript fallback
  return (
    <>
      {enableGTM && trackingId && (
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${trackingId}`}
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
            title="Google Tag Manager"
          />
        </noscript>
      )}
    </>
  );
};

export default SEOAnalytics;

// Global type declarations for analytics
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
  }
}