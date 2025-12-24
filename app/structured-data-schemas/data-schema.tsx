
// lib/structured-data.ts

import Script from "next/script";

/**
 * Structured Data Schemas for Code Postal Maroc
 * Implements Schema.org vocabulary for better SEO
 */

interface AgenceData {
  name: string;
  region: string;
  province: string;
  codePostal: number;
}

// ============================================
// 1. ORGANIZATION SCHEMA (Homepage)
// ============================================

export function getOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Code Postal Maroc',
    alternateName: 'CPM',
    url: 'https://www.codepostalmaroc.com',
    logo: 'https://www.codepostalmaroc.com/logo.png',
    description: 'Guide complet des codes postaux au Maroc. Trouvez facilement les codes postaux de toutes les agences, villes et régions du Maroc.',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'MA',
    },
    sameAs: [
      'https://twitter.com/codepostalmaroc',
      'https://facebook.com/codepostalmaroc',
      'https://instagram.com/codepostalmaroc',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      availableLanguage: ['French', 'Arabic'],
    },
  };
}

// ============================================
// 2. WEBSITE SCHEMA (Homepage)
// ============================================

export function getWebsiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Code Postal Maroc',
    url: 'https://www.codepostalmaroc.com',
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: 'https://www.codepostalmaroc.com/recherche?search={search_term_string}',
      },
      'query-input': 'required name=search_term_string',
    },
  };
}

// ============================================
// 3. BREADCRUMB SCHEMA
// ============================================

interface BreadcrumbItem {
  name: string;
  url: string;
}

export function getBreadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

// ============================================
// 4. POST OFFICE SCHEMA (Individual Agency)
// ============================================

export function getPostOfficeSchema(agence: AgenceData) {
  return {
    '@context': 'https://schema.org',
    '@type': 'PostOffice',
    name: agence.name,
    address: {
      '@type': 'PostalAddress',
      addressLocality: agence.province,
      addressRegion: agence.region,
      postalCode: agence.codePostal.toString(),
      addressCountry: 'MA',
    },
    geo: {
      '@type': 'GeoCoordinates',
      addressCountry: 'MA',
    },
  };
}

// ============================================
// 5. PLACE SCHEMA (Region/Province Pages)
// ============================================

export function getPlaceSchema(place: {
  name: string;
  type: 'Region' | 'Province';
  description?: string;
  agencyCount: number;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Place',
    name: place.name,
    description: place.description || `${place.type} de ${place.name} au Maroc avec ${place.agencyCount} agences postales.`,
    geo: {
      '@type': 'GeoCoordinates',
      addressCountry: 'MA',
    },
    containsPlace: {
      '@type': 'PostOffice',
      name: `Agences Postales de ${place.name}`,
    },
  };
}

// ============================================
// 6. ITEM LIST SCHEMA (Lists of Agencies)
// ============================================

export function getItemListSchema(
  title: string,
  items: AgenceData[],
  baseUrl: string
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: title,
    numberOfItems: items.length,
    itemListElement: items.slice(0, 50).map((agence, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'PostOffice',
        '@id': `${baseUrl}/agences/${slugify(agence.name)}`,
        name: agence.name,
        address: {
          '@type': 'PostalAddress',
          addressLocality: agence.province,
          addressRegion: agence.region,
          postalCode: agence.codePostal.toString(),
          addressCountry: 'MA',
        },
      },
    })),
  };
}

// ============================================
// 7. FAQ SCHEMA (Optional)
// ============================================

interface FAQItem {
  question: string;
  answer: string;
}

export function getFAQSchema(faqs: FAQItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

// ============================================
// 8. COLLECTION PAGE SCHEMA
// ============================================

export function getCollectionPageSchema(
  name: string,
  description: string,
  url: string
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: name,
    description: description,
    url: url,
    isPartOf: {
      '@type': 'WebSite',
      name: 'Code Postal Maroc',
      url: 'https://www.codepostalmaroc.com',
    },
  };
}

// ============================================
// HELPER FUNCTIONS
// ============================================

function slugify(text: string): string {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

// ============================================
// STRUCTURED DATA COMPONENT
// ============================================

interface StructuredDataProps {
  data: Record<string, any> | Record<string, any>[];
}

export function StructuredData({ data }: StructuredDataProps) {
  const schemas = Array.isArray(data) ? data : [data];
  
  return (
    <>
      {schemas.map((schema, index) => (
        <Script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema),
          }}
        />
       
      ))}
    </>
  );
}

