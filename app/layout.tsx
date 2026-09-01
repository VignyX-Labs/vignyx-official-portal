import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { SITE_URL } from "@/lib/constants";
import { ToastProvider } from "@/components/ui/Toast";
import WhatsAppFloatButton from "@/components/ui/WhatsAppFloatButton";
import BackToTopButton from "@/components/ui/BackToTopButton";
import StickyMobileCTA from "@/components/ui/StickyMobileCTA";
import StructuredData from "@/components/StructuredData";
import Analytics from "@/components/Analytics";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/apple-touch-icon.png",
  },
  title: {
    default: "VignyX — Intelligent Pharmacy Operations Platform for India",
    template: "%s | VignyX",
  },
  description:
    "Billing, inventory, procurement, Godown operations and branch replenishment — connected in one system. For single pharmacies, multi-branch chains, and central Godowns across India.",
  keywords:
    "pharmacy management software, pharmacy billing software, pharmacy inventory management, medical store software, pharmacy chain management, godown management software, pharmacy stock management, expiry tracking, WhatsApp alerts pharmacy",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "VignyX — Intelligent Pharmacy Operations",
    description:
      "Billing, inventory, procurement, Godown operations and branch replenishment — connected in one system for Indian pharmacies and pharmacy chains.",
    url: SITE_URL,
    siteName: "VignyX",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "VignyX — Intelligent Pharmacy Operations Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "VignyX — Intelligent Pharmacy Operations for India",
    description:
      "Billing, inventory, procurement, Godown operations and branch replenishment — connected in one system.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: process.env.NEXT_PUBLIC_GSC_VERIFICATION
    ? { google: process.env.NEXT_PUBLIC_GSC_VERIFICATION }
    : undefined,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={plusJakartaSans.variable}>
      <body className={plusJakartaSans.className}>
        <StructuredData />
        <ToastProvider>
          {children}
          <WhatsAppFloatButton />
          <BackToTopButton />
          <StickyMobileCTA />
        </ToastProvider>
        <Analytics />
      </body>
    </html>
  );
}
