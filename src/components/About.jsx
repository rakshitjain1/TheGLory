import React from "react";
import video from "../assets/video.mp4"

const About = () => {
  return (
    <div className="container ">
    <div className="  flex w-full h-screen mt-10">
      {/* Left Side: About (50%) */}
      <div className="w-1/2 bg-pink-200 p-8 flex items-center justify-center"
      style={{
           color:"#000"
      }}>
        <div>
          <h1 className="text-4xl text-pink-800 font-bold mb-4">About Us</h1>
          <p className="text-lg text-pink-600">
            We are passionate about connecting people through events and multimedia.
            Discover who we are and what we do to create meaningful experiences.
          </p>
        </div>
      </div>

  

        {/* Bottom 50% of right = Video */}
        <div className="w-1/2 bg-black p-4 flex items-center justify-center">
          <video className="w-full h-full object-cover rounded" controls>
            <source src={video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
     </div>
  );
};

export default About;
