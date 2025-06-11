import React from "react";
import { Link } from "react-router-dom";



// Navigation links
const navLinks = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about-us" },
  { name: "Services", path: "/services" },
  { name: "Gallery", path: "/gallery" },
  { name: "Venue", path: "/venue" },
  { name: "Contact Us", path: "/contact-us" },
];

const Header = () => {
  return (
    <header className="bg-pink-100 border-b border-pink-200 shadow-sm">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        
        {/* Logo Section - 30% width */}
        <div className="w-[30%] h-[55px] flex items-center">
          <Link to="/">
            <span className="text-3xl  font-extrabold text-pink-700">The Glory Event</span>
          </Link>
        </div>

        {/* Navigation + Icons - 70% width */}
        <nav className="w-[70%]">
          <ul className="flex justify-end gap-6 items-center">
            {navLinks.map((link, idx) => (
              <li key={idx}>
                <Link
                  to={link.path}
                  className="text-lg font-medium text-black hover:text-pink-700 transition duration-200"
                >
                  {link.name}
                </Link>
              </li>
            ))}

       
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
