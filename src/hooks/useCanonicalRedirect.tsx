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
  // Completely disable on Pages dev URLs
  if (typeof window !== 'undefined' && 
      window.location.hostname.includes('.pages.dev')) {
    console.log('Canonical redirect disabled on Pages dev URL');
    return;
  }

  const {
    canonicalDomain = 'www.indexnine.com',
    enabled = true
  } = options;

  useEffect(() => {
    // Skip redirects on Cloudflare Pages dev URLs
    if (window.location.hostname.includes('.pages.dev')) {
      return; // Don't redirect on Pages dev URLs
    }
    
    // Skip in development
    if (process.env.NODE_ENV === 'development' || 
        window.location.hostname === 'localhost') {
      return;
    }

    // Skip redirect if disabled
    if (!enabled) {
      return;
    }

    const currentHost = window.location.hostname;
    
    // Skip redirect for development domains
    if (
      currentHost.includes('127.0.0.1') ||
      currentHost.includes('.local') ||
      currentHost.includes('lovable.app') ||
      currentHost === canonicalDomain
    ) {
      return;
    }

    // Only redirect from actual domains, not Pages dev URLs
    const validDomains = ['indexnine.com', 'www.indexnine.com'];
    if (validDomains.includes(currentHost)) {
      // Construct canonical URL preserving path, search, and hash
      const canonicalUrl = new URL(window.location.href);
      canonicalUrl.hostname = canonicalDomain;
      canonicalUrl.protocol = 'https:';

      // Perform redirect
      console.log(`[SEO] Redirecting to canonical domain: ${canonicalUrl.href}`);
      window.location.replace(canonicalUrl.href);
    }
  }, [canonicalDomain, enabled]);
};

export default useCanonicalRedirect;