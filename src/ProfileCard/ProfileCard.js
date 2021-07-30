import React from "react";
import Bottom from "./images/bg-pattern-bottom.svg";
import { ReactComponent as Card } from "./images/bg-pattern-card.svg";
import { ReactComponent as Top } from "./images/bg-pattern-top.svg";
import Pic from "./images/image-victor.jpg";

const ProfileCard = () => {
  return (
    <div className="block sm:hidden relative bg-cyan-1000 min-h-screen">
      <img
        className=" absolute transform rotate-180 -translate-x-48 -translate-y-20"
        alt="background"
        src={Bottom}
      />
      <img
        className="absolute transform translate-x-52 translate-y-60"
        alt="background"
        src={Bottom}
      />
    </div>
  );
};

export default ProfileCard;
