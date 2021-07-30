import React from "react";
import { Link } from "react-router-dom";
import CarouselComp from "./Carousel";
import StatsPreview from "../StatsPreview/design/desktop-design.jpg";
import ProfileCard from "../ProfileCard/design/desktop-design.jpg";

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
      <div className="hidden sm:flex flex-col sm:flex-row items-center p-4 sm:p-16">
        <CarouselComp img1={StatsPreview} img2={ProfileCard} />
      </div>
      <div className="sm:hidden flex flex-col items-center p-3 space-y-2">
        <Link className="" to="/stats_preview">
          <img
            className="border-4 border-yellow-600 rounded-lg"
            src={StatsPreview}
            alt="First slide"
          />
        </Link>
        <Link to="/profile_card">
          <img
            className="border-4 border-yellow-600 rounded-lg"
            src={ProfileCard}
            alt="Second slide"
          />
        </Link>
      </div>
    </div>
  );
};

export default Home;
