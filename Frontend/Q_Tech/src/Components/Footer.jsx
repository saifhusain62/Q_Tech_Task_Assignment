import React, { useState } from 'react';
import { 
  FaFacebookF, 
  FaTwitter, 
  FaInstagram, 
  FaLinkedinIn, 
  FaDribbble,
  FaYoutube
} from 'react-icons/fa';
import { MdWork } from 'react-icons/md';
import Logo from '/Logo 2.png'

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    console.log('Subscribed with:', email);
    setEmail('');
    alert('Subscribed successfully!');
  };

  const aboutLinks = [
    { name: 'Companies', href: '#' },
    { name: 'Pricing', href: '#' },
    { name: 'Terms', href: '#' },
    { name: 'Advice', href: '#' },
    { name: 'Privacy Policy', href: '#' },
  ];

  const resourceLinks = [
    { name: 'Help Docs', href: '#' },
    { name: 'Guide', href: '#' },
    { name: 'Updates', href: '#' },
    { name: 'Contact Us', href: '#' },
  ];

  const socialLinks = [
    { icon: FaFacebookF, href: '#', label: 'Facebook' },
    { icon: FaTwitter, href: '#', label: 'Twitter' },
    { icon: FaInstagram, href: '#', label: 'Instagram' },
    { icon: FaLinkedinIn, href: '#', label: 'LinkedIn' },
    { icon: FaDribbble, href: '#', label: 'Dribbble' },
    { icon: FaYoutube, href: '#', label: 'YouTube' },
  ];

  return (
    <footer className="bg-[#202430] text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          
          {/* Column 1 - Logo & Description */}
          <div className="lg:col-span-1">
            {/* Logo */}
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-[#4640DE] rounded-3xl flex items-center justify-center">
                <img src={Logo} alt="" />
              </div>
              <span className="text-2xl font-bold text-white">QuickHire</span>
            </div>
            
            {/* Description */}
            <p className="text-gray-400 text-sm leading-relaxed">
              Great platform for the job seeker that passionate about startups. 
              Find your dream job easier.
            </p>
          </div>

          {/* Column 2 - About */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6">About</h3>
            <ul className="space-y-4 list-none">
              {aboutLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 - Resources */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6">Resources</h3>
            <ul className="space-y-4 list-none">
              {resourceLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 - Newsletter */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6">
              Get job notifications
            </h3>
            <p className="text-gray-400 text-sm mb-6 leading-relaxed">
              The latest job news, articles, sent to your inbox weekly.
            </p>
            
            {/* Subscribe Form */}
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 px-4 py-3 bg-white text-gray-800 rounded-lg 
                         placeholder-gray-500 text-sm focus:outline-none 
                         focus:ring-2 focus:ring-[#4640DE] transition-all duration-200"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-[#4640DE] text-white font-semibold 
                         rounded-lg hover:bg-[#3830c4] transition-colors duration-200
                         text-sm whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="border-t border-gray-600/50"></div>
      </div>

      {/* Bottom Footer */}
      <div className="max-w-7xl mx-auto px-6 py-6">
        <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-4">
          
          {/* Copyright - Left Side */}
          <p className="text-gray-400 text-sm">
            2021 @ QuickHire. All rights reserved.
          </p>

          {/* Social Icons - Right Side */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social, index) => {
              const IconComponent = social.icon;
              return (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-gray-700/50 flex items-center 
                           justify-center text-gray-400 hover:bg-[#4640DE] 
                           hover:text-white transition-all duration-200"
                >
                  <IconComponent className="w-5 h-5" />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;