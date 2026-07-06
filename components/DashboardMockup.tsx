"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

type Phase = "scanning" | "reading" | "confirmed";

const fields = [
  { label: "Medicine", value: "Dolo 650mg" },
  { label: "Batch No.", value: "A24B001" },
  { label: "Expiry", value: "03/2026" },
  { label: "MRP", value: "₹30 / strip" },
];

export default function DashboardMockup() {
  const [phase, setPhase] = useState<Phase>("scanning");
  const [fieldIndex, setFieldIndex] = useState(0);

  useEffect(() => {
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
      const t = setTimeout(() => setPhase("scanning"), 3200);
      return () => clearTimeout(t);
    }
  }, [phase, fieldIndex]);

  return (
    <div className="relative">
      <div className="relative w-[280px] sm:w-[300px] mx-auto">
        <div className="relative bg-[#0f172a] rounded-[36px] p-3 shadow-2xl">
          <div className="relative bg-[#0f172a] rounded-[28px] overflow-hidden" style={{ minHeight: 460 }}>

            {/* Phase: Camera scanning */}
            <AnimatePresence>
              {phase === "scanning" && (
                <motion.div
                  key="scanning"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 flex flex-col items-center justify-center p-5"
                >
                  <div className="relative w-full rounded-xl overflow-hidden bg-[#1e293b] mb-5" style={{ aspectRatio: "4/3" }}>
                    {/* Scan line */}
                    <motion.div
                      animate={{ y: ["0%", "100%", "0%"] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                      className="absolute inset-x-0 h-0.5 bg-[#4338ca]/70"
                    />
                    {/* Corner markers */}
                    {[
                      "top-2 left-2 border-t-2 border-l-2",
                      "top-2 right-2 border-t-2 border-r-2",
                      "bottom-2 left-2 border-b-2 border-l-2",
                      "bottom-2 right-2 border-b-2 border-r-2",
                    ].map((cls, i) => (
                      <div key={i} className={`absolute ${cls} border-[#4338ca] rounded-sm w-5 h-5`} />
                    ))}
                    {/* Medicine box hint */}
                    <div className="absolute inset-6 rounded-lg border border-white/10 flex flex-col items-center justify-center gap-1">
                      <span className="text-2xl">💊</span>
                      <span className="text-white/40 text-[9px] font-medium tracking-wide">DOLO 650mg</span>
                      <span className="text-white/20 text-[8px]">Batch: A24B001 · Exp: 03/2026</span>
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

            {/* Phase: AI reading */}
            <AnimatePresence>
              {phase === "reading" && (
                <motion.div
                  key="reading"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 flex flex-col items-center justify-center gap-4 p-5"
                >
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    className="w-12 h-12 rounded-full border-2 border-[#4338ca] border-t-transparent"
                  />
                  <div className="text-center">
                    <p className="text-white text-sm font-semibold mb-1">AI Reading Label</p>
                    <p className="text-white/40 text-[10px]">Extracting medicine details...</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Phase: Confirmed / form filled */}
            <AnimatePresence>
              {phase === "confirmed" && (
                <motion.div
                  key="confirmed"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 flex flex-col bg-[#f8fafc]"
                >
                  {/* Header */}
                  <div className="bg-[#4338ca] px-4 pt-8 pb-4">
                    <div className="flex items-center gap-2 mb-0.5">
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
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

                  {/* Fields filling in */}
                  <div className="flex-1 p-3 space-y-2 overflow-hidden">
                    {fields.map((field, i) => (
                      <AnimatePresence key={field.label}>
                        {i <= fieldIndex && (
                          <motion.div
                            initial={{ opacity: 0, x: -12 }}
                            animate={{ opacity: 1, x: 0 }}
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
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
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

          {/* Home indicator */}
          <div className="flex justify-center pt-2 pb-1">
            <div className="w-20 h-1 bg-white/30 rounded-full" />
          </div>
        </div>

        {/* Side buttons */}
        <div className="absolute right-[-3px] top-24 w-1 h-8 bg-slate-700 rounded-l-sm" />
        <div className="absolute left-[-3px] top-20 w-1 h-6 bg-slate-700 rounded-r-sm" />
        <div className="absolute left-[-3px] top-28 w-1 h-6 bg-slate-700 rounded-r-sm" />
      </div>

      {/* Floating: AI filled 4 fields */}
      <motion.div
        initial={{ opacity: 0, y: -10, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ delay: 2, duration: 0.5 }}
        className="absolute -top-4 -left-4 sm:-left-8 bg-white rounded-2xl shadow-xl border border-slate-100 p-3"
      >
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-indigo-50 rounded-lg flex items-center justify-center text-lg">🤖</div>
          <div>
            <p className="text-[10px] text-slate-500 font-medium">AI filled</p>
            <p className="text-sm font-bold text-[#4338ca]">4 fields instantly</p>
          </div>
        </div>
      </motion.div>

      {/* Floating: No scanner needed */}
      <motion.div
        initial={{ opacity: 0, y: 10, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ delay: 1.6, duration: 0.5 }}
        className="absolute -bottom-4 -right-4 sm:-right-8 bg-white rounded-2xl shadow-xl border border-slate-100 p-3 w-48"
      >
        <div className="flex items-start gap-2">
          <div className="w-7 h-7 bg-indigo-50 rounded-lg flex items-center justify-center flex-shrink-0 text-base">📷</div>
          <div>
            <p className="text-[10px] font-semibold text-slate-700">No barcode scanner</p>
            <p className="text-[11px] text-slate-500 mt-0.5">Just your phone camera</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
