"use client";

import Image from "next/image";
import { aboutSection } from "../data/aboutSection";
import AboutUsMessage from "../components/AboutUsMessage";
import NavigationMenuDemo from "../components/Header";
import AboutBanner from "../components/about/Banner";
import GreenBanner from "../components/about/GreenBanner";
import FooterSection from "../components/FooterSection";
import Icon from "../components/Icon";
import Link from "next/link";
import CtaSection from "../components/CtaSection";
import BrandsSection from "../components/BrandsSection";
import { useRippleEffect } from "@/hooks/useRippleEffect";
import { Users } from "lucide-react";

export default function PortfolioPage() {
  // Create ripple hooks for each button - hooks must be called unconditionally
  const rippleHook1 = useRippleEffect();
  const rippleHook2 = useRippleEffect();
  const rippleHook3 = useRippleEffect();
  
  const rippleHooks = [rippleHook1, rippleHook2, rippleHook3].slice(0, aboutSection.length);

  return (
    <div className="w-full">
        <NavigationMenuDemo />
        
        {/* Header Section */}
        <div className="relative container mx-auto px-4 pt-[100px] pb-16">
          <div className="relative z-10 text-center rounded-xl overflow-hidden border border-foreground/10 py-12 px-4">
            {/* Background Image */}
            <div 
              className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10 p-6"
              style={{
                backgroundImage: "url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')"
              }}
            />
            
            {/* Overlay */}
            <div className="absolute inset-0 bg-background/10 z-[-1]" />

            <div className="max-w-4xl mx-auto text-center relative z-1">
              <div className="flex items-center justify-center mb-4">
                <Users className="w-12 h-12 text-primary" />
              </div>
              <p className="text-foreground text-xs mb-4 uppercase tracking-wider">About Us</p>
              <h1 className="outfit-text text-foreground text-4xl md:text-5xl font-semibold mb-6">
                Who We Are
              </h1>
              <p className="text-foreground/70 text-lg leading-relaxed max-w-2xl mx-auto">
                We are a team of passionate designers and developers dedicated to creating digital experiences that make a difference.
              </p>
            </div>
          </div>
        </div>

        <GreenBanner />
        <div className="container mx-auto px-4 flex flex-col items-center pt-[80px]">

            {Array.isArray(aboutSection) && aboutSection.length > 0 ? (
                aboutSection.map((about, index) => (
                <div
                    key={index}
                    className={`group work-card flex justify-center flex-col-reverse items-center relative w-full lg:max-w-[80%] max-w-full overflow-hidden sm:mb-24 mb-12
                    ${index % 2 === 0 ? "sm:flex-row gap-x-10 gap-y-8" : "sm:flex-row-reverse gap-x-10 gap-y-8"}`}
                >
                    <div className="relative z-10 sm:1/2 w-full sm:max-w-1/2 max-w-full">
                        <p className="text-foreground text-xs mb-4">{about.category}</p>
                        <h3 className="text-foreground text-2xl font-semibold mb-3">
                            <p>
                            {(Array.isArray(about.title) ? about.title : [about.title]).map(
                                (ti, i) => (
                                    <span
                                        key={i}
                                        className="outfit-text text-foreground text-2xl font-semibold mb-0"
                                    >
                                        {ti}
                                    </span>
                                    )
                                )}
                            </p>
                        </h3>
                        <p className="text-foreground text-md font-normal">
                            {about.description}
                        </p>
                        {/* <Link href="">Discover more</Link> */}
                        <Link
                            href="/contact"
                            data-slot="button"
                            onClick={rippleHooks[index]?.addRipple}
                            className="mt-5 inline-flex h-[40px] items-center justify-center gap-1.5 rounded-xl bg-primary px-4 py-1 text-md font-medium text-primary-foreground shadow hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50 focus-visible:ring-offset-2 transition-all relative overflow-hidden button-wave"
                            >
                            <span className="relative z-10">Discover more</span>
                            {rippleHooks[index]?.ripples.map((ripple) => (
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
                    <div className="w-full sm:w-[480px] sm:h-[400px] h-auto rounded-3xl overflow-hidden">
                        <Image
                            src={about.image}
                            alt={
                                Array.isArray(about.title) ? about.title.join(" ") : about.title
                            }
                            width={410}
                            height={400}
                            className="w-full h-full object-cover"
                        />
                    </div>
                    {/* <div className="absolute inset-0 flex items-center justify-center text-foreground text-lg font-semibold opacity-0 translate-y-5 transition-all duration-700 ease-in-out group-hover:opacity-100 group-hover:translate-y-0 cursor-pointer z-20">
                        Learn More
                    </div> */}
                </div>
                ))
            ) : (
                <div className="w-full h-full pb-[80px] flex flex-col items-center justify-center gap-4">
                    <Icon name="notFound" />
                    <p>No portfolio items found.</p>
                </div>
            )}
        </div>
        <AboutUsMessage />
        <BrandsSection />
        <CtaSection />
        <FooterSection />
    </div>
  );
}
