import React from "react";
import logo from "../../images/logo.png";

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-teal-200 via-blue-200 to-indigo-200 py-6 md:py-8 flex items-center justify-center shadow-lg">
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
          <h1 className="text-gray-800 text-3xl md:text-5xl font-bold tracking-wide hover:text-gray-600 transition duration-300">
            SARKARIEXAMTRICKS
          </h1>
          <span className="mt-2 inline-block">
            <a
              href="https://sarkariexamtricks.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-800 hover:text-gray-600 transition duration-300 ease-in-out text-base md:text-lg"
            >
              <i className="fa-solid fa-magnifying-glass mr-2"></i>
              WWW.Sarkariexamtricks.com
            </a>
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;
