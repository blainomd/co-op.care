import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
const SUPABASE_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

export async function POST(request: NextRequest) {
  let body: { email?: string; source?: string; role?: string; metadata?: Record<string, unknown> };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  const email = (body.email || "").trim().toLowerCase();
  if (!email || !email.includes("@")) {
    return NextResponse.json({ error: "Valid email required" }, { status: 400 });
  }

  if (!SUPABASE_URL || !SUPABASE_KEY) {
    console.error("[subscribe] Missing Supabase env vars");
    return NextResponse.json({ error: "Server misconfigured" }, { status: 500 });
  }

  const source = (body.source || "coop-footer").toString().slice(0, 80);
  const role = body.role ? body.role.toString().slice(0, 40) : null;
  const metadata = body.metadata && typeof body.metadata === "object" ? body.metadata : {};

  try {
    const res = await fetch(`${SUPABASE_URL}/rest/v1/email_captures`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        apikey: SUPABASE_KEY,
        Authorization: `Bearer ${SUPABASE_KEY}`,
        Prefer: "return=minimal",
      },
      body: JSON.stringify({ email, source, role, metadata }),
    });

    if (!res.ok && res.status !== 409) {
      const detail = await res.text().catch(() => "");
      console.error("[subscribe] Supabase error", res.status, detail.slice(0, 200));
      return NextResponse.json({ error: "Signup failed" }, { status: 502 });
    }

    return NextResponse.json({ success: true, deduped: res.status === 409 });
  } catch (err) {
    console.error("[subscribe] Network error", err);
    return NextResponse.json({ error: "Signup failed" }, { status: 502 });
  }
}
