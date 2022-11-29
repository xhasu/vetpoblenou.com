import React from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";

import "swiper/css";

const SlideNextButton = () => {
  const swiper = useSwiper();

  return (
    <button
      type="button"
      className="swiper-button-next px-4 py-4 flex justify-center items-center bg-primary"
      onClick={() => swiper.slideNext()}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M8.25 4.5l7.5 7.5-7.5 7.5"
        />
      </svg>
    </button>
  );
};

const SlidePrevButton = () => {
  const swiper = useSwiper();

  return (
    <button
      type="button"
      className="swiper-button-prev px-4 py-4 flex justify-center items-center bg-primary"
      onClick={() => swiper.slidePrev()}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15.75 19.5L8.25 12l7.5-7.5"
        />
      </svg>
    </button>
  );
};

const PromoGallery = () => {
  return (
    <div className="relative container mb-8 lg:mb-20">
      <Swiper loop={true}>
        <SwiperSlide>
          <picture>
            <img src="/images/services-04.jpg" alt="" />
          </picture>
        </SwiperSlide>
        <SwiperSlide>
          <picture>
            <img src="/images/services-04.jpg" alt="" />
          </picture>
        </SwiperSlide>
        <SwiperSlide>
          <picture>
            <img src="/images/services-04.jpg" alt="" />
          </picture>
        </SwiperSlide>
        <div className="absolute bottom-0 left-0 right-0 z-10 flex justify-between text-white">
          <SlidePrevButton />
          <SlideNextButton />
        </div>
      </Swiper>
    </div>
  );
};

export default PromoGallery;
