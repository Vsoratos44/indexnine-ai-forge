import React from 'react';

/**
 * SEOStructuredData Component
 * 
 * This component implements JSON-LD structured data (schema markup) to help search engines
 * and AI systems better understand our content. Schema markup is crucial for:
 * 
 * 1. Traditional SEO - Helps search engines display rich snippets in search results
 * 2. AI/Generative Search - AI systems like ChatGPT, Bard, and Bing Chat use schema
 *    to better understand and reference content in AI-generated responses
 * 3. Voice Search - Structured data helps with voice search optimization
 * 4. Featured Snippets - Properly structured content is more likely to appear in featured snippets
 * 
 * Key Schema Types Implemented:
 * - Organization: Company information and branding for entity recognition
 * - WebPage: Page-level metadata and context for better content understanding
 * - Service: Business services for improved discovery in search and AI responses
 * - Article: Blog posts and case studies with rich metadata for content credibility
 * - FAQPage: FAQ sections for featured snippets and AI Q&A responses
 * - HowTo: Tutorial content for step-by-step search results
 * - JobPosting: Career opportunities for job search engines and career AI assistants
 * - Review: Social proof and credibility signals for trust building
 * - VideoObject: Video content for video search results and multimedia AI responses
 * - LocalBusiness: Local SEO and map presence for location-based searches
 * - BreadcrumbList: Navigation context for better site architecture understanding
 * 
 * Why This Matters for AI/Generative Search:
 * - AI systems rely on structured data to understand content context and relationships
 * - Proper schema increases the likelihood of content being referenced in AI responses
 * - Attribution and credibility signals help AI systems cite our content appropriately
 * - Well-structured data helps AI understand our expertise and authority in our domain
 */

