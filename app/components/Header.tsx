"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";

const navLinks = [
  { href: "/work", label: "Work" },
  { href: "/agency", label: "Agency" },
  { href: "/services", label: "Services+", hasSubmenu: true },
  { href: "/blog", label: "Blog" },
  { href: "/culture", label: "Culture" },
  { href: "/contact", label: "Contact" },
];

export default function AnimatedNav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 0);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`w-full transition-all duration-700 z-50 ${
          scrolled
            ? "fixed top-0 bg-background/70 backdrop-blur-sm shadow-md"
            : "absolute"
        }`}
      >
        <div
          className={`container px-4 transition-all duration-500 flex items-center justify-between mx-auto ${
            scrolled ? "h-[60px]" : "h-[80px]"
          }`}
        >
          {/* Logo */}
          <Link href="/" className="text-xl font-bold text-primary">
            <Image
              className="md:h-[40px] md:w-[147px] h-[36px] w-[132px] block dark:invert"
              src="/gy-logo.svg"
              alt="logo"
              width={147}
              height={40}
              priority
            />
          </Link>

          {/* Hamburger button - Always visible - 2 bars that transform to cross */}
          <button
            className="relative w-8 h-8 flex items-center justify-center group"
            onClick={() => setOpen(!open)}
            aria-label="Toggle navigation menu"
          >
            <div className="relative w-6 h-6 flex flex-col items-center justify-center">
              {/* Top bar */}
              <motion.span
                className="absolute h-0.5 w-6 bg-foreground rounded-full"
                animate={{
                  rotate: open ? 45 : 0,
                  y: open ? 0 : -4,
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              />
              {/* Bottom bar */}
              <motion.span
                className="absolute h-0.5 w-6 bg-foreground rounded-full"
                animate={{
                  rotate: open ? -45 : 0,
                  y: open ? 0 : 4,
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              />
            </div>
          </button>
        </div>
      </header>

      {/* Navigation Card - Top Right Positioned */}
      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
              onClick={() => setOpen(false)}
            />
            
            {/* Navigation Card - Positioned top-right, animates to bottom-left */}
            <motion.div
              initial={{ 
                opacity: 0,
                scaleX: 0,
                scaleY: 0,
              }}
              animate={{ 
                opacity: 1,
                scaleX: 1,
                scaleY: 1,
              }}
              exit={{ 
                opacity: 0,
                scaleX: 0,
                scaleY: 0,
              }}
              transition={{ 
                duration: 0.5,
                ease: [0.32, 0.72, 0, 1]
              }}
              className="fixed top-[calc(100vh-100vh+80px+6px)] right-[calc(32px+6px)] z-50 origin-top-right"
              style={{
                top: scrolled ? 'calc(60px + 6px)' : 'calc(80px + 6px)',
                right: 'calc(32px + 6px)',
                transformOrigin: 'top right'
              }}
            >
              <div className="bg-white rounded-2xl shadow-2xl w-80 p-8 relative">
                {/* Navigation Content */}
                <div className="flex flex-col items-center gap-8 pt-4">
                  {/* Navigation Links */}
                  <nav className="flex flex-col items-center gap-8 w-full">
                    {navLinks.map((link, i) => (
                      <motion.div
                        key={link.href}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ 
                          delay: 0.4 + (i * 0.1), 
                          duration: 0.5,
                          ease: "easeOut"
                        }}
                        className="w-full text-center"
                      >
                        <Link
                          href={link.href}
                          className="text-xl font-medium text-black hover:text-gray-600 transition-colors block py-2"
                          onClick={() => setOpen(false)}
                        >
                          {link.label}
                        </Link>
                      </motion.div>
                    ))}
                  </nav>

                  {/* Start your project button */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ 
                      delay: 0.8 + (navLinks.length * 0.1), 
                      duration: 0.5,
                      ease: "easeOut"
                    }}
                    className="w-full flex justify-center"
                  >
                    <Link
                      href="/contact"
                      className="flex items-center gap-2 px-6 py-3 border-2 border-black rounded-full text-black font-medium hover:bg-black hover:text-white transition-all duration-300"
                      onClick={() => setOpen(false)}
                    >
                      Start your project
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}