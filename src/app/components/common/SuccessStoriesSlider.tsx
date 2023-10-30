"use client";
import Link from "next/link";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

import { Pagination } from "swiper/modules";
import { PlayBtn } from "../icons";
import { storiesData } from "@/utils/data";

const SuccessStoriesSlider = () => {
  return (
    <div className='max-w-7xl mx-auto mt-10 md:mt-20 pl-6'>
      <Swiper
        pagination={{
          type: "progressbar",
        }}
        slidesOffsetAfter={20}
        modules={[Pagination]}
        breakpoints={{
          0: {
            slidesPerView: 0.8,
            spaceBetween: 20,
          },
          500: {
            slidesPerView: 1.2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 1.2,
            spaceBetween: 30,
          },
          1280: {
            slidesPerView: 1.3,
            spaceBetween: 50,
          },
        }}
        className='success-stories-slider !overflow-visible '>
        {storiesData.map((item) => (
          <SwiperSlide key={item.id}>
            <Link
              href='/'
              className='relative block h-60 sm:h-80 md:h-96 lg:h-[36.75rem] rounded-2xl lg:rounded-3xl overflow-hidden before:bg-black/40 before:absolute before:inset-0 before:z-10'>
              <Image
                src={`/assets/images/${item.img}`}
                fill
                alt={item.title}
                className='object-cover'
              />
              <div className='w-full absolute left-0 bottom-0 flex items-center gap-3 lg:gap-5 text-white z-20 p-4 sm:p-6 lg:p-11'>
                <button type='button' aria-label='Video Play Button'>
                  <PlayBtn />
                </button>
                <div className='max-w-[16rem] '>
                  <h3 className='line-clamp-1 text-xs xl:text-2xl font-bold'>
                    {item.title}
                  </h3>
                  <p className='line-clamp-1 font-source-pro text-xs md:text-base lg:text-xl tracking-tighter'>
                    {item.description}
                  </p>
                </div>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SuccessStoriesSlider;
