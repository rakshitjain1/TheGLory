import React, { useEffect, useRef } from "react";
import mayraImg from "../assets/mayra.jpg";
import divider from "../assets/s1.png";

const services = [
  { title: "Decorations", image: mayraImg },
  { title: "Videography", image: mayraImg },
  { title: "Choreography", image: mayraImg },
  { title: "Lodging", image: mayraImg },
  { title: "Bridal Makeup", image: mayraImg },
  { title: "Mehendi Artist", image: mayraImg },
  { title: "Invitation Cards", image: mayraImg },
  { title: "Entertainment Setups", image: mayraImg },
];

const ServicesPage = () => {
  const elementsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            // Add staggered delay animation
            setTimeout(() => {
              entry.target.classList.add("opacity-100", "translate-y-0");
              entry.target.classList.remove("opacity-0", "translate-y-10");
            }, index * 300); // 150ms gap between each card
          }
        });
      },
      { threshold: 0.1 }
    );

    elementsRef.current.forEach(el => {
      if (el) observer.observe(el);
    });

    return () => {
      elementsRef.current.forEach(el => {
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  return (
    <div className="  ">

    <section className=" py-12 container  mt-10 px-4">
      <h2 className="text-4xl font-bold text-center text-pink-800 mb-6">What We Do</h2>
      <div className="flex justify-center mb-8">
        <img src={divider} alt="Divider" className="h-6" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {services.map((service, index) => (
          <div
            key={index}
            ref={el => (elementsRef.current[index] = el)}
            className="bg-pink-200 rounded-lg shadow-md overflow-hidden transform transition-all duration-700 opacity-0 translate-y-10"
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
    </div>
  );
};

export default ServicesPage;
