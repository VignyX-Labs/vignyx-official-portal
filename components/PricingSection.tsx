"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { HiCheck } from "react-icons/hi";

const plans = [
  {
    id: "starter",
    name: "Starter",
    badge: "Most Popular",
    badgeColor: "bg-indigo-100 text-[#4338ca]",
    monthlyPrice: 999,
    yearlyPrice: 799,
    description: "Medical & Pharmacy Stores",
    features: [
      "Unlimited products",
      "Barcode scanning",
      "WhatsApp alerts",
      "Expiry tracking (FIFO)",
      "GST billing",
      "Basic reports",
      "1 location",
      "2 users",
    ],
    cta: "Start Free Trial",
    highlighted: false,
  },
  {
    id: "pro",
    name: "Pro",
    badge: "Best Value",
    badgeColor: "bg-white/20 text-white",
    monthlyPrice: 2499,
    yearlyPrice: 1999,
    description: "Growing pharmacies & small hospitals",
    features: [
      "Everything in Starter",
      "AI demand forecasting",
      "Smart reorder suggestions",
      "Advanced analytics",
      "Excel export",
      "3 locations",
      "5 users",
      "Priority support",
    ],
    cta: "Start Free Trial",
    highlighted: true,
  },
  {
    id: "hospital",
    name: "Hospital",
    badge: "",
    badgeColor: "",
    monthlyPrice: 4999,
    yearlyPrice: 3999,
    description: "Hospital pharmacies & nursing homes",
    features: [
      "Everything in Pro",
      "Ward requisitions",
      "Issue slips",
      "Department consumption",
      "Unlimited locations",
      "Unlimited users",
      "Dedicated support",
      "Custom onboarding",
    ],
    cta: "Request Demo",
    highlighted: false,
  },
];

export default function PricingSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <section className="section-padding bg-[#f8fafc]" id="pricing">
      <div className="container-max" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="section-title mb-4">Simple, honest pricing</h2>
          <p className="section-subtitle max-w-xl mx-auto">
            No hidden fees. No setup charges. Cancel anytime.
          </p>

          {/* Toggle */}
          <div className="flex items-center justify-center gap-3 mt-8">
            <span className={`text-sm font-medium ${!isAnnual ? "text-[#0f172a]" : "text-slate-500"}`}>
              Monthly
            </span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className={`relative w-12 h-6 rounded-full transition-colors duration-200 ${
                isAnnual ? "bg-[#4338ca]" : "bg-slate-300"
              }`}
            >
              <div
                className={`absolute top-1 left-1 w-4 h-4 bg-white rounded-full shadow transition-transform duration-200 ${
                  isAnnual ? "translate-x-6" : "translate-x-0"
                }`}
              />
            </button>
            <span className={`text-sm font-medium ${isAnnual ? "text-[#0f172a]" : "text-slate-500"}`}>
              Annual
              <span className="ml-1.5 bg-green-100 text-green-700 text-xs font-bold px-2 py-0.5 rounded-full">
                Save 20%
              </span>
            </span>
          </div>
        </motion.div>

        {/* Pricing cards */}
        <div className="grid lg:grid-cols-3 gap-6 items-stretch">
          {plans.map((plan, i) => {
            const price = isAnnual ? plan.yearlyPrice : plan.monthlyPrice;
            return (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className={`relative rounded-2xl p-8 flex flex-col ${
                  plan.highlighted
                    ? "bg-[#4338ca] shadow-2xl shadow-indigo-300 scale-[1.02]"
                    : "bg-white border border-[#e2e8f0] hover:shadow-lg transition-shadow duration-300"
                }`}
              >
                {/* Badge */}
                {plan.badge && (
                  <span
                    className={`absolute top-5 right-5 text-xs font-bold px-3 py-1 rounded-full ${plan.badgeColor}`}
                  >
                    {plan.badge}
                  </span>
                )}

                {/* Plan name */}
                <div className="mb-6">
                  <h3
                    className={`text-xl font-bold mb-1 ${
                      plan.highlighted ? "text-white" : "text-[#0f172a]"
                    }`}
                  >
                    {plan.name}
                  </h3>
                  <p
                    className={`text-sm ${
                      plan.highlighted ? "text-indigo-200" : "text-slate-500"
                    }`}
                  >
                    {plan.description}
                  </p>
                </div>

                {/* Price */}
                <div className="mb-8">
                  <div className="flex items-end gap-1">
                    <span
                      className={`text-5xl font-bold ${
                        plan.highlighted ? "text-white" : "text-[#0f172a]"
                      }`}
                    >
                      ₹{price.toLocaleString("en-IN")}
                    </span>
                    <span
                      className={`text-base mb-1.5 ${
                        plan.highlighted ? "text-indigo-200" : "text-slate-500"
                      }`}
                    >
                      /month
                    </span>
                  </div>
                  {isAnnual && (
                    <p
                      className={`text-xs mt-1 ${
                        plan.highlighted ? "text-indigo-200" : "text-slate-500"
                      }`}
                    >
                      Billed annually (₹{(price * 12).toLocaleString("en-IN")}/year)
                    </p>
                  )}
                </div>

                {/* Features */}
                <ul className="space-y-3 flex-1 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5">
                      <HiCheck
                        className={`mt-0.5 flex-shrink-0 ${
                          plan.highlighted ? "text-indigo-200" : "text-[#4338ca]"
                        }`}
                        size={16}
                      />
                      <span
                        className={`text-[14px] ${
                          plan.highlighted ? "text-indigo-100" : "text-slate-600"
                        } ${feature.startsWith("Everything") ? "font-semibold" : ""}`}
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <button
                  onClick={() => {
                    document.querySelector("#early-access")?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className={`w-full py-3.5 rounded-xl font-semibold text-base transition-all duration-200 ${
                    plan.highlighted
                      ? "bg-white text-[#4338ca] hover:bg-indigo-50"
                      : plan.id === "hospital"
                      ? "bg-[#4338ca] text-white hover:bg-[#3730a3]"
                      : "bg-[#4338ca] text-white hover:bg-[#3730a3]"
                  }`}
                >
                  {plan.cta}
                </button>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-10"
        >
          <div className="inline-flex items-center gap-2 bg-amber-50 border border-amber-100 rounded-2xl px-6 py-4">
            <span className="text-xl">🎁</span>
            <p className="text-slate-700 font-medium text-base">
              First month FREE for early access users. No credit card required to start.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
