import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import img from "../assets/1.jpg"; // Replace this with your images

const galleryData = [
  { title: "Wedding Moments", photos: [img, img, img, img] },
  { title: "Nature Vibes", photos: [img, img, img, img] },
  { title: "Adventure Travel", photos: [img, img, img, img] },
  { title: "Family Time", photos: [img, img, img, img] },
  { title: "Delicious Food", photos: [img, img, img, img] },
];

Modal.setAppElement("#root");

const Gallery = () => {
  const [modalImage, setModalImage] = useState(null);

  const openModal = (imgSrc) => {
    setModalImage(imgSrc);
  };

  const closeModal = () => {
    setModalImage(null);
  };

  useEffect(() => {
    document.body.style.overflow = modalImage ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [modalImage]);

  return (
    <div className="p-4 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-6">Image Gallery</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {galleryData.map((box, index) => (
          <div key={index} className="border shadow-md p-4 rounded bg-white">
            <h3 className="text-xl font-semibold mb-3 text-center text-pink-700">
              {box.title}
            </h3>

            <Swiper
              modules={[Navigation, Pagination]}
              spaceBetween={10}
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
              className="mb-2"
            >
              {box.photos.map((photo, idx) => (
                <SwiperSlide key={idx}>
                  <img
                    src={photo}
                    alt={`${box.title}-${idx}`}
                    className="w-full h-64 object-cover rounded cursor-pointer"
                    onClick={() => openModal(photo)}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        ))}
      </div>

      {/* Fullscreen Modal */}
      <Modal
        isOpen={!!modalImage}
        onRequestClose={closeModal}
        contentLabel="Image Preview"
        style={{
          overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.85)",
            zIndex: 50,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          },
          content: {
            inset: "auto",
            padding: 0,
            border: "none",
            background: "transparent",
            overflow: "hidden",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          },
        }}
      >
        <div onClick={closeModal} className="cursor-pointer">
          <img
            src={modalImage}
            alt="Full View"
            className="max-w-[90vw] max-h-[90vh] object-contain rounded-lg shadow-2xl"
          />
        </div>
      </Modal>
    </div>
  );
};

export default Gallery;
