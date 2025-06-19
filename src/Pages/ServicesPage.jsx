import React, { useEffect, useState } from "react";
import mayraImg from "../assets/mayra.jpg";
import divider from "../assets/s1.png";
import img1 from '../assets/services/1.jpg';
import img2 from '../assets/services/2.jpg';
import img3 from '../assets/services/3.jpg';
import img4 from '../assets/services/4.jpg';
import img5 from '../assets/services/5.jpg';
import img6 from '../assets/services/6.jpg';

const services = [
  { title: "Decorations", image: img4 },
  { title: "Videography", image: img3 },
  { title: "Choreography", image: img1 },
  { title: "Lodging", image: img4 },
  { title: "Bridal Makeup", image: img2 },
  { title: "Mehendi Artist", image: img6 },
  { title: "Invitation Cards", image: img5 },
  { title: "Entertainment Setups", image: img6 },
];

const ServicesPage = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [heroHeight, setHeroHeight] = useState("30vh");

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      setScrollPosition(position);
      
      const newHeight = Math.min(30 + position * 0.1, 50);
      setHeroHeight(`${newHeight}vh`);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative">
      <div
        className="relative w-full overflow-hidden transition-all duration-300"
        style={{ height: heroHeight }}
      >
        <img 
          src={mayraImg} 
          alt="Hero background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/20 flex flex-col items-center justify-center text-center px-4">
          <h1 className="font-serif text-5xl md:text-7xl font-bold text-pink-300 mb-4 tracking-wide">
            Our Services
          </h1>
    
        </div>
      </div>

      {/* Services section */}
      <section className="py-12 container mt-10 px-4">
        <h2 className="text-4xl font-bold text-center text-pink-800 mb-6">What We Do</h2>
        <div className="flex justify-center mb-8">
          <img src={divider} alt="Divider" className="h-6" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-pink-200 rounded-lg shadow-md overflow-hidden hover:scale-105 transition-transform duration-300"
              style={{
                opacity: 0,
                transform: 'translateY(20px)',
                animation: `fadeInUp 0.7s ease-out ${index * 0.30}s forwards`
              }}
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4 text-center">
                <h3 className="text-lg font-semibold text-pink-700">{service.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      <style jsx>{`
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

export default ServicesPage;