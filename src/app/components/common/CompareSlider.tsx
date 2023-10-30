"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";

import { Pagination } from "swiper/modules";
import { TableShadow } from "../icons";

const ComparePricesSlider = () => {
  return (
    <Swiper
      pagination={{
        type: "progressbar",
      }}
      modules={[Pagination]}
      breakpoints={{
        0: {
          slidesPerView: 0.7,
        },
        900: {
          slidesPerView: 0.7,
        },
      }}
      className='compare-price-slider !overflow-visible'>
      <SwiperSlide className='relative pl-0 p-12 xl:pl-12 xl:-ml-12 -mt-12'>
        <Image
          src='./assets/images/svgs/compare-table.svg'
          alt='Compare Grocery Prices Table Image'
          width={829}
          height={559}
          className='w-full h-full relative z-20'
        />
        <TableShadow />
      </SwiperSlide>
    </Swiper>
  );
};

export default ComparePricesSlider;
