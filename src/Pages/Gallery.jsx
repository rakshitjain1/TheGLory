import React from "react";
import { useNavigate } from "react-router-dom";

import partyImg from '../assets/party/1.jpg'
import nightImg from'../assets/night/1.jpg'
import dayImg from '../assets/day/5.jpg'
import indoorImg from '../assets/indor/1.jpg'
import CarnivalImg from '../assets/carnival/1.jpeg'
import divider from '../assets/s1.png'

const galleryData = [
  { title: "Party", slug: "party", cover: partyImg },
  { title: "Night", slug: "night", cover: nightImg},
  { title: "Day", slug: "day", cover: dayImg },
  { title: "Indoor", slug: "indoor", cover: indoorImg },
  { title: "Carnival", slug: "carnival", cover: CarnivalImg },
];

const Gallery = () => {
  const navigate = useNavigate();

  const handleClick = (slug) => {
    navigate(`/gallery/${slug}`);
  };

  return (
    <div className="p-4 max-w-6xl mt-8 mx-auto">
      <h2 className="text-3xl font-bold text-pink-700 text-center mb-6">Image Gallery</h2>
      <div className="flex justify-center mb-8">
        <img src={divider} alt="Divider" className="h-6" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {galleryData.map((item, index) => (
          <div
            key={index}
            onClick={() => handleClick(item.slug)}
            className="border shadow-md p-4 rounded bg-pink-200 cursor-pointer hover:shadow-lg transition"
            style={{
              opacity: 0,
              transform: 'translateY(20px)',
              animation: `fadeInUp 0.7s ease-out ${index * 0.60}s forwards`
            }}
          >
            <img
              src={item.cover}
              alt={item.title}
              className="w-full h-48 object-cover rounded mb-3"
            />
            <h3 className="text-xl font-semibold text-center text-pink-700">
              {item.title}
            </h3>
          </div>
        ))}
      </div>

      {/* Animation styles */}
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default Gallery;