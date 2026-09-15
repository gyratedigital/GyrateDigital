"use client";

import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type LenisContextValue = {
  lenis: Lenis | null;
};

const LenisContext = createContext<LenisContextValue>({ lenis: null });

export function useLenis() {
  return useContext(LenisContext);
}

export default function LenisProvider({ children }: { children: ReactNode }) {
  const [lenis, setLenis] = useState<Lenis | null>(null);

  useEffect(() => {
    const isTouch = window.matchMedia("(pointer: coarse)").matches;

    const instance = new Lenis({
      // Lenis.dev-style feel: soft lerp, Lenis owns the smoothness
      lerp: isTouch ? 0.1 : 0.08,
      smoothWheel: true,
      syncTouch: true,
      syncTouchLerp: isTouch ? 0.085 : 0.07,
      touchInertiaExponent: 1.7,
      wheelMultiplier: 0.9,
      touchMultiplier: 1.15,
      orientation: "vertical",
      gestureOrientation: "vertical",
      autoResize: true,
      autoRaf: false,
    });

    instance.on("scroll", ScrollTrigger.update);

    const onTick = (time: number) => {
      instance.raf(time * 1000);
    };

    gsap.ticker.add(onTick);
    gsap.ticker.lagSmoothing(0);

    setLenis(instance);
    (window as Window & { __lenis?: Lenis }).__lenis = instance;

    const refresh = () => {
      instance.resize();
      ScrollTrigger.refresh();
    };

    window.addEventListener("load", refresh);
    requestAnimationFrame(refresh);

    return () => {
      window.removeEventListener("load", refresh);
      gsap.ticker.remove(onTick);
      instance.destroy();
      delete (window as Window & { __lenis?: Lenis }).__lenis;
      setLenis(null);
    };
  }, []);

  return (
    <LenisContext.Provider value={{ lenis }}>
      {children}
    </LenisContext.Provider>
  );
}
