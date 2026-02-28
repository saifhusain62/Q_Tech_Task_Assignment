import React from 'react';
import { FiArrowRight } from 'react-icons/fi';
import NLogo from '/NLogo.png'
import StarLogo from '/StarLogo.png'
import DropBox from '/Dropbox.png'
import WaveLogo from '/WaveLogo.png'
import ThorLogo from '/ThorLogo.png'
import ULogo from '/ULogo.png'
import RedLogo from '/RedLogo.png'
import WebFlow from '/WebFlow.png'
import { Link } from 'react-router-dom';

const JobCard = ({ logo, title, company, location, tags }) => {
  const tagStyles = {
    'Full-Time': 'bg-green-100 text-green-600',
    'Marketing': 'border border-orange-400 text-orange-400',
    'Design': 'border border-purple-400 text-purple-400',
    'Part-Time': 'bg-blue-100 text-blue-600',
    'Business': 'border border-cyan-400 text-cyan-400',
    'Technology': 'border border-red-400 text-red-400',
  };

  return (
    <Link to="/form" className="block">
      <div className="bg-white p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow cursor-pointer">
        <div className="flex items-start gap-4">
          <img src={logo} alt={company} className="w-12 h-12 rounded-lg object-cover" />
          <div>
            <h3 className="font-semibold text-lg text-gray-800">{title}</h3>
            <p className="text-gray-500 text-sm">{company} • {location}</p>
          </div>
        </div>
        <div className="flex flex-wrap gap-2 mt-4">
          {tags.map((tag, index) => (
            <span
              key={index}
              className={`px-3 py-1 rounded-full text-sm font-medium ${tagStyles[tag] || 'bg-gray-100 text-gray-600'}`}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
};

const LatestJobs = () => {
  const jobs = [
    {
      logo: NLogo,
      title: 'Social Media Assistant',
      company: 'Nomad',
      location: 'Paris, France',
      tags: ['Full-Time', 'Marketing', 'Design'],
    },
    {
      logo: StarLogo,
      title: 'Social Media Assistant',
      company: 'Discord',
      location: 'Netlify, Paris France',
      tags: ['Full-Time', 'Design', 'Marketing'],
    },
    {
      logo: DropBox,
      title: 'Brand Designer',
      company: 'Dropbox',
      location: 'San Fransisco, USA',
      tags: ['Full-Time', 'Marketing', 'Design'],
    },
    {
      logo: WaveLogo,
      title: 'Brand Designer',
      company: 'Maze',
      location: 'San Fransisco, USA',
      tags: ['Full-Time','Marketing', 'Design', ],
    },
    {
      logo: ThorLogo,
      title: 'Interactive Developer',
      company: 'Terraform',
      location: 'Hamburg, Germany',
      tags: ['Full-Time', 'Marketing','Design', ],
    },
    {
      logo: ULogo,
      title: 'Interactive Developer',
      company: 'Udacity',
      location: 'Hamburg, Germany',
      tags: ['Full-Time', 'Marketing', 'Design'],
    },
    {
      logo: RedLogo,
      title: 'HR Manager',
      company: 'Packer',
      location: 'Lucern, Switzerland',
      tags: ['Full-Time','Marketing', 'Design', ],
    },
    {
      logo: WebFlow,
      title: 'HR Manager',
      company: 'Webflow',
      location: 'Lucern, Switzerland',
      tags: ['Full-Time','Marketing', 'Design', ],
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 py-12 bg-[#F8F8FD] rounded-md">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
          Latest <span className="text-blue-500">Jobs open</span>
        </h2>
        <Link
          to="/form"
          className="flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium transition-colors"
        >
          Show all jobs
          <FiArrowRight className="w-5 h-5" />
        </Link>
      </div>

      {/* Jobs Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {jobs.map((job, index) => (
          <JobCard key={index} {...job} />
        ))}
      </div>
    </section>
  );
};

export default LatestJobs;