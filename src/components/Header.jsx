import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  // 🔹 Added new "Experience" page link
  const navItems = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/skills", label: "Skills" },
    { to: "/experience", label: "Experience" }, // ✅ NEW PAGE ADDED HERE
    { to: "/projects", label: "Projects" },
  ];

  return (
    <nav className="fixed w-full top-0 left-0 z-50 bg-white shadow-md text-gray-800">
      <div className="max-w-7xl mx-auto flex justify-between items-center h-[85px] px-6 md:px-10">
        {/* 🔹 Logo (bigger and enhanced) */}
        <Link to="/" className="flex items-center cursor-pointer">
          <img
            src="/Images/subhash.png" // ✅ Update your logo path here
            alt="Subhash Logo"
            className="w-16 h-16 rounded-full border-2 border-teal-500 shadow-lg hover:scale-110 hover:shadow-teal-300 transition-all duration-300"
          />
        </Link>

        {/* 🔹 Desktop Menu */}
        <ul className="hidden md:flex space-x-10 font-medium">
          {navItems.map((item) => (
            <li key={item.to}>
              <NavLink
                to={item.to}
                className={({ isActive }) =>
                  `cursor-pointer transition-all duration-300 text-lg ${
                    isActive
                      ? "text-teal-500 border-b-2 border-teal-500 pb-1"
                      : "hover:text-teal-500"
                  }`
                }
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* 🔹 Contact Button */}
        <div className="hidden md:block">
          <Link
            to="/contact"
            className="bg-teal-500 text-white px-7 py-3 rounded-full font-semibold text-lg hover:bg-teal-600 transition-all duration-300 shadow-md hover:shadow-lg hover:scale-105"
          >
            Contact
          </Link>
        </div>

        {/* 🔹 Mobile Menu Button */}
        <button
          className="md:hidden text-2xl text-gray-800"
          onClick={toggleMenu}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* 🔹 Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-md">
          <ul className="flex flex-col items-center py-6 space-y-6 font-medium text-gray-800">
            {navItems.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  onClick={toggleMenu}
                  className={({ isActive }) =>
                    `cursor-pointer transition-colors ${
                      isActive ? "text-teal-500" : "hover:text-teal-500"
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}

            {/* 🔹 Mobile Contact Button */}
            <li>
              <Link
                to="/contact"
                onClick={toggleMenu}
                className="bg-teal-500 text-white px-7 py-3 rounded-full font-semibold text-lg hover:bg-teal-600 transition-all duration-300 shadow-md hover:scale-105"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
