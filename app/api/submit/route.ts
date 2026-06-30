import { NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";

export const runtime = "nodejs";

const DATA_DIR = path.join(process.cwd(), "data");
const FILE = path.join(DATA_DIR, "submissions.json");

// Google Apps Script web-app URL. When set, each submission is appended to a
// Google Sheet and an email notification is sent to the cooperative.
const WEBHOOK_URL = process.env.SHEETS_WEBHOOK_URL;

type Submission = {
  id: string;
  type: string;
  submittedAt: string;
  name: string;
  email: string;
  phone: string;
  plan?: string;
  message: string;
};

async function readAll(): Promise<Submission[]> {
  try {
    const raw = await fs.readFile(FILE, "utf8");
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

/** Best-effort local backup. Silently ignored on read-only hosts (e.g. Vercel). */
async function saveToFile(entry: Submission): Promise<boolean> {
  try {
    await fs.mkdir(DATA_DIR, { recursive: true });
    const all = await readAll();
    all.push(entry);
    await fs.writeFile(FILE, JSON.stringify(all, null, 2), "utf8");
    return true;
  } catch {
    return false;
  }
}

/** Forward to Google Sheets + email via the Apps Script web app. */
async function sendToWebhook(entry: Submission): Promise<boolean> {
  if (!WEBHOOK_URL) return false;
  const res = await fetch(WEBHOOK_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(entry),
  });
  if (!res.ok) {
    throw new Error(`Webhook responded ${res.status}`);
  }
  return true;
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Spam guards. Respond with success so bots don't retry, but never
    // store or forward the submission.
    const honeypot = typeof body?.company === "string" ? body.company.trim() : "";
    if (honeypot !== "") {
      return NextResponse.json({ ok: true });
    }
    if (typeof body?.elapsedMs === "number" && body.elapsedMs < 2000) {
      return NextResponse.json({ ok: true });
    }

    const name = String(body?.name ?? "").trim();
    if (!name) {
      return NextResponse.json(
        { ok: false, error: "Name is required." },
        { status: 400 }
      );
    }

    const entry: Submission = {
      id: crypto.randomUUID(),
      type: body?.type === "membership" ? "membership" : "contact",
      submittedAt: new Date().toISOString(),
      name,
      email: String(body?.email ?? "").trim(),
      phone: String(body?.phone ?? "").trim(),
      plan: body?.plan ? String(body.plan).trim() : undefined,
      message: String(body?.message ?? "").trim(),
    };

    // Primary store: Google Sheets + email (if configured).
    const sentToSheet = await sendToWebhook(entry);

    // Local backup (no-op on serverless read-only filesystems).
    const savedToFile = await saveToFile(entry);

    if (!sentToSheet && !savedToFile) {
      throw new Error("No storage destination succeeded.");
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Failed to save submission:", err);
    return NextResponse.json(
      { ok: false, error: "Could not save your submission. Please try again." },
      { status: 500 }
    );
  }
}
