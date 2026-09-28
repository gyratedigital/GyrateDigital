import { blogPosts } from '../data/blog'
import Image from 'next/image'
import Link from 'next/link'

/** Latest posts — rendered on the server so crawlers see real links (not empty skeletons). */
export default function BlogSection() {
  const posts = blogPosts.slice(0, 4)

  return (
    <div className="container px-4 mx-auto">
      <div className="max-w-4xl mx-auto">
        <h2 className="section-heading font-semibold mb-2 text-foreground text-center relative">Our Blog</h2>
        <p className="text-center text-sm text-foreground mb-12">Ideas that inspire, stories that matter.</p>
      </div>
      <div className="mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {posts.map((post) => (
            <article key={post.id} className="group cursor-pointer">
              <Link href={`/blog/${post.slug}`}>
                <div className="bg-card rounded-2xl overflow-hidden border border-border/60  hover:shadow-lg transition-all duration-300 h-full">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      sizes="(min-width: 1024px) 25vw, (min-width: 768px) 50vw, 100vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4">
                    <div className="flex flex-wrap gap-2 mb-3">
                      {post.categories.slice(0, 2).map((category, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full"
                        >
                          {category}
                        </span>
                      ))}
                    </div>
                    <h3 className="text-foreground font-semibold mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-foreground/70 text-sm line-clamp-2">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center gap-2 mt-3 text-xs text-foreground/60">
                      <span>{post.date}</span>
                      <span>•</span>
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}
