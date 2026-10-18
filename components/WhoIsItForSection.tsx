"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const accountTypes = [
  {
    id: "pharmacy",
    icon: "🏪",
    title: "Retail Pharmacy",
    blurb: "Single medical shops and multi-branch pharmacy chains.",
    points: [
      "Fast GST billing, oldest expiry first",
      "Udhaar, H1 register & missed sales",
      "AI Bill Reader for supplier bills",
      "Branches, transfers & chain inventory",
    ],
  },
  {
    id: "hospital",
    icon: "🏥",
    title: "Hospital Pharmacy",
    blurb: "Hospital pharmacies and nursing homes.",
    points: [
      "Full pharmacy counter & billing",
      "Ward requisitions & issue slips",
      "Department consumption",
      "Audit logs for every movement",
    ],
  },
  {
    id: "warehouse",
    icon: "🏭",
    title: "Warehouse / Godown",
    blurb: "Central stock for your group of shops.",
    points: [
      "Order inbox from your shops",
      "Godown demand across branches",
      "Dispatch, in-transit & receipts",
      "Create and manage shops",
    ],
  },
  {
    id: "distributor",
    icon: "🚚",
    title: "Distributor",
    blurb: "Pharma distributors and stockists.",
    points: [
      "Retailer orders & GST invoices",
      "Schemes, routes & van sales",
      "Returns, payments & compliance",
      "Retailers order from you free",
    ],
  },
  {
    id: "cnf",
    icon: "📦",
    title: "C&F Agent",
    blurb: "Carrying & forwarding agents.",
    points: [
      "Orders, inward & dispatch",
      "Claims & schemes",
      "Reconciliation & invoice intake",
      "Demand intelligence",
    ],
  },
  {
    id: "pharma",
    icon: "🧪",
    title: "Pharma Company",
    blurb: "Manufacturers and brand owners.",
    points: [
      "Connected view across C&Fs & distributors",
      "Stock tracing down the chain",
      "Work with partners on one platform",
    ],
  },
];

export default function WhoIsItForSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="section-padding bg-white" id="solutions">
      <div className="container-max" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 bg-indigo-50 text-[#4338ca] text-sm font-semibold px-4 py-2 rounded-full mb-4">
            Solutions
          </div>
          <h2 className="section-title mb-4">
            One platform for the whole medicine supply chain
          </h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            Six account types, one connected cloud. Every business gets the tools built for its
            job — and they all talk to each other.
          </p>
        </motion.div>

        {/* Chain strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="hidden md:flex items-center justify-center gap-2 mb-12 text-sm font-semibold"
          aria-hidden="true"
        >
          {["Pharma Company", "C&F Agent", "Distributor", "Warehouse", "Pharmacy & Hospital"].map((step, i, arr) => (
            <div key={step} className="flex items-center gap-2">
              <span className="bg-indigo-50 text-[#4338ca] px-3 py-2 rounded-lg whitespace-nowrap">{step}</span>
              {i < arr.length - 1 && <span className="text-slate-300">→</span>}
            </div>
          ))}
        </motion.div>

        {/* Cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {accountTypes.map((type, i) => (
            <motion.div
              key={type.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + i * 0.08 }}
              className="group relative rounded-2xl p-6 border bg-white border-[#e2e8f0] hover:bg-[#4338ca] hover:border-[#4338ca] hover:shadow-xl hover:shadow-indigo-200 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl bg-indigo-50 group-hover:bg-white/20 transition-colors">
                  {type.icon}
                </div>
                <h3 className="text-lg font-bold text-[#0f172a] group-hover:text-white transition-colors">
                  {type.title}
                </h3>
              </div>
              <p className="text-sm text-slate-500 group-hover:text-indigo-200 mb-4 transition-colors">
                {type.blurb}
              </p>
              <ul className="space-y-2">
                {type.points.map((point) => (
                  <li
                    key={point}
                    className="flex items-start gap-2 text-sm text-slate-600 group-hover:text-indigo-100 transition-colors"
                  >
                    <span className="mt-0.5 text-xs text-[#4338ca] group-hover:text-indigo-200">✓</span>
                    {point}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
