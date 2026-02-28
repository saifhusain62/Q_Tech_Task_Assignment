import React from 'react';
import vodaphone from '/vodaphone.png';
import intel from '/intel.png';
import tesla from '/tesla.png';
import amd from '/amd.png';
import talkit from '/talkit.png';

const CompaniesSection = () => {
  // Just array of logo images - no id, no name
  const logos = [vodaphone, intel, tesla, amd, talkit];

  return (
    <section className="bg-white py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex justify-start mb-12">
          <h2 className="text-[18px] font-normal text-gray-400">
            Companies we helped grow
          </h2>
        </div>

        {/* 5 Grid Company Logos */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 lg:gap-8">
          {logos.map((logo, index) => (
            <div
              key={index}
              className="flex items-center justify-center"
            >
              <img
                src={logo}
                alt="company logo"
                className="max-w-full h-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompaniesSection;