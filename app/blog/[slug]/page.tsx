"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Calendar, Clock, ArrowLeft, Share2, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import NavigationMenuDemo from "../../components/Header";
import FooterSection from "../../components/FooterSection";
import { blogPosts, BlogPost } from "../../data/blog";
import { useRouter } from "next/navigation";

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const [post, setPost] = useState<BlogPost | null>(null);
  const [relatedPosts, setRelatedPosts] = useState<BlogPost[]>([]);
  const router = useRouter();

  useEffect(() => {
    // Unwrap the params promise
    params.then((resolvedParams) => {
      // Find the post by slug
      const foundPost = blogPosts.find(p => p.slug === resolvedParams.slug);
      setPost(foundPost || null);

      // Find related posts (same categories, excluding current post)
      if (foundPost) {
        const related = blogPosts
          .filter(p => p.id !== foundPost.id && 
            p.categories.some(cat => foundPost.categories.includes(cat)))
          .slice(0, 3);
        setRelatedPosts(related);
      }
    });
  }, [params]);

  if (!post) {
    return (

      <div className="w-full min-h-screen bg-background">
        <NavigationMenuDemo />
        <div className="container mx-auto px-4 pt-[100px] pb-16">
          <div className="text-center py-16">
            <h1 className="text-2xl font-semibold text-foreground mb-4">Post Not Found</h1>
            <p className="text-foreground/60 mb-6">The blog post you&apos;re looking for doesn&apos;t exist.</p>
            <Button variant="outline" onClick={() => router.back()}>
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back
            </Button>
          </div>
        </div>
        <FooterSection />
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen bg-background">
      <NavigationMenuDemo />
      
      {/* Header Section */}
      <div className="relative container mx-auto px-4 pt-[100px] pb-8">
        <div className="max-w-4xl mx-auto">
          {/* Back Button */}
          <Button 
            variant="ghost" 
            className="mb-6 text-foreground/60 hover:text-foreground hover:!bg-primary/10 cursor-pointer"
            onClick={() => router.back()}
          >
            <ArrowLeft className="w-4 h-4 mr-1" />
            Back
          </Button>

          {/* Categories */}
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

          {/* Title */}
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-6 leading-tight">
            {post.title}
          </h1>

          {/* Meta Information */}
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
                <p className="text-foreground font-medium">
                  {post.author.name}
                </p>
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
              <Button variant="outline" size="sm">
                <Share2 className="w-4 h-4 mr-2" />
                Share
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Image */}
      <div className="container mx-auto px-4 mb-12">
        <div className="max-w-4xl mx-auto">
          <div className="relative h-64 md:h-96 rounded-xl overflow-hidden">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 mb-16">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none">
            {/* Excerpt */}
            <div className="text-lg text-foreground/80 leading-relaxed mb-8 p-6 bg-card rounded-xl border border-border">
              <p className="font-medium text-foreground mb-2">Summary</p>
              <p>{post.excerpt}</p>
            </div>

            {/* Main Content */}
            <div 
              className="prose prose-lg max-w-none text-foreground/90 leading-relaxed"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </div>
        </div>
      </div>

      {/* Author Bio */}
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

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <div className="container mx-auto px-4 mb-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-foreground mb-8">Related Posts</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedPosts.map((relatedPost) => (
                <article key={relatedPost.id} className="group cursor-pointer">
                  <Link href={`/blog/${relatedPost.slug}`}>
                    <div className="bg-card rounded-xl overflow-hidden border border-border/60  hover:shadow-lg transition-all duration-300">
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
