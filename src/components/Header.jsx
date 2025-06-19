import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import logo from "../assets/logo.png";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about-us" },
  { name: "Services", path: "/services" },
  { name: "Gallery", path: "/gallery" },
  { name: "Venue", path: "/venue" },
  { name: "Contact Us", path: "/contact-us" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-pink-100 border-b border-pink-200 shadow-sm">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <img className="w-12 h-12 object-contain" src={logo} alt="logo" />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex">
          <ul className="flex gap-6 items-center">
            {navLinks.map((link, idx) => (
              <li key={idx}>
                <Link
                  to={link.path}
                  className="text-lg font-medium text-pink-800 hover:text-pink-500 transition duration-200"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(true)} className="text-pink-800 text-2xl">
            <FiMenu />
          </button>
        </div>
      </div>

      {/* Sliding Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-pink-50 shadow-lg z-50 transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-4 border-b border-pink-200">
      
          <button onClick={() => setIsMenuOpen(false)} className="text-2xl text-pink-700">
            <FiX />
          </button>
        </div>

        <ul className="flex flex-col px-6 py-4 space-y-4">
          {navLinks.map((link, idx) => (
            <li key={idx}>
              <Link
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                className="block text-lg font-medium text-pink-800 hover:text-pink-500 transition duration-200"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

   
      {isMenuOpen && (
        <div
          className="fixed inset-0  bg-opacity-30 z-40"
          onClick={() => setIsMenuOpen(false)}
        />
      )}
    </header>
  );
};

export default Header;
