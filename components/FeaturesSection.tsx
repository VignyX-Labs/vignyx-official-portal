"use client";

import { motion, AnimatePresence, useInView } from "framer-motion";
import { useRef, useState } from "react";

const primaryFeatures = [
  {
    icon: "📷",
    title: "AI Label Scanning",
    body: "Point your camera at any medicine box. AI reads the label — name, generic, batch, expiry, MRP — all filled in automatically. No barcode needed. Done in 30 seconds.",
  },
  {
    icon: "🔔",
    title: "WhatsApp Alerts",
    body: "Get alerted on WhatsApp before medicines expire. Low stock? Instant alert. Daily summary every morning.",
  },
  {
    icon: "🔄",
    title: "FIFO Automatic",
    body: "Oldest batch always sells first. Zero configuration needed. Zero expired medicines sitting on your shelf.",
  },
  {
    icon: "💊",
    title: "Smart Billing",
    body: "Scan strip, add to bill. GST calculated automatically. Share bill on WhatsApp or print instantly.",
  },
  {
    icon: "🛒",
    title: "One-tap Ordering",
    body: "Low stock list auto-generated. One tap sends a WhatsApp order directly to your distributor.",
  },
  {
    icon: "📊",
    title: "Reports & Analytics",
    body: "Sales report. Expiry report. Purchase register. Stock ledger. Excel export for your accountant.",
  },
];

const additionalFeatures = [
  {
    icon: "📦",
    title: "Batch & Expiry Tracking",
    body: "Every medicine tracked by batch number and expiry date. Know exactly which batch is on which rack at all times.",
  },
  {
    icon: "🏷️",
    title: "Multi-Category Support",
    body: "Tablets, capsules, syrups, injections, vials, ampoules, drops, powders, ointments — every medicine category handled correctly.",
  },
  {
    icon: "📐",
    title: "Pack Notation",
    body: "Tracks 10×10, 10×15, and nested pack formats automatically. Strips per box, tablets per strip — inventory always in exact units.",
  },
  {
    icon: "🔍",
    title: "Smart Medicine Matching",
    body: "Scan a medicine and VignyX finds it in your stock instantly — even with OCR typos or alternate brand names.",
  },
  {
    icon: "➕",
    title: "Quick Add for New Medicines",
    body: "Medicine not in the database? Add it in seconds from the same scan screen. No interruption to your workflow.",
  },
  {
    icon: "👥",
    title: "Multi-user Access",
    body: "Your staff can log in and manage stock from their own phones. All changes sync in real time.",
  },
  {
    icon: "🏥",
    title: "Godown & Pharmacy Modes",
    body: "Manage a central godown and distribute to multiple pharmacy branches — all from one account.",
  },
  {
    icon: "💰",
    title: "MRP & Margin Tracking",
    body: "Track MRP per strip across batches. Know your margins. Never sell below cost by mistake.",
  },
];

function FeatureCard({ feature, i, isInView }: { feature: typeof primaryFeatures[0]; i: number; isInView: boolean }) {
  return (
    <motion.div
      key={feature.title}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: i * 0.08 }}
      className="group relative bg-white border border-[#e2e8f0] rounded-2xl p-6 hover:border-[#4338ca]/30 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
    >
      <div className="w-12 h-12 bg-gradient-to-br from-indigo-50 to-[#eef2ff] rounded-xl flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform duration-300">
        {feature.icon}
      </div>
      <h3 className="text-[17px] font-bold text-[#0f172a] mb-2">{feature.title}</h3>
      <p className="text-slate-600 text-[15px] leading-relaxed">{feature.body}</p>
      <div className="absolute bottom-0 left-6 right-6 h-0.5 bg-gradient-to-r from-[#4338ca] to-[#6366f1] rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
    </motion.div>
  );
}

export default function FeaturesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [expanded, setExpanded] = useState(false);

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
          <h2 className="section-title mb-4">Everything your medical shop needs</h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            Built specifically for Indian healthcare — not adapted from a foreign product
          </p>
        </motion.div>

        {/* Primary features */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {primaryFeatures.map((feature, i) => (
            <FeatureCard key={feature.title} feature={feature} i={i} isInView={isInView} />
          ))}
        </div>

        {/* Expanded features */}
        <AnimatePresence>
          {expanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
                {additionalFeatures.map((feature, i) => (
                  <FeatureCard key={feature.title} feature={feature} i={i} isInView={expanded} />
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Toggle button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="text-center mt-12"
        >
          <button
            onClick={() => setExpanded((v) => !v)}
            className="btn-primary px-8 py-3.5 text-base shadow-lg shadow-indigo-100"
          >
            {expanded ? "Show Less ↑" : `See All Features (${primaryFeatures.length + additionalFeatures.length} total) →`}
          </button>
        </motion.div>
      </div>
    </section>
  );
}
