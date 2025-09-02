// 'use client'

import * as React from 'react'
import { MenuIcon } from 'lucide-react'
import { Sheet, SheetTrigger } from '@/components/ui/sheet'
import Link from 'next/link'
import { SheetContent } from './MobileNavSheet'
import Image from 'next/image'
import { useState, useEffect } from "react";

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/about', label: 'About' },
  // { href: '/contact', label: 'Contact' },
]

export default function NavigationMenuDemo() {

  const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        if(window.scrollY > 0) {
          setScrolled(true);
        } else {
          setScrolled(false);
        }
      };
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.addEventListener('scroll', handleScroll);
      }
    }, 
  []);

  return (
    <header className={`w-full transition-all duration-900 ease-in-out z-999 ${scrolled ? "fixed top-0 bg-background/70 backdrop-blur-sm" : "absolute"}`}>
      <div className={`container px-4 transition-all duration-500 flex items-center justify-between gap-2 mx-auto py-2 xl:gap-4 ${scrolled ? "h-[60px]" : "h-[80px]"}`}>

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

        <nav className="hidden space-x-6 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-md font-normal text-foreground hover:text-primary transition"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        
        <a
          href="#"
          data-slot="button"
          className="!hidden md:!inline-flex h-[40px] items-center justify-center gap-1.5 rounded-lg bg-primary px-4 py-1 text-md font-medium text-primary-foreground shadow hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50 focus-visible:ring-offset-2 transition-all"
          >
          Contact
        </a>

        <div className="md:hidden">
          <Sheet>
            <div className="flex gap-3 items-center">
              <a
                href="#"
                data-slot="button"
                className="inline-flex h-[36px] items-center justify-center gap-1.5 rounded-lg bg-primary px-4 py-1 text-md font-medium text-primary-foreground shadow hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50 focus-visible:ring-offset-2 transition-all"
                >
                Contact
              </a>
              <SheetTrigger asChild>
                  <MenuIcon strokeWidth={1.5} size={32} className="color-foreground" />
              </SheetTrigger>
            </div>
            <SheetContent side="left" className="w-[250px] bg-background">
              <div className="flex flex-col gap-4 mt-6">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-base font-normal text-foreground hover:text-primary transition"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>

      </div>
    </header>
  )
}
