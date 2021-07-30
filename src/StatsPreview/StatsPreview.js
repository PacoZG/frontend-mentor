import React from "react";
import DesktopImage from "./images/image-header-desktop.jpg";
import MobileImage from "./images/image-header-mobile.jpg";

const StatsPreview = () => {
  return (
    <div role="main" className=" bg-blue-1400 min-w-full ">
      {/* Mobile View */}
      <div
        role="banner"
        className="flex sm:hidden flex-col-reverse justify-center items-center p-4 pt-20 pb-20 "
      >
        <div className=" bg-blue-1100 p-10 rounded-b-md">
          <h1 className=" font-inter text-white text-2xl xl:text-3xl font-bold text-center">
            Get <span className=" text-violet-200">insights</span> that help
            your business grow.
          </h1>
          <p className="text-white opacity-50 text-center text-xs leading-6">
            Discover the benefits of data analytics and make better decisions
            regarding revenue, customer experience, and overall efficiency.
          </p>
          <div className="flex flex-col items-center space-y-5 pt-4 ">
            <div className="flex flex-col items-center space-y-2 ">
              <h1 className="text-white text-xl font-semibold">10k+</h1>
              <p className="text-white text-2xs opacity-50 uppercase">
                companies
              </p>
            </div>
            <div className="flex flex-col items-center space-y-2 ">
              <h1 className="text-white text-xl font-semibold">314</h1>
              <p className="text-white text-2xs opacity-50 uppercase">
                templates
              </p>
            </div>
            <div className="flex flex-col items-center space-y-2 ">
              <h1 className="text-white text-xl font-semibold">12M+</h1>
              <p className="text-white text-2xs opacity-50 uppercase">
                queries
              </p>
            </div>
          </div>
        </div>
        <div className=" bg-violet-200 rounded-t-md ">
          <img className=" mix-blend-multiply" src={MobileImage} alt="DI" />
        </div>
      </div>
      {/* Desktop View */}
      <div
        role="banner"
        className="hidden sm:flex flex-row justify-center items-center pt-40 pb-40 "
      >
        <div className=" bg-blue-1100 p-10 rounded-l-md h-80 w-96">
          <h1 className=" font-inter text-white text-3xl font-bold text-left">
            Get <span className=" text-violet-200">insights</span> that help
            your business grow.
          </h1>
          <p className=" font-inter text-white opacity-50 leading-5 text-2xs text-left pt-2 pr-6">
            Discover the benefits of data analytics and make better decisions
            regarding revenue, customer experience, and overall efficiency.
          </p>
          <div className="flex items-center pt-8 flex-row justify-start space-x-10">
            <div className="flex flex-col items-start">
              <h1 className="font-inter text-white text-lg font-semibold">
                10k+
              </h1>
              <p className="font-inter text-white text-3xs tracking-widest opacity-50 uppercase">
                companies
              </p>
            </div>
            <div className="flex flex-col items-start">
              <h1 className="font-inter text-white text-lg font-semibold">
                314
              </h1>
              <p className="font-inter text-white text-3xs tracking-widest opacity-50 uppercase">
                templates
              </p>
            </div>
            <div className="flex flex-col items-start ">
              <h1 className="font-inter text-white text-lg font-semibold">
                12M+
              </h1>
              <p className="font-inter text-white text-3xs tracking-widest opacity-50 uppercase">
                queries
              </p>
            </div>
          </div>
        </div>
        <div className=" bg-violet-200 rounded-r-md h-80 w-96">
          <img
            className=" mix-blend-multiply sm:h-80"
            src={DesktopImage}
            alt="DI"
          />
        </div>
      </div>
    </div>
  );
};

export default StatsPreview;
