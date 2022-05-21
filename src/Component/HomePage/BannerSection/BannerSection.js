import React, { useRef, useState } from "react";
// import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "./BannerSection.css";
// import required modules
import { Pagination } from "swiper";

const BannerSection = () => {
  return (
    <>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img
            src="https://d2nb51khh83712.cloudfront.net/images/large/Youtube_Banner_Size_34749296f8.png"
            alt=""
          />
          <div className="text">
            sdaf Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatum quis incidunt necessitatibus est excepturi ea aliquid
            veniam consequatur id suscipit.
          </div>
        </SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
      </Swiper>
    </>
  );
};

export default BannerSection;
