import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaGoogle,
  FaYoutube,
  FaPinterestP,
} from "react-icons/fa";
import logo from '../assets/logo.png'
const Footer = () => {
  return (
    <footer className="mt-10"> {/* Added margin-top here */}
      <div className=" text-pink-700 py-8 px-4 text-center">
        <div className="mb-4 ">
          <img
            src={logo}
            alt="The Glory Event"
            className="mx-auto  mb-2 w-26"
          />
          <p className="text-sm">
            <Link to="/bangalore" className="hover:underline">Bangalore</Link> |{" "}
            <Link to="/cochin" className="hover:underline">Cochin</Link> |{" "}
            <Link to="/calicut" className="hover:underline">Calicut</Link> |{" "}
            <Link to="/kannur" className="hover:underline">Kannur</Link> |{" "}
            <Link to="/mangalore" className="hover:underline">Mangalore</Link> |{" "}
            <Link to="/delhi" className="hover:underline">Delhi</Link>
          </p>
          <p className="text-sm mt-2 text-pink-500">
            Please enable footer phone in Theme Options.
          </p>
          <p className="text-sm text-pink-500">
            TheGloryEvent1@gmail.com
          </p>
        </div>

        <div className="flex justify-center space-x-4 my-4 text-lg">
          <a href="#" aria-label="Facebook"><FaFacebookF /></a>
          <a href="#" aria-label="Instagram"><FaInstagram /></a>
          <a href="#" aria-label="Google"><FaGoogle /></a>
          <a href="#" aria-label="YouTube"><FaYoutube /></a>
          <a href="#" aria-label="Pinterest"><FaPinterestP /></a>
        </div>

        <div className="text-xs text-pink-500 border-t border-pink-700 pt-4">
          © 2025 <span className="font-semibold text-pink-700">The Glory Event</span>. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