interface StructuredDataProps {
  type: 'Organization' | 'WebPage' | 'Service' | 'Article' | 'BreadcrumbList' | 'FAQPage' | 'HowTo' | 'JobPosting' | 'Review' | 'VideoObject' | 'LocalBusiness' | 'CollectionPage';
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
    if (type === 'Service' || type === 'Article' || type === 'FAQPage' || type === 'HowTo' || type === 'JobPosting') {
      baseData.provider = {
        '@type': 'Organization',
        name: 'IndexNine Technologies',
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
      name: 'IndexNine Technologies',
      url: 'https://indexnine.com',
      logo: 'https://indexnine.com/images/logo.png',
      description: 'Leading product engineering and AI consulting services for enterprises. Custom software development, data engineering, quality engineering, and AI implementation solutions.',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'San Francisco',
        addressRegion: 'CA',
        addressCountry: 'US'
      },
      contactPoint: {
        '@type': 'ContactPoint',
        contactType: 'customer service'
      },
      sameAs: [
        'https://www.linkedin.com/company/indexnine',
        'https://twitter.com/IndexNineTech'
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

export const ArticleSchema = ({ 
  title, 
  description, 
  url, 
  datePublished, 
  dateModified, 
  author, 
  wordCount, 
  readingTime,
  image 
}: { 
  title: string; 
  description: string; 
  url: string; 
  datePublished: string; 
  dateModified?: string; 
  author?: string; 
  wordCount?: number; 
  readingTime?: string;
  image?: string;
}) => (
  <SEOStructuredData
    type="Article"
    data={{
      headline: title,
      description,
      url,
      datePublished,
      dateModified: dateModified || datePublished,
      author: {
        '@type': 'Person',
        name: author || 'IndexNine Technologies'
      },
      publisher: {
        '@type': 'Organization',
        name: 'IndexNine Technologies',
        logo: {
          '@type': 'ImageObject',
          url: 'https://yoursite.lovable.app/logo.png'
        }
      },
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': url
      },
      image: image ? {
        '@type': 'ImageObject',
        url: image
      } : undefined,
      wordCount,
      timeRequired: readingTime ? `PT${readingTime.replace(/\D/g, '')}M` : undefined
    }}
  />
);

export const FAQSchema = ({ faqItems }: { faqItems: Array<{ question: string; answer: string }> }) => (
  <SEOStructuredData
    type="FAQPage"
    data={{
      mainEntity: faqItems.map(item => ({
        '@type': 'Question',
        name: item.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: item.answer
        }
      }))
    }}
  />
);

export const HowToSchema = ({ 
  name, 
  description, 
  steps, 
  totalTime 
}: { 
  name: string; 
  description: string; 
  steps: Array<{ name: string; text: string }>; 
  totalTime?: string;
}) => (
  <SEOStructuredData
    type="HowTo"
    data={{
      name,
      description,
      totalTime: totalTime ? `PT${totalTime.replace(/\D/g, '')}M` : undefined,
      step: steps.map((step, index) => ({
        '@type': 'HowToStep',
        position: index + 1,
        name: step.name,
        text: step.text
      }))
    }}
  />
);

export const JobPostingSchema = ({ 
  title, 
  description, 
  location, 
  employmentType, 
  datePosted, 
  validThrough,
  baseSalary 
}: { 
  title: string; 
  description: string; 
  location: string; 
  employmentType: string; 
  datePosted: string; 
  validThrough?: string;
  baseSalary?: { min: number; max: number; currency: string };
}) => (
  <SEOStructuredData
    type="JobPosting"
    data={{
      title,
      description,
      datePosted,
      validThrough,
      employmentType,
      hiringOrganization: {
        '@type': 'Organization',
        name: 'IndexNine Technologies',
        sameAs: 'https://yoursite.lovable.app'
      },
      jobLocation: {
        '@type': 'Place',
        address: {
          '@type': 'PostalAddress',
          addressLocality: location
        }
      },
      baseSalary: baseSalary ? {
        '@type': 'MonetaryAmount',
        currency: baseSalary.currency,
        value: {
          '@type': 'QuantitativeValue',
          minValue: baseSalary.min,
          maxValue: baseSalary.max,
          unitText: 'YEAR'
        }
      } : undefined
    }}
  />
);

export const ReviewSchema = ({ 
  itemName, 
  rating, 
  reviewBody, 
  author, 
  datePublished 
}: { 
  itemName: string; 
  rating: number; 
  reviewBody: string; 
  author: string; 
  datePublished: string; 
}) => (
  <SEOStructuredData
    type="Review"
    data={{
      itemReviewed: {
        '@type': 'Service',
        name: itemName
      },
      reviewRating: {
        '@type': 'Rating',
        ratingValue: rating,
        bestRating: 5
      },
      reviewBody,
      author: {
        '@type': 'Person',
        name: author
      },
      datePublished
    }}
  />
);

export const VideoObjectSchema = ({ 
  name, 
  description, 
  thumbnailUrl, 
  uploadDate, 
  duration, 
  contentUrl 
}: { 
  name: string; 
  description: string; 
  thumbnailUrl: string; 
  uploadDate: string; 
  duration: string; 
  contentUrl: string; 
}) => (
  <SEOStructuredData
    type="VideoObject"
    data={{
      name,
      description,
      thumbnailUrl,
      uploadDate,
      duration: `PT${duration.replace(/\D/g, '')}S`,
      contentUrl,
      embedUrl: contentUrl
    }}
  />
);

export const LocalBusinessSchema = () => (
  <SEOStructuredData
    type="LocalBusiness"
    data={{
      '@type': 'ProfessionalService',
      name: 'IndexNine Technologies',
      image: 'https://yoursite.lovable.app/logo.png',
      '@id': 'https://yoursite.lovable.app',
      url: 'https://yoursite.lovable.app',
      telephone: '+1-xxx-xxx-xxxx',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Your Street Address',
        addressLocality: 'Your City',
        addressRegion: 'Your State',
        postalCode: 'Your ZIP',
        addressCountry: 'US'
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 40.75,
        longitude: 73.98
      },
      openingHoursSpecification: {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '18:00'
      },
      sameAs: [
        'https://linkedin.com/company/indexnine',
        'https://twitter.com/indexnine_tech'
      ]
    }}
  />
);