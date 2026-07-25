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
    default: "VignyX — AI-Powered Healthcare Inventory Management for India",
    template: "%s | VignyX",
  },
  description:
    "Zero stockouts. Zero expiry losses. VignyX is the AI-powered inventory platform built for Indian medical shops, hospital pharmacies, and healthcare enterprises.",
  keywords:
    "medical shop inventory, pharmacy management software, healthcare inventory India, expiry tracking, WhatsApp alerts pharmacy",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "VignyX — Intelligent Healthcare Operations",
    description:
      "AI-powered inventory management for Indian medical shops and hospital pharmacies. Zero stockouts. Zero expiry losses.",
    url: SITE_URL,
    siteName: "VignyX",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "VignyX — AI-Powered Healthcare Inventory Management",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "VignyX — AI Healthcare Inventory for India",
    description:
      "Zero stockouts. Zero expiry losses. Built for Indian medical shops and pharmacies.",
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
