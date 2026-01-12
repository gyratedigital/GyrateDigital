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
    <div className="w-full overflow-hidden bg-transparent border-y border-primary/10 py-4 mt-8 relative select-none">
      {/* Gradient Masking for smooth fade in/out */}
      <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-background to-transparent z-10"></div>
      <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-background to-transparent z-10"></div>

      <div className="flex animate-marquee whitespace-nowrap">
        {/* Two identical sets for a perfectly seamless loop */}
        {[...Array(2)].map((_, containerIdx) => (
          <div key={containerIdx} className="flex shrink-0 items-center">
            {MarqueeItems.map((item, idx) => (
              <div key={idx} className="flex items-center px-6 lg:px-10 group">
                <span className="text-sm lg:text-base font-medium text-muted-foreground uppercase tracking-widest group-hover:text-primary transition-colors duration-300">
                  {item}
                </span>
                <span className="ml-12 lg:ml-20 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0"></span>
              </div>
            ))}
          </div>
        ))}
      </div>

      <style jsx>{`
        .animate-marquee {
          display: flex;
          width: max-content;
          animation: marquee 15s linear infinite;
          will-change: transform;
        }

        @keyframes marquee {
          0% {
            transform: translate3d(0, 0, 0);
          }
          100% {
            transform: translate3d(-50%, 0, 0);
          }
        }

        /* Essential for eliminating flicker on some browsers */
        .animate-marquee {
          backface-visibility: hidden;
          perspective: 1000px;
          transform-style: preserve-3d;
        }
      `}</style>
    </div>
  );
}
