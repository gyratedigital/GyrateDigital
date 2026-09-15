'use client'

import { useEffect, useRef, type RefObject } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLenis } from "../components/LenisProvider";

gsap.registerPlugin(ScrollTrigger);

type UseHorizontalScrollArgs = {
  sectionRef: RefObject<HTMLElement | null>;
  trackRef: RefObject<HTMLElement | null>;
  /** Multiplier on scroll distance — higher = slower / more cinematic */
  distanceScale?: number;
};

/**
 * Vertical Lenis scroll → horizontal track (lenis.dev showcase style).
 * scrub: true so Lenis lerp alone provides smoothness (no double-smoothing).
 */
export default function useHorizontalScroll({
  sectionRef,
  trackRef,
  distanceScale = 1,
}: UseHorizontalScrollArgs) {
  const { lenis } = useLenis();

  useEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;
    if (!section || !track) return;

    const getDistance = () => {
      const overflow = track.scrollWidth - window.innerWidth;
      return Math.max(overflow, 0);
    };

    const ctx = gsap.context(() => {
      gsap.set(track, { x: 0, force3D: true });

      gsap.to(track, {
        x: () => -getDistance(),
        ease: "none",
        force3D: true,
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: () => `+=${getDistance() * distanceScale}`,
          pin: true,
          pinSpacing: true,
          scrub: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          fastScrollEnd: true,
          preventOverlaps: true,
        },
      });
    }, section);

    const refresh = () => {
      lenis?.resize();
      ScrollTrigger.refresh();
    };

    // Wait a frame so layout/fonts settle, then refresh pin metrics
    const raf = requestAnimationFrame(refresh);
    window.addEventListener("resize", refresh);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", refresh);
      ctx.revert();
    };
  }, [sectionRef, trackRef, distanceScale, lenis]);
}
