"use client";

import { motion } from "framer-motion";
import { trackEvent } from "@/lib/analytics";

const trustBadges = [
  { icon: "🏥", label: "Made for Indian Pharmacies" },
  { icon: "🔐", label: "Encrypted — Data Never Shared" },
  { icon: "⚡", label: "3-Minute Setup" },
  { icon: "📱", label: "Android Ready" },
  { icon: "☁️", label: "Cloud Backup" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" },
  }),
};

export default function HeroSection() {
  const handleScroll = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative pt-28 pb-20 lg:pt-36 lg:pb-28 overflow-hidden bg-white" id="hero">
      {/* Background mesh gradient */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
      >
        <div className="absolute top-0 left-0 right-0 h-[600px] bg-gradient-to-br from-[#eef2ff] via-white to-white opacity-80" />
        <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-[#4338ca] opacity-[0.04] rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-10 w-[400px] h-[400px] bg-[#6366f1] opacity-[0.05] rounded-full blur-3xl" />
      </div>

      <div className="container-max relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left content */}
          <div>
            {/* Pre-headline badge */}
            <motion.div
              custom={0}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="inline-flex items-center gap-2 bg-indigo-50 border border-indigo-100 text-[#4338ca] text-sm font-semibold px-4 py-2 rounded-full mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-[#4338ca] animate-pulse" />
              Early Access Open — August 2026 Launch
            </motion.div>

            {/* Headline */}
            <motion.h1
              custom={1}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="text-5xl sm:text-6xl lg:text-[64px] font-bold text-[#0f172a] leading-[1.05] tracking-tight mb-6"
            >
              Run Your Entire Pharmacy
              <br />
              <span className="text-[#4338ca]">Operation.</span> From One System.
            </motion.h1>

            {/* Sub-headline */}
            <motion.p
              custom={2}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="text-lg sm:text-xl text-slate-600 leading-relaxed mb-8 max-w-lg"
            >
              Billing, inventory, expiry management, procurement, Godown
              operations and branch replenishment — connected from purchase
              to sale. Built for single pharmacies, multi-branch chains, and
              central Godowns across India.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              custom={3}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="flex flex-col sm:flex-row gap-4 mb-10"
            >
              <button
                onClick={() => {
                  trackEvent("cta_click", { cta: "get_early_access", location: "hero" });
                  handleScroll("#early-access");
                }}
                className="btn-primary text-base px-7 py-3.5 font-semibold shadow-lg shadow-indigo-200 w-full sm:w-auto justify-center"
              >
                Get Early Access
              </button>
            </motion.div>

            {/* Trust badges */}
            <motion.div
              custom={4}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="flex flex-wrap gap-4"
            >
              {trustBadges.map((badge) => (
                <div
                  key={badge.label}
                  className="flex items-center gap-2 text-sm text-slate-600 font-medium"
                >
                  <span>{badge.icon}</span>
                  <span>{badge.label}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right — App teaser (full walkthrough lives in "See it in action" below) */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative w-[280px] sm:w-[320px] mx-auto">
              <div className="bg-[#0f172a] rounded-[36px] p-3 shadow-2xl">
                <div className="bg-gradient-to-br from-[#4338ca] to-[#6366f1] rounded-[28px] overflow-hidden aspect-[9/16] flex flex-col items-center justify-center px-8 text-center">
                  <div className="w-16 h-16 bg-white/15 rounded-2xl flex items-center justify-center text-3xl mb-5">
                    💊
                  </div>
                  <h3 className="text-white text-xl font-bold mb-2">
                    Sharma Medical Store
                  </h3>
                  <p className="text-indigo-100 text-sm leading-relaxed">
                    Stock, billing and expiry alerts — all from your phone.
                  </p>
                </div>
              </div>
              {/* Floating stat card */}
              <div className="absolute -bottom-4 -right-4 sm:-right-8 bg-white rounded-2xl shadow-xl border border-slate-100 p-3">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-green-50 rounded-lg flex items-center justify-center">
                    <span className="text-lg">📈</span>
                  </div>
                  <div>
                    <p className="text-[10px] text-slate-500 font-medium">Saved this month</p>
                    <p className="text-sm font-bold text-green-600">₹4,200</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
