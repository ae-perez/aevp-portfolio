import React from "react";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <div className="flex justify-center">
      <nav className="bg-amber-300 rounded-full w-1/4 h-16 flex items-center justify-center">
        <ul className="flex flex-row gap-x-8 justify-center items-center h-full">
          <li className="rounded-full w-28 text-center text-2xl h-9 hover:bg-amber-400 hover:text-gray-100">
            <Link to="/">Home</Link>
          </li>
          <li className="rounded-full w-28 text-center text-2xl h-9 hover:bg-amber-400 hover:text-gray-100">
            <Link to="/about">About</Link>
          </li>
          <li className="rounded-full w-28 text-center text-2xl h-9 hover:bg-amber-400 hover:text-gray-100">
            <Link to="/contact">Contact</Link>
          </li>
          {/* Add more links for other pages */}
        </ul>
      </nav>
    </div>
  );
}

export default Navigation;
