# Gyrate Digital — AI Repositioning Content Plan

**Goal:** Shift brand face from a traditional digital/software agency (web, mobile, marketing) to an **AI-first company** known for AI expertise — machine learning, deep learning, agentic AI, custom model training, and elite AI engineering — while keeping product/engineering delivery as the delivery layer (not the headline).

**Positioning line (draft):**  
*Gyrate Digital Agency — AI engineers building intelligent systems: models, agents, and production AI products.*

**Explicit exclusion:** Do **not** change portfolio content, portfolio pages, or work/case-study data. Leave as-is:
- `app/data/workSection.ts`
- `app/portfolio/**` (page, `[slug]`, layout, banners)
- `app/components/portfolio/**`
- `app/components/WorkSection.tsx` (homepage work scroller — leave copy/cards alone)

---

## Positioning rules (use when rewriting)

| Lead with | Keep as supporting (not primary) | Deprioritize / reframe |
|-----------|----------------------------------|-------------------------|
| Custom AI / ML / DL models | Web & mobile as AI product surfaces | “Digital marketing agency” as identity |
| Agentic AI & AI systems | Design (UI for AI products) | Generic “full-service digital agency” |
| Model training & fine-tuning | Staff augmentation of AI engineers | Marketing-first banners |
| Best AI engineers / MLOps | Growth/SEO only where AI-backed | Pure agency clichés |

**Suggested service pillars (new face):**
1. Custom AI & Model Training (ML / DL / fine-tuning)
2. Agentic AI & Intelligent Automation
3. Generative AI Products & Integrations
4. AI-Powered Applications (web/mobile as delivery)
5. AI Engineering Teams (staff augmentation)
6. Applied AI Strategy & MLOps (optional pillar)

---

## Phase overview

| Phase | Focus | Outcome |
|-------|--------|---------|
| **1** | Homepage + global SEO/meta | First impression = AI company |
| **2** | Services data + service pages | Catalog matches AI expertise |
| **3** | About / mission / banners | Story = AI engineers & capability |
| **4** | Chatbot + emails + schemas | Consistent voice everywhere |
| **5** | Blog framing (not portfolio) | Thought leadership matches AI face |
| **6** | Visual/assets pass (optional) | Icons, imagery, service art |

---

## 1. Global SEO & site metadata

### `app/layout.tsx`
**Status:** Done
- Default title: `Gyrate Digital | AI Development Solutions, ML & Agentic Systems`
- Meta description: custom AI solutions, model training, agentic AI / business automation
- Keywords: AI agency, machine learning, deep learning, agentic AI, custom AI models, MLOps, AI engineers
- Open Graph + Twitter: aligned to same AI positioning

### `app/data/schemas.ts` (Organization)
**Status:** Done (org description)
- Organization `description` → AI solutions / model training / agentic systems
- Remaining: Home / services `Offer` names → Custom AI Training, Agentic AI, ML/DL, etc.
- Leave portfolio-related schema entries untouched if present

### Page layouts (meta titles/descriptions)
| File | Current lean | Rewrite to |
|------|--------------|------------|
| `app/about/layout.tsx` | Designers & developers / digital experiences | AI engineers, ML/DL, intelligent systems |
| `app/services/layout.tsx` | Web, Mobile, UI/UX, Marketing | AI, ML, agents, model training, AI products |
| `app/blog/layout.tsx` | Design, development, marketing insights | AI, ML, agents, applied intelligence |
| `app/contact/layout.tsx` | Digital goals | AI projects / model & agent engagements |
| `app/privacy-policy/layout.tsx` | Keep legal; soft brand if any | Optional light AI wording only if needed |
| `app/cookie-policy/layout.tsx` | Same | Optional |

**Do not change:** `app/portfolio/layout.tsx` (portfolio out of scope).

### `app/sitemap.ts` / `app/robots.ts`
**Change:** No copy change required unless new AI service slugs are added (then regenerates via `servicesSection`). Portfolio URLs stay as generated from existing `workSection` (no edits to that data).

---

## 2. Homepage surfaces

### `app/components/HomeBanner.tsx`
**Status:** Done
- Badge: “Book a Meeting” (Calendly)
- Headline: “Gyrate Digital — AI Engineers Building Intelligent Systems”
- Subcopy: “We develop custom AI solutions, train models on your data, and build agentic AI systems to help your business automate.”
- CTA: “Talk to Us” → `/contact`

### `app/components/SmoothMarquee.tsx`
**Status:** Done
- Marquee items: Agentic AI · Fine-tuning Models · Generative AI · AI Chatbots & Autonomous Agents · Data Engineering & Integration · Prototyping & MVPs

