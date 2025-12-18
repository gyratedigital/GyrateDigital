"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";

export default function PageTransitionProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isFirstLoad = useRef(true);

  const [displayChildren, setDisplayChildren] = useState(children);
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    if (isFirstLoad.current) {
      // First load: render page immediately
      isFirstLoad.current = false;
      setDisplayChildren(children);
      return;
    }

    // Start transition
    setAnimating(true);

    const timeout = setTimeout(() => {
      setDisplayChildren(children);
      setAnimating(false);
    }, 800); // match animation duration

    return () => clearTimeout(timeout);
  }, [pathname, children]);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname} // triggers animation on route change
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
        className="min-h-screen bg-background"
      >
        {displayChildren}
      </motion.div>
    </AnimatePresence>
  );
}
