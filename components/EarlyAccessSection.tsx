"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";

export default function EarlyAccessSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!phone.trim()) return;
    setLoading(true);
    // Simulate form submission
    await new Promise((res) => setTimeout(res, 1200));
    setLoading(false);
    setSubmitted(true);
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
          <p className="text-indigo-200 text-base mb-10">
            No credit card. No commitment. Just a smarter medical shop.
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
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-xl mx-auto">
              <input
                type="tel"
                placeholder="Your WhatsApp number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
                className="flex-1 bg-white/15 border border-white/30 text-white placeholder-indigo-300 rounded-xl px-4 py-3.5 text-base focus:outline-none focus:border-white/60 focus:bg-white/20 transition-all"
              />
              <input
                type="text"
                placeholder="Your city"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className="sm:w-36 bg-white/15 border border-white/30 text-white placeholder-indigo-300 rounded-xl px-4 py-3.5 text-base focus:outline-none focus:border-white/60 focus:bg-white/20 transition-all"
              />
              <button
                type="submit"
                disabled={loading}
                className="bg-white text-[#4338ca] font-bold px-6 py-3.5 rounded-xl text-base hover:bg-indigo-50 transition-colors duration-200 disabled:opacity-70 whitespace-nowrap flex items-center gap-2 justify-center"
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
            </form>
          )}

          {/* Fine print */}
          <div className="mt-6 space-y-2">
            <p className="text-indigo-200 text-sm">
              We&apos;ll personally onboard you. Tirupati and Chennai only for now.
            </p>
            <p className="text-indigo-300 text-sm flex items-center justify-center gap-1.5">
              <span>🔒</span>
              We never spam. Your number stays private.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
