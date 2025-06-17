import React, { useState } from "react";
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

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      console.log("Form Data Submitted:", formData);
      setSubmitSuccess(true);
      setFormData({
        name: "",
        weddingDate: "",
        email: "",
        phone: "",
        functions: [],
        description: "",
      });
    } catch (error) {
      console.error("Submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container min-h-screen py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-pink-50 to-white">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-8 bg-white rounded-2xl shadow-xl overflow-hidden">
          {/* Left Side - Text Content */}
          <div className="lg:w-1/2 p-12 flex flex-col justify-center items-center text-center bg-pink-50">
            <h2 className="text-4xl font-bold text-pink-800 mb-6">
              Get in Touch With Us
            </h2>
            <p className="text-xl text-pink-600 mb-8">
              Planning your special day? Contact us today, and let's make your wedding dreams come true.
            </p>
            <div className="space-y-4 text-left w-full max-w-md">
              <div className="flex items-start">
                <svg className="h-6 w-6 text-pink-600 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-pink-700">Personalized wedding planning</span>
              </div>
              <div className="flex items-start">
                <svg className="h-6 w-6 text-pink-600 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-pink-700">Expert decoration services</span>
              </div>
              <div className="flex items-start">
                <svg className="h-6 w-6 text-pink-600 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-pink-700">Stress-free coordination</span>
              </div>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="lg:w-1/2 p-8 md:p-12 relative"
            style={{
              backgroundImage: `url(${bg})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }} 
          >
            {submitSuccess ? (
              <div className="text-center py-12">
                <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full mb-4">
                  <svg
                    className="h-6 w-6 text-green-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-medium text-pink-800 mb-2">
                  Thank You!
                </h3>
                <p className="text-pink-600 mb-6">
                  Your message has been sent successfully. We'll contact you soon.
                </p>
                <button
                  onClick={() => setSubmitSuccess(false)}
                  className="px-6 py-2 bg-pink-600 text-white rounded-md hover:bg-pink-700 transition"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <>
                <div className="absolute top-0 left-0 w-full h-full opacity-10 z-0"></div>
                <div className="relative z-10">
                  <h2 className="text-3xl font-bold text-pink-800 mb-8 text-center">
                    Contact Form
                  </h2>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-pink-700 mb-1">
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Your name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border text-pink-700 border-pink-300 bg-white focus:ring-pink-200 focus:border-transparent placeholder-pink-400"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-pink-700 mb-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="your.email@example.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border text-pink-700 border-pink-300 bg-white focus:ring-pink-200 focus:border-transparent placeholder-pink-400"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-pink-700 mb-1">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        placeholder="+1 (123) 456-7890"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border text-pink-700 border-pink-300 bg-white focus:ring-pink-200 focus:border-transparent placeholder-pink-400"
                      />
                    </div>

                    <div>
                      <label htmlFor="description" className="block text-sm font-medium text-pink-700 mb-1">
                        Additional Information
                      </label>
                      <textarea
                        id="description"
                        name="description"
                        placeholder="Tell us about your event..."
                        value={formData.description}
                        onChange={handleChange}
                        rows="4"
                        className="w-full px-4 py-3 rounded-lg border text-pink-700 border-pink-300 bg-white focus:ring-pink-200 focus:border-transparent placeholder-pink-400"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`w-full mt-5 py-3 px-4 bg-pink-600 hover:bg-pink-700 text-white font-medium rounded-lg transition ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                    >
                      {isSubmitting ? (
                        <span className="flex items-center justify-center">
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Processing...
                        </span>
                      ) : 'Submit'}
                    </button>
                  </form>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;