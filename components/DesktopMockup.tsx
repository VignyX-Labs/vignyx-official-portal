"use client";

import { motion } from "framer-motion";

const sidebarNav = [
  { icon: "🏠", label: "Dashboard", active: true },
  { icon: "🧾", label: "Billing" },
  { icon: "💊", label: "Inventory" },
  { icon: "🛒", label: "Purchases" },
  { icon: "🚚", label: "Suppliers" },
  { icon: "📊", label: "Reports" },
];

const widgets = [
  { icon: "💰", label: "Today's Sales", value: "₹38,240", tone: "green" },
  { icon: "🧾", label: "Bills Today", value: "142", tone: "indigo" },
  { icon: "📉", label: "Low Stock", value: "7 items", tone: "orange" },
  { icon: "⏰", label: "Expiring Soon", value: "4 items", tone: "red" },
  { icon: "🛒", label: "Purchase Orders", value: "3 pending", tone: "indigo" },
  { icon: "📋", label: "Pending Claims", value: "2", tone: "orange" },
] as const;

const branches = [
  { name: "MG Road", staff: "4", status: "On track", tone: "green" },
  { name: "Ring Road", staff: "3", status: "Low stock", tone: "orange" },
  { name: "Station Road", staff: "2", status: "Reorder needed", tone: "red" },
] as const;

const notifications = [
  { icon: "✅", title: "Stock Received", detail: "MG Road branch", tone: "green" },
  { icon: "🛒", title: "PO Approved", detail: "Ring Road branch", tone: "indigo" },
  { icon: "⚠️", title: "Low Stock Alert", detail: "Paracetamol 500mg", tone: "orange" },
  { icon: "⏰", title: "Expiry Warning", detail: "Azithromycin — 12 days", tone: "red" },
] as const;

const tone = {
  green: {
    bg: "bg-green-50",
    text: "text-green-600",
    border: "border-l-green-400",
    badgeBg: "bg-green-50",
    badgeText: "text-green-600",
  },
  orange: {
    bg: "bg-orange-50",
    text: "text-orange-600",
    border: "border-l-orange-400",
    badgeBg: "bg-orange-50",
    badgeText: "text-orange-600",
  },
  red: {
    bg: "bg-red-50",
    text: "text-red-500",
    border: "border-l-red-400",
    badgeBg: "bg-red-50",
    badgeText: "text-red-500",
  },
  indigo: {
    bg: "bg-indigo-50",
    text: "text-[#4338ca]",
    border: "border-l-[#4338ca]",
    badgeBg: "bg-indigo-50",
    badgeText: "text-[#4338ca]",
  },
} as const;

