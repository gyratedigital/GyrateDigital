"use client";

import Image from "next/image";
import { workSection } from "../data/workSection";
import NavigationMenuDemo from "../components/Header";
import GreenBanner from "../components/portfolio/GreenBanner";
import FooterSection from "../components/FooterSection";
import Icon from "../components/Icon";
import Link from "next/link";
import { ArrowRight, FolderKanban } from "lucide-react";

export default function PortfolioPage() {
  return (
    <div className="w-full min-h-screen bg-background text-foreground">
      <NavigationMenuDemo />
      
      {/* Header Section */}
      <div className="relative container mx-auto px-4 pt-[100px] pb-16">
        <div className="relative z-10 text-center rounded-xl overflow-hidden border border-foreground/10 py-12 px-4">
          {/* Background Image */}
          <div className="absolute inset-0 bg-[url('/portfolio-banner.avif')] bg-cover bg-center bg-no-repeat opacity-10" />
          
          {/* Overlay */}
          <div className="absolute inset-0 bg-background/10 z-[-1]" />

          <div className="max-w-4xl mx-auto text-center relative z-1">
            <div className="flex items-center justify-center mb-4">
              <FolderKanban className="w-12 h-12 text-primary" />
            </div>
            <p className="text-foreground text-xs mb-4 uppercase tracking-wider">Our Work</p>
            <h1 className="outfit-text text-foreground text-4xl md:text-5xl font-semibold mb-6">
              Portfolio
            </h1>
            <p className="text-foreground/70 text-lg leading-relaxed max-w-2xl mx-auto">
              Explore our collection of successful projects and innovative solutions that have transformed businesses across industries.
            </p>
          </div>
        </div>
      </div>

      <GreenBanner />
      <div className="container mx-auto px-4 flex flex-col items-center gap-12 pt-[80px] pb-[120px]">
        {Array.isArray(workSection) && workSection.length > 0 ? (
          workSection.map((work) => (
            <div
              key={work.id}
              className="w-full max-w-[1080px] rounded-[32px] border border-border/60 bg-card p-8 text-card-foreground shadow-[0_24px_72px_rgba(8,16,12,0.12)] transition-transform duration-300 hover:-translate-y-1"
            >
              <div className="flex flex-col gap-10 lg:flex-row lg:items-center">
                <div className="flex-1 space-y-6">
                  <div className="space-y-4">
                    <p className="text-sm uppercase tracking-[0.2em] text-secondary">
                      {work.category}
                    </p>
                    <h3 className="text-3xl font-semibold text-card-foreground sm:text-[40px] sm:leading-[1.1]">
                      {(Array.isArray(work.title) ? work.title : [work.title]).map((ti, i) => (
                        <span key={i} className="block">
                          {ti.trim()}
                        </span>
                      ))}
                    </h3>
                    <p className="text-base leading-relaxed text-muted-foreground">
                      {work.description}
                    </p>
                  </div>
                  {Array.isArray(work.tags) && work.tags.length > 0 && (
                    <div className="flex flex-wrap gap-3">
                      {work.tags.map((tag) => (
                        <span
                          key={tag}
                          className="inline-flex items-center rounded-full border border-border/60 bg-muted/40 px-4 py-2 text-sm font-medium text-muted-foreground"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                  <Link
                    href={`/portfolio/${work.slug}`}
                    className="inline-flex h-12 items-center gap-2 rounded-full border border-primary bg-primary px-6 text-sm font-semibold text-card-dark transition-colors hover:bg-primary/80"
                  >
                    Details
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                </div>
                <div className="flex-1">
                  <div className="relative h-full min-h-full aspect-[16/7.5] overflow-hidden rounded-[24px] border border-border/60 bg-muted/40">
                    <Image
                      src={work.image}
                      alt={Array.isArray(work.title) ? work.title.join(" ") : work.title}
                      width={520}
                      height={400}
                      className="h-full w-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="flex h-full w-full flex-col items-center justify-center gap-4 pb-[80px]">
            <Icon name="notFound" />
            <p className="text-muted-foreground">No portfolio items found.</p>
          </div>
        )}
      </div>
      <FooterSection />
    </div>
  );
}
