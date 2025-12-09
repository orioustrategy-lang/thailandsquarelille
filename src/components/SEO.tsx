import { useEffect } from 'react';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  canonicalUrl?: string;
  ogImage?: string;
  ogType?: string;
  noindex?: boolean;
  structuredData?: object;
}

export default function SEO({
  title,
  description,
  keywords,
  canonicalUrl,
  ogImage = '/images/og-image.jpg',
  ogType = 'website',
  noindex = false,
  structuredData,
}: SEOProps) {
  useEffect(() => {
    // Update document title
    document.title = title;

    // Update or create meta tags
    const updateMeta = (name: string, content: string, property = false) => {
      const attr = property ? 'property' : 'name';
      let meta = document.querySelector(`meta[${attr}="${name}"]`) as HTMLMetaElement;
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute(attr, name);
        document.head.appendChild(meta);
      }
      meta.content = content;
    };

    // Basic meta tags
    updateMeta('description', description);
    if (keywords) updateMeta('keywords', keywords);
    updateMeta('robots', noindex ? 'noindex, nofollow' : 'index, follow');

    // Open Graph
    updateMeta('og:title', title, true);
    updateMeta('og:description', description, true);
    updateMeta('og:type', ogType, true);
    updateMeta('og:image', `https://thailandsquarelille.com${ogImage}`, true);
    if (canonicalUrl) {
      updateMeta('og:url', canonicalUrl, true);
    }

    // Twitter
    updateMeta('twitter:title', title);
    updateMeta('twitter:description', description);
    updateMeta('twitter:image', `https://thailandsquarelille.com${ogImage}`);

    // Canonical URL
    if (canonicalUrl) {
      let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
      if (!canonical) {
        canonical = document.createElement('link');
        canonical.rel = 'canonical';
        document.head.appendChild(canonical);
      }
      canonical.href = canonicalUrl;
    }

    // Structured Data
    if (structuredData) {
      const scriptId = 'page-structured-data';
      let script = document.getElementById(scriptId) as HTMLScriptElement;
      if (!script) {
        script = document.createElement('script');
        script.id = scriptId;
        script.type = 'application/ld+json';
        document.head.appendChild(script);
      }
      script.textContent = JSON.stringify(structuredData);
    }

    // Cleanup on unmount
    return () => {
      const pageScript = document.getElementById('page-structured-data');
      if (pageScript) {
        pageScript.remove();
      }
    };
  }, [title, description, keywords, canonicalUrl, ogImage, ogType, noindex, structuredData]);

  return null;
}

// Pre-defined structured data generators
export const generateMenuItemSchema = (item: {
  name: string;
  description: string;
  price: string;
  image: string;
}) => ({
  '@context': 'https://schema.org',
  '@type': 'MenuItem',
  name: item.name,
  description: item.description,
  offers: {
    '@type': 'Offer',
    price: item.price.replace('€', '').replace(',', '.').trim(),
    priceCurrency: 'EUR',
  },
  image: `https://thailandsquarelille.com${item.image}`,
});

export const generateFAQSchema = (faqs: { question: string; answer: string }[]) => ({
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
});

export const generateArticleSchema = (article: {
  title: string;
  description: string;
  datePublished: string;
  image: string;
  author?: string;
}) => ({
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: article.title,
  description: article.description,
  image: `https://thailandsquarelille.com${article.image}`,
  datePublished: article.datePublished,
  dateModified: article.datePublished,
  author: {
    '@type': 'Organization',
    name: article.author || 'Thai Land Square',
  },
  publisher: {
    '@type': 'Organization',
    name: 'Thai Land Square',
    logo: {
      '@type': 'ImageObject',
      url: 'https://thailandsquarelille.com/images/logo.jpg',
    },
  },
});
