import React from "react";
import t1 from "../../../Assets/Images/t1 (1).png";
import t2 from "../../../Assets/Images/t1 (2).png";
import t3 from "../../../Assets/Images/t1 (3).png";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "./TestiSlider.css";

// import required modules
import { Autoplay, Pagination } from "swiper";

const TestiSlider = () => {
  return (
    <Swiper
      pagination={{
        clickable: true,
      }}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      modules={[Autoplay, Pagination]}
      className="mySwiper"
    >
      <SwiperSlide>
        <div className="flex  flex-col lg:flex-row gap-12 lg:gap-32">
          <div className="w-48 h-48 lg:w-[328px] lg:h-[328px]">
            <img
              style={{ opacity: "0.9" }}
              className="rounded-2xl"
              src={t3}
              alt=""
            />
          </div>
          <div className="flex flex-col max-w-3xl">
            <h5 className="font-body text-left  text-2xl mb-5 italic font-normal text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
              sapiente maiores quas ipsa provident molestiae, quidem alias
              quaerat !
            </h5>
            <div>
              <p className="text-lg text-left text-gray-300">
                Shahadat Hossain
              </p>
              <p className="text-left  text-gray-400">Business CEO</p>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="flex  flex-col lg:flex-row gap-12 lg:gap-32">
          <div className="w-48 h-48 lg:w-[328px] lg:h-[328px]">
            <img
              style={{ opacity: "0.9" }}
              className="rounded-2xl"
              src={t1}
              alt=""
            />
          </div>
          <div className="flex flex-col max-w-3xl">
            <h5 className="font-body text-left  text-2xl mb-5 italic font-normal text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
              sapiente maiores quas ipsa provident molestiae, quidem alias
              quaerat !
            </h5>
            <div>
              <p className="text-lg text-left text-gray-300">Mihaddul</p>
              <p className="text-left  text-gray-400">Business Manager</p>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="flex  flex-col lg:flex-row gap-12 lg:gap-32">
          <div className="w-48 h-48 lg:w-[328px] lg:h-[328px]">
            <img
              style={{ opacity: "0.9" }}
              className="rounded-2xl"
              src={t2}
              alt=""
            />
          </div>
          <div className="flex flex-col max-w-3xl">
            <h5 className="font-body text-left  text-2xl mb-5 italic font-normal text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
              sapiente maiores quas ipsa provident molestiae, quidem alias
              quaerat !
            </h5>
            <div>
              <p className="text-lg text-left text-gray-300">Hridy Sikder</p>
              <p className="text-left  text-gray-400">Business HR</p>
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default TestiSlider;
