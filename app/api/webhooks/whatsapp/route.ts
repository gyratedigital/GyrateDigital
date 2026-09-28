import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";

/**
 * WhatsApp Cloud API webhook
 * Meta App Dashboard → WhatsApp → Configuration → Callback URL:
 *   https://your-domain.com/api/webhooks/whatsapp
 * Verify token must match WHATSAPP_VERIFY_TOKEN in env.
 */

const VERIFY_TOKEN = process.env.WHATSAPP_VERIFY_TOKEN;
const APP_SECRET = process.env.WHATSAPP_APP_SECRET;

/** GET — Meta verification challenge when you first subscribe the webhook. */
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
      // Meta expects the raw challenge string as the response body
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

    // Optional: validate X-Hub-Signature-256 when WHATSAPP_APP_SECRET is set
    if (APP_SECRET) {
      const signature = request.headers.get("x-hub-signature-256");
      if (!verifySignature(rawBody, signature, APP_SECRET)) {
        console.warn("[whatsapp webhook] Invalid signature");
        return new NextResponse("Invalid signature", { status: 401 });
      }
    }

    const body = JSON.parse(rawBody) as WhatsAppWebhookPayload;

    if (body.object !== "whatsapp_business_account") {
      return NextResponse.json({ status: "ignored" }, { status: 200 });
    }

    for (const entry of body.entry ?? []) {
      for (const change of entry.changes ?? []) {
        if (change.field !== "messages") continue;

        const value = change.value;
        const messages = value?.messages ?? [];
        const contacts = value?.contacts ?? [];
        const statuses = value?.statuses ?? [];

        for (const status of statuses) {
          console.log("[whatsapp webhook] status", {
            id: status.id,
            status: status.status,
            recipient: status.recipient_id,
          });
        }

        for (const message of messages) {
          const contact = contacts.find((c) => c.wa_id === message.from);
          const text =
            message.type === "text" ? message.text?.body : `[${message.type}]`;

          console.log("[whatsapp webhook] message", {
            from: message.from,
            name: contact?.profile?.name,
            type: message.type,
            id: message.id,
            text,
          });

          // Hook for automation: reply / CRM / AI agent, etc.
          await handleIncomingMessage({
            from: message.from,
            name: contact?.profile?.name,
            message,
            phoneNumberId: value?.metadata?.phone_number_id,
          });
        }
      }
    }

    // Always acknowledge quickly so Meta does not retry
    return NextResponse.json({ status: "ok" }, { status: 200 });
  } catch (error) {
    console.error("[whatsapp webhook] POST error", error);
    // Still return 200 for parse issues after accept to avoid retry storms;
    // return 500 only for unexpected failures Meta should retry.
    return NextResponse.json({ status: "error" }, { status: 500 });
  }
}

async function handleIncomingMessage(payload: {
  from: string;
  name?: string;
  message: WhatsAppMessage;
  phoneNumberId?: string;
}) {
  // Placeholder for your automation pipeline (auto-reply, queue, AI, etc.)
  void payload;
}

function verifySignature(
  rawBody: string,
  signatureHeader: string | null,
  appSecret: string
): boolean {
  if (!signatureHeader?.startsWith("sha256=")) return false;

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
        contacts?: Array<{
          profile?: { name?: string };
          wa_id?: string;
        }>;
        messages?: WhatsAppMessage[];
        statuses?: Array<{
          id?: string;
          status?: string;
          timestamp?: string;
          recipient_id?: string;
        }>;
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
