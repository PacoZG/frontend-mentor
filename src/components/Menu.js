import React from "react";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <div className=" bg-gray-700">
      <div className="flex items-center justify-center space-x-6">
        <Link
          className="text-gray-200 p-3 hover:text-indigo-300 hover:underline "
          to="/"
        >
          Home
        </Link>
        <Link
          className="text-gray-200 p-3 hover:text-indigo-300 hover:underline"
          to="/stats_preview"
        >
          Stats Preview
        </Link>
      </div>
    </div>
  );
};

export default Menu;
