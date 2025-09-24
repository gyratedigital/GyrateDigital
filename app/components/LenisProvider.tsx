"use client";

import { ReactNode, useEffect } from "react";
import Lenis from "@studio-freight/lenis";

export default function LenisProvider({ children }: { children: ReactNode }) {
  useEffect(() => {
    if (typeof window !== "undefined" && window.innerWidth < 768) {
      // Disable Lenis smooth scroll on mobile (<768px)
      return;
    }

    const lenis = new Lenis({
      duration: 1.2, // scroll speed (lower = faster)
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // smooth easing
      smoothWheel: true,
    //   smoothTouch: false,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
