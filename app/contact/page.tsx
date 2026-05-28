"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

const contactInfo = [
  { icon: "📧", label: "Email", value: "vignyx.labs@gmail.com", href: "mailto:vignyx.labs@gmail.com" },
  { icon: "📱", label: "Instagram", value: "@vignyx.in", href: "https://instagram.com/vignyx.in" },
  { icon: "📍", label: "Location", value: "Tirupati, Andhra Pradesh, India", href: null },
];

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", shop: "", phone: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((res) => setTimeout(res, 1000));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <>
      <Navbar />
      <main className="pt-28 pb-20 bg-[#f8fafc] min-h-screen">
        <div className="container-max">
          {/* Header */}
          <div className="text-center mb-14">
            <span className="text-[#4338ca] text-sm font-semibold uppercase tracking-widest">Get in touch</span>
            <h1 className="text-4xl sm:text-5xl font-bold text-[#0f172a] mt-3 mb-4">
              Let&apos;s talk
            </h1>
            <p className="text-slate-600 text-lg max-w-md mx-auto">
              Questions about VignyX? Want a demo? We&apos;ll personally respond within 4 hours.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-10 max-w-5xl mx-auto">
            {/* Contact info */}
            <div>
              <div className="space-y-5 mb-10">
                {contactInfo.map((item) => (
                  <div key={item.label} className="flex items-start gap-4 bg-white border border-[#e2e8f0] rounded-2xl p-5">
                    <div className="w-11 h-11 bg-indigo-50 rounded-xl flex items-center justify-center text-xl flex-shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-slate-500 mb-0.5">{item.label}</p>
                      {item.href ? (
                        <a href={item.href} className="text-[#0f172a] font-medium hover:text-[#4338ca] transition-colors">
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-[#0f172a] font-medium">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Demo CTA box */}
              <div className="bg-[#4338ca] rounded-2xl p-6 text-white">
                <h3 className="text-lg font-bold mb-2">Request a demo</h3>
                <p className="text-indigo-200 text-sm mb-4">
                  We&apos;ll walk you through VignyX live on WhatsApp — takes just 15 minutes.
                </p>
                <a
                  href="https://wa.me/919999999999?text=Hi%2C%20I%20want%20to%20know%20more%20about%20VignyX"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-white text-[#4338ca] font-semibold px-5 py-2.5 rounded-xl text-sm hover:bg-indigo-50 transition-colors"
                >
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Chat on WhatsApp
                </a>
              </div>
            </div>

            {/* Contact form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white border border-[#e2e8f0] rounded-2xl p-8"
            >
              {submitted ? (
                <div className="text-center py-12">
                  <div className="text-5xl mb-4">✅</div>
                  <h3 className="text-xl font-bold text-[#0f172a] mb-2">Message sent!</h3>
                  <p className="text-slate-600">
                    We&apos;ll reply within 4 hours on WhatsApp or email.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                      Your name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Dr. Ramesh Kumar"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full border border-[#e2e8f0] rounded-xl px-4 py-3 text-base focus:outline-none focus:border-[#4338ca] focus:ring-1 focus:ring-[#4338ca] transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                      Shop / Hospital name
                    </label>
                    <input
                      type="text"
                      placeholder="Ramesh Medical Stores"
                      value={form.shop}
                      onChange={(e) => setForm({ ...form, shop: e.target.value })}
                      className="w-full border border-[#e2e8f0] rounded-xl px-4 py-3 text-base focus:outline-none focus:border-[#4338ca] focus:ring-1 focus:ring-[#4338ca] transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                      WhatsApp number
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="w-full border border-[#e2e8f0] rounded-xl px-4 py-3 text-base focus:outline-none focus:border-[#4338ca] focus:ring-1 focus:ring-[#4338ca] transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                      Message
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Tell us about your shop and what you need..."
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full border border-[#e2e8f0] rounded-xl px-4 py-3 text-base focus:outline-none focus:border-[#4338ca] focus:ring-1 focus:ring-[#4338ca] transition-all resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={loading}
                    className="btn-primary w-full justify-center py-3.5 disabled:opacity-70"
                  >
                    {loading ? "Sending..." : "Send Message →"}
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
