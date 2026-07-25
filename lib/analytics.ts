declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    fbq?: (...args: unknown[]) => void;
  }
}

export function trackEvent(name: string, params?: Record<string, unknown>) {
  if (typeof window === "undefined") return;

  if (typeof window.gtag === "function") {
    window.gtag("event", name, params);
  }
  if (typeof window.fbq === "function") {
    window.fbq("trackCustom", name, params);
  }
}

export function trackPageview(url: string) {
  if (typeof window === "undefined") return;

  if (typeof window.gtag === "function" && process.env.NEXT_PUBLIC_GA_ID) {
    window.gtag("config", process.env.NEXT_PUBLIC_GA_ID, { page_path: url });
  }
  if (typeof window.fbq === "function") {
    window.fbq("track", "PageView");
  }
}
