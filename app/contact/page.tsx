import type { Metadata } from "next";
import ContactPageClient from "./ContactPageClient";

export const metadata: Metadata = {
  title: "Contact VignyX — Request a Demo",
  description:
    "Get in touch with VignyX. Request a live demo on WhatsApp or send us a message — we personally respond within 4 hours.",
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  return <ContactPageClient />;
}
