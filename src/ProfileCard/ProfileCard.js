import React from "react";
import Bottom from "./images/bg-pattern-bottom.svg";
import Card from "./images/bg-pattern-card.svg";
import Top from "./images/bg-pattern-top.svg";
import Pic from "./images/image-victor.jpg";

const ProfileCard = () => {
  return (
    <div className=" relative bg-cyan-1000 min-h-screen">
      <div className="h-full w-full absolute overflow-hidden">
        <img
          className=" absolute transform -translate-x-48 -top-28 sm:-translate-x-72 sm:-top-100"
          alt="background"
          src={Top}
        />
        <img
          className="absolute transform translate-x-52 translate-y-100 sm:translate-x-104 sm:left-52"
          alt="background"
          src={Bottom}
        />
      </div>
      <div id="modal">
        <div className="absolute justify-center items-center flex overflow-x-hidden overflow-y-auto inset-0 outline-none focus:outline-none">
          <div className="relative w-80 max-w-sm sm:pt-40 pt-20">
            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-gray-50 outline-none focus:outline-none">
              <div className=" flex flex-col items-center">
                <img
                  alt="topBg"
                  src={Card}
                  className="absolute rounded-t-lg -top-18 h-36"
                />
                <img
                  alt="pic"
                  src={Pic}
                  className="relative rounded-full border-4 border-white top-4 "
                />
                <h1 className=" font-kumbh text-lg font-bold tracking-wide pt-8">
                  Victor Crest{" "}
                  <span className=" font-kumbh opacity-40 font-medium">
                    {"   "}
                    26
                  </span>
                </h1>
                <p className="font-kumbh opacity-40">London</p>
                <div className=" flex items-center justify-center space-x-8 w-full border-t border-gray-200 pt-7 pb-2">
                  <div className="flex flex-col items-center">
                    <h1 className=" font-kumbh text-lg text-blue-desaturated font-bold">
                      80K
                    </h1>
                    <p className="font-kumbh text-xs text-blue-graish tracking-wide">
                      Followers
                    </p>
                  </div>
                  <div className="flex flex-col items-center">
                    <h1 className="font-kumbh text-lg text-blue-desaturated font-bold">
                      803K
                    </h1>
                    <p className="font-kumbh text-xs text-blue-graish tracking-wide">
                      Likes
                    </p>
                  </div>
                  <div className="flex flex-col items-center">
                    <h1 className="font-kumbh text-lg text-blue-desaturated font-bold">
                      1.4K
                    </h1>
                    <p className="font-kumbh text-xs text-blue-graish tracking-wide">
                      Photos
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
