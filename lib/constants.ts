// TODO: replace with the real WhatsApp Business number before launch
export const WHATSAPP_NUMBER = "919999999999";

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://vignyx.in";

export const CONTACT_EMAIL = "vignyx.labs@gmail.com";

export const INSTAGRAM_HANDLE = "@vignyx.in";
export const INSTAGRAM_URL = "https://instagram.com/vignyx.in";

export function whatsAppLink(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
