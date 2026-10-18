"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { HiMenu, HiX } from "react-icons/hi";
import VignyXLogo from "./VignyXLogo";
import { trackEvent } from "@/lib/analytics";

const navLinks = [
  { label: "Solutions", href: "/#solutions" },
  { label: "AI Bill Reader", href: "/#ai-bill-reader" },
  { label: "Features", href: "/#features" },
  { label: "Chains", href: "/#operating-model" },
  { label: "Pricing", href: "/#pricing" },
  { label: "FAQ", href: "/#faq" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // On the home page, intercept and smooth-scroll to the in-page section.
  // On any other page, let the browser navigate to "/#section" normally —
  // there's nothing on this page to scroll to.
  const handleNavClick = (e: React.MouseEvent, href: string) => {
    if (!isHome) return;
    e.preventDefault();
    setMenuOpen(false);
    const el = document.querySelector(href.replace("/", ""));
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-100"
          : "bg-white/80 backdrop-blur-sm"
      }`}
    >
      <div className="container-max">
        <nav className="flex items-center justify-between h-16 lg:h-18">
          {/* Logo */}
          <a
            href="/"
            className="flex items-center gap-2.5 flex-shrink-0"
            onClick={(e) => {
              if (!isHome) return;
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            <VignyXLogo />
            <span className="text-xl font-bold text-[#0f172a] tracking-tight">
              VignyX
            </span>
          </a>

          {/* Desktop nav links */}
          <div className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-sm font-medium text-slate-600 hover:text-[#4338ca] transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="/contact"
              onClick={() => trackEvent("cta_click", { cta: "book_demo", location: "navbar" })}
              className="text-sm font-semibold text-[#4338ca] hover:text-[#3730a3] px-3 py-2"
            >
              Book a Demo
            </a>
            <a
              href="/#get-started"
              onClick={(e) => {
                trackEvent("cta_click", { cta: "start_free_trial", location: "navbar" });
                handleNavClick(e, "/#get-started");
              }}
              className="btn-primary text-sm px-4 py-2"
            >
              Start Free Trial
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden p-2 text-slate-600 hover:text-[#4338ca] transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <HiX size={24} /> : <HiMenu size={24} />}
          </button>
        </nav>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden bg-white border-t border-slate-100 overflow-hidden"
          >
            <div className="container-max py-4 flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="px-3 py-3 text-base font-medium text-slate-700 hover:text-[#4338ca] hover:bg-indigo-50 rounded-lg transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-3 flex flex-col gap-2 border-t border-slate-100 mt-2">
                <a href="/contact" className="btn-secondary w-full justify-center text-sm">
                  Book a Demo
                </a>
                <a
                  href="/#get-started"
                  onClick={(e) => {
                    trackEvent("cta_click", { cta: "start_free_trial", location: "navbar_mobile" });
                    handleNavClick(e, "/#get-started");
                  }}
                  className="btn-primary w-full justify-center text-sm"
                >
                  Start Free Trial
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
