"use client";

import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <button
        className="relative cursor-pointer w-[40px] h-[40px] rounded-full border-2 border-foreground flex items-center justify-center"
        aria-label="Toggle theme"
      >
        <Moon className="w-5 h-5" />
      </button>
    );
  }

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <button
      onClick={toggleTheme}
      className="relative cursor-pointer w-[40px] h-[40px] rounded-full border-2 border-foreground flex items-center justify-center group hover:bg-foreground/5 transition-all duration-300"
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
    >
      {theme === "dark" ? (
        <Sun className="w-5 h-5 text-foreground transition-transform duration-300 group-hover:rotate-90" />
      ) : (
        <Moon className="w-5 h-5 text-foreground transition-transform duration-300 group-hover:-rotate-12" />
      )}
    </button>
  );
}

