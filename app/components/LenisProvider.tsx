"use client";

import { ReactNode, useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function LenisProvider({ children }: { children: ReactNode }) {
  useEffect(() => {
    const isCoarsePointer = window.matchMedia("(pointer: coarse)").matches;

    const lenis = new Lenis({
      lerp: isCoarsePointer ? 0.11 : 0.085,
      smoothWheel: true,
      syncTouch: true,
      syncTouchLerp: isCoarsePointer ? 0.12 : 0.075,
      touchInertiaMultiplier: isCoarsePointer ? 28 : 35,
      touchMultiplier: isCoarsePointer ? 1.2 : 1,
      wheelMultiplier: 1,
      orientation: "vertical",
      gestureOrientation: "vertical",
      autoResize: true,
    });

    lenis.on("scroll", ScrollTrigger.update);

    const onTick = (time: number) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(onTick);
    gsap.ticker.lagSmoothing(0);

    const refresh = () => ScrollTrigger.refresh();
    const onLoad = () => refresh();

    window.addEventListener("load", onLoad);
    requestAnimationFrame(refresh);

    return () => {
      window.removeEventListener("load", onLoad);
      gsap.ticker.remove(onTick);
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
