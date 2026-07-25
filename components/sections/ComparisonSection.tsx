"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { HiX, HiCheck } from "react-icons/hi";
import { comparisonRows } from "@/lib/data/comparison";

export default function ComparisonSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="section-padding bg-white" id="comparison">
      <div className="container-max max-w-4xl" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="section-title mb-4">Manual vs VignyX</h2>
          <p className="section-subtitle max-w-xl mx-auto">
            See exactly what changes when you switch from a register to VignyX.
          </p>
        </motion.div>

        {/* Desktop table */}
        <motion.table
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="hidden md:table w-full border-separate border-spacing-0 rounded-2xl overflow-hidden border border-[#e2e8f0]"
        >
          <caption className="sr-only">
            Comparison of manual pharmacy management versus VignyX
          </caption>
          <thead>
            <tr className="bg-[#f8fafc]">
              <th scope="col" className="text-left px-6 py-4 text-sm font-bold text-slate-500 uppercase tracking-wide">
                Task
              </th>
              <th scope="col" className="text-left px-6 py-4 text-sm font-bold text-slate-500 uppercase tracking-wide">
                Manual
              </th>
              <th scope="col" className="text-left px-6 py-4 text-sm font-bold text-[#4338ca] uppercase tracking-wide">
                With VignyX
              </th>
            </tr>
          </thead>
          <tbody>
            {comparisonRows.map((row) => (
              <tr key={row.id} className="border-t border-[#e2e8f0]">
                <th scope="row" className="text-left px-6 py-4 font-semibold text-[#0f172a] text-sm align-top">
                  {row.criterion}
                </th>
                <td className="px-6 py-4 text-sm text-slate-500 align-top">
                  <span className="flex items-start gap-2">
                    <HiX className="text-red-400 flex-shrink-0 mt-0.5" size={16} aria-hidden="true" />
                    {row.manual}
                  </span>
                </td>
                <td className="px-6 py-4 text-sm text-[#0f172a] font-medium align-top">
                  <span className="flex items-start gap-2">
                    <HiCheck className="text-green-500 flex-shrink-0 mt-0.5" size={16} aria-hidden="true" />
                    {row.vignyx}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </motion.table>

        {/* Mobile stacked cards */}
        <div className="md:hidden space-y-4">
          {comparisonRows.map((row, i) => (
            <motion.div
              key={row.id}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="card"
            >
              <h3 className="font-bold text-[#0f172a] text-[15px] mb-3">{row.criterion}</h3>
              <div className="flex items-start gap-2 text-sm text-slate-500 mb-2">
                <HiX className="text-red-400 flex-shrink-0 mt-0.5" size={16} aria-hidden="true" />
                {row.manual}
              </div>
              <div className="flex items-start gap-2 text-sm text-[#0f172a] font-medium">
                <HiCheck className="text-green-500 flex-shrink-0 mt-0.5" size={16} aria-hidden="true" />
                {row.vignyx}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
