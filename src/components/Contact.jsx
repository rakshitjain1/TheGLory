import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    weddingDate: "",
    email: "",
    phone: "",
    functions: [],
    description: "",
  });

  const functionOptions = ["Haldi", "Mehendi", "Sangeet", "Reception", "Mayra"];

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
    // Here you can send the data to backend
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-xl mx-auto bg-pink-200 p-6 rounded-md shadow-md space-y-4 container"
    >
      <h2 className="text-xl text-pink-800 font-bold mb-4 text-center">Contact Us</h2>

      <input
        type="text"
        name="name"
        placeholder="Full Name"
        value={formData.name}
        onChange={handleChange}
        required
        className="w-full border bg-white border-pink-400 p-2 rounded placeholder-pink-400"
      />

 

      <input
        type="email"
        name="email"
        placeholder="Email Address"
        value={formData.email}
        onChange={handleChange}
        required
        className="w-full border bg-white border-pink-400 p-2 rounded placeholder-pink-400"
      />

      <input
        type="tel"
        name="phone"
        placeholder="Phone Number"
        value={formData.phone}
        onChange={handleChange}
        required
        className="w-full border bg-white border-pink-400 p-2 rounded placeholder-pink-400"
      />

     
      
      <textarea
        name="description"
        placeholder="Additional Information"
        value={formData.description}
        onChange={handleChange}
        rows="4"
        className="w-full border bg-white border-pink-400 p-2 rounded placeholder-pink-400"
      />

      <button
        type="submit"
        className="w-full bg-pink-600 text-white py-2 rounded hover:bg-pink-700 transition"
      >
        Submit
      </button>
    </form>
  );
};

export default Contact;
