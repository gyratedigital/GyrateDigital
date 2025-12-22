"use client";

import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function PageTransitionProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    // Trigger curtain immediately
    setIsTransitioning(true);

    const timeout = setTimeout(() => {
      // End transition → show content
      setIsTransitioning(false);
    }, 100); // curtain duration

    return () => clearTimeout(timeout);
  }, [pathname]);

  return (
    <>

      {/* CONTENT — RENDER ONLY AFTER CURTAIN */}
      {!isTransitioning && (
        <motion.div
          key={pathname}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="min-h-screen"
        >
          {children}
        </motion.div>
      )}
    </>
  );
}
