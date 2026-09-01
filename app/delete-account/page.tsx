import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Delete Your Account — VignyX",
  description:
    "How to request deletion of your VignyX account and associated data.",
};

export default function DeleteAccount() {
  return (
    <>
      <Navbar />
      <main className="pt-28 pb-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="mb-10">
            <span className="text-[#4338ca] text-sm font-semibold uppercase tracking-widest">Legal</span>
            <h1 className="text-4xl font-bold text-[#0f172a] mt-2 mb-4">Delete Your Account</h1>
            <p className="text-slate-500 text-sm">
              For users of the VignyX app by VignyX Labs
            </p>
          </div>

          <div className="prose prose-slate max-w-none">
            <div className="space-y-8 text-slate-700 leading-relaxed">
              <section>
                <h2 className="text-xl font-bold text-[#0f172a] mb-3">How to Request Deletion</h2>
                <ol className="list-decimal pl-5 space-y-2">
                  <li>
                    Send an email to{" "}
                    <a href="mailto:vignyx.labs@gmail.com" className="text-[#4338ca] hover:underline">
                      vignyx.labs@gmail.com
                    </a>{" "}
                    with the subject line <strong>&ldquo;Delete my account&rdquo;</strong>.
                  </li>
                  <li>
                    Send it from the email address registered to your VignyX account, and include the
                    phone number or username you sign in with so we can verify it&apos;s you.
                  </li>
                  <li>
                    We will confirm your request and permanently delete your account within{" "}
                    <strong>30 days</strong>. You will receive a confirmation email once it is done.
                  </li>
                </ol>
              </section>

              <section>
                <h2 className="text-xl font-bold text-[#0f172a] mb-3">What Gets Deleted</h2>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Your account and sign-in credentials</li>
                  <li>Personal information (name, email address, phone number)</li>
                  <li>Photos of medicine labels and documents you scanned or uploaded</li>
                  <li>Your inventory records, sales history, and app activity</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-bold text-[#0f172a] mb-3">What We Retain</h2>
                <p>
                  Billing and invoice records (such as GST invoices) are retained for the period
                  required by applicable Indian tax and accounting laws, even after account deletion.
                  These records are kept only for legal compliance and are not used for any other
                  purpose.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-[#0f172a] mb-3">Deleting Specific Data Only</h2>
                <p>
                  If you want certain data removed (for example, uploaded photos or specific records)
                  without deleting your whole account, email us at the same address describing what you
                  would like removed, and we will process it the same way.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-[#0f172a] mb-3">Contact</h2>
                <p>
                  For any questions about data deletion, contact us at:<br />
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
