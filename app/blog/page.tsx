import type { Metadata } from "next";
import BlogListingClient from "./BlogListingClient";

export const metadata: Metadata = {
  title: "Blog & Insights | Gyrate Digital",
  description:
    "Insights on AI, machine learning, agentic systems, and product engineering from Gyrate Digital.",
  alternates: {
    canonical: "https://gyratedigital.com/blog",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function BlogPage() {
  return <BlogListingClient />;
}
