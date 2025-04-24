import React, { useState } from "react";
import admitCardList from "./Data";
import { Link } from "react-router-dom";

const AdmitCard = () => {
  const [visibleCards, setVisibleCards] = useState(15);

  // Function to format the title for the URL
  const formatTitleForURL = (title) =>
    title
      ? title
          .toLowerCase()
          .replace(/[^a-z0-9]+/g, "-")
          .replace(/^-|-$/g, "")
      : "";

  return (
    <div className="border-2 border-gray-300 rounded-lg shadow-lg bg-white min-h-[700px] flex flex-col">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-teal-500 via-blue-500 to-indigo-500 text-center text-white p-4 rounded-t-lg">
        <h3 className="text-3xl font-bold tracking-wide">Admit Cards</h3>
      </div>

      {/* List Section */}
      <ul className="list-disc list-inside pl-6 space-y-3 mt-6 h-[550px] overflow-y-auto scrollbar-thin scrollbar-thumb-blue-500 scrollbar-track-gray-200 flex-grow">
        {admitCardList.slice(0, visibleCards).map((card) => (
          <li key={card.id} className="group">
            <Link
              to={`/admitCard/${formatTitleForURL(card.text)}`}
              className="text-gray-800 text-sm hover:text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-blue-500 to-indigo-500 transition duration-300 relative pb-1 font-medium"
            >
              {card.text}
              {/* Sparkling Bottom Line Animation */}
              <span className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-teal-400 via-blue-500 to-indigo-500 transition-all duration-300 ease-in-out group-hover:w-full"></span>
            </Link>
          </li>
        ))}
      </ul>

      {/* Buttons Section */}
      <div className="bg-white border-t-2 border-gray-300 py-4 shadow-lg">
        <div className="flex justify-center space-x-4">
          {/* Load More Button */}
          {visibleCards < admitCardList.length && (
            <button
              onClick={() => setVisibleCards(visibleCards + 10)}
              className="inline-block bg-gradient-to-r from-teal-500 via-blue-500 to-indigo-500 text-white px-6 py-2 rounded-md hover:scale-105 transition duration-300 shadow-md hover:shadow-lg"
            >
              Load More
            </button>
          )}

          {/* View More Button */}
          <Link
            to="/admit-cards"
            className="inline-block bg-gradient-to-r from-teal-500 via-blue-500 to-indigo-500 text-white px-6 py-2 rounded-md hover:scale-105 transition duration-300 shadow-md hover:shadow-lg"
          >
            View All Admit Cards
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AdmitCard;
