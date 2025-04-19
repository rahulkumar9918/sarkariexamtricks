import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-bold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            {[
              {
                label: "Sarkari Exam Tricks @X",
                href: "https://sarkariexamtricks.com/",
              },
              {
                label: "Sarkari Exam Tricks @Telegram",
                href: "https://sarkariexamtricks.com/",
              },
              {
                label: "Sarkari Exam Tricks @WhatsApp",
                href: "https://sarkariexamtricks.com/",
              },
              {
                label: "Sarkari Exam Tricks @Instagram",
                href: "https://sarkariexamtricks.com/",
              },
              {
                label: "Privacy Policy",
                href: "https://sarkariexamtricks.com/",
              },
            ].map((link, index) => (
              <li key={index}>
                <a
                  href={link.href}
                  className="hover:text-gray-400 transition duration-300 ease-in-out"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Apps */}
        <div>
          <h3 className="text-lg font-bold mb-4">Apps</h3>
          <ul className="space-y-2">
            {[
              { label: "Android App", href: "https://sarkariexamtricks.com/" },
              {
                label: "Apple iOS App",
                href: "https://sarkariexamtricks.com/",
              },
            ].map((app, index) => (
              <li key={index}>
                <a
                  href={app.href}
                  className="hover:text-gray-400 transition duration-300 ease-in-out"
                >
                  {app.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* More */}
        <div>
          <h3 className="text-lg font-bold mb-4">More</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
            {[
              "BPSC",
              "UPSSSC",
              "CCC",
              "IBPS",
              "SSC",
              "UPSC",
              "Navy",
              "Railway",
              "Police Vacancy",
            ].map((item, index) => (
              <a
                key={index}
                href="https://sarkariexamtricks.com/"
                className="hover:text-gray-400 transition duration-300 ease-in-out"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="bg-gray-900 py-4 text-center">
        <p className="text-sm">
          © {new Date().getFullYear()} Sarkari Exam Tricks. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
