import React, { useState } from "react";
import leafImg from "../assets/leaf.png";
import img from "../assets/2.jpg";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    weddingDate: "",
    email: "",
    phone: "",
    functions: [],
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    setFormData((prev) => {
      const updatedFunctions = checked
        ? [...prev.functions, value]
        : prev.functions.filter((f) => f !== value);
      return { ...prev, functions: updatedFunctions };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    alert("Form submitted successfully!");
  };

  return (
    <div className="flex flex-col md:flex-row max-w-6xl mx-auto p-4 gap-6 items-center justify-center relative overflow-hidden">
      {/* Left Side Image */}
      <div className="w-full md:w-1/2 flex justify-center items-center">
        <img
          src={img}
          alt="Wedding Decoration"
          className="w-full h-auto rounded-lg shadow-md object-cover"
        />
      </div>

      {/* Right Side - Form */}
      <div className="w-full md:w-1/2 relative z-10 img">
        {/* Corner Decorative Leaves */}
        <img
          src={leafImg}
          alt="decor"
          className="absolute w-24 h-24   left-0 rotate-[-30deg] z-50 opacity-70"
        />
        <img
          src={leafImg}
          alt="decor"
          className="absolute w-24 h-24 top-0 right-0 rotate-[20deg] z-50 opacity-70"
        />
        <img
          src={leafImg}
          alt="decor"
          className="absolute w-24 h-24 bottom-0 left-0 rotate-[180deg] z-50 opacity-70"
        />
        <img
          src={leafImg}
          alt="decor"
          className="absolute w-24 h-24 bottom-0 right-0 rotate-[140deg] z-50 opacity-70"
        />

        <form
          onSubmit={handleSubmit}
          className="relative bg-pink-100 p-6 rounded-md shadow-md space-y-4 z-30"
        >
          <h2 className="text-xl text-pink-800 font-bold mb-4 text-center">
            Contact Us
          </h2>

          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full border bg-white border-pink-400 text-pink-500 p-2 rounded placeholder-pink-400"
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full border bg-white border-pink-400 p-2 rounded text-pink-500 placeholder-pink-400"
          />

          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full border bg-white border-pink-400 p-2 text-pink-500 rounded placeholder-pink-400"
          />

          <textarea
            name="description"
            placeholder="Additional Information"
            value={formData.description}
            onChange={handleChange}
            rows="4"
            className="w-full border bg-white border-pink-400 p-2 rounded text-pink-500 placeholder-pink-400"
          />

          <button
            type="submit"
            className="w-full bg-pink-600 text-white py-2 rounded hover:bg-pink-700 transition"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
