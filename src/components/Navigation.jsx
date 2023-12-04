import React from "react";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <div className="flex justify-center">
      <nav className="bg-yellow-300 rounded-full w-96 h-16 flex items-center justify-center">
        <ul className="flex flex-row gap-x-8 justify-center items-center h-full">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          {/* Add more links for other pages */}
        </ul>
      </nav>
    </div>
  );
}

export default Navigation;