### `app/components/AboutSection.tsx`
**Status:** Done
- Image: `/about-gyrate.webp`
- Copy: AI-focused company; Agentic AI, fine-tuning, Generative AI, chatbots & agents; data engineering & integration; prototypes & MVPs

### `app/components/ServicesSection.tsx`
**Change:**
- Heading: “What We Build & Support” → e.g. “AI Capabilities & Delivery”
- Subcopy: lifecycle of digital products → AI models, agents, and AI-powered products

### `app/data/featuredCategory.ts`
**Change:** Category titles/descriptions — elevate AI; reframe web/CRM/growth as AI-backed or secondary.
- Fill empty GenAI description
- Optionally rename pillars to ML / Agents / Custom Models / AI Apps

### `app/components/DedicatedTeamSection.tsx`
**Change:** Copy about “dedicated developers” / SaaS overhead → **dedicated AI / ML engineers**, model & agent teams.

### `app/components/CtaSection.tsx`
**Change:** “website, app, or creative design” → AI project, custom model, agent system, intelligent product.

### `app/components/QualitySection.tsx` + `app/data/qualitySection.ts`
**Change:** Quality claims if they read as generic agency — align with AI reliability, evaluation, production ML.

### `app/components/BlogSection.tsx`
**Change:** Optional section intro if any marketing/design-only framing; prefer AI insights.

### `app/components/WorkSection.tsx`
**Do not change.** Homepage work section and its cards stay as they are (portfolio out of scope).

### `app/page.tsx`
**Change:** No structural requirement; section order can stay (hero → partners → capabilities → about → services → work). Do not alter WorkSection wiring for repositioning.

---

## 3. Services catalog (highest impact)

