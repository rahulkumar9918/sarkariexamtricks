import React from "react";
import { useParams } from "react-router-dom";
import jobList from "./Data";
import Footer from "../../footer/Footer";

const LatestJobForm = () => {
  const { title } = useParams();

  // Format the title to match the URL format
  const formatTitleForURL = (title) => title.toLowerCase().replace(/ /g, "-");

  // Find the job matching the title from the jobList
  const job = jobList.find((job) => formatTitleForURL(job.title) === title);

  // If no job is found, display an error message
  if (!job) {
    return (
      <div className="text-center text-red-500 py-10 text-xl">
        Job not found
      </div>
    );
  }

  const {
    postName,
    eligibility,
    vacancy,
    importantDates,
    applicationFee,
    howToApply,
    officialLinks,
    ageLimit,
    petDetails,
  } = job;

  return (
    <>
      <div className="max-w-4xl mx-auto p-6 border-2 border-gray-300 rounded-2xl shadow-lg mt-6 bg-white">
        <h2 className="text-3xl font-bold text-center text-customRed mb-6">
          {job.title}
        </h2>
        <p className="text-center text-gray-600 mb-8">
          Detailed information about the job is provided below.
        </p>

        {/* Post Name */}
        {postName && (
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Post Name
            </h3>
            <p className="text-gray-700">{postName}</p>
          </div>
        )}

        {/* Total Vacancy */}
        {vacancy && (
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Total Vacancy
            </h3>
            <p className="text-gray-700">{vacancy}</p>
          </div>
        )}

        {/* Eligibility */}
        {eligibility && (
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Eligibility
            </h3>
            <p className="text-gray-700 whitespace-pre-line">{eligibility}</p>
          </div>
        )}

        {/* Important Dates */}
        {importantDates?.length > 0 && (
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Important Dates
            </h3>
            <ul className="list-disc list-inside text-gray-700">
              {importantDates.map((item, index) => (
                <li key={index}>
                  <strong>{item.label}:</strong> {item.value}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Application Fee */}
        {applicationFee?.length > 0 && (
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Application Fee
            </h3>
            <ul className="list-disc list-inside text-gray-700">
              {applicationFee.map((item, index) => (
                <li key={index}>
                  <strong>{item.label}:</strong> {item.value}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Age Limit */}
        {ageLimit && (
          <div className="mb-4">
            <h3 className="text-xl font-semibold mb-2">Age Limit</h3>
            <div className="text-gray-700">
              <h4 className="font-semibold">General Post:</h4>
              <p>
                Min Age: {ageLimit.generalPost.minAge}, Max Age (Male):
                {ageLimit.generalPost.maxAgeMale}, Max Age (Female):
                {ageLimit.generalPost.maxAgeFemale}
              </p>
              <h4 className="font-semibold mt-2">Driver Post:</h4>
              <p>
                Min Age: {ageLimit.driverPost.minAge}, Max Age (Male):
                {ageLimit.driverPost.maxAgeMale}, Max Age (Female):
                {ageLimit.driverPost.maxAgeFemale}
              </p>
            </div>
          </div>
        )}

        {/* PET (Physical Efficiency Test) Details */}
        {petDetails?.general && (
          <div className="mb-4">
            <h3 className="text-xl font-semibold mb-2">
              PET (Physical Efficiency Test) Details
            </h3>
            <div className="text-gray-700">
              <h4 className="font-semibold">General (Male):</h4>
              <p>Height: {petDetails.general.heightMale}</p>
              <p>Chest: {petDetails.general.chestMale}</p>
              <p>Running: {petDetails.general.runningMale}</p>

              <h4 className="font-semibold mt-2">General (Female):</h4>
              <p>Height: {petDetails.general.heightFemale}</p>
              <p>Running: {petDetails.general.runningFemale}</p>
            </div>
          </div>
        )}

        {/* How to Apply */}
        {howToApply?.length > 0 && (
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              How to Apply
            </h3>
            <ul className="list-disc list-inside text-gray-700">
              {howToApply.map((step, index) => (
                <li key={index}>{step}</li>
              ))}
            </ul>
          </div>
        )}

        {/* Official Links */}
        {officialLinks?.length > 0 && (
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Official Links
            </h3>
            <ul className="list-disc list-inside text-gray-700">
              {officialLinks.map((link, index) =>
                console.log(link)(
                  <li key={index}>
                    {console.log(link.to)}
                    <strong>{link.label}:</strong>
                    <a
                      href={link.to}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800"
                    >
                      {link.label}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>
        )}
      </div>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default LatestJobForm;
