import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import banner from "../assets/mayra.jpg";

const Venus = () => {
  return (
    <div className="Homeslider py-10 container">
      <div className=" mx-auto mb-0 px-4 py-4 bg-pink-200">
        {/* Heading Section */}
        <div className="text-center  mb-8">
          <h2 className="text-4xl font-bold text-pink-800 mb-2"> Our Venus</h2>
          <p className="text-pink-700 text-lg">Explore the highlights of our Venus collection</p>
        </div>

        {/* Swiper Section */}
        <Swiper
          slidesPerView={3}
          spaceBetween={25}
          navigation={true}
          modules={[Navigation, Autoplay]}
          autoplay={{ delay: 3000 }}
          className="mySwiper"
        >
          {Array.from({ length: 8 }).map((_, index) => (
            <SwiperSlide key={index}>
              <div className="item rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                <img src={banner} alt={`banner-${index}`} className="w-full h-64 object-cover" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Venus;
