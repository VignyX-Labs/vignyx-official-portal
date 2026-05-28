import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
  title: "VignyX — AI-Powered Healthcare Inventory Management for India",
  description:
    "Zero stockouts. Zero expiry losses. VignyX is the AI-powered inventory platform built for Indian medical shops, hospital pharmacies, and healthcare enterprises.",
  keywords:
    "medical shop inventory, pharmacy management software, healthcare inventory India, expiry tracking, WhatsApp alerts pharmacy",
  openGraph: {
    title: "VignyX — Intelligent Healthcare Operations",
    description:
      "AI-powered inventory management for Indian medical shops and hospital pharmacies. Zero stockouts. Zero expiry losses.",
    url: "https://vignyx.in",
    siteName: "VignyX",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "VignyX — AI Healthcare Inventory for India",
    description:
      "Zero stockouts. Zero expiry losses. Built for Indian medical shops and pharmacies.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={plusJakartaSans.variable}>
      <body className={plusJakartaSans.className}>{children}</body>
    </html>
  );
}
