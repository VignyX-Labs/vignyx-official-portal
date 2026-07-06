"use client";

import { motion, AnimatePresence, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

type Phase = "scanning" | "reading" | "confirmed";

const fields = [
  { label: "Medicine Name", value: "Dolo 650mg" },
  { label: "Generic Name", value: "Paracetamol 650mg" },
  { label: "Batch No.", value: "A24B001" },
  { label: "Expiry Date", value: "March 2026" },
  { label: "MRP", value: "₹30 / strip" },
];

const steps = [
  { num: "01", title: "Scan two sides", desc: "One photo of the name side, one of the batch side. Done in seconds." },
  { num: "02", title: "Camera reads both photos", desc: "We extract name, generic name, batch, expiry, and MRP — automatically, from both images." },
  { num: "03", title: "Confirm & done", desc: "Review, edit if needed, add to stock in one tap." },
];

function PhoneDemo() {
  const [phase, setPhase] = useState<Phase>("scanning");
  const [fieldIndex, setFieldIndex] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView && !started) setStarted(true);
  }, [isInView, started]);

  useEffect(() => {
    if (!started) return;
    if (phase === "scanning") {
      const t = setTimeout(() => setPhase("reading"), 2800);
      return () => clearTimeout(t);
    }
    if (phase === "reading") {
      const t = setTimeout(() => { setPhase("confirmed"); setFieldIndex(0); }, 1600);
      return () => clearTimeout(t);
    }
    if (phase === "confirmed") {
      if (fieldIndex < fields.length - 1) {
        const t = setTimeout(() => setFieldIndex((i) => i + 1), 380);
        return () => clearTimeout(t);
      }
      const t = setTimeout(() => { setPhase("scanning"); }, 3500);
      return () => clearTimeout(t);
    }
  }, [phase, fieldIndex, started]);

  const activeStep = phase === "scanning" ? 0 : phase === "reading" ? 1 : 2;

  return (
    <div ref={ref} className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
      {/* Phone */}
      <div className="relative flex-shrink-0">
        <div className="relative w-[260px] mx-auto">
          <div className="relative bg-[#0f172a] rounded-[36px] p-3 shadow-2xl shadow-indigo-200">
            <div className="relative bg-[#0f172a] rounded-[28px] overflow-hidden" style={{ minHeight: 480 }}>

              <AnimatePresence>
                {phase === "scanning" && (
                  <motion.div
                    key="scanning"
                    initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                    className="absolute inset-0 flex flex-col items-center justify-center p-5"
                  >
                    <div className="relative w-full rounded-xl overflow-hidden bg-[#1e293b] mb-5" style={{ aspectRatio: "4/3" }}>
                      <motion.div
                        animate={{ y: ["0%", "100%", "0%"] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                        className="absolute inset-x-0 h-0.5 bg-[#4338ca]/70"
                      />
                      {["top-2 left-2 border-t-2 border-l-2", "top-2 right-2 border-t-2 border-r-2", "bottom-2 left-2 border-b-2 border-l-2", "bottom-2 right-2 border-b-2 border-r-2"].map((cls, i) => (
                        <div key={i} className={`absolute ${cls} border-[#4338ca] rounded-sm w-5 h-5`} />
                      ))}
                      <div className="absolute inset-6 rounded-lg border border-white/10 flex flex-col items-center justify-center gap-1">
                        <span className="text-3xl">💊</span>
                        <span className="text-white/50 text-[10px] font-medium mt-1">DOLO 650mg</span>
                        <span className="text-white/25 text-[9px]">Batch: A24B001 · Exp: 03/2026</span>
                      </div>
                    </div>
                    <p className="text-white/50 text-[11px] font-medium mb-2">Point camera at medicine box</p>
                    <motion.div
                      animate={{ opacity: [0.4, 1, 0.4] }}
                      transition={{ duration: 1.2, repeat: Infinity }}
                      className="flex items-center gap-1.5"
                    >
                      <div className="w-1.5 h-1.5 bg-[#4338ca] rounded-full" />
                      <span className="text-[#4338ca] text-[10px] font-semibold">Scanning...</span>
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>

              <AnimatePresence>
                {phase === "reading" && (
                  <motion.div
                    key="reading"
                    initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                    className="absolute inset-0 flex flex-col items-center justify-center gap-4"
                  >
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      className="w-14 h-14 rounded-full border-2 border-[#4338ca] border-t-transparent"
                    />
                    <div className="text-center px-6">
                      <p className="text-white text-sm font-semibold mb-1">AI Reading Label</p>
                      <p className="text-white/40 text-[10px]">Extracting medicine details...</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <AnimatePresence>
                {phase === "confirmed" && (
                  <motion.div
                    key="confirmed"
                    initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                    className="absolute inset-0 flex flex-col bg-[#f8fafc]"
                  >
                    <div className="bg-[#4338ca] px-4 pt-8 pb-3">
                      <div className="flex items-center gap-2 mb-0.5">
                        <motion.div
                          initial={{ scale: 0 }} animate={{ scale: 1 }}
                          transition={{ type: "spring", delay: 0.1 }}
                          className="w-5 h-5 bg-green-400 rounded-full flex items-center justify-center flex-shrink-0"
                        >
                          <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                            <path d="M2 5l2 2 4-4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </motion.div>
                        <p className="text-white text-xs font-semibold">Label Read Successfully</p>
                      </div>
                      <p className="text-white/50 text-[10px]">Review and confirm</p>
                    </div>
                    <div className="flex-1 p-3 space-y-2 overflow-hidden">
                      {fields.map((field, i) => (
                        <AnimatePresence key={field.label}>
                          {i <= fieldIndex && (
                            <motion.div
                              initial={{ opacity: 0, x: -12 }} animate={{ opacity: 1, x: 0 }}
                              className="bg-white border border-slate-100 rounded-xl p-2.5"
                            >
                              <p className="text-slate-400 text-[9px] uppercase tracking-wide font-semibold">{field.label}</p>
                              <p className="text-[#0f172a] text-[13px] font-bold mt-0.5">{field.value}</p>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      ))}
                      {fieldIndex >= fields.length - 1 && (
                        <motion.div
                          initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.3 }}
                          className="w-full bg-[#4338ca] text-white text-[11px] font-bold py-2.5 rounded-xl text-center"
                        >
                          Confirm &amp; Add to Stock ✓
                        </motion.div>
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            <div className="flex justify-center pt-2 pb-1">
              <div className="w-20 h-1 bg-white/30 rounded-full" />
            </div>
          </div>
          <div className="absolute right-[-3px] top-24 w-1 h-8 bg-slate-700 rounded-l-sm" />
          <div className="absolute left-[-3px] top-20 w-1 h-6 bg-slate-700 rounded-r-sm" />
          <div className="absolute left-[-3px] top-28 w-1 h-6 bg-slate-700 rounded-r-sm" />
        </div>
      </div>

      {/* Steps */}
      <div className="flex-1 space-y-8">
        {steps.map((step, i) => (
          <motion.div
            key={step.num}
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: i * 0.15 }}
            className={`flex gap-5 transition-opacity duration-500 ${activeStep === i ? "opacity-100" : "opacity-35"}`}
          >
            <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 font-bold text-sm transition-colors duration-300 ${activeStep === i ? "bg-[#4338ca] text-white" : "bg-slate-100 text-slate-400"}`}>
              {step.num}
            </div>
            <div className="pt-1">
              <h3 className="font-bold text-[#0f172a] text-lg mb-1">{step.title}</h3>
              <p className="text-slate-500 text-[15px] leading-relaxed">{step.desc}</p>
            </div>
          </motion.div>
        ))}

      </div>
    </div>
  );
}

export default function ScanDemoSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="section-padding bg-[#f8fafc]" id="scan-demo" ref={ref}>
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 bg-indigo-50 text-[#4338ca] text-sm font-semibold px-4 py-2 rounded-full mb-4">
            ⚡ Live Demo
          </div>
          <h2 className="section-title mb-4">See it in action</h2>
          <p className="section-subtitle max-w-xl mx-auto">
            No barcode scanner. No manual typing. Just point your phone and AI does the rest.
          </p>
        </motion.div>
        <PhoneDemo />
      </div>
    </section>
  );
}
