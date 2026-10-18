"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { trackEvent } from "@/lib/analytics";

const readFields = [
  "Items",
  "Batch",
  "Expiry",
  "Qty + free qty",
  "Rate",
  "MRP",
  "GST",
  "HSN",
  "Discount",
  "Taxable value",
];

const safeguards = [
  {
    icon: "🎯",
    title: "Explains every match",
    body: "Each line is matched to your medicine list with a reason you can see. A different strength or pack size is never matched automatically.",
  },
  {
    icon: "🏷️",
    title: "Knows your distributors",
    body: "Finds the distributor by GSTIN or name, and remembers each distributor's bill layout so the next one is faster.",
  },
  {
    icon: "🧮",
    title: "Checks the totals",
    body: "Compares the totals printed on the bill with what it read, before a single strip enters your stock.",
  },
  {
    icon: "🛡️",
    title: "Stops duplicates",
    body: "The same invoice number in the same financial year is caught, and you're warned if a distributor sends mostly the same items within 15 days.",
  },
  {
    icon: "🚫",
    title: "Refuses the wrong paper",
    body: "Credit notes, debit notes, return notes and quotations are recognised and never received as stock.",
  },
  {
    icon: "🔗",
    title: "Links to your order",
    body: "Suggests the matching open purchase order, so the bill is checked against what you actually ordered.",
  },
];

const lines = [
  { name: "Dolo 650 Tab 15's", batch: "DL4521", exp: "08/28", qty: "20 + 2", status: "match" },
  { name: "Pan 40 Tab 15's", batch: "PN2290", exp: "03/28", qty: "10", status: "match" },
  { name: "Azithral 500 Tab 5's", batch: "AZ7731", exp: "11/27", qty: "15", status: "match" },
  { name: "Montair LC Tab 10's", batch: "ML0912", exp: "01/28", qty: "12", status: "review" },
];

export default function AIBillReaderSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="section-padding bg-[#0f172a] relative overflow-hidden" id="ai-bill-reader">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute -top-40 left-1/4 w-[600px] h-[600px] bg-[#4338ca] opacity-30 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#6366f1] opacity-20 rounded-full blur-3xl" />
      </div>

      <div className="container-max relative z-10" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16">
          {/* Copy */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/15 text-indigo-200 text-sm font-semibold px-4 py-2 rounded-full mb-5">
              ✨ AI Bill Reader
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-5">
              Upload the supplier bill.
              <br />
              <span className="text-indigo-300">VignyX does the typing.</span>
            </h2>
            <p className="text-lg text-slate-300 leading-relaxed mb-8 max-w-xl">
              Snap a photo, or upload a PDF, Excel or CSV. VignyX reads every line of the bill and
              prepares your stock entry — you just review and confirm. Long bills that took
              ages to type are ready in moments.
            </p>

            <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
              Read from every bill
            </p>
            <div className="flex flex-wrap gap-2 mb-10">
              {readFields.map((f) => (
                <span
                  key={f}
                  className="bg-white/10 border border-white/10 text-white text-[13px] font-medium px-3 py-1.5 rounded-lg"
                >
                  {f}
                </span>
              ))}
            </div>

            <button
              onClick={() => {
                trackEvent("cta_click", { cta: "start_free_trial", location: "ai_bill_reader" });
                document.querySelector("#get-started")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="bg-white text-[#4338ca] font-semibold px-7 py-3.5 rounded-[10px] hover:bg-indigo-50 transition-colors shadow-lg shadow-indigo-900/40"
            >
              Try it free for a month
            </button>
          </motion.div>

          {/* Mock */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
              {/* Header */}
              <div className="flex items-center justify-between px-5 py-4 border-b border-slate-100">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 bg-indigo-50 rounded-lg flex items-center justify-center text-lg">📄</div>
                  <div>
                    <p className="text-sm font-bold text-[#0f172a]">Invoice INV/2627/0418</p>
                    <p className="text-[11px] text-slate-500">Distributor matched by GSTIN</p>
                  </div>
                </div>
                <span className="text-[11px] font-bold text-green-700 bg-green-50 px-2.5 py-1 rounded-full">
                  ✓ Read
                </span>
              </div>

              {/* Lines */}
              <div className="px-5 py-3">
                <div className="grid grid-cols-12 text-[10px] font-bold uppercase tracking-wide text-slate-400 py-2">
                  <span className="col-span-5">Item</span>
                  <span className="col-span-2">Batch</span>
                  <span className="col-span-2">Exp</span>
                  <span className="col-span-2">Qty</span>
                  <span className="col-span-1" />
                </div>
                {lines.map((l, i) => (
                  <motion.div
                    key={l.name}
                    initial={{ opacity: 0, x: -10 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.6 + i * 0.15 }}
                    className="grid grid-cols-12 items-center text-[12px] py-2.5 border-t border-slate-50"
                  >
                    <span className="col-span-5 font-semibold text-[#0f172a] truncate pr-2">{l.name}</span>
                    <span className="col-span-2 text-slate-500">{l.batch}</span>
                    <span className="col-span-2 text-slate-500">{l.exp}</span>
                    <span className="col-span-2 text-slate-700">{l.qty}</span>
                    <span className="col-span-1 text-right">
                      {l.status === "match" ? (
                        <span className="text-green-600" title="Matched">✓</span>
                      ) : (
                        <span className="text-amber-500" title="Needs review">●</span>
                      )}
                    </span>
                  </motion.div>
                ))}
              </div>

              {/* Checks */}
              <div className="bg-[#f8fafc] border-t border-slate-100 px-5 py-4 space-y-2">
                <div className="flex items-center justify-between text-[12px]">
                  <span className="text-slate-600">Bill total vs lines read</span>
                  <span className="font-bold text-green-700">✓ Totals match</span>
                </div>
                <div className="flex items-center justify-between text-[12px]">
                  <span className="text-slate-600">Duplicate check</span>
                  <span className="font-bold text-green-700">✓ New invoice</span>
                </div>
                <div className="flex items-center justify-between text-[12px]">
                  <span className="text-slate-600">Open purchase order</span>
                  <span className="font-bold text-[#4338ca]">PO-0127 suggested</span>
                </div>
              </div>
            </div>

            {/* Floating review chip */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 1.4 }}
              className="absolute -bottom-6 -left-4 sm:-left-8 bg-white rounded-xl shadow-xl border border-amber-100 px-4 py-3 max-w-[240px]"
            >
              <p className="text-[11px] font-bold text-amber-600 mb-0.5">1 line needs your eye</p>
              <p className="text-[11px] text-slate-600 leading-snug">
                Pack size differs from your stock item, so it wasn&apos;t matched automatically.
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* Safeguards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-8">
          {safeguards.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.08 }}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/[0.08] transition-colors"
            >
              <div className="w-11 h-11 bg-white/10 rounded-xl flex items-center justify-center text-xl mb-4">
                {s.icon}
              </div>
              <h3 className="text-white font-bold text-[16px] mb-2">{s.title}</h3>
              <p className="text-slate-300 text-[14px] leading-relaxed">{s.body}</p>
            </motion.div>
          ))}
        </div>

        <p className="text-center text-slate-500 text-xs mt-8">
          Illustrative screen. You always review the result before stock is received.
        </p>
      </div>
    </section>
  );
}
