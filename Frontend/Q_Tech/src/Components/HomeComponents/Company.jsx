import React from 'react';
import { Link } from 'react-router-dom';
import { 
  FiArrowRight, 
  FiMonitor
} from 'react-icons/fi';
import { MdOutlineDesignServices } from "react-icons/md";
import { BiSignal5 } from "react-icons/bi";
import { AiOutlineSound } from "react-icons/ai";
import { HiBanknotes } from "react-icons/hi2";
import { FaCode } from "react-icons/fa6";
import { IoBagHandleOutline } from "react-icons/io5";
import { IoIosPeople } from "react-icons/io";

const CategorySection = () => {
  const categories = [
    {
      id: 1,
      name: 'Design',
      icon: MdOutlineDesignServices,
      jobs: 235,
      color: 'text-[#4640DE]',
      bgColor: 'bg-transparent',
      cardBg: 'bg-white',
      textColor: 'text-gray-900',
      jobsTextColor: 'text-gray-500',
    },
    {
      id: 2,
      name: 'Sales',
      icon: BiSignal5,
      jobs: 182,
      color: 'text-[#4640DE]',
      bgColor: 'bg-transparent',
      cardBg: 'bg-white',
      textColor: 'text-gray-900',
      jobsTextColor: 'text-gray-500',
    },
    {
      id: 3,
      name: 'Marketing',
      icon: AiOutlineSound,
      jobs: 156,
      color: 'text-white',
      cardBg: 'bg-[#4640DE]',
      textColor: 'text-white',
      jobsTextColor: 'text-white/80',
      isHighlighted: true,
    },
    {
      id: 4,
      name: 'Finance',
      icon: HiBanknotes,
      jobs: 198,
      color: 'text-[#4640DE]',
      bgColor: 'bg-transparent',
      cardBg: 'bg-white',
      textColor: 'text-gray-900',
      jobsTextColor: 'text-gray-500',
    },
    {
      id: 5,
      name: 'Technology',
      icon: FiMonitor,
      jobs: 312,
      color: 'text-[#4640DE]',
      bgColor: 'bg-transparent',
      cardBg: 'bg-white',
      textColor: 'text-gray-900',
      jobsTextColor: 'text-gray-500',
    },
    {
      id: 6,
      name: 'Engineering',
      icon: FaCode,
      jobs: 276,
      color: 'text-[#4640DE]',
      bgColor: 'bg-transparent',
      cardBg: 'bg-white',
      textColor: 'text-gray-900',
      jobsTextColor: 'text-gray-500',
    },
    {
      id: 7,
      name: 'Business',
      icon: IoBagHandleOutline,
      jobs: 143,
      color: 'text-[#4640DE]',
      bgColor: 'bg-transparent',
      cardBg: 'bg-white',
      textColor: 'text-gray-900',
      jobsTextColor: 'text-gray-500',
    },
    {
      id: 8,
      name: 'Human Resources',
      icon: IoIosPeople,
      jobs: 89,
      color: 'text-[#4640DE]',
      bgColor: 'bg-transparent',
      cardBg: 'bg-white',
      textColor: 'text-gray-900',
      jobsTextColor: 'text-gray-500',
    },
  ];

  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-10">
          {/* Left Side - Title */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900">
              Explore by{' '}
              <span className="text-blue-600">category</span>
            </h2>
          </div>

          {/* Right Side - Show All Link - UPDATED */}
          <Link
            to="/find-jobs"
            className="flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium transition-colors group"
          >
            Show all jobs
            <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Category Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => {
            const IconComponent = category.icon;
            return (
              <Link
                to={`/find-jobs?category=${category.name.toLowerCase().replace(' ', '-')}`}
                key={category.id}
                className={`${category.cardBg} ${category.isHighlighted ? '' : 'border border-gray-200'} p-6 hover:shadow-lg transition-all duration-300 cursor-pointer group ${category.isHighlighted ? 'hover:bg-[#3835b5]' : 'hover:border-blue-500'} block`}
              >
                {/* Icon Container */}
                <div
                  className={`w-14 h-14 ${category.bgColor} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                >
                  <IconComponent className={`w-7 h-7 ${category.color}`} />
                </div>

                {/* Category Name */}
                <h3 className={`text-xl font-semibold ${category.textColor} mb-2`}>
                  {category.name}
                </h3>

                {/* Jobs Available */}
                <span
                  className={`flex items-center gap-2 ${category.jobsTextColor} ${category.isHighlighted ? 'group-hover:text-white' : 'group-hover:text-blue-600'} transition-colors text-sm`}
                >
                  {category.jobs} jobs available
                  <FiArrowRight className="w-4 h-4" />
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;