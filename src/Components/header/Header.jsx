import React from "react";
import logo from "../../images/logo.png";

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-teal-500 via-blue-500 to-indigo-600 py-8 flex items-center justify-center shadow-lg">
      {/* Logo and Title Section */}
      <div className="flex items-center space-x-6">
        {/* Logo */}
        <img
          className="rounded-full hover:scale-110 transition-transform duration-300 shadow-lg"
          width={120}
          src={logo}
          alt="Sarkari Exam Tricks Logo"
        />

        {/* Title and Link */}
        <div className="text-center">
          <h1 className="text-white text-4xl md:text-5xl font-bold tracking-wide hover:text-gray-200 transition duration-300">
            SARKARIEXAMTRICKS
          </h1>
          <span className="mt-2 inline-block">
            <a
              href="https://sarkariexamtricks.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-300 transition duration-300 ease-in-out text-lg"
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
