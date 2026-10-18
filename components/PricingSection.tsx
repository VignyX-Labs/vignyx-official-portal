"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { HiCheck } from "react-icons/hi";
import { trackEvent } from "@/lib/analytics";
import { retailPlans, addOns, formatINR } from "@/lib/data/plans";

type Segment = "retail" | "chain" | "hospital" | "distributor" | "cnf";

const segments: { id: Segment; label: string; icon: string }[] = [
  { id: "retail", label: "Retail Pharmacy", icon: "🏪" },
  { id: "chain", label: "Pharmacy Chains", icon: "🏬" },
  { id: "hospital", label: "Hospitals", icon: "🏥" },
  { id: "distributor", label: "Distributors", icon: "🚚" },
  { id: "cnf", label: "C&F & Pharma", icon: "🏭" },
];

const goToSignup = (plan: string) => {
  trackEvent("cta_click", { cta: "start_free_trial", location: "pricing", plan });
  document.querySelector("#get-started")?.scrollIntoView({ behavior: "smooth" });
};

function CheckList({ items, light = false }: { items: string[]; light?: boolean }) {
  return (
    <ul className="space-y-3">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-2.5">
          <HiCheck
            className={`mt-0.5 flex-shrink-0 ${light ? "text-indigo-200" : "text-[#4338ca]"}`}
            size={16}
          />
          <span
            className={`text-[14px] ${light ? "text-indigo-100" : "text-slate-600"} ${
              item.startsWith("Everything") ? "font-semibold" : ""
            }`}
          >
            {item}
          </span>
        </li>
      ))}
    </ul>
  );
}

