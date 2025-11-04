import React from "react";

const Reward = () => {
  return (
    <div className="bg-white flex items-center justify-center flex-col py-20">
      <h1 className="font-bold font-inter text-[55px] text-[#26402B] text-center mb-5">Ready to take control of your<br/> contract management?</h1>
        <button className="relative overflow-hidden group flex items-center gap-2 border-2 border-[#26402B] text-[#26402B] px-2 py-1 rounded-lg transition-all duration-500">
            <span className="relative z-10 flex items-center gap-2 transition-all duration-300 group-hover:text-[#fff]">
              Learn More
              <span className="p-3 bg-[#4A9F44] rounded-md ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-[#fff] rotate-45 group-hover:rotate-90 transition-transform duration-500"
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
  );
};

export default Reward;
