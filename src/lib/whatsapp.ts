const GRAPH_API_VERSION = "v21.0";

export const WELCOME_TEXT =
  "Welcome to Gyrate Digital LTD\n\n" +
  "I’m your virtual agent. For post sales and customer related queries, please email *contact@gyratedigital.com*";

export const MENU_BODY = "What are you looking for?";

export const WHATSAPP_MENU_OPTIONS = [
  {
    id: "build_ai_agent",
    title: "Build an AI Agent",
    flow: "ai_agent",
  },
  {
    id: "automate_process",
    title: "Automate a Process",
    flow: "automation",
  },
  {
    id: "ai_customer_support",
    title: "AI Customer Support",
    flow: "customer_support",
  },
  {
    id: "fine_tune_model",
    title: "Fine-tune model",
    flow: "fine_tuning",
  },
  {
    id: "generative_ai",
    title: "Generative AI",
    flow: "generative_ai",
  },
] as const;

export type WhatsAppMenuOptionId = (typeof WHATSAPP_MENU_OPTIONS)[number]["id"];
export type WhatsAppFlowId = (typeof WHATSAPP_MENU_OPTIONS)[number]["flow"];

type FlowOption = { id: string; title: string; label?: string };

type FlowListStep = {
  id: string;
  type: "list";
  question: string;
  button?: string;
  options: FlowOption[];
};

type FlowTextStep = {
  id: string;
  type: "text";
  question: string;
};

type FlowStep = FlowListStep | FlowTextStep;

type FlowDefinition = {
  id: WhatsAppFlowId;
  steps: FlowStep[];
};

/** Implemented flows — add more here later. */
const FLOWS: Partial<Record<WhatsAppFlowId, FlowDefinition>> = {
  ai_agent: {
    id: "ai_agent",
    steps: [
      {
        id: "purpose",
        type: "list",
        question: "What would you like your AI Agent to do?",
        button: "View options",
        options: [
          { id: "sales_lead", title: "Sales & Lead Gen", label: "Sales & Lead Generation" },
          { id: "customer_support", title: "Customer Support" },
          {
            id: "internal_ops",
            title: "Internal Operations",
            label: "Internal Business Operations",
          },
          { id: "research_data", title: "Research & Data" },
          { id: "other", title: "Other" },
        ],
      },
      {
        id: "timeline",
        type: "list",
        question: "When would you like to get started?",
        button: "View options",
        options: [
          { id: "asap", title: "ASAP" },
          { id: "this_month", title: "This month" },
          { id: "1_3_months", title: "1–3 months" },
          { id: "exploring", title: "Just exploring" },
        ],
      },
      {
        id: "budget",
        type: "list",
        question: "Do you have an approximate budget?",
        button: "View options",
        options: [
          { id: "under_1k", title: "Under $1,000" },
          { id: "1k_3k", title: "$1,000–$3,000" },
          { id: "3k_10k", title: "$3,000–$10,000" },
          { id: "10k_plus", title: "$10,000+" },
          { id: "not_sure", title: "Not sure" },
        ],
      },
      {
        id: "name_company",
        type: "text",
        question: "Ok Great. What's your name and company name?",
      },
    ],
  },
};

export type ConversationSession = {
  flowId: WhatsAppFlowId;
  stepIndex: number;
  answers: Record<string, string>;
};

type WhatsAppSendResult =
  | { ok: true; data: unknown }
  | { ok: false; error: unknown; status?: number };

const globalForWa = globalThis as typeof globalThis & {
  whatsappSessions?: Map<string, ConversationSession>;
};

function sessions(): Map<string, ConversationSession> {
  if (!globalForWa.whatsappSessions) {
    globalForWa.whatsappSessions = new Map();
  }
  return globalForWa.whatsappSessions;
}

export function getSession(waId: string): ConversationSession | undefined {
  return sessions().get(waId);
}

export function clearSession(waId: string): void {
  sessions().delete(waId);
}

function setSession(waId: string, session: ConversationSession): void {
  sessions().set(waId, session);
}

