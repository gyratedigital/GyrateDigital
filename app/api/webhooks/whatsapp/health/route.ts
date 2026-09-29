import { NextResponse } from "next/server";

/** Safe config check — does not expose secrets. */
export async function GET() {
  const token = process.env.WHATSAPP_ACCESS_TOKEN;
  const phoneNumberId = process.env.WHATSAPP_PHONE_NUMBER_ID;
  const verifyToken = process.env.WHATSAPP_VERIFY_TOKEN;
  const appSecret = process.env.WHATSAPP_APP_SECRET;

  return NextResponse.json({
    ok: Boolean(token && phoneNumberId),
    configured: {
      WHATSAPP_ACCESS_TOKEN: Boolean(token),
      WHATSAPP_PHONE_NUMBER_ID: Boolean(phoneNumberId),
      WHATSAPP_VERIFY_TOKEN: Boolean(verifyToken),
      WHATSAPP_APP_SECRET: Boolean(appSecret),
    },
    notes: [
      "Webhook URL: /api/webhooks/whatsapp",
      "Subscribe to the messages field in Meta → WhatsApp → Configuration.",
      "In Development mode, add your phone as a test recipient in API Setup.",
      "Messages must go to the Cloud API business number, not a personal WhatsApp app.",
      "If WHATSAPP_APP_SECRET is wrong, webhooks return 401 and no auto-reply is sent.",
    ],
  });
}
