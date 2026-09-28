'use client'

import { useEffect, type RefObject } from "react";
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
 * Vertical Lenis scroll → horizontal track.
 * Soft scrub + deferred refresh so pin metrics match final layout (fonts/images).
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

    const getDistance = () =>
      Math.max(track.scrollWidth - window.innerWidth, 0);

    let trigger: ScrollTrigger | undefined;

    const ctx = gsap.context(() => {
      gsap.set(track, { x: 0, force3D: true });

      const tween = gsap.to(track, {
        x: () => -getDistance(),
        ease: "none",
        force3D: true,
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: () => `+=${Math.max(getDistance() * distanceScale, window.innerHeight * 0.5)}`,
          pin: true,
          pinSpacing: true,
          // Soft scrub = smooth with Lenis, avoids hard pin jumps
          scrub: 0.85,
          anticipatePin: 0,
          invalidateOnRefresh: true,
          // Avoid snap/fight between stacked pins (Featured → Services → Work)
          fastScrollEnd: false,
          preventOverlaps: false,
        },
      });

      trigger = tween.scrollTrigger ?? undefined;
    }, section);

    const refresh = () => {
      lenis?.resize();
      ScrollTrigger.refresh();
    };

    // Staggered refreshes: fonts, about image, and pin siblings settle at different times
    const raf1 = requestAnimationFrame(() => {
      refresh();
      requestAnimationFrame(refresh);
    });

    const timeouts = [100, 350, 800].map((ms) =>
      window.setTimeout(refresh, ms)
    );

    const fontsReady = document.fonts?.ready?.then(refresh);

    let resizeTimer: number | undefined;
    const scheduleRefresh = () => {
      window.clearTimeout(resizeTimer);
      resizeTimer = window.setTimeout(refresh, 80);
    };

    const ro = new ResizeObserver(scheduleRefresh);
    ro.observe(section);
    ro.observe(track);

    window.addEventListener("resize", scheduleRefresh);
    window.addEventListener("load", refresh);

    return () => {
      cancelAnimationFrame(raf1);
      timeouts.forEach(clearTimeout);
      window.clearTimeout(resizeTimer);
      fontsReady?.catch(() => undefined);
      ro.disconnect();
      window.removeEventListener("resize", scheduleRefresh);
      window.removeEventListener("load", refresh);
      trigger = undefined;
      ctx.revert();
    };
  }, [sectionRef, trackRef, distanceScale, lenis]);
}
