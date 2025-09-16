/**
 * SEO Utilities for Internal Link Management and Canonical URL Handling
 * 
 * This utility module provides helper functions for maintaining consistent
 * internal linking and canonical URL management across the application.
 */

/**
 * Canonical domain configuration
 */
export const CANONICAL_DOMAIN = 'www.indexnine.com';
export const CANONICAL_PROTOCOL = 'https';

/**
 * Generates a canonical URL for a given path
 * @param path - The relative path (e.g., '/services/ai')
 * @returns Complete canonical URL (e.g., 'https://www.indexnine.com/services/ai')
 */
export const generateCanonicalUrl = (path: string): string => {
  // Ensure path starts with /
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return `${CANONICAL_PROTOCOL}://${CANONICAL_DOMAIN}${cleanPath}`;
};

/**
 * Validates if a URL is using the canonical domain
 * @param url - URL to validate
 * @returns True if URL uses canonical domain, false otherwise
 */
export const isCanonicalUrl = (url: string): boolean => {
  try {
    const urlObj = new URL(url);
    return urlObj.hostname === CANONICAL_DOMAIN && urlObj.protocol === `${CANONICAL_PROTOCOL}:`;
  } catch {
    return false;
  }
};

/**
 * Converts a relative path to canonical URL for breadcrumbs and schema
 * @param path - Relative path
 * @param name - Display name for breadcrumb
 * @returns Breadcrumb item object
 */
export const createBreadcrumbItem = (path: string, name: string) => ({
  name,
  url: generateCanonicalUrl(path)
});

/**
 * Standard breadcrumb items for common pages
 */
export const STANDARD_BREADCRUMBS = {
  home: createBreadcrumbItem('/', 'Home'),
  services: createBreadcrumbItem('/services', 'Services'),
  insights: createBreadcrumbItem('/insights', 'Insights'),
  studios: createBreadcrumbItem('/studios', 'Studios'),
  engagement: createBreadcrumbItem('/engagement', 'Engagement Models'),
  company: createBreadcrumbItem('/company', 'Company'),
  caseStudies: createBreadcrumbItem('/insights/case-studies', 'Case Studies'),
  blogs: createBreadcrumbItem('/insights/blogs', 'Blog'),
};

/**
 * Service page mappings for consistent routing
 */
export const SERVICE_ROUTES = {
  ai: '/services/ai',
  dataEngineering: '/services/data-engineering',
  qualityEngineering: '/services/quality-engineering',
  customSoftware: '/services/custom-software',
  consulting: '/services/consulting'
};

/**
 * Validates internal links for consistency
 * @param links - Array of internal link paths
 * @returns Array of validation results
 */
export const validateInternalLinks = (links: string[]) => {
  return links.map(link => ({
    path: link,
    isValid: link.startsWith('/'),
    canonicalUrl: generateCanonicalUrl(link),
    suggestion: link.startsWith('/') ? null : `Should start with '/': ${link}`
  }));
};

/**
 * External link helper for proper rel attributes
 * @param url - External URL
 * @returns Object with proper rel attributes for external links
 */
export const getExternalLinkProps = (url: string) => ({
  href: url,
  target: '_blank',
  rel: 'noopener noreferrer'
});

export default {
  generateCanonicalUrl,
  isCanonicalUrl,
  createBreadcrumbItem,
  STANDARD_BREADCRUMBS,
  SERVICE_ROUTES,
  validateInternalLinks,
  getExternalLinkProps,
  CANONICAL_DOMAIN,
  CANONICAL_PROTOCOL
};