import Link from "next/link";
import VignyXLogo from "@/components/VignyXLogo";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center px-4 text-center">
      <VignyXLogo size={56} />
      <h1 className="text-8xl font-bold text-[#4338ca] mt-8 mb-2">404</h1>
      <h2 className="text-2xl font-bold text-[#0f172a] mb-4">Page not found</h2>
      <p className="text-slate-500 max-w-sm mb-8">
        The page you&apos;re looking for doesn&apos;t exist. Let&apos;s get you back to managing your inventory.
      </p>
      <Link
        href="/"
        className="bg-[#4338ca] text-white px-6 py-3 rounded-xl font-semibold hover:bg-[#3730a3] transition-colors"
      >
        Back to VignyX →
      </Link>
    </div>
  );
}
