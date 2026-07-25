import { FAQItem } from "@/lib/types";

export const faqItems: FAQItem[] = [
  {
    id: "setup-time",
    question: "How long does setup take?",
    answer:
      "Most shops are up and running in under 3 minutes. Create your account, tell us how many racks you have, and you're ready to start scanning stock in — no training session required.",
  },
  {
    id: "hardware",
    question: "Do I need special hardware?",
    answer:
      "No. VignyX works with the camera on any Android phone or tablet you already own. There's no dedicated barcode scanner or POS hardware required to get started.",
  },
  {
    id: "import-stock",
    question: "Can I import my existing stock?",
    answer:
      "Yes. You can bulk-import your current inventory from an Excel sheet, or add it gradually by scanning items as they move through your counter — whichever fits your workflow better.",
  },
  {
    id: "multiple-staff",
    question: "Can multiple staff use it?",
    answer:
      "Yes. Every plan supports multiple user logins so your staff can bill and manage stock from their own accounts, with permissions matched to their role.",
  },
  {
    id: "upgrade-plans",
    question: "Can I upgrade plans later?",
    answer:
      "Absolutely. You can move between Starter, Pro, and Hospital plans at any time as your shop grows — your data and settings carry over automatically.",
  },
  {
    id: "data-security",
    question: "Is my data secure?",
    answer:
      "Yes. Your inventory and billing data is stored on encrypted cloud infrastructure with role-based access, so only the people you authorize can see it. We never sell or share your shop's data.",
  },
  {
    id: "barcode-scanners",
    question: "Do I need barcode scanners?",
    answer:
      "No dedicated scanner is required — your phone's camera reads medicine barcodes directly. A physical scanner is optional and can speed up high-volume billing if you already use one.",
  },
  {
    id: "offline-support",
    question: "Does it work offline?",
    answer:
      "VignyX is a cloud-based platform, so it needs an internet connection to sync stock and billing in real time. It's built to work smoothly on standard Indian mobile networks, including patchy 4G.",
  },
];
