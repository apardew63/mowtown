import React from "react";

const GreenSection = () => {
  return (
    <section
      className="py-16 bg-cover bg-center"
      style={{ backgroundImage: "url('/images/Teams.png')" }}
    >
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10 px-6 text-white bg-[#26402B] p-8 rounded-sm">
        {/* Text Section */}
        <div className="md:w-1/2 space-y-6">
          <h1 className="text-[36px] md:text-[42px] font-aeonik font-bold leading-tight">
            Evaneos reduces its legal and financial risks with Tomorro
          </h1>
          <p className="text-[18px] text-white">
            Tomorro accompanies Evaneos, a platform that connects travelers with
            local travel agencies around the world to offer tailor-made trips.
          </p>
        </div>

        {/* Image Section */}
        <div className="md:w-1/2 flex justify-center">
          <img
            src="/images/evaneos.png"
            alt="Evaneos"
            className="w-[208px] h-[58px] rounded-xl shadow-lg"
          />
        </div>
      </div>

      {/* Info Blocks */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-8 mt-10   ">
        {/* Challenge */}
        <div className="relative group bg-[#26402B] p-8 rounded-sm text-white overflow-hidden transition-all duration-800">
          {/* Expanding BG Animation */}
          <div className="absolute left-8 top-8 w-14 h-14 bg-white/10 rounded-full transition-transform duration-800 ease-out group-hover:scale-[20]"></div>

          <div className="relative flex items-center gap-4 mb-4 z-10">
            <div className="w-14 h-14 bg-white/10 rounded-full flex items-center justify-center">
              <img
                src="/images/icon1.png"
                alt="Challenge Icon"
                className="w-8 h-8 object-contain"
              />
            </div>
            <h2 className="text-[32px] font-bold font-aeonik">Challenge</h2>
          </div>

          <p className="relative z-10 text-gray-200 text-[18px] leading-relaxed">
            Florence wanted to automate some of the{" "}
            <span className="text-[#68EF3F]">
              redundant work to free up time for her
            </span>{" "}
            team and operational staff. Securing legal operations by providing
            alerts on due dates and{" "}
            <span className="text-[#68EF3F]">
              storing contracts in a single location,{" "}
            </span>
            was also part of her brief.
          </p>
        </div>

        {/* Solution */}
        <div className="relative group bg-[#26402B] p-8 rounded-sm text-white overflow-hidden transition-all duration-800">
          {/* Expanding BG Animation */}
          <div className="absolute left-8 top-8 w-14 h-14 bg-white/10 rounded-full transition-transform duration-800 ease-out group-hover:scale-[20]"></div>

          <div className="relative flex items-center gap-4 mb-4 z-10">
            <div className="w-14 h-14 bg-white/10 rounded-full flex items-center justify-center">
              <img
                src="/images/icon2.png"
                alt="Solution Icon"
                className="w-8 h-8 object-contain"
              />
            </div>
            <h2 className="text-[32px] font-bold font-aeonik">Solution</h2>
          </div>

          <p className="relative z-10 text-gray-200 text-[18px] leading-relaxed">
            Florence wanted to automate some of the{" "}
            <span className="text-[#68EF3F]">
              redundant work to free up time for her
            </span>{" "}
            team and operational staff. Securing legal operations by providing
            alerts on due dates and{" "}
            <span className="text-[#68EF3F]">
              storing contracts in a single location,{" "}
            </span>
            was also part of her brief.
          </p>
        </div>
      </div>
      {/* Hero / Testimonial Section */}
      <div className="relative max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10 px-6 text-white bg-[#26402B] p-8 rounded-sm mt-5 overflow-hidden group transition-all duration-500 shadow-md hover:shadow-lg">
        {/* Smooth Hover Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/0 via-black/10 to-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out"></div>

        {/* Text Section */}
        <div className="relative z-10 md:w-[90%] space-y-6">
          <p className="text-[18px] text-white italic leading-relaxed">
            "Having visibility over all contracts is a central issue. It's the
            only way to control and be alerted to expiring contracts, so that
            the service can prevent their automatic renewal."
          </p>

          {/* Profile Row */}
          <div className="flex items-center gap-4 mt-4">
            <img
              src="/images/user.png"
              alt="User"
              className="w-[48px] h-[48px] rounded-full border-2 border-[#68EF3F]/50"
            />
            <div className="text-[16px] leading-tight">
              <span className="text-[#68EF3F] font-semibold block">
                Florence Rivat
              </span>
              <span className="text-gray-300">
                Directrice Juridique d’Evaneos
              </span>
            </div>
          </div>
        </div>

        {/* Company Logo */}
        <div className="relative z-10 md:w-1/4 flex justify-center">
          <img
            src="/images/evaneos.png"
            alt="Evaneos"
            className="w-[208px] h-[58px] rounded-lg shadow-lg object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default GreenSection;
