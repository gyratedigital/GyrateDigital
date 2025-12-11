export type NestedService = {
    title: string;
    description: string;
    image: string;
};

export type Service = {
    id: number;
    number: string;
    category: string;
    title: string[];
    description: string;
    image: string;
    slug: string;
    nestedServices: NestedService[];
};

export const servicesSection: Service[] = [
    {
        id: 1,
        number: "01",
        category: "AI Automation",
        title: ["AI", " Automation"],
        description:
            "Applied AI that augments your products with chatbots, recommendations, and workflow automation grounded in real data.",
        image: "/services/2150061955.jpg",
        slug: "ai-automation",
        nestedServices: [
            {
                title: "AI Chatbot Integration",
                description: "Domain-trained assistants embedded in sites, apps, and support flows.",
                image: "/services/2150061955.jpg",
            },
            {
                title: "AI-Based Image/Video Analysis",
                description: "Vision pipelines for moderation, tagging, quality checks, and insights.",
                image: "/services/2150061955.jpg",
            },
            {
                title: "Workflow Automation Tools",
                description: "LLM-augmented processes that reduce manual steps and increase throughput.",
                image: "/services/2150061955.jpg",
            },
            {
                title: "Recommendation Systems",
                description: "Personalized content, product, and offer recommendations using behavioral data.",
                image: "/services/2150061955.jpg",
            },
            {
                title: "AI-Powered Web Applications",
                description: "End-to-end products combining AI inference, UX, and secure data handling.",
                image: "/services/2150061955.jpg",
            },
        ],
    },
    {
        id: 2,
        number: "02",
        category: "Mobile Apps",
        title: ["Ai powered ", " Mobile applications"],
        description:
            "iOS, Android, and cross-platform apps with intuitive UX, offline-first flows, and rock-solid API integrations.",
        image: "/services/mobile-development.jpg",
        slug: "mobile-app-development",
        nestedServices: [
            {
                title: "Android & iOS Apps",
                description: "Native-feeling experiences with performant navigation and device integrations.",
                image: "/services/mobile-development.jpg",
            },
            {
                title: "React Native Apps",
                description: "Shared codebases, platform-specific polish, and OTA update support.",
                image: "/services/mobile-development.jpg",
            },
            {
                title: "Cross-Platform Mobile Apps",
                description: "Consistent UX, unified design systems, and efficient delivery across stores.",
                image: "/services/mobile-development.jpg",
            },
            {
                title: "API Integration for Apps",
                description: "Reliable API orchestration, caching, and error handling for mobile clients.",
                image: "/services/backend.jpg",
            },
            {
                title: "App UI/UX Design",
                description: "Gesture-friendly flows, accessibility, and microcopy that improves retention.",
                image: "/services/ui-ux.jpg",
            },
            {
                title: "App Publishing & Maintenance",
                description: "Store readiness, release channels, monitoring, and iterative optimizations.",
                image: "/services/mobile-development.jpg",
            },
        ],
    },
    {
        id: 3,
        number: "03",
        category: "Websites & eCommerce",
        title: ["Web applications", " Development"],
        description:
            "Conversion-focused websites and storefronts built on WordPress, WooCommerce, Shopify, or fully custom stacks with performance, security, and maintainability baked in.",
        image: "/services/web-development.jpg",
        slug: "website-ecommerce-development",
        nestedServices: [
            {
                title: "Custom Web Design",
                description: "Brand-aligned UI that balances storytelling with conversion best practices.",
                image: "/services/web-development.jpg",
            },
            {
                title: "Responsive Website Development",
                description: "Fast, accessible builds that look great on every device and network condition.",
                image: "/services/web-development.jpg",
            },
            {
                title: "Landing Pages",
                description: "Tested layouts, persuasive copy structure, and analytics-ready funnels.",
                image: "/services/web-development.jpg",
            },
            {
                title: "UI/UX Design",
                description: "Research-led flows, component systems, and micro-interactions that reduce friction.",
                image: "/services/ui-ux.jpg",
            },
            {
                title: "Website Redesign",
                description: "Modernize visuals, IA, and performance without sacrificing SEO equity.",
                image: "/services/web-development.jpg",
            },
            {
                title: "Figma/PSD to Website",
                description: "Pixel-accurate builds with semantic HTML, clean CSS, and reusable components.",
                image: "/services/ui-ux.jpg",
            },
            {
                title: "Performance Optimization",
                description: "Core Web Vitals tuning, image/CDN strategy, and code splitting for speed.",
                image: "/services/seo.jpg",
            },
            {
                title: "WordPress Website Setup",
                description: "Secure, manageable foundations with sensible plugins and editor experience.",
                image: "/services/web-development.jpg",
            },
            {
                title: "Custom Theme Development",
                description: "Headless or classic themes built for flexibility, longevity, and branding needs.",
                image: "/services/web-development.jpg",
            },
            {
                title: "Custom Plugin Development",
                description: "Purpose-built plugins to extend workflows, integrations, and editorial control.",
                image: "/services/backend.jpg",
            },
            {
                title: "WooCommerce Store",
                description: "Product catalogs, carts, and checkout tuned for conversions and reliability.",
                image: "/services/web-development.jpg",
            },
            {
                title: "Shopify Store",
                description: "Theme customization, Shopify Functions, and app integrations for growth.",
                image: "/services/web-development.jpg",
            },
            {
                title: "Multi-Vendor Marketplaces",
                description: "Vendor onboarding, commissions, payouts, and compliance-ready architecture.",
                image: "/services/backend.jpg",
            },
            {
                title: "Speed Optimization",
                description: "Audit-led improvements across hosting, assets, and runtime performance.",
                image: "/services/seo.jpg",
            },
            {
                title: "Security & Maintenance",
                description: "Hardening, monitoring, backups, and ongoing updates to keep sites resilient.",
                image: "/services/backend.jpg",
            },
            {
                title: "Custom eCommerce Websites",
                description: "Headless commerce builds with bespoke product experiences and integrations.",
                image: "/services/web-development.jpg",
            },
            {
                title: "Payment Gateway Integration",
                description: "Stripe, PayPal, regional gateways, and PCI-aware payment flows.",
                image: "/services/backend.jpg",
            },
            {
                title: "Product Management Systems",
                description: "Catalog tooling, inventory sync, and merchandising workflows for teams.",
                image: "/services/backend.jpg",
            },
            {
                title: "MERN Web Applications",
                description: "MongoDB, Express, React, and Node builds optimized for scalability and DX.",
                image: "/services/backend.jpg",
            },
            {
                title: "Next.js Full-Stack Apps",
                description: "Server components, ISR/SSR, and edge-ready deployments for speed and SEO.",
                image: "/services/web-development.jpg",
            },
            {
                title: "REST & GraphQL APIs",
                description: "Versioned APIs with validation, rate limiting, observability, and docs.",
                image: "/services/backend.jpg",
            },
            {
                title: "Admin Dashboards",
                description: "Role-aware dashboards with charts, CRUD, workflows, and audit trails.",
                image: "/services/ui-ux.jpg",
            },
            {
                title: "Role-Based Authentication Systems",
                description: "JWT, session, SSO, and MFA setups with granular permissions.",
                image: "/services/backend.jpg",
            },
            {
                title: "Real-Time Apps (Chat, Notifications)",
                description: "WebSockets, SSE, and pub/sub pipelines for live collaboration features.",
                image: "/services/backend.jpg",
            },
            {
                title: "API Integrations",
                description: "Payments, CRMs, marketing stacks, and third-party data sources connected cleanly.",
                image: "/services/backend.jpg",
            },
        ],
    },
    // {
    //     id: 2,
    //     number: "02",
    //     category: "Full-Stack / MERN",
    //     title: ["Full-Stack / MERN", " Development"],
    //     description:
    //         "Production-grade full-stack applications with robust APIs, secure auth, admin tooling, and analytics baked in from day one.",
    //     image: "/services/backend.jpg",
    //     slug: "full-stack-mern-development",
    //     nestedServices: [
            
    //     ],
    // },
    
    
    {
        id: 4,
        number: "04",
        category: "Cloud & DevOps",
        title: ["Cloud, Development", " & Maintenance"],
        description:
            "Reliable infrastructure, CI/CD, and observability so your web and mobile products stay fast, secure, and up to date.",
        image: "/services/seo.jpg",
        slug: "cloud-deployment-maintenance",
        nestedServices: [
            {
                title: "Hosting & Deployment",
                description: "Cloud-native deployments on Vercel, AWS, Azure, or GCP with IaC.",
                image: "/services/seo.jpg",
            },
            {
                title: "Server Setup & Management",
                description: "Hardened servers, scaling plans, and cost-efficient environments.",
                image: "/services/backend.jpg",
            },
            {
                title: "CI/CD Integration",
                description: "Automated testing, preview environments, and safe rollouts with rollbacks.",
                image: "/services/seo.jpg",
            },
            {
                title: "Website/App Maintenance",
                description: "Patching, dependency hygiene, uptime monitoring, and incident response.",
                image: "/services/seo.jpg",
            },
            {
                title: "Bug Fixing & Updates",
                description: "Root-cause analysis, regression tests, and stable releases.",
                image: "/services/backend.jpg",
            },
        ],
    },
    {
        id: 5,
        number: "05",
        category: "Software & UX",
        title: ["UI/UX", " Design"],
        description:
            "Product strategy, UX architecture, and high-fidelity interfaces that translate complex workflows into simple user journeys.",
        image: "/services/ui-ux.jpg",
        slug: "software-ui-ux-design",
        nestedServices: [
            {
                title: "Inventory & POS Systems",
                description: "Real-time inventory, billing, and reporting interfaces for operations teams.",
                image: "/services/backend.jpg",
            },
            {
                title: "CRM / ERP Solutions",
                description: "Customizable modules, permissions, and data visualizations for leadership.",
                image: "/services/backend.jpg",
            },
            {
                title: "Booking & Appointment Systems",
                description: "Calendar, reminders, payment capture, and staff management flows.",
                image: "/services/web-development.jpg",
            },
            {
                title: "Business Automation Tools",
                description: "Workflow builders, triggers, and integrations that cut manual steps.",
                image: "/services/backend.jpg",
            },
            {
                title: "Analytics & Reporting Systems",
                description: "Dashboards with drill-downs, exports, and governance-ready access control.",
                image: "/services/ui-ux.jpg",
            },
            {
                title: "Website UI/UX",
                description: "User research, wireframes, and component kits tuned for web conversion.",
                image: "/services/ui-ux.jpg",
            },
            {
                title: "App UI/UX",
                description: "Design systems and prototypes that translate smoothly to production apps.",
                image: "/services/ui-ux.jpg",
            },
            {
                title: "Dashboard UX",
                description: "Data-dense interfaces simplified with hierarchy, color, and interaction states.",
                image: "/services/ui-ux.jpg",
            },
            {
                title: "Wireframing & Prototyping",
                description: "Clickable prototypes to validate flows early with stakeholders and users.",
                image: "/services/ui-ux.jpg",
            },
            {
                title: "Design Systems",
                description: "Token-driven systems, documentation, and handoff ready for engineering.",
                image: "/services/ui-ux.jpg",
            },
        ],
    },
    
];