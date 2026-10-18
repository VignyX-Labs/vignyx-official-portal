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
    default: "VignyX — AI-Powered Pharmacy & Pharma Cloud for India",
    template: "%s | VignyX",
  },
  description:
    "Billing, stock, AI bill reading, purchase orders, distributor payments and GST — in one cloud. For pharmacies, chains, hospitals, godowns, distributors, C&F agents and pharma companies across India.",
  keywords:
    "pharmacy software, pharmacy billing software, medical store software, AI invoice reader pharmacy, pharmacy inventory management, pharmacy chain software, pharma distributor software, C&F agent software, hospital pharmacy software, GST billing pharmacy, Marg alternative",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "VignyX — AI-Powered Pharmacy & Pharma Cloud",
    description:
      "Billing, stock, AI bill reading, purchasing, payments and GST — one connected cloud for Indian pharmacies, chains, hospitals and the pharma supply chain.",
    url: SITE_URL,
    siteName: "VignyX",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "VignyX — AI-Powered Pharmacy & Pharma Cloud",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "VignyX — AI-Powered Pharmacy & Pharma Cloud for India",
    description:
      "Billing, stock, AI bill reading, purchasing, payments and GST — one connected cloud for pharmacies and the pharma supply chain.",
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
