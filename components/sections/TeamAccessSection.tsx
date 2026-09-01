"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const roles = [
  { role: "Owner / HQ", access: "Authorized business-wide visibility" },
  { role: "Store Manager", access: "Assigned pharmacy" },
  { role: "Godown Manager", access: "Assigned Godown operations" },
  { role: "Worker / Cashier", access: "Assigned location + permitted modules" },
];

export default function TeamAccessSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="section-padding bg-[#f8fafc]" id="team-access">
      <div className="container-max" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 bg-indigo-50 text-[#4338ca] text-sm font-semibold px-4 py-2 rounded-full mb-4">
            Team & Access
          </div>
          <h2 className="section-title mb-4">
            Every employee sees what they need.
          </h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            Two dimensions control what each person can do — where they can
            work, and what they can access.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 mb-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="card"
          >
            <div className="w-12 h-12 bg-gradient-to-br from-indigo-50 to-[#eef2ff] rounded-xl flex items-center justify-center text-2xl mb-4">
              📍
            </div>
            <h3 className="text-[16px] font-bold text-[#0f172a] mb-2">
              WHERE they can work
            </h3>
            <p className="text-slate-600 text-[14.5px] leading-relaxed">
              Every login is scoped to specific locations — a branch, a
              Godown, or the whole business if authorized.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="card"
          >
            <div className="w-12 h-12 bg-gradient-to-br from-indigo-50 to-[#eef2ff] rounded-xl flex items-center justify-center text-2xl mb-4">
              🔧
            </div>
            <h3 className="text-[16px] font-bold text-[#0f172a] mb-2">
              WHAT they can access
            </h3>
            <p className="text-slate-600 text-[14.5px] leading-relaxed">
              Roles control which modules and actions each person sees —
              billing, requisitions, procurement, reports — matched to their job.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-white border border-[#e2e8f0] rounded-2xl p-6 sm:p-8"
        >
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {roles.map((r) => (
              <div key={r.role} className="text-center">
                <p className="text-[14px] font-bold text-[#0f172a] mb-1">{r.role}</p>
                <p className="text-slate-500 text-[13px]">→ {r.access}</p>
              </div>
            ))}
          </div>
          <p className="text-slate-400 text-xs text-center mt-6">
            Every access change is logged, so who can see or do what is
            always traceable.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
