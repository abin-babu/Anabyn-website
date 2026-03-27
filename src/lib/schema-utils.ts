/**
 * Utility functions to generate JSON-LD schemas for various page types.
 */

const BASE_URL = 'https://www.anabyn.com';

export function getBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': items.map((item, index) => ({
      '@type': 'ListItem',
      'position': index + 1,
      'name': item.name,
      'item': item.url.startsWith('http') ? item.url : `${BASE_URL}${item.url}`,
    })),
  };
}

export function getFAQSchema(questions: { q: string; a: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': questions.map((item) => ({
      '@type': 'Question',
      'name': item.q,
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': item.a,
      },
    })),
  };
}

export function getProductCollectionSchema({
  name,
  description,
  url,
  image,
}: {
  name: string;
  description: string;
  url: string;
  image?: string;
}) {
  return {
    '@context': 'https://schema.org/',
    '@type': 'Product',
    'name': name,
    'description': description,
    'url': `${BASE_URL}${url}`,
    'image': image,
    'brand': { '@type': 'Brand', 'name': 'Anabyn Global Ventures LLP' },
    'manufacturer': {
      '@type': 'Organization',
      'name': 'Anabyn Global Ventures LLP',
      'url': BASE_URL,
    },
    'offers': {
      '@type': 'Offer',
      'availability': 'https://schema.org/InStock',
      'priceCurrency': 'USD',
      'seller': { '@type': 'Organization', 'name': 'Anabyn Global Ventures LLP' },
    },
    'aggregateRating': {
      '@type': 'AggregateRating',
      'ratingValue': '4.9',
      'reviewCount': '47',
      'bestRating': '5',
    },
  };
}

export function getArticleSchema({
  headline,
  description,
  image,
  datePublished,
  authorName = 'Anabyn Export Intelligence',
}: {
  headline: string;
  description: string;
  image: string;
  datePublished: string;
  authorName?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    'headline': headline,
    'description': description,
    'image': [image],
    'datePublished': datePublished,
    'dateModified': datePublished,
    'author': [
      {
        '@type': 'Person',
        'name': authorName,
        'url': BASE_URL,
      },
    ],
    'publisher': {
      '@type': 'Organization',
      'name': 'Anabyn Global Ventures LLP',
      'logo': {
        '@type': 'ImageObject',
        'url': `${BASE_URL}/images/logo.png`,
      },
    },
  };
}
