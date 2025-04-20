import React from "react";
import { Link } from "react-router-dom";

const Admission = () => {
  return (
    <div className="border-2 border-gray-300 rounded-lg shadow-lg bg-white min-h-[700px] flex flex-col">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-teal-500 via-blue-500 to-indigo-500 text-center text-white p-4 rounded-t-lg">
        <h3 className="text-3xl font-bold tracking-wide">Admission</h3>
      </div>

      {/* List Section */}
      <ul className="list-disc list-inside pl-6 space-y-3 mt-6 h-[550px] overflow-y-auto scrollbar-thin scrollbar-thumb-blue-500 scrollbar-track-gray-200 flex-grow">
        {[
          { label: "UPNEET UG 2024 Online Counseling", to: "/exam-detail" },
          { label: "GATE 2025 Online Form", to: "/exam-detail" },
          {
            label: "BHU IMS B.Pharma, M.Pharma Online Form 2024",
            to: "/exam-detail",
          },
          { label: "NTA NEET UG 2024 Online Counselling", to: "/exam-detail" },
          { label: "UPBED 2024 Online Counselling", to: "/exam-detail" },
          {
            label: "Allahabad University CRET Online Form 2024",
            to: "/exam-detail",
          },
          { label: "MP CPCT 2024 Online Form", to: "/exam-detail" },
          {
            label: "Allahabad University CUET Phase II Registration 2024",
            to: "/exam-detail",
          },
          { label: "MPESB PNST / GNMTST Online Form 2024", to: "/exam-detail" },
          { label: "UPRTOU Admissions Online Form", to: "/exam-detail" },
          { label: "NVS Class 6th Admissions 2025", to: "/exam-detail" },
          { label: "UP Scholarship Online Form 2024", to: "/exam-detail" },
        ].map((item, index) => (
          <li key={index} className="group">
            <Link
              to={item.to}
              className="text-gray-800 text-sm hover:text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-blue-500 to-indigo-500 transition duration-300 relative pb-1 font-medium"
            >
              {item.label}
              {/* Sparkling Bottom Line Animation */}
              <span className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-teal-400 via-blue-500 to-indigo-500 transition-all duration-300 ease-in-out group-hover:w-full"></span>
            </Link>
          </li>
        ))}
      </ul>

      {/* View More Button */}
      <div className="bg-white border-t-2 border-gray-300 py-4 shadow-lg">
        <div className="flex justify-center">
          <Link
            to="/admissions"
            className="inline-block bg-gradient-to-r from-teal-500 via-blue-500 to-indigo-500 text-white px-6 py-2 rounded-md hover:scale-105 transition duration-300 shadow-md hover:shadow-lg"
          >
            View More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Admission;
