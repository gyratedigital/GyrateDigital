"use client";

import Image from "next/image";
import { workSection } from "../data/workSection";
import NavigationMenuDemo from "../components/Header";
import PortfolioBanner from "../components/portfolio/Banner";
import GreenBanner from "../components/portfolio/GreenBanner";
import FooterSection from "../components/FooterSection";
import Icon from "../components/Icon";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function PortfolioPage() {
  return (
    <div className="w-full min-h-screen bg-background text-foreground">
      <NavigationMenuDemo />
      <PortfolioBanner />
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
                    className="inline-flex h-12 items-center gap-2 rounded-full border border-secondary/30 bg-card-dark px-6 text-sm font-semibold text-card-light transition-colors hover:bg-card-dark/80"
                  >
                    Details
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                </div>
                <div className="flex-1">
                  <div className="relative h-full min-h-[240px] overflow-hidden rounded-[24px] border border-border/60 bg-muted/40">
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
