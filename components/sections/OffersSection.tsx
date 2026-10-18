"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { launchOffers } from "@/lib/data/plans";

export default function OffersSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="section-padding bg-white" id="offers">
      <div className="container-max" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="relative bg-gradient-to-br from-[#eef2ff] to-[#f8fafc] border border-indigo-100 rounded-3xl p-8 sm:p-12 overflow-hidden"
        >
          <div className="absolute -top-16 -right-16 w-56 h-56 bg-[#4338ca]/5 rounded-full" aria-hidden="true" />
          <div className="absolute -bottom-16 -left-16 w-56 h-56 bg-[#6366f1]/5 rounded-full" aria-hidden="true" />

          <div className="relative text-center mb-10">
            <div className="inline-flex items-center gap-2 bg-white border border-indigo-100 text-[#4338ca] text-sm font-semibold px-4 py-2 rounded-full mb-4">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              Current offers
            </div>
            <h2 className="section-title mb-4">More reasons to switch today</h2>
            <p className="section-subtitle max-w-2xl mx-auto">
              Try VignyX at no cost, bring your data across for free, and lock in your price.
            </p>
          </div>

          <div className="relative grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {launchOffers.map((offer, i) => (
              <motion.div
                key={offer.title}
                initial={{ opacity: 0, y: 24 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.15 + i * 0.1 }}
                className="bg-white border border-[#e2e8f0] rounded-2xl p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-indigo-50 to-[#eef2ff] rounded-xl flex items-center justify-center text-2xl mb-4">
                  {offer.icon}
                </div>
                <h3 className="text-[16px] font-bold text-[#0f172a] mb-2">{offer.title}</h3>
                <p className="text-slate-600 text-[14px] leading-relaxed">{offer.body}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
