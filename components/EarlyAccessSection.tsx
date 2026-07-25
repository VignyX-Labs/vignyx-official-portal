"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { useLeadForm } from "@/lib/useLeadForm";
import { useToast } from "@/components/ui/Toast";
import { trackEvent } from "@/lib/analytics";

export default function EarlyAccessSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [website, setWebsite] = useState(""); // honeypot
  const [submitted, setSubmitted] = useState(false);
  const { submit, loading } = useLeadForm();
  const toast = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) return;

    const result = await submit({
      formType: "early_access",
      name,
      phone,
      city,
      website,
    });

    if (result.success) {
      setSubmitted(true);
      trackEvent("lead_submit", { formType: "early_access" });
    } else {
      toast.error(result.error ?? "Something went wrong. Please try again.");
    }
  };

  return (
    <section
      className="section-padding bg-[#4338ca] relative overflow-hidden"
      id="early-access"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/5 rounded-full translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-white/5 rounded-full -translate-x-1/2 translate-y-1/2" />
        {/* Subtle grid pattern */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.04]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="container-max relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center max-w-2xl mx-auto"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/15 border border-white/20 text-white text-sm font-semibold px-4 py-2 rounded-full mb-8">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            Limited to 20 shops · 3 spots left
          </div>

          {/* Headline */}
          <h2 className="text-4xl sm:text-5xl lg:text-[56px] font-bold text-white leading-tight mb-6">
            Be among the first
            <br />
            <span className="text-indigo-200">20 shops</span>
          </h2>

          {/* Subtext */}
          <p className="text-indigo-100 text-lg sm:text-xl leading-relaxed mb-3">
            Get 1 month completely free.
          </p>
          <p className="text-indigo-200 text-base mb-3">
            No credit card. No commitment. Just a smarter medical shop.
          </p>
          <p className="text-indigo-200 text-sm mb-10">
            Open to medical shops anywhere in India.
          </p>

          {/* Form */}
          {submitted ? (
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="bg-white/15 border border-white/30 rounded-2xl p-8"
            >
              <div className="text-5xl mb-4">🎉</div>
              <h3 className="text-2xl font-bold text-white mb-2">You&apos;re in!</h3>
              <p className="text-indigo-100">
                We&apos;ll personally reach out on WhatsApp within 24 hours to get you set up.
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="max-w-xl mx-auto space-y-3" noValidate>
              {/* Honeypot — hidden from real users, catches naive bots */}
              <div className="absolute -left-[9999px]" aria-hidden="true">
                <label htmlFor="early-access-website">Website</label>
                <input
                  id="early-access-website"
                  type="text"
                  tabIndex={-1}
                  autoComplete="off"
                  value={website}
                  onChange={(e) => setWebsite(e.target.value)}
                />
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="text"
                  placeholder="Your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="sm:flex-[2] bg-white/15 border border-white/30 text-white placeholder-indigo-300 rounded-xl px-4 py-3.5 text-base focus:outline-none focus:border-white/60 focus:bg-white/20 transition-all"
                />
                <input
                  type="tel"
                  placeholder="Your WhatsApp number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                  className="sm:flex-[3] bg-white/15 border border-white/30 text-white placeholder-indigo-300 rounded-xl px-4 py-3.5 text-base focus:outline-none focus:border-white/60 focus:bg-white/20 transition-all"
                />
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="text"
                  placeholder="Your city"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  className="flex-1 bg-white/15 border border-white/30 text-white placeholder-indigo-300 rounded-xl px-4 py-3.5 text-base focus:outline-none focus:border-white/60 focus:bg-white/20 transition-all"
                />
                <button
                  type="submit"
                  disabled={loading}
                  className="bg-white text-[#4338ca] font-bold px-6 py-3.5 rounded-xl text-base hover:bg-indigo-50 transition-colors duration-200 disabled:opacity-70 whitespace-nowrap flex items-center gap-2 justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#4338ca]"
                >
                  {loading ? (
                    <>
                      <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                      Joining...
                    </>
                  ) : (
                    "Get Early Access →"
                  )}
                </button>
              </div>
            </form>
          )}

          {/* Fine print */}
          <div className="mt-6 space-y-2">
            <p className="text-indigo-200 text-sm">
              We&apos;ll personally reach out to onboard you, wherever you are.
            </p>
            <p className="text-indigo-100 text-sm flex items-center justify-center gap-1.5">
              <span>🔐</span>
              Encrypted, never shared. Your number stays private.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
