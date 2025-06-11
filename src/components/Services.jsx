import React from "react";
import { Link } from "react-router-dom";

import receptionImg from "../assets/reception.jpg";
import ceremonyImg from "../assets/ceremony.png";
import haldiImg from "../assets/haldi.jpg";
import sangeetImg from "../assets/sangeet.jpg";
import mayraImg from "../assets/mayra.jpg"; // placeholder
import { colors } from "@mui/material";

// Reusable Service Box component
const ServiceBox = ({ to, label, image }) => (
  <Link
    to={to}
    className="relative w-full h-[300px] rounded overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300"
  >
    <div className="absolute top-2 left-2 z-10 bg-pink-300 bg-opacity-80 font-bold text-lg px-3 py-1 rounded"  style={{ color: "#800022" }}>
      {label}
    </div>
    <img src={image} alt={label} className="w-full h-full object-cover" />
  </Link>
);

// Main Services component
const Services = () => {
  return (
    <div className="container ">
    <div
      className="min-h-screen bg-pink-200 mt-5 py-10 px-4"
     
    >
      {/* Heading */}
      <div className="text-center mt-10 text-pink-700">
        <h1 className="text-3xl font-bold mt-6">Wedding Curated by</h1>
        <h2 className="text-xl italic mt-2 mb-10">The Glory Event</h2>
      </div>

      {/* Grid layout for service boxes */}
   <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <ServiceBox to="/reception" label="Reception" image={receptionImg} />
        <ServiceBox to="/ceremony" label="Ceremony" image={ceremonyImg} />
        <ServiceBox to="/haldi" label="Haldi" image={haldiImg} />
        <ServiceBox to="/sangeet" label="Sangeet" image={sangeetImg} />
        <ServiceBox to="/mayra" label="Mayra" image={mayraImg} />
      </div>
    </div>
    </div>
  );
};

export default Services;
