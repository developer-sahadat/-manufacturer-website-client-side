import React from "react";
// import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import Swiper styles
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./BannerSection.css";
// import required modules
import { Autoplay, Navigation, Pagination } from "swiper";

import banner1 from "../../../Assets/Images/banner1 (1).png";
import banner2 from "../../../Assets/Images/banner1 (2).png";
import banner3 from "../../../Assets/Images/banner1 (3).png";
import banner5 from "../../../Assets/Images/banner5.png";

const BannerSection = () => {
  return (
    <>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        slidesPerView={"auto"}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Pagination, Navigation, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={banner1} alt="" />
          <div className="text  hidden md:block ">
            <div>
              <h1 className="text-xl mb-3 text-primary  lg:text-5xl  font-semibold">
                Contraction Tool
              </h1>
              <h4 className=" lg:text-2xl mt-5 font-bold ">
                Here is the best construction equipment in the world
              </h4>
              <p className="mt-5 w-7/12 mx-auto">
                We are working honestly. You can rely 100% on our products. We
                are ready to help you in any way we can
              </p>
              <div className="mt-5">
                <button className="banner-btn1">Get Started</button>
                <button className="banner-btn2">Get A Quote</button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={banner2} alt="" />
          <div className="text  hidden md:block ">
            <div>
              <h1 className="text-xl mb-3 text-primary  lg:text-5xl  font-semibold">
                Contraction Tool
              </h1>
              <h4 className=" lg:text-2xl mt-5 font-bold ">
                Here is the best construction equipment in the world
              </h4>
              <p className="mt-5 w-7/12 mx-auto">
                We are working honestly. You can rely 100% on our products. We
                are ready to help you in any way we can
              </p>
              <div className="mt-5">
                <button className="banner-btn1">Get Started</button>
                <button className="banner-btn2">Get A Quote</button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={banner3} alt="" />
          <div className="text  hidden md:block ">
            <div>
              <h1 className="text-xl mb-3 text-primary  lg:text-5xl  font-semibold">
                Contraction Tool
              </h1>
              <h4 className=" lg:text-2xl mt-5 font-bold ">
                Here is the best construction equipment in the world
              </h4>
              <p className="mt-5 w-7/12 mx-auto">
                We are working honestly. You can rely 100% on our products. We
                are ready to help you in any way we can
              </p>
              <div className="mt-5">
                <button className="banner-btn1">Get Started</button>
                <button className="banner-btn2">Get A Quote</button>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <img src={banner5} alt="" />
          <div className="text  hidden md:block ">
            <div>
              <h1 className="text-xl mb-3 text-primary  lg:text-5xl  font-semibold">
                Contraction Tool
              </h1>
              <h4 className=" lg:text-2xl mt-5 font-bold ">
                Here is the best construction equipment in the world
              </h4>
              <p className="mt-5 w-7/12 mx-auto">
                We are working honestly. You can rely 100% on our products. We
                are ready to help you in any way we can
              </p>
              <div className="mt-5">
                <button className="banner-btn1">Get Started</button>
                <button className="banner-btn2">Get A Quote</button>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default BannerSection;
