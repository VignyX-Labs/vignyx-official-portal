"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const rows = [
  { location: "Branch A", qty: 34, status: "Good", statusColor: "text-green-600 bg-green-50" },
  { location: "Branch B", qty: 0, status: "Out of stock", statusColor: "text-red-600 bg-red-50" },
  { location: "Branch C", qty: 18, status: "Low", statusColor: "text-orange-600 bg-orange-50" },
  { location: "Central Godown", qty: 420, status: "Good", statusColor: "text-green-600 bg-green-50" },
];

export default function ChainInventorySection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="section-padding bg-white" id="chain-inventory">
      <div className="container-max max-w-4xl" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-indigo-50 text-[#4338ca] text-sm font-semibold px-4 py-2 rounded-full mb-4">
            Chain Inventory
          </div>
          <h2 className="section-title mb-4">
            Find stock anywhere in your business.
          </h2>
          <p className="section-subtitle max-w-xl mx-auto">
            Search a product and see what&apos;s available across every
            location you&apos;re authorized to see — without calling a
            single branch.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          <div className="flex items-center gap-2 bg-[#f8fafc] border border-[#e2e8f0] rounded-xl px-4 py-3 mb-5 max-w-sm">
            <span className="text-slate-400">🔎</span>
            <span className="text-[14px] text-[#0f172a] font-medium">Dolo 650</span>
          </div>

          {/* Desktop table */}
          <table className="hidden md:table w-full border-separate border-spacing-0 rounded-2xl overflow-hidden border border-[#e2e8f0]">
            <caption className="sr-only">Stock availability by location for Dolo 650</caption>
            <thead>
              <tr className="bg-[#f8fafc]">
                <th scope="col" className="text-left px-6 py-4 text-sm font-bold text-slate-500 uppercase tracking-wide">
                  Location
                </th>
                <th scope="col" className="text-left px-6 py-4 text-sm font-bold text-slate-500 uppercase tracking-wide">
                  Quantity
                </th>
                <th scope="col" className="text-left px-6 py-4 text-sm font-bold text-slate-500 uppercase tracking-wide">
                  Status
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr key={row.location} className="border-t border-[#e2e8f0]">
                  <th scope="row" className="text-left px-6 py-4 font-semibold text-[#0f172a] text-sm">
                    {row.location}
                  </th>
                  <td className="px-6 py-4 text-sm text-[#0f172a]">{row.qty}</td>
                  <td className="px-6 py-4">
                    <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${row.statusColor}`}>
                      {row.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Mobile stacked cards */}
          <div className="md:hidden space-y-3">
            {rows.map((row) => (
              <div key={row.location} className="card flex items-center justify-between">
                <div>
                  <p className="font-bold text-[#0f172a] text-[14px]">{row.location}</p>
                  <p className="text-slate-500 text-[13px]">Qty: {row.qty}</p>
                </div>
                <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${row.statusColor}`}>
                  {row.status}
                </span>
              </div>
            ))}
          </div>

          <p className="text-slate-400 text-xs mt-4 text-center">
            Illustrative example. Actual results depend on your locations and access.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
