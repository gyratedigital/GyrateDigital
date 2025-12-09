export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  author: {
    name: string;
    avatar: string;
    bio: string;
  };
  date: string;
  categories: string[];
  image: string;
  slug: string;
  readTime: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Generative Ad Copy Is Killing Brand Voice... Or Is It?",
    excerpt: "The truth, though, is more nuanced. AI isn't necessarily killing brand voice, but people misusing AI are.",
    content: `
      <p>The rise of generative AI has sparked a heated debate in the marketing world. Many fear that AI-generated ad copy is diluting brand voices, making every brand sound the same. But is this really the case?</p>
      
      <h2>The Real Problem</h2>
      <p>The truth, though, is more nuanced. AI isn't necessarily killing brand voice, but people misusing AI are. When marketers rely solely on AI without proper brand guidelines, training, or oversight, the result is generic, soulless copy that could belong to any brand.</p>
      
      <h2>How to Use AI Effectively</h2>
      <p>To maintain your brand voice while leveraging AI:</p>
      <ul>
        <li>Create detailed brand voice guidelines</li>
        <li>Train your AI with your best-performing content</li>
        <li>Always review and edit AI-generated content</li>
        <li>Use AI as a starting point, not the final product</li>
      </ul>
      
      <h2>The Future of Brand Voice</h2>
      <p>AI can actually enhance brand voice when used correctly. It can help maintain consistency across all touchpoints, generate variations for A/B testing, and scale personalized messaging while staying true to your brand's unique personality.</p>
      
      <blockquote>
        "The key is not to replace human creativity with AI, but to augment it. Use AI as your creative partner, not your replacement."
      </blockquote>
      
      <p>When implemented thoughtfully, AI becomes a powerful tool for amplifying your brand voice rather than diminishing it. The future belongs to marketers who can strike the right balance between AI efficiency and human creativity.</p>
    `,
    author: {
      name: "Elton Tsang",
      avatar: "/authors/elton-tsang.jpg",
      bio: "Digital marketing strategist with 10+ years of experience in AI-driven campaigns and brand voice development."
    },
    date: "13th Oct 2025",
    categories: ["AI", "Digital Marketing"],
    image: "/blog/person.jpg",
    slug: "generative-ad-copy-brand-voice",
    readTime: "5 min read"
  },
  {
    id: 2,
    title: "The Future of Web Design: Trends That Will Shape 2024",
    excerpt: "Exploring the latest web design trends that are revolutionizing user experience and visual storytelling.",
    content: `
      <p>Web design is evolving at an unprecedented pace, with 2024 bringing revolutionary changes that will reshape how we think about digital experiences. From AI-powered personalization to immersive 3D interfaces, the future of web design is here.</p>
      
      <h2>Key Trends Shaping 2024</h2>
      <p>Several groundbreaking trends are emerging that will define the next generation of web experiences:</p>
      
      <h3>1. AI-Powered Personalization</h3>
      <p>Artificial intelligence is enabling websites to adapt in real-time to individual user preferences, creating truly personalized experiences that feel intuitive and engaging.</p>
      
      <h3>2. Immersive 3D Elements</h3>
      <p>WebGL and advanced CSS techniques are bringing three-dimensional elements to the web, creating depth and interactivity that was previously impossible.</p>
      
      <h3>3. Micro-Interactions</h3>
      <p>Subtle animations and feedback mechanisms are becoming essential for creating engaging user experiences that feel responsive and alive.</p>
      
      <h2>The Impact on User Experience</h2>
      <p>These trends aren't just about aesthetics—they're fundamentally changing how users interact with digital content, making experiences more intuitive, engaging, and memorable.</p>
    `,
    author: {
      name: "Sarah Johnson",
      avatar: "/authors/sarah-johnson.jpg",
      bio: "Lead UX designer specializing in emerging web technologies and user-centered design methodologies."
    },
    date: "10th Oct 2025",
    categories: ["Web Design", "UI/UX"],
    image: "/blog/kids.jpg",
    slug: "future-web-design-trends-2024",
    readTime: "7 min read"
  },
  {
    id: 3,
    title: "Building Scalable React Applications: Best Practices",
    excerpt: "Learn how to structure your React applications for maximum scalability and maintainability.",
    content: `
      <p>Building scalable React applications requires careful planning and adherence to best practices. As your application grows, maintaining code quality and performance becomes increasingly challenging.</p>
      
      <h2>Architecture Patterns</h2>
      <p>Implementing the right architecture from the start is crucial for long-term success:</p>
      
      <h3>Component Organization</h3>
      <p>Organize your components in a logical hierarchy that reflects your application's structure. Use feature-based folders rather than type-based organization.</p>
      
      <h3>State Management</h3>
      <p>Choose the right state management solution for your needs. For simple applications, React's built-in state might suffice, but for complex applications, consider Redux or Zustand.</p>
      
      <h3>Code Splitting</h3>
      <p>Implement code splitting to reduce initial bundle size and improve loading performance. Use React.lazy() for component-level code splitting.</p>
      
      <h2>Performance Optimization</h2>
      <p>Optimize your React application for performance from day one. Use React.memo(), useMemo(), and useCallback() judiciously to prevent unnecessary re-renders.</p>
    `,
    author: {
      name: "Mike Chen",
      avatar: "/authors/mike-chen.jpg",
      bio: "Senior React developer and technical lead with expertise in large-scale application architecture and performance optimization."
    },
    date: "8th Oct 2025",
    categories: ["Development", "React"],
    image: "/blog/workshop.jpg",
    slug: "building-scalable-react-applications",
    readTime: "12 min read"
  },
  {
    id: 4,
    title: "SEO Strategies That Actually Work in 2024",
    excerpt: "Cut through the noise with proven SEO strategies that deliver real results for your business.",
    content: `
      <p>SEO in 2024 is more complex than ever, but the fundamentals remain the same. Here are the strategies that actually work in today's competitive landscape.</p>
      
      <h2>Core SEO Principles</h2>
      <p>Focus on user experience, quality content, and technical excellence. These three pillars form the foundation of successful SEO.</p>
      
      <h3>Technical SEO</h3>
      <p>Ensure your website is fast, mobile-friendly, and properly structured. Use tools like Google PageSpeed Insights and Search Console to monitor performance.</p>
      
      <h3>Content Strategy</h3>
      <p>Create valuable, original content that answers your audience's questions. Focus on search intent and provide comprehensive coverage of topics.</p>
      
      <h2>Advanced Tactics</h2>
      <p>Implement structured data, optimize for featured snippets, and build authoritative backlinks through genuine relationship building.</p>
    `,
    author: {
      name: "Emma Wilson",
      avatar: "/authors/emma-wilson.jpg",
      bio: "SEO specialist and digital marketing consultant with expertise in search engine optimization and content strategy."
    },
    date: "5th Oct 2025",
    categories: ["SEO", "Digital Marketing"],
    image: "/blog/team.jpg",
    slug: "seo-strategies-that-work-2024",
    readTime: "9 min read"
  },
  {
    id: 5,
    title: "The Psychology of Color in Brand Design",
    excerpt: "Understanding how colors influence consumer behavior and brand perception in digital marketing.",
    content: `
      <p>Color psychology plays a crucial role in brand perception and consumer behavior. Understanding these principles can significantly impact your brand's success.</p>
      
      <h2>The Science of Color</h2>
      <p>Colors evoke specific emotions and associations. Red creates urgency and excitement, while blue conveys trust and professionalism.</p>
      
      <h3>Cultural Considerations</h3>
      <p>Color meanings vary across cultures. What represents luck in one culture might symbolize danger in another. Always research your target market.</p>
      
      <h3>Brand Applications</h3>
      <p>Use color strategically across all touchpoints—logo, website, marketing materials—to create a cohesive brand experience that resonates with your audience.</p>
      
      <h2>Testing and Optimization</h2>
      <p>A/B test different color schemes to see what resonates with your audience. Data-driven decisions always trump assumptions.</p>
    `,
    author: {
      name: "David Rodriguez",
      avatar: "/authors/david-rodriguez.jpg",
      bio: "Brand strategist and color psychology expert with 8+ years of experience in visual identity and brand development."
    },
    date: "3rd Oct 2025",
    categories: ["Brand Design", "Psychology"],
    image: "/blog/person.jpg",
    slug: "psychology-color-brand-design",
    readTime: "6 min read"
  },
  {
    id: 6,
    title: "Mobile-First Design: Why It's More Important Than Ever",
    excerpt: "Discover why mobile-first design is crucial for modern web applications and how to implement it effectively.",
    content: `
      <p>With over 60% of web traffic coming from mobile devices, mobile-first design isn't just a trend—it's a necessity for modern web applications.</p>
      
      <h2>Why Mobile-First Matters</h2>
      <p>Mobile-first design ensures your application works perfectly on the smallest screens first, then progressively enhances for larger devices.</p>
      
      <h3>Performance Benefits</h3>
      <p>Starting with mobile constraints leads to faster loading times, better performance, and improved user experience across all devices.</p>
      
      <h3>User Experience</h3>
      <p>Mobile-first design forces you to focus on essential content and functionality, resulting in cleaner, more intuitive interfaces.</p>
      
      <h2>Implementation Strategy</h2>
      <p>Begin with a mobile wireframe, prioritize touch interactions, and use responsive design principles to scale up effectively.</p>
    `,
    author: {
      name: "Lisa Park",
      avatar: "/authors/lisa-park.jpg",
      bio: "Mobile UX designer and accessibility advocate specializing in responsive design and inclusive user experiences."
    },
    date: "1st Oct 2025",
    categories: ["Mobile Design", "UI/UX"],
    image: "/blog/motivation.jpg",
    slug: "mobile-first-design-importance",
    readTime: "8 min read"
  },
  {
    id: 7,
    title: "Content Marketing in the Age of AI",
    excerpt: "How artificial intelligence is transforming content creation and what it means for marketers.",
    content: `
      <p>AI is revolutionizing content marketing, but the most successful marketers are using it to enhance human creativity, not replace it.</p>
      
      <h2>The AI Content Revolution</h2>
      <p>From automated content generation to personalized experiences, AI is changing how we create and distribute content.</p>
      
      <h3>Content Personalization</h3>
      <p>AI enables hyper-personalized content that adapts to individual user preferences and behaviors in real-time.</p>
      
      <h3>Automated Content Creation</h3>
      <p>While AI can generate content quickly, the best results come from human-AI collaboration, combining AI efficiency with human creativity.</p>
      
      <h2>Best Practices</h2>
      <p>Use AI for research, ideation, and optimization, but always maintain human oversight for quality and brand voice consistency.</p>
    `,
    author: {
      name: "Lisa Park",
      avatar: "/authors/lisa-park.jpg",
      bio: "Content marketing strategist and AI researcher focused on the intersection of technology and creative content."
    },
    date: "28th Sep 2025",
    categories: ["Content Marketing", "AI"],
    image: "/blog/kids.jpg",
    slug: "content-marketing-age-ai",
    readTime: "10 min read"
  },
  {
    id: 8,
    title: "Building High-Performance Web Applications",
    excerpt: "Essential techniques for optimizing web application performance and user experience.",
    content: `
      <p>Performance optimization is crucial for user experience and business success. Here are the essential techniques for building high-performance web applications.</p>
      
      <h2>Core Performance Metrics</h2>
      <p>Focus on Core Web Vitals: Largest Contentful Paint (LCP), First Input Delay (FID), and Cumulative Layout Shift (CLS).</p>
      
      <h3>Optimization Strategies</h3>
      <p>Implement code splitting, lazy loading, image optimization, and efficient caching strategies to improve performance.</p>
      
      <h3>Monitoring and Testing</h3>
      <p>Use tools like Lighthouse, WebPageTest, and real user monitoring to continuously track and improve performance.</p>
      
      <h2>Advanced Techniques</h2>
      <p>Consider server-side rendering, edge computing, and progressive web app features for optimal performance across all devices.</p>
    `,
    author: {
      name: "Lisa Park",
      avatar: "/authors/lisa-park.jpg",
      bio: "Full-stack developer and performance optimization expert with deep knowledge of web technologies and scalability."
    },
    date: "25th Sep 2025",
    categories: ["Performance", "Development"],
    image: "/blog/award.jpg",
    slug: "building-high-performance-web-apps",
    readTime: "11 min read"
  }
];

export const categories = [
  "All",
  "AI",
  "Digital Marketing",
  "Web Design",
  "UI/UX",
  "Development",
  "React",
  "SEO",
  "Brand Design",
  "Psychology",
  "Mobile Design",
  "Content Marketing",
  "Performance"
];

export const getPostsByCategory = (category: string) => {
  if (category === "All") return blogPosts;
  return blogPosts.filter(post => post.categories.includes(category));
};

export const searchPosts = (query: string) => {
  const lowercaseQuery = query.toLowerCase();
  return blogPosts.filter(post => 
    post.title.toLowerCase().includes(lowercaseQuery) ||
    post.excerpt.toLowerCase().includes(lowercaseQuery) ||
    post.author.name.toLowerCase().includes(lowercaseQuery) ||
    post.categories.some(cat => cat.toLowerCase().includes(lowercaseQuery))
  );
};
