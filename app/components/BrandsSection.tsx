"use client";

import * as React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';
import Image from 'next/image';
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

// Partner interface for type safety
interface Partner {
  id: string;
  src: string;
  alt: string;
  url?: string; // Optional - if provided, logo becomes clickable
  width?: number;
  height?: number;
}

// Array of partners - add url property to make clickable
const partners: Partner[] = [
  {
    id: "client-1",
    src: "/client-slider-images/client-1.svg",
    alt: "Client 1 logo",
  },
  {
    id: "client-2",
    src: "/client-slider-images/client-2.svg",
    alt: "Client 2 logo",
  },
  {
    id: "client-3",
    src: "/client-slider-images/client-3.svg",
    alt: "Client 3 logo",
  },
  {
    id: "client-4",
    src: "/client-slider-images/client-4.svg",
    alt: "Client 4 logo",
  },
  {
    id: "client-5",
    src: "/client-slider-images/client-5.svg",
    alt: "Client 5 logo",
  },
  {
    id: "client-4-duplicate",
    src: "/client-slider-images/client-4.svg",
    alt: "Client 4 logo",
  },
  {
    id: "client-6",
    src: "/client-slider-images/client-6.svg",
    alt: "Client 6 logo",
  },
  {
    id: "foodblogliebe",
    src: "https://foodblogliebe.de/wp-content/uploads/2020/11/cropped-Foodblogliebe_Logo-1-1.png",
    alt: "Foodblogliebe logo",
    url: "https://foodblogliebe.de/",
    height: 125,
  },
  {
    id: "ix-media",
    src: "/client-slider-images/logo.svg",
    alt: "IonicX ARCHITECT OF TIME",
    url: "https://www.ionicx.io/",
    height: 125,
  },
];

export default function BrandsSection() {
  const { theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Prevent rendering until mounted to avoid theme mismatch
  if (!mounted) {
    return (
      <div className="container px-4 mx-auto mb-[100px]">
        <h2 className="max-w-4xl font-semibold mx-auto mb-2 text-4xl text-foreground text-center relative">Our Partners</h2>
        <p className="text-center text-sm text-foreground mb-12">Proud to work with these leaders.</p>
        <div className="h-[80px]"></div> {/* Placeholder to prevent layout shift */}
      </div>
    );
  }

  const currentTheme = theme || resolvedTheme;
  const isDark = currentTheme === "dark";

  // Render partner image
  const renderPartnerImage = (partner: Partner) => (
    <Image
      src={partner.src}
      alt={partner.alt}
      width={partner.width || 150}
      height={partner.height || 50}
      className={`w-full ${partner.height ? `max-h-[${partner.height}px]` : ''} h-auto object-contain rounded-xl transition-all duration-300 ${isDark ? "invert" : ""}`}
    />
  );

  // Render partner slide content - clickable or not based on url
  const renderPartnerContent = (partner: Partner) => {
    if (partner.url) {
      return (
        <a
          href={partner.url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center cursor-pointer hover:opacity-80 transition-opacity duration-300"
          onClick={(e) => {
            e.stopPropagation();
            window.open(partner.url, "_blank", "noopener,noreferrer");
          }}
        >
          {renderPartnerImage(partner)}
        </a>
      );
    }
    return renderPartnerImage(partner);
  };

  return (
    <div className="container px-4 mx-auto mb-[100px]">
      <h2 className="max-w-4xl font-semibold mx-auto mb-2 text-4xl text-foreground text-center relative">Our Partners</h2>
      <p className="text-center text-sm text-foreground mb-12">Proud to work with these leaders.</p>
      <Swiper
        // modules={[Autoplay]}
        spaceBetween={30}
        slidesPerView={6}   // default for large screens
        loop={true}
        speed={1000}
        // autoplay={{
        //   delay: 1000,
        //   disableOnInteraction: false,
        //   pauseOnMouseEnter: false,
        // }}
        allowTouchMove={true}
        freeMode={true}
        breakpoints={{
          320: {
            slidesPerView: 2, // small phones
            spaceBetween: 10,
          },
          640: {
            slidesPerView: 3, // tablets
            spaceBetween: 15,
          },
          1024: {
            slidesPerView: 4, // small laptops
            spaceBetween: 20,
          },
          1280: {
            slidesPerView: 5, // desktops
            spaceBetween: 25,
          },
          1536: {
            slidesPerView: 6, // large desktops
            spaceBetween: 30,
          },
        }}
      >
        {partners.map((partner) => (
          <SwiperSlide key={partner.id}>
            {renderPartnerContent(partner)}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};