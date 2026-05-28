"use client";

import { motion } from "framer-motion";

export default function DashboardMockup() {
  return (
    <div className="relative">
      {/* Phone frame */}
      <div className="relative w-[280px] sm:w-[300px] mx-auto">
        {/* Phone shell */}
        <div className="relative bg-[#0f172a] rounded-[36px] p-3 shadow-2xl">
          {/* Screen */}
          <div className="bg-[#f8fafc] rounded-[28px] overflow-hidden">
            {/* Status bar */}
            <div className="bg-[#4338ca] px-5 pt-8 pb-4">
              <div className="flex items-center justify-between mb-1">
                <span className="text-white/80 text-xs font-medium">VignyX</span>
                <div className="flex gap-1">
                  <div className="w-3 h-1.5 bg-white/60 rounded-sm" />
                  <div className="w-1 h-1.5 bg-white/40 rounded-sm" />
                </div>
              </div>
              <h3 className="text-white text-base font-bold">Good Morning! 👋</h3>
              <p className="text-white/70 text-xs mt-0.5">Sharma Medical Store</p>

              {/* Stats row */}
              <div className="flex gap-2 mt-4 mb-2">
                <div className="flex-1 bg-white/15 rounded-xl p-2.5">
                  <p className="text-white/70 text-[10px] font-medium">Today Sales</p>
                  <p className="text-white text-sm font-bold mt-0.5">₹12,480</p>
                </div>
                <div className="flex-1 bg-white/15 rounded-xl p-2.5">
                  <p className="text-white/70 text-[10px] font-medium">Items Low</p>
                  <p className="text-yellow-300 text-sm font-bold mt-0.5">3 items</p>
                </div>
                <div className="flex-1 bg-white/15 rounded-xl p-2.5">
                  <p className="text-white/70 text-[10px] font-medium">Expiring</p>
                  <p className="text-red-300 text-sm font-bold mt-0.5">2 soon</p>
                </div>
              </div>
            </div>

            {/* Content area */}
            <div className="p-3 space-y-2.5">
              {/* Alert card */}
              <motion.div
                initial={{ x: -10, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 1, duration: 0.4 }}
                className="bg-red-50 border border-red-100 rounded-xl p-2.5 flex items-start gap-2"
              >
                <span className="text-base mt-0.5">🔔</span>
                <div>
                  <p className="text-red-700 text-[11px] font-semibold">Expiry Alert</p>
                  <p className="text-red-500 text-[10px]">Crocin 500mg — expires in 28 days</p>
                </div>
              </motion.div>

              {/* Stock items */}
              <div className="bg-white rounded-xl p-2.5 border border-slate-100">
                <p className="text-slate-500 text-[10px] font-semibold mb-2 uppercase tracking-wide">Recent Stock</p>
                <div className="space-y-2">
                  {[
                    { name: "Azithromycin 500", qty: "84 strips", status: "ok" },
                    { name: "Pantoprazole 40mg", qty: "12 strips", status: "low" },
                    { name: "Dolo 650mg", qty: "156 strips", status: "ok" },
                  ].map((item) => (
                    <div key={item.name} className="flex items-center justify-between">
                      <span className="text-[11px] text-slate-700 font-medium truncate max-w-[120px]">{item.name}</span>
                      <div className="flex items-center gap-1.5">
                        <span className="text-[10px] text-slate-500">{item.qty}</span>
                        <span
                          className={`w-1.5 h-1.5 rounded-full ${
                            item.status === "ok" ? "bg-green-400" : "bg-yellow-400"
                          }`}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick actions */}
              <div className="grid grid-cols-3 gap-1.5">
                {[
                  { icon: "📷", label: "Scan" },
                  { icon: "🧾", label: "Bill" },
                  { icon: "📦", label: "Order" },
                ].map((action) => (
                  <div
                    key={action.label}
                    className="bg-[#eef2ff] rounded-xl p-2 flex flex-col items-center gap-1"
                  >
                    <span className="text-base">{action.icon}</span>
                    <span className="text-[10px] font-semibold text-[#4338ca]">{action.label}</span>
                  </div>
                ))}
              </div>
            </div>
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

      {/* WhatsApp notification popup */}
      <motion.div
        initial={{ opacity: 0, y: 10, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ delay: 1.6, duration: 0.5 }}
        className="absolute -bottom-4 -right-4 sm:-right-8 bg-white rounded-2xl shadow-xl border border-slate-100 p-3 w-52"
      >
        <div className="flex items-start gap-2">
          <div className="w-7 h-7 bg-green-500 rounded-lg flex items-center justify-center flex-shrink-0">
            <svg viewBox="0 0 24 24" width="14" height="14" fill="white">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
          </div>
          <div>
            <p className="text-[10px] font-semibold text-slate-700">VignyX Alert</p>
            <p className="text-[11px] text-slate-600 leading-snug mt-0.5">
              ⚠️ Pantoprazole 40mg running low — only 12 strips left. Reorder now?
            </p>
            <p className="text-[9px] text-slate-400 mt-1">just now · WhatsApp</p>
          </div>
        </div>
      </motion.div>

      {/* Floating stat card */}
      <motion.div
        initial={{ opacity: 0, y: -10, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ delay: 2, duration: 0.5 }}
        className="absolute -top-4 -left-4 sm:-left-8 bg-white rounded-2xl shadow-xl border border-slate-100 p-3"
      >
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-green-50 rounded-lg flex items-center justify-center">
            <span className="text-lg">📈</span>
          </div>
          <div>
            <p className="text-[10px] text-slate-500 font-medium">Saved this month</p>
            <p className="text-sm font-bold text-green-600">₹4,200</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
