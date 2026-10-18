"use client";

import { motion } from "framer-motion";
import { trackEvent } from "@/lib/analytics";

const trustBadges = [
  { icon: "✨", label: "AI Bill Reader" },
  { icon: "🧾", label: "GST & GSTR-1 Ready" },
  { icon: "💬", label: "WhatsApp Bills & Alerts" },
  { icon: "☁️", label: "Cloud · Android & Web" },
  { icon: "🔐", label: "Encrypted — Data Never Shared" },
];

const audiences = ["Pharmacies", "Chains", "Hospitals", "Godowns", "Distributors", "C&F", "Pharma"];

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
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-0 left-0 right-0 h-[600px] bg-gradient-to-br from-[#eef2ff] via-white to-white opacity-80" />
        <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-[#4338ca] opacity-[0.06] rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-10 w-[400px] h-[400px] bg-[#6366f1] opacity-[0.05] rounded-full blur-3xl" />
      </div>

      <div className="container-max relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left content */}
          <div>
            <motion.div
              custom={0}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="inline-flex items-center gap-2 bg-indigo-50 border border-indigo-100 text-[#4338ca] text-sm font-semibold px-4 py-2 rounded-full mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              AI-powered pharmacy & pharma cloud — built in India
            </motion.div>

            <motion.h1
              custom={1}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="text-5xl sm:text-6xl lg:text-[64px] font-bold text-[#0f172a] leading-[1.05] tracking-tight mb-6"
            >
              Run your entire pharmacy business.
              <br />
              <span className="bg-gradient-to-r from-[#4338ca] to-[#6366f1] bg-clip-text text-transparent">
                From one intelligent cloud.
              </span>
            </motion.h1>

            <motion.p
              custom={2}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="text-lg sm:text-xl text-slate-600 leading-relaxed mb-8 max-w-xl"
            >
              Billing, stock, purchasing, payments and GST — with an AI Bill Reader that turns
              supplier bills into stock in minutes. One connected cloud for pharmacies, chains,
              hospitals, godowns, distributors, C&amp;F agents and pharma companies.
            </motion.p>

            <motion.div
              custom={3}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="flex flex-col sm:flex-row gap-3 mb-4"
            >
              <button
                onClick={() => {
                  trackEvent("cta_click", { cta: "start_free_trial", location: "hero" });
                  handleScroll("#get-started");
                }}
                className="btn-primary text-base px-7 py-3.5 font-semibold shadow-lg shadow-indigo-200 w-full sm:w-auto justify-center"
              >
                Start Free Trial
              </button>
              <a
                href="/contact"
                onClick={() => trackEvent("cta_click", { cta: "book_demo", location: "hero" })}
                className="btn-secondary text-base px-7 py-3.5 font-semibold w-full sm:w-auto justify-center"
              >
                Book a Demo
              </a>
            </motion.div>
            <motion.p
              custom={3}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="text-sm text-slate-500 mb-10"
            >
              First month free · No card needed · Cancel anytime
            </motion.p>

            <motion.div
              custom={4}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="flex flex-wrap gap-x-5 gap-y-3"
            >
              {trustBadges.map((badge) => (
                <div key={badge.label} className="flex items-center gap-2 text-sm text-slate-600 font-medium">
                  <span>{badge.icon}</span>
                  <span>{badge.label}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right — App preview */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative w-[290px] sm:w-[320px] mx-auto">
              <div className="bg-[#0f172a] rounded-[36px] p-3 shadow-2xl shadow-indigo-200">
                <div className="bg-[#f8fafc] rounded-[28px] overflow-hidden aspect-[9/16] flex flex-col">
                  {/* App header */}
                  <div className="bg-gradient-to-br from-[#4338ca] to-[#6366f1] px-5 pt-6 pb-5 text-white">
                    <p className="text-[11px] text-indigo-200">Good morning 👋</p>
                    <p className="text-base font-bold mb-4">Sharma Medical Store</p>
                    <div className="grid grid-cols-3 gap-2">
                      {[
                        { k: "Sales today", v: "₹38.2k" },
                        { k: "Bills", v: "142" },
                        { k: "Low stock", v: "7" },
                      ].map((s) => (
                        <div key={s.k} className="bg-white/15 rounded-xl px-2 py-2">
                          <p className="text-[9px] text-indigo-100">{s.k}</p>
                          <p className="text-sm font-bold">{s.v}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                  {/* Body */}
                  <div className="p-4 space-y-3 flex-1">
                    <div className="bg-white rounded-xl border border-slate-100 p-3 shadow-sm">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-sm">✨</span>
                        <p className="text-[11px] font-bold text-[#0f172a]">Supplier bill read</p>
                      </div>
                      <p className="text-[10px] text-slate-500">24 items · totals match · PO-0127 linked</p>
                      <div className="mt-2 h-1.5 bg-indigo-50 rounded-full overflow-hidden">
                        <div className="h-full w-full bg-gradient-to-r from-[#4338ca] to-[#6366f1]" />
                      </div>
                    </div>
                    <div className="bg-white rounded-xl border border-slate-100 p-3 shadow-sm">
                      <p className="text-[11px] font-bold text-[#0f172a] mb-2">Running low</p>
                      {[
                        { n: "Pan 40 Tab", q: "Order 30" },
                        { n: "Dolo 650 Tab", q: "Order 50" },
                      ].map((r) => (
                        <div key={r.n} className="flex justify-between text-[10px] py-1">
                          <span className="text-slate-600">{r.n}</span>
                          <span className="font-semibold text-[#4338ca]">{r.q}</span>
                        </div>
                      ))}
                    </div>
                    <div className="bg-red-50 rounded-xl border border-red-100 p-3">
                      <p className="text-[11px] font-bold text-red-700">Expiring in 30 days</p>
                      <p className="text-[10px] text-red-500">3 batches · return to supplier</p>
                    </div>
                    <div className="bg-white rounded-xl border border-slate-100 p-3 shadow-sm flex justify-between items-center">
                      <div>
                        <p className="text-[11px] font-bold text-[#0f172a]">Due to distributors</p>
                        <p className="text-[10px] text-slate-500">2 bills due this week</p>
                      </div>
                      <span className="text-[11px] font-bold text-[#0f172a]">₹46,120</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating WhatsApp alert */}
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.1 }}
                className="absolute top-16 -left-6 sm:-left-16 bg-white rounded-2xl shadow-xl border border-slate-100 p-3 max-w-[200px]"
              >
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-green-50 rounded-lg flex items-center justify-center text-lg">💬</div>
                  <div>
                    <p className="text-[10px] text-slate-500 font-medium">WhatsApp alert</p>
                    <p className="text-[11px] font-bold text-[#0f172a]">Azithral 500 is back in stock</p>
                  </div>
                </div>
              </motion.div>

              {/* Floating audiences card */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.3 }}
                className="absolute -bottom-6 -right-4 sm:-right-10 bg-white rounded-2xl shadow-xl border border-slate-100 p-3 max-w-[220px]"
              >
                <p className="text-[10px] text-slate-500 font-medium mb-1.5">One cloud for</p>
                <div className="flex flex-wrap gap-1">
                  {audiences.map((a) => (
                    <span key={a} className="text-[9px] font-semibold bg-indigo-50 text-[#4338ca] px-1.5 py-0.5 rounded">
                      {a}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
