import { useEffect } from 'react';

/**
 * useCanonicalRedirect Hook
 * 
 * Ensures all traffic is redirected to the canonical domain (www.indexnine.com)
 * This is critical for SEO to prevent domain canonicalization issues and
 * consolidate link equity to a single domain.
 * 
 * Features:
 * - Redirects non-canonical domains to www.indexnine.com
 * - Preserves path, query parameters, and hash fragments
 * - Only operates in production environment
 * - Skips localhost for development
 */

interface CanonicalRedirectOptions {
  canonicalDomain?: string;
  enabled?: boolean;
}

export const useCanonicalRedirect = (options: CanonicalRedirectOptions = {}) => {
  const {
    canonicalDomain = 'www.indexnine.com',
    enabled = true
  } = options;

  useEffect(() => {
    // Skip if window is not available (SSR)
    if (typeof window === 'undefined') {
      return;
    }

    // Skip redirects on development domains
    const currentHost = window.location.hostname;
    if (
      currentHost.includes('.pages.dev') ||
      currentHost.includes('127.0.0.1') ||
      currentHost.includes('.local') ||
      currentHost.includes('localhost') ||
      currentHost.includes('lovable.app') ||
      process.env.NODE_ENV === 'development' ||
      !enabled ||
      currentHost === canonicalDomain
    ) {
      return;
    }

    // Only redirect from actual production domains
    const validDomains = ['indexnine.com', 'www.indexnine.com'];
    if (validDomains.includes(currentHost)) {
      // Use setTimeout to avoid interfering with React's initial render
      setTimeout(() => {
        const canonicalUrl = new URL(window.location.href);
        canonicalUrl.hostname = canonicalDomain;
        canonicalUrl.protocol = 'https:';
        
        console.log(`[SEO] Redirecting to canonical domain: ${canonicalUrl.href}`);
        window.location.replace(canonicalUrl.href);
      }, 100);
    }
  }, [canonicalDomain, enabled]);
};

export default useCanonicalRedirect;