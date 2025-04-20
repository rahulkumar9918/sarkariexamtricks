import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logo.png";
import headerImage from "../../images/headerImg.png"; // Import the same image as in the header

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="mt-0 font-bold">
      {/* Mobile Navbar */}
      <div className="flex justify-between items-center md:hidden h-14 p-3 relative bg-black">
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        {/* Logo */}
        <div className="relative z-10 text-lg">
          <img
            className="md:hidden rounded-full"
            width={40}
            src={logo}
            alt="Sarkari Exam Tricks Logo"
          />
        </div>

        {/* Toggle Button */}
        <button
          className="relative z-10 md:hidden text-white text-2xl"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          ☰
        </button>
      </div>

      {/* Navbar Links */}
      <div
        className={`fixed md:static md:flex md:justify-center md:items-center top-0 left-0 h-full md:h-auto w-full md:w-auto text-white transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 transition-transform duration-300 ease-in-out z-50`}
        style={{
          backgroundImage: isOpen
            ? `url(${headerImage})`
            : "linear-gradient(to right, #1e3a8a, #2563eb, #3b82f6)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        {/* Close Button for Mobile */}
        <button
          className="text-white text-2xl absolute top-4 right-4 md:hidden z-10"
          onClick={toggleMenu}
          aria-label="Close Menu"
        >
          ✕
        </button>

        {/* Links */}
        <div
          className={`relative z-10 flex flex-col md:flex-row items-center py-2 justify-center h-full md:h-auto mt-16 md:mt-0 space-y-6 md:space-y-0 md:space-x-6`}
        >
          {[
            { to: "/", label: "Home" },
            { to: "/latestjobs", label: "Latest Jobs" },
            { to: "/result", label: "Results" },
            { to: "/admitcard", label: "Admit Card" },
            { to: "/answerkey", label: "Answer Key" },
            { to: "/syllabus", label: "Syllabus" },
            { to: "https://sarkariexamtricks.com/", label: "Search" },
            { to: "/contactUs", label: "Contact Us" },
          ].map((link, index) => (
            <Link
              key={index}
              to={link.to}
              className="relative text-lg p-2 md:p-0 hover:text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-blue-500 to-indigo-500 transition duration-300 group"
              onClick={toggleMenu}
            >
              {link.label}
              {/* Sparkling Bottom Line Animation */}
              <span className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-teal-400 via-blue-500 to-indigo-500 transition-all duration-300 ease-in-out group-hover:w-full"></span>
            </Link>
          ))}
        </div>
      </div>

      {/* Overlay for Mobile */}
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden`}
        onClick={toggleMenu}
      ></div>
    </div>
  );
};

export default Navbar;
