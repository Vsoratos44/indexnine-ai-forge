/**
 * Internal Link Audit Report Component
 * 
 * This component provides a comprehensive audit of internal links
 * across the application for SEO optimization purposes.
 * 
 * Usage: Only render in development mode for debugging
 */

import React from 'react';
import { validateInternalLinks, SERVICE_ROUTES } from '@/utils/seoUtils';

interface LinkAuditResult {
  component: string;
  links: string[];
  issues: string[];
}

const InternalLinkAudit: React.FC = () => {
  // Only show in development
  if (process.env.NODE_ENV !== 'development') {
    return null;
  }

  const auditResults: LinkAuditResult[] = [
    {
      component: 'Footer Navigation',
      links: Object.values(SERVICE_ROUTES),
      issues: []
    },
    {
      component: 'Header Navigation',
      links: ['/services/ai', '/services/data-engineering', '/services/quality-engineering', '/services/consulting'],
      issues: []
    },
    {
      component: 'CTA Buttons',
      links: ['/services/custom-software', '/insights/case-studies'],
      issues: []
    }
  ];

  const validateResults = auditResults.map(result => ({
    ...result,
    validation: validateInternalLinks(result.links)
  }));

  return (
    <div className="fixed bottom-4 right-4 bg-background border border-border rounded-lg p-4 max-w-md shadow-lg z-50">
      <h3 className="text-sm font-semibold mb-2 text-foreground">
        🔍 Internal Link Audit (Dev Mode)
      </h3>
      <div className="space-y-2 text-xs">
        {validateResults.map((result, index) => (
          <div key={index} className="border-b border-border pb-2">
            <h4 className="font-medium text-foreground">{result.component}</h4>
            {result.validation.map((link, linkIndex) => (
              <div key={linkIndex} className="ml-2 text-muted-foreground">
                {link.isValid ? '✅' : '❌'} {link.path}
                {link.suggestion && (
                  <div className="text-red-500 text-xs">{link.suggestion}</div>
                )}
              </div>
            ))}
          </div>
        ))}
      </div>
      <div className="mt-2 text-xs text-muted-foreground">
        Canonical Domain: www.indexnine.com
      </div>
    </div>
  );
};

export default InternalLinkAudit;