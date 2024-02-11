"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-creative";
import "swiper/css/pagination";

import { EffectCreative, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-creative";

export default function Testimonials() {
  const dummyTestimonials = [
    {
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      author: "John Doe, CEO",
    },
    {
      text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      author: "Jane Smith, CTO",
    },
    {
      text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      author: "Bob Johnson, CFO",
    },
    {
      text: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      author: "Alice Brown, Marketing Director",
    },
    {
      text: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem.",
      author: "Charlie Wilson, Product Manager",
    },
    {
      text: "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.",
      author: "Eva White, Operations Manager",
    },
  ];
  return (
    <div className="testimonial-container w-full md:w-[1200px] mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-4xl font-semibold">
          Trusted by Thousands of Happy Customers
        </h2>
        <p className="text-basic mt-2">
          These are the stories of our customers who have joined us with great
          pleasure when using this amazing feature.
        </p>
      </div>
      <Swiper
        grabCursor={true}
        effect={"creative"}
        creativeEffect={{
          prev: {
            shadow: true,
            translate: ["-120%", 0, -500],
          },
          next: {
            shadow: true,
            translate: ["120%", 0, -500],
          },
        }}
        modules={[EffectCreative, Pagination]}
        pagination={{ clickable: true }}
        className="mySwiper2"
        centeredSlides={true}
        spaceBetween={20}
        loop={true}
        slidesPerView={3}
      >
        {dummyTestimonials.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <div className="testimonial-card bg-white p-6 rounded-lg shadow-md h-full flex flex-col items-center justify-center border border-gray-600">
              <p className="testimonial-text text-lg mb-4">
                {testimonial.text}
              </p>
              <p className="testimonial-author font-bold">
                - {testimonial.author}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
