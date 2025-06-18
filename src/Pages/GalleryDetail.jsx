import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import img1 from "../assets/party/1.jpg";
import img2 from "../assets/party/2.jpg";
import img3 from "../assets/party/3.jpg";
import img4 from "../assets/party/4.jpg";
import img5 from "../assets/party/5.jpg";
import img7 from "../assets/party/7.jpg";
import img8 from "../assets/party/8.jpg";
import img9 from "../assets/party/9.jpg";
import img10 from "../assets/party/10.jpg";
import img11 from "../assets/party/11.jpg";
import img12 from "../assets/party/12.jpg";
import img13 from "../assets/party/13.jpg";
import img14 from "../assets/party/14.jpg";
import img15 from "../assets/party/15.jpg";
import img16 from "../assets/party/16.jpg";
import img17 from "../assets/party/17.jpg";
import img18 from "../assets/party/18.jpg";
import img19 from "../assets/party/19.jpg";
import img20 from "../assets/party/20.jpg";
import img21 from "../assets/party/21.jpg";
import img22 from "../assets/party/22.jpg";
import img23 from "../assets/party/23.jpg";
import img24 from "../assets/party/24.jpg";
import img25 from "../assets/party/25.jpg";
import img26 from "../assets/party/26.jpg";

import img27 from '../assets/night/1.jpg'
import img28 from '../assets/night/2.jpg'
import img29 from '../assets/night/3.jpg'
import img30 from '../assets/night/4.png'


import img31 from "../assets/day/1.jpg";
import img32 from "../assets/day/2.jpg";
import img33 from "../assets/day/3.jpg";
import img34 from "../assets/day/4.jpg";
import img35 from "../assets/day/5.jpg";
import img36 from "../assets/day/6.jpg";
import img37 from "../assets/day/7.jpg";
import img38 from "../assets/day/8.jpg";
import img39 from "../assets/day/9.jpg";
import img40 from "../assets/day/10.jpg";
import img41 from "../assets/day/11.jpg";
import img42 from "../assets/day/12.jpg";
import img43 from "../assets/day/13.jpg";
import img44 from "../assets/day/14.jpg";
import img45 from "../assets/day/15.jpg";
import img46 from "../assets/day/16.jpg";
import img47 from "../assets/day/17.jpg";
import img48 from "../assets/day/18.jpg";
import img49 from "../assets/day/19.jpg";
import img50 from "../assets/day/20.jpg";

import img51 from '../assets/indor/1.jpg'
import img52 from '../assets/indor/2.PNG'
import img53 from '../assets/indor/3.jpg'
import img54 from '../assets/indor/4.jpg'
import img55 from '../assets/indor/5.jpg'
import img56 from '../assets/indor/6.jpg'
import img57 from '../assets/indor/7.jpg'

import img58 from '../assets/carnival/1.jpeg';
import img59 from '../assets/carnival/2.jpg';
import img60 from '../assets/carnival/3.jpg';
import img61 from '../assets/carnival/4.jpg';
import img62 from '../assets/carnival/5.jpg';
import img63 from '../assets/carnival/6.jpg';
import img64 from '../assets/carnival/7.jpg';
import img65 from '../assets/carnival/8.jpg';
import img66 from '../assets/carnival/9.jpg';
import img67 from '../assets/carnival/10.jpg';
import img68 from '../assets/carnival/11.jpg';
import img69 from '../assets/carnival/12.jpg';


const imagesPerCategory = {
  "party": [img1, img2, img3, img4, img5, img7, img8, img9, img10,img11, img12, img13, img14, img15,img16, img17, img18, img19, img20,img21, img22, img23, img24, img25, img26],
  "night": [ img27, img28, img29, img30],
  "day": [img35, img32, img33, img34, img31,img36, img37, img38, img39, img40,img41, img42, img43, img44, img45,img46, img47, img48, img49, img50],
  "indoor": [img51, img52, img53, img54, img55,img56,img57],
  "carnival": [ img58, img59, img60, img61, img62, img63,img64, img65, img66, img67, img68, img69 ],
};

const GalleryDetail = () => {
  const { category } = useParams();
  const navigate = useNavigate();
  const images = imagesPerCategory[category] || [];

  const formatTitle = (slug) =>
    slug
      .split("-")
      .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
      .join(" ");

      const [selectedImage, setSelectedImage] = useState(null);

  return (
 <div className="p-4 max-w-5xl mx-auto">
  <div className="relative flex items-center justify-center mt-10 mb-6">
    <button
      onClick={() => navigate(-1)}
      className="absolute left-0 text-pink-600 hover:underline"
    >
      ← Back
    </button>
    <h2 className="text-3xl font-bold text-pink-700 text-center">
      {formatTitle(category)}
    </h2>
  </div>

  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
    {images.map((src, idx) => (
      <img
        key={idx}
        src={src}
        alt={`image-${idx}`}
        onClick={() => setSelectedImage(src)}
        className="w-full h-85 object-cover rounded shadow cursor-pointer transition-transform hover:scale-105"
      />
    ))}
  </div>

  {/* Modal for full image view */}
  {selectedImage && (
    <div
      className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
      onClick={() => setSelectedImage(null)}
    >
      <img
        src={selectedImage}
        alt="Full view"
        className="max-w-full max-h-full object-contain rounded"
      />
    </div>
  )}
</div>



  );
};

export default GalleryDetail;
