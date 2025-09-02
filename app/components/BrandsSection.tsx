
import * as React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

export default function BrandsSection () {
  return (
    <div className="container px-4 mx-auto mb-[100px]">
        <h2 className="max-w-4xl font-semibold mx-auto mb-2 text-4xl text-foreground text-center">Our Clients</h2>
        <p className="text-center text-sm text-foreground mb-12">Proud to work with these leaders.</p>
        <Swiper
          spaceBetween={50}
          slidesPerView={3}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
          >
          <SwiperSlide>Slide 1</SwiperSlide>
          <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide>
          {/* ... */}
        </Swiper>
    </div>
  );
};