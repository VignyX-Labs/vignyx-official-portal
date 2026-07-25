"use client";

import { useEffect, useState } from "react";

interface LeadToken {
  timestamp: number;
  token: string;
}

interface LeadResponse {
  success: boolean;
  error?: string;
}

export function useLeadForm() {
  const [leadToken, setLeadToken] = useState<LeadToken | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetch("/api/lead/token")
      .then((res) => res.json())
      .then(setLeadToken)
      .catch(() => setLeadToken(null));
  }, []);

  async function submit(
    payload: Record<string, unknown>
  ): Promise<LeadResponse> {
    if (!leadToken) {
      return {
        success: false,
        error: "Still loading — please try again in a moment.",
      };
    }

    setLoading(true);
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...payload,
          timestamp: leadToken.timestamp,
          token: leadToken.token,
        }),
      });
      return (await res.json()) as LeadResponse;
    } catch {
      return { success: false, error: "Network error. Please try again." };
    } finally {
      setLoading(false);
    }
  }

  return { submit, loading };
}
