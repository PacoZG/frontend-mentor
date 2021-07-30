import React from "react";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <div
      role="menu"
      className=" bg-gray-700 border-b-2 border-black w-screen z-50"
    >
      <div
        role="navigation"
        className="flex items-center justify-center space-x-6"
      >
        <Link
          className="text-gray-200 text-xl font-inter font-semibold p-3 tracking-widest hover:text-indigo-300 hover:underline "
          to="/home"
        >
          Home
        </Link>
      </div>
    </div>
  );
};

export default Menu;
