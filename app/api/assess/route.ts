import { NextRequest, NextResponse } from "next/server";
import { randomUUID } from "crypto";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
const SUPABASE_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

interface AssessmentPayload {
  careName?: string;
  relationship?: string;
  ageRange?: string;
  challenges?: string[];
  additionalContext?: string;
  livingSituation?: string;
  city?: string;
  state?: string;
  hasPCP?: string;
  yourName?: string;
  email?: string;
  phone?: string;
  bestTime?: string;
}

export async function POST(request: NextRequest) {
  let body: AssessmentPayload;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  const email = (body.email || "").trim().toLowerCase();
  if (!email || !email.includes("@")) {
    return NextResponse.json({ error: "Valid email required" }, { status: 400 });
  }
  if (!body.yourName) {
    return NextResponse.json({ error: "Name required" }, { status: 400 });
  }

  if (!SUPABASE_URL || !SUPABASE_KEY) {
    console.error("[assess] Missing Supabase env vars");
    return NextResponse.json({ error: "Server misconfigured" }, { status: 500 });
  }

  const assessmentId = randomUUID();

  // Full payload goes into metadata so we keep every field a family ticked.
  // Duplicates (same email, same source) are allowed at the intake stage — a family may
  // submit twice before we call them. The unique index is on (email, source).
  // We disambiguate by appending the new uuid to the source suffix so re-submissions don't dedupe.
  const source = `coop-assess:${assessmentId.slice(0, 8)}`;

  try {
    const res = await fetch(`${SUPABASE_URL}/rest/v1/email_captures`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        apikey: SUPABASE_KEY,
        Authorization: `Bearer ${SUPABASE_KEY}`,
        Prefer: "return=minimal",
      },
      body: JSON.stringify({
        email,
        source,
        role: body.relationship || null,
        metadata: {
          assessmentId,
          submittedAt: new Date().toISOString(),
          yourName: body.yourName,
          phone: body.phone || null,
          bestTime: body.bestTime || null,
          careName: body.careName || null,
          ageRange: body.ageRange || null,
          challenges: body.challenges || [],
          additionalContext: body.additionalContext || null,
          livingSituation: body.livingSituation || null,
          city: body.city || null,
          state: body.state || null,
          hasPCP: body.hasPCP || null,
        },
      }),
    });

    if (!res.ok) {
      const detail = await res.text().catch(() => "");
      console.error("[assess] Supabase error", res.status, detail.slice(0, 200));
      return NextResponse.json({ error: "Submission failed" }, { status: 502 });
    }

    console.log(
      `[assess] New intake — id:${assessmentId} name:${body.yourName} email:${email}`
    );

    return NextResponse.json({ success: true, assessmentId });
  } catch (err) {
    console.error("[assess] Network error", err);
    return NextResponse.json({ error: "Submission failed" }, { status: 502 });
  }
}
