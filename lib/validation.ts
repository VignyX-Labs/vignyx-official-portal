import { z } from "zod";

const phoneRegex = /^[6-9]\d{9}$|^\+?91[6-9]\d{9}$/;

const tokenFields = {
  timestamp: z.number(),
  token: z.string().min(1),
  website: z.string().max(0).optional().or(z.literal("")), // honeypot: must stay empty
};

export const contactLeadSchema = z.object({
  formType: z.literal("contact"),
  name: z.string().trim().min(2, "Please enter your name").max(100),
  shop: z.string().trim().max(150).optional().or(z.literal("")),
  phone: z
    .string()
    .trim()
    .regex(phoneRegex, "Please enter a valid Indian mobile number"),
  message: z.string().trim().max(2000).optional().or(z.literal("")),
  businessType: z.string().trim().min(1, "Please select your business type"),
  city: z.string().trim().min(2, "Please enter your city").max(100),
  inventoryMethod: z
    .string()
    .trim()
    .min(1, "Please select your current inventory method"),
  billingVolume: z.string().trim().max(50).optional().or(z.literal("")),
  ...tokenFields,
});

export const earlyAccessLeadSchema = z.object({
  formType: z.literal("early_access"),
  name: z.string().trim().min(2, "Please enter your name").max(100),
  phone: z
    .string()
    .trim()
    .regex(phoneRegex, "Please enter a valid Indian mobile number"),
  city: z.string().trim().max(100).optional().or(z.literal("")),
  ...tokenFields,
});

export const leadPayloadSchema = z.discriminatedUnion("formType", [
  contactLeadSchema,
  earlyAccessLeadSchema,
]);

export type ContactLeadInput = z.infer<typeof contactLeadSchema>;
export type EarlyAccessLeadInput = z.infer<typeof earlyAccessLeadSchema>;
