"use client";

import Image from "next/image";
import RatingStars from "./RatingStars";
import { Swiper, SwiperSlide } from "swiper/react";

import { Navigation } from "swiper/modules";
import { SliderBtn } from "../icons";
import { testionials } from "@/utils/data";

const TestimonalsSlider = () => {
  return (
    <>
      <Swiper
        grabCursor={true}
        slidesPerView={2}
        spaceBetween={40}
        centeredSlides
        loop
        navigation={{
          prevEl: ".testimonials-prev-btn",
          nextEl: ".testimonials-next-btn",
        }}
        modules={[Navigation]}
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 50,
          },
          500: {
            slidesPerView: 1.3,
            spaceBetween: 50,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 50,
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 60,
          },
          1280: {
            slidesPerView: 2.5,
            spaceBetween: 70,
          },
          1440: {
            slidesPerView: 2.8,
            spaceBetween: 98,
          },
        }}
        className='testimonials-slider !overflow-visible'>
        {testionials.map((item) => (
          <SwiperSlide key={item.id} className='relative pb-16 -mb-16'>
            <div className='relative bg-white font-source-pro text-sm lg:text-base xl:text-xl text-center rounded-3xl md:text-start transition-all duration-300 px-9 pb-8 py-14 lg:px-16 lg:pt-20 shadow-card'>
              <div className='w-16 h-16 lg:w-25 lg:h-25 rounded-full absolute -top-8 lg:-top-12 left-1/2 -translate-x-1/2 z-10'>
                <Image width={100} height={100} src={item.img} alt='Avatar' />
              </div>
              <p dangerouslySetInnerHTML={{ __html: item.text }}></p>
              <p className='font-popins font-semibold text-gradient mt-5 md:mt-7'>
                {item.name}
              </p>
              <p className='lg:mt-1'>{item.address}</p>
              <RatingStars />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className='flex gap-4 justify-center lg:hidden -mt-14 z-40 relative'>
        <button
          className='testimonials-prev-btn flex items-center justify-center w-10 h-10 rounded-full gradient overflow-hidden'
          aria-label='Testimonials slider prev btb'>
          <SliderBtn className='-rotate-180' />
        </button>

        <button
          className='testimonials-next-btn flex items-center justify-center w-10 h-10 rounded-full gradient overflow-hidden'
          aria-label='Testimonials slider next btb'>
          <SliderBtn />
        </button>
      </div>
    </>
  );
};

export default TestimonalsSlider;
