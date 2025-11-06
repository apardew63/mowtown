"use client";
import { useState } from "react";

export default function Navbar({
  logo = "/images/logo.png",
  menuItems = [
    {
      label: "Product",
      href: "#features",
      dropdown: [
        { label: "Features", href: "#" },
        { label: "Pricing", href: "#" }
      ]
    },
    {
      label: "Solutions",
      href: "#difference",
      dropdown: [
        { label: "Services", href: "#" },
        { label: "Support", href: "#" }
      ]
    },
    {
      label: "Pricing",
      href: "#difference"
    },
    {
      label: "Resources",
      href: "#contact",
      dropdown: [
        { label: "Docs", href: "#" },
        { label: "Blog", href: "#" }
      ]
    }
  ],
  buttons = [
    { label: "Sign in", variant: "text", onClick: () => {} },
    { label: "Schedule a demo", variant: "primary", onClick: () => {} }
  ],
  className = ""
}) {
  const [dropdownStates, setDropdownStates] = useState({});
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleDropdown = (key) => {
    setDropdownStates(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  return (
    <nav className={`fixed top-0 left-0 w-full bg-transparent z-50 font-inter mt-3 ${className}`}>
      <div className="max-w-7xl rounded-[20px] mx-auto px-4 sm:px-6 py-3 flex justify-between items-center bg-white">
        <div className="text-2xl font-bold text-[#4A9F44]">
          <img
            src={logo}
            className="w-32 sm:w-36 lg:w-44 xl:w-[276px] h-auto"
            alt="logo"
          />
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-[#273F2B] p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        <ul className="hidden md:flex space-x-4 lg:space-x-8 text-[#273F2B] text-sm lg:text-base font-medium font-inter">
          {menuItems.map((item, index) => (
            <li
              key={index}
              className="relative"
              onMouseEnter={() => item.dropdown && toggleDropdown(`desktop-${index}`)}
              onMouseLeave={() => item.dropdown && toggleDropdown(`desktop-${index}`)}
            >
              <a href={item.href} className="cursor-pointer flex items-center">
                {item.label}
                {item.dropdown && <img src="/images/arrowdown.png" className="ml-3" />}
              </a>
              {item.dropdown && dropdownStates[`desktop-${index}`] && (
                <ul className="absolute top-full left-0 bg-white shadow-md rounded-md py-2 w-40">
                  {item.dropdown.map((dropdownItem, dropdownIndex) => (
                    <li key={dropdownIndex}>
                      <a href={dropdownItem.href} className="block px-4 py-2 hover:bg-gray-100">
                        {dropdownItem.label}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>

        {/* Desktop buttons */}
        <div className="hidden md:flex flex-row gap-2 lg:gap-4">
          {buttons.map((button, index) => (
            button.variant === 'text' ? (
              <button
                key={index}
                className="text-[#273F2B] px-3 lg:px-4 py-2 rounded-lg hover:text-[#4A9F44] transition text-sm lg:text-base"
                onClick={button.onClick}
              >
                {button.label}
              </button>
            ) : (
              <div key={index} className="relative overflow-hidden group flex items-center gap-2 border-2 border-[#273F2B] text-[#273F2B] px-3 lg:px-1 py-1 rounded-lg transition-all duration-500 text-sm lg:text-base cursor-pointer" onClick={button.onClick}>
                <span className="relative z-10 flex items-center gap-2 transition-all duration-300 group-hover:text-white">
                  {button.label}
                  <span className="p-2 bg-[#4A9F44] rounded-md px-3 py-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 text-white rotate-45 transition-transform duration-500 group-hover:rotate-90"
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
              </div>
            )
          ))}
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg rounded-b-[20px] mt-2">
            <ul className="flex flex-col space-y-2 p-4 text-[#273F2B] text-base font-medium">
              {menuItems.map((item, index) => (
                <li key={index}>
                  <a href={item.href} className="block py-2 hover:text-[#4A9F44] transition">
                    {item.label}
                  </a>
                </li>
              ))}
              {buttons.map((button, index) => (
                <li key={`button-${index}`} className={index === 0 ? "border-t pt-2" : ""}>
                  {button.variant === 'text' ? (
                    <button
                      className="w-full text-left py-2 hover:text-[#4A9F44] transition"
                      onClick={button.onClick}
                    >
                      {button.label}
                    </button>
                  ) : (
                    <div className="w-full relative overflow-hidden group flex items-center gap-2 border-2 border-[#273F2B] text-[#273F2B] px-4 py-2 rounded-lg transition-all duration-500 cursor-pointer" onClick={button.onClick}>
                      <span className="relative z-10 flex items-center gap-2 transition-all duration-300 group-hover:text-white">
                        {button.label}
                        <span className="p-2 bg-[#4A9F44] rounded-md transition-transform duration-500 rotate-90 group-hover:rotate-45">
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
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}
