# WhatsApp AI Agent — Implementation Plan

**Goal:** Build a serious first-version WhatsApp AI agent for Gyrate Digital using Gemini (same stack as the website chatbot), with persistence, knowledge, tools, lead capture, and human handoff.

**Positioning:** This is an **AI agent**, not a simple chatbot. It reasons with context, uses tools, qualifies leads, and can hand off to a human.

---

## Architecture (v1)

```
WhatsApp
   ↓
Next.js
   ↓
Database
   ↓
AI (Gemini)
   ↓
Knowledge
   ↓
Tools
   ↓
Lead
   ↓
Human
```

| Layer | Responsibility |
|-------|----------------|
| **WhatsApp** | Inbound/outbound via Cloud API webhook already at `/api/webhooks/whatsapp` |
| **Next.js** | Webhook, agent orchestration, tool execution, API routes |
| **Database** | Conversations, messages, leads, state, consent |
| **AI** | Gemini agent with instructions, context, and tool calling |
| **Knowledge** | Company info, services, FAQs, process, portfolio retrieval |
| **Tools** | `create_lead`, `update_lead`, `handoff_to_human`, booking |
| **Lead** | Qualification, status, summary, sales notification |
| **Human** | Takeover when the agent cannot / should not continue |

That's enough for a serious first version.

---

## Architectural decision: One agent, not five

**Do not** build five completely separate AI agents for:

- Build an AI Agent  
- Automate a Process  
- AI Customer Support  
- Fine-tune Model  
- Generative AI  

Those are **service contexts** (product interests), not separate brains.

### Preferred shape

```
             GYR​ATE AI AGENT
                    │
           ┌────────┴────────┐
           │                 │
      Service Context    Core Agent
           │                 │
     ┌─────┼─────┐           │
     ▼     ▼     ▼           ▼
    AI    Auto   Support   Common
   Agent  mation           Intelligence
```

| Piece | What it is |
|-------|------------|
| **Gyrate AI Agent** | Single Gemini agent: one instruction set, one tool surface, one conversation/lead pipeline |
| **Core Agent / Common Intelligence** | Shared behavior: grounding, qualification, tools (`create_lead`, `update_lead`, `handoff_to_human`, booking), safety, handoff |
| **Service Context** | Injected knowledge + prompting emphasis for the user’s interest (AI Agent, Automation, Support, Fine-tuning, Generative AI) |

### Why

- One conversation model, one DB schema, one tool layer  
- Consistent qualification and human handoff  
- Less duplicate prompts, less drift between “agents”  
- Service menu choice becomes `service_interest` / context pack — not a new agent runtime  

### How it shows up in the product

1. User picks (or says) a service → store as conversation/lead context  
2. Load the matching **service context** pack into the same core agent  
3. Core agent still owns knowledge retrieval, tools, leads, and handoff  

Other service labels (Automation, Support, Fine-tuning, Generative AI) attach the same way — context modules, not separate agents.

---

## Current baseline (already in repo)

- WhatsApp Cloud API webhook: `app/api/webhooks/whatsapp`
- Outbound send helpers: `src/lib/whatsapp.ts`
- Interactive menu / multi-step flows (temporary structured intake)
- Website Gemini chatbot: `app/api/chat/route.ts` + `app/components/Chatbot.tsx`

**Direction:** Evolve WhatsApp from fixed menus toward an agent loop (DB → Gemini → knowledge → tools → lead → human), reusing Gemini patterns from the site chatbot.

---

## Sprint 1 — Foundation

- [ ] Database
- [ ] `conversations` table
- [ ] `messages` table
- [ ] `leads` table
- [ ] Conversation state
- [ ] AI consent

### Suggested schema sketch

**conversations**
- `id`, `wa_id`, `phone_number_id`, `status` (`ai` | `human` | `closed`)
- `consent_at`, `state` (JSON), `created_at`, `updated_at`

**messages**
- `id`, `conversation_id`, `direction` (`in` | `out`)
- `role` (`user` | `assistant` | `system` | `tool`)
- `body`, `wa_message_id`, `meta` (JSON), `created_at`

**leads**
- `id`, `conversation_id`, `name`, `company`, `email`, `phone`
- `service_interest`, `budget`, `timeline`, `notes`
- `status` (`new` | `qualified` | `handoff` | `booked` | `closed`)
- `summary`, `created_at`, `updated_at`

### Acceptance

- Every inbound WhatsApp message is stored and linked to a conversation
- Consent gate before AI replies (or explicit opt-in message)
- Conversation state survives across messages (replace in-memory `Map`)

---

## Sprint 2 — AI

- [ ] Gemini API connection
- [ ] Agent instructions
- [ ] Basic conversation
- [ ] Context loading
- [ ] Response generation
- [ ] Save AI responses

### Notes

