import { MetadataRoute } from 'next';
import { servicesSection } from './data/servicesSection';
import { blogPosts } from './data/blog';
import { workSection } from './data/workSection';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://gyratedigital.com';

    // Static routes
    const staticRoutes = [
        '',
        '/about',
        '/services',
        '/portfolio',
        '/blog',
        '/contact',
        '/privacy-policy',
        '/cookie-policy',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: route === '' ? 1 : 0.8,
    }));

    // Dynamic Services routes
    const serviceRoutes = servicesSection.map((service) => ({
        url: `${baseUrl}/services/${service.slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.7,
    }));

    // Dynamic Blog routes
    const blogRoutes = blogPosts.map((post) => ({
        url: `${baseUrl}/blog/${post.slug}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.7,
    }));

    // Dynamic Portfolio routes
    const portfolioRoutes = workSection.map((work) => ({
        url: `${baseUrl}/portfolio/${work.slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.7,
    }));

    return [...staticRoutes, ...serviceRoutes, ...blogRoutes, ...portfolioRoutes];
}
