import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import banner1 from "../assets/1.jpg";
import banner2 from "../assets/2.jpg";
import banner3 from "../assets/3.jpg";

const slides = [banner1, banner2, banner3];

const HeroSection = () => {
  return (
    <div className="Homeslider">
      <div className="">
        {/* Swiper Section */}
        <Swiper
          spaceBetween={25}
          slidesPerView={1}
          navigation={true}
          pagination={{ clickable: true }}
          loop={true}
          modules={[Navigation, Autoplay, Pagination]}
          autoplay={{ 
            delay: 3000,
            disableOnInteraction: false 
          }}
          className="mySwiper"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="item overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                <img 
                  src={slide} 
                  alt={`banner-${index + 1}`} 
                  className="w-full h-[550px] object-cover" 
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