import { FAQItem } from "@/lib/types";

export const faqItems: FAQItem[] = [
  {
    id: "who-for",
    question: "Who is VignyX for?",
    answer:
      "VignyX has six account types: retail pharmacy, hospital pharmacy, warehouse/godown, distributor, C&F agent and pharma company. A single medical shop and a multi-branch chain use the same platform — you only switch on what you need.",
  },
  {
    id: "free-trial",
    question: "Is there a free trial?",
    answer:
      "Yes. Your first month is free, with no card needed. If VignyX isn't right for you, you simply don't continue — you owe nothing.",
  },
  {
    id: "pricing-gst",
    question: "Do your prices include GST?",
    answer:
      "No. All prices are in Indian Rupees and exclude 18% GST. Yearly plans give you 12 months for the price of 10.",
  },
  {
    id: "ai-bill-reader",
    question: "How does the AI Bill Reader work?",
    answer:
      "Upload a photo, PDF, Excel or CSV of your supplier's bill. VignyX reads the items, batch, expiry, quantity and free quantity, rate, MRP, GST, HSN and discounts, matches each line to your medicines, and checks the totals. You review everything before the stock is received. A different strength or pack size is never matched automatically.",
  },
  {
    id: "duplicate-bills",
    question: "What if a bill is uploaded twice?",
    answer:
      "VignyX catches the same invoice number within the same financial year, however it's written. It also warns you if a distributor delivered mostly the same items in the last 15 days. You can still choose to receive it if it's genuine.",
  },
  {
    id: "migration",
    question: "I use Marg or another software. Can I switch?",
    answer:
      "Yes. We migrate your data from Marg or other software for you — free for our first 100 customers, and ₹2,999 one-time after that. You can also import opening stock from a sheet yourself.",
  },
  {
    id: "hardware",
    question: "Do I need special hardware?",
    answer:
      "No. VignyX runs in the cloud on Android phones, tablets and computers you already own. Your phone camera scans barcodes and bills. A barcode scanner or bill printer is optional.",
  },
  {
    id: "multiple-staff",
    question: "Can my staff use it with limited access?",
    answer:
      "Yes. Add workers and choose what each person can do — per feature and per location. A godown manager can see only the godown; a cashier only the counter.",
  },
  {
    id: "multi-branch-godown",
    question: "Does VignyX support branches and a central godown?",
    answer:
      "Yes. Branches raise stock requests, the godown approves and dispatches, and transfers are tracked in transit until received. You can see stock across every location from one account.",
  },
  {
    id: "distributor-retailers",
    question: "I'm a distributor. Do my retailers have to pay?",
    answer:
      "No. Pharmacies that order from you on VignyX use the ordering portal free. You pay only for your distributor account.",
  },
  {
    id: "data-security",
    question: "Is my data secure?",
    answer:
      "Yes. Your data is stored on encrypted cloud infrastructure and backed up continuously, with role-based access so only the people you authorise can see it. We never sell or share your business data.",
  },
  {
    id: "offline-support",
    question: "Does it work offline?",
    answer:
      "VignyX is a cloud platform, so it needs an internet connection to keep stock and billing in sync across devices and branches. It's built to work well on everyday Indian mobile networks, including patchy 4G.",
  },
];
