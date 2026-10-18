// Public price list. All prices are in INR and exclude 18% GST.
// Yearly billing = 12 months for the price of 10.

export interface RetailPlan {
  id: string;
  name: string;
  tagline: string;
  monthly: number;
  yearly: number;
  users: string;
  scans: string;
  features: string[];
  popular?: boolean;
}

export const retailPlans: RetailPlan[] = [
  {
    id: "starter",
    name: "Starter",
    tagline: "For a single medical shop getting off paper",
    monthly: 999,
    yearly: 9990,
    users: "2 users",
    scans: "30 AI bill scans / month",
    features: [
      "GST billing with bill PDF & WhatsApp bills",
      "Loose tablet & strip billing",
      "Schedule H / H1 / X register",
      "Udhaar — customer credit & dues",
      "Expiry & low-stock alerts on WhatsApp",
      "Stock by batch, expiry & rack",
      "Sales, stock & GST reports",
    ],
  },
  {
    id: "professional",
    name: "Professional",
    tagline: "For busy pharmacies that buy from many distributors",
    monthly: 1999,
    yearly: 19990,
    users: "5 users",
    scans: "300 AI bill scans / month",
    popular: true,
    features: [
      "Everything in Starter",
      "AI Bill Reader — upload any supplier bill",
      "Purchase orders & bill-vs-order checking",
      "Expiry returns & credit recovery",
      "Distributor payables & due dates",
      "Advanced reports",
    ],
  },
  {
    id: "business",
    name: "Business",
    tagline: "For high-volume stores and two-shop owners",
    monthly: 2999,
    yearly: 29990,
    users: "10 users",
    scans: "Unlimited AI bill scans (fair use)",
    features: [
      "Everything in Professional",
      "2 locations included",
      "Priority support",
      "Dedicated onboarding",
    ],
  },
];

export const addOns = [
  { label: "Extra user", price: "₹299 / month" },
  { label: "Extra AI bill scans", price: "₹499 per 100" },
  {
    label: "Data migration from Marg or other software",
    price: "Free for our first 100 customers, then ₹2,999 one-time",
  },
  { label: "On-site training", price: "₹1,999 per visit" },
];

export const launchOffers = [
  {
    icon: "🎁",
    title: "First month free",
    body: "Use every feature of your plan for a full month. No card needed.",
  },
  {
    icon: "🔒",
    title: "Founding price, locked for life",
    body: "Our first 11 customers keep today's price for as long as they stay with us.",
  },
  {
    icon: "🤝",
    title: "1 month free per referral",
    body: "Refer another pharmacy. When they subscribe, you get a month on us.",
  },
  {
    icon: "🚚",
    title: "Free data migration",
    body: "Moving from Marg or another software? We move your data for free for our first 100 customers.",
  },
];

export function formatINR(value: number) {
  return `₹${value.toLocaleString("en-IN")}`;
}
