import React from "react";
import logo from "../../images/logo.png";
import headerImage from "../../images/headerImg.png"; // Import the local image

const Header = () => {
  return (
    <header
      className="relative w-full bg-cover bg-center shadow-lg"
      style={{
        backgroundImage: `url(${headerImage})`, // Use the local image as the background
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-80"></div>

      {/* Content */}
      <div className="relative z-10 py-6 md:py-8 flex items-center justify-center">
        {/* Logo and Title Section */}
        <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6">
          {/* Logo */}
          <img
            className="rounded-full hover:scale-110 transition-transform duration-300 shadow-lg w-24 md:w-32"
            src={logo}
            alt="Sarkari Exam Tricks Logo"
          />

          {/* Title and Link */}
          <div className="text-center md:text-left">
            <h1 className="text-teal-400 text-3xl md:text-5xl font-bold tracking-wide hover:text-blue-300 transition duration-300">
              SARKARIEXAMTRICKS
            </h1>
            <span className="mt-2 inline-block">
              <a
                href="https://sarkariexamtricks.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-indigo-300 transition duration-300 ease-in-out text-base md:text-lg"
              >
                <i className="fa-solid fa-magnifying-glass mr-2"></i>
                WWW.Sarkariexamtricks.com
              </a>
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
