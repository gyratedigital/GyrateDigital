import { Metadata } from "next";
import { blogPosts } from "../../data/blog";

type Props = {
    params: Promise<{ slug: string }>;
    children: React.ReactNode;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const post = blogPosts.find((p) => p.slug === slug);

    if (!post) {
        return {
            title: "Blog Post Not Found | Gyrate Digital",
        };
    }

    return {
        title: `${post.title} | Gyrate Digital Blog`,
        description: post.excerpt,
        openGraph: {
            title: post.title,
            description: post.excerpt,
            images: [post.image]
        }
    };
}

export default function BlogPostLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
