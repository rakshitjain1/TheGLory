import React from "react";
import video from "../assets/video.mp4";


const About = () => {
  return (
    <div className="container mx-auto px-4 py-10">
      <div className="flex flex-col items-center justify-center text-center space-y-10">

        {/* Heading with decorative leafs */}
        <div className="relative flex items-center justify-center">
         
          <h1 className="text-4xl sm:text-5xl text-pink-800 font-bold z-10 px-4">
            About Us
          </h1>
        </div>

        {/* Video Section */}
        <div className="w-full max-w-4xl">
          <video
            className="w-full h-[300px] sm:h-[400px] object-cover rounded-lg shadow-xl border border-pink-200"
            controls
          >
            <source src={video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  );
};

export default About;
