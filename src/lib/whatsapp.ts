const GRAPH_API_VERSION = "v21.0";

export type WhatsAppSendResult =
  | { ok: true; data: unknown }
  | { ok: false; error: unknown; status?: number };

function getCredentials(phoneNumberId?: string) {
  // TEMP: hardcoded for local testing — remove before commit
  const token =
    "EAAN6R9MH8ggBShnSsRr7hlTpqTnUCVPd5JX0lmrZAC6CACrSmnmZBViZB6jYWuyoXtGjHJUF39KxicCwcZAHCKkBJR36u8UPdZA5V0F73GbcEh0zoHQbGe6ldGZBPcXuFqnNVERbTdRVRQl4KXGAZAFgDbm6wvqf8miZB2885S3JTBsOtipJDTZCaArxj8ZC2zxoIJYZChjiODbu4jgmSxlJlqapeugsIZBzyevD0afndeBsqiLV5WFG38H6EhZBucEQLZBpgqFOjzDoRmrZBuX9ZBCE0oyhn9X4";
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
