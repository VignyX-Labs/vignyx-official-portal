"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import DashboardMockup from "./DashboardMockup";
import { trackEvent } from "@/lib/analytics";

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
    title: "Add your medicines",
    body: "Scan the barcode, or snap a photo if there isn't one. Item, batch and expiry auto-fill instantly.",
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
            📷 See It In Action
          </div>
          <h2 className="section-title mb-4">Up and running in 3 minutes</h2>
          <p className="section-subtitle max-w-xl mx-auto">
            No training required. No complicated setup. Just scan and go.
          </p>
        </motion.div>

        {/* Steps + live demo */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Steps */}
          <div className="space-y-10">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                className="flex items-start gap-5"
              >
                {/* Step number + icon circle */}
                <div className="relative flex-shrink-0 z-10">
                  <div className="w-16 h-16 bg-white border-2 border-[#4338ca] rounded-2xl flex items-center justify-center text-3xl shadow-lg shadow-indigo-100 relative">
                    {step.icon}
                  </div>
                  <span className="absolute -top-2.5 -right-2.5 w-7 h-7 bg-[#4338ca] text-white text-xs font-bold rounded-full flex items-center justify-center z-20 ring-4 ring-[#f8fafc]">
                    {step.number}
                  </span>
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-xl font-bold text-[#0f172a] mb-2">
                    {step.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed text-[15px] max-w-sm">
                    {step.body}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Live demo mockup */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex justify-center"
          >
            <DashboardMockup />
          </motion.div>
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
              trackEvent("cta_click", { cta: "get_early_access", location: "how_it_works" });
              document.querySelector("#early-access")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="btn-primary px-7 py-3.5 text-base flex-shrink-0 shadow-lg shadow-indigo-100"
          >
            Get Early Access
          </button>
        </motion.div>
      </div>
    </section>
  );
}
