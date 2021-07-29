import React from "react";
import DesktopImage from "../images/image-header-desktop.jpg";

const StatsPreview = () => {
  return (
    <div className="main min-w-full min-h-screen ">
      <div className="flex xl:flex-row flex-col-reverse justify-center items-center p-7 pt-20 pb-20 xl:pt-40 xl:pb-40 xl:p-40 ">
        <div className=" bg-blue-1100 p-10 h-auto rounded-b-md xl:pt-14 xl:rounded-b-none xl:rounded-l-md xl:h-80 xl:w-96">
          <h1 className="text-white text-2xl xl:text-3xl font-bold text-center xl:text-left">
            Get <span className="">insights</span> that help your business grow.
          </h1>
          <br />
          <p className="text-white opacity-50 text-center text-xs leading-6 xl:text-2xs xl:text-left xl:pr-6">
            Discover the benefits of data analytics and make better decisions
            regarding revenue, customer experience, and overall efficiency.
          </p>
          <div className="flex flex-col items-center space-y-5 pt-8 xl:space-y-0 xl:flex-row xl:justify-start xl:space-x-9">
            <div className="flex flex-col items-center xl:items-start">
              <h1 className="text-white text-2xl font-semibold">10k+</h1>
              <p className="text-white text-2xs opacity-50 uppercase">
                companies
              </p>
            </div>
            <div className="flex flex-col items-center xl:items-start">
              <h1 className="text-white text-2xl font-semibold">314</h1>
              <p className="text-white text-2xs opacity-50 uppercase">
                templates
              </p>
            </div>
            <div className="flex flex-col items-center xl:items-start">
              <h1 className="text-white text-2xl font-semibold">12M+</h1>
              <p className="text-white text-2xs opacity-50 uppercase">
                queries
              </p>
            </div>
          </div>
        </div>
        <div className=" bg-violet-200 rounded-t-md xl:rounded-t-none xl:rounded-r-md xl:h-80 xl:w-96">
          <img
            className=" mix-blend-multiply xl:h-80"
            src={DesktopImage}
            alt="DI"
          />
        </div>
      </div>
    </div>
  );
};

export default StatsPreview;
