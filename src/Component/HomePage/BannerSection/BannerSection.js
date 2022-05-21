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
          delay: 3000,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Pagination, Navigation, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={banner1} alt="" />
          {/* <div className="text">
            <div>
              <h1 className="text-xl text-black lg:text-4xl font-bold">
                Contraction Tool
              </h1>
              <h4 className="text-black font-bold">
                Here is the best construction equipment in the world
              </h4>
              <p>
                We are working honestly. You can rely 100% on our products. We
                are ready to help you in any way we can
              </p>
            </div>
          </div> */}
        </SwiperSlide>
        <SwiperSlide>
          <img src={banner2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={banner3} alt="" />
        </SwiperSlide>

        <SwiperSlide>
          <img src={banner5} alt="" />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default BannerSection;
