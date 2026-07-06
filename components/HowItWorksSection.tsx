"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const steps = [
  {
    number: "01",
    icon: "📱",
    title: "Create your account",
    body: "Sign up. Enter your shop name. Select number of racks. VignyX sets up your store automatically.",
  },
  {
    number: "02",
    icon: "📷",
    title: "Scan your medicines",
    body: "Point your phone camera at the medicine box. AI reads the label and fills in name, batch number, expiry date, and MRP. No barcode, no typing. Stock added in seconds.",
  },
  {
    number: "03",
    icon: "🔔",
    title: "Relax. VignyX alerts you.",
    body: "WhatsApp alerts for expiry and low stock. Morning digest every day. Never worry about stock again.",
  },
];

export default function HowItWorksSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="section-padding bg-[#f8fafc]" id="how-it-works">
      <div className="container-max" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-green-50 text-green-700 text-sm font-semibold px-4 py-2 rounded-full mb-4">
            ⚡ Quick Setup
          </div>
          <h2 className="section-title mb-4">Up and running in 3 minutes</h2>
          <p className="section-subtitle max-w-xl mx-auto">
            No training required. No complicated setup. Just scan and go.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Connector line — desktop only */}
          <div className="hidden lg:block absolute top-16 left-[calc(16.67%+2rem)] right-[calc(16.67%+2rem)] h-0.5 bg-gradient-to-r from-[#4338ca]/20 via-[#4338ca] to-[#4338ca]/20" />

          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12 relative">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                className="flex flex-col items-center lg:items-center text-center"
              >
                {/* Step number + icon circle */}
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-white border-2 border-[#4338ca] rounded-2xl flex items-center justify-center text-3xl shadow-lg shadow-indigo-100 z-10 relative">
                    {step.icon}
                  </div>
                  <span className="absolute -top-2.5 -right-2.5 w-7 h-7 bg-[#4338ca] text-white text-xs font-bold rounded-full flex items-center justify-center">
                    {step.number}
                  </span>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-[#0f172a] mb-3">
                  {step.title}
                </h3>
                <p className="text-slate-600 leading-relaxed text-[15px] max-w-xs">
                  {step.body}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom callout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-14 bg-white border border-[#e2e8f0] rounded-2xl p-8 flex flex-col sm:flex-row items-center justify-between gap-6"
        >
          <div>
            <h3 className="text-xl font-bold text-[#0f172a] mb-1">
              Ready to get started?
            </h3>
            <p className="text-slate-600">
              First month completely free. No credit card required.
            </p>
          </div>
          <button
            onClick={() => {
              document.querySelector("#early-access")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="btn-primary px-7 py-3.5 text-base flex-shrink-0 shadow-lg shadow-indigo-100"
          >
            Get Early Access — Free
          </button>
        </motion.div>
      </div>
    </section>
  );
}
