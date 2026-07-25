"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const stats = [
  {
    icon: "🏥",
    value: "Built for India",
    label: "Designed from the ground up for Indian healthcare regulations, GST, and WhatsApp workflows.",
  },
  {
    icon: "🚀",
    value: "August 2026",
    label: "Official product launch. Early access opens now — limited to the first 20 shops.",
  },
  {
    icon: "📍",
    value: "All of India",
    label: "Open to medical shops anywhere in India.",
  },
  {
    icon: "💰",
    value: "₹33/day",
    label: "Less than ₹33 a day. That's less than a pack of Dolo 650. For complete peace of mind.",
  },
];

export default function StatsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="section-padding bg-white" id="stats">
      <div className="container-max" ref={ref}>
        {/* Stats grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.value}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="card text-center"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-indigo-50 to-[#eef2ff] rounded-xl flex items-center justify-center text-2xl mb-4 mx-auto">
                {stat.icon}
              </div>
              <div className="text-xl font-bold text-[#4338ca] mb-2">
                {stat.value}
              </div>
              <p className="text-slate-600 text-sm leading-relaxed">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Social proof placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="relative bg-gradient-to-br from-[#eef2ff] to-[#f8fafc] border border-indigo-100 rounded-2xl p-10 text-center overflow-hidden"
        >
          {/* Decorative background circles */}
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#4338ca]/5 rounded-full" />
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-[#6366f1]/5 rounded-full" />

          <div className="relative">
            <div className="flex justify-center gap-3 mb-6">
              {["🏪", "🏥", "💊", "🚑"].map((emoji, i) => (
                <motion.div
                  key={i}
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ delay: 0.6 + i * 0.1, type: "spring" }}
                  className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-2xl shadow-sm border border-slate-100"
                >
                  {emoji}
                </motion.div>
              ))}
            </div>
            <h3 className="text-2xl font-bold text-[#0f172a] mb-3">
              Be our first customer.
            </h3>
            <p className="text-slate-600 text-lg max-w-md mx-auto mb-6">
              Your feedback shapes the product. Early adopters get lifetime discounts and direct access to our founding team.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-slate-500">
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 bg-green-400 rounded-full" />
                All of India — Accepting signups
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 bg-indigo-400 rounded-full" />
                20 shops — Limited spots left
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
