import React from "react";
import { useParams } from "react-router-dom";
import Data from "./Data";

const AdmitCardForm = () => {
  const { title } = useParams();

  // Function to format the title for comparison
  const formatTitleForURL = (title) =>
    title
      ? title
          .toLowerCase()
          .replace(/[^a-z0-9]+/g, "-")
          .replace(/^-|-$/g, "")
      : "";

  // Find the admit card based on the formatted title
  const admitCard = Data.find((item) => formatTitleForURL(item.text) === title);

  if (!admitCard) {
    return (
      <div className="min-h-screen bg-gradient-to-r from-teal-200 via-blue-200 to-indigo-200 flex items-center justify-center">
        <div className="text-center text-red-500 text-xl font-semibold">
          Admit Card not found
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-r from-teal-200 via-blue-200 to-indigo-200 flex items-center justify-center">
      <div className="max-w-4xl w-full bg-white p-6 border-2 border-gray-300 rounded-lg shadow-lg">
        {/* Title */}
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">
          {admitCard.text}
        </h2>

        {/* Post Date */}
        <p className="text-center text-gray-600 mb-6">
          <strong>Post Date / Update:</strong> {admitCard.postDate}
        </p>

        {/* Short Information */}
        <p className="text-gray-700 mb-6">{admitCard.shortInfo}</p>

        {/* Important Dates */}
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            Important Dates
          </h3>
          <ul className="list-disc list-inside text-gray-700">
            {Object.entries(admitCard.importantDates).map(([key, value]) => (
              <li key={key}>
                <strong>{key.replace(/([A-Z])/g, " $1")}: </strong>
                {value}
              </li>
            ))}
          </ul>
        </div>

        {/* Application Fee */}
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            Application Fee
          </h3>
          <ul className="list-disc list-inside text-gray-700">
            {Object.entries(admitCard.applicationFee).map(([key, value]) => (
              <li key={key}>
                <strong>{key.replace(/([A-Z])/g, " $1")}: </strong>
                {value}
              </li>
            ))}
          </ul>
        </div>

        {/* Age Limit */}
        {admitCard.ageLimit && (
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Age Limit
            </h3>
            <ul className="list-disc list-inside text-gray-700">
              {Object.entries(admitCard.ageLimit).map(([key, value]) => (
                <li key={key}>
                  <strong>{key.replace(/([A-Z])/g, " $1")}: </strong>
                  {value}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Vacancy Details */}
        {admitCard.vacancyDetails && (
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Vacancy Details
            </h3>
            <p className="text-gray-700">
              <strong>Total Posts:</strong> {admitCard.vacancyDetails.totalPost}
            </p>
            <p className="text-gray-700">
              <strong>Eligibility:</strong>{" "}
              {admitCard.vacancyDetails.eligibility}
            </p>
          </div>
        )}

        {/* District-Wise Vacancy */}
        {admitCard.districtWiseVacancy && (
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              District-Wise Vacancy
            </h3>
            <ul className="list-disc list-inside text-gray-700">
              {admitCard.districtWiseVacancy.map((district, index) => (
                <li key={index}>
                  <strong>{district.district}:</strong> {district.totalPost}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Important Links */}
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            Important Links
          </h3>
          <ul className="list-disc list-inside text-blue-600">
            {admitCard.importantLinks.map((link, index) => (
              <li key={index}>
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AdmitCardForm;
