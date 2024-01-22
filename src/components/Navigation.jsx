import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        // Adjust the 50 to whatever suits your design
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="flex justify-center">
      <nav
        className={`rounded-full w-1/4 h-16 flex items-center justify-center ${
          isScrolled ? "bg-jasmine-700" : "bg-transparent"
        } hover:bg-jasmine-700 fixed top-0 left-1/2 transform -translate-x-1/2 z-50`}
      >
        <ul className="flex flex-row gap-x-8 text-majorelleBlue-500 justify-center items-center h-full">
          <li className="rounded-full w-auto text-center text-2xl h-9 hover:bg-majorelleBlue-500 hover:text-jasmine-700">
            <Link to="/">Home</Link>
          </li>
          <li className="rounded-full w-auto text-center text-2xl h-9 hover:bg-majorelleBlue-500 hover:text-jasmine-700">
            <Link to="/about">About</Link>
          </li>
          <li className="rounded-full w-auto text-center text-2xl h-9 hover:bg-majorelleBlue-500 hover:text-jasmine-700">
            <Link to="/contact">Contact</Link>
          </li>
          {/* Add more links for other pages */}
        </ul>
      </nav>
    </div>
  );
}

export default Navigation;
