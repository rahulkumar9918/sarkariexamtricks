import React from "react";

const CertificateVerification = () => {
  return (
    <div className="relative border-2 border-gray-300 rounded-lg shadow-lg bg-white h-[700px]">
      {/* Header Section */}
      <div className="bg-red-600 text-center text-white p-2 rounded-t-lg">
        <h3 className="text-2xl font-semibold">Certificate Verification</h3>
      </div>

      {/* List Section */}
      <ul className="list-disc list-inside pl-6 space-y-3 mt-4 overflow-y-auto h-[600px]">
        {[
          { label: "NTA UGC NET December 2023 E Certificate", href: "/" },
          { label: "UPSSSC PET 2023 Certificate", href: "/" },
          { label: "Voter ID Online Form 2024, E EPIC Download", href: "/" },
          {
            label: "Aadhar Pan Card Link Online or Check Status 2023",
            href: "/",
          },
          { label: "NTA UGC NET June 2020 E Certificate", href: "/" },
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
      <div className="absolute bottom-0 left-0 w-full text-center bg-white py-4">
        <a
          href="/certificate-verification"
          className="inline-block bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-300 shadow-md hover:shadow-lg"
        >
          View More
        </a>
      </div>
    </div>
  );
};

export default CertificateVerification;
