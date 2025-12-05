"use client"

import Image from 'next/image'
import Link from 'next/link'
import * as React from 'react'
import { useRippleEffect } from "@/hooks/useRippleEffect";

export default function CtaSection() {
    const { ripples, addRipple } = useRippleEffect();

    return(
        <div className="container px-4 mx-auto mb-[100px]">
            <div className="relative w-full bg-primary rounded-xl md:px-8 px-4 py-16 flex flex-col items-center">
                <Image 
                    src={"/quater-circle.svg"} 
                    alt="Quater circle" 
                    width={100} 
                    height={100} 
                    className="absolute top-0 right-0"
                >
                </Image>
                <h2 className="font-semibold mb-5 lg:text-5xl md:text-4xl text-3xl text-card-dark text-center">Let's talk about your next project</h2>
                <p className="text-center text-md text-card-dark mb-8 max-w-xl mx-auto">Whether it's a website, app, or creative design, we're here to turn your next project into reality with 
                innovation and precision.</p>
                <Link
                    href="/contact"
                    data-slot="button"
                    onClick={addRipple}
                    className="inline-flex items-center justify-center gap-1.5 rounded-xl bg-card-dark px-4 py-2 text-md font-medium text-card-light shadow hover:bg-card-dark/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50 focus-visible:ring-offset-2 transition-all relative overflow-hidden button-wave"
                    >
                    <span className="relative z-10">Get in touch</span>
                    {ripples.map((ripple) => (
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
                <div className="w-[30px] h-[30px] rounded-full bg-primary absolute left-[15%] bottom-[-15px] border border-[6px] border-background"></div>
            </div>
        </div>
    )
}