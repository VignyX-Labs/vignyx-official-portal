"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { trackEvent } from "@/lib/analytics";
import { productModules } from "@/lib/data/modules";

export default function FeaturesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [activeId, setActiveId] = useState(productModules[0].id);
  const active = productModules.find((m) => m.id === activeId) ?? productModules[0];

  return (
    <section className="section-padding bg-white" id="features">
      <div className="container-max" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-indigo-50 text-[#4338ca] text-sm font-semibold px-4 py-2 rounded-full mb-4">
            The Platform
          </div>
          <h2 className="section-title mb-4">
            Everything your business runs on, in one place
          </h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            From the billing counter to the godown to the distributor — eight connected modules,
            built for how Indian pharma actually works.
          </p>
        </motion.div>

        {/* Module tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          role="tablist"
          aria-label="Product modules"
          className="flex lg:flex-wrap lg:justify-center gap-2 overflow-x-auto no-scrollbar -mx-4 px-4 pb-2 mb-10"
        >
          {productModules.map((m) => {
            const selected = m.id === activeId;
            return (
              <button
                key={m.id}
                role="tab"
                aria-selected={selected}
                onClick={() => {
                  setActiveId(m.id);
                  trackEvent("feature_module", { module: m.id });
                }}
                className={`flex items-center gap-2 whitespace-nowrap px-4 py-2.5 rounded-xl border text-sm font-semibold transition-all duration-200 ${
                  selected
                    ? "bg-[#4338ca] border-[#4338ca] text-white shadow-lg shadow-indigo-200"
                    : "bg-white border-[#e2e8f0] text-slate-600 hover:border-[#4338ca]/40 hover:text-[#4338ca]"
                }`}
              >
                <span aria-hidden="true">{m.icon}</span>
                {m.label}
              </button>
            );
          })}
        </motion.div>

        {/* Active module */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active.id}
            role="tabpanel"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3 }}
            className="grid lg:grid-cols-3 gap-6"
          >
            {/* Summary card */}
            <div className="relative bg-gradient-to-br from-[#4338ca] to-[#6366f1] rounded-2xl p-8 text-white overflow-hidden">
              <div className="absolute -bottom-12 -right-12 w-44 h-44 bg-white/10 rounded-full" aria-hidden="true" />
              <div className="relative">
                <div className="w-14 h-14 bg-white/15 rounded-2xl flex items-center justify-center text-3xl mb-6">
                  {active.icon}
                </div>
                <p className="text-indigo-200 text-xs font-bold uppercase tracking-wider mb-2">
                  {active.label}
                </p>
                <h3 className="text-2xl font-bold leading-snug mb-3">{active.headline}</h3>
                <p className="text-indigo-100 text-[15px] leading-relaxed mb-8">{active.summary}</p>
                <div className="inline-flex items-center gap-2 bg-white/15 border border-white/20 text-white text-xs font-semibold px-3 py-1.5 rounded-full">
                  For: {active.audience}
                </div>
              </div>
            </div>

            {/* Feature cards */}
            <div className="lg:col-span-2 grid sm:grid-cols-2 gap-4">
              {active.features.map((f, i) => (
                <motion.div
                  key={f.title}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: i * 0.05 }}
                  className="group relative bg-white border border-[#e2e8f0] rounded-2xl p-5 hover:border-[#4338ca]/30 hover:shadow-lg transition-all duration-300"
                >
                  <h4 className="text-[15px] font-bold text-[#0f172a] mb-1.5 flex items-start gap-2">
                    <span className="text-[#4338ca] mt-0.5" aria-hidden="true">✓</span>
                    {f.title}
                  </h4>
                  <p className="text-slate-600 text-[14px] leading-relaxed pl-5">{f.body}</p>
                  <div className="absolute bottom-0 left-5 right-5 h-0.5 bg-gradient-to-r from-[#4338ca] to-[#6366f1] rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
