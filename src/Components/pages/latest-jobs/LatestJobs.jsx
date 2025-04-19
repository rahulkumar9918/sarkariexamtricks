import React, { useState } from "react";
import Data from "./Data";
import { Link } from "react-router-dom";

const LatestJobs = () => {
  const [visibleJobs, setVisibleJobs] = useState(15);

  // Function to format the title for the URL
  const formatTitleForURL = (title) => title.toLowerCase().replace(/ /g, "-");

  return (
    <div className="border-2 border-gray-300 rounded-lg shadow-lg bg-white h-[700px]">
      {/* Header Section */}
      <div className="bg-red-600 text-center text-white p-2 rounded-t-lg">
        <h3 className="text-2xl font-semibold">Latest Jobs</h3>
      </div>

      {/* List Section */}
      <ul className="list-disc list-inside pl-6 space-y-3 mt-4 h-[550px]">
        {Data.slice(0, visibleJobs).map((job) => (
          <li key={job.id} className="group">
            <Link
              to={`/latestJob/${formatTitleForURL(job.title)}`}
              className="text-blue-800 hover:text-blue-600 transition duration-300 relative pb-1"
            >
              {job.title}
              {/* Sparkling Bottom Line Animation */}
              <span className="absolute bottom-0 left-0 w-0 h-1 bg-blue-600 transition-all duration-300 ease-in-out group-hover:w-full"></span>
            </Link>
          </li>
        ))}
      </ul>

      {/* Read More Button */}
      {visibleJobs < Data.length && (
        <div className="text-center mt-4">
          <button
            onClick={() => setVisibleJobs(visibleJobs + 10)}
            className="inline-block bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-300 shadow-md hover:shadow-lg"
          >
            Read More
          </button>
        </div>
      )}

      {/* View More Button */}
      <div className="text-center mt-4">
        <Link
          to="/latest-jobs"
          className="inline-block bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-300 shadow-md hover:shadow-lg"
        >
          View More
        </Link>
      </div>
    </div>
  );
};

export default LatestJobs;
