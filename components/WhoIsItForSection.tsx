"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";

const customerTypes = [
  {
    id: "medical",
    icon: "🏪",
    title: "Medical / Pharmacy Stores",
    points: [
      "Single shop management",
      "Quick billing at counter",
      "Expiry tracking",
      "WhatsApp alerts",
    ],
  },
  {
    id: "hospital",
    icon: "🏥",
    title: "Hospital Pharmacies",
    points: [
      "Multi-department management",
      "Ward supply tracking",
      "Issue slips",
      "Consumption reports",
    ],
  },
  {
    id: "clinic",
    icon: "💉",
    title: "Nursing Homes & Clinics",
    points: [
      "Simple inventory",
      "Expiry management",
      "GST billing",
      "Quick setup",
    ],
  },
  {
    id: "distributor",
    icon: "🚛",
    title: "Pharma Distributors",
    points: [
      "Route & delivery planning",
      "GST invoices, done right",
      "Track dues automatically",
      "Retailer order management",
    ],
  },
];

export default function WhoIsItForSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [activeId, setActiveId] = useState("medical");

  return (
    <section className="section-padding bg-white" id="about">
      <div className="container-max" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="section-title mb-4">
            Built for every healthcare business
          </h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            Whether you run a single medical shop or a hospital pharmacy chain, VignyX scales with you.
          </p>
        </motion.div>

        {/* Cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {customerTypes.map((type, i) => {
            const isActive = type.id === activeId;
            return (
              <motion.div
                key={type.id}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                onClick={() => setActiveId(type.id)}
                className={`relative rounded-2xl p-6 border transition-all duration-300 cursor-pointer ${
                  isActive
                    ? "bg-[#4338ca] border-[#4338ca] shadow-xl shadow-indigo-200"
                    : "bg-white border-[#e2e8f0] hover:border-[#4338ca]/30 hover:shadow-md hover:-translate-y-1"
                }`}
              >
                {/* Icon */}
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-4 ${
                    isActive ? "bg-white/20" : "bg-indigo-50"
                  }`}
                >
                  {type.icon}
                </div>

                {/* Title */}
                <h3
                  className={`text-base font-bold mb-4 ${
                    isActive ? "text-white" : "text-[#0f172a]"
                  }`}
                >
                  {type.title}
                </h3>

                {/* Points */}
                <ul className="space-y-2">
                  {type.points.map((point) => (
                    <li
                      key={point}
                      className={`flex items-start gap-2 text-sm ${
                        isActive ? "text-indigo-100" : "text-slate-600"
                      }`}
                    >
                      <span
                        className={`mt-0.5 text-xs ${
                          isActive ? "text-indigo-200" : "text-[#4338ca]"
                        }`}
                      >
                        ✓
                      </span>
                      {point}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>

        {/* Footer note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center text-slate-500 text-sm mt-8"
        >
          Click on any card to explore.
        </motion.p>
      </div>
    </section>
  );
}
