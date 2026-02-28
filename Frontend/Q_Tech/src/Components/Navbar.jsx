import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "/Logo 2.png"

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Find Jobs", path: "/find-jobs" },
    { name: "Browse Companies", path: "/companies" },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="w-full  bg-[#F8F8FD]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">

          {/* ===== Left Side: Logo + Nav Links ===== */}
          <div className="flex items-center gap-8">

            {/* Logo */}
            <Link to="/" className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg">
               <img src={Logo} alt="" />
              </div>
              <span className="text-xl font-bold tracking-tight text-gray-900">
                Quick<span className="">Hire</span>
              </span>
            </Link>

            {/* Desktop Nav Links */}
            <div className="hidden items-center gap-1 md:flex">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`rounded-md px-4 py-2 text-sm font-medium transition-colors duration-200
                    ${
                      isActive(link.path)
                        ? "text-[#4640DE] bg-[#4640DE]/5"
                        : "text-gray-600 hover:text-[#4640DE] hover:bg-gray-50"
                    }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* ===== Right Side: Auth Buttons ===== */}
          <div className="hidden items-center gap-3 md:flex">
            <Link
              to="/login"
              className="  border-r border-[#4640DE]/20 px-5 py-2 text-sm font-semibold text-[#4640DE] transition-all duration-200  hover:bg-[#4640DE]/5"
            >
              Login
            </Link>
            <Link
              to="/signup"
              className=" bg-[#4640DE] px-5 py-2 text-sm font-semibold text-white transition-all duration-200 hover:bg-[#3a35c4] hover:shadow-lg hover:shadow-[#4640DE]/25"
            >
              Sign Up
            </Link>
          </div>

          {/* ===== Mobile Menu Button ===== */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="inline-flex items-center justify-center rounded-md p-2 text-gray-600 transition-colors hover:bg-gray-100 hover:text-gray-900 md:hidden"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              /* X Icon */
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              /* Hamburger Icon */
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* ===== Mobile Menu ===== */}
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out md:hidden ${
          isMobileMenuOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="border-t border-gray-100 bg-gray-50/50 px-4 pb-4 pt-3">
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`rounded-md px-4 py-2.5 text-sm font-medium transition-colors
                  ${
                    isActive(link.path)
                      ? "bg-[#4640DE]/5 text-[#4640DE]"
                      : "text-gray-600 hover:bg-white hover:text-[#4640DE]"
                  }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="mt-4 flex flex-col gap-2 border-t border-gray-200 pt-4">
            <Link
              to="/login"
              onClick={() => setIsMobileMenuOpen(false)}
              className="rounded-lg border-2 border-[#4640DE]/20 px-5 py-2.5 text-center text-sm font-semibold text-[#4640DE] transition-all hover:border-[#4640DE] hover:bg-[#4640DE]/5"
            >
              Login
            </Link>
            <Link
              to="/signup"
              onClick={() => setIsMobileMenuOpen(false)}
              className="rounded-lg bg-[#4640DE] px-5 py-2.5 text-center text-sm font-semibold text-white transition-all hover:bg-[#3a35c4]"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;