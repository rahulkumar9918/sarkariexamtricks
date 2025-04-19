import React, { useState } from "react";
import admitCardList from "./Data";
import { Link } from "react-router-dom";

const AdmitCard = () => {
  const [visibleCards, setVisibleCards] = useState(15);

  // Function to format the title for the URL
  const formatTitleForURL = (title) =>
    title ? title.toLowerCase().replace(/ /g, "-") : "";

  return (
    <div className="border-2 border-gray-300 rounded-lg shadow-lg bg-white h-[700px]">
      {/* Header Section */}
      <div className="bg-red-600 text-center text-white p-2 rounded-t-lg">
        <h3 className="text-2xl font-semibold">Admit Cards</h3>
      </div>

      {/* List Section */}
      <ul className="list-disc list-inside pl-6 space-y-3 mt-4 h-[550px]">
        {admitCardList.slice(0, visibleCards).map((card) => (
          <li key={card.id} className="group">
            <Link
              to={`/admitCard/${formatTitleForURL(card.text)}`}
              className="text-blue-800 hover:text-blue-600 transition duration-300 relative pb-1"
            >
              {card.text}
              {/* Sparkling Bottom Line Animation */}
              <span className="absolute bottom-0 left-0 w-0 h-1 bg-blue-600 transition-all duration-300 ease-in-out group-hover:w-full"></span>
            </Link>
          </li>
        ))}
      </ul>

      {/* Read More Button */}
      {visibleCards < admitCardList.length && (
        <div className="text-center mt-4">
          <button
            onClick={() => setVisibleCards(visibleCards + 10)}
            className="inline-block bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-300 shadow-md hover:shadow-lg"
          >
            Read More
          </button>
        </div>
      )}

      {/* View More Button */}
      <div className="text-center mt-4">
        <Link
          to="/admit-cards"
          className="inline-block bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-300 shadow-md hover:shadow-lg"
        >
          View More
        </Link>
      </div>
    </div>
  );
};

export default AdmitCard;
