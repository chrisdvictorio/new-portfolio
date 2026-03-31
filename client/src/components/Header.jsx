import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Skills", path: "/skills" },
    { name: "Projects", path: "/projects" },
    { name: "About", path: "/about" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-transparent">
      {/* Main header container */}
      <div className="mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        {/* Logo */}
        <Link to="/" className="flex items-center z-50">
          <img
            src={logo}
            alt="Website Logo"
            className="w-30 rounded-md bg-[#C03540] p-2 hover:bg-red-600"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav aria-label="Main navigation" className="hidden md:block">
          <ul className="flex items-center">
            {navItems.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className="px-4 py-2 rounded-full text-sm font-semibold hover:bg-[#DEDEDE] hover:text-black transition-colors"
                >
                  {item.name.toUpperCase()}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Desktop Connect Button */}
        <div className="hidden md:block">
          <Link
            to="/contact"
            className="px-3 py-1.5 rounded-full text-sm font-semibold hover:bg-[#DEDEDE] hover:text-black transition-colors"
          >
            CONNECT
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden flex items-center z-50">
          <button
            onClick={toggleMenu}
            className="relative w-8 h-8 flex flex-col justify-center items-center"
            aria-label={isOpen ? "Close Menu" : "Open Menu"}
          >
            {/* Top line */}
            <span
              className={`block h-0.5 w-6 rounded transition-transform duration-300 ease-in-out origin-center ${
                isOpen
                  ? "rotate-45 -translate-y-0.5 bg-black"
                  : "-translate-y-1 bg-white"
              }`}
            />
            {/* Bottom line */}
            <span
              className={`block h-0.5 w-6 rounded transition-transform duration-300 ease-in-out origin-center ${
                isOpen
                  ? "-rotate-45 -translate-y-1 bg-black"
                  : "translate-y-1 bg-white"
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`md:hidden fixed inset-0 bg-white/80 backdrop-blur-sm z-40 transition-opacity duration-300 ${
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col pt-20 px-6">
          {navItems.map((item, index) => (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={() => setIsOpen(false)}
              className={`flex justify-between items-center text-2xl font-bold transition-colors py-2.5 w-full border-b border-[#BDBABB] ${
                index === 0 ? "text-[#C03540]" : "text-black"
              }`}
            >
              {item.name.toUpperCase()}
              {(item.name === "Projects" || item.name === "Skills") && (
                <span className="text-xl">&rarr;</span>
              )}
            </NavLink>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;
