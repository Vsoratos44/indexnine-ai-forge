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
    // Skip redirect if disabled or in development
    if (!enabled || process.env.NODE_ENV !== 'production') {
      return;
    }

    const currentLocation = window.location;
    const currentHost = currentLocation.hostname;
    
    // Skip redirect for localhost and development domains
    if (
      currentHost === 'localhost' ||
      currentHost.includes('127.0.0.1') ||
      currentHost.includes('.local') ||
      currentHost.includes('lovable.app') ||
      currentHost === canonicalDomain
    ) {
      return;
    }

    // Construct canonical URL preserving path, search, and hash
    const canonicalUrl = new URL(currentLocation.href);
    canonicalUrl.hostname = canonicalDomain;
    canonicalUrl.protocol = 'https:';

    // Perform redirect
    console.log(`[SEO] Redirecting to canonical domain: ${canonicalUrl.href}`);
    window.location.replace(canonicalUrl.href);
  }, [canonicalDomain, enabled]);
};

export default useCanonicalRedirect;