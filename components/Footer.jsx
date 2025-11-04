export default function Footer() {
  return (
    <footer className="bg-[#273F2B] text-white py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-8 sm:space-y-12">
        {/* Top Row: Logo + Green Banner */}
        <div className="flex flex-col lg:flex-row justify-between items-center gap-4 sm:gap-6">
          {/* Logo */}
          <div>
            <img
              src="/images/logo.png"
              alt="Mowtown Logo"
              className="w-32 sm:w-36 lg:w-44 object-contain"
            />
          </div>

          {/* Green Banner */}
          <div className="bg-[#384E3C] flex flex-col sm:flex-row items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl max-w-2xl w-full text-center sm:text-left">
            <div>
              <img
                src="/images/leave.png"
                alt="Leaf Icon"
                className="w-10 h-10 sm:w-12 sm:h-12 object-contain mx-auto sm:mx-0"
              />
            </div>
            <div className="flex-1">
              <p className="text-sm sm:text-base leading-relaxed">
                At Mowtown, we dedicate 1% of our revenues to eliminating carbon
                dioxide.
              </p>
            </div>
            <div>
              <button className="relative overflow-hidden group flex items-center gap-2 border-2 border-white text-white px-3 py-2 rounded-lg transition-all duration-500 text-sm">
                <span className="relative z-10 flex items-center gap-2 transition-all duration-300 group-hover:text-[#fff]">
                  Learn More
                  <span className="p-2 bg-[#4A9F44] rounded-md">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 text-[#fff] rotate-45 group-hover:rotate-90 transition-transform duration-500"
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
        </div>

        {/* Middle Content: 3 Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-10 text-sm">
          <div>
            <h4 className="text-[18px] font-normal text-[#68EF3F] mb-3">
              Terms
            </h4>
            <ul className="space-y-4 text-wihte text-[16px] font-inter">
              <li>
                <a href="#" className="hover:text-white transition">
                  Legal teams
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Sales teams
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Financial teams
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Procurement teams
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  HR teams
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Operation teams
                </a>
              </li>
            </ul>
            <h4 className="text-[18px] font-normal text-[#68EF3F] mb-3 mt-3">
              Use cases
            </h4>
            <ul className="space-y-4 text-wihte text-[16px] font-inter">
              <li>
                <a href="#" className="hover:text-white transition">
                  Track your contracts
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Collaborate on contracts
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Risk visibility and control
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-[18px] font-normal text-[#68EF3F] mb-3 mt-3">
              Product
            </h4>
            <ul className="space-y-4 text-wihte text-[16px] font-inter">
              <li>
                <a href="#" className="hover:text-white transition">
                  Contract generation
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Dynamic templates
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Approval workflows
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Contract automation
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                 Contract negotiation
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  E-signature
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-white transition">
                  Contract archiving
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Contract analysis
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Security
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Pricing
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-[18px] font-normal text-[#68EF3F] mb-3 mt-3">
              Resources
            </h4>
            <ul className="space-y-4 text-wihte text-[16px] font-inter">
              <li>
                <a href="#" className="hover:text-white transition">
                  Read our blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Customer testimonials
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Ebooks
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Clauses templates
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                News
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  E-Documentation
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-white transition">
                  Status
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-[18px] font-normal text-[#68EF3F] mb-3 mt-3">
              Contact
            </h4>
            <ul className="space-y-4 text-wihte text-[16px] font-inter">
              <li>
                <a href="#" className="hover:text-white transition">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  We're recruiting
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Legal notice
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Press
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                Facebook
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Twitter
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-white transition">
                  Linkedin
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Youtube
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-7 text-sm sm:text-base font-inter text-white/50 text-center sm:text-left">
            <span>© 2025 Mowtown</span>
            <span>Terms & conditions</span>
            <span>Privacy</span>
            <span>🍪 Cookies</span>
        </div>
      </div>
    </footer>
  );
}
