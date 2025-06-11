import React from "react";
import video from "../assets/video.mp4";

const About = () => {
  return (
    <div className="container  px-4">
      <div className="flex flex-col items-center justify-center text-center space-y-6">
        {/* Top: About Content */}
        <div>
          <h1 className="text-4xl text-pink-800 mt-10 font-bold mb-4">About Us</h1>
          <p className="text-lg text-pink-600 max-w-2xl mx-auto">
            We are passionate about connecting people through events and multimedia.
            Discover who we are and what we do to create meaningful experiences.
          </p>
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
