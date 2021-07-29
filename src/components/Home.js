import React from "react";
import CarouselComp from "./Carousel";
import Challenge1DesktopDesign from "../StatsPreview/design/desktop-design.jpg";
import Challenge1MobileDesign from "../StatsPreview/design/desktop-preview.jpg";

const Home = () => {
  return (
    <main className="min-h-screen bg-gradient-to-tl from-gray-400 via-gray-50 to-gray-400">
      <head className="bg-blue-900 p-6 border-b-2 border-black">
        <h1 className="text-center text-3xl text-gray-400">
          Fronted Mentor Challenges
        </h1>
        <p className="text-center text-xl text-gray-400">
          This is a web on which you can find many of the Frontend Mentor
          challenges shown on their own page
        </p>
      </head>
      <body className="flex flex-col sm:flex-row items-center p-4 sm:p-16">
        <CarouselComp
          img1={Challenge1DesktopDesign}
          img2={Challenge1MobileDesign}
        />
      </body>
    </main>
  );
};

export default Home;
