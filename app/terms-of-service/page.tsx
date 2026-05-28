import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Terms of Service — VignyX",
  description: "VignyX Terms of Service — the rules governing use of our platform.",
};

export default function TermsOfService() {
  return (
    <>
      <Navbar />
      <main className="pt-28 pb-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="mb-10">
            <span className="text-[#4338ca] text-sm font-semibold uppercase tracking-widest">Legal</span>
            <h1 className="text-4xl font-bold text-[#0f172a] mt-2 mb-4">Terms of Service</h1>
            <p className="text-slate-500 text-sm">Last updated: May 2026</p>
          </div>

          <div className="space-y-8 text-slate-700 leading-relaxed">
            <section>
              <h2 className="text-xl font-bold text-[#0f172a] mb-3">1. Acceptance of Terms</h2>
              <p>
                By accessing or using VignyX (&quot;Service&quot;), you agree to be bound by these Terms of Service.
                If you do not agree, please do not use our Service. These terms apply to all users, including
                medical shop owners, hospital pharmacy managers, and distributors.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#0f172a] mb-3">2. Description of Service</h2>
              <p>
                VignyX provides an AI-powered inventory management platform for Indian healthcare businesses,
                including features for stock tracking, expiry management, billing, WhatsApp alerts, and analytics.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#0f172a] mb-3">3. Account Responsibilities</h2>
              <ul className="list-disc pl-5 space-y-2">
                <li>You are responsible for maintaining the confidentiality of your account credentials.</li>
                <li>You must provide accurate and complete information when registering.</li>
                <li>You are responsible for all activities that occur under your account.</li>
                <li>Notify us immediately of any unauthorized use of your account.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#0f172a] mb-3">4. Subscription and Billing</h2>
              <p>
                VignyX operates on a subscription basis. Fees are billed monthly or annually as per the
                selected plan. The first month is free for early access users. Subscriptions auto-renew
                unless cancelled before the renewal date.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#0f172a] mb-3">5. Prohibited Uses</h2>
              <p>You may not use VignyX to:</p>
              <ul className="list-disc pl-5 space-y-2 mt-2">
                <li>Store or process data for purposes other than legitimate healthcare inventory management</li>
                <li>Violate any applicable Indian laws or regulations</li>
                <li>Attempt to gain unauthorized access to any part of the Service</li>
                <li>Resell or sublicense the Service without written permission</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#0f172a] mb-3">6. Limitation of Liability</h2>
              <p>
                VignyX is provided &quot;as is.&quot; While we strive for accuracy in our inventory alerts and
                recommendations, we are not liable for business decisions made based on our platform&apos;s data.
                Our maximum liability is limited to fees paid in the last 3 months.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#0f172a] mb-3">7. Governing Law</h2>
              <p>
                These Terms are governed by the laws of India. Any disputes will be subject to the exclusive
                jurisdiction of courts in Tirupati, Andhra Pradesh.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#0f172a] mb-3">8. Contact</h2>
              <p>
                For questions about these Terms:<br />
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
