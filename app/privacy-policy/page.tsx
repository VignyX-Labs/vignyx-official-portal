import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy — VignyX",
  description: "VignyX Privacy Policy — how we collect, use, and protect your data.",
};

export default function PrivacyPolicy() {
  return (
    <>
      <Navbar />
      <main className="pt-28 pb-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="mb-10">
            <span className="text-[#4338ca] text-sm font-semibold uppercase tracking-widest">Legal</span>
            <h1 className="text-4xl font-bold text-[#0f172a] mt-2 mb-4">Privacy Policy</h1>
            <p className="text-slate-500 text-sm">Last updated: May 2026</p>
          </div>

          <div className="prose prose-slate max-w-none">
            <div className="space-y-8 text-slate-700 leading-relaxed">
              <section>
                <h2 className="text-xl font-bold text-[#0f172a] mb-3">1. Information We Collect</h2>
                <p>
                  VignyX collects information you provide when you register for an account, including your name,
                  email address, WhatsApp number, and business information (shop name, location, number of racks).
                </p>
                <p className="mt-3">
                  We also collect usage data such as inventory transactions, billing records, and system logs
                  to provide and improve our services.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-[#0f172a] mb-3">2. How We Use Your Information</h2>
                <ul className="list-disc pl-5 space-y-2">
                  <li>To provide, maintain, and improve the VignyX platform</li>
                  <li>To send WhatsApp alerts for expiry, low stock, and daily digests (as configured by you)</li>
                  <li>To process billing and generate GST invoices</li>
                  <li>To communicate with you about product updates and support</li>
                  <li>To comply with applicable Indian laws and regulations</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-bold text-[#0f172a] mb-3">3. Data Security</h2>
                <p>
                  We implement industry-standard security measures including encryption at rest and in transit,
                  secure authentication, and regular security audits. Your business data is stored on secure
                  servers in India.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-[#0f172a] mb-3">4. Data Sharing</h2>
                <p>
                  We do not sell, rent, or share your personal information with third parties for marketing purposes.
                  We may share data with service providers who assist us in operating our platform, subject to
                  strict confidentiality agreements.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-[#0f172a] mb-3">5. WhatsApp Communications</h2>
                <p>
                  By registering your WhatsApp number, you consent to receive automated alerts from VignyX
                  regarding your inventory. You can configure or disable these alerts from within the app at
                  any time.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-[#0f172a] mb-3">6. Your Rights</h2>
                <p>You have the right to access, correct, or delete your personal data. To exercise these rights,
                  contact us at <a href="mailto:vignyx.labs@gmail.com" className="text-[#4338ca] hover:underline">vignyx.labs@gmail.com</a>.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-[#0f172a] mb-3">7. Contact</h2>
                <p>
                  For privacy-related concerns, please contact us at:<br />
                  <strong>VignyX Technologies Pvt Ltd</strong><br />
                  Tirupati, Andhra Pradesh, India<br />
                  <a href="mailto:vignyx.labs@gmail.com" className="text-[#4338ca] hover:underline">vignyx.labs@gmail.com</a>
                </p>
              </section>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
