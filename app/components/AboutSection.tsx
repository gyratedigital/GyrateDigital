"use client"

import * as React from 'react'
import Image from "next/image";
import Link from 'next/link';
import { useRippleEffect } from "@/hooks/useRippleEffect";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import { useLenis } from "./LenisProvider";

gsap.registerPlugin(ScrollTrigger);

export default function AboutSection() {
    const { ripples, addRipple } = useRippleEffect();
    const { lenis } = useLenis();

    const refreshScroll = React.useCallback(() => {
        requestAnimationFrame(() => {
            lenis?.resize();
            ScrollTrigger.refresh();
        });
    }, [lenis]);

    return (
        <div className="container px-4 mx-auto">
            <h2 className="section-heading max-w-4xl mx-auto mb-12 text-foreground text-center">About Gyrate Digital</h2>
            <div className="max-w-6xl mx-auto flex items-center md:flex-row flex-col md:gap-10 gap-6">
                <Image
                    src="/about-gyrate.webp"
                    alt="About Gyrate Digital — Deep Learning"
                    loading="eager"
                    priority
                    width={500}
                    height={500}
                    className="rounded-2xl h-auto w-full max-w-[500px]"
                    onLoadingComplete={refreshScroll}
                />
                <div className="about-text md:text-left text-center">
                    <p className="text-muted-foreground text-lg sm:text-xl leading-[1.85] mb-6">
                        <strong>Gyrate Digital</strong> is an AI-focused technology company helping businesses turn emerging AI capabilities into practical, scalable solutions. We specialize in Agentic AI, model fine-tuning, Generative AI, AI chatbots, and autonomous agents designed around real business needs. Our expertise also extends to data engineering and integration, connecting AI with the systems and data businesses already use. We build prototypes and MVPs that help businesses validate, launch, and scale AI-powered products.
                    </p>
                    <Link
                        href="/about"
                        data-slot="button"
                        onClick={addRipple}
                        className="inline-flex items-center justify-center gap-1.5 rounded-xl bg-primary px-4 py-2 text-md font-medium text-primary-foreground shadow hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50 focus-visible:ring-offset-2 transition-all relative overflow-hidden button-wave"
                    >
                        <span className="relative z-10">Discover more</span>
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
                </div>
            </div>
        </div>
    );
}
