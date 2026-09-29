const GRAPH_API_VERSION = "v21.0";

export type WhatsAppSendResult =
  | { ok: true; data: unknown }
  | { ok: false; error: unknown; status?: number };

function getCredentials(phoneNumberId?: string) {
  // TEMP: hardcoded for local testing — remove before commit
  const token =
    "EAAN6R9MH8ggBSk7OWzZADw5juWuZA8TOZBQJpNYn11ZCJlyRFvfgUChTZAArI85ZC2EY2ry7ZC5hYJpcyrUEqq8h4f3eRfkMbxEUDFiET3G5GzbjXhPUFLfJ0C88SdaZCw6I9JIDgWmo8qBsUlOXj6NEVMz3wzwHlkjktpC7fkbqNQJNnlp7mysgeSlSqkBMihdZAOZAA4ZCwoaXur7ErUfZA917JnOWwYl0iiWiFeeNlBTLM3n6lEgOoYMjgekuFoGR3LnvvTDQZCa1iotQA3EIsA5OcfzS0QwZDZD";
  const fromId = phoneNumberId ?? "1332922439908653";
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
