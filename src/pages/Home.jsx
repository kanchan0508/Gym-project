import React from "react";
// Add your gym-related video here

const Home = () => (
  <div className="relative w-full h-96 flex items-center justify-center text-white">
    {/* Overlay */}
    <div className="absolute h-fit top-0 left-0 w-full  bg-black bg-opacity-50">
    <img alt="" className="w-full h-[550px]  overflow-hidden" src="https://www.ptpioneer.com/wp-content/uploads/2024/01/nasm-stretching-and-flexibility-coach-trainer-helping-client-improve-flexibility.png"  />
    </div>

    {/* Content */}
    <div className="relative text-center mt-5">
      <h1 className="text-5xl font-bold uppercase tracking-wide animate-fade-in">
        Welcome to GymFluencer
      </h1>
      <p className="mt-4 text-xl font-light animate-fade-in-delayed">
        Your ultimate fitness companion
      </p>
      <div className="mt-6 flex justify-center gap-4">
        <button className="bg-green-500 text-white py-3 px-6 rounded-lg text-lg font-medium hover:bg-green-600 transition duration-300">
          Get Started
        </button>
        <button className="bg-blue-500 text-white py-3 px-6 rounded-lg text-lg font-medium hover:bg-blue-600 transition duration-300">
          Learn More
        </button>
      </div>
    </div>
  </div>
);

export default Home;
