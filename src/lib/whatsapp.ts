const GRAPH_API_VERSION = "v21.0";

export type WhatsAppSendResult =
  | { ok: true; data: unknown }
  | { ok: false; error: unknown; status?: number };

function getCredentials(phoneNumberId?: string) {
  const token = process.env.WHATSAPP_ACCESS_TOKEN;
  const fromId = phoneNumberId ?? process.env.WHATSAPP_PHONE_NUMBER_ID;
  return { token, fromId };
}

export async function sendTextMessage(
  to: string,
  text: string,
  phoneNumberId?: string
): Promise<WhatsAppSendResult> {
  const { token, fromId } = getCredentials(phoneNumberId);

  if (!token || !fromId) {
    console.error(
      "[whatsapp] Missing WHATSAPP_ACCESS_TOKEN or WHATSAPP_PHONE_NUMBER_ID"
    );
    return { ok: false, error: "not_configured" };
  }

  const res = await fetch(
    `https://graph.facebook.com/${GRAPH_API_VERSION}/${fromId}/messages`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        messaging_product: "whatsapp",
        recipient_type: "individual",
        to,
        type: "text",
        text: { body: text },
      }),
    }
  );

  const data = await res.json().catch(() => ({}));

  if (!res.ok) {
    console.error("[whatsapp] Send failed", {
      status: res.status,
      phoneNumberId: fromId,
      to,
      error: data,
    });
    return { ok: false, error: data, status: res.status };
  }

  console.log("[whatsapp] Send ok", { to, type: "text" });
  return { ok: true, data };
}
