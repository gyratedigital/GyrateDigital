'use client'

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function useHorizontalScroll() {
  useEffect(() => {
    const track = document.querySelector<HTMLElement>("#horizontal-track");
    const section = document.querySelector<HTMLElement>("#horizontal-scroll");

    if (!track || !section) return;

    const ctx = gsap.context(() => {
      const totalScroll = track.scrollWidth - window.innerWidth;

      if (totalScroll <= 0) return;

      gsap.to(track, {
        x: -totalScroll,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          pin: true,
          scrub: 0.65,
          anticipatePin: 1,
          start: "top top",
          end: () => `+=${totalScroll}`,
          invalidateOnRefresh: true,
        },
      });
    });

    const refresh = () => ScrollTrigger.refresh();
    requestAnimationFrame(refresh);

    return () => ctx.revert();
  }, []);
}
