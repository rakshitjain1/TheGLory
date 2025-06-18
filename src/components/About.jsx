import React from "react";
import video from "../assets/video.mp4";
import leafImg from '../assets/leaf.png'

const About = () => {
  return (
    <div className="container  px-4">
      <div className="flex flex-col items-center justify-center text-center space-y-6">
        {/* Top: About Content */}
        <div className="relative flex justify-center items-center mt-10">
      {/* Leaf images - top, bottom, left, right */}
      <img src={leafImg} alt="Leaf" className="absolute top-[-26px] left-6 transform -translate-x-[20px] w-10 h-10 -rotate-50" />
       <img src={leafImg} alt="Leaf" className="absolute bottom-[-5px] -right-6 transform -translate-x-1/2 rotate-135 w-10 h-10" />
     {/* <img src={leafImg} alt="Leaf" className="absolute top-0 left-1 transform -translate-y-1/2 -rotate-90 w-10 h-10" />
      <img src={leafImg} alt="Leaf" className="absolute top-0 right-2 transform -translate-y-1/2 rotate-50 w-10 h-10" /> */}

      {/* Actual heading */}
      <h1 className="text-4xl text-pink-800 font-bold mb-4 z-10 px-6">About Us</h1>
    </div>

        {/* Bottom: Video Section */}
        <div className="w-full max-w-4xl">
          <video
            className="w-full h-[400px] object-cover rounded shadow-md"
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
