// HeroSection.jsx
import React, { useState } from "react";
import { FiSearch, FiMapPin } from "react-icons/fi";
import backgroundimg from "/Pattern.png";
import manimg from "/man.png";

const HeroSection = () => {
  const [jobTitle, setJobTitle] = useState("");
  const [location, setLocation] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    alert(`Searching for "${jobTitle}" in "${location || "Florence, Italy"}"`);
  };

  return (
    <section className="w-full bg-[#F8F8FD] min-h-screen flex items-center overflow-hidden mt-[-50px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">

          {/* ========== LEFT SIDE ========== */}
          <div className="w-full lg:w-1/2 space-y-6">

            {/* Heading */}
            <h1 className="text-5xl sm:text-5xl md:text-6xl lg:text-[64px] font-semibold text-gray-900 leading-[1.15]">
              Discover <br /><span>more than</span>{" "}
              <br />
              <span className="text-blue-600">5000+ Jobs</span>
            </h1>

            {/* Blue Signature Line */}
            <div className="flex items-center gap-2">
              <div className="w-20 h-[3px] bg-blue-600 rounded-full"></div>
              <div className="w-4 h-[3px] bg-blue-600 rounded-full"></div>
              <div className="w-2 h-[3px] bg-blue-600 rounded-full"></div>
            </div>

            {/* Subtext */}
            <p className="text-gray-500 text-base sm:text-lg leading-relaxed max-w-lg">
              Great platform for the job seeker that searching for new career
              heights and passionate about startups.
            </p>

            {/* ========== SEARCH FORM ========== */}
            <form onSubmit={handleSearch} className="relative z-30">
              <div className="flex flex-col sm:flex-row items-stretch bg-white border border-white shadow-lg">

                {/* Job Title Input */}
                <div className="flex items-center gap-3 px-5 py-4 border-b sm:border-b-0 sm:border-r border-gray-200 flex-1">
                  <FiSearch className="text-gray-400 text-2xl flex-shrink-0" />
                  <input
                    type="text"
                    placeholder="Job title or keyword"
                    value={jobTitle}
                    onChange={(e) => setJobTitle(e.target.value)}
                    className="w-full outline-none text-gray-700 placeholder-gray-400 text-base bg-transparent"
                  />
                </div>

                {/* Location Input */}
                <div className="flex items-center gap-3 px-5 py-4 border-b sm:border-b-0 sm:border-r border-gray-200 flex-1">
                  <FiMapPin className="text-gray-400 text-2xl flex-shrink-0" />
                  <input
                    type="text"
                    placeholder="Florence, Italy"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="w-full outline-none text-gray-700 placeholder-gray-400 text-base bg-transparent"
                  />
                </div>

                {/* Search Button */}
                <button
                  type="submit"
                  className="bg-[#4640DE] hover:bg-[#3832c7] transition-colors duration-300 text-white font-semibold px-10 py-4 text-base cursor-pointer whitespace-nowrap rounded-none"
                >
                  Search my job
                </button>
              </div>
            </form>

            {/* Popular Tags */}
            <p className="text-sm text-gray-500">
              <span className="font-semibold text-gray-700">Popular :</span>{" "}
              <span className="hover:text-blue-600 cursor-pointer transition-colors">
                UI Designer
              </span>
              ,{" "}
              <span className="hover:text-blue-600 cursor-pointer transition-colors">
                UX Researcher
              </span>
              ,{" "}
              <span className="hover:text-blue-600 cursor-pointer transition-colors">
                Android
              </span>
              ,{" "}
              <span className="hover:text-blue-600 cursor-pointer transition-colors">
                Admin
              </span>
            </p>
          </div>

          {/* ========== RIGHT SIDE (Hidden on mobile) ========== */}
          <div className="hidden lg:flex w-full lg:w-1/2 justify-center items-end relative">

            {/* Background Shape - BIGGER SIZE */}
            <div className="relative w-[600px] h-[700px]">

              {/* Pattern image as background - extends beyond container */}
              <img
                src={backgroundimg}
                alt="Pattern background"
                className="absolute -inset-20 w-[calc(100%+160px)] h-[calc(100%+160px)] object-cover rounded-3xl z-0"
              />

              {/* Man Image - MOVED DOWN */}
              <img
                src={manimg}
                alt="Professional man"
                className="absolute top-20 left-1/2 -translate-x-1/2 w-[501px] h-[707px] object-cover object-top rounded-2xl z-20 drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;