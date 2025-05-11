import React from "react";

const HeroSection = ({ onGetStartedClick }) => {
  return (
    <div id="hero-section" className="hero-section flex flex-col justify-center items-center text-white text-center px-6">
      <h1 className="text-5xl font-bold mb-6 leading-tight">
        Welcome to SoftSell
      </h1>
      <p className="text-xl mb-6 max-w-lg">
        The best solution to increase your sales effortlessly.
      </p>
      <button
        onClick={onGetStartedClick}
        className="btn text-lg font-semibold hover:bg-yellow-500 transition-all duration-300"
      >
        Get Started
      </button>
    </div>
  );
};

export default HeroSection;