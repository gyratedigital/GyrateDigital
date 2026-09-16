"use client";

import Image from "next/image";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const partners = [
  {
    src: "/client-slider-images/fbl.png",
    alt: "Foodblogliebe logo",
    href: "https://foodblogliebe.de/",
    tall: true,
  },
  {
    src: "/client-slider-images/logo.svg",
    alt: "IonicX ARCHITECT OF TIME",
    href: "https://www.ionicx.io/",
    tall: true,
  },
  {
    src: "/client-slider-images/code-turtle.svg",
    alt: "CodeTurtle AI",
    href: "https://codeturtle.gyratedigital.com/",
    tall: true,
    // Keep original brand colors — no dark-mode filter
    noFilter: true,
  },
];

export default function BrandsSection() {
  const { theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div>
        <div className="container mx-auto px-4">
          <h2 className="relative mx-auto mb-2 max-w-4xl text-center text-4xl font-semibold text-foreground">
            Our Partners
          </h2>
          <p className="mb-12 text-center text-sm text-foreground">
            Proud to work with these leaders.
          </p>
          <div className="h-[80px]" />
        </div>
      </div>
    );
  }

  const currentTheme = theme || resolvedTheme;
  const isDark = currentTheme === "dark";

  const renderPartner = (partner: (typeof partners)[number], key: string) => {
    const shouldInvert = isDark && !partner.noFilter;
    const image = (
      <Image
        src={partner.src}
        alt={partner.alt}
        width={150}
        height={partner.tall ? 125 : 50}
        className={`mx-auto h-auto w-full max-w-[150px] rounded-xl object-contain ${
          partner.tall ? "max-h-[80px]" : "max-h-[50px]"
        } ${shouldInvert ? "invert" : ""}`}
      />
    );

    if (partner.href) {
      return (
        <a
          key={key}
          href={partner.href}
          target="_blank"
          rel="noopener noreferrer"
          className="flex w-[180px] shrink-0 items-center justify-center px-6"
        >
          {image}
        </a>
      );
    }

    return (
      <div key={key} className="flex w-[180px] shrink-0 items-center justify-center px-6">
        {image}
      </div>
    );
  };

  // Duplicate enough times for a seamless loop on wide screens
  const loop = [...partners, ...partners, ...partners, ...partners];

  return (
    <div>
      <div className="container mx-auto px-4">
        <h2 className="relative mx-auto mb-2 max-w-4xl text-center text-4xl font-semibold text-foreground">
          Our Partners
        </h2>
        <p className="mb-12 text-center text-sm text-foreground">
          Proud to work with these leaders.
        </p>
      </div>

      <div className="relative w-full select-none overflow-hidden py-2">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-background to-transparent sm:w-24" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-background to-transparent sm:w-24" />

        <div className="flex w-max animate-site-marquee items-center will-change-transform">
          {[...Array(2)].map((_, containerIdx) => (
            <div key={containerIdx} className="flex shrink-0 items-center">
              {loop.map((partner, idx) =>
                renderPartner(partner, `${containerIdx}-${partner.src}-${idx}`)
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
