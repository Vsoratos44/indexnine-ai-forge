import { useEffect } from 'react';

interface SEOProps {
  title: string;
  description: string;
  canonicalUrl?: string;
  keywords?: string;
  ogImage?: string;
  ogType?: string;
  twitterCard?: string;
  author?: string;
  publishedDate?: string;
  modifiedDate?: string;
  articleSection?: string;
  readingTime?: string;
  schemaType?: 'Article' | 'WebPage' | 'BlogPosting';
}

interface StructuredDataProps {
  '@context': string;
  '@type': string;
  headline?: string;
  description?: string;
  url?: string;
  datePublished?: string;
  dateModified?: string;
  author?: {
    '@type': string;
    name: string;
  };
  publisher?: {
    '@type': string;
    name: string;
    logo: {
      '@type': string;
      url: string;
    };
  };
  mainEntityOfPage?: {
    '@type': string;
    '@id': string;
  };
  image?: string;
  articleSection?: string;
  wordCount?: number;
}

export const useSEO = ({
  title,
  description,
  canonicalUrl,
  keywords,
  ogImage,
  ogType = 'website',
  twitterCard = 'summary_large_image',
  author,
  publishedDate,
  modifiedDate,
  articleSection,
  readingTime,
  schemaType = 'WebPage'
}: SEOProps) => {
  useEffect(() => {
    // Set document title with proper format
    const fullTitle = title.includes('IndexNine') ? title : `${title} | IndexNine Technologies`;
    document.title = fullTitle;

    // Ensure viewport meta tag for mobile optimization
    let viewport = document.querySelector('meta[name="viewport"]');
    if (!viewport) {
      viewport = document.createElement('meta');
      viewport.setAttribute('name', 'viewport');
      viewport.setAttribute('content', 'width=device-width, initial-scale=1.0, viewport-fit=cover');
      document.head.appendChild(viewport);
    }

    // Helper function to set or update meta tag
    const setMetaTag = (name: string, content: string, property = false) => {
      const attribute = property ? 'property' : 'name';
      let tag = document.querySelector(`meta[${attribute}="${name}"]`);
      
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute(attribute, name);
        document.head.appendChild(tag);
      }
      
      tag.setAttribute('content', content);
    };

    // Set robots meta tag for SEO
    setMetaTag('robots', 'index, follow, max-image-preview:large, max-snippet:-1');
    
    // Set mobile-specific meta tags
    setMetaTag('format-detection', 'telephone=no');
    setMetaTag('mobile-web-app-capable', 'yes');
    setMetaTag('apple-mobile-web-app-capable', 'yes');
    setMetaTag('apple-mobile-web-app-status-bar-style', 'default');

    // Set basic meta tags
    setMetaTag('description', description);
    if (keywords) setMetaTag('keywords', keywords);
    if (author) setMetaTag('author', author);
    if (articleSection) setMetaTag('article:section', articleSection);
    if (publishedDate) setMetaTag('article:published_time', publishedDate, true);
    if (modifiedDate) setMetaTag('article:modified_time', modifiedDate, true);

    // Set Open Graph tags with enhanced metadata
    setMetaTag('og:site_name', 'IndexNine Technologies', true);
    setMetaTag('og:title', fullTitle, true);
    setMetaTag('og:description', description, true);
    setMetaTag('og:type', ogType, true);
    setMetaTag('og:url', canonicalUrl || window.location.href, true);
    setMetaTag('og:locale', 'en_US', true);
    
    if (ogImage) {
      setMetaTag('og:image', ogImage, true);
      setMetaTag('og:image:alt', title, true);
      setMetaTag('og:image:width', '1200', true);
      setMetaTag('og:image:height', '630', true);
    }

    // Set Twitter Card tags with enhanced metadata
    setMetaTag('twitter:card', twitterCard);
    setMetaTag('twitter:site', '@IndexNineTech');
    setMetaTag('twitter:creator', '@IndexNineTech');
    setMetaTag('twitter:title', fullTitle);
    setMetaTag('twitter:description', description);
    
    if (ogImage) {
      setMetaTag('twitter:image', ogImage);
      setMetaTag('twitter:image:alt', title);
    }

    // Set canonical URL
    const finalCanonicalUrl = canonicalUrl || window.location.href;
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', finalCanonicalUrl);

    // Add structured data for better SEO
    if (schemaType === 'Article' || schemaType === 'BlogPosting') {
      const structuredData: StructuredDataProps = {
        '@context': 'https://schema.org',
        '@type': schemaType,
        headline: title,
        description: description,
        url: finalCanonicalUrl,
        datePublished: publishedDate,
        dateModified: modifiedDate || publishedDate,
        author: author ? {
          '@type': 'Organization',
          name: author
        } : {
          '@type': 'Organization',
          name: 'IndexNine Technologies'
        },
        publisher: {
          '@type': 'Organization',
          name: 'IndexNine Technologies',
          logo: {
            '@type': 'ImageObject',
            url: 'https://indexnine.com/logo.png'
          }
        },
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': finalCanonicalUrl
        },
        image: ogImage,
        articleSection: articleSection
      };

      let structuredDataScript = document.querySelector('script[data-seo-structured-data]');
      if (!structuredDataScript) {
        structuredDataScript = document.createElement('script');
        structuredDataScript.setAttribute('type', 'application/ld+json');
        structuredDataScript.setAttribute('data-seo-structured-data', 'true');
        document.head.appendChild(structuredDataScript);
      }
      structuredDataScript.textContent = JSON.stringify(structuredData);
    }

    // Cleanup function to avoid memory leaks
    return () => {
      // Clean up structured data when component unmounts
      const structuredDataScript = document.querySelector('script[data-seo-structured-data]');
      if (structuredDataScript) {
        document.head.removeChild(structuredDataScript);
      }
    };
  }, [title, description, canonicalUrl, keywords, ogImage, ogType, twitterCard, author, publishedDate, modifiedDate, articleSection, schemaType]);
};