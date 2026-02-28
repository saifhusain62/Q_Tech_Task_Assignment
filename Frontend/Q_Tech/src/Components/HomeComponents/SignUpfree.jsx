import React from 'react';
import { Link } from 'react-router-dom';
import Rectangle from '/Rectangle.png';
import Dashboardimg from '/Dashboard.png';

const JobPostingSection = () => {
  return (
    <div className="w-full flex justify-center px-4 py-16">
      <div
        className="relative w-full max-w-7xl overflow-hidden"
        style={{
          backgroundImage: `url(${Rectangle})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        {/* Content Container */}
        <div className="relative flex flex-col md:flex-row items-end justify-between pl-8 md:pl-16 pt-8 md:pt-16">
          {/* Left Content Box */}
          <div className="flex flex-col items-start space-y-6 z-10 mb-8 md:mb-16 pb-8">
            <h1 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold">
              Start posting <br /> jobs today
            </h1>
            <p className="text-white/80 text-lg md:text-xl">
              Start posting jobs for only $10.
            </p>

            {/* Sign Up Button */}
            <Link to="/signup">
              <button className="bg-white text-[#4640DE] px-8 py-4 rounded-sm font-semibold text-lg hover:bg-gray-100 transition-all duration-300 hover:shadow-lg hover:scale-105 active:scale-95">
                Sign Up For Free
              </button>
            </Link>
          </div>

          {/* Right Image Box - touching the bottom */}
          <div className="relative z-10 flex items-end justify-center self-end pr-8 md:pr-16">
            <img
              src={Dashboardimg}
              alt="Professional at work"
              className="w-[564px] h-[346px] object-cover shadow-2xl block"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobPostingSection;