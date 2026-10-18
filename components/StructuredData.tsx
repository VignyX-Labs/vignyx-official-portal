import { SITE_URL, CONTACT_EMAIL, INSTAGRAM_URL } from "@/lib/constants";

export default function StructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "VignyX",
    url: SITE_URL,
    logo: `${SITE_URL}/icon-512.png`,
    email: CONTACT_EMAIL,
    sameAs: [INSTAGRAM_URL],
    contactPoint: {
      "@type": "ContactPoint",
      email: CONTACT_EMAIL,
      contactType: "customer support",
      areaServed: "IN",
    },
  };

  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "VignyX",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web, Android",
    description:
      "AI-powered cloud platform for Indian pharmacies, pharmacy chains, hospitals, godowns, distributors, C&F agents and pharma companies — billing, stock, AI bill reading, purchasing, payments and GST.",
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "INR",
      lowPrice: "999",
      highPrice: "5999",
      offerCount: "6",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
      />
    </>
  );
}
