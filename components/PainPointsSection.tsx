"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const painPoints = [
  {
    icon: "💊",
    iconBg: "bg-red-50",
    iconBorder: "border-red-100",
    headline: "Medicines expire on your shelf",
    body: "Every month ₹3,000 – ₹5,000 worth of medicines expire before you can sell or return them. No warning. Pure loss.",
    accentColor: "text-red-600",
  },
  {
    icon: "📋",
    iconBg: "bg-orange-50",
    iconBorder: "border-orange-100",
    headline: "Manual registers. Human errors.",
    body: "Writing stock in a register at midnight. Wrong batch numbers. Wrong expiry dates. Mistakes that cost you money.",
    accentColor: "text-orange-600",
  },
  {
    icon: "😓",
    iconBg: "bg-yellow-50",
    iconBorder: "border-yellow-100",
    headline: "Customer walks in, stock is gone",
    body: "Medicine finishes without warning. Customer goes to competitor. 10–15 sales lost every month.",
    accentColor: "text-yellow-600",
  },
];

export default function PainPointsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="section-padding bg-[#f8fafc]" id="pain-points">
      <div className="container-max" ref={ref}>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="section-title mb-4">Sound familiar?</h2>
          <p className="section-subtitle max-w-xl mx-auto">
            Every medical shop owner faces these problems. VignyX solves all three — automatically.
          </p>
        </motion.div>

        {/* Cards grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {painPoints.map((point, i) => (
            <motion.div
              key={point.headline}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="card group"
            >
              <div
                className={`w-14 h-14 ${point.iconBg} border ${point.iconBorder} rounded-2xl flex items-center justify-center text-2xl mb-5 group-hover:scale-110 transition-transform duration-300`}
              >
                {point.icon}
              </div>
              <h3 className={`text-lg font-bold ${point.accentColor} mb-3`}>
                {point.headline}
              </h3>
              <p className="text-slate-600 leading-relaxed text-[15px]">
                {point.body}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bottom callout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-3 bg-indigo-50 border border-indigo-100 rounded-2xl px-6 py-4">
            <span className="text-2xl">✅</span>
            <p className="text-[#4338ca] font-semibold text-base">
              VignyX eliminates all three — automatically, with zero effort.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
