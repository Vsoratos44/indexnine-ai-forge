import { useEffect } from 'react';

interface SEOProps {
  title: string;
  description: string;
  canonicalUrl?: string;
  keywords?: string;
  ogImage?: string;
  ogType?: string;
  twitterCard?: string;
}

export const useSEO = ({
  title,
  description,
  canonicalUrl,
  keywords,
  ogImage,
  ogType = 'website',
  twitterCard = 'summary_large_image'
}: SEOProps) => {
  useEffect(() => {
    // Set document title
    document.title = title;

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

    // Set basic meta tags
    setMetaTag('description', description);
    if (keywords) setMetaTag('keywords', keywords);

    // Set Open Graph tags
    setMetaTag('og:title', title, true);
    setMetaTag('og:description', description, true);
    setMetaTag('og:type', ogType, true);
    setMetaTag('og:url', canonicalUrl || window.location.href, true);
    
    if (ogImage) {
      setMetaTag('og:image', ogImage, true);
    }

    // Set Twitter Card tags
    setMetaTag('twitter:card', twitterCard);
    setMetaTag('twitter:title', title);
    setMetaTag('twitter:description', description);
    
    if (ogImage) {
      setMetaTag('twitter:image', ogImage);
    }

    // Set canonical URL
    if (canonicalUrl) {
      let canonical = document.querySelector('link[rel="canonical"]');
      if (!canonical) {
        canonical = document.createElement('link');
        canonical.setAttribute('rel', 'canonical');
        document.head.appendChild(canonical);
      }
      canonical.setAttribute('href', canonicalUrl);
    }

    // Cleanup function to avoid memory leaks
    return () => {
      // Optional: Clean up meta tags when component unmounts
      // Usually not necessary for single-page applications
    };
  }, [title, description, canonicalUrl, keywords, ogImage, ogType, twitterCard]);
};