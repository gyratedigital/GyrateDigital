"use client";

import * as React from "react";

const MarqueeItems = [
  "Digital Marketing",
  "Design",
  "Web Platforms",
  "Custom Software",
  "SaaS",
];

export default function SmoothMarquee() {
  return (
    <div className="relative mt-8 w-full select-none overflow-hidden border-y border-primary/10 bg-transparent py-4">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-background to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-background to-transparent" />

      <div className="flex w-max animate-site-marquee whitespace-nowrap will-change-transform">
        {[...Array(2)].map((_, containerIdx) => (
          <div key={containerIdx} className="flex shrink-0 items-center">
            {MarqueeItems.map((item, idx) => (
              <div key={`${containerIdx}-${idx}`} className="group flex items-center px-6 lg:px-10">
                <span className="text-sm font-medium uppercase tracking-widest text-muted-foreground transition-colors duration-300 group-hover:text-primary lg:text-base">
                  {item}
                </span>
                <span className="ml-12 h-1.5 w-1.5 shrink-0 rounded-full bg-primary lg:ml-20" />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
