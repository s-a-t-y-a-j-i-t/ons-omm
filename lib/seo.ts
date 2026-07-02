import { companyInfo } from "@/lib/data";
import { SITE_URL, OG_IMAGE } from "@/lib/constants";

export function getOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: companyInfo.name,
    description:
      "Premium engineering company delivering HVAC, cleanroom, and BMS solutions.",
    url: SITE_URL,
    logo: `${SITE_URL}/logo.svg`,
    foundingDate: String(companyInfo.established),
    address: {
      "@type": "PostalAddress",
      streetAddress: companyInfo.address.street,
      addressLocality: companyInfo.address.city,
      addressRegion: companyInfo.address.state,
      addressCountry: "IN",
    },
    contactPoint: companyInfo.phones.map((phone, i) => ({
      "@type": "ContactPoint",
      telephone: phone,
      contactType: i === 0 ? "sales" : "customer support",
      email: companyInfo.emails[i] ?? companyInfo.emails[0],
      areaServed: "IN",
      availableLanguage: ["English", "Hindi"],
    })),
    sameAs: Object.values(companyInfo.social),
  };
}

export function getLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: companyInfo.name,
    image: OG_IMAGE,
    url: SITE_URL,
    telephone: companyInfo.phones[0],
    email: companyInfo.emails[0],
    address: {
      "@type": "PostalAddress",
      streetAddress: companyInfo.address.street,
      addressLocality: companyInfo.address.city,
      addressRegion: companyInfo.address.state,
      postalCode: "247667",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 29.8543,
      longitude: 77.888,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "09:00",
      closes: "18:00",
    },
  };
}

export function getWebsiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: companyInfo.name,
    url: SITE_URL,
    description: companyInfo.tagline,
    publisher: {
      "@type": "Organization",
      name: companyInfo.name,
    },
  };
}
