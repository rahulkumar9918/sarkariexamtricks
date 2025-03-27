import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">

      <div className="container mx-auto flex flex-wrap justify-around mt-8">
        {/* Quick Links */}
        <div className="w-full sm:w-1/3 md:w-1/4 mb-6">
          <h3 className="text-lg font-semibold mb-4 border-b border-gray-700 pb-2">
            Quick Links
          </h3>
          <ul className="space-y-2">
            {[
              "X",
              "Telegram",
              "WhatsApp",
              "Instagram",
              "Threads",
              "Facebook",
              "LinkedIn",
              "YouTube",
              "All Board Exams",
              "Contact Us",
              "Privacy Policy",
            ].map((item, index) => (
              <li key={index}>
                <a
                  href="https://sarkariexamtricks.com/"
                  className="hover:text-blue-400 transition-colors"
                >
                  Sarkari Exam Tricks @{item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Apps */}
        <div className="w-full sm:w-1/3 md:w-1/4 mb-6">
          <h3 className="text-lg font-semibold mb-4 border-b border-gray-700 pb-2">
            Apps
          </h3>
          <ul className="space-y-2">
            {["Android App", "Apple iOS App"].map((app, index) => (
              <li key={index}>
                <a
                  href="https://sarkariexamtricks.com/"
                  className="hover:text-blue-400 transition-colors"
                >
                  {app}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* More */}
        <div className="w-full sm:w-1/3 md:w-1/4 mb-6">
          <h3 className="text-lg font-semibold mb-4 border-b border-gray-700 pb-2">
            More
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-sm">
            {["BPSC", "UPSSSC", "CCC", "UP-scholarship", "IBPS", "SSC", "UPSC", "Air Force", "Navy", "RPSC", "Delhi DSSB", "Railway", "UPPCS", "HSSC", "TET", "Coast Guard", "Police Vacancy"].map((exam, index) => (
              <a
                key={index}
                href="https://sarkariexamtricks.com/"
                className="hover:text-blue-400 transition-colors"
              >
                {exam}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
