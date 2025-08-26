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
        if(window.scrollY > 68) {
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
    // <header className="w-full sticky top-0 bg-background/70 backdrop-blur-sm">
    <header className={`w-full transition-all duration-900 ease-in-out z-9 ${scrolled ? "sticky top-0 bg-background/70 backdrop-blur-sm" : " "}`}>
      <div className="container flex items-center justify-between gap-2 py-3 md:py-4 lg:py-7 mx-auto px-4 xl:gap-4">

        <Link href="/" className="text-xl font-bold text-primary">
          <Image
            className="md:h-[36px] h-[25px] block dark:invert"
            src="/gy-logo.svg"
            alt="logo"
            width={120}
            height={36}
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
          className="!hidden md:!inline-flex items-center justify-center gap-1.5 rounded-lg bg-primary px-4 py-2 text-md font-medium text-primary-foreground shadow hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50 focus-visible:ring-offset-2 transition-all"
          >
          Contact
        </a>

        <div className="md:hidden">
          <Sheet>
            <div className="flex gap-3 items-center">
              <a
                href="#"
                data-slot="button"
                className="inline-flex items-center justify-center gap-1.5 rounded-lg bg-primary px-4 py-2 text-md font-medium text-primary-foreground shadow hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50 focus-visible:ring-offset-2 transition-all"
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
