import React from 'react';

interface StructuredDataProps {
  type: 'Organization' | 'WebPage' | 'Service' | 'Article' | 'BreadcrumbList';
  data: any;
}

export const SEOStructuredData: React.FC<StructuredDataProps> = ({ type, data }) => {
  const generateStructuredData = () => {
    const baseData = {
      '@context': 'https://schema.org',
      '@type': type,
      ...data
    };
    
    // Add common organization data for service/article types
    if (type === 'Service' || type === 'Article') {
      baseData.provider = {
        '@type': 'Organization',
        name: 'Your Company',
        url: 'https://yoursite.lovable.app'
      };
    }
    
    return baseData;
  };
  
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(generateStructuredData())
      }}
    />
  );
};

// Predefined structured data templates
export const OrganizationSchema = () => (
  <SEOStructuredData
    type="Organization"
    data={{
      name: 'Your Company',
      url: 'https://yoursite.lovable.app',
      logo: 'https://yoursite.lovable.app/logo.png',
      description: 'Leading technology consulting and software development company',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Your Street Address',
        addressLocality: 'Your City',
        addressRegion: 'Your State',
        postalCode: 'Your ZIP',
        addressCountry: 'US'
      },
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+1-xxx-xxx-xxxx',
        contactType: 'customer service'
      },
      sameAs: [
        'https://linkedin.com/company/yourcompany',
        'https://twitter.com/yourcompany'
      ]
    }}
  />
);

export const WebPageSchema = ({ title, description, url }: { title: string; description: string; url: string }) => (
  <SEOStructuredData
    type="WebPage"
    data={{
      name: title,
      description,
      url,
      publisher: {
        '@type': 'Organization',
        name: 'Your Company'
      }
    }}
  />
);

export const ServiceSchema = ({ name, description, serviceType }: { name: string; description: string; serviceType: string }) => (
  <SEOStructuredData
    type="Service"
    data={{
      name,
      description,
      serviceType,
      areaServed: 'Worldwide',
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: `${name} Services`,
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name,
              description
            }
          }
        ]
      }
    }}
  />
);

export const BreadcrumbSchema = ({ items }: { items: Array<{ name: string; url: string }> }) => (
  <SEOStructuredData
    type="BreadcrumbList"
    data={{
      itemListElement: items.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: item.name,
        item: item.url
      }))
    }}
  />
);