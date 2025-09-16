import React from 'react';
import { SEOStructuredData } from '../SEOStructuredData';

/**
 * Service Area Schema Component
 * 
 * Defines geographic service areas for local SEO and helps search engines
 * understand where our services are available. Particularly important for:
 * - Local search results and map listings
 * - Geographic targeting in search results  
 * - AI systems understanding our service coverage
 * - International SEO optimization
 */

interface ServiceAreaProps {
  serviceName?: string;
  serviceType?: string;
}

export const ServiceAreaSchema: React.FC<ServiceAreaProps> = ({ 
  serviceName = "Enterprise Technology Services",
  serviceType = "Professional Services"
}) => (
  <SEOStructuredData
    type="Service"
    data={{
      '@type': 'ProfessionalService',
      name: serviceName,
      serviceType,
      provider: {
        '@type': 'Organization',
        name: 'IndexNine Technologies',
        url: 'https://www.indexnine.com'
      },
      areaServed: [
        {
          '@type': 'Country',
          name: 'United States',
          sameAs: 'https://en.wikipedia.org/wiki/United_States'
        },
        {
          '@type': 'Country', 
          name: 'Canada',
          sameAs: 'https://en.wikipedia.org/wiki/Canada'
        },
        {
          '@type': 'Country',
          name: 'United Kingdom', 
          sameAs: 'https://en.wikipedia.org/wiki/United_Kingdom'
        },
        {
          '@type': 'Country',
          name: 'Australia',
          sameAs: 'https://en.wikipedia.org/wiki/Australia'
        },
        {
          '@type': 'AdministrativeArea',
          name: 'European Union',
          sameAs: 'https://en.wikipedia.org/wiki/European_Union'
        }
      ],
      availableChannel: [
        {
          '@type': 'ServiceChannel',
          serviceType: 'Remote Consulting',
          availableLanguage: 'English'
        },
        {
          '@type': 'ServiceChannel', 
          serviceType: 'On-site Consulting',
          availableLanguage: 'English',
          serviceLocation: {
            '@type': 'Place',
            address: {
              '@type': 'PostalAddress',
              addressCountry: 'US',
              addressLocality: 'San Francisco',
              addressRegion: 'CA'
            }
          }
        }
      ],
      hoursAvailable: {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '18:00',
        validFrom: '2024-01-01',
        validThrough: '2025-12-31'
      }
    }}
  />
);

export default ServiceAreaSchema;