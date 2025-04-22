import React from "react";
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
                </li>
              ))}
            </ul>
          </div>

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
            <ul className="list-none space-y-2">
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