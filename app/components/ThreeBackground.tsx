"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";
// @ts-ignore - vanta has no types
import HALO from "vanta/dist/vanta.halo.min.js";

export default function HaloBackground() {
  const vantaRef = useRef<HTMLDivElement>(null);
  const vantaEffect = useRef<any>(null);

  useEffect(() => {
    if (!vantaEffect.current && vantaRef.current) {
      vantaEffect.current = HALO({
        el: vantaRef.current,
        THREE,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.0,
        minWidth: 200.0,
        // your custom settings
        backgroundColor: 0x131a43,
        baseColor: 0x1a59,
        size: 1,
        amplitudeFactor: 1,
        xOffset: 0,
        yOffset: 0,
      });
    }

    return () => {
      if (vantaEffect.current) {
        vantaEffect.current.destroy();
      }
    };
  }, []);

  return <div ref={vantaRef} className="fixed inset-0 z-0" />;
}
