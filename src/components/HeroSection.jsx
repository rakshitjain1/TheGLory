import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay,Pagination, Navigation } from "swiper/modules";

import banner1 from "../assets/1.jpg";
import banner2 from "../assets/2.jpg";
import banner3 from "../assets/3.jpg";


const slides = [banner1, banner2, banner3];

const HeroSection = () => {
  return (
    <div className="Homeslider  ">
      <div className="">
         <Swiper
          loop={true}
          // slidesPerView={1}
          spaceBetween={100}
          navigation={true}
          modules={[Navigation,Autoplay]}

          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
                    className="sliderHome"
        >
          {slides.map((img, index) => (
            <SwiperSlide key={index}>
              <div className="item rounded-[20px] overflow-hidden">
                <img
                  src={img}
                  alt={`slide-${index}`}
                  className="w-full h-[620px] object-cover"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default HeroSection;
