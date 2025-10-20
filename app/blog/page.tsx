"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { Calendar, Clock, Search, ChevronLeft, ChevronRight } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import NavigationMenuDemo from "../components/Header";
import FooterSection from "../components/FooterSection";
import { blogPosts, categories, getPostsByCategory, searchPosts } from "../data/blog";

const POSTS_PER_PAGE = 6;

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const filteredPosts = useMemo(() => {
    let posts = getPostsByCategory(selectedCategory);
    
    if (searchQuery.trim()) {
      posts = searchPosts(searchQuery);
      // If searching, show posts from all categories that match the search
      if (selectedCategory !== "All") {
        posts = posts.filter(post => post.categories.includes(selectedCategory));
      }
    }
    
    return posts;
  }, [selectedCategory, searchQuery]);

  // Calculate pagination
  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);
  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
  const endIndex = startIndex + POSTS_PER_PAGE;
  const currentPosts = filteredPosts.slice(startIndex, endIndex);

  // Reset to page 1 when filters change
  useMemo(() => {
    setCurrentPage(1);
  }, [selectedCategory, searchQuery]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    // Scroll to the blog posts section instead of the very top
    const blogSection = document.getElementById('blog-posts-section');
    if (blogSection) {
      blogSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      // Fallback to scrolling to top if section not found
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const renderPaginationButtons = () => {
    const buttons = [];
    const maxVisiblePages = 5;

    if (totalPages <= maxVisiblePages) {
      // Show all pages if total pages is less than max visible
      for (let i = 1; i <= totalPages; i++) {
        buttons.push(
          <Button
            key={i}
            variant={i === currentPage ? "default" : "outline"}
            size="sm"
            onClick={() => handlePageChange(i)}
            className={`w-10 h-10 rounded-full ${
              i === currentPage 
                ? "bg-primary text-primary-foreground" 
                : "hover:bg-primary/10 hover:text-primary"
            }`}
          >
            {i}
          </Button>
        );
      }
    } else {
      // Show ellipsis for large page counts
      if (currentPage <= 3) {
        // Show first 3 pages, ellipsis, and last page
        for (let i = 1; i <= 3; i++) {
          buttons.push(
            <Button
              key={i}
              variant={i === currentPage ? "default" : "outline"}
              size="sm"
              onClick={() => handlePageChange(i)}
              className={`w-10 h-10 rounded-full ${
                i === currentPage 
                  ? "bg-primary text-primary-foreground" 
                  : "hover:bg-primary/10 hover:text-primary"
              }`}
            >
              {i}
            </Button>
          );
        }
        buttons.push(
          <span key="ellipsis1" className="px-2 text-foreground/60">
            ...
          </span>
        );
        buttons.push(
          <Button
            key={totalPages}
            variant="outline"
            size="sm"
            onClick={() => handlePageChange(totalPages)}
            className="w-10 h-10 rounded-full hover:bg-primary/10 hover:text-primary"
          >
            {totalPages}
          </Button>
        );
      } else if (currentPage >= totalPages - 2) {
        // Show first page, ellipsis, and last 3 pages
        buttons.push(
          <Button
            key={1}
            variant="outline"
            size="sm"
            onClick={() => handlePageChange(1)}
            className="w-10 h-10 rounded-full hover:bg-primary/10 hover:text-primary"
          >
            1
          </Button>
        );
        buttons.push(
          <span key="ellipsis2" className="px-2 text-foreground/60">
            ...
          </span>
        );
        for (let i = totalPages - 2; i <= totalPages; i++) {
          buttons.push(
            <Button
              key={i}
              variant={i === currentPage ? "default" : "outline"}
              size="sm"
              onClick={() => handlePageChange(i)}
              className={`w-10 h-10 rounded-full ${
                i === currentPage 
                  ? "bg-primary text-primary-foreground" 
                  : "hover:bg-primary/10 hover:text-primary"
              }`}
            >
              {i}
            </Button>
          );
        }
      } else {
        // Show first page, ellipsis, current page and neighbors, ellipsis, last page
        buttons.push(
          <Button
            key={1}
            variant="outline"
            size="sm"
            onClick={() => handlePageChange(1)}
            className="w-10 h-10 rounded-full hover:bg-primary/10 hover:text-primary"
          >
            1
          </Button>
        );
        buttons.push(
          <span key="ellipsis3" className="px-2 text-foreground/60">
            ...
          </span>
        );
        for (let i = currentPage - 1; i <= currentPage + 1; i++) {
          buttons.push(
            <Button
              key={i}
              variant={i === currentPage ? "default" : "outline"}
              size="sm"
              onClick={() => handlePageChange(i)}
              className={`w-10 h-10 rounded-full ${
                i === currentPage 
                  ? "bg-primary text-primary-foreground" 
                  : "hover:bg-primary/10 hover:text-primary"
              }`}
            >
              {i}
            </Button>
          );
        }
        buttons.push(
          <span key="ellipsis4" className="px-2 text-foreground/60">
            ...
          </span>
        );
        buttons.push(
          <Button
            key={totalPages}
            variant="outline"
            size="sm"
            onClick={() => handlePageChange(totalPages)}
            className="w-10 h-10 rounded-full hover:bg-primary/10 hover:text-primary"
          >
            {totalPages}
          </Button>
        );
      }
    }

    return buttons;
  };

  return (
    <div className="w-full min-h-screen bg-background">
      <NavigationMenuDemo />
      
      {/* Header Section */}
      <div className="relative container mx-auto px-4 pt-[100px] pb-16">
        {/* Content */}
        <div>
            <div className="relative z-10 text-center rounded-xl overflow-hidden border border-foreground/10 overflow-hidden py-12 px-4">
                
                {/* Background Image */}
                <div 
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10 p-6"
                    style={{
                        backgroundImage: "url('https://images.unsplash.com/photo-1504711434969-e33886168f5c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')"
                    }}
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-background/10 z-[-1]" />

                <div className="max-w-4xl mx-auto text-center relative z-1">
                    <p className="text-foreground text-xs mb-4 uppercase tracking-wider">Our Blog</p>
                    <h1 className="outfit-text text-foreground text-4xl md:text-5xl font-semibold mb-6">
                        Insights & Stories
                    </h1>
                    <p className="text-foreground/70 text-lg leading-relaxed max-w-2xl mx-auto">
                        Discover the latest trends, insights, and stories from the world of digital innovation and design.
                    </p>
                </div>

            </div>
        </div>
        
      </div>

      {/* Filter Section */}
      <div className="container mx-auto px-4 mb-12">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col sm:flex-row gap-4 items-center">
            <div className="flex items-end gap-4 w-full">

              <div>
                <label className="text-foreground text-sm font-medium whitespace-nowrap">
                  Filter Posts:
                </label>
                <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                  <SelectTrigger className="w-[200px]">
                    <SelectValue placeholder="Select category..." />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map((category) => (
                      <SelectItem key={category} value={category}>
                        {category}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="relative flex-1 w-full">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-foreground/50 w-4 h-4" />
                <Input
                  type="text"
                  placeholder="Search for a topic..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Blog Posts Grid */}
      <div id="blog-posts-section" className="container mx-auto px-4 pb-12">
        <div className="max-w-6xl mx-auto">
          {currentPosts.length > 0 ? (
            <>
              <div className="grid grid-cols-1 gap-8 mb-12">
                {currentPosts.map((post) => (
                <article
                  key={post.id}
                  className="group cursor-pointer"
                >
                  <Link href={`/blog/${post.slug}`}>
                    <div className="flex sm:flex-row flex-col sm:h-64 h-auto bg-card sm:rounded-none rounded-lg overflow-hidden sm:border-none border border-border hover:shadow-lg transition-all duration-300">
                      {/* Image */}
                      <div className="relative sm:h-full h-48 overflow-hidden sm:w-[300px] w-full sm:rounded-2xl">
                        <Image
                          src={post.image}
                          alt={post.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>

                      {/* Content */}
                      <div className="flex flex-col justify-center p-6">
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
                        <h2 className="text-foreground text-xl font-semibold mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                          {post.title}
                        </h2>

                        {/* Excerpt */}
                        <p className="text-foreground/70 text-sm mb-4 line-clamp-3 leading-relaxed">
                          {post.excerpt}
                        </p>

                        {/* Author and Date */}
                        <div className="flex sm:flex-row flex-col sm:items-center items-start gap-4 justify-between">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full overflow-hidden bg-primary/10 flex items-center justify-center">
                              <Image
                                src={post.author.avatar}
                                alt={post.author.name}
                                width={32}
                                height={32}
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <div>
                              <p className="text-foreground text-sm font-medium">
                                {post.author.name}
                              </p>
                            </div>
                          </div>

                          <div className="flex items-center gap-4 text-xs text-foreground/60">
                            <div className="flex items-center gap-1">
                              <Calendar className="w-3 h-3" />
                              <span>{post.date}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Clock className="w-3 h-3" />
                              <span>{post.readTime}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </article>
              ))}
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="flex items-center justify-center gap-2 mt-12">
                  {/* Previous Button */}
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    className="flex items-center gap-2 px-4 py-2 rounded-full hover:bg-primary/10 hover:text-primary disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <ChevronLeft className="w-4 h-4" />
                    Previous
                  </Button>

                  {/* Page Numbers */}
                  <div className="flex items-center gap-2">
                    {renderPaginationButtons()}
                  </div>

                  {/* Next Button */}
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className="flex items-center gap-2 px-4 py-2 rounded-full hover:bg-primary/10 hover:text-primary disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Next
                    <ChevronRight className="w-4 h-4" />
                  </Button>
                </div>
              )}

              {/* Results Info */}
              <div className="text-center mt-8 text-sm text-foreground/60">
                Showing {startIndex + 1}-{Math.min(endIndex, filteredPosts.length)} of {filteredPosts.length} posts
                {searchQuery && ` for "${searchQuery}"`}
                {selectedCategory !== "All" && ` in ${selectedCategory}`}
              </div>
            </>
          ) : (
            <div className="text-center py-16">
              <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center">
                <Search className="w-8 h-8 text-primary/60" />
              </div>
              <h3 className="text-foreground text-xl font-semibold mb-2">No posts found</h3>
              <p className="text-foreground/60 mb-6">
                Try adjusting your search terms or category filter.
              </p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory("All");
                }}
                className="px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </div>

      <FooterSection />
    </div>
  );
}
