import React, { useState } from "react";
import img from "../assets/2.jpg";
import bg from "../assets/bg.png";

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
    <div className="flex flex-col md:flex-row max-w-6xl mx-auto p-4 gap-6  justify-center relative overflow-hidden">
      {/* Left Side Image */}
      <div className="w-full md:w-1/2 flex justify-center items-center">
        <img
          src={img}
          alt="Wedding Decoration"
          className="w-full h-[400px] md:h-[500px] rounded-lg shadow-md object-cover"
        />
      </div>

      {/* Right Side - Form with Background */}
      <div
        className="w-full md:w-1/2 relative z-10 flex items-center justify-center rounded-lg overflow-hidden"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize:"cover",
          backgroundPosition: "center",
        }}
      >
        {/* Semi-transparent overlay */}
        <div className=" w-full h-full p-6">
          <form
            onSubmit={handleSubmit}
            className="space-y-4 z-30"
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
    </div>
  );
};

export default Contact;
