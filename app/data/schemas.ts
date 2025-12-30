export const siteConfig = {
    name: "Gyrate Digital",
    url: "https://gyratedigital.com",
    logo: "https://gyratedigital.com/logo.png",
    description: "Gyrate Digital is a premier creative agency specializing in design, development, and digital innovation.",
    socials: [
        "https://www.facebook.com/GyrateDigital/",
        "https://www.instagram.com/gyrate.digital/",
        "https://www.linkedin.com/company/gyrate-digital/",
        "https://twitter.com/gyratedigital"
    ]
};


export const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": siteConfig.name,
    "url": siteConfig.url,
    "logo": siteConfig.logo,
    "description": siteConfig.description,
    "sameAs": siteConfig.socials
};

export const getBreadcrumbSchema = (items: { name: string; item: string }[]) => ({
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((it, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "name": it.name,
        "item": `${siteConfig.url}${it.item}`
    }))
});

export const homePageSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": siteConfig.name,
    "url": siteConfig.url,
    "publisher": organizationSchema
};

export const aboutPageSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "mainEntity": organizationSchema,
    "breadcrumb": getBreadcrumbSchema([
        { name: "Home", item: "/" },
        { name: "About Us", item: "/about" }
    ])
};

export const contactPageSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "mainEntity": organizationSchema,
    "breadcrumb": getBreadcrumbSchema([
        { name: "Home", item: "/" },
        { name: "Contact", item: "/contact" }
    ])
};

export const servicesPageSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Digital Agency Services",
    "provider": organizationSchema,
    "areaServed": "Worldwide",
    "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Digital Services",
        "itemListElement": [
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Web Development" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "UI/UX Design" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Digital Marketing" } }
        ]
    }
};

export const portfolioPageSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Our Work | Portfolio",
    "description": "Exploration of our latest projects and success stories.",
    "publisher": organizationSchema,
    "breadcrumb": getBreadcrumbSchema([
        { name: "Home", item: "/" },
        { name: "Portfolio", item: "/portfolio" }
    ])
};

export const blogPageSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "Gyrate Digital Blog",
    "description": "Insights, news, and updates from the world of digital innovation.",
    "publisher": organizationSchema,
    "breadcrumb": getBreadcrumbSchema([
        { name: "Home", item: "/" },
        { name: "Blog", item: "/blog" }
    ])
};

export const privacyPolicyPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Privacy Policy | Gyrate Digital",
    "description": "Our commitment to protecting your personal information.",
    "publisher": organizationSchema,
    "breadcrumb": getBreadcrumbSchema([
        { name: "Home", item: "/" },
        { name: "Privacy Policy", item: "/privacy-policy" }
    ])
};

export const cookiePolicyPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Cookie Policy | Gyrate Digital",
    "description": "Information about how we use cookies and tracking technologies.",
    "publisher": organizationSchema,
    "breadcrumb": getBreadcrumbSchema([
        { name: "Home", item: "/" },
        { name: "Cookie Policy", item: "/cookie-policy" }
    ])
};
