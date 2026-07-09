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

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: siteData.organization,
  url: siteData.url,
  telephone: siteData.contact.phone,
  email: siteData.contact.email,
  sameAs: [siteData.links.personal]
};

export const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: siteData.author,
  url: siteData.links.personal,
  worksFor: {
    "@type": "Organization",
    name: siteData.organization,
    url: siteData.url
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
    name: siteData.author,
    url: siteData.links.personal,
    worksFor: {
      "@type": "Organization",
      name: siteData.organization,
      url: siteData.url
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
  url
}: {
  title: string;
  description: string;
  url: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    inLanguage: "pl-PL",
    author: {
      "@type": "Person",
      name: siteData.author,
      url: siteData.links.personal
    },
    publisher: {
      "@type": "Organization",
      name: siteData.organization,
      url: siteData.url
    },
    mainEntityOfPage: url
  };
}
