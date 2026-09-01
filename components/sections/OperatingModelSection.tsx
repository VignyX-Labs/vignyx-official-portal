"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const capabilities = [
  "Multiple pharmacies",
  "Multiple Godowns",
  "Group-wide overview",
  "Location-specific inventory",
  "Cross-location stock visibility",
  "Central procurement",
  "Branch replenishment",
  "Controlled stock movement",
  "Team & location access",
];

const growthSteps = [
  "Single Pharmacy",
  "Add Another Branch",
  "Add a Godown",
  "Centralize Procurement",
  "Operate as a Chain",
];

export default function OperatingModelSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="section-padding bg-[#f8fafc]" id="operating-model">
      <div className="container-max" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 bg-indigo-50 text-[#4338ca] text-sm font-semibold px-4 py-2 rounded-full mb-4">
            The Operating Model
          </div>
          <h2 className="section-title mb-4">One system. Every location.</h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            Whether you run a single counter or a chain with a central
            Godown, VignyX runs on the same connected system.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16">
          {/* Diagram */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-white border border-[#e2e8f0] rounded-2xl p-8 sm:p-10"
          >
            <div className="flex flex-col items-center">
              <div className="bg-[#4338ca] text-white text-sm font-bold px-5 py-2.5 rounded-xl shadow-md">
                VignyX HQ
              </div>
              <div className="w-px h-6 bg-[#cbd5e1]" />
              <div className="flex items-start gap-6 sm:gap-10">
                {["Godown", "Godown"].map((label, i) => (
                  <div key={i} className="flex flex-col items-center">
                    <div className="border border-[#4338ca]/30 bg-indigo-50 text-[#4338ca] text-xs font-bold px-4 py-2 rounded-lg">
                      {label}
                    </div>
                    {i === 0 && (
                      <>
                        <div className="w-px h-6 bg-[#cbd5e1]" />
                        <div className="flex items-start gap-3 flex-wrap justify-center">
                          {["Branch", "Branch", "Branch"].map((b, j) => (
                            <div
                              key={j}
                              className="border border-[#e2e8f0] bg-[#f8fafc] text-slate-600 text-xs font-semibold px-3 py-1.5 rounded-lg"
                            >
                              {b}
                            </div>
                          ))}
                        </div>
                      </>
                    )}
                  </div>
                ))}
              </div>
              <p className="text-xs text-slate-400 mt-6 text-center max-w-xs">
                Example structure — Godowns and branches are added as your
                business grows, with no fixed limit on shape.
              </p>
            </div>
          </motion.div>

          {/* Capability list */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="grid sm:grid-cols-2 gap-3">
              {capabilities.map((cap) => (
                <div
                  key={cap}
                  className="flex items-center gap-2.5 bg-white border border-[#e2e8f0] rounded-xl px-4 py-3"
                >
                  <span className="text-[#4338ca] text-sm">✓</span>
                  <span className="text-[14px] font-medium text-[#0f172a]">
                    {cap}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Growth story strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-white border border-[#e2e8f0] rounded-2xl p-8 text-center"
        >
          <h3 className="text-xl font-bold text-[#0f172a] mb-1">
            Start with one pharmacy. Grow without changing software.
          </h3>
          <p className="text-slate-500 text-sm mb-6 max-w-lg mx-auto">
            VignyX isn&apos;t only for chains — it&apos;s the same system from
            your first counter to your last branch.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            {growthSteps.map((step, i) => (
              <div key={step} className="flex items-center gap-2 sm:gap-3">
                <span className="bg-indigo-50 text-[#4338ca] text-xs sm:text-sm font-semibold px-3 py-2 rounded-lg whitespace-nowrap">
                  {step}
                </span>
                {i < growthSteps.length - 1 && (
                  <span className="text-slate-300" aria-hidden="true">
                    →
                  </span>
                )}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
