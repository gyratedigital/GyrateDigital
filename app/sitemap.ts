import { MetadataRoute } from 'next';
import { servicesSection } from './data/servicesSection';
import { blogIndex } from './data/blogIndex';
import { workSection } from './data/workSection';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://gyratedigital.com';

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

    const serviceRoutes = servicesSection.map((service) => ({
        url: `${baseUrl}/services/${service.slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.7,
    }));

    const blogRoutes = blogIndex.map((post) => ({
        url: `${baseUrl}/blog/${post.slug}`,
        lastModified: new Date(post.lastModified),
        changeFrequency: 'weekly' as const,
        priority: 0.8,
    }));

    const portfolioRoutes = workSection.map((work) => ({
        url: `${baseUrl}/portfolio/${work.slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.7,
    }));

    return [...staticRoutes, ...serviceRoutes, ...blogRoutes, ...portfolioRoutes];
}
