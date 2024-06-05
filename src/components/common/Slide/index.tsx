"use client";
import Image from "next/image";

import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";

import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import "swiper/scss/scrollbar";

import styles from "./styles.module.scss";
import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";

const items = [
  {
    src: "/images/studentsAproved_1.png",
    key: 1,
  },
  {
    src: "/images/studentsAproved_2.png",
    key: 2,
  },
  {
    src: "/images/studentsAproved_3.png",
    key: 3,
  },
  {
    src: "/images/studentsAproved_4.png",
    key: 4,
  },
];

export const Slide = () => {
  return (
    <Swiper
      className={styles.slide}
      modules={[Navigation, Pagination]}
      spaceBetween={10}
      grabCursor={true}
      slidesPerView={1}
      navigation={{
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      }}
      loop={true}
      breakpoints={{
        800: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        940: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 20,
        },
      }}
    >
      {items.map((item) => (
        <SwiperSlide key={item.key} className={styles.swiperSlide}>
          <Image
            src={item.src}
            alt="StudentsAproved"
            width={196}
            height={455}
          />
        </SwiperSlide>
      ))}
      <div className="slider-controler">
        <div className="swiper-button-prev slider-arrow">
          <FaLongArrowAltLeft />
        </div>

        <div className="swiper-button-next slider-arrow">
          <FaLongArrowAltRight />
        </div>
      </div>
    </Swiper>
  );
};
