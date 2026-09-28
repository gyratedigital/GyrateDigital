# CodeTurtle AI

> Placeholder: AI-powered code review and project intelligence SaaS platform.

## Apps

- `frontend/` – React/Next.js UI
- `backend/` – Node.js API (NestJS)

# CodeTurtle AI – Frontend

> Placeholder: React/Next.js and Tailwind CSS frontend for DevPilot AI.

## Stack

- React + Next.js
- Tailwind CSS, state management, shadcn etc.

# CodeTurtle AI

**AI code review that keeps you ahead.**

CodeTurtle is an AI engineering workspace for GitHub teams. It analyzes pull requests, surfaces high-signal findings with suggested code fixes, lets reviewers accept or reject changes in-product, and can push accepted updates straight back to the PR branch. It also includes a browser-based **Repositories Codebase** so you can browse, edit, create, and commit files without leaving the app.

> This repository is the **frontend** (`codeturtle-ai-frontend`). The API lives in the sibling `backend/` NestJS service. Some internal paths and packages still use the earlier **DevPilot** name; the product brand in the UI is **CodeTurtle AI**.

---

## What is CodeTurtle?

CodeTurtle closes the gap between “AI left a comment” and “the fix is on the branch.”

Typical flow:

1. **Connect** a GitHub repository  
2. **Open** a pull request in PR Engineer / Reviews  
3. **Trigger** multi-model AI analysis  
4. **Review** findings, diffs, and suggested replacements  
5. **Accept** fixes and **push** them to the PR branch  
6. Optionally **browse/edit** the repo in Codebase and commit from the browser  

The product is built for teams that move too fast for slow, manual review — and for reviewers drowning in noise from tools that only flag syntax.

---

## Scope

| Area | What CodeTurtle covers |
|------|------------------------|
| **PR Engineer** | In-page analysis console, model selection, accept / reject suggestions, staged fixes, push to GitHub |
| **PR Reviews** | Review history, PR detail, status, sync with GitHub |
| **Repositories** | Connected repos, branches, commits, contributors, activity |
| **Codebase** | File tree, branch switcher, Monaco editor, create/upload files, commit & push |
| **Audits** | Post-merge / merged-PR AI audits (read-oriented findings) |
| **Team & billing** | Workspace settings, plans (Starter / Pro / Team), usage quotas |
| **Auth** | Email auth + GitHub OAuth via Supabase |

**Out of scope (today):** full IDE replacement, local git client, and deep third-party project trackers as first-class runtime features (Jira/Linear appear in marketing/settings intent more than as core flows).

---

## Advantages

- **Review → fix → push in one loop** — not just comments; accepted suggestions can land on the branch from CodeTurtle  
- **Multi-model analysis** — choose models by plan (e.g. GPT-4o mini, ChatGPT 5, Claude Sonnet, higher tiers)  
- **Browser codebase** — edit, create, and upload files; commit and push without context-switching to an IDE  
- **GitHub-native** — OAuth, PR sync, Contents API commits, review comments and status checks via the backend  
- **Quota-aware product** — clear Starter limits and paid upgrades instead of unbounded “demo” usage  
- **Signal over noise** — reviews prioritize security, bugs, performance, and breaking changes over style nits  
- **Modern app UX** — Next.js dashboard, shadcn/Radix UI, Monaco editing, real-time analysis console  

---

## Findings

CodeTurtle’s AI review is designed to report **actionable findings** on each PR, typically including:

| Finding type | Examples |
|--------------|----------|
| **Security** | Injection, XSS/CSRF patterns, unsafe auth or data handling |
| **Bugs & logic** | Off-by-one, null risks, race conditions, weak error handling |
| **Performance** | Hot loops, N+1 queries, memory/leak smells, costly patterns |
| **Breaking changes** | API/contract risks, dependency incompatibilities (when concrete) |
| **Best practices & consistency** | Structure, naming, framework conventions across the change set |
| **Risk scoring** | Overall score plus risk level (`safe` → `blocker`) |
| **Suggested code** | `original_code` vs `suggested_code` replacements reviewers can accept |

Each finding is tied to a **file path** and **line**, with optional hunk context so engineers can locate and apply the change quickly. Merged-PR **audits** lean toward tech-debt and architectural impact rather than inline patch suggestions.

---

## Key tools

### Product surfaces

| Tool | Role |
|------|------|
| **PR Engineer** | Primary AI analysis workspace (run console, report, accept/push) |
| **PR Reviews** | Library of reviews and PR detail |
| **Repositories + Codebase** | Repo hub + in-browser editor / commit flow |
| **Dashboard** | Quality and activity overview |
| **Billing & Settings** | Plans, quotas, engine/workspace preferences |

### Platform & integrations

| Tool | Role |
|------|------|
| **GitHub** | Source of truth for repos, PRs, diffs, commits, and pushes |
| **Supabase** | Auth, profiles, and application data |
| **AI providers** | OpenAI-compatible / RapidAPI-backed chat completions for reviews & audits |
| **Stripe** | Subscriptions and plan checkout |
| **Monaco Editor** | In-app code editing (Codebase + create-file flow) |

### Engineering stack (this frontend)

| Layer | Stack |
|-------|--------|
| Framework | Next.js 14, React 18, TypeScript |
| UI | Tailwind CSS, Radix / shadcn, Framer Motion, Lucide |
| State / data | Zustand, TanStack Table, Supabase JS |
| Editor | `@monaco-editor/react` |

Backend (sibling app): **NestJS**, GitHub API services, AI review/audit pipeline, Stripe, webhooks.

---

## The CodeTurtle loop

```text
Connect GitHub repo
        ↓
Open PR in CodeTurtle
        ↓
Trigger AI analysis (chosen model)
        ↓
Review findings & suggested diffs
        ↓
Accept → stage → push to PR branch
        ↓
(Optional) Edit more in Codebase → commit & push
```

---

## Getting started (frontend)

```bash
cd frontend
npm install
npm run dev
```

Configure `.env` with the public backend URL and any client-side Supabase / app keys required by your environment. The Nest API in `../backend` must be running for reviews, codebase, and GitHub actions to work.

| Script | Purpose |
|--------|---------|
| `npm run dev` | Local development server |
| `npm run build` | Production build |
| `npm run start` | Serve production build |
| `npm run lint` | ESLint |
| `npm test` | Jest |

---

## Plans (product)

| Plan | Intent (high level) |
|------|---------------------|
| **Starter** | Free entry — limited repos and PR reviews |
| **Pro** | Higher volume and stronger models for individuals / small teams |
| **Team** | Collaboration and higher limits for growing orgs |

Exact quotas and model entitlements are enforced in billing/usage and the model picker.

---

## Related docs

- Landing / positioning notes: [`docs/HOMEPAGE_MARKETING_PLAN.md`](./docs/HOMEPAGE_MARKETING_PLAN.md)
- Backend API: see `../backend/README.md`

---

## License

Private / proprietary unless otherwise stated by the repository owners.