- Reuse `GEMINI_API_KEY` / model approach from `app/api/chat/route.ts`
- Agent instructions: Gyrate AI engineering positioning (agents, fine-tuning, GenAI, chatbots, data, MVPs) — not “digital agency”
- Load recent messages + lead fields + state into the prompt
- Persist every assistant reply to `messages`

### Acceptance

- User texts WhatsApp → agent replies with Gemini → reply stored in DB

---

## Sprint 3 — Knowledge

- [ ] Gyrate company information
- [ ] Services
- [ ] FAQs
- [ ] Process
- [ ] Portfolio
- [ ] Knowledge retrieval

### Notes

- Start simple: curated markdown/JSON knowledge pack + retrieval (keyword or embedding later)
- Align with homepage AI pillars and WhatsApp service menu
- Portfolio facts stay factual (no rewriting case studies)

### Acceptance

- Agent answers “what do you do?” / services / process using knowledge, not inventing agency offerings

---

## Sprint 4 — Agent tools

- [ ] `create_lead`
- [ ] `update_lead`
- [ ] `handoff_to_human`
- [ ] Booking

### Notes

- Tools are the difference between chatbot and agent
- Booking: Calendly link and/or booking intent → `leads.status = booked`
- Validate tool args before DB writes

### Acceptance

- Agent can create/update a lead and initiate handoff/booking without hard-coded menu-only flows

---

## Sprint 5 — Sales intelligence

- [ ] Qualification
- [ ] Lead summary
- [ ] Lead status
- [ ] Sales notification
- [ ] Human takeover

### Notes

- Qualification rubric: need, timeline, budget, decision-maker, contact
- Auto-summary written to `leads.summary`
- Notify sales (email/Slack) on qualified lead or handoff
- `conversations.status = human` stops AI replies until released

### Acceptance

- Sales can see a useful lead record + summary when the agent qualifies or hands off

---

## Sprint 6 — Safety

- [ ] Webhook signature verification
- [ ] Tool validation
- [ ] Sensitive-data guardrails
- [ ] Prompt-injection protection
- [ ] Rate limiting
- [ ] Error handling

### Notes

- Enforce `WHATSAPP_APP_SECRET` HMAC (currently advisory) in production
- Never execute unbound tool calls; schema-validate inputs
- Redact/refuse secrets, payment card data, etc.
- Ignore “ignore previous instructions” style user attempts to escalate privileges
- Per-`wa_id` rate limits; graceful WhatsApp/Gemini failure messages

### Acceptance

- Invalid signatures rejected; bad tool calls blocked; spam/abuse limited

---

## Sprint 7 — Testing

- [ ] 30–50 test conversations
- [ ] Edge cases
- [ ] Long conversations
- [ ] Human handoff
- [ ] Failed AI calls
- [ ] WhatsApp failures

### Scenarios to cover

- Greeting / services / pricing ambiguity
- Off-topic and injection attempts
- Partial lead info then resume later
- Handoff mid-flow
- Gemini timeout / 429
- WhatsApp send 4xx/5xx

### Acceptance

- Documented test pack with pass/fail; critical paths green

---

## Sprint 8 — Production

- [ ] Production credentials
- [ ] Logging
- [ ] Monitoring
- [ ] Analytics
- [ ] Sales notifications
- [ ] Backup/recovery

### Notes

- Env: WhatsApp token, phone number id, verify token, app secret, Gemini key, DB URL
- Structured logs for webhook → agent → tools → send
- Alerts on error rate / handoff spike
- Backup DB; recovery runbook

### Acceptance

- Live WhatsApp traffic handled end-to-end with observability and sales alerts

---

## Suggested build order (summary)

1. **Foundation** — DB + consent + state  
2. **AI** — Gemini agent loop + persistence  
3. **Knowledge** — grounded answers  
4. **Tools** — lead + handoff + booking  
5. **Sales intelligence** — qualify + notify + takeover  
6. **Safety** — harden webhook and agent  
7. **Testing** — conversation pack  
8. **Production** — go-live ops  

---

## Out of scope for v1 (intentionally)

- Multi-language agent
- Full CRM sync (HubSpot/Salesforce)
- Voice notes / media understanding
- Multi-agent orchestration
- Fine-tuned custom model (use Gemini + knowledge first)

---

## Success criteria (first serious version)

- WhatsApp user can have a natural AI conversation about Gyrate’s AI services  
- Conversation and messages are stored  
- Agent uses knowledge instead of guessing outdated “agency” offerings  
- Agent can create/update a lead and hand off to a human  
- Sales gets a notification with a useful summary  
- Basic safety (signature, rate limit, guardrails) is in place  

---

## Related existing files

| Area | Path |
|------|------|
| WhatsApp webhook | `app/api/webhooks/whatsapp/route.ts` |
| WhatsApp send / flows | `src/lib/whatsapp.ts` |
| Website Gemini chat | `app/api/chat/route.ts` |
| Website chatbot UI | `app/components/Chatbot.tsx` |
| AI brand positioning | `AI-REPOSITIONING-CONTENT-PLAN.md` |
