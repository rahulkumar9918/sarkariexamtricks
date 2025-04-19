import React from "react";
import logo from "../../images/logo.png";

const Header = () => {
  return (
    <header className="bg-orange-800 relative h-auto flex flex-wrap items-center justify-between p-6 md:p-8 shadow-lg">
      {/* Logo Section */}
      <div className="flex items-center w-full md:w-auto">
        <img
          className="rounded-full hover:scale-110 transition-transform duration-300"
          width={80}
          src={logo}
          alt="Sarkari Exam Tricks Logo"
        />
      </div>

      {/* Title and Link Section */}
      <div className="text-center mt-4 md:mt-0 flex-1">
        <h1 className="text-white text-3xl md:text-5xl font-bold tracking-wide hover:text-gray-200 transition duration-300">
          SARKARIEXAMTRICKS
        </h1>
        <span className="mt-2 inline-block border-b-2 border-dotted">
          <a
            href="https://sarkariexamtricks.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-300 transition duration-300 ease-in-out"
          >
            <i className="fa-solid fa-magnifying-glass mr-2"></i>
            WWW.Sarkariexamtricks.com
          </a>
        </span>
      </div>
    </header>
  );
};

export default Header;
