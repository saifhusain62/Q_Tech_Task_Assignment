import React from 'react';
import { HiArrowRight } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import RLogo from '/RLogo.png'
import Dropbox from '/Dropbox.png'
import Company from '/Company Logo.png'
import GreenLogo from '/GreenLogo.png'
import BlueLogo from '/BlueLogo.png'
import CanvaLogo from '/CanvaLogo.png'
import GoDaddyLogo from '/GodaddyLogo.png'
import TwitterLogo from '/Twitter.png'

const jobsData = [
  {
    id: 1,
    logo: RLogo,
    title: 'Email Marketing',
    company: 'Revolut',
    location: 'Madrid, Spain',
    description: 'Revolut is looking for Email Marketing to help team ma...',
    tags: [
      { label: 'Marketing', color: 'orange' },
      { label: 'Design', color: 'green' },
    ],
    type: 'Full Time',
  },
  {
    id: 2,
    logo: Dropbox,
    title: 'Brand Designer',
    company: 'Dropbox',
    location: 'San Francisco, USA',
    description: 'Dropbox is looking for Brand Designer to help team ma...',
    tags: [
      { label: 'Design', color: 'green' },
      { label: 'Business', color: 'purple' },
    ],
    type: 'Full Time',
  },
  {
    id: 3,
    logo: Company,
    title: 'Email Marketing',
    company: 'Pitch',
    location: 'Berlin, Germany',
    description: 'Pitch is looking for Product Designer to help team ma...',
    tags: [
      { label: 'Marketing', color: 'orange' },
      { label: 'Design', color: 'green' },
    ],
    type: 'Full Time',
  },
  {
    id: 4,
    logo: GreenLogo,
    title: 'Visual Designer',
    company: 'Blinklist',
    location: 'Granada, Spain',
    description: 'Blinklist is looking for Graphics Designer to help te...',
    tags: [
      { label: 'Design', color: 'green' },
    ],
    type: 'Full Time',
  },
  {
    id: 5,
    logo: BlueLogo,
    title: 'Product Designer',
    company: 'ClassPass',
    location: 'Manchester, UK',
    description: 'ClassPass is looking for Social Media Assistant to he...',
    tags: [
      { label: 'Marketing', color: 'orange' },
      { label: 'Design', color: 'green' },
    ],
    type: 'Full Time',
  },
  {
    id: 6,
    logo: CanvaLogo,
    title: 'Lead Designer',
    company: 'Canva',
    location: 'Ontario, Canada',
    description: 'Canva is looking for UI/UX Designer to help team ma...',
    tags: [
      { label: 'Design', color: 'green' },
      { label: 'Business', color: 'purple' },
    ],
    type: 'Full Time',
  },
  {
    id: 7,
    logo: GoDaddyLogo,
    title: 'Brand Strategist',
    company: 'GoDaddy',
    location: 'Marseille, France',
    description: 'GoDaddy is looking for HR Manager to help team...',
    tags: [
      { label: 'Marketing', color: 'orange' },
    ],
    type: 'Full Time',
  },
  {
    id: 8,
    logo: TwitterLogo,
    title: 'Data Analyst',
    company: 'Twitter',
    location: 'San Diego, US',
    description: 'Twitter is looking for Content Writer to help team ma...',
    tags: [
      { label: 'Technology', color: 'red' },
    ],
    type: 'Full Time',
  },
];

const tagStyles = {
  orange: 'bg-orange-100 text-orange-600',
  green: 'bg-emerald-100 text-emerald-600',
  red: 'bg-red-100 text-red-600',
  purple: 'bg-purple-100 text-purple-600',
};

const FeaturedJobs = () => {
  return (
    <section className="w-full py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-3xl font-bold text-gray-900">
            Featured <span className="text-blue-500">jobs</span>
          </h2>
          <Link
            to="/find-jobs"
            className="flex items-center gap-1 text-[#4640DE] font-semibold hover:underline transition"
          >
            Show all jobs
            <HiArrowRight className="text-lg" />
          </Link>
        </div>

        {/* 4x2 Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {jobsData.map((job) => (
            <Link
              to="/form"
              key={job.id}
              className="relative border border-gray-200 rounded-lg p-5 hover:shadow-lg transition-shadow flex flex-col gap-3 bg-white cursor-pointer"
            >
              {/* Full Time Badge */}
              <span
                className="absolute top-4 right-4 text-xs font-semibold px-3 py-1 rounded border"
                style={{ color: '#4640DE', borderColor: '#4640DE' }}
              >
                {job.type}
              </span>

              {/* Logo */}
              <div className="w-12 h-12 rounded-md flex items-center justify-center overflow-hidden">
                <img
                  src={job.logo}
                  alt={job.company}
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    const target = e.target;
                    target.style.display = 'none';
                    target.parentElement.innerHTML = `<span class="text-lg font-bold" style="color:#4640DE">${job.company.charAt(0)}</span>`;
                  }}
                />
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold text-gray-900 mt-1">
                {job.title}
              </h3>

              {/* Company & Location */}
              <p className="text-sm text-gray-500">
                {job.company} &middot; {job.location}
              </p>

              {/* Description */}
              <p className="text-sm text-gray-400 leading-relaxed">
                {job.description}
              </p>

              {/* Tags */}
              <div className="flex items-center gap-2 mt-auto pt-2">
                {job.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className={`text-xs font-medium px-3 py-1 rounded-full ${tagStyles[tag.color]}`}
                  >
                    {tag.label}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedJobs;