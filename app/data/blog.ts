export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  author: {
    name: string;
    avatar: string;
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
    author: {
      name: "Elton Tsang",
      avatar: "/authors/elton-tsang.jpg"
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
    author: {
      name: "Sarah Johnson",
      avatar: "/authors/sarah-johnson.jpg"
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
    author: {
      name: "Mike Chen",
      avatar: "/authors/mike-chen.jpg"
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
    author: {
      name: "Emma Wilson",
      avatar: "/authors/emma-wilson.jpg"
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
    author: {
      name: "David Rodriguez",
      avatar: "/authors/david-rodriguez.jpg"
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
    author: {
      name: "Lisa Park",
      avatar: "/authors/lisa-park.jpg"
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
    author: {
      name: "James Thompson",
      avatar: "/authors/james-thompson.jpg"
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
    author: {
      name: "Anna Kumar",
      avatar: "/authors/anna-kumar.jpg"
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
