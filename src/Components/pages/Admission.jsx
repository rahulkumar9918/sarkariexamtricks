import React from "react";
import { Link } from "react-router-dom";

const Admission = () => {
  return (
    <div className="border-2 border-gray-300 rounded-lg shadow-lg bg-white">
      {/* Header Section */}
      <div className="bg-red-600 text-center text-white p-2 rounded-t-lg">
        <h3 className="text-2xl font-semibold">Admission</h3>
      </div>

      {/* List Section */}
      <ul className="list-disc list-inside pl-6 space-y-3 mt-4">
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
              className="text-blue-800 hover:text-blue-600 transition duration-300 relative"
            >
              {item.label}
              {/* Sparkling Bottom Line Animation */}
              <span className="absolute bottom-0 left-0 w-0 h-1 bg-blue-600 transition-all duration-300 ease-in-out group-hover:w-full"></span>
            </Link>
          </li>
        ))}
      </ul>

      {/* View More Button */}
      <div className="text-center mt-6">
        <Link
          to="/admissions"
          className="inline-block bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-300 shadow-md hover:shadow-lg"
        >
          View More
        </Link>
      </div>
    </div>
  );
};

export default Admission;
