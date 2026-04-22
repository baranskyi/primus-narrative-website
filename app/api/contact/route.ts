import { promises as fs } from "node:fs";
import path from "node:path";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

type Payload = {
  name?: string;
  email?: string;
  company?: string;
  website?: string;
  service?: string;
  budget?: string;
  message?: string;
  consent?: string | boolean;
};

function isEmail(v: unknown): v is string {
  return typeof v === "string" && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
}

function sanitize(v: unknown, max = 2000): string {
  if (typeof v !== "string") return "";
  return v.trim().slice(0, max);
}

export async function POST(request: Request) {
  let body: Payload;
  try {
    body = (await request.json()) as Payload;
  } catch {
    return Response.json({ error: "Invalid JSON body." }, { status: 400 });
  }

  const name = sanitize(body.name, 160);
  const email = sanitize(body.email, 200);
  const company = sanitize(body.company, 200);
  const website = sanitize(body.website, 300);
  const service = sanitize(body.service, 120);
  const budget = sanitize(body.budget, 120);
  const message = sanitize(body.message, 4000);
  const consent = body.consent === true || body.consent === "on";

  if (!name || !isEmail(email) || !company || !message) {
    return Response.json(
      { error: "Please complete the required fields with a valid email." },
      { status: 400 }
    );
  }
  if (!consent) {
    return Response.json(
      { error: "Please accept the contact consent to continue." },
      { status: 400 }
    );
  }

  const record = {
    receivedAt: new Date().toISOString(),
    name,
    email,
    company,
    website,
    service,
    budget,
    message,
    ip:
      request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
      request.headers.get("x-real-ip") ??
      null,
    userAgent: request.headers.get("user-agent") ?? null,
  };

  const forwardUrl = process.env.CONTACT_WEBHOOK_URL;
  if (forwardUrl) {
    try {
      await fetch(forwardUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(record),
      });
    } catch (err) {
      console.error("[contact] webhook forward failed", err);
    }
  } else {
    try {
      const dir = path.join(process.cwd(), ".data");
      await fs.mkdir(dir, { recursive: true });
      const file = path.join(dir, "contact-submissions.jsonl");
      await fs.appendFile(file, JSON.stringify(record) + "\n", "utf8");
    } catch (err) {
      console.error("[contact] local write failed", err);
    }
  }

  console.log("[contact] new enquiry", {
    name: record.name,
    email: record.email,
    company: record.company,
    service: record.service,
  });

  return Response.json({ ok: true });
}
