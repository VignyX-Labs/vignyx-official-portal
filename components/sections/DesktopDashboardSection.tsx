"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import DesktopMockup from "@/components/DesktopMockup";
import { trackEvent } from "@/lib/analytics";

const points = [
  {
    icon: "🏬",
    title: "See every branch at once",
    body: "Running more than one shop? Switch between branches, or view them all together — stock, sales, and staff, side by side.",
  },
  {
    icon: "👥",
    title: "Add staff in seconds",
    body: "Create a login for each staff member right from the dashboard. Their password reaches them on WhatsApp instantly.",
  },
  {
    icon: "✅",
    title: "Approve before it happens",
    body: "Orders and stock movements wait for your approval — nothing leaves or arrives without you knowing.",
  },
  {
    icon: "📊",
    title: "Reports, ready to send",
    body: "Pull up any report and send it straight to your accountant — an Excel sheet, or a PDF on WhatsApp.",
  },
];

export default function DesktopDashboardSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="section-padding bg-[#f8fafc]" id="dashboard">
      <div className="container-max" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Copy */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 bg-indigo-50 text-[#4338ca] text-sm font-semibold px-4 py-2 rounded-full mb-4">
                🖥️ Web Dashboard
              </div>
              <h2 className="section-title mb-4">
                Run the counter. Control the business.
              </h2>
              <p className="section-subtitle max-w-xl mb-10">
                Your staff bills at the counter on phone or computer. You see everything — every branch, every bill, every rupee owed — from one screen, anywhere.
              </p>
            </motion.div>

            <div className="space-y-7">
              {points.map((point, i) => (
                <motion.div
                  key={point.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.15 + i * 0.12 }}
                  className="flex items-start gap-4"
                >
                  <div className="w-11 h-11 flex-shrink-0 bg-white border border-[#e2e8f0] rounded-xl flex items-center justify-center text-xl">
                    {point.icon}
                  </div>
                  <div>
                    <h3 className="text-[16px] font-bold text-[#0f172a] mb-1">
                      {point.title}
                    </h3>
                    <p className="text-slate-600 text-[14.5px] leading-relaxed">
                      {point.body}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="flex flex-col sm:flex-row gap-3 mt-10"
            >
              <button
                onClick={() => {
                  trackEvent("cta_click", { cta: "start_free_trial", location: "desktop_dashboard" });
                  document.querySelector("#get-started")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="btn-primary px-8 py-3.5 text-base shadow-lg shadow-indigo-100 justify-center"
              >
                Start Free Trial
              </button>
              <a
                href="/contact"
                onClick={() => trackEvent("cta_click", { cta: "book_demo", location: "desktop_dashboard" })}
                className="btn-secondary px-8 py-3.5 text-base justify-center"
              >
                Book a Demo
              </a>
            </motion.div>
          </div>

          {/* Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <DesktopMockup />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
