"use client"
import React, { useRef } from "react";
import Image from "next/image";
import Slider from "react-slick";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CompanySlider = () => {
  const sliderRef = useRef(null);
  const sliderSettings = {
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const handleNext = () => {
    sliderRef.current.slickNext();
  };

  const handlePrev = () => {
    sliderRef.current.slickPrev();
  };

  return (
    <section className="mx-auto my-12 ">
      <div className="container px-5 mx-auto lg:px-24">
        <div className="flex flex-col w-full mb-4 text-left lg:text-center">
          <h1 className="mb-8 text-4xl font-semibold text-black">
            Trusted by top-tier product companies
          </h1>
        </div>
       
        <div className="w-full gray p-3">
          <Slider ref={sliderRef} {...sliderSettings}>
          <div className="flex items-center justify-center">
            <Image
              src="/assets/Google-Logo.webp"
              alt="Google Logo"
              width={64}
              height={32}
              className="block object-contain h-16 greyC"
            />
          </div>
          <div className="flex items-center justify-center">
            <Image
              src="/assets/Shopify-Logo.svg"
              alt="Shopify Logo"
              width={64}
              height={32}
              className="block object-contain h-16 greyC"
            />
          </div>
          <div className="flex items-center justify-center">
            <Image
              src="/assets/Cloudflare-Logo.svg"
              alt="Cloudflare Logo"
              width={64}
              height={32}
              className="block object-contain h-16 greyC"
            />
          </div>
          <div className="flex items-center justify-center">
            <Image
              src="/assets/PayPal-Logo.png"
              alt="Paypal Logo"
              width={64}
              height={32}
              className="block object-contain h-16 greyC"
            />
          </div>
          </Slider>
          <div className="flex items-center justify-end gap-2 mt-4">
            <button
              className="custom-slider-button-next text-4xl "
              onClick={handleNext}
            >
              <FaArrowAltCircleLeft />
            </button>
            <button
              className="custom-slider-button-prev text-4xl "
              onClick={handlePrev}
            >
              <FaArrowAltCircleRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanySlider;
