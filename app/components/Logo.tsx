"use client";

import { useTheme } from "next-themes";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Logo() {
  const { theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // During SSR and initial mount, show dark mode logo (default)
  if (!mounted) {
    return (
      <Image
        className="md:h-[40px] md:w-[147px] h-[36px] w-[132px] block invert"
        src="/gy-logo.svg"
        alt="logo"
        width={147}
        height={40}
        priority
      />
    );
  }

  const currentTheme = theme || resolvedTheme;
  const isDark = currentTheme === "dark";

  return (
    <Image
      className={`md:h-[40px] md:w-[147px] h-[36px] w-[132px] block transition-all duration-300 ${
        isDark ? "invert" : ""
      }`}
      src="/gy-logo.svg"
      alt="logo"
      width={147}
      height={40}
      priority
    />
  );
}