### `app/data/servicesSection.ts`
**Change (core):**
- Reorder so AI pillars appear first (GenAI already #01 — expand depth)
- **Add or expand** services for:
  - Machine Learning & Deep Learning
  - Custom model training / fine-tuning
  - Agentic AI / multi-agent systems
  - RAG / knowledge systems
  - MLOps / model evaluation & monitoring
- Rewrite service `description` + every `nestedServices` blurb to AI-expertise voice
- Keep web/mobile/UI/staff aug but **position as AI product delivery / AI team extension**
- New/updated `slug`s if new top-level services are added (affects routes + sitemap)

### `app/services/page.tsx` + `app/services/[slug]/page.tsx`
**Change:** Any hardcoded intros; titles inherit from data. Nested cards use data + icons.

### `app/components/shared/NestedServiceCard.tsx`
**Change:** Icon map entries for any **new** nested service titles (ML training, agents, etc.).

### `app/components/services/Banner.tsx`
**Change:** “innovative design, data-driven marketing…” → AI engineering / models / agents.

### Shared banners (same pattern — non-portfolio only)
| File | Issue |
|------|--------|
| `app/components/about/Banner.tsx` | Design + marketing agency voice |
| `app/components/contact/Banner.tsx` | Same |

**Do not change:** `app/components/portfolio/Banner.tsx`

---

## 4. About page & brand story

### `app/about/page.tsx`
**Change:** Opening paragraphs (“one-stop digital and software solutions…”) → AI company origin/evolution story.

### `app/data/aboutSection.ts`
**Change:**
- Journey / “Why us” narratives — evolution **into** AI expertise (ML, DL, agents, custom models)
- Keep longevity/partnership language; swap digital-agency center for AI engineering center

### `app/components/about/GreenBanner.tsx`
**Change:** Strategy/design/marketing/AI-enabled tools mix → AI systems, models, agents, production delivery.

### `app/components/about/CoreValuesMissionVision.tsx`
**Change:**
- Mission (digital solutions + marketing + AI) → build & operationalize AI that drives outcomes
- Vision (trusted digital partner / software) → trusted AI engineering partner worldwide
- Values bullets if still generic agency-only

### `app/components/AboutUsMessage.tsx`
**Change:** Quote (“development services to marketing strategies”) → AI excellence / models / agents / engineering quality.

---

## 5. Chatbot & conversational brand

### `app/api/chat/route.ts`
**Change:** Full `systemPrompt`:
- Company definition: AI-driven / AI engineering firm (not “full-service digital agency”)
- Services list → AI pillars first (ML, DL, agents, custom training, GenAI, AI apps, AI staff aug)
- Contact/booking lines can stay; accuracy must match new services
- If portfolio projects are mentioned in the prompt, keep existing portfolio facts as-is (no rewrite of case studies)

### `app/components/Chatbot.tsx`
**Change:** Welcome message (“all-in-one trusted Digital Agency”) → AI expertise / AI engineers welcome line.

---

## 6. Contact & misc page banners

### `app/components/contact/GreenBanner.tsx`
**Change:** “Digital Marketing Agency” / design solutions → AI projects, models, agents.

### `app/contact/page.tsx`
**Change:** Any visible taglines; form service checkboxes if they list old service names only (align with new AI services).

**Do not change:** `app/components/portfolio/GreenBanner.tsx` or any other portfolio UI.

---

## 7. Portfolio & case studies — OUT OF SCOPE

**No changes** to:
- `app/data/workSection.ts`
- `app/portfolio/page.tsx`
- `app/portfolio/[slug]/page.tsx`
- `app/portfolio/layout.tsx`
- `app/components/portfolio/*`
- `app/components/WorkSection.tsx`

Portfolio remains the current proof set; brand repositioning happens around it (homepage messaging, services, about, SEO), not by rewriting case studies.

---

## 8. Blog & thought leadership

### `app/data/blog.ts`
**Change:**
- Author bio (repeated: “Full-service digital agency…”) → AI engineering / ML & agentic systems bio
- Plan new posts: agentic AI, custom model training, MLOps, DL applied use cases
- Older design/SEO posts: keep or retag; don’t delete wholesale — add AI-first pieces for crawl/authority
- Categories list: add AI / Machine Learning / Agentic AI if missing

### `app/data/blogSection.ts`
**Change:** If homepage blog teasers hardcode non-AI themes.

---

## 9. Email & outbound copy

### `src/lib/email-templates.ts`
**Change:** Soft brand lines if any (“agency” only); confirmation copy can mention AI projects when relevant. Signature “Gyrate Digital Agency” can stay if legal name; optional tagline under signature.

### `app/api/contact/route.ts` / `app/api/subscribe/route.ts`
**Change:** Subject lines only if desired (“AI inquiry” etc.) — low priority.

---

## 10. Footer & microcopy

### `app/components/FooterSection.tsx`
**Change:** Any blurb/links that sell marketing-agency identity; copyright name can stay. Keep “Our Work” / portfolio links as navigation only (no portfolio content rewrite).

### `app/data/augmentation.ts`
**Change:** Staff augmentation messaging → AI/ML engineers, data scientists, MLOps (if used on site).

---

## Suggested rewrite map (by message type)

| Message type | Old voice | New voice |
|--------------|-----------|-----------|
| Who we are | Digital / software / marketing agency | AI-driven engineering company |
| What we sell | Web, apps, design, marketing | Custom AI, ML/DL, agents, training, AI products |
| How we work | Full lifecycle digital products | Model → agent → product → production |
| Team | Developers & designers | Best AI engineers + ML specialists |
| Proof | *(portfolio unchanged)* | Existing portfolio stands; don’t rewrite |

---

## Out of scope / later (not copy files)

- **Entire portfolio surface** (data, pages, banners, homepage WorkSection cards)
- New service page imagery under `public/services/`
- Logo/monogram (keep unless brand system changes)
- Legal entity name on policies (confirm with legal before renaming “Gyrate Digital”)
- Paid ads / Google Business Profile / LinkedIn (off-repo) — mirror this plan

---

## Implementation order (recommended)

1. `app/layout.tsx` + `schemas.ts` + homepage hero/about/services intros  
2. `servicesSection.ts` (+ NestedServiceCard icons + new slugs)  
3. About data + mission/vision + green banners  
4. Chatbot prompt + Chatbot welcome  
5. Featured categories, CTA, dedicated team  
6. Blog author bio (+ optional new AI posts later)  
7. Contact banners + email soft pass  
8. Publish; resubmit key URLs / sitemap in Search Console  

---

## Definition of done

- [ ] Homepage above-the-fold reads as AI company (not marketing agency)
- [ ] Services catalog leads with AI/ML/agents/custom training
- [ ] About / mission / chatbot / SEO meta all say the same story
- [ ] No primary CTAs that only say “design & digital marketing agency”
- [ ] Portfolio / work case studies left unchanged

---

## Notes

- GenAI already exists as service `01` — expand, don’t abandon engineering delivery.
- Repositioning ≠ deleting web/mobile; **reframe** them as how AI reaches users.
- Portfolio stays as historical/current delivery proof without an AI rewrite pass.
- After content ships, update Google Business / LinkedIn / Clutch profiles to match (portfolio listings there can stay as-is unless you choose otherwise off-repo).
