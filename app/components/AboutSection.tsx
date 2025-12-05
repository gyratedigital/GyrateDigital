"use client"

import * as React from 'react'
import Image from "next/image";
import Link from 'next/link';
import { useRippleEffect } from "@/hooks/useRippleEffect";

export default function AboutSection() {
    const { ripples, addRipple } = useRippleEffect();

    return(
        <div className="container px-4 mx-auto my-[100px]">
            <h2 className="max-w-4xl font-semibold mx-auto mb-12 text-4xl text-foreground text-center">About Us</h2>
            <div className="max-w-4xl mx-auto flex items-center md:flex-row flex-col md:gap-10 gap-6">
                <Image 
                    src="/about-img.svg" 
                    alt="About Image" 
                    width={500} 
                    height={500} 
                />
                <div className="about-text md:text-left text-center">
                    <h2 className="mb-4 text-2xl text-foreground font-semibold">Digital Agency</h2>
                    <p className="text-muted-foreground text-md mb-4">At <strong>Gyrate,</strong> your premier Digital Agency, we transcend the traditional role of designers; we are your dedicated problem solvers, innovators, and creators of remarkable design solutions. Our design expertise serves as your key to standing out in today's competitive world. As an expert Digital Agency, we understand that producing an exceptional user experience requires a deep understanding of your goals, inspiration, and vision. Through direct communication and thorough research, we transform your ideas into reality, ensuring your brand leaves a lasting impression in the dynamic landscape of visual communication.</p>
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