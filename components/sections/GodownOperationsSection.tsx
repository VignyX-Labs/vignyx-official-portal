"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const internalFlow = [
  "Stock Requisition",
  "Godown Approval",
  "FEFO Picking",
  "Dispatch",
  "In Transit",
  "Branch Receipt",
];

const externalFlow = [
  "Purchase Order",
  "Supplier",
  "Goods Received",
  "Verify Batch & Expiry",
  "GRN",
  "Inventory",
];

const demandInputs = [
  { label: "Branch A needs", value: "40" },
  { label: "Branch B needs", value: "25" },
  { label: "Branch C needs", value: "15" },
];

const procurementFlow = [
  "Combined Branch Demand",
  "Godown Available",
  "Incoming Supplier Stock",
  "Suggested Procurement",
];

const expirySteps = [
  { icon: "🔍", title: "Detect", body: "Batches nearing expiry are flagged in FEFO order." },
  { icon: "↩️", title: "Act", body: "Create and send an expiry return to the supplier." },
  { icon: "📋", title: "Track", body: "Follow the return through to credit settlement." },
];

export default function GodownOperationsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="section-padding bg-[#f8fafc]" id="godown">
      <div className="container-max" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 bg-indigo-50 text-[#4338ca] text-sm font-semibold px-4 py-2 rounded-full mb-4">
            Godown Operations
          </div>
          <h2 className="section-title mb-4">
            Your Godown should do more than store stock.
          </h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            It receives demand from branches, fulfills stock requests, and
            helps centralize procurement — all connected to the same
            inventory.
          </p>
        </motion.div>

        {/* Internal vs External */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="card"
          >
            <div className="inline-flex items-center gap-2 bg-indigo-50 text-[#4338ca] text-xs font-bold px-3 py-1.5 rounded-full mb-5 uppercase tracking-wide">
              Internal · Branch ↔ Godown
            </div>
            <div className="space-y-2.5">
              {internalFlow.map((step, i) => (
                <div key={step} className="flex items-center gap-2.5">
                  <span className="w-6 h-6 flex-shrink-0 rounded-full bg-[#4338ca] text-white text-[11px] font-bold flex items-center justify-center">
                    {i + 1}
                  </span>
                  <span className="text-[14px] font-medium text-[#0f172a]">
                    {step}
                  </span>
                </div>
              ))}
            </div>
            <p className="text-slate-500 text-[13px] leading-relaxed mt-5">
              Stock requisition and transfer — supports partial approval,
              batch-level fulfillment, FEFO-based picking, dispatch
              tracking, and received/damaged/short reconciliation on
              receipt.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="card"
          >
            <div className="inline-flex items-center gap-2 bg-slate-100 text-slate-600 text-xs font-bold px-3 py-1.5 rounded-full mb-5 uppercase tracking-wide">
              External · Business ↔ Supplier
            </div>
            <div className="space-y-2.5">
              {externalFlow.map((step, i) => (
                <div key={step} className="flex items-center gap-2.5">
                  <span className="w-6 h-6 flex-shrink-0 rounded-full bg-slate-500 text-white text-[11px] font-bold flex items-center justify-center">
                    {i + 1}
                  </span>
                  <span className="text-[14px] font-medium text-[#0f172a]">
                    {step}
                  </span>
                </div>
              ))}
            </div>
            <p className="text-slate-500 text-[13px] leading-relaxed mt-5">
              A separate workflow from internal stock movement — this is
              your purchase order to a supplier, verified and received as a
              GRN before it enters inventory.
            </p>
          </motion.div>
        </div>

        {/* Procurement suggestion */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-white border border-[#e2e8f0] rounded-2xl p-8 mb-8"
        >
          <h3 className="text-lg font-bold text-[#0f172a] mb-1 text-center">
            Purchase based on demand, not guesswork.
          </h3>
          <p className="text-slate-500 text-sm text-center mb-8">
            A recommendation — you choose what to order.
          </p>
          <div className="flex flex-col items-center gap-4">
            <div className="flex flex-wrap justify-center gap-3">
              {demandInputs.map((d) => (
                <div
                  key={d.label}
                  className="bg-[#f8fafc] border border-[#e2e8f0] rounded-xl px-4 py-2.5 text-center"
                >
                  <p className="text-[12px] text-slate-500">{d.label}</p>
                  <p className="text-lg font-bold text-[#0f172a]">{d.value}</p>
                </div>
              ))}
            </div>
            <span className="text-slate-300" aria-hidden="true">↓</span>
            <div className="flex flex-wrap justify-center items-center gap-3">
              {procurementFlow.map((step, i) => (
                <div key={step} className="flex items-center gap-3">
                  <span className="bg-indigo-50 text-[#4338ca] text-[13px] font-semibold px-3.5 py-2 rounded-lg text-center">
                    {step}
                  </span>
                  {i < procurementFlow.length - 1 && (
                    <span className="text-slate-300" aria-hidden="true">→</span>
                  )}
                </div>
              ))}
            </div>
            <span className="text-slate-300" aria-hidden="true">↓</span>
            <span className="bg-[#4338ca] text-white text-sm font-bold px-5 py-2.5 rounded-xl">
              Create Purchase Order
            </span>
          </div>
        </motion.div>

        {/* Expiry: Detect -> Act -> Track */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="text-lg font-bold text-[#0f172a] mb-6 text-center">
            Expiring stock: detect, act, track.
          </h3>
          <div className="grid sm:grid-cols-3 gap-5">
            {expirySteps.map((step) => (
              <div key={step.title} className="card text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-indigo-50 to-[#eef2ff] rounded-xl flex items-center justify-center text-2xl mb-4 mx-auto">
                  {step.icon}
                </div>
                <h4 className="text-[15px] font-bold text-[#0f172a] mb-2">
                  {step.title}
                </h4>
                <p className="text-slate-600 text-[13.5px] leading-relaxed">
                  {step.body}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
