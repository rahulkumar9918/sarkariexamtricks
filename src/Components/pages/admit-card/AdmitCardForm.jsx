import React from "react";
<<<<<<< HEAD
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
=======
import data from "./Data"; // Importing the JSON data

const AdmitCardForm = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-semibold text-center text-gray-800 mb-6">
        Admit Card Details
      </h1>
      {data.map((exam) => (
        <div
          key={exam.id}
          className="bg-white shadow-lg rounded-lg overflow-hidden mb-8"
        >
          {/* Exam Title */}
          <div className="bg-blue-600 text-white p-4">
            <h2 className="text-xl font-semibold">{exam.title}</h2>
          </div>

          {/* Important Dates */}
          <div className="p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Important Dates</h3>
            <ul className="list-none space-y-2">
              {exam.importantDates.map((date, index) => (
                <li key={index} className="text-gray-700">
                  {date.text}
                </li>
              ))}
            </ul>
          </div>

          {/* Application Fee */}
          <div className="p-6 bg-gray-50">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Application Fee</h3>
            <ul className="list-none space-y-2">
              {exam.applicationFee.map((fee, index) => (
                <li key={index} className="text-gray-700">
                  {fee.text}
>>>>>>> 3551dad26edbef2f6136c3dc3c0adf68e90955b8
                </li>
              ))}
            </ul>
          </div>
<<<<<<< HEAD
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
=======

          {/* Age Limit */}
          <div className="p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Age Limit</h3>
            <p className="text-gray-700">Min Age: {exam.ageLimit.minAge}</p>
            <p className="text-gray-700">Max Age: {exam.ageLimit.maxAge}</p>
            <p className="text-gray-700">Age Relaxation: {exam.ageLimit.ageRelaxation}</p>
          </div>

          {/* Vacancy Details */}
          <div className="p-6 bg-gray-50">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Vacancy Details</h3>
            <ul className="list-none space-y-2">
              {exam.vacancyDetails.posts.map((post, index) => (
                <li key={index} className="text-gray-700">
                  {post.category}: {post.numberOfPosts} Posts
>>>>>>> 3551dad26edbef2f6136c3dc3c0adf68e90955b8
                </li>
              ))}
            </ul>
          </div>

          {/* How to Apply */}
          <div className="p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">How to Apply</h3>
            <ul className="list-none space-y-2">
              {exam.howToApply.map((step, index) => (
                <li key={index} className="text-gray-700">
                  {step.text}
                </li>
              ))}
            </ul>
          </div>

          {/* Important Links */}
          <div className="p-6 bg-gray-50">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Important Links</h3>
            <ul classImportlist-none space-y-2">
              {exam.importantLinks.map((link, index) => (
                <li key={index} className="text-gray-700">
                  <a href="#" className="text-blue-500 hover:underline">
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Official Website (if available) */}
          {exam.officialWebsite && (
            <div className="p-6 bg-gray-50">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Official Website</h3>
              <p className="text-gray-700">
                <a
                  href={exam.officialWebsite}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  {exam.officialWebsite}
                </a>
              </p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default AdmitCardForm;