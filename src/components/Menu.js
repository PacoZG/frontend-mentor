import React from "react";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <div className=" bg-gray-700 border-b-2 border-black">
      <div className="flex items-center justify-center space-x-6">
        <Link
          className="text-gray-200 text-lg p-3 hover:text-indigo-300 hover:underline "
          to="/home"
        >
          Home
        </Link>
      </div>
    </div>
  );
};

export default Menu;