export default function DesktopMockup() {
  return (
    <div className="relative">
      {/* Browser frame */}
      <div className="relative w-full max-w-[600px] mx-auto">
        <div className="bg-[#0f172a] rounded-t-2xl px-4 py-3 flex items-center gap-2">
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-red-400/70" />
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/70" />
            <div className="w-2.5 h-2.5 rounded-full bg-green-400/70" />
          </div>
          <div className="ml-3 flex-1 bg-white/10 rounded-md px-3 py-1">
            <span className="text-white/50 text-[11px]">dashboard.vignyx.com</span>
          </div>
        </div>

        {/* Screen */}
        <div className="bg-white rounded-b-2xl shadow-2xl border border-t-0 border-slate-100 overflow-hidden">
          <div className="flex">
            {/* Sidebar */}
            <div className="hidden sm:flex flex-col w-16 bg-[#0f172a] py-4 gap-2 items-center flex-shrink-0">
              {sidebarNav.map((item) => (
                <div key={item.label} className="flex flex-col items-center gap-1 w-full">
                  <div
                    title={item.label}
                    className={`w-9 h-9 rounded-xl flex items-center justify-center text-base transition-colors ${
                      item.active ? "bg-[#4338ca]" : "bg-white/5"
                    }`}
                  >
                    {item.icon}
                  </div>
                  <span
                    className={`text-[7px] font-semibold tracking-wide ${
                      item.active ? "text-white" : "text-white/40"
                    }`}
                  >
                    {item.label}
                  </span>
                </div>
              ))}
              <div className="flex-1" />
              <div className="flex flex-col items-center gap-1 w-full">
                <div className="w-9 h-9 rounded-xl flex items-center justify-center text-base bg-white/5">
                  ⚙️
                </div>
                <span className="text-[7px] font-semibold tracking-wide text-white/40">
                  Settings
                </span>
              </div>
            </div>

            {/* Main content */}
            <div className="flex-1 p-4 sm:p-5 min-w-0">
              {/* Top bar: branch switcher */}
              <div className="flex items-center justify-between mb-4">
                <div>
                  <p className="text-[10px] text-slate-400 font-medium">Viewing</p>
                  <div className="flex items-center gap-1.5">
                    <p className="text-[14px] font-extrabold text-[#0f172a] tracking-tight">
                      All 3 Branches
                    </p>
                    <span className="text-slate-400 text-[10px]">▾</span>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="relative w-8 h-8 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-center text-sm">
                    🔔
                    <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-red-500 rounded-full border-2 border-white text-[7px] text-white font-bold flex items-center justify-center">
                      4
                    </span>
                  </div>
                  <div className="flex items-center -space-x-2">
                    {["SR", "AK", "PM"].map((initials, i) => (
                      <div
                        key={initials}
                        className={`w-7 h-7 rounded-full border-2 border-white flex items-center justify-center text-[9px] font-bold text-white ${
                          ["bg-[#4338ca]", "bg-indigo-400", "bg-violet-400"][i]
                        }`}
                      >
                        {initials}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Stat widgets */}
              <div className="grid grid-cols-3 gap-2 mb-4">
                {widgets.map((stat, i) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + i * 0.06, duration: 0.4 }}
                    className="bg-slate-50 rounded-xl p-2.5 border border-slate-100"
                  >
                    <div className="flex items-center gap-1 mb-1.5">
                      <span
                        className={`w-5 h-5 rounded-md flex items-center justify-center text-[10px] ${tone[stat.tone].bg}`}
                      >
                        {stat.icon}
                      </span>
                      <p className="text-[8.5px] text-slate-500 font-semibold leading-tight uppercase tracking-wide truncate">
                        {stat.label}
                      </p>
                    </div>
                    <p className={`text-[13px] font-extrabold ${tone[stat.tone].text}`}>
                      {stat.value}
                    </p>
                  </motion.div>
                ))}
              </div>

              {/* Mini chart */}
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9, duration: 0.5 }}
                className="bg-white border border-slate-100 rounded-xl p-3 mb-3"
              >
                <p className="text-[9px] text-slate-500 font-semibold uppercase tracking-wide mb-2">
                  Sales — last 7 days
                </p>
                <div className="flex items-end gap-1.5 h-12">
                  {[40, 55, 35, 70, 50, 85, 65].map((h, i) => (
                    <motion.div
                      key={i}
                      initial={{ height: 0 }}
                      animate={{ height: `${h}%` }}
                      transition={{ delay: 1 + i * 0.06, duration: 0.4 }}
                      className={`flex-1 rounded-sm ${i === 5 ? "bg-[#4338ca]" : "bg-indigo-200"}`}
                    />
                  ))}
                </div>
              </motion.div>

              {/* Branch rows */}
              <div className="bg-white border border-slate-100 rounded-xl overflow-hidden">
                <div className="grid grid-cols-3 px-3 py-2 bg-slate-50 text-[9px] font-semibold text-slate-400 uppercase tracking-wide">
                  <span>Branch</span>
                  <span>Staff</span>
                  <span>Status</span>
                </div>
                {branches.map((row) => (
                  <div
                    key={row.name}
                    className="grid grid-cols-3 px-3 py-2 border-t border-slate-100 items-center"
                  >
                    <span className="text-[11px] font-medium text-slate-700">{row.name}</span>
                    <span className="text-[11px] text-slate-500">{row.staff}</span>
                    <span
                      className={`text-[10px] font-semibold px-1.5 py-0.5 rounded-full w-fit ${tone[row.tone].badgeBg} ${tone[row.tone].badgeText}`}
                    >
                      {row.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating notification panel */}
      <motion.div
        initial={{ opacity: 0, y: -12, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        className="absolute -top-6 right-0 sm:-right-8 bg-white rounded-2xl shadow-xl border border-slate-100 p-2.5 w-52"
      >
        <p className="text-[9px] font-bold text-slate-400 uppercase tracking-wide px-1 mb-1.5">
          Notifications
        </p>
        <div className="space-y-1.5">
          {notifications.map((n) => (
            <div
              key={n.title}
              className={`flex items-start gap-2 border-l-2 ${tone[n.tone].border} bg-slate-50/70 rounded-r-lg px-2 py-1.5`}
            >
              <span className="text-[11px] mt-0.5">{n.icon}</span>
              <div className="min-w-0">
                <p className="text-[10px] font-semibold text-slate-700 truncate">{n.title}</p>
                <p className="text-[9px] text-slate-400 truncate">{n.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Floating growth card */}
      <motion.div
        initial={{ opacity: 0, y: 10, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ delay: 1.9, duration: 0.5 }}
        className="absolute -bottom-4 left-0 sm:-left-6 bg-white rounded-2xl shadow-xl border border-slate-100 p-3"
      >
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-green-50 rounded-lg flex items-center justify-center">
            <span className="text-lg">📈</span>
          </div>
          <div>
            <p className="text-[10px] text-slate-500 font-medium">Growth this month</p>
            <p className="text-sm font-extrabold text-green-600">+18%</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
