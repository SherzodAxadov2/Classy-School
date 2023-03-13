import React from "react";
import "./advantage.css";
import Swipe from "./Swipe";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import { FreeMode, Pagination } from "swiper";
import { swipes } from "../../constants/swipe";

const Advantages = () => {
  return (
    <div className="comfy">
      <div className="container">
        <h1
          className="title text-linear"
          data-aos="fade-up"
          data-aos-duration="500"
        >
          Classyning afzalliklari
        </h1>
        <p className="subtitle" data-aos="fade-up" data-aos-duration="500">
          Talabalarimizning har biri quyidagi afzalliklarga ega bo'ladi
        </p>
      </div>

      <Swiper
        data-aos="fade-up"
        data-aos-duration="400"
        slidesPerView={5}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            width: 640,
            slidesPerView: 1,
          },
          976: {
            width: 976,
            slidesPerView: 3,
          },
          1300: {
            width: 1300,
            slidesPerView: 5,
          },
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        {swipes.map((item) => (
          <SwiperSlide key={item.id}>
            <Swipe swiper={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Advantages;
