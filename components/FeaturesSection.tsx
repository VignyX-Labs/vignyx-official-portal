"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { trackEvent } from "@/lib/analytics";

const features = [
  {
    icon: "📷",
    title: "Scan & Stock In",
    body: "Scan the barcode, or snap a photo if there isn't one. Batch number and expiry date auto-fill. Select rack. Done in 30 seconds.",
  },
  {
    icon: "🔔",
    title: "WhatsApp Alerts",
    body: "30 days before expiry, WhatsApp fires. Low stock? Instant alert. Morning digest every day at 8 AM.",
  },
  {
    icon: "🔄",
    title: "FIFO Automatic",
    body: "Oldest batch always sells first. Zero configuration needed. Zero expired medicines.",
  },
  {
    icon: "💊",
    title: "Smart Billing",
    body: "Scan strip, add to bill. GST calculated automatically. Share bill on WhatsApp instantly.",
  },
  {
    icon: "🛒",
    title: "One-tap Ordering",
    body: "Low stock list auto-generated. One tap sends the order — approve it, and check it off as it arrives, with mismatches flagged before you pay.",
  },
  {
    icon: "📊",
    title: "Reports & Analytics",
    body: "Sales report. Expiry report. Purchase register. ABC analysis. Export to Excel, or share a PDF on WhatsApp in one tap.",
  },
  {
    icon: "🔎",
    title: "Never Lose a Sale Silently",
    body: "When a medicine isn't in stock, VignyX logs it and shows you exactly what you're losing — so it's back on your shelf before the next customer asks.",
  },
  {
    icon: "🗂️",
    title: "Ready for Inspection, Always",
    body: "Controlled-medicine sales are recorded exactly the way the law requires, so you're never scrambling to pull records together.",
  },
  {
    icon: "📉",
    title: "Dead Stock Alerts",
    body: "Flags stagnant, slow-moving stock automatically, so you can recover blocked capital before it becomes a total loss.",
  },
  {
    icon: "✅",
    title: "Verified Medicine Database",
    body: "Every medicine is backed by a government-aligned drug database, so product details are always accurate.",
  },
  {
    icon: "🔁",
    title: "Smart Substitute Suggestions",
    body: "When a medicine is out of stock, instantly suggests the correct alternate brand so you never lose the sale.",
  },
  {
    icon: "📦",
    title: "Delivery Shortage Alerts",
    body: "Checks supplier invoices against what's actually delivered and flags shortages automatically, before you pay.",
  },
  {
    icon: "🧾",
    title: "Prescription to Bill, Instantly",
    body: "Show the prescription, and the bill is ready — medicines added, stock updated, nothing typed by hand. Faster billing, zero manual entry.",
  },
];

export default function FeaturesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="section-padding bg-white" id="features">
      <div className="container-max" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-indigo-50 text-[#4338ca] text-sm font-semibold px-4 py-2 rounded-full mb-4">
            Product Features
          </div>
          <h2 className="section-title mb-4">
            Everything your medical shop needs
          </h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            Built specifically for Indian healthcare — not adapted from a foreign product
          </p>
        </motion.div>

        {/* Feature grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group relative bg-white border border-[#e2e8f0] rounded-2xl p-6 hover:border-[#4338ca]/30 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              {/* Icon */}
              <div className="w-12 h-12 bg-gradient-to-br from-indigo-50 to-[#eef2ff] rounded-xl flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>

              {/* Content */}
              <h3 className="text-[17px] font-bold text-[#0f172a] mb-2">
                {feature.title}
              </h3>
              <p className="text-slate-600 text-[15px] leading-relaxed">
                {feature.body}
              </p>

              {/* Hover accent line */}
              <div className="absolute bottom-0 left-6 right-6 h-0.5 bg-gradient-to-r from-[#4338ca] to-[#6366f1] rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="text-center mt-12"
        >
          <button
            onClick={() => {
              trackEvent("cta_click", { cta: "get_early_access", location: "features" });
              document.querySelector("#early-access")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="btn-primary px-8 py-3.5 text-base shadow-lg shadow-indigo-100"
          >
            See All Features →
          </button>
        </motion.div>
      </div>
    </section>
  );
}
