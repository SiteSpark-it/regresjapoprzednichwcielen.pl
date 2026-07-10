import { faqItems } from "@/content/faqItems";
import { siteData } from "@/content/siteData";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${siteData.url}/#website`,
  name: siteData.name,
  alternateName: "Regresja Poprzednich Wcieleń",
  url: siteData.url,
  inLanguage: "pl-PL",
  publisher: { "@id": `${siteData.url}/#publisher` }
};

export const publisherSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${siteData.url}/#publisher`,
  name: siteData.name,
  url: siteData.url,
  email: siteData.contact.email
};

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${siteData.organizationUrl}/#organization`,
  name: siteData.organization,
  url: siteData.organizationUrl,
  telephone: siteData.contact.phone,
  email: siteData.contact.email,
  contactPoint: {
    "@type": "ContactPoint",
    telephone: siteData.contact.phone,
    email: siteData.contact.email,
    contactType: "customer service",
    availableLanguage: "pl"
  }
};

export const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${siteData.url}/o-macieju/#person`,
  name: siteData.practitioner,
  url: `${siteData.url}/o-macieju/`,
  sameAs: [siteData.organizationUrl],
  jobTitle: "Praktyk regresji duchowej",
  worksFor: {
    "@id": `${siteData.organizationUrl}/#organization`
  },
  description:
    "Praktyk regresji duchowej, studiujący psychologię w Warszawie, pracujący z regresją poprzednich wcieleń i autorską metodą Brama Dusz LBL."
};

export const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Regresja poprzednich wcieleń",
  serviceType: "Sesja rozwojowa i duchowa PLR",
  url: siteData.url,
  description:
    "Regresja poprzednich wcieleń jako spokojna praca z obrazami, emocjami, symbolami i historiami duszy. Kontakt i konsultacja są dostępne na tej stronie.",
  areaServed: {
    "@type": "Country",
    name: "Polska"
  },
  provider: {
    "@type": "Person",
    "@id": `${siteData.url}/o-macieju/#person`,
    name: siteData.practitioner,
    url: `${siteData.url}/o-macieju/`,
    worksFor: {
      "@id": `${siteData.organizationUrl}/#organization`
    }
  },
  availableChannel: [
    {
      "@type": "ServiceChannel",
      serviceUrl: new URL(siteData.cta.url, siteData.url).toString(),
      servicePhone: {
        "@type": "ContactPoint",
        telephone: siteData.contact.phone,
        contactType: "customer service",
        availableLanguage: "pl"
      },
      serviceLocation: {
        "@type": "VirtualLocation",
        url: new URL(siteData.cta.url, siteData.url).toString()
      }
    }
  ]
};

export function createFaqSchema(items: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer
      }
    }))
  };
}

export const faqSchema = createFaqSchema(faqItems);

export function breadcrumbSchema(items: BreadcrumbItem[], currentUrl: string) {
  const allItems = [{ label: "Strona główna", href: "/" }, ...items];

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: allItems.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      item: new URL(item.href ?? currentUrl, siteData.url).toString()
    }))
  };
}

export function articleSchema({
  title,
  description,
  url,
  publishedAt,
  updatedAt
}: {
  title: string;
  description: string;
  url: string;
  publishedAt?: string;
  updatedAt?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${url}#article`,
    headline: title,
    description,
    inLanguage: "pl-PL",
    ...(publishedAt ? { datePublished: publishedAt } : {}),
    ...(updatedAt ? { dateModified: updatedAt } : {}),
    author: {
      "@type": "Organization",
      name: siteData.author,
      url: `${siteData.url}/o-serwisie/`
    },
    publisher: {
      "@id": `${siteData.url}/#publisher`
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url
    }
  };
}

export function itemListSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      url: item.url
    }))
  };
}

export const profilePageSchema = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  "@id": `${siteData.url}/o-macieju/#profile`,
  url: `${siteData.url}/o-macieju/`,
  name: `${siteData.practitioner} — regresja duchowa`,
  mainEntity: { "@id": `${siteData.url}/o-macieju/#person` }
};

export function webPageSchema({
  name,
  description,
  url,
  type = "WebPage"
}: {
  name: string;
  description: string;
  url: string;
  type?: "WebPage" | "AboutPage" | "ContactPage" | "CollectionPage";
}) {
  return {
    "@context": "https://schema.org",
    "@type": type,
    "@id": `${url}#webpage`,
    name,
    description,
    url,
    inLanguage: "pl-PL",
    isPartOf: { "@id": `${siteData.url}/#website` },
    publisher: { "@id": `${siteData.url}/#publisher` }
  };
}
