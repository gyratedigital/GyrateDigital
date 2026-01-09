"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { useRippleEffect } from "@/hooks/useRippleEffect";
import { CheckCircle2, Rocket, TrendingUp, Layers, Users, Calendar, MessageSquare, ShieldCheck, Code, Zap } from "lucide-react";

export default function DedicatedTeamSection() {
    const { ripples, addRipple } = useRippleEffect();

    const bestFor = [
        { icon: Rocket, text: "Ongoing product development" },
        { icon: TrendingUp, text: "Scaling technical capacity" },
        { icon: Layers, text: "Long-term SaaS or software projects" },
    ];

    const whatYouGet = [
        { text: "Dedicated developers or teams" },
        { text: "Flexible engagement models" },
        { text: "Direct communication" },
        { text: "Reliable, long-term support" },
    ];

    return (
        <div className="container px-4 mx-auto my-[100px]">
            <div className="max-w-6xl mx-auto">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                    {/* Left Side: Content */}
                    <div className="lg:w-1/2 space-y-8 animate__animated animate__fadeInLeft">
                        <div>
                            <span className="inline-block px-4 py-1.5 mb-4 text-xs font-bold tracking-wider uppercase bg-primary/10 text-primary rounded-full">
                                Dedicated Development Teams
                            </span>
                            <h2 className="text-4xl lg:text-5xl font-semibold text-foreground leading-tight mb-4">
                                Need long-term development support?
                            </h2>
                            <p className="text-muted-foreground text-lg leading-relaxed">
                                We provide dedicated developers and teams who work as an extension of your in-house team — helping you build, scale, and maintain digital products without the overhead of full-time hiring.
                            </p>
                        </div>

                        <div className="grid sm:grid-cols-2 gap-8">
                            {/* Best For Column */}
                            <div className="space-y-4">
                                <h3 className="text-xl font-semibold text-foreground flex items-center gap-2">
                                    <span className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center text-primary">
                                        <Users className="w-5 h-5" />
                                    </span>
                                    Best for:
                                </h3>
                                <ul className="space-y-3">
                                    {bestFor.map((item, index) => (
                                        <li key={index} className="flex items-center gap-2 text-muted-foreground">
                                            <item.icon className="w-4 h-4 text-primary" />
                                            <span>{item.text}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* What You Get Column */}
                            <div className="space-y-4">
                                <h3 className="text-xl font-semibold text-foreground flex items-center gap-2">
                                    <span className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center text-primary">
                                        <ShieldCheck className="w-5 h-5" />
                                    </span>
                                    What you get:
                                </h3>
                                <ul className="space-y-3">
                                    {whatYouGet.map((item, index) => (
                                        <li key={index} className="flex items-center gap-2 text-muted-foreground">
                                            <CheckCircle2 className="w-4 h-4 text-primary" />
                                            <span>{item.text}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div className="pt-4">
                            <Link
                                href="/contact"
                                data-slot="button"
                                onClick={addRipple}
                                className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-8 py-3 text-lg font-medium text-primary-foreground shadow-lg hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50 focus-visible:ring-offset-2 transition-all relative overflow-hidden button-wave group"
                            >
                                <span className="relative z-10">Talk to Us</span>
                                <MessageSquare className="w-5 h-5 relative z-10 transition-transform group-hover:scale-110" />
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

                    {/* Right Side: Visual Element */}
                    <div className="lg:w-1/2 relative animate__animated animate__fadeInRight">
                        <div className="relative z-10 rounded-[40px] overflow-hidden border border-border bg-gradient-to-br from-card to-primary/5 p-12 lg:p-16 flex items-center justify-center min-h-[400px] shadow-2xl group">
                            {/* Central Icon Visual */}
                            <div className="relative">
                                <div className="absolute inset-0 bg-primary/20 blur-[60px] rounded-full scale-150 animate-pulse"></div>
                                <div className="relative bg-card-dark rounded-3xl p-8 border border-white/10 shadow-2xl transform transition-transform duration-500 group-hover:rotate-3 group-hover:scale-110">
                                    <Users className="w-24 h-24 text-primary" strokeWidth={1} />
                                </div>

                                {/* Floating Small Icons */}
                                <div className="absolute -top-6 -right-6 bg-primary p-3 rounded-xl shadow-lg border border-white/20 animate-bounce-slow">
                                    <Code className="w-6 h-6 text-primary-foreground" />
                                </div>
                                <div className="absolute -bottom-4 -left-8 bg-secondary p-3 rounded-xl shadow-lg border border-white/20 animate-bounce-slow delay-300">
                                    <Zap className="w-6 h-6 text-white" />
                                </div>
                            </div>
                        </div>

                        {/* Background Decorative Elements */}
                        <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/20 rounded-full blur-[80px] -z-10"></div>
                        <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-secondary/20 rounded-full blur-[80px] -z-10"></div>

                        {/* Floating Stats Badge */}
                        <div className="absolute -bottom-6 right-8 bg-card-dark text-card-light p-4 rounded-2xl shadow-2xl border border-white/10 flex items-center gap-3 z-20">
                            <div className="p-2 bg-primary/20 rounded-lg">
                                <Layers className="w-6 h-6 text-primary" />
                            </div>
                            <div>
                                <p className="text-[10px] text-muted-foreground uppercase font-bold tracking-widest">Efficiency</p>
                                <p className="text-lg font-semibold leading-none">Scalable Teams</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
