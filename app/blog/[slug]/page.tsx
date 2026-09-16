import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Calendar, Clock, BookOpen } from "lucide-react";

import NavigationMenuDemo from "../../components/Header";
import FooterSection from "../../components/FooterSection";
import JsonLd from "../../components/JsonLd";
import BackButton from "@/components/BackButton";
import ShareButton from "@/components/ShareButton";
import { blogPosts } from "../../data/blog";

type BlogPostPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return {
      title: "Blog Post Not Found | Gyrate Digital",
      robots: { index: false, follow: false },
    };
  }

  const url = `https://gyratedigital.com/blog/${post.slug}`;

  return {
    title: `${post.title} | Gyrate Digital Blog`,
    description: post.excerpt,
    keywords: post.categories,
    authors: [{ name: post.author.name }],
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: "article",
      url,
      title: post.title,
      description: post.excerpt,
      siteName: "Gyrate Digital",
      images: [
        {
          url: post.image,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [post.image],
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = blogPosts
    .filter(
      (p) =>
        p.id !== post.id &&
        p.categories.some((cat) => post.categories.includes(cat))
    )
    .slice(0, 3);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    image: `https://gyratedigital.com${post.image}`,
    datePublished: post.date,
    author: {
      "@type": "Organization",
      name: post.author.name,
      url: "https://gyratedigital.com",
    },
    publisher: {
      "@type": "Organization",
      name: "Gyrate Digital",
      logo: {
        "@type": "ImageObject",
        url: "https://gyratedigital.com/gy-logo.svg",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://gyratedigital.com/blog/${post.slug}`,
    },
    keywords: post.categories.join(", "),
  };

  return (
    <div className="w-full min-h-screen bg-background">
      <JsonLd data={articleSchema} />
      <NavigationMenuDemo />

      <div className="relative container mx-auto px-4 pt-[100px] pb-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-6">
            <BackButton fallbackHref="/blog" />
          </div>

          <div className="flex flex-wrap gap-2 mb-4">
            {post.categories.map((category, index) => (
              <span
                key={index}
                className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full border border-primary/20"
              >
                {category}
              </span>
            ))}
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-6 leading-tight">
            {post.title}
          </h1>

          <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-8 pb-8 border-b border-border">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full overflow-hidden bg-primary/10 flex items-center justify-center">
                <Image
                  src={post.author.avatar}
                  alt={post.author.name}
                  width={40}
                  height={40}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <p className="text-foreground font-medium">{post.author.name}</p>
                <p className="text-foreground/60 text-sm">Author</p>
              </div>
            </div>

            <div className="flex items-center gap-6 text-sm text-foreground/60">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>{post.readTime}</span>
              </div>
              <div className="flex items-center gap-2">
                <BookOpen className="w-4 h-4" />
                <span>Blog Post</span>
              </div>
            </div>

            <div className="ml-auto">
              <ShareButton />
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 mb-12">
        <div className="max-w-4xl mx-auto">
          <div className="relative h-64 md:h-96 rounded-xl overflow-hidden">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 mb-16">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none">
            <div className="text-lg text-foreground/80 leading-relaxed mb-8 p-6 bg-card rounded-xl border border-border">
              <p className="font-medium text-foreground mb-2">Summary</p>
              <p>{post.excerpt}</p>
            </div>

            <div
              className="prose prose-lg max-w-none text-foreground/90 leading-relaxed"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 mb-16">
        <div className="max-w-4xl mx-auto">
          <div className="bg-card rounded-xl p-6 border border-border">
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 rounded-full overflow-hidden bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Image
                  src={post.author.avatar}
                  alt={post.author.name}
                  width={64}
                  height={64}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  About {post.author.name}
                </h3>
                <p className="text-foreground/70 leading-relaxed">
                  {post.author.bio}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {relatedPosts.length > 0 && (
        <div className="container mx-auto px-4 mb-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-foreground mb-8">
              Related Posts
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedPosts.map((relatedPost) => (
                <article key={relatedPost.id} className="group">
                  <Link href={`/blog/${relatedPost.slug}`}>
                    <div className="bg-card rounded-xl overflow-hidden border border-border/60 hover:shadow-lg transition-all duration-300">
                      <div className="relative h-48 overflow-hidden">
                        <Image
                          src={relatedPost.image}
                          alt={relatedPost.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="p-4">
                        <div className="flex flex-wrap gap-2 mb-3">
                          {relatedPost.categories.slice(0, 2).map((category, index) => (
                            <span
                              key={index}
                              className="px-2 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full"
                            >
                              {category}
                            </span>
                          ))}
                        </div>
                        <h3 className="text-foreground font-semibold mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                          {relatedPost.title}
                        </h3>
                        <p className="text-foreground/70 text-sm line-clamp-2">
                          {relatedPost.excerpt}
                        </p>
                        <div className="flex items-center gap-2 mt-3 text-xs text-foreground/60">
                          <span>{relatedPost.date}</span>
                          <span>•</span>
                          <span>{relatedPost.readTime}</span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </div>
      )}

      <FooterSection />
    </div>
  );
}
