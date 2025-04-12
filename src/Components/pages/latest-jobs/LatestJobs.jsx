import React, { useState } from "react";
import Data from "./Data";
import { Link } from "react-router-dom";

const LatestJobs = () => {
  const [visibleJobs, setVisibleJobs] = useState(15);

  // Function to format the title for the URL
  const formatTitleForURL = (title) => title.toLowerCase().replace(/ /g, "-");

  return (
    <div className="m-auto border-2 flex justify-center border-borderColor">
      <div>
        <h3 className="text-2xl font-semibold bg-customRed text-center text-white p-1">
          Latest Jobs
        </h3>
        <ul className="list-disc list-inside pl-6">
          {Data.slice(0, visibleJobs).map((job) => (
            <li key={job.id}>
              {/* Updated route path */}
              <Link
                to={`/latestJob/${formatTitleForURL(job.title)}`}
                className="text-blue-800"
              >
                {job.title}
              </Link>
            </li>
          ))}
        </ul>
        {visibleJobs < Data.length && (
          <button
            onClick={() => setVisibleJobs(visibleJobs + 10)}
            className="font-bold border-b-2 border-blue-700 text-blue-700 ml-20"
          >
            Read More
          </button>
        )}
      </div>
    </div>
  );
};

export default LatestJobs;
