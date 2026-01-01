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
        category: "GenAi",
        title: ["Generative", " AI"],
        description:
            "Harness the power of generative AI to create intelligent content, automate creative processes, and build AI-powered solutions that generate text, images, code, and insights tailored to your business needs.",
        image: "/services/ai-automations.jpg",
        slug: "genai",
        nestedServices: [
            {
                title: "AI Chatbot Integration",
                description: "Domain-trained assistants embedded in sites, apps, and support flows. Our AI chatbots understand context, handle complex queries, and provide instant responses 24/7. They integrate seamlessly with your existing systems and learn from interactions to improve over time. Transform customer support with intelligent automation that scales with your business needs.",
                image: "/services/ai-automation/ai-chatboat.png",
            },
            {
                title: "AI-Based Image/Video Analysis",
                description: "Vision pipelines for moderation, tagging, quality checks, and insights. Our AI systems analyze visual content to detect objects, faces, scenes, and anomalies in real-time. Automate content moderation, enhance search capabilities, and extract valuable insights from your media assets. Perfect for e-commerce, security, and content management applications.",
                image: "/services/ai-automation/ai-video-analysis.jpg",
            },
            {
                title: "Workflow Automation Tools",
                description: "LLM-augmented processes that reduce manual steps and increase throughput. Automate repetitive tasks, streamline business processes, and enable intelligent decision-making across your organization. Our workflow tools integrate with your existing systems and adapt to your unique business logic. Save time, reduce errors, and boost productivity with AI-powered automation.",
                image: "/services/ai-automation/ai-workflow-automation.jpg",
            },
            {
                title: "Recommendation Systems",
                description: "Personalized content, product, and offer recommendations using behavioral data. Our recommendation engines analyze user behavior, preferences, and patterns to deliver highly relevant suggestions. Increase engagement, conversion rates, and customer satisfaction with AI-driven personalization. Whether for e-commerce, content platforms, or services, we build systems that learn and adapt.",
                image: "/services/ai-automation/ai-recommendation-system.jpg",
            },
            {
                title: "AI-Powered Web Applications",
                description: "End-to-end products combining AI inference, UX, and secure data handling. Build intelligent web applications that leverage AI capabilities while maintaining excellent user experience and security. From natural language processing to computer vision, we integrate cutting-edge AI into your web platforms. Create next-generation applications that understand, learn, and respond intelligently.",
                image: "/services/ai-automation/ai-web-development.jpg",
            },
        ],
    },
    {
        id: 2,
        number: "02",
        category: "Mobile Apps",
        title: ["Mobile Applications ", " Development"],
        description:
            "iOS, Android, and cross-platform apps with intuitive UX, offline-first flows, and rock-solid API integrations.",
        image: "/services/mobile-development.jpg",
        slug: "mobile-app-development",
        nestedServices: [
            {
                title: "Android & iOS Apps",
                description: "Native-feeling experiences with performant navigation and device integrations. We build native mobile applications using Swift for iOS and Kotlin for Android, ensuring optimal performance and platform-specific features. Access device capabilities like camera, GPS, push notifications, and biometric authentication seamlessly. Deliver smooth, responsive apps that feel native to each platform.",
                image: "/services/mobile-application-development/ios-android.png",
            },
            {
                title: "React Native Apps",
                description: "Shared codebases, platform-specific polish, and OTA update support. Develop once and deploy to both iOS and Android with React Native, reducing development time and costs. We maintain platform-specific optimizations while sharing core business logic. Support over-the-air updates for instant bug fixes and feature rollouts without app store approval delays.",
                image: "/services/mobile-application-development/react-native.png",
            },
            {
                title: "Cross-Platform Mobile Apps",
                description: "Consistent UX, unified design systems, and efficient delivery across stores. Build cross-platform applications using Flutter, Ionic, or other frameworks that deliver native-like performance. Maintain consistent user experience across iOS and Android while reducing development and maintenance overhead. Launch faster with a single codebase that works everywhere.",
                image: "/services/mobile-application-development/cross-platform.png",
            },
            {
                title: "API Integration for Apps",
                description: "Reliable API orchestration, caching, and error handling for mobile clients. Seamlessly connect your mobile apps with backend services, third-party APIs, and cloud services. Implement robust error handling, offline capabilities, and data synchronization. Our integration solutions ensure reliable data flow, optimal performance, and excellent user experience even under poor network conditions.",
                image: "/services/mobile-application-development/api-integeration.png",
            },
            {
                title: "App UI/UX Design",
                description: "Gesture-friendly flows, accessibility, and microcopy that improves retention. Design intuitive mobile interfaces that users love to interact with. We focus on touch-friendly controls, smooth animations, and clear information hierarchy. Ensure accessibility compliance and create delightful micro-interactions that enhance user engagement and drive app retention.",
                image: "/services/ui-ux.jpg",
            },
            {
                title: "App Publishing & Maintenance",
                description: "Store readiness, release channels, monitoring, and iterative optimizations. Navigate app store submission processes for both Apple App Store and Google Play Store. Set up beta testing channels, implement analytics, and establish monitoring for crashes and performance. Provide ongoing maintenance, updates, and optimizations to keep your app running smoothly and meeting user expectations.",
                image: "/services/mobile-application-development/app-publish.png",
            },
        ],
    },
    {
        id: 3,
        number: "03",
        category: "Websites & eCommerce",
        title: ["Web Applications", " Development"],
        description:
            "Conversion-focused websites and storefronts built on WordPress, WooCommerce, Shopify, or fully custom stacks with performance, security, and maintainability baked in.",
        image: "/services/web-development.jpg",
        slug: "website-development",
        nestedServices: [
            {
                title: "Custom Web Design",
                description: "Brand-aligned UI that balances storytelling with conversion best practices. We create unique, visually stunning websites that reflect your brand identity while optimizing for user engagement and conversions. Every design element is carefully crafted to guide users toward your goals. From color psychology to typography choices, we ensure your website makes a lasting impression.",
                image: "/services/web-development/custom-web-design.png",
            },
            {
                title: "Responsive Website Development",
                description: "Fast, accessible builds that look great on every device and network condition. Our responsive websites adapt seamlessly to smartphones, tablets, and desktops, ensuring optimal user experience across all screen sizes. We optimize for performance, accessibility, and SEO while maintaining visual consistency. Your website will load quickly and function perfectly on any device.",
                image: "/services/web-development/responsive-web-design.png",
            },
            {
                title: "Landing Pages",
                description: "Tested layouts, persuasive copy structure, and analytics-ready funnels. Create high-converting landing pages designed to turn visitors into customers. We use proven conversion optimization techniques, A/B testing, and data-driven design to maximize your ROI. Every element is strategically placed to guide users through your sales funnel and achieve your business objectives.",
                image: "/services/web-development/landing-page.png",
            },
            {
                title: "UI/UX Design",
                description: "Research-led flows, component systems, and micro-interactions that reduce friction. Our design process starts with user research and ends with pixel-perfect interfaces that users love. We create intuitive navigation, clear information architecture, and delightful interactions that enhance user satisfaction. Build design systems that scale and maintain consistency across your digital products.",
                image: "/services/ui-ux.jpg",
            },
            {
                title: "Website Redesign",
                description: "Modernize visuals, IA, and performance without sacrificing SEO equity. Transform your outdated website into a modern, high-performing digital presence while preserving your hard-earned search rankings. We audit your current site, identify improvement opportunities, and execute a redesign that boosts conversions and user engagement. Maintain SEO value while gaining a fresh, contemporary look.",
                image: "/services/web-development/website-redesign.png",
            },
            {
                title: "Figma/PSD to Website",
                description: "Pixel-accurate builds with semantic HTML, clean CSS, and reusable components. Transform your design files into fully functional, responsive websites with precision and attention to detail. We ensure every pixel matches your design while writing clean, maintainable code. Our conversion process maintains design integrity while optimizing for performance and accessibility standards.",
                image: "/services/web-development/psd-to-figma.png",
            },
            {
                title: "Performance Optimization",
                description: "Core Web Vitals tuning, image/CDN strategy, and code splitting for speed. Accelerate your website's loading times and improve user experience with comprehensive performance optimization. We analyze your site's performance bottlenecks and implement solutions like lazy loading, code splitting, and CDN integration. Achieve faster load times, better SEO rankings, and improved user satisfaction.",
                image: "/services/web-development/speed-optimization.png",
            },
            {
                title: "WordPress Website Setup",
                description: "Secure, manageable foundations with sensible plugins and editor experience. Get a WordPress website that's secure, fast, and easy to manage. We set up WordPress with best practices, configure essential plugins, and customize the admin experience for your team. Your content team will love the intuitive editing experience while you benefit from robust security and performance.",
                image: "/services/web-development/wordpress-website.png",
            },
            {
                title: "Custom Theme Development",
                description: "Headless or classic themes built for flexibility, longevity, and branding needs. Create custom WordPress themes tailored to your brand and requirements. Whether you need a traditional theme or a headless setup with modern frameworks, we build solutions that are maintainable and scalable. Your theme will be unique, performant, and perfectly aligned with your brand identity.",
                image: "/services/web-development/custom-wordpress-theme.png",
            },
            {
                title: "Custom Plugin Development",
                description: "Purpose-built plugins to extend workflows, integrations, and editorial control. Extend WordPress functionality with custom plugins designed for your specific needs. We build secure, well-coded plugins that integrate seamlessly with your workflow and third-party services. Whether it's custom post types, API integrations, or unique features, we create plugins that work exactly as you need.",
                image: "/services/web-development/wordpress-plugin.png",
            },
            {
                title: "WooCommerce Store",
                description: "Product catalogs, carts, and checkout tuned for conversions and reliability. Build powerful e-commerce stores on WordPress with WooCommerce. We create product catalogs, shopping carts, and checkout processes optimized for conversions. Your store will handle inventory, payments, shipping, and orders reliably while providing an excellent shopping experience that drives sales.",
                image: "/services/web-development/ecommerce-platform.png",
            },
            {
                title: "Shopify Store",
                description: "Theme customization, Shopify Functions, and app integrations for growth. Launch and grow your e-commerce business on Shopify with custom themes and powerful integrations. We customize Shopify themes to match your brand, integrate essential apps, and leverage Shopify Functions for custom functionality. Build a scalable online store that grows with your business.",
                image: "/services/web-development/shopify.png",
            },
            {
                title: "Multi-Vendor Marketplaces",
                description: "Vendor onboarding, commissions, payouts, and compliance-ready architecture. Create thriving multi-vendor marketplaces where sellers can easily onboard, manage products, and receive payments. We build comprehensive marketplace platforms with vendor dashboards, commission systems, and automated payout processing. Your marketplace will handle complex vendor relationships while maintaining a seamless customer experience.",
                image: "/services/web-development/multi-vendor.png",
            },
            {
                title: "Speed Optimization",
                description: "Audit-led improvements across hosting, assets, and runtime performance. Identify and fix performance issues with comprehensive speed optimization. We conduct detailed audits, optimize images and assets, implement caching strategies, and fine-tune server configurations. Transform slow websites into lightning-fast experiences that keep users engaged and improve your search rankings.",
                image: "/services/web-development/speed-optimization.png",
            },
            {
                title: "Security & Maintenance",
                description: "Hardening, monitoring, backups, and ongoing updates to keep sites resilient. Protect your website with robust security measures and proactive maintenance. We implement security hardening, set up monitoring systems, configure automated backups, and keep your software updated. Your website will be secure, backed up, and maintained to prevent issues before they impact your business.",
                image: "/services/web-development/web-security.png",
            },
            {
                title: "Custom eCommerce Websites",
                description: "Headless commerce builds with bespoke product experiences and integrations. Build custom e-commerce solutions tailored to your unique business needs. We create headless commerce architectures that provide flexibility, performance, and scalability. Integrate with any system, customize every aspect of the shopping experience, and deliver a platform that grows with your business requirements.",
                image: "/services/web-development/custom-ecommerce.png",
            },
            {
                title: "Payment Gateway Integration",
                description: "Stripe, PayPal, regional gateways, and PCI-aware payment flows. Securely process payments with leading payment gateways and ensure PCI compliance. We integrate Stripe, PayPal, and regional payment providers to give your customers flexible payment options. Your payment flows will be secure, user-friendly, and optimized for conversions while meeting all compliance requirements.",
                image: "/services/web-development/payment-gateway.png",
            },
            {
                title: "Product Management Systems",
                description: "Catalog tooling, inventory sync, and merchandising workflows for teams. Streamline product management with custom systems that handle catalogs, inventory synchronization, and merchandising workflows. We build tools that help your team efficiently manage products, track inventory across channels, and optimize product presentation. Simplify complex product operations with intuitive management interfaces.",
                image: "/services/web-development/product-management.png",
            },
            {
                title: "MERN Web Applications",
                description: "MongoDB, Express, React, and Node builds optimized for scalability and DX. Build full-stack web applications using the MERN stack for optimal performance and developer experience. We leverage MongoDB for flexible data storage, Express for robust APIs, React for dynamic UIs, and Node.js for scalable server-side logic. Create modern, maintainable applications that scale with your business.",
                image: "/services/web-development/mern-stack.png",
            },
            {
                title: "Next.js Full-Stack Apps",
                description: "Server components, ISR/SSR, and edge-ready deployments for speed and SEO. Develop high-performance web applications with Next.js that combine server-side rendering, static generation, and edge computing. We build apps that load instantly, rank well in search engines, and provide excellent user experiences. Leverage Next.js features for optimal performance and SEO outcomes.",
                image: "/services/web-development/next-js.png",
            },
            {
                title: "REST & GraphQL APIs",
                description: "Versioned APIs with validation, rate limiting, observability, and docs. Build robust APIs that power your applications and enable integrations. We create well-documented, versioned APIs with proper validation, rate limiting, and monitoring. Whether REST or GraphQL, your APIs will be reliable, secure, and easy for developers to integrate with comprehensive documentation and testing.",
                image: "/services/web-development/restful-api.png",
            },
            {
                title: "Admin Dashboards",
                description: "Role-aware dashboards with charts, CRUD, workflows, and audit trails. Create powerful admin dashboards that give your team the tools they need to manage your business effectively. We build role-based access control, data visualizations, CRUD operations, and comprehensive audit trails. Your admin interface will be intuitive, secure, and provide insights that drive better decision-making.",
                image: "/services/web-development/admin-dashboard.png",
            },
            {
                title: "Role-Based Authentication Systems",
                description: "JWT, session, SSO, and MFA setups with granular permissions. Implement secure authentication and authorization systems that protect your applications and data. We set up JWT tokens, session management, single sign-on (SSO), and multi-factor authentication (MFA). Your authentication system will support granular permissions, role-based access control, and provide a seamless user experience while maintaining security.",
                image: "/services/web-development/role-based-app.png",
            },
            {
                title: "Real-Time Apps (Chat, Notifications)",
                description: "WebSockets, SSE, and pub/sub pipelines for live collaboration features. Enable real-time communication and collaboration in your applications with WebSockets, Server-Sent Events, and pub/sub architectures. We build chat systems, live notifications, collaborative editing, and other real-time features that keep users engaged. Your app will deliver instant updates and seamless real-time experiences.",
                image: "/services/web-development/real-time-web.png",
            },
            {
                title: "API Integrations",
                description: "Payments, CRMs, marketing stacks, and third-party data sources connected cleanly. Connect your application with essential third-party services and APIs seamlessly. We integrate payment processors, CRM systems, marketing platforms, and data sources to create unified workflows. Your integrations will be reliable, well-documented, and handle errors gracefully, ensuring smooth operations across all connected services.",
                image: "/services/mobile-application-development/api-integeration.png",
            },
        ],
    },    
    {
        id: 4,
        number: "04",
        category: "Cloud & DevOps",
        title: ["Cloud, Development", " & Maintenance"],
        description:
            "Reliable infrastructure, CI/CD, and observability so your web and mobile products stay fast, secure, and up to date.",
        image: "/services/cloud-development.jpg",
        slug: "cloud-operations",
        nestedServices: [
            {
                title: "Hosting & Deployment",
                description: "Cloud-native deployments on Vercel, AWS, Azure, or GCP with IaC. Deploy your applications to leading cloud platforms with infrastructure as code for reliability and scalability. We set up automated deployment pipelines, configure CDN networks, and implement best practices for cloud hosting. Your applications will be deployed efficiently, scale automatically, and maintain high availability across global regions.",
                image: "/services/cloud-devops/web-hosting.png",
            },
            {
                title: "Server Setup & Management",
                description: "Hardened servers, scaling plans, and cost-efficient environments. Configure and manage servers with security hardening, automated scaling, and cost optimization. We set up servers with proper security configurations, monitoring systems, and scaling policies that adapt to your traffic patterns. Your infrastructure will be secure, scalable, and cost-effective while maintaining optimal performance.",
                image: "/services/cloud-devops/server-setup.png",
            },
            {
                title: "CI/CD Integration",
                description: "Automated testing, preview environments, and safe rollouts with rollbacks. Implement continuous integration and deployment pipelines that automate testing, building, and deployment processes. We set up preview environments for every pull request, automated testing suites, and deployment strategies with instant rollback capabilities. Ship code faster and more reliably with confidence in every release.",
                image: "/services/cloud-devops/ci-cd-pipeline.png",
            },
            {
                title: "Website/App Maintenance",
                description: "Patching, dependency hygiene, uptime monitoring, and incident response. Keep your websites and applications running smoothly with proactive maintenance and monitoring. We handle security patches, dependency updates, uptime monitoring, and rapid incident response. Your applications will stay secure, up-to-date, and available with minimal downtime and maximum reliability.",
                image: "/services/cloud-devops/web-app-maintenance.png",
            },
            {
                title: "Bug Fixing & Updates",
                description: "Root-cause analysis, regression tests, and stable releases. Quickly identify, fix, and deploy bug fixes with comprehensive testing and validation. We conduct thorough root-cause analysis, write regression tests to prevent future issues, and ensure stable releases through proper testing procedures. Your bug fixes will be reliable, well-tested, and deployed without introducing new problems.",
                image: "/services/cloud-devops/bug-fixing.png",
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
        slug: "ui-ux-design",
        nestedServices: [
            {
                title: "Inventory & POS Systems",
                description: "Real-time inventory, billing, and reporting interfaces for operations teams. Design intuitive interfaces for inventory management and point-of-sale systems that streamline operations. We create dashboards that provide real-time inventory tracking, efficient billing workflows, and comprehensive reporting tools. Your operations team will have the tools they need to manage inventory and sales effectively.",
                image: "/services/ui-ux/inventory.png",
            },
            {
                title: "CRM / ERP Solutions",
                description: "Customizable modules, permissions, and data visualizations for leadership. Build comprehensive CRM and ERP interfaces that adapt to your business processes and provide actionable insights. We design customizable modules, role-based permissions, and powerful data visualizations that help leadership make informed decisions. Your CRM/ERP will be intuitive, flexible, and provide the visibility you need.",
                image: "/services/ui-ux/crm-erp.png",
            },
            {
                title: "Booking & Appointment Systems",
                description: "Calendar, reminders, payment capture, and staff management flows. Create seamless booking and appointment systems that make scheduling effortless for customers and staff. We design intuitive calendar interfaces, automated reminder systems, integrated payment processing, and comprehensive staff management tools. Your booking system will reduce no-shows, streamline operations, and improve customer satisfaction.",
                image: "/services/ui-ux/booking.png",
            },
            {
                title: "Business Automation Tools",
                description: "Workflow builders, triggers, and integrations that cut manual steps. Design user-friendly interfaces for business automation tools that empower users to create workflows without technical expertise. We build visual workflow builders, trigger configuration interfaces, and integration management tools. Your team will be able to automate processes easily, reducing manual work and increasing efficiency.",
                image: "/services/ui-ux/business-automation.png",
            },
            {
                title: "Analytics & Reporting Systems",
                description: "Dashboards with drill-downs, exports, and governance-ready access control. Create powerful analytics and reporting interfaces that transform data into actionable insights. We design interactive dashboards with drill-down capabilities, export functionality, and role-based access control. Your analytics system will make complex data accessible, secure, and useful for decision-making at all levels.",
                image: "/services/ui-ux/analytics.png",
            },
            {
                title: "Website UI/UX",
                description: "User research, wireframes, and component kits tuned for web conversion. Design website interfaces that convert visitors into customers through user-centered design and conversion optimization. We conduct user research, create detailed wireframes, and build component libraries optimized for web performance and conversions. Your website will provide an excellent user experience while achieving your business goals.",
                image: "/services/ui-ux.jpg",
            },
            {
                title: "App UI/UX",
                description: "Design systems and prototypes that translate smoothly to production apps. Create mobile app interfaces that are beautiful, intuitive, and performant. We develop comprehensive design systems, interactive prototypes, and detailed specifications that ensure smooth handoff to development. Your app designs will be production-ready, maintainable, and provide exceptional user experiences across platforms.",
                image: "/services/ui-ux/app-ui.png",
            },
            {
                title: "Dashboard UX",
                description: "Data-dense interfaces simplified with hierarchy, color, and interaction states. Design dashboards that make complex data accessible and actionable through thoughtful information architecture. We simplify data-dense interfaces using visual hierarchy, strategic color coding, and clear interaction states. Your dashboards will help users quickly understand information and make informed decisions without feeling overwhelmed.",
                image: "/services/ui-ux/dashboard-ux.png",
            },
            {
                title: "Wireframing & Prototyping",
                description: "Clickable prototypes to validate flows early with stakeholders and users. Create interactive wireframes and prototypes that help validate design decisions before development begins. We build clickable prototypes that simulate real user experiences, enabling early testing and stakeholder feedback. Validate your designs, identify usability issues, and refine user flows before investing in development.",
                image: "/services/ui-ux/wireframing.png",
            },
            {
                title: "Design Systems",
                description: "Token-driven systems, documentation, and handoff ready for engineering. Build comprehensive design systems that ensure consistency and accelerate development. We create token-driven design systems with complete documentation, component libraries, and developer-friendly handoff materials. Your design system will maintain brand consistency, speed up development, and make collaboration between design and engineering seamless.",
                image: "/services/ui-ux/design-system.png",
            },
        ],
    },
    {
        id: 6,
        number: "06",
        category: "Talent Solutions",
        title: ["Staff", " Augmentation"],
        description:
            "Scale your team with skilled professionals through flexible staffing models. Access top talent on-demand with onshoring, offshoring, and nearshoring solutions tailored to your project needs and budget.",
        image: "/services/staff-augmentation.png",
        slug: "staff-augmentation",
        nestedServices: [
            {
                title: "Onshoring",
                description: "Connect with skilled professionals within your region for real-time collaboration and aligned time zones. Our onshoring model connects you with talented developers and designers in your local region, ensuring seamless communication and cultural alignment. Work with teams that share your time zone, making real-time collaboration and quick iterations possible. Ideal for projects requiring frequent communication, rapid feedback loops, and close integration with your in-house team.",
                image: "/services/onshoring.svg",
            },
            {
                title: "Offshoring",
                description: "Access global experts with specialized skills for cost-efficient, round-the-clock productivity. Leverage our global talent pool to access specialized expertise at competitive rates while maintaining high quality standards. Our offshoring model enables round-the-clock development cycles, with teams working across different time zones to accelerate project delivery. Perfect for long-term projects, specialized skill requirements, and budget-conscious initiatives that don't compromise on quality.",
                image: "/services/offshoring.svg",
            },
            {
                title: "Nearshoring",
                description: "Leverage nearby regions for cost-effective solutions with minimal time zone differences. Get the best of both worlds with nearshoring—cost-effective talent from nearby regions with minimal time zone overlap. This model facilitates smooth communication, frequent collaboration, and cultural proximity while offering significant cost savings. Ideal for businesses seeking a regional approach with budget flexibility and the ability to maintain regular synchronous communication.",
                image: "/services/nearshoring.svg",
            },
        ],
    },
    
];