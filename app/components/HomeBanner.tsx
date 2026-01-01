'use client'

import * as React from 'react'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
// import Image from 'next/image'
// import { useEffect, useRef } from "react";

export default function HeroSection() {

    return (
        <div className="w-full flex items-center justify-between pt-[80px] h-screen">
            <div className="container px-4 relative flex sm:flex-row flex-col justify-center items-center pt-12 md:pt-16 lg:pt-20 pb-16 md:pb-20 lg:pb-24 mx-auto px-4 gap-12 animate__animated animate__bounce">
                <div className="hero-content flex flex-col gap-2 sm:w-4xl w-full items-center text-center">
                    <div className="absolute z-0 w-[300px] h-[300px] blur-[50px] right-0 top-0 rounded-full bg-[radial-gradient(circle,#CDFFDC,rgba(9,9,17,0)_60%)]"></div>
                    <div className="banner-text relative z-1">
                        <Link
                            href="https://calendly.com/gyratedigital/30min"
                            target="_blank"
                            rel="noopener noreferrer"
                            data-slot="badge"
                            className="w-max inline-flex items-center justify-center gap-1 rounded-full border border-transparent bg-input px-2 py-0.5 text-xs font-medium text-dark transition-colors hover:bg-input/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50 focus-visible:ring-offset-2 mb-2"
                        >
                            Go Digital with Gyrate
                            <ArrowRight className="size-3 pointer-events-none" />
                        </Link>
                        <h1 className="text-4xl font-semibold text-foreground lg:text-[2.75rem] xl:text-5xl mb-2 leading-tight">
                            Gyrate is your All-In-One trusted<br /> Digital Agency
                        </h1>
                        <p className="text-base font-normal text-muted-foreground sm:text-lg mb-3">
                            Helping brands grow through design, marketing, and technology.
                        </p>
                        <div className="flex w-full items-center justify-center gap-3 pt-2">
                            {/* <a
                                href=""
                                data-slot="button"
                                className="inline-flex items-center justify-center gap-1.5 rounded-xl bg-primary px-4 py-2 text-md font-medium text-primary-foreground shadow hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50 focus-visible:ring-offset-2 transition-all"
                                >
                                Get Started
                            </a> */}
                            <Link href="/services">
                                <Button className="gap-2 px-4 py-2 text-base cursor-pointer h-[40px]">
                                    <p>Explore more</p>
                                </Button>
                            </Link>
                            <Link href="/contact">
                                <Button className="gap-2 px-4 py-2 text-base cursor-pointer h-[40px]">
                                    <p>Contact</p>
                                </Button>
                            </Link>
                        </div>
                    </div>
                    <div className="absolute z-0 w-[300px] h-[300px] blur-[50px] left-0 bottom-0 rounded-full bg-[radial-gradient(circle,#CDFFDC,rgba(9,9,17,0)_60%)]"></div>
                </div>
            </div>
        </div>
    )
}