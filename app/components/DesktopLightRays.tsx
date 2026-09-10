"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import type { LightRaysProps } from "./LightRays";

const LightRays = dynamic(() => import("./LightRays"), { ssr: false });

export default function DesktopLightRays(props: LightRaysProps) {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 768px)");
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");

    const update = () => {
      setEnabled(desktop.matches && !reduced.matches);
    };

    update();
    desktop.addEventListener("change", update);
    reduced.addEventListener("change", update);
    return () => {
      desktop.removeEventListener("change", update);
      reduced.removeEventListener("change", update);
    };
  }, []);

  if (!enabled) return null;

  return <LightRays {...props} />;
}
