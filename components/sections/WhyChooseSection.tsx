"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const benefits = [
  {
    icon: "💰",
    title: "Reduce expiry losses",
    body: "Stop writing off ₹3,000–₹5,000 a month in expired stock. WhatsApp alerts and automatic FEFO (earliest-expiring stock sold first) catch it before it becomes a loss.",
  },
  {
    icon: "📈",
    title: "Prevent stockouts",
    body: "Catch a medicine running low before a customer walks in empty-handed. Low-stock alerts and branch replenishment suggestions fire before the shelf goes empty.",
  },
  {
    icon: "⏱️",
    title: "Save staff time",
    body: "Upload a supplier bill instead of typing it. Bill in seconds instead of minutes. Give your team back hours every week.",
  },
  {
    icon: "🚀",
    title: "Easy onboarding",
    body: "We set up your account with you and can migrate your data from Marg or other software. Your team is billing on day one.",
  },
  {
    icon: "🏷️",
    title: "Pays for itself",
    body: "Plans start at ₹999/month — less than the expiry losses, missed sales and wrong supplier bills VignyX helps you catch.",
  },
  {
    icon: "🏥",
    title: "Built for Indian pharmacies",
    body: "GST billing, WhatsApp workflows, and Indian distributor patterns — designed here, not adapted from abroad.",
  },
];

export default function WhyChooseSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="section-padding bg-white" id="why-choose">
      <div className="container-max" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-indigo-50 text-[#4338ca] text-sm font-semibold px-4 py-2 rounded-full mb-4">
            Why VignyX
          </div>
          <h2 className="section-title mb-4">
            Built to grow your business, not just track your stock
          </h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            Every feature exists to solve one of these six problems for Indian medical shops.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, i) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="card"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-indigo-50 to-[#eef2ff] rounded-xl flex items-center justify-center text-2xl mb-4">
                {benefit.icon}
              </div>
              <h3 className="text-[17px] font-bold text-[#0f172a] mb-2">
                {benefit.title}
              </h3>
              <p className="text-slate-600 text-[15px] leading-relaxed">
                {benefit.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
