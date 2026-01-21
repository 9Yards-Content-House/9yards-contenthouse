import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  image?: string;
  url?: string;
  type?: 'website' | 'article' | 'product';
  noIndex?: boolean;
  schema?: object;
}

const SITE_NAME = '9Yards Content House';
const BASE_URL = import.meta.env.VITE_BASE_URL || 'https://contenthouse.9yards.co.ug';
const DEFAULT_IMAGE = `${BASE_URL}/images/og/9yards-share-image.jpg`;

/**
 * SEO Component for managing page-level meta tags
 * Uses react-helmet-async for dynamic head management
 */
export function SEO({ 
  title, 
  description, 
  image = DEFAULT_IMAGE, 
  url, 
  type = 'website',
  noIndex = false,
  schema
}: SEOProps) {
  const fullTitle = title === SITE_NAME ? title : `${title} | ${SITE_NAME}`;
  const canonicalUrl = url ? `${BASE_URL}${url}` : undefined;
  const imageUrl = image.startsWith('http') ? image : `${BASE_URL}${image}`;
  
  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
      {noIndex && <meta name="robots" content="noindex, nofollow" />}
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      {canonicalUrl && <meta property="og:url" content={canonicalUrl} />}
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />
      
      {/* JSON-LD Schema */}
      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      )}
    </Helmet>
  );
}

/**
 * Pre-built schemas for common page types
 */
export const schemas = {
  organization: {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "9Yards Content House",
    "alternateName": "9Yards",
    "url": BASE_URL,
    "logo": `${BASE_URL}/images/logo/9Yards-Logo-Full-Color.png`,
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+256-700-488-870",
      "contactType": "customer service",
      "email": "contenthouse@9yards.co.ug",
      "areaServed": "UG",
      "availableLanguage": "English"
    },
    "sameAs": [
      "https://www.instagram.com/9yards_content_house/",
      "https://www.youtube.com/@9Yards-ch",
      "https://www.tiktok.com/@9.yards.content.house"
    ]
  },

  localBusiness: {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "9Yards Content House",
    "image": `${BASE_URL}/images/team/team.jpg`,
    "description": "Kampala's premier creative agency offering video production, graphic design, web development, and social media management.",
    "@id": BASE_URL,
    "url": BASE_URL,
    "telephone": "+256-700-488-870",
    "email": "contenthouse@9yards.co.ug",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Kampala",
      "addressCountry": "UG"
    },
    "priceRange": "$$",
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "09:00",
      "closes": "18:00"
    }
  },

  service: (name: string, description: string, url?: string) => ({
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": name,
    "provider": {
      "@type": "Organization",
      "name": "9Yards Content House",
      "url": BASE_URL
    },
    "description": description,
    ...(url && { "url": `${BASE_URL}${url}` }),
    "areaServed": {
      "@type": "Country",
      "name": "Uganda"
    }
  }),

  breadcrumb: (items: Array<{ name: string; url: string }>) => ({
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": `${BASE_URL}${item.url}`
    }))
  }),

  faq: (questions: Array<{ question: string; answer: string }>) => ({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": questions.map(q => ({
      "@type": "Question",
      "name": q.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": q.answer
      }
    }))
  })
};
