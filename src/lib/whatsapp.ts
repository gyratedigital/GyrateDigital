const GRAPH_API_VERSION = "v21.0";

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

function getCredentials(phoneNumberId?: string) {
  const token = process.env.WHATSAPP_ACCESS_TOKEN;
  const fromId = phoneNumberId ?? process.env.WHATSAPP_PHONE_NUMBER_ID;
  return { token, fromId };
}

async function postWhatsAppMessage(
  phoneNumberId: string | undefined,
  payload: Record<string, unknown>
) {
  const { token, fromId } = getCredentials(phoneNumberId);

  if (!token || !fromId) {
    console.error(
      "[whatsapp] Missing WHATSAPP_ACCESS_TOKEN or WHATSAPP_PHONE_NUMBER_ID"
    );
    return { ok: false as const, error: "not_configured" };
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
    console.error("[whatsapp] Send failed", res.status, data);
    return { ok: false as const, error: data };
  }

  return { ok: true as const, data };
}

/** Welcome + service menu (list — WhatsApp allows max 3 reply buttons; list supports 5 options). */
export async function sendWelcomeServiceMenu(to: string, phoneNumberId?: string) {
  return postWhatsAppMessage(phoneNumberId, {
    to,
    type: "interactive",
    interactive: {
      type: "list",
      body: {
        text:
          "Thanks for contacting Gyrate Digital!\n" +
          "Let's understand what you're looking to automate.\n\n" +
          "What would you like to do?",
      },
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
}

export async function sendTextMessage(
  to: string,
  text: string,
  phoneNumberId?: string
) {
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
) {
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
