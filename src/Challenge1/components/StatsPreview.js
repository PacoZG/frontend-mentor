import React from "react";
import DesktopImage from "../images/image-header-desktop.jpg";

const StatsPreview = () => {
  return (
    <div className=" bg-blue-1400 min-w-full ">
      <div className="flex sm:flex-row flex-col-reverse justify-center items-center p-7 pt-20 pb-24 sm:pt-40 sm:pb-40 sm:p-40 ">
        <div className=" bg-blue-1100 p-10 rounded-b-md sm:pt-14 sm:rounded-b-none sm:rounded-l-md sm:h-80 sm:w-96">
          <h1 className="text-white text-2xl xl:text-3xl font-bold text-center sm:text-left">
            Get <span className=" text-violet-200">insights</span> that help
            your business grow.
          </h1>
          <br />
          <p className="text-white opacity-50 text-center text-xs leading-6 sm:text-2xs sm:text-left sm:pr-6">
            Discover the benefits of data analytics and make better decisions
            regarding revenue, customer experience, and overall efficiency.
          </p>
          <div className="flex flex-col items-center space-y-5 pt-6 sm:space-y-0 sm:flex-row sm:justify-start sm:space-x-9">
            <div className="flex flex-col items-center sm:items-start">
              <h1 className="text-white text-2xl font-semibold">10k+</h1>
              <p className="text-white text-2xs opacity-50 uppercase">
                companies
              </p>
            </div>
            <div className="flex flex-col items-center sm:items-start">
              <h1 className="text-white text-2xl font-semibold">314</h1>
              <p className="text-white text-2xs opacity-50 uppercase">
                templates
              </p>
            </div>
            <div className="flex flex-col items-center sm:items-start">
              <h1 className="text-white text-2xl font-semibold">12M+</h1>
              <p className="text-white text-2xs opacity-50 uppercase">
                queries
              </p>
            </div>
          </div>
        </div>
        <div className=" bg-violet-200 rounded-t-md sm:rounded-t-none sm:rounded-r-md sm:h-80 sm:w-96">
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
