'use client'

import * as React from 'react'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
// import Image from 'next/image'
// import { useEffect, useRef } from "react";

import SmoothMarquee from './SmoothMarquee'

export default function HeroSection() {

    return (
        <>
            <div className="w-full flex items-center justify-center pt-[80px] min-h-screen overflow-hidden">
                <div className="w-full max-w-7xl relative flex flex-col justify-center items-center pt-12 md:pt-16 lg:pt-20 pb-16 md:pb-20 lg:pb-24 mx-auto px-4 sm:px-6 gap-12 animate__animated animate__fadeIn">
                    <div className="hero-content flex flex-col gap-2 w-full items-center text-center px-2">
                        <div className="absolute z-0 w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] blur-[50px] right-0 top-0 rounded-full bg-[radial-gradient(circle,#CDFFDC,rgba(9,9,17,0)_60%)] opacity-50"></div>
                        <div className="banner-text relative z-1 w-full flex flex-col items-center">
                            <Link
                                href="https://calendly.com/gyratedigital/30min"
                                target="_blank"
                                rel="noopener noreferrer"
                                data-slot="badge"
                                className="inline-flex items-center justify-center gap-1.5 rounded-full border border-transparent bg-input px-3 py-1 text-[10px] sm:text-xs font-medium text-dark transition-colors hover:bg-input/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50 focus-visible:ring-offset-2 mb-4"
                            >
                                Go Digital with Gyrate
                                <ArrowRight className="size-3 pointer-events-none" />
                            </Link>
                            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-6 leading-[1.1] tracking-tight max-w-screen-xl mx-auto text-balance">
                                Gyrate is your Trusted All-In-One <br className="hidden md:block" /> Digital Partner
                            </h1>
                            <p className="text-base sm:text-lg md:text-xl font-normal text-muted-foreground mb-10 max-w-3xl md:max-w-4xl mx-auto px-4 leading-relaxed text-balance">
                                We design, build, and evolve digital systems — from websites and web applications to SaaS platforms and AI-enabled solutions and digital marketing — built for long-term performance.
                            </p>
                            <div className="flex w-full items-center justify-center gap-3 pt-2">
                                <Link href="/contact">
                                    <Button className="gap-2 px-6 py-2 text-base cursor-pointer h-[44px] rounded-xl">
                                        <p>Talk to Us</p>
                                    </Button>
                                </Link>
                            </div>
                        </div>
                        <div className="absolute z-0 w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] blur-[50px] left-0 bottom-0 rounded-full bg-[radial-gradient(circle,#CDFFDC,rgba(9,9,17,0)_60%)] opacity-50"></div>
                    </div>
                </div>
            </div>
            <SmoothMarquee />
        </>
    )
}