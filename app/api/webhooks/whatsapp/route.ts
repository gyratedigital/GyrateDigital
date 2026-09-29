import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";
import { sendTextMessage } from "@/lib/whatsapp";

export const runtime = "nodejs";

/**
 * WhatsApp Cloud API webhook
 * Health: GET /api/webhooks/whatsapp/health
 */

const VERIFY_TOKEN = process.env.WHATSAPP_VERIFY_TOKEN;
const APP_SECRET = process.env.WHATSAPP_APP_SECRET;

const globalForWa = globalThis as typeof globalThis & {
  whatsappProcessedMessageIds?: Set<string>;
};

function markMessageProcessed(messageId: string): boolean {
  if (!globalForWa.whatsappProcessedMessageIds) {
    globalForWa.whatsappProcessedMessageIds = new Set();
  }
  if (globalForWa.whatsappProcessedMessageIds.has(messageId)) {
    return false;
  }
  globalForWa.whatsappProcessedMessageIds.add(messageId);
  if (globalForWa.whatsappProcessedMessageIds.size > 5000) {
    globalForWa.whatsappProcessedMessageIds.clear();
  }
  return true;
}

/** GET — Meta verification challenge (or 400 if not a verify request). */
export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const mode = searchParams.get("hub.mode");
  const token = searchParams.get("hub.verify_token");
  const challenge = searchParams.get("hub.challenge");

  if (mode === "subscribe" && token && challenge) {
    if (!VERIFY_TOKEN) {
      console.error("[whatsapp webhook] WHATSAPP_VERIFY_TOKEN is not set");
      return new NextResponse("Verify token not configured", { status: 500 });
    }

    if (token === VERIFY_TOKEN) {
      return new NextResponse(challenge, {
        status: 200,
        headers: { "Content-Type": "text/plain" },
      });
    }

    console.warn("[whatsapp webhook] Verify token mismatch");
    return new NextResponse("Forbidden", { status: 403 });
  }

  return new NextResponse("Bad Request", { status: 400 });
}

/** POST — Event notifications (messages, statuses, etc.). */
export async function POST(request: NextRequest) {
  try {
    const rawBody = await request.text();

    if (APP_SECRET) {
      const signature = request.headers.get("x-hub-signature-256");
      if (!signature) {
        console.warn(
          "[whatsapp webhook] WHATSAPP_APP_SECRET is set but X-Hub-Signature-256 is missing"
        );
      } else if (!verifySignature(rawBody, signature, APP_SECRET)) {
        console.warn(
          "[whatsapp webhook] Invalid signature — check WHATSAPP_APP_SECRET (App Settings → Basic → App Secret, not verify token)"
        );
        return new NextResponse("Invalid signature", { status: 401 });
      }
    }

    const body = JSON.parse(rawBody) as WhatsAppWebhookPayload;

    console.log("[whatsapp webhook] POST", {
      object: body.object,
      entries: body.entry?.length ?? 0,
    });

    if (body.object !== "whatsapp_business_account") {
      return NextResponse.json({ status: "ignored" }, { status: 200 });
    }

    for (const entry of body.entry ?? []) {
      for (const change of entry.changes ?? []) {
        if (change.field !== "messages") continue;

        const value = change.value;
        const messages = value?.messages ?? [];
        const phoneNumberId = value?.metadata?.phone_number_id;

        for (const message of messages) {
          if (!markMessageProcessed(message.id)) {
            console.log("[whatsapp webhook] skip duplicate", message.id);
            continue;
          }

          console.log("[whatsapp webhook] message", {
            from: message.from,
            type: message.type,
            id: message.id,
          });

          await handleIncomingMessage({
            from: message.from,
            message,
            phoneNumberId,
          });
        }
      }
    }

    return NextResponse.json({ status: "ok" }, { status: 200 });
  } catch (error) {
    console.error("[whatsapp webhook] POST error", error);
    return NextResponse.json({ status: "error" }, { status: 500 });
  }
}

async function handleIncomingMessage(payload: {
  from: string;
  message: WhatsAppMessage;
  phoneNumberId?: string;
}) {
  const { from, message, phoneNumberId } = payload;

  if (message.type !== "text") return;

  const text = (message.text?.body ?? "").trim().toLowerCase();
  if (text !== "hi") return;

  console.log("[whatsapp webhook] hi reply →", from);
  const result = await sendTextMessage(from, "Hi", phoneNumberId);
  if (!result.ok) {
    console.error("[whatsapp webhook] hi reply failed", result.error);
  }
}

function verifySignature(
  rawBody: string,
  signatureHeader: string,
  appSecret: string
): boolean {
  if (!signatureHeader.startsWith("sha256=")) return false;

  const expected = signatureHeader.slice("sha256=".length);
  const digest = crypto
    .createHmac("sha256", appSecret)
    .update(rawBody, "utf8")
    .digest("hex");

  try {
    return crypto.timingSafeEqual(
      Buffer.from(digest, "hex"),
      Buffer.from(expected, "hex")
    );
  } catch {
    return false;
  }
}

type WhatsAppWebhookPayload = {
  object?: string;
  entry?: Array<{
    id?: string;
    changes?: Array<{
      field?: string;
      value?: {
        messaging_product?: string;
        metadata?: {
          display_phone_number?: string;
          phone_number_id?: string;
        };
        messages?: WhatsAppMessage[];
      };
    }>;
  }>;
};

type WhatsAppMessage = {
  from: string;
  id: string;
  timestamp: string;
  type: string;
  text?: { body?: string };
};
