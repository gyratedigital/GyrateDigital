"use client";

import Image from "next/image";
import { servicesSection } from "../data/servicesSection";
import NavigationMenuDemo from "../components/Header";
import GreenBanner from "../components/portfolio/GreenBanner";
import FooterSection from "../components/FooterSection";
import Icon from "../components/Icon";
import { Briefcase } from "lucide-react";
// import Link from "next/link";

export default function ServicesPage() {

  return (
    <div className="w-full">
        <NavigationMenuDemo />
        
        {/* Header Section */}
        <div className="relative container mx-auto px-4 pt-[100px] pb-16">
          <div className="relative z-10 text-center rounded-xl overflow-hidden border border-foreground/10 py-12 px-4">
            {/* Background Image */}
            <div className="absolute inset-0 bg-[url('/services-banner.avif')] bg-cover bg-center bg-no-repeat opacity-10" />
            
            {/* Overlay */}
            <div className="absolute inset-0 bg-background/10 z-[-1]" />

            <div className="max-w-4xl mx-auto text-center relative z-1">
              <div className="flex items-center justify-center mb-4">
                <Briefcase className="w-12 h-12 text-primary" />
              </div>
              <p className="text-foreground text-xs mb-4 uppercase tracking-wider">Our Services</p>
              <h1 className="outfit-text text-foreground text-4xl md:text-5xl font-semibold mb-6">
                Comprehensive Services, Lasting Impact
              </h1>
              <p className="text-foreground/70 text-lg leading-relaxed max-w-2xl mx-auto">
                We deliver end-to-end digital solutions that transform your business and drive measurable results.
              </p>
            </div>
          </div>
        </div>

        <GreenBanner />
        <div className="container mx-auto px-4 flex flex-col items-center pt-[80px]">
        {/* <h1 className="text-3xl font-bold mb-6">Portfolio Page</h1> */}

            {Array.isArray(servicesSection) && servicesSection.length > 0 ? (
                servicesSection.map((service, index) => (
                <div
                    key={service.id}
                    className={`group work-card flex justify-center flex-col-reverse items-center relative w-full lg:max-w-[80%] max-w-full overflow-hidden sm:mb-24 mb-12
                    ${index % 2 === 0 ? "sm:flex-row gap-x-10 gap-y-4" : "sm:flex-row-reverse gap-x-10 gap-y-4"}`}
                >
                    {/* <div className="absolute inset-0 bg-secondary/90 opacity-0 transition-opacity duration-500 ease-in-out rounded-xl"></div> */}
                    <div className="relative z-10 sm:1/2 w-full sm:max-w-1/2 max-w-full">
                        <p className="text-foreground text-xs mb-5">{service.category}</p>
                        <h3 className="text-foreground text-2xl font-semibold mb-3">
                            <p>
                            {(Array.isArray(service.title) ? service.title : [service.title]).map(
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
                            {service.description}
                        </p>
                        {/* <Link href="#">Visit Live Website</Link> */}
                    </div>
                    <div className="w-full sm:max-w-1/2 h-1/2 rounded-lg overflow-hidden">
                        <Image
                            src={service.image}
                            alt={
                                Array.isArray(service.title) ? service.title.join(" ") : service.title
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
        <FooterSection />
    </div>
  );
}
