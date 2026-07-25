"use client";

import { trackEvent } from "@/lib/analytics";

export default function StickyMobileCTA() {
  return (
    <div className="fixed bottom-0 inset-x-0 z-30 md:hidden bg-white/95 backdrop-blur-md border-t border-slate-100 px-4 py-3 flex gap-3">
      <a
        href="/#early-access"
        onClick={() => trackEvent("cta_click", { cta: "get_early_access", location: "sticky_mobile" })}
        className="btn-primary flex-1 justify-center text-sm py-2.5"
      >
        Get Early Access
      </a>
    </div>
  );
}
