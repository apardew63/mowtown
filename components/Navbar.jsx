"use client";
import { useState } from "react";

export default function Navbar() {
  const [productOpen, setProductOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);
  return (
    <nav className="fixed top-0 left-0 w-full bg-transparent z-50 font-inter mt-3">
      <div className="max-w-7xl rounded-[20px] mx-auto px-6 py-3 flex justify-between items-center bg-white">
        <div className="text-2xl font-bold text-[#4A9F44]">
          <img
            src="/images/logo.png"
            className="w-[276px] h-[60px]"
            alt="logo"
          />
        </div>
        <ul className="hidden md:flex space-x-[32px] text-[#273F2B] text-[16px] font-medium font-inter">
          <li
            className="relative"
            onMouseEnter={() => setProductOpen(true)}
            onMouseLeave={() => setProductOpen(false)}
          >
            <a href="#features" className="cursor-pointer flex items-center">
              Product <img src="/images/arrowdown.png" className="ml-3" />
            </a>
            {productOpen && (
              <ul className="absolute top-full left-0 bg-white shadow-md rounded-md py-2 w-40">
                <li>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                    Pricing
                  </a>
                </li>
              </ul>
            )}
          </li>
          <li
            className="relative"
            onMouseEnter={() => setSolutionsOpen(true)}
            onMouseLeave={() => setSolutionsOpen(false)}
          >
            <a href="#difference" className="cursor-pointer flex items-center">
              Solutions <img src="/images/arrowdown.png" className="ml-3" />
            </a>
            {solutionsOpen && (
              <ul className="absolute top-full left-0 bg-white shadow-md rounded-md py-2 w-40">
                <li>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                    Support
                  </a>
                </li>
              </ul>
            )}
          </li>
          <li className="relative">
            <a href="#difference" className="cursor-pointer flex items-center">
              Pricing
            </a>
          </li>
          <li
            className="relative"
            onMouseEnter={() => setResourcesOpen(true)}
            onMouseLeave={() => setResourcesOpen(false)}
          >
            <a href="#contact" className="cursor-pointer flex items-center">
              Resources <img src="/images/arrowdown.png" className="ml-3" />
            </a>
            {resourcesOpen && (
              <ul className="absolute top-full left-0 bg-white shadow-md rounded-md py-2 w-40">
                <li>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                    Docs
                  </a>
                </li>
                <li>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                    Blog
                  </a>
                </li>
              </ul>
            )}
          </li>
        </ul>

        <div className="flex flex-row">
          <button className="text-[#273F2B] px-4 py-2 rounded-lg hover:text-[#4A9F44] transition">
            Sign in
          </button>
          <button className="relative overflow-hidden group flex items-center gap-2 border-2 border-[#273F2B] text-[#273F2B] px-5 py-2 rounded-lg transition-all duration-500">
            <span className="relative z-10 flex items-center gap-2 transition-all duration-300 group-hover:text-white">
              Schedule a demo
              <span className="p-2 bg-[#4A9F44] rounded-md transition-transform duration-500 rotate-45 group-hover:rotate-90">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 10l7-7 7 7M12 3v18"
                  />
                </svg>
              </span>
            </span>

            <span className="absolute inset-0 bg-[#4A9F44] w-0 group-hover:w-full transition-all duration-500 ease-out origin-left"></span>
          </button>
        </div>
      </div>
    </nav>
  );
}
