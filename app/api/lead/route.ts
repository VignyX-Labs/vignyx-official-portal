import { NextResponse } from "next/server";
import { verifyToken } from "@/lib/leadToken";
import { leadPayloadSchema } from "@/lib/validation";
import type { ContactLeadInput, EarlyAccessLeadInput } from "@/lib/validation";

const FAKE_SUCCESS = NextResponse.json({ success: true });

function buildEmailContent(
  data: ContactLeadInput | EarlyAccessLeadInput
): { subject: string; html: string } {
  if (data.formType === "contact") {
    return {
      subject: `New demo request — ${data.shop || data.name} (${data.city})`,
      html: `
        <h2>New contact form lead</h2>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Shop / Hospital:</strong> ${data.shop || "—"}</p>
        <p><strong>WhatsApp:</strong> ${data.phone}</p>
        <p><strong>City:</strong> ${data.city}</p>
        <p><strong>Business type:</strong> ${data.businessType}</p>
        <p><strong>Current inventory method:</strong> ${data.inventoryMethod}</p>
        <p><strong>Monthly billing volume:</strong> ${data.billingVolume || "Not provided"}</p>
        <p><strong>Message:</strong> ${data.message || "—"}</p>
      `,
    };
  }

  return {
    subject: `New early access signup — ${data.name} (${data.city || "unknown city"})`,
    html: `
      <h2>New early access lead</h2>
      <p><strong>Name:</strong> ${data.name}</p>
      <p><strong>WhatsApp:</strong> ${data.phone}</p>
      <p><strong>City:</strong> ${data.city || "Not provided"}</p>
    `,
  };
}

async function sendLeadEmail(data: ContactLeadInput | EarlyAccessLeadInput) {
  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.RESEND_FROM_EMAIL;
  const to = process.env.LEAD_NOTIFICATION_EMAIL;

  if (!apiKey || !from || !to) {
    throw new Error("Email notification is not configured");
  }

  const { subject, html } = buildEmailContent(data);

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ from, to, subject, html }),
  });

  if (!res.ok) {
    const body = await res.text();
    throw new Error(`Resend request failed: ${res.status} ${body}`);
  }
}

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { success: false, error: "Invalid request body" },
      { status: 400 }
    );
  }

  // Honeypot: bots that autofill every field get a fake success, never a hint they were caught
  if (
    typeof body === "object" &&
    body !== null &&
    "website" in body &&
    (body as { website?: string }).website
  ) {
    return FAKE_SUCCESS;
  }

  const parsed = leadPayloadSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { success: false, error: parsed.error.issues[0]?.message ?? "Invalid input" },
      { status: 400 }
    );
  }

  if (!verifyToken(parsed.data.timestamp, parsed.data.token)) {
    // Invalid/expired/too-fast token — treat as fake success to avoid tipping off bots
    return FAKE_SUCCESS;
  }

  try {
    await sendLeadEmail(parsed.data);
  } catch (err) {
    console.error("Lead email failed:", err);
    return NextResponse.json(
      { success: false, error: "Something went wrong. Please try again or reach us on WhatsApp." },
      { status: 500 }
    );
  }

  return NextResponse.json({ success: true });
}
