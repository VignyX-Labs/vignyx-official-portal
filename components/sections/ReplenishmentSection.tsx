"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const steps = [
  { icon: "📉", label: "Low stock detected" },
  { icon: "🧮", label: "VignyX calculates need" },
  { icon: "🚚", label: "Checks incoming stock" },
  { icon: "🏬", label: "Checks selected Godown availability" },
  { icon: "🔢", label: "Suggests quantity" },
  { icon: "📝", label: "Create Stock Request" },
  { icon: "✅", label: "Godown fulfills" },
  { icon: "📦", label: "Dispatch" },
  { icon: "🏪", label: "Branch receives" },
  { icon: "🔄", label: "Stock updated" },
];

export default function ReplenishmentSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="section-padding bg-white" id="replenishment">
      <div className="container-max" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 bg-indigo-50 text-[#4338ca] text-sm font-semibold px-4 py-2 rounded-full mb-4">
            Branch Replenishment
          </div>
          <h2 className="section-title mb-4">
            From low stock to a replenished shelf.
          </h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            When a branch runs low, VignyX doesn&apos;t just alert — it
            suggests how much to request, and from where.
          </p>
        </motion.div>

        {/* Flow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-10"
        >
          {steps.map((step, i) => (
            <div key={step.label} className="flex items-center gap-3 sm:gap-4">
              <div className="flex flex-col items-center gap-2 bg-[#f8fafc] border border-[#e2e8f0] rounded-xl px-4 py-3 w-[110px] sm:w-[124px] text-center">
                <span className="text-xl">{step.icon}</span>
                <span className="text-[12px] font-semibold text-[#0f172a] leading-tight">
                  {step.label}
                </span>
              </div>
              {i < steps.length - 1 && (
                <span className="text-slate-300 hidden sm:block" aria-hidden="true">
                  →
                </span>
              )}
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="max-w-2xl mx-auto bg-indigo-50 border border-indigo-100 rounded-2xl px-6 py-5 text-center"
        >
          <p className="text-[#0f172a] text-[15px] leading-relaxed">
            Suggestions weigh current branch stock, your reorder target,
            stock already on the way, and what&apos;s available at the
            Godown you choose to fulfill from.
          </p>
          <p className="text-slate-500 text-[13px] mt-2">
            A person still reviews and creates the request — VignyX suggests, it doesn&apos;t move stock on its own.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
