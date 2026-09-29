const GRAPH_API_VERSION = "v21.0";

export const WELCOME_BODY =
  "Thanks for contacting Gyrate Digital!\n" +
  "Let's understand what you're looking to automate.\n\n" +
  "What would you like to do?";

export const WHATSAPP_MENU_OPTIONS = [
  {
    id: "build_ai_agent",
    title: "Build an AI Agent",
    description: "Custom agents for your workflows",
  },
  {
    id: "automate_process",
    title: "Automate a Process",
    description: "Streamline repetitive work",
  },
  {
    id: "ai_customer_support",
    title: "AI Customer Support",
    description: "Smart support automation",
  },
  {
    id: "fine_tune_model",
    title: "Fine-tune model",
    description: "Models trained on your data",
  },
  {
    id: "generative_ai",
    title: "Generative AI",
    description: "Content and GenAI products",
  },
] as const;

export type WhatsAppMenuOptionId = (typeof WHATSAPP_MENU_OPTIONS)[number]["id"];

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

async function postWhatsAppMessage(
  phoneNumberId: string | undefined,
  payload: Record<string, unknown>
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
        ...payload,
      }),
    }
  );

  const data = await res.json().catch(() => ({}));

  if (!res.ok) {
    console.error("[whatsapp] Send failed", {
      status: res.status,
      phoneNumberId: fromId,
      to: payload.to,
      error: data,
    });
    return { ok: false, error: data, status: res.status };
  }

  console.log("[whatsapp] Send ok", { to: payload.to, type: payload.type });
  return { ok: true, data };
}

function welcomeTextFallback(): string {
  const lines = WHATSAPP_MENU_OPTIONS.map(
    (o, i) => `${i + 1}. ${o.title}`
  ).join("\n");
  return `${WELCOME_BODY}\n\n${lines}\n\nTap *View options* when available, or reply with a number.`;
}

/** Welcome + service menu; falls back to plain text if interactive list is rejected. */
export async function sendWelcomeServiceMenu(
  to: string,
  phoneNumberId?: string
): Promise<WhatsAppSendResult> {
  const listResult = await postWhatsAppMessage(phoneNumberId, {
    to,
    type: "interactive",
    interactive: {
      type: "list",
      body: { text: WELCOME_BODY },
      action: {
        button: "View options",
        sections: [
          {
            title: "AI services",
            rows: WHATSAPP_MENU_OPTIONS.map((option) => ({
              id: option.id,
              title: option.title,
              description: option.description,
            })),
          },
        ],
      },
    },
  });

  if (listResult.ok) return listResult;

  console.warn("[whatsapp] List menu failed, sending text fallback");
  return sendTextMessage(to, welcomeTextFallback(), phoneNumberId);
}

export async function sendTextMessage(
  to: string,
  text: string,
  phoneNumberId?: string
): Promise<WhatsAppSendResult> {
  return postWhatsAppMessage(phoneNumberId, {
    to,
    type: "text",
    text: { body: text },
  });
}

export function getMenuOptionLabel(id: string): string | undefined {
  return WHATSAPP_MENU_OPTIONS.find((o) => o.id === id)?.title;
}

export async function sendMenuSelectionAck(
  to: string,
  optionId: WhatsAppMenuOptionId | string,
  phoneNumberId?: string
): Promise<WhatsAppSendResult> {
  const label = getMenuOptionLabel(optionId) ?? "your selection";

  return sendTextMessage(
    to,
    `Great — you chose *${label}*.\n\n` +
      "Our team will follow up with next steps. " +
      "You can also book a call anytime:\n" +
      "https://calendly.com/gyratedigital/30min",
    phoneNumberId
  );
}
