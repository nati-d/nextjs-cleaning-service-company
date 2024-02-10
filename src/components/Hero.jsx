"use client";

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function Hero() {
  return (
    <Swiper
      cssMode={true}
      navigation={true}
      pagination={true}
      mousewheel={true}
      keyboard={true}
      modules={[Navigation, Pagination, Mousewheel, Keyboard]}
      className="mySwiper"
    >
      <SwiperSlide className='relative flex items-center justify-center'>
        <Image
          src="https://images.pexels.com/photos/4792773/pexels-photo-4792773.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt='hero-image'
          fill
          className=''
        />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
          <h1 className="text-4xl font-bold mb-4 text-black">Elevate Your Space with Expert Cleaning Services</h1>
          <p className="text-lg text-black">Experience a pristine and welcoming environment. Our professional cleaning services cater to your corporate needs.</p>
          <button className="bg-blue-500 text-white px-4 py-2 mt-4 rounded-md">Request a Quote</button>
        </div>
      </SwiperSlide>

      <SwiperSlide className='relative flex items-center justify-center'>
        <Image
          src="https://images.pexels.com/photos/5233264/pexels-photo-5233264.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt='hero-image'
          fill
        />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
          <h1 className="text-4xl font-bold mb-4">Reliable Cleaning Solutions for Every Business</h1>
          <p className="text-lg">Transform your workplace with meticulous cleaning. From offices to industrial spaces, our dedicated team ensures a spotless environment.</p>
          <button className="bg-blue-500 text-white px-4 py-2 mt-4 rounded-md">Contact us</button>
        </div>
      </SwiperSlide>
    </Swiper>
  );
}
