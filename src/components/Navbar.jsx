import React from "react";

const Navbar = () => (
  <header className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-md py-4">
    <div className="container mx-auto flex items-center justify-between px-4 lg:px-8">
      {/* Logo */}
      <div className="text-2xl font-extrabold tracking-wider">
        <a href="#home" className="hover:text-yellow-300 transition duration-300">
          GymFluencer
        </a>
      </div>

      {/* Navigation */}
      <nav>
        <ul className="hidden md:flex space-x-8 font-medium">
          <li>
            <a
              href="#home"
              className="hover:text-yellow-300 transition duration-300"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#diet"
              className="hover:text-yellow-300 transition duration-300"
            >
              Diet Plan
            </a>
          </li>
          <li>
            <a
              href="#workout"
              className="hover:text-yellow-300 transition duration-300"
            >
              Workout Plan
            </a>
          </li>
          <li>
            <a
              href="#blog"
              className="hover:text-yellow-300 transition duration-300"
            >
              Blog
            </a>
          </li>
          <li>
            <a
              href="#faqs"
              className="hover:text-yellow-300 transition duration-300"
            >
              FAQs
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="hover:text-yellow-300 transition duration-300"
            >
              Contact Us
            </a>
          </li>
        </ul>
      </nav>

      {/* Buttons */}
      <div className="space-x-4">
        <button className="border border-yellow-300 px-4 py-2 rounded-full text-yellow-300 font-semibold hover:bg-yellow-300 hover:text-blue-600 transition duration-300">
          Login
        </button>
        <button className="bg-yellow-300 text-blue-600 px-4 py-2 rounded-full font-semibold hover:bg-yellow-400 hover:text-blue-700 transition duration-300">
          Get Started
        </button>
      </div>

      {/* Mobile Menu Toggle */}
      <div className="md:hidden">
        <button
          className="text-white focus:outline-none focus:ring-2 focus:ring-yellow-300 rounded-md"
          aria-label="Toggle Menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>
    </div>
  </header>
);

export default Navbar;
