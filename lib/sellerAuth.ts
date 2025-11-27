import { NextRequest } from 'next/server';

/**
 * Check if seller is authenticated from request cookies
 * This validates the seller-session cookie which has format: SESSION-{timestamp}-{random}
 */
export function isSellerAuthenticated(request: NextRequest): boolean {
  const sessionCookie = request.cookies.get('seller-session');
  const value = sessionCookie?.value;
  if (!value || value.length === 0) return false;

  const prefix = 'SESSION-';
  if (!value.startsWith(prefix)) return false;

  // Remove prefix and split only at the first hyphen after the timestamp.
  const rest = value.slice(prefix.length);
  const firstDash = rest.indexOf('-');
  if (firstDash === -1) return false;

  const timestampStr = rest.slice(0, firstDash);
  if (!/^[0-9]+$/.test(timestampStr)) return false;

  let timestamp = Number(timestampStr);
  // Normalize seconds (10-digit) to milliseconds; if it's 13-digit assume ms.
  if (timestampStr.length === 10) {
    timestamp = timestamp * 1000;
  }

  if (!Number.isFinite(timestamp) || timestamp <= 0) return false;

  // Optional: reject timestamps far in the future (allow small clock skew)
  const now = Date.now();
  if (timestamp - now > 5 * 60 * 1000) return false; // more than 5 minutes in future

  // Check if session is expired (24 hours)
  const expiresAt = timestamp + 24 * 60 * 60 * 1000;
  if (now > expiresAt) return false;

  // Token format appears valid and not expired.
  // Note: In production, also verify the token exists in your session store (Redis/database)
  return true;
}

/**
 * Middleware helper to require seller authentication
 * Returns null if authenticated, or an error response if not
 */
export function requireSellerAuth(request: NextRequest): null | Response {
  if (!isSellerAuthenticated(request)) {
    return new Response(
      JSON.stringify({ success: false, error: 'Unauthorized. Seller authentication required.' }),
      {
        status: 403,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  }
  return null;
}