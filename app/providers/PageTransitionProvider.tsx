"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

export default function PageTransitionProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isFirstLoad = useRef(true);

  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    if (isFirstLoad.current) {
      // First load: show content immediately
      isFirstLoad.current = false;
      setShowContent(true);
      return;
    }

    // On route change: hide content briefly to avoid flash
    setShowContent(false);

    const timeout = setTimeout(() => {
      setShowContent(true);
    }, 10); // tiny delay to trigger animation cleanly

    return () => clearTimeout(timeout);
  }, [pathname]);

  return (
    <AnimatePresence mode="wait">
      {showContent && (
        <motion.div
          key={pathname} // triggers animation on route change
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="min-h-screen bg-background"
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
