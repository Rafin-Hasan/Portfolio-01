import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const NavberComponent = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav className=" bg-transparent">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="w-20">
          <img src="/img/logo.gif" alt="Logo" />
        </div>

        {/* Navigation Links */}
        <div
          className={`md:flex items-center space-x-6 ${
            isOpen ? "block" : "hidden"
          } md:block`}
        >
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "px-4 py-2 rounded-full transform scale-110 font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white"
                : "text-white hover:transition hover:duration-200 hover:ease-in-out hover:px-4 hover:py-2 hover:shadow-lg hover:text-white transition font-bold duration-200 transform hover:scale-105 hover:bg-gradient-to-r hover:from-blue-500 hover:to-teal-400 p-1 hover:rounded-full"
            }
            exact
          >
            Home
          </NavLink>
          <NavLink
            to="/skills"
            className={({ isActive }) =>
              isActive
                ? "px-4 py-2 rounded-full transform scale-110 font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white"
                : "text-white hover:transition hover:duration-200 hover:ease-in-out hover:px-4 hover:py-2 hover:shadow-lg hover:text-white transition font-bold duration-200 transform hover:scale-105 hover:bg-gradient-to-r hover:from-blue-500 hover:to-teal-400 p-1 hover:rounded-full"
            }
          >
            Skills
          </NavLink>
          <NavLink
            to="/experience"
            className={({ isActive }) =>
              isActive
                ? "px-4 py-2 rounded-full transform scale-110 font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white"
                : "text-white hover:transition hover:duration-200 hover:ease-in-out hover:px-4 hover:py-2 hover:shadow-lg hover:text-white transition font-bold duration-200 transform hover:scale-105 hover:bg-gradient-to-r hover:from-blue-500 hover:to-teal-400 p-1 hover:rounded-full"
            }
          >
            Experience
          </NavLink>
          <NavLink
            to="/portfolios"
            className={({ isActive }) =>
              isActive
                ? "px-4 py-2 rounded-full transform scale-110 font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white"
                : "text-white hover:transition hover:duration-200 hover:ease-in-out hover:px-4 hover:py-2 hover:shadow-lg hover:text-white transition font-bold duration-200 transform hover:scale-105 hover:bg-gradient-to-r hover:from-blue-500 hover:to-teal-400 p-1 hover:rounded-full"
            }
          >
            Portfolios
          </NavLink>

          {/* Contact Me Button */}
          <NavLink
            to="/contact"
            className="ml-6 px-4 py-2 hover:bg-gradient-to-r hover:from-blue-500 hover:to-teal-400 text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 font-bold rounded-full shadow-md hover:shadow-lg transform hover:scale-105 transition duration-300 ease-in-out"
          >
            Contact Me
          </NavLink>
        </div>

        {/* Hamburger Menu for Mobile */}
        <button
          className="text-gray-800 md:hidden focus:outline-none"
          onClick={toggleMenu}
        >
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
            ></path>
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default NavberComponent;
