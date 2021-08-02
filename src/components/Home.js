import React from "react";
import { Link } from "react-router-dom";
import StatsPreview from "../StatsPreview/design/desktop-design.jpg";
import ProfileCard from "../ProfileCard/design/desktop-design.jpg";
import ThreeCP from "../3ColumnPreview/design/desktop-design.jpg";

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-tl from-gray-400 via-gray-50 to-gray-400">
      <div className="bg-blue-900 p-6 border-b-2 border-black">
        <h1 className="text-center text-3xl text-gray-400">
          Fronted Mentor Challenges
        </h1>
        <p className="text-center text-xl text-gray-400">
          This is a web on which you can find many of the Frontend Mentor
          challenges shown on their own page
        </p>
      </div>
      <div className="flex items-center flex-wrap justify-center p-3 sm:space-x-2 space-y-2 sm:space-y-0">
        <Link className="" to="/stats_preview">
          <img
            className="border-4 border-yellow-600 rounded-lg h-48 w-80"
            src={StatsPreview}
            alt="First slide"
          />
        </Link>
        <Link to="/profile_card">
          <img
            className="border-4 border-yellow-600 rounded-lg h-48 w-80"
            src={ProfileCard}
            alt="Second slide"
          />
        </Link>
        <Link to="/3_column_preview">
          <img
            className="border-4 border-yellow-600 rounded-lg h-48 w-80"
            src={ThreeCP}
            alt="Third slide"
          />
        </Link>
      </div>
    </div>
  );
};

export default Home;
