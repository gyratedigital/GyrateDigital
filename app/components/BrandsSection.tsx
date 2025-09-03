
import * as React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';
import Image from 'next/image';

export default function BrandsSection () {
  return (
    <div className="container px-4 mx-auto mb-[100px]">
      <h2 className="max-w-4xl font-semibold mx-auto mb-2 text-4xl text-foreground text-center">Our Clients</h2>
      <p className="text-center text-sm text-foreground mb-12">Proud to work with these leaders.</p>
      <Swiper
        modules={[Autoplay]}
        spaceBetween={30}      
        slidesPerView={6}      
        loop={true}            
        speed={1000}           
        autoplay={{
          delay: 1000,            
          disableOnInteraction: false,
          pauseOnMouseEnter: true
        }}
        allowTouchMove={false} 
        freeMode={true}        
      >
        <SwiperSlide>
          <Image
            src="/client-slider-images/client-1.svg"
            alt="logo"
            width={150}
            height={50}
            className="w-full h-auto object-cover rounded-lg dark:invert"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/client-slider-images/client-2.svg"
            alt="logo"
            width={150}
            height={50}
            className="w-full h-auto object-cover rounded-lg dark:invert"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/client-slider-images/client-3.svg"
            alt="logo"
            width={150}
            height={50}
            className="w-full h-auto object-cover rounded-lg dark:invert"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/client-slider-images/client-4.svg"
            alt="logo"
            width={150}
            height={50}
            className="w-full h-auto object-cover rounded-lg dark:invert"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/client-slider-images/client-5.svg"
            alt="logo"
            width={150}
            height={50}
            className="w-full h-auto object-cover rounded-lg dark:invert"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/client-slider-images/client-4.svg"
            alt="logo"
            width={150}
            height={50}
            className="w-full h-auto object-cover rounded-lg dark:invert"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/client-slider-images/client-6.svg"
            alt="logo"
            width={150}
            height={50}
            className="w-full h-auto object-cover rounded-lg dark:invert"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};