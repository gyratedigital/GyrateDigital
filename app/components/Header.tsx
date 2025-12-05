"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import Logo from "./Logo";
import { useRippleEffect } from "@/hooks/useRippleEffect";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio"},
  { href: "/about", label: "About" },
  { href: "/blog", label: "Blog" },
  // { href: "/culture", label: "Culture" },
  // { href: "/contact", label: "Contact" },
];

export default function AnimatedNav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { ripples: contactRipples, addRipple: addContactRipple } = useRippleEffect();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 0);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`w-full transition-all duration-700 z-999 ${
          scrolled
            ? "fixed top-0 bg-background/70 backdrop-blur-sm shadow-md"
            : "absolute"
        }`}
      >
        <div
          className={`relative container px-4 transition-all duration-500 flex items-center justify-between mx-auto ${
            scrolled ? "h-[60px]" : "h-[80px]"
          }`}
        >
          <Link href="/" className="text-xl font-bold text-primary">
            <Logo />
          </Link>

          <div className="flex items-center gap-4">
            <Link
              href="/contact"
              data-slot="button"
              onClick={addContactRipple}
              className="!hidden md:!inline-flex h-[40px] items-center justify-center gap-1.5 rounded-xl bg-primary px-4 py-1 text-md font-medium text-primary-foreground shadow hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50 focus-visible:ring-offset-2 transition-all relative overflow-hidden button-wave"
              >
              <span className="relative z-10">Contact</span>
              {contactRipples.map((ripple) => (
                <span
                  key={ripple.id}
                  className="absolute rounded-full bg-white/50 pointer-events-none animate-ripple"
                  style={{
                    left: `${ripple.x}px`,
                    top: `${ripple.y}px`,
                    transform: "translate(-50%, -50%)",
                    zIndex: 1,
                  }}
                />
              ))}
            </Link>

            <ThemeToggle />

            <button
              className={`${open ? "border-foreground" : "border-foreground"} relative cursor-pointer w-[40px] h-[40px] rounded-full border border-2 flex items-center justify-center group z-51`}
              onClick={() => setOpen(!open)}
              aria-label="Toggle navigation menu"
            >
              <div className="relative w-6 h-6 flex flex-col items-center justify-center">
                <motion.span
                  className="bg-foreground absolute h-0.5 w-5 rounded-full"
                  animate={{
                    rotate: open ? 45 : 0,
                    y: open ? 0 : -4,
                  }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                />
                <motion.span
                  className="bg-foreground absolute h-0.5 w-5 rounded-full"
                  animate={{
                    rotate: open ? -45 : 0,
                    y: open ? 0 : 4,
                  }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                />
              </div>
            </button>
          </div>

          <AnimatePresence>
            {open && (
              <>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="fixed inset-0 bg-black/20 z-40 h-screen top-0 bottom-0 left-0"
                  onClick={() => setOpen(false)}
                />
                
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
                  className="absolute top-[calc(100vh-100vh+14px+6px)] right-[calc(6px+4px)] z-50 origin-top-right"
                  style={{
                    top: scrolled ? 'calc(3px + 2px)' : 'calc(10px + 4px)',
                    right: 'calc(6px + 4px)',
                    transformOrigin: 'top right'
                  }}
                >
                  <div className="bg-background rounded-2xl shadow-2xl w-64 p-[40px] relative">
                    <div className="flex flex-col items-center gap-4 pt-4">
                      <nav className="flex flex-col items-center w-full">
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
                            className="w-full"
                          >
                            <Link
                              href={link.href}
                              className="text-xl font-medium text-foreground hover:text-gray-600 transition-colors block py-2"
                              onClick={() => setOpen(false)}
                            >
                              {link.label}
                            </Link>
                          </motion.div>
                        ))}
                      </nav>

                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ 
                          delay: 0.8 + (navLinks.length * 0.1), 
                          duration: 0.5,
                          ease: "easeOut"
                        }}
                        className="w-full"
                      >
                        <Link
                          href="/contact"
                          className="flex items-center gap-2 px-6 py-3 border-2 border-foreground rounded-full text-foreground font-medium hover:bg-black hover:text-white transition-all duration-300"
                          onClick={() => setOpen(false)}
                        >
                          Hire us
                          <ArrowRight className="w-4 h-4" />
                        </Link>
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              </>
            )}
          </AnimatePresence>

        </div>
      </header>

      
    </>
  );
}