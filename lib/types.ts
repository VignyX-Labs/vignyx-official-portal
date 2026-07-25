export type LeadFormType = "contact" | "early_access";

export interface LeadTokenFields {
  timestamp: number;
  token: string;
  // honeypot — real users never fill this in
  website?: string;
}

export interface ContactLeadPayload extends LeadTokenFields {
  formType: "contact";
  name: string;
  shop?: string;
  phone: string;
  message?: string;
  businessType: string;
  city: string;
  inventoryMethod: string;
  billingVolume?: string;
}

export interface EarlyAccessLeadPayload extends LeadTokenFields {
  formType: "early_access";
  phone: string;
  city?: string;
}

export type LeadPayload = ContactLeadPayload | EarlyAccessLeadPayload;

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  shopName: string;
  location: string;
  quote: string;
  initials: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface ComparisonRow {
  id: string;
  criterion: string;
  manual: string;
  vignyx: string;
}

export interface ROIInputs {
  monthlyPurchaseValue: number;
  expiryLossPercent: number;
  stockoutsPerMonth: number;
}
