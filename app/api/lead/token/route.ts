import { NextResponse } from "next/server";
import { signToken } from "@/lib/leadToken";

// Must stay dynamic — otherwise Next.js statically caches one fixed
// timestamp/token pair at build time and serves it to every visitor forever,
// breaking the freshness check every lead submission depends on.
export const dynamic = "force-dynamic";

export async function GET() {
  const timestamp = Date.now();
  const token = signToken(timestamp);
  return NextResponse.json({ timestamp, token });
}
