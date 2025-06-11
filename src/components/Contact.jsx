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
    type="date"
    name="weddingDate"
    value={formData.weddingDate}
    onChange={handleChange}
    required
    className="w-full border border-pink-400 p-2 rounded text-pink-700 bg-pink-50 accent-pink-500"
  />
  {!formData.weddingDate && (
    <span className="absolute left-3 top-2 text-pink-400 pointer-events-none text-sm">
      Wedding Date
    </span>
  )}

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

      <div>
        <p className="mb-2 text-pink-800  font-semibold">Select Functions:</p>
        <div className="grid grid-cols-2 gap-2">
          {functionOptions.map((func) => (
            <label key={func} className="inline-flex text-pink-700 items-center space-x-2">
              <input
                type="checkbox"
                value={func}
                checked={formData.functions.includes(func)}
                onChange={handleCheckboxChange}
                className="text-pink-500 accent-pink-500"
          
              />
              <span>{func}</span>
            </label>
          ))}
        </div>
      </div>

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
