import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Refund Policy — VignyX",
  description: "VignyX Refund Policy — cancellation, refund, and free trial terms.",
  alternates: {
    canonical: "/refund-policy",
  },
};

export default function RefundPolicy() {
  return (
    <>
      <Navbar />
      <main className="pt-28 pb-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="mb-10">
            <span className="text-[#4338ca] text-sm font-semibold uppercase tracking-widest">Legal</span>
            <h1 className="text-4xl font-bold text-[#0f172a] mt-2 mb-4">Refund Policy</h1>
            <p className="text-slate-500 text-sm">Last updated: July 2026</p>
          </div>

          <div className="space-y-8 text-slate-700 leading-relaxed">
            <section>
              <h2 className="text-xl font-bold text-[#0f172a] mb-3">1. Free Trial</h2>
              <p>
                Early access users receive their first month of VignyX completely free. No credit card
                is required to start, and you owe nothing if you decide not to continue after the trial.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#0f172a] mb-3">2. Monthly Subscriptions</h2>
              <p>
                Monthly plans can be cancelled at any time from your account settings or by contacting us.
                Cancellation stops future billing but we do not provide partial-month refunds for time
                already used in the current billing cycle.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#0f172a] mb-3">3. Annual Subscriptions</h2>
              <p>
                If you cancel an annual plan within 14 days of purchase, we will refund the unused portion
                on a pro-rated basis. After 14 days, annual subscriptions are non-refundable, but you may
                cancel to stop auto-renewal at the end of your current term.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#0f172a] mb-3">4. Billing Errors</h2>
              <p>
                If you believe you were charged in error — for example, a duplicate charge or a charge
                after cancellation — contact us within 30 days and we will investigate and refund any
                confirmed error in full.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#0f172a] mb-3">5. How to Request a Refund</h2>
              <p>
                Email us or message us on WhatsApp with your shop name and registered phone number.
                We personally review every request and respond within 4 hours during business days.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#0f172a] mb-3">6. Contact</h2>
              <p>
                For refund requests or billing questions:<br />
                <strong>VignyX Technologies Pvt Ltd</strong><br />
                <a href="mailto:vignyx.labs@gmail.com" className="text-[#4338ca] hover:underline">vignyx.labs@gmail.com</a>
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
