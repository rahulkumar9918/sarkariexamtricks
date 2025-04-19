import React from "react";

const Syllabus = () => {
  return (
    <div className="border-2 border-gray-300 rounded-lg shadow-lg bg-white">
      {/* Header Section */}
      <div className="bg-red-600 text-center text-white p-2 rounded-t-lg">
        <h3 className="text-2xl font-semibold">Syllabus</h3>
      </div>

      {/* List Section */}
      <ul className="list-disc list-inside pl-6 space-y-3 mt-4">
        {[
          { label: "UPSSSC Forest Guard 2023 Syllabus", href: "/" },
          { label: "UP Police Constable Syllabus 2024", href: "/" },
          {
            label: "UP Police Computer Operator, Programmer Syllabus 2024",
            href: "/",
          },
          { label: "UP Police SI / ASI Syllabus 2024", href: "/" },
          { label: "UPSSSC Stenographer Syllabus 2023", href: "/" },
        ].map((item, index) => (
          <li key={index} className="group">
            <a
              href={item.href}
              className="text-blue-800 hover:text-blue-600 transition duration-300 relative"
            >
              {item.label}
              {/* Sparkling Bottom Line Animation */}
              <span className="absolute bottom-0 left-0 w-0 h-1 bg-blue-600 transition-all duration-300 ease-in-out group-hover:w-full"></span>
            </a>
          </li>
        ))}
      </ul>

      {/* View More Button */}
      <div className="text-center mt-6">
        <a
          href="/syllabus"
          className="inline-block bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-300 shadow-md hover:shadow-lg"
        >
          View More
        </a>
      </div>
    </div>
  );
};

export default Syllabus;
