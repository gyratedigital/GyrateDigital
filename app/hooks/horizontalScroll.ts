'use client'

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function useHorizontalScroll() {
  useEffect(() => {
    const track = document.querySelector<HTMLElement>("#horizontal-track");
    const section = document.querySelector<HTMLElement>("#horizontal-scroll");

    if (track && section) {
      const totalScroll = track.scrollWidth - window.innerWidth;

      gsap.to(track, {
        x: () => -totalScroll,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          pin: true,
          scrub: 1,
          end: () => `+=${totalScroll}`,
        },
      });
    }
  }, []);
}
