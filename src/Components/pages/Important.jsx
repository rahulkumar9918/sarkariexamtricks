import React from "react";

const Important = () => {
  return (
    <div className="border-2 border-gray-300 rounded-lg shadow-lg bg-white min-h-[700px] flex flex-col">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-teal-500 via-blue-500 to-indigo-500 text-center text-white p-4 rounded-t-lg">
        <h3 className="text-3xl font-bold tracking-wide">Important</h3>
      </div>

      {/* List Section */}
      <ul className="list-disc list-inside pl-6 space-y-3 mt-6 h-[550px] overflow-y-auto scrollbar-thin scrollbar-thumb-blue-500 scrollbar-track-gray-200 flex-grow">
        {[
          { label: "UP Scholarship Online Form 2024", href: "/" },
          { label: "SSC OTR Online Form 2024", href: "/" },
          { label: "Sahara Refund Portal Online Registration 2023", href: "/" },
          {
            label:
              "UP Family ID Ek Parivar Ek Pahchan Online Registration 2023",
            href: "/",
          },
          {
            label: "UPPSC One Time Registration OTR Online Form 2023",
            href: "/",
          },
        ].map((item, index) => (
          <li key={index} className="group">
            <a
              href={item.href}
              className="text-gray-800 text-sm hover:text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-blue-500 to-indigo-500 transition duration-300 relative pb-1 font-medium"
            >
              {item.label}
              {/* Sparkling Bottom Line Animation */}
              <span className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-teal-400 via-blue-500 to-indigo-500 transition-all duration-300 ease-in-out group-hover:w-full"></span>
            </a>
          </li>
        ))}
      </ul>

      {/* View More Button */}
      <div className="bg-white border-t-2 border-gray-300 py-4 shadow-lg">
        <div className="flex justify-center">
          <a
            href="/important"
            className="inline-block bg-gradient-to-r from-teal-500 via-blue-500 to-indigo-500 text-white px-6 py-2 rounded-md hover:scale-105 transition duration-300 shadow-md hover:shadow-lg"
          >
            View More
          </a>
        </div>
      </div>
    </div>
  );
};

export default Important;
