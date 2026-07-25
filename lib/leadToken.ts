import crypto from "crypto";

const MIN_FILL_TIME_MS = 2500;
const MAX_TOKEN_AGE_MS = 30 * 60 * 1000;

function getSecret() {
  const secret = process.env.LEAD_FORM_SECRET;
  if (!secret) {
    throw new Error("LEAD_FORM_SECRET is not configured");
  }
  return secret;
}

export function signToken(timestamp: number): string {
  return crypto
    .createHmac("sha256", getSecret())
    .update(String(timestamp))
    .digest("hex");
}

export function verifyToken(timestamp: number, token: string): boolean {
  if (!timestamp || !token) return false;

  const now = Date.now();
  const age = now - timestamp;
  if (age < MIN_FILL_TIME_MS || age > MAX_TOKEN_AGE_MS) return false;

  const expected = signToken(timestamp);
  const expectedBuf = Buffer.from(expected, "hex");
  const actualBuf = Buffer.from(token, "hex");
  if (expectedBuf.length !== actualBuf.length) return false;

  return crypto.timingSafeEqual(expectedBuf, actualBuf);
}
