import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";

import receptionImg from "../assets/reception.jpg";
import ceremonyImg from "../assets/ceremony.png";
import haldiImg from "../assets/haldi.jpg";
import sangeetImg from "../assets/sangeet.jpg";
import mayraImg from "../assets/mayra.jpg";

// Reusable Service Box component (no Link)
const ServiceBox = ({ label, image }) => (
  <div className="relative w-full h-[300px] rounded-xl overflow-hidden shadow-lg group">
    {/* Image */}
    <img
      src={image}
      alt={label}
      className="w-full h-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
    />

    {/* Overlay with blur and label */}
    <div className="absolute inset-0  bg-opacity-40 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      <span className="text-pink-800 text-xl font-bold">{label}</span>
    </div>
  </div>
);


// Data for services
const services = [
  { label: "Reception", image: receptionImg },
  { label: "Ceremony", image: ceremonyImg },
  { label: "Haldi", image: haldiImg },
  { label: "Sangeet", image: sangeetImg },
  { label: "Mayra", image: mayraImg },
  { label: "Sufi Night", image: sangeetImg },
  { label: "Wedding", image: mayraImg },
  { label: "Mehndi", image: haldiImg },
  { label: "After Party", image: mayraImg },
  { label: "Sajan Goth", image: receptionImg },
];

const Services = () => {
  return (
    <div className="container mx-auto">
      <div className=" bg-pink-50 mt-5 py-8 px-8">
        {/* Heading */}
        <div className="text-center mt-10  text-pink-700">
          <h1 className="text-3xl font-bold mt-6">Wedding Curated by</h1>
          <h2 className="text-xl italic mt-2 mb-10">The Glory Event</h2>
        </div>

        {/* Swiper Carousel */}
        <Swiper
          spaceBetween={25}
          navigation={true}
          loop={true}
          modules={[Navigation, Autoplay]}
          autoplay={{ delay: 3000 }}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          className="mySwiper"
        >
          {services.map((service, index) => (
            <SwiperSlide key={index}>
              <ServiceBox {...service} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Services;
