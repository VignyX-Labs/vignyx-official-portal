"use client";

import { useMemo, useState } from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const AVG_STOCKOUT_VALUE = 500;

export default function ROICalculatorSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const [monthlyPurchaseValue, setMonthlyPurchaseValue] = useState(150000);
  const [expiryLossPercent, setExpiryLossPercent] = useState(4);
  const [stockoutsPerMonth, setStockoutsPerMonth] = useState(12);

  const { yearlyExpirySavings, yearlyStockoutSavings, total } = useMemo(() => {
    const yearlyExpirySavings =
      monthlyPurchaseValue * (expiryLossPercent / 100) * 12 * 0.8;
    const yearlyStockoutSavings =
      stockoutsPerMonth * AVG_STOCKOUT_VALUE * 12 * 0.7;
    return {
      yearlyExpirySavings,
      yearlyStockoutSavings,
      total: yearlyExpirySavings + yearlyStockoutSavings,
    };
  }, [monthlyPurchaseValue, expiryLossPercent, stockoutsPerMonth]);

  const formatINR = (value: number) =>
    `₹${Math.round(value).toLocaleString("en-IN")}`;

  return (
    <section className="section-padding bg-[#f8fafc]" id="roi-calculator">
      <div className="container-max max-w-4xl" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-indigo-50 text-[#4338ca] text-sm font-semibold px-4 py-2 rounded-full mb-4">
            ROI Calculator
          </div>
          <h2 className="section-title mb-4">See what you could save</h2>
          <p className="section-subtitle max-w-xl mx-auto">
            Estimate your yearly savings from reduced expiry losses and prevented stockouts.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="grid lg:grid-cols-2 gap-6 items-stretch"
        >
          {/* Inputs */}
          <div className="card space-y-6">
            <div>
              <label
                htmlFor="monthly-purchase"
                className="block text-sm font-semibold text-slate-700 mb-2"
              >
                Monthly medicine purchase value: {formatINR(monthlyPurchaseValue)}
              </label>
              <input
                id="monthly-purchase"
                type="range"
                min={10000}
                max={1000000}
                step={5000}
                value={monthlyPurchaseValue}
                onChange={(e) => setMonthlyPurchaseValue(Number(e.target.value))}
                className="w-full accent-[#4338ca] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4338ca]/50 rounded"
              />
            </div>

            <div>
              <label
                htmlFor="expiry-loss"
                className="block text-sm font-semibold text-slate-700 mb-2"
              >
                Current expiry loss: {expiryLossPercent}% of purchases
              </label>
              <input
                id="expiry-loss"
                type="range"
                min={0}
                max={20}
                step={0.5}
                value={expiryLossPercent}
                onChange={(e) => setExpiryLossPercent(Number(e.target.value))}
                className="w-full accent-[#4338ca] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4338ca]/50 rounded"
              />
            </div>

            <div>
              <label
                htmlFor="stockouts"
                className="block text-sm font-semibold text-slate-700 mb-2"
              >
                Stockouts per month: {stockoutsPerMonth}
              </label>
              <input
                id="stockouts"
                type="range"
                min={0}
                max={60}
                step={1}
                value={stockoutsPerMonth}
                onChange={(e) => setStockoutsPerMonth(Number(e.target.value))}
                className="w-full accent-[#4338ca] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4338ca]/50 rounded"
              />
            </div>
          </div>

          {/* Output */}
          <div className="bg-[#4338ca] rounded-2xl p-8 flex flex-col justify-center text-white">
            <p className="text-indigo-200 text-sm font-semibold uppercase tracking-wide mb-2">
              Estimated yearly savings
            </p>
            <p
              className="text-4xl sm:text-5xl font-bold mb-6"
              aria-live="polite"
            >
              {formatINR(total)}
            </p>
            <div className="space-y-2 text-sm text-indigo-100 border-t border-white/20 pt-4">
              <div className="flex justify-between">
                <span>From reduced expiry losses</span>
                <span className="font-semibold">{formatINR(yearlyExpirySavings)}</span>
              </div>
              <div className="flex justify-between">
                <span>From prevented stockouts</span>
                <span className="font-semibold">{formatINR(yearlyStockoutSavings)}</span>
              </div>
            </div>
            <p className="text-indigo-100 text-xs mt-6">
              Estimate based on typical inputs — actual savings vary by shop.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