function getCredentials(phoneNumberId?: string) {
  const token = process.env.WHATSAPP_ACCESS_TOKEN;
  const fromId = phoneNumberId ?? process.env.WHATSAPP_PHONE_NUMBER_ID;
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

async function sendListQuestion(
  to: string,
  step: FlowListStep,
  phoneNumberId?: string
): Promise<WhatsAppSendResult> {
  const listResult = await postWhatsAppMessage(phoneNumberId, {
    to,
    type: "interactive",
    interactive: {
      type: "list",
      body: { text: step.question },
      action: {
        button: step.button ?? "View options",
        sections: [
          {
            title: "Options",
            rows: step.options.map((option) => ({
              id: option.id,
              title: option.title.slice(0, 24),
            })),
          },
        ],
      },
    },
  });

  if (listResult.ok) return listResult;

  console.warn("[whatsapp] List question failed, sending text fallback");
  const lines = step.options
    .map((o, i) => `${i + 1}. ${o.label ?? o.title}`)
    .join("\n");
  return sendTextMessage(
    to,
    `${step.question}\n\n${lines}\n\nReply with a number.`,
    phoneNumberId
  );
}

async function sendCurrentStep(
  to: string,
  session: ConversationSession,
  phoneNumberId?: string
): Promise<WhatsAppSendResult> {
  const flow = FLOWS[session.flowId];
  if (!flow) {
    return { ok: false, error: "flow_not_configured" };
  }

  const step = flow.steps[session.stepIndex];
  if (!step) {
    return { ok: false, error: "step_missing" };
  }

  if (step.type === "list") {
    return sendListQuestion(to, step, phoneNumberId);
  }

  return sendTextMessage(to, step.question, phoneNumberId);
}

function menuTextFallback(): string {
  const lines = WHATSAPP_MENU_OPTIONS.map(
    (o, i) => `${i + 1}. ${o.title}`
  ).join("\n");
  return `${MENU_BODY}\n\n${lines}\n\nReply with a number.`;
}

/** Welcome text, then service list menu (titles only). */
export async function sendWelcomeServiceMenu(
  to: string,
  phoneNumberId?: string
): Promise<WhatsAppSendResult> {
  clearSession(to);

  const welcomeResult = await sendTextMessage(to, WELCOME_TEXT, phoneNumberId);
  if (!welcomeResult.ok) return welcomeResult;

  const listResult = await postWhatsAppMessage(phoneNumberId, {
    to,
    type: "interactive",
    interactive: {
      type: "list",
      body: { text: MENU_BODY },
      action: {
        button: "View options",
        sections: [
          {
            title: "AI services",
            rows: WHATSAPP_MENU_OPTIONS.map((option) => ({
              id: option.id,
              title: option.title.slice(0, 24),
            })),
          },
        ],
      },
    },
  });

  if (listResult.ok) return listResult;

  console.warn("[whatsapp] List menu failed, sending text fallback");
  return sendTextMessage(to, menuTextFallback(), phoneNumberId);
}

export function getMenuOption(id: string) {
  return WHATSAPP_MENU_OPTIONS.find((o) => o.id === id);
}

export function getMenuOptionLabel(id: string): string | undefined {
  return getMenuOption(id)?.title;
}

async function completeFlow(
  to: string,
  session: ConversationSession,
  phoneNumberId?: string
): Promise<WhatsAppSendResult> {
  console.log("[whatsapp] flow complete", { to, flowId: session.flowId, answers: session.answers });
  clearSession(to);

  return sendTextMessage(
    to,
    "Thanks! We’ve got your details.\n\n" +
      "Our team will follow up shortly. You can also book a call anytime:\n" +
      "https://calendly.com/gyratedigital/30min",
    phoneNumberId
  );
}

async function advanceAfterAnswer(
  to: string,
  session: ConversationSession,
  phoneNumberId?: string
): Promise<WhatsAppSendResult> {
  const flow = FLOWS[session.flowId];
  if (!flow) {
    clearSession(to);
    return { ok: false, error: "flow_not_configured" };
  }

  const nextIndex = session.stepIndex + 1;
  if (nextIndex >= flow.steps.length) {
    return completeFlow(to, session, phoneNumberId);
  }

  session.stepIndex = nextIndex;
  setSession(to, session);
  return sendCurrentStep(to, session, phoneNumberId);
}

/** Start a flow from a top-level menu selection. */
export async function handleMenuSelection(
  to: string,
  optionId: string,
  phoneNumberId?: string
): Promise<WhatsAppSendResult> {
  const menuOption = getMenuOption(optionId);
  if (!menuOption) {
    return { ok: false, error: "unknown_menu_option" };
  }

  const flow = FLOWS[menuOption.flow];
  if (!flow) {
    // Other flows not implemented yet
    return sendTextMessage(
      to,
      `Great — you chose *${menuOption.title}*.\n\n` +
        "Our team will follow up with next steps. " +
        "You can also book a call anytime:\n" +
        "https://calendly.com/gyratedigital/30min",
      phoneNumberId
    );
  }

  const session: ConversationSession = {
    flowId: menuOption.flow,
    stepIndex: 0,
    answers: { service: menuOption.title },
  };
  setSession(to, session);

  console.log("[whatsapp] flow start", { to, flowId: session.flowId });
  return sendCurrentStep(to, session, phoneNumberId);
}

/** Handle an interactive reply while a flow is active. */
export async function handleFlowInteractiveReply(
  to: string,
  selectedId: string,
  phoneNumberId?: string
): Promise<WhatsAppSendResult | null> {
  const session = getSession(to);
  if (!session) return null;

  const flow = FLOWS[session.flowId];
  if (!flow) {
    clearSession(to);
    return null;
  }

  const step = flow.steps[session.stepIndex];
  if (!step || step.type !== "list") {
    return null;
  }

  const option = step.options.find((o) => o.id === selectedId);
  if (!option) {
    return sendTextMessage(
      to,
      "Please choose one of the options from the list.",
      phoneNumberId
    );
  }

  session.answers[step.id] = option.label ?? option.title;
  return advanceAfterAnswer(to, session, phoneNumberId);
}

/** Handle free-text while a flow is waiting for a text answer. */
export async function handleFlowTextReply(
  to: string,
  text: string,
  phoneNumberId?: string
): Promise<WhatsAppSendResult | null> {
  const session = getSession(to);
  if (!session) return null;

  const flow = FLOWS[session.flowId];
  if (!flow) {
    clearSession(to);
    return null;
  }

  const step = flow.steps[session.stepIndex];
  if (!step || step.type !== "text") {
    return null;
  }

  if (!text.trim()) {
    return sendTextMessage(to, step.question, phoneNumberId);
  }

  session.answers[step.id] = text.trim();
  return advanceAfterAnswer(to, session, phoneNumberId);
}
