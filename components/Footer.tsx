"use client";

import VignyXLogo from "./VignyXLogo";
import { CONTACT_EMAIL, INSTAGRAM_HANDLE, INSTAGRAM_URL } from "@/lib/constants";

const footerLinks = {
  Product: [
    { label: "Features", href: "#features" },
    { label: "Pricing", href: "#pricing" },
    { label: "How it works", href: "#how-it-works" },
    { label: "FAQ", href: "/#faq" },
  ],
  Company: [
    { label: "About", href: "#about" },
    { label: "Support", href: "/contact" },
    { label: "Refund Policy", href: "/refund-policy" },
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms of Service", href: "/terms-of-service" },
  ],
};

export default function Footer() {
  const handleNavClick = (href: string) => {
    // Only intercept same-page anchors; cross-page hrefs (e.g. "/#faq", "/contact")
    // should navigate normally so the browser handles the page load + scroll.
    if (href.startsWith("#")) {
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-[#0f172a] text-white">
      <div className="container-max py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <VignyXLogo size={40} />
              <span className="text-xl font-bold tracking-tight">VignyX</span>
            </div>
            <p className="text-slate-400 text-sm font-medium mb-1">
              Intelligent Healthcare Operations
            </p>
            <p className="text-slate-500 text-sm mb-6">
              Built with ❤️ in India
            </p>
            <p className="text-slate-500 text-sm leading-relaxed max-w-xs">
              AI-powered inventory management for Indian medical shops, hospital pharmacies, and healthcare enterprises.
            </p>
          </div>

          {/* Product links */}
          <div>
            <h4 className="text-sm font-bold text-slate-300 uppercase tracking-wider mb-4">
              Product
            </h4>
            <ul className="space-y-3">
              {footerLinks.Product.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      if (link.href.startsWith("#")) {
                        e.preventDefault();
                        handleNavClick(link.href);
                      }
                    }}
                    className="text-slate-400 hover:text-white text-sm transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 rounded"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company + Contact */}
          <div>
            <h4 className="text-sm font-bold text-slate-300 uppercase tracking-wider mb-4">
              Company
            </h4>
            <ul className="space-y-3 mb-8">
              {footerLinks.Company.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-slate-400 hover:text-white text-sm transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 rounded"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            <h4 className="text-sm font-bold text-slate-300 uppercase tracking-wider mb-4">
              Contact
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="text-slate-400 hover:text-white text-sm transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 rounded"
                >
                  {CONTACT_EMAIL}
                </a>
              </li>
              <li>
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-white text-sm transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 rounded"
                >
                  {INSTAGRAM_HANDLE} (Instagram)
                </a>
              </li>
              <li className="text-slate-500 text-sm">
                Tirupati, Andhra Pradesh
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-800 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm">
            © 2026 VignyX Technologies Pvt Ltd. All rights reserved.
          </p>
          <p className="text-slate-600 text-sm">
            Made in India for Indian Healthcare
          </p>
        </div>
      </div>
    </footer>
  );
}