// ============================================
// PAGE-SPECIFIC IMPLEMENTATIONS
// ============================================

// Homepage
export function getHomepageSchemas() {
  return [
    getOrganizationSchema(),
    getWebsiteSchema(),
  ];
}

// Region Page
export function getRegionPageSchemas(
  region: string,
  agences: AgenceData[],
  provinceCount: number
) {
  const regionSlug = slugify(region);
  const baseUrl = 'https://www.codepostalmaroc.com';
  
  return [
    // Place schema
    getPlaceSchema({
      name: region,
      type: 'Region',
      description: `Région de ${region} au Maroc avec ${agences.length} agences postales réparties dans ${provinceCount} provinces.`,
      agencyCount: agences.length,
    }),
    // Breadcrumb
    getBreadcrumbSchema([
      { name: 'Accueil', url: baseUrl },
      { name: 'Régions', url: `${baseUrl}/regions` },
      { name: region, url: `${baseUrl}/regions/${regionSlug}` },
    ]),
    // Collection page
    getCollectionPageSchema(
      `Codes Postaux ${region}`,
      `Liste complète des codes postaux de la région ${region} au Maroc`,
      `${baseUrl}/regions/${regionSlug}`
    ),
  ];
}

// Province Page
export function getProvincePageSchemas(
  province: string,
  region: string,
  agences: AgenceData[]
) {
  const provinceSlug = slugify(province);
  const regionSlug = slugify(region);
  const baseUrl = 'https://www.codepostalmaroc.com';
  
  return [
    // Place schema
    getPlaceSchema({
      name: province,
      type: 'Province',
      description: `Province de ${province}, région de ${region}, avec ${agences.length} agences postales.`,
      agencyCount: agences.length,
    }),
    // Breadcrumb
    getBreadcrumbSchema([
      { name: 'Accueil', url: baseUrl },
      { name: 'Régions', url: `${baseUrl}/regions` },
      { name: region, url: `${baseUrl}/regions/${regionSlug}` },
      { name: province, url: `${baseUrl}/provinces/${provinceSlug}` },
    ]),
    // Item list of agencies
    getItemListSchema(
      `Agences Postales de ${province}`,
      agences,
      baseUrl
    ),
  ];
}

// Agency Page
export function getAgencyPageSchemas(agence: AgenceData) {
  const agenceSlug = slugify(agence.name);
  const provinceSlug = slugify(agence.province);
  const regionSlug = slugify(agence.region);
  const baseUrl = 'https://www.codepostalmaroc.com';
  
  return [
    // Post office schema
    getPostOfficeSchema(agence),
    // Breadcrumb
    getBreadcrumbSchema([
      { name: 'Accueil', url: baseUrl },
      { name: 'Régions', url: `${baseUrl}/regions` },
      { name: agence.region, url: `${baseUrl}/regions/${regionSlug}` },
      { name: agence.province, url: `${baseUrl}/provinces/${provinceSlug}` },
      { name: agence.name, url: `${baseUrl}/agences/${agenceSlug}` },
    ]),
  ];
}

// All Agencies List Page
export function getAllAgenciesPageSchemas(agences: AgenceData[]) {
  const baseUrl = 'https://www.codepostalmaroc.com';
  
  return [
    getBreadcrumbSchema([
      { name: 'Accueil', url: baseUrl },
      { name: 'Toutes les Agences', url: `${baseUrl}/agences` },
    ]),
    getCollectionPageSchema(
      'Toutes les Agences Postales au Maroc',
      'Liste complète de toutes les agences postales au Maroc avec leurs codes postaux',
      `${baseUrl}/agences`
    ),
    // Sample of agencies (limit to 50 for performance)
    getItemListSchema(
      'Agences Postales au Maroc',
      agences,
      baseUrl
    ),
  ];
}

// Search Results Page
export function getSearchResultsSchemas(
  query: string,
  results: AgenceData[]
) {
  const baseUrl = 'https://www.codepostalmaroc.com';
  
  return [
    getBreadcrumbSchema([
      { name: 'Accueil', url: baseUrl },
      { name: `Recherche: ${query}`, url: `${baseUrl}/recherche?search=${query}` },
    ]),
    getItemListSchema(
      `Résultats de recherche pour "${query}"`,
      results,
      baseUrl
    ),
  ];
}