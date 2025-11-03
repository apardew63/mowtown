export default function FeatureSection() {
  return (
    <section
      className="bg-[#26402B] text-white py-16 px-6 font-aeonik"
      style={{ backgroundImage: "url('/images/Features.png')" }}
    >
      <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Left Content */}
        <div className="flex-1 space-y-6">
          <h1 className="text-[40px] md:text-5xl font-bold leading-tight text-[#26402B]">
            Schools, Municipalities & <br /> General Contractors
          </h1>
          <p className="text-[#26402B] text-[18px] font-normal">
            Experience the Difference with{" "}
              Mowtown Outdoors
          </p>

          <p className="leading-[24px] text-[#26402B] text-[18px] font-normal">
            At Mowtown Outdoors, we understand that Landscaping Construction and
            Commercial Maintenance require time and effort to maintain a healthy
            and aesthetically pleasing outdoor space. That’s why we provide
            services for Schools, Municipalities, and Sub-Contractors tailored
            to your needs. Our family-owned business in Tulsa, Oklahoma has been
            serving satisfied clients since{" "}
            <span className="font-semibold text-white">1999</span>, with over 24
            years of dedication and excellence.
          </p>
          {/* CTA Button */}
          <button className="relative overflow-hidden group flex items-center gap-2 border-2 border-[#26402B] text-[#26402B] px-5 py-2 rounded-lg transition-all duration-500 mt-4">
            <span className="relative z-10 flex items-center gap-2 transition-all duration-300 group-hover:text-[#26402B]">
              Learn More
              <span className="p-3 bg-[#4A9F44] rounded-md transition-transform duration-500 group-hover:rotate-90">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-white transition-transform duration-500"
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

        {/* Right Image */}
        <div className="flex-1">
          <img
            src="/images/HeroFeature.png"
            alt="Mowtown Feature"
            className="w-full h-auto rounded-xl shadow-lg object-cover"
          />
        </div>
      </div>
      <div>

      </div>
    </section>
  );
}
