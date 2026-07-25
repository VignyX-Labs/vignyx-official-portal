"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const pillars = [
  {
    icon: "🔐",
    title: "Encrypted cloud storage",
    body: "Built on encrypted cloud infrastructure from day one — your inventory and billing data is protected in transit and at rest.",
  },
  {
    icon: "🔑",
    title: "Secure authentication",
    body: "Every staff login is individually authenticated, so you always know who accessed what and when.",
  },
  {
    icon: "☁️",
    title: "Cloud backup",
    body: "Your data is backed up continuously — a lost phone or a broken counter PC never means lost inventory records.",
  },
  {
    icon: "🧑‍💼",
    title: "Role-based access",
    body: "Designed so owners, pharmacists, and counter staff each see only what's relevant to their role.",
  },
  {
    icon: "🛡️",
    title: "Privacy-first architecture",
    body: "Your shop's data is yours. We never sell or share it — architected with privacy as a first-class requirement, not an afterthought.",
  },
];

export default function SecurityTrustSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="section-padding bg-white" id="security">
      <div className="container-max" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 bg-indigo-50 text-[#4338ca] text-sm font-semibold px-4 py-2 rounded-full mb-4">
            Security & Trust
          </div>
          <h2 className="section-title mb-4">Your data, protected</h2>
          <p className="section-subtitle max-w-xl mx-auto">
            Security isn&apos;t a feature we bolt on later — it&apos;s part of how VignyX is built.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="card"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-indigo-50 to-[#eef2ff] rounded-xl flex items-center justify-center text-2xl mb-4">
                {pillar.icon}
              </div>
              <h3 className="text-[15px] font-bold text-[#0f172a] mb-2">
                {pillar.title}
              </h3>
              <p className="text-slate-600 text-[14px] leading-relaxed">
                {pillar.body}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center text-slate-500 text-sm mt-8"
        >
          VignyX launches August 2026 — built with these principles from day one.
        </motion.p>
      </div>
    </section>
  );
}