function RetailPlans() {
  const [isYearly, setIsYearly] = useState(true);

  return (
    <div>
      {/* Toggle */}
      <div className="flex items-center justify-center gap-3 mb-10">
        <span className={`text-sm font-medium ${!isYearly ? "text-[#0f172a]" : "text-slate-500"}`}>
          Monthly
        </span>
        <button
          onClick={() => setIsYearly(!isYearly)}
          aria-label="Toggle yearly billing"
          className={`relative w-12 h-6 rounded-full transition-colors duration-200 ${
            isYearly ? "bg-[#4338ca]" : "bg-slate-300"
          }`}
        >
          <div
            className={`absolute top-1 left-1 w-4 h-4 bg-white rounded-full shadow transition-transform duration-200 ${
              isYearly ? "translate-x-6" : "translate-x-0"
            }`}
          />
        </button>
        <span className={`text-sm font-medium ${isYearly ? "text-[#0f172a]" : "text-slate-500"}`}>
          Yearly
          <span className="ml-1.5 bg-green-100 text-green-700 text-xs font-bold px-2 py-0.5 rounded-full">
            2 months free
          </span>
        </span>
      </div>

      <div className="grid lg:grid-cols-3 gap-6 items-stretch">
        {retailPlans.map((plan) => {
          const hl = !!plan.popular;
          return (
            <div
              key={plan.id}
              className={`relative rounded-2xl p-8 flex flex-col ${
                hl
                  ? "bg-[#4338ca] shadow-2xl shadow-indigo-300 lg:scale-[1.03]"
                  : "bg-white border border-[#e2e8f0] hover:shadow-lg transition-shadow duration-300"
              }`}
            >
              {hl && (
                <span className="absolute top-5 right-5 text-xs font-bold px-3 py-1 rounded-full bg-white/20 text-white">
                  Most Popular
                </span>
              )}

              <h3 className={`text-xl font-bold mb-1 ${hl ? "text-white" : "text-[#0f172a]"}`}>
                {plan.name}
              </h3>
              <p className={`text-sm mb-6 pr-16 ${hl ? "text-indigo-200" : "text-slate-500"}`}>
                {plan.tagline}
              </p>

              <div className="mb-2 flex items-end gap-1">
                <span className={`text-5xl font-bold ${hl ? "text-white" : "text-[#0f172a]"}`}>
                  {formatINR(isYearly ? plan.yearly : plan.monthly)}
                </span>
                <span className={`text-base mb-1.5 ${hl ? "text-indigo-200" : "text-slate-500"}`}>
                  /{isYearly ? "year" : "month"}
                </span>
              </div>
              <p className={`text-xs mb-6 ${hl ? "text-indigo-200" : "text-slate-500"}`}>
                {isYearly
                  ? `You save ${formatINR(plan.monthly * 12 - plan.yearly)} vs monthly · + GST`
                  : "Billed monthly · + GST"}
              </p>

              <div
                className={`flex flex-wrap gap-2 mb-6 text-xs font-semibold ${
                  hl ? "text-white" : "text-[#4338ca]"
                }`}
              >
                <span className={`px-2.5 py-1 rounded-full ${hl ? "bg-white/15" : "bg-indigo-50"}`}>
                  👥 {plan.users}
                </span>
                <span className={`px-2.5 py-1 rounded-full ${hl ? "bg-white/15" : "bg-indigo-50"}`}>
                  ✨ {plan.scans}
                </span>
              </div>

              <div className="flex-1 mb-8">
                <CheckList items={plan.features} light={hl} />
              </div>

              <button
                onClick={() => goToSignup(plan.id)}
                className={`w-full py-3.5 rounded-xl font-semibold text-base transition-all duration-200 ${
                  hl
                    ? "bg-white text-[#4338ca] hover:bg-indigo-50"
                    : "bg-[#4338ca] text-white hover:bg-[#3730a3]"
                }`}
              >
                Start Free Trial
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

interface SegmentPlanProps {
  id: string;
  name: string;
  tagline: string;
  price: React.ReactNode;
  priceNote: string;
  features: string[];
  extra?: React.ReactNode;
  cta: "trial" | "demo";
}

function SegmentPlan({ id, name, tagline, price, priceNote, features, extra, cta }: SegmentPlanProps) {
  return (
    <div className="grid lg:grid-cols-5 gap-6 items-stretch max-w-5xl mx-auto">
      <div className="lg:col-span-2 bg-[#4338ca] rounded-2xl p-8 flex flex-col text-white shadow-2xl shadow-indigo-200">
        <h3 className="text-xl font-bold mb-1">{name}</h3>
        <p className="text-sm text-indigo-200 mb-8">{tagline}</p>
        <div className="mb-2">{price}</div>
        <p className="text-xs text-indigo-200 mb-8">{priceNote}</p>
        <div className="mt-auto">
          {cta === "trial" ? (
            <button
              onClick={() => goToSignup(id)}
              className="w-full py-3.5 rounded-xl font-semibold text-base bg-white text-[#4338ca] hover:bg-indigo-50 transition-colors"
            >
              Start Free Trial
            </button>
          ) : (
            <a
              href="/contact"
              onClick={() => trackEvent("cta_click", { cta: "book_demo", location: "pricing", plan: id })}
              className="block w-full py-3.5 rounded-xl font-semibold text-base bg-white text-[#4338ca] hover:bg-indigo-50 transition-colors text-center"
            >
              Book a Demo
            </a>
          )}
        </div>
      </div>
      <div className="lg:col-span-3 bg-white border border-[#e2e8f0] rounded-2xl p-8">
        <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-5">What&apos;s included</p>
        <CheckList items={features} />
        {extra && <div className="mt-6">{extra}</div>}
      </div>
    </div>
  );
}

const BigPrice = ({ value, unit }: { value: string; unit: string }) => (
  <div className="flex items-end gap-1">
    <span className="text-5xl font-bold">{value}</span>
    <span className="text-base mb-1.5 text-indigo-200">{unit}</span>
  </div>
);

function SegmentContent({ segment }: { segment: Segment }) {
  switch (segment) {
    case "retail":
      return <RetailPlans />;
    case "chain":
      return (
        <SegmentPlan
          id="chain"
          name="Chain"
          tagline="For pharmacy groups with 3 or more branches and a central godown"
          price={
            <div className="space-y-3">
              <BigPrice value="₹1,799" unit="/branch/month" />
              <p className="text-lg font-semibold">+ ₹2,999 <span className="text-indigo-200 text-sm font-normal">per godown / month</span></p>
            </div>
          }
          priceNote="Minimum 3 branches · + GST · 10+ branches: custom price"
          features={[
            "Everything in Business, at every branch",
            "Branch stock requests & godown approvals",
            "Transfers, dispatch & in-transit tracking",
            "Replenishment suggestions per branch",
            "Chain-wide inventory — find stock anywhere",
            "Group overview & chain-wide reports",
            "Unlimited users",
          ]}
          extra={
            <div className="bg-indigo-50 border border-indigo-100 rounded-xl px-5 py-4 text-sm text-[#0f172a]">
              <span className="font-bold">Example:</span> 5 branches + 1 godown comes to about{" "}
              <span className="font-bold text-[#4338ca]">₹12,000/month</span>.
            </div>
          }
          cta="demo"
        />
      );
    case "hospital":
      return (
        <SegmentPlan
          id="hospital"
          name="Hospital Pharmacy"
          tagline="For hospital pharmacies and nursing homes"
          price={<BigPrice value="₹5,999" unit="/month" />}
          priceNote="+ GST · Free onboarding"
          features={[
            "Full pharmacy counter: billing, GST, Schedule H/H1/X register",
            "Ward requisitions & issue slips",
            "Department-wise consumption",
            "Audit logs for every stock movement",
            "AI Bill Reader, purchase orders & supplier payables",
            "Unlimited users",
            "Free onboarding for your team",
          ]}
          cta="demo"
        />
      );
    case "distributor":
      return (
        <SegmentPlan
          id="distributor"
          name="Distributor"
          tagline="For pharma distributors and stockists"
          price={<BigPrice value="₹3,999" unit="/month" />}
          priceNote="5 users included · + ₹299 per extra user · + GST"
          features={[
            "Retailer orders in one inbox",
            "Customer management",
            "GST invoicing",
            "Returns",
            "Dues tracking & payments",
            "Schemes, routes & van sales",
          ]}
          extra={
            <div className="bg-green-50 border border-green-100 rounded-xl px-5 py-4 text-sm text-green-800">
              <span className="font-bold">Your retailers order free.</span> Pharmacies that order from you on
              VignyX use the ordering portal at no cost.
            </div>
          }
          cta="trial"
        />
      );
    case "cnf":
      return (
        <SegmentPlan
          id="cnf"
          name="C&F Agents & Pharma Companies"
          tagline="For carrying & forwarding agents and pharma manufacturers"
          price={<p className="text-4xl font-bold">Talk to us</p>}
          priceNote="Typically ₹15,000 – ₹50,000/month, based on locations and volume · + GST"
          features={[
            "C&F: orders, inward & dispatch",
            "Claims, schemes & reconciliation",
            "Invoice intake & demand intelligence",
            "Pharma company: one connected view across your C&Fs and distributors",
            "Stock tracing down the supply chain",
            "Dedicated onboarding & support",
          ]}
          cta="demo"
        />
      );
  }
}

export default function PricingSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [segment, setSegment] = useState<Segment>("retail");

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
          <div className="inline-flex items-center gap-2 bg-indigo-50 text-[#4338ca] text-sm font-semibold px-4 py-2 rounded-full mb-4">
            Pricing
          </div>
          <h2 className="section-title mb-4">Simple, honest pricing</h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            One price for your business type. No setup fees, no hidden charges, cancel anytime.
            Your first month is free.
          </p>
        </motion.div>

        {/* Segment tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex justify-center mb-10"
        >
          <div
            role="tablist"
            aria-label="Business type"
            className="flex gap-2 overflow-x-auto max-w-full bg-white border border-[#e2e8f0] rounded-2xl p-1.5 no-scrollbar"
          >
            {segments.map((s) => (
              <button
                key={s.id}
                role="tab"
                aria-selected={segment === s.id}
                onClick={() => {
                  setSegment(s.id);
                  trackEvent("pricing_segment", { segment: s.id });
                }}
                className={`flex items-center gap-1.5 whitespace-nowrap px-4 py-2.5 rounded-xl text-sm font-semibold transition-colors ${
                  segment === s.id
                    ? "bg-[#4338ca] text-white shadow"
                    : "text-slate-600 hover:text-[#4338ca] hover:bg-indigo-50"
                }`}
              >
                <span aria-hidden="true">{s.icon}</span>
                {s.label}
              </button>
            ))}
          </div>
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={segment}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3 }}
          >
            <SegmentContent segment={segment} />
          </motion.div>
        </AnimatePresence>

        {/* Add-ons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-14 bg-white border border-[#e2e8f0] rounded-2xl p-8"
        >
          <h3 className="text-lg font-bold text-[#0f172a] mb-5">Add-ons</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {addOns.map((a) => (
              <div key={a.label} className="bg-[#f8fafc] border border-[#e2e8f0] rounded-xl p-4">
                <p className="text-sm font-semibold text-[#0f172a] mb-1">{a.label}</p>
                <p className="text-sm text-[#4338ca] font-medium">{a.price}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <p className="text-center text-slate-500 text-sm mt-6">
          All prices are in Indian Rupees and exclude 18% GST. Yearly plans give you 12 months for the price of 10.
        </p>
      </div>
    </section>
  );
}
