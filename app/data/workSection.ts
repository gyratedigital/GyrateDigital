export const workSection = [
    {
        id: "1",
        slug: "lernen-einfachdeutsch",
        category: "E-learning Platform",
        title: ["Lernen", "Einfach Deutsch"],
        description: "German language learning platform with adaptive lessons, quizzes, and progress tracking for adult learners.",
        image: "/portfolio/einfatch.jpg",
        imageGallery: [
            "/portfolio/einfatch.jpg",
            "/portfolio/visual-gallery/einfatch-2.jpg",
            "/portfolio/visual-gallery/einfatch-3.jpg",
            "/portfolio/visual-gallery/einfatch-4.jpg",
        ],
        liveUrl: "https://lernen.einfachdeutsch.de/",
        tags: ["Next.js", "E-learning", "Gamification", "Localization"],
        caseStudy: {
            summary: "Built a performant, multi-language learning experience with adaptive quizzes, streaks, and teacher-managed cohorts.",
            challenge: "Needed a modern UX that keeps learners engaged while handling rich content, audio, and progress data across devices.",
            solution: [
                "Architected a content model for lessons, exercises, and assessments with progress persistence.",
                "Added streaks, badges, and spaced-repetition reminders to sustain learner motivation.",
                "Optimized media delivery (audio/illustrations) and offline-friendly caching for commuters."
            ],
            results: [
                "38% increase in lesson completion rate after launch.",
                "28% lift in weekly active learners through gamified nudges.",
                "Sub-1s median page transitions via Next.js routing and caching."
            ],
            metrics: [
                { label: "Completion Rate", value: "+38%", description: "Lesson completions post-launch" },
                { label: "WAU Growth", value: "+28%", description: "Weekly active learners increase" },
                { label: "Page Speed", value: "<1s", description: "Median navigation time" }
            ],
            timeline: "12 weeks",
            platform: "Next.js, Node.js, Headless CMS",
            services: ["Product Design", "Frontend", "CMS Architecture"],
            deliverables: ["Design System", "Responsive Web App", "CMS Schema"],
            gallery: [{ src: "/portfolio/einfatch.jpg", caption: "Lesson overview and progress" }]
        }
    },
    {
        id: "2",
        slug: "banktracker",
        category: "Fintech SaaS",
        title: ["Bank Tracker"],
        description: "Risk and exposure tracking for banks with dashboards, alerts, and audit-ready reports.",
        image: "/portfolio/bank-track.jpg",
        imageGallery: [
            "/portfolio/bank-track.jpg",
            "/portfolio/visual-gallery/bank-track-2.jpg",
            "/portfolio/visual-gallery/bank-track-3.jpg",
            "/portfolio/visual-gallery/bank-track-4.jpg",
        ],
        liveUrl: "https://banktracker.de/",
        tags: ["SaaS", "Fintech", "Dashboards", "Access Control"],
        caseStudy: {
            summary: "Delivered a secure analytics suite for banking teams to monitor portfolios, exposures, and compliance flags in real time.",
            challenge: "Required enterprise-grade RBAC, audit trails, and performant charts over large datasets.",
            solution: [
                "Implemented role-based access and granular data scoping per institution and team.",
                "Built high-density dashboards with drill-downs, saved views, and scheduled exports.",
                "Hardened the app with encryption at rest, SSO, and full audit logging."
            ],
            results: [
                "Cut weekly reporting time by 45% via scheduled PDFs and CSV exports.",
                "Improved anomaly response with real-time alerts and configurable thresholds.",
                "Zero P1 incidents post go-live through observability and error budgets."
            ],
            metrics: [
                { label: "Reporting Time", value: "-45%", description: "Time saved on scheduled reports" },
                { label: "Alert MTTR", value: "-32%", description: "Mean time to respond to alerts" },
                { label: "Uptime", value: "99.95%", description: "Stability after launch" }
            ],
            timeline: "14 weeks",
            platform: "Next.js, Node.js, PostgreSQL",
            services: ["Product Design", "Frontend", "Backend", "Security"],
            deliverables: ["Design System", "Dashboard Suite", "Audit Logging"],
            gallery: [{ src: "/portfolio/bank-track.jpg", caption: "Portfolio risk dashboard" }]
        }
    },
    {
        id: "3",
        slug: "nanoapp-studio",
        category: "AI Builder",
        title: ["Nano App", "Studio"],
        description: "AI-driven app builder for creating micro-apps with prompts, datasets, and instant previews.",
        image: "/portfolio/nano-studio.jpg",
        imageGallery: [
            "/portfolio/nano-studio.jpg",
            "/portfolio/visual-gallery/nano-studio-2.jpg",
            "/portfolio/visual-gallery/nano-studio-3.jpg",
            "/portfolio/visual-gallery/nano-studio-4.jpg",
        ],
        liveUrl: "https://nanoapp.nanostudio.ai/",
        tags: ["AI", "No-code", "Multi-tenant", "Realtime Preview"],
        caseStudy: {
            summary: "Created an AI-assisted builder with live preview, prompt chaining, and dataset management for rapid prototyping.",
            challenge: "Needed to orchestrate AI calls, preview state, and user datasets with minimal latency.",
            solution: [
                "Built a live canvas that syncs prompt edits to previews with optimistic updates.",
                "Added dataset ingestion, schema validation, and safe prompt templates.",
                "Implemented usage metering, quotas, and billing-friendly event logs."
            ],
            results: [
                "Users ship prototypes 2.3x faster on average.",
                "Reduced failed generations by 31% through guardrails and validation.",
                "Sub-800ms median preview refresh under typical loads."
            ],
            metrics: [
                { label: "Build Speed", value: "2.3x faster", description: "Prototype delivery speed" },
                { label: "Error Rate", value: "-31%", description: "Reduction in failed generations" },
                { label: "Preview Latency", value: "<800ms", description: "Median live preview refresh" }
            ],
            timeline: "10 weeks",
            platform: "Next.js, Vercel, Vector Store",
            services: ["Product Design", "Frontend", "AI Integration"],
            deliverables: ["Design System", "AI Builder UI", "Usage Metering"],
            gallery: [{ src: "/portfolio/nano-studio.jpg", caption: "Prompt-to-preview builder" }]
        }
    },
    {
        id: "4",
        slug: "vendorzero",
        category: "B2B Procurement",
        title: ["Vendor Zero"],
        description: "Vendor risk and procurement workspace with workflows, approvals, and centralized vendor records.",
        image: "/portfolio/vendor-zero.jpg",
        imageGallery: [
            "/portfolio/vendor-zero.jpg",
            "/portfolio/visual-gallery/vendor-zero-2.jpg",
            "/portfolio/visual-gallery/vendor-zero-3.jpg",
            "/portfolio/visual-gallery/vendor-zero-4.jpg",
        ],
        liveUrl: "https://vendorzero.de/",
        tags: ["B2B", "Workflows", "Vendor Management", "RBAC"],
        caseStudy: {
            summary: "Launched a procurement control center with intake flows, approvals, and vendor risk scoring.",
            challenge: "Procurement teams needed to unify requests, approvals, and compliance evidence in one place.",
            solution: [
                "Designed guided intake with required docs, risk scores, and approver routing.",
                "Centralized vendor profiles with contracts, SOC/ISO docs, and lifecycle history.",
                "Automated reminders for renewals and security attestations."
            ],
            results: [
                "37% faster vendor onboarding through structured intake.",
                "Reduced missing compliance docs by 42% with required checklists.",
                "Improved audit readiness via immutable activity timelines."
            ],
            metrics: [
                { label: "Onboarding Speed", value: "-37%", description: "Faster vendor onboarding" },
                { label: "Compliance Coverage", value: "+42%", description: "More complete compliance docs" },
                { label: "Audit Readiness", value: "Ready", description: "Audit-ready evidence and trails" }
            ],
            timeline: "9 weeks",
            platform: "Next.js, Supabase, Workflow Engine",
            services: ["UX/UI", "Frontend", "Workflow Design"],
            deliverables: ["Design System", "Vendor Workflows", "Audit Trails"],
            gallery: [{ src: "/portfolio/vendor-zero.jpg", caption: "Vendor intake and approvals" }]
        }
    },
    {
        id: "5",
        slug: "eyes4nature-safaris",
        category: "Travel & Tourism",
        title: ["Eyes 4 Nature", "Safaris"],
        description: "Safari tour operator site with itineraries, conservation storytelling, and lead capture.",
        image: "/portfolio/eyes-for-nature.jpg",
        imageGallery: [
            "/portfolio/eyes-for-nature.jpg",
            "/portfolio/visual-gallery/eyes-for-nature-2.jpg",
            "/portfolio/visual-gallery/eyes-for-nature-3.jpg",
            "/portfolio/visual-gallery/eyes-for-nature-4.jpg",
        ],
        liveUrl: "https://eyes4naturesafaris.com/",
        tags: ["Travel", "Lead Gen", "Storytelling", "CMS"],
        caseStudy: {
            summary: "Crafted a destination-first experience that blends itineraries, wildlife highlights, and trust signals to drive inquiries.",
            challenge: "Needed to showcase diverse trips, wildlife photography, and certifications while keeping inquiry flow simple.",
            solution: [
                "Built itinerary templates with pricing, inclusions, and seasonal highlights.",
                "Integrated galleries and testimonials to reinforce credibility.",
                "Added quick inquiry and itinerary save/share for faster decisions."
            ],
            results: [
                "54% lift in qualified inquiries after launch.",
                "Longer session times due to visual galleries and trip compare.",
                "Higher mobile conversions with simplified lead forms."
            ],
            metrics: [
                { label: "Qualified Inquiries", value: "+54%", description: "Increase in high-quality leads" },
                { label: "Session Duration", value: "+28%", description: "Longer engagement per session" },
                { label: "Mobile CVR", value: "+19%", description: "Lift in mobile conversion" }
            ],
            timeline: "8 weeks",
            platform: "Next.js, Headless CMS",
            services: ["UX/UI", "Frontend", "CMS Implementation"],
            deliverables: ["Itinerary Templates", "Media Galleries", "Lead Flow"],
            gallery: [{ src: "/portfolio/eyes-for-nature.jpg", caption: "Itinerary and gallery view" }]
        }
    }
];